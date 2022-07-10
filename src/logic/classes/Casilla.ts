import { Pieza } from './Pieza';
import { Color, ShapeType } from '../types';
import { CasillaType, PointsManagerType, Subscription,Restriction } from '../interfaces';

export abstract class Casilla<S extends ShapeType> implements CasillaType,Subscription {
    private _color?: Color;
    private _restrictions: Restriction[] = [];
    private _pointsManager?: PointsManagerType;
    private _shape: S;
    private readonly _id: number;

    constructor(id: number, shape: S) {
        this._id = id;
        this._shape = shape;
    }
    
    public abstract canInsert(pieza: Pieza<S>): boolean;
    public abstract insertPieza(pieza: Pieza<S>): void;
    
    public estaVacia = (): boolean => !this._color;
    public vaciar = (): void => this._color = undefined;

    public notify(): void {
        this._restrictions.forEach(restriction => restriction.update());
        this._pointsManager?.update({type: 'insert_pieza', payload: 1});
    }

    get adyacentes(): S['adyacentes'] {
        return this._shape.adyacentes;
    }
    set adyacentes(adyacentes: S['adyacentes']){
        this._shape.adyacentes = adyacentes;
    }
    get rotacion(): S['rotacion'] {
        return this._shape.rotacion;
    }

    public addRestriction(restriction: Restriction): void {
        this._restrictions.push(restriction);
    }

    set pointsManager(pointsManager: PointsManagerType){
        this._pointsManager = pointsManager;
    }

    get color(){
        return this._color;
    }
    set color(color: Color | undefined){
        this._color = color;
    }

    get id(){
        return this._id;
    }

    get restrictions(){
        return this._restrictions;
    }
}