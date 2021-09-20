class vinegereCypher {
    constructor() {
        this.keyAdapted;
        this.curentKey;
        this.curentClean;
        this.curentVC;
        this.letters = "abcdefghijklmnopqrstuvwyzàáãâéêóôõíúçABCDEFGHIJKLMNOPQRSTUVWYZÀÁÃÂÉÊÓÕÍÚÇ";
    }

    keyConstructor(key) {
        this.curentKey = key;
    }

    cleanConstructor(clean) {
        this.curentClean = clean;
    }

    vcConstructor(enkrypted) {
        this.curentVC = enkrypted;
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
        var index = 0, index_key = 0, index_key = 0, new_index = 0, textIndex = 0, keyIndex = 0;
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
        var index = 0, index_key = 0, index_key = 0, new_index = 0, textIndex = 0, keyIndex = 0;
        do {
            index = this.letters.search(this.curentVC[textIndex]);
            index_key = this.letters.search(this.keyAdapted[keyIndex]);
            if (index == -1) {
                dekrypted = dekrypted.concat(this.curentVC[textIndex]);
            } else {
                new_index = (index - index_key) % this.letters.length;
                if ((new_index - 1) < 0) { 
                    break;
                }
                dekrypted = dekrypted.concat(this.letters[new_index - 1]);
            }
            textIndex = textIndex + 1;
            keyIndex = keyIndex + 1;
        } while (textIndex < this.curentVC.length || keyIndex < this.keyAdapted.length);
        console.log("CRIPTOGRAFIA= " + dekrypted);
        return dekrypted;
    }
}

// Vinegere Cypher 
const VC = new vinegereCypher();

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
    VC.keyConstructor(getInput("key_text"));
    const form = document.querySelector("#key_form");
    form.elements.key_text.value = "";
});

buttonSpy.addEventListener("click", async () => {
    console.clear();
    const form = document.querySelector("#key_form");
    form.elements.key_text.value = VC.curentKey;
    await buttonSpy.addEventListener("click", () => {
        console.clear("hello");
        const form = document.querySelector("#key_form");
        form.elements.key_text.value = " ";
    });
});

//get and print
button1.addEventListener("click", () => {
    console.clear();
    VC.cleanConstructor(getInput("enkrypt_text"));
    var enkrypted = VC.enkrypt();
    document.getElementById("enkrypt").innerHTML = "'" + enkrypted + "'";
});

button2.addEventListener("click", () => {
    console.clear();
    VC.vcConstructor(getInput("dekrypt_text"));
    var dekrypted = VC.dekrypt(VC.curentVC, VC.curentKey);
    document.getElementById("dekrypt").innerHTML = "'" + dekrypted + "'";

});