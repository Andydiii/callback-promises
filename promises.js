watchMeme = false;
left = false;

function watchMyYoutubeVideoPromise() {
    return new Promise((resolve, reject) => {
        if ( watchMeme ) {
            reject({
                name: "user watch meme",
                message: ":("
            })
        } else if (left) {
            reject({
                name: "User left",
                message: "they dont like me"
            })
        } else {
            resolve("User watched the whole video and liked")
        }
    }) 
}


watchMyYoutubeVideoPromise().then(
    // then is triggerd when resolve the promise (promise is successful)
    (message) => {
        console.log(message)
    }
).catch(
    // catch is triggered   when reject the promise (promise is failed)
    (error) => {
        console.log( error.name + " " + error.message)
    }
)

// code is way cleaner to read and write. whne you got nested call back, the code will be complicated.

