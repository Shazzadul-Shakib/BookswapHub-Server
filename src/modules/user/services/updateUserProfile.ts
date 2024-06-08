import { UpdateDataType, UserProfileUpdatePayload } from "../user.interface";
import { User } from "../user.model";

export const updateUserProfile = async (
  userEmail: string,
  payload: UserProfileUpdatePayload
) => {
  const { userName, userImage } = payload;

  // Construct the update object dynamically
  const updateData: UpdateDataType = { userName };

  if (userImage && Object.keys(userImage).length !== 0) {
    updateData.userImage = userImage;
  }

  const updatedProfile = await User.findOneAndUpdate(
    { userEmail },
    {
      $set: updateData,
    },
    {
      new: true,
    }
  );

  return updatedProfile;
};
