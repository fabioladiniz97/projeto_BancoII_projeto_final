const mongoDB = require('../database/mongo');

const schema = new mongoDB.Schema({
    urlImagemPerfil: {
        type: String,
        required: false,
        default: '/images/avatar.jpg'
    },
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    instituicao: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    minicurriculo: {
        type: String,
        required: false
    },
    site: {
        type: String,
        required: false
    },
    curriculoLattes: {
        type: String,
        required: false
    },
    githubUser: {
        type: String,
        required: false
    },
    twitterUser: {
        type: String,
        required: false
    },
    instagramUser: {
        type: String,
        required: false
    }
})

const Usuario = mongoDB.model('Usuario', schema);

module.exports = Usuario;