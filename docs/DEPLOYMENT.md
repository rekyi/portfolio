# Deployment

Notes on hosting rekyi.de: contact form, build and upload, routing and maintenance mode.

## Contact form

The form sends its data to `public/send-mail.php`, which needs a PHP-enabled web server.

1. Copy `public/mail-config.example.php` to `public/mail-config.php`.
2. Fill in the values:
   - `sender` – an address on the own domain (e.g. `mail@rekyi.de`)
   - `recipient` – the inbox that receives the messages
   - `allowedOrigins` – the domains allowed to call the script, including `http://localhost:4200` for local testing
3. `MAIL_ENDPOINT` in `src/app/core/services/contact.ts` points to the live script, so the form can also be tested locally with `npm start`, as long as `send-mail.php` and `mail-config.php` are on the server.

`mail-config.php` is listed in `.gitignore` and never ends up in the repository.

If the dev server runs on a port other than `4200`, add that origin to `allowedOrigins`, otherwise the script blocks the request.

## Build and upload

1. Run `npm run build`.
2. Upload the **contents** of `dist/portfolio/browser/` to the web root (`public_html`), not the `browser` folder itself.
3. Make sure `mail-config.php` is on the server as well. It is copied from `public/` into the build automatically.
4. Never empty `public_html` completely: the subdomain projects live in subfolders there.

## Routing

`public/.htaccess` (Apache) serves existing files and folders directly and routes everything else to `index.html`, so routes like `/legal-notice` also work after a reload. The rules only apply to `rekyi.de` and `www.rekyi.de`. Requests to subdomains are left untouched.

HTTPS redirects are handled by the hosting panel, not by `.htaccess`.

## Maintenance mode

| Action  | How                                                       |
| ------- | --------------------------------------------------------- |
| Enable  | Create an empty file `maintenance.on` in `public_html`    |
| Disable | Delete `maintenance.on`                                   |

While the file exists, every request to `rekyi.de` returns HTTP 503 with `maintenance.html`. Subdomains are not affected.

`maintenance.on` is listed in `.gitignore`, so a deployment can never switch maintenance mode on by accident. Uploads don't delete it either, so maintenance mode stays active across deployments until the file is removed.

## Subdomain projects

Projects such as `pokedex.rekyi.de` and `hollowbloom.rekyi.de` live in subfolders of `public_html` with the same name. Each subdomain needs its own SSL certificate in the hosting panel. Link projects only via their subdomain, never via `rekyi.de/<folder>`.
