export = generateProof;
/**
 * Expected from ZoKrates CLI:
 * ```plain
 * -b, --backend <backend>                  Backend to use [default: bellman]  [possible values: bellman, libsnark, ark]
 * -i, --input <FILE>                       Path of the binary [default: out]
 * -j, --proof-path <FILE>                  Path of the JSON proof file [default: proof.json]
 * -p, --proving-key-path <FILE>            Path of the proving key file [default: proving.key]
 * -s, --proving-scheme <proving-scheme>    Proving scheme to use to generate the proof [default: g16]  [possible values: g16, pghr13, gm17]
 * -w, --witness <FILE>                     Path of the witness file [default: witness]
 * ```
 *
 * Takes a proving key,a witness and a compiled binary file and outputs a proof.
 *
 * @example
 * generateProof('./zok/test_out', './zok/test_pk.key', './zok/test_witness', './zok/test', 'test_proof.json', 'g16', 'bellman')
 *
 * @param {string} codePath Path to compiled binary.
 * @param {string} provingKeyPath Path to proving key.
 * @param {string} witnessPath Path to witness.
 * @param {string} [outputPath=./] Directory to output, defaults to current directory.
 * @param {string} [outputName=proof.json] Name of proof. Defaults to `proof.json`.
 * @param {string} [provingScheme=g16] Proving scheme, defaults to g16. Available proving schemes are g16, pghr13, gm17.
 * @param {string} [backend=bellman] Backend, defaults to bellman. Available backends are bellman, libsnark, ark.
 *
 * @returns {Promise<void>|Promise<string>} Promise object that resolves when compilation terminates.
 * Passes additional information when `verbose` is `true`.
 */
declare function generateProof(codePath: string, provingKeyPath: string, witnessPath: string, outputPath?: string, outputName?: string, provingScheme?: string, backend?: string, options?: {}): Promise<void> | Promise<string>;
