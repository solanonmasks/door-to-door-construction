// The four service groups. Used on the home page tiles and the Services page.
import type { ImageKey } from './images';

// Colour themes for the alternating sections on the Services page.
const THEMES = [
  { bg: '#211E25', fg: '#FFFFFF', rule: '#4A4451', btnBg: '#7A35B0', btnFg: '#FFFFFF', btnHover: 'hover-purple' },
  { bg: '#FFFFFF', fg: '#211E25', rule: '#E2DCE8', btnBg: '#211E25', btnFg: '#FFFFFF', btnHover: 'hover-purple' },
  { bg: '#7A35B0', fg: '#FFFFFF', rule: '#9454C6', btnBg: '#FFFFFF', btnFg: '#211E25', btnHover: 'hover-invert' },
  { bg: '#2E2A33', fg: '#FFFFFF', rule: '#4A4451', btnBg: '#7A35B0', btnFg: '#FFFFFF', btnHover: 'hover-purple' },
];

const list: {
  id: string; title: string; short: string; image: ImageKey;
  desc: string; list: string; long: string; items: string[];
}[] = [
  {
    id: 'renovations',
    title: 'Kitchens, baths & basements', short: 'a renovation', image: 'countertops',
    desc: 'Full remodels, from layout and permits to the last cabinet handle.',
    list: 'Kitchens · Bathrooms · Basements · Flooring · Countertops',
    long: 'Design, demolition, plumbing and electrical, drywall, flooring, cabinets and countertops. One contract, one schedule, one team accountable for the result.',
    items: ['Kitchen remodels', 'Bathroom remodels', 'Basement finishing', 'Hardwood and flooring', 'Granite and quartz', 'Commercial interiors'],
  },
  {
    id: 'construction',
    title: 'Additions & new builds', short: 'construction', image: 'framing',
    desc: 'Framing, foundations and full builds for homes and businesses.',
    list: 'Additions · Framing · Concrete · Residential and commercial',
    long: 'From blueprints and building permits through site management and finishing details. Our own framing and concrete crews keep the structure on schedule.',
    items: ['Home additions', 'Framing', 'Foundations and concrete', 'Residential construction', 'Commercial construction'],
  },
  {
    id: 'exteriors',
    title: 'Exteriors, decks & roofs', short: 'exterior work', image: 'siding',
    desc: 'Keep the weather out and make the outside worth using.',
    list: 'Siding · Roofing · Gutters · Windows · Decks · Patios',
    long: 'Siding, roofing and gutters built for Lower Mainland rain, plus new windows, doors, decks and patios. Residential and commercial roofs repaired or replaced.',
    items: ['Siding', 'Residential and commercial roofing', 'Gutters and chimneys', 'Windows and doors', 'Decks and patios'],
  },
  {
    id: 'repairs',
    title: 'Repairs that can’t wait', short: 'a repair', image: 'doors',
    desc: 'Leaks, damage and things that stopped working. Call and we’ll sort it.',
    list: 'Roof leaks · Plumbing · Electrical · HVAC · Doors',
    long: 'Not every job is a renovation. Roof leaks, plumbing and electrical problems, HVAC issues, damaged doors and windows, and the list of small repairs you’ve been putting off.',
    items: ['Roof leak repair', 'Plumbing', 'Electrical', 'HVAC', 'Carpentry and doors', 'General home repairs'],
  },
];

export const services = list.map((s, i) => ({ ...s, ...THEMES[i], dir: i % 2 ? 'row-reverse' : 'row' }));
