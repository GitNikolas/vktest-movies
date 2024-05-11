export interface MovieType {
    name: string;
    rating:{imdb:number};
    countries: {name:string}[];
    id:number;
    poster:{ url:string };
    year: number;
    data: Data;
    description?:string;
    movieLength?:number;
    genres?:{name:string}[];
    alternativeName?:string;
}

type Data = MovieType;
