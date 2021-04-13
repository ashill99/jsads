class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return ` Your full name is ${this.firstName} ${this.lastname}`;
    }
    markLate(){
        this.tardies += 1;
        return `${this.firstname} ${this.lastname} has been late ${this.tardies} times`
    }
    addScore(score){
        this.scores.push(score);
        return this.scores
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a,b){return a+b})
        return sum/this.scores.length;
    }
    static EnrollStudents(){
        return "ENROLLING STUDENTS!"
    }

}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2)


// method to create new objects MUST be called constructor 

// class keyword creates a constant so u can not redefine it!