

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverageyarn run seed:users
$ yarn run test:cov
```

## Seed
```bash
# Seed tất cả các bảng
yarn run seed

# Seed chỉ bảng User
yarn run seed:users

# Seed nhiều bảng cụ thể
ts-node prisma/seeds/index.ts users auth

# Hoặc chạy trực tiếp với Prisma
npx prisma db seed
```