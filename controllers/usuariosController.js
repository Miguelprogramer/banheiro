//arquivos de conexão
const pool = require("../config/db");

//login RM + Senha
async function login(req, res) {
    const { rm, senha } = req.body;
    try {
        const [rows] = await pool.query(
            "SELECT * FROM usuarios WHERE rm = ? AND senha = ?",
            [rm, senha]
        );

        if (rows.length > 0) {
            res.json({ success: true, usuario: rows[0] });
        } else {
            res.status(401).json({ success: false, message: "Credenciais inválidas" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//listar todos
async function listarUsuarios(_req, res) {
    try {
        const [rows] = await pool.query("SELECT id_usuarios, nome, email, rm, nivel_usuario, turma FROM usuarios");
        res.json({success: true, usuarios: rows});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

//cadastrar usuário
async function cadastrarUsuario(req, res) {
    const { nome, email, rm, senha, nivel_usuario, turma } = req.body;
    try {
        await pool.query(
            "INSERT INTO usuarios (nome, email, rm, senha, nivel_usuario, turma) VALUES (?, ?, ?, ?, ?, ?)",
            [nome, email, rm, senha, nivel_usuario, turma]
        );
        res.json({ success: true, message: "Usuário cadastrado com sucesso!" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

module.exports = { login, listarUsuarios, cadastrarUsuario };
