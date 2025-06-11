export const experiencesHome = [
  {
    id: 1,
    role: "Software Engineer II",
    company: "Bukalapak",
    period: "May 2021 - April 2025",
    companyLogo: "/assets/logo-bukalapak.svg",
    description:
      "Develop and maintained Mitra Bukalapak using Android, Kotlin, Vue.js, JavaScript, TypeScript, Go, and Ruby. Building system auto refund transactions by live chat complaints to decrease 42% ticket complaints refund transactions each month",
  },
  {
    id: 2,
    role: "Software Engineer Android",
    company: "PT Nostra Solusi Teknologi",
    period: "September 2020 - April 2021",
    companyLogo: "/assets/nostra-logo.png",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB. Improved application performance by 40%.",
  },
];

export const projectsHome = [
  {
    id: 1,
    title: "Bukalapak Marketplace",
    description: `An online platform that helps SMEs start their own business with 
        minimum capital and greater market exposure across the country!`,
    image: "/assets/bukalapak-mp.webp",
    technologies: ["Android", "Kotlin", "Java", "Firebase"],
    project:
      "https://play.google.com/store/apps/details?id=com.bukalapak.android&hl=en",
  },
  {
    id: 2,
    title: "Mitra Bukalapak",
    description: `An online service that provides individual shops or agents with access 
        to better distributors and diversifies their business offerings with a variety of virtual products.`,
    image: "/assets/bukalapak-mitra.webp",
    technologies: [
      "Android",
      "Kotlin",
      "Java",
      "Golang",
      "Vuejs",
      "Javascript",
      "Typescript",
      "Ruby",
      "MongoDB",
      "PostgresSQL",
      "MySQL",
    ],
    project:
      "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=en",
  },
  {
    id: 3,
    title: "Cartula",
    description:
      "An online health consultation / online telemedicine application that has a consultation feature with a doctor via voice call and video call.",
    image: "/assets/cartula-app.webp",
    technologies: ["Android", "Kotlin", "Firebase"],
    project: "https://youtu.be/wjzhpUutyfo?si=rNsVedJI2Cfv0C9d",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Software Engineer II",
    company: "Bukalapak",
    location: "South Jakarta",
    period: "May 2021 - Present",
    description: `Bukalapak is an Indonesian e-commerce company that has more than 110 million
        users and 15 million MSMEs partners that utilize our platforms
        and technologies for commercial activities`,
    achievements: [
      `Reduce ~3000 ANR cause frozen frame on Mitra Bukalapak apps
        Homepage by tune up rendering time process and execute long
        running task on background thread.`,
      `Reduce daily login complaints by 40% because many users don't
        receive their OTP SMS by giving users 4 login methods: login
        PIN, password, OTP WhatsApp, and OTP SMS.`,
      `Optimize authentication to prevent account takeover by
        enabling the user that able reject the authentication process
        from an unknown device.`,
      `Building system auto refund transactions by live chat
        complaints to decrease 42% ticket complaints refund
        transactions each month.`,
      `Prevent up to 10% fraud and account take over cases by
        building push notification OTP auth and the user able to
        reject the login session.`,
      `Enhancement of Mitra Bukalapak complaints feature by reducing
        CPU utilization frontend service from ~14% to ~5% by moving
        out ticket management process from the frontend that called
        3rd party directly into our backend service.`,
    ],
  },
  {
    id: 2,
    role: "Software Engineer Android",
    company: "PT Nostra Solusi Teknologi",
    location: "South Jakarta",
    period: "Sept 2020 - April 2021",
    description: `Nostratech is a technology consulting company with expertise 
          in building digital products and systems`,
    achievements: [
      `Increases user experience during consultation online by enable 
        video call session is not killed/ended when user close their apps.`,
      `Contribute to building Cartula Maternity apps to helps tracking pregnancy process.`,
      `Build a new culture by writing a unit test to increase code quality and 
        minimize a bug during the development process`,
    ],
  },
  {
    id: 3,
    role: "Software Engineer Android",
    company: "PT Twiscode Pte Ltd",
    location: "Surabaya",
    period: "June 2019 - August 2020",
    description: `An agency that focuses on digital design solutions with capabilities 
      of building responsive user-friendly web designs, and high-utility mobile applications`,
    achievements: [
      `Contribute to building Riliv apps. Riliv is an online mental health counseling to 
        help people who are struggling with personal problems`,
      `Contribute on building Amartha apps. Amartha is a micro-finance to connect 
        rural micro-enterprises run by strong women with affordable capital access.`,
    ],
  },
  {
    id: 4,
    role: "Jr. C++ Game Developer",
    company: "Gameloft",
    location: "Yogyakarta",
    period: "Sept 2016 - Nov 2016",
    description: "Started as an intern and workon game development using C++",
    achievements: [
      `Learning shaders by using C++`,
      `Learning openGL ES and integrate into example game on Android`,
      `Fix unintended object size on game ninja bounce`,
    ],
  },
];

export const blog = [
  "https://derangga.medium.com/upgrade-target-sdk-android-strategy-1bec32677bd5",
  "https://derangga.medium.com/kiwi-flutter-ioc-container-6bc1c60aa4ef",
  "https://derangga.medium.com/flutter-clean-architecture-bloc-streams-89fc2c9146f",
  "https://derangga.medium.com/room-for-local-storage-in-android-apps-542462e9864d",
  "https://derangga.medium.com/authenticate-phone-number-dengan-firebase-981b929e32b8",
  "https://derangga.medium.com/push-notification-menggunakan-fcm-firebase-cloud-messaging-9d2a69a43c3c",
];
