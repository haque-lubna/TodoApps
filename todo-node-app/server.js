const express = require('express');
const app = express();
app.use(express.json());
app.get('/',() => {
    console.log("calling dashoard api...");
})
const port = 3001
app.listen(port, () => {
    console.log(`Server is listening to port: ${port}`);
})
