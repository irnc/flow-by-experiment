// @flow
// copied from https://flow.org/en/docs/types/utilities/#toc-the-existential-type

class DataStore {
  data: *; // If this property weren't defined, you'd get an error just trying to assign `data`
  constructor() {
    this.data = {
      name: 'DataStore',
      isOffline: true
    };
  }
  goOnline() {
    this.data.isOffline = false;
  }
  changeName() {
    this.data.isOffline = 'SomeStore'; // oops, wrong key!
  }
}
