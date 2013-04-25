# spm-chaos-build-example

> A simple example for spm-chaos-build

-----

## Getting Started

这是一个简单的示例，用来演示如何使用 spm-chaos-build
首先请先确保你已经安装了最新的 NodeJS & git
然后安装 Spm & spm-chaos-build

    $ npm install spm -g
    $ npm install spm-chaos-build -g

最后执行以下命令打包合并业务代码

    $ cd js
    $ spm chaos-build example -C seajs-config.js

完成后会在 js/sea-modules 目录下生成 example 子目录，里面是最终代码
这时候访问 HTML 页面时请求的 JS 文件都是打包过后的（最好使用 HTTP 方式访问）