var elm=document.querySelectorAll('.elm');
elm.forEach(function(val){
    val.addEventListener('mouseenter',function(){
        // console.log('hello whatsap')
        // val.style.color='red';
        val.childNodes[3].style.opacity=1
        // console.log(val.childNodes[3])

    });
    val.addEventListener('mouseleave',function(){
        // console.log('hello whatsap')
        // val.style.color='red';
        val.childNodes[3].style.opacity=0;
    });
    val.addEventListener('mousemove',function(mov){
        // console.log('hello whatsap')
        // val.style.color='red';
        val.childNodes[3].style.left=mov.x+"px";
        val.childNodes[3].style.top=mov.y+"px";

    });

     
});
