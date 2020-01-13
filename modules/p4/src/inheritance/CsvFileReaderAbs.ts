import fs from 'fs'

import {MatchResult, MatchRecord} from '../FootbalTypes'

/**
 * Generic class passing DataType from child classes.
 * It is common use to define generic data type as <T>
 */
export abstract class CsvFileReaderAbs<DataType>{
  data:DataType[]=[]

  abstract parseRow(row:string[]):DataType

  constructor(public filename:string){}
  read():boolean{
    const rawData = fs.readFileSync(this.filename,{encoding:'utf-8'})
    this.parse(rawData)
    return true
  }
  parse(rawData:string):void{
    this.data = rawData
      .split('\n')
      .map((row:string):string[] => {
        const rec = row.split(",")
        return rec
      })
      .map(this.parseRow)
  }
}