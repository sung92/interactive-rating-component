const form = document.querySelector('.form');
const thankyou = document.querySelector('.thankyou-state');
const thankyouText = document.querySelector('.thankyou-text');
let ratingValue;

form.addEventListener('change', function() {
    ratingValue = this.selector.value;
})

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(ratingValue === undefined) return alert("please choose a rating");

    thankyouText.textContent = `You selected ${ratingValue} out of 5`;
    form.classList.toggle('hidden');
    thankyou.classList.toggle('hidden');
});