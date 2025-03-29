import { z } from "zod";

export const ticketSchema = z.object({
  ticketType: z.enum(["Regular Access", "VIP Access", "VVIP Access"], {
    required_error: "You need to select a ticket type."
  }),
  ticketNumber: z
    .string()
    .min(1, "Please select a valid ticket number")
    .max(3, "You cannot select more than 3 tickets"),
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  image: z.string().url("Invalid image URL").optional(),
  request: z.string().min(3, "Tell us a bit more ").optional()
});

export type TicketSchema = z.infer<typeof ticketSchema>;
