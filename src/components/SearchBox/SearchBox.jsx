import { useState } from 'react';
import PropTypes from 'prop-types';
import { Div } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [textFormLetter, setTextFormLetter] = useState('');

  const handleTextFormChange = event => {
    const evtValue = event.currentTarget.value.toLowerCase();
    setTextFormLetter(evtValue);
  };

  const submitForm = event => {
    event.preventDefault();

    if (textFormLetter.trim() === '') {
      alert('Введите текст');
      return;
    }
    onSubmit(textFormLetter);
  };

  return (
    <Div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Search movie"
          onChange={handleTextFormChange}
        />
        <button type="submit">Search</button>
      </form>
    </Div>
  );
};

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
