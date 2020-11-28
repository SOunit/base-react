import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '../../components/Person/Person';

class Persons extends Component {
  render() {
    let persons = [];
    if (this.props.persons !== null) {
      this.props.persons.forEach((person) => {
        persons.push(<Person key={person.name} name={person.name} />);
      });
    }
    return <div>{persons}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    persons: state.persons,
  };
};

export default connect(mapStateToProps)(Persons);
