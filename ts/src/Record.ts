interface Person {
    name: string,
    age: number
}

type Persons = {
    [key: string]: Person
}

const persons: Persons = {
    '1': {
        name: 'deepak',
        age: 24
    },
    '2': {
        name: 'deepakchawla',
        age: 25
    }
}

// Better way, using Record

const persons2: Record<string, Person> = {
    '1': {
        name: 'deepak',
        age: 24
    },
    '2': {
        name: 'deepakchawla',
        age: 25
    }
}