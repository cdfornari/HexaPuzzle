import { PiezaTriangular } from '../classes/PiezaTriangular';

export type AdyacenciaTriangular = {
    adyUp: PiezaTriangular | null,
    adyBottom: PiezaTriangular | null,
    adyLeft: PiezaTriangular,
    adyRight: PiezaTriangular,
}