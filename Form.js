class Form{
constructor(){
    
}
display(){
    var title=createElement("h1");
    title.html("Car Racing Game");
    title.position(130,0)
    
   var input=createInput("Name");
   var button=createButton("play");
   var greeting=createElement("h3");


   input.position(500,160);
    button.position(500,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name=input.value();
        playerCount=playerCount+1;
        player.update(name);
        player.updateCount(playerCount);

        greeting.html("hello"+name);
        greeting.position(500,160);


    });
}
}