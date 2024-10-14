// const myArray = [1, 2, 3, 5, 20, 32];

// const [one, two, ...rest] = myArray;

// console.log(one, two, rest);

const myProfile = {
    name: "Ahmad",
    hobby: "Basket",
    agama: "Islam",
};

const { name, hobby, agama } = myProfile;
console.log(name, hobby, agama);

const updateProfile = {
    name: "Ahmad",
    makananFavorit: "Nasi Goreng",
    agama: "Islam",
};

const myProfileUpdate = {
    ...myProfile,
    ...updateProfile,
};

console.log(myProfileUpdate);