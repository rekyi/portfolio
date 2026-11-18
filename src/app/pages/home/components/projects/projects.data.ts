import { Project } from '../../../../shared/models/project.model';
import { Skill } from '../../../../shared/models/skill.model';

const PLACEHOLDER_TECHNOLOGIES: Skill[] = [
  { name: 'HTML', icon: { src: '/icons/desktop_html.svg', width: 54, height: 60 } },
  { name: 'CSS', icon: { src: '/icons/desktop_css.svg', width: 54, height: 60 } },
  { name: 'JavaScript', icon: { src: '/icons/desktop_js.svg', width: 60, height: 60 } },
];

export const PROJECTS: Project[] = [
  {
    title: 'DA Bubble',
    duration: '3 weeks',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    about:
      'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    workProcess:
      'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
    groupWork:
      'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
    image: { src: '/images/projects/project_card_placeholder_1.webp', width: 600, height: 400 },
    liveUrl: 'blub',
    githubUrl: 'blub',
  },
  {
    title: 'Sharkie',
    duration: '5 weeks',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    about:
      'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
    workProcess:
      'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
    learnings:
      'As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.',
    image: { src: '/images/projects/project_card_placeholder_2.webp', width: 600, height: 400 },
    liveUrl: 'blub',
    githubUrl: 'blub',
  },
  {
    title: 'Join',
    duration: '2 months',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    about:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    workProcess:
      'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
    groupWork:
      'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
    image: { src: '/images/projects/project_card_placeholder_3.webp', width: 600, height: 400 },
    liveUrl: 'blub',
    githubUrl: 'blub',
  },
  {
    title: 'Ongoing Project',
    technologies: PLACEHOLDER_TECHNOLOGIES,
    isOngoing: true,
    about:
      'What are you currently working on and what features are you implementing? What is the key to success in your projects? You can mention good planning, code quality and execution. Show a desire to learn new technologies and continually improve your skills.',
    image: { src: '/images/projects/project_card_placeholder_4.webp', width: 600, height: 400 },
  },
];
