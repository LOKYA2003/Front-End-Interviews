// Object Freeze and Object Seal

const user = {
  firstName: "Lokesh",
  lastName: "Vasnik",
  age: 21,
  address: {
    city: "Banglore",
    pincode: "401201",
  },
  isGraduate: false,
};

user.address.city = "Naigaon";

console.log(user);

// Delete Property In Objects

delete user.address;
// Not allowed to delete

Object.seal(user);

// Not allowed to Add Or Delete

Object.freeze(user);

// In keyword

console.log("bablu" in user); // False
console.log("age" in user); // True
