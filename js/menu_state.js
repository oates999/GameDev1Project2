var menuState = {
    create: function(){
        var nameLabel = game.add.text(90, 90, "title test", {font : "50px Arial", fill : "#fff"});
        nameLabel.inputEnabled = true;
        nameLabel.events.onInputUp.add( function (){
            game.state.start('play');

        });




    }
};