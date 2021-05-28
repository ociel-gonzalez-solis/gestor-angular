export class Project {
  constructor(
    // tslint:disable-next-line:variable-name
    public _id: string,
    public name: string,
    public desc: string,
    public category: string,
    public year: number,
    public langs: string,
    public img: string
  ) {

  }
}
