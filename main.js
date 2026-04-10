// #region vars
var trackMetadata = {
    1:{
        "name": "Underworld Forest",
        "game": "Last Bible III",
        "comp": "Hiroyuki Yanada"
    },
    2:{
        "name": "Val Ship",
        "game": "Last Bible III",
        "comp": "Hiroyuki Yanada "
    },
    3:{
        "name": "Dream of the Shore Near Another World",
        "game": "Chrono Cross",
        "comp": "Yasunori Mitsuda"
    },
    4:{
        "name": "Underground Ruins",
        "game": "Threads of Fate",
        "comp": "Junya Nakano"
    },
    5:{
        "name": "Stickerbush Symphony",
        "game": "Donkey Kong Country 2",
        "comp": "David Wise"
    },
    6:{
        "name": "Opening Stage (Above Ground)",
        "game": "Mega Man 8",
        "comp": "Shusaku Uchiyama"
    },
    7:{
        "name": "Tengu Man Stage",
        "game": "Mega Man 8",
        "comp": "Shusaku Uchiyama"
    },
    8:{
        "name": "Aqua Man Stage",
        "game": "Mega Man 8",
        "comp": "Shusaku Uchiyama"
    },
    9:{
        "name": "Serenade of Respite (Day)",
        "game": "Sea of Stars",
        "comp": "Yasunori Mitsuda"
    },
    10:{
        "name": "The Apple Market",
        "game": "Mega Man Legends",
        "comp": "Makoto Tomozawa"
    },
    11:{
        "name": "Hills of Intent: Future",
        "game": "the Messenger",
        "comp": "Rainbowdragoneyes"
    },
    12:{
        "name": "The Shopkeeper: Future",
        "game": "the Messenger",
        "comp": "Rainbowdragoneyes"
    },
    13:{
        "name": "Cosmic Temperance",
        "game": "Loop Hero",
        "comp": "Aleksandr Goreslavets"
    },
    14:{
        "name": "Credits",
        "game": "Kirbys Dream Land 3",
        "comp": ""
    },
    15:{
        "name": "Hit the Floor",
        "game": "Katana Zero",
        "comp": "Thijs Lodewijk, Bill Kiley"
    },
    16:{
        "name": "Zangief Theme",
        "game": "Super Street Fighter 2 Turbo",
        "comp": "Yoko Shimomura"
    },
    17:{
        "name": "Guile Theme",
        "game": "Super Street Fighter 2 Turbo",
        "comp": "Yoko Shimomura"
    },
    18:{
        "name": "Under the Rotting Pizza",
        "game": "Final Fantasy VII",
        "comp": "Nobuo Uematsu"
    },
    19:{
        "name": "Costa del Sol",
        "game": "Final Fantasy VII",
        "comp": "Nobuo Uematsu"
    },
    20:{
        "name": "Freya's Theme",
        "game": "Final Fantasy IX",
        "comp": "Nobuo Uematsu"
    },
    21:{
        "name": "Trisection",
        "game": "Final Fantasy Tactics",
        "comp": "Hitoshi Sakimoto"
    },
    22:{
        "name": "Hero's Theme",
        "game": "Final Fantasy Tactics",
        "comp": "Hitoshi Sakimoto"
    },
    23:{
        "name": "Main Theme",
        "game": "Space Harrier",
        "comp": ""
    },
    24:{
        "name": "Chemical Plant Zone",
        "game": "Sonic the Hedgehog 2",
        "comp": "Masato Nakamura"
    },
    25:{
        "name": "Out of His Mind",
        "game": "Breath of Fire IV",
        "comp": "Yoshino Aoki"
    },
    26:{
        "name": "Opening Animation",
        "game": "Breath of Fire IV",
        "comp": "Yoshino Aoki"
    },
    27:{
        "name": "Twilight Express",
        "game": "Battle Mania Daiginjou",
        "comp": "?"
    },
    28:{
        "name": "Kokiri Forest",
        "game": "The Legend of Zelda Ocarina of Time",
        "comp": "Koji Kondo"
    },
    29:{
        "name": "Beach Theme",
        "game": "Plok",
        "comp": "Tim Follin"
    },
    30:{
        "name": "Naked Glow",
        "game": "Ridge Racer Type 4",
        "comp": "Kohta Takahashi"
    },
    31:{
        "name": "Out of Control",
        "game": "Revolt",
        "comp": "Simon Robertson, Stephen Root, Larry Lush, Phil Earl, Dominic Glynn"
    },
    32:{
        "name": "Black Winter Night Sky",
        "game": "TEKKEN 2",
        "comp": "Yoshie Takayanagi"
    },
    33:{
        "name": "Skerries",
        "game": "Blast Corps",
        "comp": "Graeme Norgate"
    },
    34:{
        "name": "Big Snowman",
        "game": "Snowboard Kids",
        "comp": "Isao Kasai, Tomohiko Sato"
    },
    35:{
        "name": "Sunny Mountain",
        "game": "Snowboard Kids 2",
        "comp": "Isao Kasai, Tomohiko Sato"
    },
    36:{
        "name": "Linda's Castle",
        "game": "Snowboard Kids 2",
        "comp": "Isao Kasai, Tomohiko Sato"
    },
    37:{
        "name": "Secret of the Forest",
        "game": "Chrono Trigger",
        "comp": "Yasunori Mitsuda"
    },
    38:{
        "name": "Corridors of Time",
        "game": "Chrono Trigger",
        "comp": "Yasunori Mitsuda"
    },
    39:{
        "name": "High Score",
        "game": "Gods",
        "comp": ""
    },
    40:{
        "name": "Dire Dire Docks",
        "game": "Super Mario 64",
        "comp": "Koji Kondo"
    },
    41:{
        "name": "Black Mage Village",
        "game": "Final Fantasy IX",
        "comp": "Nobuo Uematsu"
    },
    42:{
        "name": "Flutter vs The Gesellschaft",
        "game": "Mega Man Legends",
        "comp": "Makoto Tomozawa"
    },
    43:{
        "name": "Corneria",
        "game": "Star Fox",
        "comp": "Hajime Hirasawa"
    },
    44:{
        "name": "Flying Battery Zone Act 1",
        "game": "Sonic Mania",
        "comp": "Tee Lopes"
    },
    45:{
        "name": "Lava Reef Zone Act 1",
        "game": "Sonic & Knuckles",
        "comp": "?"
    },
    46:{
        "name": "Idaten",
        "game": "Shinobi 3 Return Of The Ninja Master",
        "comp": "?"
    },
    47:{
        "name": "OverDriver",
        "game": "Revolt",
        "comp": "?"
    },
    48:{
        "name": "Rock Solid",
        "game": "Conkers Bad Fur Day",
        "comp": "Robin Beanland"
    },
    49:{
        "name": "Area A",
        "game": "Shatterhand",
        "comp": "?"
    },
    50:{
        "name": "Cat",
        "game": "Minecraft",
        "comp": "?"
    },
    51:{
        "name": "The Wind Can Be Still (Winter Theme)",
        "game": "Stardew Valley",
        "comp": "?"
    },
    52:{
        "name": "Cleopactra",
        "game": "Ms Pac-Man Maze Madness",
        "comp": "?"
    },
    53:{
        "name": "Strike the Earth! Plains of Passage",
        "game": "Shovel Knight",
        "comp": "?"
    },
    54:{
        "name": "Last Surprise",
        "game": "Persona 5",
        "comp": "?"
    },
    55:{
        "name": "Beware the Forest's Mushrooms",
        "game": "Super Mario RPG",
        "comp": "?"
    },
    56:{
        "name": "Investigation ~ Cornered",
        "game": "Phoenix Wright Ace Attorney",
        "comp": "?"
    },
    57:{
        "name": "Stamp Theme [Battle Version]",
        "game": "Final Fantasy VII Rebirth",
        "comp": "?"
    },
    58:{
        "name": "Kyrie's Theme",
        "game": "Final Fantasy VII Rebirth",
        "comp": "?"
    },
    59:{
        "name": "Radical Dreamers",
        "game": "Chrono Cross",
        "comp": "?"
    },
    60:{
        "name": "Intro Theme",
        "game": "Mega Man 3",
        "comp": "?"
    },
    61:{
        "name": "Level 1-2",
        "game": "Star Mazer DSP",
        "comp": "?"
    },
    62:{
        "name": "A Ghost's Pumpkin Soup (Pumpkin Hill)",
        "game": "Sonic Adventure 2",
        "comp": "?"
    },
    63:{
        "name": "That Name Was Engraved Into the 100th Volume!",
        "game": "Etrian Odyssey",
        "comp": "?"
    },
    64:{
        "name": "Sky Tower",
        "game": "Kirbys Return to Dreamland",
        "comp": "?"
    },
    65:{
        "name": "Toxic Caves",
        "game": "Sonic the Hedgehog Spinball",
        "comp": "?"
    },
    66:{
        "name": "You Will Know Our Names",
        "game": "Xenoblade Chronicles",
        "comp": "?"
    },
    67:{
        "name": "Wave Circuit (Medley's Theme)",
        "game": "Gravity Circuit",
        "comp": "?"
    },
    68:{
        "name": "Color Your Night",
        "game": "Persona 3 Reload",
        "comp": "?"
    },
    69:{
        "name": "Battle at the Big Bridge",
        "game": "Final Fantasy V",
        "comp": "?"
    },
    70:{
        "name": "Wave 131",
        "game": "Streets Of Rage 2",
        "comp": "?"
    },
    71:{
        "name": "Ocean Palace",
        "game": "Sonic Heroes",
        "comp": "?"
    },
    72:{
        "name": "Arena 1",
        "game": "One Must Fall 2097",
        "comp": "?"
    },
    73:{
        "name": "Lava Reef Zone Act 2",
        "game": "Sonic Mania",
        "comp": "?"
    },
    74:{
        "name": "Flim Flam",
        "game": "Tetrisphere",
        "comp": "?"
    },
    75:{
        "name": "Redial HD",
        "game": "Bomberman Hero",
        "comp": "?"
    },
    76:{
        "name": "Monoco",
        "game": "Clair Obscur Expedition 33",
        "comp": "?"
    },
    77:{
        "name": "Staff Roll",
        "game": "Super Mario 64",
        "comp": "?"
    },
    78:{
        "name": "Cabin",
        "game": "Friday The 13th",
        "comp": "?"
    },
    79:{
        "name": "Big Airship",
        "game": "Pop N Twinbee",
        "comp": "?"
    },
    80:{
        "name": "Level 1",
        "game": "Silver Surfer",
        "comp": "?"
    },
    81:{
        "name": "Mission 5",
        "game": "Stellar Assault",
        "comp": "?"
    },
    82:{
        "name": "Neon Night-Riders",
        "game": "Turtles in Time",
        "comp": "?"
    },
    83:{
        "name": "Tidal Surge",
        "game": "Vectorman",
        "comp": "?"
    },
    84:{
        "name": "Rusty Ruins Zone (Act 2)",
        "game": "Sonic 3D Blast (Saturn)",
        "comp": "?"
    },
    85:{
        "name": "Steam Gardens",
        "game": "Super Mario Odyssey",
        "comp": "?"
    },
    86:{
        "name": "Metal Beat Part 3",
        "game": "Metal Masters",
        "comp": "?"
    },
    87:{
        "name": "Aqua Star Theme",
        "game": "Kirby 64 The Crystal Shards",
        "comp": "?"
    },
    88:{
        "name": "Area 1",
        "game": "Blaster Master",
        "comp": "?"
    },
    89:{
        "name": "Level 3",
        "game": "Star Mazer DSP",
        "comp": "?"
    },
    90:{
        "name": "Ray of Hope",
        "game": "Corpse Party",
        "comp": "?"
    },
    91:{
        "name": "The Last Desperate Struggle",
        "game": "Ghost Trick Phantom Detective",
        "comp": "?"
    },
    92:{
        "name": "Stage 1",
        "game": "Advanced Busterhawk Gleylancer",
        "comp": "?"
    },
    93:{
        "name": "Flood of Power",
        "game": "Midnight Resistance",
        "comp": "?"
    },
    94:{
        "name": "Stage 1.1",
        "game": "Sparkster",
        "comp": "?"
    },
    95:{
        "name": "Outride a Crisis",
        "game": "Super Hang-On",
        "comp": "?"
    },
    96:{
        "name": "Opening Theme",
        "game": "Traysia",
        "comp": "?"
    },
    97:{
        "name": "A Memory That Cannot Be Pursued",
        "game": "Soma Bringer",
        "comp": "Yasunori Mitsuda"
    },
    98:{
        "name": "Marlin Fight",
        "game": "The Blue Marlin",
        "comp": ""
    },
    99:{
        "name": "Part Man, Part Ant",
        "game": "Grounded",
        "comp": ""
    },
    100:{
        "name": "Noble Spirit",
        "game": "Grounded",
        "comp": ""
    },
    101:{
        "name": "Take the Winnings and Run",
        "game": "Breath of Fire IV",
        "comp": "Yoshino Aoki"
    },
    102:{
        "name": "Krypton Garden",
        "game": "Shatter",
        "comp": ""
    },
    103:{
        "name": "The Journey Is Your Companions",
        "game": "Izuna 2",
        "comp": ""
    },
    104:{
        "name": "Jaw-Breaking News!",
        "game": "TMNT - Shredders Revenge",
        "comp": ""
    },
    105:{
        "name": "We Ain't Came to Lose",
        "game": "TMNT - Shredders Revenge",
        "comp": ""
    },
}

