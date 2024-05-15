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
  const [goodName, setgoodName] = useState('No goods selected');
  const [selectedGoodIndex, setSelectedGoodIndex] = useState(null);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {goodName}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          onClick={() => {
            setgoodName('No goods selected');
            setSelectedGoodIndex(null);
          }}
        />
      </h1>
      <table className="table">
        <tbody>
          {goods.map((good, index) => (
            <tr
              key={good}
              data-cy="Good"
              className={
                index === selectedGoodIndex
                  ? 'has-background-success-light'
                  : ''
              }
            >
              <td>
                <button
                  data-cy={
                    index === selectedGoodIndex ? 'RemoveButton' : 'AddButton'
                  }
                  type="button"
                  className={
                    index === selectedGoodIndex ? 'button is-info' : 'button'
                  }
                  onClick={() => {
                    setgoodName(`${good} is selected`);
                    setSelectedGoodIndex(index);
                  }}
                >
                  {index === selectedGoodIndex ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {good}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
