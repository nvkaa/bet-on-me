const vid = document.getElementById("vid")
const bd = document.getElementsByTagName("body")[0]
const title = document.getElementById("title")
const yb = document.getElementById("y")
const nb = document.getElementById("n")
const nono = document.getElementById("nono")
const y1 = document.getElementById("y1")
const n1 = document.getElementById("n1")
const duration = function() {
    vid.ontimeupdate((e) => {
        return vid.duration
    })
}

bd.onload = function() {
    let w = window.screen.width
    let content = title.offsetWidth
    let mgLeft = (w/2 - content/2).toString() + "px"
    // alert(`${w}, ${content}, ${mgLeft}`)
    title.style.marginLeft = mgLeft

}

// IF NO
nb.innerText = "need more time :( \n " //(babe if im the one then there is no need to wait for anything else)

nb.onclick = function() {
    if(nono.style.display==='none'){
        nono.style.display='block'
    } else {
        nono.style.display='none'
    }
    nb.style.display='none'
    yb.style.display='none'
    nono.style.display='block'
    n1.style.display='inline-block'
    y1.style.display='inline-block'
    
}

n1.onclick = function() {
    nono.innerText = "so u don't like me ? T^T"
}

//IF YES
yb.innerText = "yé<33 (recommended)"

vid.volume = 0.3
vid.onload = (e) => {
    let currTime = getCurrentTime()
    console.log(currTime)
    while(currTime >=34.00 && 78.00){

    }
}


function getCurrentTime() {
    vid.ontimeupdate((e) => {
        return vid.currentTime
    })
}