type Gender = "Male" | "Female" | "Other";

interface User {
  id: number;
  name: string;
  gender: Gender;
  age: number;
  email: string;
  isRetired: boolean;
}

function filterUsersByGender(users: User[], gender: Gender): User[] {
  return users.filter((user) => user.gender === gender);
}

const users: User[] = [
  {
    id: 1,
    name: "Shubham",
    gender: "Male",
    age: 29,
    email: "ss@gmail.com",
    isRetired: true,
  },
  {
    id: 2,
    name: "Susmita",
    gender: "Female",
    age: 22,
    email: "sus@gmail.com",
    isRetired: false,
  },
];

const result = filterUsersByGender(users, "Female");

console.log(result);
