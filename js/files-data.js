const tagPriority = ["Midterm", "Final", "Project", "Lab", "Report", "Review", "Exercise", "Cheat Sheet", "Other"];
const tagColor = ["warning", "danger", "pink", "success", "primary", "info", "orange", "purple", "secondary"];

const fileLists = [
    // {
    //     id: "y1t1",
    //     title: "SIIT-DE: Year 1 Semester 1, Year 2019",
    //     code: "SIITDE-Y1T12019",
    //     list: [
    //         { code: "ITS100", fileName: "Midterm Lab Cheat Sheet", path: "pdf/ITS100-Midterm-Cheat-Sheet-Lab.pdf", tag: ["Midterm", "Lab", "Cheat Sheet"] },
    //         { code: "ITS100", fileName: "Midterm Lecture Cheat Sheet", path: "pdf/ITS100-Midterm-Cheat-Sheet-Lecture.pdf", tag: ["Midterm", "Cheat Sheet"] },
    //         { code: "ITS100", fileName: "Final Lab Cheat Sheet", path: "pdf/ITS100-Final-Cheat-Sheet-Lab.pdf", tag: ["Final", "Lab", "Cheat Sheet"] },
    //         { code: "ITS100", fileName: "Final Lecture Cheat Sheet", path: "pdf/ITS100-Final-Cheat-Sheet-Lecture.pdf", tag: ["Final", "Cheat Sheet"] },
    //         { code: "MTS252", fileName: "Midterm Cheat Sheet", path: "pdf/MTS252-Midterm-Cheat-Sheet.pdf", tag: ["Midterm", "Cheat Sheet"] },
    //         { code: "MTS252", fileName: "Final Cheat Sheet", path: "pdf/MTS252-Final-Cheat-Sheet.pdf", tag: ["Final", "Cheat Sheet"] }
    //     ]
    // },{
    //     id: "y1t2",
    //     title: "SIIT-DE: Year 1 Semester 2, Year 2019",
    //     code: "SIITDE-Y1T22019",
    //     list: [
    //         { code: "DES102", fileName: "Beginner's Guide", path: "pdf/DES102-DES103-Survival-Kit.pdf", tag: ["Other"] },
    //         { code: "DES102", fileName: "Midterm Exercise", path: "pdf/DES102-Midterm-Exercise.pdf", tag: ["Midterm", "Exercise"] },
    //         { code: "DES102", fileName: "Final Exercise", path: "pdf/DES102-Final-Exercise.pdf", tag: ["Exercise", "Final"] },
    //         { code: "GTS117", fileName: "Midterm Summary", path: "pdf/GTS117-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
    //         { code: "GTS117", fileName: "Midterm Exercise", path: "pdf/GTS117-Midterm-Exercise.pdf", tag: ["Exercise", "Midterm"] },
    //         { code: "GTS117", fileName: "Final Exercise", path: "pdf/GTS117-Final-Exercise.pdf", tag: ["Exercise", "Final"] },
    //     ]
    // },
    {
        id: "y2t1",
        title: "SIIT-DE: Year 2 Semester 1, Year 2020",
        code: "SIITDE-Y2T12020",
        list: [
            // { code: "DES221", fileName: "Midterm Exercise", path: "pdf/DES221-Midterm-Exercise.pdf", tag: ["Exercise", "Midterm"] },
            // { code: "DES221", fileName: "Final Exercise", path: "pdf/DES221-Final-Exercise.pdf", tag: ["Exercise", "Final"] },
            { code: "DES221", fileName: "Midterm Summary", path: "pdf/DES221-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES221", fileName: "Final Summary", path: "pdf/DES221-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "GTS210", fileName: "Midterm Summary", path: "pdf/GTS210-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "GTS210", fileName: "Final Summary", path: "pdf/GTS210-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "GTS231", fileName: "Midterm Summary", path: "pdf/GTS231-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "GTS231", fileName: "Final Summary", path: "pdf/GTS231-Final-Summary.pdf", tag: ["Review", "Final"] },
        ]
    },{
        id: "y2t2",
        title: "SIIT-DE: Year 2 Semester 2, Year 2020",
        code: "SIITDE-Y2T22020",
        list: [
            { code: "DES227", fileName: "Lecture Summary", path: "pdf/DES227-Lecture-Summary.pdf", tag: ["Review"] },
            { code: "DES232", fileName: "Midterm Summary", path: "pdf/DES232-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES232", fileName: "Final Summary", path: "pdf/DES232-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "EES370", fileName: "Lab 02 Report", path: "pdf/EES370-Lab02-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "EES370", fileName: "Lab 03 Report", path: "pdf/EES370-Lab03-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "EES370", fileName: "Lab 04 Report", path: "pdf/EES370-Lab04-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "EES370", fileName: "Lab 05 Report", path: "pdf/EES370-Lab05-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "EES370", fileName: "Lab 06-08 Report", path: "pdf/EES370-Lab06-07-08-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "EES370", fileName: "Lab 09 Report", path: "pdf/EES370-Lab09-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "EES370", fileName: "Lab 10 Report", path: "pdf/EES370-Lab10-Report-Group-12-Section-2.pdf", tag: ["Lab", "Report"] },
            { code: "IES302", fileName: "Lecture Summary", path: "pdf/IES302-Lecture-Summary.pdf", tag: ["Review"] },
        ]
    },{
        id: "y3t1",
        title: "SIIT-DE: Year 3 Semester 1, Year 2021",
        code: "SIITDE-Y3T12021",
        list: [
            { code: "CSS322", fileName: "Midterm Summary", path: "pdf/CSS322-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "CSS322", fileName: "Final Summary", path: "pdf/CSS322-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "CSS322", fileName: "Project 1 Report", path: "pdf/CSS322-Project1-Report.pdf", tag: ["Project", "Report"] },
            { code: "CSS322", fileName: "Project 2 Report", path: "pdf/CSS322-Project2-Report.pdf", tag: ["Project", "Report"] },
            { code: "CSS325", fileName: "Midterm Summary", path: "pdf/CSS325-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "CSS325", fileName: "Final Summary", path: "pdf/CSS325-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "CSS325", fileName: "Project Report", path: "pdf/CSS325-Project-Report.pdf", tag: ["Project", "Report"] },
            { code: "CSS325", fileName: "Project Presentation", path: "pdf/CSS325-Project-Presentation.pdf", tag: ["Project", "Other"] },
            { code: "DES331", fileName: "Midterm Summary", path: "pdf/DES331-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES331", fileName: "Final Summary", path: "pdf/DES331-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "DES426", fileName: "Lecture Summary", path: "pdf/DES426-Lecture-3-8-Summary.pdf", tag: ["Review"] }
        ]
    },{
        id: "y3t2",
        title: "SIIT-DE: Year 3 Semester 2, Year 2021",
        code: "SIITDE-Y3T22021",
        list: [
            { code: "DES329", fileName: "Chapter 1-2 Summary", path: "pdf/DES329-Summary-Chapter-1-2-pdf.pdf", tag: ["Review"] },
            { code: "DES329", fileName: "Midterm Summary", path: "pdf/DES329-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES329", fileName: "Final Summary", path: "pdf/DES329-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "DES332", fileName: "Midterm Summary", path: "pdf/DES332-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES332", fileName: "Final Summary", path: "pdf/DES332-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "DES332", fileName: "Project Report", path: "pdf/DES332-Project-Report.pdf", tag: ["Project", "Report"] },
            { code: "DES352", fileName: "All Labs Summary", path: "pdf/DES352-All-Lab-Summary.pdf", tag: ["Lab", "Review"] },
            { code: "DES421", fileName: "Project Report", path: "pdf/DES421-Project-Report.pdf", tag: ["Project", "Report"] },
            { code: "DES421", fileName: "Literature Review Presentation", path: "pdf/DES421-Literature-Review-Presentation.pdf", tag: ["Project", "Other"] },
            { code: "DES429", fileName: "Midterm Summary", path: "pdf/DES429-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES429", fileName: "Final Summary", path: "pdf/DES429-Final-Summary.pdf", tag: ["Review", "Final"] },
        ]   
    },{
        id: "y3t3",
        title: "SIIT-DE: Year 3 Semester 3, Year 2021",
        code: "SIITDE-Y3T32021",
        list: [
            { code: "DES487", fileName: "General Food Science Summary", path: "pdf/DES487-Lecture-Summary.pdf", tag: ["Review"] },
        ]
    },{
        id: "y4t1",
        title: "SIIT-DE: Year 4 Semester 1, Year 2022",
        code: "SIITDE-Y4T12022",
        list: [
            { code: "DES400", fileName: "Senior Project: DS1 Project Concept", path: "pdf/DES400-SD2-DS1-ProjectConcept.pdf", tag: ["Project", "Report"] },
            { code: "DES400", fileName: "Senior Project: DS2 Requirement Specification", path: "pdf/DES400-SD2-DS2-RequirementSpec.pdf", tag: ["Project", "Report"] },
            { code: "DES400", fileName: "Senior Project: DS3 Design Specification", path: "pdf/DES400-SD2-DS3-DesignSpec.pdf", tag: ["Project", "Report"] },
            { code: "DES400", fileName: "Senior Project: Final Presentation", path: "pdf/DES400-SD2-DS3-DesignSpec-Presentation.pdf", tag: ["Project", "Other"] },
            { code: "DES423", fileName: "Midterm Lecture Note", path: "pdf/DES423-Midterm-Lecture.pdf", tag: ["Review", "Midterm"]},
            { code: "DES423", fileName: "Final Summary", path: "pdf/DES423-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "DES424", fileName: "Midterm Summary", path: "pdf/DES424-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES424", fileName: "Final Summary", path: "pdf/DES424-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "DES424", fileName: "Midterm Project Report", path: "pdf/DES424-Midterm-Project-Report.pdf", tag: ["Project", "Report", "Midterm"] },
            { code: "DES424", fileName: "Final Project Report", path: "pdf/DES424-Final-Project-Report.pdf", tag: ["Project", "Report", "Final"] },
            { code: "DES424", fileName: "Final Project Presentation", path: "pdf/DES424-Final-Project-Presentation.pdf", tag: ["Project", "Other", "Final"] },
            { code: "DES427", fileName: "Midterm Summary", path: "pdf/DES427-Midterm-Summary.pdf", tag: ["Review", "Midterm"] },
            { code: "DES427", fileName: "Final Summary", path: "pdf/DES427-Final-Summary.pdf", tag: ["Review", "Final"] },
            { code: "DES433", fileName: "Lecture Summary", path: "pdf/DES433-Lecture-Summary.pdf", tag: ["Review"] },
        ]
    },
    // {
    //     id: "y4t2",
    //     title: "SIIT-DE: Year 4 Semester 2, Year 2022",
    //     code: null,
    //     list: [{code: "", fileName: "No file for this semester&nbsp;", path: "#", tag: [""]}]
    // }
]

// For reverse chronological order
// fileLists.reverse();

fileLists.forEach((fileList) => {
    fileList.list.forEach((file) => {
        file.tag.sort((a, b) => {
            return tagPriority.indexOf(a) - tagPriority.indexOf(b);
        });
    });
});