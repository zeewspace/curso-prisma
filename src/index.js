import { db } from "./db.js";

// db.users.findFirst({ where: { name: 'luisita' }}).then(r => console.log(r))

db.users.update({
    data: {
        age: 20
    },
    where: {
        name: 'luisa'
    }
}).then(r => console.log(r))