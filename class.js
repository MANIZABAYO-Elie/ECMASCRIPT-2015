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
class polygon {
    
}
  