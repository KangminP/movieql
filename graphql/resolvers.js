const kangmin = {
    name: "Kangmin",
    age: 29,
    gender: "male"
}

const resolvers = {
    Query: {
        person: () => kangmin
    }
}

export default resolvers