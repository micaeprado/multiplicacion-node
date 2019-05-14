const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch (comando)
{
    case 'listar': 
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
            .catch(err => console.log(err));
        break;
            
    default: console.log('comando desconocido');
}

// console.log(process.argv);

// let argv2 = process.argv;

// let parametro = argv[2];

// let base = parametro.split('=')[1]; //VOLATIL mejor usar yargs 

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
//     .catch(err => console.log(err));