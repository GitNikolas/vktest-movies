const baseUrl = 'https://api.kinopoisk.dev/v1.4';

export async function getMovies(page:number) {
    try{
      let response = await fetch(`${baseUrl}/movie?page=${page}&limit=12&rating.kp=8.5-10`, {
        method:'GET',
        headers: {
            'X-API-KEY': '8KZQHZ9-35KM64C-K9VAJ23-42J06CA'
        },
      });
      if(!response.ok){
        throw new Error('Необходима авторизация');
      };
      return response;
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }

  export async function getMoviesById(id:string | undefined) {
    try{
      let response = await fetch(`${baseUrl}/movie/${id}`, {
        method:'GET',
        headers: {
            'X-API-KEY': '8KZQHZ9-35KM64C-K9VAJ23-42J06CA'
        },
      });
      if(!response.ok){
        throw new Error('Необходима авторизация');
      };
      return response;
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }

  export async function getSimilarMovies(id:number) {
    try{
      let response = await fetch(`${baseUrl}/movie?page=1&limit=6&similarMovies.id=${id}`, {
        method:'GET',
        headers: {
            'X-API-KEY': '8KZQHZ9-35KM64C-K9VAJ23-42J06CA'
        },
      });
      if(!response.ok){
        throw new Error('Необходима авторизация');
      };
      return response;
    } catch(err: any) {
      console.error(err);
      return err.message;
    }
  }
