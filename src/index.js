import { db } from "./db.js";

// db.users.findFirst({
db.users.findMany({
    where: {
        age: 20
    },
    select: {
        name: true
    }
}).then(r => {
    console.log(r);
})