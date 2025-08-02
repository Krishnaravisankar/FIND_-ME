const personalities = [
  "laughs in serious moments.",
  "has chaotic good vibes.",
  "mistakes sarcasm for a love language.",
  "believes naps are a personality trait.",
  "probably thinks their cat judges them.",
  "quotes movies no one's seen.",
  "has two moods: chaos and snacks.",
  "believes in ghosts and astrology.",
  "would survive a zombie apocalypse... emotionally.",
  "thinks memes are modern poetry.",
  "They have the kind of energy that makes coffee nervous.",
  "Professional overthinker with a minor in random fun facts",
  "Too glam to give a damn.",
  "They radiate golden retriever energy in a world full of alley cats.",
  "Basically a human version of freshly baked cookies.",
  "Probably has a PhD in starting a fun trouble",
  "They don't enter situations-they crash land into them."
];

const funFacts = [
  "once laughed for 7 minutes straight at their own joke.",
  "believes every day is pajama day.",
  "won a staring contest with their pet fish.",
  "has an emotional connection with their blanket.",
  "thinks Google is a life coach.",
  "tried to make cereal without milk and called it crunchy salad.",
  "once joined a Zoom call and forgot to mute for 20 mins.",
  "talks to plants and expects answers.",
  "has 99 tabs open in their brain at all times.",
  "tried yoga once, fell asleep during it.",
  
];

const hobbies = [
  "binge-watching shows they already watched.",
  "eating snacks while planning to eat better.",
  "starting crafts they’ll never finish.",
  "talking to mirrors dramatically.",
  "making up songs in the shower.",
  "reading horoscopes for zodiac signs they don’t have.",
  "trying to make toast perfectly golden.",
  "collecting weird socks like trophies.",
  "talking to dogs on the street.",
  "googling 'how to be productive' instead of working."
];

function generateDescription() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    alert("Please enter a name!");
    return;
  }

  const personality = personalities[Math.floor(Math.random() * personalities.length)];
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  const hobby = hobbies[Math.floor(Math.random() * hobbies.length)];

  document.getElementById('personality').textContent = personality;
  document.getElementById('funFact').textContent = fact;
  document.getElementById('hobby').textContent = hobby;
}
