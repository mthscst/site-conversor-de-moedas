const convertButton = document.querySelector(".convertButton")
const currencySelect = document.querySelector(".currencySelect")

 async function convertValues() {
    const inputCurrency = document.querySelector(".inputCurrency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then(response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
    const libraToday = data.GBPBRL.high
    
    console.log(data)
  
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