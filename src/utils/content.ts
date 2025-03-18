import { ProjectCardProps } from "../components/ProjectCard";
import { WorkExperienceProps } from "../components/WorkExperienceItem";

export const workExperience: WorkExperienceProps[] = [
  {
    companyLogo: "/assets/logo-bukalapak.svg",
    company: "Bukalapak",
    companyUrl: "https://www.bukalapak.com/",
    startDate: "May 2021",
    endDate: "December 2024",
    companyTextColor: "text-[#E31F52]",
    role: "Software Engineer II (Medior)",
    companyDescription: `An Indonesian e-commerce company that has more than 110 million
                users and 15 million MSMEs partners that utilize our platforms
                and technologies for commercial activities`,
    archievement: [
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
    companyLogo: "/assets/nostra-logo.png",
    companyUrl: "https://nostratech.com/",
    logoScale: "scale-100",
    company: "PT Nostra Solusi Teknologi",
    startDate: "September 2020",
    endDate: "April 2021",
    companyTextColor: "text-lime-700",
    role: "Android Engineer",
    companyDescription: `Nostratech is a technology consulting company with expertise 
              in building digital products and systems`,
    archievement: [
      `Increases user experience during consultation online by enable 
        video call session is not killed/ended when user close their apps.`,
      `Contribute to building Cartula Maternity apps to helps tracking pregnancy process.`,
      `Build a new culture by writing a unit test to increase code quality and 
        minimize a bug during the development process`,
    ],
  },
  {
    company: "PT Twiscode Pte Ltd",
    companyUrl: "https://twiscode.com/",
    startDate: "June 2019",
    endDate: "August 2020",
    role: "Android Engineer",
    companyDescription: `An agency that focuses on digital design solutions with capabilities 
      of building responsive user-friendly web designs, and high-utility mobile applications`,
    archievement: [
      `Contribute to building Riliv apps. Riliv is an online mental health counseling to 
        help people who are struggling with personal problems`,
      `Contribute on building Amartha apps. Amartha is a micro-finance to connect 
        rural micro-enterprises run by strong women with affordable capital access.`,
    ],
  },
];

export const project: ProjectCardProps[] = [
  {
    name: "Bukalapak Marketplace",
    image: "/assets/bukalapak-mp.webp",
    description: `An online platform that helps SMEs start their own business with 
        minimum capital and greater market exposure across the country!`,
    onclick: () => {
      window.open(
        "https://play.google.com/store/apps/details?id=com.bukalapak.android&hl=en",
        "_blank"
      );
    },
  },
  {
    name: "Mitra Bukalapak",
    image: "/assets/bukalapak-mitra.webp",
    description: `An online service that provides individual shops or agents with access 
        to better distributors and diversifies their business offerings with a variety of virtual products.`,
    onclick: () => {
      window.open(
        "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=en",
        "_blank"
      );
    },
  },
  {
    name: "Riliv App",
    image: "/assets/riliv-app.webp",
    description: `An online mental health counseling to help people who are struggling with
        personal problems`,
    onclick: () => {
      window.open(
        "https://play.google.com/store/apps/details?id=nozero.apps1&hl=en",
        "_blank"
      );
    },
  },
  {
    name: "Amartha Investor App",
    image: "/assets/amartha.webp",
    description: `Amartha is a micro-finance to connect rural micro-enterprises run by strong women
        with affordable capital access.`,
    onclick: () => {
      window.open(
        "https://play.google.com/store/apps/details?id=com.amartha.investor&hl=en",
        "_blank"
      );
    },
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
