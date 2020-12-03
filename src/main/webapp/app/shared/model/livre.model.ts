export interface ILivre {
  id?: number;
  titre?: string;
  desciption?: string;
  isbn?: string;
  code?: string;
}

export class Livre implements ILivre {
  constructor(public id?: number, public titre?: string, public desciption?: string, public isbn?: string, public code?: string) {}
}
