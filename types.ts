
export interface Question {
  question: string;
  options: string[];
  correct_answer: string;
  id: string; // Add an ID for key purposes
}

export enum GameMode {
  SINGLE = "single",
  VERSUS_DESKTOP = "versus_desktop",
  VERSUS_MOBILE = "versus_mobile",
  VERSUS_SPEED_DESKTOP = "versus_speed_desktop",
  VERSUS_SPEED_MOBILE = "versus_speed_mobile",
}

export enum PlayerID {
  PLAYER1 = "p1",
  PLAYER2 = "p2",
}

export interface WrongAnswer extends Question {
  // Can extend with user's answer if needed in future
}