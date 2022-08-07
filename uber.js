// "Calculating Uber Price Using Javascript Class"
  
class Uber {
    static BaseFare = 10;
    static CostPerMile = 2;
    static CostPerMinute = 1;
    static BookingFee = 6;
    constructor(time=1,mile=1){
        this.time=time;
        this.mile=mile;
    }
    totalPrice(time=this.time , mile=this.mile){
        console.log(`the total price is ${(Uber.BaseFare)+(Uber.BookingFee)+((Uber.CostPerMinute)*time)+((Uber.CostPerMile)*mile)} only`);
    }
}
let bike = new Uber();
bike.totalPrice(15,10); //the total price is 51 only
bike.totalPrice(10,10); //the total price is 46 only