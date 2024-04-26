export interface MovieType {
    name: string;
    rating:number;
    countries: {name:string}[];
    id:number;
    poster:{ url:string };
    year: number;
}
