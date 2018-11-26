# hrtimer-test - Basic timing of process.hrtimer.bigint()

## Installing
```npm install```

## Running
```node app.js```

### Sample output (Macbook Pro, 15", Early 2018)

    $ node app.js
    
    Calling hrtimer in total 100 times, over 10 sets.
    Avg (µs)	 12.14
    Mean (µs)	 2.43
    StdDev (µs)	 28.83
    Max (µs)	 98.64
    Min (µs)	 2.42
    
    Calling hrtimer in total 10000 times, over 100 sets.
    Avg (µs)	 37.43
    Mean (µs)	 22.35
    StdDev (µs)	 144.2
    Max (µs)	 1262.67
    Min (µs)	 5.72
    
    Calling hrtimer in total 1000000 times, over 1000 sets.
    Avg (µs)	 73.84
    Mean (µs)	 60.62
    StdDev (µs)	 49.99
    Max (µs)	 703.72
    Min (µs)	 54.38
