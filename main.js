let evento = prompt ('¿Está pensando en realizar un evento?');
if (evento == 'Si') {
    alert ('Está en el lugar indicado para que le presupuestemos sus bebidas')
} else {
    alert ('Ya llegará el momento!')
}

function Bebidas() {
        alert ('Bienvenido! Estos son los tipos de bebidas que trabajamos');
        let tipoBebidas = prompt ('Elige la bebida que le interese \n 1- Fernet \n 2- Vinos \n 3- Espumantes \n 4- Aperitivos \n 5- Gin')
        switch (tipoBebidas) {
            case '1':
                alert ('Seleccionaste fernet');
                break;
             case '2':
                    alert ('Seleccionaste Vinos');
                    break;
             case '3':
                    alert ('Seleccionaste Espumantes');
                    break;
             case '4':
                    alert ('Seleccionaste Aperitivos');
                    break;
            case '5':
                    alert ('Seleccionaste Gin');
                    break;
            default:
                alert ('Lamentamos no poder ayudarte!')
                break;
        }
    }
 Bebidas ();
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
            for (let i = cantidadInvitados; i<=5; i++) {
                alert('Por ' + i + ' cantidad de invitados, el calculo es de ' + i*2 + ' de botellas de vino')
            }
        }                       
    }
    console.log(cantidadInvitados);
} while (cantidadInvitados) 

alert ("Vuelva pronto!")
