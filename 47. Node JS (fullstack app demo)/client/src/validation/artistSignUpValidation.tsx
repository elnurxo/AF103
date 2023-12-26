import { z } from "zod";
import GenreType from "../enums/genre";
const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const ArtistsSignUpSchema = z
  .object({
    stageName: z.string().min(2),
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().regex(regex),
    confirmPassword: z.string(),
    profileImage: z.string().url().optional(),
    backgroundImage: z.string().url().optional(),
    birthDate: z.string(),
    genre: z.enum([
      GenreType.R_and_B,
      GenreType.Hip_Hop,
      GenreType.Pop,
      GenreType.Rock,
      GenreType.Metal,
      GenreType.Indie,
      GenreType.Techno,
      GenreType.Country,
    ]),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword != password) {
      ctx.addIssue({
        code: "custom",
        message: "password does not match!",
      });
    }
  });

export default ArtistsSignUpSchema;
