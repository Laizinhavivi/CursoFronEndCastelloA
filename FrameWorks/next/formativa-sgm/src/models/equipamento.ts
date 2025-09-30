// modelo de criação de classe de Equipamento 

import mongoose, { Model, Schema } from "mongoose";

//atributos
export interface IEquipamento extends Document{
    _id: string;
    modelo: string;
    marca: string;
    descricao: string;
    status: string;
    localizacao: string;
    numeroSerie: string;
}

//criação do Schema do MongoDB (construtor)
const EquipamentoSchema:Schema<IEquipamento> = new Schema({
   modelo: {type: String, required: true},
   marca:{type: String, required: true},
   descricao:{type: String, required: true},
   status:{type: String, enum: ["ativo", "inativo"], default: "ativo" },
   localizacao:{type: String, required: true},
   numeroSerie:{type: String, required: true, unique: true },

});
//método de conversão toMap fromMap
                //from                                      //to
const Equipamento: Model<IEquipamento> = 
mongoose.models.Equipamento || mongoose.model<IEquipamento>("equipamento",EquipamentoSchema);

export default Equipamento;