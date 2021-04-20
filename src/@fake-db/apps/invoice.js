import mock from '../mock'
import { paginateArray, sortCompare } from '../utils'

const data = {
  invoices: [
    {
      id: 3027,
      issuedDate: '13 Jan 2020',
      client: {
        address: '86691 Mackenzie Light Suite 568',
        company: 'Deleon Inc LLC',
        companyEmail: 'tharanga7@gmail.com',
        country: 'SriLanka',
        contact: '071 3456783',
        name: 'Tharanga Dananayaka'
      },
      service: 'Template Customization',
      total: '10 B',
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: 'Civic Education'
    },
    {
      id: 3028,
      issuedDate: '18 May 2019',
      client: {
        address: '86580 Sarah Bridge',
        company: 'Farmer, Johnson and Anderson Group',
        companyEmail: 'dasun44@gmail.com',
        country: 'SrilLanka',
        contact: '077 2956781',
        name: 'Dasun Karunanayaka'
      },
      service: 'Template Customization',
      total: '9 A',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$361',
      dueDate: 'Dancing'
    },
    {
      id: 3029,
      issuedDate: '29 Oct 2019',
      client: {
        address: '49709 Edwin Ports Apt. 353',
        company: 'Sherman-Johnson PLC',
        companyEmail: 'keshera@gmail.com',
        country: 'SrilLanka',
        contact: '072 4567892',
        name: 'Keshera Liyanage'
      },
      service: 'Template Customization',
      total: '5 B',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: 'Music'
    },
    {
      id: 3030,
      issuedDate: '07 Apr 2019',
      client: {
        address: '3856 Mathis Squares Apt. 584',
        company: 'Byrd LLC PLC',
        companyEmail: 'buddika44@gmail.com',
        country: 'SrilLanka',
        contact: '071 5670982',
        name: 'Buddika Dahanayaka'
      },
      service: 'Template Customization',
      total: '2 D',
      avatar: '',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: 'ICT'
    },
    {
      id: 3031,
      issuedDate: '21 Aug 2019',
      client: {
        address: '141 Adrian Ridge Suite 550',
        company: 'Stone-Zimmerman Group',
        companyEmail: 'jeven55@gmail.com',
        country: 'SriLanka',
        contact: '078 3456432',
        name: 'Jevan Mendis'
      },
      service: 'Template Customization',
      total: '6 C',
      avatar: require('@src/assets/images/avatars/2-small.png').default,
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: 'Buddism'
    },
    {
      id: 3032,
      issuedDate: '31 May 2019',
      client: {
        address: '01871 Kristy Square',
        company: 'Yang, Hansen and Hart PLC',
        companyEmail: 'mohommad99@gmail.com',
        country: 'SriLanka',
        contact: '077 3435653',
        name: 'Mohommad Hurran'
      },
      service: 'Template Customization',
      total: '1 B',
      avatar: '',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: 'Litreture'
    },
    {
      id: 3033,
      issuedDate: '12 Jul 2019',
      client: {
        address: '075 Smith Views',
        company: 'Jenkins-Rosales Inc',
        companyEmail: 'tharindu77@gmail.com',
        country: 'SriLanka',
        contact: '071 4476897',
        name: 'Tharindu Werarathna'
      },
      service: 'Template Customization',
      total: '11 E',
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: 'Sinhala'
    },
    {
      id: 3034,
      issuedDate: '10 Jul 2019',
      client: {
        address: '2577 Pearson Overpass Apt. 314',
        company: 'Mason-Reed PLC',
        companyEmail: 'sunethKasun33@gmail.com',
        country: 'SriLanka',
        contact: '077 8956567',
        name: 'Suneth Kasun'
      },
      service: 'Unlimited Extended License',
      total: '3 E',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: 'English'
    },
    {
      id: 3035,
      issuedDate: '20 Jul 2019',
      client: {
        address: '1770 Sandra Mountains Suite 636',
        company: 'Foster-Pham PLC',
        companyEmail: 'ashen22@gmail.com',
        country: 'SriLanka',
        contact: '077 9976583',
        name: 'Ashen Rathnayaka'
      },
      service: 'UI/UX Design & Development',
      total: '10 D',
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$762',
      dueDate: 'Science'
    },
    {
      id: 3036,
      issuedDate: '19 Apr 2019',
      client: {
        address: '78083 Laura Pines',
        company: 'Richardson and Sons LLC',
        companyEmail: 'nuwan332@gmai.com',
        country: 'SriLanka',
        contact: '072 669876',
        name: 'Nimal Perera'
      },
      service: 'Unlimited Extended License',
      total: '8 C',
      avatar: require('@src/assets/images/avatars/2-small.png').default,
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: 'Mathematics'
    },
    {
      id: 4027,
      issuedDate: '13 Jan 2020',
      client: {
        address: '86691 Mackenzie Light Suite 568',
        company: 'Deleon Inc LLC',
        companyEmail: 'tharanga7@gmail.com',
        country: 'SriLanka',
        contact: '071 3456783',
        name: 'Tharanga Dananayaka'
      },
      service: 'Template Customization',
      total: '10 B',
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: 'Civic Education'
    },
    {
      id: 4028,
      issuedDate: '18 May 2019',
      client: {
        address: '86580 Sarah Bridge',
        company: 'Farmer, Johnson and Anderson Group',
        companyEmail: 'dasun44@gmail.com',
        country: 'SrilLanka',
        contact: '077 2956781',
        name: 'Dasun Karunanayaka'
      },
      service: 'Template Customization',
      total: '9 A',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$361',
      dueDate: 'Dancing'
    },
    {
      id: 4029,
      issuedDate: '29 Oct 2019',
      client: {
        address: '49709 Edwin Ports Apt. 353',
        company: 'Sherman-Johnson PLC',
        companyEmail: 'keshera@gmail.com',
        country: 'SrilLanka',
        contact: '072 4567892',
        name: 'Keshera Liyanage'
      },
      service: 'Template Customization',
      total: '5 B',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: 'Music'
    },
    {
      id: 4030,
      issuedDate: '07 Apr 2019',
      client: {
        address: '3856 Mathis Squares Apt. 584',
        company: 'Byrd LLC PLC',
        companyEmail: 'buddika44@gmail.com',
        country: 'SrilLanka',
        contact: '071 5670982',
        name: 'Buddika Dahanayaka'
      },
      service: 'Template Customization',
      total: '2 D',
      avatar: '',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: 'ICT'
    },
    {
      id: 4031,
      issuedDate: '21 Aug 2019',
      client: {
        address: '141 Adrian Ridge Suite 550',
        company: 'Stone-Zimmerman Group',
        companyEmail: 'jeven55@gmail.com',
        country: 'SriLanka',
        contact: '078 3456432',
        name: 'Jevan Mendis'
      },
      service: 'Template Customization',
      total: '6 C',
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: 'Buddism'
    },
    {
      id: 4032,
      issuedDate: '31 May 2019',
      client: {
        address: '01871 Kristy Square',
        company: 'Yang, Hansen and Hart PLC',
        companyEmail: 'mohommad99@gmail.com',
        country: 'SriLanka',
        contact: '077 3435653',
        name: 'Mohommad Hurran'
      },
      service: 'Template Customization',
      total: '1 B',
      avatar: '',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: 'Litreture'
    },
    {
      id: 4033,
      issuedDate: '12 Jul 2019',
      client: {
        address: '075 Smith Views',
        company: 'Jenkins-Rosales Inc',
        companyEmail: 'tharindu77@gmail.com',
        country: 'SriLanka',
        contact: '071 4476897',
        name: 'Tharindu Werarathna'
      },
      service: 'Template Customization',
      total: '11 E',
      avatar: require('@src/assets/images/avatars/2-small.png').default,
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: 'Sinhala'
    },
    {
      id: 4034,
      issuedDate: '10 Jul 2019',
      client: {
        address: '2577 Pearson Overpass Apt. 314',
        company: 'Mason-Reed PLC',
        companyEmail: 'sunethKasun33@gmail.com',
        country: 'SriLanka',
        contact: '077 8956567',
        name: 'Suneth Kasun'
      },
      service: 'Unlimited Extended License',
      total: '3 E',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: 'English'
    },
    {
      id: 4035,
      issuedDate: '20 Jul 2019',
      client: {
        address: '1770 Sandra Mountains Suite 636',
        company: 'Foster-Pham PLC',
        companyEmail: 'ashen22@gmail.com',
        country: 'SriLanka',
        contact: '077 9976583',
        name: 'Ashen Rathnayaka'
      },
      service: 'UI/UX Design & Development',
      total: '10 D',
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$762',
      dueDate: 'Science'
    },
    {
      id: 4036,
      issuedDate: '19 Apr 2019',
      client: {
        address: '78083 Laura Pines',
        company: 'Richardson and Sons LLC',
        companyEmail: 'nuwan332@gmai.com',
        country: 'SriLanka',
        contact: '072 669876',
        name: 'Nimal Perera'
      },
      service: 'Unlimited Extended License',
      total: '8 C',
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: 'Mathematics'
    },
    {
      id: 5027,
      issuedDate: '13 Jan 2020',
      client: {
        address: '86691 Mackenzie Light Suite 568',
        company: 'Deleon Inc LLC',
        companyEmail: 'tharanga7@gmail.com',
        country: 'SriLanka',
        contact: '071 3456783',
        name: 'Tharanga Dananayaka'
      },
      service: 'Template Customization',
      total: '10 B',
      avatar: '',
      invoiceStatus: 'Sent',
      balance: 0,
      dueDate: 'Civic Education'
    },
    {
      id: 5028,
      issuedDate: '18 May 2019',
      client: {
        address: '86580 Sarah Bridge',
        company: 'Farmer, Johnson and Anderson Group',
        companyEmail: 'dasun44@gmail.com',
        country: 'SrilLanka',
        contact: '077 2956781',
        name: 'Dasun Karunanayaka'
      },
      service: 'Template Customization',
      total: '9 A',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: '$361',
      dueDate: 'Dancing'
    },
    {
      id: 5029,
      issuedDate: '29 Oct 2019',
      client: {
        address: '49709 Edwin Ports Apt. 353',
        company: 'Sherman-Johnson PLC',
        companyEmail: 'keshera@gmail.com',
        country: 'SrilLanka',
        contact: '072 4567892',
        name: 'Keshera Liyanage'
      },
      service: 'Template Customization',
      total: '5 B',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: 'Music'
    },
    {
      id: 5030,
      issuedDate: '07 Apr 2019',
      client: {
        address: '3856 Mathis Squares Apt. 584',
        company: 'Byrd LLC PLC',
        companyEmail: 'buddika44@gmail.com',
        country: 'SrilLanka',
        contact: '071 5670982',
        name: 'Buddika Dahanayaka'
      },
      service: 'Template Customization',
      total: '2 D',
      avatar: '',
      invoiceStatus: 'Draft',
      balance: 0,
      dueDate: 'ICT'
    },
    {
      id: 5031,
      issuedDate: '21 Aug 2019',
      client: {
        address: '141 Adrian Ridge Suite 550',
        company: 'Stone-Zimmerman Group',
        companyEmail: 'jeven55@gmail.com',
        country: 'SriLanka',
        contact: '078 3456432',
        name: 'Jevan Mendis'
      },
      service: 'Template Customization',
      total: '6 C',
      avatar: require('@src/assets/images/avatars/2-small.png').default,
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: 'Buddism'
    },
    {
      id: 5032,
      issuedDate: '31 May 2019',
      client: {
        address: '01871 Kristy Square',
        company: 'Yang, Hansen and Hart PLC',
        companyEmail: 'mohommad99@gmail.com',
        country: 'SriLanka',
        contact: '077 3435653',
        name: 'Mohommad Hurran'
      },
      service: 'Template Customization',
      total: '1 B',
      avatar: '',
      invoiceStatus: 'Past Due',
      balance: 0,
      dueDate: 'Litreture'
    },
    {
      id: 5033,
      issuedDate: '12 Jul 2019',
      client: {
        address: '075 Smith Views',
        company: 'Jenkins-Rosales Inc',
        companyEmail: 'tharindu77@gmail.com',
        country: 'SriLanka',
        contact: '071 4476897',
        name: 'Tharindu Werarathna'
      },
      service: 'Template Customization',
      total: '11 E',
      avatar: require('@src/assets/images/avatars/2-small.png').default,
      invoiceStatus: 'Partial Payment',
      balance: 0,
      dueDate: 'Sinhala'
    },
    {
      id: 5034,
      issuedDate: '10 Jul 2019',
      client: {
        address: '2577 Pearson Overpass Apt. 314',
        company: 'Mason-Reed PLC',
        companyEmail: 'sunethKasun33@gmail.com',
        country: 'SriLanka',
        contact: '077 8956567',
        name: 'Suneth Kasun'
      },
      service: 'Unlimited Extended License',
      total: '3 E',
      avatar: '',
      invoiceStatus: 'Paid',
      balance: 0,
      dueDate: 'English'
    },
    {
      id: 5035,
      issuedDate: '20 Jul 2019',
      client: {
        address: '1770 Sandra Mountains Suite 636',
        company: 'Foster-Pham PLC',
        companyEmail: 'ashen22@gmail.com',
        country: 'SriLanka',
        contact: '077 9976583',
        name: 'Ashen Rathnayaka'
      },
      service: 'UI/UX Design & Development',
      total: '10 D',
      avatar: '',
      invoiceStatus: 'Draft',
      balance: '$762',
      dueDate: 'Science'
    },
    {
      id: 5036,
      issuedDate: '19 Apr 2019',
      client: {
        address: '78083 Laura Pines',
        company: 'Richardson and Sons LLC',
        companyEmail: 'nuwan332@gmai.com',
        country: 'SriLanka',
        contact: '072 669876',
        name: 'Nimal Perera'
      },
      service: 'Unlimited Extended License',
      total: '8 C',
      avatar: require('@src/assets/images/avatars/10-small.png').default,
      invoiceStatus: 'Paid',
      balance: '-$205',
      dueDate: 'Mathematics'
    }
  ]
}

