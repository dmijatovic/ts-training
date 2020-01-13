import fs from 'fs'

export class CsvFileReader{
  data:string[][]=[]
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
  }
}