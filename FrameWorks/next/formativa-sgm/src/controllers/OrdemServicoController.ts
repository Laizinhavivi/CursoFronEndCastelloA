import OrdemServico, { IOrdemServico } from "@/models/OrdemServico";
import connectMongo from "@/services/mongodb"

export const getOrdemServico = async() => {
    //conectar com o banco
    await connectMongo();
    //solicitação para o MongoDB
    const ordemservico = await OrdemServico.find();
    return ordemservico;
}
//listar
export async function getOrdemServicoById(id: string) {
    await connectMongo();
    const ordemservico = await OrdemServico.findById(id);
    return ordemservico
}
//criar
export async function createOrdemServico(data: Partial<IOrdemServico>){
    await connectMongo();
    const novoEquipamentoServico = new OrdemServico(data);
    const novoEquipamentoServicoId = await novoEquipamentoServico.save();
    return novoEquipamentoServicoId;
}
//atualizar
export const updateOrdemServico = async(id:string, data: Partial<IOrdemServico>) => {
 await connectMongo();
    const ordemservicoAtualizado = await OrdemServico.findByIdAndUpdate(id, data, {new:true});
    return ordemservicoAtualizado;
}
//deletar
export const autenticaOrdemServico = async (id:string)=>{
    await connectMongo();
    await OrdemServico.findByIdAndDelete(id);
}
