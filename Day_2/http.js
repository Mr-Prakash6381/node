const http = require('http')

function rqListener(req, res) {
    console.log(req)


}

const server = http.createServer(rqListener)
server.listen(3000, (req, res) => {
    console.log("Start server successfully")
})