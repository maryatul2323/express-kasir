const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")
const DataPemesananModel = require("./DataPemesananModel");
const UserModel = require("./UserModel");

const DataCheckoutModel = Db.define("data_checkout", {
    id_checkout: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id_checkout'
    },
    id_pemesanan: {
        type: Sequelize.STRING,
        max: 50,
        allowNull: true,
        field: 'id_pemesanan'
    },
    total: {
        type: Sequelize.DECIMAL,
        allowNull: true,
        field: 'total'
    },
    user_create: {
        type: Sequelize.STRING,
        max: 50,
        defaultValue: null,
        field: 'user_create'
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

},

    {
    freezeTableName: true

})

DataCheckoutModel.belongsTo(DataPemesananModel,{
    foreignKey:"id_pemesanan"
})

DataCheckoutModel.belongsTo(UserModel,{
    foreignKey:"user_create"
})


module.exports = DataCheckoutModel;
