class Converter {
    constructor(numberB, numberD) {
        this.numberB = numberB = [];
        this.numberD = numberD = [];
    }

    decToBin(D) {
        var numberD = [];
        var R, old;
        D = parseInt(D);
        // to print
        console.log(D + " to base " + 2);
        while (D >= 1) {
            R = D % 2;
            numberD.push(Math.trunc(R));
            old = Math.trunc(parseInt(D));
            D = Math.trunc(parseInt(D) / 2);
            // to print
            console.log(old + "/" + D + "->" + old + "=" + R);
        }
        // to print
        var printNumber = parseInt(numberD.reverse().join(""));
        console.log(D + " to base " + 2 + " = " + printNumber);
        console.log(numberD);
        return numberD.join("");
    }

    binToDec(D) {
        var exp = D.length - 1;
        var numberB = 0;
        //to print
        var printer = "";
        console.log(D + " to base 10 ");
        for (const x in D) {
            numberB = parseInt(numberB) + (parseInt(D[x]) * (2 ** exp));
            //to print
            if (exp == 0) {
                printer = printer + "2^ " + exp + "  * " + D[x];
            } else {
                printer = printer + "2^ " + exp + "  * " + D[x] + " + ";
            }
            exp = exp - 1;
        }
        numberB = parseInt(numberB);
        // to print
        console.log(printer);
        console.log(D + " to base 10: " + numberB);
        return numberB;
    }
}

class oneTimePad {
    constructor() {
        this.mensageToKey = [];
        this.curentKey = [];
        this.fixiKey = [];
        this.curentClean = [];
        this.curentOTP = [];
    }

    keyGenerator() {
        var key;
        key = Math.trunc(Math.random() * (10000 - 1))
        return key;
    }

    enkrypt(enkryptInput, key) {
        var enkrypted;
        return enkrypted = enkryptInput ^ key;
    }

    dekrypt(dekryptInput, key) {
        var denkrypted = 0;
        return denkrypted = dekryptInput ^ key;
    }
}

// one time pad
const otp = new oneTimePad();
// converter
const converter = new Converter();

//set variables button
var buttonKey = document.getElementById("key_button");
var buttonSpy = document.getElementById("spy_button");
var button1 = document.getElementById("enkrypt_button");
var button2 = document.getElementById("dekrypt_button");

//get values of input area
function getInput(idOf) {
    var inputOf = document.getElementById(idOf).value;
    console.log(inputOf);
    return inputOf;
}

// set a new key
buttonKey.addEventListener("click", () => {
    otp.curentKey = otp.keyGenerator(otp.curentClean);
});

buttonSpy.addEventListener("click", () => {
    console.clear();
    document.getElementById("key_dec").innerHTML = otp.curentKey;
    document.getElementById("key_bin").innerHTML = converter.decToBin(otp.curentKey);
    console.log(converter.decToBin(otp.curentKey));
    console.log(converter.binToDec(converter.decToBin(otp.curentKey)));
});

//get and print
button1.addEventListener("click", () => {
    console.clear();
    var x = getInput("enkrypt_number");
    otp.curentClean = x;
    otp.curentOTP = otp.enkrypt(otp.curentClean, otp.curentKey);
    document.getElementById("enkryptDec").innerHTML = otp.curentOTP;
    document.getElementById("enkryptBin").innerHTML = converter.decToBin(otp.curentOTP);
    console.log(converter.decToBin(otp.curentClean));
    console.log(converter.binToDec(converter.decToBin(otp.curentClean)));
});

button2.addEventListener("click", () => {
    console.clear();
    var x = getInput("dekrypt_number");
    otp.curentOTP = x;
    otp.curentClean = otp.dekrypt(otp.curentOTP, otp.curentKey);
    document.getElementById("dekryptDec").innerHTML = otp.curentClean;
    document.getElementById("dekryptBin").innerHTML = converter.decToBin(otp.curentClean);
    console.log(converter.decToBin(otp.curentOTP));
    console.log(converter.binToDec(converter.decToBin(otp.curentOTP)));
});