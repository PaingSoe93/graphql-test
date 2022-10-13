import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    displayName = "displayName",
    email = "email",
    message = "message",
    amount = "amount",
    createdAt = "createdAt"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
