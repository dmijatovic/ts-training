

export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

export type MatchRecord = [Date,string,string,number,number, MatchResult, string]
