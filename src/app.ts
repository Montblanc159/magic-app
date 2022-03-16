import dotenv from "dotenv"
import express from "express"
import path from "path"
import ejs from "ejs"
import livereload from "livereload"
import connectLivereload from "connect-livereload"

const liveReloadServer = livereload.createServer()
liveReloadServer.watch(path.join(__dirname, 'views'))

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(connectLivereload())

app.use(express.static(__dirname + '/views'))

app.set("views", path.join(__dirname, "views"))
app.set('view engine', 'ejs');

app.engine('html', ejs.renderFile);

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(port)