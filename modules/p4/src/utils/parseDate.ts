
export enum DateFormat{
  DDMMYYYY='DD/MM/YYYY',
  MMDDYYYY='MM/DD/YYYY',
  YYYYMMDD='YYYY/MM/DD',
}

export function parseDate(datestring:string, format:DateFormat=DateFormat.DDMMYYYY):Date{
  //expected date string DD/MM/YYYY
  const dateArray = datestring.split("/")

  let dateStr = `${parseInt(dateArray[0])}-${parseInt(dateArray[1])}-${parseInt(dateArray[2])}`

  if (format === DateFormat.DDMMYYYY){
    dateStr = `${parseInt(dateArray[2])}-${parseInt(dateArray[1])}-${parseInt(dateArray[0])}`
  } else if(format===DateFormat.MMDDYYYY){
    dateStr = `${parseInt(dateArray[2])}-${parseInt(dateArray[0])}-${parseInt(dateArray[1])}`
  }

  const date = new Date(dateStr)
  return date
}