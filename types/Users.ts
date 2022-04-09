const SAMPLE_USER = {
  gender: 'male',
  name: {
    title: 'Mr',
    first: 'Ralph',
    last: 'Spencer',
  },
  location: {
    street: {
      number: 2488,
      name: 'Bridge Road',
    },
    city: 'Salisbury',
    state: 'Staffordshire',
    country: 'United Kingdom',
    postcode: 'S5W 4SE',
    coordinates: {
      latitude: '7.9211',
      longitude: '-55.8581',
    },
    timezone: {
      offset: '-12:00',
      description: 'Eniwetok, Kwajalein',
    },
  },
  email: 'ralph.spencer@example.com',
  login: {
    uuid: 'cd031bd5-670d-4a4d-b506-3e3b5c446ba0',
    username: 'angrykoala299',
    password: 'frank',
    salt: 'zEc2Qp1C',
    md5: '4aa0bf88fd40371a1fe0babf0470b0d3',
    sha1: '85490f5ad3ad7a1879cbb9cf8a444999aa8c98db',
    sha256: '02fb680936e086253a4e0de40f5059f3459f7d53de45c7bf54c77d56ff69fa2d',
  },
  dob: {
    date: '1992-07-12T21:05:05.151Z',
    age: 30,
  },
  registered: {
    date: '2006-04-27T01:33:58.859Z',
    age: 16,
  },
  phone: '019467 51401',
  cell: '0730-096-007',
  id: {
    name: 'NINO',
    value: 'HP 36 10 58 L',
  },
  picture: {
    large: 'https://randomuser.me/api/portraits/men/73.jpg',
    medium: 'https://randomuser.me/api/portraits/med/men/73.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/men/73.jpg',
  },
  nat: 'GB',
};

export type Users = typeof SAMPLE_USER[];

export interface IShowUserInfo {
  image: string;
  username: string;
  lName: string;
  fName: string;
  email: string;
  registered: string;
}
