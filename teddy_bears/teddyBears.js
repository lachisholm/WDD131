// ES Module for teddy bear data
export const teddyBear = {
    name: 'Classic Brown Teddy',
    size: 'Medium',
    price: 19.99,
    inStock: true
};

export const teddyBearNames = ['Brownie', 'Snowflake', 'Honey', 'Cuddles'];

export function displayTeddyInfo(bear) {
    if (bear.inStock) {
        console.log(bear.name + ' is available for purchase.');
    } else {
        console.log(bear.name = 'is out of stock.');
    }
}