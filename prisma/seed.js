import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding data...');

  // 1. Seed Vehicles
  const v1 = await prisma.vehicle.create({
    data: {
      name: 'Yasir X-SUV',
      category: 'SUVs',
      price: 85000,
      specs: '500hp | AWD | 7-Seater',
      description: 'The ultimate luxury SUV for families.',
      image: '/assets/images/suv.png',
      tagline: 'Adventure in Luxury',
      featured: true,
    }
  });

  const v2 = await prisma.vehicle.create({
    data: {
      name: 'Yasir S-Executive',
      category: 'Sedans',
      price: 72000,
      specs: '420hp | RWD | Luxury Interior',
      description: 'The pinnacle of executive comfort.',
      image: '/assets/images/sedan.png',
      tagline: 'Drive the Ambition',
      featured: true,
    }
  });

  const v3 = await prisma.vehicle.create({
    data: {
      name: 'Yasir E-Vision',
      category: 'Electric',
      price: 95000,
      specs: '850hp | 650km Range | AWD',
      description: 'The future of electric mobility.',
      image: '/assets/images/ev.png',
      tagline: 'The Pinnacle of Electric Luxury',
      featured: true,
    }
  });

  // 2. Seed Blog Posts
  await prisma.blogPost.create({
    data: {
      title: 'The Future of Electric Vehicles',
      content: 'Electric vehicles are transforming the way we drive...',
      author: 'Yasir Motors',
      excerpt: 'Explore the latest trends in EV technology.',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80',
    }
  });

  // 3. Seed Analytics
  await prisma.analytics.create({
    data: {
      pageViews: 12450,
      leads: 85,
      clicks: 3420,
      date: new Date()
    }
  });

  console.log('Seeding complete!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
