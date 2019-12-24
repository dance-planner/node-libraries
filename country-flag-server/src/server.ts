import express = require('express')
import * as path from 'path'
// import * as fs from 'fs-sync'

const app = express()
const currentPath = path.resolve(path.dirname(''))

app.use(express.static(currentPath));
const port = 3001

app.get('/', (req, res) => {
  console.log("supi")
  res.sendFile(`${currentPath}/src/index.html`)
})
 
app.get('/getFlag/countryCode/:countryCode', (req, res) => {
    console.log(req.params.countryCode)
    res.sendFile(`${currentPath}/src/flags/${req.params.countryCode.toLowerCase()}.svg`)
  })
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))