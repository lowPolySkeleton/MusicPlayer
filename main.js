// set variables
var trackMetadata = {
    1:{
        "name": "Underworld Forest",
        "game": "Last Bible III"
    },
    2:{
        "name": "Val Ship",
        "game": "Last Bible III"
    },
    3:{
        "name": "Dream of the Shore Near Another World",
        "game": "Chrono Cross"
    },
    4:{
        "name": "Aquatic Ambience",
        "game": "Donkey Kong Country"
    },
    5:{
        "name": "Stickerbush Symphony",
        "game": "Donkey Kong Country 2"
    },
    6:{
        "name": "Opening Stage (Above Ground)",
        "game": "Mega Man 8"
    },
    7:{
        "name": "Tengu Man Stage",
        "game": "Mega Man 8"
    },
    8:{
        "name": "Aqua Man Stage",
        "game": "Mega Man 8"
    },
    9:{
        "name": "Serenade of Respite (Day)",
        "game": "Sea of Stars"
    },
    10:{
        "name": "The Apple Market",
        "game": "Mega Man Legends"
    },
    11:{
        "name": "Hills of Intent: Future",
        "game": "the Messenger"
    },
    12:{
        "name": "The Shopkeeper: Future",
        "game": "the Messenger"
    },
    13:{
        "name": "Cosmic Temperance",
        "game": "Loop Hero"
    },
    14:{
        "name": "Third District",
        "game": "Katana Zero"
    },
    15:{
        "name": "Hit the Floor",
        "game": "Katana Zero"
    },
    16:{
        "name": "Zangeif Theme",
        "game": "Super Street Fighter 2 Turbo (cps-2)"
    },
    17:{
        "name": "Guile Theme",
        "game": "Super Street Fighter 2 Turbo (cps-2)"
    },
    18:{
        "name": "Under the Rotting Pizza",
        "game": "Final Fantasy VII"
    },
    19:{
        "name": "Costa del Sol",
        "game": "Final Fantasy VII"
    },
    20:{
        "name": "Freya's Theme",
        "game": "Final Fantasy IX"
    },
    21:{
        "name": "Trisection",
        "game": "Final Fantasy Tactics"
    },
    22:{
        "name": "Hero's Theme",
        "game": "Final Fantasy Tactics"
    },
    23:{
        "name": "Oil Ocean Zone",
        "game": "Sonic the Hedgehog 2"
    },
    24:{
        "name": "Chemical Plant Zone",
        "game": "Sonic the Hedgehog 2"
    },
    25:{
        "name": "Out of His Mind",
        "game": "Breath of Fire IV"
    },
    26:{
        "name": "Yet the Merchants Will Go",
        "game": "Breath of Fire IV"
    },
    27:{
        "name": "Main Theme",
        "game": "The Legend of Zelda: Tears of the Kingdom"
    },
    28:{
        "name": "Kokiri Forest",
        "game": "The Legend of Zelda: Ocarina of Time"
    },
    29:{
        "name": "Beach Theme",
        "game": "Plok"
    },
    30:{
        "name": "Naked Glow",
        "game": "Ridge Racer Type 4"
    },
    31:{
        "name": "Out of Control",
        "game": "Revolt"
    },
    32:{
        "name": "Black Winter Night Sky",
        "game": "TEKKEN 2"
    },
    33:{
        "name": "Skerries",
        "game": "Blast Corps"
    },
    34:{
        "name": "Big Snowman",
        "game": "Snowboard Kids"
    },
    35:{
        "name": "Sunny Mountain",
        "game": "Snowboard Kids 2"
    },
    36:{
        "name": "Linda's Castle",
        "game": "Snowboard Kids 2"
    },
    37:{
        "name": "Secret of the Forest",
        "game": "Chrono Trigger"
    },
    38:{
        "name": "Corridors of Time",
        "game": "Chrono Trigger"
    },
    39:{
        "name": "File Select",
        "game": "Super Mario 64"
    },
    40:{
        "name": "Dire Dire Docks",
        "game": "Super Mario 64"
    },
    41:{
        "name": "Black Mage Village",
        "game": "Final Fantasy IX"
    },
    42:{
        "name": "Flutter vs The Gesellschaft",
        "game": "Mega Man Legends"
    },
    43:{
        "name": "Corneria",
        "game": "Star Fox"
    },
    44:{
        "name": "Flying Battery Zone Act 1",
        "game": "Sonic Mania"
    },
    45:{
        "name": "Lava Reef Zone Act 1",
        "game": "Sonic 3 & Knuckles"
    },
    46:{
        "name": "Idaten",
        "game": "Shinobi 3 Return Of The Ninja Master"
    },
    47:{
        "name": "OverDriver",
        "game": "Revolt"
    },
    48:{
        "name": "Kieran and Terapagos Battle Music",
        "game": "Pokemon Scarlet & Violet: Indigo Disk"
    },
    49:{
        "name": "Area A",
        "game": "Shatterhand"
    },
    50:{
        "name": "Cat",
        "game": "Minecraft"
    },
    51:{
        "name": "The Wind Can Be Still (Winter Theme)",
        "game": "Stardew Valley"
    },
    52:{
        "name": "File Select",
        "game": "Gravity Circuit"
    },
    53:{
        "name": "Strike the Earth! Plains of Passage",
        "game": "Shovel Knight"
    },
    54:{
        "name": "Last Surprise",
        "game": "Persona 5"
    },
    55:{
        "name": "Narita One",
        "game": "Narita Boy"
    },
    56:{
        "name": "Investigation ~ Cornered",
        "game": "Phoenix Wright: Ace Attorney"
    },
    57:{
        "name": "Stamp Theme [Battle Version]",
        "game": "Final Fantasy VII Rebirth"
    },
    58:{
        "name": "Kyrie's Theme",
        "game": "Final Fantasy VII Rebirth"
    },
    59:{
        "name": "Main Theme",
        "game": "Pepper Grinder"
    },
    60:{
        "name": "Solace Tomorrow",
        "game": "EX-Zodiac"
    },
    61:{
        "name": "Home Theme",
        "game": "World of Horror"
    },
    62:{
        "name": "Calling",
        "game": "The World Ends With You"
    },
    63:{
        "name": "That Name Was Engraved Into the 100th Volume!",
        "game": "Etrian Odyssey"
    },
    64:{
        "name": "Main Theme",
        "game": "Fantasian Neo Dimension"
    },
    65:{
        "name": "Divide",
        "game": "Hotline Miami 2: Wrong Number"
    },
    66:{
        "name": "You Will Know Our Names",
        "game": "Xenoblade Chronicles: Definitive Edition"
    },
    67:{
        "name": "Wave Circuit (Medley's Theme)",
        "game": "Gravity Circuit"
    },
    68:{
        "name": "Color Your Night",
        "game": "Persona 3 Reload"
    },
    69:{
        "name": "Battle at the Big Bridge",
        "game": "Final Fantasy V"
    },
    70:{
        "name": "Wave 131",
        "game": "Streets Of Rage 2"
    },
    71:{
        "name": "Ocean Palace",
        "game": "Sonic Heroes"
    },
    72:{
        "name": "Arena 1",
        "game": "One Must Fall 2097"
    },
    73:{
        "name": "Lava Reef Zone Act 2",
        "game": "Sonic Mania"
    },
    74:{
        "name": "Rain from the Ground",
        "game": "Clair Obscur: Expedition 33"
    },
    75:{
        "name": "Redial HD",
        "game": "Bomberman Hero"
    },
    76:{
        "name": "Monoco",
        "game": "Clair Obscur: Expedition 33"
    },
    77:{
        "name": "Staff Roll",
        "game": "Super Mario 64"
    },
    78:{
        "name": "Cabin",
        "game": "Friday The 13th"
    },
    79:{
        "name": "Big Airship",
        "game": "Pop N Twinbee"
    },
    80:{
        "name": "Level 1",
        "game": "Silver Surfer"
    },
    81:{
        "name": "Mission 5",
        "game": "Stellar Assault"
    },
    82:{
        "name": "Rusty Ruins Zone (Act 1)",
        "game": "Sonic 3D Blast (Saturn)"
    },
    83:{
        "name": "Ocean",
        "game": "Vectorman"
    },
    84:{
        "name": "Rusty Ruins Zone (Act 2)",
        "game": "Sonic 3D Blast (Saturn)"
    },
    85:{
        "name": "Menu",
        "game": "Kirby Air Ride"
    },
    86:{
        "name": "(Air Ride) Machine Passage",
        "game": "Kirby Air Ride"
    },
    87:{
        "name": "Aqua Star Theme",
        "game": "Kirby 64 The Crystal Shards"
    },
    88:{
        "name": "Area 1",
        "game": "Blaster Master"
    },
    89:{
        "name": "Rave Dance Tune",
        "game": "Cool Spot"
    },
    90:{
        "name": "Ray of Hope",
        "game": "Corpse Party"
    },
    91:{
        "name": "The Last Desperate Struggle",
        "game": "Ghost Trick: Phantom Detective"
    },
}

