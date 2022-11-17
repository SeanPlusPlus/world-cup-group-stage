import _remove from 'lodash/remove'
import _includes from 'lodash/includes'

export const updateRanking = (group, country, COUNTRIES, entries, invalidGroups) => {
  const updatedGroup = COUNTRIES[group].map((c) => {
    if (c.name === country.name) {
      if (c.rank === 'first') {
        return {
          ...c,
          rank: 'second'
        }
      }
      if (c.rank === 'second') {
        return {
          ...c,
          rank: undefined
        }
      }
      return {
        ...c,
        rank: 'first'
      }
    }
    
    return {
      ...c,
    }
  })

  const rankings = {
    ...COUNTRIES,
    [group]: updatedGroup,
  }

  const ranked = updatedGroup.filter((c) => c.rank).map((c) => c.rank)

  // check if the score for this group is valid
  let valid = null
  if (ranked.length <= 1) {
    valid = true
  } else if (ranked.length === 2) {
    valid = ranked[0] === ranked[1] ? false : true
  } else {
    valid = false
  }

  console.log('valid', valid);

  // update the invalid set of groups
  let invalid = []
  if (valid) {
    invalid = _remove(invalidGroups, group)
  } else {
    if (!_includes(invalidGroups, group)) {
      invalid = [...invalidGroups, group]
    } else {
      invalid = [...invalidGroups]
    }
  }

  // only if all groups are valid will we update the entries
  if (invalid.length === 0) {

  }

  return { rankings, entries, invalid } 
}