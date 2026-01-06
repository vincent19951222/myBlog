#!/bin/bash
# VPS 部署诊断脚本
# 在 VPS 的项目目录 /www/wwwroot/boluopets.com 下运行

echo "========== 1. Git 状态检查 =========="
echo "当前分支:"
git branch --show-current

echo -e "\n远程仓库配置:"
git remote -v

echo -e "\n本地修改状态:"
git status

echo -e "\n最新 commit (本地 vs 远程):"
echo "本地最新:"
git log -1 --oneline
echo "远程最新:"
git log origin/main -1 --oneline 2>/dev1 || echo "无法获取远程信息"

echo -e "\n========== 2. PM2 状态检查 =========="
pm2 status

echo -e "\n========== 3. 端口占用检查 =========="
lsof -i :3000 || echo "端口 3000 未被占用"

echo -e "\n========== 4. 构建产物检查 =========="
if [ -d ".next" ]; then
    echo ".next 目录存在"
    echo ".next 最后修改时间:"
    stat -c %y .next 2>/dev/null || stat -f "%Sm" .next
else
    echo ".next 目录不存在 - 项目可能未构建"
fi

echo -e "\n========== 5. 日志检查 =========="
echo "PM2 最近 20 行日志:"
pm2 logs blog-website --lines 20 --nostream