var trackIDs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91];


const audioPlayer = document.getElementById('audioPlayer');
const uiTrackInfo = document.getElementById('trackInfo');
const uiAudioPercentage = document.getElementById('audioPlayer');
const uiPercentage = document.getElementsByClassName('audioTimelineBarPercentage')[0];
const uiTimeline = document.getElementsByClassName('audioTimeline')[0];
const uiCurrentTime = document.getElementsByClassName('audioTimelineCurrent')[0];
const uiTotalTime = document.getElementsByClassName('audioTimelineTotal')[0];
let currentTrackIndex = 0;


// functions
function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}



function initRandomPlaylist(){
    //shuffle the trackIDs
    shuffle(trackIDs);
    console.log(trackIDs)
    const currentTrack = trackIDs[currentTrackIndex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game;
    // set first track info
    uiTrackInfo.innerHTML = `${songName} - ${songGame}`
    audioPlayer.src = 'tracks/' + currentTrack + '.mp3';
}

initRandomPlaylist();

// init next track in playlist function
function initNextTrack(){
    // check if currentTrack index is equal to the number of tracks
    if (currentTrackIndex + 1 >= trackIDs.length){
        // if it is then reset the index to zero to replay the playlist
        currentTrackIndex = 0;
    }else{ 
        // if it's not increase the track index
        currentTrackIndex = currentTrackIndex + 1;
    }
    
    const currentTrack = trackIDs[currentTrackIndex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game
    uiTrackInfo.innerHTML = `${songName} - ${songGame}`
    audioPlayer.src = 'tracks/' + currentTrack + '.mp3';
}

// play next track when track ends or when next track is clicked
audioPlayer.addEventListener('ended', initNextTrack);
uiTotalTime.addEventListener('click', initNextTrack);


// init previous track in playlist function
function initPreviousTrack(){
    // check if currentTrack index is greater than 0
    if (currentTrackIndex > 0){
        // if it is, we can decrease it by one for the previous track.
        currentTrackIndex = currentTrackIndex - 1;
    }
    const currentTrack = trackIDs[currentTrackIndex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game
    uiTrackInfo.innerHTML = `${songName} - ${songGame}`
    audioPlayer.src = 'tracks/' + currentTrack + '.mp3';
}

// play previous track when previous track is clicked
uiCurrentTime.addEventListener('click', initPreviousTrack);


//play or pause function
function playPause(){
    if (audioPlayer.duration > 0 && !audioPlayer.paused) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
}

//play or pause when track info is clicked
uiTrackInfo.addEventListener('click', playPause);


// track play head functions
function calculatePercentPlayed() {
	let percent = (audioPlayer.currentTime / audioPlayer.duration).toFixed(2) * 100;
	uiPercentage.style.width = `${percent}%`;
}

function calculateCurrentValue(currentTime) {
	const currentMinute = parseInt(currentTime / 60) % 60;
	const currentSecondsLong = currentTime % 60;
	const currentSeconds = currentSecondsLong.toFixed();
	const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
		currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
	return currentTimeFormatted;
}

function getDuration(event) {
  event.target.currentTime = 0
  event.target.removeEventListener('timeupdate', getDuration)
  console.log(event.target.duration)
}

function initProgressBar() {
    audioPlayer.addEventListener('loadedmetadata', () => {
        if (audioPlayer.duration === Infinity || isNaN(Number(audioPlayer.duration))) {
            audioPlayer.currentTime = 1e101
            audioPlayer.addEventListener('timeupdate', getDuration)
        }
    })

    const currentTime = calculateCurrentValue(audioPlayer.currentTime);
    const totalTime = calculateCurrentValue(audioPlayer.duration);
    uiCurrentTime.innerHTML = currentTime;
    uiTimeline.addEventListener('click', seek);
    uiTotalTime.innerHTML = totalTime;       
    audioPlayer.onended = () => {
        uiPercentage.style.width = 0;
        uiCurrentTime.innerHTML = '00:00';
    };
    function seek(e) {
        const percent = e.offsetX / this.offsetWidth;
        audioPlayer.currentTime = percent * audioPlayer.duration;
    }
    calculatePercentPlayed();
	
}

audioPlayer.addEventListener('timeupdate', initProgressBar);


//make media buttons work  
if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('previoustrack', initPreviousTrack);
    navigator.mediaSession.setActionHandler('nexttrack', initNextTrack);
    navigator.mediaSession.setActionHandler('play', playPause);
    navigator.mediaSession.setActionHandler('pause', playPause);
} 

// chat functions
const params = new URLSearchParams(window.location.search);
const channel = params.get('channel') || 'lowpolyskeleton';
const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: [channel],
});

client.connect().then(() => {
  console.log('connected')
});

client.on('message', (wat, tags, message, self) => {

    if(message.startsWith("!skip") && tags.username == "lowpolyskeleton"){
        initNextTrack();
    }

    if(message.startsWith("!back") && tags.username == "lowpolyskeleton"){
        initPreviousTrack();
    }

});
