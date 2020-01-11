
/**
 * Interfaces can have complex types as functions!
 * Best use of interface is to sageguard the parameters passed into function.
 * This way we insure params comply with fn expectations.
 */

interface Vehicle{
  name: string;
  year: number;
  broken: boolean;
  today: Date;
  summary():string
}

const printVehicle = (vehicle: Vehicle):void => {
  console.log(`
    This ${vehicle.name} is made in
    ${vehicle.year} and is ${vehicle.broken ? "broken" : " not broken"}.
  `)
}

const oldHonda = {
  name:'civic',
  year: 2000,
  broken: true,
  today: new Date(),
  summary():string {
    return `This is ${this.name}, born in ${this.year}.`
  },
  additionalProp:'this is not required by interface'
}

// note that oldHonda can have additional properties
printVehicle(oldHonda)
