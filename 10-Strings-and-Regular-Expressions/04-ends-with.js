function endWith([text, search]) {
    return text.endsWith(search);
}

console.log(endWith([
    'This sentence ends with fun?',
    'fun?'
]));

console.log(endWith([
    'This is Houston, we have…',
    'We have…'
]));

console.log(endWith([
    'The new iPhone has no headphones jack.',
    'o headphones jack.'
]));