# Express + Vue

> 有时候我们想做个前后端都在一起的小项目，这时候我们就可以用 Express + Vue 

## 第一步
全局安装express 
`cnpm install express -g `

全局安装express生成器 express-generator 
`cnpm install express-generator -g `

## 第二步
创建俱体express应用
`express -e nodejs-demo` 【nodejs-demo 项目名称】

安装依赖
`cd nodejs-demo&cnpm install`

启动项目
cnpm start

## 第三步
创建俱体VUE应用
`vue init webpack vue_demo`

安装依赖
`cd vue_demo&cnpm instal`

打包运行
`npm run build`

## 第四步
将VUE项目放到EXPRESS项目并建立联系

将express项目的服务器静态文件根目录 指向 vue 执行build后的输出文件夹 dist
修改app.js文件里的代码如下
`app.use(express.static(path.join(__dirname, 'public/vue_demo/dist')));`

