"use strict";
exports.__esModule = true;
// server.ts
var express = require("express");
var app = express();
app.post('/file', function (req, res) {
    var fs = require('fs'), gm = require('gm');
    // resize and remove EXIF profile data
    gm('./img')
        .resize(240, 240)
        .noProfile()
        .write('/path/to/resize.png', function (err) {
        if (!err)
            console.log('done');
    });
    res.sendFile(__dirname + "/index.html");
});
app.listen(process.env.PORT || 80, function () {
    console.log("Server listens on port " + 80);
});
