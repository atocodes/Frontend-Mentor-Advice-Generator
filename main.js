const dice_btn = document.getElementById('dice_img')
const title = document.getElementById('advice')
const quote = document.getElementById('quote')
const link = 'https://api.adviceslip.com/advice'
fetch(link)
.then(data=>data.json())
.then(data=>{
    const radnom_advice = data.slip
    title.textContent = `ADVICE #${radnom_advice.id}`
    quote.textContent = `"${radnom_advice.advice}"`
})
dice_btn.onclick= ()=>{
    console.log(title,quote)
    fetch(link)
    .then(data => data.json())
    .then(data=>{
        const radnom_advice = data.slip
        title.textContent = `ADVICE #${radnom_advice.id}`
        quote.textContent = `"${radnom_advice.advice}"`
    })
}