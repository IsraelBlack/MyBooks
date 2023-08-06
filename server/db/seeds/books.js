/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    {
      id: 1,
      title: 'Dune',
      author: 'Frank Herbert',
      cover: '',
      rating: '4.5',
      summary:
        'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...',
      genre: 'Space Opera',
      opinion:
        'Complex world-building strewn with political, religious and story commentary and satire. Not all is as it seems',
    },
    {
      id: 2,
      title: 'Piranesi',
      author: 'Susanna Clarke',
      cover: '',
      rating: '5',
      summary:
        'Piranesi’s house is no ordinary building: its rooms are infinite, its corridors endless, its walls are lined with thousands upon thousands of statues, each one different from all the others',
      genre: 'Fantasy',
      opinion:
        'Incredible tale of curiosity with twists that come from around the corner',
    },
    {
      id: 3,
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      cover: '',
      rating: '5',
      summary:
        'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish.',
      genre: 'Sci-Fi',
      opinion: 'Astounding. The use of linguistics is great',
    },
  ])
}
