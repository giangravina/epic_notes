const save =
document.getElementById('save'); //btnSave
let notes = "";
init();

function init() {
	let out = "";
	let noteArray =
	JSON.parse(localStorage.getItem('noteData'));

	if(noteArray != null && noteArray != ""){
		noteArray =
		JSON.parse(localStorage.getItem('noteData'));

		for(let x = 0; x < noteArray.length; x++)
		{
			out += "<option value=" +x + ">";
			out += noteArray[0].title;
			out += "</option>";
			document.getElementById('noteMaster').innerHTML = out; 
		}	



			document.getElementById('addNew').addEventListener('click', function(e){ //btnWrite
				writeNote(); 
			});



			document.getElementById('noteMaster').addEventListener('click', function(e){ 
				displayNote(e.target.value); //double check displayNote
			});

			readNotes();
		} else{
			writeNote();
		}
	}
function writeNote(){
	document.getElementById('read').style.display = "none";	
	document.getElementById('write').style.display = "block";
	document.getElementById('title').value = "";  //noteTitle
	document.getElementById('exampleFormControlTextarea1').value = ""; // noteBody

}

function readNotes(){
	document.getElementById('read').style.display = "block";
	document.getElementById('write').style.display = "none"; 
}
function displayNote(note){
	let noteArray =
	JSON.parse(localStorage.getItem('noteData'));
	let out = "<h2>" + noteArray[note].title + "</h2>";
	out += "<h4>Date: " + new
	Date(noteArray[note].date).toDateString() + "</h4>";
	out += "<p>" + noteArray[note].body + "</p>";
	out += "<button type='button' class='btn btn-primary' id='del'>Delete</button>"

	document.getElementById('noteDisplay').innerHTML = out;

	document.getElementById('del').onclick = function(){ //bnDelete
		noteArray.splice(note,1);
		localStorage.setItem('noteData', JSON.stringify(noteArray));
		init();
	}
}

save.onclick = function(){ //btnSave
	const noteDate = new Date();
	const noteTitle = document.getElementById('title').value; //noteTitle
	const noteBody = document.getElementById('exampleFormControlTextarea1').value; //noteBody
	const theNote = new Note(noteDate, noteTitle, noteBody);
	saveNotes(theNote);
}

function saveNotes(note){
	let noteArray = JSON.parse(localStorage.getItem('noteData'));
	if (noteArray == null) {
		noteArray = new Array();
		noteArray.push(note);
	}else{
		noteArray.push(note);
	}
	localStorage.setItem('noteData', JSON.stringify(noteArray));
	readNotes();
	init();
}

//Framework Television link: https://www.youtube.com/watch?v=ZrbG-48lFOg