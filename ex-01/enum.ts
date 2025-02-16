enum Role {
  ADMIN,
  USER,
  AUTHOR,
}

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
  console.log("hi admin!!");
}
