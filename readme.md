# read-git-user ![build](https://travis-ci.com/RocktimSaikia/read-git-user.svg?branch=master)

> Reads the username and email from `.gitconfig` :wrench: and returns it as json object

## Highlights

- Simple and easy to use
- Only 1.3kB :sparkles:
- Uses [Ini](https://github.com/npm/ini) to handle the parsing of the `ini config` file

## Install
```bash
npm install read-git-user
```

## Usage

```js
import readGitUser = require('read-git-user');

(async () => {
        const gitUser = await readGitUser();
        //=> {user: rocktimsaikia, email: rocktimsaikia@gmail.com}

        const gitUser = readGitUser.sync()
        //=> {user: rocktimsaikia, email: rocktimsaikia@gmail.com}
})();
```

## API

### readGitUser(options?)

Returns a `Promise<object>` with the parsed JSON.

### readGitUser.async(options?)

Returns the parsed JSON.

#### options

##### dir

Type: `string`<br>
Default: `process.env.HOME || process.env.USERPROFILE`

The directory of .gitconfig file

## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/95193575-a3b51b00-07f1-11eb-9bbb-90ea2e1018d7.png" height="60px"/></a>
