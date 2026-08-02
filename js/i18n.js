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
    "cv.href": "assets/CV_Mohamed_Lassoued_EN.pdf",

    "hero.kicker": "Open to full-time software engineering roles — hybrid or remote",
    "hero.role1": "Senior Software & AI Engineer",
    "hero.role2": "Full-Stack · LLMs · RAG",
    "hero.role3": "Agentic Workloads",
    "hero.desc": "Product-minded full-stack engineer with 25+ years building and shipping real systems end-to-end — frontend, backend, APIs, and databases. Recent focus: applied AI, LLMs, RAG, and agentic workloads. Based in Dornbirn, Austria.",
    "hero.credo": "I'm not chasing a title. I'm chasing the feeling of loving what I build, every single day.",
    "hero.btnProjects": "View projects",
    "hero.btnCV": "Download CV",
    "hero.btnContact": "Contact",

    "emblem.alt": "Diagram tracing a rail track transforming into a neural network, symbolizing a career path from rail systems engineering to applied AI",

    "titleblock.role": "Role",
    "titleblock.roleVal": "Senior Software & AI Engineer",
    "titleblock.domain": "Domain",
    "titleblock.domainVal": "Full-Stack · LLMs · RAG",
    "titleblock.based": "Based in",
    "titleblock.basedVal": "Dornbirn, Austria",
    "titleblock.exp": "Experience",
    "titleblock.expVal": "25+ years",
    "titleblock.status": "Status",
    "titleblock.statusVal": "Open to work",

    "about.eyebrow": "01 — Profile",
    "about.title": "About",
    "about.p1": "Product-minded full-stack engineer with 25+ years of experience building and shipping real systems end-to-end — frontend, backend, APIs, and databases. I turn ambiguous problems into working products with clean UX and reliable backend logic, and stay accountable beyond release through monitoring, debugging, and production improvements.",
    "about.p2": "My recent focus is applied AI: LLMs, RAG systems, MCP, and agentic workflows integrated into real applications. I am comfortable moving fast across the stack, working with ambiguity, and owning outcomes. My background also spans large-scale rail operations systems, enterprise ERP development, technical mentoring, and consulting for clients including Talan and Capgemini.",
    "about.p3": "Based in Dornbirn, Vorarlberg, Austria, with full labor-market access (Rot-Weiß-Rot-Karte plus). English is my primary working language; I am actively learning German for local integration.",

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
    "exp.s2.title": "Software Engineering Consultant & Technical Mentor",
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
    "proj.fabriq.desc": "An agentic natural-language-to-SQL analytics assistant for industrial SMEs, designed for security and correctness with guarded read-only SQL, execution-based evaluation, observability, and CI.",

    "proj.fabricore.role": "Portfolio ERP System",
    "proj.fabricore.desc": "A transactional operations core for an industrial SME, covering auditable inventory, production, procurement, shipments, finance, controlled multi-currency reporting, and secure ERP integration.",

    "proj.werkpilot.role": "Industrial Decision-Support Platform",
    "proj.werkpilot.desc": "A decision-support and operations platform for industrial SMEs, with traceable CSV imports, backend-computed KPIs, explainable anomaly detection, maintenance workflows, and RBAC audit trails.",
    "proj.werkpilot.tag1": "Full-Stack",
    "proj.werkpilot.tag2": "Dashboards",
    "proj.werkpilot.tag3": "Manufacturing Data",

    "proj.pharmalink.role": "Multilingual Patient–Pharmacy Platform",
    "proj.pharmalink.desc": "A privacy- and availability-first platform for medicine availability and reservations: PostGIS stock search, end-to-end reservation workflows, asynchronous prescription OCR with human validation, granular permissions, audit logging, and real-time notifications.",
    "proj.pharmalink.tag2": "Full-Stack",
    "proj.pharmalink.tag3": "Real-Time",

    "proj.triagedesk.role": "AI-Assisted Customer-Support Helpdesk",
    "proj.triagedesk.desc": "A human-in-the-loop, cost-aware helpdesk where an LLM classifies, prioritises, and drafts responses; staff approve every outgoing reply, while RAG and per-call cost, token, and latency audits support real AI ROI.",

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
    "lang.en": "English", "lang.strong": "Professional working proficiency",
    "lang.de": "German", "lang.beginner": "Beginner — actively learning",

    "contact.eyebrow": "05 — Get in touch",
    "contact.title": "Let's build something.",
    "contact.desc": "Open to full-time software engineering roles — hybrid or remote.",
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
    "cv.href": "assets/CV_Mohamed_Lassoued_DE.pdf",

    "hero.kicker": "Offen für eine Vollzeitstelle als Softwareentwickler — hybrid oder remote",
    "hero.role1": "Senior Software- & KI-Ingenieur",
    "hero.role2": "Full-Stack · LLMs · RAG",
    "hero.role3": "Agentische Workloads",
    "hero.desc": "Produktorientierter Full-Stack-Ingenieur mit über 25 Jahren Erfahrung in der End-to-End-Entwicklung realer Systeme — Frontend, Backend, APIs und Datenbanken. Aktueller Schwerpunkt: angewandte KI, LLMs, RAG und agentische Workloads. Wohnhaft in Dornbirn, Österreich.",
    "hero.credo": "Ich strebe nicht nach einem Titel. Ich strebe nach dem Gefühl, jeden einzelnen Tag zu lieben, was ich erschaffe.",
    "hero.btnProjects": "Projekte ansehen",
    "hero.btnCV": "Lebenslauf herunterladen",
    "hero.btnContact": "Kontakt",

    "emblem.alt": "Diagramm, das eine Bahnstrecke zeigt, die sich in ein neuronales Netz verwandelt — sinnbildlich für den Werdegang von der Bahntechnik zur angewandten KI",

    "titleblock.role": "Rolle",
    "titleblock.roleVal": "Senior Software- & KI-Ingenieur",
    "titleblock.domain": "Bereich",
    "titleblock.domainVal": "Full-Stack · LLMs · RAG",
    "titleblock.based": "Standort",
    "titleblock.basedVal": "Dornbirn, Österreich",
    "titleblock.exp": "Erfahrung",
    "titleblock.expVal": "25+ Jahre",
    "titleblock.status": "Status",
    "titleblock.statusVal": "Offen für neue Projekte",

    "about.eyebrow": "01 — Profil",
    "about.title": "Über mich",
    "about.p1": "Produktorientierter Full-Stack-Ingenieur mit über 25 Jahren Erfahrung in der End-to-End-Entwicklung realer Systeme — Frontend, Backend, APIs und Datenbanken. Ich mache aus unklaren Anforderungen funktionierende Produkte mit klarer UX und zuverlässiger Backend-Logik und übernehme auch nach dem Release Verantwortung durch Monitoring, Debugging und Verbesserungen im Betrieb.",
    "about.p2": "Mein aktueller Schwerpunkt ist angewandte KI: LLMs, RAG-Systeme, MCP und agentische Workflows in realen Anwendungen. Ich bewege mich sicher über den gesamten Stack, arbeite gut mit Unklarheit und übernehme Verantwortung für Ergebnisse. Mein Hintergrund umfasst außerdem großangelegte Bahnbetriebssysteme, Enterprise-ERP-Entwicklung, technisches Mentoring und Beratungsprojekte für Kunden wie Talan und Capgemini.",
    "about.p3": "Wohnhaft in Dornbirn, Vorarlberg, Österreich, mit uneingeschränktem Arbeitsmarktzugang (Rot-Weiß-Rot-Karte plus). Englisch ist meine primäre Arbeitssprache; für die lokale Integration lerne ich aktiv Deutsch.",

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
    "exp.s2.title": "Software-Engineering-Berater & technischer Mentor",
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
    "proj.fabriq.desc": "Ein agentischer Assistent für Industrieanalytik, der natürlichsprachliche Fragen in SQL übersetzt — mit abgesicherten Read-only-Abfragen, ausführungsbasierter Evaluation, Observability und CI für Sicherheit und Korrektheit.",

    "proj.fabricore.role": "Portfolio-ERP-System",
    "proj.fabricore.desc": "Ein transaktionaler Operations-Kern für ein Industrie-KMU mit prüfbarem Lager, Produktion, Beschaffung, Versand, Finanzen, kontrolliertem Mehrwährungsreporting und sicherer ERP-Integration.",

    "proj.werkpilot.role": "Industrielle Entscheidungsunterstützungsplattform",
    "proj.werkpilot.desc": "Eine Entscheidungs- und Operationsplattform für Industrie-KMU mit nachvollziehbaren CSV-Importen, backend-berechneten KPIs, erklärbarer Anomalieerkennung, Wartungsworkflows und RBAC-Audit-Trails.",
    "proj.werkpilot.tag1": "Full-Stack",
    "proj.werkpilot.tag2": "Dashboards",
    "proj.werkpilot.tag3": "Fertigungsdaten",

    "proj.pharmalink.role": "Mehrsprachige Patienten-Apotheken-Plattform",
    "proj.pharmalink.desc": "Eine auf Datenschutz und Verfügbarkeit ausgerichtete Plattform für Medikamentenverfügbarkeit und Reservierungen: PostGIS-Bestandssuche, End-to-End-Reservierungen, asynchrone Rezept-OCR mit menschlicher Validierung, granulare Berechtigungen, Audit-Logging und Echtzeitbenachrichtigungen.",
    "proj.pharmalink.tag2": "Full-Stack",
    "proj.pharmalink.tag3": "Echtzeit",

    "proj.triagedesk.role": "KI-gestützter Customer-Support-Helpdesk",
    "proj.triagedesk.desc": "Ein Human-in-the-loop- und kostenbewusster Helpdesk: Ein LLM klassifiziert, priorisiert und entwirft Antworten; Mitarbeitende genehmigen jede ausgehende Antwort. RAG sowie Kosten-, Token- und Latenz-Audits je Aufruf machen den KI-Nutzen messbar.",

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
    "lang.en": "Englisch", "lang.strong": "Professionelle Arbeitssprache",
    "lang.de": "Deutsch", "lang.beginner": "Anfänger — aktives Lernen",

    "contact.eyebrow": "05 — Kontakt aufnehmen",
    "contact.title": "Lass uns etwas aufbauen.",
    "contact.desc": "Offen für Vollzeitstellen in der Softwareentwicklung — hybrid oder remote.",
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

  document.querySelectorAll('[data-cv-link]').forEach((el) => {
    if (dict['cv.href']) el.setAttribute('href', dict['cv.href']);
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
