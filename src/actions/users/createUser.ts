'use server';

import z from 'zod';
import { createServerAction } from 'zsa';
import { setTimeout } from 'node:timers/promises';

export const incrementNumberAction = createServerAction()
  .input(
    z
      .object({
        number: z.number(),
      })
      .strict(),
  )
  .handler(async ({ input }) => {
    await setTimeout(500);

    return input.number + 1;
  });
