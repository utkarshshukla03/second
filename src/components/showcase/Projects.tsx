import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import software from '../../assets/pictures/projects/software.gif';
import art from '../../assets/pictures/projects/art.gif';
import music from '../../assets/pictures/projects/music.gif';
import skill1 from '../../assets/pictures/skills/skill1.png';
import skill2 from '../../assets/pictures/skills/skill2.png';
import skill3 from '../../assets/pictures/skills/skill3.png';
import skill4 from '../../assets/pictures/skills/skill4.png';
import skill5 from '../../assets/pictures/skills/skill5.png';
import skill6 from '../../assets/pictures/skills/skill6.png';
import skill7 from '../../assets/pictures/skills/skill7.png';
import skill8 from '../../assets/pictures/skills/skill8.png';
import skill9 from '../../assets/pictures/skills/skill9.png';
import skill10 from '../../assets/pictures/skills/skill10.png';
import skill11 from '../../assets/pictures/skills/skill11.png';
import skill12 from '../../assets/pictures/skills/skill12.png';
import skill13 from '../../assets/pictures/skills/skill13.png';
import skill14 from '../../assets/pictures/skills/skill14.png';
import skill15 from '../../assets/pictures/skills/skill15.png';
import skill16 from '../../assets/pictures/skills/skill16.png';
import skill17 from '../../assets/pictures/skills/skill17.png';
import skill18 from '../../assets/pictures/skills/skill18.png';
import skill19 from '../../assets/pictures/skills/skill19.png';
import skill20 from '../../assets/pictures/skills/skill20.png';
import skill21 from '../../assets/pictures/skills/skill21.png';
import skill22 from '../../assets/pictures/skills/skill22.png';
import skill23 from '../../assets/pictures/skills/skill23.png';
import skill24 from '../../assets/pictures/skills/skill24.png';
export interface ProjectsProps {}

interface ProjectBoxProps {
    icon: string;
    title: string;
    subtitle: string;
    route: string;
    iconStyle: React.CSSProperties;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
    icon,
    title,
    subtitle,
    route,
    iconStyle,
}) => {
    const [, setIsHovering] = useState(false);
    const navigation = useNavigate();

    const handleClick = () => {
        navigation(`/projects/${route}`);
    };

    const onMouseEnter = () => {
        setIsHovering(true);
    };

    const onMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div
            onMouseDown={handleClick}
            className="big-button-container"
            style={styles.projectLink}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div style={styles.projectLinkLeft}>
                <img
                    src={icon}
                    style={Object.assign(
                        {},
                        styles.projectLinkImage,
                        iconStyle
                    )}
                    alt=""
                />
                <div style={styles.projectText}>
                    <h1 style={{ fontSize: 48 }}>{title}</h1>
                    <h3>{subtitle}</h3>
                </div>
            </div>
            <div style={styles.projectLinkRight}></div>
        </div>
    );
};
const skillImages = [
    skill1, skill2, skill3, skill4, skill5, skill6,
    skill7, skill8, skill9, skill10, skill11, skill12,
    skill13, skill14, skill15, skill16, skill17, skill18,
    skill19, skill20, skill21, skill22, skill23, skill24,
];
const SkillsGrid: React.FC = () => (
    <div style={styles.skillsGrid}>
        {skillImages.map((img, idx) => (
            <div key={idx} style={styles.skillBox}>
                <img src={img} alt={`Skill ${idx + 1}`} style={styles.skillImage} />
            </div>
        ))}
    </div>
);
const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>& Hobbies</h3>
            <br />
            <p>
                Click on one of the areas below to check out some of my favorite
                projects I've done in that field. I spent a lot of time to
                include a lot of visuals and interactive media to showcase each
                project. Enjoy!
            </p>
            <br />
            <div style={styles.projectLinksContainer}>
                <ProjectBox
                    icon={software}
                    iconStyle={styles.computerIcon}
                    title="Software"
                    subtitle="PROJECTS"
                    route="software"
                />
                <SkillsGrid/>
                {/* <ProjectBox
                    icon={music}
                    iconStyle={styles.musicIcon}
                    title="Music"
                    subtitle="VENTURES"
                    route="music"
                />
                <ProjectBox
                    icon={art}
                    iconStyle={styles.artIcon}
                    title="Art"
                    subtitle="ENDEAVORS"
                    route="art"
                /> */}
            </div>
            
        </div>
        
    );
};

const styles: StyleSheetCSS = {
    projectLinksContainer: {
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        flex: 1,
    },
    projectLink: {
        marginBottom: 24,
        cursor: 'pointer',
        width: '100%',
        boxSizing: 'border-box',

        alignItems: 'center',
        justifyContent: 'space-between',
    },
    projectText: {
        justifyContent: 'center',
        flexDirection: 'column',
    },
    projectLinkImage: {
        width: 48,
        // height: 48,
        marginRight: 38,
    },
    projectLinkLeft: {
        marginLeft: 16,
        alignItems: 'center',
    },
    computerIcon: {
        width: 56,
        height: 56,
    },
    musicIcon: {
        width: 48,
        height: 48,
    },
    arrowIcon: {
        width: 48,
        height: 48,
    },
    artIcon: {
        width: 21 * 2,
        height: 37 * 2,
    },
    skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 64px)',
    gridTemplateRows: 'repeat(4, 64px)',
    gap: '32px', // increased gap for more space between boxes
    justifyContent: 'center',
    alignItems: 'center',
    margin: '40px 0',
    boxShadow: '0 8px 32px rgba(0,0,0,0.10)', // subtle shadow for the whole grid
    borderRadius: '18px', // optional: soften grid corners
    background: '#fafbfc', // optional: light background for contrast
    padding: '32px', // optional: padding inside the grid shadow
},
skillBox: {
    width: '64px',
    height: '64px',
    background: '#f5f5f5',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)', // slightly stronger shadow for each box
},
    skillImage: {
        width: '40px',
        height: '40px',
        imageRendering: 'pixelated',
    },
};

export default Projects;
