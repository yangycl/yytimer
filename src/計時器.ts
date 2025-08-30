var el = document.getElementById("time") as HTMLDivElement;
if (el===null) throw new Error("error:找不到元素#time");
interface timer_type{
    time: number;
    running: boolean;
}
var timer:timer_type = {
    time: 0.00,
    running:false   
}
var updatatime = ():void =>{
    el.textContent = el.textContent+0.01;
};
document.addEventListener("keyup",function(event){
    if(event.code==="Space"){
        el.classList.remove("ready");
        el.classList.add("running");
    }
})
document.addEventListener("keydown",function(event){
    if(event.code==="Space"){
        el.classList.remove("waiting");
        el.classList.add("running");
    }
})