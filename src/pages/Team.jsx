import React from 'react';
import CheifOfTeam from '../components/CheifOfTeam';
import TeamMember from '../components/TeamMember';
import Contactcard from './../components/Contactcard';

const Team = () => {
    return (
        <>
            <CheifOfTeam />
            <TeamMember />
            <Contactcard />
        </>
    );
};

export default Team;