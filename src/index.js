async function getData() {
    const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=6b16064a");
    const data = await response.json();
    console.log(data);
}

getData()