//Task 1: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
        console.log(value);
    }
}

const valuesArray = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(valuesArray);

//Task 2: Awaiting a Call
async function awaitCall() {
    const fakeApiCall = () => new Promise(resolve => setTimeout(() => resolve("Data fetched!"), 2000));

    const data = await fakeApiCall();
    console.log(data);
}

awaitCall();

//Task 3: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
    const fakeApiCall = () => new Promise((resolve, reject) => setTimeout(() => reject("API Error!"), 2000));

    try {
        const data = await fakeApiCall();
        console.log(data);
    } catch (error) {
        console.log("An error occurred:", error);
    }
}

awaitCallWithErrorHandling();