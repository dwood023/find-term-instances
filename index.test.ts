import findTermInstances from './index'

describe('findTermInstances', () => {
  it.each([
    ['The Customer is always right', 'Customer, you', ['Customer']],
    ['The Customer is not our client', 'Customer, us', ['Customer', 'our']],
    ['My rights cannot be abridged by myself, only the Client', 'I, Client', ['My', 'myself', 'Client']],
    ['i) In this clause my documents are read', 'Me', ['my']]
  ])('Should count instances of provided terms', (text, terms, output) => {
    // Order doesn't matter, so we sort before comparison
    expect(findTermInstances(text, terms).sort()).toEqual(output.sort())
  })
})
