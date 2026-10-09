const http = require('http')
const port = process.env.PORT || 3000
http.createServer((_, res) => res.end(`ok on ${port}\n`)).listen(port, () => console.log(`listening on ${port}`))
