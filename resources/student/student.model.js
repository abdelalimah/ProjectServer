class Student {
    constructor(id,name,nickname,age){
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.age = age;
    }

    getId(){
        return this.id;
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