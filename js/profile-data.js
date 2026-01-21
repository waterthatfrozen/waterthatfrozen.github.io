const education = [
    {
        degree:`Master of Science in Electrical and Computer Engineering`,
        school: `<a href="https://www.cmu.edu/ece/">Carnegie Mellon University</a>`,
        year: `January 2026 - Present`,
        detail: `Royal Thai Government Scholarship Recipient (Under Ministry of Higher Education, Science, Research and Innovation)`,
        link: null
    },
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
        year: 'February 2025 - December 2025',
        detail: `- Modernized the AP Payout system to increase scalability and processing capacity for processing financial transactions of more than eighteen billion dollars per year.<br/>
                 - Transformed payout channel migration flow to handle supplier's request to change their preferred channel, reduced operational wait time and increased data integrity.<br/>
                 - Mentored software engineer interns and contractors on assigned projects, ensuring timely and quality delivery.`,
        link: null
    },
    {
        position: `Associate Software Engineer`,
        company: `Agoda Services Co., Ltd.`,
        year: `May 2023 - January 2025`,
        detail: `- Implemented a simplified virtual credit card usage flow for Japanese accommodation suppliers, increasing virtual card adoption rate by suppliers in Japan and rebates income.<br/>
                 - Onboarded variable payout date feature to facilitate supplier's demand, enhancing system's flexibility.<br/>
                 - Integrated virtual credit card for payout usage to third-party vendors and activities suppliers with a reconciliation process.`,
        link: null
    },
    {
        position: `Software Engineer Intern`,
        company: `Agoda Services Co., Ltd.`,
        year: `January 2023 - April 2023`,
        detail: `- Implemented database credentials rotation of legacy services with Vault, improving the company's financial processing system and data.<br/>
                 - Onboarded critical services in domain to the company's new private cloud architecture with Docker and Kubernetes clusters, improving system's reliability and redundancy.`,
        link: null
    },
    {
        position: `Undergraduate Research Assistant`,
        company: `Thammasat University Smart Street Light Unit, AI Ready City Networking in RUN Project`,
        year: `June 2022 - December 2022`,
        detail: `- Developed a web application to monitor and control the lighting system on campus, providing safety to residents and easier maintenance to university staff.<br/>
                 - Integrated a data collection and analytics system to predict more efficient usage, reducing electricity cost and maintenance time.<br/>
                 - Published the research in 2 international journals and 1 international conference.`,
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
