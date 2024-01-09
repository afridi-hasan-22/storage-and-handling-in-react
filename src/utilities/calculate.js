const add = (first,second) => {
    return first + second;
}

const multiply = (first,second) => {
    return first * second;
}

// const numbers = [30,29,235,48,87];
// const sumReducer = (previous, current) = previous + current;
// const total = numbers.reduce(sumReducer, 0)
// console.log(total);

const getTotalPrice = (products) => {
    const reducer = (previous, current) => previous + current.price;
    const total = products.reduce(reducer, 0);
    return total;
}

export {add, multiply, getTotalPrice as getTotal}