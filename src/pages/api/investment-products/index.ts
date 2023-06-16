import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { investmentProductValidationSchema } from 'validationSchema/investment-products';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getInvestmentProducts();
    case 'POST':
      return createInvestmentProduct();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getInvestmentProducts() {
    const data = await prisma.investment_product
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'investment_product'));
    return res.status(200).json(data);
  }

  async function createInvestmentProduct() {
    await investmentProductValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.investment?.length > 0) {
      const create_investment = body.investment;
      body.investment = {
        create: create_investment,
      };
    } else {
      delete body.investment;
    }
    const data = await prisma.investment_product.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
