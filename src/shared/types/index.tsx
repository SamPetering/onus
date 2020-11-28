import * as z from 'zod';

const ToDoItemSchema = z.object({
  id: z.number(),
  value: z.string(),
  complete: z.boolean(),
});

export type ToDoItem = z.infer<typeof ToDoItemSchema>;
