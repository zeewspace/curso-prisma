import { db } from "./db.js";

db.post.create({
    data: {
        user: {
            create: {
                name: 'luisita',
                isActive: true
            }
        },
        title: '50 cosas sobre mi parte 2',
        content: "empezamos con las historias hacerca de las 50 cosas de mi.....",
    }
}).then(r => console.log(r))