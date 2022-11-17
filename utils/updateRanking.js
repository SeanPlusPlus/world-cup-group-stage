export const updateRanking = (group, country, COUNTRIES) => {
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

  const updated = {
    ...COUNTRIES,
    [group]: updatedGroup,
  }

  return updated
}