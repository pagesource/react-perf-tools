import React from 'react';

import './Table.scss'

const Table = ({header, children}) => {
    return (
        <table className="table">
            <thead className="table__header">
                {header}
            </thead>
            <tbody className="table__body">
                {children}
            </tbody>
        </table>
    )
}

export default React.memo(Table);