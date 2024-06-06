import { UserProfileUpdatePayload } from "../user.interface";
import { User } from "../user.model";

export const updateUserProfile = async (
  userEmail: string,
  payload: UserProfileUpdatePayload
) => {
  const { userName, userImage } = payload;
  const updatedProfile = await User.findOneAndUpdate(
    { userEmail },
    {
      $set: {
        userName,
        userImage,
      },
    },
    {
      new: true,
    }
  );
  return updatedProfile;
};
