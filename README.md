# 途优校园影像网站

基于项目简介 PDF 搭建的官网，包含客户展示页面和内部管理后台。

## 功能

### 客户展示页（首页）
- 品牌简介、核心优势、服务规模数据
- 四大业务范围介绍
- 毕业相册核心产品及套餐方案
- 作品案例展示（支持按学段筛选）
- 合作学校列表
- 合作咨询联系方式

### 内部管理后台
- 作品上传与管理（添加、编辑、删除、封面上传）
- 合作学校管理
- 密码保护登录

## 快速开始

```bash
# 安装依赖
npm install

# 复制环境变量（可选，修改管理密码）
cp .env.example .env

# 启动开发服务器
npm run dev
```

- 官网首页：http://localhost:3000
- 管理后台：http://localhost:3000/admin
- 默认管理密码：`tuyou2026`

## 管理后台使用

1. 访问 `/admin`，输入管理密码登录
2. **作品管理**：点击「添加作品」，填写信息并上传封面图片
3. **合作学校**：在「合作学校」标签页添加或删除学校

## 部署

```bash
npm run build
npm start
```

部署时建议：
1. 设置 `ADMIN_PASSWORD` 环境变量为强密码
2. 修改 `data/site.json` 中的联系方式为真实信息
3. 上传的作品图片保存在 `public/uploads/` 目录

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- JSON 文件存储（无需数据库）

## 目录结构

```
├── data/              # 数据文件（作品、合作学校、站点配置）
├── public/uploads/    # 上传的图片
├── src/
│   ├── app/           # 页面和 API 路由
│   ├── components/    # 前端组件
│   ├── lib/           # 工具函数
│   └── types/         # TypeScript 类型
```
