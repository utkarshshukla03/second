import React from 'react';
import ti from '../../assets/icons/images.jpeg';
import lpcps from '../../assets/icons/lpcps.jpeg';
import bal from '../../assets/icons/bal.png';

export interface EducationProps {}

const educationData = [
    {
        college: "Thapar Institute Of Engineering & Technology, Patiala India",
        course: "Master Of Computer Application",
        duration: "2024-2025",
        icon: ti,
    },
    {
        college: "Lucknow Public College Of Professional Studies, Lucknow India",
        course: "Bachelor of Computer Application",
        duration: "2021-2024",
        icon: lpcps,
    },
    {
        college: "Bal Vidya Mandir Senior Secondary School, (CBSE) Lucknow India",
        course: "Intermediate (Non-Medical)",
        duration: "2020-2021",
        icon: bal,
    },
];

const Education: React.FC<EducationProps> = () => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginBottom: 32 }}>Education</h1>
            {educationData.map((edu, idx) => (
                <div key={idx} style={styles.eduCard}>
                    <div style={styles.eduIcon}>
                        <img src={edu.icon} alt="Education Icon" style={{ width: 32, height: 32 }} />
                    </div>
                    <div style={styles.eduContent}>
                        <div style={styles.eduHeaderRow}>
                            <h3 style={styles.collegeName}>{edu.college}</h3>
                            <span style={styles.duration}>{edu.duration}</span>
                        </div>
                        <ul style={styles.courseList}>
                            <li style={styles.courseItem}>{edu.course}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    eduCard: {
        border: '2px solid #bdbdbd',
        borderRadius: 10,
        background: 'rgba(255,255,255,0.85)',
        padding: 24,
        marginBottom: 32, // More space between boxes
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 24,
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
        minHeight: 90,
    },
    eduIcon: {
        width: 40,
        height: 40,
        marginRight: 16,
        marginTop: 4,
        fontSize: 32,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    eduContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    eduHeaderRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 4,
        gap: 16,
    },
    collegeName: {
        margin: 0,
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 1.2,
        flex: 1,
        wordBreak: 'break-word',
    },
    duration: {
        margin: 0,
        fontWeight: 600,
        fontSize: 16,
        color: '#444',
        whiteSpace: 'nowrap',
        alignSelf: 'flex-start',
        minWidth: 90,
        textAlign: 'right',
    },
    courseList: {
        margin: 0,
        marginTop: 6,
        paddingLeft: 18,
    },
    courseItem: {
        fontSize: 16,
        margin: 0,
        padding: 0,
        color: '#222',
    },
};

export default Education;