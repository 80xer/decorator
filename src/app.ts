import "reflect-metadata";

type ss = string;

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  private _p0!: Point;
  private _p1!: Point;

  @logType
  public name!: string;

  @logType
  getName() {
    return this.name;
  }

  @logType
  set p0(value: Point) { this._p0 = value; }
  get p0() { return this._p0; }

  set p1(value: Point) { this._p1 = value; }
  get p1() { return this._p1; }
}

function logType(target: any, key: string) {
  var t = Reflect.getMetadata("design:type", target, key);
  console.log(`${key} type: ${t.name}`);
}

const l = new Line();
console.log('l.p0', l.p0)
l.p0 = new Point(10, 20);
console.log('l.p0', l.p0)