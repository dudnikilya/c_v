const themeButton = document.querySelector(".theme-button");
const languageSwitcher = document.querySelector(".language-switcher");
const languageButtons = document.querySelectorAll(".language-switcher__button");
const pdfDownload = document.querySelector("#pdf-download");

const savedTheme = localStorage.getItem("cv-theme");

if (savedTheme) {
    document.documentElement.dataset.theme = savedTheme;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.dataset.theme = "dark";
}

themeButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("cv-theme", nextTheme);
});

const translations = {
    ru: {
        pageTitle: "Илья Дудник — резюме",
        languageLabel: "Выбор языка",
        themeLabel: "Переключить тему",
        photoIdentity: "Илья, 24 года",
        location: "г. Санкт-Петербург, Россия",
        relocation: "Планирую переезд в Сербию",
        downloadPdf: "Скачать PDF",
        contactEmail: "Почта",
        heroLabel: "ТЕХНИЧЕСКИЕ ПРОЕКТЫ · ТЕЛЕКОМ",
        name: "Илья Дудник",
        heroDescription: "Координирую сложные подключения, объединяю заказчиков, операторов связи и технические команды. Развиваю знания в области сетевых технологий и стремлюсь к росту в технической поддержке, системном администрировании и сетевой инженерии.",
        rolesLabel: "Целевая позиция",
        secondaryRolesLabel: "Также рассматриваю · без опыта, с обучением",
        role1: "Координатор технических проектов",
        role2: "Специалист технической поддержки в чате",
        stat1: "объектов в одном проекте",
        stat2: "филиалов в защищённой сети",
        stat3: "лет управленческого опыта",
        experienceTitle: "Опыт работы",
        experienceMeta: "основное",
        job1Title: "Project Manager / координатор подключений",
        job1Company: "ООО «Комфортел»",
        job1Date: "Декабрь 2024 — настоящее время",
        job1Bullet1: "Сопровождение многоадресных телекоммуникационных проектов для государственных и корпоративных заказчиков.",
        job1Bullet2: "Координация операторов связи, заказчиков, подрядчиков и внутренних технических подразделений.",
        job1Bullet3: "Контроль задач в Jira, сроков, технической проработки и проблемных адресов.",
        jobSamsungTitle: "Менеджер по продажам",
        jobSamsungDate: "Март 2024 — август 2024",
        jobSamsungBullet1: "Консультирование клиентов и подбор решений.",
        jobSamsungBullet2: "Работа с возражениями и выполнение плановых показателей.",
        jobSamsungBullet3: "Оформление продаж и работа во внутренних системах.",
        jobBeelineTitle: "Специалист офиса обслуживания",
        jobBeelineCompany: "Билайн",
        jobBeelineDate: "Декабрь 2023 — февраль 2024",
        jobBeelineBullet1: "Консультации по услугам связи.",
        jobBeelineBullet2: "Подбор тарифов и дополнительных сервисов.",
        jobBeelineBullet3: "Оформление подключений и работа с клиентскими обращениями.",
        more: "Подробнее",
        project1Title: "Организация защищённых каналов связи для аппаратно-программного комплекса заказчика по обработке видеоизображений — более 250 объектов:",
        project1Text: "координация подключений, взаимодействие с операторами и подрядчиками, организация установки оборудования, контроль передачи видеопотоков и сроков реализации.",
        project2Title: "Защищённая сеть — более 40 объектов:",
        project2Text: "организация каналов через собственную и арендованную инфраструктуру, модернизация пропускной способности и проведение совместных технических обследований.",
        project3Title: "Корпоративные подключения — более 50 объектов:",
        project3Text: "организация доступа в Интернет, каналов связи и услуг телефонии, взаимодействие с операторами и контроль реализации для корпоративных клиентов.",
        job2Title: "Директор магазина",
        job2Date: "Март 2023 — декабрь 2023",
        job2Bullet1: "Координация команды, распределение задач, составление графиков и обучение сотрудников.",
        job2Bullet2: "Контроль качества работы, показателей и решение нестандартных ситуаций.",
        job3Title: "Менеджер ресторана",
        job3Company: "Додо Пицца",
        job3Date: "Декабрь 2021 — ноябрь 2022",
        job3Bullet1: "Организация работы смены, распределение обязанностей, работа с поставками и ревизиями.",
        goalsTitle: "Мои цели",
        goal1: "Углубить знания сетевых технологий по программе CCNA и получить сертификат.",
        goal2: "Получить практические навыки конфигурации сетей и сетевого оборудования.",
        goal3: "Освоить администрирование Linux.",
        goal4: "Развить навыки технической поддержки: локализации и устранения неисправностей.",
        goal5: "Изучить Python и научиться применять его для автоматизации рабочих и технических задач.",
        goal6: "Перейти к более технической роли в инфраструктуре, сетях или системном администрировании.",
        goal7: "Повысить уровень английского языка до уверенного B2.",
        goal8: "Изучить сербский язык с нуля до разговорного уровня.",
        skillsTitle: "Навыки",
        coordinationTitle: "Координация проектов",
        skillPlanning: "Планирование задач",
        skillDeadlines: "Контроль сроков",
        skillPrioritization: "Приоритизация",
        skillContractors: "Работа с подрядчиками",
        skillCustomers: "Коммуникация с заказчиками",
        skillEscalations: "Эскалации",
        technicalTitle: "Техническая база",
        languagesTitle: "Языки",
        languageRussian: "Русский — родной",
        languageEnglish: "Английский — A2",
        toolsTitle: "Инструменты",
        softSkillsTitle: "Soft skills",
        softSystemsThinking: "Системное мышление",
        softResponsibility: "Ответственность",
        softCommunication: "Коммуникабельность",
        softMultitasking: "Работа в режиме многозадачности",
        softSolutionFocus: "Ориентация на решение",
        softSelfLearning: "Самостоятельность в обучении",
        educationTitle: "Образование и развитие",
        universityTitle: "Дальневосточный федеральный университет",
        universityText: "Экономика, бухгалтерский учёт, анализ и аудит · неоконченное высшее образование",
        selfStudyTitle: "Самостоятельное обучение",
        selfStudyText: "Сетевые технологии по программе CCNA, основы Python, английский язык."
    },

    en: {
        pageTitle: "Ilya Dudnik — CV",
        languageLabel: "Language selection",
        themeLabel: "Switch theme",
        photoIdentity: "Ilya, 24 years old",
        location: "Saint Petersburg, Russia",
        relocation: "Planning to relocate to Serbia",
        downloadPdf: "Download PDF",
        contactEmail: "Email",
        heroLabel: "TECHNICAL PROJECTS · TELECOM",
        name: "Ilya Dudnik",
        heroDescription: "I coordinate complex connectivity projects and bring together customers, telecom operators, and technical teams. I am developing my networking expertise and aiming to grow in technical support, system administration, and network engineering.",
        rolesLabel: "Target role",
        secondaryRolesLabel: "Also open to · entry-level roles with training",
        role1: "Technical Project Coordinator",
        role2: "Technical Support Specialist (Chat)",
        stat1: "sites in one project",
        stat2: "branches in a secure network",
        stat3: "years of management experience",
        experienceTitle: "Work experience",
        experienceMeta: "selected",
        job1Title: "Project Manager / Connectivity Coordinator",
        job1Company: "Comfortel",
        job1Date: "December 2024 — Present",
        job1Bullet1: "Supporting multi-site telecommunications projects for public-sector and corporate customers.",
        job1Bullet2: "Coordinating telecom operators, customers, contractors, and internal technical teams.",
        job1Bullet3: "Tracking Jira tasks, deadlines, technical feasibility, and problem locations.",
        jobSamsungTitle: "Sales Manager",
        jobSamsungDate: "March 2024 — August 2024",
        jobSamsungBullet1: "Advising customers and recommending suitable solutions.",
        jobSamsungBullet2: "Handling objections and meeting sales targets.",
        jobSamsungBullet3: "Processing sales and working with internal systems.",
        jobBeelineTitle: "Retail Customer Service Specialist",
        jobBeelineCompany: "Beeline",
        jobBeelineDate: "December 2023 — February 2024",
        jobBeelineBullet1: "Advising customers on telecommunications services.",
        jobBeelineBullet2: "Recommending tariff plans and add-on services.",
        jobBeelineBullet3: "Setting up new connections and handling customer requests.",
        more: "More details",
        project1Title: "Secure communication channels for the customer’s hardware-and-software video processing platform — more than 250 sites:",
        project1Text: "coordinating connections, working with telecom operators and contractors, organizing endpoint equipment installation, monitoring video-stream delivery and project deadlines.",
        project2Title: "Secure network — more than 40 sites:",
        project2Text: "delivering connectivity over operators’ own and leased infrastructure, upgrading capacity, and organizing joint technical surveys.",
        project3Title: "Corporate connectivity services — 50+ sites:",
        project3Text: "providing Internet access, communication channels, and telephony services, coordinating telecom operators, and overseeing service delivery for corporate customers.",
        job2Title: "Store Manager",
        job2Date: "March 2023 — December 2023",
        job2Bullet1: "Coordinating the team, assigning tasks, preparing schedules, and training employees.",
        job2Bullet2: "Monitoring service quality and performance metrics and resolving non-standard issues.",
        job3Title: "Restaurant Manager",
        job3Company: "Dodo Pizza",
        job3Date: "December 2021 — November 2022",
        job3Bullet1: "Organizing shift operations, assigning responsibilities, and working with supplies and inventories.",
        goalsTitle: "My Goals",
        goal1: "Deepen my networking knowledge through the CCNA curriculum and earn the CCNA certification.",
        goal2: "Gain practical skills in configuring networks and network equipment.",
        goal3: "Learn Linux administration.",
        goal4: "Develop technical support skills in fault isolation and troubleshooting.",
        goal5: "Learn Python and apply it to automate work and technical tasks.",
        goal6: "Move into a more technical role in infrastructure, networking, or system administration.",
        goal7: "Improve my English to a confident B2 level.",
        goal8: "Learn Serbian from scratch to conversational proficiency.",
        skillsTitle: "Skills",
        coordinationTitle: "Project coordination",
        skillPlanning: "Task planning",
        skillDeadlines: "Deadline management",
        skillPrioritization: "Prioritization",
        skillContractors: "Contractor coordination",
        skillCustomers: "Customer communication",
        skillEscalations: "Escalations",
        technicalTitle: "Technical foundation",
        languagesTitle: "Languages",
        languageRussian: "Russian — native",
        languageEnglish: "English — A2",
        toolsTitle: "Tools",
        softSkillsTitle: "Soft skills",
        softSystemsThinking: "Systems thinking",
        softResponsibility: "Responsibility",
        softCommunication: "Communication",
        softMultitasking: "Multitasking",
        softSolutionFocus: "Solution-oriented approach",
        softSelfLearning: "Self-directed learning",
        educationTitle: "Education and development",
        universityTitle: "Far Eastern Federal University",
        universityText: "Coursework in Economics, Accounting, Analysis and Audit · degree studies not completed",
        selfStudyTitle: "Self-directed learning",
        selfStudyText: "CCNA networking curriculum, Python fundamentals, and English language studies."
    },

    sr: {
        pageTitle: "Ilja Dudnik — CV",
        languageLabel: "Izbor jezika",
        themeLabel: "Promeni temu",
        photoIdentity: "Ilja, 24 godine",
        location: "Sankt Peterburg, Rusija",
        relocation: "Planiram preseljenje u Srbiju",
        downloadPdf: "Preuzmi PDF",
        contactEmail: "E-pošta",
        heroLabel: "TEHNIČKI PROJEKTI · TELEKOM",
        name: "Ilja Dudnik",
        heroDescription: "Koordiniram složena priključenja i povezujem klijente, telekom operatere i tehničke timove. Usavršavam znanje iz mrežnih tehnologija i želim da se razvijam u oblastima tehničke podrške, sistemske administracije i mrežnog inženjerstva.",
        rolesLabel: "Željena pozicija",
        secondaryRolesLabel: "Takođe razmatram · početne pozicije uz obuku",
        role1: "Koordinator tehničkih projekata",
        role2: "Specijalista tehničke podrške putem četa",
        stat1: "lokacija u jednom projektu",
        stat2: "filijala u zaštićenoj mreži",
        stat3: "godine rukovodećeg iskustva",
        experienceTitle: "Radno iskustvo",
        experienceMeta: "izdvojeno",
        job1Title: "Project Manager / koordinator priključenja",
        job1Company: "Comfortel",
        job1Date: "Decembar 2024 — danas",
        job1Bullet1: "Vođenje telekomunikacionih projekata sa velikim brojem lokacija za državne i korporativne klijente.",
        job1Bullet2: "Koordinacija telekom operatera, klijenata, izvođača i internih tehničkih timova.",
        job1Bullet3: "Praćenje zadataka u Jiri, rokova, tehničke izvodljivosti i problematičnih lokacija.",
        jobSamsungTitle: "Menadžer prodaje",
        jobSamsungDate: "Mart 2024 — avgust 2024",
        jobSamsungBullet1: "Savetovanje kupaca i odabir odgovarajućih rešenja.",
        jobSamsungBullet2: "Rad sa prigovorima i ostvarivanje prodajnih ciljeva.",
        jobSamsungBullet3: "Evidentiranje prodaje i rad u internim sistemima.",
        jobBeelineTitle: "Specijalista u poslovnici",
        jobBeelineCompany: "Beeline",
        jobBeelineDate: "Decembar 2023 — februar 2024",
        jobBeelineBullet1: "Savetovanje klijenata o telekomunikacionim uslugama.",
        jobBeelineBullet2: "Odabir tarifnih paketa i dodatnih usluga.",
        jobBeelineBullet3: "Ugovaranje priključaka i obrada zahteva klijenata.",
        more: "Detaljnije",
        project1Title: "Zaštićeni komunikacioni kanali za hardversko-softverski sistem klijenta za obradu video-sadržaja — više od 250 lokacija:",
        project1Text: "koordinacija priključenja, saradnja sa operaterima i izvođačima, organizacija instalacije krajnje opreme, kontrola prenosa video tokova i rokova realizacije.",
        project2Title: "Zaštićena mreža — više od 40 lokacija:",
        project2Text: "organizacija kanala preko sopstvene i iznajmljene infrastrukture operatera, povećanje kapaciteta i organizacija zajedničkih tehničkih pregleda.",
        project3Title: "Korporativna priključenja — više od 50 lokacija:",
        project3Text: "organizacija pristupa internetu, komunikacionih kanala i telefonskih usluga, saradnja sa operaterima i kontrola realizacije za korporativne klijente.",
        job2Title: "Direktor prodavnice",
        job2Date: "Mart 2023 — decembar 2023",
        job2Bullet1: "Koordinacija tima, raspodela zadataka, izrada rasporeda i obuka zaposlenih.",
        job2Bullet2: "Kontrola kvaliteta rada i pokazatelja, kao i rešavanje nestandardnih situacija.",
        job3Title: "Menadžer restorana",
        job3Company: "Dodo Pizza",
        job3Date: "Decembar 2021 — novembar 2022",
        job3Bullet1: "Organizacija rada smene, raspodela obaveza i rad sa isporukama i inventurama.",
        goalsTitle: "Moji ciljevi",
        goal1: "Produbiti znanje mrežnih tehnologija kroz CCNA program i steći sertifikat.",
        goal2: "Steći praktične veštine konfiguracije mreža i mrežne opreme.",
        goal3: "Savladati administraciju Linux sistema.",
        goal4: "Razviti veštine tehničke podrške: lokalizaciju i otklanjanje problema.",
        goal5: "Naučiti Python i primenjivati ga za automatizaciju poslovnih i tehničkih zadataka.",
        goal6: "Preći na tehničkiju ulogu u infrastrukturi, mrežama ili sistemskoj administraciji.",
        goal7: "Unaprediti engleski jezik do nivoa B2.",
        goal8: "Naučiti srpski jezik od početnog nivoa do nivoa svakodnevne komunikacije.",
        skillsTitle: "Veštine",
        coordinationTitle: "Koordinacija projekata",
        skillPlanning: "Planiranje zadataka",
        skillDeadlines: "Kontrola rokova",
        skillPrioritization: "Određivanje prioriteta",
        skillContractors: "Rad sa izvođačima",
        skillCustomers: "Komunikacija sa klijentima",
        skillEscalations: "Eskalacije",
        technicalTitle: "Tehnička osnova",
        languagesTitle: "Jezici",
        languageRussian: "Ruski — maternji",
        languageEnglish: "Engleski — A2",
        toolsTitle: "Alati",
        softSkillsTitle: "Lične veštine",
        softSystemsThinking: "Sistemsko razmišljanje",
        softResponsibility: "Odgovornost",
        softCommunication: "Komunikativnost",
        softMultitasking: "Rad na više zadataka",
        softSolutionFocus: "Usmerenost na pronalaženje rešenja",
        softSelfLearning: "Samostalno učenje",
        educationTitle: "Obrazovanje i razvoj",
        universityTitle: "Dalekoistočni federalni univerzitet",
        universityText: "Ekonomija, računovodstvo, analiza i revizija · nezavršene visoke studije",
        selfStudyTitle: "Samostalno učenje",
        selfStudyText: "Mrežne tehnologije po CCNA programu, osnove Pythona i engleski jezik."
    }
};

function applyLanguage(language) {
    const selectedTranslations = translations[language] || translations.ru;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const translationKey = element.dataset.i18n;
        const translatedText = selectedTranslations[translationKey];

        if (translatedText !== undefined) {
            element.textContent = translatedText;
        }
    });

    document.documentElement.lang = language === "sr" ? "sr-Latn" : language;
    document.title = selectedTranslations.pageTitle;
    languageSwitcher.setAttribute("aria-label", selectedTranslations.languageLabel);
    themeButton.setAttribute("aria-label", selectedTranslations.themeLabel);
    pdfDownload.href = `assets/ilya-dudnik-cv-${language}.pdf`;

    languageButtons.forEach((button) => {
        button.classList.toggle(
            "language-switcher__button--active",
            button.dataset.lang === language
        );
    });

    localStorage.setItem("cv-lang", language);
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
        applyLanguage(button.dataset.lang);
    });
});

const savedLanguage = localStorage.getItem("cv-lang") || "ru";

applyLanguage(savedLanguage);
