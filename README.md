# Albero NG

[Albero](https://albero.surge.sh)

New redesigned version of Albero project Public Representation. Helping to Choose the Right Data Backend Technology on
Azure

Here is the main representation of Decision Tree for Data Backend Technologies for Azure. Please use this HTML file for
a simple navigation. Click on drill down to be redirected to the subsequent Decision Trees

## Команды

- `make develop`: запуск локального сервера разработки
- `make build`: установит зависимости и соберет
- `make clean`: удалит кеш и артефакты
- `make surge`: соберет и развернет на surge.sh

## Конфигурация

### config/settings.yml

```yaml
search:
  debounce: 500 # ms, время задержки между нажатием клавиш в строке поиска
```

### config/content.yml

```yaml
sidebar:
  link:
    home: /
    repo: https://github.com/Albero/Albero
    share: /share
    contact: /contact


filter:
  platforms:
    - Platform 1
    - Platform 2
    - Platform 3
  technologies:
    - Technology 1
    - Technology 2
    - Technology 3
  viewpoints:
    - Viewpoint 1
    - Viewpoint 2
    - Viewpoint 3


mainpage:
  groups:
    - name: Azure Services
      services:
        - name: Data Services
          description: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          preview: /services/azure/mainDT_0.png
          items:
            - /services/azure/mainDT_0.html
            - /services/azure/mainDT_1.html
            - /services/azure/mainDT_2.html
          filter:
            platforms:
              - Platform 2
```
