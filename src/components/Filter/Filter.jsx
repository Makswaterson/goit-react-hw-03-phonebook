import PropTypes from 'prop-types';
import { SectionFilter, FilterFind, InputFilter } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <SectionFilter>
      <FilterFind>Find contacts by name</FilterFind>
      <InputFilter type="text" value={value} onChange={onChange} />
    </SectionFilter>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
