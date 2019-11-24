function f1(fx) {
    console.log('inside f1.....');
    console.log(fx());
}

function ss() {
    return "HEY MANNNNNN!!!"
}
let a = function() {
    return 'HELLLLLLOOOOOO ';
}
f1(ss); //FUNCTION SENDING AS A FUNCTION PARAMETER HERE
f1(a);