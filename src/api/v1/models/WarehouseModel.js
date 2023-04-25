const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")
const UserModel = require("./UserModel");

const WarehouseModel = Db.define("warehouses", {
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
        max: 255,
        allowNull: false,
        field: 'name'
    },
    code: {
        type: Sequelize.STRING,
        allowNull:true,
        max: 20,
        field: 'code'
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'description'
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'main',
        field: 'type'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'address'
    },
    city: {
        type: Sequelize.STRING,
        max: 255,
        allowNull: true,
        field: 'city'
    },
    province: {
        type: Sequelize.STRING,
        max: 255,
        allowNull: true,
        field: 'province'
    },
    phone: {
        type: Sequelize.STRING,
        max: 20,
        allowNull: true,
        field: 'phone'
    },
    poscode: {
        type: Sequelize.STRING,
        max: 10,
        allowNull: true,
        field: 'posCode'
    },
    fax: {
        type: Sequelize.STRING,
        max: 15,
        field: 'fax'
    },
    accountCode: {
        type: Sequelize.STRING,
        max: 50,
        field: 'accountCode'
    },
    taxValue: {
        type: Sequelize.STRING,
        max: 50,
        defaultValue: null,
        field: 'taxValue'
    },
    images: {
        type: Sequelize.STRING,
        defaultValue: null,
        field: 'images'
    },
    user_create: {
        type: Sequelize.STRING,
        max:50,
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
/*
WarehouseModel.belongsTo(UserModel,{
    foreignKey:"userCreate"
})

*/
module.exports = WarehouseModel;
