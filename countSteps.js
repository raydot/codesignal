/**  From the Hired.com programming interview
 *
 * You can climb 1, 2, or 3 steps at a time.  How many ways are there
 * to climb N steps.
 *
 * GeeksForGeeks had this interesting answer, and it involves Fibonacci and
 * moenization, so thought I'd dig in further
 *
 * https://www.geeksforgeeks.org/count-ways-reach-nth-stair/
 */

/**
 * So the approach is that if you can climb one or two stairs, you have to figure out:
 *  * How many ways to reach n - 1 stairs, then take one stair
 *  * How many ways to reach n - 2 stairs, then take two stairs
 *
 * This ends up being an expression of the Fibonacci numbers, because remember, the
 * base case for Fibonacci is (n - 1) + (n - 2)
 *
 * Here is the Fibonacci idea.  Is is exponential (O(2^n)) because of redundant calculations.
 * It also poops the bed for larger numbers (as low as 45).  This actually caused this solution
 * to time out in an automated test of larger numbers.  This also only counts the
 * ways to go using 1 or 2 steps.
 */

// find nth Fibonacci number:
const fibonacci = (n) => {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// return number of ways to reach s'th stair (with a +1 offset)
const fibonacciCountWays = (s) => {
  return fibonacci(s + 1);
};

// Put it together
const fibonacciCountStairs = (stairs) => {
  console.log(
    'Fibonacci number of ways to climb',
    stairs,
    'stairs:',
    fibonacciCountWays(stairs)
  );
};

fibonacciCountStairs(4); // Awesome!
fibonacciCountStairs(30); // Bad

/**
 * This method uses dynamic programming to find the solution.
 * It can be run on any number of steps.
 *
 * Its time complexity is O(m*n)
 */

const countWaysUtil = (n, m) => {
  let res = new Array(n);
  res[0] = 1;
  res[1] = 1;

  for (let i = 2; i < n; i++) {
    res[i] = 0;

    for (let j = 1; j <= m && j <= i; j++) res[i] += res[i - j];
  }

  return res[n - 1];
};

const dynamicProgrammingCountStairs = (stairs, ways) => {
  console.log(
    'Dynamic number of ways to climb',
    stairs,
    'stairs with',
    ways,
    'different steps:',
    countWaysUtil(stairs + 1, ways)
  );
};

dynamicProgrammingCountStairs(30, 2);

/**
 * Both good, but there's a third way!  Use a "sliding window" to count
 * the number of stairs.  This has an O(n) complexity:
 */

const slidingWindowsCountWays = (n, m) => {
  let res = new Array(n + 1);
  let temp = 0;
  res[0] = 1;
  for (let i = 1; i <= n; i++) {
    let s = i - m - 1;
    let e = i - 1;
    if (s >= 0) {
      temp -= res[s];
    }
    temp += res[e];
    res[i] = temp;
  }
  return res[n];
};

const slidingWindowsCountStairs = (n, m) => {
  console.log(
    'Sliding window number of ways to climb',
    n,
    'stairs using 1 -',
    m,
    'steps:',
    slidingWindowsCountWays(n, m)
  );
};

slidingWindowsCountStairs(30, 2);
