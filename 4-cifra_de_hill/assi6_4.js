class hillCypher {
    constructor() {
        this.keyAdapted;
        this.curentKey;
        this.curentClean;
        this.curentHILL;
        this.letters = "abcdefghijklmnopqrstuvwyzàáãâéêóôõíúçABCDEFGHIJKLMNOPQRSTUVWYZÀÁÃÂÉÊÓÕÍÚÇ";
    }

    keyConstructor(key) {
        this.curentKey = key;
    }

    cleanConstructor(clean) {
        this.curentClean = clean;
    }

    HILLConstructor(enkrypted) {
        this.curentHILL = enkrypted;
    }

    keyTransform(word) {
        var cont = 0;
        var key = new Array();
        for (let y = 0; y < 2; y++) {
            key[y] = new Array();
        }
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < (word.length / 2); y++) {
                key[x][y] = this.letters.search(word[cont]);
                cont++;
            }
        }
        // console.log(key);
        this.keyConstructor(key);
    }

    keyAdapt() {
        if (this.curentKey.length < this.curentClean.length) {
            var new_key = "";
            do {
                for (const cont in this.curentKey) {
                    new_key = new_key.concat(this.curentKey[cont]);
                    if (new_key.length == this.curentClean.length) {
                        break;
                    }
                }
            } while (new_key.length < this.curentClean.length);
            this.keyAdapted = new_key;
            return new_key;
        }
    }

    enkrypt() {
        this.keyAdapt();
        var enkrypted = "";
        var index = index_key = index_key = new_index = textIndex = keyIndex = 0;
        do {
            index = this.letters.search(this.curentClean[textIndex]);
            index_key = this.letters.search(this.keyAdapted[keyIndex]);
            if (index == -1) {
                enkrypted = enkrypted.concat(this.curentClean[textIndex]);
            } else {
                new_index = (index + index_key) % this.letters.length;
                enkrypted = enkrypted.concat(this.letters[new_index + 1]);
            }
            textIndex = textIndex + 1;
            keyIndex = keyIndex + 1;
        } while (textIndex < this.curentClean.length || keyIndex < this.keyAdapted.length);
        console.log("CRIPTOGRAFIA= " + enkrypted);
        return enkrypted;
    }

    dekrypt() {
        this.keyAdapt();
        var dekrypted = "";
        var index = index_key = index_key = new_index = textIndex = keyIndex = 0;
        do {
            index = this.letters.search(this.curentHILL[textIndex]);
            index_key = this.letters.search(this.keyAdapted[keyIndex]);
            if (index == -1) {
                dekrypted = dekrypted.concat(this.curentHILL[textIndex]);
            } else {
                new_index = (index - index_key) % this.letters.length;
                if ((new_index - 1) < 0) {
                    break;
                }
                dekrypted = dekrypted.concat(this.letters[new_index - 1]);
            }
            textIndex = textIndex + 1;
            keyIndex = keyIndex + 1;
        } while (textIndex < this.curentHILL.length || keyIndex < this.keyAdapted.length);
        console.log("CRIPTOGRAFIA= " + dekrypted);
        return dekrypted;
    }
}

// hill Cypher 
const HILL = new hillCypher();

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
    HILL.keyConstructor(getInput("key_text"));
    const form = document.querySelector("#key_form");
    form.elements.key_text.value = "";
});

buttonSpy.addEventListener("click", async () => {
    console.clear();
    const form = document.querySelector("#key_form");
    form.elements.key_text.value = HILL.curentKey;
    await buttonSpy.addEventListener("click", () => {
        console.clear("hello");
        const form = document.querySelector("#key_form");
        form.elements.key_text.value = " ";
    });
});

//get and print
button1.addEventListener("click", () => {
    console.clear();
    HILL.cleanConstructor(getInput("enkrypt_text"));
    var enkrypted = HILL.enkrypt();
    document.getElementById("enkrypt").innerHTML = "'" + enkrypted + "'";
});

button2.addEventListener("click", () => {
    console.clear();
    HILL.HILLConstructor(getInput("dekrypt_text"));
    var dekrypted = HILL.dekrypt(HILL.curentHILL, HILL.curentKey);
    document.getElementById("dekrypt").innerHTML = "'" + dekrypted + "'";

});

const testing = new hillCypher();
testing.keyTransform("djalma");

// Get input prototype
var zSize = 0;

function wordOperation(word) {
    const testing = new hillCypher();
    var final = [];
    var cont = 0;
    do {
        // create an matrix [2:1]💊  
        var X = new Array();
        for (let y = 0; y < 2; y++) {
            X[y] = new Array();
        }
        for (let x = 0; x < 2; x++) {
            for (let y = 0; y < 1; y++) {
                X[x][y] = testing.letters.search(word[cont]);
                // console.log(testing.letters[testing.letters.search(word[cont])]);
                cont++;
            }
        }
        zSize++;
        // console.log(X);
        final.push(X);
    } while (cont < word.length);
    return final;
}
var djalma = "Djalma de Almeida Neto";
var matrix = wordOperation(djalma);
console.log(matrix);

function walkAroundTheMatrix(matrix) {
    const testing = new hillCypher();
    var word = " ";
    var cont;
    // create an matrix [2:1] is matrix💊  
    do {
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix.length; y++) {
                if (matrix[x][y] == -1) {
                    word = word.concat("_");
                    // console.log(matrix[x][y]);
                    console.log(word);
                } else {
                    // console.log(matrix[x][y]);
                    word = word.concat(testing.letters[matrix[x][y]]);
                    console.log(word);
                }
                cont++;
            }
        }
    } while (cont < zSize);
    return word;
}
// var nome = walkAroundTheMatrix(matrix);
// console.log(nome);