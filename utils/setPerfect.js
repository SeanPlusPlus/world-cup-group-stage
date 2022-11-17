import _orderBy from "lodash/orderBy"
import { getScores } from "./getScores"

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export const setPerfect = (entry, countries, entries) => {
  const standings = {}
  GROUPS.forEach((g) => {
    const arr = countries[g]
    const str1 = `Group_${g}_1`
    const str2 = `Group_${g}_2`
    const first = entry[str1].name
    const second = entry[str2].name
    standings[g] = arr.map((el) => {
      if (el.name === first) {
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
        return { ...el, rank: undefined }
      }
    })
  })

  const updatedEntries = _orderBy(getScores(entries, standings), ['total'], ['desc'])

  return { standings, updatedEntries } 
}