// people, planets, films, species, starships, vehicles

async function asyncFetch() {
    const res = await fetch("https://swapi.co/api/");
    const data = await res.json();
    console.log('async data ', data);
}
  

asyncFetch()

document.querySelector('input').addEventListener('click', (e) => {
    console.log(e);
    console.log(document.querySelector('#buttons').id);
})