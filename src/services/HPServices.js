import noImg from '../core/assets/images/noImg.png'
import { mdiGenderMale, mdiGenderFemale } from '@mdi/js';

import gryffindor from '../core/assets/icons/gryffindor.svg';
import hufflepuff from '../core/assets/icons/hufflepuff.svg';
import ravenclaw from '../core/assets/icons/ravenclaw.svg';
import slytherin from '../core/assets/icons/slytherin.svg';
import unknown from '../core/assets/icons/shield-with-question-mark.svg';

import { useHTTP } from '../hooks/http.hooks';

const useHPService = () => {
  const { loading, request, error, clearError } = useHTTP()
  //46 char pages
  const _apiBase = 'https://api.potterdb.com/v1';
  //no pages
  // const _apiBase2 = 'https://hp-api.onrender.com/api/';

  const _category = 'characters'
  const _pageNum = 9;

  // getData = async (url) => {
  //   let result = await fetch(url);
  //   if (!result.ok) {
  //     throw new Error(`Could not fetch ${url}, status: ${result.status}`);
  //   }
  //   return await result.json()
  // }

  const getId = async (pageNum) => {
    return await request(`${_apiBase}/characters?page[size]=100?page[number]=${pageNum}`);
  }

  const getAllCharacters = async (category = _category, pageNum = _pageNum) => {
    const result = await request(`${_apiBase}/${category}?page[size]=${pageNum}?page[number]=0`);

    if (category === 'characters') {
      return result.data.map(char => _transformCharacter(char))
    } else if (category === 'potions' || category === 'spells') {
      return result.data.map(char => _transformItem(char))
    }
  }

  const getCharacter = async (id) => {
    const result = await request(`${_apiBase}/characters/${id}`);
    return _transformCharacter(result.data);
  }

  const getItem = async (id, category) => {
    const res = await request(`${_apiBase}/${category}/${id}`);
    return res.data.attributes
  }

  const _transformCharacter = (char) => {
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
      houseString: charAttr.house,
      house: houseIcon(charAttr.house),
      blood_status: charAttr.blood_status ? charAttr.blood_status : '???',
      animagus: charAttr.animagus ? charAttr.animagus : null,
      born: charAttr.born ? charAttr.born : null,
      died: charAttr.died ? charAttr.died : null,
      patronus: charAttr.patronus ? charAttr.patronus : null,
      species: charAttr.species ? charAttr.species : null,
      self: char.links.self,
      wiki: charAttr.wiki,
      wands: charAttr.wands.length === 0 ? null : charAttr.wands,
    }
  }

  const _transformItem = (item) => {
    const itemAttr = item.attributes

    return {
      id: itemAttr.slug,
      thumbnail: itemAttr.image ? itemAttr.image : noImg,
      name: itemAttr.name,
    }
  }


  return { loading, error, getId, getAllCharacters, getCharacter, getItem, clearError }
}

export default useHPService