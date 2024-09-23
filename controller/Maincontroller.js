const main = {
    index: (req, res) =>{
        res.render('index');
    },

    about: (req, res) =>{
        res.render('about');
    },

    contacts: (req, res) =>{
        res.render('contacts');
    },

    register: (req, res) =>{
        res.render('register');
    },

    login: (req, res) =>{
        res.render('login');
    }
};

module.exports = main;