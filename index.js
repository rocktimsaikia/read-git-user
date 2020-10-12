'use strict';
const readUserName = require('github-username');
const ini = require('ini');
const path = require('path');
const os = require('os');
const fs = require('fs');

module.exports = async (options = {}) => {
	const homeDir = options.dir === undefined ? os.homedir() : options.dir;

	const filePath = path.resolve(homeDir, '.gitconfig');

	const {user: {email}} = ini.parse(await fs.promises.readFile(filePath, 'utf-8'));
	const username = await readUserName(email);

	return {username, email};
};
