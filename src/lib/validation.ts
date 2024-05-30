import { z } from "zod";

export const FormSchema = z.object({
  imageURL: z.string(),
  name: z.string().min(1, { message: "Name is required.", }),
  website: z.string().min(1, { message: "Website link is required.", }),
  linkedin: z.string().min(1, { message: "Linkedin link is required.", }),
  industry: z.string().min(1, { message: "Industry is required.", }),
  count: z.string(),
  description: z.string().min(50, { message: "Description is too short.", }),
  goals: z.string().min(1, { message: "Goal is required.", }),
  headquarters: z.string().min(1, { message: "Headquarter is required.", }),
  round: z.string(),
  faqs: z.string().min(1, { message: "FAQs link is required.", }),
});