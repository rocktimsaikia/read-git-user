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
}

declare const readGitUser: {
	/**
     Read the username and email from .gitconfig
     parses and returns it as JSON object.

     @example
     ```js
     import readGitUser = require('read-git-user');

     const gitUser = readGitUser.sync()
     //=> {user: rocktimsaikia, email: rocktimsaikiagmail.com}
     ```
     */
	sync: <T = string>(options?: readGitUser.Options) => Record<string, T>;

	/**
     Read the username and email from .gitconfig
     parses and returns it as JSON object.

     @example
     ```js
     import readGitUser = require('read-git-user');

     (async () => {
            const gitUser = await readGitUser();
            //=> {user: rocktimsaikia, email: rocktimsaikiagmail.com}
     })();
     ```
     */
	<T = string>(options?: readGitUser.Options): Promise<Record<string, T>>;
};

export = readGitUser;
