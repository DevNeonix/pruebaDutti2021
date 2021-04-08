export interface Responseswapi<T> {
  count: number;
  next: string;
  previous?: any;
  results: T;
}
