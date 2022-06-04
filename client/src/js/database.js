import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  console.error('putDb not implemented');
  const editsDb = await openDB('edit', 1);
  const tx = editsDb.transaction('edit', 'readwrite');
  const store = tx.objectStore('edit');
  const request = store.put({ id: id, edit: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

export const getDb = async () => {
  console.error('getDb not implemented');
 const editsDb = await openDB('edit', 1);
 const tx = editsDb.transaction('edit', 'readonly');
 const store = tx.objectStore('edit');
 const request = store.getAll();
 const result = await request;
 console.log('result.value', result);
 return result;

};

initdb();
