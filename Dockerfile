# 使用官方nginx镜像作为基础
FROM nginx:alpine

# 删除默认的nginx配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制项目文件到nginx的html目录
COPY . /usr/share/nginx/html

# 复制自定义nginx配置
COPY nginx.conf /etc/nginx/conf.d/

# 暴露9200端口
EXPOSE 9200

# 启动nginx
CMD ["nginx", "-g", "daemon off;"]
