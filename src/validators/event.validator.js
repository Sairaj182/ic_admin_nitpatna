const { z } = require('zod');

exports.createEventSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().min(1).max(500),
  date: z.string().date(),
  time: z.string()
});
