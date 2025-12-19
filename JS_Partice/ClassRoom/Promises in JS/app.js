// const ticket = new Promise(function (res, rej) {
//     const isBoarded = false;
//     if (isBoarded) {
//         res("You are also taken");
//     } else {
//         rej("you are not also taken");
//     }
// });

// ticket
//     .then((data) => {
//         console.log("Wohooo", data);
//     })
//     .catch((data) => {
//         console.log("oh no", data);
//     })
//     .finally(() => {
//         console.log("finish");
//     });

function getCandies() {
    return new Promise((res, rej) => {
        // rej("success");
        setTimeout(() => {
            let candies = "🍬";
            // console.log("In our getCandies method", candies);
            res(candies);
        }, 3000);
    });
}

function handoverkey(candies) {
    return new Promise((res, rej) => {
        // rej("success");
        setTimeout(() => {
            let key = candies + "🔑";
            // console.log("here your is :", key, candies);
            // res(key);
            rej("key not found");
        }, 3000);
    });
}

function onboarding(key) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let onboarded = key + "🥼";
            // console.log("onboarded :", onboarded, key);
            res(onboarded);
        }, 3000);
    });
}

async function onboardClient() {
    try {
        const candy = await getCandies();
        console.log("In our getCandies method", candy);

        const keys = await handoverkey(candy);
        console.log("here is your", keys);

        const onboard = await onboarding(keys);
        console.log("here is your", onboard);
    } catch (err) {
        console.log("error Occured", err);
    }
}

onboardClient();

// getCandies()
//     .then((candies) => {
//         console.log("In our getCandies method", candies);
//         return handoverkey(candies);
//     })
//     .then((key) => {
//         console.log("here your is :", key);
//         return onboarding(key);
//     })
//     .then((onboarded) => {
//         console.log("onboarded :", onboarded);
//     })
//     .catch((err) => {
//         console.log("error Occured", err);
//     })
//     .finally(() => {
//         console.log("Happy to assist you");
//     });
