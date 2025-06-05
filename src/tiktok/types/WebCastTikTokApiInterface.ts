export interface WebCastTikTokApiResponse {
  data:        Data;
  extra:       TiktokCookieExtra;
  status_code: number;
}

export interface Data {
  AnchorABMap:                     AnchorAbMap;
  adjust_display_order:            number;
  admin_ec_show_permission:        AnchorAbMap;
  admin_user_ids:                  any[];
  age_restricted:                  AgeRestricted;
  aigc_self_disclosure_switch:     boolean;
  allow_preview_time:              number;
  anchor_scheduled_time_text:      string;
  anchor_share_text:               string;
  anchor_tab_type:                 number;
  answering_question_content:      string;
  app_id:                          number;
  audio_mute:                      number;
  auto_cover:                      number;
  book_end_time:                   number;
  book_time:                       number;
  business_live:                   number;
  challenge_info:                  string;
  client_version:                  number;
  comment_has_text_emoji_emote:    number;
  comment_name_mode:               number;
  commerce_info:                   CommerceInfo;
  common_label_list:               string;
  content_tag:                     string;
  continuous_room_quota_config:    AnchorAbMap;
  cover:                           Cover;
  cover_type:                      number;
  cpp_version:                     number;
  create_time:                     number;
  deco_list:                       any[];
  deprecated10:                    string;
  deprecated11:                    string;
  deprecated12:                    string;
  deprecated13:                    string;
  deprecated14:                    number;
  deprecated15:                    number;
  deprecated16:                    number;
  deprecated17:                    any[];
  deprecated18:                    number;
  deprecated19:                    string;
  deprecated195:                   boolean;
  deprecated2:                     string;
  deprecated20:                    number;
  deprecated21:                    boolean;
  deprecated22:                    number;
  deprecated23:                    string;
  deprecated24:                    number;
  deprecated26:                    string;
  deprecated28:                    string;
  deprecated3:                     AnchorAbMap;
  deprecated30:                    string;
  deprecated31:                    boolean;
  deprecated32:                    string;
  deprecated35:                    number;
  deprecated36:                    number;
  deprecated39:                    string;
  deprecated4:                     number;
  deprecated41:                    number;
  deprecated43:                    boolean;
  deprecated44:                    number;
  deprecated5:                     boolean;
  deprecated6:                     string;
  deprecated7:                     number;
  deprecated8:                     string;
  deprecated9:                     string;
  disable_preload_stream:          boolean;
  disable_preview_sub_only:        number;
  disable_screen_record:           boolean;
  drawer_tab_position:             string;
  drop_comment_group:              number;
  ec_age_interval:                 number;
  ecommerce_room_tags:             any[];
  effect_frame_upload_demotion:    number;
  effect_info:                     any[];
  enable_optimize_sensitive_word:  boolean;
  enable_server_drop:              number;
  enable_stream_encryption:        boolean;
  existed_commerce_goods:          boolean;
  fansclub_msg_style:              number;
  feed_room_label:                 Cover;
  feed_room_labels:                any[];
  filter_msg_rules:                any[];
  finish_reason:                   number;
  finish_time:                     number;
  finish_url:                      string;
  finish_url_v2:                   string;
  follow_msg_style:                number;
  forum_extra_data:                string;
  game_demo:                       number;
  game_tag:                        GameTag[];
  gift_msg_style:                  number;
  gift_poll_vote_enabled:          boolean;
  group_source:                    number;
  has_commerce_goods:              boolean;
  has_more_history_comment:        boolean;
  has_used_music:                  boolean;
  have_wishlist:                   boolean;
  history_comment_cursor:          string;
  history_comment_list:            any[];
  hot_sentence_info:               string;
  id:                              number;
  id_str:                          string;
  idc_region:                      string;
  indicators:                      any[];
  interaction_question_version:    number;
  introduction:                    string;
  is_gated_room:                   boolean;
  is_replay:                       boolean;
  is_show_user_card_switch:        boolean;
  last_ping_time:                  number;
  layout:                          number;
  like_count:                      number;
  link_mic:                        LinkMic;
  linker_map:                      AnchorAbMap;
  linkmic_layout:                  number;
  lite_user_not_visible:           boolean;
  lite_user_visible:               boolean;
  live_distribution:               any[];
  live_id:                         number;
  live_reason:                     string;
  live_room_mode:                  number;
  live_sub_only:                   number;
  live_sub_only_month:             number;
  live_sub_only_tier:              number;
  live_sub_only_use_music:         number;
  live_type_audio:                 boolean;
  live_type_linkmic:               boolean;
  live_type_normal:                boolean;
  live_type_sandbox:               boolean;
  live_type_screenshot:            boolean;
  live_type_social_live:           boolean;
  live_type_third_party:           boolean;
  living_room_attrs:               LivingRoomAttrs;
  lottery_finish_time:             number;
  max_continue_watch_mill_seconds: number;
  max_preview_time:                number;
  mosaic_status:                   number;
  multi_stream_id:                 number;
  multi_stream_id_str:             string;
  multi_stream_scene:              number;
  multi_stream_source:             number;
  net_mode:                        number;
  os_type:                         number;
  owner:                           Owner;
  owner_device_id:                 number;
  owner_device_id_str:             string;
  owner_user_id:                   number;
  owner_user_id_str:               string;
  paid_event:                      PaidEvent;
  partnership_info:                PartnershipInfo;
  pico_live_type:                  number;
  polling_star_comment:            boolean;
  pre_enter_time:                  number;
  preview_flow_tag:                number;
  quota_config:                    AnchorAbMap;
  rank_comment_groups:             any[];
  ranklist_audience_type:          number;
  regional_restricted:             RegionalRestricted;
  relation_tag:                    string;
  replay:                          boolean;
  reposted:                        boolean;
  room_audit_status:               number;
  room_auth:                       RoomAuth;
  room_create_ab_param:            string;
  room_layout:                     number;
  room_llm_title:                  string;
  room_pcu:                        number;
  room_sticker_list:               any[];
  room_tabs:                       any[];
  room_tag:                        number;
  rtc_app_id:                      string;
  scroll_config:                   string;
  search_id:                       number;
  share_msg_style:                 number;
  share_url:                       string;
  short_title:                     string;
  short_touch_items:               any[];
  show_star_comment_entrance:      boolean;
  social_interaction:              SocialInteraction;
  start_time:                      number;
  stats:                           Stats;
  status:                          number;
  sticker_list:                    any[];
  stream_id:                       number;
  stream_id_str:                   string;
  stream_status:                   number;
  stream_url:                      StreamURL;
  stream_url_filtered_info:        StreamURLFilteredInfo;
  sub_tag:                         number;
  support_quiz:                    number;
  title:                           string;
  top_fans:                        TopFan[];
  use_filter:                      boolean;
  user_count:                      number;
  user_share_text:                 string;
  video_feed_tag:                  string;
  watch_early_quota_config:        AnchorAbMap;
  webcast_comment_tcs:             number;
  webcast_sdk_version:             number;
  with_draw_something:             boolean;
  with_ktv:                        boolean;
  with_linkmic:                    boolean;
}

