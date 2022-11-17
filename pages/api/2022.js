// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { entries } from "../../data/entries"

const GROUPS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

const COUNTRIES = {
  'A': [
    {
      name: 'Qatar',
      flag: '🇶🇦'
    },
    {
      rank: 'second',
      name: 'Ecuador',
      flag: '🇪🇨'
    },
    {
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
      name: 'England',
      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿'
    },
    {
      name: 'Iran',
      flag: '🇮🇷'
    },
    {
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

export default function handler(req, res) {
  res.status(200).json({ GROUPS, COUNTRIES, entries })
}
