import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const url = 'https://api.mercadopago.com/checkout/preferences'

  const body = {
    payer: {
      name: 'Lalo Landa',
      email: 'test_user_63274575@testuser.com',
      phone: {
        area_code: '11',
        number: '4534 4534'
      },
      address: {
        zip_code: '75100',
        street_name: 'Falsa',
        street_number: 123
      }
    },
    items: [
      {
        id: req.body.id,
        title: req.body.name,
        unit_price: req.body.price,
        quantity: 1,
        description: req.body.description,
        picture_url: req.body.image,
        category_id: 'car_electronics',
        currency_id: 'UYU'
      }
    ],
    back_urls: {
      // success: 'http://localhost:3000/status/success',
      // pending: 'http://localhost:3000/status/pending',
      // failure: 'http://localhost:3000/status/failure'
      success: `https://${String(process.env.PRODUCTION_URL)}/status/success`,
      pending: `https://${String(process.env.PRODUCTION_URL)}/status/pending`,
      failure: `https://${String(process.env.PRODUCTION_URL)}/status/failure`
    },
    notification_url: '',
    payment_methods: {
      excluded_payment_methods: [
        {
          id: 'visa'
        }
      ],
      excluded_payment_types: [
        {}
      ],
      installments: 6
    }
  }

  const preferenceData = await axios.request({
    url,
    method: 'POST',
    data: body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${String(process.env.ACCESS_TOKEN)}`
    }
  })

  return res.status(200).json({
    error: false,
    msg: 'Success',
    preference_data: preferenceData.data
  })
}

export default create
