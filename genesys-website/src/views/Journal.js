import React from 'react'
import Navigation from '../components/header/Navigation';
import JournalBody from '../components/body/JournalBody';

const Journal = () => {
    return (
        <React.Fragment>
            <Navigation />
            <JournalBody />
        </React.Fragment>
    )
};

export default Journal;