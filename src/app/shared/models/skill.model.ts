/** Icon of a skill with its intrinsic size for the `width`/`height` attributes. */
export interface SkillIcon {
  /** Absolute asset path. */
  src: string;
  /** Intrinsic width in px. */
  width: number;
  /** Intrinsic height in px. */
  height: number;
}

/** Technology shown in the skills section or in a project's tech stack. */
export interface Skill {
  /** Display name. */
  name: string;
  /** Optional icon; without it only the name is shown. */
  icon?: SkillIcon;
}
