const getRandom = () => {
    let array = [];
    let arraySet = new Set();

    let i = 0;
    while (i < 9) {
        let n = Math.floor(Math.random() * (27 - 1) + 1);

        if (!arraySet.has(n)) {
            let trinary = n.toString(3);
            arraySet.add(n);
            array.push(trinary.padStart(3, "0"));
            i++;
        }
    }

    return array;
};

export default getRandom;
