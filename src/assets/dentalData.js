// DrChrono-inspired clinical, EHR, Practice Management, RCM, and Patient Engagement datasets (Zero Metrics)

export const NAV_SOLUTIONS_MENU = [
  {
    id: 'ehr',
    title: 'Electronic Dental Record (EHR)',
    description: 'Customizable SOAP notes, interactive odontograms, eRx, and lab tracking.',
    href: '#pillars',
    tag: 'Core EHR',
  },
  {
    id: 'pm',
    title: 'Practice Management',
    description: 'Multi-chair scheduling, configurable intake workflows, and front-office task routing.',
    href: '#pillars',
    tag: 'Operations',
  },
  {
    id: 'rcm',
    title: 'Dental Billing & RCM',
    description: 'Real-time eligibility checks, AI claim scrubbing, ERA posting, and Text-to-Pay.',
    href: '#pillars',
    tag: 'Revenue Cycle',
  },
  {
    id: 'engagement',
    title: 'Patient Engagement & Portal',
    description: 'Online self-scheduling, iPad check-in kiosk, digital consents, and telehealth.',
    href: '#pillars',
    tag: 'Patient Portal',
  },
  {
    id: 'ai-suite',
    title: 'AI Scribe & X-Ray Assistant',
    description: 'Ambient voice-to-SOAP charting and computer-aided radiographic review.',
    href: '#ai-diagnostics',
    tag: 'Embedded AI',
  },
  {
    id: 'mobile-ipad',
    title: 'iPad & Mobile Point-of-Care',
    description: 'Chairside iPad charting, freehand drawing, and waiting room kiosk mode.',
    href: '#ipad-mobility',
    tag: 'Web & iPad',
  },
];

export const NAV_SPECIALTIES_MENU = [
  { title: 'General & Family Dentistry', sub: 'Comprehensive charting, hygiene recall & restorative plans', href: '#solutions' },
  { title: 'Orthodontics & Clear Aligners', sub: 'Multi-stage aligner tracking, ceph imaging & payment plans', href: '#solutions' },
  { title: 'Oral & Maxillofacial Surgery', sub: 'Surgical anesthesia logs, CBCT workflows & referral intake', href: '#solutions' },
  { title: 'Endodontics & Periodontics', sub: 'Periapical diagnostics, root morphology & pocket charting', href: '#solutions' },
  { title: 'Pediatric Dentistry', sub: 'Primary dentition odontograms & family portal linking', href: '#solutions' },
  { title: 'Multi-Location Dental Groups', sub: 'Centralized EHR, cross-branch scheduling & unified billing', href: '#solutions' },
];

