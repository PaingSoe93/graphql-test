
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateDonationInput {
    displayName: string;
    email: string;
    message: string;
    amount: number;
}

export class OrderByParam {
    field: string;
    direction: string;
}

export class Donation {
    id: number;
    displayName: string;
    email: string;
    message: string;
    amount: number;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract donations(orderBy?: Nullable<OrderByParam>): Nullable<Donation>[] | Promise<Nullable<Donation>[]>;

    abstract donation(id: number): Nullable<Donation> | Promise<Nullable<Donation>>;
}

export abstract class IMutation {
    abstract createDonation(createDonationInput: CreateDonationInput): Donation | Promise<Donation>;
}

export class Result {
    total: number;
}

export abstract class ISubscription {
    abstract totalAmountUpdated(): Nullable<Result> | Promise<Nullable<Result>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
