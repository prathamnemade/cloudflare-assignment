const _parseJSON = (response) => {
  return response.text().then((text) => (text ? JSON.parse(text) : {}));
};
export { _parseJSON };
