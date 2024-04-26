const baseUrl = 'https://api.kinopoisk.dev/v1.4';

export async function getMovies() {
    try{
      let response = await fetch(`${baseUrl}/movie?page=1&limit=10&rating.imdb=7-10`, {
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
      let response = await fetch(`${baseUrl}/movie?page=1&limit=10&similarMovies.id=${id}`, {
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

  export async function getUserMovies(){
    let response = localStorage.getItem('movies');
    console.log(response);
    return response;
  }