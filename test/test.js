import test from 'ava';
import readGitConfig from '..';

process.chdir(__dirname);

test('async, main', async t => {
	t.is(Object.keys(await readGitConfig()).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(await readGitConfig(), 'name'));
	t.true(Object.prototype.hasOwnProperty.call(await readGitConfig(), 'email'));
});

test('sync, main', t => {
	t.is(Object.keys(readGitConfig.sync()).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(readGitConfig.sync(), 'name'));
	t.true(Object.prototype.hasOwnProperty.call(readGitConfig.sync(), 'email'));
});

test('async, with --dir option', async t => {
	t.is(Object.keys(await readGitConfig({dir: './'})).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(await readGitConfig(), 'name'));
	t.true(Object.prototype.hasOwnProperty.call(await readGitConfig(), 'email'));
});

test('sync, with --dir option', t => {
	t.is(Object.keys(readGitConfig.sync({dir: './'})).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(readGitConfig.sync(), 'name'));
	t.true(Object.prototype.hasOwnProperty.call(readGitConfig.sync(), 'email'));
});
