FROM node:8.0.0
MAINTAINER Mon (505038730@qq.com)
 
 # 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的app文件夹下
 ADD . /src
 # cd到app文件夹下
 WORKDIR /src
 
 # 安装项目依赖包
 RUN npm install
 #RUN npm rebuild node-sass --force
 
 # 配置环境变量
 ENV HOST 0.0.0.0
 ENV PORT 8000
 
 # 容器对外暴露的端口号
 EXPOSE 8000
 
 # 容器启动时执行的命令，类似npm run start
 CMD ["npm", "dev"]