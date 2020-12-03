export interface ITheme {
  id?: number;
  theme?: string;
}

export class Theme implements ITheme {
  constructor(public id?: number, public theme?: string) {}
}
