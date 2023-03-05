const tagPriority = ["Midterm", "Final", "Project", "Lab", "Report", "Review", "Presentation", "Other"];
const tagColor = ["warning", "danger", "orange", "success", "primary", "info", "purple", "secondary"];

const videoLists = [
    {
        id: "y1t2",
        title: "SIIT-DE: Year 1 Semester 2, Year 2020",
        midterm: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7OddrsqASBTSB-sO-C8lTx6",
        final: "",
        list: [
            { code: "DES102", videoName: "Midterm Part 1", path:"https://youtu.be/9eVjfWAz5-U", tag: ["Midterm"] },
            { code: "DES102", videoName: "Midterm Part 2", path:"https://youtu.be/HKuY9-ZW93Q", tag: ["Midterm"] }
        ]
    },{
        id: "y2t1",
        title: "SIIT-DE: Year 2 Semester 1, Year 2020",
        midterm: "",
        final: "",
        list: [
            { code: "GTS231", videoName: "Project Presentation", path: "https://youtu.be/IZEX7XzF868", tag: ["Project", "Presentation"] },
        ]
    },{
        id: "y2t2",
        title: "SIIT-DE: Year 2 Semester 2, Year 2020",
        midterm: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7OqOxMD_VLMJL0SaS7ITS8f",
        final: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7PeRUcmcROkHLvzsnCgw0WP",
        list: [
            { code: "CSS225", videoName: "Midterm Part 1", path: "https://youtu.be/3U8VWvU6S7E", tag: ["Midterm"] },
            { code: "CSS225", videoName: "Midterm Part 2", path: "https://youtu.be/IV8j6W9XPLE", tag: ["Midterm"]},
            { code: "DES229", videoName: "Midterm", path: "https://youtu.be/fq2g3hLzF_U", tag: ["Midterm"]},
            { code: "DES232", videoName: "Midterm Part 1", path: "https://youtu.be/lROVbt1ev5M", tag: ["Midterm"]},
            { code: "DES232", videoName: "Midterm Part 2", path: "https://youtu.be/1BhJu7u_z7U", tag: ["Midterm"]},
            { code: "IES302", videoName: "Midterm Part 1", path: "https://youtu.be/7C0lLpNfXMs", tag: ["Midterm"]},
            { code: "IES302", videoName: "Midterm Part 2", path: "https://youtu.be/9Vgpt8kqkJY", tag: ["Midterm"]},
            { code: "CSS221", videoName: "Final Part 1", path: "https://youtu.be/SJz4C4Tnpog", tag: ["Final"]},
            { code: "CSS221", videoName: "Final Part 2", path: "https://youtu.be/F3G3c0vuE0w", tag: ["Final"]},
            { code: "CSS225", videoName: "Final", path: "https://youtu.be/AlJC2482i78", tag: ["Final"]},
            { code: "DES227", videoName: "Final", path: "https://youtu.be/oarRC6suNJc", tag: ["Final"]},
            { code: "DES229", videoName: "Final", path: "https://youtu.be/elKgy0u-QfA", tag: ["Final"]},
            { code: "DES232", videoName: "Final Part 1", path: "https://youtu.be/8TbGEQZvRwI", tag: ["Final"]},
            { code: "DES232", videoName: "Final Part 2", path: "https://youtu.be/vReRvOKcpEw", tag: ["Final"]},
            { code: "IES302", videoName: "Final", path: "https://youtu.be/aQNCDIGJsXo", tag: ["Final"]},
            { code: "DES229", videoName: "Prototype Presentation", path: "https://youtu.be/sgEfKTLMXR4", tag: ["Project", "Presentation"]}
        ]
    },{
        id: "y3t1",
        title: "SIIT-DE: Year 3 Semester 1, Year 2021",
        midterm: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7OugK-hGTVgXq2PlTsKZsGK",
        final: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7OSS9edJ0j8tnFHuXMK92tX",
        list: [
            { code: "CSS322", videoName: "Midterm Part 1", path: "https://youtu.be/mll4Mj11kA8", tag: ["Midterm"]},
            { code: "CSS322", videoName: "Midterm Part 2", path: "https://youtu.be/818Ch98SpDs", tag: ["Midterm"]},
            { code: "CSS322", videoName: "Midterm Part 3", path: "https://youtu.be/C_dxepnzR94", tag: ["Midterm"]},
            { code: "CSS324", videoName: "Midterm", path: "https://youtu.be/vrHk2cXPU08", tag: ["Midterm"]},
            { code: "CSS325", videoName: "Midterm Part 1", path: "https://youtu.be/c43Ljzb3CQU", tag: ["Midterm"]},
            { code: "CSS325", videoName: "Midterm Part 2", path: "https://youtu.be/yuzJx-TvYwU", tag: ["Midterm"]},
            { code: "DES331" , videoName: "Midterm Part 1", path: "https://youtu.be/RcOrxbvjSU0", tag: ["Midterm"]},
            { code: "DES331" , videoName: "Midterm Part 2", path: "https://youtu.be/O3MPk7TeQpw", tag: ["Midterm"]},
            { code: "CSS326", videoName: "Lab Beginner's Guide Part 1", path: "https://youtu.be/JxymZrCL2jA", tag: ["Lab"]},
            { code: "CSS326", videoName: "Lab Beginner's Guide Part 2", path: "https://youtu.be/l2ZfiT3XCR4", tag: ["Lab"]},
            { code: "CSS322", videoName: "Final Part 1", path: "https://youtu.be/tr-pZNZlbKo", tag: ["Final"]},
            { code: "CSS322", videoName: "Final Part 2", path: "https://youtu.be/tVN1p7Dd0qQ", tag: ["Final"]},
            { code: "CSS322", videoName: "Final Part 3", path: "https://youtu.be/f4u9tmvWQu8", tag: ["Final"]},
            { code: "CSS324", videoName: "Final Part 1", path: "https://youtu.be/m87lXVG7o88", tag: ["Final"]},
            { code: "CSS324", videoName: "Final Part 2", path: "https://youtu.be/63oStH1b52M", tag: ["Final"]},
            { code: "CSS325", videoName: "Final Part 1", path: "https://youtu.be/qtG-82axcN8", tag: ["Final"]},
            { code: "CSS325", videoName: "Final Part 2", path: "https://youtu.be/xOSkJhSySfY", tag: ["Final"]},
            { code: "DES331", videoName: "Final Part 1", path: "https://youtu.be/X67JUB4ObTM", tag: ["Final"]},
            { code: "DES331", videoName: "Final Part 2", path: "https://youtu.be/8ilGaybOIvE", tag: ["Final"]},
            { code: "DES331", videoName: "Final Part 3", path: "https://youtu.be/sEC_KNnhpMA", tag: ["Final"]},
            { code: "CSS325", videoName: "EATERIO Final Presentation", path: "https://youtu.be/bWRmjVOXv8g", tag: ["Project", "Presentation"]}
        ]
    },{
        id: "y3t2",
        title: "SIIT-DE: Year 3 Semester 2, Year 2021",
        midterm: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7PXFI7XBRwnwLoP85fFeopm",
        final: "https://www.youtube.com/playlist?list=PLZ6tijhd0F7NdJwWcGRHTryMpQECbPW0p",
        list: [
            { code: "DES332", videoName: "Midterm", path: "https://youtu.be/t11e2d2MdOo", tag: ["Midterm"]},
            { code: "DES329", videoName: "Midterm", path: "https://youtu.be/_uxBH3ayWh0", tag: ["Midterm"]},
            { code: "DES429", videoName: "Midterm", path: "https://youtu.be/x6BnkustZSo", tag: ["Midterm"]},
            { code: "DES332", videoName: "Final", path: "https://youtu.be/LshQso03d2Y", tag: ["Final"]},
            { code: "DES329", videoName: "Final", path: "https://youtu.be/W4hGU9tSI8o", tag: ["Final"]},
            { code: "DES429", videoName: "Final", path: "https://youtu.be/ityg-yYrn0o", tag: ["Final"]},
            { code: "DES422", videoName: "Final Project Presentation", path: "https://youtu.be/FX8R-0OA_JE", tag: ["Project", "Presentation"]},
            { code: "DES332", videoName: "Final Project Presentation", path: "https://youtu.be/oTujbHoEt2g", tag: ["Project", "Presentation"]},
        ]   
    }
]

// For reverse chronological order
// fileLists.reverse();

videoLists.forEach((videoList) => {
    videoList.list.forEach((video) => {
        video.tag.sort((a, b) => {
            return tagPriority.indexOf(a) - tagPriority.indexOf(b);
        });
    });
});