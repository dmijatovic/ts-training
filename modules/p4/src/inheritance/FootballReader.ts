/**
 * Football Reader reads csv file
 * using basis read from CsvFileReaderAbs abstract class
 *
 */
import {CsvFileReaderAbs} from "./CsvFileReaderAbs"
import {MatchRecord,MatchResult} from "../FootbalTypes"
import {parseDate} from '../utils/parseDate'

export class FootballReader extends CsvFileReaderAbs<MatchRecord>{
  parseRow(row:string[]):MatchRecord{
    return [
      parseDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ]
  }
}