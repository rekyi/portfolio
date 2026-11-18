export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface Project {
  title: string;
  duration?: string;
  technologies: string[];
  about: string;
  workProcess?: string;
  groupWork?: string;
  learnings?: string;
  image?: ProjectImage;
  liveUrl?: string;
  githubUrl?: string;
}
