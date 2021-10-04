import { User } from "../../models/user";
import uploadImage from "../../upload/image";
import handleError from './../../handleError';

const addImage = handleError(async(req,res) => {
  if(!req.files) return res.status(400).send("Please Upload an Image");
  const image = req.files.file;
  const { url, id } = await uploadImage(image);
  //@ts-ignore
  await User.updateOne({ _id: req.user._id },{ picture: { url: url?.webContentLink, id } });
  res.status(200).send({ picture: { url, id } });
});

export default addImage;