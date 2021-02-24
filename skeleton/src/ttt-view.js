class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el; 

    this.setupBoard()
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    // const $ul = $('<ul> </ul>') 
    
    this.$el.append('<ul>')
    
    for (let i = 0; i < 9; i++) {
      $('ul').append('<li> Boop </li>') 
    };

    // $('ul').css({'display':'flex',
    //  'width':'300px',
    // 'flex-wrap':'wrap',
    //   'border': '5px solid black'})

    // $('li').css({'width':'90px',
    //   'height':'90px', 
    //   'border':'5px solid black'})  

    
    
  }
}

module.exports = View;
