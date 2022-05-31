
let cantidadInvitados;
do{
    cantidadInvitados = parseInt(prompt("¿Cual es la cantidad de invitados para su evento?"))
    if (cantidadInvitados){
        alert ('Complete los siguientes datos')
        let nombre = prompt ('ingrese su nombre')
    let apellido = prompt ('ingrese su apellido')
    let edad = prompt ('ingrese su edad')
    let correo = prompt ('ingrese su correo')
        if(nombre == "" || apellido == "" || edad == "" || correo == ""){
            alert('Complete todos los datos')
        }else {
            for (let i = cantidadInvitados; i<=10; i++) {
                alert('Por ' + i + ' cantidad de invitados, el calculo es de ' + i*2 + ' de botellas de vino')
            }
        }                       

    }
    console.log(cantidadInvitados);
} while (cantidadInvitados)

alert ("Vuelva pronto!")