import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Google Cloud Archade Externship</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hover.gg/'}
                        >
                            {/* <h4>www.hover.gg</h4> */}
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Extern | Google Cloud</h3>
                        <b>
                            <p>July - September 2024 </p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Participated in a highly competitive and immersive cloud development externship program hosted by Google Cloud,
                     specifically designed to replicate real-world engineering challenges and enterprise-level <br /> problem-solving using cutting-edge cloud technologies.


                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed, built, and deployed Python-based microservices within a modular architecture that ensured high availability, fault tolerance, and ease of scaling in production-grade cloud environments.
                        </p>
                    </li>
                    <li>
                        <p>
                            Leveraged key Google Cloud Platform (GCP) services such as Compute Engine for provisioning and managing virtual machines, Cloud Storage for object-based data handling and archival, and BigQuery for <br /> executing complex, high-speed data analytics and queries on large datasets.


                        </p>
                    </li>
                    <li>
                        <p>
                            Architected and implemented cloud-native solutions emphasizing optimal performance, horizontal scalability, secure data processing, and cost-efficient infrastructure management using principles of distributed computing.


                        </p>
                    </li>
                    <li>
                        <p>
                           Collaborated in a fast-paced, agile team environment following industry best practices including Git-based version control, sprint planning, code reviews, and CI/CD pipelines to streamline development and deployment workflows.
                        </p>
                    </li>
                    <li>
                        <p>
                           Gained practical hands-on experience in managing virtual machines, configuring persistent storage, automating deployments, monitoring cloud resources, and executing data-driven insights at scale using SQL and BigQuery's analytics engine.
                        </p>
                    </li>
                  
                </ul>
                <div style={styles.headerRow}>
                        <h4>Tech Stack:</h4>
                    </div>
                <div className="text-block">
                    <ul>
                        <li>
                            <p>Programming Language: Python </p>
                        </li>

                        <li>
                            <p>Cloud Services: Google Cloud Platform (Compute Engine, Cloud Storage, BigQuery) </p>
                        </li>
                        <li>
                            <p>DevOps Tools: Git, CI/CD pipelines</p>
                        </li>
                        <li>
                            <p>API Design: RESTful APIs</p>
                        </li>

                        <li>
                            <p>Practices: Agile methodology, team collaboration, performance optimization, scalability strategies</p>
                        </li>

                    </ul>
                    </div>    
            </div>
            


        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    
};

export default Experience;
