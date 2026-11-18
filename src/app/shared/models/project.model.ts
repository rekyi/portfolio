import { Skill } from './skill.model';

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  duration?: string;
  technologies: Skill[];
  about: string;
  workProcess?: string;
  groupWork?: string;
  learnings?: string;
  image?: ProjectImage;
  liveUrl?: string;
  githubUrl?: string;
  isOngoing?: boolean;
}
