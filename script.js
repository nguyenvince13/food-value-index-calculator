function calculateValueIndex() {
    const servings = parseFloat(document.getElementById('servings').value);
    const caloriesPerServing = parseFloat(document.getElementById('calories').value);
    const proteinPerServing = parseFloat(document.getElementById('protein').value);
    const price = parseFloat(document.getElementById('price').value);

    if (isNaN(servings) || isNaN(caloriesPerServing) || isNaN(proteinPerServing) || isNaN(price)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const totalProtein = proteinPerServing * servings;
    const totalCalories = caloriesPerServing * servings;

    const valueIndex = (totalProtein * totalProtein) / (price * totalCalories);

    document.getElementById('result').innerText = `Value Index: ${valueIndex.toFixed(2)}`;
    setRecommendation(valueIndex);
}

function setRecommendation(valueIndex) {
    const recommendation = document.getElementById('recommendation');
    if (valueIndex > 1.5) {
        recommendation.innerText = 'This item is worth buying.';
        recommendation.style.color = 'green';
    } else if (valueIndex > 0.5) {
        recommendation.innerText = 'This item requires consideration.';
        recommendation.style.color = 'orange';
    } else {
        recommendation.innerText = 'This item is not worth buying.';
        recommendation.style.color = 'darkred';
    }
}
