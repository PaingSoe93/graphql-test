import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PubSub } from 'graphql-subscriptions';
import { DonationCreateInput } from '../@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { OrderByParam } from '../graphql';
import { DonationsService } from './donations.service';

const pubSub = new PubSub();

@Resolver('Donation')
export class DonationsResolver {
  constructor(private readonly donationsService: DonationsService) {}

  @Mutation('createDonation')
  async create(
    @Args('createDonationInput') createDonationInput: DonationCreateInput,
  ) {
    const donation = await this.donationsService.create(createDonationInput);
    const total = await this.donationsService.getTotal();
    pubSub.publish('totalAmountUpdated', { totalAmountUpdated: { total } });
    return donation;
  }

  @Query('donations')
  findAll(@Args('orderBy') orderBy: OrderByParam) {
    return this.donationsService.findAll(orderBy);
  }

  @Query('donation')
  findOne(
    @Args('id') donationWhereUniqueInput: Prisma.DonationWhereUniqueInput,
  ) {
    return this.donationsService.findOne(donationWhereUniqueInput);
  }

  @Subscription()
  totalAmountUpdated() {
    return pubSub.asyncIterator('totalAmountUpdated');
  }
}
