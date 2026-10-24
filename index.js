const { LRUCache } = require("lru-cache");

// Caches the results of `fn`, keeping only the `max` most recently used keys.
function memoize(fn, max) {
  const cache = new LRUCache({ max });
  return (key) => {
    if (cache.has(key)) {
      return cache.get(key);
    }
    const value = fn(key);
    cache.set(key, value);
    return value;
  };
}

module.exports = { memoize };
