import { UsuarioService } from './usuario.service';
import { Prisma } from "@prisma/client";
export declare class UsuarioController {
    private usuarioService;
    private prisma;
    constructor(usuarioService: UsuarioService);
    inicio(response: any): void;
    listaUsuarios(response: any, parametrosConsulta: any): Promise<void>;
    vistaCrear(response: any): void;
    obtenerUno(parametrosRuta: any): Prisma.Prisma__EPN_USUARIOClient<import(".prisma/client").EPN_USUARIO>;
    crearUno(bodyParams: any): Promise<import(".prisma/client").EPN_USUARIO>;
    actualizarUno(parametrosActualizar: {
        id: number;
        data: Prisma.EPN_USUARIOUpdateInput;
    }): any;
    eliminarUno(id: number): any;
}
