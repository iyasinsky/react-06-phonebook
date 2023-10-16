import { useSelector, useDispatch } from 'react-redux';
import { filterValue } from 'redux/filterSlice';
import { Label } from './Filter.styled';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(filterValue(e.target.value))}
        placeholder="Enter a name to search for"
      />
    </Label>
  );
};