export interface AnchorAbMap {
}

export interface AgeRestricted {
  AgeInterval: number;
  restricted:  boolean;
  source:      number;
}

export interface CommerceInfo {
  commerce_permission:           number;
  oec_live_enter_room_init_data: string;
  product_num:                   number;
  use_async_load:                boolean;
  use_new_promotion:             number;
}

export interface Cover {
  avg_color:    AvgColor;
  height:       number;
  image_type:   number;
  is_animated:  boolean;
  open_web_url: string;
  uri:          string;
  url_list:     string[];
  width:        number;
}

export enum AvgColor {
  Ebebff = "#EBEBFF",
  Empty = "",
}

export interface GameTag {
  bundle_id:     string;
  full_name:     string;
  game_category: any[];
  hashtag_id:    any[];
  hashtag_list:  any[];
  id:            number;
  is_new_game:   boolean;
  landscape:     number;
  package_name:  string;
  short_name:    string;
  show_name:     string;
}

export interface LinkMic {
  audience_id_list: any[];
  battle_scores:    any[];
  battle_settings:  BattleSettings;
  channel_id:       number;
  followed_count:   number;
  linked_user_list: any[];
  multi_live_enum:  number;
  rival_anchor_id:  number;
  show_user_list:   any[];
}

export interface BattleSettings {
  battle_id:     number;
  channel_id:    number;
  duration:      number;
  finished:      number;
  match_type:    number;
  start_time:    number;
  start_time_ms: number;
  theme:         string;
}

