const express = require('express');
const route = express.Router();

const servicefile = require('../services/services');
const controllerfile = require('../controller/controller');

route.get('/',servicefile.indexfile);
route.get('/books',servicefile.booksfile);
route.get('/events',servicefile.eventsfile);
route.get('/review',servicefile.reviewfile);
route.get('/aboutus',servicefile.aboutusfile);
route.get('/contact',servicefile.contactfile);
route.get('/thankyou',servicefile.thankyoufile);
route.post('/api/post',controllerfile.createfile);

module.exports = route;