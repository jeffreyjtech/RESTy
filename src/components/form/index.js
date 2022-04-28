import { useState } from 'react';
import './form.scss';

function Form({ handleParams }) {
  let [method, setMethod] = useState('get')

  const handleMethod = (e) => {
    e.preventDefault();
    setMethod(e.target.id);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = {
        method,
        url: e.target.url.value,
        data: e.target?.data?.value
      };
      handleParams(formData);
    } catch (error) {
      console.error(error)
    }
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
          <input name='url' type='text' data-testid='url-input' />
          <button type="submit" data-testid='go-button'>GO!</button>
        </label>
        {method === 'post' || method === 'put' ?
          <label className='reqJson'><textarea name="data" data-testid='data-input' /></label> :
          null}
        <label className="methods">
          {buttons}
        </label>
      </form>
    </>
  );
}

export default Form;
