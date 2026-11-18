export interface SkillIcon {
  src: string;
  width: number;
  height: number;
}

export interface Skill {
  name: string;
  icon?: SkillIcon;
}
