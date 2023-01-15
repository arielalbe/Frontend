export class Experiencia {
    id? : number;
    nombreE:string;
    descripcionE:string;
    desdeE: number;
    hastaE: number;
    imgE: string;

    constructor(nombreE:string, descripcionE: string, desdeE: number, hastaE: number, imgE: string ) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.desdeE = desdeE;
        this.hastaE = hastaE;
        this.imgE = imgE;
    }


}
