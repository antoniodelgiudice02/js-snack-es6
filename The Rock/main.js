
const vips = [
    'Dwayne Johnson',
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin',
  ];

const listMap = vips.map((vip, posto) =>{ 
    return{
        tavolo: 'tavolo vip',
        ospite: vip,
        posto: posto
    }
})

console.log(listMap)
