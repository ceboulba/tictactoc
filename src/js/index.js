const tds = document.querySelectorAll("td")
let turn = 1;

const pOne = `😍`
const pTwo = `😁`
let win = false

function game(e) {
    const elem = e.target.id
    const val = e.target.innerHTML

    //HORIZONTAL//
    tds[0].innerHTML === tds[1].innerHTML && tds[0].innerHTML === tds[2].innerHTML && tds[0].innerHTML !== "" && tds[1] !=="" && tds[2] !== "" ?
        setTimeout(() => {
            alert(`${tds[0].innerHTML} WIN !`)
            reload()
        }, 100) :

    tds[3].innerHTML === tds[4].innerHTML && tds[3].innerHTML === tds[5].innerHTML && tds[3].innerHTML !== "" && tds[4].innerHTML !== "" && tds[5].innerHTML !== "" ?
            setTimeout(() => {
                alert(`${tds[3].innerHTML} WIN !`)
                reload()
            }, 100) :

            tds[6].innerHTML === tds[7].innerHTML && tds[6].innerHTML === tds[8].innerHTML && tds[6].innerHTML !== "" && tds[7].innerHTML !== "" && tds[8].innerHTML !== "" ?
                setTimeout(() => {
                    alert(`${tds[6].innerHTML} WIN !`)
                    reload()
                }, 100) :

                //VERTICAL//
                tds[0].innerHTML === tds[3].innerHTML && tds[0].innerHTML === tds[6].innerHTML && tds[0].innerHTML !== "" && tds[3].innerHTML !== "" && tds[6].innerHTML !== "" ?
                    setTimeout(() => {
                        alert(`${tds[0].innerHTML} WIN !`)
                        reload()
                    }, 100) :

                    tds[1].innerHTML === tds[4].innerHTML && tds[1].innerHTML === tds[7].innerHTML && tds[1].innerHTML !== "" && tds[4].innerHTML !== "" && tds[7].innerHTML !== "" ?
                        setTimeout(() => {
                            alert(`${tds[1].innerHTML} WIN !`)
                            reload()
                        }, 100) :

                        tds[2].innerHTML === tds[5].innerHTML && tds[2].innerHTML === tds[8].innerHTML && tds[2].innerHTML !== "" && tds[5].innerHTML !== "" && tds[8].innerHTML !== "" ?
                            setTimeout(() => {
                                alert(`${tds[2].innerHTML} WIN !`)
                                reload()
                            }, 100) :

                            //DIAGONAL
                            tds[0].innerHTML === tds[4].innerHTML && tds[0].innerHTML === tds[8].innerHTML && tds[0].innerHTM !== "" && tds[4].innerHTML !== "" && tds[8].innerHTML !== "" ?
                                setTimeout(() => {
                                    alert(`${tds[0].innerHTML} WIN !`)
                                    reload()
                                }, 150) :

                            tds[2].innerHTML === tds[4].innerHTML && tds[2].innerHTML === tds[6].innerHTML && tds[2].innerHTM !== "" && tds[4].innerHTML !== "" && tds[6].innerHTML !== "" ?
                                setTimeout(() => {
                                    alert(`${tds[0].innerHTML} WIN !`)
                                    reload()
                                }, 150) :

                                console.log('tryAgain')

    return

}

function reload() {
    tds.forEach(td => td.innerHTML = '')
}

//boutton RESET
(function reset() {
    document.getElementById('reset').addEventListener('click', reload)
})()

// Remplir les cases les cases et lance game()
tds.forEach(elem => elem.addEventListener('click', (e) => {
    // console.log('e => ', e)
    e.target.classList.add("is-selected")
    turn % 2 === 0 && e.target.innerHTML.length === 0 ?
        (() => {
            e.target.innerHTML = pOne
            turn++
        })() :
        turn % 2 !== 0 && e.target.innerHTML.length === 0 ?
            (() => {
                e.target.innerHTML = pTwo
                turn++
            })() :
            alert("Impossible")
    game(e)
}))

