// i18n.js — lightweight language switcher + translations
// Supported UI languages: EN (English), ES (Spanish), FR (French), DA (Danish)
// Hero typewriter cycles through 10 greetings regardless of UI language.

(function () {
    'use strict';

    // ─────────────────────────────────────────────────────────────
    // Translations
    // Keys are dotted; values are per-locale strings.
    // ─────────────────────────────────────────────────────────────
    const TRANSLATIONS = {
        en: {
            // Nav
            'nav.tagline': 'AI & Data Science // Chennai, India',
            'nav.about': 'About',
            'nav.projects': 'Projects',
            'nav.blog': 'Blog',
            'nav.resume': 'Resume',
            'nav.theme_title': 'Switch Theme',
            'nav.lang_title': 'Switch language',
            'nav.menu_aria': 'Toggle navigation',

            // Doc titles
            'title.home': 'Syed Furqan  | AI & Data Science Student',
            'title.projects': 'Syed Furqan  | Projects',
            'title.blog': 'Syed Furqan  | Blog',
            'title.resume': 'Syed Furqan  | Resume',

            'hero.label': 'Syed Furqan // AI & DATA SCIENCE // INDIA',
            'hero.subtitle_line1': 'AI & DATA SCIENCE //',
            'hero.subtitle_line2': 'PYTHON // ML // DATA //',
            'hero.subtitle_line3': 'TURNING IDEAS INTO PRODUCTS',

            // Skills
            'skills.label': 'Status: Active // Skills',
            'skills.langs': 'Programming Languages',
            'skills.web': 'WEB DEVELOPMENT',
            'skills.data': 'AI & DATA',
            'skills.tools': 'TOOLS & PLATFORMS',
            'skills.mon': 'Monitoring',
            'skills.db': 'Database',

            // Home projects
            'home.projects.label': 'Repository Feed // Featured',
            'home.projects.explore': 'explore_all',
            'home.projects.flr_desc': 'Offline-first, AI-adaptive reading and math practice app for children, built as a team hackathon project.',
            'home.projects.kebab_desc': 'A modern, customer-facing website for Kebab Kafe restaurant.',
            'home.projects.portfolio_desc': 'This personal portfolio site, featuring a terminal-inspired UI and live GitHub project feed.',


            // Contact
            'contact.label': 'Status: Online // Contact',
            'contact.prompt': '// Interested in collaboration? Execute the command below.',

            // Syed.py code box (string literals + comment only; keywords stay as code)
            'code.doc_line1': 'Developer bridging the gap between',
            'code.doc_line2': 'models and production, architecting',
            'code.doc_line3': 'scalable data & ML pipelines.',
            'code.role': 'AI & Data Science Student',
            'code.base': '"Chennai, India"',
            'code.comment': '# 3rd Year',
            'code.mission': 'Building practical AI solutions from data, code, and curiosity.',

            // Footer / status
            'status.online': 'System Status: Online',
            'status.Chennai': 'Chennai, India',
            'footer.copy': '© 2026  Syed Furqan. Built with code.',

            // Projects page
            'projects.label': 'Student Repository // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJECTS',
            'projects.subtitle': 'A collection of AI, machine learning, and data projects — built while learning.',
            'projects.briefing_label': 'System Briefing',
            'projects.briefing_text': 'Repositories fetched live from GitHub API, sorted by community interest.',
            'projects.source': 'Source',
            'projects.status': 'Status',
            'projects.status_online': 'Online',
            'projects.loading': '_fetching_data_from_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'Live ↗',
            'projects.source_link': 'GitHub ↗',

            // Blog page
            'blog.label': 'Publication Feed // Medium RSS',
            'blog.title_line1': 'ARTICLES',
            'blog.title_line2': '& ANALYSES',
            'blog.subtitle': 'Writing on data engineering, machine learning, and the systems that power modern AI products.',
            'blog.briefing_label': 'System Briefing',
            'blog.briefing_text': 'Articles on scalable data pipelines, ML engineering, and production AI systems.',
            'blog.channel': 'Channel',
            'blog.status': 'Status',
            'blog.status_online': 'Online',
            'blog.loading': '_establishing_connection_to_rss_feed...',

            // CV page
            'cv.label': 'Student Profile // Education',
            'cv.title_line1': 'AI & DATA/',
            'cv.title_line2': 'SCIENCE STUDENT',
            'cv.subtitle': 'AI & Data Science student building practical solutions with Python, machine learning, and data — from experimentation to working applications.',
            'cv.briefing_label': 'Academic Briefing',
            'cv.briefing_text': 'Turning data, code, and curiosity into practical AI solutions.',
            'cv.experience': 'Education',
            'cv.years': '3rd Year',
            'cv.base': 'Location',
            'cv.loading': '_loading_education_data...',
            'cv.download': '[ DOWNLOAD_RESUME_PDF ]',

            // certificates
            'cert.label': 'Status: Verified // Certifications',
            'cert.infosys.title': 'Introduction to Microcontrollers & Coding',
            'cert.infosys.issuer': 'Infosys Springboard',
            'cert.novitech.title': 'Data Analytics, AI & ML Training Programs',
            'cert.novitech.issuer': 'NoviTech R&D Pvt. Ltd.',
            'cert.novitech.desc': 'Completed multiple online training programs in Data Analytics, AI, and Machine Learning.',

        },

        es: {
            'nav.tagline': 'Estudiante de IA y Ciencia de Datos // Chennai',
            'nav.about': 'Sobre mí',
            'nav.projects': 'Proyectos',
            'nav.blog': 'Blog',
            'nav.resume': 'Currículum',
            'nav.theme_title': 'Cambiar tema',
            'nav.lang_title': 'Cambiar idioma',
            'nav.menu_aria': 'Alternar navegación',

            'title.home': 'Syed Furqan | Estudiante de IA y Ciencia de Datos',
            'title.projects': 'Syed Furqan | Proyectos',
            'title.blog': 'Syed Furqan | Blog',
            'title.resume': 'Syed Furqan | Currículum',

            'hero.label': 'Syed Furqan // Estudiante de IA y Ciencia de Datos // India',
            'hero.subtitle_line1': 'ESTUDIANTE DE IA Y CIENCIA DE DATOS //',
            'hero.subtitle_line2': 'PYTHON // APRENDIZAJE AUTOMÁTICO //',
            'hero.subtitle_line3': 'DESARROLLO DE PRODUCTOS DE IA',

            'skills.label': 'Estado: Activo // Habilidades',
            'skills.langs': 'Lenguajes de Programación',
            'skills.web': 'Desarrollo Web',
            'skills.data': 'IA y Datos',
            'skills.tools': 'Herramientas y Plataformas',
            'skills.mon': 'Monitorización',
            'skills.db': 'Base de Datos',

            'home.projects.label': 'Feed de Repositorios // Destacados',
            'home.projects.explore': 'explorar_todo',
            'home.projects.flr_desc': 'Aplicación offline-first de práctica de lectura y matemáticas con IA adaptativa para niños, construida como proyecto de equipo en un hackathon.',
            'home.projects.kebab_desc': 'Un sitio web moderno y orientado al cliente para el restaurante Kebab Kafe.',
            'home.projects.portfolio_desc': 'Este portafolio personal, con una interfaz inspirada en terminal y un feed de proyectos de GitHub en vivo.',


            'contact.label': 'Estado: En línea // Contacto',
            'contact.prompt': '// ¿Interesado en colaborar? Ejecuta el comando de abajo.',

            'code.doc_line1': 'Desarrollador que tiende puentes entre',
            'code.doc_line2': 'modelos y producción, diseñando',
            'code.doc_line3': 'pipelines de datos y ML escalables.',
            'code.role': 'Estudiante de IA y Ciencia de Datos',
            'code.base': '"Chennai, India"',
            'code.comment': '# 3.er Año',
            'code.mission': 'Construyendo soluciones prácticas de IA a partir de datos, código y curiosidad.',

            'status.online': 'Estado del sistema: En línea',
            'status.Chennai': 'Chennai, India',
            'footer.copy': '© 2026 Syed Furqan. Hecho con código.',

            'projects.label': 'Repositorio de Estudiante // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROYECTOS',
            'projects.subtitle': 'Una colección de proyectos de IA, aprendizaje automático y datos — construidos mientras aprendo.',
            'projects.briefing_label': 'Informe del sistema',
            'projects.briefing_text': 'Repositorios obtenidos en vivo desde la API de GitHub, ordenados por interés de la comunidad.',
            'projects.source': 'Fuente',
            'projects.status': 'Estado',
            'projects.status_online': 'En línea',
            'projects.loading': '_obteniendo_datos_de_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'En vivo ↗',
            'projects.source_link': 'GitHub ↗',

            'blog.label': 'Feed de Publicaciones // Medium RSS',
            'blog.title_line1': 'ARTÍCULOS',
            'blog.title_line2': 'Y ANÁLISIS',
            'blog.subtitle': 'Escribo sobre ingeniería de datos, aprendizaje automático y los sistemas que impulsan los productos de IA modernos.',
            'blog.briefing_label': 'Informe del sistema',
            'blog.briefing_text': 'Artículos sobre pipelines de datos escalables, ingeniería de ML y sistemas de IA en producción.',
            'blog.channel': 'Canal',
            'blog.status': 'Estado',
            'blog.status_online': 'En línea',
            'blog.loading': '_estableciendo_conexión_con_rss...',

            'cv.label': 'Perfil del Estudiante // Educación',
            'cv.title_line1': 'IA Y CIENCIA DE',
            'cv.title_line2': 'DATOS / ESTUDIANTE',
            'cv.subtitle': 'Estudiante de IA y Ciencia de Datos que desarrolla soluciones prácticas con Python, aprendizaje automático y datos, desde la experimentación hasta aplicaciones funcionales.',
            'cv.briefing_label': 'Resumen Académico',
            'cv.briefing_text': 'Transformando datos, código y curiosidad en soluciones prácticas de IA.',
            'cv.experience': 'Educación',
            'cv.years': '3.er Año',
            'cv.base': 'Ubicación',
            'cv.loading': '_cargando_datos_académicos...',
            'cv.download': '[ DESCARGAR_CV ]',

            // Certificaciones
            'cert.label': 'Estado: Verificado // Certificaciones',
            'cert.infosys.title': 'Introducción a Microcontroladores y Programación',
            'cert.infosys.issuer': 'Infosys Springboard',
            'cert.novitech.title': 'Programas de Formación en Data Analytics, IA y ML',
            'cert.novitech.issuer': 'NoviTech R&D Pvt. Ltd.',
            'cert.novitech.desc': 'Completé varios programas de formación en línea en Data Analytics, IA y Machine Learning.',


        },

        fr: {
            'nav.tagline': 'Étudiant en IA et Science des Données // Chennai',
            'nav.about': 'À propos',
            'nav.projects': 'Projets',
            'nav.blog': 'Blog',
            'nav.resume': 'CV',
            'nav.theme_title': 'Changer de thème',
            'nav.lang_title': 'Changer de langue',
            'nav.menu_aria': 'Basculer la navigation',

            'title.home': 'Syed Furqan | Étudiant en IA et Science des Données',
            'title.projects': 'Syed Furqan | Projets',
            'title.blog': 'Syed Furqan | Blog',
            'title.resume': 'Syed Furqan | CV',

            'hero.label': 'Syed Furqan // Étudiant en IA et Science des Données // Inde',
            'hero.subtitle_line1': 'ÉTUDIANT EN IA ET SCIENCE DES DONNÉES //',
            'hero.subtitle_line2': 'PYTHON // MACHINE LEARNING //',
            'hero.subtitle_line3': 'DÉVELOPPEMENT DE PRODUITS IA',

            'skills.label': 'Statut : Actif // Compétences',
            'skills.langs': 'Langages de programmation',
            'skills.web': 'Développement Web',
            'skills.data': 'IA et Données',
            'skills.tools': 'Outils & Plateformes',
            'skills.mon': 'Monitoring',
            'skills.db': 'Base de Données',

            'home.projects.label': 'Flux de dépôts // Sélection',
            'home.projects.explore': 'tout_explorer',
            'home.projects.flr_desc': 'Application offline-first de pratique de lecture et de mathématiques avec IA adaptative pour enfants, construite en équipe lors d\u2019un hackathon.',
            'home.projects.kebab_desc': 'Un site web moderne destiné aux clients du restaurant Kebab Kafe.',
            'home.projects.portfolio_desc': 'Ce portfolio personnel, avec une interface inspirée d\u2019un terminal et un flux de projets GitHub en direct.',

            'contact.label': 'Statut : En ligne // Contact',
            'contact.prompt': '// Intéressé par une collaboration ? Exécutez la commande ci-dessous.',

            'code.doc_line1': 'Développeur faisant le lien entre',
            'code.doc_line2': 'modèles et production, architecturant',
            'code.doc_line3': 'des pipelines data & ML scalables.',
            'code.role': 'Étudiant en IA et Science des Données',
            'code.base': '"Chennai, Inde"',
            'code.comment': '# 3e Année',
            'code.mission': 'Construire des solutions pratiques d\u2019IA à partir de données, de code et de curiosité.',

            'status.online': 'État du système : En ligne',
            'status.Chennai': 'Chennai, Inde',
            'footer.copy': '© 2026 Syed Furqan. Conçu avec du code.',

            'projects.label': 'Dépôt Étudiant // API GitHub',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJETS',
            'projects.subtitle': 'Une collection de projets IA, machine learning et données — construits en apprenant.',
            'projects.briefing_label': 'Briefing système',
            'projects.briefing_text': 'Dépôts récupérés en direct via l\u2019API GitHub, triés selon l\u2019intérêt de la communauté.',
            'projects.source': 'Source',
            'projects.status': 'Statut',
            'projects.status_online': 'En ligne',
            'projects.loading': '_récupération_des_données_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'En direct ↗',
            'projects.source_link': 'GitHub ↗',

            'blog.label': 'Flux de publications // Medium RSS',
            'blog.title_line1': 'ARTICLES',
            'blog.title_line2': '& ANALYSES',
            'blog.subtitle': 'J\u2019écris sur le data engineering, le machine learning et les systèmes qui font tourner les produits IA modernes.',
            'blog.briefing_label': 'Briefing système',
            'blog.briefing_text': 'Articles sur les pipelines de données scalables, l\u2019ingénierie ML et les systèmes IA en production.',
            'blog.channel': 'Canal',
            'blog.status': 'Statut',
            'blog.status_online': 'En ligne',
            'blog.loading': '_connexion_au_flux_rss...',

            'cv.label': 'Profil Étudiant // Formation',
            'cv.title_line1': 'IA ET SCIENCE',
            'cv.title_line2': 'DES DONNÉES / ÉTUDIANT',
            'cv.subtitle': 'Étudiant en IA et science des données développant des solutions pratiques avec Python, le machine learning et les données, de l’expérimentation aux applications fonctionnelles.',
            'cv.briefing_label': 'Résumé Académique',
            'cv.briefing_text': 'Transformer les données, le code et la curiosité en solutions pratiques d’IA.',
            'cv.experience': 'Formation',
            'cv.years': '3e Année',
            'cv.base': 'Localisation',
            'cv.loading': '_chargement_des_données_académiques...',
            'cv.download': '[ TÉLÉCHARGER_LE_CV ]',

            // Certifications
            'cert.label': 'Statut : Vérifié // Certifications',
            'cert.infosys.title': 'Introduction aux Microcontrôleurs et à la Programmation',
            'cert.infosys.issuer': 'Infosys Springboard',
            'cert.novitech.title': 'Programmes de Formation en Data Analytics, IA et ML',
            'cert.novitech.issuer': 'NoviTech R&D Pvt. Ltd.',
            'cert.novitech.desc': 'Suivi de plusieurs programmes de formation en ligne en Data Analytics, IA et Machine Learning.',





        },

        da: {
            'nav.tagline': 'AI & Data Science-studerende // Chennai',
            'nav.about': 'Om mig',
            'nav.projects': 'Projekter',
            'nav.blog': 'Blog',
            'nav.resume': 'CV',
            'nav.theme_title': 'Skift tema',
            'nav.lang_title': 'Skift sprog',
            'nav.menu_aria': 'Skift navigation',

            'title.home': 'Syed Furqan | AI & Data Science-studerende',
            'title.projects': 'Syed Furqan | Projekter',
            'title.blog': 'Syed Furqan | Blog',
            'title.resume': 'Syed Furqan | CV',

            'hero.label': 'Syed Furqan // AI & Data Science-studerende // Indien',
            'hero.subtitle_line1': 'AI & DATA SCIENCE-STUDERENDE //',
            'hero.subtitle_line2': 'PYTHON // MACHINE LEARNING //',
            'hero.subtitle_line3': 'UDVIKLING AF AI-PRODUKTER',

            'skills.label': 'Status: Aktiv // Kompetencer',
            'skills.langs': 'Programmeringssprog',
            'skills.web': 'Webudvikling',
            'skills.data': 'AI & Data',
            'skills.tools': 'Værktøjer & Platforme',
            'skills.mon': 'Overvågning',
            'skills.db': 'Database',

            'home.projects.label': 'Repository-feed // Udvalgte',
            'home.projects.explore': 'udforsk_alt',
            'home.projects.flr_desc': 'Offline-first, AI-adaptiv lærings-app til læsning og matematik for børn, bygget som et teamprojekt ved en hackathon.',
            'home.projects.kebab_desc': 'En moderne, kundevendt hjemmeside for Kebab Kafe-restauranten.',
            'home.projects.portfolio_desc': 'Denne personlige portfolio-side med en terminal-inspireret UI og live GitHub-projektfeed.',

            'contact.label': 'Status: Online // Kontakt',
            'contact.prompt': '// Interesseret i samarbejde? Kør kommandoen nedenfor.',

            'code.doc_line1': 'Udvikler der bygger bro mellem',
            'code.doc_line2': 'modeller og produktion, og arkitekt for',
            'code.doc_line3': 'skalerbare data- og ML-pipelines.',
            'code.role': 'AI & Data Science-studerende',
            'code.base': '"Chennai, Indien"',
            'code.comment': '# 3. år',
            'code.mission': 'Bygger praktiske AI-løsninger ud fra data, kode og nysgerrighed.',

            'status.online': 'Systemstatus: Online',
            'status.Chennai': 'Chennai, Indien',
            'footer.copy': '© 2026 Syed Furqan. Bygget med kode.',

            'projects.label': 'Studenter-repository // GitHub API',
            'projects.title_line1': 'OPEN SOURCE',
            'projects.title_line2': '/ PROJEKTER',
            'projects.subtitle': 'En samling af AI-, machine learning- og dataprojekter — bygget undervejs i læringen.', 'projects.briefing_label': 'System-briefing',
            'projects.briefing_text': 'Repositories hentet live via GitHub API, sorteret efter fællesskabets interesse.',
            'projects.source': 'Kilde',
            'projects.status': 'Status',
            'projects.status_online': 'Online',
            'projects.loading': '_henter_data_fra_github...',
            'projects.git_cmd': '> git fetch origin master --sort=stars',
            'projects.live_link': 'Live ↗',
            'projects.source_link': 'GitHub ↗',

            'blog.label': 'Publikationsfeed // Medium RSS',
            'blog.title_line1': 'ARTIKLER',
            'blog.title_line2': '& ANALYSER',
            'blog.subtitle': 'Skriverier om data engineering, machine learning og systemerne bag moderne AI-produkter.',
            'blog.briefing_label': 'System-briefing',
            'blog.briefing_text': 'Artikler om skalerbare data-pipelines, ML-engineering og AI-systemer i produktion.',
            'blog.channel': 'Kanal',
            'blog.status': 'Status',
            'blog.status_online': 'Online',
            'blog.loading': '_opretter_forbindelse_til_rss...',

            'cv.label': 'Studenterprofil // Uddannelse',
            'cv.title_line1': 'AI OG DATA /',
            'cv.title_line2': 'SCIENCE STUDERENDE',
            'cv.subtitle': 'AI- og Data Science-studerende, der bygger praktiske løsninger med Python, machine learning og data — fra eksperimenter til fungerende applikationer.',
            'cv.briefing_label': 'Akademisk Briefing',
            'cv.briefing_text': 'At omsætte data, kode og nysgerrighed til praktiske AI-løsninger.',
            'cv.experience': 'Uddannelse',
            'cv.years': '3. år',
            'cv.base': 'Placering',
            'cv.loading': '_indlæser_uddannelsesdata...',
            'cv.download': '[ DOWNLOAD_CV ]',

            // Certificeringer
            'cert.label': 'Status: Bekræftet // Certificeringer',
            'cert.infosys.title': 'Introduktion til Mikrocontrollere & Programmering',
            'cert.infosys.issuer': 'Infosys Springboard',
            'cert.novitech.title': 'Data Analytics-, AI- og ML-Træningsprogrammer',
            'cert.novitech.issuer': 'NoviTech R&D Pvt. Ltd.',
            'cert.novitech.desc': 'Gennemførte flere online-træningsprogrammer i Data Analytics, AI og Machine Learning.',
        },
    };

    // ─────────────────────────────────────────────────────────────
    // Dynamic content translations (projects + experience)
    // Keyed by a stable ID (repo name / job index).
    // ─────────────────────────────────────────────────────────────
    const PROJECTS = {
        'foundational-learning-rescue': {
            en: {
                title: 'Foundational Learning Rescue',
                desc: 'Offline-first, AI-adaptive reading and math practice app for children behind on foundational skills. Runs a short diagnostic to pinpoint the exact skill gap, then delivers targeted daily practice that adapts as the child improves. Built as a team hackathon project.',
            },
            es: {
                title: 'Foundational Learning Rescue',
                desc: 'Aplicación offline-first de práctica de lectura y matemáticas con IA adaptativa para niños con dificultades en habilidades básicas. Ejecuta un breve diagnóstico para identificar la brecha exacta de habilidades y ofrece práctica diaria personalizada. Construida en equipo durante un hackathon.',
            },
            fr: {
                title: 'Foundational Learning Rescue',
                desc: 'Application offline-first de pratique de lecture et de mathématiques avec IA adaptative pour les enfants en difficulté sur les compétences de base. Réalise un court diagnostic pour identifier l\u2019écart de compétences exact, puis propose des exercices quotidiens adaptés. Construite en équipe lors d\u2019un hackathon.',
            },
            da: {
                title: 'Foundational Learning Rescue',
                desc: 'Offline-first, AI-adaptiv lærings-app til læsning og matematik for børn med huller i grundlæggende færdigheder. Kører en kort diagnostik, der finder det præcise kompetencehul, og tilbyder derefter målrettet daglig træning. Bygget som et teamprojekt ved en hackathon.',
            },
        },
        'Kebab-Terminal': {
            en: {
                title: 'Kebab Kafe — Restaurant Website',
                desc: 'A modern, customer-facing website for Kebab Kafe built to showcase the menu and give visitors a clean browsing experience. Built as a real restaurant site, not a practice exercise.',
            },
            es: {
                title: 'Kebab Kafe — Sitio Web del Restaurante',
                desc: 'Un sitio web moderno y orientado al cliente para Kebab Kafe, creado para mostrar el menú y ofrecer una experiencia de navegación clara. Construido como un sitio real, no un ejercicio de práctica.',
            },
            fr: {
                title: 'Kebab Kafe — Site Web du Restaurant',
                desc: 'Un site web moderne destiné aux clients de Kebab Kafe, conçu pour présenter le menu et offrir une navigation claire. Construit comme un site réel, pas un exercice d\u2019entraînement.',
            },
            da: {
                title: 'Kebab Kafe — Restauranthjemmeside',
                desc: 'En moderne, kundevendt hjemmeside for Kebab Kafe, bygget til at vise menuen og give besøgende en enkel browsingoplevelse. Bygget som en rigtig restaurantside, ikke en øvelse.',
            },
        },
        'furqan-svg.github.io': {
            en: {
                title: 'This Portfolio',
                desc: 'My personal portfolio site — built with vanilla HTML, CSS, and JavaScript, featuring a terminal-inspired UI, live GitHub project feed, and multi-language support.',
            },
            es: {
                title: 'Este Portafolio',
                desc: 'Mi portafolio personal — construido con HTML, CSS y JavaScript puros, con una interfaz inspirada en terminal, feed de proyectos de GitHub en vivo y soporte multilingüe.',
            },
            fr: {
                title: 'Ce Portfolio',
                desc: 'Mon portfolio personnel — construit avec HTML, CSS et JavaScript purs, avec une interface inspirée d\u2019un terminal, un flux de projets GitHub en direct et un support multilingue.',
            },
            da: {
                title: 'Denne Portfolio',
                desc: 'Min personlige portfolio-side — bygget med ren HTML, CSS og JavaScript, med en terminal-inspireret UI, live GitHub-projektfeed og understøttelse af flere sprog.',
            },
        },
    };
    // Experience entries, keyed by company short id — order matters: most recent first.
    const EXPERIENCE_ORDER = ['foundationalLearningRescue', 'kebabKafe', 'webDevelopment'];
    const EXPERIENCE = {

        foundationalLearningRescue: {
            common: {
                company: 'Hackathon Project',
                companyDisplay: 'Hackathon Project',
                companyUrl: 'https://github.com/furqan-svg/foundational-learning-rescue',
                logo: '',
                start: '2026-01',
                end: null,
                stack: [
                    { label: 'React.js', c: 'engineering' },
                    { label: 'Node.js', c: 'engineering' },
                    { label: 'MongoDB', c: 'engineering' },
                ],
            },

            en: {
                period: '2026',
                role: 'Foundational Learning Rescue',
                companyNote: 'Hackathon Project',
                description: 'Offline-first, AI-adaptive reading and math practice app for children behind on foundational skills, built as a team project at a hackathon.',
                achievements: [
                    'Built an adaptive diagnostic that pinpoints a child\u2019s exact skill gap in minutes.',
                    'Developed a full-stack app with React, Node.js, and MongoDB as part of a team.',
                    'Designed daily practice that adapts automatically as the child improves.',
                ],
            },

            es: {
                period: '2026',
                role: 'Foundational Learning Rescue',
                companyNote: 'Proyecto de Hackathon',
                description: 'Aplicación offline-first de práctica de lectura y matemáticas con IA adaptativa para niños con dificultades en habilidades básicas, construida en equipo durante un hackathon.',
                achievements: [
                    'Construcción de un diagnóstico adaptativo que identifica la brecha exacta de habilidades de un niño en minutos.',
                    'Desarrollo de una aplicación full-stack con React, Node.js y MongoDB en equipo.',
                    'Diseño de práctica diaria que se adapta automáticamente según el progreso del niño.',
                ],
            },

            fr: {
                period: '2026',
                role: 'Foundational Learning Rescue',
                companyNote: 'Projet de Hackathon',
                description: 'Application offline-first de pratique de lecture et de mathématiques avec IA adaptative pour les enfants en difficulté sur les compétences de base, construite en équipe lors d\u2019un hackathon.',
                achievements: [
                    'Création d\u2019un diagnostic adaptatif identifiant l\u2019écart de compétences exact d\u2019un enfant en quelques minutes.',
                    'Développement d\u2019une application full-stack avec React, Node.js et MongoDB en équipe.',
                    'Conception d\u2019exercices quotidiens qui s\u2019adaptent automatiquement aux progrès de l\u2019enfant.',
                ],
            },

            da: {
                period: '2026',
                role: 'Foundational Learning Rescue',
                companyNote: 'Hackathon-projekt',
                description: 'Offline-first, AI-adaptiv lærings-app til læsning og matematik for børn med huller i grundlæggende færdigheder, bygget som et teamprojekt ved en hackathon.',
                achievements: [
                    'Byggede en adaptiv diagnostik, der finder et barns præcise kompetencehul på få minutter.',
                    'Udviklede en full-stack app med React, Node.js og MongoDB som en del af et team.',
                    'Designede daglig træning, der automatisk tilpasser sig, efterhånden som barnet forbedrer sig.',
                ],
            },
        },


        kebabKafe: {
            common: {
                company: 'Family Business',
                companyDisplay: 'Family Business',
                companyUrl: '',
                logo: '',
                start: '2025-01',
                end: null,
                stack: [
                    { label: 'Web Development', c: 'engineering' },
                    { label: 'Analytics', c: 'ml' },
                    { label: 'JavaScript', c: 'engineering' },
                ],
            },

            en: {
                period: '2025 — Present',
                role: 'Kebab Kafe',
                companyNote: 'Family Business',
                description: 'Developing a digital platform for restaurant management, orders, analytics and sales tracking.',
                achievements: [
                    'Developing digital tools for restaurant management and daily operations.',
                    'Building order and sales tracking functionality.',
                    'Working with business data and analytics to support decision-making.',
                ],
            },

            es: {
                period: '2025 — Actualidad',
                role: 'Kebab Kafe',
                companyNote: 'Negocio Familiar',
                description: 'Desarrollo de una plataforma digital para la gestión del restaurante, pedidos, análisis y seguimiento de ventas.',
                achievements: [
                    'Desarrollo de herramientas digitales para la gestión y operaciones diarias del restaurante.',
                    'Creación de funcionalidades para pedidos y seguimiento de ventas.',
                    'Trabajo con datos empresariales y análisis para apoyar la toma de decisiones.',
                ],
            },

            fr: {
                period: '2025 — Présent',
                role: 'Kebab Kafe',
                companyNote: 'Entreprise Familiale',
                description: 'Développement d’une plateforme numérique pour la gestion du restaurant, les commandes, l’analyse et le suivi des ventes.',
                achievements: [
                    'Développement d’outils numériques pour la gestion et les opérations quotidiennes du restaurant.',
                    'Création de fonctionnalités pour les commandes et le suivi des ventes.',
                    'Utilisation des données commerciales et de l’analyse pour soutenir les décisions.',
                ],
            },

            da: {
                period: '2025 — Nu',
                role: 'Kebab Kafe',
                companyNote: 'Familievirksomhed',
                description: 'Udvikler en digital platform til restaurantstyring, bestillinger, analyse og salgssporing.',
                achievements: [
                    'Udvikling af digitale værktøjer til restaurantstyring og daglig drift.',
                    'Opbygning af funktionalitet til bestillings- og salgssporing.',
                    'Arbejde med forretningsdata og analyse til at understøtte beslutningstagning.',
                ],
            },
        },


        webDevelopment: {
            common: {
                company: 'IQRA Engineering Solutions',
                companyDisplay: 'IQRA Engineering Solutions',
                companyUrl: '',
                logo: '',
                start: '2024-09',
                end: '2024-09',
                stack: [
                    { label: 'HTML', c: 'engineering' },
                    { label: 'CSS', c: 'engineering' },
                    { label: 'JavaScript', c: 'engineering' },
                ],
            },

            en: {
                period: 'Sep 2024',
                role: 'Website Development Intern',
                companyNote: '15-day training program',
                description: 'Completed a 15-day website development training program, covering web development fundamentals and hands-on project work.',
                achievements: [
                    'Learned web development fundamentals and practical implementation.',
                    'Participated actively in training activities and project work.',
                    'Gained exposure to website design concepts and development workflows.',
                ],
            },

            es: {
                period: 'Sep 2024',
                role: 'Pasante de Desarrollo Web',
                companyNote: 'Programa de formación de 15 días',
                description: 'Completé un programa de formación de 15 días en desarrollo web, cubriendo fundamentos y trabajo práctico en proyectos.',
                achievements: [
                    'Aprendizaje de los fundamentos del desarrollo web y su implementación práctica.',
                    'Participación activa en actividades de formación y trabajo en proyectos.',
                    'Exposición a conceptos de diseño web y flujos de trabajo de desarrollo.',
                ],
            },

            fr: {
                period: 'Sept. 2024',
                role: 'Stagiaire en Développement Web',
                companyNote: 'Programme de formation de 15 jours',
                description: 'J\u2019ai suivi un programme de formation de 15 jours en développement web, couvrant les fondamentaux et un travail pratique sur projet.',
                achievements: [
                    'Apprentissage des fondamentaux du développement web et de leur mise en pratique.',
                    'Participation active aux activités de formation et au travail de projet.',
                    'Découverte des concepts de conception web et des flux de travail de développement.',
                ],
            },

            da: {
                period: 'Sep 2024',
                role: 'Webudviklingspraktikant',
                companyNote: '15-dages træningsprogram',
                description: 'Gennemførte et 15-dages træningsprogram i webudvikling, med fokus på grundlæggende webudvikling og praktisk projektarbejde.',
                achievements: [
                    'Lærte grundlæggende webudvikling og praktisk implementering.',
                    'Deltog aktivt i træningsaktiviteter og projektarbejde.',
                    'Fik indblik i webdesignkoncepter og udviklingsarbejdsgange.',
                ],
            },
        },
    };


    // Inline SVG flags (4:3 viewBox) — render identically across all OSes,
    // unlike emoji flags which Windows Chrome refuses to draw.
    const FLAG_SVG = {
        gb: '<svg class="lang-flag-svg" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><clipPath id="fg-uk"><path d="M0 0v45h60V0z"/></clipPath><clipPath id="fg-uk-t"><path d="M30 22.5L60 0v45L30 22.5 0 45V0z"/></clipPath><g clip-path="url(#fg-uk)"><path fill="#012169" d="M0 0h60v45H0z"/><path stroke="#fff" stroke-width="9" d="M0 0l60 45m0-45L0 45"/><path stroke="#C8102E" stroke-width="6" clip-path="url(#fg-uk-t)" d="M0 0l60 45m0-45L0 45"/><path stroke="#fff" stroke-width="15" d="M30 0v45M0 22.5h60"/><path stroke="#C8102E" stroke-width="9" d="M30 0v45M0 22.5h60"/></g></svg>',
        es: '<svg class="lang-flag-svg" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#AA151B" d="M0 0h60v45H0z"/><path fill="#F1BF00" d="M0 11.25h60v22.5H0z"/></svg>',
        fr: '<svg class="lang-flag-svg" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#fff" d="M0 0h60v45H0z"/><path fill="#002654" d="M0 0h20v45H0z"/><path fill="#CE1126" d="M40 0h20v45H40z"/></svg>',
        dk: '<svg class="lang-flag-svg" viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#C8102E" d="M0 0h60v45H0z"/><path fill="#fff" d="M18 0h6v45h-6z"/><path fill="#fff" d="M0 19.5h60v6H0z"/></svg>',
    };

    const LANGS = [
        { code: 'en', label: 'EN', name: 'English', flag: FLAG_SVG.gb },
        { code: 'es', label: 'ES', name: 'Español', flag: FLAG_SVG.es },
        { code: 'fr', label: 'FR', name: 'Français', flag: FLAG_SVG.fr },
        { code: 'da', label: 'DA', name: 'Dansk', flag: FLAG_SVG.dk },
    ];

    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'lang';

    // ─────────────────────────────────────────────────────────────
    // Greetings used by the looping hero typewriter (not UI state).
    // Order matches the user's request.
    // ─────────────────────────────────────────────────────────────
    const GREETINGS = [
        { lang: 'en', text: 'Hi, I am Syed Furqan!', dir: 'ltr' },
        { lang: 'es', text: '¡Hola, soy Syed Furqan!', dir: 'ltr' },
        { lang: 'fr', text: 'Salut, je suis Syed Furqan!', dir: 'ltr' },
        { lang: 'de', text: 'Hallo, ich bin Syed Furqan!', dir: 'ltr' },
        { lang: 'it', text: 'Ciao, sono Syed Furqan!', dir: 'ltr' },
        { lang: 'pt', text: 'Olá, eu sou o Syed Furqan!', dir: 'ltr' },
        { lang: 'zh', text: '你好，我是 Syed Furqan！', dir: 'ltr' },
        { lang: 'ja', text: 'こんにちは、Syed Furqanです ！', dir: 'ltr' },
        { lang: 'da', text: 'Hej, jeg hedder Syed Furqan!', dir: 'ltr' },
        { lang: 'ar', text: 'مرحبًا أنا Syed Furqan. !', dir: 'rtl' },
        { lang: 'hi', text: 'नमस्ते, मैं Syed Furqan हूँ!', dir: 'ltr' },

    ];

    // ─────────────────────────────────────────────────────────────
    // Core helpers
    // ─────────────────────────────────────────────────────────────
    function getLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && TRANSLATIONS[saved]) return saved;
        return DEFAULT_LANG;
    }

    function t(key, lang) {
        lang = lang || getLang();
        const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
        if (Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
        // Fallback to English
        const enDict = TRANSLATIONS[DEFAULT_LANG];
        if (Object.prototype.hasOwnProperty.call(enDict, key)) return enDict[key];
        return key;
    }

    // Apply translations to any element with [data-i18n] inside `root` (default: document).
    // Supports:
    //   data-i18n="key"              → textContent
    //   data-i18n-attr="title:key;aria-label:key2"   → attributes
    function applyTranslations(root) {
        const scope = root || document;
        const lang = getLang();

        // Text nodes
        scope.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;
            el.textContent = t(key, lang);
        });

        // Attribute translations
        scope.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const spec = el.getAttribute('data-i18n-attr');
            if (!spec) return;
            spec.split(';').forEach(pair => {
                const parts = pair.split(':').map(s => s.trim());
                if (parts.length !== 2) return;
                const [attr, key] = parts;
                el.setAttribute(attr, t(key, lang));
            });
        });

        // <title> element if it has data-i18n
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const key = titleEl.getAttribute('data-i18n');
            document.title = t(key, lang);
        }

        document.documentElement.setAttribute('lang', lang);
    }

    function setLang(lang) {
        if (!TRANSLATIONS[lang]) return;
        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
        updateLangButton();
        // Notify listeners (e.g. dynamic loaders, typewriter restart hooks)
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    }

    function updateLangButton() {
        const btn = document.getElementById('lang-toggle');
        if (!btn) return;
        const lang = getLang();
        const entry = LANGS.find(l => l.code === lang) || LANGS[0];
        btn.textContent = entry.label + ' ▾';
        btn.setAttribute('aria-label', t('nav.lang_title') + ': ' + entry.name);

        // Mark active option in menu
        const menu = document.getElementById('lang-menu');
        if (menu) {
            menu.querySelectorAll('[data-lang]').forEach(opt => {
                opt.classList.toggle('active', opt.getAttribute('data-lang') === lang);
            });
        }
    }

    // ─────────────────────────────────────────────────────────────
    // Build the language switcher UI and inject into .nav-controls
    // ─────────────────────────────────────────────────────────────
    function initLangSwitcher() {
        const navControls = document.querySelector('.nav-controls');
        if (!navControls) return;
        if (document.getElementById('lang-toggle')) return; // already built

        const wrap = document.createElement('div');
        wrap.className = 'lang-switcher';

        const btn = document.createElement('button');
        btn.id = 'lang-toggle';
        btn.className = 'lang-toggle';
        btn.type = 'button';
        btn.setAttribute('aria-haspopup', 'listbox');
        btn.setAttribute('aria-expanded', 'false');

        const menu = document.createElement('ul');
        menu.id = 'lang-menu';
        menu.className = 'lang-menu';
        menu.setAttribute('role', 'listbox');

        LANGS.forEach(l => {
            const li = document.createElement('li');
            li.setAttribute('role', 'option');
            li.setAttribute('data-lang', l.code);
            li.className = 'lang-option';
            li.innerHTML = `<span class="lang-flag">${l.flag}</span><span class="lang-name">${l.name}</span>`;
            // l.flag is trusted (inline SVG defined in this file, not user input).
            li.addEventListener('click', (ev) => {
                ev.stopPropagation();
                setLang(l.code);
                closeMenu();
            });
            menu.appendChild(li);
        });

        wrap.appendChild(btn);
        wrap.appendChild(menu);

        // Insert BEFORE the theme toggle so order is: menu ☰ | EN▾ | ☀
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn && themeBtn.parentNode === navControls) {
            navControls.insertBefore(wrap, themeBtn);
        } else {
            navControls.appendChild(wrap);
        }

        function openMenu() {
            menu.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
        }
        function closeMenu() {
            menu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        }

        btn.addEventListener('click', (ev) => {
            ev.stopPropagation();
            if (menu.classList.contains('open')) closeMenu(); else openMenu();
        });

        document.addEventListener('click', (ev) => {
            if (!wrap.contains(ev.target)) closeMenu();
        });

        document.addEventListener('keydown', (ev) => {
            if (ev.key === 'Escape') closeMenu();
        });

        updateLangButton();
    }

    // ─────────────────────────────────────────────────────────────
    // Hero typewriter: cycles through all greetings, loops forever.
    // Respects prefers-reduced-motion (shows current UI-lang greeting, static).
    // ─────────────────────────────────────────────────────────────
    function initTypewriterCycle() {
        const el = document.getElementById('typewriter');
        if (!el) return;

        const reduceMotion = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (reduceMotion) {
            // Pick the UI-language greeting if we have one, else English.
            const ui = getLang();
            const pick = GREETINGS.find(g => g.lang === ui) || GREETINGS[0];
            el.textContent = pick.text;
            el.setAttribute('dir', pick.dir);
            return;
        }

        const TYPE_SPEED = 90;    // ms per char typing
        const ERASE_SPEED = 45;   // ms per char erasing
        const HOLD_AFTER = 1400;  // pause after fully typed
        const PAUSE_BETWEEN = 250; // pause after fully erased

        let idx = 0;

        function typeOne() {
            const g = GREETINGS[idx];
            el.setAttribute('dir', g.dir);
            el.setAttribute('lang', g.lang);
            // Use Array.from to split by grapheme for multi-byte chars (CJK, emoji-safe)
            const chars = Array.from(g.text);
            let i = 0;
            el.textContent = '';

            function step() {
                if (i < chars.length) {
                    el.textContent += chars[i];
                    i++;
                    setTimeout(step, TYPE_SPEED);
                } else {
                    setTimeout(eraseOne, HOLD_AFTER);
                }
            }
            step();
        }

        function eraseOne() {
            const current = Array.from(el.textContent);
            let i = current.length;

            function step() {
                if (i > 0) {
                    i--;
                    el.textContent = current.slice(0, i).join('');
                    setTimeout(step, ERASE_SPEED);
                } else {
                    idx = (idx + 1) % GREETINGS.length;
                    setTimeout(typeOne, PAUSE_BETWEEN);
                }
            }
            step();
        }

        typeOne();
    }

    // ─────────────────────────────────────────────────────────────
    // Public API
    // ─────────────────────────────────────────────────────────────
    window.i18n = {
        t,
        getLang,
        setLang,
        applyTranslations,
        LANGS,
        GREETINGS,
        // Return a localized project { title, desc } for the given repo name, or null.
        getProject(repoName) {
            const entry = PROJECTS[repoName];
            if (!entry) return null;
            const lang = getLang();
            return entry[lang] || entry[DEFAULT_LANG] || null;
        },
        // Return ordered experience entries, each fully localized for the active language.
        getExperience() {
            const lang = getLang();
            return EXPERIENCE_ORDER.map((id) => {
                const e = EXPERIENCE[id];
                const loc = e[lang] || e[DEFAULT_LANG];
                return { id, ...e.common, ...loc };
            });
        },
    };

    // Auto-init
    document.addEventListener('DOMContentLoaded', () => {
        applyTranslations();
        initLangSwitcher();
        initTypewriterCycle();
    });
})();