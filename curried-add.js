function curriedAdd(total) {
    if (total === undefined) return 0;
    return function addNext(num) {
        if (num === undefined) return total;
        total += num;
        return addNext;
    };
}

curriedAdd(1)(2)(3)
// whatever function is invoked after curriedAdd, pass in 2 as param
// then 3 for next function

function curryString(word) {
    if (word === undefined) return 'Must input at least one character';
    return function makeString(char) {
        if (char === undefined) return word;
        word += char;
        return makeString;
    }
};

module.exports = { curriedAdd };
