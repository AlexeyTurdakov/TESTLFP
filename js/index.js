const person = {
  name: "Vlad",
  age: 12,
  email: "fg@ru",
};

const op = new Proxy(person, {
  get(target, prop) {
    return target[prop];
  },

  set(target, props, value) {},

  has(target, prop) {},
});
