# DrChrono Platform Functionalities & Full-Fledged Website Architecture Blueprint

> **Purpose of this Document:**  
> This specification documents the complete product architecture, functional modules, user workflows, and multi-page website structure inspired by **DrChrono (drchrono.com)**—adapted for building a full-fledged, cloud-based, AI-powered Dental & Medical Practice Management + EHR platform (**Dento OS**).

---

## 1. Platform Overview & Core Value Proposition

DrChrono is an **all-in-one, AI-powered, cloud-based Electronic Health Record (EHR), Practice Management, Medical Billing / Revenue Cycle Management (RCM), and Patient Engagement platform** built for web browsers, iPad, and mobile devices.

### Core Architectural Pillars
1. **Electronic Health / Dental Record (EHR / EDR)**: Point-of-care clinical charting, customizable SOAP templates, interactive anatomical/odontogram charting, electronic prescribing (eRx & EPCS), and integrated lab/imaging workflows.
2. **Practice Management (PM)**: Multi-provider and multi-chair scheduling, configurable intake workflows, front-office task routing, recall queues, and real-time check-in tracking.
3. **Billing & Revenue Cycle Management (RCM)**: Unified clinical-to-billing charge capture, automated insurance eligibility verification, AI-assisted procedure/diagnosis coding, claims clearinghouse submission, denial management, and patient invoicing.
4. **Patient Engagement & Portal**: Online appointment self-scheduling, iPad check-in kiosk mode, digital consent and medical history intake, two-way secure messaging, and integrated telehealth video visits.
5. **Embedded AI Suite**: Ambient AI clinical scribe (voice-to-SOAP note generation), AI radiographic/imaging review assistant, and rule-aware AI billing/coding validation.
6. **Marketplace & Open API**: Developer API and third-party app directory connecting diagnostic sensors, pharmacies, dental/medical labs, payment gateways, and accounting software.

---

## 2. Detailed Functional Specifications by Module (For Full Application Build)

### Module A: Electronic Health & Dental Record (EHR)

| Sub-Module | Functional Capabilities to Implement |
| :--- | :--- |
| **Customizable Clinical Charting** | • Dynamic SOAP notes (Subjective, Objective, Assessment, Plan)<br>• Specialty-specific form builders (General Dentistry, Orthodontics, Endodontics, Oral Surgery, Periodontics, Pediatrics)<br>• One-click clinical macros and reusable text shortcuts<br>• Cloning previous visit notes with differential edits |
| **Interactive Odontogram & Anatomical Drawing** | • Full 32-tooth adult and 20-tooth pediatric interactive odontogram (FDI & Universal numbering)<br>• Surface-level restorative charting (Mesial, Occlusal, Distal, Buccal, Lingual)<br>• Periodontal pocket depth, gingival margin, bleeding on probing, and mobility charting<br>• Freehand drawing & annotation tool on clinical diagrams and radiographs (iPad Apple Pencil & desktop mouse support) |
| **Electronic Prescribing (eRx & EPCS)** | • Direct electronic prescription transmission to retail and mail-order pharmacies<br>• Electronic Prescribing for Controlled Substances (EPCS) workflow with two-factor clinician authentication<br>• Automated drug-allergy and drug-drug interaction alerts cross-checked against the patient chart<br>• Pre-built dental medication kits (antibiotic prophylaxis, post-op analgesics, antimicrobial rinses) and refill queue management |
| **Imaging, X-Rays & Lab Connectivity** | • Cloud storage and viewer for Bitewing, Periapical, Panoramic (OPG), CBCT slices, and intraoral photographs<br>• Side-by-side longitudinal image comparison across visits<br>• External dental laboratory order tracking (crowns, bridges, clear aligners, surgical guides, nightguards) with shade, material, and due-date status |
| **Clinical Task & Sign-Off Workflow** | • Provider co-signing for associate dentists and hygienists<br>• Immutable clinical audit trail and timestamped chart locking upon signature |

---

### Module B: AI-Powered Clinical & Administrative Suite

