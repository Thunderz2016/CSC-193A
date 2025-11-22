'use strict';
const express = require('express');
const app = express();

// endpoints
app.get('hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});

// Exercise 1: circcle
app.get('math/circle/:r', function (req, res) {
    const r = parseFloat(req.params.r);

    res.set("Content-Type", "application/json");
    res.json({
        "area": Math.PI * r * r,
        "circumference": Math.PI * 2 * r
    })
});

// Exercise 2: hello you
app.get('/hello/name', function (req, res) {
    let first = req.query.first;
    let last = req.query.last;

    if(first == null && last == null) {
        res.status(400).send("Missing required GET paremeters: first, last");
    } else if (first == null) {
        res.status(400).send("Missing required GET parameters: first");
    } else if (last == null) {
        res.status(400).send("Missing required GET parameter: last");
    }
    
    res.set('text');
    res.send("Hello " + first + " " + last);
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

