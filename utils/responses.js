import _countBy from 'lodash/countBy'

const getTotals = (teams, key, entries) => {
  return teams.map((t) => {
    const total = entries.filter((e) => {
      return e[key].name === t.name
    }).length

    return {
      ...t,
      total
    }
  })
}

export const getResponses = (groups, countries, entries) => {
  const responses = []
  groups.forEach((g) => {
    const teams = countries[g]
    const first = {
      name: `Group_${g}_1`,
      title: `Group ${g}`,
      icon: '🥇',
      teams: getTotals(teams, `Group_${g}_1`, entries)
    }
    const second = {
      name: `Group_${g}_2`,
      title: `Group ${g}`,
      icon: '🥈',
      teams: getTotals(teams, `Group_${g}_2`, entries)
    }
    responses.push(first, second)
  })
 
  return responses
}