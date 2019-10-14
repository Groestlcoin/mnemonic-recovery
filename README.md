# Seed Savior: Mnemonic Phrase Recovery Tool

A tool for recovering BIP39 seed phrases.

The tool is based on the bip39 project by Ian Coleman https://github.com/iancoleman/bip39

## Online Version

https://groestlcoin.org/recovery/

## Standalone offline version

Download `mnemonic-standalone.html`

Open the file in a browser by double clicking it.

This can be compiled from source using the command `python compile.py`

## Usage

Enter your seed phrase into the 'BIP39 Phrase' field. If a word is missing or unknown, please type "?" instead and the tool will find all relevant options. If a word is wrong, the tool will try to suggest the closest option.

The tool will suggest all relevant options for the missing word and the derived public addresses for Bitcoin anmd Ethereum. To find out if one of the suggested addresses is actually the right one, you can click on the suggested address  tocheck the address' transaction history on a block explorer.

## Making changes

Please do not make modifications to `mnemonic-standalone.html`, since they will
be overwritten by `compile.py`.

Make changes in `src/*`.

Changes are applied during release using the command `python compile.py`, so
please do not commit changes to `mnemonic.html`

# License

This Seed Savior tool is released under the terms of the MIT license. See LICENSE for
more information or see https://opensource.org/licenses/MIT.
