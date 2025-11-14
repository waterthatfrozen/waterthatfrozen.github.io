const education = [
    {
        degree:`Bachelor of Engineering (Digital Engineering), First-class Honors`,
        school: `<a href="https://www.siit.tu.ac.th/">Sirindhorn International Institute of Technology (SIIT), Thammasat University.</a>`,
        year: `August 2019 - May 2023`,
        gpa: `3.93/4.00`,
        detail: `- Major in Application Software Development. <br/>
        - Four-year continuous full scholarship recipient <br/>
        - Outstanding Activitiy Performance scholarship recipient <br/>
        - Vice president of Digital Engineering Student Committee, Class year 2019 (DE1 SIIT28)<br/>
        - Achieved first rank of class year in the curriculum duing academic year 2020, 2021, 2022.<br/>
        - Received Bhumibol Scholarship Academic Excellence Award of Academic Year 2022.`,
        link: null
    },{
        degree:`High School`,
        school: `Princess Chulaborn Science High School Trang`,
        year: `May 2016 - February 2019`,
        gpa: `3.71/4.00`,
        detail: `Science and Mathematics Program`,
        link: null
    }
];

const work = [
    {
        position: 'Software Engineer',
        company: 'Agoda Services Co., Ltd.',
        year: 'February 2025 - Present',
        detail: `- Joined the Payout Partner Experience team, revamping the payout system while ensuring system reliability at its highest.<br/>
                 - Rebuilt the AP Payout Processing system for virtual credit card flow and bank transfer flow to better support the scalability of the business for processing multi-billion-dollar volumes<br/>
                 - Rebuilt the payout channel migration flow to support the supplier's request to change their preferred channel while ensuring data integrity and timely transactions.<br/>
                 - Mentored and supported software engineer interns and contractors in the team on their assigned projects.`,
        link: null
    },
    {
        position: `Associate Software Engineer`,
        company: `Agoda Services Co., Ltd.`,
        year: `May 2023 - January 2025`,
        detail: `-  Joined in the Payout Expansion team, focusing on expanding payout system across multiproduct booking landscape and new business initiatives.<br/>
                 -	Built a payout flow to support the acceptance and expansion of virtual credit card usage to hotel suppliers in Japan.<br/>
                 -	Modified the current system to support variable payout date with various conditions based on demand of each supplier.<br/>
                 -	Improved internal financial backoffice operation system with modernized services and user interface for smoother agents' operation.<br/>
                 -	Integrated virtual credit card for payout usage to third-party vendors and activities suppliers with full reconciliation process.`,
        link: null
    },
    {
        position: `Software Engineer Intern`,
        company: `Agoda Services Co., Ltd.`,
        year: `January 2023 - April 2023`,
        detail: `-	Joined in the Fintech Payout team, facilitate correct and on-time payment from company to supplier with reconciliation ability.<br/>
                 -	Implemented database credentials rotation of legacy services with Hashicorp's Vault, improving the security of service and financial data.<br/>
                 -	Onboarded critical services in the domain to company's new private cloud architecture with Docker and Kubernetes cluster.<br/>
                 -	Conducted knowledge sharing session on private cloud to Fintech members and managers.`,
        link: null
    },
    {
        position: `Undergraduate Research Assistant`,
        company: `Thammasat University Smart Street Light Unit, AI Ready City Networking in RUN Project`,
        year: `June 2022 - December 2022`,
        detail: `Developed a web application for monitoring and controlling the smart lighting system in campus, and data analytics for more efficient energy usage and sufficient lighting in the campus, 
        under the supervision of supervision of Dr. Somrudee Deepaisarn and Prof. Dr. Virach Sornlertlamvanich.
        An international conference paper and an international journal article are published in this work.`,
        link: null
    },{
        position: `Undergraduate Research Assistant`,
        company: `Biomedical Image Processing Unit, SIIT, Thammasat University`,
        year: `June 2021 - July 2021`,
        detail: `Worked on Hemorrhage Segmentation using a thresholding method with Multi-Region Contrast Enhancement in Mobile Fundus Images`,
        link: null
    }
];

const publication = [
    {
        title: `Data-centric Smart Street Light Monitoring and Visualization Platform for Campus Management`,
        type: `International Journal Article`,
        journal: `Journal of Information and Communication Convergence Engineering 2023; 21(3): 216-224`,
        publisher: `Korea Institute of Information and Communication Engineering`,
        publishedDate: `September 2023`,
        doi: `10.56977/jicce.2023.21.3.216`,
        link: `https://www.jicce.org/journal/view.html?uid=1231`   
    },
    {
        title: `Automated Street Light Adjustment System on Campus with AI-Assisted Data Analytics`,
        type: `International Journal Article`,
        journal: `Sensors 2023, 23(4), 1853`,
        publisher: `Multidisciplinary Digital Publishing Institute (MDPI)`,
        publishedDate: `February 2023`,
        doi: `10.3390/s23041853`,
        link: `https://www.mdpi.com/1424-8220/23/4/1853`
    },{
        title: `Smart Street Light Monitoring and Visualization Platform for Campus Management`,
        type: `International Conference Paper`,
        journal: `2022 International Joint Symposium on Artificial Intelligence and Natural Language Processing`,
        publisher: `IEEE Xplore`,
        publishedDate: `November 2022`,
        doi: `10.1109/iSAI-NLP56921.2022.9960257`,
        link: `https://ieeexplore.ieee.org/document/9960257`
    }
]

