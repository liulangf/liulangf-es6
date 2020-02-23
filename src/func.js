function add(a, b) {
    return a() + b();
}


let s = add(() => 5, () => 6);

console.log(s);

console.log(add(() => 5, () => 8));


function reset() {
    console.log('reet() first');
    reset = () => {
        console.log('reset() second');
    }
}


reset();

reset();