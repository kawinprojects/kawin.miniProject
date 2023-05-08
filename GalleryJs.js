function viewImg(x)
{
    console.log(x.src);
    let path=x.src;
    
    document.getElementById("viewImg").src=path;
    console.log(document.getElementById("viewImg"));
    document.getElementById("overLay").style.display="flex";
    document.getElementById("overLay").style.justifyContent=" center";
    
}
function exit(){
    document.getElementById("overLay").style.display = "none";
}

