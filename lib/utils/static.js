// https://zokrates.github.io/toolbox/proving_schemes.html
module.exports = {
  maxCharReturn: 10000000,
  ZOKRATES_BIN: process.env.ZOKRATES_BIN || '/app/zokrates',
  ZOKRATES_STDLIB: process.env.ZOKRATES_STDLIB || '/app/stdlib',
  curves: ['bn128', 'bls12_381', 'bls12_377', 'bw6_761'],
  provingSchemes: ['g16', 'pghr13', 'gm17'],
  backends: ['bellman', 'libsnark', 'ark'],
  solidityAbis: ['v1', 'v2'],
};
