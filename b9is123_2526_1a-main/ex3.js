// let listEuler1=(a,b,l)=>0;//obviously wrong - compute the sum of multiples of a or b in list l
// let listEuler2=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l
// let listEuler3=(a,l)=>0;//obviously wrong - compute the sum of multiples in list a found in list l

// let eulerlist=()=>
// {
//     a=2//can un-hardcode
//     b=3
//     l=[1,2,3,4,5,6,7,9,10,10,10]  //document.getElementById('l').value.split(" ").map((x=>parseInt(x)); // if l is space separated numbers
//     //call listEuler1 and alert. - compute the sum of multiples of a or b in list l
// }
// let euler2Lists=()=>
// {
//     a=[2,3]//can un-hardcode
//     l=[1,2,3,4,5,6,7,9,10,10,10]
//     //call listEuler2 and alert.
// }

// let euler2Lists1=()=>
// {
//     a=[2,3,5]//can un-hardcode
//     l=[1,2,3,4,5,6,7,9,10,10,10]
//     //call listEuler3 and alert.
// }

// Sum of multiples of a OR b in list l
let listEuler1 = (a, b, l) => {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        if (l[i] % a === 0 || l[i] % b === 0) {
            sum += l[i];
        }
    }
    return sum;
};

// Sum of numbers in l divisible by ANY element in list a
let listEuler2 = (a, l) => {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (l[i] % a[j] === 0) {
                sum += l[i];
                break; // avoid double counting
            }
        }
    }
    return sum;
};

// Same as above (can handle more values in 'a')
let listEuler3 = (a, l) => {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (l[i] % a[j] === 0) {
                sum += l[i];
                break;
            }
        }
    }
    return sum;
};

// Button functions
let eulerlist = () => {
    let a = parseInt(document.getElementById("a1").value);
    let b = parseInt(document.getElementById("b1").value);

    let l = document.getElementById("l").value
                .split(" ")
                .map(x => parseInt(x));

    alert(listEuler1(a, b, l));

};

let euler2Lists = () => {
    let a = document.getElementById("aList").value
                .split(" ")
                .map(x => parseInt(x));

    let l = document.getElementById("mList").value
                .split(" ")
                .map(x => parseInt(x));

    alert(listEuler2(a, l));
};

let euler2Lists1 = () => {
    let a = document.getElementById("aList").value
                .split(" ")
                .map(x => parseInt(x));

    let l = document.getElementById("mList").value
                .split(" ")
                .map(x => parseInt(x));

    alert(listEuler3(a, l));
};