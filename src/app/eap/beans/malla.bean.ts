import { CursoBean } from "./curso.bean";

export class MallaBean {
    id!: number;
    codigo!: string;
    nombre!: string;
    fechaCreacion!: string;
    vigencia!: string;
    creditajeTotal!: number;
    numeroCiclos!: number;
    activa!: boolean;
    cursos: Array<CursoBean>;
}