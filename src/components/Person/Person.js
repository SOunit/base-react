import React from 'react';

const person = (props) => {
  return <div key={props.key}>{props.name}</div>;
};

export default person;
