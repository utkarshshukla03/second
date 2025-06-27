import React from 'react';
import streak from '../../assets/pictures/streaks.jpg';
import leetcode from '../../assets/pictures/leecode.jpg';

import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps { }

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Utkarsh Shukla</h3>
            <br />
            <div className="text-block">
                <p>
                    Web And App enthusiast with a passion for creating
                    beautiful, functional, and user-friendly digital experiences.Currently Pursuing Masters Of Computer Applications at
                    Thapar Institute of Engineering and Technology, Patiala.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:utkarshshukla372@gmail.com">
                        utkarshshukla372@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Hello! I'm someone who's always been drawn to how things work — not just at the surface, but deep within the logic, structure, and systems that drive them. From a young age, I was fascinated by the possibilities technology offered. What began as a curiosity turned into a strong passion, and over time, that passion evolved into a focused career path in software development and innovation. Along the way, I developed a strong foundation in data structures and algorithms, and I’ve made problem-solving a part of my daily routine, consistently practicing on platforms like LeetCode to sharpen my logic and analytical thinking.


                </p>
                <br />
                <div className="captioned-image">
                    <img src={streak} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Leetcode heatmap of my coding streaks.
                            website :)
                        </sub>
                    </p>
                </div>

                <p>
                    My journey with technology started with small experiments: tweaking websites, automating small tasks,
                    understanding how apps interact with servers. The more I explored, the more I realized that technology is not just about code — it's about solving problems creatively,
                    building tools that improve lives, and creating experiences that feel magical to users.
                </p>
                <br />
                <p>
                    Today, I specialize in full-stack development and product engineering.
                    I love working across layers — whether it's building robust backend systems using Node.js and MongoDB,
                    crafting interactive UIs with React or Flutter, or integrating smart AI components using TensorFlow.js or GPT-based models.
                    I’ve also explored Web3, CI/CD pipelines, and cloud infrastructure, and I enjoy experimenting with tools that push the boundaries of what’s possible.
                    
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Outside of coding real-world applications, I enjoy solving Data Structures and Algorithms (DSA) problems to strengthen my core problem-solving skills. I’ve been consistently practicing on platforms like{' '}
                            <a href="https://https://leetcode.com/u/utkarshshukla372/.com/" target="_blank" rel="noopener noreferrer">LeetCode</a>
                            {' '}where I’ve built strong foundations in topics like arrays, trees, graphs, recursion, and dynamic programming. This habit has not only improved my coding speed but also prepared me well for technical interviews.
                        </p>
                        <br />
                        
                    </div>
                    {/* <div style={styles.verticalImage}>
                        <img src={leetcode} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, April 2022
                            </sub>
                        </p>
                    </div> */}
                </div>
                
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on LinkedIn{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/utkarsh-shukla-7643ab276/"
                    >
                        @UtkarshShukla
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:utkarshshukla372@gmail.com">
                        utkarshshukla372@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
