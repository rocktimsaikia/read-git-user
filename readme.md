# read-git-user

Returns the GitHub username and email of the current system's `.gitconfig`.

> [!NOTE]
> This method retrieves the original GitHub username since the stored \
> git config name is not reliable. The name can be changed without \
> affecting the original GitHub username.

[![Tests](https://github.com/rocktimsaikia/read-git-user/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/read-git-user/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/read-git-user?color=bright)](https://npmjs.com/package/read-git-user)

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

### readGitUser(options)

Returns a `Promise<object>` with the retrieved git config data.

#### Options (`object`) :

##### `dir`

> Type: `string`<br>
> Default: `os.homedir()`
>
> The directory of the `.gitconfig` file. \
> This option is available in-case the config file is not in the default dir for some systems.
