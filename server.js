import { app } from "./app.js";
app.listen(443,() =>{
    console.log(` Server running on port ${process.env.port}` );
} )
