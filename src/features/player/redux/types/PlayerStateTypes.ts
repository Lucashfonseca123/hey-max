export interface IStages {
  id: number;
  picture: string;
  alternative: string[];
  answerCorrect: string;
}

export interface IMenuState {
  menus: IMenu[];
}

export interface IMenu {
  id: number;
  name: string;
  image: string;
  stage: IStages[];
}

export interface IPlayerState {
  idMenu: number;
  idStage: number;
  picture: string;
  alternative: string[];
  answerCorrect: string;
}
