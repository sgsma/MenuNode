var colors = require('colors');
const inquirer = require('inquirer');


const preguntas = [
    {
        type: 'list',
        name: 'options',
        message: 'que quieres ahcer?',
        choices: [
            {
                value: '1',
                name: '1 Registrar empleado',
            },
            {
                value: '2',
                name: '2 Lista empleado',
            },
            {
                value: '3',
                name: '3 Eliminar empleado',
            },
            {
                value: '0',
                name: '0 salir',
            }
        ]
    }
]

const menu = () => {

    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.green}`);
    console.log(`${'           First Application'.blue}`);
    console.log(`${'°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°'.green}`);

    inquirer.prompt(preguntas).then(({entry}) => {
        console.log(entry);
    })
}




module.exports = {
    menu
};
