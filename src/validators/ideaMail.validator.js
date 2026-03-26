const { z } = require('zod');

exports.createIdeaMailSchema = z.object({
  name: z.string().min(1).max(25),
  email: z
        .string()
        .email('Invalid email format')
        .max(100),
  subject: z.string().min(1).max(50),
  message: z.string().min(1).max(1000),
  phone: z.string().min(10).max(10)
});