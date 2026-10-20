// ─────────────────────────────────────────────────────────────
// Business details used across the whole website.
// Change something here and it updates on every page.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Door to Door Construction',
  legalName: 'Door to Door Construction Ltd.',
  // The live website address (no slash at the end).
  url: 'https://doortodoor911.com',

  // How the phone number is shown, and the digits used for "tap to call".
  phone: '604-347-8304',
  phoneTel: 'tel:16043478304',
  phoneE164: '+16043478304',

  email: 'info@doortodoor911.com',

  address: {
    street: '9119 147 Street',
    city: 'Surrey',
    region: 'BC',
    postalCode: 'V3R 3V6',
    country: 'CA',
  },

  serviceArea: ['Surrey', 'Lower Mainland'],

  // Social profiles (leave the list empty if there are none).
  socials: [] as { label: string; url: string }[],
};

// ─────────────────────────────────────────────────────────────
// QUOTE FORM
// The "Book a free estimate" form sends messages through Formspree
// (https://formspree.io). Create a free form there, copy its ID
// (the part after /f/ in the form's URL, e.g. "xyzabcde"), and paste
// it between the quotes below. While this is empty, the form shows a
// "please call us" message instead of sending.
// ─────────────────────────────────────────────────────────────
export const FORMSPREE_ID = '';
