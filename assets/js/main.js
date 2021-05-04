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


