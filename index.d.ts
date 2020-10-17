import {Options} from 'xo';

declare namespace readGitUser {
	interface Options {
		/**
          The directory of .gitconfig file
          @default  process.env.HOME || process.env.USERPROFILE
          *
          */
		readonly dir?: string;
	}

	interface User {
		username: string;
		email: string;
	}
}
/**
     Read the Github username and email from `.gitconfig` and returns it as a json object

     @example
     ```js
     import readGitUser = require('read-git-user');

     (async () => {
            const gitUser = await readGitUser();
            //=> {user: RocktimSaikia, email: rocktimsaikiagmail.com}
     })();
     ```
*/
declare const readGitUser: (options?: readGitUser.Options) => Promise<readGitUser.User>;

export = readGitUser;
