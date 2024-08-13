import { z } from 'zod';

const positionValidator = z.union([
  z.literal('GOALKEEPER'),
  z.literal('DEFENDER'),
  z.literal('MIDFIELDER'),
  z.literal('FORWARD'),
]);

export const createPositionSchema = z.object({
  position: positionValidator,
});

export const createPlayerSchema = z
  .object({
    name: z.string(),
    position: positionValidator,
    email: z.string(),
  })
  .required()
  .strict();
