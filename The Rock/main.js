const vips = [
    {
        tavolo: 'uno',
        ospite: 'Dwayne Johnson',
        posto: '1',
    },
    {
        tavolo: 'uno',
        ospite: 'Brad Pitt',
        posto: '2',
    },
    {
        tavolo: 'uno',
        ospite: 'Johnny Depp',
        posto: '3',
    },
    {
        tavolo: 'uno',
        ospite: 'Lady Gaga',
        posto: '4',
    },
    {
        tavolo: 'uno',
        ospite: 'Cristiano Ronaldo',
        posto: '5',
    },
    {
        tavolo: 'due',
        ospite: 'Georgina Rodriguez',
        posto: '1',
    },
    {
        tavolo: 'due',
        ospite: 'Chiara Ferragni',
        posto: '2',
    },
    {
        tavolo: 'due',
        ospite: 'Fedez',
        posto: '3',
    },
    {
        tavolo: 'due',
        ospite: 'George Clooney',
        posto: '4',
    },
    {
        tavolo: 'due',
        ospite: 'Amal Clooney',
        posto: '5',
    },
    {
        tavolo: 'due',
        ospite: 'Maneskin',
        posto: '6',
    }
];

const tavoloUno = vips.filter((invitato) => invitato.tavolo == 'uno')
const tavoloDue = vips.filter((invitato) => invitato.tavolo == 'due')
console.log(tavoloUno)
console.log(tavoloDue)
