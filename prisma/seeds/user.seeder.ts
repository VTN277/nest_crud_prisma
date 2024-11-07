import { PrismaClient } from '@prisma/client';

export async function seedUsers(prisma: PrismaClient) {
	const users = [];
	for (let i = 1; i <= 10; i++) {
		const user = await prisma.user.create({
			data: {
				id: `user-${i}`,
				firstName: `First${i}`,
				firstKana: `ファースト${i}`,
				lastName: `Last${i}`,
				lastKana: `ラスト${i}`,
				username: `user${i}`,
				point: 1000 * i,
			},
		});
		users.push(user);
	}
	return users;
}