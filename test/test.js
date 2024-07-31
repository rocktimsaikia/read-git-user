import test from "ava";
import readGitConfig from "../index.js";
import createEsmUtils from "esm-utils";

const { dirname: __dirname } = createEsmUtils(import.meta);

process.chdir(__dirname);

test("should read config with --dir option", async (t) => {
	const userConfig = await readGitConfig({ dir: "./" });

	t.is(Object.keys(userConfig).length, 2);
	t.true(Object.prototype.hasOwnProperty.call(userConfig, "username"));
	t.true(Object.prototype.hasOwnProperty.call(userConfig, "email"));

	t.is(userConfig.email, "rocktimthedev@gmail.com");
	t.is(userConfig.username, "rocktimsaikia");
});
