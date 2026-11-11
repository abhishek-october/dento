// Realistic clinical and practice management sample datasets for Dento OS

export const HERO_APPOINTMENTS = [
  {
    id: 'APT-1042',
    time: '09:00 AM',
    patient: 'Elena Rostova',
    age: 34,
    procedure: 'Ceramic Crown Prep (#16)',
    chair: 'Chair 01 • Dr. A. Vance',
    status: 'In Chair',
    statusTone: 'emerald',
    xrayAttached: true,
  },
  {
    id: 'APT-1043',
    time: '09:45 AM',
    patient: 'Marcus Sterling',
    age: 42,
    procedure: 'Implant Consult + CBCT Review',
    chair: 'Chair 02 • Dr. S. Patel',
    status: 'Checked In',
    statusTone: 'teal',
    xrayAttached: true,
  },
  {
    id: 'APT-1044',
    time: '10:30 AM',
    patient: 'Hannah Lindqvist',
    age: 28,
    procedure: 'Clear Aligner Progress Check (Stage 8)',
    chair: 'Chair 03 • Dr. K. Chen',
    status: 'Confirmed',
    statusTone: 'slate',
    xrayAttached: false,
  },
  {
    id: 'APT-1045',
    time: '11:15 AM',
    patient: 'Devon Brooks',
    age: 51,
    procedure: 'Root Canal Obturation (#36)',
    chair: 'Chair 01 • Dr. A. Vance',
    status: 'Pending X-ray',
    statusTone: 'amber',
    xrayAttached: true,
  },
];

