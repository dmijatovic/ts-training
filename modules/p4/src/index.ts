import fs from 'fs'

import {FootballReader as FootballInherited, FootballReader} from './inheritance/FootballReader'
import {CsvFileReader} from "./interface/CsvFileReader"
import {FootballReader as FootballInterface} from "./interface/FootballReader"
import {FootballAnalyzer} from "./Analyzer"

import { Summary, SummaryChain } from "./analyses/Summary"
import { CountWins, CountGoalsScored } from "./analyses/Calculations"
import { ConsoleLog } from "./analyses/Output"

// Perform count using class inheritance approach
const csvData = new FootballInherited("./data/football.csv")

if (csvData.read()){
  const ana = new FootballAnalyzer()
  const manUtd = ana.clubWins("Man United",csvData.data)
  console.log("Man United wins inherited...", manUtd)
}

// perform count using interface approach with data
const csvReader = new CsvFileReader("./data/football.csv")
const football = new FootballInterface(csvReader)

if (football.load()){
  const ana = new FootballAnalyzer()
  const manUtd = ana.clubWins("Man United",football.games)
  console.log("Man United wins using interface...", manUtd)
}

// perform analyses using composition approach (via interface

const count = new CountWins("Man United")
const output = new ConsoleLog()
const rep = new Summary(count,output)
// create report
if (rep.createReport(football.games)){
  rep.publish()
}

// different method where all info is passed into STATIC method
Summary.publishReport(football.games,new CountGoalsScored("Man United"),output)

// using chainable class - each method returns this so it can be chained
const sum = new SummaryChain(new CountWins("Arsenal"),output)
sum.createReport(football.games)
  .publish()







