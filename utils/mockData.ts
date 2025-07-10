import { User } from '../types/types';

// Mock current user
export const currentUser: User = {
  address: '0x36615Cf349d7F6344891B1e7CA7C72883F5dc049',
};

// Mock friends
export const friends: User[] = [
  {
    address: '0x9Ac86Dae34436a543b93846Eefd5a48Df6bC8940',
    name: 'Sarah Miller',
    isFriend: true,
  },
  {
    address: '0xfEa7E0E09A7375c3aa8793d3be53ED8659EceC1c',
    name: 'David Chen',
    isFriend: true,
  },
  {
    address: '0x550d71f413A9AED76DfF731e1FD4Fe84DBEC21cB',
    name: 'Emma Wilson',
    isFriend: true,
  },
  {
    address: '0x856FCd3F33dcEFE2dfF2889A4f4E57E02f8C00AD',
    name: 'James Taylor',
    isFriend: true,
  },
  {
    address: '0x71e6dDfE9074786Fd8e986C53f78D25450d614D5',
    name: 'Olivia Martinez',
    isFriend: true,
  }
];
