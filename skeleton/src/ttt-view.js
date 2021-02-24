class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el; 

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    $('li').on("click", event => {
      const $currentLi = $(event.currentTarget);

      if ($currentLi.attr("class") != "clicked") {
      $currentLi.toggleClass("clicked");

      let pos = $currentLi.data("donkey");
      // console.log(pos);

      this.game.playMove(pos);

      const ariton = "<img src='../assets/ariton.png'></img>";
      const sayeef = "<img src='../assets/sayeef.png'></img>";
      this.game.currentPlayer == "o" ? $currentLi.append(sayeef) : $currentLi.append(ariton);
      
      if (this.game.isOver()) {
        this.$el.append("<div>WINNER!</div>");
        this.game.currentPlayer == "o" ? this.$el.append(sayeef) : this.$el.append(ariton);
        setTimeout(function() {alert("GAME OVER"); location.reload(); }, 1000);
      }
    
      }
      // $currentLi.text(this.game.currentPlayer); 
    })
  }



  // makeMove($square) {}

  setupBoard() {
    // const $ul = $('<ul> </ul>') 
    this.$el.append('<ul>')
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        $('ul').append(`<li data-donkey=[${i},${j}]></li>`)
      }
    };
  }
}

module.exports = View;
