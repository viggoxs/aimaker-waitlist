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
- **数据库**: PostgreSQL (Supabase)
- **ORM**: Prisma

## 开始使用

### 前提条件

- Node.js 18+
- Supabase账户 (免费)

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

3. 设置Supabase数据库

   - 注册并登录 [Supabase](https://supabase.com/)
   - 创建一个新项目
   - 在项目设置中找到数据库连接信息
   - 复制PostgreSQL连接字符串

4. 配置环境变量

编辑`.env`文件，粘贴您的Supabase PostgreSQL连接字符串：

```
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres"
```

5. 创建数据库表

```bash
npx prisma migrate dev --name init
```

6. 启动开发服务器

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

## 数据库迁移

如果您对数据模型进行了更改，请运行以下命令来更新数据库架构：

```bash
npx prisma migrate dev
```

## 许可证

[MIT](LICENSE)
