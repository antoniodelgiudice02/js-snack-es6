const studentList = [
    {
        id: '213',
        nome: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: '110',
        nome: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: '250',
        nome: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: '145',
        nome: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: '196',
        nome: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: '102',
        nome: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: '120',
        nome: 'Francesca da Polenta',
        grades: 84,
    },
    
];



studentList.forEach((student) => console.log(student.nome.toUpperCase()))
studentList.forEach((student) => student.grades > 70 ? console.log(student.nome) : false)
studentList.forEach((student) => student.grades > 70 && student.id > 120 ? console.log(student.nome) : false)