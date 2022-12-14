// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { entries } from "../../data/entries"
import { getResponses } from "../../utils/responses"

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const COUNTRIES = {
  'A': [
    {
      name: 'Qatar',
      flag: '🇶🇦'
    },
    {
      name: 'Ecuador',
      flag: '🇪🇨'
    },
    {
      rank: 'second',
      name: 'Senegal',
      flag: '🇸🇳'
    },
    {
      rank: 'first',
      name: 'Netherlands',
      flag: '🇳🇱'
    }
  ],
  'B': [
    {
      rank: 'first',
      name: 'England',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    },
    {
      name: 'Iran',
      flag: '🇮🇷'
    },
    {
      rank: 'second',
      name: 'USA',
      flag: '🇺🇸'
    },
    {
      name: 'Wales',
      flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿'
    }
  ],
  'C': [
    {
      rank: 'first',
      name: 'Argentina',
      flag: '🇦🇷'
    },
    {
      name: 'Saudi Arabia',
      flag: '🇸🇦'
    },
    {
      name: 'Mexico',
      flag: '🇲🇽'
    },
    {
      rank: 'second',
      name: 'Poland',
      flag: '🇵🇱'
    }
  ],
  'D': [
    {
      rank: 'first',
      name: 'France',
      flag: '🇫🇷'
    },
    {
      rank: 'second',
      name: 'Australia',
      flag: '🇦🇺'
    },
    {
      name: 'Denmark',
      flag: '🇩🇰'
    },
    {
      name: 'Tunisia',
      flag: '🇹🇳'
    }
  ],
  'E': [
    {
      rank: 'second',
      name: 'Spain',
      flag: '🇪🇸'
    },
    {
      name: 'Costa Rica',
      flag: '🇨🇷'
    },
    {
      name: 'Germany',
      flag: '🇩🇪'
    },
    {
      rank: 'first',
      name: 'Japan',
      flag: '🇯🇵'
    }
  ],
  'F': [
    {
      name: 'Belgium',
      flag: '🇧🇪'
    },
    {
      name: 'Canada',
      flag: '🇨🇦'
    },
    {
      rank: 'first',
      name: 'Morocco',
      flag: '🇲🇦'
    },
    {
      rank: 'second',
      name: 'Croatia',
      flag: '🇭🇷'
    }
  ],
  'G': [
    {
      rank: 'first',
      name: 'Brazil',
      flag: '🇧🇷'
    },
    {
      name: 'Serbia',
      flag: '🇷🇸'
    },
    {
      rank: 'second',
      name: 'Switzerland',
      flag: '🇨🇭'
    },
    {
      name: 'Cameroon',
      flag: '🇨🇲'
    }
  ],
  'H': [
    {
      rank: 'first',
      name: 'Portugal',
      flag: '🇵🇹'
    },
    {
      name: 'Ghana',
      flag: '🇬🇭'
    },
    {
      name: 'Uruguay',
      flag: '🇺🇾'
    },
    {
      rank: 'second',
      name: 'Korea',
      flag: '🇰🇷'
    }
  ],
}

const responses = getResponses(GROUPS, COUNTRIES, entries)

export default function handler(req, res) {
  res.status(200).json({ responses, GROUPS, COUNTRIES, entries })
}
