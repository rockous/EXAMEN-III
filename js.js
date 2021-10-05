const list_container = document.getElementById("list-container")
const audio = document.getElementById("audio")
const canciones = [
{
	id: 1,
	title: "A",
	audio: "audio/clap.wav",
	artist: "CLAP",
},
{
	id: 2,
	title: "S",
	audio: "audio/hihat.wav",
	artist: "HIHAT",
},
{
	id: 3,
	title: "D",
	audio: "audio/kick.wav",
	artist: "KICK",
},
{
	id: 4,
	title: "F",
	audio: "audio/openhat.wav",
	artist: "OPENHAT",
},
{
	id: 5,
	title: "G",
	audio: "audio/boom.wav",
	artist: "BOOM",
},
{
	id: 6,
	title: "H",
	audio: "audio/ride.wav",
	artist: "RIDE",
},
{
	id: 7,
	title: "J",
	audio: "audio/snare.wav",
	artist: "SNARE",
},
{
	id: 8,
	title: "K",
	audio: "audio/tom.wav",
	artist: "TOM",
},
{
	id: 9,
	title: "L",
	audio: "audio/tink.wav",
	artist: "TINK",
},
];
canciones.forEach((e)  => {
	list_container.insertAdjacentHTML(
	"beforeend" ,
	`
	<div class="list-item" id ="${e.id}">
	<div class="song-data">
	<div>${e.title}</div>
	<div>${e.artist}</div>
	</div>
	</div> `
	 );
});
const play_audio = (id) => {
	const res = canciones.find((e) => e.id == id);
	if (res) {
		audio.src = res.audio;
		audio.play();
	}
};
list_container.addEventListener("click", (e) =>{
	if (e.target.matches(".list-item")) {
		play_audio(e.target.id);
	}else if (e.target.matches(".song-data")) {
		play_audio(e.target.parentNode.id);
	}else if (e.target.matches(".song-data div")) {
		play_audio(e.target.parentNode.parentNode.id);
	}
});