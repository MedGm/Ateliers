class Point {
    private abs: number;
    private ord: number;

    constructor(abs: number, ord: number) {
        this.abs = abs;
        this.ord = ord;
    }

    public getAbs(): number {
        return this.abs;
    }

    public getOrd(): number {
        return this.ord;
    }

    public setAbs(abs: number): void {
        this.abs = abs;
    }

    public setOrd(ord: number): void {
        this.ord = ord;
    }


    public calculerDistance(point: Point): number {
        let x1 = this.abs;
        let y1 = this.ord;
        let x2 = point.getAbs();
        let y2 = point.getOrd();
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
    }
}

