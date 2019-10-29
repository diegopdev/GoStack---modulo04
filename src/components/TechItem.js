import React from 'react'
import PropTypes from 'prop-types'

function ThechItem({tech, onDelete}){
    return(
        <li>
        {tech}
        <button type='button' onClick={onDelete}>Remover</button>
        </li>
    )
} 

ThechItem.defaultProps = {
    tech: 'Oculto'
}

ThechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}
export default ThechItem