export const PROGRAMS = [
  { id: 'morning', title: 'Morning Program', description: 'Ceremony highlights and memories from the morning.' },
  { id: 'afternoon', title: 'Afternoon Program', description: 'Moments from the afternoon celebration.' },
  { id: 'evening', title: 'Evening Program', description: 'Capturing the evening finale.' },
] as const

export type ProgramId = typeof PROGRAMS[number]['id']

export const QUOTES = [
  { text: 'Wherever the art of Medicine is loved, there is also a love of Humanity.', author: 'Hippocrates' },
  { text: 'The white coat is a symbol of honor, responsibility, and compassion.', author: '' },
  { text: 'Service to others is the rent you pay for your room here on earth.', author: 'Muhammad Ali' },
]
