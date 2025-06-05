import React from 'react';
import { CLASS_EMOJI } from './consts';

export const ClassRow = ({ charClass, fulfilled, setSelectedClass }) => (
    <div>
        <span onClick={() => setSelectedClass(charClass)} className={fulfilled ? "fulfilled classRow" : "classRow"}>{CLASS_EMOJI[charClass]} {charClass}</span>
    </div>
)
