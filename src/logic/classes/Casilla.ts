import { Pieza } from './Pieza';
import { Shape } from './Shape';
import { CasillaType, EventManagerType } from '../interfaces';
import { Event } from '../types';

export abstract class Casilla<A,R,V> extends Shape<A,R,Casilla<A,R,V>> implements CasillaType<V> {
    private _value?: V;
    private readonly _id: number;
    private _eventManager?: EventManagerType<Event>;

    constructor(id: number,rotacion: R, adyacentes: Map<A,Casilla<A,R,V>>) {
        super(rotacion,adyacentes);
        this._id = id;
    }

    public estaVacia = (): boolean => !this._value;
    public vaciar = (): void => this._value = undefined;

    protected abstract validatePieza(pieza: Pieza<A,R,V>): boolean;
    protected abstract consumePieza(pieza: Pieza<A,R,V>): void;

    public canInsert(pieza: Pieza<A,R,V>,visitados: Casilla<A,R,V>[] = []): boolean {
        if(!this.validatePieza(pieza)) return false;
        visitados.push(this);
        let encaja: boolean = true;
        for(let entry of pieza.adyacentes.entries()) {
            const [adyacencia, piezaAdyacente] = entry;
            const casillaAdyacente = this.adyacentes.get(adyacencia);
            if(!casillaAdyacente){
                encaja = false; 
                break;
            }
            if(visitados.includes(casillaAdyacente)) continue;
            encaja = casillaAdyacente.canInsert(piezaAdyacente,visitados);
            if(!encaja) break;
        }
        return encaja;
    }

    public insertPieza(pieza: Pieza<A,R,V>,casillaInicial: Casilla<A,R,V> = this,visitados: Casilla<A,R,V>[] = []): void {
        this.consumePieza(pieza);
        visitados.push(this);
        for(let entry of pieza.adyacentes.entries()) {
            const [adyacencia, piezaAdyacente] = entry;
            const casillaAdyacente = this.adyacentes.get(adyacencia);
            if(casillaAdyacente?.validatePieza(piezaAdyacente) && !visitados.includes(casillaAdyacente))
            this.adyacentes.get(adyacencia)?.insertPieza(piezaAdyacente,casillaInicial,visitados);
        }
        if(this === casillaInicial) this._eventManager?.notify({type: 'insert_ficha', payload: pieza.container})
    }

    setEventManager(eventManager: EventManagerType<Event>){
        this._eventManager = eventManager;
    }

    get value(){
        return this._value;
    }
    set value(value: V | undefined){
        this._value = value;
    }

    get id(){
        return this._id;
    }

}