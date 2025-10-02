/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Endpoints relacionados a usuários
 */

/**
 * @swagger
 * /usuarios/login:
 *   post:
 *     summary: Realizar login de usuário
 *     description: Autentica um usuário pelo RM e senha. Retorna os dados do usuário se as credenciais forem válidas.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rm:
 *                 type: string
 *                 example: "12345"
 *               senha:
 *                 type: string
 *                 example: "1234"
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id_usuarios:
 *                       type: integer
 *                       example: 1
 *                     nome:
 *                       type: string
 *                       example: João Silva
 *                     rm:
 *                       type: string
 *                       example: "12345"
 *                     nivel_usuario:
 *                       type: string
 *                       example: aluno
 *                     turma:
 *                       type: string
 *                       example: "2º DS"
 *                     email:
 *                       type: string
 *                       example: joao@email.com
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /usuarios/listarUsuarios:
 *   get:
 *     summary: Listar todos os usuários
 *     description: Retorna uma lista de todos os usuários cadastrados.
 *     tags: [Usuários]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_usuarios:
 *                         type: integer
 *                         example: 1
 *                       nome:
 *                         type: string
 *                         example: João Silva
 *                       email:
 *                         type: string
 *                         example: joao@email.com
 *                       rm:
 *                         type: string
 *                         example: "12345"
 *                       nivel_usuario:
 *                         type: string
 *                         example: aluno
 *                       turma:
 *                         type: string
 *                         example: "2º DS"
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /usuarios/cadastrar:
 *   post:
 *     summary: Cadastrar um novo usuário
 *     description: Cria um novo usuário com as informações fornecidas.
 *     tags: [Usuários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: João Silva
 *               rm:
 *                 type: string
 *                 example: "12345"
 *               senha:
 *                 type: string
 *                 example: "1234"
 *               nivel_usuario:
 *                 type: string
 *                 example: aluno
 *               turma:
 *                 type: string
 *                 example: "2º DS"
 *               email:
 *                 type: string
 *                 example: joao@email.com
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 usuario:
 *                   type: object
 *                   properties:
 *                     id_usuarios:
 *                       type: integer
 *                       example: 1
 *                     nome:
 *                       type: string
 *                       example: João Silva
 *                     rm:
 *                       type: string
 *                       example: "12345"
 *                       nivel_usuario:
 *                         type: string
 *                         example: aluno
 *                       turma:
 *                         type: string
 *                         example: "2º DS"
 *                       email:
 *                         type: string
 *                         example: joao@email.com
 *       400:
 *         description: Dados inválidos
 *       500:
 *         description: Erro interno do servidor
 */



const express = require("express");
const router = express.Router();
const { login, listarUsuarios, cadastrarUsuario } = require("../controllers/usuariosController");

router.post("/login", login); 
router.get("/listarUsuarios", listarUsuarios)
router.post('/cadastrar', cadastrarUsuario);

module.exports = router;
