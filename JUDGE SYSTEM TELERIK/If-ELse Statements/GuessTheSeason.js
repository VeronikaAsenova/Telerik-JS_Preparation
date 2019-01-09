const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let month = gets();
let date = +gets();

if (month === "Mart" || month === "April" || month === "May" || month === "June") {
    if (month === "Mart" && date >= 20) {
        print("Spring");
    } else if (month === "June" && date <= 20) {
        print("Spring");
    }
    else if (month === "April" || month === "May") {
        print("Spring");
    }
}

if (month === "June" || month === "July" || month === "August" || month === "September") {
    if (month === "June" && date >= 21) {
        print("Summer");
    } else if (month === "September" && date <= 21) {
        print("Summer");
    } else if (month === "July" || month === "August") {
        print("Summer");
    }
}

if (month === "September" || month === "October" || month === "November" || month === "December") {
    if (month === "September" && date >= 22) {
        print("Autumn");
    } else if (month === "December" && date <= 20) {
        print("Autumn");
    } else if (month === "October" || month === "November") {
        print("Autumn");
    }
}

if (month === "December" || month === "January" || month === "February" || month === "Mart") {
    if (month === "December" && date >= 21) {
        print("Winter");
    } else if (month === "Mart" && date <= 19) {
        print("Winter");
    } else if (month === "January" || month === "February") {
        print("Winter");
    }
}