export interface LivingRoomAttrs {
  admin_flag:   number;
  rank:         number;
  room_id:      number;
  room_id_str:  string;
  silence_flag: number;
}

export interface Owner {
  allow_find_by_contacts:                   boolean;
  allow_others_download_video:              boolean;
  allow_others_download_when_sharing_video: boolean;
  allow_share_show_profile:                 boolean;
  allow_show_in_gossip:                     boolean;
  allow_show_my_action:                     boolean;
  allow_strange_comment:                    boolean;
  allow_unfollower_comment:                 boolean;
  allow_use_linkmic:                        boolean;
  avatar_large:                             Cover;
  avatar_medium:                            Cover;
  avatar_thumb:                             Cover;
  badge_image_list:                         any[];
  badge_list:                               BadgeList[];
  bg_img_url:                               string;
  bio_description:                          string;
  block_status:                             number;
  border_list:                              any[];
  comment_restrict:                         number;
  commerce_webcast_config_ids:              any[];
  constellation:                            string;
  create_time:                              number;
  deprecated1:                              number;
  deprecated12:                             number;
  deprecated13:                             number;
  deprecated15:                             number;
  deprecated16:                             boolean;
  deprecated17:                             boolean;
  deprecated18:                             string;
  deprecated19:                             boolean;
  deprecated2:                              number;
  deprecated21:                             number;
  deprecated28:                             boolean;
  deprecated29:                             string;
  deprecated3:                              number;
  deprecated4:                              number;
  deprecated5:                              string;
  deprecated6:                              number;
  deprecated7:                              string;
  deprecated8:                              number;
  disable_ichat:                            number;
  display_id:                               string;
  enable_ichat_img:                         number;
  exp:                                      number;
  fan_ticket_count:                         number;
  fans_club_info?:                          FansClubInfo;
  fold_stranger_chat:                       boolean;
  follow_info:                              FollowInfo;
  follow_status:                            number;
  ichat_restrict_type:                      number;
  id:                                       number;
  id_str:                                   string;
  is_anchor_marked:                         boolean;
  is_block:                                 boolean;
  is_follower:                              boolean;
  is_following:                             boolean;
  is_subscribe:                             boolean;
  link_mic_stats:                           number;
  media_badge_image_list:                   any[];
  mint_type_label:                          number[];
  modify_time:                              number;
  need_profile_guide:                       boolean;
  new_real_time_icons:                      any[];
  nickname:                                 string;
  own_room?:                                OwnRoom;
  pay_grade:                                PayGrade;
  pay_score:                                number;
  pay_scores:                               number;
  push_comment_status:                      boolean;
  push_digg:                                boolean;
  push_follow:                              boolean;
  push_friend_action:                       boolean;
  push_ichat:                               boolean;
  push_status:                              boolean;
  push_video_post:                          boolean;
  push_video_recommend:                     boolean;
  real_time_icons:                          any[];
  scm_label:                                string;
  sec_uid:                                  string;
  secret:                                   number;
  share_qrcode_uri:                         string;
  special_id:                               string;
  status:                                   number;
  subscribe_info?:                          SubscribeInfo;
  ticket_count:                             number;
  top_fans:                                 any[];
  top_vip_no:                               number;
  upcoming_event_list:                      any[];
  user_attr:                                UserAttr;
  user_role:                                number;
  verified:                                 boolean;
  verified_content:                         string;
  verified_reason:                          string;
  with_car_management_permission:           boolean;
  with_commerce_permission:                 boolean;
  with_fusion_shop_entry:                   boolean;
}

