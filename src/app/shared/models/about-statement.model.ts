export type AboutStatementId = 'location' | 'remote' | 'relocate';

export interface AboutStatement {
  id: AboutStatementId;
  icon: string;
  iconWidth: number;
  iconHeight: number;
  text: string;
}
