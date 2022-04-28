import { useState } from 'react';
import './form.scss';

function Form({ handleSubmit }) {
  let [method, setMethod] = useState('get')

  const handleMethod = (e) => {
    e.preventDefault();
    setMethod(e.target.id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    handleSubmit(formData);
  }

  const methodArray = ['get', 'post', 'put', 'delete'];

  const buttons = methodArray.map((methodName) => {
    let className = methodName === method ?
      'active' :
      'inactive';
    return (
      <span
        id={methodName}
        onClick={handleMethod}
        key={methodName}
        className={className}
      >
        {methodName.toUpperCase()}
      </span>
    );

  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type="submit" data-testid='go-button'>GO!</button>
        </label>
        <label className="methods">
          {buttons}
        </label>
        {method === 'post' || method === 'put' ?
          <label className='reqJson'><textarea /></label> :
          null}
      </form>
    </>
  );
}

export default Form;
