const { range, inc, times, compose, toPairs } = require("ramda");
const { random, floor } = Math;
const { assign } = Object;

const randomGenerator = (minOutput, maxOutput) => () => 
  floor(random() * (maxOutput - minOutput + 1) + minOutput);

const initHistogram = (minOutput, maxOutput) =>
  range(minOutput, maxOutput + 1).reduce(initHistogramEntry, {});

const initHistogramEntry = (histogram, possibleOutput) =>
  assign(histogram, { [possibleOutput]: 0 });

const computeResult = (histogram) => (result) =>
  assign(histogram, { [result]: inc(histogram[result]) });

const runRound = (histogram, generator) =>
  compose(computeResult(histogram), generator);

const simulate = (minOutput, maxOutput, numOfRuns) => {
  const histogram = initHistogram(minOutput, maxOutput);
  const generator = randomGenerator(minOutput, maxOutput);
  times(runRound(histogram, generator), numOfRuns);
  return histogram;
}

const toTsv = (histogram) =>
  toPairs(histogram).map(entry => entry.join("\t")).join("\n");

const parseArgs = (args) =>
  args.slice(-3).map(Number);

const histogram = simulate(...parseArgs(process.argv));

console.log(toTsv(histogram));
