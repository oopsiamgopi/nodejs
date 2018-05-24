// console.log("starting App");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

//fs.appendFile("greets.txt",`hello ${os.userInfo().username}! my age is ${notes.age}`, function(data){});
// console.log(notes.addNote());
// console.log(`Result: ${notes.add(1,2)}`);

const _ = require('lodash');
const yargs = require('yargs');

// console.log(_.isString('test'));
// console.log(_.isString(false));
// console.log(_.isString(1));
// console.log(_.uniq([1,2]));
const titleOptions = {
        describe: "Title of note",
        demand: true,
        alias: "t"
    };
const bodyOptions = {
        describe: "Body of note",
        demand: true,
        alias: "b"
    };
    
var args = yargs
.command('add', "Add a Note", {
    title : titleOptions,
    body : bodyOptions
})
.command('list', "List all notes")
.command('read', "Read a Note", {
    title : titleOptions
})
.command('remove', "Remove a Note", {
    title : titleOptions
})
.help()
.argv;

// var command = process.argv[2];
var command = args._[0];
// console.log(command)
// console.log("Process: ", process.argv)
// console.log("Yrgs: ", args)

if (command === "add") {
    var note = notes.addNote(args.title, args.body);
    if (note) {
        console.log("Note Created Successfully");
        notes.logNotes(note);
    } else {
        console.log("Duplicate Note with title");
    }
} else if(command === "list") {
    var allNotes = notes.getAllNotes();
    allNotes.forEach((note) => notes.logNotes(note));
} else if(command === "read") {
    var note = notes.readNote(args.title);
    if (note) {
        console.log("Note Found");
        notes.logNotes(note);
    } else {
        console.log("Note not found");
    }
} else if(command === "remove") {
    var removeStatus = notes.removeNote(args.title);
    var message = removeStatus? "Removed Successfully" : "Note not found";
    console.log(message);
} else {
    console.log("unknown command");
}