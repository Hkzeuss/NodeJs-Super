// Tao mot lop Car voi thuoc tinh brand va year, viet phuong thuc hien thi thong tin xe
class Car { // class la tu khoa de khai bao mot lop doi tuong
    constructor (brand, year) { // constructor la phuong thuc khoi tao doi tuong (method)
        this.brand = brand; // brand la thuoc tinh cua doi tuong (property)
        this.year = year;   // year la thuoc tinh cua doi tuong (property)
    }
    introduce() {   // constructor la phuong thuc hien thi thong tin xe (method)
        console.log(`This car ${this.brand} made it to ${this.year}`);  // Hien thi thong tin xe 
    }
}
// Khoi tao mot object xe moi
const myCar = new Car("Toyota", 2020);  // myCar la mot object cua lop Car voi thuoc tinh brand va year 

// Goi phuong thuc hien thi thong tin xe
myCar.introduce();  // myCar se goi phuong thuc introduce() de hien thi thong tin xe