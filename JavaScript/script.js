// class Car{
//     constructor(brand, speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         console.log(this.brand + " - " + this.speed+"kmps");
//     }
// }

// let car1 = new Car("BMW", 150)
// let car2 = new Car("Maruti",120)

class Student{
    constructor(name, rollno)
    {
        this.name = name
        this.rollno = rollno
    }
    introduce(){
        console.log(this.name + " - " + this.rollno);
    }
};


let Student1 = new Student("Akshat", 8)
let Student2 = new Student("Kushagara", 6);
let Student3 = new Student("Satyam", 7);
