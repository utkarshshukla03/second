import React from 'react';
// @ts-ignore
import saga from '../../../assets/pictures/projects/software/saga.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import scroll from '../../../assets/pictures/projects/software/scroll.mp4';
import ResumeDownload from '../ResumeDownload';
import dlab from '../../../assets/pictures/projects/software/dlab.png';
import ucreate from '../../../assets/pictures/projects/software/ucreate.jpg'
import progress from '../../../assets/pictures/projects/software/progress.jpg'
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the time.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Dlab</h2>
                <br />
                <p>
                    DLab is a decentralized Web3 platform designed to bridge the gap between organizations needing data annotation and users seeking micro-earning opportunities. The platform enables organizations to post surveys and data labeling tasks, while users complete these to earn Solana-based micro-payments. The system emphasizes secure blockchain transactions, decentralized data storage, and a frictionless user experience, ensuring trust and transparency for all participants.
                </p>
                <br />
                <div className="captioned-image">
    <img src={dlab} alt="Dlab" style={{ width: '480px', height: 'auto', borderRadius: '12px' }}  />
    <p style={styles.caption}>
        <sub>
            <b>Figure 1:</b> Dlab Logo
        </sub>
    </p>
</div>
                <p>
                  <ul><h3>Impact & Facts:</h3>
                  <li>
                    <p>Real Incentives: Users receive real-time, trustless payouts for data labeling tasks.</p>
                  </li>
                  <li><p>
                    Scalable Architecture: Modular design supports onboarding multiple organizations and scaling task volume.
                    </p></li>

                   <li>
                    <p>
                        Secure & Transparent: Powered by blockchain for data integrity and transparent micro-transactions.
                        </p></li> 
                    <li>
                        <p>
                            Decentralized Storage: Off-chain task data stored securely using Amazon S3, minimizing blockchain bloat.
                            </p></li>    
                  </ul>
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/utkarshshukla03/Dlab"
                        >
                            <p>
                                <b>[Github Repository]</b> - dlab
                            </p>
                        </a>
                    </li>
                    
                    
                </ul>
                <p>
                    This is an ongoing project and code is getting update on github, and couple of week website will be streaming live and helping others.
                </p>
            </div>
            <div className="text-block">
                <h2>UCreate</h2>
                <br />
                <p>
                    UCreate is a powerful no-code website builder that leverages AI-driven tools and modern Web Container
                     Technology to empower users—regardless of technical background—to effortlessly design, preview, and 
                     deploy professional-grade websites. With a focus on simplicity and customization, UCreate provides 
                     an intuitive drag-and-drop interface, smart component suggestions, and live editing capabilities for real-time feedback.


                </p>
                <br />
                <div className="captioned-image">
    <img src={ucreate} alt="Ucreate" style={{ width: '320px', height: 'auto', borderRadius: '12px' }} />
    <p style={styles.caption}>
        <sub>
            <b>Figure 1:</b> Dlab Logo
        </sub>
    </p>
</div>
                <p>
                    <ul>
                        <h4>Impact</h4>
                        <li><p>
                            Reduced the time to build a simple website from hours to under 10 minutes.
                            </p></li>

                        <li>
                            <p>
                              Enabled designers, freelancers, and non-developers to launch polished web pages without writing code.  
                            </p>
                            </li>  
                        <li>
                            Showcased innovation in the no-code space by combining AI guidance with runtime Web Container execution.
                            </li>      
                    </ul>
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/utkarshshukla03/ucreate-"
                        >
                            <p>
                                <b>[GitHub]</b> - UCreate Repository
                            </p>
                        </a>
                    </li>
                   
                </ul>
                <p>
                    Unfortunately, the webiste currently is done because of some bugs
                    but it will be live very soon 
                </p>
            </div>
            <div className="text-block">
                <h2>Progress</h2>
                <br />
                <p>
                   Progress is a cross-platform mobile application focused on habit management and personal productivity. The app enables users to track habits, visualize activity through interactive heat maps, take short notes tied to specific days, and interact with an AI-powered assistant that provides personalized feedback, motivation, and productivity insights.

Built with Flutter for consistent performance across Android and iOS, Progress combines a seamless user experience with powerful offline storage and intelligent assistance features.
                </p>
                <br />
               <div className="captioned-image">
    <img src={progress} alt="Progress" style={{ width: '220px', height: 'auto', borderRadius: '12px' }}  />
    <p style={styles.caption}>
        <sub>
            <b>Figure 1:</b> Dlab Logo
        </sub>
    </p>
</div>
                <p>
                    <ul><h3>Impacts</h3>
                    <li>
                        <p>
                        Helped users build consistent routines with visual feedback loops and intelligent nudges.    
                        </p>
                    </li>

                    <li>
                        <p>
                          Provided a unique blend of habit tracking and AI assistance, offering both structure and adaptability.  
                        </p>
                    </li>

                    <li>
                        <p>
                            Encouraged user engagement by combining data, visuals, and conversation in a single productivity hub.

                        </p>
                    </li>
                    
                    </ul>
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/utkarshshukla03/progress"
                        >
                            <p>
                                <b>[GitHub]</b> - Progress Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://progress-umber-sigma.vercel.app/"
                        >
                            <p>
                                <b>[Live]</b> - Progress(WebPage)
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    If you are a developer and have also found yourself
                    scrolling through github comment after github comment saying
                    "i also have this problem...", then I highly recommend you
                    check out Skip the Scroll to save you some of your precious
                    time. If you like it, feel free to star it on GitHub and
                    rate it on the Chrome web store.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
