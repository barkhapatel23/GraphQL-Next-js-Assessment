import { profile } from "./schema";

export const updateProfile = (name, bio) => {
  profile.name = name;
  profile.bio = bio;

  return profile;
};