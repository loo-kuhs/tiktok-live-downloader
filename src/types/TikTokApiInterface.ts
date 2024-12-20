export interface TikTokApiResponse {
  LiveRoomInfo: LiveRoomInfo;
  extra:        Extra;
  log_pb:       LogPb;
  statusCode:   number;
  status_code:  number;
  status_msg:   string;
}

export interface LiveRoomInfo {
  coverUrl:      string;
  liveRoomStats: LiveRoomStats;
  liveUrl:       string;
  ownerInfo:     OwnerInfo;
  roomID:        string;
  status:        number;
  title:         string;
}

export interface LiveRoomStats {
  userCount: number;
}

export interface OwnerInfo {
  avatarLarger:    string;
  avatarMedium:    string;
  avatarThumb:     string;
  commentSetting:  number;
  downloadSetting: number;
  duetSetting:     number;
  ftc:             boolean;
  id:              string;
  isADVirtual:     boolean;
  nickname:        string;
  openFavorite:    boolean;
  privateAccount:  boolean;
  relation:        number;
  secUid:          string;
  secret:          boolean;
  signature:       string;
  stitchSetting:   number;
  ttSeller:        boolean;
  uniqueId:        string;
  verified:        boolean;
}

export interface Extra {
  fatal_item_ids: any[];
  logid:          string;
  now:            number;
}

export interface LogPb {
  impr_id: string;
}