| AI Capability | Functional Capabilities to Implement |
| :--- | :--- |
| **Ambient AI Clinical Scribe** | • Listens to natural clinician-patient chairside consultations (with patient consent)<br>• Automatically structures Chief Complaint, History of Present Illness (HPI), Dental/Medical Exam findings, Assessment, and Treatment Plan<br>• Suggests structured procedure codes (CDT/CPT) and diagnosis codes (ICD-10) directly into the draft note for clinician review |
| **AI Radiographic & Imaging Assistant** | • Computer-aided region-of-interest highlighting on uploaded dental radiographs<br>• Flags suspected interproximal caries, alveolar crest bone changes, and periapical radiolucencies for clinician verification<br>• Interactive overlay toggle, contrast enhancement, and structured tooth-by-tooth observation log |
| **AI Billing & Claim Scrubber** | • Rule-aware pre-submission check that validates clinical documentation against billed procedure codes<br>• Alerts staff when required radiographic attachments, tooth numbers, or periodontal charting are missing before claim submission |

---

### Module C: Practice Management & Front-Office Operations

| Sub-Module | Functional Capabilities to Implement |
| :--- | :--- |
| **Multi-Resource Smart Scheduler** | • Views by Day, Week, Month, Provider, Operatory Chair, and Clinic Location<br>• Color-coded appointment profiles (New Patient Exam, Hygiene Recall, Root Canal, Crown Prep, Emergency, Ortho Check)<br>• Drag-and-drop rescheduling, waitlist auto-fill for cancellations, and block-scheduling templates |
| **Paperless Intake & iPad Check-In Kiosk** | • Pre-visit digital intake links sent via SMS/email (demographics, medical history, allergies, current medications, insurance card upload)<br>• In-office iPad Kiosk Mode allowing patients to check in, sign HIPAA/treatment consents, and verify details in the waiting room<br>• Automatic sync of patient-entered data directly into the EHR chart |
| **Live Operatory & Patient Flow Tracker** | • Real-time appointment status pipeline: *Scheduled → Confirmed → Checked In → In Waiting Room → In Operatory Chair → With Doctor → Checkout → Completed*<br>• Internal staff messaging and chair-ready notifications |
| **Task Center & Document Management** | • Centralized inbox for incoming referrals, lab cases, unsigned notes, prescription renewals, and patient messages<br>• Built-in PDF/document scanner, categorizer, and template letter generator (referral letters, school/work excuses, post-op instructions) |

---

### Module D: Billing & Revenue Cycle Management (RCM)

| Sub-Module | Functional Capabilities to Implement |
| :--- | :--- |
| **Automated Eligibility Verification** | • Batch and real-time insurance eligibility checks run automatically prior to scheduled appointments<br>• Displays coverage status, deductible remaining, annual maximums, and co-pay responsibilities at check-in |
| **Multi-Stage Treatment Plans & Estimates** | • Phased treatment sequencing grouped by clinical priority or visit stage<br>• Automated breakdown of estimated insurance coverage vs. patient out-of-pocket portion<br>• Chairside digital signature capture for patient financial acceptance |
| **Claims Clearinghouse & Denial Management** | • One-click electronic claim generation (837D / 837P) with attached radiographs and narratives<br>• Electronic Remittance Advice (ERA) auto-posting and reconciliation<br>• Denial worklist with guided correction and resubmission workflows |
| **Patient Billing & Payment Processing** | • Integrated point-of-sale terminal (card, tap-to-pay, HSA/FSA, split payments)<br>• Text-to-Pay and online patient portal bill pay<br>• Automated installment/payment plans for high-value orthodontic, implant, or prosthodontic cases |

---

### Module E: Patient Engagement & Portal (onPatient Equivalent)

| Sub-Module | Functional Capabilities to Implement |
| :--- | :--- |
| **Patient Self-Service Web & Mobile Portal** | • Secure login for patients and family/dependents<br>• View upcoming appointments, clinical visit summaries, prescribed medications, and shared radiographs<br>• Download and pay itemized invoices or view payment plan schedules |
| **Online Booking Widget** | • Embeddable real-time scheduling widget for the clinic's public website<br>• Configurable rules by provider, appointment reason, and new vs. returning patient status |
| **Automated Recall & Outreach Engine** | • Customizable SMS, WhatsApp, email, and voice appointment reminders with two-way confirmation<br>• Automated 6-month hygiene recall campaigns and unscheduled treatment plan follow-ups |
| **Integrated Telehealth / Virtual Consults** | • Browser-based, encrypted video consultations launched directly from the appointment calendar<br>• Ideal for post-op surgical checks, triage of acute dental pain, and treatment plan consultations |

