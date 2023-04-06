// The labels of this data are unused in this program, but left in for clarity
const pronounGroups = {
  firstPersonSingular: ['I', 'me', 'my', 'mine', 'myself'],
  firstPersonPlural: ['we', 'us', 'our', 'ours', 'ourselves'],
  secondPersonSingular: ['you', 'your', 'yourself']
}

const findTermInstances = (text: string, termsString: string): string[] => {
  const terms = termsString.split(',').map((term) => term.trim())

  // We'll search for any group of related pronouns that are included in the
  // search terms...
  const relevantGroups = Object.values(pronounGroups)
    .filter(
      (group) => group.some(
        (member) => terms.map((term) => term.toLowerCase()).includes(member.toLowerCase())
      )
    )

  // ...as well as any that aren't pronouns at all. We deduplicate using the Set
  // constructor, so it's ok to crudely dump the whole set of terms together, including
  // those already found in a related pronoun group.
  const combinedSearchTerms = Array.from(new Set(relevantGroups.flat().concat(terms)))

  const matches = combinedSearchTerms
    .map((term) => {
      const regex = new RegExp(`\\b${term}\\b`,
        // If the case-insensitivity of "I" were less of an edge case, it would be
        // better to represent this property in the original data, rather than
        // hard coding a condition way down here.
        term !== 'I' ? 'gi' : 'g')
      return text.match(regex) ?? []
    })
    .flat()

  return matches
}

export default findTermInstances
