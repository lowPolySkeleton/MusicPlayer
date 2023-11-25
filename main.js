var sData = {
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
}

var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var gen_nums = [];

function in_array(array, el) {
   for(var i = 0 ; i < array.length; i++) 
       if(array[i] == el) return true;
   return false;
}

function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(gen_nums, rand)) {
       gen_nums.push(rand); 
       return rand;
    }
    return get_rand(array);
}

function $(id) { return document.getElementById(id); };
function $$(className) { return document.querySelector(className); };
const trackInfo = document.getElementById('trackInfo');
const audioPlayer = document.getElementById('audioPlayer');
const uiaudio = 'audioPlayer';
const uipercentage = '.audio__timeline-bar-percentage';
const uiaudioTimeline = '.audio__timeline';
const uicurrentTime = '.audio__timeline-current';
const uitotalTime = '.audio__timeline-total';


function calculatePercentPlayed() {
	let percentage = (audioPlayer.currentTime / audioPlayer.duration).toFixed(2) * 100;
	$$(uipercentage).style.width = `${percentage}%`;
}

function calculateCurrentValue(currentTime) {
	const currentMinute = parseInt(currentTime / 60) % 60;
	const currentSecondsLong = currentTime % 60;
	const currentSeconds = currentSecondsLong.toFixed();
	const currentTimeFormatted = `${currentMinute < 10 ? `0${currentMinute}` : currentMinute}:${
		currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds
	}`;
	return currentTimeFormatted;
}

function initProgressBar() {
	const currentTime = calculateCurrentValue(audioPlayer.currentTime),
		  totalTime = calculateCurrentValue(audioPlayer.duration);
	$$(uicurrentTime).innerHTML = currentTime;
	$$(uiaudioTimeline).addEventListener('click', seek);
	$$(uitotalTime).innerHTML = totalTime;       
	audioPlayer.onended = () => {
		$$(uipercentage).style.width = 0;
		$$(uicurrentTime).innerHTML = '00:00';
	};
	function seek(e) {
		const percent = e.offsetX / this.offsetWidth;
		audioPlayer.currentTime = percent * audioPlayer.duration;
	}
	calculatePercentPlayed();
}

$(uiaudio).addEventListener('timeupdate', initProgressBar);

function playlist() {
    var nextSong = '';
    audioPlayer.addEventListener('ended', function(){
        var nextTrackNum = get_rand(nums);
        nextSong = 'tracks/' + nextTrackNum + '.mp3';
        trackInfo.innerHTML = '<b>' + sData[nextTrackNum].name + '</b><br>' + sData[nextTrackNum].game
        console.log(nextSong)
        audioPlayer.src = nextSong;
        audioPlayer.load(); 
        audioPlayer.play();
    });
    
}

var firstTrackNum = get_rand(nums);
var nextSong = 'tracks/' + firstTrackNum + '.mp3';
trackInfo.innerHTML = '<b>' + sData[firstTrackNum].name + '</b><br>' + sData[firstTrackNum].game
console.log(nextSong)
audioPlayer.src = nextSong;

playlist();
