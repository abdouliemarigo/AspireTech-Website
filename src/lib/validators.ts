import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200).optional(),
  service: z.string().optional(),
  message: z.string().min(10).max(5000),
  consent: z.literal(true),
});

export const inquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  phone: z.string().max(30).optional(),
  projectType: z.string().min(1),
  title: z.string().min(3).max(200),
  description: z.string().min(20).max(8000),
  goals: z.string().max(2000).optional(),
  audience: z.string().max(1000).optional(),
  features: z.string().max(3000).optional(),
  existingUrl: z.string().url().optional().or(z.literal('')),
  budgetRange: z.string().optional(),
  launchDate: z.string().optional(),
  urgency: z.string().optional(),
  extra: z.string().max(3000).optional(),
  consent: z.literal(true),
});

export const appointmentSchema = z.object({
  fullName: z.string().min(2).max(100),
  businessName: z.string().max(100).optional(),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  contactMethod: z.string().optional(),
  service: z.string().optional(),
  description: z.string().max(3000).optional(),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(1),
  timeZone: z.string().min(1),
  meetingType: z.enum(['online','in-person']),
  notes: z.string().max(3000).optional(),
  consent: z.literal(true),
});
