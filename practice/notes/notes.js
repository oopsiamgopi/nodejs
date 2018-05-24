// console.log("Starting Notes");

const fs = require("fs")
// module.exports.age = 30;
// module.exports.addNote = () => {
//     console.log("inside add note")
//     return "new note"
// }
// module.exports.add = (a, b) => {
//     return a + b
// }

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch(e) {
        return []
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var logNotes = (note) => {
    console.log("----------------------------");
    console.log("Title: ", note.title);
    console.log("Body: ", note.body);
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAllNotes = () => {
    return fetchNotes();
};

var readNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAllNotes,
    readNote,
    removeNote,
    logNotes
}