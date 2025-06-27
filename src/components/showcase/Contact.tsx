import React, { useEffect, useState } from 'react';
import colors from '../../constants/colors';
import leetcode from '../../assets/pictures/contact-leetcode.png';
import ghIcon from '../../assets/pictures/contact-gh.png';
import inIcon from '../../assets/pictures/contact-in.png';
import ResumeDownload from './ResumeDownload';

export interface ContactProps {}

// function to validate email
const validateEmail = (email: string) => {
    if (typeof email !== 'string') return false;
    const re =
        // eslint-disable-next-line
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
};

interface SocialBoxProps {
    icon: string;
    link: string;
}

const SocialBox: React.FC<SocialBoxProps> = ({ link, icon }) => (
    <a rel="noreferrer" target="_blank" href={link}>
        <div className="big-button-container" style={styles.social}>
            <img src={icon} alt="" style={styles.socialImage} />
        </div>
    </a>
);

const Contact: React.FC<ContactProps> = () => {
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formMessage, setFormMessage] = useState('');
    const [formMessageColor, setFormMessageColor] = useState('');

    useEffect(() => {
        if (
            validateEmail(email) &&
            typeof name === 'string' && name.trim().length > 0 &&
            typeof message === 'string' && message.trim().length > 0
        ) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [email, name, message]);

    async function submitForm() {
        if (!isFormValid) {
            setFormMessage('Form unable to validate, please try again.');
            setFormMessageColor('red');
            return;
        }
        try {
            setIsLoading(true);
            const res = await fetch('https://second-backend1.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    company,
                    email,
                    name,
                    message,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setFormMessage(`Message successfully sent. Thank you ${name}!`);
                setCompany('');
                setEmail('');
                setName('');
                setMessage('');
                setFormMessageColor(colors.blue);
            } else {
                setFormMessage(data.error || 'Failed to send message.');
                setFormMessageColor(colors.red);
            }
        } catch (e) {
            setFormMessage('There was an error sending your message. Please try again.');
            setFormMessageColor(colors.red);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (formMessage.length > 0) {
            const timeout = setTimeout(() => {
                setFormMessage('');
                setFormMessageColor('');
            }, 4000);
            return () => clearTimeout(timeout);
        }
    }, [formMessage]);

    return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1>Contact</h1>
                <div style={styles.socials}>
                    <SocialBox
                        icon={ghIcon}
                        link={'https://github.com/utkarshshukla03'}
                    />
                    <SocialBox
                        icon={inIcon}
                        link={'https://www.linkedin.com/in/utkarsh-shukla-7643ab276/'}
                    />
                    <SocialBox
                        icon={leetcode}
                        link={'https://leetcode.com/u/utkarshshukla372/'}
                    />
                </div>
            </div>
            <div className="text-block">
                <p>
                    I am looking for new opportunities and projects to work on.
                    If you have an idea or project feel free to reach out to me
                    via my personal email or by filling out the form below.
                </p>
                <br />
                <p>
                    <b>Email: </b>
                    <a href="mailto:utkarshshukla372@gmail.com">
                        utkarshshukla372@gmail.com
                    </a>
                </p>

                <div style={styles.form}>
                    <label>
                        <p>
                            {!name && <span style={styles.star}>*</span>}
                            <b>Your name:</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>
                        <p>
                            {!validateEmail(email) && (
                                <span style={styles.star}>*</span>
                            )}
                            <b>Email:</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>
                        <p>
                            <b>Company (optional):</b>
                        </p>
                    </label>
                    <input
                        style={styles.formItem}
                        type="text"
                        name="company"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <label>
                        <p>
                            {!message && <span style={styles.star}>*</span>}
                            <b>Message:</b>
                        </p>
                    </label>
                    <textarea
                        name="message"
                        placeholder="Message"
                        style={styles.formItem}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <div style={styles.buttons}>
                        <button
                            className="site-button"
                            style={styles.button}
                            type="button"
                            disabled={!isFormValid || isLoading}
                            onClick={submitForm}
                        >
                            {!isLoading ? (
                                'Send Message'
                            ) : (
                                <p className="loading">Sending</p>
                            )}
                        </button>
                        <div style={styles.formInfo}>
                            <p
                                style={{
                                    color: formMessageColor,
                                }}
                            >
                                <b>
                                    <sub>
                                        {formMessage
                                            ? `${formMessage}`
                                            : ' All messages get forwarded straight to my personal email'}
                                    </sub>
                                </b>
                            </p>
                            <p>
                                <sub>
                                    {!isFormValid ? (
                                        <span>
                                            <b style={styles.star}>*</b> 
                                            required
                                        </span>
                                    ) : (
                                        '\xa0'
                                    )}
                                </sub>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ResumeDownload altText="Need a copy of my Resume?" />
        </div>
    );
};

const styles: StyleSheetCSS = {
    form: {
        flexDirection: 'column',
        marginTop: 32,
    },
    formItem: {
        marginTop: 4,
        marginBottom: 16,
    },
    socialImage: {
        width: 36,
        height: 36,
    },
    buttons: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    formInfo: {
        textAlign: 'right',
        flexDirection: 'column',
        alignItems: 'flex-end',
        paddingLeft: 24,
    },
    star: {
        paddingRight: 4,
        color: 'red',
    },
    button: {
        minWidth: 184,
        height: 32,
    },
    header: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
    },
    socials: {
        marginBottom: 16,
        justifyContent: 'flex-end',
    },
    social: {
        width: 4,
        height: 4,
        // borderRadius: 1000,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
};

export default Contact;