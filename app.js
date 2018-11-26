const stats = require('simple-statistics');
const prettyHrtime = require('pretty-hrtime');

let sets = 10;
let repeats = 10;
const readTime = function (iter) {
    let time = undefined;
    while (iter-- > 0)
        time = process.hrtime();
    return time;
};

const report = (setResult) => {
    setResult = setResult.map((i) => { return new Number(i)});
    let avg = stats.average(setResult);
    let median = stats.median(setResult);
    let max = stats.max(setResult);
    let min = stats.min(setResult);
    let stdDev = stats.standardDeviation(setResult);

    console.log('Avg (µs)\t %d', (avg/1e3).toFixed(2));
    console.log('Mean (µs)\t %d', (median/1e3).toFixed(2));
    console.log('StdDev (µs)\t %d ', (stdDev/1e3).toFixed(2));
    console.log('Max (µs)\t %d', (max/1e3).toFixed(2));
    console.log('Min (µs)\t %d', (min/1e3).toFixed(2));

};

console.log('\nCalling hrtimer in total ' + sets*repeats + ' times, over ' + sets + ' sets.');
let setResult = [];

while (sets-- > 0) {
    let start = process.hrtime.bigint();
    readTime(repeats);
    let end = process.hrtime.bigint();
    setResult.push(end - start);
}

report(setResult);

// Bigger round
//
sets = 100;
repeats = 100;
console.log('\nCalling hrtimer in total ' + sets*repeats + ' times, over ' + sets + ' sets.');
setResult = [];
while (sets-- > 0) {
    let start = process.hrtime.bigint();
    readTime(repeats);
    let end = process.hrtime.bigint();
    setResult.push(end - start);
}

report(setResult);


// Even bigger round
//
sets = 1000;
repeats = 1000;
console.log('\nCalling hrtimer in total ' + sets*repeats + ' times, over ' + sets + ' sets.');
setResult = [];

while (sets-- > 0) {
    let start = process.hrtime.bigint();
    readTime(repeats);
    let end = process.hrtime.bigint();
    setResult.push(end - start);
}

report(setResult);