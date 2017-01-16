app.post('/signup', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    console.log(req.files);
    res.json(req.files);
});