---

### Module F: Mobile & iPad Point-of-Care Experience

- **Native iPad Operatory App**: Full chairside access to schedules, patient charts, odontograms, voice dictation, and camera capture (for intraoral photos) without needing a desktop workstation.
- **Pocket Clinician View (iPhone / Mobile)**: On-call schedule review, secure staff/patient messaging, and emergency e-prescribing from anywhere.
- **Touch & Stylus Optimization**: Designed for tap-based charting and stylus annotations on clinical diagrams and X-rays.

---

## 3. Full Website Sitemap (DrChrono-Inspired Multi-Page Structure)

When expanding from the landing page to the full-fledged marketing and application website, implement the following route hierarchy:

### Public Marketing Website Routes
1. **`/` (Home Landing Page)**
   - Top Announcement Banner
   - Mega-Menu Navigation (Solutions, Specialties, AI Platform, Pricing, Resources)
   - Hero Section with Cloud EHR + iPad + AI Scribe & Imaging Showcase
   - 4 Core Platform Pillars (Interactive Tabbed Deep-Dive: EHR, Practice Management, Billing/RCM, Patient Engagement)
   - AI Productivity Suite (Ambient Scribe, AI X-Ray Diagnostics, Smart Coding Assist)
   - Mobile & iPad Point-of-Care Section
   - Dental & Medical Specialties Grid
   - Unified Workflow & Full Workspace Showcase
   - App Marketplace & Open API Ecosystem
   - Tiered Pricing Plans (Foundation, Growth, Premium)
   - Qualitative Customer Stories
   - Comprehensive FAQ & Schedule Demo Conversion Section
2. **`/solutions/ehr`** — Deep dive into clinical charting, odontograms, SOAP templates, eRx, and labs.
3. **`/solutions/practice-management`** — Deep dive into multi-chair scheduling, iPad kiosk check-in, and front-office automation.
4. **`/solutions/billing-rcm`** — Deep dive into eligibility verification, claims scrubbing, ERA posting, and patient payments.
5. **`/solutions/patient-engagement`** — Deep dive into the Patient Portal, online booking, automated reminders, and telehealth.
6. **`/solutions/ai`** — Dedicated page for Ambient Clinical Scribe, AI Dental X-ray Analysis, and AI Billing Assist.
7. **`/solutions/mobile-ipad`** — Dedicated showcase of the iPad Kiosk and chairside mobile EHR experience.
8. **`/specialties/:specialtySlug`** — Tailored landing pages for General Dentistry, Orthodontics, Oral Surgery, Endodontics, Periodontics, Pediatric Dentistry, and Multi-Location Groups.
9. **`/pricing`** — Detailed plan comparison table (Foundation, Growth, Premium) and onboarding FAQ.
10. **`/marketplace`** — Directory of connected hardware sensors, clearinghouses, labs, and API documentation.

### Authenticated Web Application Routes (`/app/*`)
1. **`/app/dashboard`** — Morning huddle, live chair tracker, provider schedule, and task inbox.
2. **`/app/schedule`** — Multi-provider, multi-chair calendar with drag-and-drop booking and eligibility badges.
3. **`/app/patients`** — Patient directory, longitudinal chart, medical alerts, odontogram, and document vault.
4. **`/app/clinical/:patientId`** — Chairside charting workspace, SOAP editor, Ambient AI Scribe, eRx, and treatment planner.
5. **`/app/imaging/:patientId`** — Cloud radiograph viewer, side-by-side visit comparison, and AI X-ray assistant.
6. **`/app/billing`** — Claims worklist, eligibility verification queue, patient ledger, and payment terminal.
7. **`/app/kiosk`** — Locked-down iPad waiting-room check-in and consent signature mode.
8. **`/portal/*`** — Patient-facing portal for online booking, intake forms, messaging, and bill pay.
