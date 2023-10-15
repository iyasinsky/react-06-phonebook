const LS_KEY = 'contacts_data';

export const getLocalStorageData = () =>
  JSON.parse(window.localStorage.getItem(LS_KEY));

export const setLocalStorageData = data =>
  window.localStorage.setItem(LS_KEY, JSON.stringify(data));
