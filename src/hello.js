console.log('hello es6');

function say(hello) {
    let s = `Welcome ${hello}, you are welcome!!`;
    console.log(s);
}

module.exports.a = 'muchen';

module.exports.say = say;