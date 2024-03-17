import * as z from 'zod';

export const SignUpValidation = z.object({
  name: z.string().min(2, {message: 'Name must be at least 2 characters long'}),
  email: z.string().email(),
  password: z.string().min(8, {message: 'Password must be at least 8 characters'}).max(50),
});

export const SignInValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(50),
});

export const UserDetailsValidation = z.object({
  profilePic: z.string(),
  name: z.string().min(3),
  username: z.string().min(3),
  bio: z.string().min(3),
  github: z.string().min(3),
  linkedin: z.string(),
});

export const UserSkillsValidation = z.object({
  frameworks: z.array(z.string().min(1)),
  languages: z.array(z.string().min(1))
});
