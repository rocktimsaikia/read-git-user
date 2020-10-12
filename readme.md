# read-git-user ![build](https://travis-ci.com/RocktimSaikia/read-git-user.svg?branch=master)

> Reads the Github username and email from `.gitconfig` :wrench: and returns it as a json object

## Highlights

- Tiny(1.3kB :sparkles:) and simple
- Returns the original `github-username` since the stored git `name` can be altered and not reliable. See ***[Stackoverflow#9360234](https://stackoverflow.com/a/28142874/9360234)***.
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
})();
```

## API

### readGitUser(options?)

Returns a `Promise<object>` with the parsed JSON.

#### options

##### dir

Type: `string`<br>
Default: `os.homedir()`

The directory of the `.gitconfig` file

## Support

<a href="https://www.buymeacoffee.com/7BdaxfI"><img src="https://user-images.githubusercontent.com/33410545/95193575-a3b51b00-07f1-11eb-9bbb-90ea2e1018d7.png" height="60px"/></a>
