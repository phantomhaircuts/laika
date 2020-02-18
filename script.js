function perform(e){
  if(event.key === 'Enter') {
    let cmdVal = e.value;
    evaluate (cmdVal);
    e.value = '';
  }
}

function evaluate (cmdVal) {
  e = options.filter(optn => optn.cmd === cmdVal);
  console.log(e[0]);
  displayCmd(e);
  e = [];
}

function displayCmd(e) {
  testVital();
  let prompt = document.getElementById('prompt');
  let options = document.getElementById('options');
  let illustration = document.getElementById('illustration');
  illustration.innerHTML = '';

  if(e.length === 0){
    options.innerHTML = 'this is not an option at this time';
  }
  else {
    prompt.innerHTML = e[0].promptMsg;
    options.innerHTML = e[0].options;
    if(e[0].meta){
      meta(e[0]);
    }

    if(e[0].cmd === 'enter' && laika.experience > 50){
      evaluate('experience');
    }

    if(laika.health < 1){
      
    }
  }
}

function testVital () {
  if (laika.inventory.length >= 1) {
    let vitals = document.getElementById('vitals');
    vitals.innerHTML = `Name: <span class="red">${laika.name}</span> / Experience: <span class="red">${laika.experience}</span> / Health: <span class="red">${laika.health}</span>`
  }
}

function starField (){
   let scriptOne = document.createElement('script');
   scriptOne.src = 'scripts/sketch.js';
   var head = document.getElementsByTagName("head")[0];
   head.appendChild(scriptOne);

   let scriptTwo = document.createElement('script');
   scriptTwo.src = 'scripts/star.js';
    head.appendChild(scriptTwo);

    console.log(head);
}

function meta (e) {
  e.meta(laika);
}

const laika = {
  name: 'Laika',
  health: 100,
  experience: 10,
  inventory: []
}

