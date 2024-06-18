let p;

async function find(){
    try{
        let inp = document.querySelector('input').value;
        //console.log(inp);
        p= await dict(inp);
        let q=document.querySelector("#out");
        q.innerHTML=p;
    }catch(e){
        console.log(e);
    }
}

let u="https://api.dictionaryapi.dev/api/v2/entries/en/";
async function dict(inp){
    try{
        let res=await axios.get(u+inp);
        return res.data[0].meanings[0].definitions[0].definition;
    }catch(e){
        console.log(e);
    }
}
