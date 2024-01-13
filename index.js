let b=document.getElementById("btn")



function change(){

    if(  b.innerText=="Dark Mode"){
    b.innerText="Light Mode"
    let para=document.getElementById("paragraph1")
    let para1=document.getElementById("paragraph2")
    let para2=document.getElementById("paragraph3")
    let para3=document.getElementById("paragraph4")
    let heading=document.getElementById("head")
    heading.style.color="white"
      para.style.color="white"
      para1.style.color="white"
      para2.style.color="white"
      para3.style.color="white"
      let d=document.getElementById("bdy")
      d.style.backgroundColor="black"
    }
    else{
        b.innerText="Dark Mode"
        let para=document.getElementById("paragraph1")
        let para1=document.getElementById("paragraph2")
        let para2=document.getElementById("paragraph3")
        let para3=document.getElementById("paragraph4")
        let heading=document.getElementById("head")
        heading.style.color="black"
          para.style.color="black"
          para1.style.color="black"
          para2.style.color="black"
          para3.style.color="black"
          let d=document.getElementById("bdy")
          d.style.backgroundColor="white"
      
    }
     
 




}