#!/bin/bash

# Получаем количество изменённых, добавленных и удалённых файлов
modified_files=$(git status --porcelain | grep -E "^( M)" | wc -l)
added_files=$(git status --porcelain | grep -E "^(A| M)" | wc -l)
deleted_files=$(git status --porcelain | grep -E "^ D" | wc -l)

# Получаем текущую дату и время
current_date=$(date +"%Y-%m-%d %H:%M:%S")

# Формируем автоматическое сообщение для коммита
commit_message="Авто-коммит: $current_date | Изменено: $modified_files, Добавлено: $added_files, Удалено: $deleted_files"

# Добавляем все изменения
git add .

# Делаем коммит с автоматическим сообщением
git commit -m "$commit_message"

# Получаем полный SHA коммита
commit_sha=$(git rev-parse HEAD)

# Пушим изменения на удалённый репозиторий
git push

# Сообщение о завершении
echo "Изменения успешно закоммичены с сообщением: '$commit_message' и отправлены в удалённый репозиторий."
echo "Полный SHA коммита: $commit_sha"

