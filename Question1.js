// Task 1

let paragraph = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";

let sentences = paragraph.split(/([^?.]+[?.])(?:\s|$)/gm).filter(String);

// console.log(sentences);

console.log("Output for Task 1...\n");
sentences.forEach(sentence => {
    if(sentence.trim().split(" ").length > 3) {
        console.log(sentence);
    }
});

// Task 2
let paragraphForTask2 = "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";

let sentencesForTask2 = paragraphForTask2.split(/([^?.]+[?.])(?:\s|$)/gm).filter(String);

// console.log(sentencesForTask2);

console.log("\n\nOutput for Task 2...\n");

sentencesForTask2.forEach(element => {
    console.log(element.replace(/[0-9]/g, "X"));
});