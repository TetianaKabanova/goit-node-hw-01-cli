# Домашнє завдання 1

## Крок 1

- Ініціалізуй проєкт за допомогою команди npm init
- В корені проекту створи файл `index.js`
- Постав пакет [nodemon](https://www.npmjs.com/package/nodemon) як залежність [nodemon](https://www.npmjs.com/package/nodemon) як залежність розробки (devDependencies)
- В файлі `package.json` додай "скрипти" для запуску `index.js`
  - Скрипт `start` який запускає `index.js` за допомогою `node`
  - Скрипт `dev` який запускає `index.js` за допомогою `nodemon`

## Крок 2

У корені проекту створи папку `db`. Для зберігання контактів завантаж і використовуй файл [contacts.json](./contacts.json), поклавши його в папку `db`.

У корені проекту створи файл `contacts.js`.

- Зроби імпорт модулів `fs` (у версії, яка працює з промісами - `fs/promises`) і `path` для роботи з файловою системою
- Створи змінну `contactsPath` і запиши в неї шлях до файлі `contacts.json`. Для складання шляху використовуй методи модуля `path`.
- Додай функції для роботи з колекцією контактів. У функціях використовуй модуль `fs` та його методи `readFile()` і `writeFile()`
- Зроби експорт створених функцій через `module.exports`

```js
// contacts.js

/*
 * Розкоментуйте і запишить значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. Повертає null, якщо контакт з таким id не знайдений.
}
```

## Крок 3

Зроби імпорт модуля `contacts.js` в файлі `index.js` та перевір працездатність функцій для роботи з контактами.

## Крок 4

У файлі `index.js` імпортується пакет `yargs` для зручного парсу аргументів командного рядка. Використовуй готову функцію `invokeAction()` яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу `contacts.js` передаючи йому необхідні аргументи.

```js
// index.js
const argv = require("yargs").argv;

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
```

Так само, ви можете використовувати модуль [commander] (https://www.npmjs.com/package/commander) для парсинга аргументів командного рядка. Це більш популярна альтернатива модуля `yargs`

```js
const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
```

## Крок 5

Запусти команди в терміналі і зроби окремий скріншот результату виконання кожної команди.

```shell
# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

# Отримуємо контакт по id і виводимо у консоль об'єкт контакта або null якщо контакту з таким id не існує
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null якщо контакту з таким id не існує
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
```

## Крок 6 - Здача домашнього завдання.

Скріншоти виконання команд, можна залити на будь-який безкоштовний хмарний сервіс зберігання картинок (Приклад: [monosnap](https://monosnap.com/), [imgbb.com](https://imgbb.com/)) і відповідні посилання додай в файл README.md (створи цей файл в корені проєкту). Після прикріпи в LMS посилання на репозиторій для перевірки ментором виконаної роботи.

## Критерії прийому

- Створено репозиторій з домашнім завданням — CLI додаток
- Посилання на репозиторій надіслане ментору на перевірку
- Код відповідає технічному завданню проєкту
- При виконанні коду не виникає необроблених помилок
- Назва змінних, властивостей і методів записана в нотації СamelCase. Використовуються англійські слова, назви функцій та методів містять дієслово
- У коді немає закоментованих ділянок коду
- Проєкт коректно працює з актуальною LTS-версією Node

Screenshots

https://monosnap.com/file/vwMPesr95ewivuB0PO4vZcxsNvr5eR

https://monosnap.com/file/PO45zdS1opH6q3hpcggbKgObNLPDrQ

https://monosnap.com/file/INmSJxYF2IYoTgfiEUQe2bhftFrgvS

https://monosnap.com/file/iHhlL4VR7J7uweP4r2JV6cUTw393IG
