const http = require("http");


const server = http.createServer(async (req, res) => {
    // res.write("hello")
    // res.end();
    if (req.method == "GET") {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        res.write(JSON.stringify(data));
        res.end();
    }
    else if (req.method == "POST") {
        let response = await fetch("https://dummyjson.com/quotes");
        let data = await response.json();
        res.write(JSON.stringify(data));
        res.end();
    }
    else {
        res.write("Try to enter GET or POST method");
        res.end();
    }
});
let port = 3002;
server.listen(port, () => {
    console.log("Server is running in http://localhost:" + port);
});