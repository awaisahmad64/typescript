// add optional value mileage? : number
// if we defined a type, we must declare, in optional, declare not matter
let car: { type: string; model: string; year: number; mileage?: number } = {
  type: 'Toyta',
  model: 'Corolla',
  year: 2008,
};
car.mileage = 26400;

console.log(car);
