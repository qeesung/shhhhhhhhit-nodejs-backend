/**
 * Created by qeesung on 2017/11/19.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const toilets = [
    {
        "available": false,
        "name": "F5-3A-T01",
        "id": 1,
        "logo": "1.jpg",
        "type": "坐坑",
        "updated_at": "2017-11-19 16:34:30.001552",
        "sex": "坐的"
    },
    {
        "available": true,
        "name": "F5-3A-T02",
        "id": 2,
        "logo": "2.jpg",
        "type": "蹲坑",
        "updated_at": "2017-11-19 16:33:16.850081",
        "sex": "蹲的"
    }
];
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/toilets', function (req, res) {
    res.json(toilets);
});

app.put('/toilets/:toilet_id', function (req, res) {
    let toilet_id = req.params.toilet_id -1 ;
    if(toilet_id != 0 && toilet_id != 1)
        return;
    let toilet = toilets[toilet_id];
    let body = req.body;
    toilet.available = body.available;
    toilet.updated_at = new Date()+"";
    toilets[toilet_id] = toilet;
    res.json(toilet);
});

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
