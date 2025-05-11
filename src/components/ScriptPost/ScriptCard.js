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
                margin: '0 16px',         // adds side spacing so content doesn’t hit edges
                width: 'calc(100% - 32px)' // accounts for margin
            }}
        >
            {children}
        </div>
    );
};

export default ScriptCard;
