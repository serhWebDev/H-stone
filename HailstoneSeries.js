/*HailstoneSeries*/
console.log('Hailstone series');

let a0 = 23061912;
let a = a0;
let counter = 0;
let bufferRow = [a];
let reiteration = true;
let addEll = true;

function HailstoneSeries(a,counter) {
    while (reiteration !== false) {
        if ((a%2)==0){
            a = a/2;
        }else{
            a = a*3+1;
        }
        bufferRow.map((el)=>{
            if (el == a){
                reiteration = false;
                addEll = false;
            } else {
            }
        });
        if (addEll !== false){
            ++counter;
            bufferRow.push(a);
        };
    }
    /*result*/
    console.log('Stopping tme: f('+a0+')=' + counter);
    /*if needed to show array*/
    console.log('Hailstone series is ' + bufferRow);
}

HailstoneSeries(a,counter);