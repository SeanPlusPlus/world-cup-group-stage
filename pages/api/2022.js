// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { entries } from "../../data/entries"
import { getResponses } from "../../utils/responses"

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const COUNTRIES = {
  'A': [
    {
      name: 'Qatar',
      flag: 'đśđŚ'
    },
    {
      name: 'Ecuador',
      flag: 'đŞđ¨'
    },
    {
      rank: 'second',
      name: 'Senegal',
      flag: 'đ¸đł'
    },
    {
      rank: 'first',
      name: 'Netherlands',
      flag: 'đłđą'
    }
  ],
  'B': [
    {
      rank: 'first',
      name: 'England',
      flag: 'đ´ó §ó ˘ó Ľó Žó §ó ż'
    },
    {
      name: 'Iran',
      flag: 'đŽđˇ'
    },
    {
      rank: 'second',
      name: 'USA',
      flag: 'đşđ¸'
    },
    {
      name: 'Wales',
      flag: 'đ´ó §ó ˘ó ˇó Źó łó ż'
    }
  ],
  'C': [
    {
      rank: 'first',
      name: 'Argentina',
      flag: 'đŚđˇ'
    },
    {
      name: 'Saudi Arabia',
      flag: 'đ¸đŚ'
    },
    {
      name: 'Mexico',
      flag: 'đ˛đ˝'
    },
    {
      rank: 'second',
      name: 'Poland',
      flag: 'đľđą'
    }
  ],
  'D': [
    {
      rank: 'first',
      name: 'France',
      flag: 'đŤđˇ'
    },
    {
      rank: 'second',
      name: 'Australia',
      flag: 'đŚđş'
    },
    {
      name: 'Denmark',
      flag: 'đŠđ°'
    },
    {
      name: 'Tunisia',
      flag: 'đšđł'
    }
  ],
  'E': [
    {
      rank: 'second',
      name: 'Spain',
      flag: 'đŞđ¸'
    },
    {
      name: 'Costa Rica',
      flag: 'đ¨đˇ'
    },
    {
      name: 'Germany',
      flag: 'đŠđŞ'
    },
    {
      rank: 'first',
      name: 'Japan',
      flag: 'đŻđľ'
    }
  ],
  'F': [
    {
      name: 'Belgium',
      flag: 'đ§đŞ'
    },
    {
      name: 'Canada',
      flag: 'đ¨đŚ'
    },
    {
      rank: 'first',
      name: 'Morocco',
      flag: 'đ˛đŚ'
    },
    {
      rank: 'second',
      name: 'Croatia',
      flag: 'đ­đˇ'
    }
  ],
  'G': [
    {
      rank: 'first',
      name: 'Brazil',
      flag: 'đ§đˇ'
    },
    {
      name: 'Serbia',
      flag: 'đˇđ¸'
    },
    {
      rank: 'second',
      name: 'Switzerland',
      flag: 'đ¨đ­'
    },
    {
      name: 'Cameroon',
      flag: 'đ¨đ˛'
    }
  ],
  'H': [
    {
      rank: 'first',
      name: 'Portugal',
      flag: 'đľđš'
    },
    {
      name: 'Ghana',
      flag: 'đŹđ­'
    },
    {
      name: 'Uruguay',
      flag: 'đşđž'
    },
    {
      rank: 'second',
      name: 'Korea',
      flag: 'đ°đˇ'
    }
  ],
}

const responses = getResponses(GROUPS, COUNTRIES, entries)

export default function handler(req, res) {
  res.status(200).json({ responses, GROUPS, COUNTRIES, entries })
}
