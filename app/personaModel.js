const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./persona_compendium.db'); // Use a file-based database

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS personas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(255) NOT NULL,
        arcana VARCHAR(255),
        level INTEGER,
        skills TEXT,
        description TEXT,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);
});

module.exports = db;