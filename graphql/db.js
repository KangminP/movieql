export const people = [
    {
        id: "0",
        name: "Kangmin",
        age: 29,
        gender: "male"
    },
    {
        id: "1",
        name: "Junhyuck",
        age: 29,
        gender: "male"
    },
    {
        id: "2",
        name: "Kyunam",
        age: 29,
        gender: "male"
    },
    {
        id: "3",
        name: "Seokchan",
        age: 26,
        gender: "male"
    },
    {
        id: "4",
        name: "Yako",
        age: 27,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))
    return filteredPeople[0]
}