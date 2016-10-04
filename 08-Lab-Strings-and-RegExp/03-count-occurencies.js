// function countOccurences([str, text]) {
//     let count = 0;
//     for (let i in text) {
//         let index = text.indexOf(str, i);
//         if(index < 0) break;
//         if(i == index) count++;
//     }
//     console.log(count);
// }

function countOccurences([str, text]) {
    let count = 0;
    let index = text.indexOf(str);
    while(index > -1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    console.log(count);
}

countOccurences(['the', 'The quick brown fox jumps over the lay dog.']);
countOccurences(['ma', 'Marine mammal training is the training and caring for marine life such as, dolphins, killer whales, sea lions, walruses, and other marine mammals. It is also a duty of the trainer to do mental and physical exercises to keep the animal healthy and happy.']);