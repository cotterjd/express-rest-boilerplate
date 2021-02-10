require(`dotenv`).config() // load env vars from .env file
const { log } = console
const app = require(`express`)()
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const controller = require(`./controllers`)

app.use(cors()) // enables cors for all origins
app.use(bodyParser.json()) // to be able to receive json in requests

app.get('/:name', controller.getExample)
app.post('/', controller.postExample)

app.set('port', process.env.PORT || 3040)
app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})

module.exports = app // exporting app will be useful for integration tests later
