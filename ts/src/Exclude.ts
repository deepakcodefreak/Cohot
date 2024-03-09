// Exclude  

type T0 = "b" | "c"

type T1 = Exclude<T0, "b">

const x: T1 = "c" // fine
// const y: T1 = "b" // error

type Shape = { kind: 'circle', radius: number } | { kind: 'square', x: number }

type AlowedShapes = Exclude<Shape, { kind: 'square' }>


const myShape: AlowedShapes = {
    kind: 'circle',
    radius: 5
}

// Not allowed
// const myShape2: AlowedShapes = {
//     kind: 'square',
//     radius: 5
// }

// Not allowed
// const myShape3: AlowedShapes = {
//     kind: 'rombus',
//     radius: 5
// }
