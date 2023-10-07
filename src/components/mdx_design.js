import * as React from 'react'

export const H1 = ({ children }) => {
    return (
        <h1>
            {children}
        </h1>
    )
}

export const Paragraph = ({ children }) => {
    return (

        <p class="fs-5">
            {children}
        </p>
    )
}