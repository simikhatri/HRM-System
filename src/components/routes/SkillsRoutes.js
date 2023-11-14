import React from 'react'
import Skills from '../ApplicationSetup/HRIS/SkillsSet/Skills';
import Domain from '../ApplicationSetup/HRIS/SkillsSet/Domain';
import Category from '../ApplicationSetup/HRIS/SkillsSet/Category';
import AOExpertise from '../ApplicationSetup/HRIS/SkillsSet/AOExpertise';

const SkillsRoutes = [
    { path: '/Skills/*', element: <Skills /> },
    { path: '/Skills/Domain', element: <Domain /> },
    { path: '/Skills/Category', element: <Category /> },
    { path: '/Skills/AOExpertise', element: <AOExpertise /> },
]

export default SkillsRoutes
