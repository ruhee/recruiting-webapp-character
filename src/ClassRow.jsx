import React from 'react';

export const ClassRow = ({ charClass, fulfilled, setSelectedClass }) => (
    <div>
        <span onClick={() => setSelectedClass(charClass)} className={fulfilled ? "fulfilled" : null}>{charClass}</span>
    </div>
)
