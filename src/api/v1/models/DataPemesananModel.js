const Sequelize = require("sequelize");
const { Db } = require("../../../config/database");
const ProductModel = require("./ProductModel");


const DataPemesananModel = Db.define("data_pemesanan", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    id_product: {
        type: Sequelize.UUID,
        max: 50,
        allowNull: false,
        field: 'id_product'
    },
    id_customer: {
        type: Sequelize.UUID,
        max: 50,
        allowNull: true,
        field: 'id_customer'
    },
    invoice: {
        type: Sequelize.STRING,
        allowNull: true,
        max: 50,
        field: 'invoice'
    },
    harga: {
        type: Sequelize.DECIMAL,
        field: 'harga'
    },
    deskripsi: {
        type: Sequelize.TEXT,
        field: 'deskripsi'
    },
    jumlah_pemesanan: {
        type: Sequelize.INTEGER,
        max: 11,
        allowNull: false,
        field: 'jumlah_pemesanan'
    },
    status: {
        type: Sequelize.BOOLEAN,
        field: 'status',
        allowNull: true,
        defaultValue:0
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

DataPemesananModel.hasMany(ProductModel, { foreignKey: "id", sourceKey: "id_product"});


module.exports = DataPemesananModel;
