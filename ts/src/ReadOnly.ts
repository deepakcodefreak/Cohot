
// interface User {
//     readonly name: string,
//     age: number
// }

// const user: User = {
//     name: 'deepak',
//     age: 24
// }

// const user2: Readonly<User> = {
//     name: 'deepak',
//     age: 34
// }

// user.name = 'chanta'
// user.age = 25

// user2.age = 26;

interface Config {
    readonly endpoint: string,
    apiKey: string
}


const config: Config = {
    endpoint: 'https://sample.com',
    apiKey: '212121212'
}


// Will show error
// config.endpoint = 'https://somethingelse.com'