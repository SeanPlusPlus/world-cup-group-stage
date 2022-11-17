import _find from 'lodash/find'

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const getScores = (entries, rankings) => {
  const FINAL = {}
  GROUPS.forEach((g) => {
    const first = _find(rankings[g], (country) => country.rank === 'first')
    const second = _find(rankings[g], (country) => country.rank === 'second')
    FINAL[`GROUP_${g}_1`] = first ? first.name : ''
    FINAL[`GROUP_${g}_2`] = second ? second.name : ''
  })
  return entries.map((e) => {
    console.log(e, rankings, FINAL)
    return e
  })
}