import * as z from "zod";

export interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof T]?: string[];
  };
  inputs?: T;
}
export const formSchema = z.object({
  name: z.string({ message: "Detta fält är obligatoriskt" }),
  email: z.string({ message: "Detta fält är obligatoriskt" }),
  company: z.string({ message: "Detta fält är obligatoriskt" }).optional(),
  employees: z.string().min(1, "Vänligen välj ett alternativ").optional(),
  message: z.string({ message: "Detta fält är obligatoriskt" }),
  agree: z.literal(true, { message: "Du måste godkänna villkoren" }),
});
