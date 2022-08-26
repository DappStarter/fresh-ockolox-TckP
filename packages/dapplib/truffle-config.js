require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space street random pumpkin unique hunt screen army ghost'; 
let testAccounts = [
"0xf87986eb658225fee8991d225ee487118ea97c018253a614a796f360054448f8",
"0xf50ee0a22918678fd296538d7c02b75f9b3649b12d48be34b648e5755e962a20",
"0x8d621f4d538d38bf5fee17f4056f21e93682e6347f1a55f2dcb1b61452fa4b1d",
"0x7e1c2082c35df39dbf5dd5d53f734e994fb4ddcdc08981a6044c88d5026f06cf",
"0xf8c578be9dfb5e0828da68a7e6d8e95123d55a397a630d2d430f49746dda9947",
"0x3bfa9d60b80d832a051be205e4093a1317f98d03757c60e61ecc502834424cf8",
"0x23397813ab6d8bd4bdc806c6f710b4db6ae7771084af6fbba5dc5c81aeae82a4",
"0x94905779dd5fabad237c877df789c443343221251967261f1885058920f6c563",
"0x7dbc9f64596940db2ce8938aced47ce7a19ced6180b5aefc25c7e1fb060ca092",
"0x03a67b0da38d6f38f0576073184e99b4e8a5b0d846a22d74ef62fda39a69849e"
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

