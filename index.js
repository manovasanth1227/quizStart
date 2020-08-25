const startbtn = document.getElementById("start");
const recognition = new webkitSpeechRecognition();
const next = document.getElementById("end");
recognition.continuous = true;
recognition.lang ="en-US";

recognition.interimResults = false;
recognition.maxAlternatives=1;

startbtn.addEventListener("click", ()=>{
    recognition.start();
    console.log("Speech Recognition Starts")
})
const text =document.querySelectorAll(".text");
recognition.onresult=(e)=>{
    let msg=(e.results[e.results.length-1][0].transcript);
    console.log(msg);
    text[0].addEventListener("click",(e)=>{
        e.target.value =msg;
    })
    text[1].addEventListener("click",(e)=>{
        e.target.value =msg;
    })

    text[2].addEventListener("click",(e)=>{
        e.target.value =msg;
    })
    text[3].addEventListener("click",(e)=>{
        e.target.value =msg;
    })
    text[4].addEventListener("click",(e)=>{
        e.target.value =msg;
    })
}

next.addEventListener("click",(e)=>{

    for(let i=0;i<=4;i++){
        text[i].value="";
    }
})

