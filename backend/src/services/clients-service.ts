import { notFoundError } from './authentication-service';
import clientsRepository from '../repositories/clients-repository';

async function getListOfClients(userId: number) {
  const list = await clientsRepository.getListOfClients(userId);
  // if (list.length === 0) throw notFoundError();

  return list;
}

async function deleteClientById(clientId: number) {
  const result = await clientsRepository.deleteClientById(clientId);
  // if (result === null) throw notFoundError();

  return result;
}

const clientsService = {
  getListOfClients,
  deleteClientById,
};

export default clientsService;
