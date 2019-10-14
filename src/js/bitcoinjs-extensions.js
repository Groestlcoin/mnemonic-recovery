bitcoinjs.bitcoin.networks.groestlcoin = {
  messagePrefix: '\x1cGroestlCoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubKeyHash: 0x24,
  scriptHash: 0x05,
  wif: 0x80
};

bitcoinjs.bitcoin.networks.groestlcointestnet = {
  messagePrefix: '\x1cGroestlCoin Signed Message:\n',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef
};
