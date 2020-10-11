import test from 'ava';
import readGitConfig from '..';

process.chdir(__dirname);

test('async, main', async t => {
	t.is(Object.keys(await readGitConfig()).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(await readGitConfig(), 'username'));
	t.true(Object.prototype.hasOwnProperty.call(await readGitConfig(), 'email'));
});
