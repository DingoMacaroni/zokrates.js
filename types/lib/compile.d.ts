export = compile;
/**
 * Expected from ZoKrates CLI:
 * ```plain
 * -s, --abi_spec <FILE>       Path of the ABI specification [default: abi.json]
 * -c, --curve <curve>         Curve to be used in the compilation [default: bn128]  [possible values: bn128, bls12_381, bls12_377, bw6_761]
 * -i, --input <FILE>          Path of the source code
 * -o, --output <FILE>         Path of the output binary [default: out]
 *     --stdlib-path <PATH>    Path to the standard library [env: ZOKRATES_STDLIB=]  [default: /root/.zokrates/stdlib]
 * ```
 *
 * Compiles `.zok` file found at `codePath` and outputs binary, abi and ztf at `outputPath` with name `outputName` and `abiName`, respectively.
 *
 * @example
 * compile('./zok/test.zok', './zok/test', 'test_out', 'test_abi.json', 'bn128', '/app/stdlib');
 *
 * @param {string} codePath Path to `.zok` file to compile.
 * @param {string} [outputPath=./] Directory to output, defaults to current directory.
 * @param {string} [outputName=out] Name of output file. Defaults to `out`.
 * @param {string} [abiName=abi.json] Name of abi file. Defaults to `abi.json`.
 * @param {string} [curve=bn128] Name of curve to be used in the compilation. Defaults to `bn128`.
 * @param {string} [stdlibPath=ZOKRATES_STDLIB] Path to ZoKrates standard library. Defaults to `ZOKRATES_STDLIB`.
 *
 * @returns {Promise<void>|Promise<string>} Promise object that resolves when compilation terminates.
 * Passes additional information when `verbose` is `true`.
 */
declare function compile(codePath: string, outputPath?: string, outputName?: string, abiName?: string, curve?: string, stdlibPath?: string, options?: {}): Promise<void> | Promise<string>;
