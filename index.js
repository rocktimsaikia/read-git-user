"use strict";

import readUserName from "github-username";
import ini from "ini";
import os from "node:os";
import path from "node:path";
import fs from "node:fs";

export default async function (options = {}) {
	const homeDir = options.dir === undefined ? os.homedir() : options.dir;

	const filePath = path.resolve(homeDir, ".gitconfig");
	const gitconfig = ini.parse(await fs.promises.readFile(filePath, "utf-8"));

	const email = gitconfig.user.email;
	const username = await readUserName(email);

	return { username, email };
}
