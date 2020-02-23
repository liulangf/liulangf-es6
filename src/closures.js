

function makeAdder(x) {
    return y => {
        return x + y;
    };
}

let add5 = makeAdder(5);
let add7 = makeAdder(7);

console.log(add5(7), add5(8), add5(10));

console.log(add7(2), add7(8), add7(13));

//-------------funarg problem-----------

let x = 10;

function foo() {
    console.log("x = ", x);
}

function bar(fa) {
    let x = 20;
    console.log(" in bar x = ", x);
    fa();
}

bar(foo);