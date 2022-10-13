import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { DonationCreateInput } from '../@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { OrderByParam } from '../graphql';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createDonationInput: DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  findAll(orderBy?: OrderByParam) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: {
        [field]: direction,
      },
    });
  }

  findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }

  async getTotal() {
    const res = await this.prisma.donation.aggregate({
      _sum: {
        amount: true,
      },
    });
    return res._sum.amount;
  }
}
