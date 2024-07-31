# read-git-user

Returns the GitHub username and email from the current local system.

> [!NOTE]
> This method retrieves the original GitHub username since the stored \
> git config name is not reliable. The name can be changed without \
> affecting the original GitHub username.

## Install

```bash
npm i read-git-user
```

## Usage

```js
import readGitUser from "read-git-user";

const gitUser = await readGitUser();

console.log(gitUser);
// => {username: rocktimssaikia, email: rocktimthedev@gmail.com}
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
