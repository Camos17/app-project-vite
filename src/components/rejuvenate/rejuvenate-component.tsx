import { useState } from "react";

const Rejuvenate = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isValidNameField, setIsValidNameField] = useState(false);
  const [isValidAgeField, setIsValidAgeField] = useState(false);

  const handlerOnChangeName = (e) => setName(e.target.value);
  const handlerOnChangeAge = (e) => setAge(e.target.value);

  const validateName = (name: string) => {
    const nameTransformed = name.trim();
    if (nameTransformed.length > 1) {
      return true;
    } else {
      return false;
    }
  };

  const validateAge = (age: number) => {
    debugger;
    if (age > 0) {
      return true;
    } else {
      return false;
    }
  };

  const reduceAge = (age: number): number => {
    let reducedAge = age - 10;
    if (reducedAge < 0) reducedAge = 0
    return reducedAge;
  };

  const getErrorMessage = (validaName: boolean, validaAge: boolean): string => {
    let errorMsg = '';
    if (!validaName && !validaAge) {
      errorMsg = 'Verifica el nombre y la edad ingresadas.';
    } else if(!validaName) {
      errorMsg = 'Verifica que hayas ingresa el nombre.';
    } else if(!validaAge) {
      errorMsg = 'Verifica que hayas ingresa el año.';
    }
    return errorMsg;
  };

  const handlerOnSubmit = (e: { preventDefault: () => void; }) => {
    debugger;
    e.preventDefault();

    setIsValidNameField(validateName(name));
    setIsValidAgeField(validateAge(age));

    if (isValidNameField && isValidAgeField) {
      let newAge = reduceAge(age);
      alert(`Tu nueva edad es: ${newAge}`);
      setErrorMessage(false);
    } else {
      setErrorMessage(true);
    }
    
  };


  return (<>
    <div className='form-rejuvenate__container'>
      <form onSubmit={handlerOnSubmit} className='form-rejuvenate'>
        <div>
          <label htmlFor='name'>Ingresa Nombre</label>
          <input 
          type='text'
          id='name'
          placeholder='Nombre'
          value={name}
          onChange={handlerOnChangeName}
        />
        </div>
        <div>
          <label htmlFor='age'>Ingresa Edad</label>
          <input 
            type='text'
            id='age'
            placeholder='Edad'
            value={age}
            onChange={handlerOnChangeAge}
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>

      {errorMessage ? <div className='form-rejuvenate__error-message'>
          <p>{getErrorMessage(isValidNameField, isValidAgeField)}</p>
        </div> : ''}
    </div>
    

  </>);
};

export default Rejuvenate;