import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a name to search for"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
