setInterval(()=>{
let d=new Date();
let htime=d.getHours();
let mtime=d.getMinutes();
let stime=d.getSeconds();
let hrotaion=30*htime+mtime/2;
let mrotation=6*mtime;
let srotation=6*stime;
document.getElementById("hour").style.transform=`rotate(${hrotaion}deg)`;
document.getElementById("minute").style.transform=`rotate(${mrotation}deg)`;
document.getElementById("second").style.transform=`rotate(${srotation}deg)`;
})