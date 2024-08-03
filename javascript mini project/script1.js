// function Display(){
// document.getElementById('des').innerHTML="Friends";
// document.getElementById('des').style.color="green";
// }

// function Remove(){
//     document.getElementById('des').innerHTML="Stranger";
//     document.getElementById('des').style.color="red";
// }

var check=0;
function Display1(){
    if(check==0){
    document.getElementById('des').innerHTML="Friends";
    document.getElementById('des').style.color="green";
    document.getElementById('addfriend').style.backgroundColor="cadetblue";
    document.getElementById('addfriend').innerHTML=" Remove Friend";
    document.getElementById('addfriend').style.color="white";
    check=1;

    }else{
        document.getElementById('des').innerHTML="Stranger";
        document.getElementById('des').style.color="red";
        document.getElementById('addfriend').style.backgroundColor="#979393";
        document.getElementById('addfriend').innerHTML="Add Friends";
        document.getElementById('addfriend').style.color="black";
        check=0;

    }
    
}