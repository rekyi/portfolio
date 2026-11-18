import { Project } from '../../../../shared/models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'DA Bubble',
    duration: '3 weeks',
    technologies: ['Angular', 'TypeScript', 'Firebase'],
    about:
      'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    workProcess:
      'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
    groupWork:
      'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
    image: { src: '/images/projects/da_bubble.webp', width: 1200, height: 800 },
  },
  {
    title: 'Sharkie',
    duration: '5 weeks',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    about:
      'A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
    workProcess:
      'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
    learnings:
      'As someone who is always trying to learn new technologies, you may have enjoyed working on this project because it allowed you to delve deep into a particular technology. Give details, such as the name of the framework or language you mean.',
    image: { src: '/images/projects/sharkie.webp', width: 1200, height: 800 },
  },
  {
    title: 'Join',
    duration: '2 months',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    about:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    workProcess:
      'How do you keep your code clean and maintainable? Have you broken the project down into reusable modules or components? Focus on documentation, naming files, variables, classes and testing.',
    groupWork:
      'How many people were in the team and what was your role? Describe your tasks in 1-2 sentences, for example: login form, dashboard or chat functionality. What technologies did you use? It is nice to mention good teamwork and cooperation.',
    image: { src: '/images/projects/join.webp', width: 1200, height: 800 },
  },
  {
    title: 'Ongoing Project',
    technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Vue.js', 'React'],
    about:
      'What are you currently working on and what features are you implementing? What is the key to success in your projects? You can mention good planning, code quality and execution. Show a desire to learn new technologies and continually improve your skills.',
  },
];
