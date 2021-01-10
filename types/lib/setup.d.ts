export = setup;
/**
 * Expected from ZoKrates CLI:
 * ```plain
 * -b, --backend <backend>                  Backend to use [default: bellman]  [possible values: bellman, libsnark, ark]
 * -i, --input <FILE>                       Path of the binary [default: out]
 * -p, --proving-key-path <FILE>            Path of the generated proving key file [default: proving.key]
 * -s, --proving-scheme <proving-scheme>    Proving scheme to use in the setup [default: g16]  [possible values: g16, pghr13, gm17]
 * -v, --verification-key-path <FILE>       Path of the generated verification key file [default: verification.key]
 * ```
 *
 * Takes compiled binary found at `codePath` and outputs verification and proving keys.
 *
 * @example
 * setup('./zok/test_out', './zok/test', 'g16', 'bellman', 'test_vk.key', 'test_pk.key');
 *
 * @param {string} codePath Path to compiled binary.
 * @param {string} [outputPath=./] Directory to output, defaults to current directory.
 * @param {string} [provingScheme=g16] Proving scheme, defaults to g16. Available proving schemes are g16, pghr13, gm17.
 * @param {string} [backend=bellman] Backend, defaults to bellman. Available backends are bellman, libsnark, ark.
 * @param {string} [vkName=verification.key] Name of verification key file, defaults to `verification.key`.
 * @param {string} [pkName=proving.key] Name of proving key file, defaults to `proving.key`.
 */
declare function setup(codePath: string, outputPath?: string, provingScheme?: string, backend?: string, vkName?: string, pkName?: string, options?: {}): Promise<any>;