export const XRAY_MODALITIES = [
  {
    id: 'bitewing',
    label: 'Bitewing X-ray',
    sublabel: 'Right Posterior • Series BW-2',
    patientName: 'Elena Rostova (ID #PT-8841)',
    captureDate: 'Today, 08:52 AM',
    sensorInfo: 'CMOS Intraoral Sensor • 65 kVp • 7 mA • 0.08s',
    aiStatus: '3 Illustrative Observations',
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
        detail: 'Mild horizontal alveolar crest reduction (~2.1 mm apical to CEJ) noted interproximally between #45 and #46. Correlate with periodontal probing depths.',
        severity: 'Review',
        confidence: 'Illustrative Match',
        coords: { x: 58, y: 54, w: 20, h: 22 },
        toothNumber: '46',
      },
      {
        id: 'f-36',
        region: 'Region 15 & 45',
        title: 'No significant finding identified',
        detail: 'Intact lamina dura, normal periodontal ligament space width, and sound coronal restoration margins observed.',
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
    patientName: 'Marcus Sterling (ID #PT-9014)',
    captureDate: 'Today, 09:30 AM',
    sensorInfo: 'Digital Panoramic OPG • 72 kVp • 10 mA • 14.2s',
    aiStatus: '3 Illustrative Observations',
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
    patientName: 'Devon Brooks (ID #PT-7429)',
    captureDate: 'Today, 10:05 AM',
    sensorInfo: 'Parallel Technique PA • 68 kVp • 7 mA • 0.10s',
    aiStatus: '3 Illustrative Observations',
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
    badge: '01 • Patient Management',
    title: 'Centralized Patient Profiles & Medical Histories',
    description:
      'Every clinical detail in a single longitudinal timeline—personal details, medical alerts, allergies, medications, consent documents, and complete visit history.',
    bullets: [
      'Centralized patient profiles & family linking',
      'Personal information & insurance records',
      'Medical & dental history questionnaires',
      'High-visibility clinical allergy & medication alerts',
      'Previous treatments, patient documents & visit history',
    ],
  },
  {
    id: 'appointment-management',
    badge: '02 • Smart Appointment Management',
    title: 'Multi-Chair Calendar Built for Clinical Flow',
    description:
      'Coordinate dentists, hygienists, and treatment chairs effortlessly with intelligent time-blocking, automated reminders, and cancellation recovery.',
    bullets: [
      'Color-coded calendar scheduling by procedure type',
      'Real-time dentist availability & operatory chair allocation',
      'Automated SMS/email appointment reminders',
      'Multi-visit follow-up scheduling & recall queues',
      'Cancellation tracking & daily appointment overview',
    ],
  },
  {
    id: 'digital-records',
    badge: '03 • Digital Dental Records',
    title: 'Interactive Digital Odontograms & Tooth Charting',
    description:
      'Chart existing restorations, pathologies, and planned procedures directly onto an interactive 32-tooth adult or pediatric odontogram.',
    bullets: [
      'Interactive 5-surface digital odontograms (FDI / Universal)',
      'Tooth-wise clinical records & periodontal pocket charting',
      'Chronological treatment history per tooth',
      'Structured SOAP clinical notes & voice-ready templates',
      'Diagnosis records (ICD/CDT) & patient attachments',
    ],
  },
  {
    id: 'treatment-planning',
    badge: '04 • Treatment Planning',
    title: 'Multi-Stage Treatment Plans Patients Understand',
    description:
      'Present clear, phased treatment options with transparent procedure-wise estimates, digital patient sign-off, and automated pending treatment alerts.',
    bullets: [
      'Multi-stage treatment plans sorted by clinical priority',
      'Procedure-wise fee estimates & co-pay breakdowns',
      'Visual treatment progress tracking across visits',
      'Digital patient approval status & chairside e-signature',
      'Automated pending treatment & unscheduled phase alerts',
    ],
  },
  {
    id: 'billing-payments',
    badge: '05 • Billing & Payments',
    title: 'Frictionless Invoicing, Split Payments & Ledger',
    description:
      'Generate itemized digital invoices directly from completed clinical procedures, track partial balances, apply custom discounts, and monitor daily collections.',
    bullets: [
      'Instant digital invoices linked to chairside procedures',
      'Treatment-wise billing & phased payment plans',
      'Real-time payment tracking & outstanding balance alerts',
      'Configurable family or clinical discounts',
      'End-of-day financial reporting & doctor production ledgers',
    ],
  },
  {
    id: 'dental-imaging',
    badge: '06 • Dental Imaging',
    title: 'Cloud-Native X-Ray & Intraoral Imaging Hub',
    description:
      'Upload and organize bitewings, periapicals, panoramic OPGs, and intraoral photographs directly inside the patient chart—with side-by-side historical comparison.',
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
      'Yes. Dento OS is designed to feel lightweight and intuitive for solo practitioners starting with a single chair, while offering the full clinical depth—digital odontograms, scheduling, billing, and imaging—needed to run a modern independent practice without IT overhead.',
  },
  {
    question: 'Can multiple dentists use the same account?',
    answer:
      'Absolutely. Clinics can add multiple associate dentists, specialists, hygienists, and front-desk coordinators with role-based permissions, individual provider calendars, and separate clinical note signatures.',
  },
  {
    question: 'Can I upload existing dental X-rays?',
    answer:
      'Yes. You can upload standard digital radiographs (JPEG, PNG, TIFF, and DICOM exports) from existing intraoral sensors, phosphor plate scanners, or panoramic units and attach them directly to patient profiles and specific teeth.',
  },
  {
    question: 'Does the platform support AI-assisted X-ray analysis?',
    answer:
      'Yes. Dento OS includes an AI Imaging Assistant that highlights regions of interest—such as suspected interproximal caries, alveolar crest changes, or periapical radiolucencies—to support clinical review. All AI-generated observations are decision-support aids and must be validated by a licensed dentist.',
  },
  {
    question: 'Can I manage multiple clinics?',
    answer:
      'Yes. Our Enterprise tier enables multi-location dental groups to manage centralized patient records, cross-branch appointment scheduling, standardized procedure fee schedules, and location-wise financial analytics from a single login.',
  },
  {
    question: 'Is patient data secure?',
    answer:
      'Security is foundational to Dento OS. All patient records, clinical notes, and dental radiographs are encrypted in transit (TLS 1.3) and at rest (AES-256), with granular role-based access controls, audit logs, and automated daily cloud backups.',
  },
  {
    question: 'Can I migrate existing patient records?',
    answer:
      'Yes. Our onboarding specialists assist with structured data migration for patient demographics, appointment histories, outstanding balances, and historical X-ray archives from legacy practice management software or spreadsheets.',
  },
  {
    question: 'Can patients receive appointment reminders?',
    answer:
      'Yes. Automated appointment confirmations, pre-visit medical history links, and post-treatment follow-up reminders can be configured via SMS, WhatsApp, or email to reduce no-shows and manual front-desk calls.',
  },
  {
    question: 'Does the system support treatment estimates and billing?',
    answer:
      'Yes. You can create multi-stage treatment plans with itemized procedure estimates, track patient acceptance, convert completed treatments into digital invoices in one click, record partial payments, and track outstanding balances.',
  },
  {
    question: 'Is training provided?',
    answer:
      'Every plan includes guided onboarding and live role-specific training sessions for dentists, chairside assistants, and front-desk staff, alongside on-demand video walkthroughs and responsive support.',
  },
];

