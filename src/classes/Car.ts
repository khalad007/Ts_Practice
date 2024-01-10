export class Car {
    public name: string;
    private age: number;
    readonly wFrom: string;

    constructor(n: string, a: number, wF: string){
        this.name = n;
        this.age = a;
        this.wFrom = wF;
    }
}