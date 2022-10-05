export class Column {
  private _id : number = 0;
  private _name : string = "";


  constructor(id: number, name: string)
  {
    this._id = id;
    this._name = name;
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
}
