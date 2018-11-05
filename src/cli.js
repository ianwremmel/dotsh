import yargs from 'yargs';
import pkgUp from 'pkg-up';
import fs from 'mz/fs';

(async function run() {
  try {
    yargs
      .version(await loadVersion())
      .help()
      .demandCommand().argv;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();

/**
 * @returns {Promise<string>}
 */
async function loadVersion() {
  const packagePath = await pkgUp();
  const pkg = JSON.parse(await fs.readFile(packagePath));
  return pkg.version;
}
