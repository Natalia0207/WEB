const getPromesa = (numberA, numberB) => {
    return new Promise((resolve, reject) => {
        if ((numberA - numberB) >= 1) {
            resolve(numberA - numberB);
        } else { reject("ERROR"); }
    })
}

getPromesa(5, 1)
.then(data => {
    console.log(data)
})
.catch(error => {
        console.error(error)
    });


        
//Solución profe de Async-await:
    const f2= async() =>{
    const data = await fn(3,4);
    console.log(data);
    }catch(error){
    consol.logconsole.log(error);
    }}
    f2();
        
        
    
        
        const getPromesa = (numberA, numberB) => {
            return new Promise((resolve, reject) => {
                if ((numberA - numberB) >= 1) {
                    resolve(numberA - numberB);
                } else { reject("ERROR"); }
            })
        }
        
        getPromesa(2, 1)
        .then(data => {
            console.log(data)
        })
        .catch(error => {
                console.error(error)
            });
