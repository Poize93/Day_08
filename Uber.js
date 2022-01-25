class Uber{
    constructor( fixedCharge, ChrgPrKM , Distance , SurgePrice){
        this.fixedCharge=fixedCharge
        this.ChrgPrKM=ChrgPrKM
        this.Distance=Distance
        this.SurgePrice=SurgePrice
    }

    getPrice(){
        var out
        out=(this.fixedCharge+this.ChrgPrKM*this.Distance)*this.SurgePrice
    return out
    }
}

var U=new Uber(10,6,30,1.3)
console.log(U.getPrice())