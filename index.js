const http=require('http')

const server= http.createServer((req, res) => {
    console.log(`bibin`);
})

server.listen(4000)
