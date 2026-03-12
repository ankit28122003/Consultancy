// Services grouped by category for the website
export const serviceCategories = [
  {
    category: "Business Registration",
    slug: "business-registration",
    services: [
      { slug: "proprietorship-registration", title: "Proprietorship Registration", description: "Single owner business registration with minimal compliance." },
      { slug: "partnership-registration", title: "Partnership Firm Registration", description: "Register your partnership firm with deed agreement." },
      { slug: "llp-registration", title: "LLP Registration", description: "Limited Liability Partnership registration with DIN and DSC." },
      { slug: "private-limited-company", title: "Private Limited Company", description: "Start your Pvt Ltd company with MCA registration." },
      { slug: "public-limited-company", title: "Public Limited Company", description: "Register a public limited company for larger businesses." },
      { slug: "one-person-company-opc", title: "One Person Company (OPC)", description: "Single person company registration with limited liability." }
    ]
  },
  {
    category: "Registrations",
    slug: "registrations",
    services: [
      { slug: "trade-licence", title: "Trade Licence", description: "Obtain trade licence for your business from local authorities." },
      { slug: "fssai-registration", title: "FSSAI Registration", description: "Food safety licence for food business operators." },
      { slug: "fssai-license", title: "FSSAI License", description: "Complete FSSAI license application and renewal services." },
      { slug: "iso-certification", title: "ISO Certification", description: "ISO 9001, 14001, 45001 certification for quality standards." },
      { slug: "pf-registration", title: "PF Registration", description: "EPFO registration for establishments with employees." },
      { slug: "esi-registration", title: "ESI Registration", description: "Employee State Insurance registration and compliance." },
      { slug: "digital-signature-dsc", title: "Digital Signature (DSC)", description: "Class 2 and Class 3 digital signature certificates." }
    ]
  },
  {
    category: "MSME & Trademark",
    slug: "msme-trademark",
    services: [
      { slug: "udyam-registration", title: "Udyam Registration", description: "MSME Udyam registration for small businesses." },
      { slug: "msme-registration", title: "MSME Registration", description: "Register under MSME Act for benefits and schemes." },
      { slug: "trademark-registration", title: "Trademark Registration", description: "Register your brand name, logo, or slogan." },
      { slug: "trademark-certificate", title: "Trademark Certificate", description: "Get trademark registration certificate from IPO." },
      { slug: "trademark-renewal", title: "Trademark Renewal", description: "Renew your trademark before expiration." },
      { slug: "trademark-transfer", title: "Trademark Transfer", description: "Transfer or assign trademark ownership." },
      { slug: "logo-designing", title: "Logo Designing", description: "Professional logo design services for your brand." },
      { slug: "logo-registration", title: "Logo Design Registration", description: "Register your logo as trademark." }
    ]
  },
  {
    category: "GST Services",
    slug: "gst-services",
    services: [
      { slug: "gst-registration", title: "GST Registration", description: "Get GST registration in India within 3-5 days." },
      { slug: "gst-return-filing", title: "GST Return Filing", description: "Monthly and quarterly GST return filing (GSTR-1, 3B)." },
      { slug: "gst-lut-form", title: "GST LUT Form", description: "Letter of Undertaking for export without tax." },
      { slug: "gst-notice", title: "GST Notice Reply", description: "Response and resolution for GST notices." },
      { slug: "gst-annual-return", title: "GST Annual Return", description: "Annual return filing GSTR-9." },
      { slug: "gstr-9-filing", title: "GSTR-9 Filing", description: "Annual reconciliation statement for GST." },
      { slug: "gst-amendment", title: "GST Amendment", description: "Update GST registration details." },
      { slug: "gst-consultancy", title: "GST Consultancy", description: "Expert GST advisory and planning services." }
    ]
  },
  {
    category: "Income Tax",
    slug: "income-tax",
    services: [
      { slug: "income-tax-filing", title: "Income Tax Filing", description: "ITR filing for individuals and businesses." },
      { slug: "business-tax-filing", title: "Business Tax Filing", description: "Tax filing for proprietorship and partnership firms." },
      { slug: "partnership-firm-itr", title: "Partnership Firm ITR", description: "Income tax return for partnership firms." },
      { slug: "llp-itr-filing", title: "LLP ITR Filing", description: "Income tax return for Limited Liability Partnerships." },
      { slug: "company-itr-filing", title: "Company ITR Filing", description: "Income tax return for companies (ITR-6)." },
      { slug: "tan-registration", title: "TAN Registration", description: "Tax Deduction Account Number registration." },
      { slug: "tds-return-filing", title: "TDS Return Filing", description: "Quarterly TDS returns (Form 24Q, 26Q, 27Q)." },
      { slug: "itr-u-filing", title: "ITRU Filing", description: "Income Tax Return for Unregistered firms." }
    ]
  },
  {
    category: "MCA & Company",
    slug: "mca-company",
    services: [
      { slug: "company-compliance", title: "Company Compliance", description: "Annual filing and statutory compliance for companies." },
      { slug: "llp-compliance", title: "LLP Compliance", description: "LLP annual filing and compliance services." },
      { slug: "company-name-change", title: "Company Name Change", description: "Change company name through MCA." },
      { slug: "din-ekyc", title: "DIN e-KYC", description: "Director Identification Number e-KYC filing." },
      { slug: "din-reactivation", title: "DIN Re-activation", description: "Reactivate deactivated DIN numbers." },
      { slug: "director-change", title: "Director Change", description: "Add or remove directors in company." },
      { slug: "remove-director", title: "Remove Director", description: "Professional director removal services." }
    ]
  },
  {
    category: "ROC & Filings",
    slug: "roc-filings",
    services: [
      { slug: "dpt-3-filing", title: "DPT-3 Filing", description: "Return of deposits for companies." },
      { slug: "roc-filing", title: "ROC Filing", description: "Registrar of Companies annual filings." },
      { slug: "mca-annual-return", title: "MCA Annual Return", description: "Annual return filing with MCA." }
    ]
  },
  {
    category: "Compliance Services",
    slug: "compliance-services",
    services: [
      { slug: "fssai-renewal", title: "FSSAI Renewal", description: "Renew your FSSAI license before expiry." },
      { slug: "fssai-return-filing", title: "FSSAI Return Filing", description: "Annual returns for food business operators." },
      { slug: "payroll-services", title: "Payroll Services", description: "Complete payroll processing and management." },
      { slug: "pf-return-filing", title: "PF Return Filing", description: "EPF monthly returns and compliance." },
      { slug: "esi-return-filing", title: "ESI Return Filing", description: "Employee State Insurance returns." },
      { slug: "proprietorship-compliance", title: "Proprietorship Compliance", description: "Annual compliance for proprietorship." },
      { slug: "ca-support", title: "CA Support", description: "Chartered Accountant consultation and support." },
      { slug: "bookkeeping", title: "Bookkeeping", description: "Professional accounting and bookkeeping services." }
    ]
  }
];

// Flat array for backward compatibility
export const services = serviceCategories.flatMap(cat => cat.services);

// Export individual services for easy access
export const getServiceBySlug = (slug) => {
  for (const category of serviceCategories) {
    const service = category.services.find(s => s.slug === slug);
    if (service) return { ...service, category: category.category };
  }
  return null;
};

export const getServicesByCategory = (categorySlug) => {
  const category = serviceCategories.find(cat => cat.slug === categorySlug);
  return category ? category.services : [];
};

