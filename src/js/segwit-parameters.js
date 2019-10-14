(function() {

bitcoinjs.bitcoin.networks.groestlcoin.p2wpkh = {
    baseNetwork: "groestlcoin",
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'grs',
    bip32: {
        public: 0x04b24746,
        private: 0x04b2430c
    },
    pubKeyHash: 0x24,
    scriptHash: 0x05,
    wif: 0x80
};

bitcoinjs.bitcoin.networks.groestlcointestnet.p2wpkh = {
    baseNetwork: "groestlcointestnet",
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'tgrs',
    bip32: {
        public: 0x045f1cf6,
        private: 0x045f18bc
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

bitcoinjs.bitcoin.networks.groestlcoin.p2wpkhInP2sh = {
    baseNetwork: "groestlcoin",
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'grs',
    bip32: {
        public: 0x049d7cb2,
        private: 0x049d7878
    },
    pubKeyHash: 0x24,
    scriptHash: 0x05,
    wif: 0x80
};

bitcoinjs.bitcoin.networks.groestlcointestnet.p2wpkhInP2sh = {
    baseNetwork: "groestlcointestnet",
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'tgrs',
    bip32: {
        public: 0x044a5262,
        private: 0x044a4e28
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};
})();
