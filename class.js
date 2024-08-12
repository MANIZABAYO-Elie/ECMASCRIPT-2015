class rectangle  {
    constructor(height,width) {
       this.height = height 
       this.width = width 
    }
   get  area(){
        return this.calArea()
    }
    calArea(){
        return this.height*this.width 
    }
}
const areaOfRectangle = new rectangle(20,40)
console.log(areaOfRectangle.area);

// 
class polygon  {
    constructor(height,width) {
        this.area = height*width;

    }
}
class Rectangle {
    constructor(height,width,color) {
     this.width = 50
     this.height = 25
     this.color = "red"   
    }
}
let myRectangle = new Rectangle()
console.log(myRectangle);