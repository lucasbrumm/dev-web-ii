// Server.ts
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.json({
    message: sum(1, 2),
  })
})
app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

function sum(a, b) {
  return a + b
}
