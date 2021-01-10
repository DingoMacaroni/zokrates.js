export = exportVerifier;
/**
 * Expected from ZoKrates CLI:
 * ```plain
 * -c, --curve <curve>                      Curve to be used to export the verifier [default: bn128]  [possible values: bn128, bls12_381, bls12_377, bw6_761]
 * -i, --input <FILE>                       Path of the verifier [default: verification.key]
 * -o, --output <FILE>                      Path of the output file [default: verifier.sol]
 * -s, --proving-scheme <proving-scheme>    Proving scheme to use to export the verifier [default: g16]  [possible values: g16, pghr13, gm17]
 * -a, --solidity-abi <solidity-abi>        Flag for setting the version of the ABI Encoder used in the contract [default: v1]  [possible values: v1, v2]
 * ```
 *
 * Takes the verification key and outputs a Solidity verifier smart contract.
 *
 * @example
 * exportVerifier('./zok/test_vk.key', './zok/test', 'TestVerifier.sol', 'g16', 'bn128', 'v1')
 *
 * @param {string} codePath Path to verification key.
 * @param {string} [outputPath=./] Directory to output, defaults to current directory.
 * @param {string} [outputName=Verifier.sol] Name of Solidity verifier smart contract. Defaults to `Verifier.sol`.
 * @param {string} [provingScheme=g16] Proving scheme, defaults to g16. Available proving schemes are g16, pghr13, gm17.
 * @param {string} [curve=bn128] Name of curve to be used in the compilation. Defaults to `bn128`.
 * @param {string} [solidityAbi=v1] Version of the ABI encoder used in the contract. Defaults to `v1`. Available v1, v2.
 *
 * @returns {Promise<void>|Promise<string>} Promise object that resolves when verifier export was successful.
 * Passes additional information when `verbose` is `true`.
 */
declare function exportVerifier(codePath: string, outputPath?: string, outputName?: string, provingScheme?: string, curve?: string, solidityAbi?: string, options?: {}): Promise<void> | Promise<string>;
