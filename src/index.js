import { db } from "./db.js";

db.users.create({
   data: {
    name: 'Kamerr Ezz',
    isActive: true,
    age: 23    
   } 
}).then(r => {
    console.log(r);
})