var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 number1:  {
    title: 'Number 1 Guys!',
    heading: 'Some Random Shit',
    date: 'Again some Random shit',
    content: `Again Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random Data`
},
 number2: {
    title: 'Number 2 Guys!',
    heading: 'Some Random Shit',
    date: 'Again some Random shit',
    content: `Again Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random Data`
 },
 number3: {
    title: 'Number 3 Guys!',
    heading: 'Some Random Shit',
    date: 'Again some Random shit',
    content: `Again Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random DataAgain Some more Random Data`
 }
};
function createTemp(data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemp = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
            <div>
                <a href = "/">Home</a>
            </div>
            <hr/>
            <h4>
                ${heading}
            </h4>
            <div>
                ${date}
            </div>
            <div>
                <p>
                    ${content}
                </p>
                <p>
                    ${content}
                </p>
                <p>
                    ${content}
                </p>
            </div>
        </div>
    </body>
</html>`;
return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:Name', function(req, res) {
    var Name = req.params.Name;
    res.send(createTemp(articles[Name]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