export interface BadgeList {
  OpenWebURL:          string;
  combine:             Combine;
  display:             boolean;
  display_status:      number;
  display_type:        number;
  exhibition_type:     number;
  greyed_by_client:    number;
  is_customized:       boolean;
  position:            number;
  priority_type:       number;
  privilege_log_extra: PrivilegeLogExtra;
  scene_type:          number;
}

export interface Combine {
  background:                          Background;
  background_auto_mirrored:            boolean;
  background_dark_mode:                Background;
  display_type:                        number;
  font_style:                          FontStyle;
  icon:                                Cover;
  icon_auto_mirrored:                  boolean;
  multi_guest_show_style:              number;
  padding:                             Padding;
  padding_new_font:                    Padding;
  personal_card_show_style:            number;
  profile_card_panel:                  ProfileCardPanel;
  public_screen_show_style:            number;
  ranklist_online_audience_show_style: number;
  str:                                 string;
}

export interface Background {
  background_color_code: string;
  border_color_code:     string;
  image:                 Cover;
}

export interface FontStyle {
  border_color: string;
  font_color:   string;
  font_size:    number;
  font_width:   number;
}

export interface Padding {
  badge_width:             number;
  horizontal_padding_rule: number;
  icon_bottom_padding:     number;
  icon_top_padding:        number;
  left_padding:            number;
  middle_padding:          number;
  right_padding:           number;
  use_specific:            boolean;
  vertical_padding_rule:   number;
}

export interface ProfileCardPanel {
  badge_text_position:        number;
  profile_content:            ProfileContent;
  projection_config:          ProjectionConfig;
  use_new_profile_card_style: boolean;
}

export interface ProfileContent {
  icon_list:   any[];
  use_content: boolean;
}

export interface ProjectionConfig {
  icon:           Cover;
  use_projection: boolean;
}

export interface PrivilegeLogExtra {
  data_version:       string;
  level:              string;
  privilege_id:       string;
  privilege_order_id: string;
  privilege_version:  string;
}

export interface FansClubInfo {
  badge:          Cover;
  fans_club_name: string;
  fans_count:     number;
  fans_level:     number;
  fans_score:     number;
  is_sleeping:    boolean;
}

export interface FollowInfo {
  follow_status:   number;
  follower_count:  number;
  following_count: number;
  push_status:     number;
}

export interface OwnRoom {
  room_ids:     number[];
  room_ids_str: string[];
}

export interface PayGrade {
  deprecated20:         number;
  deprecated22:         number;
  deprecated23:         number;
  deprecated24:         number;
  deprecated25:         number;
  deprecated26:         number;
  grade_banner:         string;
  grade_describe:       string;
  grade_icon_list:      any[];
  level:                number;
  name:                 string;
  next_name:            string;
  next_privileges:      string;
  score:                number;
  screen_chat_type:     number;
  upgrade_need_consume: number;
}

export interface SubscribeInfo {
  anchor_gift_sub_auth:    boolean;
  badge:                   Badge;
  enable_subscription:     boolean;
  is_in_grace_period:      boolean;
  is_sol_eligible:         boolean;
  is_subscribe:            boolean;
  is_subscribed_to_anchor: boolean;
  package_id:              string;
  qualification:           boolean;
  sol_room_display_text:   string;
  status:                  number;
  sub_end_time:            number;
  subscriber_count:        number;
  timer_detail:            TimerDetail;
  user_gift_sub_auth:      boolean;
}

