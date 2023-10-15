class HPService {
  _apiBase = 'https://api.potterdb.com/v1/';

  getData = async (url) => {
    let result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json()
  }

  getId = () => {
    return this.getData(`${this._apiBase}/characters?page[size]=100`);
  }


  getAllCharacters = () => {
    return this.getData(`${this._apiBase}/characters?page[size]=9`);
  }

  getCharacter = (id) => {
    return this.getData(`${this._apiBase}/characters/${id}`);
  }
}

export default HPService