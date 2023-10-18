import noImg from '../core/assets/images/noImg.png'
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

  getAllCharacters = async () => {
    const result = await this.getData(`${this._apiBase}/characters?page[size]=9`);
    return result.data.map(char => this._transformCharacter(char))
  }

  getCharacter = async (id) => {
    const result = await this.getData(`${this._apiBase}/characters/${id}`);
    return this._transformCharacter(result.data);
  }

  _transformCharacter = (char) => {
    const charAttr = char.attributes
    return {
      id: charAttr.slug,
      thumbnail: charAttr.image ? charAttr.image : noImg,
      name: charAttr.name,
      gender: charAttr.gender,
      house: charAttr.house,
      blood_status: charAttr.blood_status ? charAttr.blood_status : '???',
      self: char.links.self,
      wiki: charAttr.wiki,
    }
  }
}

export default HPService