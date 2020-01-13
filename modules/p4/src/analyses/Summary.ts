
import {Calculation, OutputTarget} from "./Interfaces"
import {MatchRecord, MatchResult} from "../FootbalTypes"

export class Summary{
  constructor(public analyzer:Calculation, public report:OutputTarget){}

  data:string="";

  createReport(games:MatchRecord[]):boolean{
    this.data = this.analyzer.run(games)
    return true
  }

  publish():void{
    this.report.print(this.data)
  }
  /**
   * Static reporting method
   * @param games the array of games records
   * @param calc the calculation class with run method
   * @param output the output metod
   */
  static publishReport(games:MatchRecord[], calc:Calculation, output:OutputTarget){
    const resp = calc.run(games)
    output.print(resp)
  }
}

export class SummaryChain{
  constructor(public analyzer:Calculation, public report:OutputTarget){}

  data:string="";

  createReport(games:MatchRecord[]):SummaryChain{
    this.data = this.analyzer.run(games)
    return this
  }

  publish():SummaryChain{
    this.report.print(this.data)
    return this
  }
  /**
   * Static reporting method
   * @param games the array of games records
   * @param calc the calculation class with run method
   * @param output the output metod
   */
  static publishReport(games:MatchRecord[], calc:Calculation, output:OutputTarget){
    const resp = calc.run(games)
    output.print(resp)
  }
}