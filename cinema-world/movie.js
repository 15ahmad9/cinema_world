const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f50c02ff36mshc534aea50d2afb5p14e81cjsn5dab15327d9a',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(data => {
		const list = data.d;

		list.map((item) => {
			const movie = `<li><img src="${item.i.imageUrl}"> <br> <h3>${item.l}</h3> <h2>${item.s}</h2></li>`

			document.querySelector('.movies').innerHTML += movie;
		})
	}
)
	.catch(err => { console.error(err);
	}
);