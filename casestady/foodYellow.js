class FoodYellow{
    constructor(x,y,game) {
        this.x=x;
        this.y=y;
        this.game=game;
        this.grid = SIZE_SNAKE;
    }
    update(){
        this.x =(Math.floor(Math.random()*(19 - 0))+0)*this.grid
        this.y =(Math.floor(Math.random()*(19 - 0))+0)*this.grid
    }
    draw(){
        this.game.context.fillStyle = 'yellow';
        this.game.context.fillRect(this.x,this.y,this.grid,this.grid);

    }
}