const Singers = require('./singersModel');
const db = require('../data/dbConfig');

beforeEach(async () => {
  await db('singers').truncate()
})

describe('Singers model', () => {
  describe('insert function', () => {
    let singers
    test('should insert a singer', async () => {
      await Singers.insert({ name: 'Justin Bieber' })
      await Singers.insert({ name: 'Rihanna' })

      singers = await db('singers')
      expect(singers).toHaveLength(2)

      await Singers.insert({ name: 'Ed Sheeran' })

      singers = await db('singers')
      expect(singers).toHaveLength(3)
    })

    test('should add specific singer to database', async () => {
      let singer = await Singers.insert({ name: 'Sam Smith' })
      expect(singer.name).toBe('Sam Smith')
    })
  })

  describe('delete', () => {
   
    test('should delete a singer', async () => {
     await Singers.remove(1);
     const singers = await db('singers')
      expect(singers).toHaveLength(0)
    })

    test('Should only delete when ID is provided', async () => {
      Singers.insert({ name: 'Beyonce' })
      await Singers.remove();
      const singers = await db('singers')
      expect(singers).toHaveLength(1)
    })
  })
})
