let evt = require('events');

function ReadFile() {
    this.file="";
}
ReadFile.prototype=evt.EventEmitter();

emitter.on('create', function () {
    console.log("folder was created")
});

emitter.emit("create");