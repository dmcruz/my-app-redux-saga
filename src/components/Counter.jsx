import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ increment, decrement, value }) => (
  <div>
    {value}
    <button onClick={increment}>Add 1</button>
    <button onClick={decrement}>Minus 1</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.counter.value
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT_SAGA' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);