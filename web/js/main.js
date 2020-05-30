var tabHeads=document.getElementById("heads").getElementsByTagName("dt");
var tabContents=document.getElementById("contents").getElementsByClassName("switcher");
console.log(tabContents);
for(var i=0;i<tabHeads.length;i++){
    tabHeads[i].index=i;
    tabContents[i].index=i;
    tabHeads[i].addEventListener("mouseover",function(e){
        var curHead=e.target;
        for(var i=0;i<tabHeads.length;i++){
            if(tabHeads[i].style.color!="lightcyan"){
                if(curHead.index==i){
                    tabHeads[i].style.color="cadetblue";
                }else{
                    tabHeads[i].style.color="darkslategray";
                }
            }
        }
    })
    tabHeads[i].addEventListener("mouseout",function(e){ 
        for(var i=0;i<tabHeads.length;i++){
            if(tabHeads[i].style.color!="lightcyan")
            tabHeads[i].style.color="darkslategray";
        }
    })
    tabHeads[i].addEventListener("mouseup",function(e){
        var curHead=e.target;
        for (var i = 0; i < tabHeads.length; i++) {
            if (curHead.index == i) {
                tabHeads[i].style.color="lightcyan";
                tabHeads[i].style.cursor="default";
                tabContents[i].style.display = "block";
            }
            else {
                tabHeads[i].style.color="darkslategray";
                tabHeads[i].style.cursor="pointer";
                tabContents[i].style.display = "none";
            }
        }
    })
}
function showDiv(contentDiv,closeBtnDiv){
    document.getElementById(contentDiv).style.display="block";
    document.getElementById(closeBtnDiv).style.display="block";
}
function closeDiv(contentDiv,closeBtnDiv){
    document.getElementById(contentDiv).style.display="none";
    document.getElementById(closeBtnDiv).style.display="none";
}