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
class name {
    constructor(name) {
    this.name = name
        }
    speak(){
        return `${this.name} backs`
    }
}
const dogSound = new name("dog")
console.log(dogSound);