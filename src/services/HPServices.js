class HPService {
  //46 char pages
  _apiBase = 'https://api.potterdb.com/v1';
  //no pages
  _apiBase2 = 'https://hp-api.onrender.com/api/'

  getData = async (url) => {
    let result = await fetch(url);
    if (!result.ok) {
      throw new Error(`Could not fetch ${url}, status: ${result.status}`);
    }
    return await result.json()
  }

  getId = (pageNum) => {
    return this.getData(`${this._apiBase}/characters?page[number]=${pageNum}?page[size]=100`);
  }


  getAllCharacters = () => {
    return this.getData(`${this._apiBase}/characters?page[size]=9`);
  }

  getCharacter = (id) => {
    return this.getData(`${this._apiBase}/characters/${id}`);
  }
}

export default HPService