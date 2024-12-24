const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


/*[CONCAT and PUSH]=>concat aur push dono similar work karte hai array ke case me push same array me changes kar skta hai but concat ke liye hume new array initialize karna hoga*/


marvel_heros.push(dc_heros)

console.log(marvel_heros);//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]);//flash

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//=>Infinity ka use hum tab karte hai jub array ke andar dher sari arrays ho Infinity sari arrays ke element ko single kar deta hai.
console.log(real_another_array); /*[
    1, 2, 3, 4, 5,
    6, 7, 6, 7, 4,
    5
  */



console.log(Array.isArray("Hitesh"))//false
console.log(Array.from("Hitesh"))//=>(Array.from ki help se hum kisi bhi datatype ko array me change kar sakte hai)//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})) // =>interesting //[]

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//=>(Array.of ki help se hum set of elements ko include karte hai new array object me )//[ 100, 200, 300 ]