export const DRCHRONO_PILLARS = [
  {
    id: 'ehr',
    shortLabel: 'EHR & Clinical Charting',
    badge: 'Pillar 01 • All-in-One Cloud EHR',
    title: 'Chart faster with customizable dental templates and interactive odontograms.',
    description:
      'Designed around how clinicians actually work. Document consultations using specialty SOAP templates, tap-to-chart tooth surfaces, send electronic prescriptions (eRx), and review dental imaging from a single screen.',
    highlights: [
      'Interactive adult & pediatric odontograms with surface-level charting',
      'Customizable SOAP note templates, clinical macros, and one-click shortcuts',
      'Integrated e-Prescribing (eRx) with automated allergy & interaction checks',
      'Direct lab order tracking and chairside radiographic attachment',
    ],
    previewType: 'ehr',
  },
  {
    id: 'pm',
    shortLabel: 'Practice Management',
    badge: 'Pillar 02 • Front-Office Automation',
    title: 'Streamline front-desk workflows from appointment booking to chair turnover.',
    description:
      'Eliminate manual bottlenecks with a centralized multi-provider, multi-chair calendar, configurable appointment profiles, automated patient recall reminders, and live operatory status tracking.',
    highlights: [
      'Color-coded multi-chair and multi-provider appointment scheduling',
      'Live patient flow tracker from Waiting Room to Operatory to Checkout',
      'Automated SMS, email, and voice reminders to reduce manual follow-ups',
      'Centralized task queues for referrals, lab cases, and unsigned charts',
    ],
    previewType: 'pm',
  },
  {
    id: 'rcm',
    shortLabel: 'Billing & Revenue Cycle',
    badge: 'Pillar 03 • Integrated Dental Billing & RCM',
    title: 'Connect chairside procedures directly to claims, eligibility, and patient billing.',
    description:
      'Unify clinical documentation and financial operations to eliminate duplicate data entry. Verify insurance coverage automatically before visits, scrub claims with rule-aware checks, and offer frictionless patient payment options.',
    highlights: [
      'Automated pre-appointment insurance eligibility verification',
      'Pre-loaded procedure & billing profiles linked directly to completed charting',
      'Electronic claims submission with attached X-rays and clinical narratives',
      'Digital patient invoices, split payment plans, and online portal bill pay',
    ],
    previewType: 'rcm',
  },
  {
    id: 'engagement',
    shortLabel: 'Patient Engagement',
    badge: 'Pillar 04 • Patient Portal & iPad Kiosk',
    title: 'Deliver a modern, paperless patient experience before, during, and after every visit.',
    description:
      'Empower patients with an online self-scheduling widget, pre-visit digital intake forms, waiting-room iPad kiosk check-in, two-way secure messaging, and integrated tele-dentistry video consultations.',
    highlights: [
      'Dedicated Patient Portal for health records, treatment plans, and messaging',
      'Paperless iPad Check-In Kiosk mode for waiting room consent & medical history',
      'Embeddable online appointment booking widget for your clinic website',
      'Built-in encrypted video consultations for remote triage and follow-ups',
    ],
    previewType: 'engagement',
  },
];

export const HERO_APPOINTMENTS = [
  {
    id: 'APT-1042',
    time: 'Morning Slot',
    patient: 'Elena Rostova',
    procedure: 'Ceramic Crown Prep (#16)',
    chair: 'Operatory 01 • Dr. A. Vance',
    status: 'In Chair',
    statusTone: 'emerald',
    xrayAttached: true,
    eligibility: 'Eligibility Verified',
  },
  {
    id: 'APT-1043',
    time: 'Mid-Morning',
    patient: 'Marcus Sterling',
    procedure: 'Implant Consult + Panoramic Review',
    chair: 'Operatory 02 • Dr. S. Patel',
    status: 'Checked In via iPad',
    statusTone: 'teal',
    xrayAttached: true,
    eligibility: 'Eligibility Verified',
  },
  {
    id: 'APT-1044',
    time: 'Late Morning',
    patient: 'Hannah Lindqvist',
    procedure: 'Clear Aligner Progress Check',
    chair: 'Operatory 03 • Dr. K. Chen',
    status: 'Intake Completed',
    statusTone: 'slate',
    xrayAttached: false,
    eligibility: 'Active Plan',
  },
  {
    id: 'APT-1045',
    time: 'Afternoon Slot',
    patient: 'Devon Brooks',
    procedure: 'Root Canal Obturation (#36)',
    chair: 'Operatory 01 • Dr. A. Vance',
    status: 'Awaiting X-ray',
    statusTone: 'amber',
    xrayAttached: true,
    eligibility: 'Pre-Auth Approved',
  },
];

