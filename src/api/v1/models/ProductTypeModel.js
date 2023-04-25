const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")

const ProductTypeModel = Db.define("product_types", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },

    ownerId: {
        type: Sequelize.STRING,
        max: 50,
        allowNull: true,
        field: 'ownerId'
    },
    name: {
        type: Sequelize.STRING,
        max: 150,
        allowNull: false,
        field: 'name'
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'description'
    },
    user_create: {
        type: Sequelize.INTEGER,
        max: 50,
        defaultValue: null,
        field: 'userCreate'
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'createdAt',
        timestamps: true
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'updatedAt',
        timestamps: true
    },    
    deletedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'deletedAt',
        timestamps: true
    },
}, {
    freezeTableName: true

})


module.exports = ProductTypeModel;