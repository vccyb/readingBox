const createUser = ({ firstName, lastName, email }) => {
  return {
    firstName,
    lastName,
    email,
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
};

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe111",
  email: "jane@doe.com",
});

console.log(user1);
console.log(user1.fullName());
console.log(user2);
console.log(user2.fullName());
