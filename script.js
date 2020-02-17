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
  let prompt = document.getElementById("prompt");
  let options = document.getElementById("options");
  let illustration = document.getElementById("illustration");
  illustration.innerHTML = '';
  if(e.length === 0){
    prompt.innerHTML = 'this is not an option at this time';
  } else {
    prompt.innerHTML = e[0].promptMsg;
    options.innerHTML = e[0].options;
  }
}


const options = [
  {
    cmd: 'start',
    promptMsg: 'you wake up in a snowy back alley... the snow lazily flutter downwards, a snowflake lands on your nose. You are hungry.',
    options: '[rummage] through the trash / [sniff] around  / [walk] to find food'
  },
  {
    cmd: 'sniff',
    promptMsg: 'You decide to sniff around.',
    options: '[run]'
  },
  {
    cmd: 'rummage',
    promptMsg: 'You decide to rummage.',
    options: '[run]'
  },
  {
    cmd: "help",
    promptMsg: 'I come to serve'
  }
];
