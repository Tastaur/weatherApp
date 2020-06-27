
export const minLengthCreator = minLength => value  =>{
  if(value && value.length < minLength) return `Минимальная длина строки ${minLength} символа`;

  return undefined;

}

export const required = value =>{
  if(value) return undefined;
  return 'Введите город';
};
