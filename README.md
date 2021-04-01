# Monte Carlo Simulation

This program will run a Monte Carlo Simulation for a given range of inputs and an amount of runs. It return a TSV (tab-separated values) data set with the frequencies for each input of the simulation. Take this output to create a histogram. 

## Set Up

- Ensure you have Docker installed;
- `$ docker build --rm -t mcs .`

The above command will create a Docker image containing the appropriate execution environment for the program to run.

## Running 

`$ docker run --rm -t mcs <min-input> <max-input> <num-of-runs>`

Sample run:

```
$ docker run --rm -t mcs 0 6 10
0	1
1	1
2	4
3	3
4	1
5	0
6	0
```

That works for simple cases where all values in the input range have the same probability of ocurring.

## License

No license.
