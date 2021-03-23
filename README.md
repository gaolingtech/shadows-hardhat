# shadows-hardhat

安装hardhat
```
npm init -y
npm install --save-dev hardhat 
```

编译合约
```
npx hardhat compile
```

执行测试用例
```
npx hardhat test
```

部署到 dev 网络
```
npx hardhat run scripts/deploy.js --network dev
```

部署到moonbase网络
```
npx hardhat run scripts/deploy.js --network moonbase
```

部署到本地
```
npx hardhat run scripts/deploy.js --network localhost
```

进入到 moonbase 网络 console
```
npx hardhat console --network moonbase
```