const express = require('express');
const session = require('express-session');
const path = require("path");
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sequelize = require('./config/connection');
const helpers = require('./util/helpers');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;



const sess = {
  secret: 'Kevins secret',
  cookie: {
    maxAge: 3600,
    httpOnly: false,
    secure: false,
    strict: false,
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}/`));
});
