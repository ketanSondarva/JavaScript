const api = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("requested data...")
            resolve("success")
        }, 2000);
    })
}

async function getWhetherData() {
    await api();
}

const getData = (dataID) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data"+dataID)
            resolve("success")
        }, 3000);
    });
}

const callGetData = async () => {
    console.log("fetching first data...");
    await getData(1);
    console.log("fetching second data");
    await getData(2);
    console.log("fetching thrid data...")
    await getData(3);
    console.log("fetching first data...");
    await getData(4);
    console.log("fetching forth data");
    await getData(5);
    console.log("fetching sixth data...")
    await getData(6);
}


// auto invoking async function, executes only once: 
(async () => {
    console.log("fetching first data...");
    await getData(1);
    console.log("fetching second data");
    await getData(2);
    console.log("fetching thrid data...")
    await getData(3);
}) ();