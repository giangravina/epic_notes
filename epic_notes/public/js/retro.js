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
			out += noteArray[x].title;
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
	document.getElementById('mew').value = "";  //noteTitle
	document.getElementById('exampleFormControlTextarea1').value = ""; // noteBody

}

function readNotes(){
	document.getElementById('read').style.display = "block";
	document.getElementById('write').style.display = "none"; 
}
function displayNote(note){
	let noteArray =
	JSON.parse(localStorage.getItem('noteData'));
	let out = '<h2 id="title2">' + noteArray[note].title + "</h2>" + '<input value="' + noteArray[note].title + '" type="text"' + '" id="title-edit">';
	out += "<h4>Date: " + new 
	Date(noteArray[note].date).toDateString() + "</h4>";
	out += '<p id="body2">' + noteArray[note].body + "</p>" + '<input value="' + noteArray[note].body + '" type="text"' + '" id="body-edit">';
	out += "<button type='button' class='btn btn-primary' id='edit'style= 'margin: 28px'>Edit</button>"
	out += "<button type='button' class='btn btn-primary' id='del' style='margin: 28px'>Delete</button>"

	document.getElementById('noteDisplay').innerHTML = out;

	document.getElementById('del').onclick = function(){ //bnDelete
		noteArray.splice(note,1);
		localStorage.setItem('noteData', JSON.stringify(noteArray));
		init();
	}
	document.getElementById('edit').onclick =function(){ 
		
		if (document.querySelector("#noteDisplay").classList.contains("editing")) {
				document.querySelector("#noteDisplay").classList.remove("editing")
				var options = document.querySelectorAll("option");
				console.log('options', options)

				var index = document.getElementById("noteMaster").selectedIndex;
				

				console.log('index', index);
				var editArray = JSON.parse(localStorage.getItem("noteData"));

				editArray[index].title = document.getElementById("title-edit").value;
				editArray[index].body = document.getElementById("body-edit").value;
				localStorage.setItem("noteData", JSON.stringify("editArray"));
				document.getElementById("title2").innerHTML = editArray[index].title;
				document.getElementById("body2").innerHTML = editArray[index].body;
								
		}else{
				document.querySelector("#noteDisplay").classList.add("editing")
		}
		// document.querySelector("body-edit").classList.toggle("editing");
		
	}
}
  // document.querySelector("select option[selected]").forEach(function(){
 	// 	displayNote(this.innerText)
	 //  });

save.onclick = function(){ //btnSave
	const noteDate = new Date();
	const noteTitle = document.getElementById('mew').value; //noteTitle
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