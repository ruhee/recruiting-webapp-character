import React from 'react';
import { SKILL_LIST } from './consts';

export const SkillsList = ({ points }) => {
  return (
    <>
      <h3>Skills</h3>
      Total skill points available: {points}
      <ul>
      {SKILL_LIST.map((skill) => (
        <li key={skill.name}>
          {skill.name} (Modifier: {skill.attributeModifier})
          </li>
      ))}
      </ul>
    </>
  );
}