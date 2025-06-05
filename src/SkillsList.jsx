import React from 'react';
import { SKILL_LIST } from './consts';

export const SkillsList = () => {
  return (
    <>
      <h3>Skills</h3>
      Total skill points available: TODO
      <ul>
      {SKILL_LIST.map((skill) => (
        <li>
          {skill.name} (Modifier: {skill.attributeModifier})
          </li>
      ))}
      </ul>
    </>
  );
}