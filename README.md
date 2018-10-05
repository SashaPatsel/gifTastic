<h1 align="center">📺 Pretty Much Netflix 📺</h1>

This app allows users to see gifs from their favorite TV shows stacked neatly against one another on a sleek background. 

You are given some of my favorite TV Shows to start with, but you can add your own shows using the search button. Once you've hit submit, you'll get your very own button to generate gifs from YOUR favorite shows. 

This app uses the gify API to call for 10 gifs from any given show (all though the search bar can return gifs of any sort, not just TV shows).


Click [here](https://sashapatsel.github.io/super-smash-rpg/) to play.

<img src="assets/images/demo.png">



### Installing

Feel free to clone this repository! No other installation necessary.


## Built With

* HTML 
* CSS
* JQuery


## Code Snippets
Here are some of the variables at play in this game
```javascript
	var playerStats;
	var opponentStats;
	var isCharacterChosen;
	var hasNotPicked;
	var isEnemyChosen;
	var mario;
	var kirby;
	var dk;
	var pikachu;
	var enemyDown;


	function gameStart() {

			playerStats ={};
			opponentStats = {};

			isCharacterChosen = false;
			isEnemyChosen = false;
			isFighting = false;
			gameDone = false;

			enemyDown = 0;
	
	};

```

## Authors

* Sasha Patsel [Website](https://sashapatsel.github.io/portfolio-sp/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Notes
- This is my first project using JQuery. I found it to be a very refreshing change from vanilla javascript. JQuery makes it a lot more straightforward to identify elements on the DOM and to manipulate them
