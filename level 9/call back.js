// asynchoronous behaviour of javascript:

// function getData(data) {
//     setTimeout(() => {
//         console.log(data)
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);

// if we want to make this like: one after another:

function getData(data, getNextData) {
    setTimeout(() => {
        console.log(data);
        if(getNextData) {
            getNextData(2)
        }
    }, 2000);
}

console.log("getting first data...")
getData(1, () => {
    console.log("getting second data...")
    getData(2, () => {
        console.log("getting third data...")
        getData(3)
    })
})

// above function call patern called "callback hell", means nested callbacks
// to avoid this we use promise

