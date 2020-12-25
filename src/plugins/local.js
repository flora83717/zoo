exports.setLocal = function setLocal(key, val) {
  if (!key) return;
  window.localStorage.setItem(key, val);
};

exports.getLocal = function getLocal(key) {
  if (!key) return;
  return window.localStorage.getItem(key);
};

exports.removeLocal = function removeLocal(key) {
  if (!key) return;
  window.localStorage.removeItem(key);
};
