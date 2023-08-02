export function getRandomArrayItem(array) {
    const RANDOM_INDEX = Math.floor(Math.random() * array.length);
    return array[RANDOM_INDEX];
}