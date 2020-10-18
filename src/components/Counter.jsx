import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ increment, decrement, incrementEvery, value }) => (
  <div>
    <p>Spam that increment button</p>

    <p>{value}</p>
    <button onClick={increment}>INCREMENT LATEST</button>
    <button onClick={decrement}>DECREMENT</button> <br />

    <button onClick={incrementEvery}>INCREMENT EVERY</button>
  </div>
);

const mapStateToProps = state => ({
  value: state.counter.value
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT_SAGA' }),
  incrementEvery: () => dispatch({ type: 'INCREMENT_SAGA_EVERY' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);