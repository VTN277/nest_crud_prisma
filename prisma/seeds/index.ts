import { PrismaClient } from '@prisma/client';
import { seedUsers } from './user.seeder';

const prisma = new PrismaClient();

async function main() {
	try {
		// Clear existing data
		await prisma.temporaryRegistration.deleteMany({});
		await prisma.authentication.deleteMany({});
		await prisma.user.deleteMany({});

		// Seed specific tables based on command line arguments
		const args = process.argv.slice(2);
		const tables = args.length > 0 ? args : ['users', 'auth', 'temp'];

		console.log('Seeding tables:', tables);

		let users = [];
		if (tables.includes('users')) {
			users = await seedUsers(prisma);
			console.log('✓ Users seeded');
		}
		console.log('Seeding completed!');
	} catch (error) {
		console.error('Error seeding database:', error);
		throw error;
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});