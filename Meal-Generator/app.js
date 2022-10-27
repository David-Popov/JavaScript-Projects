const button = document.getElementById('button');

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';


button.addEventListener('click',e =>{
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        createMeal(data.meals)
    })
})


const createMeal = (meal) => {
	const ingredients = [];
	for(let i=1; i<=20; i++) {
		if(meal[0][`strIngredient${i}`]) {
			ingredients.push(`${meal[0][`strIngredient${i}`]} - ${meal[0][`strMeasure${i}`]}`)
		} else {
			break;
		}
	}

   
    const section = document.createElement('section');
    section.className = 'content-section';

    const container = document.createElement('div');
    container.className = 'container';

    const container2 = document.createElement('div');
    container2.className = 'container2';


	const box1 = document.createElement('div');
    box1.id = 'box1';

    const box2 = document.createElement('div');
    box2.id = 'box2';

    container.appendChild(box1);
    container.appendChild(box2);

    
    const discription = document.createElement('p');
    discription.innerHTML = `${meal[0].strInstructions}`;

    box2.appendChild(discription);

    const mealText = document.createElement('p');
    box2.appendChild(mealText);

    const image = document.createElement('img');
    image.src = `${meal[0].strMealThumb}`;
    box1.appendChild(image);

    const ingred = document.createElement('div');
    ingred.id = 'data';
    const ingredTittle = document.createElement('p');
    ingredTittle.innerHTML= 'Ingredients:';
    ingred.appendChild(ingredTittle);

    const videoContainer = document.createElement('div');
    videoContainer.id = 'video';

    const video = document.createElement('iframe');
    video.width = '500';
    video.height = '500';
    video.src = `https://www.youtube.com/embed/${meal[0].strYoutube.slice(-11)}`
    
    videoContainer.appendChild(video)

    container2.appendChild(videoContainer);
    container2.appendChild(ingred);

    const tittle = document.createElement('h1');
    tittle.className = 'tittle';
    tittle.innerHTML = `Meal name: ${meal[0].strMeal}`


    for (let i = 0; i < ingredients.length; i++) {
        const p = document.createElement('p');
        p.innerHTML = ingredients[i];
        ingred.appendChild(p);
    }

    section.appendChild(tittle);
    section.appendChild(container);
    section.appendChild(container2);

    document.body.appendChild(section);

    console.log(meal[0].strYoutube)
}


