# Тестовое задание Avito

## Запуск проекта
Для запуска проекта необходимо перейти в корень frontend, установить зависимости
```bash
    npm i
```
Далее можно выполнить следующую команду и проект запустится на 3000 порте
```bash
    npm run start
```
**.env** создавать не нужно, api url указан в коде

## Запуск бекенда
Инструкция лежит в папке server


- Для управления формами использовал библиотеку **formik**, поскольку по опыту считаю этот инстурмент удобным 
- По требованиям на странице всех задач необходимо было добавить дополнительную кнопку для создания задачи - от этого отказался, потому что эта кнопка полностью повторяет функционал такой же кнопки из хедера, хедер сделал **sticky** и получил тоже самое