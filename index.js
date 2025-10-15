const musicList = [
  {
    title: "Industry  Machine",
    artist: "OdumoduBlvck",
    album: "Industry Machine",
    genre: "Afrobeats",
    year: 2024,
    file: "\ODUMODUBLVCK-INDUSTRY-MACHINE-NAIJALOADED.mp3"
  },
  
];

const videoList = [
  {
    title: "Sample Video",
    description: "couldn't find a video.",
    genre: "Documentary",
    year: 2025,
    file: "Pushups.mp4"
  },
  
];

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");

  if (id === "music") renderMusic();
  if (id === "movies") renderVideos();
}

function renderMusic() {
  const container = document.getElementById("music-player");
  container.innerHTML = "";
  musicList.forEach(music => {
    container.innerHTML += `
      <div>
        <audio controls src="${music.file}"></audio>
        <p><strong>Title:</strong> ${music.title}</p>
        <p><strong>Artist:</strong> ${music.artist}</p>
        <p><strong>Album:</strong> ${music.album}</p>
        <p><strong>Genre:</strong> ${music.genre}</p>
        <p><strong>Year:</strong> ${music.year}</p>
        <hr>
      </div>
    `;
  });
}

function renderVideos() {
  const container = document.getElementById("video-player");
  container.innerHTML = "";
  videoList.forEach(video => {
    container.innerHTML += `
      <div>
        <video width="480" controls>
          <source src="${video.file}" type="video/mp4">
          
        </video>
        <p><strong>Title:</strong> ${video.title}</p>
        <p><strong>Description:</strong> ${video.description}</p>
        <p><strong>Genre:</strong> ${video.genre}</p>
        <p><strong>Year:</strong> ${video.year}</p>
        <hr>
      </div>
    `;
  });
}

function toggleFormFields() {
  const type = document.getElementById("mediaType").value;
  document.getElementById("songFields").classList.toggle("hidden", type !== "song");
  document.getElementById("movieFields").classList.toggle("hidden", type !== "movie");
}

function handleFormSubmit(e) {
  e.preventDefault();
  alert("Form submitted (functionality can be extended to backend).");
}
