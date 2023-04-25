const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")
const ProductModel = require("./ProductModel");
const UserModel = require("./UserModel");
const WarehouseModel = require("./WarehouseModel");

const StockModel = Db.define("stock", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    warehouseId: {
        type: Sequelize.STRING,
        max: 50,
        allowNull: true,
        field: 'warehouseId'
    },
    productId: {
        type: Sequelize.STRING,
        max: 50,
        allowNull: false,
        field: 'productId'
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        max: 100,
        field: 'quantity'
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

StockModel.belongsTo(ProductModel,{
    foreignKey:"productId"
})
StockModel.belongsTo(WarehouseModel,{
    foreignKey:"warehouseId"
})
StockModel.belongsTo(UserModel,{
    foreignKey:"userCreate",
});

module.exports = StockModel;
