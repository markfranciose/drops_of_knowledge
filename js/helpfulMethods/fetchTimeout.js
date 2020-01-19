function fetchTimeout(url, options, timeout = 10000) {
  return new Promise.race([
    fetch(url, options),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error 'timeout'), timeout) 
    })
  ]);
}
