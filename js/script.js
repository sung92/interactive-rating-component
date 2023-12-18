const form = document.querySelector('.form');
const thankyou = document.querySelector('.thankyou-state');
const thankyouText = document.querySelector('.thankyou-text');
const labels = document.querySelectorAll('label');
let ratingValue;

labels.forEach( label => {
    label.addEventListener('change', function() {
        ratingValue = this.dataset.value;
    })
})

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if(ratingValue === undefined) return alert("please choose a rating");

    thankyouText.textContent = `You selected ${ratingValue} out of 5`;
    form.classList.toggle('hidden');
    thankyou.classList.toggle('hidden');
});