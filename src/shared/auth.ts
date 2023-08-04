import { USER } from '@/domain/user/constant';

export function getUserToken() {
  return localStorage.getItem(USER) || '';
}
