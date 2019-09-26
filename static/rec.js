const artyom = new Artyom();
var cpt = 0;

// Add a single command
var commandHello = {
    indexes:["Merci","good morning","hey"], // These spoken words will trigger the execution of the command
    action:function(){ // Action to be executed when a index match with spoken word
        console.log("Merci detected");
        cpt++;
    }
};
artyom.addCommands(commandHello); // Add the command with addCommands method. Now

/* artyom.initialize({
    lang:"fr-FR",
    continuos:true,
    debug:true, // Show what recognizes in the Console
    listen:true, // Start listening after this
    speed:0.9, // Talk a little bit slow
    mode:"normal" // This parameter is not required as it will be normal by default
}); */

function startContinuousArtyom(){
    //artyom.fatality();// use this to stop any of

    setTimeout(function(){// if you use artyom.fatality , wait 250 ms to initialize again.
         artyom.initialize({
            lang:"fr-FR",// A lot of languages are supported. Read the docs !
            continuous:true,// Artyom will listen forever
            listen:true, // Start recognizing
            debug:true, // Show everything in the console
            speed:1 // talk normally
        }).then(function(){
            console.log("Ready to work !");
        });
    },0.1);
}
startContinuousArtyom();
