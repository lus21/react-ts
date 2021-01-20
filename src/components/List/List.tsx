/* eslint-disable react/no-unused-prop-types */
import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import '../App.css';
import { IRootState } from 'store';
import { DemoActions } from 'store/demo/types';
import * as actions from 'store/demo/actions';
import * as asyncactions from 'store/demo/async-actions';

const mapStateToProps = ({ demo }: IRootState) => {
  const { list, loading } = demo;
  return { list, loading };
};

const mapDispatcherToProps = (dispatch: Dispatch<DemoActions>) => ({
  addItem: (item: string) => dispatch(actions.addItemToList(item)),
  addItemAsync: (item: string) => asyncactions.addItemAsync(dispatch, item)
});

type ReduxType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatcherToProps>;

type IState = string;

function List(props: ReduxType) {
  const [inputValue, setInputValue] = useState<IState>('');
  const { list, addItemAsync, loading } = props;

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event?.currentTarget?.value;
    setInputValue(value);
  };

  const handleAddClick = () => {
    addItemAsync(inputValue);
    setInputValue('');
  };

  return (
    <div className="App">
      <h1>List Component</h1>
      <div style={{ margin: '20px' }}>
        <input value={inputValue} onChange={handleInputChange} />
        <button type="button" onClick={handleAddClick}>Add</button>
        <ul>
          {list.map(l => <li key={l}>{l}</li>)}
        </ul>
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatcherToProps)(List);
