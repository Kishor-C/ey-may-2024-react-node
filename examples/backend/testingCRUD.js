import {
  store,
  findById,
  findAll,
  authenticate,
  updatePhone,
} from "./dbprofile.js"; // extracting the db operations

updatePhone(1, 8989384).then((r) => console.log(r));

// authenticate(1, "kishor123").then((r) => console.log(r));

// findAll()
//   .then((r) => console.log(r))
//   .catch((e) => console.log(e));

// findById(1)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// store({
//   _id: 10,
//   name: "Alex",
//   phone: 9922334,
//   password: "alex123",
//   dob: new Date("1990-10-15"),
//   email: "alex@g",
// })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
