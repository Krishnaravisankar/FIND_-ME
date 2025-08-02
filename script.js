function generateDescription() {
  const name = document.getElementById('nameInput').value.trim();
  const resultBox = document.getElementById('resultBox');

  if (name === '') {
    resultBox.innerHTML = `<p>Please enter a name first.</p>`;
    return;
  }

  // Example data — can be randomized
  const personalities = [
  "mistakes sarcasm for a career skill.",
  "treats life like one big blooper reel.",
  "uses humor as a coping mechanism and it shows.",
  "once told a joke so bad, it became an inside joke.",
  "believes eye rolls are a valid form of communication.",
  "regularly narrates their life in a dramatic voice.",
  "feels personally attacked by autocorrect.",
  "thinks social cues are optional.",
  "believes in ghosts and buttered toast equally.",
  "once gave a TED Talk in the shower—audience: shampoo bottles.",
  "forgets birthdays, remembers every random Wi-Fi password.",
  "is basically a combination of caffeine and anxiety.",
  "thinks horoscopes are a substitute for decision-making.",
  "is fluent in emoji and overreaction.",
  "believes every awkward moment is a learning opportunity… for others.",
  "could start a riot over mismatched Tupperware lids.",
  "treats cereal like a personality trait.",
  "thinks deep conversations happen best at 2 a.m.",
  "believes dancing in the rain is a calling, not a choice.",
  "thinks socks and sandals are rebellious fashion.",
  "could talk for 30 minutes about potato types.",
  "thinks their pet understands all their problems.",
  "refers to naps as power-ups.",
  "laughs at their own typos before correcting them.",
  "could lead a cult based on weirdly strong opinions.",
  "has a playlist for every bad decision.",
  "treats Google Maps like it’s optional.",
  "has more unfinished thoughts than open tabs.",
  "is always either chill or chaotic—never in between.",
  "believes their dreams are better than real life.",
  "uses sarcasm like punctuation.",
  "would survive a zombie apocalypse by talking to them.",
  "treats deadlines as vague suggestions.",
  "believes toast is a gourmet meal.",
  "has a sense of direction only when food is involved.",
  "feels personally victimized by phone alarms.",
  "can’t whisper without giggling.",
  "thinks traffic lights are personal challenges.",
  "has the humor of a toddler and the wisdom of an old cat."
];
const funnyComments = [
  "Once cried because their burrito was too beautiful.",
  "Still haunted by a typo from 7th grade.",
  "Believes 'sleep schedule' is a myth.",
  "Thinks showers are where real conversations happen.",
  "Once tried to cook rice without water.",
  "Keeps empty boxes because 'they might need them.'",
  "Googled how to Google better.",
  "Once tried to microwave salad. Don’t ask.",
  "Thinks cheese is a food group.",
  "Talks to plants—and expects them to answer.",
  "Has a vendetta against slow elevators.",
  "Believes coffee counts as a personality trait.",
  "Thinks passwords are memory tests from the universe.",
  "Puts ‘vibes’ under work experience.",
  "Once responded to a teacher with a meme.",
  "Laughs at their own jokes before telling them.",
  "Could make a museum of unread emails.",
  "Has a folder of screenshots titled 'I regret nothing.'",
  "Accidentally likes posts from 2015.",
  "Treats autocorrect like a frenemy.",
  "Yells 'plot twist!' when they trip.",
  "Believes toast is a lifestyle.",
  "Talks to themselves and gives great advice.",
  "Takes naps so long they need orientation after.",
  "Still thinks the floor is lava in adulthood.",
  "Believes their cat is judging them. They’re right.",
  "Once answered the phone saying 'I quit.' Wrong number.",
  "Uses LOL to cover actual emotional damage.",
  "Rehearses arguments they'll never have.",
  "Has a playlist titled ‘walking like a boss.’",
  "Googled 'how to cry cool.'",
  "Claims their zodiac sign is snack-based.",
  "Can’t spell ‘definitely’ without autocorrect.",
  "Still checks under the bed—just in case.",
  "Wears headphones with no music to avoid talking.",
  "Refers to brain farts as 'mental fireworks.'",
  "Said 'you too' to a waiter who said ‘enjoy your meal.’",
  "Once clapped at the end of a movie. Alone.",
  "Texted their boss instead of their mom. Chaos followed."
];


  

  // Get random items
  const personality = personalities[Math.floor(Math.random() * personalities.length)];
  const funny = funnyComments[Math.floor(Math.random() * funnyComments.length)];

  // Display result
  resultBox.innerHTML = `
    <p><strong>${name}</strong> ${personality}</p>
    <p><em>Fun fact:</em> ${funny}</p>
  `;
}



