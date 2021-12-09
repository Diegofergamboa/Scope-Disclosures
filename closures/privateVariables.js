// ! Aunque Javascript no es precisamente un lenguaje que permita crear variables privadas, se puede con el método de closures.


const Person = () => {
    var name = "Name";
        {
            getName : (name) => {
                console.log(name);
            } , 
            setName : (name => {
                
            })
        }
}
