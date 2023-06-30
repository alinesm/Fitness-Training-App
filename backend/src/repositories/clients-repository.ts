import { prisma } from '../config';

async function getListOfClients(userId: number) {
  return prisma.client.findMany({
    where: {
      userId: userId,
    },
  });
}

async function deleteClientById(clientId: number) {
  return prisma.client.delete({
    where: {
      id: clientId,
    },
  });
}

const clientsRepository = {
  getListOfClients,
  deleteClientById,
};

export default clientsRepository;
