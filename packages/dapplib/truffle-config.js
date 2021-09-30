require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entry brown venture strong riot saddle eternal grace industry surge theme'; 
let testAccounts = [
"0xfe815c8cd93c293b039e046647bab416fa3d519cbe41f76b6a865ef1d6b34fb4",
"0x96820bad9d864cb6b55ae2d1ddd2ddf8ba3ec131433647167e3c9831065c91ea",
"0x39f337de32ce5f7790c7b87e63de9210039127678ae67f961cfe039f734544fc",
"0x38f4f4b2ccf4f8e2946d7af4d7d1be9920a2d95cb71eaca35478352b55c79723",
"0x1175d326ff59da31febe2de13f9e9ac0b57c9a34d059e9c4e0e4a231e3965a7a",
"0xa1b1604ef01a0761e18c9be8e25f10da440d4f74c029a3ede9b99de1bc1a0d3f",
"0x2e418cea7b24ff76211e42881ad2ec5e77106c5284324670cd95a0e2b83ea333",
"0x69dfae1abd7210ee042e668a7f6d5e6e288c91f44941b438811f4e170d529144",
"0xe7a98a47499ca1d836b505f2bd12e2709d21d7d6e6ca198832168b03b96eb7a8",
"0x7e5b18927021d930f86196e1be0c0f6b13f4930232e95d369e17e2d8f40e5727"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

