function User(name) {
    this.name=name;
    this.sayHello= () => {
        console.log("Hi", this.name);
    }
}

var asd = new User("Asd");
asd.sayHello();