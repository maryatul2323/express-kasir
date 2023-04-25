const Sequelize = require("sequelize");
const { Db } = require("../../../config/database")

const UserModel = Db.define("users", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    name: {
        type: Sequelize.STRING,
        max: 100,
        allowNull: false,
        field: 'name'
    },
    nik: {
        type: Sequelize.STRING,
        max: 50,
        defaultValue: null,
        field: 'nik'
    },
    alamat: {
        type: Sequelize.STRING,
        defaultValue: null,
        field: 'alamat'
    },
    hp: {
        type: Sequelize.STRING,
        max: 15,
        defaultValue: null,
        field: 'hp'
  
    },
    pekerjaan: {
        type: Sequelize.STRING,
        max: 100,
        defaultValue: null,
        field: 'pekerjaan'  
    },
    jabatan: {
        type: Sequelize.STRING,
        max: 100,
        defaultValue: null,
        field: 'jabatan'
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true,
        field: 'image'
    },
    tempat_lahir: {
        type: Sequelize.STRING,
        max: 100,
        defaultValue: null,
        field: 'tempat_lahir'
    },
    tanggal_lahir: {
        type: Sequelize.DATE,
        defaultValue: null,
        field: 'tanggal_lahir'
  
    },
    email: {
        type: Sequelize.STRING,
        max: 50,
        allowNull: false,
        field: 'email'
    },
    telp: {
        type: Sequelize.STRING,
        max: 14,
        allowNull: true,
        field: 'telp'
    },
    username: {
        type: Sequelize.STRING,
        max: 255,
        allowNull: false,
        field: 'username'
    },
    password: {
        type: Sequelize.STRING,
        max: 255,
        allowNull: false,
        field: 'password'
    },
    access_token: {
        type: Sequelize.STRING,
        max: 255,
        defaultValue: null,
        field: 'akses_token'
    },
    refresh_token: {
        type: Sequelize.STRING,
        max: 255,
        defaultValue: null,
        field: 'refresh_token'
    },
    status: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        field: 'status'
    },
    user_create: {
        type: Sequelize.STRING,
        max: 50,
        allowNull:true,
        field: 'user_create'
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: null,
        field: 'created_at'
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'updated_at'
    },
    deleted_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: 'deleted_at'
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

//UserModel.hasMany(ProductModel,{
//    foreignKey:"ownerId"
//})

module.exports = UserModel;