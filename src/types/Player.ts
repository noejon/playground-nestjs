export type Position = 'GOALKEEPER' | 'DEFENDER' | 'MIDFIELDER' | 'FORWARD';

export interface Player {
  id: number;
  position: Position;
  name: string;
  email: string;
}
