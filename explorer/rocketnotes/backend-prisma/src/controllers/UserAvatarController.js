//db é prisma
const { db } = require("../config/db");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
	async update(request, response) {
		const user_id = request.user.id;
		const avatarFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    //buscar usuaruio
    const user = await db.user.findUnique({
      where: {
        id: user_id
      }
    })

    if (!user) {
      throw new AppError("Somente usuários autenticados podem alterar o avatar", 401);
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    user.avatar = filename;

    await db.user.update({
      where: {
        id: user_id
      },
      data: {
        avatar: filename
      }
    })

		return response.json(user);
	}
}

module.exports = new UserAvatarController();
