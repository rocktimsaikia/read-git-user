'use strict';
const readUserName = require('github-username');
const shell = require('shelljs');
const ini = require('ini');
const path = require('path');
const fs = require('fs');
const os = require('os');

module.exports = async () => {
	const configPath = path.resolve(os.homedir(), '.gitconfig');
	let {email} = ini.parse(await fs.promises.readFile(configPath, 'utf-8')).user;

	if (email === undefined && shell.which('git')) {
		email = shell.exec('git config --get user.email', {silent: true}).stdout.trim();
	}

	const username = await readUserName(email);

	return {username, email};
};
