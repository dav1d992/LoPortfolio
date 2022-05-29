export type CareerEntry = {
    companyLogo: string;
    companyName: string;
    position: string;
    startDate: Date;
    endDate: Date;
    present: boolean;
    description?: string;
    techStackHeaderText?: string;
    techStack?: string[];
};

const defaultEntryValues = {
    present: false,
    endDate: new Date(),
}

export const workEntries: Array<CareerEntry> = [
    {
        ...defaultEntryValues,
        companyLogo: "https://about.bestseller.com/static/img/BESTSELLER-Logo.jpg",
        companyName: "Bestseller",
        position: "Fullstack Software Developer",
        present: true,
        description: "During my time here @Bestseller I've grown more than I could imagine. We've not only built various products from scratch, but also managed to do so with much sparring and considerations to keep the code quality at it's highests.",
        startDate: new Date("2020-12-01"),
        techStack: ["React", "ASP.NET Core", "TypeScript", "C#", "Next.js", "Kubernetes", "Terraform", "Azure", "Kafka"]
    },
    {
        ...defaultEntryValues,
        companyLogo: "https://www.au.dk/fileadmin/res/facebookapps/au_standard_logo.jpg",
        companyName: "Aarhus University",
        position: "Student Mentor",
        description: "As a part-time student mentor I'm helping my mentees out with homework, understanding subjects, Uni-Life or everything in between. This has improven my sense of understanding issues and providing pedagogical explanations on tough subjects.",
        present: true,
        startDate: new Date("2021-02-01"),
        techStackHeaderText: "Subjects that are usually mentioned",
        techStack: ["Software Architecture", "Software Design Patterns", "Web Development", "Object Oriented Programming", "IT Security"]
    },
    {
        ...defaultEntryValues,
        companyLogo: "data:image/png;base64,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",
        companyName: "Danske Bank",
        position: "Software Engineer Student Worker",
        startDate: new Date("2019-02-01"),
        endDate: new Date("2020-11-01"),
        description: "The first 5 months I worked as an intern, I was then hired as a student worker right after. I worked in the Anti Money Laundry sector in one of Danske Bank's High Performance Teams. I have been blessed to have such competent and skilled team mates to spar with.",
        techStack: ["Angular", "ASP.NET Core", "TypeScript", "C#", "HTML & CSS"]
    },
  ];
  
  export const educationEntries: Array<CareerEntry> = [
    {
        ...defaultEntryValues,
        companyLogo: "https://www.au.dk/fileadmin/res/facebookapps/au_standard_logo.jpg",
        companyName: "Software Technology (Bachelor)",
        position: "Graduate",
        present: false,
        description: "During my education I've studied and experimented with a vast variety of technologies expanding my domain knowledge of programming.",
        startDate: new Date("2017-02-01"),
        endDate:new Date("2020-07-01"),
        techStackHeaderText: "A handful of those technologies I studied",
        techStack: ["Software Design Patterns", "Web Development", "Object Oriented Programming", "Unit testing", "Database management" , "IT Security"]
    },
    {
        ...defaultEntryValues,
        companyLogo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxAODhAODg4QDg4OEQ8PDw4ODhAPDw8RFhoYGBkSGBgaHy0iGh0oHRQaIzQjKC0uMTExGiE3PDcwOyswMS4BCwsLDg4PGREQFi4gISIwMDkuLi4uMi4wMDAuLjAuLjIwLjAuMDAwLi4xMC4wMC4uLjAuMDAwLjAuMDAwLjAwMP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAAAQIFBgcEA//EAD0QAAICAQIDBAcDCwQDAAAAAAABAgMEERIFBiEHEzFRIkFhcYGRoTLB0RQjQlJTgpKTorHCFRczYmODsv/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBgX/xAAvEQACAgECBAQGAQUBAAAAAAAAAQIDEQQxEiFBURMiYZFxgaGx4fDRBSNSwfEU/9oADAMBAAIRAxEAPwDiSoiB9Mj4s2UwaKQ0imUUGSlRkpSGgQpSMFIUEAAKAAAAQpCABgApCMEIUpGAyFMgAFMshWQhoAAgCAQKgVGkZRopGDRk0CFBAUhopkoIUAFIUgAAKQAAAAAgIQoIACgjKZIUGWaMsFRAwGRlAIUgIVECBSlRAaIbAAMmgQoAKQFIaBACFKZKAUEIAUEAAICgAgIQoIACmSFIDQIGDJQCAAoBADSBClIU0YKUhopACGgZKAaIACAAFAAAAKQEABCApSAAAyCAoABCkABCgGQADRgpCmikBSFABSFBAUGwZKCYKUgBCjUgALqNSAApAAAAZANGSAFAAIUEAIUGWAyFAIAACFBSmjBQQpQCkKCFAAALkhQQFBQQAFBAAUEAAABMgAEIACFBQZBCFAABQCFAIc/yjytPiLk93dU16Kdm3c3J9dsV56ev1dDr56v2XxiuGxa01lbY56frdF1/dUTzaq2VdeY7ns0NMbreGeyWT5X2a4q8ci5e91r7ji8rk/DrzsfE7+7TIhZLcnXqpx0cV9nwaUvofp2gcs5t+TPJqi76nCCjCDW+tRWjjtfV6vV9NfE6biXzxb4WbXCymcZ7JJxknF67WvV5HGmNk48Suzy27P8AfQ9OonVVPhdCSyufdZ54/wCnaOcuTa8HHjfTOya7xQmrNnopp6SWiXrWnxRnk3k1Z1Mr75Trg5batm3Wen2pdU+mvT3pnf8AiONXn4cq9fzeRXGUJaa6a6SjLT2PRnH8y8UhwvAUaklPaqcePjo0vtPz0XX2vTzOEdVbKCgn5m9/T9+mT1T0VMLHa0uBLb1/fqdcq5DquyJwpumseh93bZNQlKdvi4RSSSSTWrfrenqOSfZvirxyLl73BfcclyDp/puO09XLvJzk3q3Jzlrq/M6pzvyxmzyrcmFbyKptOLg90oRSS2uPj009WpqNlkrHB28OOvLnj23MyqqhUrI0cTeHjtlZ9dvruz6ocj40sueOr7NldNdsp7obt8nJKPhpppBv4n3rs4xPVfc/dKD+481lHRtNNNNpprRpr1M9U7M8fZw2Ev2tllnye3/A6alW1R4vFfRbHDRyovm4eClu85z1Xp6nyy7OcReN9y98oL7j4+Gci497vbtuUK751QacPTjBR1b6eba+BwHaFkd5xK/1qGypfCK1+rZ6DyNj91w3HT8XGVj9u6Tkvo0YsldXUpuxtyx8up1qjRbdKtVJKOeffnjbHz36HEvs6xF0d9yftlD8DjuOck49FcHVdZOy26mmEZOLWspaPwXlqOYuS8zKy7siPdbbJ6x1sae1JRjr08kjhuU+HShxemiejlTbPfp1jurUm9H74m63Lh4vHzhZawc7VBSUHpsJvCee732O2f7bY37e/wDo/A6hzlwOGBfCqucpxnXGzdPTXVykmui/6r5nrc7VFxi31m2orz0Tf9kdG7U8KVluFsjunY7aorzlrHavnJnPS6iyViU5ZXP7HbXaWqNLlXBJrG3xX8nG8m8nxzqZ3XTnXBT2Q7vbrLT7T6p9OqXwZ+/NnJ+Pg4rvhdZOe+EIRnt2tt9fBeSZ3jhmPDEqoxI/owemnTXbpul8ZTX8R1jtZydKMer9pZOf8EdP8xXqLbL0k+Te3oS3SU06ZtxTklv6/rOmcu8Klm5VePFtRk9ZyX6EV1k/u97R3n/bXF/b3f0fgTsx4R3WPLKnH85f6MNV1VcX97X9MTl+BcdWXk5tceteNOuEH+snuUn/ABQfw0Gpvsc5eG8KO/uTR6WqNcfFinKe2fhn7LmdJ4fylXZxLIw7LJRrx471YnFTeu3brqtPCX0OfXZviPwyLn+9B/cde7UMfZnqen/LVXPX2rWH9oo7H2VY+zCnNrrZdLR+cYxiv77jds7FVG1WPmly9ev7gzRCnx5UOpPDfP03Sx8+5iXZxiLxvuXvlBfccPw7kyi/Py8ZW2dzixp0sTg5ynNJ6Pppp0l8j4+07J7ziE4fsa66/mnL/M7H2T423Fvta62Wxhr5qEV982HK2FPiOx80sLtl/wAIKNFmo8GNSSi3l98JrGPjjr0Os88cvU8OlRGqyc3arJS37fRUdqWmiXjq/kcnwPs5lZCNmXa6tyT7qMU7En+s30T9mjPv45Ssvj+NRLrCiuM5p+Ho7p/VuCOd514pLEwbbIycbJaV1yXRqU+mq9qWr+BmV9vDXCL80uvxfI1HS0cdtko+WPTpyXM4Z9m2IujyLk/Juv8AA6FzFg142XbRVKU4VyUVOWjk3tWuunTxbPgnJybcm5N9W29W35tkPZXXOL81nF8vyfn331zilCpR9c/hAAHY8oOQ4Px3JwpOWPa4KWjlBpSrn74vp8fE+CpJySb2ptJyf6K9bPR+/wCXPKr+Xk/gcLpqKScHLPZZPVp6nJuSsUMd3j2OW5I5knxGqx2VxhZU4xlKGuye5N6pPw8PDXyOr9rcILIx5JJTlXLe0urSlpHX6nYMLmjg+LW4UXRhHVycIU26yl59Y9X0Xiefc1caeflSv2uMElXXB/aVcddNfa22/ieTTVPx+NRcV6nv1l0f/N4bmpS5bffkeo8jqf8ApuLver2y01/U3S2r+HQ86584rPJz7U36GNKVVcfUlF6Sfvck/p5Hd+E828Nox6aXlx1qqrrf5q3xjFJ/o+aPNMa2FuVCzIe2uy6M7W9WlCUtZvp18GzWlg1ZOco43+vP7E1tkXVXVGae2efblz+Z9HBeYcrCb7ixqDesq5pTjJ+ej8H7Voz0/k7jsuIYzunBQnCx1y2tuMmlF6rXqvteBwvf8u+VX8vJ/A+6jm3hONVsotjGC1arrptTbfviuvtbMaj+6vLU898G9LF0Pz3xce2f52+R1btRhCOenBJSlVXKzT1y1ktX7dEvkj0DljH7rBxq9NGqYSa8pSW5/Vs8j47xN52XO+foRslFJdXsitIr5Jav26npGZzpw+NNipyU5xhNVxVdq1kovSOrj56F1Fc/CrrSy+pNJdX41trkkntl4/fyeZ8Yye/ybrk9e8tnNe5ybX00PaMOtY+NXB9FTVCL90Ir8DxPhbgr6u9e2pWQ3yabShuW56L2anqt3OPDJxlCeVFxmnGS7q7qn0a+yb1sJS4Ixi2l2+SOf9NnFeJOckm+7x6v7nQnzzxFvVZOifVLuaens8DkuzKLtz7rp+lKNc5Sl06zm49fj6Ry35Ty9/4v5eR+B+PLnGuHYuVnTjbGqq2VEaYqu1pxhH0pLpqtZSfiWySdc1Cpxyv8cdV2JVXKNsJWXqaT/wAs45PuznOOZ2zifDatek3lOS98Nsfrqctl4ELbabZdZY8pTgvVrKLjr9TzzmHmGm3i2LkVWbqKHSpT2yXRSbl0a18JHYuM88Ycca1416nfsariq7F6T6KXWKXTXX4HlnTZivhTzj2y3v7nthqKs2OUlhPv2S/2j6eC5v5VxHMnF614sK8at+ptuUrH/FFL3RRwXPmM83imJhwb/wCPWTX6ClJuUvhGOvyPz7PeO4eHi2LIvULJ2uWjhZJuCjFJtpP17j7uH8wYCz8vMsyY+nspoTrtelcYxcpfZ9ctfl7TpwSrtk4xflWFy64x+TlxwuojGcl5nl81yWXLHty9jtGRRGFHc12LH9Du65dPQSWi0TfVpHDcpctVYFlkq8pXd7BRcNIrweql0b9vzOlc/cejm5MVVLdj0x21y0a3Slo5S0fXyX7p8XKGfDFzqbrJba4uaslo3pGUZLXRdfFo1DSzVTfFjK5rHsjFmtqeoS4M4eFLO2d+R2ntdx+mLavU7KpfHbKP9pHZeSsXuuHY0fODsf8A7G5f5HWufuP4WZh93TkKdsbK7Ix7u2Oq6xfVx08JfQ5qjnDh1VMa4ZSbrrUIpVXddsdEvs+w5TjY9PCHC930/e52rlUtVOfGuaXVfP7Hm/NGT3uflWeKd00n/wBYvavpFHpvZ7j93wyjVaOzvLX+9J6fTQ8gnNybk+rbbfvZ6vwnm3h1GPTT+VLWqqut/mrurjFJ/o+w9WtjLw4xis/hHj/p04u2dk2lnu+7Pi5ZmruO8Rt/Ui61+64R/wADPa5Y1i0R9UrW371Fpf8A0zqPK3Mjw8yWRZFyjdvV0Y6btJPdujr60/vO+5PNfCcmvZfdGcXo9llF2sX5/Z6P2o42VzrujLhbSS29Fg71W13UThxKLblv6vJ5MD0e3J5eUZOMapSSbUe7yer9S8DzZs91dnHnytY7n5l1HhY86lns8mgQHU4EBCkKUpkFIaBCgAAAhdQQuoAKZBQaBkuoBQTUgBohBqAUajUhAAAAACAFIQAoAIQpQAQhkpk0DQKZKUFAAyZKCAoNAyUAoJqNQCggBCggAKCajUFKCEAKCAAAAmQAQgLgpAQhSggAICFBSmjABDRTJoAFMgoNAyUEwUEAGCgAZIAAMgAEBSggAwUhAClIUyQFIQAAAAoAABAQpCgpACFBClAKQAhTRgAGgZABoGSgFBCAGgZABsyQAFIAAACApQQEAAIClKQAhkpCkNYBSApCggAKAAQoIACggAKCAAoIACggAKCAAAAAAEBSkBACkKQhSgApCAhSGgUgAKQAEKACgAgBDQMlAKCAAoIACghACggAKAAUhSAgKQAFABACgAAhQAAAAAUAAAAAgABCgAEAAAAAAAAADIAAUAA0CAAAAAAgABQAAf/Z",
        companyName: "Systematic (Scrum Course)",
        position: "Participant",
        present: false,
        description: "Three day Scrum course which consisted of lectures and exercises regarding Scrum elements. From the course I've gained basic allround knowledge of Scrum. ",
        startDate: new Date("2018-03-01"),
        endDate:new Date("2018-04-01"),
        techStackHeaderText: "Topics that were explained:",
        techStack: ["Planning", "Sprints", "Retrospective", "Refinement", "Standup", "Review", "Scrum roles"]
    }
  ];


  export const additionalWorkEntries: Array<CareerEntry> = [
    {
        ...defaultEntryValues,
        companyLogo: "https://cloud.elgiganten.dk/resources/images/logo/partner_old.555562c08e.png",
        companyName: "Elgiganten",
        position: "Operations Worker",
        description: "During my time here @Bestseller I've grown more than I could imagine. We've not only built various products from scratch, but also managed to do so with much sparring and considerations to keep the code quality at it's highests.",
        startDate: new Date("2017-02-01"),
        endDate: new Date("2019-01-01"),
        techStack: ["React", "ASP.NET Core", "TypeScript", "C#", "Next.js", "Kubernetes", "Terraform", "Azure", "Kafka"]
    },
    {
        ...defaultEntryValues,
        companyLogo: "data:image/png;base64,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",
        companyName: "Stofa",
        position: "Customer Service Consultant",
        description: "As a part-time student mentor I'm helping my mentees out with homework, understanding subjects, Uni-Life or everything in between. This has improven my sense of understanding issues and providing pedagogical explanations on tough subjects.",
        startDate: new Date("2016-02-01"),
        endDate: new Date("2017-01-01"),
        techStackHeaderText: "Subjects that are usually mentioned",
        techStack: ["Software Architecture", "Software Design Patterns", "Web Development", "Object Oriented Programming", "IT Security"]
    },
    {
        ...defaultEntryValues,
        companyLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/54/TDC.svg/1200px-TDC.svg.png",
        companyName: "TDC",
        position: "IT Support",
        startDate: new Date("2014-01-01"),
        endDate: new Date("2014-09-01"),
        description: "The first 5 months I worked as an intern, I was then hired as a student worker right after. I worked in the Anti Money Laundry sector in one of Danske Bank's High Performance Teams. I have been blessed to have such competent and skilled team mates to spar with.",
        techStack: ["Angular", "ASP.NET Core", "TypeScript", "C#", "HTML & CSS"]
    },
  ];
  