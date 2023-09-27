import { InjectionKey } from 'vue';
import { Profile } from '@/types';

export const ProfileKey: InjectionKey<Profile> = Symbol('Profile');
