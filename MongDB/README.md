#   MongoDB学习

## 前期准备

-   安装
-   配置环境变量
    -   D:\SoftwareUpdate\MongoDB\bin
-   在d盘根目录创建一个文件夹data
    -   在data中新建一个文件夹db
-   打开命令框
    -   输入mongod，启动mongodb服务器
-   再打开一个cmd窗口
    -   输入mongo连接mongodb,出现>,标识mongodb连接成功

-   数据库
    -   服务器
        -   保存数据
        -   mongod --dbpath D:\data\db  开启服务器
    -   客户端
        -   操作服务器，对数据进行增删改查
        -   mongo启动客户端
-   将mongodb设置为系统服务，可以自动再后台启动，不需要每次都手动启动
    -   在c盘根目录创建data，在里面创建db和log
    -   在D:\SoftwareUpdate\MongoDB目录下创建配置文件
    
-   以上为低版本的mongodb配置；高版本的没这么麻烦
##  基本概念

-   数据库——》集合——》文档
-   在mongodb中数据库和集合都不需要手动创建
-   当我们创建文档时，如果文档所在的集合不存在会自动创建数据可和集合
##  基本操作

-   show dbs/databases      显示数据库
-   use 数据库名            进入指定数据库
-   show collections        看数据库的集合

##  数据库的增删改查（CRUD）

-   向数据库中插入文档
    -   db.集合名.insert(doc)
-   查询当前集合中的所有文档
    -   db.集合名.find()