const center = document.getElementById("main");
center.addEventListener("click",(a)=>{
    let cls = a.target.className;
    if(cls === "center white")
    {
        a.target.className = "center red";
       
    }
    
    if(cls === "center red")
    {
        a.target.className = "center white";
        
    }
    if(cls === "center")
    {
        a.target.className = "center white";
        
    }
    
});