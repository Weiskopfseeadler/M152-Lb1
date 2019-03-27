// server.ts
import * as express from "express";

const app = express();


app.post('/file', function (req: express.Request, res: express.Response) {
    var fs = require('fs')
        , gm = require('gm');

// resize and remove EXIF profile data
    gm('./img')
        .resize(240, 240)
        .noProfile()
        .write('/path/to/resize.png', function (err: any) {
            if (!err) console.log('done');
        });
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT||80, function () {
    console.log("Server listens on port " + 80);
});