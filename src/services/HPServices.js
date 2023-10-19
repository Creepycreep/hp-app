import noImg from '../core/assets/images/noImg.png'
import { mdiGenderMale, mdiGenderFemale } from '@mdi/js';

import gryffindor from '../core/assets/icons/gryffindor.svg';
import hufflepuff from '../core/assets/icons/hufflepuff.svg';
import ravenclaw from '../core/assets/icons/ravenclaw.svg';
import slytherin from '../core/assets/icons/slytherin.svg';
import unknown from '../core/assets/icons/shield-with-question-mark.svg';


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

    const genderIcon = (gender) => {
      if (gender === 'Female') {
        return mdiGenderFemale;
      } else {
        return mdiGenderMale;
      }
    };

    const houseIcon = (house) => {
      switch (house) {
        case 'Gryffindor':
          return gryffindor;
        case 'Hufflepuff':
          return hufflepuff;
        case 'Ravenclaw':
          return ravenclaw;
        case 'Slytherin':
          return slytherin;
        default:
          return unknown;
      }
    }



    return {
      id: charAttr.slug,
      thumbnail: charAttr.image ? charAttr.image : noImg,
      name: charAttr.name,
      gender: genderIcon(charAttr.gender),
      house: houseIcon(charAttr.house),
      blood_status: charAttr.blood_status ? charAttr.blood_status : '???',
      self: char.links.self,
      wiki: charAttr.wiki,
    }
  }
}

export default HPService