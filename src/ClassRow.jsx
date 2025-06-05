import React from 'react';
import { CLASS_EMOJI } from './consts';

export const ClassRow = ({ charClass, fulfilled, setSelectedClass }) => (
    <div>
        <span onClick={() => setSelectedClass(charClass)} className={fulfilled ? "fulfilled" : null}>{CLASS_EMOJI[charClass]} {charClass}</span>
    </div>
)
