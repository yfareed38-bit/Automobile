import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

const app = express();
dotenv.config();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// --- VEHICLE ROUTES ---

// Get all vehicles
app.get('/api/vehicles', async (req, res) => {
  try {
    const vehicles = await prisma.vehicle.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create vehicle
app.post('/api/vehicles', async (req, res) => {
  try {
    const vehicle = await prisma.vehicle.create({
      data: req.body
    });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update vehicle
app.put('/api/vehicles/:id', async (req, res) => {
  try {
    const vehicle = await prisma.vehicle.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    res.json(vehicle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete vehicle
app.delete('/api/vehicles/:id', async (req, res) => {
  try {
    await prisma.vehicle.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.json({ message: 'Vehicle deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- INQUIRY ROUTES ---

// Submit inquiry
app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = await prisma.inquiry.create({
      data: req.body
    });
    res.json(inquiry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all inquiries
app.get('/api/inquiries', async (req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      include: { vehicle: true },
      orderBy: { createdAt: 'desc' }
    });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- BLOG ROUTES ---

app.get('/api/posts', async (req, res) => {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const post = await prisma.blogPost.create({
      data: req.body
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// --- ANALYTICS ---

app.get('/api/analytics', async (req, res) => {
  try {
    const analytics = await prisma.analytics.findMany({
      orderBy: { date: 'desc' },
      take: 7
    });
    res.json(analytics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
