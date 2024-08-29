#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs

# 如果是发布到自定义域名
echo 'yiranli.tech' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:rrrno1/personal-website.git main:gh-pages

cd -