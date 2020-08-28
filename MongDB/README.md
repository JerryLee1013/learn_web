# MongoDB 学习

## 前期准备

-   安装
-   配置环境变量
    -   D:\SoftwareUpdate\MongoDB\bin
-   在 d 盘根目录创建一个文件夹 data
    -   在 data 中新建一个文件夹 db
-   打开命令框
    -   输入 mongod，启动 mongodb 服务器
-   再打开一个 cmd 窗口

    -   输入 mongo 连接 mongodb,出现>,标识 mongodb 连接成功

-   数据库
    -   服务器
        -   保存数据
        -   mongod --dbpath D:\data\db 开启服务器
    -   客户端
        -   操作服务器，对数据进行增删改查
        -   mongo 启动客户端
-   将 mongodb 设置为系统服务，可以自动再后台启动，不需要每次都手动启动
    -   在 c 盘根目录创建 data，在里面创建 db 和 log
    -   在 D:\SoftwareUpdate\MongoDB 目录下创建配置文件
-   以上为低版本的 mongodb 配置；高版本的没这么麻烦

## 基本概念

-   数据库——》集合——》文档
-   在 mongodb 中数据库和集合都不需要手动创建
-   当我们创建文档时，如果文档所在的集合不存在会自动创建数据可和集合

## 基本操作

-   show dbs/databases 显示数据库
-   use 数据库名 进入指定数据库
-   show collections 看数据库的集合

## 数据库的增删改查（CRUD）

-   向数据库中插入文档
    -   db.集合名.insert(doc)
-   查询当前集合中的所有文档
    -   db.集合名.find()

## mongoose

### Schema（模式对象）

-   定义约束了数据库中的文档结构

### Model

-   相当于 mongodb 中的集合

### Document

-   相当于集合中的具体文档
