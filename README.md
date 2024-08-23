# windows

## install Node.js
[Node.js official website](https://nodejs.org/en)

Downaload Node.js, check nodejs and npm version after installation
```sh
node -v
npm -v
```

## install docsify

```sh
npm i docsify-cli -g
```

## preview
```sh
cd nxp_matter_user_guide
docsify serve
# browser input http://localhost:3000
```

# Ubuntu

## install Node.js
[Node.js official website](https://nodejs.org/en)

Downaload Node.js, check nodejs and npm version after installation
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install 20
node -v
npm -v
```

## install docsify

```sh
npm i docsify-cli -g
```

## preview
```sh
cd nxp_matter_user_guide
docsify serve
```
### Q&A
```sh
Q:node:internal/fs/watchers:247
    const error = new UVException({
                  ^

Error: ENOSPC: System limit for number of file watchers reached, watch '/home/gnar/code/matter/nxp_matter_user_guide/versions.js'

solution:
cat /proc/sys/fs/inotify/max_user_watches
sudo sysctl fs.inotify.max_user_watches=131070
```
