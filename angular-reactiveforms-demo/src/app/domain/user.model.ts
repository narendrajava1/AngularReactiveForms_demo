import { Profile } from './profile.model';
import { Technology } from './technology.model';

export class User {
    userName: string;
	age: number;
	teamMates: string[];
    gender: string;
    isMarried: boolean;
    tc: boolean;	
	profile: Profile = null;
	technologies: Technology[];
}