const options = [
  {
    cmd: 'start',
    promptMsg: 'You wake up in a snowy back alley... the snow lazily flutters downwards, spinning listlessly in the cold night air. a snowflake lands on your nose. You are hungry.',
    options: '[rummage] through the trash / [sniff] around  / [walk] to find food'
  },
  {
    cmd: 'sniff',
    promptMsg: 'You sniff the air, it is brisk, you catch the faint rich smell of chicken you decide to investigate...',
    options: '[investigate]'
  },
  {
  cmd: 'walk',
  promptMsg: 'You trot down the quiet allyway, you yelp in surprise as the hands grab you as you round the corner. A man in a Soviet canine recruiters uniform roughly throws your struggling body into the cold rear compartment of the military truck. The truck groans forward into the cold night, shocked and afraid you eventually drift to sleep.',
  options: '[wake]'
},
  {
    cmd: 'rummage',
    promptMsg: 'You trot slowly to the garbage cans and begin to rummage. The garbage smells rich and heavenly. You barley notice the rustling behind you. There is a man in a Soviet canine recruiters uniform ready to pounce!',
    options: '[run] [bark]'
  },
  {
    cmd: 'investigate',
    promptMsg: 'You follow the trailing smell of rich chicken meat. You spy a small fire, and a chicken leg wrapped in paper. You approach the meal, your mouth is watering in anticipation. You hardly notice the shadow lurking behind you. It is a man in a Soviet canine recruiters uniform ready to pounce!',
    options: '[run] [bark]'
  },
  {
    cmd: 'run',
    promptMsg: 'you push off with your hind legs, ready to take off. You bound forward into the air, but feel two hands gripping your hind legs. It is too late, you crash to the ground. Growling and afraid you feel the man pull you away, and into the cold back compartment of the miltary truck, parked on the quiet snow lined street. the truck rumbles away, you whimper in fear until you finally doze off.',
    options: '[wake]'
  },
  {
    cmd: 'bark',
    promptMsg: 'You bark in fright, the man in the uniform still approaches. You want to bite, but you are a gentle spirit, you will not harm a human... You feel afraid, as the man carries you off and throws you into the cold back compartment of the military truck. You whimper in fear, as the truck rolls away, you curl up, whimpering sofly unttil you drift to sleep.',
    options: '[wake]'
  },
  {
    cmd: 'wake',
    promptMsg: 'You awake in a dark cell, it is cold and damp, you can make out  some dark huddled figures around you in the dim moonlight filtering through the barred window',
    options: '[explore] your surroundings / [speak] to find out who is in charge.'
  },
  {
    cmd: 'explore',
    promptMsg:'You cautiously tiptoe forward. You hear the growl from the dark shadow on the floor before you. Then a voice: "I am sorry child, I grow weary and short of temper in this place." Her voice is that of Olga, you learn, a Great Dane who has been here for some months. She tells you of life here, and of the government experiments... She does not know for what purpose exactly, but say it has something to do with the word "cosmonaut". This is your new life. "Now get some rest." Olga tells you.',
    options: '[rest]'
  },
  {
    cmd: 'speak',
    promptMsg:'Your barks echo in the hollow bare cell. Meekly at first, you can barely find your voice. You bark again. "Where am I?" you cry out. Eventually a voice echoes back, you see the rising shadow lumbering towards you. "Hush child, we are prisoners here, your crying will not help. Save your energy..." The shadow catches the light, and you see the large Great Dane. Her name is Olga, she tells you of the experiements here, that you are here enlisted by the human government. Your head is spinning and you are afraid. You talk for a while, Olga does not know your purpose here, but says it has something to do with the word "cosmonaut". You ponder the word. "Get some rest." Olga tells you.',
    options: '[rest]'
  },
  {
    cmd: 'rest',
    promptMsg: 'You awake to the rattling of the cell door. A woman and a man enter in white lab coats. They motion for you to come forward. You cautiously approach them, and they pet your head. They lead you down the hallway, and to a giant mechanical contraption. You mount the platform and the two scientists motion you towards the door of the machine.',
    options: '[enter] the machine.'
  },
  {
    cmd:'enter',
    promptMsg: 'You enter the machine, and the scientists strap you in to the seat. There are rows of lights and the hum and blips of machinery. The machine drone loudens and you begin to feel motion. The machine begins to lurch forward and spin. You feel the air grow thin as the pressuure drops. There is a loud roar and violent clashes of sound. You are afraid, but try to remain brave. You feel weak, and try not to vomit. The scientists administer laxatives, and shine bright lights into your eyes. You want to collapse, you barely make it back to your cell.',
    options: '[rest]',
    meta: () => laika.experience = laika.experience + 20
  },
  {
    cmd:'experience',
    promptMsg:'A masked scientistt arrives to your cell, carrying a siringe. You wake up feeling groggy, there are stitches in your side. You have been implanted with an <span class="red">embeded medical monitor</span>. You can see your [vitals] and [stats]. Your training has paid off, "the time has come, all is prepared for the launch tomorrow." you hear them say. One of the scientists motions to you. "Good dog," he says and smiles. He holds the door and beckons for you to follow him.',
    options: '[follow] [hide]',
    meta: () => laika.inventory.push('embeded medical monitor')
  },
  {
    cmd:'hide',
    promptMsg:'You bolt down the hall, looking frantically for a place to hide. You spot a storage closet and dive in. You duck behind some crates on the floor. You are shaking in fear as the scientist enters the room. His face his friendly, he again beckons your towards him. You timidly peer out from behind the wooden crates.',
    options: '[follow]'
  },
  {
    cmd:'follow',
    promptMsg:'You walk through the door and out into the open lot, the scientist puts a leash on you and you walk down the quiet street. You both walk silently, silhouetted against the orange and blue expanse of sunset. He brings you to a modest apartment building, you both climb the steps. It is warm inside. There is a fire crackling in the fireplace. He opens a can of dog food and places it in a bowl. He puts down a soft blanket in front of he fire. He sits in a worn armchair and smiles warmly at you. You learn his name is Vladamir, this is the first act of kindness you have experienced in a long time.',
    options: '[eat], get [pets], [sleep] by fire.'
  },
  {
    cmd:'eat',
    promptMsg:'You eat the rich stew, you are full and happy, you sit with Vladamir and watch the snow coming down outside',
    options: '[open] your eyes'
  },
  {
    cmd:'sleep',
    promptMsg:'You curl up slumber by the fire. It has been so long since you have felt warmth like this. This feels like everything you have ever wanted... Somewhere in your mind you feel the temporality of the situation. A storm looms on the horizon, though for now life is good.',
    options: '[open] your eyes'
  },
  {
    cmd:'pets',
    promptMsg:'You wander over to Vladamir. You feel love and affection for the first time since getting lost as a puppy. You have a faint glimmering memory of your owner, a cheery little girl. It feels like a different lifetime. You savor this moment.',
    options: '[open] your eyes'
  },
  {
    cmd: 'open',
    promptMsg: 'You snap into consciousness, as you hear the rumble of the truck motor round the corner. Vladamir is getting ready, he pats you on the head. You both wander out into the chilly dawn. The drive is long and arduous. It is mid morning by the time the truck rumbles to a stop.',
    options: '[look] around'
  },
  {
    cmd: 'look',
    promptMsg: 'You look out at the open expanse before you. there is a grouping of soldiers and scientists about. There is a platform windiing around a massive silver rocket. They slowly lead you closer ot the rocket launch pad.',
    options: '[prepare]'
  },
  {
    cmd: 'prepare',
    promptMsg: 'They outfit you with a <span>Space Harness</span>, and they force you to eat some pills. You feel nervous as you begin to climb the platform with the scientists.',
    options: '[climb] the platform',
    meta: (laika) => laika.inventory.push('space harness')
  },
  {
    cmd: 'climb',
    promptMsg: 'You and the scientists quietly ascend the platform to the capsule nested on top of the rocket. It is a somber and silent parade. You look a Vladamirs face for reassurance but his face is solomn and sullen. It feels like an eternity, but you finally arrive at the top of the platform.',
    options:'[board] the capsule',
  },
  {
    cmd: 'capsule',
    promptMsg: 'You enter the capsule, Vladamir straps you into the capsule, there is an ominous rumbling below you. You start to feel the fear mounting. One of the scientists winks at you, she reaches into her pocket and pulls out a <span class="red">treat</span>. You hold the treat in your mouth as you watch the light disappear as the heavy door closes and is bolted shut.',
    options: 'brace for [launch]',
    meta: (laika) => laika.inventory.push("treat")
  },
  {
    cmd: 'launch',
    promptMsg: 'The rocket groans and creaks. You hear the countdown. Then you are consumed with the most deafening sound you have ever experienced. There is the glow of flame outside the casule. The force is overwhelming, you pass out. You fear this is the end. Fear consumes you, but all of a sudden things are still and there is nothing but silence.',
    options: '[gaze] out the window'
  },
  {
    cmd: 'gaze',
    promptMsg: 'you look out the window... you see the Earth as a looming blue orb to your left. You have never been so alone.',
    options: '[float]',
  },
  {
    cmd: 'float',
    promptMsg: 'You think back on the few warm memories you have grown to cherish. Watching the world grow smaller in the distance.',
    options: '[float]',
    meta: (laika) => laika.health = laika.health - 12
  },
  {
    cmd: 'help',
    promptMsg: 'simply enter the [command] without brackets.'
  },
  {
    cmd: 'stats',
    options: `Name: ${laika.name} / Experience: ${laika.experience} / Health: ${laika.health}`
  }
];
