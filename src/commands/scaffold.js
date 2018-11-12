import scaffold from '../lib/commands/scaffold';

export const command = 'scaffold';
export const desc = 'Create an initial configuration repo';
export const builder = {};

/**
 * @param {scaffold.Options} argv
 */
export function handler(argv) {
  scaffold(argv);
}
