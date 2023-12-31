//promises...Example 1
let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2){
        resolve("Success!");
    }else{
        reject("Failed");
    }
});

p.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message); 
})



//Example2
const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        }else if(userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme',
                message: 'Webdevsimplified < cat'
            })
        }else{
            resolve('Thumbs up and subscribe');
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log("Success: " + message)
}).catch((error) => {
    console.log(error.name + '' + error.message);
})



//Example 3
const recVideoKwanza = new Promise((resolve, reject) => {
    resolve("video kwanza recorded");
});

const recVideoPili = new Promise((resolve, reject) => {
    resolve("video pili recorded");
});

const recVideoTatu = new Promise((resolve, reject) => {
    resolve("video tatu recorded");
});

Promise.all([
    recVideoKwanza,
    recVideoPili,
    recVideoTatu
]).then((x) => {
    console.log(x)
}).catch()

    
//Example 4
const recVideoOne = new Promise((resolve, reject) => {
    resolve("video one recorded");
});

const recVideoTwo = new Promise((resolve, reject) => {
    resolve("video two recorded");
});

const recVideothree = new Promise((resolve, reject) => {
    resolve("video three recorded");
});

Promise.race([
    recVideoOne,
    recVideoTwo,
    recVideothree
]).then((x) => {
    console.log(x)
}).catch()
    




