// Listar todos os usuario


import Usuario, { IUsuario } from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

//export arrow function
export const getUsuarios = async() => {
   //conectar com o banco de dados 
   await connectMongo();
   //solicitação para o MongoDB
   const usuarios = await Usuario.find(); //listar todos os usuários da coleção
   return usuarios;
}
// Listar um único usuário
export async function getUsuariosById(id:string) {
    await connectMongo();
    const usuario = await Usuario.findById(id); //fez a busca
    return usuario
}
// Criar usuário
export async function createUsuario(data: Partial<IUsuario>) {
    await connectMongo();
    const novoUsuario = new Usuario(data);
    const novoUsuarioId = await novoUsuario.save();
    return novoUsuarioId; 

}
// Atualizar dados do usuário
export const updateUsuario = async(id:string, data: Partial<IUsuario>) => {
    await connectMongo();
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {new:true});
    return usuarioAtualizado;
}

// Deletar usuário
export const deleteUsuario = async (id: string) => {
    await connectMongo();
    await Usuario.findByIdAndDelete(id);
}
export const autenticaUsuario = async (email: string, senha:string) =>{
    await connectMongo();
    //buscar um usuário pelo email
    const usuario = await Usuario.find({email});
    // se usuario não encontrado
    if(!usuario || usuario.length ===0) return null;
    //comparar senha
    const senhaSecreta = await usuario[0].compareSenha(senha);
    if(!senhaSecreta) return null; //senha incorreta
    //se deu certo
    return usuario[0];
}