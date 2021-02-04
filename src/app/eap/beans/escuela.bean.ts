import { MallaBean } from "./malla.bean";

export class EscuelaBean {
    id!: number;
    nombre!: string;
    fechaCreacion!: string;
    resolucion!: string;
    mision!: string;
    vision!: string;
    director!: string;
    mallas!: Array<MallaBean>;
}