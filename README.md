# Elbrus Bootcamp Vite bundle

## React + Typescript + ESLint + Prettier

Современный быстрый сборщик React проекта на Typescript с предустановленными настройками ESLint и Prettier от Elbrus Bootcamp.

## Использование

```
npx degit Elbrus-Bootcamp/vite-react-ts my-app

cd my-app

npm i
```

## Скрипты

- Запустить в режиме разработки

```
npm run dev
```

- Собрать проект

```
npm run build
```

- Превью

```
npm run preview
```

## `settings.json`

Чтобы настроить форматирование и линтование по сохранению, необходимо прописать в `settings.json` (ctrl + shift + P) следующие настройки:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Можно добавить форматирование Prettier для JS и React:

```json
{
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

При работе не из корневой директории необходимо настроить CWD для ESLint:

```json
{
  "eslint.workingDirectories": [
    { "directory": "./client", "changeProcessCWD": true },
    { "directory": "./server", "changeProcessCWD": true }
  ]
}
```

Если директория не `client` или `server`, то можно добавить соответствующую строчку в данный массив.