export const XRAY_MODALITIES = [
  {
    id: 'bitewing',
    label: 'Bitewing X-ray',
    sublabel: 'Right Posterior • Series BW-2',
    patientName: 'Elena Rostova (Chart #PT-8841)',
    captureDate: 'Current Clinical Session',
    sensorInfo: 'CMOS Intraoral Sensor • Digital Radiograph',
    aiStatus: 'Illustrative Observations Ready',
    summaryNote: 'Posterior interproximal and alveolar crest evaluation (FDI Teeth #15–#17, #45–#47).',
    findings: [
      {
        id: 'f-16',
        region: 'Region 16 (Distal)',
        title: 'Possible carious lesion',
        detail: 'Radiolucency observed at the distal enamel-dentin junction of maxillary right first molar (#16). Recommend tactile and clinical verification.',
        severity: 'Attention',
        confidence: 'Illustrative Match',
        coords: { x: 34, y: 27, w: 18, h: 21 },
        toothNumber: '16',
      },
      {
        id: 'f-26',
        region: 'Region 46 (Crestal)',
        title: 'Suspected bone loss • Requires further evaluation',
        detail: 'Mild horizontal alveolar crest contour change noted interproximally between #45 and #46. Correlate with periodontal probing chart.',
        severity: 'Review',
        confidence: 'Illustrative Match',
        coords: { x: 58, y: 54, w: 20, h: 22 },
        toothNumber: '46',
      },
      {
        id: 'f-36',
        region: 'Region 15 & 45',
        title: 'No significant finding identified',
        detail: 'Intact lamina dura, uniform periodontal ligament space contour, and sound coronal restoration margins observed.',
        severity: 'Clear',
        confidence: 'Baseline Normal',
        coords: { x: 14, y: 30, w: 15, h: 24 },
        toothNumber: '15',
      },
    ],
  },
  {
    id: 'panoramic',
    label: 'Dental Panoramic X-ray',
    sublabel: 'Full Arch OPG • Standard Bite',
    patientName: 'Marcus Sterling (Chart #PT-9014)',
    captureDate: 'Current Clinical Session',
    sensorInfo: 'Digital Panoramic OPG • Full Arch Survey',
    aiStatus: 'Illustrative Observations Ready',
    summaryNote: 'Full maxillo-mandibular survey including TMJ condyles, maxillary sinuses, and third molar positioning.',
    findings: [
      {
        id: 'p-16',
        region: 'Region 16 (Mesial)',
        title: 'Possible carious lesion',
        detail: 'Recurrent radiolucent shadow beneath existing mesio-occlusal composite restoration on tooth #16.',
        severity: 'Attention',
        confidence: 'Illustrative Match',
        coords: { x: 24, y: 31, w: 13, h: 18 },
        toothNumber: '16',
      },
      {
        id: 'p-26',
        region: 'Region 26 (Apical)',
        title: 'Requires further evaluation',
        detail: 'Subtle widening of apical periodontal ligament space near mesiobuccal root of #26. Suggest selective periapical view.',
        severity: 'Review',
        confidence: 'Illustrative Match',
        coords: { x: 64, y: 30, w: 13, h: 18 },
        toothNumber: '26',
      },
      {
        id: 'p-36',
        region: 'Region 36',
        title: 'No significant finding identified',
        detail: 'Existing endodontic root filling and full coverage crown on #36 show stable bone architecture.',
        severity: 'Clear',
        confidence: 'Baseline Normal',
        coords: { x: 66, y: 57, w: 13, h: 19 },
        toothNumber: '36',
      },
    ],
  },
  {
    id: 'periapical',
    label: 'Periapical X-ray',
    sublabel: 'Mandibular Left Molar (#35–#37)',
    patientName: 'Devon Brooks (Chart #PT-7429)',
    captureDate: 'Current Clinical Session',
    sensorInfo: 'Parallel Technique PA • Periradicular View',
    aiStatus: 'Illustrative Observations Ready',
    summaryNote: 'High-resolution periradicular and root canal morphology visualization for mandibular molars.',
    findings: [
      {
        id: 'pa-36',
        region: 'Region 36 (Periapical)',
        title: 'Potential periapical radiolucency',
        detail: 'Well-circumscribed radiolucent area noted at the distal root apex of #36. Recommend vitality testing and endodontic assessment.',
        severity: 'Attention',
        confidence: 'Illustrative Match',
        coords: { x: 43, y: 63, w: 22, h: 22 },
        toothNumber: '36',
      },
      {
        id: 'pa-26',
        region: 'Region 35 (Distal Crest)',
        title: 'Areas requiring further clinical review',
        detail: 'Minor calculus spur and localized crestal lamina dura blunting on the distal aspect of second premolar (#35).',
        severity: 'Review',
        confidence: 'Illustrative Match',
        coords: { x: 20, y: 42, w: 18, h: 20 },
        toothNumber: '35',
      },
      {
        id: 'pa-37',
        region: 'Region 37',
        title: 'No significant finding identified',
        detail: 'Normal trabecular bone density, intact pulp chamber contour, and uniform PDL space around #37.',
        severity: 'Clear',
        confidence: 'Baseline Normal',
        coords: { x: 69, y: 36, w: 18, h: 32 },
        toothNumber: '37',
      },
    ],
  },
];

