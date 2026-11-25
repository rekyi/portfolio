/** Identifier of an about statement. */
export type AboutStatementId = 'location' | 'remote' | 'relocate';

/** Statement typed out by the typewriter animation in the about section. */
export interface AboutStatement {
  /** Unique identifier. */
  id: AboutStatementId;
  /** Absolute path of the icon shown next to the text. */
  icon: string;
  /** Intrinsic icon width in px. */
  iconWidth: number;
  /** Intrinsic icon height in px. */
  iconHeight: number;
  /** Translation key of the typed text. */
  textKey: string;
}
