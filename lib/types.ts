// tiktok video downloader
export interface TiktokObj {
  video_without_watermark: string;
  video_with_watermark: string;
  video_hd: string;
  video_music: string;
  video_cover: string;
  id: string;
  region: string;
  title: string;
  cover: string;
  duration: number;
  play: string;
  wmplay: string;
  hdplay: string;
  size: number;
  wm_size: number;
  hd_size: number;
  music: string;
  music_info: Musicinfo;
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
  download_count: number;
  collect_count: number;
  create_time: number;
  anchors?: any;
  anchors_extras: string;
  is_ad: boolean;
  commerce_info: Commerceinfo;
  commercial_video_info: string;
  item_comment_settings: number;
  author: Author;
}

interface Author {
  id: string;
  unique_id: string;
  nickname: string;
  avatar: string;
}

interface Commerceinfo {
  adv_promotable: boolean;
  auction_ad_invited: boolean;
  branded_content_type: number;
  with_comment_filter_words: boolean;
}

interface Musicinfo {
  id: string;
  title: string;
  play: string;
  author: string;
  original: boolean;
  duration: number;
  album: string;
}

export interface TiktokClientResponse {
  status: number;
  success: boolean;
  message: string;
  data: null | TiktokClientObj;
}

interface TiktokClientObj {
  videoWithoutWatermark: string;
  videoWithWatermark: string;
  videoHd: string;
  videoMusic: string;
  videoCover: string;
  authorAvatar: string;
  authorUsername: string;
  authorDisplayName: string;
  duration: number;
  fileSize: number;
  title: string;
}
