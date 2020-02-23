var a = 123;

function f() {
    console.log('a= ', a);
    var a = 1;

    console.log('a = ', a);
}

console.log("a = ", a);

f();


console.log("a == ", a);


function hoisting() {
    var a;
    console.log('a = ', a);
    a = 1;
    console.log('a = ', a);
}
