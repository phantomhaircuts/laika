function perform(e){
  if(event.key === 'Enter') {
    // alert(e.value)
    let cmdVal = e.value;
    console.log(cmdVal);
    evaluate (cmdVal);

    e.value = '';
  }
}

function evaluate (cmdVal) {

  e = options.filter(optn =>optn.cmd === cmdVal);
  console.log(e[0]);
  displayCmd(e);
  e = [];
}

function displayCmd(e) {
  let prompt = document.getElementById('prompt');
  let options = document.getElementById('options');
  let illustration = document.getElementById('illustration');
  illustration.innerHTML = '';
  if(e.length === 0){
    options.innerHTML = 'this is not an option at this time';
  } else {
    prompt.innerHTML = e[0].promptMsg;
    options.innerHTML = e[0].options;
  }
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
  promptMsg: 'You trot down the quiet allyway, you yelp in surprise as the hands grab you as you round the corner. A man in a uniform roughly throws your struggling body into the cold rear compartment of the military truck. The truck groans forward into the cold night, shocked and afraid you eventually drift to sleep.',
  options: '[wake]'
},
  {
    cmd: 'rummage',
    promptMsg: 'You trot slowly to the garbage cans and begin to rummage. The garbage smells rich and heavenly. You barley notice the rustling behind you. There is a man in a uniform ready to pounce!',
    options: '[run] [bark]'
  },
  {
    cmd: 'investigate',
    promptMsg: 'You follow the trailing smell of rich chicken meat. You spy a small fire, and a chicken leg wrapped in paper. You approach the meal, your mouth is watering in anticipation. You hardly notice the shadow lurking behind you. It is a man in a uniform ready to pounce!',
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
    cmd: "help",
    promptMsg: 'I come to serve'
  }
];
