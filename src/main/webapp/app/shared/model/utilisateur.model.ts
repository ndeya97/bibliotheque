export interface IUtilisateur {
  id?: number;
  nom?: string;
  prenom?: string;
  datenaissance?: string;
  code?: string;
  role?: string;
  pseudo?: string;
  motdepasse?: string;
}

export class Utilisateur implements IUtilisateur {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public datenaissance?: string,
    public code?: string,
    public role?: string,
    public pseudo?: string,
    public motdepasse?: string
  ) {}
}
