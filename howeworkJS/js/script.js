const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const matchScreen = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        matchScreen.classList.add("fadeIn");
      });
    };
  
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const compHand = document.querySelector(".comp-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach((hand) => {
        hand.addEventListener("animationend", function () {
          this.style.animation = "";
        });
        hand.addEventListener("animationstart", function () {
          this.src = "assets/Камень.png";
        });
      });
  
      const compOptions = ["Камень", "Бумага", "Ножницы","Бутылка лимонада"];
  
      options.forEach((option) => {
        option.addEventListener("click", function () {
          const compNumber = Math.trunc(Math.random() * 3);
          const compChoice = compOptions[compNumber];
          setTimeout(() => {
            compareHands(this.textContent, compChoice);
            playerHand.src = `assets/${this.textContent}.png`;
            compHand.src = `assets/${compChoice}.png`;
          }, 2000);
  
          playerHand.style.animation = "shakePlayer 2s ease";
          compHand.style.animation = "shakeComp 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const compScore = document.querySelector(".comp-score p");
      playerScore.textContent = pScore;
      compScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, compChoice) => {
      const winner = document.querySelector(".winner");
      if (playerChoice === compChoice) {
        winner.textContent = "Ничья";
        return;
      }
      // Проверки на выбор опций игроком и компьютером
      // проверка на выбор игроком "Камня"
      if (playerChoice === "Камень") {
        if (compChoice === "Ножницы") {
          winner.textContent = "Победа игрока";
        } else {
          winner.textContent = "Победа компьютера";
        }
      }
      // check for paper
      if (playerChoice === "Бумага") {
        if (compChoice === "Ножницы") {
          winner.textContent = "Победа компьютера";
        } else {
          winner.textContent = "Победа игрока";
        }
      }
      // check for scissors
      if (playerChoice === "Ножницы") {
        if (compChoice === "Камень") {
          winner.textContent = "Победа компьютера";
        } else {
          winner.textContent = "Победа игрока";
        }
      }
      // check for lemonbottle
      if (playerChoice === "Бутылка лимонада"){
        if(compChoice === "Камень"){
          winner.textContent = "Победа компьютера";
        } else if(compChoice === "Ножницы"){ 
          winner.textContent = "Победа игрока"
        } else {
          winner.textContent = "Победа игрока"
        }
      }
      if (winner.textContent === "Победа игрока") {
        pScore++;
      } else if (winner.textContent === "Победа компьютера") {
        cScore++;
      }
      updateScore();
    };
  
    startGame();
    playMatch();
  };
  
  game();