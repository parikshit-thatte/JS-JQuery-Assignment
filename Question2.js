let qTeams = {
    aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
};

let entries = Object.entries(qTeams);

let sorted = entries.sort((a, b) => b[1] - a[1]);

// console.log(sorted);

sorted.forEach(element => {
    console.log(element[0]);
});