class User {
    constructor(name, lastname, email) {
    this.id = Date.now().toString();
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    }
   }

   const users = [];
const save = (user) => {
 users.push(user);
 return user;
}
module.exports = {
 User,
 save

};

const getAllUsers = () => {
    return users; // Devuelve el array completo de usuarios
};

module.exports = {
    User,
    save,
    getAllUsers // Exportamos la nueva función
};