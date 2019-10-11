import React, { Fragment } from 'react'

const Membre = ({ nom, age, children }) => {

    return (
        <Fragment>
            <h2>Membre de ma famille => {nom} : {age}</h2>
            <p>{children}</p>
        </Fragment>
    )
}
export default Membre