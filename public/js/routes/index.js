//EXPORT THE ROUTES TO server.js
//================================
exports.index = function (req, res) {
    res.render('index', {
        title    : 'mbm',
        pagename : 'Home'
    });
}

exports.contactus =  function(req, res) {
    res.render('content/contact-us', {
        title    : 'mbm',
        pagename : 'Contact Us'
    });
}

exports.portfolio =  function(req, res) {
    res.render('content/portfolio', {
        title    : 'mbm',
        pagename : 'Portfolio'
    });
}

exports.successes =  function(req, res) {
    res.render('content/success', {
        title    : 'mbm',
        pagename : 'Success'
    });
}
