class introduce{
    constructor(name, age){
        this.name = name ? name : 0;

        this.age = age ? age: 0;

    }
    introduce() {

        return   this.name + this.age
      
    }

    


}
    
const student = new introduce("boloroo", 18)
console.log(student.introduce()); // "Hi, I'm Sara and I'm 20 years old."
