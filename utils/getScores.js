import _find from 'lodash/find'
import _sortBy from 'lodash/sortBy'

const FIRST = 7
const SECOND = 3
const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const getScores = (entries, rankings) => {
  const FINAL = {}
  GROUPS.forEach((g) => {
    const first = _find(rankings[g], (country) => country.rank === 'first')
    const second = _find(rankings[g], (country) => country.rank === 'second')
    FINAL[`Group_${g}_1`] = first ? first.name : ''
    FINAL[`Group_${g}_2`] = second ? second.name : ''
  })
  return entries.map((entry) => {
    const keys = _sortBy(Object.keys(FINAL))
    keys.forEach((k, i) => {
      const isFirstSeed = i % 2 === 0

      if (entry[k].name === FINAL[k] && isFirstSeed) {
        entry[k].score = FIRST
      } else if (entry[k].name === FINAL[k] && !isFirstSeed) { // second place
        entry[k].score = SECOND
      }  else {
        entry[k].score = 0
      }
    })

    entry.total = keys
      .filter((k) => entry[k].score)
      .map((k) => entry[k].score)
      .reduce((a, b) => a + b, 0)

    return entry
  })
}
