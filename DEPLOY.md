# 宝塔面板部署指南（超简单版）

## 🎯 部署步骤（只需3步）

### 第1步：构建项目

```bash
# 在项目根目录运行
npm run build
```

执行后会生成 `dist` 目录，里面就是需要部署的静态文件。

### 第2步：打包上传

**方法A：使用宝塔面板的文件管理器**
1. 登录宝塔面板
2. 进入 `/www/wwwroot/` 目录
3. 创建一个新的网站目录，比如：`/www/wwwroot/myblog`
4. 进入该目录，点击"上传"
5. 将本地 `dist` 目录中的所有文件打包成 zip 上传
6. 上传后解压

**方法B：使用 FTP（推荐 FileZilla）**
1. 在宝塔面板中创建 FTP 账号
2. 用 FileZilla 连接到服务器
3. 进入 `/www/wwwroot/myblog` 目录
4. 将本地 `dist` 目录中的所有文件上传到该目录

### 第3步：创建网站

1. 在宝塔面板点击"网站" → "添加站点"
2. 填写信息：
   - **域名**：你的域名（或服务器IP）
   - **根目录**：`/www/wwwroot/myblog`
   - **PHP版本**：纯静态（不需要PHP）
3. 点击"提交"

✅ **完成！** 现在就可以通过域名访问你的网站了。

---

## 🔒 HTTPS 配置（可选，但推荐）

1. 在宝塔面板的网站列表中，找到刚刚创建的网站
2. 点击"设置"
3. 选择"SSL"选项卡
4. 选择 "Let's Encrypt" 免费证书
5. 填写邮箱，勾选域名，点击"申请"
6. 申请成功后，开启"强制HTTPS"

✅ 现在你的网站就支持 HTTPS 了！

---

## ⚙️ SPA 路由配置（重要！）

由于这是 React SPA 应用，需要配置 Nginx 才能支持刷新页面。

在宝塔面板中：
1. 找到你的网站，点击"设置"
2. 选择"配置文件"
3. 在 `location /` 部分添加一行：

```nginx
location / {
    try_files $uri $uri/ /index.html;  # 添加这行
}
```

修改前：
```nginx
location / {
    index index.html;
}
```

修改后：
```nginx
location / {
    try_files $uri $uri/ /index.html;
    index index.html;
}
```

4. 点击"保存"
5. 点击"重启"

✅ 现在刷新页面也不会404了！

---

## 🚀 高级优化（可选）

### 开启 Gzip 压缩

在宝塔面板的网站配置文件中，找到 `gzip` 相关配置，确保开启：

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/javascript application/json;
```

### 配置缓存

为静态资源添加缓存（js、css、图片等）：

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## 📝 更新部署

每次更新网站：

```bash
# 1. 修改代码
# 2. 重新构建
npm run build

# 3. 将 dist 目录的文件重新上传到服务器
# 4. 覆盖 /www/wwwroot/myblog 中的文件
```

---

## ❓ 常见问题

### Q: 上传后页面空白？
A: 检查是不是直接上传了 dist 目录，应该上传 dist 目录里的**文件**，而不是 dist 目录本身。

### Q: 刷新页面404？
A: 没有配置 SPA 路由，参考上面"SPA路由配置"部分。

### Q: 网站访问慢？
A: 开启 Gzip 压缩和缓存，参考"高级优化"部分。

---

## 📞 需要帮助？

如果遇到问题：
1. 检查 Nginx 错误日志：`/www/wwwlogs/nginx_error.log`
2. 确认文件权限正确
3. 确认域名解析已生效

**总结：宝塔面板 + 静态网站 = 只需上传 dist 文件 + 点击几下鼠标！超级简单！**
