const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")
const ProductModel = require("./ProductModel");
const UnitModel = require("./UnitModel");
const UserModel = require("./UserModel");

const UnitConversionsModel = Db.define("unit_conversions", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    productId: {
        type: Sequelize.STRING,
        max: 50,
        allowNull: true,
        field: 'productId'
    },
    barcode: {
        type: Sequelize.STRING,
        max: 255,
        allowNull: false,
        field: 'barcode'
    },
    unitId: {
        type: Sequelize.STRING,
        allowNull: false,
        max: 50,
        field: 'unitId'
    },
    quantity: {
        type: Sequelize.INTEGER,
        max: 11,
        allowNull: false,
        field: 'quantity'
    },
    status: {
        type: Sequelize.INTEGER,
        max: 1,
        allowNull: true,
        field: 'status'
    },
    conversion_default: {
        type: Sequelize.INTEGER,
        max: 1,
        allowNull: false,
        field: 'type'
    },
    user_create: {
        type: Sequelize.STRING,
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

}, {
    freezeTableName: true

})




/*
UnitConversionsModel.belongsTo(UserModel,{
    foreignKey:"userCreate",
});
*/

module.exports = UnitConversionsModel;
