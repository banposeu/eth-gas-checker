// test.js

const { getGasPrice } = require('./index');

async function testGetGasPrice() {
    try {
        const gasPrice = await getGasPrice();
        console.log('Gas Price (Gwei):', gasPrice);
        console.log('Test passed successfully!');
    } catch (error) {
        console.error('Test failed:', error.message);
    }
}

testGetGasPrice();

