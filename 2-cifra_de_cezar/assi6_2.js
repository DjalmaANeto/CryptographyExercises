class cesarCypher {
    constructor() {
        this.curentKey = [];
        this.curentClean = [];
        this.curentCC = [];
        this.letters = "abcdefghijklmnopqrstuvwyzàáãâéêóôõíúçABCDEFGHIJKLMNOPQRSTUVWYZÀÁÃÂÉÊÓÕÍÚÇ";
    }

    keyGenerator() {
        var key;
        key = Math.trunc(Math.random() * this.letters.length)
        this.curentKey = key;
    }

    enkrypt(enkryptInput, key) {
        var enkrypted = "";
        var index = 0, new_index = 0;
        for (const x in enkryptInput) {
            index = this.letters.search(enkryptInput[x]);
            if (index == -1) {
                enkrypted = enkrypted.concat(enkryptInput[x]);
            } else {
                new_index = index + key;
                new_index = new_index % this.letters.length;
                enkrypted = enkrypted.concat(this.letters[new_index+1]);
            }
        }
        console.log(enkrypted);
        return enkrypted;
    }

    dekrypt(dekryptInput, key) {
        var dekrypt = "";
        var index = 0, new_index = 0;
        for (const x in dekryptInput) {
            index = this.letters.search(dekryptInput[x]);
            if (index == -1) {
                dekrypt = dekrypt.concat(dekryptInput[x]);
            } else {
                new_index = index - key;
                new_index = new_index % this.letters.length;
                dekrypt = dekrypt.concat(this.letters[new_index-1]);
            }
        }
        console.log(dekrypt);
        return dekrypt;
    }
}

// one time pad
const CC = new cesarCypher();

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
    CC.keyGenerator();
});

buttonSpy.addEventListener("click", () => {
    console.clear();
    document.getElementById("key").innerHTML = CC.curentKey;
});

//get and print
button1.addEventListener("click", () => {
    console.clear();
    var x = getInput("enkrypt_text");
    CC.curentClean = x;
    CC.curentCC = CC.enkrypt(CC.curentClean, CC.curentKey);
    document.getElementById("enkrypt").innerHTML = "'"+CC.curentCC+"'";
});

button2.addEventListener("click", () => {
    console.clear();
    var x = getInput("dekrypt_text");
    CC.curentCC = x;
    CC.curentClean = CC.dekrypt(CC.curentCC, CC.curentKey);
    document.getElementById("dekrypt").innerHTML = "'"+CC.curentClean+"'";

});


