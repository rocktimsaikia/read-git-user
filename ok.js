const readUser = require('.');

(async () => {
	const user = await readUser();
	console.log(user);
})();
