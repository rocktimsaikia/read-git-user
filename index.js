'use strict';
const path = require('path');
const ini = require('ini');
const fs = require('fs');

module.exports = async options => {
	options = {
		dir: process.env.HOME || process.env.USERPROFILE,
		...options
	};

	const filePath = path.resolve(options.dir, '.gitconfig');
	const {user} = ini.parse(await fs.promises.readFile(filePath, 'utf-8'));

	return {...user};
};

module.exports.sync = options => {
	options = {
		dir: process.env.HOME || process.env.USERPROFILE,
		...options
	};

	const filePath = path.resolve(options.dir, '.gitconfig');
	const {user} = ini.parse(fs.readFileSync(filePath, 'utf-8'));

	return {...user};
};
