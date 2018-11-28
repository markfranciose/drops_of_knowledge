var number = 1,
    string = '1';

function modify(number, string) {
        number += 1;
        string = 'two';
        console.log(number, string);
}

modify(number, string);
console.log(number, string);
