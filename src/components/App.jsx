import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../Redux/contactsOperations';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { items, isLoading, error } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <GlobalStyle />
      <Form />
      {error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <h2>
            {isLoading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Loader />
              </div>
            ) : (
              `In youre phonebook - ${items.length} Contacts`
            )}
          </h2>
          <Filter />
          {items.length === 0 && !isLoading ? (
            <h2>You don't have saved contacts</h2>
          ) : (
            <Contacts />
          )}
        </>
      )}
    </>
  );
};