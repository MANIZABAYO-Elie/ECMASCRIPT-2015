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
     this.width = height
     this.height = width
     this.color = color   
    }
     get Area(){
        return this.findArea()
        
    }
    findArea(){
        return this.width*this.height
    }

}
const  myRectangle1 = new Rectangle(25,50,)
console.log(myRectangle1.Area);

