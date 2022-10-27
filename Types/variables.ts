let movieTitle: string = 'Amadeus'
movieTitle = 'Arrival'
movieTitle = 9
movieTitle.upper()

let numCatLives: number = 9
numCatLives += 1
// numCatLives = 'zero'

let gameOver: boolean = false
gameOver = true
// gameOver = 'false'

null
undefined

let nothing: null = null
let foo: undefined = undefined

// Type Inference
let tvShow = 'Olive Kitteridge'
tvShow = 'The Other Two'
tvShow = false

let isFunny = false
isFunny = true
isFunny = 'asd'

// The any type
let thing: any = 'hello'
thing = 1
thing = false
thing()
thing.toUppercase()

const movies = ['Arrival', 'The Thing', 'Aliens', 'Amadeus']
let foundMovie: string

for (let movie of movies) {
  if (movie === 'Amadeus') {
    foundMovie = 'Amadeus'
  }
}
