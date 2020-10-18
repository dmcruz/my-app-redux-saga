import React from 'react';
import { connect } from 'react-redux';
import { Button, Spinner } from 'react-bootstrap';

const SagaComponent = ({ increment, decrement, incrementEvery, value, fetchUsers, clearUsers, users, isLoading }) => (
  <div>
    <h3>Spam that increment button</h3>

    <p>{value}</p>
    <p>
    <Button onClick={increment}>Increment (takeLatest)</Button>&nbsp;
    <Button onClick={decrement}>Decrement</Button> 
    </p>

    <p>
    <Button onClick={incrementEvery}>Increment (takeEvery)</Button>
    </p>
    <hr/>
    <h3>API Test</h3>
    <p>
    <Button onClick={fetchUsers} disabled={isLoading}>Fetch Users</Button>&nbsp;
    <Button onClick={clearUsers}>Clear</Button>
    </p>
    <Spinner animation="border" size="sm" style={{ display: isLoading ? 'block': 'none', margin: 'auto'}} />
    <div className="container" style={ {display: users.length > 0 ? 'block' : 'none' }}>
      <div className="row" style={{fontWeight: 'bold'}}>
        <div className="col-sm">Name</div>
        <div className="col-sm">Country</div>
        <div className="col-sm">Slams</div>
      </div>
      {users.map(u => 

      <div className="row" key={u.id}>
        <div className="col-sm">{u.name}</div>
        <div className="col-sm">{u.country}</div>
        <div className="col-sm">{u.slams}</div>
      </div>)
      }
      </div>
  </div>
);

const mapStateToProps = state => ({
  value: state.counter.value,
  users: state.users.list,
  isLoading: state.users.isLoading
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT_SAGA' }),
  incrementEvery: () => dispatch({ type: 'INCREMENT_SAGA_EVERY' }),
  decrement: () => dispatch({ type: 'DECREMENT' }),
  fetchUsers: () => dispatch({ type: 'FETCH_USERS_SAGA'}),
  clearUsers: () => dispatch({ type: 'CLEAR_USERS'})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SagaComponent);