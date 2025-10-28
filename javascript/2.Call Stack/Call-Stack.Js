function first(){
    console.log("Function First Start");
    second();
    console.log("Function First End");

}

function second(){
    console.log("Function Second Start");
    third();
    console.log("Function Second End");
}

function third(){
    console.log("Function Third");
}

first();