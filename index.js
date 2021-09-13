
const express = require('express')
let cron = require('node-cron');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    cron.schedule('* * * * *', () => {
        console.log('running a task every minute' + new Date());
    });
  res.send('Agendado!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

