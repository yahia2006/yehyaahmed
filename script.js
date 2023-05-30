const navopen=document.getElementById('mobilenav')
navopen.addEventListener('click',function(){
    document.getElementById('nv').style.transform='translateX(0px)'
    document.getElementById('mobilenav').style.display='none'
    document.getElementById('closenav').style.display='block'
    document.getElementById('home').style.opacity='0.5'
    document.getElementById('about').style.opacity='0.5'
    document.getElementById('sk').style.opacity='0.5'
    document.getElementById('ga').style.opacity='0.5'
    document.getElementById('pr').style.opacity='0.5'
    document.getElementById('c').style.opacity='0.5'

})
const navclose=document.getElementById('closenav')
navclose.addEventListener('click',function(){
    document.getElementById('nv').style.transform='translateX(-200px)'
    document.getElementById('mobilenav').style.display='block'
    document.getElementById('closenav').style.display='none'
    document.getElementById('home').style.opacity='1'
    document.getElementById('about').style.opacity='1'
    document.getElementById('sk').style.opacity='1'
    document.getElementById('ga').style.opacity='1'
    document.getElementById('pr').style.opacity='1'
    document.getElementById('c').style.opacity='1'

})

function ad(){
    let audio=document.getElementById('y')
    audio.play();
    
}
var ca=document.getElementById('ca')
var s=document.getElementById('sk')
var sk=document.getElementById('cn')
var hm=document.getElementById('cnm')
var ab=document.getElementById('ab')


window.onscroll=function(){
    if(isScrolledIntoView(ca)){
        document.getElementById('ca').style.transform='translateX(0px)'

    }
    if(isScrolledIntoView(cg)){
        document.getElementById('gg1').style.transform='translateX(0px)'
        document.getElementById('gg2').style.transform='translateX(0px)'

    }
    if(isScrolledIntoView(hm)){
        document.getElementById('hd').style.backgroundColor='aliceblue'
    }
    if(isScrolledIntoView(sk)){
        document.getElementById('crhtml').style.width='85%'
        document.getElementById('phphtml').style.width='85%'
        document.getElementById('jshtml').style.width='65%'
        document.getElementById('pyhtml').style.width='95%'
        document.getElementById('csshtml').style.width='95%'
        document.getElementById('javahtml').style.width='35%'

        
    }
    if(isScrolledIntoView(sk)){
        document.getElementById('crhtml').style.width='85%'
        document.getElementById('phphtml').style.width='85%'
        document.getElementById('jshtml').style.width='65%'
        document.getElementById('pyhtml').style.width='95%'
        document.getElementById('csshtml').style.width='95%'
        document.getElementById('javahtml').style.width='35%'

        
    }
    if(isScrolledIntoView(ab)){
        document.getElementById('hd').style.backgroundColor='white'
    }
  
}


function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;
    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}




window.orientation='none'






