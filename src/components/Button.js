import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, buttonStyle}) => {
    return (
        <button 
        onClick={onClick} 
        style={{ backgroundColor: color }}
        className={buttonStyle}>
            {text}
        </button>
    )

}

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    buttonStyle: PropTypes.string,
}

export default Button