export = computeWitness;
/**
 * Expected from ZoKrates CLI:
 * ```plain
 * -s, --abi_spec <FILE>             Path of the ABI specification [default: abi.json]
 * -a, --arguments <arguments>...    Arguments for the program's main function, when not using ABI encoding. Expects a space-separated list of field elements like `-a 1 2 3`
 * -i, --input <FILE>                Path of the binary [default: out]
 * -o, --output <FILE>               Path of the output file [default: witness]
 * ```
 *
 * Computes a witness from a binary and abi file.
 *
 * @example
 * computeWitness('./zok/test_out', './zok/test_abi.json', './zok/test', 'test_witness', [5, 25])
 *
 * @param {string} codePathBinary Path to binary file.
 * @param {string} codePathAbi Path to abi file.
 * @param {string} [outputPath=./] Directory to output, defaults to current directory.
 * @param {string} [outputName=witness] Name of witness. Defaults to `witness`.
 * @param {string[]} args Arguments to be passed to compute witness (flag -a).
 *
 * @returns {Promise<void>|Promise<string>} Promise object that resolves witness computations was successful.
 * Passes additional information when `verbose` is `true`.
 */
declare function computeWitness(codePathBinary: string, codePathAbi: string, outputPath?: string, outputName?: string, args: string[], options?: {}): Promise<void> | Promise<string>;
