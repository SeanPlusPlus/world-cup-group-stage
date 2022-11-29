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
      name: 'Poland',
      flag: '🇵🇱'
    }
  ],
  'D': [
    {
      name: 'France',
      flag: '🇫🇷'
    },
    {
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
      name: 'Morocco',
      flag: '🇲🇦'
    },
    {
      name: 'Croatia',
      flag: '🇭🇷'
    }
  ],
  'G': [
    {
      name: 'Brazil',
      flag: '🇧🇷'
    },
    {
      name: 'Serbia',
      flag: '🇷🇸'
    },
    {
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
      name: 'Korea',
      flag: '🇰🇷'
    }
  ],
}

const responses = getResponses(GROUPS, COUNTRIES, entries)

export default function handler(req, res) {
  res.status(200).json({ responses, GROUPS, COUNTRIES, entries })
}
