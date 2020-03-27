
export interface APIResponse {
  status: number;
  message?: string;
  data?: any;
}

export interface Login {
  username: string;
  email: string;
}

export class UserModel {
  id?: number;
  password?: string;
  last_login?: Date;
  is_superuser?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_staff?: boolean;
  is_active?: boolean;
  date_joined?: Date;
}

export class MovieModel {
  id?: number;
  id_movie?: number;
  title_movie?: string;
  link_download?: string;
  voice_language?: string;
  quality_video?: string;
  quality_audio?: string;
  subtitle?: string;
  subtitle_language?: string;
  created_at?: Date;
  updated_at?: Date;
  member_id?: number;
}

export class TvModel {
  id?: number;
  id_movie?: number;
  title_tv?: string;
  nb_season?: number;
  nb_episode?: number;
  link_download?: string;
  voice_language?: string;
  quality_video?: string;
  quality_audio?: string;
  subtitle?: string;
  subtitle_language?: string;
  created_at?: Date;
  updated_at?: Date;
  member_id?: number;
}

export class MemberModel {
  id?: number;
  first_name?: string;
  username?: string;
  password?: string;
  email?: string;
  created_at?: Date;
  last_connexion?: Date;
  is_active?: boolean;
  is_delete?: boolean;
  is_modarator?: boolean;
  avatar?: string;
}

export class CommentModel {
  id?: number;
  name_sender: string;
  message: string;
  email_sender?: string;
  id_movie?: number;
  id_tv?: number;
  is_reply?: boolean;
  is_delete?: boolean;
  is_locked?: boolean;
  comment_parent_id?: number;
  member_id?: number;
  created_at?: Date;
  updated_at?: Date;
}
