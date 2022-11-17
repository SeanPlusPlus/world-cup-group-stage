const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const setPerfect = (entry, countries, entries) => {
  console.log(entry)
  console.log(countries)

  const standings = {}
  GROUPS.forEach((g) => {
    const arr = countries[g]
    const str1 = `Group_${g}_1`
    const str2 = `Group_${g}_2`
    const first = entry[str1].name
    const second = entry[str2].name
    standings[g] = arr.map((el) => {
      if (el.name === first) {
        console.log('***', el);
        return {
          ...el,
          rank: 'first'
        }
      } else if (el.name === second) {
        return {
          ...el,
          rank: 'second'
        }
      } else {
        return { ...el }
      }
    })
  })

  return { standings } 
}