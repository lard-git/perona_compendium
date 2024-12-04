const db = require('./personaModel');

exports.getAllPersonas = (req, res) => {
    db.all(`SELECT * FROM personas`, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.render('index', { personas: rows });
    });
};

exports.addPersona = (req, res) => {
    const { name, arcana, level, skills, description } = req.body;
    db.run(`INSERT INTO personas (name, arcana, level, skills, description) VALUES (?, ?, ?, ?, ?)`, 
        [name, arcana, level, skills, description], function(err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.redirect('/');
        });
};

exports.updatePersona = (req, res) => {
    const { id } = req.params;
    const { name, arcana, level, skills, description } = req.body;
    db.run(`UPDATE personas SET name = ?, arcana = ?, level = ?, skills = ?, description = ? WHERE id = ?`, 
        [name, arcana, level, skills, description, id], function(err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.redirect('/');
        });
};


exports.deletePersona = (req, res) => {
    const { id } = req.params;
    db.run(`DELETE FROM personas WHERE id = ?`, [id], function(err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.redirect('/');
    });
};

exports.getAllPersonas = (req, res) => {
    db.all(`SELECT * FROM personas`, [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.render('index', { personas: rows });
    });
};