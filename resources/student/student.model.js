class Student {
    constructor(cne,cin,name,nickname,age){
        this.cne = cne;
        this.cin = cin;
        this.name = name;
        this.nickname = nickname;
        this.age = age;
    }

    getCne(){
        return this.cne;
    }
    getCin(){
        return this.cin;
    }
    getName(){
        return this.name;
    }
    getNickname(){
        return this.nickname;
    }
    getAge(){
        return this.age;
    }
}

module.exports = Student;