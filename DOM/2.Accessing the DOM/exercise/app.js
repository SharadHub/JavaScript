// select element h4 which holds text of "red" by using getElementsByTagName

const Hfour = document.getElementsByTagName("h4")

for(let h4 of Hfour){
    if(h4.textContent.includes("red")){
        h4.style.color = 'red';
        console.log("red found")
    }
}