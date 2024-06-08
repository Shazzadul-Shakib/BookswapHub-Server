import { TBookmark } from "../user.interface";
import { User } from "../user.model";

export const updateBookmarkStatus = async (
  ownerEmail: string,
  payload: Omit<TBookmark, "_id">
) => {
  const { bookId, bookmarked } = payload;
  if (bookmarked) {
    const addToBookmark = await User.findOneAndUpdate(
      { userEmail: ownerEmail },
      {
        $push: {
          userBookmark: { bookId },
        },
      },
      { new: true }
    );
    return addToBookmark;
  } else {
    const removeFromBookmark = await User.findOneAndUpdate(
      { userEmail: ownerEmail },
      {
        $pull: {
          userBookmark: { bookId },
        },
      },
      { new: true }
    );
    return removeFromBookmark;
  }
};