export interface Badge {
  is_customized: boolean;
}

export interface TimerDetail {
  anchor_id:               number;
  anchor_side_title:       string;
  antidirt_status:         number;
  audit_status:            number;
  last_pause_timestamp_s:  number;
  remaining_time_s:        number;
  screen_h:                number;
  screen_w:                number;
  start_countdown_time_s:  number;
  start_timestamp_s:       number;
  sticker_x:               number;
  sticker_y:               number;
  sub_count:               number;
  time_increase_cap_s:     number;
  time_increase_per_sub_s: number;
  time_increase_reach_cap: boolean;
  timer_id:                number;
  timer_status:            number;
  timestamp_s:             number;
  total_pause_time_s:      number;
  total_time_s:            number;
  user_side_title:         string;
}

export interface UserAttr {
  admin_permissions:   AnchorAbMap;
  has_voting_function: boolean;
  is_admin:            boolean;
  is_channel_admin:    boolean;
  is_muted:            boolean;
  is_super_admin:      boolean;
  mute_duration:       number;
}

export interface PaidEvent {
  event_id:  number;
  paid_type: number;
}

export interface PartnershipInfo {
  partnership_room:    boolean;
  promoting_drops_id:  string;
  promoting_game_id:   string;
  promoting_room:      boolean;
  promoting_task_id:   string;
  promoting_task_type: number;
  show_task_id:        string;
  show_task_type:      number;
  task_id_list:        any[];
}

export interface RegionalRestricted {
  block_list: any[];
}

export interface RoomAuth {
  Banner:                       number;
  BroadcastMessage:             number;
  Chat:                         boolean;
  ChatL2:                       boolean;
  ChatSubOnly:                  boolean;
  CommercePermission:           number;
  CommunityFlagged:             boolean;
  CommunityFlaggedReview:       boolean;
  CustomizableGiftPoll:         number;
  CustomizablePoll:             number;
  Danmaku:                      boolean;
  Digg:                         boolean;
  DonationSticker:              number;
  EmotePoll:                    number;
  EnableFansLevel:              boolean;
  EnableShowUserUV:             boolean;
  EventPromotion:               number;
  Explore:                      boolean;
  GameRankingSwitch:            number;
  Gift:                         boolean;
  GiftAnchorMt:                 number;
  GiftPoll:                     number;
  GoldenEnvelope:               number;
  GoldenEnvelopeActivity:       number;
  InteractionQuestion:          boolean;
  Landscape:                    number;
  LandscapeChat:                number;
  LuckMoney:                    boolean;
  MultiEnableReserve:           boolean;
  Pictionary:                   number;
  PictionaryBubble:             number;
  PictionaryPermission:         number;
  Poll:                         number;
  Promote:                      boolean;
  PromoteOther:                 number;
  Props:                        boolean;
  PublicScreen:                 number;
  QuickChat:                    number;
  Rank:                         number;
  RankingChangeAlterSwitch:     number;
  RoomContributor:              boolean;
  SecretRoom:                   number;
  Share:                        boolean;
  ShareEffect:                  number;
  ShoppingRanking:              number;
  SpamComments:                 boolean;
  UserCard:                     boolean;
  UserCount:                    number;
  Viewers:                      boolean;
  comment_tray_status:          number;
  credit_entrance_for_audience: boolean;
  deprecated1:                  boolean;
  deprecated118:                any[];
  deprecated119:                number;
  deprecated2:                  number;
  deprecated3:                  number;
  deprecated4:                  number;
  deprecated5:                  number;
  deprecated6:                  number;
  deprecated7:                  number;
  deprecated8:                  number;
  deprecated9:                  number;
  game_guess_permission:        boolean;
  guess_entrance_for_host:      boolean;
  show_credit_widget:           boolean;
  transaction_history:          number;
  use_user_pv:                  boolean;
}

export interface SocialInteraction {
  linkmic_scene_linker: AnchorAbMap;
  multi_live:           MultiLive;
}

