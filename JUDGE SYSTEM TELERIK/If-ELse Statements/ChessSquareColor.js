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
    'd',
    '5'
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let files = gets();
let ranks = +gets();


if (files === "a" || files === "c" || files === "e" || files === "g") {
    //start the odd ones
    if (files === "a" && ranks % 2 !== 0) {
        print("dark");
    }
    if (files === "c" && ranks % 2 !== 0) {
        print("dark");
    }
    if (files === "e" && ranks % 2 !== 0) {
        print("dark");
    }
    if (files === "g" && ranks % 2 !== 0) {
        print("dark");
    }
    //start the dark even
    if (files === "a" && ranks % 2 === 0) {
        print("light");
    }

    if (files === "c" && ranks % 2 === 0) {
        print("light");
    }
    if (files === "e" && ranks % 2 === 0) {
        print("light");
    }
    if (files === "g" && ranks % 2 === 0) {
        print("light");
    }
}

if (files === "b" || files === "d" || files === "f" || files === "h") {
    //start the dark even
    if (files === "b" && ranks % 2 === 0) {
        print("dark");
    }
    if (files === "d" && ranks % 2 === 0) {
        print("dark");
    }
    if (files === "f" && ranks % 2 === 0) {
        print("dark");
    }
    if (files === "h" && ranks % 2 === 0) {
        print("dark");
    }
    //start the light- odd
} if (files === "b" && ranks % 2 !== 0) {
    print("light");
}
if (files === "d" && ranks % 2 !== 0) {
    print("light");
}
if (files === "f" && ranks % 2 !== 0) {
    print("light");
}
if (files === "h" && ranks % 2 !== 0) {
    print("light");
}

