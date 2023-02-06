// getting from html
const productSelect = document.getElementById("product-select");
const ratingControl = document.getElementById("rating-control");

// Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1,
};

const totalStar = 5;
window.addEventListener("DOMContentLoaded", getRatings);
let product;
productSelect.addEventListener("change", (e) => {
    product = e.target.value;
    ratingControl.disabled = false;
    ratingControl.value = ratings[product];
});
ratingControl.addEventListener("blur", (e) => {
    const rating = e.target.value;
    if (rating > 5) {
        alert("please select 1-5");
        return;
    }
    ratings[product] = rating;
    getRatings();
});
function getRatings() {
    for (let items in ratings) {
        const startPercentage = (ratings[items] / totalStar) * 100; // (4.7 / 5) * 100  i just use first value but when its looping then it will be another(change) one

        const startRound = `${Math.round(startPercentage / 10) * 10}%`; // (94 / 10) * 10 = 94

        let showStars = document.querySelector(`.${items} .stars-inner`);
        showStars.style.width = startRound;

        let showNumbers = document.querySelector(`.${items} .number-rating`);
        showNumbers.innerHTML = ratings[items];
    }
}
