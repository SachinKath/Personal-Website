
var selector = document.getElementById('app');

// Passing the selector of the text element to the TypeWriter object
var typewriter = new Typewriter(selector, {
  loop: true
});

typewriter.typeString('FRONT-END DEVELOPER')
    .pauseFor(2500)
    .deleteAll()
    .typeString('BACK-END DEVELOPER')
    .pauseFor(2500)
    .deleteAll()
    .typeString('MOBILE APP DEVELOPER')
    .pauseFor(2500)
    .deleteAll()
    .start();
