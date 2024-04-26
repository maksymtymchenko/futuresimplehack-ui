
export const moduleLessons: { title: string, units: any[]} = {
  title: 'Граматика: B1 Level',
  units: [
    {
      title: 'Module 1: Nouns and articles',
      disabled: false,
      lessons: [
        { title: 'Unit 1: Nouns' },
        { title: 'Unit 2: Articles a/an, the, no article' },
        { title: 'Unit 3: Special uses of a/an and the' },
        { title: 'Unit 4: Demonstratives this, that, these, those' },
        { title: 'Test Module 1' }
      ]
    },
    {
      title: 'Module 2: Possessives, pronouns and quantifiers',
      disabled: true,
      lessons: [
        { title: 'Unit 5: Possessive forms of nouns' },
        { title: 'Unit 6: Possessive adjectives and pronouns' },
        { title: 'Unit 7: Pronouns one/ones, another/the other (one)' },
        { title: 'Unit 8: Reflexive and other pronouns' },
        { title: 'Unit 9: Some, any, all, most, no, none of' },
        { title: 'Unit 10: Indefinite pronouns' },
        { title: 'Unit 11: much, many, a lot of, (a) little, (a) few' },
        { title: 'Unit 12: both, either, neither, each, every' },
        { title: 'Test Module 2' }
      ]
    }
  ]
};

export const firstUnitTopics = [
  'Types of noun',
  'Singular and plural nouns',
  'Noun + verb',
  'Countable and uncountable nouns',
  'Nouns that can be countable or uncountable',
  'Ways of counting uncountable nouns'
];

export const secondUnitTopics = [
  'Types of noun',
  'Singular and plural nouns',
  'Noun + verb',
  'Countable and uncountable nouns',
  'Nouns that can be countable or uncountable',
  'Ways of counting uncountable nouns'
];

export const moduleUnitLessons: { title: string, units: any[]} = {
  title: 'Module 1: Nouns and articles',
  units: [
    {
      title: 'Unit 1: Nouns',
      disabled: false,
      lessons: [
        { title: 'Types of noun' },
        { title: 'Singular and plural nouns' },
        { title:  'Noun + verb' },
        { title:  'Countable and uncountable nouns' },
        { title:  'Nouns that can be countable or uncountable' },
        { title:  'Ways of counting uncountable nouns' }
      ]
    },
    {
      title: 'Unit 2: Articles a/an, the, no article',
      disabled: true,
      lessons: [
        { title: 'a or an? the /ə/ or the /i:/?' },
        { title: 'General or particular meaning?' },
        { title: 'New information or known information?' }
      ]
    }
  ]
};

export const tests = [
  { title: '1. I can\'t read his writing. I think I need new ____' , answers: [ { title:'glasses', isCorrect: true }, { title:'glass', isCorrect: false } ] },
  { title: '2. How often do you brush your ___ ?' , answers: [ { title:'teeth', isCorrect: true }, { title:'tooth', isCorrect: false } ] },
  { title: '3. I think physics ___ the most difficult subject at college.' , answers: [ { title:'is', isCorrect: true }, { title:'are', isCorrect: false } ] }
];

export const matches = [
  { title: '1.', match: [ { id: 1, eng: 'Order, please?', ukr: 'Замовити, будь ласка?' },
    { id: 2, eng: 'I\'d like (dish/drink), please.', ukr: 'Я б хотів (страву/напій), будь ласка.' },
    { id: 3, eng: 'Add/remove (ingredient)?', ukr: 'Додати/видалити (інгредієнт)?' },
    { id: 4, eng: 'Alternative for (original dish/drink)?', ukr: 'Альтернатива для (початкової страви/напою)?' }
  ]
  },
  { title: '2.', match: [   { id: 5, eng: 'Some (utensil)?', ukr: 'Трохи (прилад)?' },
    { id: 6, eng: 'More (condiment)?', ukr: 'Більше (приправи)?' },
    { id: 7, eng: 'The bill, please?', ukr: 'Рахунок, будь ласка?' },
    { id: 8, eng: 'Thanks for the service!', ukr: 'Дякую за обслуговування!' }
  ]
  }
];


export const NOUNS = 'Nouns are the words we use for people, things and places: a tourist, a postcard, a museum ﻿﻿activities, ideas and feelings: shopping, information, love When nouns are names of people, places, dates, events, languages, religions and books, plays or films, they begin with a capital letter: Professor Grey, the British Museum, Glasgow, Africa, Monday, April, May Day, Spanish, Islam, \'The Lord of the Rings\', \'War and Peace\', \'Avatar\'';
