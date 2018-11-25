// axample use of Promis.all & Promise.race 
var p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
    // reject(1)
  }, 2000)
})

var p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(2)
    reject(2)
  }, 2000)
})

const promiseAll = () => {
  Promise.all([p1, p2])
    .then((promiseNum) => console.log(`Promise ${promiseNum} run successfully`))
    .catch((err) => console.log(`Promise ${err} return error`))
}

const promiseRace = () => {
  Promise.race([p1, p2])
    .then((promiseNum) => console.log(`Promise ${promiseNum} run successfully`))
    .catch((err) => console.log(`Promise ${err} return error`))
}

// You can find the differences by step by step run it and change p1 or p2 to resolving or rejecting
// promiseAll()
// promiseRace()