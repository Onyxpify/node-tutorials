const http = require('http')

const server = http.createServer((req, res) => {
   if (req.url === '/') {
    res.end('Welcome to our Homepage')
   }
   if (req.url === '/about') {
    res.end('Welcome to our Homepage')
   }

   //if a user is trying to visit an about us page that we dont have
   res.end(`
   <h1>Oops!</h1>
   <p>We can seem to find the page you are looking for</p>
   <a href="/">back home</a>
   `)
})
server.listen(5000)