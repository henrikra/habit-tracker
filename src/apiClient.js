const fakeResponseTime = 1000;

export default {
  getItem: key => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(localStorage.getItem(key));
    }, fakeResponseTime);
  }),
  setItem: (key, value) => new Promise((resolve, reject) => {
    setTimeout(() => {
      localStorage.setItem(key, value);
      resolve(localStorage.getItem(key));
    }, fakeResponseTime);
  })
}