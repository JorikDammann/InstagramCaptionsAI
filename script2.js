const captionsDatabase = {
    "Aura (Super Hard)": ["her favorite color purple so i blue her back out and left her on red", "once u start learning the L disappears", 
    "they think im from Iraw the way i tally bands", "i made her do the laundry bc i never fold", "my story written in braille u gotta feel it", 
    "money don't come fast but i do", "i walk around with my pants down to show im the hardest there is", "bag so deep i found a fry at the bottom", 
    "she played me like a deck of cards but i had another queen up my sleeve", "GPS said its my turn", "no pen and paper but i still draw attention", 
    "there's no traffic when you're in your own lane", "Disney called and said they like how fire my Pixar", "i must be mexican bc i dont care what a Jose", 
    "crown heavy but its worth the weight", "i have a gambling addiction, I can't stop betting on myself", "u don't worry abt fitting in when u custom made",
  "i need a room full of mirrors so I can be surrounded by winners"],

   "Basic": [
    "back at it", "no thoughts just vibes", "casual", "currently", "golden", "felt cute", "living", 
    "photo evidence", "me again", "doing my thing", "life lately", "this week", "swag", "checkin in", 
    "so far so good", "best of the best", "today", "moments", "serene", "quality dump for u", "long overdue", 
    "sugar rush", "hello", "oh hey whats up?!!", "rad", "anyways wyd?", "carry on", "pure", "photo dump", 
    "don't mind me", "oh how i love life", "memories", "some moments", "golden hour", "here's some pics of me", 
    "simple things", "living easy", "bliss", "ily", "tadaaaa", "xo", "favorites folder", "my life b like", 
    "best moments", "meanwhile", "her", "me", "soft glow", "chill mode", "forever mood", "lazy days", 
    "energy shift", "sun kissed", "light work", "wavy", "mood forever", "photo album", "all love", "lowkey", 
    "minimal effort", "big mood", "nothing crazy", "midnight thoughts", "soft life", "clean slate", 
    "off the grid", "late nights", "in my own world", "no rush", "no pressure", "just here", "quick break", 
    "subtle flex", "main character", "no words needed", "golden state", "postcard moments", "private mode", 
    "breezy", "let it be", "no filters", "waded", "light and easy", "cozy", "minding mine", "effortless", 
    "off duty", "a little something", "glow", "the usual", "enjoying life", "free", "not much just chillin", 
    "moving different", "everyday magic", "so it goes", "weekend recap", "all that", "low maintenance", 
    "golden hour hits", "no second takes", "just me", "dream state", "summer forever", "sunset club"
  ],
  "No Special Occasion, Just Good Pics" : [
    "study break", "library core", "big test tmrw", "coffee first", "running on caffeine", "late night cram", 
    "sweatpants era", "college things", "campus cutie", "just vibes", "dorm life", "another 8am", "sleep? never heard of her", 
    "study sesh", "group project struggles", "living in the library", "all-nighter loading", "finals szn", 
    "friday feeling", "thirsty thursday", "best decision ever", "first day of class", "weekend mode", 
    "girl dinner", "saturday slump", "where’s my laptop", "need a nap", "longest week ever", "somehow surviving", 
    "extra shot please", "weekend getaway", "good grades pending", "college diaries", "sorority things", 
    "sweater weather", "football season", "tailgate ready", "frat basement core", "campus queen", "hot girl semester", 
    "just turned in my essay", "is it break yet?", "dropped my coffee again", "brb graduating", "doing the most", 
    "taking attendance", "another zoom class", "i should be studying", "living my best life", "messy bun and done", 
    "student discount please", "degree pending", "guess who’s late again", "missing home", "taking notes or doodling?", 
    "running on iced coffee", "made it to class on time", "syllabus week slay", "brain = fried", "got lost on campus", 
    "oops i overslept", "notes app therapy", "late night snacks", "chasing deadlines", "doing my best", 
    "surviving not thriving", "sophomore slump", "is it summer yet?", "academic weapon", "wifi went out mid-class", 
    "someone send help", "3 assignments due at 11:59", "preppy academia", "finals countdown", "sunday scaries", 
    "college bucket list", "nap queen", "my brain hurts", "making memories", "campus celeb", "went to class… kinda", 
    "catch me at the library", "reading for fun?", "college core", "someone adopt me", "laundry is my enemy", 
    "out of dining dollars", "no thoughts just coffee", "fresh out of motivation", "walking lecture era", 
    "wearing my backpack wrong", "another essay done", "drowning in deadlines", "went to office hours", 
    "wrote a paper in 2 hours", "no sleep just dreams", "backpack stays packed", "running on vibes", 
    "lab report due", "final grade manifesting", "one step closer to my degree", "college is a scam", 
    "academic crisis", "brain officially off", "see you at graduation", "thriving (kind of)"
  ],
   "Vacation" : [
    "back to reality", "home was fun", "break went too fast", "guess I live at school now", "reunited with my laptop", 
    "not ready for this", "back to the grind", "see you next break", "goodbye sleep", "no more beach days", 
    "back to dorm food", "that went by fast", "goodbye vacation", "hello stress", "back at it", "take me back", 
    "college mode on", "who let school start again?", "break was a blur", "reality check", "see you later paradise", 
    "no thoughts just memories", "vacay is over", "counting down to summer", "back on campus", "back to business", 
    "too soon", "over already?", "was that a fever dream?", "back to overpriced coffee", "one step closer to graduation", 
    "last bit of freedom", "didn’t read a single email", "airport mode", "packing struggle", "ready or not", 
    "missing the sun already", "back in my student era", "syllabus week incoming", "goodbye fun hello finals", 
    "this semester is gonna hurt", "how do I do homework again?", "delulu era is over", "vacation me was better", 
    "back to reality ugh", "longest travel day ever", "so long sweet freedom", "time to be a student again", 
    "break was a dream", "alarm clock reactivated", "final stretch", "home was peaceful", "so much laundry to do", 
    "back to the library", "didn’t open my laptop once", "college brain loading", "one day back and I’m already tired", 
    "trip recap", "no more vacation mode", "can I just drop out?", "back to my campus personality", "break was not long enough", 
    "reality hit hard", "so many memories", "just touched down", "break mood forever", "why does school exist", 
    "goodbye tan hello textbooks", "back to my 8am class", "leaving home again", "take me back to the beach", 
    "vacay withdrawal", "the countdown to summer starts now", "first day back fit check", "miss me with this syllabus", 
    "one last break selfie", "college brain rebooting", "bye bye family", "first lecture = instant regret", 
    "break was a fever dream", "reality called I hung up", "goodbye vacation me", "time to set 50 alarms", 
    "didn’t miss this", "campus isn’t ready for me", "guess I should unpack", "vacay photos pending", 
    "no more sleeping in", "starting the semester strong (hopefully)", "where did break go?", "not emotionally prepared", 
    "it’s giving academic weapon", "college is calling", "back to bad habits", "mentally still on vacation", 
    "packing procrastination", "see you in my next break", "new semester new me", "was fun while it lasted", 
    "back to overpriced textbooks", "daydreaming about break", "one break closer to graduation", "it’s been real", 
    "class starts tomorrow send help", "break may be over but the memories stay"
  ],

  "Dump" : [
    "this week:", "life lately", "my life b like", "memories", "meanwhile", "oh how i love life",
    "best of the best", "quality dump for u", "moments i wish i could re live", "enjoying life",
    "favorites folder", 
    "it's me again", "rad", "yo", "xo", "currently", "in my own world",
    "tadaaaa", "life lately", "so far so good", "all that", "checkin in", "her", "me", "anyways wyd?",
    "carry on", "here's some pics of me", "dont mind me", "today", 
    "ily", "bliss", "hello", "serine", "life", "lovely", "living", "some moments", "sugar rush", "daydreaming", "golden", "pure", "<3", 
    "yo", "wadded", "my life", "swag", "oh hey whats up?!!", "long overdue...", "(day of the week) alert", "this week", "life lately", "my life b like", "memories", "meanwhile", "oh how i love life",
    "best of the best", "quality dump for u", "moments i wish i could re live", "enjoying life",
    "favorites folder", "it's me again", "rad", "yo", "xo", "currently", "in my own world",
    "tadaaaa", "so far so good", "all that", "checkin in", "her", "me", "anyways wyd",
    "carry on", "here's some pics of me", "dont mind me", "today", "ily", "bliss", "hello",
    "serene", "life", "lovely", "living", "some moments", "sugar rush", "daydreaming", "golden",
    "pure", "<3", "wadded", "my life", "swag", "oh hey whats up?!!", "long overdue",
    "(day of the week) alert", "energy", "caught up", "easy", "no rush", "sunkissed", "day by day",
    "seen", "good times", "not much", "this & that", "lazy days", "no pressure", "slow motion",
    "breeze", "photosynthesis", "usual", "hi again", "one for the books", "brb", "big slay", 
    "replay", "just bc", "long story short", "oops", "zzz", "cozy", "somewhere", "hey", "silence", 
    "mind blank", "say less", "it's giving", "moodboard", "random", "out n about", "just a sec", 
    "kinda", "sun & moon", "catching feelings", "this", "irl", "big vibe", "no filter", "reality check", 
    "real ones", "don’t ask", "forgot to post", "thinking about", "at last", "lol ok", "last night", 
    "love that", "a look", "mhm", "proof", "screenshot", "that’s it", "small talk", "yawn", "deja vu", 
    "first time", "cool", "again", "low effort", "glimpse", "found this", "okay then", "rewind", 
    "mystery", "wait for it", "somehow", "underrated", "a moment", "visuals", "blur", "hold up", 
    "more later", "genuine", "pause", "glitch", "no context", "it’s whatever", "what even", "forgotten",
    "might delete", "just me", "details", "kept it simple", "see u", "no words", "quick one", 
    "no idea", "outtakes", "midsummer", "before i forget", "soft reminder", "my pov", "real quick",
    "insert caption", "overexposed", "lowkey obsessed", "here we go", "one and done", "not deep", 
    "repost", "offline", "behind the scenes", "good call", "trust me", "unbothered", "wouldn’t guess", 
    "throwback?", "more soon", "less is more", "say what", "somehow iconic", "what a concept", "raw", 
    "hard launch", "wish you were here", "???", "just a phase", "go again", "shameless", "prequel", 
    "unfiltered", "not even trying", "this angle", "aesthetic", "tried my best", "to be continued"],

     "Beach / Pool / Swimming" : [
    "mermaids?", "catch me actually in the pool", "pool days=best days", "*emojis of the colors of ur swimsuit*",
    "good for the soul", "swimming w the fishies", "refreshing", "shark bait", "sun bum", "summer preview", "a little dose of sunshine", "sunny little today",
    "today's view", "peace of mind", "living.", "pressing pause", "hows the ville?", "only smiles here",
    "ootd: bikini emoji", "always a pleasure", "[insert location]!", "more days like this one please!",
    "[insert location] never fails", "[insert location] u blew me away", "no place like [insert location]",
    "no complaints", "<3 the beach", "whats up [insert location]", "best week ever",
    "all smiles in [insert location]", "until next time", "sunny hunny", "my happy place <3",
    "nice little break", "enjoying myself", "vacay all day", "beach luver", "smiles 24/7", "pit stop", "who else would i be with",
    "morning/evening swim"],

     "Aesthetic / No People" : [
    "the great outdoors", "on an adventure", "ill be here", "happy here",
    "yay this is cool", "this was fun", "in awe", "im staying here forever", "i understand football", 
    "rise & shine", "sunset/sunrise enthusiasts", "pure happiness",
    "only an early bird if it includes the sunrise", "the sky speaks for itself", "too good to be true",
    "sun dazed", "bliss & sun kissed", "this will do", "checkin in from [insert location]", "serene",
    "a place only we know", "i think i'll stay here forever", "meanwhile in [insert location]", "wish u were here",
    "cant get enough", "good as it gets", "in my element", "somewhere sunny", "postcards from [insert location]",
    "my digital postcard"],

     "Boyfriend" : [
    "my boy", "cant get rid of him", "butterflies", "pretty boy & i", "w my boy", "happy w him",
    "proud girlfriend", "dibs (for a boyfriend)", "wasn't playing cards but i pulled a king", "my boy", "cant get rid of him", "butterflies", "pretty boy & i", "w my boy", "happy w him",
  "proud girlfriend", "dibs", "wasn't playing cards but i pulled a king", "mine", "him", "no refunds", 
  "best decision ever", "mr. steal my heart", "locked in", "love this guy", "he’s a keeper", "had to", 
  "look at him", "say hi to my favorite", "stuck with me", "he’s alright i guess", "lowkey obsessed", 
  "the chosen one", "soft launch", "hard launch", "wouldn’t trade", "my personal heater", "can’t complain", 
  "all mine", "my favorite", "us", "no takebacks", "glad i found him", "he’s kinda cute", "would recommend", 
  "never letting go", "taken", "one of one", "found him in the wild", "can’t believe this is real", 
  "who let me have this", "best +1", "10/10", "we just vibing", "permanent plus one", "he’s my problem now", 
  "the real main character", "who knew", "good catch", "smiling because of him", "it’s him", "nothing better", 
  "can’t top this", "just us", "so lucky", "wouldn’t change a thing", "pretty solid choice", "my lucky charm", 
  "partner in crime", "so it begins", "the one", "boyfriend of the year", "took a chance", "would swipe right", 
  "boy math: he’s mine", "this guy", "love u mean it", "smitten", "stealing hoodies forever", "we make sense", 
  "the hype is real", "real deal", "he’s stuck with me", "partner in everything", "good energy", "yup", 
  "perfectly matched", "he said yes", "wouldn’t ghost him", "he wins", "power couple", "soulmate stuff", 
  "boyfriend appreciation post", "my biggest fan", "that’s my man", "can’t take my eyes off", "one and only", 
  "just a little obsessed", "sweetest", "just us two", "hand in hand", "only one i need", "ride or die", 
  "better together", "wasn’t expecting this", "making memories", "he’s it", "trophy boyfriend", 
  "so glad i said yes", "the best surprise", "love love love", "my forever", "he makes life better", 
  "i win", "how lucky am i"],

    "Birthday" : [
    "celebrating @___",
    "w the birthday girl", "age!!!!!!!!!", "my own personal new years", "same time next year?!",
    "national me day", "extra candle on the cake", "year ___", "same old just a year older", "birthday behavior", "party time", "another lap around the sun", "aging like fine wine", 
  "another one", "still got it", "me day", "feelin’ ___", "golden year", "just getting started", 
  "the main event", "all about me", "birthday magic", "still young", "one more for the books", 
  "making a wish", "growing and glowing", "new age unlocked", "turning up", "birthday mode", 
  "same me, just older", "lowkey iconic", "time flies", "cheers to me", "how did we get here", 
  "big ___ energy", "new number who dis", "keep the candles coming", "not counting", 
  "balloons and chaos", "officially grown", "this calls for cake", "another milestone", 
  "good vibes only", "cheers to another year", "leveling up", "the world’s lucky to have me", 
  "aging gracefully", "forever young", "new era", "full circle", "more life", "all about today", 
  "wiser?", "birthday glow", "it’s giving birthday", "not aging just upgrading", "another trip around the sun", 
  "aging like a legend", "current status: celebrating", "turning ___ and thriving", "birthday magic loading", 
  "growing up but never growing old", "same me, just more experienced", "the countdown to cake begins", 
  "party of one", "putting the ‘happy’ in birthday", "celebrate me", "making the most of ___", 
  "today’s agenda: cake", "not ready to be ___", "feeling festive", "cheers to more memories", 
  "too many candles to count", "starting fresh", "the best day", "woke up another year older", 
  "another reason to celebrate", "collecting birthday wishes", "turning heads and turning ___", 
  "new age, same chaos", "another excuse to party", "so this is ___", "aging like a pro", 
  "one more year, one less care", "birthdays hit different", "time to shine", "stealing the spotlight", 
  "never too old for cake", "making birthday history", "all eyes on me", "just getting started", 
  "today’s a big deal", "birthday crown on", "hello ___", "today, we feast", "taking my day off", 
  "wishing myself the best", "another adventure begins", "milestone moment"],

    "Concert" : [
    "five bucks they say every city is their fav", "huge fans for sure", "worth the hype",
    "in case u missed it", "ily @the_artist", "bae af @the_artist", "dreaming", "still crying",
    "sreaming", "five bucks they say every city is their fav", "huge fans for sure", "worth the hype",
  "in case u missed it", "ily @the_artist", "bae af @the_artist", "dreaming", "still crying", 
  "screaming", "unreal", "volume up", "setlist of my dreams", "no thoughts just music", 
  "crowd energy unmatched", "we were there", "concert core", "wish it never ended", "felt that", 
  "a moment", "pure chaos", "better live", "nothing else matters", "repeat please", "deaf now", 
  "singing way too loud", "this was everything", "can’t move", "could cry", "still processing", 
  "core memory", "did that just happen", "another level", "that’s my band", "front row energy", 
  "never the same again", "too good", "felt famous", "one for the books", "living the dream", 
  "lights out", "best night ever", "main character moment", "out of body experience", 
  "someone pinch me", "better than i imagined", "forever obsessed", "another show?", 
  "setlist perfection", "high on music", "best crowd ever", "no words", "this song live >>>", 
  "beyond iconic", "so real", "say it with me", "had to be there", "starstruck", "just vibes", 
  "music hits different", "guitar solos cure everything", "felt infinite", "won’t shut up about this", 
  "when’s the next one", "not even real", "screaming crying throwing up", "could hear this forever", 
  "losing my voice", "absolutely unreal", "why am i emotional", "bass in my soul", "drums hit different", 
  "still hyped", "1000/10 experience", "what a night"],

    "Cold Weather" : [
    "cheesin for da sun", "brrrr", "freezing!!", "cozy up", "fall af",
    "in case u didn't notice its snowing", "im cold hbu", "frostbite!", "sand >> snow", "cheesin for da sun", "brrrr", "freezing!!", "cozy up", "fall af", 
  "in case u didn't notice its snowing", "im cold hbu", "frostbite!", "sand >> snow", 
  "shivering", "need more layers", "snowed in", "winter blues", "ice ice baby", 
  "not built for this", "cold hands warm heart", "big coat season", "let it snow", 
  "lost in the fog", "hibernation mode", "crunchy leaves", "frost on repeat", 
  "so so chilly", "breath in the air", "blanket burrito", "hot chocolate era", 
  "silent snowfall", "early sunsets", "gloves required", "feeling frosty", 
  "walkin in a winter wonderland", "slushy streets", "puffy jacket kinda day", 
  "fireplace season", "storm warning", "cold front incoming", "grey sky mood", 
  "scarves & mittens", "the sky feels heavy", "iced over", "hats on", 
  "snow day pls", "boots mandatory", "wind chill", "crystal mornings", 
  "snowflakes falling", "cozy core", "just a little frozen", "wrapped up", 
  "breath like smoke", "hot tea fixes everything", "the world is quiet", 
  "slippery when icy", "so much static", "numb fingers", "sunset at 4pm", 
  "cold and cute", "knitwear season", "time for layers", "do i even own gloves", 
  "lost in the cold", "car is frozen shut", "beyond chilly", "waiting for spring", 
  "dressed like a marshmallow", "first frost", "watching my breath", "crisp air", 
  "boots & beanies", "frozen windshield", "biting cold", "can’t feel my face", 
  "feet are icicles", "hand warmers needed", "chapped lips era", "cloudy & cold", 
  "smells like snow", "air feels sharp", "shades of grey", "bare trees", 
  "blanket season", "snow flurries", "early nightfall", "looking for the sun", 
  "static hair era", "socks doubled up", "the crunch of ice", "cold silence", 
  "feeling antarctic", "frozen morning", "the chill is real", "mood: frost", 
  "colder than my ex", "gloves or suffer", "need more sweaters", "boots on repeat", 
  "radiator appreciation post", "morning frost", "clouds feel heavy", "sleeping in", 
  "shoulders up to my ears", "plz send warmth", "snow boots required", "cozy but frozen"],

    "Formal/Dance" : [
    "participation points", "that time of year again", "always down to dance", "casual saturday", "participation points", "that time of year again", "always down to dance", "casual saturday",  
  "made it", "showed up", "just a little fancy", "a night", "somewhat elegant", "last minute fit",  
  "shiny things", "dressed accordingly", "dance floor calling", "almost tripped", "this happened",  
  "semi-formal effort", "a lil sparkle", "big dress energy", "black tie-ish", "mildly overdressed",  
  "who knew", "ran out of hairspray", "shoes hurting", "twirling", "eventful", "one for the books",  
  "made an appearance", "flash warning", "good lighting", "camera roll full", "low effort high impact",  
  "high heels low tolerance", "dancing or surviving?", "last minute plans", "midnight somewhere",  
  "formal-ish", "got invited", "only here for the photos", "too much tulle", "fake lashes struggling",  
  "everybody say prom", "decent turnout", "lights too bright", "popped up", "big night", "well that was fun",  
  "not bad", "sparkly moments", "some kinda magic", "shoes off", "expectations met", "dress rental success",  
  "barely made it", "dance floor takeover", "fit check", "not my usual scene", "twinkle twinkle",  
  "party of one", "mid-dance break", "lowkey eventful", "so this happened", "polished for once",  
  "stray bobby pins everywhere", "waiting for the slow song", "long night short", "formally chaotic",  
  "pov: someone forced me to come", "photo dump pending", "lace & chaos", "actual effort was made",  
  "semi-prepared", "red carpet moment", "flashing lights", "event season", "yes, I wore this",  
  "styled & profiled", "coat check", "suit up", "glamorous? kinda", "music too loud", "little bit fancy",  
  "no one saw that", "spilled something", "temporary Cinderella", "formal-ish behavior",  
  "in my gala era", "tried my best", "just along for the ride", "theme unclear", "ran out of poses",  
  "mildly iconic", "better in motion", "one-night-only", "who let me in", "somewhat put together",  
  "one glass of punch in", "fake it till you make it", "barely functional", "coordinated chaos",  
  "high heels, low patience", "photobooth moment", "vaguely elegant", "made an effort", "not bad for a night"]
};
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is fully loaded!");
    
    const imageUpload = document.getElementById("imageUpload");
    const imagePreviewGrid = document.getElementById("imagePreviewGrid");
    const categoryDropdown = document.getElementById("categoryDropdown");
    const locationInput = document.getElementById("locationInput");
    const uploadButton = document.getElementById("uploadButton");
    const resultsDiv = document.getElementById("results");
    let currentCaption = "";
    let bestFitCaptions = [];

    let uploadedImages = [];
    let currentImageIndex = 0;
    let canClick = true;

    imageUpload.addEventListener("change", function () {
        const newFiles = Array.from(imageUpload.files);

        newFiles.forEach(file => {
            if (uploadedImages.length < 10) {
                if (file.type === "image/heic" || file.name.endsWith(".heic")) {
                    convertHEICtoJPG(file).then(jpgDataUrl => {
                        uploadedImages.push(jpgDataUrl);
                        updateImageGrid();
                    }).catch(error => {
                        console.error("Error converting HEIC:", error);
                    });
                } else {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        uploadedImages.push(e.target.result);
                        updateImageGrid();
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    });

    async function convertHEICtoJPG(file) {
        return new Promise((resolve, reject) => {
            heic2any({ blob: file, toType: "image/jpeg" })
                .then((convertedBlob) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(convertedBlob);
                    reader.onload = () => resolve(reader.result);
                    reader.onerror = (error) => reject(error);
                })
                .catch((error) => reject(error));
        });
    }

    function updateImageGrid() {
        imagePreviewGrid.innerHTML = "";
        uploadedImages.forEach((image, index) => {
            const slot = document.createElement("div");
            slot.classList.add("image-slot");
            slot.draggable = true;
            slot.dataset.index = index;

            const img = document.createElement("img");
            img.src = image;
            img.dataset.index = index;

            const removeButton = document.createElement("div");
            removeButton.classList.add("remove-button");
            removeButton.textContent = "-";
            removeButton.addEventListener("click", function () {
                uploadedImages.splice(index, 1);
                updateImageGrid();
            });

            slot.appendChild(removeButton);
            slot.appendChild(img);
            imagePreviewGrid.appendChild(slot);

            // Drag-and-drop functionality
            slot.addEventListener("dragstart", dragStart);
            slot.addEventListener("dragover", dragOver);
            slot.addEventListener("drop", drop);
            slot.addEventListener("dragend", dragEnd);
        });
    }

    let draggedIndex = null;

    function dragStart(e) {
        draggedIndex = Number(e.target.dataset.index);
        e.target.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
    }

    function dragOver(e) {
        e.preventDefault();
        const target = e.target.closest(".image-slot");
        if (target && !target.classList.contains("dragging")) {
            target.classList.add("drag-over");
        }
    }

    function drop(e) {
        e.preventDefault();
        const target = e.target.closest(".image-slot");

        if (!target || draggedIndex === null) return;

        const droppedIndex = Number(target.querySelector("img").dataset.index);

        if (draggedIndex !== droppedIndex) {
            let temp = uploadedImages[draggedIndex];
            uploadedImages[draggedIndex] = uploadedImages[droppedIndex];
            uploadedImages[droppedIndex] = temp;

            updateImageGrid();
        }
        
        draggedIndex = null;
    }

    function dragEnd(e) {
        e.target.classList.remove("dragging");
        document.querySelectorAll(".image-slot").forEach(slot => slot.classList.remove("drag-over"));
        draggedIndex = null;
    }

    uploadButton.addEventListener("click", () => {

        if (!canClick) return;
        uploadButton.style.backgroundColor = "gray";
        uploadButton.style.cursor = "not-allowed";

        setTimeout(() => {
            canClick = true;
            uploadButton.style.backgroundColor = "";
            uploadButton.style.cursor = "pointer";
        }, 1000);
        console.log("✅ Button clicked! Starting process...");
        
        const selectedCategory = categoryDropdown.value;
        const location = locationInput.value.trim();

        if (!selectedCategory) {
            alert("Please select a category.");
            return;
        }

        console.log("Selected Category:", selectedCategory);
        console.log("Location:", location);

        const bestFitCaptions = captionsDatabase[selectedCategory] || captionsDatabase["no_special_occasion"];
        const caption = getRandomFromArray(bestFitCaptions);

        displayInstagramPost(uploadedImages, caption, location);
    });


    function displayInstagramPost(images, caption, location = "") {
        // Store the uploaded images for reference
        uploadedImages = images;
        currentImageIndex = 0;
    
        resultsDiv.innerHTML = `
            <div class="instagram-post">
                <div class="instagram-header">
                    <img src="Default_pfp.jpg" alt="Profile" style="max-width: 30px; max-height: 30px;">
                    <div>
                        <span class="instagram-username">randomuser</span>
                        ${location ? `<div class="instagram-location">${location}</div>` : ""}
                    </div>
                </div>
                <div class="instagram-carousel">
                    <img id="postImage" src="${images[0] || ''}" alt="Uploaded Image">
                    ${images.length > 1 ? `
                        <button class="carousel-button left-arrow">❮</button>
                        <button class="carousel-button right-arrow">❯</button>
                    ` : ""}
                </div>
                <img src="LikeBar.png" alt="everything" class="icon" style="max-width: 275px;">                
                <div class="instagram-caption">
                    <span class="username">randomuser</span> <span id="captionText" class="caption">${caption}</span>
                </div>
            </div>
        `;
    
        // Attach event listeners AFTER elements are added to the DOM
        if (images.length > 1) {
            setTimeout(() => {  // Ensuring elements exist before adding event listeners
                document.querySelector(".left-arrow").addEventListener("click", prevImage);
                document.querySelector(".right-arrow").addEventListener("click", nextImage);
            }, 0);
        }
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + uploadedImages.length) % uploadedImages.length;
        document.getElementById("postImage").src = uploadedImages[currentImageIndex];
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % uploadedImages.length;
        document.getElementById("postImage").src = uploadedImages[currentImageIndex];
    }

    function getRandomFromArray(array) {
        return array.length > 0 ? array[Math.floor(Math.random() * array.length)] : "No available captions";
    }
});