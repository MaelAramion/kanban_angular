export class Task {
  private _id : number = 0;
  private _name : string = "";
  private _desc : string = "";


  constructor(id : number, name: string, desc: string) {
    this._id = id;
    this._name = name;
    this._desc = desc;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get desc(): string {
    return this._desc;
  }

  public  set desc(value: string) {
    this._desc = value;
  }
}
