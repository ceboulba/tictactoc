console.log('HelloWorld !')

const tds = document.querySelectorAll("td")
let turn = 1;

const pOne = `<p class="title is-1 cel">😍</p>`
const pTwo = `<p class="title is-1 cel">😁</p>`

const board = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
]

console.log('board 1, O',board[2][2])

function game(e) {
    console.log('turn => ', turn)
    console.log('e innerHTML => ', e.target.innerHTML)
    e.target.innerHTML === '' ?
    turn % 2 === 0 ?
        (() => {
            console.log('oui')
            e.target.innerHTML = pOne
            turn++
        })() :
        (() => {
            console.log('non')
            e.target.innerHTML = pTwo
            turn++
            rules()
        })() :
        alert("c'est occupe")
}

function rules(){
    console.log('on est dans dans rules !')
    const lineOne = document.querySelectorAll(".lineOne")
    const lineTwo = document.querySelectorAll(".lineTwo")
    const lineThree = document.querySelectorAll(".lineThree")
    lineOne.forEach(item => console.log(item.innerHTML))
    //console.log(`lines => ${lines}`)
}
rules()


// ajoute 'is-selected' a la case et lance game()
tds.forEach(elem => elem.addEventListener('click', (e) => {
    console.log('e => ', e)
    e.target.classList.add("is-selected")
    game(e)
}))