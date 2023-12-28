const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currencySelect")

function convertValues() {
    const inputCurrency = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 4.81
    const euroToday = 5.35
    const libraToday = 6.16
    const bitcoinToday = 207703

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
        .format(inputCurrency)

        if(currencySelect.value == "dolar"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            })
                .format(inputCurrency / dolarToday)
        }
        if(currencySelect.value == "euro"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            })
                .format(inputCurrency / euroToday)
        }
        if(currencySelect.value == "libra"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
                style: 'currency',
                currency: 'GBP'
            })
                .format(inputCurrency / libraToday)
        }
        if(currencySelect.value == "bitcoin"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'XBT'
            })
                .format(inputCurrency / bitcoinToday)
        }
        
}
function changeCurrency(){
    const currencyImage = document.querySelector(".currencyImage")
    const currencyName = document.getElementById("currencyName")

    if(currencySelect.value == "dolar"){
        currencyImage.src = "./assets/dolar.png"
        currencyName.innerHTML = "Dólar Americano"
    }
    if(currencySelect.value == "euro"){
        currencyImage.src = "./assets/euro.png"
        currencyName.innerHTML = "Euro"
    }
    if(currencySelect.value == "libra"){
        currencyImage.src = "./assets/libra.png"
        currencyName.innerHTML = "Libra Esterlina"
    }
    if(currencySelect.value == "bitcoin"){
        currencyImage.src = "./assets/bitcoin.png"
        currencyName.innerHTML = "Bitcoin"
    }
    convertValues()
}
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrency)