import { useState } from 'react';
import './form.scss';

function Form({ handleParams }) {
  // let [method, setMethod] = useState('get')
  let [formData, setFormData] = useState({ method: 'get', url: '' })

  const handleMethod = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      method: e.target.id,
    });
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      url: e.target.value,
      data: e.target?.data?.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleParams(formData);
  }

  const methodArray = ['get', 'post', 'put', 'delete'];

  const buttons = methodArray.map((methodName) => {
    let className = methodName === formData.method ?
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
          <input
            name='url'
            type='text'
            data-testid='url-input'
            onChange={handleChange}
            value={formData.url}
          />
          <button type="submit" data-testid='go-button'>GO!</button>
        </label>
        {formData.method === 'post' || formData.method === 'put' ?
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
