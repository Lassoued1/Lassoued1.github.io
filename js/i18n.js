// ==========================================================================
// i18n — English / German content dictionary + language switcher
// ==========================================================================

const translations = {
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.credentials": "Credentials",
    "nav.resume": "Résumé ↓",

    "hero.kicker": "Open to full-time software engineering roles — hybrid or remote",
    "hero.role1": "Senior Software Engineer",
    "hero.role2": "Java · JavaEE · Full-Stack",
    "hero.role3": "AI & ML",
    "hero.desc": "25+ years building production systems — from rail operations software and enterprise Java platforms to modern full-stack web applications and applied AI (LLMs, RAG, multi-agent architectures). Based in Dornbirn, Austria.",
    "hero.credo": "I'm not chasing a title. I'm chasing the feeling of loving what I build, every single day.",
    "hero.btnProjects": "View projects",
    "hero.btnCV": "Download CV",
    "hero.btnContact": "Contact",

    "emblem.alt": "Diagram tracing a rail track transforming into a neural network, symbolizing a career path from rail systems engineering to applied AI",

    "titleblock.role": "Role",
    "titleblock.roleVal": "Senior Software Engineer",
    "titleblock.domain": "Domain",
    "titleblock.domainVal": "Full-Stack · AI/ML",
    "titleblock.based": "Based in",
    "titleblock.basedVal": "Dornbirn, Austria",
    "titleblock.exp": "Experience",
    "titleblock.expVal": "25+ years",
    "titleblock.status": "Status",
    "titleblock.statusVal": "Open to work",

    "about.eyebrow": "01 — Profile",
    "about.title": "About",
    "about.p1": "I'm a senior software engineer with over 25 years of hands-on experience, ranging from Java/JavaEE backend systems to modern full-stack web applications built with React, Angular, and Node.js. In recent years I've built strong applied skills in AI and data: large language models (LLMs), RAG architectures, multi-agent systems with LangChain/LangGraph, machine learning with Python/PyTorch, and data pipelines.",
    "about.p2": "My background spans large-scale operational systems — including rail operations management for Tunisian Railways and enterprise ERP development — as well as technical training and mentoring of junior engineers. Since 2019 I've worked as an independent consultant, supervising and contributing to AI-powered platforms for clients including Talan and Capgemini.",
    "about.p3": "Now based in Dornbirn, Vorarlberg, and open to freelance/consulting engagements as well as a permanent role across the Bodenseeraum (Vorarlberg, Lake Constance, St. Gallen).",

    "skills.langFrameworks": "Languages & Frameworks",
    "skills.fullstack": "Full-Stack",
    "skills.aiData": "AI / ML & Data",
    "skills.dataPipelines": "Data Pipelines",
    "skills.other": "Other",
    "skills.algo": "Algorithms & Data Structures",
    "skills.testing": "Testing & QA",
    "skills.mentoring": "Technical Mentoring",

    "exp.eyebrow": "02 — Career",
    "exp.title": "Experience",
    "exp.subtitle": "Two and a half decades, tracked like a route — from rail systems to AI platforms.",
    "exp.present": "Present",
    "exp.s1.title": "Independent Consultant — Software & AI Development",
    "exp.s1.org": "Tunisia → Dornbirn, Austria",
    "exp.s1.b1": "Talan (France–Tunisia): supervised and contributed to an AI-powered data visualization platform automating analytics-dashboard migration across heterogeneous BI systems.",
    "exp.s1.b2": "Capgemini Tunisia: supervised and contributed to PharmaLink, a multi-actor web platform connecting patients, pharmacies, and administration, with automated prescription reading and pharmacy stock/reservation management.",
    "exp.s1.b3": "Deepened hands-on skills in Python, AI/ML (LLMs, RAG, PyTorch), and data pipelines.",
    "exp.s1.b4": "Used Jira for sprint and task tracking and GitLab for version control and CI/CD across consulting engagements, with occasional .NET-based components on select client work.",
    "exp.s1.b5": "Relocated to Dornbirn, Vorarlberg, Austria in July 2026; actively learning German for local integration. Full labor-market access (Rot-Weiß-Rot-Karte plus).",
    "exp.s2.title": "Software Engineering Trainer & Technical Mentor",
    "exp.s2.org": "TVTC (Technical and Vocational Corporation), Saudi Arabia",
    "exp.s2.b1": "Delivered technical consulting and application development within Saudi Arabia's national vocational training authority.",
    "exp.s2.b2": "Mentored junior developers in software engineering practice.",
    "exp.s3.title": "Senior Software Developer",
    "exp.s3.org": "SNCFT, Tunisair, and other Tunisian companies",
    "exp.s3.b1": "Senior developer on a large-scale rail operations management system: wagon and train management, GPS tracking, and scheduling, built with Java/JavaEE.",
    "exp.s3.b2": "Spearheaded the development of Tunisair's online flight booking and reservation platform, integrating real-time seat availability and payment processing.",
    "exp.s4.title": "Head of IT",
    "exp.s4.org": "SOGEF / SOGEGAT Group Holding, Tunisia",
    "exp.s4.b1": "Directed the group's IT function—infrastructure, networks, servers, and business applications—leading a multidisciplinary team across all subsidiaries, with responsibility for upgrades, systems reliability, and cross-entity IT governance.",
    "exp.s5.title": "Junior Software Development Engineer",
    "exp.s5.org": "OnlySoft, Tunisia",
    "exp.s5.b1": "Junior developer on early ERP systems for manufacturing clients including Delice, Meublatex, and Safia—covering production, inventory, and business-process modules, ERP data models, customization, and production environments.",

    "proj.eyebrow": "03 — Selected Work",
    "proj.title": "Projects",
    "proj.subtitle": "End-to-end builds — documented architecture, containerized services, and tested, typed code.",

    "status.progress": "In Progress",
    "status.delivered": "Delivered",
    "status.live": "Live",
    "links.repo": "Repository",
    "links.repoPrivate": "Repository (private)",
    "links.demo": "Live demo",

    "proj.fabriq.role": "Natural-Language-to-SQL Industrial Analytics Agent",
    "proj.fabriq.desc": "An agentic analytics tool that lets industrial teams query production data in plain language. Combines a typed full-stack app with a LangGraph-orchestrated reasoning layer that turns questions into safe, validated SQL.",

    "proj.fabricore.role": "Portfolio ERP System",
    "proj.fabricore.desc": "A modular ERP covering inventory, sales, procurement, production, finance, and logistics — built on a modern enterprise Java stack, with AI-assisted development reviewed commit by commit.",

    "proj.werkpilot.role": "Industrial Decision-Support Platform",
    "proj.werkpilot.desc": "A web-based operational dashboard for manufacturing SMEs in Vorarlberg. Consolidates machine, production, energy, scrap, downtime, and maintenance data into fixed KPIs, anomaly alerts, maintenance recommendations, and management reports.",
    "proj.werkpilot.tag1": "Full-Stack",
    "proj.werkpilot.tag2": "Dashboards",
    "proj.werkpilot.tag3": "Manufacturing Data",

    "proj.pharmalink.role": "Patient–Pharmacy Digital Platform",
    "proj.pharmalink.desc": "Connects patients and pharmacies in real time: medicine search, nearby-pharmacy lookup, treatment reservation, and prescription upload with OCR-based automatic extraction. Pharmacy side covers stock management, reservation processing, and notifications.",
    "proj.pharmalink.tag2": "Full-Stack",
    "proj.pharmalink.tag3": "Real-Time",

    "proj.triagedesk.role": "Triage Workflow Management Project",
    "proj.triagedesk.desc": "A project focused on organising triage workflows. Implementation details are available in the repository.",

    "proj.wicmic.role": "Intelligent IoT Water-Meter Monitoring Platform",
    "proj.wicmic.desc": "An on-premise IoT platform that retrofits mechanical water meters with ESP32-CAM image capture, computer vision/OCR, predictive monitoring, and a local LLM agent for anomaly alerts and French reports.",

    "proj.jiradash.role": "Jira Analytics & Dashboarding Platform",
    "proj.jiradash.desc": "A web platform that synchronises Jira data into MySQL and turns it into interactive dashboards, with automated analytics and chart-level role-based access control.",

    "proj.deutsch.role": "German Learning Web App (A1–C1)",
    "proj.deutsch.desc": "A self-built learning platform structured around the Studio 21 curriculum, covering levels A1 through C1 — built while learning German for integration in Austria.",

    "proj.skillpulse.role": "Real-Time Team Assessment & Training Platform",
    "proj.skillpulse.desc": "A live polling and interactive assessment platform for corporate training sessions, onboarding, and team skill checks — a web app with a real-time API and instant results.",
    "proj.skillpulse.tag2": "Real-Time API",
    "proj.skillpulse.tag3": "Web App",

    "proj.a1sim.role": "German A1 Oral Exam Trainer (PWA)",
    "proj.a1sim.desc": "A Progressive Web App helping French-speaking learners prepare for the A1 ÖIF/ÖSD oral exam in Austria — guided Hören/Sprechen practice, exam-style audio flow, and local microphone recording for self-review.",

    "cred.eyebrow": "04 — Credentials",
    "cred.title": "Certifications & Languages",
    "cred.certLabel": "Certification",
    "cred.eduLabel": "Education",
    "cred.nvidia": "Fundamentals of Deep Learning",
    "cred.edu1": "Engineering Degree, Computer Science — Tunisia, 1994",
    "cred.edu2": "DEA (Diplôme d'Études Approfondies), Computer Science — 1997",

    "lang.fr": "French", "lang.fluent": "Fluent",
    "lang.ar": "Arabic", "lang.native": "Native",
    "lang.en": "English", "lang.strong": "Strong proficiency",
    "lang.de": "German", "lang.beginner": "Beginner — actively learning",

    "contact.eyebrow": "05 — Get in touch",
    "contact.title": "Let's build something.",
    "contact.desc": "Open to freelance/consulting engagements and permanent roles across the Bodenseeraum.",
    "contact.btnCV": "Download CV",
    "contact.location": "Dornbirn, Vorarlberg, Austria",

    "meta.title": "Mohamed Lassoued — Senior Software Engineer, Full-Stack & AI/ML",
    "meta.desc": "Senior software engineer with 25+ years of experience across Java/JavaEE systems, full-stack web development, and applied AI/ML. Portfolio of end-to-end projects."
  },

  de: {
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.credentials": "Qualifikationen",
    "nav.resume": "Lebenslauf ↓",

    "hero.kicker": "Offen für eine Vollzeitstelle als Softwareentwickler — hybrid oder remote",
    "hero.role1": "Senior Softwareentwickler",
    "hero.role2": "Java · JavaEE · Full-Stack",
    "hero.role3": "KI & ML",
    "hero.desc": "25+ Jahre Erfahrung im Aufbau produktiver Systeme — von Softwarelösungen für den Bahnbetrieb und Enterprise-Java-Plattformen bis hin zu modernen Full-Stack-Webanwendungen und angewandter KI (LLMs, RAG, Multi-Agenten-Architekturen). Wohnhaft in Dornbirn, Österreich.",
    "hero.credo": "Ich strebe nicht nach einem Titel. Ich strebe nach dem Gefühl, jeden einzelnen Tag zu lieben, was ich erschaffe.",
    "hero.btnProjects": "Projekte ansehen",
    "hero.btnCV": "Lebenslauf herunterladen",
    "hero.btnContact": "Kontakt",

    "emblem.alt": "Diagramm, das eine Bahnstrecke zeigt, die sich in ein neuronales Netz verwandelt — sinnbildlich für den Werdegang von der Bahntechnik zur angewandten KI",

    "titleblock.role": "Rolle",
    "titleblock.roleVal": "Senior Softwareentwickler",
    "titleblock.domain": "Bereich",
    "titleblock.domainVal": "Full-Stack · KI/ML",
    "titleblock.based": "Standort",
    "titleblock.basedVal": "Dornbirn, Österreich",
    "titleblock.exp": "Erfahrung",
    "titleblock.expVal": "25+ Jahre",
    "titleblock.status": "Status",
    "titleblock.statusVal": "Offen für neue Projekte",

    "about.eyebrow": "01 — Profil",
    "about.title": "Über mich",
    "about.p1": "Ich bin Senior Softwareentwickler mit über 25 Jahren praktischer Erfahrung — von Java/JavaEE-Backend-Systemen bis zu modernen Full-Stack-Webanwendungen mit React, Angular und Node.js. In den letzten Jahren habe ich fundierte Kenntnisse in KI und Daten aufgebaut: Large Language Models (LLMs), RAG-Architekturen, Multi-Agenten-Systeme mit LangChain/LangGraph, Machine Learning mit Python/PyTorch sowie Datenpipelines.",
    "about.p2": "Mein Hintergrund umfasst großangelegte operative Systeme — unter anderem das Bahnbetriebsmanagement für die tunesische Eisenbahngesellschaft und die Entwicklung von Enterprise-ERP-Systemen — sowie technische Schulung und Mentoring junger Entwickler. Seit 2019 arbeite ich als selbstständiger Berater und habe KI-gestützte Plattformen für Kunden wie Talan und Capgemini betreut und mitentwickelt.",
    "about.p3": "Aktuell wohnhaft in Dornbirn, Vorarlberg, und offen für Freelance-/Beratungsprojekte sowie eine Festanstellung im gesamten Bodenseeraum (Vorarlberg, Bodensee, St. Gallen).",

    "skills.langFrameworks": "Sprachen & Frameworks",
    "skills.fullstack": "Full-Stack",
    "skills.aiData": "KI / ML & Daten",
    "skills.dataPipelines": "Datenpipelines",
    "skills.other": "Sonstiges",
    "skills.algo": "Algorithmen & Datenstrukturen",
    "skills.testing": "Tests & QA",
    "skills.mentoring": "Technisches Mentoring",

    "exp.eyebrow": "02 — Werdegang",
    "exp.title": "Erfahrung",
    "exp.subtitle": "Zweieinhalb Jahrzehnte, dargestellt wie eine Streckenführung — von Bahnsystemen zu KI-Plattformen.",
    "exp.present": "Heute",
    "exp.s1.title": "Selbstständiger Berater — Software- & KI-Entwicklung",
    "exp.s1.org": "Tunesien → Dornbirn, Österreich",
    "exp.s1.b1": "Talan (Frankreich–Tunesien): Betreuung und Mitwirkung an einer KI-gestützten Datenvisualisierungsplattform zur Automatisierung der Migration von Analyse-Dashboards zwischen heterogenen BI-Systemen.",
    "exp.s1.b2": "Capgemini Tunesien: Betreuung und Mitwirkung an PharmaLink, einer webbasierten Multi-Akteurs-Plattform, die Patienten, Apotheken und Verwaltung verbindet, mit automatisierter Rezepterkennung sowie Bestands- und Reservierungsverwaltung für Apotheken.",
    "exp.s1.b3": "Vertiefung praktischer Kenntnisse in Python, KI/ML (LLMs, RAG, PyTorch) und Datenpipelines.",
    "exp.s1.b4": "Einsatz von Jira für Sprint- und Aufgabenverwaltung sowie GitLab für Versionskontrolle und CI/CD in Beratungsprojekten; gelegentlich .NET-basierte Komponenten in ausgewählten Kundenprojekten.",
    "exp.s1.b5": "Umzug nach Dornbirn, Vorarlberg, im Juli 2026; aktives Deutschlernen zur lokalen Integration. Uneingeschränkter Arbeitsmarktzugang (Rot-Weiß-Rot-Karte plus).",
    "exp.s2.title": "Software-Trainer & technischer Mentor",
    "exp.s2.org": "TVTC (Technical and Vocational Corporation), Saudi-Arabien",
    "exp.s2.b1": "Technische Beratung und Anwendungsentwicklung innerhalb der nationalen Berufsbildungsbehörde Saudi-Arabiens.",
    "exp.s2.b2": "Mentoring junger Entwickler in der Softwareentwicklungspraxis.",
    "exp.s3.title": "Senior Softwareentwickler",
    "exp.s3.org": "SNCFT, Tunisair und weitere tunesische Unternehmen",
    "exp.s3.b1": "Senior Entwickler für ein großangelegtes Bahnbetriebs-Managementsystem: Wagen- und Zugverwaltung, GPS-Tracking und Fahrplanung, entwickelt mit Java/JavaEE.",
    "exp.s3.b2": "Federführende Entwicklung der Online-Flugbuchungs- und Reservierungsplattform von Tunisair mit Echtzeit-Sitzplatzverfügbarkeit und Zahlungsabwicklung.",
    "exp.s4.title": "IT-Leiter",
    "exp.s4.org": "SOGEF / SOGEGAT Group Holding, Tunesien",
    "exp.s4.b1": "Leitung der gruppenweiten IT-Funktion—Infrastruktur, Netzwerke, Server und Geschäftsanwendungen—sowie eines multidisziplinären Teams in allen Tochtergesellschaften; verantwortlich für Upgrades, Systemzuverlässigkeit und gruppenweite IT-Governance.",
    "exp.s5.title": "Junior Softwareentwicklungsingenieur",
    "exp.s5.org": "OnlySoft, Tunesien",
    "exp.s5.b1": "Juniorentwickler für frühe ERP-Systeme bei Industriekunden wie Delice, Meublatex und Safia—mit Modulen für Produktion, Lager und Geschäftsprozesse sowie ERP-Datenmodellen, Anpassung und Produktivumgebungen.",

    "proj.eyebrow": "03 — Ausgewählte Projekte",
    "proj.title": "Projekte",
    "proj.subtitle": "End-to-End-Umsetzungen — dokumentierte Architektur, containerisierte Services und getesteter, typisierter Code.",

    "status.progress": "In Arbeit",
    "status.delivered": "Abgeschlossen",
    "status.live": "Live",
    "links.repo": "Repository",
    "links.repoPrivate": "Repository (privat)",
    "links.demo": "Live-Demo",

    "proj.fabriq.role": "Natural-Language-to-SQL-Agent für Industrieanalytik",
    "proj.fabriq.desc": "Ein agentenbasiertes Analysetool, mit dem Industrieteams Produktionsdaten in natürlicher Sprache abfragen können. Kombiniert eine typisierte Full-Stack-Anwendung mit einer LangGraph-orchestrierten Reasoning-Schicht, die Fragen in sichere, validierte SQL-Abfragen umwandelt.",

    "proj.fabricore.role": "Portfolio-ERP-System",
    "proj.fabricore.desc": "Ein modulares ERP-System für Lager, Vertrieb, Beschaffung, Produktion, Finanzen und Logistik — aufgebaut auf einem modernen Enterprise-Java-Stack, mit KI-unterstützter Entwicklung, die Commit für Commit überprüft wird.",

    "proj.werkpilot.role": "Industrielle Entscheidungsunterstützungsplattform",
    "proj.werkpilot.desc": "Ein webbasiertes Betriebs-Dashboard für produzierende KMU in Vorarlberg. Bündelt Maschinen-, Produktions-, Energie-, Ausschuss-, Stillstands- und Wartungsdaten zu festen KPIs, Anomalie-Warnungen, Wartungsempfehlungen und Management-Berichten.",
    "proj.werkpilot.tag1": "Full-Stack",
    "proj.werkpilot.tag2": "Dashboards",
    "proj.werkpilot.tag3": "Fertigungsdaten",

    "proj.pharmalink.role": "Digitale Plattform für Patienten und Apotheken",
    "proj.pharmalink.desc": "Verbindet Patienten und Apotheken in Echtzeit: Medikamentensuche, Suche nach nahegelegenen Apotheken, Reservierung von Behandlungen und Rezept-Upload mit automatischer OCR-Erkennung. Für Apotheken: Bestandsverwaltung, Reservierungsabwicklung und Benachrichtigungen.",
    "proj.pharmalink.tag2": "Full-Stack",
    "proj.pharmalink.tag3": "Echtzeit",

    "proj.triagedesk.role": "Projekt zur Verwaltung von Triage-Abläufen",
    "proj.triagedesk.desc": "Ein Projekt zur Organisation von Triage-Abläufen. Details zur Umsetzung sind im Repository verfügbar.",

    "proj.wicmic.role": "Intelligente IoT-Plattform zur Wasserzählerüberwachung",
    "proj.wicmic.desc": "Eine On-Premise-IoT-Plattform, die mechanische Wasserzähler mit ESP32-CAM-Bilderfassung, Computer Vision/OCR, prädiktiver Überwachung und einem lokalen LLM-Agenten für Anomaliewarnungen und französische Berichte nachrüstet.",

    "proj.jiradash.role": "Plattform für Jira-Analytik und Dashboarding",
    "proj.jiradash.desc": "Eine Webplattform, die Jira-Daten mit MySQL synchronisiert und in interaktive Dashboards mit automatisierter Analytik und rollenbasierter Zugriffskontrolle auf Diagramme umwandelt.",

    "proj.deutsch.role": "Deutsch-Lern-Webanwendung (A1–C1)",
    "proj.deutsch.desc": "Eine selbst entwickelte Lernplattform nach dem Studio-21-Lehrplan, die die Niveaus A1 bis C1 abdeckt — entstanden während des eigenen Deutschlernens zur Integration in Österreich.",

    "proj.skillpulse.role": "Echtzeit-Plattform für Teamschulung & Beurteilung",
    "proj.skillpulse.desc": "Eine Live-Abstimmungs- und Bewertungsplattform für Unternehmensschulungen, Onboarding und Team-Kompetenzchecks — eine Web-App mit Echtzeit-API und sofortigen Ergebnissen.",
    "proj.skillpulse.tag2": "Echtzeit-API",
    "proj.skillpulse.tag3": "Web-App",

    "proj.a1sim.role": "Trainer für die mündliche A1-Prüfung (PWA)",
    "proj.a1sim.desc": "Eine Progressive Web App, die französischsprachigen Lernenden hilft, sich auf die mündliche ÖIF/ÖSD-A1-Prüfung in Österreich vorzubereiten — mit geführtem Hör- und Sprechtraining, prüfungsnahem Audioablauf und lokaler Mikrofonaufnahme zur Selbstkontrolle.",

    "cred.eyebrow": "04 — Qualifikationen",
    "cred.title": "Zertifikate & Sprachen",
    "cred.certLabel": "Zertifikat",
    "cred.eduLabel": "Ausbildung",
    "cred.nvidia": "Grundlagen des Deep Learning",
    "cred.edu1": "Ingenieurabschluss, Informatik — Tunesien, 1994",
    "cred.edu2": "DEA (Vertiefendes Studiendiplom), Informatik — 1997",

    "lang.fr": "Französisch", "lang.fluent": "Fließend",
    "lang.ar": "Arabisch", "lang.native": "Muttersprache",
    "lang.en": "Englisch", "lang.strong": "Gute Kenntnisse",
    "lang.de": "Deutsch", "lang.beginner": "Anfänger — aktives Lernen",

    "contact.eyebrow": "05 — Kontakt aufnehmen",
    "contact.title": "Lass uns etwas aufbauen.",
    "contact.desc": "Offen für Freelance-/Beratungsprojekte und Festanstellungen im gesamten Bodenseeraum.",
    "contact.btnCV": "Lebenslauf herunterladen",
    "contact.location": "Dornbirn, Vorarlberg, Österreich",

    "meta.title": "Mohamed Lassoued — Senior Softwareentwickler, Full-Stack & KI/ML",
    "meta.desc": "Senior Softwareentwickler mit über 25 Jahren Erfahrung in Java/JavaEE-Systemen, Full-Stack-Webentwicklung und angewandter KI/ML. Portfolio von End-to-End-Projekten."
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    if (dict[key] !== undefined) {
      el.setAttribute('alt', dict[key]);
    }
  });

  document.documentElement.setAttribute('lang', lang);
  document.title = dict['meta.title'] || document.title;
  const descMeta = document.getElementById('pageDesc');
  if (descMeta && dict['meta.desc']) descMeta.setAttribute('content', dict['meta.desc']);

  document.querySelectorAll('.langswitch__btn').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('ml-portfolio-lang', lang); } catch (e) { /* ignore */ }
}

document.addEventListener('DOMContentLoaded', () => {
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('ml-portfolio-lang');
    if (saved === 'en' || saved === 'de') initialLang = saved;
  } catch (e) { /* ignore */ }

  applyLanguage(initialLang);

  document.querySelectorAll('.langswitch__btn').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
});
