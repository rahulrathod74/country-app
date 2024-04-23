let container=document.getElementById("container")

let respons=fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries')
respons.then(data=>data.json()).then(data=>showData(data.data))

function showData(data){
    
    data.map((ele)=>{
        let div=document.createElement("div")
        div.className="card"
        let name=document.createElement("h2")
        name.innerText= ele.country
        let rank=document.createElement("h3")
        rank.innerText=ele.Rank
        let population=document.createElement("p");
        population.innerText=ele.population;
        div.append(name,rank,population)
        container.append(div)
    })
}