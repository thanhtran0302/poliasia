import { NextApiRequest, NextApiResponse } from 'next';
import { airtableClient } from '../../../utils/airtable';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email } = JSON.parse(req.body);

    try {
      await airtableClient()('poliasia-newsletter').create([
        {
          fields: {
            email
          }
        }
      ]);
      res.status(200).send({ message: 'OK' });
    } catch (error) {
      res.status(400).send({ message: 'FAIL', error });
    }
  }
};
