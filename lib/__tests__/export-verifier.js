const fs = require('fs');
const exportVerifier = require('../export-verifier');
const deleteFile = require('../utils/utils');
const { curves, provingSchemes, backends, solidityAbis } = require('../utils/static');

// TODO: add more tests for invalid inputs
// TODO: add tests for proving schemes with different curves
// TODO: add tests for different backends
// TODO: add tests for different solidity ABIs

it('should throw an error if file path does not exist', async () => {
  expect.assertions(1);
  await expect(exportVerifier('./foo', './zok/test')).rejects.toThrow(Error);
});

it('should throw an error if input file does not end with .key', async () => {
  expect.assertions(1);
  await expect(exportVerifier('./zok/test_bellman_bn128_g16_vk', './zok/test')).rejects.toThrow(
    Error,
  );
});

it('should create the output file for bellman bn128 g16', async () => {
  await exportVerifier(
    './zok/test_bellman_bn128_g16_vk.key',
    './zok/test',
    'test_bellman_bn128_g16_v1_verifier.sol',
    'g16',
    'bn128',
    'v1'
  );
  expect(fs.existsSync('./zok/test/test_bellman_bn128_g16_v1_verifier.sol')).toBe(true);
  deleteFile('./zok/test/test_bellman_bn128_g16_v1_verifier.sol');
});

it('should return a string given a verbose flag', async () => {
  const output = await exportVerifier(
    './zok/test_bellman_bn128_g16_vk.key',
    './zok/test',
    'test_verifier.sol',
    undefined,
    undefined,
    undefined,
    {
      verbose: true,
    },
  );
  deleteFile('./zok/test/test_verifier.sol');
  expect(typeof output).toBe('string');
});