export interface MultiLive {
  audience_send_gifts_to_all_enum:       number;
  audience_shared_invitee_panel_type:    number;
  host_gifter_linkmic_enum:              number;
  host_multi_guest_dev_mode:             number;
  host_send_gifts_to_all_enum:           number;
  linkmic_service_version:               number;
  try_open_multi_guest_when_create_room: boolean;
  user_settings:                         UserSettings;
  viewer_gifter_linkmic_enum:            number;
}

export interface UserSettings {
  applier_sort_gift_score_threshold:        number;
  applier_sort_setting:                     number;
  multi_guest_allow_request_from_followers: number;
  multi_guest_allow_request_from_friends:   number;
  multi_guest_allow_request_from_others:    number;
  multi_live_apply_permission:              number;
}

export interface Stats {
  deprecated1:       number;
  deprecated2:       string;
  digg_count:        number;
  enter_count:       number;
  fan_ticket:        number;
  follow_count:      number;
  gift_uv_count:     number;
  id:                number;
  id_str:            string;
  like_count:        number;
  replay_fan_ticket: number;
  replay_viewers:    number;
  share_count:       number;
  total_user:        number;
  total_user_desp:   string;
  watermelon:        number;
}

export interface StreamURL {
  alive_timestamp:      number;
  candidate_resolution: string[];
  complete_push_urls:   any[];
  default_resolution:   string;
  drm_type:             number;
  extra:                StreamURLExtra;
  flv_pull_url:         FlvPullURL;
  flv_pull_url_params:  FlvPullURL;
  hls_pull_url:         string;
  hls_pull_url_map:     AnchorAbMap;
  hls_pull_url_params:  string;
  id:                   number;
  id_str:               string;
  live_core_sdk_data:   LiveCoreSDKData;
  provider:             number;
  push_resolution:      string;
  push_urls:            any[];
  resolution_name:      ResolutionName;
  rtmp_pull_url:        string;
  rtmp_pull_url_params: string;
  rtmp_push_url:        string;
  rtmp_push_url_params: string;
  stream_app_id:        number;
  stream_control_type:  number;
  stream_delay_ms:      number;
  stream_size_height:   number;
  stream_size_width:    number;
  vr_type:              number;
}

export interface StreamURLExtra {
  anchor_interact_profile:   number;
  audience_interact_profile: number;
  bframe_enable:             boolean;
  bitrate_adapt_strategy:    number;
  bytevc1_enable:            boolean;
  default_bitrate:           number;
  deprecated1:               boolean;
  fps:                       number;
  gop_sec:                   number;
  hardware_encode:           boolean;
  height:                    number;
  max_bitrate:               number;
  min_bitrate:               number;
  roi:                       boolean;
  sw_roi:                    boolean;
  video_profile:             number;
  width:                     number;
}

export interface FlvPullURL {
  FULL_HD1: string;
  HD1:      string;
  SD1:      string;
  SD2:      string;
}

export interface LiveCoreSDKData {
  pull_data: PullData;
}

export interface PullData {
  options:     Options;
  stream_data: string;
}

export interface Options {
  default_quality:     Quality;
  qualities:           Quality[];
  show_quality_button: boolean;
}

export interface Quality {
  icon_type:  number;
  level:      number;
  name:       string;
  resolution: string;
  sdk_key:    string;
  v_codec:    string;
}

export interface ResolutionName {
  AUTO:                string;
  FULL_HD1:            string;
  HD1:                 string;
  ORIGION:             string;
  SD1:                 string;
  SD2:                 string;
  pm_mt_video_1080p60: string;
  pm_mt_video_720p60:  string;
}

export interface StreamURLFilteredInfo {
  is_gated_room: boolean;
  is_paid_event: boolean;
}

export interface TopFan {
  fan_ticket: number;
  user:       Owner;
}

export interface TiktokCookieExtra {
  now: number;
}
