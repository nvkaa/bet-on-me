const vid = document.getElementById("vid")
const bd = document.getElementsByTagName("body")[0]
const container = document.getElementById("container")
const proposal = document.getElementById("proposal")
const yb = document.getElementById("y")
const nb = document.getElementById("n")
const nono = document.getElementById("nono")
const rl = document.getElementById("rl")
const parting = document.getElementById("parting")
const yButtons = Array.from(document.getElementsByClassName("y"))

//hidden buttons:
const y1 = document.getElementById("y1")
const n1 = document.getElementById("n1")
const y2 = document.getElementById("y2")
const n2 = document.getElementById("n2")
const y3 = document.getElementById("y3")
const n3 = document.getElementById("n3")
//end

const duration = function() {
    vid.ontimeupdate((e) => {
        return vid.duration
    })
}

bd.onload = function() {
    let w = window.screen.width
    let content = container.offsetWidth
    let mgLeft = (w/2 - content/2).toString() + "px"
    // alert(`${w}, ${content}, ${mgLeft}`)
    container.style.marginLeft = mgLeft

}

// IF NO
nb.innerText = "need more time :( " //(babe if im the one then there is no need to wait for anything else)

nb.onclick = function() {
    if(nono.style.display === 'none'){
        nono.style.display = 'block'
    } else {
        nono.style.display = 'none'
    }
    nb.style.display = 'none'
    yb.style.display = 'none'
    nono.style.display = 'block'
    n1.style.display = 'inline-block'
    y1.style.display = 'inline-block'
    
}

n1.onclick = function() {
    nono.innerText = "so u don't like me ? T^T"
    n1.style.display = 'none'
    y1.style.display = 'none'
    n2.style.display = 'inline-block'
    y2.style.display = 'inline-block'
}

n2.onclick = function() {
    proposal.style.display = 'none'
    vid.style.display = 'none'
    vid.pause()
    n2.style.display = 'none'
    y2.style.display = 'none'
    nono.style.display = 'none'

    parting.style.display = 'block'
}
//end

//IF YES
yb.innerText = "yé<33 (recommended)"
yButtons.forEach( (el, index) => { 
    el.addEventListener(
        "click",
        () => { window.location.href = "agreed.html" }
    )
    if(index != 0){
        el.style.display = 'none'
    }
})

//end

vid.volume = 0.3
vid.onload = (e) => {
    let currTime = getCurrentTime()
    console.log(currTime)
    while(currTime >=34.00 && 78.00){
        //insert change background color according to video's background color.
    }
}

rl.onclick = () => { window.location.reload()}

function getCurrentTime() {
    vid.ontimeupdate((e) => {
        return vid.currentTime
    })
}