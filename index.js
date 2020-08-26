var foodPrice = 0;
var count = 0;
var flag = 0;

function calculate() {
    var numberOfDishes = document.getElementById("numberOfDishes").value;
    var prices = document.getElementById("prices");
    var numberOfPeople = document.getElementById("numberOfPeople").value;
    if (count < numberOfDishes){
        if (count === numberOfDishes-2){
            var btn = document.getElementById("myBtn");
            btn.innerHTML = 'Reveal price';
        }
        var x = prices.value;
        foodPrice += parseFloat(x);
        prices.value = "";
        count++;
    }
    var pricePerPerson = foodPrice/numberOfPeople;
    if (flag === 1){
        alert("Bill for each person is $" + pricePerPerson.toFixed(2));
    }
    if (count === numberOfDishes-1){
        flag = 1;
    }
    // alert(flag);
    document.getElementById('pay').innerHTML = pricePerPerson;
}