console.log('Lodash is loaded:', typeof _ !== 'undefined');

const people = createPeople();
const unShuffledDeck = createUnshuffledDeck();
console.log('Created deck:', unShuffledDeck);
const shuffledDeck = shuffle(unShuffledDeck, 3);
console.log('Shuffled deck:', shuffledDeck);
deal(shuffledDeck);
for (let i = 0; i < people.length; i++) {
  console.log(
    people[i].name +
      "'s hand: " +
      people[i].hand[0].rank +
      ' of ' +
      people[i].hand[0].suit +
      ', ' +
      people[i].hand[1].rank +
      ' of ' +
      people[i].hand[1].suit
  );
}
console.log('The winner is:', getWinner());

function createPeople() {
  const people = [];
  const person1 = { name: 'Tim', hand: [], score: 0 };
  const person2 = { name: 'Joe', hand: [], score: 0 };
  const person3 = { name: 'Eric', hand: [], score: 0 };
  const person4 = { name: 'Dane', hand: [], score: 0 };
  people.push(person1, person2, person3, person4);
  return people;
}

function createUnshuffledDeck() {
  const deck = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 14; j++) {
      const card = {};

      if (j > 1 && j < 11) {
        card.rank = j;
      }
      switch (j) {
        case 1:
          card.rank = 'Ace';
          break;
        case 11:
          card.rank = 'Jack';
          break;
        case 12:
          card.rank = 'Queen';
          break;
        case 13:
          card.rank = 'King';
          break;
      }
      switch (i) {
        case 0:
          card.suit = 'Clubs';
          break;
        case 1:
          card.suit = 'Diamonds';
          break;
        case 2:
          card.suit = 'Hearts';
          break;
        case 3:
          card.suit = 'Spades';
          break;
      }
      deck.push(card);
    }
  }
  return deck;
}

function shuffle(deck, times) {
  const deckToShuffle = [];
  const halfDeck1 = deck.slice(0, 26);
  const halfDeck2 = deck.slice(26);

  for (let i = 0; i < 26; i++) {
    const random = getRandomInt(halfDeck1.length);
    const random2 = getRandomInt(halfDeck2.length);

    deckToShuffle.push(halfDeck1[random], halfDeck2[random2]);

    halfDeck1.splice(random, 1);
    halfDeck2.splice(random2, 1);
  }
  if (times >= 0) {
    shuffle(deckToShuffle, times - 1);
  }
  return deckToShuffle;
}

function deal(deck) {
  const dealtDeck = [...deck];
  for (let i = 0; i < people.length; i++) {
    people[i].hand[0] = dealtDeck.pop();
    people[i].hand[1] = dealtDeck.pop();
  }
}

function getWinner() {
  for (let i = 0; i < people.length; i++) {
    let count = 0;
    for (let j = 0; j < 2; j++) {
      switch (people[i].hand[j].rank) {
        case 'Ace':
          count += 11;
          break;
        case 'King':
        case 'Queen':
        case 'Jack':
          count += 10;
          break;
        default:
          count += people[i].hand[j].rank;
      }
    }
    people[i].score = count;
    console.log(people[i].name + "'s score: " + people[i].score);
  }

  let winner = '';
  let biggest = 0;
  for (let i = 0; i < people.length; i++) {
    if (people[i].score > biggest) {
      winner = people[i].name;
      biggest = people[i].score;
    }
  }
  return winner;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
