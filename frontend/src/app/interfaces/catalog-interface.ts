export interface ICatalog {
  _id: string;
  name: string;
  ancestors: string[];
  parent: string;
  description: string;
  assets: string[];
}
