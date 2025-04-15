console.log(__filename)
console.log(__dirname)
console.log(require)



function sayHello(name) {
    console.log('Hello ' + name);
}

sayHello("Sourav");

module.exports = sayHello ; 