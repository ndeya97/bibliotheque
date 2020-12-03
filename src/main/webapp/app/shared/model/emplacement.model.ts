export interface IEmplacement {
  id?: number;
  nomemplacement?: string;
}

export class Emplacement implements IEmplacement {
  constructor(public id?: number, public nomemplacement?: string) {}
}
