# AImaker Waitlist

这是一个简单的等待列表网站，允许用户通过提交电子邮件地址加入AImaker的等待列表。

## 功能

- 用户可以在首页输入电子邮件地址
- 提交的电子邮件地址会存储在PostgreSQL数据库中
- 表单验证确保输入的是有效的电子邮件地址
- 防止重复提交相同的电子邮件地址

## 技术栈

- **前端**: Next.js, React, TailwindCSS
- **后端**: Next.js API Routes
- **数据库**: PostgreSQL (Zeabur)
- **ORM**: Prisma

## 开始使用

### 前提条件

- Node.js 18+
- PostgreSQL数据库 (如Zeabur提供的)

### 安装

1. 克隆仓库

```bash
git clone <repository-url>
cd aimaker-waitlist
```

2. 安装依赖

```bash
npm install
```

3. 配置环境变量

编辑`.env`文件，设置您的PostgreSQL数据库连接字符串：

```
DATABASE_URL="postgresql://username:password@host:port/database"
```

4. 创建数据库表

```bash
npx prisma migrate dev --name init
```

5. 启动开发服务器

```bash
npm run dev
```

应用将在 [http://localhost:3000](http://localhost:3000) 运行。

## 部署

此项目可以部署到任何支持Next.js的平台，如Vercel或Netlify。确保在部署环境中设置正确的环境变量。

### Vercel部署步骤

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 在环境变量设置中添加`DATABASE_URL`
4. 部署项目

> **注意**: 在Vercel上部署时，构建脚本已配置为自动运行`prisma generate`命令，以确保Prisma客户端正确生成。

## 数据库迁移

如果您对数据模型进行了更改，请运行以下命令来更新数据库架构：

```bash
npx prisma migrate dev
```

## 许可证

[MIT](LICENSE)
