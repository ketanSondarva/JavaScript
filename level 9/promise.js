// promise has three attributes: Prototype, PromiseState(panding, fullfinlled or rejected), PromiseResult
// see the console for p1 & p2:

let p1 = new Promise((resolve, reject) => {
    resolve("success status: 200 ok")
});

console.log(p1)

p1.then(() => {
    console.log("promise fullfilled")
})
p1.catch(() => {
    console.log("promise failed")
})

let p2 = new Promise((resolve, reject) => {
    reject("failed")
});

p2.then(() => {
    console.log("promise fullfilled")
});
p2.catch(() => {
    console.log("promise failed")
})

console.log(p2)

function func(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            resolve("hello "+data)
        }, 2000);
    })
}

func("ketan").then((res) => {
    console.log("promise result = "+res)
})

function getData(dataID) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data"+dataID);
            resolve("success");
        }, 3000);
    })
}

// console.log("fetching data1...");
// p1 = getData(1);
// p1.then(() => {
//     console.log("fetching data2..")
//     p2 = getData(2);
//     p2.then(() => {
//         let p3 = getData(3);
//         p3.then(() => {
//             console.log("success")
//         })
//     })
// })
// 
// instead:

console.log("fetching first data...")
getData(1).then((res) => {
    console.log("fetching second data...")
    return getData(2);
}).then((res) => {
    console.log("fetching third data...")
    return getData(3)
}).then((res) => {
    console.log("success")
})