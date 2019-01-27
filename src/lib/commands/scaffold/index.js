import {resolve} from 'path';
import {tmpdir} from 'os';

import {mkdir} from 'mz/fs';

/**
 * @param {scaffold.Options} options
 * @returns {Promise}
 */
export default async function scaffold(options) {
  const workdir = resolve(tmpdir(), 'scaffold');
  // TODO mkdirp?
  await mkdir(workdir);

  // TODO update current shell
  // scaffold out work-specific folders
  // TODO download current pathogen to home/.vim/autoload/pathogen.vim
  // TODO editorconfig bundle to home/.vim/bundle/editorconfig
}
