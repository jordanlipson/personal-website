import * as React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '../config'

const Nav = () => {
    const ResumeLink = (
        <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
        </a>
    );

    return (
        <>
            <ol>
                {navLinks &&
                    navLinks.map(({ url, name }, i) => (
                        <li key={i}>
                            <Link to={url}>{name}</Link>
                        </li>
                    ))}
            </ol>
            <div>{ResumeLink}</div>
        </>
    )
};

export default Nav;