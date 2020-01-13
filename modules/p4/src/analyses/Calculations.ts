
import { MatchRecord, MatchResult } from "../FootbalTypes"
import { Calculation } from "./Interfaces"

/**
 * This class count number of wins for specified club.
 */
export class CountWins implements Calculation{
  constructor(public clubName:string){}
  run(games:MatchRecord[]):string{
    let winCnt=0
    for (let game of games){
      //home team win
      if (game[1]===this.clubName && game[5]===MatchResult.HomeWin) winCnt++
      //away team win
      if (game[2]===this.clubName && game[5]===MatchResult.AwayWin) winCnt++
    }
    console.log("CountWins...run")
    return `${this.clubName} won ${winCnt} games!`
  }
}

/**
 * This class count number of wins for specified club.
 */
export class CountGoalsScored implements Calculation{
  constructor(public clubName:string){}
  run(games:MatchRecord[]):string{
    let goalCnt=0
    for (let game of games){
      //home team win
      if (game[1]===this.clubName) goalCnt+=game[3]
      //away team win
      if (game[2]===this.clubName) goalCnt+=game[4]
    }
    console.log("CountGoalsScored...run")
    return `${this.clubName} scored ${goalCnt} goals!`
  }
}

