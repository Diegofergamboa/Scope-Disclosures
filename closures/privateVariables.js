// ! Aunque Javascript no es precisamente un lenguaje que permita crear variables privadas, se puede con el método de closures.


const Person = () => {
    var saveName = "Name"; // Basicamente la variable a la que no podremos acceder de manera ordinaria. porque es privada basicamente
        {
            getName = (name) => {
                return saveName;
            } , 
            setName = (name) => {
                saveName = name;
            }
        };
};

var newPerson = Person();
// Agregar una nueva persona
newPerson = setName('Diego');
console.log(getName(newPerson));


const Password = () => {
    var newPassword = 'passsword' // A esta variable nunca se podrá acceder si no es por medio de los métodos que establecimos.
        {
            changePassword : (password) => {
                password = newPassword ;
            }
            showPassword : () => {
                return newPassword;
            }
        };
};

var newPassword = Password();
newPassword = changePassword('Nueva contraseña');
console.log(showPassword(newPassword));


