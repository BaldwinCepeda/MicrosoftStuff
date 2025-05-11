import React from 'react';

const ScriptCard = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: '#c0c0c0',
                padding: '32px',
                borderRadius: '6px',
                border: '1px solid #999',
                boxShadow: 'inset 0 0 0 2px #b0b0b0',
                width: '100%', // take up full width of parent
                boxSizing: 'border-box', // include padding in total width
            }}
        >
            {children}
        </div>
    );
};

export default ScriptCard;
