var arr = [
   { dp:"https://images.pexels.com/photos/8387170/pexels-photo-8387170.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  circle:"https://images.pexels.com/photos/8387170/pexels-photo-8387170.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
  
  { dp:"https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  circle:"https://images.pexels.com/photos/16943679/pexels-photo-16943679/free-photo-of-young-girl-in-denim-jacket-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
   { dp:"https://images.pexels.com/photos/7037111/pexels-photo-7037111.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  circle:"https://images.pexels.com/photos/13903886/pexels-photo-13903886.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},
   { dp:"https://images.pexels.com/photos/17500764/pexels-photo-17500764/free-photo-of-woman-in-a-dress-kneeling-to-touch-a-flower.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
  circle:"https://images.pexels.com/photos/17500764/pexels-photo-17500764/free-photo-of-woman-in-a-dress-kneeling-to-touch-a-flower.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"},


  
]

var box= document.querySelector('.box')
var clutter = ""
arr.forEach(function(elem,idx){
   clutter +=`<div class="circle">
   <img id="${idx}" src="${elem.dp}" alt="">
   </div>`;
});

box.innerHTML = clutter;

//console.log(clutter);

box.addEventListener('click',function(dets){
    document.querySelector('#fullscreen').style.display="block"
    document.querySelector('#fullscreen').style.backgroundImage=`url(${arr[dets.target.id].circle})`

    console.log("hello")

    setTimeout(function(){
        document.querySelector('#fullscreen').style.display = 'none'
    },3000)
});