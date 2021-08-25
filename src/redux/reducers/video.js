import {
	HOME_VIDEO_REQUEST,
	HOME_VIDEO_SUCCESS,
	HOME_VIDEO_FAILED,
	SELECT_VIDEO_REQUEST,
	SELECT_VIDEO_SUCCESS,
	SELECT_VIDEO_FAILED,
	RELATED_VIDEO_REQUEST,
	RELATED_VIDEO_SUCCESS,
	RELATED_VIDEO_FAILED,
	SEARCH_VIDEO_REQUEST,
	SEARCH_VIDEO_SUCCESS,
	SEARCH_VIDEO_FAILED,
	SUBSCRIPTION_CHANNEL_REQUEST,
	SUBSCRIPTION_CHANNEL_SUCCESS,
	SUBSCRIPTION_CHANNEL_FAILED,
	VIDEO_CHANNEL_REQUEST,
	VIDEO_CHANNEL_SUCCESS,
	VIDEO_CHANNEL_FAILED,
	LIKED_VIDEOS_REQUEST,
	LIKED_VIDEOS_SUCCESS,
	LIKED_VIDEOS_FAILED,
} from '../actionType';

const initialState = {
	videos: [],
	// videos: [
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 's29OBp5aUMNTia7TqzMu99SBl-Q',
	// 		id: 'MW7R_l0m-Ro',
	// 		snippet: {
	// 			publishedAt: '2021-08-19T14:30:13Z',
	// 			channelId: 'UCHNYJheRUSucT2rERYMn45A',
	// 			title: 'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động',
	// 			description:
	// 				'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động\nNhững video mới nhất, độc nhất của SIÊU TÀI NĂNG NHÍ sẽ được đăng tải trên Madison Media Group. \n*XEM THÊM CLIP SIÊU TÀI NĂNG NHÍ MÙA 2:\n👉 Tập 14 FULL - Siêu Tài Năng Nhí: https://youtu.be/XTcPlvMYFFg\n👉 Tập 13 FULL - Siêu Tài Năng Nhí: https://youtu.be/_0MmHw3okT0\n👉 Tập 12 FULL - Siêu Tài Năng Nhí: https://youtu.be/O6xV3FU4-Tg\n👉 Tập 11 FULL - Siêu Tài Năng Nhí: https://youtu.be/TvxlqsBykrY\n👉 Tập 10 FULL - Siêu Tài Năng Nhí: https://youtu.be/EEQ_CiP9goM\n👉 Tập 9 FULL - Siêu Tài Năng Nhí: https://youtu.be/O66uejoCllM\n👉 Tập 8 FULL - Siêu Tài Năng Nhí: https://youtu.be/XdMkQbqjjvw\n👉 Tập 7 FULL - Siêu Tài Năng Nhí: https://youtu.be/1vBEMSWbCAw\n👉 Tập 6 FULL - Siêu Tài Năng Nhí: https://youtu.be/5_S1u1Z3zWs\n👉 Tập 5 FULL - Siêu Tài Năng Nhí: https://youtu.be/dpJKx_FnIwk\n👉 Tập 4 FULL - Siêu Tài Năng Nhí: https://youtu.be/UaNLPXmmyBI\n👉 Tập 3 FULL - Siêu Tài Năng Nhí: https://youtu.be/193D08jJKPs\n👉 Tập 2 FULL - Siêu Tài Năng Nhí: https://youtu.be/0f7RkQgBkh0\n👉 Tập 1 FULL - Siêu Tài Năng Nhí: https://youtu.be/ddi2ljNGmRE\n👉 Tiết mục Siêu Nhí Đu Dây: https://youtu.be/RCIpUssOf2E\n👉 Tiết mục Siêu Nhí Rap: https://youtu.be/zkuvEOQziv4\n👉 Tiết mục Siêu Nhí Cầu Mây: https://youtu.be/XM9vkZxx9nU\n👉 Tiết mục Siêu Nhí Nhảy Hip Hop: https://youtu.be/AYz4KBAUMmY\n👉 Tiết mục Siêu Nhí Uốn Dẻo: https://youtu.be/tYqKasMJxfw\n👉 Tiết mục Siêu Nhí Nữ Đá Bóng: https://youtu.be/QCU2P0CKtUs\n👉 Tiết mục Siêu Nhí Làm Bánh Ít:  https://youtu.be/wm5NtmfdabM\n👉 Tiết mục Siêu Nhí Sasuke: https://youtu.be/XNN6OCD59WE\n👉 Tiết mục Siêu Nhí Khiếm Thị Hát: https://youtu.be/uZUhbU3vHCI\n👉 Tiết mục Siêu Nhí Wushu: https://youtu.be/ey9k_Wbrj2Y\n👉 Tiết mục Siêu Nhí Lồng Tiếng: https://youtu.be/IvgbaaWIuyE\n👉 Tiết mục Siêu Nhí Đá Bóng Duet: https://youtu.be/7BQR9lxdy1w\n👉 Tiết mục Siêu Nhí Bắn Ná: https://youtu.be/_pl7OouLUgE\n👉 Tiết mục Siêu Nhí Rubik: https://youtu.be/0raJvkeINQg\n👉 Tiết mục Siêu Nhí Nhảy Cover: https://youtu.be/ViwIr8TpatM\n👉 Tiết mục Siêu Nhí Thần Đồng 3 Tuổi: https://youtu.be/O_Jj2KmbVRc\n👉 Tiết mục Siêu Nhí Múa Đương Đại: https://youtu.be/D8EEXwSYja0\n👉 Tiết mục Siêu Nhí Đánh Con Quay: https://youtu.be/RL_MK1PON4k\n👉 Tiết mục Siêu Nhí Tính Nhanh: https://youtu.be/fIvwlnMlOu8\n👉 Tiết mục Siêu Nhí Muay Thái: https://youtu.be/icAYftQ5L4I\n👉 Tiết mục Siêu Nhí Thổi Saxophone: https://youtu.be/nLqmljLHmrw\n👉 Tiết mục Siêu Nhí Trượt Ván: https://youtu.be/SeCBRvT7SVU\n👉 Tiết mục Siêu Nhí Đàn Violin: https://youtu.be/j5eW2gevG1Y\n👉 Tiết mục Siêu Nhí Tạo Kiểu Tóc: https://youtu.be/pYAkhz3uDu8\n\n*XEM LẠI SIÊU TÀI NĂNG NHÍ MÙA 1:\n👉 Siêu Tài Năng Nhí-Tập 15 FULL: https://youtu.be/l-_6S6fkKvw\n👉 Siêu Tài Năng Nhí-Tập 14 FULL: https://youtu.be/dzKxHRVLzyc\n👉 Siêu Tài Năng Nhí-Tập 13 FULL: https://youtu.be/K3ph2WxOAT0\n👉 Siêu Tài Năng Nhí-Tập 12 FULL: https://youtu.be/b9mxIv6OlVo \n👉 Siêu Tài Năng Nhí-Tập 11 FULL: https://youtu.be/9ilrrKyTICA\n👉 Siêu Tài Năng Nhí-Tập 10 FULL: https://youtu.be/3g_8erg7cUs\n👉 Siêu Tài Năng Nhí-Tập 9 FULL: https://youtu.be/NtXj7mPJmpI\n👉 Siêu Tài Năng Nhí-Tập 8 FULL: https://youtu.be/uGOYLy4ZZ2U\n👉 Siêu Tài Năng Nhí-Tập 7 FULL: https://youtu.be/jpAD5KG4wY4\n👉 Siêu Tài Năng Nhí-Tập 6 FULL: https://youtu.be/McRlQjXkcS0\n👉 Siêu Tài Năng Nhí-Tập 5 FULL: https://youtu.be/kIAh_STPZ8o\n👉 Siêu Tài Năng Nhí-Tập 4 FULL: https://youtu.be/lsdf_P5e9lU\n👉 Siêu Tài Năng Nhí-Tập 3 FULL: https://youtu.be/DfDb_3LOpJA\n👉 Siêu Tài Năng Nhí-Tập 2 FULL: https://youtu.be/dfk5qsYc4Ms\n👉 Siêu Tài Năng Nhí-Tập 1 FULL: https://youtu.be/lTrdwlZw1Uw\n\n***Theo dõi các kênh chính thức từ chương trình*** \n👉 Facebook: https://bit.ly/Super10STNN\n👉 Youtube: https://bit.ly/3iL5P0N\n👉 TikTok: https://www.tiktok.com/@madisonent\n👉 Instagram: https://www.instagram.com/madison.ent\n __________________________________\nSuper 10- Siêu Tài Năng Nhí là chương trình tìm kiếm những khả năng tiềm ẩn ở độ tuổi 4-14; chương trình sẽ đặt ra những thử thách giúp các bé vượt qua khả năng của chính mình. Super 10 với sự góp mặt của những ngôi sao Trấn Thành, Hari Won, Gil Lê và những khách mời tên tuổi. Chương trình được phát sóng trên HTV7.\n#TranThanh #HariWon #SieuTaiNangNhi #GilLe  #Super10',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Madison Media Group',
	// 			tags: [
	// 				'madison media',
	// 				'madison media group',
	// 				'siêu tài năng nhí mùa 2',
	// 				'siêu tài năng nhí',
	// 				'trấn thành',
	// 				'trấn thành hari won',
	// 				'super 10',
	// 				'siêu tài nhí tập 1',
	// 				'hari won',
	// 				'game show 2021',
	// 				'siêu tài nhí 2021',
	// 				'tài năng nhí',
	// 				'tài năng nhí 2021',
	// 				'siêu 10 tài năng nhí',
	// 				'siêu nhí',
	// 				'siêu nhí tài năng',
	// 				'vivo tv siêu tài năng nhí',
	// 				'siêu tài năng nhí tập 1',
	// 				'chung kết siêu tài năng nhí',
	// 				'siêu tài năng nhí chung kết',
	// 				'trấn thành khóc',
	// 				'hari won khóc',
	// 				'top 10 siêu tài năng nhí',
	// 				'quyền linh khóc',
	// 				'gil lê khóc',
	// 			],
	// 			categoryId: '24',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động',
	// 				description:
	// 					'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động\nNhững video mới nhất, độc nhất của SIÊU TÀI NĂNG NHÍ sẽ được đăng tải trên Madison Media Group. \n*XEM THÊM CLIP SIÊU TÀI NĂNG NHÍ MÙA 2:\n👉 Tập 14 FULL - Siêu Tài Năng Nhí: https://youtu.be/XTcPlvMYFFg\n👉 Tập 13 FULL - Siêu Tài Năng Nhí: https://youtu.be/_0MmHw3okT0\n👉 Tập 12 FULL - Siêu Tài Năng Nhí: https://youtu.be/O6xV3FU4-Tg\n👉 Tập 11 FULL - Siêu Tài Năng Nhí: https://youtu.be/TvxlqsBykrY\n👉 Tập 10 FULL - Siêu Tài Năng Nhí: https://youtu.be/EEQ_CiP9goM\n👉 Tập 9 FULL - Siêu Tài Năng Nhí: https://youtu.be/O66uejoCllM\n👉 Tập 8 FULL - Siêu Tài Năng Nhí: https://youtu.be/XdMkQbqjjvw\n👉 Tập 7 FULL - Siêu Tài Năng Nhí: https://youtu.be/1vBEMSWbCAw\n👉 Tập 6 FULL - Siêu Tài Năng Nhí: https://youtu.be/5_S1u1Z3zWs\n👉 Tập 5 FULL - Siêu Tài Năng Nhí: https://youtu.be/dpJKx_FnIwk\n👉 Tập 4 FULL - Siêu Tài Năng Nhí: https://youtu.be/UaNLPXmmyBI\n👉 Tập 3 FULL - Siêu Tài Năng Nhí: https://youtu.be/193D08jJKPs\n👉 Tập 2 FULL - Siêu Tài Năng Nhí: https://youtu.be/0f7RkQgBkh0\n👉 Tập 1 FULL - Siêu Tài Năng Nhí: https://youtu.be/ddi2ljNGmRE\n👉 Tiết mục Siêu Nhí Đu Dây: https://youtu.be/RCIpUssOf2E\n👉 Tiết mục Siêu Nhí Rap: https://youtu.be/zkuvEOQziv4\n👉 Tiết mục Siêu Nhí Cầu Mây: https://youtu.be/XM9vkZxx9nU\n👉 Tiết mục Siêu Nhí Nhảy Hip Hop: https://youtu.be/AYz4KBAUMmY\n👉 Tiết mục Siêu Nhí Uốn Dẻo: https://youtu.be/tYqKasMJxfw\n👉 Tiết mục Siêu Nhí Nữ Đá Bóng: https://youtu.be/QCU2P0CKtUs\n👉 Tiết mục Siêu Nhí Làm Bánh Ít:  https://youtu.be/wm5NtmfdabM\n👉 Tiết mục Siêu Nhí Sasuke: https://youtu.be/XNN6OCD59WE\n👉 Tiết mục Siêu Nhí Khiếm Thị Hát: https://youtu.be/uZUhbU3vHCI\n👉 Tiết mục Siêu Nhí Wushu: https://youtu.be/ey9k_Wbrj2Y\n👉 Tiết mục Siêu Nhí Lồng Tiếng: https://youtu.be/IvgbaaWIuyE\n👉 Tiết mục Siêu Nhí Đá Bóng Duet: https://youtu.be/7BQR9lxdy1w\n👉 Tiết mục Siêu Nhí Bắn Ná: https://youtu.be/_pl7OouLUgE\n👉 Tiết mục Siêu Nhí Rubik: https://youtu.be/0raJvkeINQg\n👉 Tiết mục Siêu Nhí Nhảy Cover: https://youtu.be/ViwIr8TpatM\n👉 Tiết mục Siêu Nhí Thần Đồng 3 Tuổi: https://youtu.be/O_Jj2KmbVRc\n👉 Tiết mục Siêu Nhí Múa Đương Đại: https://youtu.be/D8EEXwSYja0\n👉 Tiết mục Siêu Nhí Đánh Con Quay: https://youtu.be/RL_MK1PON4k\n👉 Tiết mục Siêu Nhí Tính Nhanh: https://youtu.be/fIvwlnMlOu8\n👉 Tiết mục Siêu Nhí Muay Thái: https://youtu.be/icAYftQ5L4I\n👉 Tiết mục Siêu Nhí Thổi Saxophone: https://youtu.be/nLqmljLHmrw\n👉 Tiết mục Siêu Nhí Trượt Ván: https://youtu.be/SeCBRvT7SVU\n👉 Tiết mục Siêu Nhí Đàn Violin: https://youtu.be/j5eW2gevG1Y\n👉 Tiết mục Siêu Nhí Tạo Kiểu Tóc: https://youtu.be/pYAkhz3uDu8\n\n*XEM LẠI SIÊU TÀI NĂNG NHÍ MÙA 1:\n👉 Siêu Tài Năng Nhí-Tập 15 FULL: https://youtu.be/l-_6S6fkKvw\n👉 Siêu Tài Năng Nhí-Tập 14 FULL: https://youtu.be/dzKxHRVLzyc\n👉 Siêu Tài Năng Nhí-Tập 13 FULL: https://youtu.be/K3ph2WxOAT0\n👉 Siêu Tài Năng Nhí-Tập 12 FULL: https://youtu.be/b9mxIv6OlVo \n👉 Siêu Tài Năng Nhí-Tập 11 FULL: https://youtu.be/9ilrrKyTICA\n👉 Siêu Tài Năng Nhí-Tập 10 FULL: https://youtu.be/3g_8erg7cUs\n👉 Siêu Tài Năng Nhí-Tập 9 FULL: https://youtu.be/NtXj7mPJmpI\n👉 Siêu Tài Năng Nhí-Tập 8 FULL: https://youtu.be/uGOYLy4ZZ2U\n👉 Siêu Tài Năng Nhí-Tập 7 FULL: https://youtu.be/jpAD5KG4wY4\n👉 Siêu Tài Năng Nhí-Tập 6 FULL: https://youtu.be/McRlQjXkcS0\n👉 Siêu Tài Năng Nhí-Tập 5 FULL: https://youtu.be/kIAh_STPZ8o\n👉 Siêu Tài Năng Nhí-Tập 4 FULL: https://youtu.be/lsdf_P5e9lU\n👉 Siêu Tài Năng Nhí-Tập 3 FULL: https://youtu.be/DfDb_3LOpJA\n👉 Siêu Tài Năng Nhí-Tập 2 FULL: https://youtu.be/dfk5qsYc4Ms\n👉 Siêu Tài Năng Nhí-Tập 1 FULL: https://youtu.be/lTrdwlZw1Uw\n\n***Theo dõi các kênh chính thức từ chương trình*** \n👉 Facebook: https://bit.ly/Super10STNN\n👉 Youtube: https://bit.ly/3iL5P0N\n👉 TikTok: https://www.tiktok.com/@madisonent\n👉 Instagram: https://www.instagram.com/madison.ent\n __________________________________\nSuper 10- Siêu Tài Năng Nhí là chương trình tìm kiếm những khả năng tiềm ẩn ở độ tuổi 4-14; chương trình sẽ đặt ra những thử thách giúp các bé vượt qua khả năng của chính mình. Super 10 với sự góp mặt của những ngôi sao Trấn Thành, Hari Won, Gil Lê và những khách mời tên tuổi. Chương trình được phát sóng trên HTV7.\n#TranThanh #HariWon #SieuTaiNangNhi #GilLe  #Super10',
	// 			},
	// 			defaultAudioLanguage: 'vi',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT1H3M3S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '1019827',
	// 			likeCount: '11378',
	// 			dislikeCount: '576',
	// 			favoriteCount: '0',
	// 			commentCount: '1641',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'IPymQnsRRddQP5C27aHB3aiHm2g',
	// 		id: '4C4p-rkReZ0',
	// 		snippet: {
	// 			publishedAt: '2021-08-17T21:30:54Z',
	// 			channelId: 'UCoqrrrfDpWOgdqw1vRoiG_A',
	// 			title: 'Highlights Dortmund vs Bayern Munich | Reus ghi siêu phẩm thế giới - Lewan lập kỷ lục không tưởng',
	// 			description:
	// 				'#Highlights #Dortmund #BayernMunich\nHighlights Dortmund vs Bayern Munich | Reus ghi siêu phẩm thế giới - Lewan lập kỷ lục không tưởng',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/4C4p-rkReZ0/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/4C4p-rkReZ0/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/4C4p-rkReZ0/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/4C4p-rkReZ0/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/4C4p-rkReZ0/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'MÃN NHÃN TV',
	// 			tags: [
	// 				'Highlights Dortmund vs Bayern Munich',
	// 				'Highlights Siêu Cup Đức',
	// 				'Robert Lewandowski',
	// 				'Marco Reus',
	// 				'highlight Dortmund 1-3 Bayern Munich',
	// 				'Trực tiếp bóng đá hôm nay',
	// 				'Kết quả bóng đá hôm nay',
	// 				'kết quả Dortmund vs Bayern Munich',
	// 				'Borussia Dortmund',
	// 				'sieu cup đức',
	// 			],
	// 			categoryId: '17',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'Highlights Dortmund vs Bayern Munich | Reus ghi siêu phẩm thế giới - Lewan lập kỷ lục không tưởng',
	// 				description:
	// 					'#Highlights #Dortmund #BayernMunich\nHighlights Dortmund vs Bayern Munich | Reus ghi siêu phẩm thế giới - Lewan lập kỷ lục không tưởng',
	// 			},
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT12M58S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			regionRestriction: {
	// 				allowed: ['VN'],
	// 			},
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '1032630',
	// 			likeCount: '8400',
	// 			dislikeCount: '327',
	// 			favoriteCount: '0',
	// 			commentCount: '1068',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'TBDc2Ho_FK8Kl9M_Sn4KE9AtYPI',
	// 		id: 'g80QY6j6jrc',
	// 		snippet: {
	// 			publishedAt: '2021-08-13T03:00:11Z',
	// 			channelId: 'UCcAfy4gGeiSFLRpyg8Xxq_g',
	// 			title: 'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021',
	// 			description:
	// 				'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021► Đăng Kí Theo Dõi Youtube Orinn tại: http://ent.orinn.net/\n► Theo dõi fanpage Facebook: https://www.facebook.com/OrinnMusic/\n► Website: http://orinn.net/\n📷 Photo \nTRACKLIST:\n1. Rồi Tới Luôn\n2. Họ Yêu Ai Mất Rồi\n3. Kẹo Bông Gòn\n4. Cô Đơn Dành Cho Ai \n5. Nhớ Người Hay Nhớ\n6. Em Có Yêu Anh Không\n7. Kẻ Điên Tin Vào Tình Yêu\n8. Cafe Không Đường\n9. Sầu Tương Tư\n10. Phương Xa \n11. Hẹn Yêu \n12. Che Giấu Nỗi Đau\n13. Đoạn Tuyệt Nàng Đi\n14. Đất Khánh Qua Người\n15. Anh Từng Cố Gắng\n-------------------------------------------------------------------\n► Đây là các ca khúc được độc quyền,tác quyền bởi Orinn và các đối tác của Orinn. Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.\n☞ LH Vấn Đề Bản Quyền: contact@orinn.net\n► Hợp tác, quảng cáo, làm video, đăng nhạc lên Orinn liên hệ chúng tôi qua mail: contact@orinn.net\n\n© Bản quyền Video thuộc về Orinn \n© Copyright by Orinn  ☞ Do not Reup',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/g80QY6j6jrc/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/g80QY6j6jrc/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/g80QY6j6jrc/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/g80QY6j6jrc/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/g80QY6j6jrc/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Orinn Music Trending',
	// 			tags: [
	// 				'rồi tới luôn remix',
	// 				'roi toi luon remix',
	// 				'rồi tới luôn',
	// 				'roi toi luon',
	// 				'remix rồi tới luôn',
	// 				'remix roi toi luon',
	// 				'rồi tới luôn edm',
	// 				'roi toi luon edm',
	// 				'rồi tới luôn remix tik tok',
	// 				'Edm tik tok',
	// 				'edm remix',
	// 				'remix',
	// 				'edm tik tok 2021',
	// 				'remix 2021',
	// 				'roi toi luon remix tik tok',
	// 				'rồi tới luôn tik tok',
	// 				'ngày mình bên nhau dây tơ hồng lại nối thành đôi',
	// 				'Đang ung dung trên trời remix',
	// 				'cô đơn dành cho ai remix',
	// 				'co don danh cho ai remix',
	// 				'nhạc edm tik tok',
	// 				'orinn music trending',
	// 				'nhạc trẻ remix',
	// 			],
	// 			categoryId: '10',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021',
	// 				description:
	// 					'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021► Đăng Kí Theo Dõi Youtube Orinn tại: http://ent.orinn.net/\n► Theo dõi fanpage Facebook: https://www.facebook.com/OrinnMusic/\n► Website: http://orinn.net/\n📷 Photo \nTRACKLIST:\n1. Rồi Tới Luôn\n2. Họ Yêu Ai Mất Rồi\n3. Kẹo Bông Gòn\n4. Cô Đơn Dành Cho Ai \n5. Nhớ Người Hay Nhớ\n6. Em Có Yêu Anh Không\n7. Kẻ Điên Tin Vào Tình Yêu\n8. Cafe Không Đường\n9. Sầu Tương Tư\n10. Phương Xa \n11. Hẹn Yêu \n12. Che Giấu Nỗi Đau\n13. Đoạn Tuyệt Nàng Đi\n14. Đất Khánh Qua Người\n15. Anh Từng Cố Gắng\n-------------------------------------------------------------------\n► Đây là các ca khúc được độc quyền,tác quyền bởi Orinn và các đối tác của Orinn. Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.\n☞ LH Vấn Đề Bản Quyền: contact@orinn.net\n► Hợp tác, quảng cáo, làm video, đăng nhạc lên Orinn liên hệ chúng tôi qua mail: contact@orinn.net\n\n© Bản quyền Video thuộc về Orinn \n© Copyright by Orinn  ☞ Do not Reup',
	// 			},
	// 			defaultAudioLanguage: 'vi',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT55M16S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '1201538',
	// 			likeCount: '26179',
	// 			dislikeCount: '870',
	// 			favoriteCount: '0',
	// 			commentCount: '335',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'kSRVeOF0ZJpbJcjfqulZdVwMotA',
	// 		id: 'A1h4KuFDUtU',
	// 		snippet: {
	// 			publishedAt: '2021-08-14T01:33:06Z',
	// 			channelId: 'UCvWlw9Z68ZkFBj5K_HdFFRQ',
	// 			title: 'Vũ Thanh Khóc Vì Kênh Youtube Bị Hack',
	// 			description:
	// 				'Hôm bữa thấy Thanh gọi điện qua Ngọc hỏi làm sao lấy lại kênh Youtube sau khi bị hack, thì mình có kêu Thanh điện thoại hỏi anh Vinh, nhưng kết quả quá buồn vì lần này anh Vinh cũng bó tay luôn. Khi ấy...Vũ Thanh đã  khóc\n\nNHẬN HỢP TÁC QUẢNG CÁO - VUI LÒNG LIÊN HỆ: \n✉️ Email: phucvinh.pelc@gmail.com\n-------------------/-----------------------------------------\n* I really respect creators so If you have any wonders related to the COPYRIGHT, please send email to me, we will find out the suitable solution. Thanks so much for your co-operation.\n** Tôi luôn tôn trọng người làm video nên nếu bạn có bất kì vấn đề nào liên quan đến bản quyền, vui lòng gửi mình 1 email để mình cùng nhau thống nhất cách giải quyết. Cảm ơn sự hợp tác từ bạn!!!\n-------------------/-----------------------------------------\n© Bản quyền thuộc về Team Tony\n© Copyright By Team Tony & Do not Reup\n♫ MUSIC RESOURCE - Nguồn âm thanh',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/A1h4KuFDUtU/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/A1h4KuFDUtU/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/A1h4KuFDUtU/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/A1h4KuFDUtU/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/A1h4KuFDUtU/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Team Tony',
	// 			tags: [
	// 				'team tony',
	// 				'vu thanh tony tv',
	// 				'vu thanh mat kenh youtube',
	// 				'vu thanh bi mat kenh',
	// 				'kênh vũ thanh bị hack',
	// 				'vũ thanh khóc',
	// 				'tony tv vũ thanh',
	// 				'team tony chia buồn cùng vũ thanh',
	// 				'hack kênh youtube',
	// 				'bị mất kênh youtube',
	// 				'tony tv',
	// 				'team tony tv',
	// 				'bị mất kênh youtube',
	// 				'youtube trending',
	// 				'Vũ Thanh Khóc',
	// 				'kênh youtube bị hack',
	// 			],
	// 			categoryId: '22',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'Vũ Thanh Khóc Vì Kênh Youtube Bị Hack',
	// 				description:
	// 					'Hôm bữa thấy Thanh gọi điện qua Ngọc hỏi làm sao lấy lại kênh Youtube sau khi bị hack, thì mình có kêu Thanh điện thoại hỏi anh Vinh, nhưng kết quả quá buồn vì lần này anh Vinh cũng bó tay luôn. Khi ấy...Vũ Thanh đã  khóc\n\nNHẬN HỢP TÁC QUẢNG CÁO - VUI LÒNG LIÊN HỆ: \n✉️ Email: phucvinh.pelc@gmail.com\n-------------------/-----------------------------------------\n* I really respect creators so If you have any wonders related to the COPYRIGHT, please send email to me, we will find out the suitable solution. Thanks so much for your co-operation.\n** Tôi luôn tôn trọng người làm video nên nếu bạn có bất kì vấn đề nào liên quan đến bản quyền, vui lòng gửi mình 1 email để mình cùng nhau thống nhất cách giải quyết. Cảm ơn sự hợp tác từ bạn!!!\n-------------------/-----------------------------------------\n© Bản quyền thuộc về Team Tony\n© Copyright By Team Tony & Do not Reup\n♫ MUSIC RESOURCE - Nguồn âm thanh',
	// 			},
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT2M40S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '2197535',
	// 			likeCount: '39355',
	// 			dislikeCount: '3536',
	// 			favoriteCount: '0',
	// 			commentCount: '5225',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'kPpP2eB7ALLSv_W-vGvBmny8CsE',
	// 		id: 'mA4oBwxtQbg',
	// 		snippet: {
	// 			publishedAt: '2021-08-08T12:13:09Z',
	// 			channelId: 'UC9Hw3DS7hvi1iCzPSpFigSw',
	// 			title: 'RỒI TỚI LUÔN | NAL | NGUYỄN ĐÌNH VŨ | COVER',
	// 			description:
	// 				'Bài hát : Rồi Tới Luôn | Nguyễn Đình Vũ | Nal | Live Looping | Cover\nSáng tác : Nal\n\nCác bạn nhớ ấn đăng ký kênh Vũ nha, quan trọng lắm đó ❤ Mỗi sub các bạn click là động lực cho Vũ ra nhiều sản phẩm mới và hay hơn trên kênh nhé ❤\n- Link MV : https://youtu.be/HZi4eJXWZU0\n\n©️ Channel Youtube Nguyen Dinh Vu Official ☑️\n► Facebook : https://www.facebook.com/nguyendinhvudeptrai\n► Instagram : https://www.instagram.com/casi.nguyendinhvu\n► Tiktok : https://www.tiktok.com/@casinguyendinhvu\n\n📌 Mọi thông tin chi tiết quảng cáo bản quyền xin vui lòng liên hệ 📌\n📩 Email : singer.nguyendinhvu@gmail.com\n☎️ Hotline : 0938852921 (Mr.Tuấn)\n\n© Bản quyền thuộc về Nguyen Dinh Vu Production\n© Copyright by Nguyen Dinh Vu Official ☞ Do not Reup\n\n🚫 If any producer or label has an issue with any of the uploads please get in contact : singer.nguyendinhvu@gmail.com. Thank You!\n🚫 Nếu có bất cứ thắc mắc, khiếu nại nào về bản quyền hình ảnh cũng như âm nhạc liên hệ trực tiếp với tôi qua địa chỉ email : singer.nguyendinhvu@gmail.com . Xin cảm ơn!\n\n#nguyendinhvu #roitoiluon #livelooping #RTL #nhacmoi #nhachot #nhacmoi #nhaccover #nhacremix #nal',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/mA4oBwxtQbg/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/mA4oBwxtQbg/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/mA4oBwxtQbg/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/mA4oBwxtQbg/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/mA4oBwxtQbg/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Nguyễn Đình Vũ Official',
	// 			tags: [
	// 				'nguyen dinh vu',
	// 				'nguyễn đình vũ',
	// 				'kenh nguyen dinh vu',
	// 				'kênh nguyễn đình vũ',
	// 				'nhac tre',
	// 				'nhạc trẻ',
	// 				'nhac tre moi nhat',
	// 				'nhạc trẻ mới nhất',
	// 				'nhac remix',
	// 				'nhạc remix',
	// 				'cover hay nhat',
	// 				'cover hay nhất',
	// 				'cover moi nhat',
	// 				'cover mới nhất',
	// 				'roi toi luon',
	// 				'rồi tới luôn',
	// 				'roi toi luon nguyen dinh vu',
	// 				'rồi tới luôn nguyễn đình vũ',
	// 				'live looping roi toi luon nguyen dinh vu',
	// 				'live looping rồi tới luôn nguyễn đình vũ',
	// 			],
	// 			categoryId: '10',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'RỒI TỚI LUÔN | NAL | NGUYỄN ĐÌNH VŨ | COVER',
	// 				description:
	// 					'Bài hát : Rồi Tới Luôn | Nguyễn Đình Vũ | Nal | Live Looping | Cover\nSáng tác : Nal\n\nCác bạn nhớ ấn đăng ký kênh Vũ nha, quan trọng lắm đó ❤ Mỗi sub các bạn click là động lực cho Vũ ra nhiều sản phẩm mới và hay hơn trên kênh nhé ❤\n- Link MV : https://youtu.be/HZi4eJXWZU0\n\n©️ Channel Youtube Nguyen Dinh Vu Official ☑️\n► Facebook : https://www.facebook.com/nguyendinhvudeptrai\n► Instagram : https://www.instagram.com/casi.nguyendinhvu\n► Tiktok : https://www.tiktok.com/@casinguyendinhvu\n\n📌 Mọi thông tin chi tiết quảng cáo bản quyền xin vui lòng liên hệ 📌\n📩 Email : singer.nguyendinhvu@gmail.com\n☎️ Hotline : 0938852921 (Mr.Tuấn)\n\n© Bản quyền thuộc về Nguyen Dinh Vu Production\n© Copyright by Nguyen Dinh Vu Official ☞ Do not Reup\n\n🚫 If any producer or label has an issue with any of the uploads please get in contact : singer.nguyendinhvu@gmail.com. Thank You!\n🚫 Nếu có bất cứ thắc mắc, khiếu nại nào về bản quyền hình ảnh cũng như âm nhạc liên hệ trực tiếp với tôi qua địa chỉ email : singer.nguyendinhvu@gmail.com . Xin cảm ơn!\n\n#nguyendinhvu #roitoiluon #livelooping #RTL #nhacmoi #nhachot #nhacmoi #nhaccover #nhacremix #nal',
	// 			},
	// 			defaultAudioLanguage: 'vi',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT3M54S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '4443514',
	// 			likeCount: '55923',
	// 			dislikeCount: '2482',
	// 			favoriteCount: '0',
	// 			commentCount: '3008',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'ZJiDcmXZQdoTaH49z-TNT1VHjL4',
	// 		id: 'wuNe_5_SgbQ',
	// 		snippet: {
	// 			publishedAt: '2021-08-15T10:30:12Z',
	// 			channelId: 'UC9ZE4dWr8ONWHdcLHqh4sBA',
	// 			title: 'Gục ngã sau 2 tháng ăn mì gói, Chàng Trai Miền Tây quyết “liều mình” đi bộ về quê bên vợ con',
	// 			description:
	// 				'#anhtinhvlogs #changtraimientay #diboveque \nGục ngã sau 2 tháng ăn mì gói, Chàng Trai Miền Tây quyết “liều mình” đi bộ về quê bên vợ con\n\n--------------\nAnh Tình Vlogs sẽ là nhịp cầu kết nối và lan tỏa yêu thương đến các mảnh đời còn khó khăn. Mong nhận được sự ủng hộ của mọi người. \n\n📍 ĐĂNG KÝ ủng hộ Anh Tình Vlogs: https://bit.ly/3dkiu9C\n📍 Thông tin liên hệ: \n- Email: Tinhpro799@gmail.com\n- Zalo , Viber 0966877614\n  Hoặc gọi 0772893163\n- Fanpage: https://bit.ly/33QV7Bp\n- Facebook: https://bit.ly/3jOG9S9\n----------------------\n© Bản quyền thuộc về  Anh Tình Vlogs\n© Copyright by Anh Tình Vlogs\n☞ Do not Reup',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/wuNe_5_SgbQ/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/wuNe_5_SgbQ/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/wuNe_5_SgbQ/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/wuNe_5_SgbQ/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/wuNe_5_SgbQ/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Anh Tình Vlogs',
	// 			tags: [
	// 				'Anhtinhvlogs',
	// 				'Thiện nguyện',
	// 				'trái tim bồ tát',
	// 				'Giúp đỡ hoàn cảnh',
	// 				'Hoàn cảnh khó khăn',
	// 				'Mùa dịch',
	// 				'Anh tình vlogs thiện nguyện',
	// 				'Anh tình Vlogs',
	// 				'Tấm lòng mùa dịch',
	// 				'Gục ngã sau 2 tháng ăn mì gói',
	// 				'Chàng Trai Miền Tây quyết “liều mình” đi bộ Sài Gòn - Bạc Liêu',
	// 				'Đi bộ về quê',
	// 				'Đi bộ sài gòn về bạc liêu',
	// 				'Chàng trai miền tây',
	// 				'Đi bộ về bạc liêu',
	// 				'BẠC LIÊU',
	// 				'anhtinhvlogs',
	// 				'Hoàn cảnh khó khăn mùa dịch',
	// 				'Giãn cách xã hội',
	// 				'Chỉ thị 16',
	// 				'Chàng Trai Miền Tây quyết “liều mình” đi bộ về quê bên vợ con',
	// 			],
	// 			categoryId: '22',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'Gục ngã sau 2 tháng ăn mì gói, Chàng Trai Miền Tây quyết “liều mình” đi bộ về quê bên vợ con',
	// 				description:
	// 					'#anhtinhvlogs #changtraimientay #diboveque \nGục ngã sau 2 tháng ăn mì gói, Chàng Trai Miền Tây quyết “liều mình” đi bộ về quê bên vợ con\n\n--------------\nAnh Tình Vlogs sẽ là nhịp cầu kết nối và lan tỏa yêu thương đến các mảnh đời còn khó khăn. Mong nhận được sự ủng hộ của mọi người. \n\n📍 ĐĂNG KÝ ủng hộ Anh Tình Vlogs: https://bit.ly/3dkiu9C\n📍 Thông tin liên hệ: \n- Email: Tinhpro799@gmail.com\n- Zalo , Viber 0966877614\n  Hoặc gọi 0772893163\n- Fanpage: https://bit.ly/33QV7Bp\n- Facebook: https://bit.ly/3jOG9S9\n----------------------\n© Bản quyền thuộc về  Anh Tình Vlogs\n© Copyright by Anh Tình Vlogs\n☞ Do not Reup',
	// 			},
	// 			defaultAudioLanguage: 'vi',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT20M39S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '594500',
	// 			likeCount: '7119',
	// 			dislikeCount: '437',
	// 			favoriteCount: '0',
	// 			commentCount: '1585',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'gJ8FYLiGnepwiLS_KMOj0lo0HQE',
	// 		id: 'kfw7MYah2n0',
	// 		snippet: {
	// 			publishedAt: '2021-07-31T13:00:09Z',
	// 			channelId: 'UC6UrwtJjV4xPxxZo-ZEpQYA',
	// 			title: '3107 3 - W/n  x ( Nâu,Duongg,Titie )| OFFICIAL MV',
	// 			description:
	// 				'► SUBSCRIBE CHANNEL:  https://wn.fanlink.to/youtube\n\n#31073 #Wn #Winhmm #UFO #UMG #3107 #Win\nStreamlink : https://umvn.lnk.to/3107-3\n\nExecutive Producer: Nguyen Quy Cao Nguyen\nCreative Director & Screen Writer : W/n\nArtist: DuongG , Nâu , Titie\nComposer: W/n \nRap : Nâu\nMusic Producer: W/n \nExecutive Supervisor: Hai Dang\nPartnership Manager : Tam Meo\nSocial network advisor : Tu Anh\nArt Director: Vo Van Hieu\nStylist: Nguyen Quoc Ky\nHair Stylist: Nguyen Quoc Ky\nWardrobe: ZUNE.ZX\n\nDirector/Edit: Lee1407\nVFX Producer: Le Song Bao Duy\n\n\nCamera Equipment: On Studio\nLighting Equipment: On studio\n\nMedia Partners: Box Studio, RioX , H20 radio\ndistributed by Def Jam recording Viet Nam\n\n\nW/n \n• Fanpage: https://wn.fanlink.to/fanpage_winhmm\n• Facebook: https://wn.fanlink.to/fb_winhmm\n• Instagram: https://wn.fanlink.to/instagram_winhmm\n• SoundCloud: https://wn.fanlink.to/soundcloud_winhmm\n• Spotify: https://wn.fanlink.to/spotify_winhmm\n• Apple Music: https://wn.fanlink.to/AppleMusic_winhmm\n• TikTok: https://www.tiktok.com/@wn0000\n\n🎹🎧🎵\nDJ/Music Producer/Composer\nContact my manager : haidang.dien@riox.network \n--\n© Bản quyền thuộc về W/n\n© Copyright by W/n ☞ Do not Reup',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/kfw7MYah2n0/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/kfw7MYah2n0/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/kfw7MYah2n0/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/kfw7MYah2n0/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/kfw7MYah2n0/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'W/n',
	// 			tags: [
	// 				'W/n',
	// 				'3107 - W/n',
	// 				'w/n 3107 duongg nau',
	// 				'wn 3107',
	// 				'w/n remix',
	// 				'3107',
	// 				'31073',
	// 				'3 1 0 7 - 3 W/n',
	// 				'Nâu',
	// 				'3107 duongg nau wn',
	// 				'wn 3107 dươngg nâu',
	// 				'duongg nau 3107 wn',
	// 				'Duongg',
	// 				'wn',
	// 				'w/n',
	// 				'w/n riox',
	// 				'3107 wn',
	// 				'riox',
	// 				'3107 nâu duongg',
	// 				'w/n duongg',
	// 				'wn remix',
	// 				'Simple love wn remix',
	// 				'3107-3 w/n x nâu x duongg x titie',
	// 				'w/n x nâu x duongg x titie',
	// 				'3107-3',
	// 			],
	// 			categoryId: '10',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: '3107 3 - W/n  x ( Nâu,Duongg,Titie )| OFFICIAL MV',
	// 				description:
	// 					'► SUBSCRIBE CHANNEL:  https://wn.fanlink.to/youtube\n\n#31073 #Wn #Winhmm #UFO #UMG #3107 #Win\nStreamlink : https://umvn.lnk.to/3107-3\n\nExecutive Producer: Nguyen Quy Cao Nguyen\nCreative Director & Screen Writer : W/n\nArtist: DuongG , Nâu , Titie\nComposer: W/n \nRap : Nâu\nMusic Producer: W/n \nExecutive Supervisor: Hai Dang\nPartnership Manager : Tam Meo\nSocial network advisor : Tu Anh\nArt Director: Vo Van Hieu\nStylist: Nguyen Quoc Ky\nHair Stylist: Nguyen Quoc Ky\nWardrobe: ZUNE.ZX\n\nDirector/Edit: Lee1407\nVFX Producer: Le Song Bao Duy\n\n\nCamera Equipment: On Studio\nLighting Equipment: On studio\n\nMedia Partners: Box Studio, RioX , H20 radio\ndistributed by Def Jam recording Viet Nam\n\n\nW/n \n• Fanpage: https://wn.fanlink.to/fanpage_winhmm\n• Facebook: https://wn.fanlink.to/fb_winhmm\n• Instagram: https://wn.fanlink.to/instagram_winhmm\n• SoundCloud: https://wn.fanlink.to/soundcloud_winhmm\n• Spotify: https://wn.fanlink.to/spotify_winhmm\n• Apple Music: https://wn.fanlink.to/AppleMusic_winhmm\n• TikTok: https://www.tiktok.com/@wn0000\n\n🎹🎧🎵\nDJ/Music Producer/Composer\nContact my manager : haidang.dien@riox.network \n--\n© Bản quyền thuộc về W/n\n© Copyright by W/n ☞ Do not Reup',
	// 			},
	// 			defaultAudioLanguage: 'vro',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT3M55S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '15516068',
	// 			likeCount: '320451',
	// 			dislikeCount: '4361',
	// 			favoriteCount: '0',
	// 			commentCount: '11486',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'Yaiz0D62PiHQTZbQpKOAj5Ayl_8',
	// 		id: 'j3R8uxU4y7o',
	// 		snippet: {
	// 			publishedAt: '2021-08-20T09:35:53Z',
	// 			channelId: 'UCrXTLKK7xUEWB7BHV2fyBdw',
	// 			title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 20.8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
	// 			description:
	// 				'🔥Bản Tin Mới Nhất Covid-19 Sáng 20.8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/j3R8uxU4y7o/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/j3R8uxU4y7o/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/j3R8uxU4y7o/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/j3R8uxU4y7o/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/j3R8uxU4y7o/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Tin Tức 24h',
	// 			tags: [
	// 				'Tin tức 24h',
	// 				'tin tức 24h tv',
	// 				'tin tức mới nhất',
	// 				'tin tức covid 19 mới nhất',
	// 				'Covid 19 mới nhất',
	// 				'covid 19 moi nhat',
	// 				'covid hôm nay ở việt nam',
	// 				'tin covid 19 mới nhất',
	// 				'covid hôm nay',
	// 				'cập nhật dịch covid-19',
	// 				'tin nóng về dịch covid 19',
	// 				'tin về dịch covid 19 mới nhất',
	// 				'tin dịch covid 19 mới nhất hôm nay',
	// 				'tình hình dịch covid 19',
	// 				'tin tức dịch covid 19 mới nhất',
	// 				'dịch covid 19 ở việt nam',
	// 				'covid-19 hôm nay',
	// 				'covid 19 ngày hôm nay',
	// 			],
	// 			categoryId: '22',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 20.8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
	// 				description:
	// 					'🔥Bản Tin Mới Nhất Covid-19 Sáng 20.8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
	// 			},
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT9H12S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '345389',
	// 			likeCount: '2807',
	// 			dislikeCount: '123',
	// 			favoriteCount: '0',
	// 			commentCount: '2',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'eRA_oplLT6Y4UbBE1FI6DkYZhk4',
	// 		id: 'I00-bgYR57Y',
	// 		snippet: {
	// 			publishedAt: '2021-08-17T13:15:13Z',
	// 			channelId: 'UC9ZE4dWr8ONWHdcLHqh4sBA',
	// 			title: 'Hot Boy Miền Tây vừa đi vừa khóc nức nở, cầu xin người đi đường giúp đỡ về quê phụng dưỡng “mẹ già”',
	// 			description:
	// 				'Hot Boy Miền Tây vừa đi vừa khóc nức nở, cầu xin người đi đường giúp đỡ về quê phụng dưỡng “mẹ già”\n#anhtinhvlogs #hotboymientay #diboveque\n--------------\nAnh Tình Vlogs sẽ là nhịp cầu kết nối và lan tỏa yêu thương đến các mảnh đời còn khó khăn. Mong nhận được sự ủng hộ của mọi người. \n\n📍 ĐĂNG KÝ ủng hộ Anh Tình Vlogs: https://bit.ly/3dkiu9C\n📍 Thông tin liên hệ: \n- Email: Tinhpro799@gmail.com\n- Zalo , Viber 0966877614\n  Hoặc gọi 0772893163\n- Fanpage: https://bit.ly/33QV7Bp\n- Facebook: https://bit.ly/3jOG9S9\n----------------------\n© Bản quyền thuộc về  Anh Tình Vlogs\n© Copyright by Anh Tình Vlogs\n☞ Do not Reup',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/I00-bgYR57Y/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/I00-bgYR57Y/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/I00-bgYR57Y/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/I00-bgYR57Y/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/I00-bgYR57Y/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'Anh Tình Vlogs',
	// 			tags: [
	// 				'Hot Boy Miền Tây vừa đi vừa khóc nức nở',
	// 				'cầu xin người đi đường giúp đỡ về quê phụng dưỡng “mẹ già”',
	// 				'Anhtinhvlogs',
	// 				'Thiện nguyện',
	// 				'trái tim bồ tát',
	// 				'Giúp đỡ hoàn cảnh',
	// 				'Hoàn cảnh khó khăn',
	// 				'Mùa dịch',
	// 				'Anh tình vlogs thiện nguyện',
	// 				'Anh tình Vlogs',
	// 				'Lang thang vỉa hè',
	// 				'Tấm lòng mùa dịch',
	// 				'Đi bộ về quê',
	// 				'Chàng trai miền tây',
	// 				'BẠC LIÊU',
	// 				'anhtinhvlogs',
	// 				'Hoàn cảnh khó khăn mùa dịch',
	// 				'Giãn cách xã hội',
	// 				'Chỉ thị 16',
	// 				'Hot Boy Miền Tây',
	// 				'về quê mùa dịch',
	// 				'phụng dưỡng mẹ già',
	// 			],
	// 			categoryId: '22',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'Hot Boy Miền Tây vừa đi vừa khóc nức nở, cầu xin người đi đường giúp đỡ về quê phụng dưỡng “mẹ già”',
	// 				description:
	// 					'Hot Boy Miền Tây vừa đi vừa khóc nức nở, cầu xin người đi đường giúp đỡ về quê phụng dưỡng “mẹ già”\n#anhtinhvlogs #hotboymientay #diboveque\n--------------\nAnh Tình Vlogs sẽ là nhịp cầu kết nối và lan tỏa yêu thương đến các mảnh đời còn khó khăn. Mong nhận được sự ủng hộ của mọi người. \n\n📍 ĐĂNG KÝ ủng hộ Anh Tình Vlogs: https://bit.ly/3dkiu9C\n📍 Thông tin liên hệ: \n- Email: Tinhpro799@gmail.com\n- Zalo , Viber 0966877614\n  Hoặc gọi 0772893163\n- Fanpage: https://bit.ly/33QV7Bp\n- Facebook: https://bit.ly/3jOG9S9\n----------------------\n© Bản quyền thuộc về  Anh Tình Vlogs\n© Copyright by Anh Tình Vlogs\n☞ Do not Reup',
	// 			},
	// 			defaultAudioLanguage: 'vi',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT19M40S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '382268',
	// 			likeCount: '4992',
	// 			dislikeCount: '341',
	// 			favoriteCount: '0',
	// 			commentCount: '655',
	// 		},
	// 	},
	// 	{
	// 		kind: 'youtube#video',
	// 		etag: 'Y9luivgx2IE24SXKhE8ZWPJbLCI',
	// 		id: 'o7cA0MtTuYw',
	// 		snippet: {
	// 			publishedAt: '2021-08-13T13:00:18Z',
	// 			channelId: 'UCLa90xY6l4sEY1sC3tlwGGA',
	// 			title: 'CHƯA TỪNG VÌ NHAU | KARIK x V.P TIÊN | OFFICIAL MV LYRICS',
	// 			description:
	// 				'CHƯA TỪNG VÌ NHAU | KARIK x V.P TIÊN | OFFICIAL MV LYRICS\n\n🎧 Audio ngay tại đây: https://zingmp3.vn/bai-hat/Chua-Tung-Vi-Nhau-Karik-Vu-Phung-Tien/ZUU9I9F6.html\n\nLyrics :\nTình yêu ấy vốn không nên tồn tại\nThương nhớ ấy ta nên dừng lại\nCàng bước tiếp bên nhau chỉ càng sai\nVì ta vốn dĩ mông lung ngay từ đầu\nNíu kéo chỉ thêm thương đau\nMình chưa từng vì nhau (chưa bao giờ vì nhau)\n\nLúc anh buồn thì em lặng im , khi em cần anh luôn hiện diện\nEm buông tay thì anh lại kiếm , anh chờ em nhưng em chẳng tìm\nAnh là kẻ cố chấp trong tình yêu\nEm là người mù quáng trên tình trường\nMiệng nói thương nhưng chẳng hiểu bao nhiêu\nThì làm sao tình mình có thể êm ấm giống bao người bình thường\nKhi bình yên cứ nghĩ sẽ không gì khiến 2 ta xa rời\nNửa đời mình là đây , hạnh phúc chẳng còn xa vời\nNhưng tiếc thay là không , chỉ là cảm giác tạm thời\nVới tình yêu thật sự mình còn quá non nớt để chạm tới\nVì thứ anh cho em không cần , thứ em cần anh không có\nKhuyết điểm bản thân mình không rõ , việc em muốn lo anh không cho\nCái tôi mỗi người mình không bỏ, thì làm gì còn có sau đó\nMình làm gì còn có sau đó...\n\nNhiều lần tự hỏi mình đã thật sự thương chưa ?\nGiữ nhau đến giờ này ngoài tình yêu còn gì nữa ?\nNói cần nhau hơn mạng sống nhưng sao nỗi đau lại dư thừa\nNụ cười trốn tránh , niềm tin mất cả điểm tựa\nCứ xa rồi tìm về chưa bao lâu rồi lại xa\nCứ khóc rồi lại cười hứa sẽ vượt qua tất cả\nNhưng thực tế chuyện vẫn vậy đã bao giờ mình vượt qua ?\nBình yên vẫn bên lề còn duyên phận thì gục ngã\nĐã vậy thì...mình cứ yêu trong tuyệt vọng\nTới đâu hay tới đó cho tròn 2 chữ thật lòng\nKhông trách , không mong bất cứ điều gì như ngày đầu\nChờ đợi đến 1 ngày ông trời mang ta rời nhau\nVậy em nhé...cứ yêu trong tuyệt vọng\nTới đâu hay tới đó cho tròn 2 chữ thật lòng\nIm lặng , không mong bất cứ điều gì như ngày đầu\nBình thản đến bật khóc , xóa tên khỏi cuộc đời nhau\n\nThà rằng đừng nói xem nhau là mai sau\nĐừng lặng lẽ bên nhau nhiều đêm thâu\nTừng vết thương...sẽ chẳng sâu thế này\n(Mình có lẽ đã sớm buông tay từ lâu)\nĐể nay nỗi nhớ không thể nào phôi pha\nNgồi lặng lẽ mong cho thời gian qua\nChợt bật khóc...(cả 2 ta cùng bật khóc)\nkhi thâm tâm nhận ra...(cùng 1 điều thật đau đớn là...)\nChưa 1 lần cùng cố gắng làm sao đi hết đường dài\nChưa 1 lần từng thấu hiểu làm sao yêu thương ở lại\nChưa 1 lần biết hy sinh , đừng trách tình yêu này sai\nVì ta chưa từng , chưa từng , thật sự chưa từng , chưa chừng\nVì ta vốn dĩ đã sai ngay từ khi ta bắt đầu\nVì ta không còn tậm tân với chuyện tình này từ lâu\n\nNước mắt rơi là vì...\nMất nhau mãi là vì...\n-----------\r\nComposer : Karik\nRecording and mixing : Addy Tran\n\nFanpage chính thức KARIK\r\nhttps://www.facebook.com/karik.phk\r\n© Copyright by KARIK (DO NOT REUP)',
	// 			thumbnails: {
	// 				default: {
	// 					url: 'https://i.ytimg.com/vi/o7cA0MtTuYw/default.jpg',
	// 					width: 120,
	// 					height: 90,
	// 				},
	// 				medium: {
	// 					url: 'https://i.ytimg.com/vi/o7cA0MtTuYw/mqdefault.jpg',
	// 					width: 320,
	// 					height: 180,
	// 				},
	// 				high: {
	// 					url: 'https://i.ytimg.com/vi/o7cA0MtTuYw/hqdefault.jpg',
	// 					width: 480,
	// 					height: 360,
	// 				},
	// 				standard: {
	// 					url: 'https://i.ytimg.com/vi/o7cA0MtTuYw/sddefault.jpg',
	// 					width: 640,
	// 					height: 480,
	// 				},
	// 				maxres: {
	// 					url: 'https://i.ytimg.com/vi/o7cA0MtTuYw/maxresdefault.jpg',
	// 					width: 1280,
	// 					height: 720,
	// 				},
	// 			},
	// 			channelTitle: 'KARIK',
	// 			tags: [
	// 				'chưng từng vì nhau',
	// 				'chưa tung vi sau',
	// 				'karik',
	// 				'rap karik',
	// 				'karik 2021',
	// 				'karik rap viet',
	// 				'karik rap',
	// 				'karik rap việt',
	// 				'team karik',
	// 				'nhạc karik',
	// 				'rapper karik',
	// 				'karik mv',
	// 				'wowy karik',
	// 				'karik gducky',
	// 				'karik ricky star',
	// 				'karik wowy',
	// 				'nhạc karik mới nhất',
	// 				'onlyc karik',
	// 				'rap karik hay',
	// 				'karik karaoke',
	// 				'nhạc rap karik',
	// 				'karik nguoi la oi',
	// 				'karikk',
	// 				'từng là tất cả karik',
	// 				'rap việt wowy karik',
	// 				'chưng từng vì nhau karik',
	// 				'chua tung vi nhau karik',
	// 				'chưa từng',
	// 				'vì nhau',
	// 			],
	// 			categoryId: '10',
	// 			liveBroadcastContent: 'none',
	// 			localized: {
	// 				title: 'CHƯA TỪNG VÌ NHAU | KARIK x V.P TIÊN | OFFICIAL MV LYRICS',
	// 				description:
	// 					'CHƯA TỪNG VÌ NHAU | KARIK x V.P TIÊN | OFFICIAL MV LYRICS\n\n🎧 Audio ngay tại đây: https://zingmp3.vn/bai-hat/Chua-Tung-Vi-Nhau-Karik-Vu-Phung-Tien/ZUU9I9F6.html\n\nLyrics :\nTình yêu ấy vốn không nên tồn tại\nThương nhớ ấy ta nên dừng lại\nCàng bước tiếp bên nhau chỉ càng sai\nVì ta vốn dĩ mông lung ngay từ đầu\nNíu kéo chỉ thêm thương đau\nMình chưa từng vì nhau (chưa bao giờ vì nhau)\n\nLúc anh buồn thì em lặng im , khi em cần anh luôn hiện diện\nEm buông tay thì anh lại kiếm , anh chờ em nhưng em chẳng tìm\nAnh là kẻ cố chấp trong tình yêu\nEm là người mù quáng trên tình trường\nMiệng nói thương nhưng chẳng hiểu bao nhiêu\nThì làm sao tình mình có thể êm ấm giống bao người bình thường\nKhi bình yên cứ nghĩ sẽ không gì khiến 2 ta xa rời\nNửa đời mình là đây , hạnh phúc chẳng còn xa vời\nNhưng tiếc thay là không , chỉ là cảm giác tạm thời\nVới tình yêu thật sự mình còn quá non nớt để chạm tới\nVì thứ anh cho em không cần , thứ em cần anh không có\nKhuyết điểm bản thân mình không rõ , việc em muốn lo anh không cho\nCái tôi mỗi người mình không bỏ, thì làm gì còn có sau đó\nMình làm gì còn có sau đó...\n\nNhiều lần tự hỏi mình đã thật sự thương chưa ?\nGiữ nhau đến giờ này ngoài tình yêu còn gì nữa ?\nNói cần nhau hơn mạng sống nhưng sao nỗi đau lại dư thừa\nNụ cười trốn tránh , niềm tin mất cả điểm tựa\nCứ xa rồi tìm về chưa bao lâu rồi lại xa\nCứ khóc rồi lại cười hứa sẽ vượt qua tất cả\nNhưng thực tế chuyện vẫn vậy đã bao giờ mình vượt qua ?\nBình yên vẫn bên lề còn duyên phận thì gục ngã\nĐã vậy thì...mình cứ yêu trong tuyệt vọng\nTới đâu hay tới đó cho tròn 2 chữ thật lòng\nKhông trách , không mong bất cứ điều gì như ngày đầu\nChờ đợi đến 1 ngày ông trời mang ta rời nhau\nVậy em nhé...cứ yêu trong tuyệt vọng\nTới đâu hay tới đó cho tròn 2 chữ thật lòng\nIm lặng , không mong bất cứ điều gì như ngày đầu\nBình thản đến bật khóc , xóa tên khỏi cuộc đời nhau\n\nThà rằng đừng nói xem nhau là mai sau\nĐừng lặng lẽ bên nhau nhiều đêm thâu\nTừng vết thương...sẽ chẳng sâu thế này\n(Mình có lẽ đã sớm buông tay từ lâu)\nĐể nay nỗi nhớ không thể nào phôi pha\nNgồi lặng lẽ mong cho thời gian qua\nChợt bật khóc...(cả 2 ta cùng bật khóc)\nkhi thâm tâm nhận ra...(cùng 1 điều thật đau đớn là...)\nChưa 1 lần cùng cố gắng làm sao đi hết đường dài\nChưa 1 lần từng thấu hiểu làm sao yêu thương ở lại\nChưa 1 lần biết hy sinh , đừng trách tình yêu này sai\nVì ta chưa từng , chưa từng , thật sự chưa từng , chưa chừng\nVì ta vốn dĩ đã sai ngay từ khi ta bắt đầu\nVì ta không còn tậm tân với chuyện tình này từ lâu\n\nNước mắt rơi là vì...\nMất nhau mãi là vì...\n-----------\r\nComposer : Karik\nRecording and mixing : Addy Tran\n\nFanpage chính thức KARIK\r\nhttps://www.facebook.com/karik.phk\r\n© Copyright by KARIK (DO NOT REUP)',
	// 			},
	// 			defaultAudioLanguage: 'vi',
	// 		},
	// 		contentDetails: {
	// 			duration: 'PT4M8S',
	// 			dimension: '2d',
	// 			definition: 'hd',
	// 			caption: 'false',
	// 			licensedContent: true,
	// 			contentRating: {},
	// 			projection: 'rectangular',
	// 		},
	// 		statistics: {
	// 			viewCount: '1874704',
	// 			likeCount: '64035',
	// 			dislikeCount: '400',
	// 			favoriteCount: '0',
	// 			commentCount: '3478',
	// 		},
	// 	},
	// ],
	nextPageToken: null,
	activeCategory: 'All',
	loading: false,
};

const initialStateSelectedVideo = {
	video: null,
	loading: true,
};
export const videoReducer = (state = initialState, action) => {
	switch (action.type) {
		case HOME_VIDEO_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case HOME_VIDEO_SUCCESS: {
			return {
				...state,
				videos:
					state.activeCategory === action.payload.category
						? [...state.videos, ...action.payload.videos]
						: action.payload.videos,
				nextPageToken: action.payload.nextPageToken,
				activeCategory: action.payload.category,
				loading: false,
			};
		}
		case HOME_VIDEO_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export const selectedVideoReducer = (
	state = initialStateSelectedVideo,
	action,
) => {
	switch (action.type) {
		case SELECT_VIDEO_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case SELECT_VIDEO_SUCCESS: {
			return {
				...state,
				video: action.payload,
				loading: false,
			};
		}
		case SELECT_VIDEO_FAILED: {
			return {
				...state,
				video: null,
				loading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export const relatedVideoReducer = (
	state = {
		loading: true,
		videos: [],
	},
	action,
) => {
	switch (action.type) {
		case RELATED_VIDEO_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case RELATED_VIDEO_SUCCESS: {
			return {
				...state,
				videos: action.payload,
				loading: false,
			};
		}
		case RELATED_VIDEO_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export const searchVideoReducer = (
	state = {
		loading: true,
		videos: [],
		nextPageToken: null,
		textKey: '',
	},
	action,
) => {
	switch (action.type) {
		case SEARCH_VIDEO_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case SEARCH_VIDEO_SUCCESS: {
			return {
				...state,
				videos:
					state.textKey.toLowerCase() ===
					action.payload.textKey.toLowerCase()
						? [...state.videos, ...action.payload.videos]
						: [...action.payload.videos],
				nextPageToken: action.payload.nextPageToken,
				textKey: action.payload.textKey,
				loading: false,
			};
		}
		case SEARCH_VIDEO_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export const subscriptionChannelReducer = (
	state = {
		loading: true,
		videos: [],
		// videos: [
		// 	{
		// 		kind: 'youtube#subscription',
		// 		etag: 'T5BpPfAU5ec32JBB0Cq5aB2D2PQ',
		// 		id: '9hdUHxMSPqbfB75f3yDnpZEC57yhJiFOBxKsNRxaNnA',
		// 		snippet: {
		// 			publishedAt: '2021-07-30T09:43:55.180564Z',
		// 			title: 'Backbench Coder',
		// 			description:
		// 				"I don't have time to write a description about my channel, as I am still debugging the project I started in my 1st year of college.\nCheck out the home page to .....ohhhh! sorry bro , I think I found the bug, see you on Monday .\nLong Story Short, We Code 😪",
		// 			resourceId: {
		// 				kind: 'youtube#channel',
		// 				channelId: 'UClW8d1f5m0QAE_Ig024EP6A',
		// 			},
		// 			channelId: 'UCducnioyVqpGEgz-sEAd6Sw',
		// 			thumbnails: {
		// 				default: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s88-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				medium: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s240-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				high: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLSQnPeUQ9rFmkq9oOvnO--vHir9MuJ1SBWWJFx-=s800-c-k-c0x00ffffff-no-rj',
		// 				},
		// 			},
		// 		},
		// 		contentDetails: {
		// 			totalItemCount: 99,
		// 			newItemCount: 0,
		// 			activityType: 'all',
		// 		},
		// 	},
		// 	{
		// 		kind: 'youtube#subscription',
		// 		etag: 'jRnZjfoBCPugVXGNWM-W72ikM84',
		// 		id: '9hdUHxMSPqaLpfUnLbGB6Od7rfL4l1cLy_AI-QLjlE4',
		// 		snippet: {
		// 			publishedAt: '2021-06-17T13:59:51.619973Z',
		// 			title: 'Thuy Nga',
		// 			description:
		// 				"Thuy Nga Paris By Night Official Site\nThuy Nga is the number one recording company, providing state-of-the art music videos performed by the top Vietnamese artists. The company has been producing\nmusic and concerts under the Thuy Nga and Paris by Night tradenames since the early 1980's.\nVisit us at https://www.thuynga.com\n\nFOLLOW THUY NGA PARIS BY NIGHT:\n☞ Facebook: https://www.facebook.com/ThuyNgaPBN/\n☞ Instagram: https://www.instagram.com/thuynga_official/\n☞ Thuy Nga Youtube: http://channel.thuynga.online/ThuyNgaParisByNight\n☞ Hài Official: http://channel.thuynga.online/haiofficial \n☞ Thuy Nga Karaoke: http://channel.thuynga.online/ThuyNgaKaraoke\n☞ Thuy nga Radio: http://channel.thuynga.online/ThuyNgaRadio\n☞ MC Nguyễn Ngọc Ngạn Youtube: http://channel.thuynga.online/NguyenNgocNganOfficial\n☞ Website: http://www.thuyngashop.com\n☞ Website mua hàng tại Việt Nam: http://www.thuynga.online",
		// 			resourceId: {
		// 				kind: 'youtube#channel',
		// 				channelId: 'UC7nMrW3baKp0dA5Tz9ulVYQ',
		// 			},
		// 			channelId: 'UCducnioyVqpGEgz-sEAd6Sw',
		// 			thumbnails: {
		// 				default: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLRAQiqaCWFi_vS2U0SeXlVhrJKJ0SsFcVCXeYMY=s88-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				medium: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLRAQiqaCWFi_vS2U0SeXlVhrJKJ0SsFcVCXeYMY=s240-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				high: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLRAQiqaCWFi_vS2U0SeXlVhrJKJ0SsFcVCXeYMY=s800-c-k-c0x00ffffff-no-rj',
		// 				},
		// 			},
		// 		},
		// 		contentDetails: {
		// 			totalItemCount: 3318,
		// 			newItemCount: 1,
		// 			activityType: 'all',
		// 		},
		// 	},
		// 	{
		// 		kind: 'youtube#subscription',
		// 		etag: 'tP6MX7pNa1H1cO-CLUR0b9BrS7s',
		// 		id: '9hdUHxMSPqbpTf97YbQ_My2_RDQuQqo8UoOAVzEsIU4',
		// 		snippet: {
		// 			publishedAt: '2019-10-03T12:21:59.229059Z',
		// 			title: 'Cảm Bóng Đá',
		// 			description:
		// 				'Cập nhật những thông tin bóng đá mới nhất, những video phân tích, Show bóng đá hay trên kênh Youtube chính thức của CẢM BÓNG ĐÁ.\n\n👉Ủng hộ bọn mình tại:\nhttps://playerduo.com/cambongda\nhttps://vrdonate.vn/cambongda\n.............\n📣 Đừng quên Subscribe Cảm trên những kênh khác qua:\nhttps://fafc.me/Cambongda\n----\nLiên hệ quảng cáo:\n►Email: cambongda@gmail.com\n►ĐT: 097.1451.723',
		// 			resourceId: {
		// 				kind: 'youtube#channel',
		// 				channelId: 'UCtowbSVJlDLjgs-5qsznSTA',
		// 			},
		// 			channelId: 'UCducnioyVqpGEgz-sEAd6Sw',
		// 			thumbnails: {
		// 				default: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLTdZ08iRneywEBz052YrEcr_Y2TpPheiHc-clX_=s88-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				medium: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLTdZ08iRneywEBz052YrEcr_Y2TpPheiHc-clX_=s240-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				high: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLTdZ08iRneywEBz052YrEcr_Y2TpPheiHc-clX_=s800-c-k-c0x00ffffff-no-rj',
		// 				},
		// 			},
		// 		},
		// 		contentDetails: {
		// 			totalItemCount: 2857,
		// 			newItemCount: 1,
		// 			activityType: 'all',
		// 		},
		// 	},
		// 	{
		// 		kind: 'youtube#subscription',
		// 		etag: 'jDfjBnsXoVDq2f0pieoyHPH-_Pw',
		// 		id: '9hdUHxMSPqbfB75f3yDnpaJdPw0IechRz3g-rlxp4h4',
		// 		snippet: {
		// 			publishedAt: '2021-04-14T08:36:43.434856Z',
		// 			title: 'Lama Dev',
		// 			description:
		// 				'Web development tutorials for everyone. Learn JavaScript, React.js, Node.js, and find inspiration for HTML, CSS, and web design with Lama and become a web developer.\n\nSocial Media:\nFacebook: https://www.facebook.com/groups/lamadev\nInstagram: https://www.instagram.com/lamawebdev\nDiscord: https://discord.gg/yKremu4mPr\nTwitter: https://twitter.com/lamaWebDev\n\nContact:\ncontact@lama.dev',
		// 			resourceId: {
		// 				kind: 'youtube#channel',
		// 				channelId: 'UCOxWrX5MIdXIeRNaXC3sqIg',
		// 			},
		// 			channelId: 'UCducnioyVqpGEgz-sEAd6Sw',
		// 			thumbnails: {
		// 				default: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s88-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				medium: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s240-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				high: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLR-TP_Uc-gh9UWENj1CsWNVyxDRwCikaVARVwhY=s800-c-k-c0x00ffffff-no-rj',
		// 				},
		// 			},
		// 		},
		// 		contentDetails: {
		// 			totalItemCount: 23,
		// 			newItemCount: 1,
		// 			activityType: 'all',
		// 		},
		// 	},
		// 	{
		// 		kind: 'youtube#subscription',
		// 		etag: 'org7GIrnGDXSIbeTKc7aftewk3E',
		// 		id: '9hdUHxMSPqbfB75f3yDnpR4Iz6qww7xHN6mUtRRFmdE',
		// 		snippet: {
		// 			publishedAt: '2020-11-29T10:37:16.553353Z',
		// 			title: 'Bedimcode',
		// 			description:
		// 				"Hi, I am a freelance web developer passionate about creating and designing beautiful desktop and mobile web interfaces developed in HTML CSS & JavaScript.  It's a pleasure to have you here. SUBSCRIBE, and see you in a next video.",
		// 			resourceId: {
		// 				kind: 'youtube#channel',
		// 				channelId: 'UCgkDs77BoEhMIgRUB4MKrtQ',
		// 			},
		// 			channelId: 'UCducnioyVqpGEgz-sEAd6Sw',
		// 			thumbnails: {
		// 				default: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLRezmgExu34nzZO8ZP81FQ--l38oD1ri4D_FfYS=s88-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				medium: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLRezmgExu34nzZO8ZP81FQ--l38oD1ri4D_FfYS=s240-c-k-c0x00ffffff-no-rj',
		// 				},
		// 				high: {
		// 					url: 'https://yt3.ggpht.com/ytc/AKedOLRezmgExu34nzZO8ZP81FQ--l38oD1ri4D_FfYS=s800-c-k-c0x00ffffff-no-rj',
		// 				},
		// 			},
		// 		},
		// 		contentDetails: {
		// 			totalItemCount: 40,
		// 			newItemCount: 0,
		// 			activityType: 'all',
		// 		},
		// 	},
		// ],
	},
	action,
) => {
	switch (action.type) {
		case SUBSCRIPTION_CHANNEL_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case SUBSCRIPTION_CHANNEL_SUCCESS: {
			return {
				...state,
				videos: action.payload,
				loading: false,
			};
		}
		case SUBSCRIPTION_CHANNEL_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export const channelVideosReducer = (
	state = {
		loading: true,
		videos: [],
	},
	action,
) => {
	switch (action.type) {
		case VIDEO_CHANNEL_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case VIDEO_CHANNEL_SUCCESS: {
			return {
				...state,
				videos: action.payload,
				loading: false,
			};
		}
		case VIDEO_CHANNEL_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default:
			return state;
	}
};

export const videoLikedReducer = (
	state = {
		loading: true,
		videos: [],
		nextPageToken: null,
	},
	action,
) => {
	switch (action.type) {
		case LIKED_VIDEOS_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case LIKED_VIDEOS_SUCCESS: {
			return {
				...state,
				videos: [...state.videos, ...action.payload.videos],
				nextPageToken: action.payload.nextPageToken,
				loading: false,
			};
		}
		case LIKED_VIDEOS_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
