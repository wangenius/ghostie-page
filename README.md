# 首页和文档

使用[Docusaurus](https://docusaurus.io/)构建

## 运行

本地环境运行 `localhost:4000`

```shell
npm start
```

### 部署


```shell
npm run deploy
```

调用：`cross-env GIT_USER=wangenius USE_SSH=false npm run gh-pages-deploy`

记得配置`GIT_USER`和`USE_SSH`

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```
