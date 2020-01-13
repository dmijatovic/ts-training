
/**
 * DO some stats over footbal.csv formatted data.
 * The data should be array of matches with following
 * values: match date, home team, away team, home team goals, away team goals,
 * match result (H-home win, A-away win, D-draw), referee
 */

import {MatchResult,MatchRecord} from './FootbalTypes'

export class FootballAnalyzer{

  clubWins(clubName:string,games:MatchRecord[]):number{
    let winCnt=0

    //use OF not IN to get element
    //instead of index!!!
    for (let game of games){
      //home team win
      if (game[1]===clubName && game[5]===MatchResult.HomeWin) winCnt++
      //away team win
      if (game[2]===clubName && game[5]===MatchResult.AwayWin) winCnt++
    }
    return winCnt
  }
}