export const CORE_FEATURES_DATA = [
  {
    id: 'patient-management',
    badge: 'Patient Management & Portal',
    title: 'Centralized Patient Profiles & Paperless Intake',
    description:
      'Every clinical detail in a single longitudinal timeline—personal details, medical alerts, allergies, medications, digital consent forms, and complete visit history.',
    bullets: [
      'Centralized patient profiles & family account linking',
      'Paperless digital intake & iPad waiting-room check-in',
      'Medical & dental history questionnaires',
      'High-visibility clinical allergy & medication alerts',
      'Previous treatments, signed consents & visit history',
    ],
  },
  {
    id: 'appointment-management',
    badge: 'Smart Appointment Management',
    title: 'Multi-Chair Calendar & Online Self-Scheduling',
    description:
      'Coordinate dentists, hygienists, and treatment chairs effortlessly with configurable appointment profiles, automated reminders, and cancellation waitlists.',
    bullets: [
      'Color-coded calendar scheduling by procedure type',
      'Real-time dentist availability & operatory chair allocation',
      'Automated SMS, email & voice appointment reminders',
      'Multi-visit follow-up scheduling & hygiene recall queues',
      'Online booking widget & daily operatory flow overview',
    ],
  },
  {
    id: 'digital-records',
    badge: 'Digital Dental EHR & eRx',
    title: 'Interactive Odontograms, SOAP Notes & e-Prescribing',
    description:
      'Chart existing restorations, pathologies, and planned procedures directly onto an interactive odontogram—paired with customizable SOAP templates and integrated eRx.',
    bullets: [
      'Interactive 5-surface digital odontograms (FDI / Universal)',
      'Tooth-wise clinical records & periodontal pocket charting',
      'Customizable SOAP clinical notes & ambient voice dictation',
      'Electronic prescribing (eRx) with allergy cross-checking',
      'Diagnosis records (ICD/CDT), freehand draw & attachments',
    ],
  },
  {
    id: 'treatment-planning',
    badge: 'Treatment Planning',
    title: 'Multi-Stage Treatment Plans & Chairside Sign-Off',
    description:
      'Present clear, phased treatment options on Web or iPad with transparent procedure breakdowns, digital patient e-signatures, and unscheduled phase tracking.',
    bullets: [
      'Multi-stage treatment plans sorted by clinical priority',
      'Procedure-wise coverage & patient responsibility breakdowns',
      'Visual treatment progress tracking across visits',
      'Digital patient approval status & chairside iPad e-signature',
      'Automated pending treatment & unscheduled phase alerts',
    ],
  },
  {
    id: 'billing-payments',
    badge: 'Billing, Claims & RCM',
    title: 'Integrated Dental Billing, Eligibility & Payments',
    description:
      'Connect clinical charting directly to charge capture. Run automated insurance eligibility checks, submit clean electronic claims, and accept Text-to-Pay or portal payments.',
    bullets: [
      'Automated pre-visit insurance eligibility verification',
      'Instant digital invoices linked to chairside procedures',
      'AI-assisted claim scrubbing & electronic clearinghouse submission',
      'Configurable family discounts & phased payment plans',
      'End-of-day financial ledgers & provider production reports',
    ],
  },
  {
    id: 'dental-imaging',
    badge: 'Cloud Dental Imaging',
    title: 'Cloud-Native X-Ray Hub & Side-by-Side Comparison',
    description:
      'Upload and organize bitewings, periapicals, panoramic OPGs, and intraoral photographs directly inside the patient chart—accessible on any workstation or iPad.',
    bullets: [
      'Drag-and-drop dental X-ray & DICOM/JPEG upload',
      'Automatically attach images to patient profiles & teeth',
      'Organize imaging chronologically by clinical visit',
      'View previous and current scans with contrast controls',
      'Side-by-side historical image comparison mode',
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: 'Is this platform suitable for independent dentists?',
    answer:
      'Yes. Dento OS is designed to feel lightweight and intuitive for solo practitioners starting with a single chair, while offering the full cloud EHR depth—digital odontograms, scheduling, billing, patient portal, and imaging—needed to run a modern independent practice.',
  },
  {
    question: 'Can multiple dentists use the same account?',
    answer:
      'Absolutely. Clinics can add multiple associate dentists, specialists, hygienists, and front-desk coordinators with role-based permissions, individual provider calendars, and separate clinical note signatures.',
  },
  {
    question: 'Does the platform work on iPad as well as desktop browsers?',
    answer:
      'Yes. Inspired by mobile-first EHR workflows, Dento OS supports both full desktop workstations and chairside iPad workflows—including waiting-room iPad check-in kiosk mode, touch odontogram charting, and chairside treatment plan signatures.',
  },
  {
    question: 'Can I upload existing dental X-rays?',
    answer:
      'Yes. You can upload standard digital radiographs (JPEG, PNG, TIFF, and DICOM exports) from existing intraoral sensors, phosphor plate scanners, or panoramic units and attach them directly to patient profiles and specific teeth.',
  },
  {
    question: 'Does the platform support AI-assisted X-ray analysis and clinical scribing?',
    answer:
      'Yes. Dento OS includes an AI Imaging Assistant that highlights regions of interest on radiographs as well as an Ambient Clinical Scribe workflow that drafts structured SOAP notes from chairside consultations. All AI-generated outputs are decision-support aids and must be validated by a licensed clinician.',
  },
  {
    question: 'Can I manage multiple clinics?',
    answer:
      'Yes. Our Premium / Enterprise tier enables multi-location dental groups to manage centralized patient records, cross-branch appointment scheduling, standardized procedure fee schedules, and location-wise financial workflows from a single login.',
  },
  {
    question: 'Is patient data secure?',
    answer:
      'Security is foundational to Dento OS. All patient records, clinical notes, and dental radiographs are protected with enterprise encryption in transit and at rest, granular role-based access controls, audit logs, and automated cloud backups.',
  },
  {
    question: 'Can I migrate existing patient records?',
    answer:
      'Yes. Our onboarding specialists assist with structured data migration for patient demographics, appointment histories, account balances, and historical X-ray archives from legacy practice management software or paper charts.',
  },
  {
    question: 'Can patients schedule online and receive appointment reminders?',
    answer:
      'Yes. Patients can book appointments through an online scheduling widget, complete digital intake forms prior to arrival, and receive automated SMS, WhatsApp, or email confirmations and recall reminders.',
  },
  {
    question: 'Does the system support insurance eligibility, treatment estimates, and billing?',
    answer:
      'Yes. You can verify patient eligibility prior to appointments, create multi-stage treatment plans with itemized estimates, convert completed procedures into electronic claims or patient invoices, and collect payments online or chairside.',
  },
];
