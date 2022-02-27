<div align="center">

<h1><code>NoSM</code></h1>

<strong>
A example project using <code>yarism webassembly</code> which build by 
<a href="https://github.com/bytesboy/wrapped-sm-for-web.git">
<code>wrapped-sm-for-web</code>
</a>. 
</strong>

</div>

## About

This project created from [`create-wasm-app`](https://github.com/rustwasm/create-wasm-app.git) and
command [`npm init wasm-app nosm`](https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/using-your-library.html).

## 🚴 Usage

### 🛠️ Build WebAssembly

```
git clone https://github.com/bytesboy/wrapped-sm-for-web.git
wasm-pack build --out-name index   
```

Then it will create wasm `pkg` and copy `pkg` directory to this project root directory.

### 🛠️ Run Serve

```
npm install
npm start
```


