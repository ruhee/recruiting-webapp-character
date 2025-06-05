import React from 'react';

export const ClassRow = ({ charClass, fulfilled }) => (
    <div>
        <span className={fulfilled ? "fulfilled" : null}>{charClass}</span>
    </div>
)
