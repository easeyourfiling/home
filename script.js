// Easeyourfiling - minimal JS for loaders, dynamic services, and modal

const SERVICES = [
  {
    key: 'company_incorporation',
    name: 'Company Incorporation',
    category: 'Incorporation',
    img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop',
    what: 'Register a Private Limited Company or One Person Company with MCA.',
    why: 'Limited liability, credibility with customers/investors, and structured governance.',
    documents: ['PAN & Aadhaar of directors', 'Address proof', 'Photographs', 'Business address proof', 'NOC/Utility bill']
  },
  {
    key: 'gst_registration',
    name: 'GST Registration',
    category: 'GST',
    img: 'https://images.unsplash.com/photo-1518183214770-9cffbec72538?q=80&w=1200&auto=format&fit=crop',
    what: 'Obtain GSTIN to collect and remit GST on supplies.',
    why: 'Mandatory beyond threshold turnover and for interstate trade, e-commerce, exports.',
    documents: ['PAN & Aadhaar', 'Photograph', 'Business address proof', 'Bank proof', 'Authorization letter']
  },
  {
    key: 'gst_returns',
    name: 'GST Returns Filing',
    category: 'GST Returns',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    what: 'Periodic GSTR filings like GSTR-1, 3B, annual returns.',
    why: 'Stay compliant, avoid penalties, and enable input tax credit utilization.',
    documents: ['Sales & purchase data', 'E-way bills (if any)', 'Tax payment challans']
  },
  {
    key: 'trademark_registration',
    name: 'Trademark Registration',
    category: 'Trademark',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    what: 'Register your brand name/logo with IP India.',
    why: 'Protects brand identity and grants legal rights to act against infringement.',
    documents: ['Logo/word mark', 'Applicant ID proof', 'Address proof', 'Power of Attorney (TM-A)']
  },
  {
    key: 'income_tax_filing',
    name: 'Income Tax Filing',
    category: 'Income Tax',
    img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop',
    what: 'Prepare and file ITR for individuals, firms, and companies.',
    why: 'Statutory requirement, enables refunds and credit carryforwards, maintains compliance.',
    documents: ['Form 16/26AS', 'Bank statements', 'Investment proofs', 'Books of accounts']
  },
  {
    key: 'msme_registration',
    name: 'MSME (Udyam) Registration',
    category: 'MSME',
    img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    what: 'Register as Micro/Small/Medium enterprise on Udyam portal.',
    why: 'Access to subsidies, collateral-free loans, tender and tax benefits.',
    documents: ['Aadhaar', 'PAN', 'Business details', 'Bank info']
  },
  {
    key: 'llp_registration',
    name: 'LLP Registration',
    category: 'LLP',
    img: 'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1200&auto=format&fit=crop',
    what: 'Form a Limited Liability Partnership with MCA.',
    why: 'Operational flexibility with limited liability protection for partners.',
    documents: ['PAN & Aadhaar of partners', 'Address proof', 'Business address proof', 'NOC/Utility bill']
  },
  {
    key: 'partnership_registration',
    name: 'Partnership Registration',
    category: 'Partnership',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
    what: 'Register a partnership firm and draft a partnership deed.',
    why: 'Defines partner roles, profit share, and ensures legal validity of the firm.',
    documents: ['Partner KYC', 'Deed details', 'Business address proof']
  },
  {
    key: 'roc_compliance',
    name: 'ROC Compliance & Annual Filing',
    category: 'ROC Filing',
    img: 'https://images.unsplash.com/photo-1529336953121-d2712510f487?q=80&w=1200&auto=format&fit=crop',
    what: 'ROC filings like AOC-4, MGT-7, and event-based forms.',
    why: 'Mandatory filings to maintain active corporate status and avoid penalties.',
    documents: ['Financial statements', 'Board/AGM docs', 'Registers and disclosures']
  },
  {
    key: 'payroll_pf_esi',
    name: 'Payroll, PF & ESI',
    category: 'Payroll / ESI-PF / TDS',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    what: 'End-to-end payroll with PF, ESI, and TDS compliance.',
    why: 'Accurate salaries, statutory deductions, and timely returns to avoid penalties.',
    documents: ['Employee master data', 'Attendance', 'Salary structure', 'Challans']
  }
  ,
  { key:'director_change', name:'Director Change', category:'Company Compliance', img:'https://images.unsplash.com/photo-1556741533-411cf82e4e2d?q=80&w=1200&auto=format&fit=crop', what:'Add/Remove/Change director details with ROC.', why:'Keep company records updated; mandatory for governance and banking.', documents:['DIN/PAN/Aadhaar','Board/Shareholder resolutions','DIR forms','KYC docs'] },
  { key:'aoa_amendment', name:'AOA Amendment', category:'Company Compliance', img:'https://images.unsplash.com/photo-1523246191270-4bcc881eb254?q=80&w=1200&auto=format&fit=crop', what:'Alter Articles of Association.', why:'Change share rights, management rules, or other governance terms.', documents:['Draft altered AOA','Special Resolution','Filing forms','Updated registers'] },
  { key:'remove_director', name:'Remove Director', category:'Company Compliance', img:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop', what:'Remove a director as per Companies Act.', why:'Reflect changes in management and responsibility.', documents:['Board/EGM resolutions','Notices','DIR filings'] },
  { key:'authorized_capital_increase', name:'Authorized Capital Increase', category:'Company Compliance', img:'https://images.unsplash.com/photo-1581091012184-7c54d689b429?q=80&w=1200&auto=format&fit=crop', what:'Increase authorized share capital.', why:'Enable future fundraising or share allotments.', documents:['MOA amendment','Resolutions','Filing forms','Fee challans'] },
  { key:'opc_compliance', name:'OPC Compliance', category:'Company Compliance', img:'https://images.unsplash.com/photo-1518081461904-9d8f136351c7?q=80&w=1200&auto=format&fit=crop', what:'Annual and event-based compliance for OPC.', why:'Maintain active status and avoid penalties.', documents:['Financials','Returns','Resolutions','KYC'] },
  { key:'adt1_filing', name:'ADT-1 Filing (Auditor)', category:'Company Compliance', img:'https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1200&auto=format&fit=crop', what:'Appointment of auditor filing with ROC.', why:'Statutory requirement post incorporation/AGM.', documents:['Board/AGM docs','Consent letter','Form ADT-1'] },
  { key:'share_transfer', name:'Share Transfer', category:'Company Compliance', img:'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop', what:'Transfer shares between shareholders.', why:'Change ownership legally and update registers.', documents:['Share transfer deed','Share certificates','Board resolution'] },
  { key:'name_change_company', name:'Name Change - Company', category:'Company Compliance', img:'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop', what:'Change company name with approvals.', why:'Rebranding or business realignment.', documents:['Name approval','Special resolution','MOA/AOA updates'] },
  { key:'dpt3_filing', name:'DPT-3 Filing', category:'Company Compliance', img:'https://images.unsplash.com/photo-1554168153-e74124abd88f?q=80&w=1200&auto=format&fit=crop', what:'Return of deposits or transactions not considered deposits.', why:'Mandatory annual filing requirement.', documents:['Loan/deposit details','Auditor certificate','Challans'] },
  { key:'demat_shares', name:'Demat of Shares', category:'Company Compliance', img:'https://images.unsplash.com/photo-1581093458790-9a26fdbab716?q=80&w=1200&auto=format&fit=crop', what:'Dematerialize physical share certificates.', why:'Comply with demat mandates and enable transfers.', documents:['KYC','Demat forms','Share certificates'] },
  { key:'registered_office_change', name:'Registered Office Change', category:'Company Compliance', img:'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=1200&auto=format&fit=crop', what:'Change company registered office address.', why:'Reflect operational location; required for all correspondence.', documents:['Utility bill/NOC','Resolutions','Filing forms'] },
  { key:'llp_form11', name:'LLP Form 11 Filing', category:'LLP Compliance', img:'https://images.unsplash.com/photo-1518081461904-9d8f136351c7?q=80&w=1200&auto=format&fit=crop', what:'Annual return of LLP partners.', why:'Mandatory annual compliance for LLPs.', documents:['Partner details','Contribution info'] },
  { key:'llp_compliance', name:'LLP Compliance', category:'LLP Compliance', img:'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1200&auto=format&fit=crop', what:'Annual and event-based filings for LLP.', why:'Maintain active LLP status and avoid penalties.', documents:['Financials','Returns','Resolutions'] },
  { key:'winding_up_llp', name:'Winding Up - LLP', category:'Company Compliance', img:'https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=1200&auto=format&fit=crop', what:'Close and strike off an LLP.', why:'Exit non-operational entity and stop compliance burden.', documents:['Statement of accounts','Affidavits','Partners consent'] },
  { key:'winding_up_company', name:'Winding Up Company', category:'Company Compliance', img:'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop', what:'Close and strike off a company.', why:'Exit non-operational company; stop ongoing costs.', documents:['Statement of accounts','Affidavits','Shareholder approvals'] },
  { key:'din_ekyc', name:'DIN eKYC Filing', category:'Company Compliance', img:'https://images.unsplash.com/photo-1521790361543-f645cf042ec4?q=80&w=1200&auto=format&fit=crop', what:'DIR-3 KYC for directors.', why:'Keep DIN active to avoid penalties and deactivation.', documents:['PAN/Aadhaar','Email/Phone OTP'] },
  { key:'din_reactivation', name:'DIN Reactivation', category:'Company Compliance', img:'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1200&auto=format&fit=crop', what:'Reactivate deactivated DIN.', why:'Enable director filings and appointments.', documents:['DIR-3 KYC forms','ID proofs'] },
  { key:'moa_amendment', name:'MOA Amendment', category:'Company Compliance', img:'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', what:'Alter Memorandum of Association.', why:'Change name, objects, capital, or registered office clauses.', documents:['Draft MOA','Resolutions','ROC filings'] },
  { key:'inc_20a', name:'Commencement (INC-20A)', category:'Company Compliance', img:'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop', what:'Declaration of commencement of business.', why:'Mandatory for newly incorporated companies to start operations.', documents:['Bank statement for capital','Board resolution'] },
  { key:'startup_india', name:'Startup India', category:'Registrations', img:'https://images.unsplash.com/photo-1531496601463-1d60e0005f87?q=80&w=1200&auto=format&fit=crop', what:'Get DPIIT recognition as Startup.', why:'Tax benefits, funding support, and faster IP processing.', documents:['Incorporation docs','Pitch info','Directors KYC'] },
  { key:'lei_code', name:'Legal Entity Identifier (LEI) Code', category:'Registrations', img:'https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1200&auto=format&fit=crop', what:'Obtain an LEI for financial transactions.', why:'Required for certain market and banking operations.', documents:['Incorporation docs','PAN','Authorized signatory KYC'] },
  { key:'reg_12a', name:'12A Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop', what:'Get income tax exemption for NGOs/Trusts.', why:'Enable donors and entities to get tax benefits.', documents:['Trust/NGO deed','PAN','Activity details'] },
  { key:'reg_80g', name:'80G Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop', what:'Enable donor tax deduction for donations.', why:'Encourage funding with donor tax benefits.', documents:['12A details','Activity proofs','Financials'] },
  { key:'reg_12a_80g', name:'12A and 80G Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop', what:'Apply for 12A and 80G together.', why:'Full NGO tax benefit framework.', documents:['Registration docs','Activity proof','Financials'] },
  { key:'darpan', name:'Darpan Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop', what:'NGO Darpan portal registration.', why:'Required for government grants and schemes.', documents:['Trust/Society details','PAN','Officer KYC'] },
  { key:'trade_license', name:'Trade License', category:'Registrations', img:'https://images.unsplash.com/photo-1556157381-36f0e871f6b9?q=80&w=1200&auto=format&fit=crop', what:'Municipal trade license to operate.', why:'Legal permission for local business operations.', documents:['ID/Address proof','Premises proof','NOC'] },
  { key:'iso', name:'ISO Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1494173853739-c21f58b16055?q=80&w=1200&auto=format&fit=crop', what:'Obtain ISO certification.', why:'Quality assurance and global credibility.', documents:['Process docs','QMS records','Application forms'] },
  { key:'dsc', name:'Digital Signature (DSC)', category:'Registrations', img:'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop', what:'Get Class 3 DSC for e-filings.', why:'Secure e-signing for MCA, GST, and tenders.', documents:['PAN/Aadhaar','Photo','Video KYC'] },
  { key:'fssai_reg', name:'FSSAI Registration', category:'FSSAI', img:'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop', what:'Basic registration for small food businesses.', why:'Mandatory FSSAI compliance for FBOs.', documents:['Photo ID','Address proof','NOC','Food details'] },
  { key:'fssai_license', name:'FSSAI License', category:'FSSAI', img:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop', what:'State/Central FSSAI license.', why:'Required for medium to large FBOs.', documents:['Layout plan','List of equipment','Water test','NOCs'] },
  { key:'pf_registration', name:'PF Registration', category:'Payroll / ESI-PF / TDS', img:'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1200&auto=format&fit=crop', what:'Provident Fund code for employers.', why:'Statutory benefit for employees; mandatory beyond threshold.', documents:['Incorporation docs','Employee data','Bank details'] },
  { key:'esi_registration', name:'ESI Registration', category:'Payroll / ESI-PF / TDS', img:'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1200&auto=format&fit=crop', what:'Employee State Insurance code for employers.', why:'Medical coverage and statutory compliance.', documents:['Employee data','Address proof','Bank details'] },
  { key:'drug_license', name:'Drug License', category:'Registrations', img:'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop', what:'Retail/Wholesale drug license.', why:'Legal authorization for pharma trade.', documents:['Premises details','Pharmacist qualification','Equipment list'] },
  { key:'barcode', name:'Barcode Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop', what:'Get GS1 barcode numbers.', why:'Enable retail and supply-chain scanning.', documents:['Company details','Product list'] },
  { key:'udyam', name:'Udyam Registration', category:'MSME', img:'https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=1200&auto=format&fit=crop', what:'MSME registration on Udyam portal.', why:'Access MSME benefits and subsidies.', documents:['Aadhaar','PAN','Business details'] },
  { key:'fcra', name:'FCRA Registration', category:'Registrations', img:'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop', what:'Foreign Contribution Regulation registration.', why:'Receive foreign donations legally.', documents:['NGO details','Bank FCRA account','Activity history'] },
  { key:'iec', name:'Import Export Code (IEC)', category:'Registrations', img:'https://images.unsplash.com/photo-1519181245277-cffeb31da2fb?q=80&w=1200&auto=format&fit=crop', what:'IEC from DGFT.', why:'Mandatory for international trade.', documents:['PAN','Bank details','Company docs'] },
  { key:'fire_licence', name:'Fire Licence', category:'Registrations', img:'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1200&auto=format&fit=crop', what:'NOC / Fire safety license.', why:'Compliance with local fire regulations.', documents:['Building plan','Equipment list','NOCs'] },
  { key:'proprietorship', name:'Proprietorship', category:'Business Registration', img:'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop', what:'Register as a sole proprietorship.', why:'Simple structure for solo entrepreneurs.', documents:['Owner KYC','Business proof','Bank'] },
  { key:'section8', name:'Section 8 Company', category:'Business Registration', img:'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop', what:'Not-for-profit company registration.', why:'Structured governance with charitable objectives.', documents:['MOA/AOA drafts','Director KYC','Activity details'] },
  { key:'trust', name:'Trust Registration', category:'Business Registration', img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop', what:'Register a public charitable trust.', why:'Run charitable activities with legal structure.', documents:['Trust deed','Trustee KYC','Address proof'] },
  { key:'opc', name:'One Person Company', category:'Business Registration', img:'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop', what:'Register OPC under Companies Act.', why:'Limited liability for solo founder.', documents:['Director KYC','Registered office proof'] },
  { key:'public_ltd', name:'Public Limited Company', category:'Business Registration', img:'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1200&auto=format&fit=crop', what:'Register a Public Limited Company.', why:'Raise capital from public and scale.', documents:['Director KYC','Prospectus basics','Registered office proof'] },
  { key:'llp', name:'Limited Liability Partnership', category:'Business Registration', img:'https://images.unsplash.com/photo-1538688423619-a81d3f23454b?q=80&w=1200&auto=format&fit=crop', what:'Register an LLP with MCA.', why:'Flexible structure with limited liability.', documents:['Partner KYC','Registered office proof'] },
  { key:'producer_company', name:'Producer Company', category:'Business Registration', img:'https://images.unsplash.com/photo-1518081461904-9d8f136351c7?q=80&w=1200&auto=format&fit=crop', what:'Register a Producer Company.', why:'Collective for primary producers with benefits.', documents:['Director KYC','Objects','Registered office proof'] },
  { key:'pvt_ltd', name:'Private Limited Company', category:'Business Registration', img:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop', what:'Register a Private Limited Company.', why:'Investor-friendly structure with limited liability.', documents:['Director KYC','Registered office proof'] },
  { key:'partnership', name:'Partnership', category:'Business Registration', img:'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop', what:'Register a partnership firm.', why:'Simple co-owned business structure.', documents:['Partner KYC','Deed','Address proof'] }
];

function qs(sel) { return document.querySelector(sel); }
function qsa(sel) { return Array.from(document.querySelectorAll(sel)); }

function renderYear() {
  const el = qs('#year');
  if (el) el.textContent = String(new Date().getFullYear());
}

function showPageLoader() {
  const el = qs('#pageLoader');
  if (el) el.classList.add('active');
}
function hidePageLoader() {
  const el = qs('#pageLoader');
  if (el) el.classList.remove('active');
}

function buildServiceCard(service) {
  const card = document.createElement('article');
  card.className = 'card';
  card.setAttribute('tabindex', '0');
  card.innerHTML = `
    <img src="${service.img}" alt="${service.name}">
    <h3>${service.name}</h3>
    <p class="muted">${service.category}</p>
    <p>${service.what}</p>
    <div class="actions">
      <button class="btn" data-open="${service.key}">View Details</button>
      <a class="btn ghost" target="_blank" rel="noopener" href="https://wa.me/918757702033?text=${encodeURIComponent(`I'm interested in ${service.name} on Easeyourfiling.`)}">WhatsApp</a>
    </div>
  `;
  return card;
}

function openModal(service) {
  const overlay = qs('#modalOverlay');
  const title = qs('#modalTitle');
  const content = qs('#modalContent');
  const wa = qs('#whatsAppBtn');
  if (!overlay || !title || !content || !wa) return;

  title.textContent = service.name;
  wa.href = `https://wa.me/918757702033?text=${encodeURIComponent(`I'm interested in ${service.name} on Easeyourfiling.`)}`;

  const docList = service.documents.map(d => `<li>${d}</li>`).join('');
  content.innerHTML = `
    <p><strong>What:</strong> ${service.what}</p>
    <p><strong>Why:</strong> ${service.why}</p>
    <h4>Documents Required</h4>
    <ul>${docList}</ul>
  `;

  overlay.classList.add('active');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const overlay = qs('#modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
}

function wireModal() {
  const overlay = qs('#modalOverlay');
  const close = qs('#modalClose');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
  if (close) close.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
}

function renderServices() {
  const grid = qs('#servicesGrid');
  const filters = qs('#categoryFilters');
  const section = grid ? grid.closest('section') : null;
  if (!grid) return;

  const categories = Array.from(new Set(SERVICES.map(s => s.category)));
  if (filters) {
    filters.innerHTML = '';
    const all = document.createElement('button');
    all.className = 'chip active';
    all.textContent = 'All';
    all.dataset.cat = '';
    filters.appendChild(all);
    categories.forEach(cat => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.textContent = cat;
      b.dataset.cat = cat;
      filters.appendChild(b);
    });
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('button.chip');
      if (!btn) return;
      filters.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat || '';
      draw(cat);
    });
  }

  function draw(cat) {
    grid.innerHTML = '';
    let list = SERVICES.filter(s => !cat || s.category === cat);
    const limit = section && section.dataset.limit ? parseInt(section.dataset.limit, 10) : null;
    if (limit && Number.isFinite(limit)) list = list.slice(0, limit);
    list.forEach(svc => grid.appendChild(buildServiceCard(svc)));
  }
  draw('');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-open]');
    if (!btn) return;
    const key = btn.getAttribute('data-open');
    const svc = SERVICES.find(s => s.key === key);
    if (svc) openModal(svc);
  });
}

