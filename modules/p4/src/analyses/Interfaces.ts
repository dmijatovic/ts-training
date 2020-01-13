
import {MatchRecord} from "../FootbalTypes"

/**
 * Interface to run analyzes.
 * Each anayses class needs to implement
 * this method - so we can compose :-)
 */
export interface Calculation {
  run(games:MatchRecord[]): string
}

export interface OutputTarget{
  print(report:string):void
}

