const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const lowercaseEl = document.getElementById("lower")
const uppercaseEl = document.getElementById("upper")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const genEl = document.getElementById("gen")
const clipEl = document.getElementById("clip")


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbols
};

genEl.addEventListener("click", () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

    resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
});

function generatePassword(length, lower, upper, number, symbol) {
    let generatedPassword = "";

    const typesCount = lower + upper + number + symbol;


    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        item => Object.values(item)[0]
    );

    console.log("typesArr ", typesArr)

    if (typesCount === 0) {
        return "";
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatedPassword += randomFunc[funcName]()
        });

    }

    resultEl.value = generatedPassword;
}

clipEl.addEventListener("click",() =>{
    resultEl.select()
    document.execCommand("copy")

})


function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
    var symbol = '!@#$%^&*()'
    return symbol[Math.floor(Math.random() * symbol.length)];
}



