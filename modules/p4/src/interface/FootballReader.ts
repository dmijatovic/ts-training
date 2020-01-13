import {MatchResult,MatchRecord} from '../FootbalTypes'
import {parseDate} from '../utils/parseDate'

export interface DataReader{
  read():void
  data:string[][]
}

export class FootballReader{
  games:MatchRecord[]=[]
  constructor(public reader:DataReader){}
  load():boolean{
    this.reader.read()
    this.games = this.reader.data
      .map((row:string[]):MatchRecord=>{
        return [
          parseDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
      })
    return true
  }
}