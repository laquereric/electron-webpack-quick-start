# electron-webpack-quick-start
> A bare minimum project structure to get started developing with [`electron-webpack`](https://github.com/electron-userland/electron-webpack).

Thanks to the power of `electron-webpack` this template comes packed with...

* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

Make sure to check out [`electron-webpack`'s documentation](https://webpack.electron.build/) for more details.

## Getting Started
Simply clone down this repository, install dependencies, and get started on your application.

The use of the [yarn](https://yarnpkg.com/) package manager is **strongly** recommended, as opposed to using `npm`.

### Node.js Version Requirements
This project requires Node.js v18 for compatibility with webpack 4 and electron-webpack. If you're using a different Node.js version, you can use [nvm](https://github.com/nvm-sh/nvm) to switch:

```bash
# Install and use Node.js v18
nvm install 18
nvm use 18

# Verify the version
node --version  # Should show v18.x.x
```

```bash
# create a directory of your choice, and copy template using curl
mkdir new-electron-webpack-project && cd new-electron-webpack-project
curl -fsSL https://github.com/electron-userland/electron-webpack-quick-start/archive/master.tar.gz | tar -xz --strip-components 1

# or copy template using git clone
git clone https://github.com/electron-userland/electron-webpack-quick-start.git
cd electron-webpack-quick-start
rm -rf .git

# install dependencies
yarn
```

### Development Scripts

```bash
# check if your environment is compatible
yarn check-env

# run application in development mode (includes environment check)
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```

### Environment Check

The project includes an automatic environment check that runs before starting the development server. This ensures you have a compatible Node.js version and required tools.

- **Required**: Node.js v18 or higher
- **Recommended**: Node.js v18 for best compatibility with webpack 4
- **Required**: Yarn package manager

You can run the environment check independently:
```bash
yarn check-env
```

If you encounter compatibility issues, the check will provide specific instructions on how to fix them.
