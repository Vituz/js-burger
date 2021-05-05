var ingredientsEl = [
    ["cheese", "1"],
    ["fried-egg", "2"],
    ["mustard", "0.5"],
    ["tomato", "1.5"],
    ["lettuce", "1"],
    ["ketchup", "0.5"],
];

function insertIngredient(list, el){

    counter = 0;

    while(counter < list.length){

        el.insertAdjacentHTML('beforeend', 
        `
        <div class="form-group">
        <img width="50" src="./assets/img/${list[counter][0] + '.svg'}">
                <label for="${list[counter][0]}">${list[counter][0]}</label>
                <input type="checkbox" name="${list[counter][0]}" id="${list[counter][0]}" data-price="${list[counter][1]}">
        </div>
        `
        );

        counter++

    }

}

var ingElement = document.querySelector('.ingredients');
insertIngredient(ingredientsEl, ingElement);


document.querySelector("button").addEventListener("click", function(){

    // Stabiliamo un prezzo base per il panino
    var price = 8;

    // Calcoliamo il prezzo in base agli ingredienti selezionati
    var check = document.querySelectorAll("input[type='checkbox']");
    console.log(check);

    var sumIngredients = null;

    for(var i = 0; i < check.length; i++){

        var element = check[i];

        if(element.checked){
            sumIngredients += Number(element.getAttribute("data-price"));
        }
        
    }

    console.log(sumIngredients);

    var coupon = [
        "abf34CDD",
        "abf38CDD",
        "abf33CfmD",
        "abgk45kHH",
    ];

     // Stabiliamo il prezzo totale del panino

    var totalPrice =  (price + sumIngredients).toFixed(2);

    var insCoupon = document.getElementById("coupon");

    console.log(insCoupon.value);

    for(var i = 0; i < coupon.length; i++){

        if(insCoupon.value === coupon[i]){
            totalPrice = (totalPrice - (totalPrice * 0.20)).toFixed(2);
            console.log("primo if");

        } else {
            totalPrice;
            console.log("else");
        }

    }

    console.log(insCoupon);
    // Stampiamo il prezzo totale del panino
    document.getElementById("price").innerHTML = "$ " + totalPrice;

    console.log(totalPrice);

});




