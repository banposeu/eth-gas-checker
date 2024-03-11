// ethereum-gas.js

const axios = require('axios');

async function getGasPrice() {
    try {
        const response = await axios.post('https://mainnet.infura.io/v3/4486f93f9ca24368b10a37c1d09f4e4c', {
            jsonrpc: '2.0',
            method: 'eth_gasPrice',
            params: [],
            id: 1,
        });
        const data = response.data;
        if (data.result) {
            const gasPriceWei = parseInt(data.result, 16);
            const gasPriceGwei = gasPriceWei / 1e9; // Convert from Wei to Gwei
            return gasPriceGwei;
        } else {
            throw new Error('Failed to fetch gas price');
        }
    } catch (error) {
        throw new Error('Failed to fetch gas price: ' + error.message);
    }
}

module.exports = { getGasPrice };

