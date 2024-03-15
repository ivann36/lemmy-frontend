export type Post = {
  id: number;
  name: string;
  url?: string;
  body?: string;
  creator_id: number;
  community_id: number;
  removed: boolean;
  locked: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  embed_title?: string;
  embed_description?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
  embed_video_url?: string;
  language_id: number;
  featured_community: boolean;
  featured_local: boolean;
};

export type Creator = {
  id: number;
  name: string;
  display_name: string;
  avatar: string;
  banned: boolean;
  published: string;
  updated: string;
  actor_id: string;
  bio: string;
  local: boolean;
  banner: string;
  deleted: boolean;
  matrix_user_id: string;
  bot_account: boolean;
  ban_expires: string;
  instance_id: number;
};

export type Community = {
  id: number;
  name: string;
  title: string;
  description: string;
  removed: boolean;
  published: string;
  updated: string;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  icon: string;
  banner: string;
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: number;
};

export type Counts = {
  post_id: number;
  comments: number;
  score: number;
  upvotes: number;
  downvotes: number;
  published: string;
  newest_comment_time: string;
};

export type Posts = {
  posts: PostView[];
  next_page: string;
};

export type PostView = {
  post: Post;
  creator: Creator;
  community: Community;
  creator_banned_from_community: boolean;
  creator_is_moderator: boolean;
  creator_is_admin: boolean;
  counts: Counts;
  subscribed: string;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  my_vote: number;
  unread_comments: number;
};
