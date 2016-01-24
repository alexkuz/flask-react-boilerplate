import React, { PropTypes } from 'react';
import useSheet from 'react-jss';
import KittenIcon from '../svg/kitten.svg';

const COLORS = [
  '#FFAAAA', '#FFAAFF', '#AAAAFF', '#FFFFAA',
  '#339933', '#333399', '#993399', '#339999'
];

const Kitten = ({ sheet, onDeleteKitten, kitten }) => (
  <div className={sheet.classes.kitten}>
    <div className={sheet.classes.info}>
      <div style={{ color: COLORS[kitten.id % 8] }}><KittenIcon /></div>
      <div>Kitten #{kitten.id}</div>
    </div>
    <a className={sheet.classes.button}
       onClick={onDeleteKitten.bind(this, kitten.id)}>
      Remove kitten
    </a>
  </div>
);

Kitten.propTypes = {
  kitten: PropTypes.shape({
    id: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired
  }).isRequired
};


const STYLES = {
  kitten: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '33%',
    padding: '0.5rem',
    boxSizing: 'border-box'
  },
  button: {
    padding: '1rem 1.5rem',
    background: '#FFAAAA',
    '&:hover': {
      background: '#FFBBBB'
    },
    border: 0,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'center',
    userSelect: 'none'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    '& svg': {
      fill: 'currentColor'
    }
  }
};

export default useSheet(Kitten, STYLES);
