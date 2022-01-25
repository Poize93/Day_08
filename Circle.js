class Circle{
    constructor(radius  , color){
        this.radius=radius
        this.color=color
    }
    
    getCircumfrance(r){
        return 2*r*Math.PI
    }
   
   getArea(r){
       return Math.PI *(r**2)
   }
   
   toString( r,c){
       return(r.toString())
   }
   
   setColor(c){
       this.color=c
       return this.color
   }
   
   getColor(){
       
       return this.color
   }
   
   setRadius(r){
       this.radius=r
       return this.radius
   }
   
   getRadius(){
       return this.radius
   }
   
   circle(r){
       return (r)
   }
   
   circle(r,c){
       return (r , c)
   }

    circle(){
       return (r , c)
   }
   
}

var crcl=new Circle(154 ,"pink" )


console.log(crcl.circle(3,"black"))
