import PropTypes from 'prop-types';
import { ContactItem } from '../ContactItem/ContactItem';
import { StyledList, Wrapper } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Wrapper>
      <StyledList>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            />
          );
        })}
      </StyledList>
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
