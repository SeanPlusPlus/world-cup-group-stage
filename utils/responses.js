export const getResponses = (groups, countries, entries) => {
  const responses = []
  groups.forEach((g) => {
    const teams = countries[g]
    const first = {
      name: `Group_1_${g}`,
      title: `Group ${g}`,
      icon: '🥇',
      teams,
    }
    const second = {
      name: `Group_2_${g}`,
      title: `Group ${g}`,
      icon: '🥈',
      teams,
    }
    responses.push(first, second)
  })
  return responses
}