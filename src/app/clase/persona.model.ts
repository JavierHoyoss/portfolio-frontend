export class persona{
    id?:number;
    nombre: string;
    apellido: string;
    acerca: string;
    img: string;

    constructor(nombre:string,apellido:string,acerca:string,img:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.acerca=acerca;
        this.img=img;
    }
}