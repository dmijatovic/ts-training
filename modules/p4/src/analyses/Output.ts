import {OutputTarget} from "./Interfaces"

export class ConsoleLog implements OutputTarget{
  print(report:string):void{
    console.log(report)
  }
}

export class HtmlDiv implements OutputTarget{
  html:string=""
  print(report:string):void{
    this.html = report
  }
}