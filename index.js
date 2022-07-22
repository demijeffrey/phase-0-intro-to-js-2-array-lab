// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat () {
    cats.push('Ralph')
}

function destructivelyPrependCat () {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat () {
    cats.pop()
}

function destructivelyRemoveFirstCat () {
    cats.shift()
}

function appendCat () {
    const copyCats = [...cats, 'Broom']
    return copyCats
}

function prependCat () {
    const copyCats = ["Arnold", ...cats]
    return copyCats
}

function removeLastCat () {
    const copyCats = cats.slice(0, cats.length - 1)
    return copyCats
}

function removeFirstCat () {
    const copyCats = cats.slice(1)
    return copyCats
}