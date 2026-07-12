import type { Country } from './countries';

export interface Situation {
  slug: string;
  title: (c: Country) => string;
  heading: (c: Country) => string;
  body: (c: Country) => string[];
}

export const situations: Situation[] = [
  {
    slug: 'stopping-foreclosure',
    title: (c) => `Sell Your House Fast to Stop ${cap(c.distressTerm)}`,
    heading: (c) => `Facing ${c.distressTerm}? A fast cash sale can stop the clock.`,
    body: (c) => [
      `When you're behind on mortgage payments, time is the enemy — every missed month narrows your options. But until the ${c.distressTerm} process completes, you still own the property, and you can still sell it.`,
      `A cash sale ${c.days} can pay off the arrears and the mortgage before the lender takes the property, protecting your credit from the worst outcome and putting any remaining equity in your pocket instead of losing it.`,
      `Fill in the form with your details. A vetted local cash buyer will assess your situation quickly and make a no-obligation offer. There is no fee for this and no pressure to accept — but you will know exactly what your fastest option looks like.`,
    ],
  },
  {
    slug: 'inherited-property',
    title: () => 'Sell an Inherited House Fast',
    heading: () => 'Inherited a property you don’t want to manage?',
    body: (c) => [
      `An inherited house often comes with baggage: probate paperwork, siblings to agree with, a property full of belongings, and sometimes decades of deferred maintenance. Listing it with a ${c.agentTerm} means paying for repairs and months of uncertainty first.`,
      `Cash buyers purchase inherited properties exactly as they stand — contents included if needed, no repairs, no staging, no strangers walking through your family's home for months.`,
      `Tell us about the property and where it is in the probate/estate process. A local cash buyer will make a fair, no-obligation offer and work around your legal timeline, with ${c.processTerm} when you're ready.`,
    ],
  },
  {
    slug: 'divorce',
    title: () => 'Selling a House Fast in a Divorce',
    heading: () => 'Divorce: one clean sale, one clean split.',
    body: (c) => [
      `In a separation, the house is usually the biggest shared asset and the biggest source of friction. A long, drawn-out sale with a ${c.agentTerm} — ${c.agentFee} — keeps both of you tied together for months.`,
      `A cash sale creates a clean break: an agreed figure, ${c.processTerm} in ${c.days}, and both parties able to move forward independently.`,
      `The process is discreet — no for-sale board, no open viewings — and the offer is made to both parties transparently.`,
    ],
  },
  {
    slug: 'relocation',
    title: () => 'Need to Relocate Quickly? Sell Your House Fast',
    heading: () => 'New job, new city, old house sold before you land.',
    body: (c) => [
      `A relocation deadline turns a house sale from a project into a problem. You can't manage viewings from another city, and carrying two housing payments drains the new start before it begins.`,
      `Cash buyers work to your moving date, with ${c.processTerm} in ${c.days} — or later, if you need time. Sell as-is, hand over the keys, and start the new chapter without the old anchor.`,
    ],
  },
  {
    slug: 'damaged-property',
    title: () => 'Sell a Damaged or Problem Property As-Is',
    heading: () => 'Fire, flood, subsidence, structural issues — sold as it stands.',
    body: (c) => [
      `Some properties can't realistically be sold on the open market: fire or water damage, structural problems, hoarding situations, or repair bills bigger than the likely sale gain. Banks won't lend on them, so ordinary buyers can't buy them.`,
      `Cash buyers can — it's precisely what they exist for. They price the work, make an offer that reflects genuine value, and take the property exactly as it stands. No cleaning, no clearing, no repairs.`,
    ],
  },
  {
    slug: 'tired-landlord',
    title: () => 'Tired Landlord? Sell Your Rental Fast',
    heading: () => 'Done with tenants, repairs and regulations?',
    body: (c) => [
      `Rising costs, tightening regulations and difficult tenancies have many landlords ready for the exit. But selling a tenanted property through a ${c.agentTerm} is slow — and often impossible without vacant possession.`,
      `Cash buyers purchase rentals with tenants in place, with problem tenancies, or after years of deferred maintenance. One transaction, ${c.processTerm} in ${c.days}, and the portfolio headache becomes someone else's business plan.`,
    ],
  },
];

function cap(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
