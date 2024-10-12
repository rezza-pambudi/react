// const myArray = [1, 2, 3, 5, 20, 32];

// const [one, two, ...rest] = myArray;

// console.log(one, two, rest);

const myProfile = {
    name: "Ahmad",
    hobby: "Basket",
    agama: "Islam",
};

const updateProfile = {
    name: "Ahmad",
    makananFavorit: "Nasi Goreng",
};

const myProfileUpdate = {
    ...myProfile,
    ...updateProfile,
};

console.log(myProfileUpdate);