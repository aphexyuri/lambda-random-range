# lambda-random-range
### A Simple Lambda function to generate a number of random numbers within a given range.

_Uses Fisher-Yates shuffling algorithm - see https://git.daplie.com/Daplie/knuth-shuffle_

---
### Input

```json
{
  "num": "10",
  "max": "99",
  "jsonResponse": false
}
```

`num`: the number of random numbers desired

`max`: the zero-based range of the numbers to use

`jsonResponse`: if the response should be a JSON object, or a comma delimited string
