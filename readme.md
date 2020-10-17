# read-git-user ![build](https://travis-ci.com/RocktimSaikia/read-git-user.svg?branch=master)

> Reads the Github username and email from `.gitconfig` :wrench: and returns it as a json object

## Highlights

- Tiny(1.3kB :sparkles:) and simple
- Returns the original `github-username` since the stored git `name` can be [altered and not reliable](https://stackoverflow.com/a/28142874/9360234).
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
        //=> {username: RocktimsSaikia, email: rocktimthedev@gmail.com}
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

## License

MIT © [Rocktim Saikia](https://rocktim.xyz)
