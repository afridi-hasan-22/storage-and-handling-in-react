//* use local storage to manage cart data

//* -----Simple Technique------
//* const addToDB = (id) => {
//   const quantity = localStorage.getItem(id);

//   if (quantity) {
//     console.log("already exist");
//     const newQuantity = +quantity + 1;  //* quantity এর আগে + দেয়ার কারনে সেটা স্ট্রিং থেকে নাম্বারে কনভার্ট হয়েছে । আমরা চাইলে এর আগে parseInt(quantity) ব্যবহার করে একে নাম্বারে কনভার্ট করতে পারি।
//     localStorage.setItem(id, newQuantity)
//   } else {
//     console.log('new item');
//     localStorage.setItem(id, 1);
//   }
// };

//* ------Advance Technique------
const addToDB = (id) => {
    let shoppingCart = {};

    //* get the shoping cart
    const storedCart = localStorage.getItem('shopping-cart')
    if(storedCart){
      shoppingCart = JSON.parse(storedCart)
    }
    //* add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
      const newQuantity = quantity + 1;
      shoppingCart[id] = newQuantity;
      // localStorage.setItem(id, newQuantity);
    } else {
      shoppingCart[id] = 1;
      // localStorage.setItem(id, 1);
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart)); //* localstorage value hishebe string expect kore. jehetu shoppingCart ekta oject tai ei object ke amra JSON.stringify er maddhome string e convert kore nilam






};


const removeFromBD = (id) => {
  const storedCart = localStorage.getItem('shopping-cart')

  if(storedCart){
    const shoppingCart = JSON.parse(storedCart);
    if(id in shoppingCart){
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}


export { addToDB , removeFromBD};
