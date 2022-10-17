export interface IElevatorState {
  target: number,
  inWork: boolean,
  currFloorBeforeStart: number,
}

export type TElevatorState = 'FREE' | 'WORK' | 'OPEN';

export const FREE_STATE: TElevatorState = 'FREE';
export const WORK_STATE: TElevatorState = 'WORK';
export const DOOR_OPEN_STATE: TElevatorState = 'OPEN';
