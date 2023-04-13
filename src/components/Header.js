import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className='Header'>
        <h1>
          {title}
          <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} buttonStyle='btn btn-right'/>
        </h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header