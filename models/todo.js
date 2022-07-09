const sequelize = require("../utils/database");
const {INTEGER, STRING, BOOLEAN} = require("sequelize");

const Todo = sequelize.define('todo', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    task: {
        type: STRING,
        allowNull: false,
    },
    isComplete: {
        type: BOOLEAN,
        allowNull: false,
    }
});

module.exports = Todo;