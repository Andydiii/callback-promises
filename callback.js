left = false;
watchCatMeme = true;

function callbackwatchvideo(callback1, callback2) {
    if (left) {
        callback1({
            name: "user left",
            message: ":("
        })
    }
    else if (watchCatMeme) {
        callback1({
            name: "user watch catmeme",
            message: "cat meme > me"
        })
    }
    else {
        callback2("they subscribed and liked me")
    }
}

// callback function: pass into other function as argument, and will be called later in that function.
// this is an nice example of call back functions. first argument is callback1 and second argument is callback2. both of them pass into the other function as argumnent and will be called later.
callbackwatchvideo((err) => {
    console.log(err.name + err.message)
}, (message) => {
    console.log("success: " + message)
})