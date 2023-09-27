import { InjectionKey } from 'vue';
import { MenuItem, Profile } from '@/types';

export const ProfileKey: InjectionKey<Profile> = Symbol('Profile');
export const MenuItemArrayKey: InjectionKey<MenuItem[]> =
  Symbol('MenuItemArray');
