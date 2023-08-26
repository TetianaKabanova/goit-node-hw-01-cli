const fs = require("fs/promises");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");
const { v4: uuidv4 } = require("uuid");

// Функція для генерації унікального id
const generateUniqueId = () => {
  return uuidv4();
};

// Повертає масив контактів:
const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);

  return contacts;
};

//Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
const getContactById = async (contactId) => {
  const contacts = await listContacts();

  for (const contact of contacts) {
    if (contact.id === contactId) {
      return contact;
    }
  }

  return null;
};

//Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
const removeContact = async (contactId) => {
  const contacts = await listContacts();

  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].id === contactId) {
      const removedContact = contacts.splice(i, 1);
      return removedContact[0];
    }
  }

  return null;
};

//Повертає об'єкт доданого контакту.
const addContact = async (data) => {
  const contacts = await listContacts();

  const newContact = {
    id: generateUniqueId(), // функція для генерації унікального id
    ...data,
  };

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return newContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