const award = [
    {
        year: "2025",
        titles: [
            "Bhumibol Scholarship Academic Excellence Award, Graduate Class of Academic Year 2022",
        ]
    },
    {
        year: "2024",
        titles: [
            "Top student in the graduating class, Digital Engineering Curriculum, Academic Excellence Awards (Gold Medal)",
            "Highest rank of Senior class, Digital Engineering Curriculum, Academic Excellence Award"
        ]
    },
    {
        year: "2023",
        titles: [
            "Highest rank of Junior class, Digital Engineering Curriculum, Academic Excellence Award"
        ]
    },
    {
        year: "2022",
        titles: [
            "The Runner-Up Student Paper Award, The 17th International Joint Symposium on Artificial Intelligence and Natural Language Processing (iSAI-NLP 2022)",
            "Winner, SIIT Hackathon 2022, SIIT and Thairun",
            "Highest rank of Sophomore class, Digital Engineering Curriculum, Academic Excellence Award of Academic Year 2020"
        ]
    },{
        year: "2019",
        titles: [
            "Second Runner-up, SIIT Hackathon 2019",
            "Scholarship Recipient, SIIT 4 Year Continuous Scholarship (OSP: Outstanding Student Program)"
        ]
    },{
        year: "2018",
        titles: [
            "First Runner-up, National Software Contest 2018, Student Application Software Category",
            "First and Second Camp, POSN Computer Olympiad Camp, Prince of Songkhla University, Hat Yai Campus",
            "Silver Medal, Web Application Development Competition, National Finals of Student Arts and Crafts Fair 2018",
            "Project Presenter and Participant, Thailand-Japan Student Science Fair (TJ-SSF) 2018"
        ]
    },{
        year: "2017",
        titles: [
            "Participant in Japan-East Asia Network of Exchange Students and Youths (JENESYS2017)"
        ]
    }
]

const volunteerExperience = [
    {
        year: "2024",
        titles: [
            "Volunteer, Agoda Tech Camp Day 2024"
        ]
    },
    {
        year: "2023",
        titles: [
            "Instructor, SIIT Photo and Media Club Workshop 2023",
            "Guest Speaker, SIIT Insight Camp 2023",
            "Agoda Fintech CSR Day 2023"
        ]
    },{
        year: "2022",
        titles: [
            "Head of Event, SIIT-PCSHS Online Roadshow and Python Workshop 2022",
            "Head of Photographer, SIIT'30 First Meet 2022",
            "Head of Photographer, SIIT Insight Camp 2022",
            "Head Organizer, SIIT Photo Contest 2022: 30th Anniversary of SIIT",
            "Photographer, SIIT Leadership Camp 2022",
            "SIIT Booth Staff, Thammasat University Open House 2022",
            "Student Assistant, SIIT OSP Scholarship Central Examination 2022"
        ]
    },{
        year: "2021",
        titles: [
            "President, SIIT Media Club of Academic Year 2021",
            "Head of Student Assistant, SIIT OSP Scholarship Central Examination 2021",
            "Head of Event, SIIT Online Roadshow 2021 EP.1-2",
            "Curriculum Representative, SIIT In-Site Camp 2021"
        ]
    },{
        year: "2020",
        titles: [
            "President, SIIT Photo Club of Academic Year 2020",
            "Student Assistant, SIIT OSP Scholarship Central Examination 2020",
            "Head of Event, SIIT-PCSHS Online Talk Show 2020",
            "Photographer, 74th CU-TU Traditional Football Match"
        ]
    }
];

const skill = [
    {
        category: "Languages",
        items: [ "Thai (Native)", "English (IELTS 7.5)"]
    },{
        category: "Programming Languages",
        items: [ "JavaScript", "TypeScript", "Scala", "Kotlin", "C/C++", "C#", "Java", "Python", "HTML", "CSS", "SQL", "PHP", "MATLAB"]
    },{
        category: "Frameworks and Tools",
        items: [ "Git/GitHub/GitLab", "Gitlab CI", "Bootstrap", "Node.js", "Express.js", "jQuery", "MySQL", "MongoDB", "MS SQL Server", "Microsoft Azure", "React Native", "React", "SpringBoot", "Spark ETL", "Docker", "Kubernetes", "Hashicorp Vault", "JIRA", "Confluence", "Grafana", "Kafka"]
    },{
        category: "Other",
        items: ["Photography", "Video Editing", "Graphic Design", "Microsoft Office", "Adobe Photoshop", "Adobe Premiere Pro", "Figma", "Event Organization", "Public Relations", "Presentation", "Teaching", "Investigation"]
    }
];
