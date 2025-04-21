function recordFirstVid() {
    return new Promise((resolve, reject) => {
        resolve("video 1 is recorded")
    })
}

function recordSecondVid() {
    return new Promise((resolve, reject) => {
        resolve("video 2 is recorded")
    })
}

function recordThirdVid() {
    return new Promise((resolve, reject) => {
        resolve("video 3 is recorded")
    })
}

// Promise.all([
//     recordFirstVid(),
//     recordSecondVid(),
//     recordThirdVid()
// ]).then((messages) => {
//     console.log(messages)
// })

// this promise.all will call three promises at the same time in parallel. as soon as the three all done, then is triggerd.
// if we need only to get the fatest one, then use Promise.race, it wont wait until all get done

Promise.race([
    recordFirstVid(),
    recordSecondVid(),
    recordThirdVid()
]).then((message) => {
    console.log(message)
})