function wireContactForm() {
  const form = qs('#contactForm');
  const loader = qs('#formLoader');
  if (!form) return;
  form.addEventListener('submit', () => {
    if (loader) loader.classList.add('active');
  });
}

function init() {
  renderYear();
  wireModal();
  renderServices();
  wireContactForm();

  // Minimal initial loader on home page only
  if (qs('#pageLoader')) {
    showPageLoader();
    window.addEventListener('load', () => {
      setTimeout(hidePageLoader, 1500);
    });
  }

  // Mobile toolbar actions
  const btnBack = qs('#btnBack');
  const btnForward = qs('#btnForward');
  const btnSearch = qs('#btnSearch');
  const navSearch = qs('#navSearchBtn');
  const overlay = qs('#searchOverlay');
  const closeSearch = qs('#searchClose');
  if (btnBack) btnBack.addEventListener('click', () => history.back());
  if (btnForward) btnForward.addEventListener('click', () => history.forward());
  const openSearch = () => { if (!overlay) return; overlay.classList.add('active'); overlay.setAttribute('aria-hidden','false'); const input = qs('#searchInput'); if (input) input.focus(); };
  if (btnSearch) btnSearch.addEventListener('click', openSearch);
  if (navSearch) navSearch.addEventListener('click', (e) => { e.preventDefault(); openSearch(); });
  if (closeSearch && overlay) closeSearch.addEventListener('click', () => { overlay.classList.remove('active'); overlay.setAttribute('aria-hidden','true'); });

  // If search query present, filter services
  const params = new URLSearchParams(location.search);
  const q = (params.get('q') || '').trim().toLowerCase();
  if (q && qs('#servicesGrid')) {
    const grid = qs('#servicesGrid');
    const items = Array.from(grid.children);
    items.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(q) ? '' : 'none';
    });
  }
}

document.addEventListener('DOMContentLoaded', init);


