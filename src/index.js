import { db } from "./db.js";

db.users.findFirst({ where: { id: '5e185361-3a2c-4e27-8116-78babad983e0' }})
.then(r => console.log(r))

db.users.deleteMany({
    where: [
        {
            id: ''
        },
        {
            id: ''
        }
    ]
}).then(r => console.log(r))