// ------------------------------------------------
// GET: Return Invoice List
// ------------------------------------------------
mock.onGet('/apps/invoice/invoices').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', perPage = 10, page = 1, status = null } = config
  /* eslint-enable */

  const queryLowered = q.toLowerCase()
  const filteredData = data.invoices
    .filter(
      invoice =>
        /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
        (invoice.client.companyEmail.toLowerCase().includes(queryLowered) ||
          invoice.client.name.toLowerCase().includes(queryLowered)) &&
        invoice.invoiceStatus.toLowerCase() === (status.toLowerCase() || invoice.invoiceStatus.toLowerCase())
    )
    .sort(sortCompare('id'))
    .reverse()
  /* eslint-enable  */

  return [
    200,
    {
      allData: data.invoices,
      invoices: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    }
  ]
})

// ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------
mock.onGet(/\/api\/invoice\/invoices\/\d+/).reply(config => {
  // // Get event id from URL
  const invoiceId = Number(config.url.substring(config.url.lastIndexOf('/') + 1))

  const invoiceIndex = data.invoices.findIndex(e => e.id === invoiceId)
  const responseData = {
    invoice: data.invoices[invoiceIndex],
    paymentDetails: {
      totalDue: '$12,110.55',
      bankName: 'American Bank',
      country: 'United States',
      iban: 'ETD95476213874685',
      swiftCode: 'BR91905'
    }
  }
  return [200, responseData]
})

// ------------------------------------------------
// DELETE: Deletes Invoice
// ------------------------------------------------
mock.onDelete('/apps/invoice/delete').reply(config => {
  // Get invoice id from URL
  let invoiceId = config.id

  // Convert Id to number
  invoiceId = Number(invoiceId)

  const invoiceIndex = data.invoices.findIndex(t => t.id === invoiceId)
  data.invoices.splice(invoiceIndex, 1)

  return [200]
})

// ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------
mock.onGet('/api/invoice/clients').reply(() => {
  const clients = data.invoices.map(invoice => invoice.client)
  return [200, clients.slice(0, 5)]
})
