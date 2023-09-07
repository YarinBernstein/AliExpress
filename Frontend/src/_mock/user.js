import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const wordsArray = ["מדי א", "מדי ב", "סיכה", "כומתה", "נעליים"];

function getRandomWordsFromArray(arr, numWords) {
  if (numWords <= 0) {
    return "";
  }

  const selectedWords = [];
  for (let i = 0; i < numWords; i += 1) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    selectedWords.push(arr[randomIndex]);
  }

  return selectedWords.join(", ");
}

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  personalNumber: faker.datatype.number({min : 8000000 , max : 10000000}) ,
  name: faker.name.fullName(),
  orderNumber: faker.datatype.number({min : 400000 , max : 1000000}),
  status: sample(['מאושר', 'מחכה לאישור', 'מסורב']),
  products: getRandomWordsFromArray(wordsArray, Math.floor(1 + Math.random() * (wordsArray.length - 1))),
}));

export default users;
