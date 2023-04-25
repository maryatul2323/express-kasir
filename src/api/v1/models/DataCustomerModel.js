const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")
const DataPemesananModel = require("./DataPemesananModel");
const DataMejaModel = require("./DataMejaModel");
const ProductModel = require("./ProductModel");

const DataCustomerModel = Db.define("data_customer", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    id_meja: {
        type: Sequelize.UUID,
        max: 50,
        allowNull: true,
        field: 'id_meja'
    },
    id_pemesanan: {
        type: Sequelize.ARRAY( Sequelize.STRING ),
        allowNull: true,
        field: 'id_pemesanan'
    },
    nama_customer: {
        type: Sequelize.STRING,
        max: 50,
        defaultValue: null,
        field: 'nama_customer'
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
        field: 'updatedAt',
        timestamps: true
    },


},

    {
    freezeTableName: true

})

DataCustomerModel.hasOne(DataMejaModel,{
    foreignKey:"id_meja"
})
DataCustomerModel.hasMany(DataPemesananModel, { foreignKey: "id_customer", sourceKey: "id"});


module.exports = DataCustomerModel;
