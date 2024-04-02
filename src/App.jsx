import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const addClick = product => {
    setSelectedGood(product);
  };

  const removeClick = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : `No goods selected`}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={removeClick}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(product => (
            <tr
              data-cy="Good"
              key={product}
              className={
                selectedGood === product ? 'has-background-success-light' : ''
              }
            >
              <td>
                {selectedGood === product ? (
                  <button
                    data-cy="RemoveButton"
                    type="button"
                    className="button is-info"
                    onClick={removeClick}
                  >
                    -
                  </button>
                ) : (
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => addClick(product)}
                  >
                    +
                  </button>
                )}
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {product}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
