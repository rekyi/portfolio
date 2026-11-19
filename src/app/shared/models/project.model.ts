import { Skill } from './skill.model';

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  titleKey: string;
  durationKey?: string;
  technologies: Skill[];
  aboutKey: string;
  workProcessKey?: string;
  groupWorkKey?: string;
  learningsKey?: string;
  images?: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  isOngoing?: boolean;
}
