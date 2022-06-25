import { AdyacenciaTriangular, RotationTriangular } from '../types';
import { CasillaTriangular } from './CasillaTriangular';
import { TableroFactory } from './TableroFactory';

export class TableroHexagonalFactory extends TableroFactory<
    CasillaTriangular,
    AdyacenciaTriangular<CasillaTriangular>,
    RotationTriangular
>{

    public generate(): CasillaTriangular[] {
        const tablero: CasillaTriangular[] = [];
        const { format } = this;
        let id = 1;
        for (const rowIndex in format) {
            for (let i = 1; i <= format[rowIndex]; i++) {
                let rotacion: RotationTriangular;
                if (Number(rowIndex) <= Object.keys(format).length / 2) {
                    if(Number(rowIndex) % 2 === 0) {
                        (id % 2 === 0) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }else{
                        (id % 2 === 1) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }
                } else {
                    if(Number(rowIndex) % 2 === 0) {
                        (id % 2 === 1) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }else{
                        (id % 2 === 0) ? rotacion = 'VERTEXUP'
                        : rotacion = 'VERTEXDOWN';
                    }
                }
                const casilla = new CasillaTriangular({
                    id,
                    rotacion
                })
                tablero.push(casilla);
                id++;
            }
        }
        this.setAdyacentes(tablero);
        return tablero;
    }

    private setAdyacentes(tablero: CasillaTriangular[]): void{
        const { format } = this;
        for (const casilla of tablero) {
            const adyacentes: AdyacenciaTriangular<CasillaTriangular> = {
                adyUp: null,
                adyBottom: null,
                adyLeft: null,
                adyRight: null
            }
            const id = casilla.getId();
            let rowIndex = 0;
            let cont = 0;
            while(id > cont){
                rowIndex++;
                cont += format[rowIndex];
            }
            if(casilla.getRotacion() === 'VERTEXUP'){
                if(rowIndex < Object.keys(format).length){
                    adyacentes.adyBottom = tablero[id + Math.floor((format[rowIndex] + format[rowIndex + 1])/2) - 1];
                }
            }else if(casilla.getRotacion() === 'VERTEXDOWN'){
                if(rowIndex > 1){
                    adyacentes.adyUp = tablero[id - Math.floor((format[rowIndex] + format[rowIndex - 1])/2) - 1];
                }
            }
            if(id > cont - format[rowIndex] + 1){
                adyacentes.adyLeft = tablero[id - 2];
            }
            if(id < cont){
                adyacentes.adyRight = tablero[id];
            }
            casilla.setAdyacentes(adyacentes);
        }
    }
}