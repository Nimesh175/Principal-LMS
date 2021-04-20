import mock from '../mock'
import { paginateArray } from '../utils'

const data = {
  users: [
    {
      id: 1,
      fullName: 'Nuwan Perera',
      company: 'Yotz PVT LTD',
      role: '200107123v',
      username: '',
      country: 'SriLanka',
      contact: '072 669876',
      email: 'nuwan332@gmai.com',
      currentPlan: 'Science',
      status: 'active',
      avatar: ''
    },
    {
      id: 2,
      fullName: 'Ashen Rathnayaka',
      company: 'Skinder PVT LTD',
      role: '2056665120v',
      username: '',
      country: 'SriLanka',
      contact: '077 9976583',
      email: 'ashen22@gmail.com',
      currentPlan: 'Mathematics',
      status: 'active',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 3,
      fullName: 'Suneth Kasun',
      company: 'Oozz PVT LTD',
      role: '200107177v',
      username: '',
      country: 'SriLanka',
      contact: '077 8956567',
      email: 'sunethKasun33@gmail.com',
      currentPlan: 'English',
      status: 'active',
      avatar: ''
    },
    {
      id: 4,
      fullName: 'Tharindu Werarathna',
      company: 'Oozz PVT LTD',
      role: '205607121v',
      username: '',
      country: 'SriLanka',
      contact: '071 4476897',
      email: 'tharindu77@gmail.com',
      currentPlan: 'Sinhala',
      status: 'active',
      avatar: ''
    },
    {
      id: 5,
      fullName: 'Mohommad Hurran',
      company: 'Aimbo PVT LTD',
      role: '200107120v',
      username: '',
      country: 'SrilLanka',
      contact: '077 3435653',
      email: 'mohommad99@gmail.com',
      currentPlan: 'Litreture',
      status: 'active',
      avatar: require('@src/assets/images/avatars/10.png').default
    },
    {
      id: 6,
      fullName: 'Jevan Mendis',
      company: 'Jaxbean PVT LTD',
      role: '200107120v',
      username: '',
      country: 'SrilLanka',
      contact: '078 3456432',
      email: 'jeven55@gmail.com',
      currentPlan: 'Buddhism',
      status: 'active',
      avatar: ''
    },
    {
      id: 7,
      fullName: 'Buddika Dahanayaka',
      company: 'Jazzy PVT LTD',
      role: '200107120v',
      username: '',
      country: 'SrilLanka',
      contact: '071 5670982',
      email: 'buddika44@gmail.com',
      currentPlan: 'I.C.T',
      status: 'active',
      avatar: ''
    },
    {
      id: 8,
      fullName: 'Keshera Liyanage',
      company: 'Pixoboo PVT LTD',
      role: '200107120v',
      username: '',
      country: 'SrilLanka',
      contact: '072 4567892',
      email: 'keshera@gmail.com',
      currentPlan: 'Science',
      status: 'active',
      avatar:''
    },
    {
      id: 9,
      fullName: 'Dasun Karunanayaka',
      company: 'Tekfly PVT LTD',
      role: '200107120v',
      username: '',
      country: 'SriLanka',
      contact: '077 2956781',
      email: 'dasun44@gmail.com',
      currentPlan: 'Music',
      status: 'active',
      avatar: require('@src/assets/images/avatars/2.png').default
    },
    {
      id: 10,
      fullName: 'Tharanga Dananayaka',
      company: 'Gigashots PVT LTD',
      role: '200107144v',
      username: '',
      country: 'SriLanka',
      contact: '071 3456783',
      email: 'tharanga7@gmail.com',
      currentPlan: 'Dancing',
      status: 'active',
      avatar: require('@src/assets/images/avatars/10.png').default
    }
    // {
    //   id: 11,
    //   fullName: 'Jonah Wharlton',
    //   company: 'Eare PVT LTD',
    //   role: 'subscriber',
    //   username: 'jwharltona',
    //   country: 'United States',
    //   contact: '(176) 532-6824',
    //   email: 'jwharltona@oakley.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/4.png').default
    // },
    // {
    //   id: 12,
    //   fullName: 'Seth Hallam',
    //   company: 'Yakitri PVT LTD',
    //   role: 'subscriber',
    //   username: 'shallamb',
    //   country: 'Peru',
    //   contact: '(234) 464-0600',
    //   email: 'shallamb@hugedomains.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: require('@src/assets/images/avatars/5.png').default
    // },
    // {
    //   id: 13,
    //   fullName: 'Yoko Pottie',
    //   company: 'Leenti PVT LTD',
    //   role: 'subscriber',
    //   username: 'ypottiec',
    //   country: 'Philippines',
    //   contact: '(907) 284-5083',
    //   email: 'ypottiec@privacy.gov.au',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/7.png').default
    // },
    // {
    //   id: 14,
    //   fullName: 'Maximilianus Krause',
    //   company: 'Digitube PVT LTD',
    //   role: 'author',
    //   username: 'mkraused',
    //   country: 'Democratic Republic of the Congo',
    //   contact: '(167) 135-7392',
    //   email: 'mkraused@stanford.edu',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/9.png').default
    // },
    // {
    //   id: 15,
    //   fullName: 'Zsazsa McCleverty',
    //   company: 'Kaymbo PVT LTD',
    //   role: 'maintainer',
    //   username: 'zmcclevertye',
    //   country: 'France',
    //   contact: '(317) 409-6565',
    //   email: 'zmcclevertye@soundcloud.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/2.png').default
    // },
    // {
    //   id: 16,
    //   fullName: 'Bentlee Emblin',
    //   company: 'Yambee PVT LTD',
    //   role: 'author',
    //   username: 'bemblinf',
    //   country: 'Spain',
    //   contact: '(590) 606-1056',
    //   email: 'bemblinf@wired.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/6.png').default
    // },
    // {
    //   id: 17,
    //   fullName: 'Brockie Myles',
    //   company: 'Wikivu PVT LTD',
    //   role: 'maintainer',
    //   username: 'bmylesg',
    //   country: 'Poland',
    //   contact: '(553) 225-9905',
    //   email: 'bmylesg@amazon.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   avatar: ''
    // },
    // {
    //   id: 18,
    //   fullName: 'Bertha Biner',
    //   company: 'Twinte PVT LTD',
    //   role: 'editor',
    //   username: 'bbinerh',
    //   country: 'Yemen',
    //   contact: '(901) 916-9287',
    //   email: 'bbinerh@mozilla.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/7.png').default
    // },
    // {
    //   id: 19,
    //   fullName: 'Travus Bruntjen',
    //   company: 'Cogidoo PVT LTD',
    //   role: 'admin',
    //   username: 'tbruntjeni',
    //   country: 'France',
    //   contact: '(524) 586-6057',
    //   email: 'tbruntjeni@sitemeter.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: ''
    // },
    // {
    //   id: 20,
    //   fullName: 'Wesley Burland',
    //   company: 'Bubblemix PVT LTD',
    //   role: 'editor',
    //   username: 'wburlandj',
    //   country: 'Honduras',
    //   contact: '(569) 683-1292',
    //   email: 'wburlandj@uiuc.edu',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/6.png').default
    // },
    // {
    //   id: 21,
    //   fullName: 'Selina Kyle',
    //   company: 'Wayne Enterprises',
    //   role: 'admin',
    //   username: 'catwomen1940',
    //   country: 'USA',
    //   contact: '(829) 537-0057',
    //   email: 'irena.dubrovna@wayne.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 22,
    //   fullName: 'Jameson Lyster',
    //   company: 'Quaxo PVT LTD',
    //   role: 'editor',
    //   username: 'jlysterl',
    //   country: 'Ukraine',
    //   contact: '(593) 624-0222',
    //   email: 'jlysterl@guardian.co.uk',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/8.png').default
    // },
    // {
    //   id: 23,
    //   fullName: 'Kare Skitterel',
    //   company: 'Ainyx PVT LTD',
    //   role: 'maintainer',
    //   username: 'kskitterelm',
    //   country: 'Poland',
    //   contact: '(254) 845-4107',
    //   email: 'kskitterelm@washingtonpost.com',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: require('@src/assets/images/avatars/3.png').default
    // },
    // {
    //   id: 24,
    //   fullName: 'Cleavland Hatherleigh',
    //   company: 'Flipopia PVT LTD',
    //   role: 'admin',
    //   username: 'chatherleighn',
    //   country: 'Brazil',
    //   contact: '(700) 783-7498',
    //   email: 'chatherleighn@washington.edu',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: require('@src/assets/images/avatars/2.png').default
    // },
    // {
    //   id: 25,
    //   fullName: 'Adeline Micco',
    //   company: 'Topicware PVT LTD',
    //   role: 'admin',
    //   username: 'amiccoo',
    //   country: 'France',
    //   contact: '(227) 598-1841',
    //   email: 'amiccoo@whitehouse.gov',
    //   currentPlan: 'enterprise',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 26,
    //   fullName: 'Hugh Hasson',
    //   company: 'Skinix PVT LTD',
    //   role: 'admin',
    //   username: 'hhassonp',
    //   country: 'China',
    //   contact: '(582) 516-1324',
    //   email: 'hhassonp@bizjournals.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/4.png').default
    // },
    // {
    //   id: 27,
    //   fullName: 'Germain Jacombs',
    //   company: 'Youopia PVT LTD',
    //   role: 'editor',
    //   username: 'gjacombsq',
    //   country: 'Zambia',
    //   contact: '(137) 467-5393',
    //   email: 'gjacombsq@jigsy.com',
    //   currentPlan: 'enterprise',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/10.png').default
    // },
    // {
    //   id: 28,
    //   fullName: 'Bree Kilday',
    //   company: 'Jetpulse PVT LTD',
    //   role: 'maintainer',
    //   username: 'bkildayr',
    //   country: 'Portugal',
    //   contact: '(412) 476-0854',
    //   email: 'bkildayr@mashable.com',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: ''
    // },
    // {
    //   id: 29,
    //   fullName: 'Candice Pinyon',
    //   company: 'Kare PVT LTD',
    //   role: 'maintainer',
    //   username: 'cpinyons',
    //   country: 'Sweden',
    //   contact: '(170) 683-1520',
    //   email: 'cpinyons@behance.net',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/7.png').default
    // },
    // {
    //   id: 30,
    //   fullName: 'Isabel Mallindine',
    //   company: 'Voomm PVT LTD',
    //   role: 'subscriber',
    //   username: 'imallindinet',
    //   country: 'Slovenia',
    //   contact: '(332) 803-1983',
    //   email: 'imallindinet@shinystat.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 31,
    //   fullName: 'Gwendolyn Meineken',
    //   company: 'Oyondu PVT LTD',
    //   role: 'admin',
    //   username: 'gmeinekenu',
    //   country: 'Moldova',
    //   contact: '(551) 379-7460',
    //   email: 'gmeinekenu@hc360.com',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 32,
    //   fullName: 'Rafaellle Snowball',
    //   company: 'Fivespan PVT LTD',
    //   role: 'editor',
    //   username: 'rsnowballv',
    //   country: 'Philippines',
    //   contact: '(974) 829-0911',
    //   email: 'rsnowballv@indiegogo.com',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: require('@src/assets/images/avatars/5.png').default
    // },
    // {
    //   id: 33,
    //   fullName: 'Rochette Emer',
    //   company: 'Thoughtworks PVT LTD',
    //   role: 'admin',
    //   username: 'remerw',
    //   country: 'North Korea',
    //   contact: '(841) 889-3339',
    //   email: 'remerw@blogtalkradio.com',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/8.png').default
    // },
    // {
    //   id: 34,
    //   fullName: 'Ophelie Fibbens',
    //   company: 'Jaxbean PVT LTD',
    //   role: 'subscriber',
    //   username: 'ofibbensx',
    //   country: 'Indonesia',
    //   contact: '(764) 885-7351',
    //   email: 'ofibbensx@booking.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/4.png').default
    // },
    // {
    //   id: 35,
    //   fullName: 'Stephen MacGilfoyle',
    //   company: 'Browseblab PVT LTD',
    //   role: 'maintainer',
    //   username: 'smacgilfoyley',
    //   country: 'Japan',
    //   contact: '(350) 589-8520',
    //   email: 'smacgilfoyley@bigcartel.com',
    //   currentPlan: 'company',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 36,
    //   fullName: 'Bradan Rosebotham',
    //   company: 'Agivu PVT LTD',
    //   role: 'subscriber',
    //   username: 'brosebothamz',
    //   country: 'Belarus',
    //   contact: '(882) 933-2180',
    //   email: 'brosebothamz@tripadvisor.com',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: ''
    // },
    // {
    //   id: 37,
    //   fullName: 'Skip Hebblethwaite',
    //   company: 'Katz PVT LTD',
    //   role: 'admin',
    //   username: 'shebblethwaite10',
    //   country: 'Canada',
    //   contact: '(610) 343-1024',
    //   email: 'shebblethwaite10@arizona.edu',
    //   currentPlan: 'company',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/9.png').default
    // },
    // {
    //   id: 38,
    //   fullName: 'Moritz Piccard',
    //   company: 'Twitternation PVT LTD',
    //   role: 'maintainer',
    //   username: 'mpiccard11',
    //   country: 'Croatia',
    //   contact: '(365) 277-2986',
    //   email: 'mpiccard11@vimeo.com',
    //   currentPlan: 'enterprise',
    //   status: 'inactive',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 39,
    //   fullName: 'Tyne Widmore',
    //   company: 'Yombu PVT LTD',
    //   role: 'subscriber',
    //   username: 'twidmore12',
    //   country: 'Finland',
    //   contact: '(531) 731-0928',
    //   email: 'twidmore12@bravesites.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 40,
    //   fullName: 'Florenza Desporte',
    //   company: 'Kamba PVT LTD',
    //   role: 'author',
    //   username: 'fdesporte13',
    //   country: 'Ukraine',
    //   contact: '(312) 104-2638',
    //   email: 'fdesporte13@omniture.com',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/6.png').default
    // },
    // {
    //   id: 41,
    //   fullName: 'Edwina Baldetti',
    //   company: 'Dazzlesphere PVT LTD',
    //   role: 'maintainer',
    //   username: 'ebaldetti14',
    //   country: 'Haiti',
    //   contact: '(315) 329-3578',
    //   email: 'ebaldetti14@theguardian.com',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 42,
    //   fullName: 'Benedetto Rossiter',
    //   company: 'Mybuzz PVT LTD',
    //   role: 'editor',
    //   username: 'brossiter15',
    //   country: 'Indonesia',
    //   contact: '(323) 175-6741',
    //   email: 'brossiter15@craigslist.org',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: ''
    // },
    // {
    //   id: 43,
    //   fullName: 'Micaela McNirlan',
    //   company: 'Tambee PVT LTD',
    //   role: 'admin',
    //   username: 'mmcnirlan16',
    //   country: 'Indonesia',
    //   contact: '(242) 952-0916',
    //   email: 'mmcnirlan16@hc360.com',
    //   currentPlan: 'basic',
    //   status: 'inactive',
    //   avatar: ''
    // },
    // {
    //   id: 44,
    //   fullName: 'Vladamir Koschek',
    //   company: 'Centimia PVT LTD',
    //   role: 'author',
    //   username: 'vkoschek17',
    //   country: 'Guatemala',
    //   contact: '(531) 758-8335',
    //   email: 'vkoschek17@abc.net.au',
    //   currentPlan: 'team',
    //   status: 'active',
    //   avatar: ''
    // },
    // {
    //   id: 45,
    //   fullName: 'Corrie Perot',
    //   company: 'Flipopia PVT LTD',
    //   role: 'subscriber',
    //   username: 'cperot18',
    //   country: 'China',
    //   contact: '(659) 385-6808',
    //   email: 'cperot18@goo.ne.jp',
    //   currentPlan: 'team',
    //   status: 'pending',
    //   avatar: require('@src/assets/images/avatars/3.png').default
    // },
    // {
    //   id: 46,
    //   fullName: 'Saunder Offner',
    //   company: 'Skalith PVT LTD',
    //   role: 'maintainer',
    //   username: 'soffner19',
    //   country: 'Poland',
    //   contact: '(200) 586-2264',
    //   email: 'soffner19@mac.com',
    //   currentPlan: 'enterprise',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 47,
    //   fullName: 'Karena Courtliff',
    //   company: 'Feedfire PVT LTD',
    //   role: 'admin',
    //   username: 'kcourtliff1a',
    //   country: 'China',
    //   contact: '(478) 199-0020',
    //   email: 'kcourtliff1a@bbc.co.uk',
    //   currentPlan: 'basic',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/1.png').default
    // },
    // {
    //   id: 48,
    //   fullName: 'Onfre Wind',
    //   company: 'Thoughtmix PVT LTD',
    //   role: 'admin',
    //   username: 'owind1b',
    //   country: 'Ukraine',
    //   contact: '(344) 262-7270',
    //   email: 'owind1b@yandex.ru',
    //   currentPlan: 'basic',
    //   status: 'pending',
    //   avatar: ''
    // },
    // {
    //   id: 49,
    //   fullName: 'Paulie Durber',
    //   company: 'Babbleblab PVT LTD',
    //   role: 'subscriber',
    //   username: 'pdurber1c',
    //   country: 'Sweden',
    //   contact: '(694) 676-1275',
    //   email: 'pdurber1c@gov.uk',
    //   currentPlan: 'team',
    //   status: 'inactive',
    //   avatar: ''
    // },
    // {
    //   id: 50,
    //   fullName: 'Beverlie Krabbe',
    //   company: 'Kaymbo PVT LTD',
    //   role: 'editor',
    //   username: 'bkrabbe1d',
    //   country: 'China',
    //   contact: '(397) 294-5153',
    //   email: 'bkrabbe1d@home.pl',
    //   currentPlan: 'company',
    //   status: 'active',
    //   avatar: require('@src/assets/images/avatars/9.png').default
    // }
  ]
}

// GET ALL DATA
mock.onGet('/api/users/list/all-data').reply(200, data.users)

// POST: Add new user
mock.onPost('/apps/users/add-user').reply(config => {
  // Get event from post data
  const user = JSON.parse(config.data)

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.unshift(user)

  return [201, { user }]
})

// GET Updated DATA
mock.onGet('/api/users/list/data').reply(config => {
  const { q = '', perPage = 10, page = 1, role = null, currentPlan = null, status = null } = config

  /* eslint-disable  */
  const queryLowered = q.toLowerCase()
  const filteredData = data.users.filter(
    user =>
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (currentPlan || user.currentPlan) &&
      user.status === (status || user.status)
  )
  /* eslint-enable  */

  return [
    200,
    {
      users: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// GET USER
mock.onGet('/api/users/user').reply(config => {
  const { id } = config
  const user = data.users.find(i => i.id === id)
  return [200, { user }]
})

// // DELETE: Deletes User
mock.onDelete('/apps/users/delete').reply(config => {
  // Get user id from URL
  let userId = config.id

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(t => t.id === userId)
  data.users.splice(userIndex, 1)

  return [200]
})
