function filterUsersByGender(users, gender) {
    return users.filter(function (user) { return user.gender === gender; });
}
var users = [
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
var result = filterUsersByGender(users, "Female");
console.log(result);
