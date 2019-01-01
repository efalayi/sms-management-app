const listAllMessages = async (db) => {
  const allMessages = await db.shortMessage.findAll({
    attributes: ['id', 'senderId', 'receiverIds', 'message', 'status'],
    include: [
      {
        model: db.receiveHistory,
        as: 'receivers',
        attributes: ['id', 'shortMessageId', 'receiverId'],
      },
    ],
  })
  return allMessages
}

export default listAllMessages
