const COLORS = [
  '#3366CC',
  '#DC3912',
  '#FF9900',
  '#109618'
]

const getTotals = (teams, key, entries) => {
  return teams.map((t, i) => {
    const total = entries.filter((e) => {
      return e[key].name === t.name
    }).length

    return {
      ...t,
      total,
      color: COLORS[i]
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