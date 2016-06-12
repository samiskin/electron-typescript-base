import * as fs from 'fs';
import { app } from 'electron';

class LocalStorage {
  storageLocation: string;
  storedData: any;
  constructor(location: string = null) {
    this.storageLocation = location || `${app.getPath('userData')}/state-backup.json`;
    try {
      this.storedData = JSON.parse(<string> fs.readFileSync(this.storageLocation, 'String'));
    } catch (e) {
      console.error(`Couldn't load ${this.storageLocation}: ${e.message}`);
      this.storedData = {};
    }
  }

  getItem(key: string) {
    return this.storedData[key];
  }

  setItem(key: string, value: any) {
    this.storedData[key] = value;
    this.save();
  }

  save() {
    try {
      fs.writeFileSync(this.storageLocation, JSON.stringify(this.storedData));
    } catch (e) {
      console.error(`Couldn't save ${this.storageLocation}: ${e.message}`);
    }
  }

  getAllKeys() {
    return Object.keys(this.storedData);
  }
}

export default LocalStorage;
