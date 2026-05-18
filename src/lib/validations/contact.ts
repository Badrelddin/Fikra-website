import { z } from 'zod';

export const contactSchema = z.object({
  /**
   * Full legal or display name of the person submitting the form.
   */
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must not exceed 100 characters.' }),

  /**
   * Optional company or organisation the contact belongs to.
   */
  companyName: z
    .string()
    .max(100, { message: 'Company name must not exceed 100 characters.' })
    .optional(),

  /**
   * Primary contact email address.
   */
  email: z
    .string()
    .email({ message: 'A valid email address is required.' }),

  /**
   * Optional phone number in any format; max length guards against abuse.
   */
  phone: z
    .string()
    .max(30, { message: 'Phone number must not exceed 30 characters.' })
    .optional(),

  /**
   * Industry sector of the submitting company or project.
   */
  industry: z
    .enum([
      'Healthcare',
      'Finance',
      'Government',
      'Real Estate',
      'E-commerce',
      'Other',
    ])
    .optional(),

  /**
   * The broad category of work the contact is interested in.
   */
  projectType: z
    .enum([
      'Custom Software',
      'Mobile App',
      'Web App',
      'System Integration',
      'Not sure',
    ])
    .optional(),

  /**
   * The main body of the enquiry. Must be substantive (10 chars minimum).
   */
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message must not exceed 2000 characters.' }),

  /**
   * Approximate budget bracket selected by the user.
   */
  budgetRange: z
    .string()
    .max(50, { message: 'Budget range must not exceed 50 characters.' })
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
