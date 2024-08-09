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
class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  //
  class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
 
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();