// create array from tracks
var trackIDs = Object.entries(trackMetadata).map(([key]) => key);

const audioPlayer = document.getElementById('audioPlayer');
audioPlayer.volume = .5
const uiTrackInfo = document.getElementById('trackInfo');
const uiAudioPercentage = document.getElementById('audioPlayer');
const uiPercentage = document.getElementsByClassName('audioTimelineBarPercentage')[0];
const uiTimeline = document.getElementsByClassName('audioTimeline')[0];
const uiCurrentTime = document.getElementsByClassName('audioTimelineCurrent')[0];
const uiTotalTime = document.getElementsByClassName('audioTimelineTotal')[0];
let currentTrackIndex = 0;
// #endregion - vars


// #region -  functions
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

function checkScroll(){
    const elements = document.getElementsByClassName('scroll');

    for(let element of elements){
        const ptag = element.querySelector('p')
        const pw = element.querySelector('p').offsetWidth;
        const cw = element.offsetWidth;
        const amount = (pw / cw * 100 - 100) / 2;
        console.log(amount)

        
        if(pw > cw){
            if (amount > 0 && amount <= 20){
                ptag.classList.add('animate-scroll-20');
            }
            else if (amount > 20 && amount <= 40){
                ptag.classList.add('animate-scroll-40');
            }
            else if (amount > 40 && amount <= 50){
                ptag.classList.add('animate-scroll-50');
            }
            else if (amount > 50 && amount <= 70){
                ptag.classList.add('animate-scroll-70');
            }else{
                ptag.classList.add('animate-scroll-100');
            }
        }
    }
}

