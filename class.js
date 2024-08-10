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
const crossArea = new polygon(4,10)
  console.log(crossArea.area);
  class name {
    constructor(parameters) {
        
    }
  }