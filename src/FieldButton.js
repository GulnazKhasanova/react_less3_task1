import styles from './App.module.css';
import PropTypes from 'prop-types';


export const FieldButton = ({ fields, handleClick}) => {

	fields.PropTypes = PropTypes.array;
	handleClick.PropTypes = PropTypes.func;

	return <>
	  {fields.map( (field, index)=><button
	  key={index}
	  onClick={() => handleClick(index)}
	  className={field === 'x'
	  	? styles.gameFieldButton + ' ' + styles.yellow
		: styles.gameFieldButton + ' ' + styles.green }>{field}
		</button>)}
	  </>
}