function setTrackInfo(track, name, game){
    const songImg = 'trackImgs/' + game + '.jpg';
    audioPlayer.src = 'tracks/' + track + '.mp3';
    uiTrackInfo.innerHTML = `<div class="scroll"><p><b>Song:</b>\u00A0${name}</p></div><div class="scroll"><p><b>Game:</b>\u00A0${game}</p></div>`
    document.documentElement.setAttribute("style", `--bgImg: url("${songImg}")`)
    checkScroll();

    document.title = `${name} - ${game}`
    if ("mediaSession" in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: name,
            artist: game,
            artwork: [{ src: songImg }],
        });
    }
}

function initRandomPlaylist(){
    //shuffle the trackIDs
    shuffle(trackIDs);
    const currentTrack = trackIDs[currentTrackIndex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game;
    setTrackInfo(currentTrack, songName, songGame);

    for (let i = 1; i < trackIDs.length; i++) {
        const trackIndex = trackIDs[i];
        const listSongName = trackMetadata[trackIndex].name;
        const listSongGame = trackMetadata[trackIndex].game;
        document.getElementById('tracklist').innerHTML += `<div class="tracklistItem" data-dex="${i}"><div><b>Song:</b>\u00A0${listSongName}</div><div><b>Game:</b>\u00A0${listSongGame}</div></div>`   
    }
}
initRandomPlaylist();

// init next track in playlist function
function initNextTrack(){
    
    // check if currentTrack index is equal to the number of tracks
    if (currentTrackIndex + 1 >= trackIDs.length){
        // if it is then reset the index to zero to replay the playlist
        window.location.reload();
    }else{ 
        // if it's not increase the track index
        currentTrackIndex = currentTrackIndex + 1;
    }
    
    const currentTrack = trackIDs[currentTrackIndex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game;
    setTrackInfo(currentTrack, songName, songGame);

    document.getElementById('tracklist').removeChild(document.getElementById('tracklist').querySelectorAll('.tracklistItem:not(.deleteMe)')[0])
}

// play next track when track ends or when next track is clicked
audioPlayer.addEventListener('ended', initNextTrack);
uiTotalTime.addEventListener('click', initNextTrack);


// init previous track in playlist function
function initPreviousTrack(){ 
    let currentTrackIndexActual = currentTrackIndex;

    // check if currentTrack index is greater than 0
    if (currentTrackIndex > 0){
        // if it is, we can decrease it by one for the previous track.
        currentTrackIndex = currentTrackIndex - 1;
    }
    const currentTrack = trackIDs[currentTrackIndex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game;
    setTrackInfo(currentTrack, songName, songGame);

    const currentTrackActual = trackIDs[currentTrackIndexActual];
    const listSongName = trackMetadata[currentTrackActual].name;
    const listSongGame = trackMetadata[currentTrackActual].game;

    let tracklistItem = document.createElement("div");
    tracklistItem.classList.add('tracklistItem');
    tracklistItem.dataset.dex = currentTrackIndexActual;
    tracklistItem.innerHTML = `<div><b>Song:</b>\u00A0${listSongName}</div><div><b>Game:</b>\u00A0${listSongGame}</div>`

    if (currentTrackIndexActual > 0){
        document.getElementById('tracklist').prepend(tracklistItem)
    }
    
}

// play previous track when previous track is clicked
uiCurrentTime.addEventListener('click', initPreviousTrack);


// play selected track from tracklist
function initTracklistTrack(dex){
    dex = Number(dex)
    currentTrackIndex = dex

    const currentTrack = trackIDs[dex];
    const songName = trackMetadata[currentTrack].name;
    const songGame = trackMetadata[currentTrack].game;
    setTrackInfo(currentTrack, songName, songGame);

    let tracklistItems = document.getElementById('tracklist').getElementsByClassName('tracklistItem');

    for (let i = 0; i < tracklistItems.length; i++) {
        const tracklistItem = tracklistItems[i];
        
        if (Number(tracklistItem.dataset.dex) <= Number(dex)){
            tracklistItem.classList.add('deleteMe');
        }
    }

    let deleteUs = document.getElementById('tracklist').getElementsByClassName('deleteMe');
    for (let i = 0; i < deleteUs.length; i++) {
        const deleteMe = deleteUs[i];
        deleteMe.remove();
    }
}

// bind click events to tracklistItems 
document.addEventListener("click", function(e){
  if(e.target.classList.contains("tracklistItem")){
    let targetDex = e.target.dataset.dex
    initTracklistTrack(targetDex);
  }
});

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

// set volume funciton
function volumeSet(vol){
    audioPlayer.volume = vol
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

    if(message.startsWith("!skip") && (tags.username == "lowpolyskeleton" || tags.mod == true)){
        initNextTrack();
    }

    if(message.startsWith("!back") && (tags.username == "lowpolyskeleton" || tags.mod == true)){
        initPreviousTrack();
    }

    if((message.startsWith("!play") || message.startsWith("!pause")) && (tags.username == "lowpolyskeleton" || tags.mod == true)){
        playPause();
    }

    if(message.startsWith("!vol") && (tags.username == "lowpolyskeleton" || tags.mod == true)){
        let chatVol = message.split("!vol")[1];
        chatVol = chatVol.trim();
        volumeSet(chatVol)
    }
});
