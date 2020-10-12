import test from 'ava';
import readGitConfig from '..';

process.chdir(__dirname);

/**
@todo Set up a fake git enviroment beforehand to test without specifying a dir

Test('async, main', async t => {
	const userConfig = await readGitConfig();

	t.is(Object.keys(userConfig).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(userConfig, 'username'));
	t.true(Object.prototype.hasOwnProperty.call(userConfig, 'email'));
});
*/

test('async, with --dir option', async t => {
	const userConfig = await readGitConfig({dir: './'});

	t.is(Object.keys(userConfig).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(userConfig, 'username'));
	t.true(Object.prototype.hasOwnProperty.call(userConfig, 'email'));

	t.is(userConfig.email, 'rocktimthedev@gmail.com');
	t.is(userConfig.username, 'RocktimSaikia');
});
