import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = ({text, to}) => {
    return <Link to={to} className="btn btn-success">{text}</Link>;
} 

// Validación de Props
Button.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default Button;