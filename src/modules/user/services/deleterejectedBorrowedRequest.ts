import { User } from "../user.model";

export const deleteRejectedBorrowedRequest = async (
  borrowerUserId: string,
  borrowedrequestId: string
) => {
  const deletedRequest = await User.findOneAndUpdate(
    { _id: borrowerUserId },
    { $pull: { borrowedBooks: { _id: borrowedrequestId } } },
    { new: true }
  ).select("borrowedBooks");

  if (!deletedRequest) {
    throw new Error("Borrowed request not found");
  }

  return deletedRequest;
};
