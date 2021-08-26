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
	videosFaked: [
		{
			kind: 'youtube#video',
			etag: 'qTw-og15WjIuWt8X0wB5otpU1nU',
			id: 'KG_4a1Ds9AQ',
			snippet: {
				publishedAt: '2021-08-19T11:00:13Z',
				channelId: 'UCaXPyn1WCz3YNE_hCOOAoFA',
				title: 'Official MV|Bài Ca Gút Chóp|Sinh Nhật Free Fire 2808 với@Lê Bống @Mèo Sao Hoả@Cô Ngân Tv@Mister Vit',
				description:
					'Quẩy banh nóc cùng @Lê Bống @Mèo Sao Hoả @Cô Ngân Tv @Mèo Simmy @Mister Vit @Rikaki Gaming @GAO BẠC TV @Phong Cận Tv @Sammy Đào trong MV sinh nhật Free Fire\n\nBÀI CA GÚT CHÓP chính thức lên sóng 🔥🔥🔥 Anh em cùng cày view để hốt ngay siêu phẩm Hộp Gút Chóp đỉnh cao của sự kiện sinh nhật lần này nhé ✨\n\n#SinhNhatFreeFire2808#FreeFire #SốngDaiThànhHuyềnThoại\n-----\nInstagram: https://www.instagram.com/freefirevnofficial/\nTiktok: https://www.tiktok.com/@freefirevnofficial\nFanpage: https://www.facebook.com/freefirevn\nTrang chủ: https://ff.garena.vn\nGroup thảo luận: goo.gl/t4Cuxi',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/KG_4a1Ds9AQ/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/KG_4a1Ds9AQ/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/KG_4a1Ds9AQ/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/KG_4a1Ds9AQ/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/KG_4a1Ds9AQ/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Garena Free Fire Vietnam',
				tags: [
					'free fire garena',
					'garena free fire',
					'free fire',
					'ff',
					'free fire video',
					'garena free fire vietnam',
					'tik tok free fire',
					'sinhnhatfreefire2808',
					'freefire sinh nhat',
					'simmy',
					'meo simmy',
					'mister vịt',
					'congan tv',
					'co ngan free fire',
					'gao bac free fire',
					'gao bạc tv',
					'rikaki gaming',
					'phong cận ff',
					'hr phong can',
					'lê bống tiktok',
					'mèo sao hỏa tiktok',
					'bài ca gút chóp',
					'officialmv',
					'freefire mv',
					'sammy',
					'sammy dao',
					'hr sammy',
					'hrmistervit',
					'hrmeosimmy',
					'lebongxmeosaohoa',
					'sinh nhat free fire',
					'gbtv',
				],
				categoryId: '20',
				liveBroadcastContent: 'none',
				defaultLanguage: 'vi',
				localized: {
					title: 'Official MV|Bài Ca Gút Chóp|Sinh Nhật Free Fire 2808 với@Lê Bống @Mèo Sao Hoả@Cô Ngân Tv@Mister Vit',
					description:
						'Quẩy banh nóc cùng @Lê Bống @Mèo Sao Hoả @Cô Ngân Tv @Mèo Simmy @Mister Vit @Rikaki Gaming @GAO BẠC TV @Phong Cận Tv @Sammy Đào trong MV sinh nhật Free Fire\n\nBÀI CA GÚT CHÓP chính thức lên sóng 🔥🔥🔥 Anh em cùng cày view để hốt ngay siêu phẩm Hộp Gút Chóp đỉnh cao của sự kiện sinh nhật lần này nhé ✨\n\n#SinhNhatFreeFire2808#FreeFire #SốngDaiThànhHuyềnThoại\n-----\nInstagram: https://www.instagram.com/freefirevnofficial/\nTiktok: https://www.tiktok.com/@freefirevnofficial\nFanpage: https://www.facebook.com/freefirevn\nTrang chủ: https://ff.garena.vn\nGroup thảo luận: goo.gl/t4Cuxi',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT3M47S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '7604721',
				likeCount: '154942',
				dislikeCount: '127336',
				favoriteCount: '0',
				commentCount: '48829',
			},
		},
		{
			kind: 'youtube#video',
			etag: '5-1GRaxrVfpRpb1XCqUF83Fc1eo',
			id: 'ZXHka6ToRfg',
			snippet: {
				publishedAt: '2021-08-24T08:50:08Z',
				channelId: 'UCmBT5CqUxf3-K5_IU9tVtBg',
				title: 'Phó Tổng thống Mỹ đáp máy bay xuống Hà Nội, bắt đầu chuyến thăm chính thức Việt Nam - VNEWS',
				description:
					'VNEWS - Kết thúc chuyến thăm 3 ngày tại Singapore, chiều nay ngày 24/8, Phó Tổng thống Mỹ Kamala Harris sẽ đáp máy bay tới Việt Nam trong khuôn khổ chuyến công du châu Á chính thức đầu tiên. Đây cũng là lần đầu tiên một Phó Tổng thống Mỹ tới thăm Việt Nam.\n\n⛔️ Mời xem thêm: CỰC NÓNG: Taliban tuyên bố đã CHIẾM LẠI 3 huyện từ lực lượng kháng chiến Afghanistan 👉https://youtu.be/0eoG0zhvrDo\n\n🔔Đăng ký xem tin mới nhất: https://bit.ly/SubVnews\n\n© Bản quyền thuộc Truyền hình Thông tấn (VNEWS)\n© Website chính thức: https://vnews.gov.vn/\n© Fanpage chính thức: https://www.facebook.com/vnews.gov.vn/\n\n✅Mọi vấn đề về bản quyền liên hệ: copyright@5gmedia.vn\n✅Kênh được vận hành bởi 5G Network\n✅Cảm ơn các bạn đã ghé thăm kênh và xem video!\n\n#phótổngthốngmỹthămviệtnam #phótổngthốngmỹ #kamalaharris #mỹ #vnews #truyềnhìnhthôngtấn #tintức #tinthếgiới',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/ZXHka6ToRfg/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/ZXHka6ToRfg/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/ZXHka6ToRfg/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/ZXHka6ToRfg/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/ZXHka6ToRfg/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'VNEWS - TRUYỀN HÌNH THÔNG TẤN',
				tags: [
					'lễ đón phó tổng thống mỹ',
					'phó tổng thống mỹ thăm việt nam',
					'phó tổng thống mỹ kamala harris',
					'phó tổng thống mỹ',
					'mỹ',
					'việt nam hoa kỳ',
					'quan hệ việt nam hoa kỳ',
					'quan hệ hữu nghị việt nam hoa kỳ',
					'việt mỹ',
					'mỹ thăm việt nam',
					'kamala harris thăm việt nam',
					'bộ trưởng quốc phòng mỹ thăm việt nam',
					'bộ trưởng quốc phòng mỹ',
					'tin thế giới',
					'taliban',
					'kamala harris',
					'afghanistan',
					'pho tong thong my',
					'phó tổng thống mỹ sang thăm việt nam',
					'harris',
					'vnews',
					'tin tức',
					'tin vnews',
					'truyền hình thông tấn',
					'ttxvn',
				],
				categoryId: '25',
				liveBroadcastContent: 'none',
				defaultLanguage: 'vi',
				localized: {
					title: 'Phó Tổng thống Mỹ đáp máy bay xuống Hà Nội, bắt đầu chuyến thăm chính thức Việt Nam - VNEWS',
					description:
						'VNEWS - Kết thúc chuyến thăm 3 ngày tại Singapore, chiều nay ngày 24/8, Phó Tổng thống Mỹ Kamala Harris sẽ đáp máy bay tới Việt Nam trong khuôn khổ chuyến công du châu Á chính thức đầu tiên. Đây cũng là lần đầu tiên một Phó Tổng thống Mỹ tới thăm Việt Nam.\n\n⛔️ Mời xem thêm: CỰC NÓNG: Taliban tuyên bố đã CHIẾM LẠI 3 huyện từ lực lượng kháng chiến Afghanistan 👉https://youtu.be/0eoG0zhvrDo\n\n🔔Đăng ký xem tin mới nhất: https://bit.ly/SubVnews\n\n© Bản quyền thuộc Truyền hình Thông tấn (VNEWS)\n© Website chính thức: https://vnews.gov.vn/\n© Fanpage chính thức: https://www.facebook.com/vnews.gov.vn/\n\n✅Mọi vấn đề về bản quyền liên hệ: copyright@5gmedia.vn\n✅Kênh được vận hành bởi 5G Network\n✅Cảm ơn các bạn đã ghé thăm kênh và xem video!\n\n#phótổngthốngmỹthămviệtnam #phótổngthốngmỹ #kamalaharris #mỹ #vnews #truyềnhìnhthôngtấn #tintức #tinthếgiới',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT7M52S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '672441',
				likeCount: '4112',
				dislikeCount: '516',
				favoriteCount: '0',
				commentCount: '440',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'N-KjhLYyXXvyVlUe5vmNpJ7oqhk',
			id: '2J3gyWA8NjM',
			snippet: {
				publishedAt: '2021-08-18T12:59:57Z',
				channelId: 'UC7E8Pnn_Dt9SVpVsE7LDnfw',
				title: 'Thứ Mà Lũ Bạn Làm Khi Tui Bị Cận || Yến Nồi Cơm Điện #Shorts',
				description:
					'Thứ Mà Lũ Bạn Làm Khi Tui Bị Cận || Yến Nồi Cơm Điện #Shorts\n#yennoicomdien #yenncđ #yenthichreview\n\nMọi người ơi ! ủng hộ và đăng kí giúp Yến mau sớm đạt 200k subscribe với ạ để Yến có thêm nhiều động lực làm các video hay hơn !! cảm ơn mọi người !\n\nFollow Yến nha ...\nYoutube Yến Nồi Cơm Điện: https://metub.net/yenvalapnguyen.\nYoutube Yến Thích Review:\nhttps://www.youtube.com/channel/UCGJHY8Q9TMIfIlprV32cNXQ/featured\nTiktok Yến Nồi Cơm Điện: https://www.tiktok.com/@yennoicomdien?\nTiktok Yến Thích Review: https://www.tiktok.com/@yenncd_review?lang=vi-VN\nFacebook:https://www.facebook.com/NBHY17982001\nGia Đình Yến Nồi Cơm Điện 🤡 https://www.facebook.com/groups/1108852636190392/?ref=share\nInstagram: https://instagram.com/yennaki_?igshid=15vvsrb9ij5f6\n\nLiên Hệ Hợp Tác: yen09082001@gmail.com\n** Nếu có bất kì vấn đề nào liên quan đến bản quyền, vui lòng gửi mình email phía trên để mình cùng nhau thống nhất cách giải quyết. Cảm ơn sự hợp tác từ bạn !!\n© Bản quyền thuộc về Yến Nồi Cơm Điện\n© Copyright Yến Nồi Cơm Điện & Do not Reup',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/2J3gyWA8NjM/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/2J3gyWA8NjM/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/2J3gyWA8NjM/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/2J3gyWA8NjM/sddefault.jpg',
						width: 640,
						height: 480,
					},
				},
				channelTitle: 'Yến Nồi Cơm Điện',
				tags: [
					'thứ mà lũ bạn làm khi tui bị cận yến nồi cơm điện',
					'thu ma lu ban lam khi tui bi can yen noi com dien',
					'yến nồi cơm điện',
					'yen noi com dien',
					'yến ncđ',
					'yen ncd',
					'yến ncđ shorts',
					'shorts',
					'short',
					'yến thích review',
					'yen thich review',
					'chuyện không của riêng ai sau khi thi',
					'lần đầu làm cứu hộ mà gặp ca khó ghê',
					'tui và đứa bạn trong phòng thi',
					'genz làm y tá và cái kết',
					'đỉnh cao của sự nhầm lẫn',
					'lập nguyên',
					'lập nguyên ft yến nồi cơm điện',
					'hôm nay là 1 ngày đặc biệt',
					'genz ở trên tàu titanic',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Thứ Mà Lũ Bạn Làm Khi Tui Bị Cận || Yến Nồi Cơm Điện #Shorts',
					description:
						'Thứ Mà Lũ Bạn Làm Khi Tui Bị Cận || Yến Nồi Cơm Điện #Shorts\n#yennoicomdien #yenncđ #yenthichreview\n\nMọi người ơi ! ủng hộ và đăng kí giúp Yến mau sớm đạt 200k subscribe với ạ để Yến có thêm nhiều động lực làm các video hay hơn !! cảm ơn mọi người !\n\nFollow Yến nha ...\nYoutube Yến Nồi Cơm Điện: https://metub.net/yenvalapnguyen.\nYoutube Yến Thích Review:\nhttps://www.youtube.com/channel/UCGJHY8Q9TMIfIlprV32cNXQ/featured\nTiktok Yến Nồi Cơm Điện: https://www.tiktok.com/@yennoicomdien?\nTiktok Yến Thích Review: https://www.tiktok.com/@yenncd_review?lang=vi-VN\nFacebook:https://www.facebook.com/NBHY17982001\nGia Đình Yến Nồi Cơm Điện 🤡 https://www.facebook.com/groups/1108852636190392/?ref=share\nInstagram: https://instagram.com/yennaki_?igshid=15vvsrb9ij5f6\n\nLiên Hệ Hợp Tác: yen09082001@gmail.com\n** Nếu có bất kì vấn đề nào liên quan đến bản quyền, vui lòng gửi mình email phía trên để mình cùng nhau thống nhất cách giải quyết. Cảm ơn sự hợp tác từ bạn !!\n© Bản quyền thuộc về Yến Nồi Cơm Điện\n© Copyright Yến Nồi Cơm Điện & Do not Reup',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT40S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '3131117',
				likeCount: '166171',
				dislikeCount: '6658',
				favoriteCount: '0',
				commentCount: '793',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'Xtxn5h7_8d4XEbgwyUjmxzzmfqw',
			id: 'rYpBsDUzmpE',
			snippet: {
				publishedAt: '2021-08-23T02:00:12Z',
				channelId: 'UCvWlw9Z68ZkFBj5K_HdFFRQ',
				title: 'Team Tony Lần Đầu Đi Xem Bói & Cái Kết',
				description:
					'Team Tony Lần Đầu Đi Xem Bói & Cái Kết\n#Tony #TonyTV #TonyTeam\n------------\nNHẬN HỢP TÁC QUẢNG CÁO - VUI LÒNG LIÊN HỆ: \n✉️ Email: phucvinh.pelc@gmail.com\n-------------------/-----------------------------------------\n* I really respect creators so If you have any wonders related to the COPYRIGHT, please send email to me, we will find out the suitable solution. Thanks so much for your co-operation.\n** Tôi luôn tôn trọng người làm video nên nếu bạn có bất kì vấn đề nào liên quan đến bản quyền, vui lòng gửi mình 1 email để mình cùng nhau thống nhất cách giải quyết. Cảm ơn sự hợp tác từ bạn!!!\n-------------------/-----------------------------------------\n© Bản quyền thuộc về Team Tony\n© Copyright By Team Tony & Do not Reup\n♫ MUSIC RESOURCE - Nguồn âm thanh',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/rYpBsDUzmpE/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/rYpBsDUzmpE/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/rYpBsDUzmpE/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/rYpBsDUzmpE/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/rYpBsDUzmpE/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Team Tony',
				tags: [
					'team tony',
					'tony tv',
					'anh tony',
					'tony tv xem bói',
					'team tony đi xem bói',
					'xem bói',
					'bói gương mặt',
					'bói nốt ruồi',
					'anh Vinh xem bói',
					'team tony đi lãnh tiền',
					'team tony tv',
					'team trẻ trâu tony',
					'xem bói',
					'đi xem bói',
					'coi bói',
					'Xem Bói & Cái Kết',
					'lần đầu đi xem bói',
					'lan dau di xem boi',
					'xem tuong',
					'bói toán',
					'tử vi',
					'tử vi bói toán',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Team Tony Lần Đầu Đi Xem Bói & Cái Kết',
					description:
						'Team Tony Lần Đầu Đi Xem Bói & Cái Kết\n#Tony #TonyTV #TonyTeam\n------------\nNHẬN HỢP TÁC QUẢNG CÁO - VUI LÒNG LIÊN HỆ: \n✉️ Email: phucvinh.pelc@gmail.com\n-------------------/-----------------------------------------\n* I really respect creators so If you have any wonders related to the COPYRIGHT, please send email to me, we will find out the suitable solution. Thanks so much for your co-operation.\n** Tôi luôn tôn trọng người làm video nên nếu bạn có bất kì vấn đề nào liên quan đến bản quyền, vui lòng gửi mình 1 email để mình cùng nhau thống nhất cách giải quyết. Cảm ơn sự hợp tác từ bạn!!!\n-------------------/-----------------------------------------\n© Bản quyền thuộc về Team Tony\n© Copyright By Team Tony & Do not Reup\n♫ MUSIC RESOURCE - Nguồn âm thanh',
				},
			},
			contentDetails: {
				duration: 'PT9M2S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2064361',
				likeCount: '35548',
				dislikeCount: '2045',
				favoriteCount: '0',
				commentCount: '1655',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'pJLGcFCel3FwVOoX0w0nhtcsYWE',
			id: '06HBdNoLkd4',
			snippet: {
				publishedAt: '2021-08-21T12:00:09Z',
				channelId: 'UCdA70ov8F4NBaz8I6wWeOTQ',
				title: 'REVIEW PHIM NHÍM SONIC || SONIC THE HEDGEHOG || SAKURA REVIEW',
				description:
					'Chào mừng các bạn đến với kênh SAKURA REVIEW mình sẽ đăng video review phim hay mỗi ngày để các bạn xem nhé, nhớ đăng ký để được xem sớm nhất nhé.!\n\nREVIEW PHIM NHÍM SONIC || SONIC THE HEDGEHOG || SAKURA REVIEW\n\nSonic là một chú nhím hình người màu xanh, ngay từ khi nhỏ cậu đã có sức mạnh với tốc độ rất nhanh và đươc chị Móng Dài nuôi cậu. Nhưng vì có kẻ muốn cướp Sonic, nên cô đã cố gắng nhưng bị trúng đạn vào cánh của bọn chúng. Cô vẫn còn một lối thoát bằng cách sử dụng chiếc vòng và đưa vòng cho Sonic, cô hi sinh vì Sonic nên cô đã cho nó thoát. 10 năm sau, cảnh sát trưởng Tom đi tuần tra về tốc độ, anh giật mình chỉ là con rùa đang đi trên với 1 km. Nhưng sau bắt đầu sự kì là 296 km, anh không biết chính xác là gì, rồi nó lại 300 km, thấy lạ anh xuống xe nhặt được lông nhím và quay lại nhiệm vụ. Đúng lúc đó, chiếc xe tải gần đến với con rùa, nhưng cuối cùng được Sonic cứu, anh muốn rùa thưởng thức tốc độ của cậu, đến khu rừng, cậu sống ở dưới khu rừng, khi cậu làm rơi đống vòng vàng cậu vẫn nhớ lại sẽ quay lại thế giới của cậu, nhưng vì cậu ghét nấm nên cậu không đi.\n\nLINK FANPAGE: https://www.facebook.com/SakuraReview...\nTIKTOK: https://vt.tiktok.com/ZGJSM9yes/',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/06HBdNoLkd4/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/06HBdNoLkd4/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/06HBdNoLkd4/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/06HBdNoLkd4/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/06HBdNoLkd4/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'SAKURA REVIEW',
				tags: [
					'SAKURA REVIEW',
					'REVIEW',
					'PHIM',
					'NHÍM',
					'SONIC',
					'REVIEW PHIM',
					'NHÍM SONIC',
					'NHIM SONIC REVIEW',
					'SONIC THE HEDGEHOG REVIEW',
					'review phim',
					'reviewphimhay',
					'phimhay',
					'tóm tắt phim',
					'nhím sonic review',
					'nhim sonic',
					'review phim nhanh',
					'review phim hay',
					'hedgehog sonic',
					'review phim sonic',
				],
				categoryId: '1',
				liveBroadcastContent: 'none',
				localized: {
					title: 'REVIEW PHIM NHÍM SONIC || SONIC THE HEDGEHOG || SAKURA REVIEW',
					description:
						'Chào mừng các bạn đến với kênh SAKURA REVIEW mình sẽ đăng video review phim hay mỗi ngày để các bạn xem nhé, nhớ đăng ký để được xem sớm nhất nhé.!\n\nREVIEW PHIM NHÍM SONIC || SONIC THE HEDGEHOG || SAKURA REVIEW\n\nSonic là một chú nhím hình người màu xanh, ngay từ khi nhỏ cậu đã có sức mạnh với tốc độ rất nhanh và đươc chị Móng Dài nuôi cậu. Nhưng vì có kẻ muốn cướp Sonic, nên cô đã cố gắng nhưng bị trúng đạn vào cánh của bọn chúng. Cô vẫn còn một lối thoát bằng cách sử dụng chiếc vòng và đưa vòng cho Sonic, cô hi sinh vì Sonic nên cô đã cho nó thoát. 10 năm sau, cảnh sát trưởng Tom đi tuần tra về tốc độ, anh giật mình chỉ là con rùa đang đi trên với 1 km. Nhưng sau bắt đầu sự kì là 296 km, anh không biết chính xác là gì, rồi nó lại 300 km, thấy lạ anh xuống xe nhặt được lông nhím và quay lại nhiệm vụ. Đúng lúc đó, chiếc xe tải gần đến với con rùa, nhưng cuối cùng được Sonic cứu, anh muốn rùa thưởng thức tốc độ của cậu, đến khu rừng, cậu sống ở dưới khu rừng, khi cậu làm rơi đống vòng vàng cậu vẫn nhớ lại sẽ quay lại thế giới của cậu, nhưng vì cậu ghét nấm nên cậu không đi.\n\nLINK FANPAGE: https://www.facebook.com/SakuraReview...\nTIKTOK: https://vt.tiktok.com/ZGJSM9yes/',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT17M58S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2464308',
				likeCount: '13806',
				dislikeCount: '924',
				favoriteCount: '0',
				commentCount: '1488',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'ZrlbWN3Mk_erlnIFDa0BRTiPtOw',
			id: 'NIex9an97vc',
			snippet: {
				publishedAt: '2021-08-22T12:00:14Z',
				channelId: 'UC4uf1-QJkwH-9T5ejvncxIA',
				title: 'HERO GÚT CHÓP FREE FIRE - Hero Team I Official Music Video',
				description:
					'Quẩy banh nóc cùng @Mèo Simmy @Mister Vit  @Phong Cận Tv  @Sammy Đào  @Siro Official  @Kamui TV @Kairon TV  trong MV HERO GÚT CHÓP FREE FIRE mừng sinh nhật Free Fire.\n\nMV HERO GÚT CHÓP FREE FIRE chính thức lên sóng 🔥🔥🔥 Anh em cùng cày view để ủng hộ Hero Team ra thêm nhiều MV hơn nhé ✨\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nCảm ơn QT Beatz và anh em Hero Team\n\n▌CREDIT:\n• KOL: Mister Vịt, Phong Cận, Siro Official, Kairon TV, Mèo Simmy, Sammy Đào, Timmy TV, Kamui TV\n• Diễn Viên: Hero Team\n• Composer: Hero Team\n• Music Producer: QT Beatz Official\n• Mix/Mastering: QT Beatz Official\n• MV Editor: Hoàng Sơn\n• Designer: Quân Võ\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n➖ ĐĂNG KÍ CHO HERO TEAM ➖\n➡️ Siro Official: http://bit.ly/2ZvvrFq\u200b\u200b\n➡️ Phong Cận TV: https://bit.ly/2PzcVGQ\u200b\u200b\n➡️ Mèo Simmy: https://goo.gl/3Vt539\u200b\u200b\n➡️ Mister Vit: http://bit.ly/2wi7int\u200b\u200b\n➡️ KaironTV: https://bit.ly/2ATgGjL\u200b\u200b\n➡️ SammyTV: https://bit.ly/2HwhEqV\u200b\u200b\n➡️ Kamui TV: http://bit.ly/kamuitv\u200b\u200b\n➡️ Mimi TV: https://bit.ly/3xBmegn\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n• BÀI HÁT CHO PHÉP REACTION THOẢI MÁI SAU KHI RA MẮT, \n• NGHIÊM CẤM RE-UP DƯỚI MỌI HÌNH THỨC\n• HÃY GHI NGUYÊN BẢN DÒNG GHI CÔNG Ở DƯỚI VÀO PHẦN MÔ TẢ\n- Hero Gút Chóp Free Fire\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n🚫 Nếu có bất cứ thắc mắc, khiếu nại nào về bản quyền hình ảnh cũng như âm nhạc liên hệ trực tiếp với tôi qua địa chỉ email: contacts@heromedia.vn Xin cảm ơn !\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n#HeroGutChopFreeFire  #Heroteam #SinhNhatFreeFire2808 #MVHeroTeam',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/NIex9an97vc/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/NIex9an97vc/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/NIex9an97vc/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/NIex9an97vc/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/NIex9an97vc/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'HERO TEAM',
				tags: [
					'HERO GÚT CHÓP FREE FIRE',
					'HERO GÚT CHÓP',
					'mv hero team',
					'mv free fire hero team',
					'rap hero team',
					'hero team',
					'free fire',
					'free fire music video',
					'hero team gút chóp',
					'bài ca gút chóp',
					'bài ca gút chóp hero team',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'HERO GÚT CHÓP FREE FIRE - Hero Team I Official Music Video',
					description:
						'Quẩy banh nóc cùng @Mèo Simmy @Mister Vit  @Phong Cận Tv  @Sammy Đào  @Siro Official  @Kamui TV @Kairon TV  trong MV HERO GÚT CHÓP FREE FIRE mừng sinh nhật Free Fire.\n\nMV HERO GÚT CHÓP FREE FIRE chính thức lên sóng 🔥🔥🔥 Anh em cùng cày view để ủng hộ Hero Team ra thêm nhiều MV hơn nhé ✨\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\nCảm ơn QT Beatz và anh em Hero Team\n\n▌CREDIT:\n• KOL: Mister Vịt, Phong Cận, Siro Official, Kairon TV, Mèo Simmy, Sammy Đào, Timmy TV, Kamui TV\n• Diễn Viên: Hero Team\n• Composer: Hero Team\n• Music Producer: QT Beatz Official\n• Mix/Mastering: QT Beatz Official\n• MV Editor: Hoàng Sơn\n• Designer: Quân Võ\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n➖ ĐĂNG KÍ CHO HERO TEAM ➖\n➡️ Siro Official: http://bit.ly/2ZvvrFq\u200b\u200b\n➡️ Phong Cận TV: https://bit.ly/2PzcVGQ\u200b\u200b\n➡️ Mèo Simmy: https://goo.gl/3Vt539\u200b\u200b\n➡️ Mister Vit: http://bit.ly/2wi7int\u200b\u200b\n➡️ KaironTV: https://bit.ly/2ATgGjL\u200b\u200b\n➡️ SammyTV: https://bit.ly/2HwhEqV\u200b\u200b\n➡️ Kamui TV: http://bit.ly/kamuitv\u200b\u200b\n➡️ Mimi TV: https://bit.ly/3xBmegn\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n• BÀI HÁT CHO PHÉP REACTION THOẢI MÁI SAU KHI RA MẮT, \n• NGHIÊM CẤM RE-UP DƯỚI MỌI HÌNH THỨC\n• HÃY GHI NGUYÊN BẢN DÒNG GHI CÔNG Ở DƯỚI VÀO PHẦN MÔ TẢ\n- Hero Gút Chóp Free Fire\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n🚫 Nếu có bất cứ thắc mắc, khiếu nại nào về bản quyền hình ảnh cũng như âm nhạc liên hệ trực tiếp với tôi qua địa chỉ email: contacts@heromedia.vn Xin cảm ơn !\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n#HeroGutChopFreeFire  #Heroteam #SinhNhatFreeFire2808 #MVHeroTeam',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT3M11S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2029253',
				likeCount: '76193',
				dislikeCount: '5700',
				favoriteCount: '0',
				commentCount: '15109',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'wvFz2HEwkq54xYWbBv1qt5rvXXg',
			id: 'wssbBe_t-r4',
			snippet: {
				publishedAt: '2021-08-18T13:00:12Z',
				channelId: 'UCpg3O1quTzj7QpDHdhu6pNw',
				title: "Orange - 'Em Hát Ai Nghe' Official M/V",
				description:
					"Orange - 'Em Hát Ai Nghe' Official M/V\n\n#Orange #EmHatAiNghe #EHAN\n\nSáng tác: Trungg I.U\nThể hiện: Orange\nThu âm: SoundG Studio\nHòa âm phối khí: Phi Woài\nMixing & mastering: Duy Ngọc (The Wings) \nHát bè: Anh quản lý & Duy Ngọc (The Wings)\n\nToàn bộ quá trình ghi hình MV được thực hiện vào tháng 01/2021.\nOrange ra mắt MV thời điểm này như một món quà tinh thần giúp khán giả giải trí khi làm việc, học tập tại nhà. \n\nCảm ơn anh chị em trong êkip những người đứng sau hỗ trợ Orange cho sản phẩm này.\nCảm ơn quý đối tác DAO, ACV, Spotify, Believe, Tiktok, Đài Phát Thanh, Cổ Động, Mood, Trinnie, Vườn ánh sáng Lumiere đã đồng hành cùng dự án. \n\n► Follow Orange: \nInstagram: https://www.instagram.com/orange.97_/\nFacebook Fanpage: https://www.facebook.com/orangeoffici...\nTiktok: https://vt.tiktok.com/U21NrA/\nSpotify: https://spoti.fi/2I74vbS\nApple Music: https://apple.co/2GBG9qj\n\nLyrics: \nCỏ cây héo trong mơ màng \nCũng như em mà\nGiây phút em ngỡ ngàng\nHóa ra người chẳng từng thương lấy em \n(Trách ai đây chỉ biết trách mình)\n\nPhải thêm biết bao thất vọng\nĐể thôi hy vọng\nTrái tim người sẽ rung động \nLệ đắng \nDuyên tình đắng \n(Phí thanh xuân u hoài) \n\nTrời mang khúc ca đau buồn\nTrút ngàn sầu muộn\nLâu rất lâu chưa tạnh.\nHoa chưa tàn nhưng gió nỡ nào cuốn đi…\n\nĐơn côi cô quạnh mình em với em\nBầu trời trót kéo mây đen \nĐứng trên niềm riêng em rối bời\nChỉ thể cất lời xót thương. \n\nChorus:\nLời em hát ai nghe liệu thấu chăng trong lòng những  \nNhững nhớ thương em dành hết, sao người chẳng thấy, chẳng tin?\nNày em ơi đừng nghĩ suy thêm nhiều khổ tâm \nĐừng để gió gieo vào đêm lạnh căm\nKhóc đi đừng ngần ngại mưa rơi\nỦi an cõi lòng tả tơi.\n\nBridge:\nCuộc đời đành đoạn để duyên kiếp em lỡ làng…\nEm ơi dù rằng đường tình không đưa em tới nơi em mong đợi\nThì đừng lo…hoa ban sẽ nở sau cơn mưa mù…\n\n\n© Bản quyền thuộc về Ca sỹ Orange\n© 2021 Orange Singer. All rights reserved.",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/wssbBe_t-r4/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/wssbBe_t-r4/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/wssbBe_t-r4/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/wssbBe_t-r4/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/wssbBe_t-r4/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Orange Singer Official',
				tags: [
					'orange',
					'cam',
					'cam hat ai nghe',
					'orange live',
					'orange cover',
					'orange mv',
					'em hát ai nghe',
					'ehan',
					'orange em hát ai nghe',
					'orange ehan',
					'em hát ai nghe mv',
					'em hát ai nghe lyrics',
					'em hát ai nghe karaoke',
					'em hát ai nghe cover',
					'em hát ai nghe live',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: "Orange - 'Em Hát Ai Nghe' Official M/V",
					description:
						"Orange - 'Em Hát Ai Nghe' Official M/V\n\n#Orange #EmHatAiNghe #EHAN\n\nSáng tác: Trungg I.U\nThể hiện: Orange\nThu âm: SoundG Studio\nHòa âm phối khí: Phi Woài\nMixing & mastering: Duy Ngọc (The Wings) \nHát bè: Anh quản lý & Duy Ngọc (The Wings)\n\nToàn bộ quá trình ghi hình MV được thực hiện vào tháng 01/2021.\nOrange ra mắt MV thời điểm này như một món quà tinh thần giúp khán giả giải trí khi làm việc, học tập tại nhà. \n\nCảm ơn anh chị em trong êkip những người đứng sau hỗ trợ Orange cho sản phẩm này.\nCảm ơn quý đối tác DAO, ACV, Spotify, Believe, Tiktok, Đài Phát Thanh, Cổ Động, Mood, Trinnie, Vườn ánh sáng Lumiere đã đồng hành cùng dự án. \n\n► Follow Orange: \nInstagram: https://www.instagram.com/orange.97_/\nFacebook Fanpage: https://www.facebook.com/orangeoffici...\nTiktok: https://vt.tiktok.com/U21NrA/\nSpotify: https://spoti.fi/2I74vbS\nApple Music: https://apple.co/2GBG9qj\n\nLyrics: \nCỏ cây héo trong mơ màng \nCũng như em mà\nGiây phút em ngỡ ngàng\nHóa ra người chẳng từng thương lấy em \n(Trách ai đây chỉ biết trách mình)\n\nPhải thêm biết bao thất vọng\nĐể thôi hy vọng\nTrái tim người sẽ rung động \nLệ đắng \nDuyên tình đắng \n(Phí thanh xuân u hoài) \n\nTrời mang khúc ca đau buồn\nTrút ngàn sầu muộn\nLâu rất lâu chưa tạnh.\nHoa chưa tàn nhưng gió nỡ nào cuốn đi…\n\nĐơn côi cô quạnh mình em với em\nBầu trời trót kéo mây đen \nĐứng trên niềm riêng em rối bời\nChỉ thể cất lời xót thương. \n\nChorus:\nLời em hát ai nghe liệu thấu chăng trong lòng những  \nNhững nhớ thương em dành hết, sao người chẳng thấy, chẳng tin?\nNày em ơi đừng nghĩ suy thêm nhiều khổ tâm \nĐừng để gió gieo vào đêm lạnh căm\nKhóc đi đừng ngần ngại mưa rơi\nỦi an cõi lòng tả tơi.\n\nBridge:\nCuộc đời đành đoạn để duyên kiếp em lỡ làng…\nEm ơi dù rằng đường tình không đưa em tới nơi em mong đợi\nThì đừng lo…hoa ban sẽ nở sau cơn mưa mù…\n\n\n© Bản quyền thuộc về Ca sỹ Orange\n© 2021 Orange Singer. All rights reserved.",
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT5M32S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '3316220',
				likeCount: '88944',
				dislikeCount: '1006',
				favoriteCount: '0',
				commentCount: '4780',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'ktvn4Ss5gn2nZw8DSiGRW-BmkPI',
			id: 'Jk38OqdAQxc',
			snippet: {
				publishedAt: '2021-08-07T15:30:11Z',
				channelId: 'UCA_23dkEYToAc37hjSsCnXA',
				title: 'ĐỘ TỘC 2 | FROM MIXI WITH LOVE - MASEW x PHÚC DU x PHÁO x ĐỘ MIXI [OFFICIAL MV LYRIC]',
				description:
					'ĐỘ TỘC 2 | FROM MIXI WITH LOVE - MASEW x PHÚC DU x PHÁO x ĐỘ MIXI [OFFICIAL MV LYRIC]\n#mixigaming #dotoc2 \n\nChào cả nhà.\n\nBài hát này làm từ tháng 4/2020 nên giờ có thể nghe ko hợp tai lắm, mà để lâu quá rồi cũng thấy có lỗi nên mong anh em đón nhận và thông cảm.\n\nCám ơn Masew, Phúc Du, Pháo, Cường, QNT đã giúp anh hoàn thành bài hát này.\nThu âm, mix & master: Đinh Văn Huy (HD studio).\n\nKỷ niệm 1 năm chuyển nhà mới với bài Độ Tộc mới.\nChúc cả nhà nghe nhạc vui vẻ ^^\nNghe và download bản MP3 tại đây: https://mmusic.lsnto.me/DoToc2',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/Jk38OqdAQxc/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/Jk38OqdAQxc/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/Jk38OqdAQxc/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/Jk38OqdAQxc/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/Jk38OqdAQxc/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'MixiGaming',
				tags: [
					'Mixigaming',
					'Mixi',
					'Độ Tày',
					'Streamer Mixigaming',
					'do toc',
					'toc ca',
					'độ tộc',
					'tộc ca',
					'độ tộc 2',
					'from mixi with love',
					'pháo',
					'pháo northside',
					'phúc du',
					'masew',
					'reaction độ tộc',
					'reaction độ tộc 2',
					'reaction độ tộc 1',
					'reaction tộc ca',
					'độ tộc 2 mv',
					'mv lyrics',
					'độ tộc 2 pháo',
					'độ tộc 2 masew',
					'độ tộc 2 phúc du',
					'from mixi with love độ tộc 2',
					'độ tộc 2 độ mixi',
					'độ mixi rap',
					'độ mixi rap độ tộc 2',
					'độ tộc mv',
					'độ tộc 2 lyrics',
					'độ tộc 2 reaction',
					'mixi',
					'phúc du độ mixi',
					'do toc 2',
					'độ mixi mv',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'ĐỘ TỘC 2 | FROM MIXI WITH LOVE - MASEW x PHÚC DU x PHÁO x ĐỘ MIXI [OFFICIAL MV LYRIC]',
					description:
						'ĐỘ TỘC 2 | FROM MIXI WITH LOVE - MASEW x PHÚC DU x PHÁO x ĐỘ MIXI [OFFICIAL MV LYRIC]\n#mixigaming #dotoc2 \n\nChào cả nhà.\n\nBài hát này làm từ tháng 4/2020 nên giờ có thể nghe ko hợp tai lắm, mà để lâu quá rồi cũng thấy có lỗi nên mong anh em đón nhận và thông cảm.\n\nCám ơn Masew, Phúc Du, Pháo, Cường, QNT đã giúp anh hoàn thành bài hát này.\nThu âm, mix & master: Đinh Văn Huy (HD studio).\n\nKỷ niệm 1 năm chuyển nhà mới với bài Độ Tộc mới.\nChúc cả nhà nghe nhạc vui vẻ ^^\nNghe và download bản MP3 tại đây: https://mmusic.lsnto.me/DoToc2',
				},
				defaultAudioLanguage: 'en',
			},
			contentDetails: {
				duration: 'PT3M31S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '21407898',
				likeCount: '1080205',
				dislikeCount: '9035',
				favoriteCount: '0',
				commentCount: '104450',
			},
		},
		{
			kind: 'youtube#video',
			etag: '-Td9lHil7EXNxmmbTQdp71ky2-s',
			id: 'GMyF41IxReo',
			snippet: {
				publishedAt: '2021-08-20T12:00:16Z',
				channelId: 'UC1wpPoxnjKs2oI4yXw7X9Ew',
				title: 'Khuê Mộc Lang | Hương Ly & Jombie (G5R) | Official Lyric MV',
				description:
					'Khuê Mộc Lang | Hương Ly & Jombie (G5R) | Official Lyric MV\nComposer  : Hoon, Jombie (G5R)\nRapper : Jombie (G5R)\nProducer : Sinkra (G5R)\nArtist : Hương Ly\n2D ART : Anh Minh Hoàng\n100% doanh thu MV "Khuê Mộc Lang" sẽ ủng hộ Quỹ phòng ngừa dịch bệnh\nLink MP3: https://zingmp3.vn/bai-hat/Khue-Moc-Lang-Huong-Ly-Jombie/ZUUECEIC.html\nTikTok\n#1     https://vt.tiktok.com/ZSJ7F7obC/\nRap  https://vt.tiktok.com/ZSJ7Fpssd/\nLyrics:\nKhuê Mộc Lang\n\n\nTiếng đàn vọng qua núi tang tình tang ới a tình\n\nGiữa nghìn trùng mây suối duyên tình ai viết lên lời ca\n\nHạ thu nhớ...cớ sao không còn...cố nhân xưa vẫn chờ\n\nChỉ còn là tiếc thương hoài vấn vương năm tháng đó\n\n\nMối tình từng hẹn ước....lưu truyền bao kiếp duyên bi sầu\n\nĐể gặp người khi trước....ta nguyện đi phiêu bạt nhân gian\n\nNơi rừng sâu...chốn thiên bồng...lục tìm ai khiến ta vương tình\n\nHỡi thế thái nhân gian luân hồi ai ơi\n\n\nChàng Khuê Mộc Lang vẫn luôn tìm theo ý trung nhân tình hạ phàm Bách Hoa\n\nCớ sao khi...đã tương phùng duyên...nỡ quên câu hẹn trăm năm chẳng rời\n\nKhuê Mộc Lang đớn đau nhìn theo...nước mắt chàng đan thành chòm sao kia\n\nNguyện theo bước ý nhân tình...kiếp sau ta sẽ gặp nhau....\n\n\n[Rap]\n\nuhmmm..\n\nRời.. khỏi kiếp... tiên thần...\n\nTa quyết làm yêu tinh... để tìm lại mối duyên thầm\n\nTrước là thiên binh.. nàng lại giỏi.... tiên Cầm\n\nNhưng mà chốn thiên linh... không dành cho.. lối duyên.. ngầm\n\n\nNàng là lương y.....Chữa lành bệnh tương tư\n\nTa mất cả lương tri... khi.. gần nàng đó nương tử\n\nCũng... chẳng giấu gì... ta đã viết cả tâm tư\n\nKể về 1 người con gái...... trở thành 1  câu chuyện.. bất tử\n\n\n“Vứt.. lấy giang sơn....và ta ví như họa\n\nTa... Đổi lấy... nụ cười... nàng...cứ tựa như hoa\n\nBỗng thấy nhói tim... nàng có phải cây trâm lạ\n\nTự phát sáng ..... như xá lợi tử... giúp ta bỏ cả tâm tà\n\n\nTai...sao..... ngập ngừng... trước giọt lệ giai nhân”\n\nTa quyết chiến..thiên địa......nếu duyên này . ai ngăn\n\nNàng vẫn độc đinh..ta cũng là trai tân\n\nKết đôi.... sinh ra hài tử.... đặt tên là Khai Tâm\n\n\n► LIÊN HỆ VỚI LY NẾU CÓ VẤN ĐỀ VỀ BẢN QUYỀN ◄\r\n     Email: nguyenhuongly.official@gmail.com\n#khuemoclang #huongly #jombie\r\n\r\n\r\n\r\nLiên hệ tài trợ, hợp tác: \r\n 👉 HOTLINE: 0982.90.8888\r\n 👉 Contact Email: nguyenhuongly.official@gmail.com',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/GMyF41IxReo/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/GMyF41IxReo/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/GMyF41IxReo/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/GMyF41IxReo/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/GMyF41IxReo/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Nguyễn Hương Ly Official',
				tags: [
					'hương ly',
					'nguyễn hương ly',
					'hương ly cover',
					'khuê mộc lang',
					'tây du ký',
					'khuê mộc lan',
					'khue moc lan demo',
					'khue moc lang',
					'khue moc lang huong ly',
					'khue moc lang huong ly jombie',
					'khuê mộc lang jombie',
					'khuê mộc lang hương ly',
					'Khuê Mộc Lang',
					'hương ly khuê mộc lang',
					'Jombie',
					'jombie hương ly',
					'hương ly jombie',
					'jombie hương ly khuê mộc lana',
					'trailer khuê mộc lan',
					'demo khuê mọc lang',
					'khuê mộc lan hương ly jombie',
					'hương ly jombie khuê mộc lan',
					'huong ly khue moc lan',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				defaultLanguage: 'vi',
				localized: {
					title: 'Khuê Mộc Lang | Hương Ly & Jombie (G5R) | Official Lyric MV',
					description:
						'Khuê Mộc Lang | Hương Ly & Jombie (G5R) | Official Lyric MV\nComposer  : Hoon, Jombie (G5R)\nRapper : Jombie (G5R)\nProducer : Sinkra (G5R)\nArtist : Hương Ly\n2D ART : Anh Minh Hoàng\n100% doanh thu MV "Khuê Mộc Lang" sẽ ủng hộ Quỹ phòng ngừa dịch bệnh\nLink MP3: https://zingmp3.vn/bai-hat/Khue-Moc-Lang-Huong-Ly-Jombie/ZUUECEIC.html\nTikTok\n#1     https://vt.tiktok.com/ZSJ7F7obC/\nRap  https://vt.tiktok.com/ZSJ7Fpssd/\nLyrics:\nKhuê Mộc Lang\n\n\nTiếng đàn vọng qua núi tang tình tang ới a tình\n\nGiữa nghìn trùng mây suối duyên tình ai viết lên lời ca\n\nHạ thu nhớ...cớ sao không còn...cố nhân xưa vẫn chờ\n\nChỉ còn là tiếc thương hoài vấn vương năm tháng đó\n\n\nMối tình từng hẹn ước....lưu truyền bao kiếp duyên bi sầu\n\nĐể gặp người khi trước....ta nguyện đi phiêu bạt nhân gian\n\nNơi rừng sâu...chốn thiên bồng...lục tìm ai khiến ta vương tình\n\nHỡi thế thái nhân gian luân hồi ai ơi\n\n\nChàng Khuê Mộc Lang vẫn luôn tìm theo ý trung nhân tình hạ phàm Bách Hoa\n\nCớ sao khi...đã tương phùng duyên...nỡ quên câu hẹn trăm năm chẳng rời\n\nKhuê Mộc Lang đớn đau nhìn theo...nước mắt chàng đan thành chòm sao kia\n\nNguyện theo bước ý nhân tình...kiếp sau ta sẽ gặp nhau....\n\n\n[Rap]\n\nuhmmm..\n\nRời.. khỏi kiếp... tiên thần...\n\nTa quyết làm yêu tinh... để tìm lại mối duyên thầm\n\nTrước là thiên binh.. nàng lại giỏi.... tiên Cầm\n\nNhưng mà chốn thiên linh... không dành cho.. lối duyên.. ngầm\n\n\nNàng là lương y.....Chữa lành bệnh tương tư\n\nTa mất cả lương tri... khi.. gần nàng đó nương tử\n\nCũng... chẳng giấu gì... ta đã viết cả tâm tư\n\nKể về 1 người con gái...... trở thành 1  câu chuyện.. bất tử\n\n\n“Vứt.. lấy giang sơn....và ta ví như họa\n\nTa... Đổi lấy... nụ cười... nàng...cứ tựa như hoa\n\nBỗng thấy nhói tim... nàng có phải cây trâm lạ\n\nTự phát sáng ..... như xá lợi tử... giúp ta bỏ cả tâm tà\n\n\nTai...sao..... ngập ngừng... trước giọt lệ giai nhân”\n\nTa quyết chiến..thiên địa......nếu duyên này . ai ngăn\n\nNàng vẫn độc đinh..ta cũng là trai tân\n\nKết đôi.... sinh ra hài tử.... đặt tên là Khai Tâm\n\n\n► LIÊN HỆ VỚI LY NẾU CÓ VẤN ĐỀ VỀ BẢN QUYỀN ◄\r\n     Email: nguyenhuongly.official@gmail.com\n#khuemoclang #huongly #jombie\r\n\r\n\r\n\r\nLiên hệ tài trợ, hợp tác: \r\n 👉 HOTLINE: 0982.90.8888\r\n 👉 Contact Email: nguyenhuongly.official@gmail.com',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT3M29S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '1529736',
				likeCount: '51151',
				dislikeCount: '661',
				favoriteCount: '0',
				commentCount: '3171',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'BUxny_EPr1RAUpMK3jXU8sxwzEs',
			id: 'HRdGihSHgGs',
			snippet: {
				publishedAt: '2021-08-25T06:11:05Z',
				channelId: 'UCQ4JPrrur8XOuxNugXmc39g',
				title: 'Phó Tổng thống Hoa Kỳ thăm Việt Nam, ủng hộ một nước Việt Nam mạnh, độc lập và thịnh vượng| VTV4',
				description:
					'Phó Tổng thống Kamala Harris bày tỏ vinh dự là Phó Tổng thống Hoa Kỳ đầu tiên đến thăm Việt Nam và cảm ơn sự tiếp đón chu đáo và quan trọng của lãnh đạo và nhân dân Việt Nam dành cho Bà.\n\nPhó Tổng thống tái khẳng định Hoa Kỳ ủng hộ một nước Việt Nam mạnh, độc lập và thịnh vượng, tiếp tục đổi mới, mở rộng hội nhập quốc tế và đảm nhận vai trò ngày càng quan trọng trong ASEAN và khu vực.\n\n#vietnam #vtv4 #authenticvietnam #vtv #news \n\nTheo dõi các chương trình của VTV4 tại: \nỨng dụng VTVgo trên App store và Google Play\nhoặc xem trực tiếp trên https://vtvgo.vn/xem-truc-tuyen-kenh-vtv4-4.html\n\nFacebook: https://www.facebook.com/vtv4go\nYoutube: https://www.youtube.com/user/VTV4go\nTikTok: https://www.tiktok.com/@vtv4go\n\n• Phiên bản Tiếng Anh: \nFacebook: https://www.facebook.com/VTVWorldVN\nYoutube: https://www.youtube.com/c/VTVWorldVN/',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/HRdGihSHgGs/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/HRdGihSHgGs/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/HRdGihSHgGs/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/HRdGihSHgGs/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/HRdGihSHgGs/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'VTV4',
				tags: [
					'vietnam',
					'vtv',
					'vtv4',
					'travel',
					'Việt Nam',
					'Kamala Harris',
					'phó tổng thống mỹ thăm việt nam',
					'tổng thống mỹ',
					'hoa kỳ',
					'tổng thống mỹ thăm việt nam',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Phó Tổng thống Hoa Kỳ thăm Việt Nam, ủng hộ một nước Việt Nam mạnh, độc lập và thịnh vượng| VTV4',
					description:
						'Phó Tổng thống Kamala Harris bày tỏ vinh dự là Phó Tổng thống Hoa Kỳ đầu tiên đến thăm Việt Nam và cảm ơn sự tiếp đón chu đáo và quan trọng của lãnh đạo và nhân dân Việt Nam dành cho Bà.\n\nPhó Tổng thống tái khẳng định Hoa Kỳ ủng hộ một nước Việt Nam mạnh, độc lập và thịnh vượng, tiếp tục đổi mới, mở rộng hội nhập quốc tế và đảm nhận vai trò ngày càng quan trọng trong ASEAN và khu vực.\n\n#vietnam #vtv4 #authenticvietnam #vtv #news \n\nTheo dõi các chương trình của VTV4 tại: \nỨng dụng VTVgo trên App store và Google Play\nhoặc xem trực tiếp trên https://vtvgo.vn/xem-truc-tuyen-kenh-vtv4-4.html\n\nFacebook: https://www.facebook.com/vtv4go\nYoutube: https://www.youtube.com/user/VTV4go\nTikTok: https://www.tiktok.com/@vtv4go\n\n• Phiên bản Tiếng Anh: \nFacebook: https://www.facebook.com/VTVWorldVN\nYoutube: https://www.youtube.com/c/VTVWorldVN/',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT2M45S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '365201',
				likeCount: '2098',
				dislikeCount: '180',
				favoriteCount: '0',
				commentCount: '156',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'hGdKe-WpEIxX8-4W3vY8QPJiWu8',
			id: 'UQVeHMIFujA',
			snippet: {
				publishedAt: '2021-08-25T03:30:05Z',
				channelId: 'UCCokp1i9n_aue7zTjGoBJRQ',
				title: 'Đàm Vĩnh Hưng chính thức lên tiếng phản bác tin đồn vu khống của Nguyễn Phương Hằng',
				description:
					'Đàm Vĩnh Hưng chính thức lên tiếng phản bác tin đồn vu khống của Nguyễn Phương Hằng\n-----------------\n☞ Subscribe để tiện theo dõi: http://popsww.com/damvinhhung\n☞ Facebook: https://www.facebook.com/dvhfanpage\n☞ Facebook Công ty giải trí tiếng hát việt:  https://www.facebook.com/mrdampf\n☞ Fanpage Công ty giải trí Tiếng hát Việt: https://www.facebook.com/CongTyGiaiTriTiengHatViet\n☞ Email: info@tienghatviet.vn\n-----------------\n© Bản quyền thuộc về VIET VOICE ENTERTAINMENT\n© Copyright by VIET VOICE ENTERTAINMENT ☞ Do not Reup',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/UQVeHMIFujA/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/UQVeHMIFujA/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/UQVeHMIFujA/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/UQVeHMIFujA/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/UQVeHMIFujA/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Đàm Vĩnh Hưng',
				tags: [
					'đàm vĩnh hưng',
					'dam vinh hung',
					'mrdam',
					'mr đàm',
					'damvinhhung',
					'đàm vĩnh hưng mới nhất',
					'dam vinh hung moi nhat',
					'nhạc đàm vĩnh hưng',
					'nhac dam vinh hung',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Đàm Vĩnh Hưng chính thức lên tiếng phản bác tin đồn vu khống của Nguyễn Phương Hằng',
					description:
						'Đàm Vĩnh Hưng chính thức lên tiếng phản bác tin đồn vu khống của Nguyễn Phương Hằng\n-----------------\n☞ Subscribe để tiện theo dõi: http://popsww.com/damvinhhung\n☞ Facebook: https://www.facebook.com/dvhfanpage\n☞ Facebook Công ty giải trí tiếng hát việt:  https://www.facebook.com/mrdampf\n☞ Fanpage Công ty giải trí Tiếng hát Việt: https://www.facebook.com/CongTyGiaiTriTiengHatViet\n☞ Email: info@tienghatviet.vn\n-----------------\n© Bản quyền thuộc về VIET VOICE ENTERTAINMENT\n© Copyright by VIET VOICE ENTERTAINMENT ☞ Do not Reup',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT8M15S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '390774',
				favoriteCount: '0',
				commentCount: '8317',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'fOAwqTBzu8DouFzO18kzMnGpeR8',
			id: '-XKBAtfF_uU',
			snippet: {
				publishedAt: '2021-08-24T08:44:32Z',
				channelId: 'UCHPzpxcYhxkb0fMJKeSe66g',
				title: 'Tin tức Covid-19 mới nhất hôm nay 24/8 | Dich Virus Corona Việt Nam hôm nay | TGN',
				description:
					'THẾ GIỚI NGHIÊNG | Tin tức Covid-19 mới nhất hôm nay hôm nay 24/8 gồm những tin tức đáng chú ý sau: Quân Đội Hỗ Trợ Cao Nhất Để Tp.Hcm Thực Hiện Nghiêm Giãn Cách Hàng Ngàn Quân Y Vào Tphcm Chống Dịch Trên Các CHUYÊN BAY VIETJET TP.HCM giảm 85% lượng người ra đường khi siết giãn cách Ngày đầu Đà Nẵng cho shipper hoạt động Xử phạt hơn 700 trường hợp vi phạm phòng chống dịch Covid-19 Đảm bảo khám chữa bệnh trong mọi tình huống Hà Nội hỗ trợ thêm 10 nhóm đối tượng\n\nMời quý vị và các bạn xem thêm: Thảm Án Kinh Hoàng - P1: Chuyện Rùng Rợn Ở Ngôi Nhà Hoang: https://youtu.be/drBzaKVOPuE\n✮✮✮ XEM THÊM ✮✮✮\n★ TIN THẾ GIỚI MỚI NHẤT: https://bit.ly/TINTHEGIOIMOINHAT\n★ Dịch Covid-19 tại Ấn Độ: https://bit.ly/DichCovidAnDo \n★ Tin Tức Biển Đông Mới Nhất: https://bit.ly/TinTucBienDongMoiNhat \n★ Hành trình phá án mới nhất: https://bit.ly/HanhTrinhPhaAnHayNhat\n\nKênh Thế Giới Nghiêng - TGN là kênh tổng hợp tin tức, thời sự Việt Nam và thế giới, cập nhật những tin tức và diễn biến mới nhất về tình hình quân sự, an ninh, chính trị, kinh tế và văn hóa quốc tế, đặc biệt là về tình hình Biển Đông, Mỹ - Trung Quốc, cùng các phân tích, bình luận của các chuyên gia, học giả trong nước và quốc tế. \nCảm ơn các bạn đã xem video! Hãy đăng ký kênh để cập nhật thông tin mới hữu ích nhất!\n\n✮✮✮ ĐĂNG KÝ KÊNH ✮✮✮ \n★ Thế Giới Nghiêng: http://bit.ly/TheGioiNghiengSubscribe\n★ Tin Tức Việt Nam : http://bit.ly/TinTucVietNamSubscribe\n★ Kênh được vận hành bởi 5G Network \n★ Mọi vấn đề bản quyền xin liên hệ: copyright@5gmedia.vn\n\n#thếgiớinghiêng #tgn #thếgiớinghiêng #tgn  #covid19 #camắcmới #cậpnhậtcamắcmới',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/-XKBAtfF_uU/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/-XKBAtfF_uU/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/-XKBAtfF_uU/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/-XKBAtfF_uU/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/-XKBAtfF_uU/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'THẾ GIỚI NGHIÊNG',
				tags: [
					'Covid-19 mới nhất tối hôm nay 24/8',
					'covid chiều hôm nay',
					'covid hôm nay ở việt nam 24/8',
					'covid 19 24/8',
					'dich virus corona việt nam hôm nay 23/8',
					'tình hình covid hôm nay 24/8',
					'covid việt nam hôm nay 24/8',
					'tin tức covid 19 mới nhất hôm nay',
					'tin tức',
					'tin tức covid-19',
					'tgn',
					'the gioi nghieng',
					'thế giới nghiêng',
					'tin the gioi moi nhat',
					'thời sự quốc tế mới nhất',
					'thời sự quốc tế mới nhất hôm nay',
					'tin the gioi',
					'tin thế giới',
					'thoi su quoc te moi nhat',
					'covid hôm nay ở việt nam',
					'covid 19',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				defaultLanguage: 'vi',
				localized: {
					title: 'Tin tức Covid-19 mới nhất hôm nay 24/8 | Dich Virus Corona Việt Nam hôm nay | TGN',
					description:
						'THẾ GIỚI NGHIÊNG | Tin tức Covid-19 mới nhất hôm nay hôm nay 24/8 gồm những tin tức đáng chú ý sau: Quân Đội Hỗ Trợ Cao Nhất Để Tp.Hcm Thực Hiện Nghiêm Giãn Cách Hàng Ngàn Quân Y Vào Tphcm Chống Dịch Trên Các CHUYÊN BAY VIETJET TP.HCM giảm 85% lượng người ra đường khi siết giãn cách Ngày đầu Đà Nẵng cho shipper hoạt động Xử phạt hơn 700 trường hợp vi phạm phòng chống dịch Covid-19 Đảm bảo khám chữa bệnh trong mọi tình huống Hà Nội hỗ trợ thêm 10 nhóm đối tượng\n\nMời quý vị và các bạn xem thêm: Thảm Án Kinh Hoàng - P1: Chuyện Rùng Rợn Ở Ngôi Nhà Hoang: https://youtu.be/drBzaKVOPuE\n✮✮✮ XEM THÊM ✮✮✮\n★ TIN THẾ GIỚI MỚI NHẤT: https://bit.ly/TINTHEGIOIMOINHAT\n★ Dịch Covid-19 tại Ấn Độ: https://bit.ly/DichCovidAnDo \n★ Tin Tức Biển Đông Mới Nhất: https://bit.ly/TinTucBienDongMoiNhat \n★ Hành trình phá án mới nhất: https://bit.ly/HanhTrinhPhaAnHayNhat\n\nKênh Thế Giới Nghiêng - TGN là kênh tổng hợp tin tức, thời sự Việt Nam và thế giới, cập nhật những tin tức và diễn biến mới nhất về tình hình quân sự, an ninh, chính trị, kinh tế và văn hóa quốc tế, đặc biệt là về tình hình Biển Đông, Mỹ - Trung Quốc, cùng các phân tích, bình luận của các chuyên gia, học giả trong nước và quốc tế. \nCảm ơn các bạn đã xem video! Hãy đăng ký kênh để cập nhật thông tin mới hữu ích nhất!\n\n✮✮✮ ĐĂNG KÝ KÊNH ✮✮✮ \n★ Thế Giới Nghiêng: http://bit.ly/TheGioiNghiengSubscribe\n★ Tin Tức Việt Nam : http://bit.ly/TinTucVietNamSubscribe\n★ Kênh được vận hành bởi 5G Network \n★ Mọi vấn đề bản quyền xin liên hệ: copyright@5gmedia.vn\n\n#thếgiớinghiêng #tgn #thếgiớinghiêng #tgn  #covid19 #camắcmới #cậpnhậtcamắcmới',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT5H39M12S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '490035',
				likeCount: '1080',
				dislikeCount: '221',
				favoriteCount: '0',
				commentCount: '42',
			},
		},
		{
			kind: 'youtube#video',
			etag: '3WZfRHRG88iL4aLRkKFr_-kf-lw',
			id: 'u-sa6ZxzN6Y',
			snippet: {
				publishedAt: '2021-08-18T11:00:22Z',
				channelId: 'UCVFvpKjm8he0gJLIfM1lnLA',
				title: 'Trêu đùa anh công an và thanh niên nhận cái kết | Lê Long An',
				description:
					'#shorts\nXin chào mọi người , tui là Long An Daxua nè nè nè !\nNếu có vấn đề gì về bản quyền mình sẽ giải quyết ngay cho bạn , làm ơn hãy liên hệ đến Gmail : daxuahoingoc@gmail.com ! Trân trọng cảm ơn bạn rất nhiều \n------------\n*Giúp mình đạt 50.000 subscribe nha \n------------\nTIKTOK của tớ : www.tiktok.com/@longandaxua\nFACEBOOK cá nhân của tớ : https://www.facebook.com/langtu.anan\n---------\n- Các tổ chức, cá nhân vui lòng không đăng lại, mọi hành vi đăng lại có thể khiến kênh của bạn bị xóa vĩnh viễn! \n______\n-Organizations and individuals please do not post again, any repurposing behavior may result in permanent deletion of your channel!\n____\nCopyrighted video belongs to Long An Daxua©\nVideo có bản quyền thuộc Long An Daxua ©\n#lelongantiktok\n#longandaxua\n#daxua\n#bede\n#khambua\n#daxuakhambua\n#layloi\n#lelongan\n#tiktokerlelongan',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/u-sa6ZxzN6Y/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/u-sa6ZxzN6Y/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/u-sa6ZxzN6Y/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/u-sa6ZxzN6Y/sddefault.jpg',
						width: 640,
						height: 480,
					},
				},
				channelTitle: 'Long An Daxua',
				tags: [
					'le long an',
					'lê long an',
					'long an daxua',
					'ông bố bất hạnh',
					'long an',
					'tik tok le long an',
					'reaction le long an',
					'tik tok lê long an',
					'haihuoc',
					'hottiktokerlelongan',
					'lelongan',
					'xemvideolelongan',
					'daxua',
					'layloi',
					'tiktokerlongan',
					'hai',
					'lelongantiktok',
					'trêu công an',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Trêu đùa anh công an và thanh niên nhận cái kết | Lê Long An',
					description:
						'#shorts\nXin chào mọi người , tui là Long An Daxua nè nè nè !\nNếu có vấn đề gì về bản quyền mình sẽ giải quyết ngay cho bạn , làm ơn hãy liên hệ đến Gmail : daxuahoingoc@gmail.com ! Trân trọng cảm ơn bạn rất nhiều \n------------\n*Giúp mình đạt 50.000 subscribe nha \n------------\nTIKTOK của tớ : www.tiktok.com/@longandaxua\nFACEBOOK cá nhân của tớ : https://www.facebook.com/langtu.anan\n---------\n- Các tổ chức, cá nhân vui lòng không đăng lại, mọi hành vi đăng lại có thể khiến kênh của bạn bị xóa vĩnh viễn! \n______\n-Organizations and individuals please do not post again, any repurposing behavior may result in permanent deletion of your channel!\n____\nCopyrighted video belongs to Long An Daxua©\nVideo có bản quyền thuộc Long An Daxua ©\n#lelongantiktok\n#longandaxua\n#daxua\n#bede\n#khambua\n#daxuakhambua\n#layloi\n#lelongan\n#tiktokerlelongan',
				},
			},
			contentDetails: {
				duration: 'PT26S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2554943',
				likeCount: '86157',
				dislikeCount: '7966',
				favoriteCount: '0',
				commentCount: '197',
			},
		},
		{
			kind: 'youtube#video',
			etag: '8XY9T4D3dXItPieb-l6ud_qqG8U',
			id: 'IhkVMeYwG1w',
			snippet: {
				publishedAt: '2021-08-24T01:20:15Z',
				channelId: 'UC6oSX9I4bzySbcwWjxfi2LA',
				title: 'Tiết lộ động trời nguyên nhân chủ tịch ủy ban nhân dân thành phố sài gòn bị cách chức - tin tức 24h',
				description:
					'Tiết lộ động trời nguyên nhân chủ tịch ủy ban nhân dân thành phố sài gòn bị cách chức - tin tức 24h\nQuý vị có thể theo dõi chương trình của đài Saigon Entertainment Television (SET) phát song trực tiếp trên các hệ thống sau:\nĐài SET 1 phát trên băng tầng 57.11 – Miền Nam California\nĐài SET 2 phát trên băng tầng 16.11 – Miền Bắc California, San Jose và 27.2 – Tại Houston, Texas.\nNgoài ra chương trình còn có mặt trên tất cả các thiết bị IPhone, Ipad, Android, Roku TV, Amazon Fire TV. Và đặt biệt có trên Samsung Smart TV Apps với ứng dụng tên: SET GROUP TV”\nMọi chi tiết xin vui lòng liên lạc về đài SET tại địa chỉ info@setchannel.tv hoặc qua số phone (714) 266-3666\n \nAddress:\n10531 Garden Grove Blvd, Suite 200\nGarden Grove, CA 92843\nTel: 714-266-3666\nEmail: info@setchannel.tv\nWebsite: www.setchannel.tv\n \nINTERNATIONAL HOME SHOPPING\n9822 Bolsa Avenue, Suite D\nWestminster, CA 92683',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/IhkVMeYwG1w/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/IhkVMeYwG1w/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/IhkVMeYwG1w/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/IhkVMeYwG1w/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/IhkVMeYwG1w/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Saigon Entertainment Television',
				tags: [
					'set tv',
					'set channel tv',
					'saigon entertainment televison',
					'sbtn',
					'saigon tv',
					'lstv',
					'vietface',
					'vtv',
					'bbc',
					'rfa',
					'do dzung',
					'đỗ dzũng',
					'hồng tứ',
					'hong tu',
					'doan trong',
					'đoàn trọng',
					'việt nam',
					'tin tuc viet nam',
					'tin tức',
					'tin tuc thoi su',
					'thoi su',
					'tin thế giới',
					'tin quốc tế',
					'chủ tịch ủy ban nhân dân thành phố sài gòn bị cách chức',
					'chủ tịch',
					'sài gòn',
					'tin tuc 24h',
					'tin tuc',
					'tin chinh tri',
				],
				categoryId: '25',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Tiết lộ động trời nguyên nhân chủ tịch ủy ban nhân dân thành phố sài gòn bị cách chức - tin tức 24h',
					description:
						'Tiết lộ động trời nguyên nhân chủ tịch ủy ban nhân dân thành phố sài gòn bị cách chức - tin tức 24h\nQuý vị có thể theo dõi chương trình của đài Saigon Entertainment Television (SET) phát song trực tiếp trên các hệ thống sau:\nĐài SET 1 phát trên băng tầng 57.11 – Miền Nam California\nĐài SET 2 phát trên băng tầng 16.11 – Miền Bắc California, San Jose và 27.2 – Tại Houston, Texas.\nNgoài ra chương trình còn có mặt trên tất cả các thiết bị IPhone, Ipad, Android, Roku TV, Amazon Fire TV. Và đặt biệt có trên Samsung Smart TV Apps với ứng dụng tên: SET GROUP TV”\nMọi chi tiết xin vui lòng liên lạc về đài SET tại địa chỉ info@setchannel.tv hoặc qua số phone (714) 266-3666\n \nAddress:\n10531 Garden Grove Blvd, Suite 200\nGarden Grove, CA 92843\nTel: 714-266-3666\nEmail: info@setchannel.tv\nWebsite: www.setchannel.tv\n \nINTERNATIONAL HOME SHOPPING\n9822 Bolsa Avenue, Suite D\nWestminster, CA 92683',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT20M20S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '356311',
				likeCount: '3211',
				dislikeCount: '530',
				favoriteCount: '0',
				commentCount: '801',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'fd6lxVdxHp2FVq8wavLyBmgFNfo',
			id: '1FvlXNCTzdM',
			snippet: {
				publishedAt: '2021-08-16T11:00:00Z',
				channelId: 'UCVFvpKjm8he0gJLIfM1lnLA',
				title: 'Thanh niên lách luật không đeo khẩu trang nhận ngay cái kết | Lê Long An',
				description:
					'#shorts\nXin chào mọi người , tui là Long An Daxua nè nè nè !\nNếu có vấn đề gì về bản quyền mình sẽ giải quyết ngay cho bạn , làm ơn hãy liên hệ đến Gmail : daxuahoingoc@gmail.com ! Trân trọng cảm ơn bạn rất nhiều \n------------\n*Giúp mình đạt 50.000 subscribe nha \n------------\nTIKTOK của tớ : www.tiktok.com/@longandaxua\nFACEBOOK cá nhân của tớ : https://www.facebook.com/langtu.anan\n---------\n- Các tổ chức, cá nhân vui lòng không đăng lại, mọi hành vi đăng lại có thể khiến kênh của bạn bị xóa vĩnh viễn! \n______\n-Organizations and individuals please do not post again, any repurposing behavior may result in permanent deletion of your channel!\n____\nCopyrighted video belongs to Long An Daxua©\nVideo có bản quyền thuộc Long An Daxua ©\n#lelongantiktok\n#longandaxua\n#daxua\n#bede\n#khambua\n#daxuakhambua\n#layloi\n#lelongan\n#tiktokerlelongan',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/1FvlXNCTzdM/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/1FvlXNCTzdM/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/1FvlXNCTzdM/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/1FvlXNCTzdM/sddefault.jpg',
						width: 640,
						height: 480,
					},
				},
				channelTitle: 'Long An Daxua',
				tags: [
					'le long an',
					'lê long an',
					'long an daxua',
					'ông bố bất hạnh',
					'long an',
					'tik tok le long an',
					'reaction le long an',
					'tik tok lê long an',
					'haihuoc',
					'hottiktokerlelongan',
					'lelongan',
					'xemvideolelongan',
					'daxua',
					'layloi',
					'tiktokerlongan',
					'hai',
					'lelongantiktok',
					'không đeo khẩu trang',
					'lách luật',
					'cái kết',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Thanh niên lách luật không đeo khẩu trang nhận ngay cái kết | Lê Long An',
					description:
						'#shorts\nXin chào mọi người , tui là Long An Daxua nè nè nè !\nNếu có vấn đề gì về bản quyền mình sẽ giải quyết ngay cho bạn , làm ơn hãy liên hệ đến Gmail : daxuahoingoc@gmail.com ! Trân trọng cảm ơn bạn rất nhiều \n------------\n*Giúp mình đạt 50.000 subscribe nha \n------------\nTIKTOK của tớ : www.tiktok.com/@longandaxua\nFACEBOOK cá nhân của tớ : https://www.facebook.com/langtu.anan\n---------\n- Các tổ chức, cá nhân vui lòng không đăng lại, mọi hành vi đăng lại có thể khiến kênh của bạn bị xóa vĩnh viễn! \n______\n-Organizations and individuals please do not post again, any repurposing behavior may result in permanent deletion of your channel!\n____\nCopyrighted video belongs to Long An Daxua©\nVideo có bản quyền thuộc Long An Daxua ©\n#lelongantiktok\n#longandaxua\n#daxua\n#bede\n#khambua\n#daxuakhambua\n#layloi\n#lelongan\n#tiktokerlelongan',
				},
			},
			contentDetails: {
				duration: 'PT36S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '3088064',
				likeCount: '103828',
				dislikeCount: '11616',
				favoriteCount: '0',
				commentCount: '183',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'p4f1ArLELMTcPVS4hR4iw25ZMxA',
			id: '2jt16lRPgek',
			snippet: {
				publishedAt: '2021-08-18T11:00:01Z',
				channelId: 'UC8UjpFpFqbVJoe65IJUaryQ',
				title: '6 bạn trẻ "không còn đường s.ống" phải đi bộ từ SG về Miền Tây trốn dịch...',
				description:
					'Hành trình gian nan 6 bạn trẻ "không còn đường sống" phải đi bộ từ SG về Miền Tây trốn dịch \nNhóm bạn trẻ từ 18 đến 30 tuổi là những lao động nghèo đã bất chấp nguy hiểm, đi bộ hàng trăm cây số từ Sài Gòn, Bình Dương về Miền Tây để thoát cảnh đói khổ, không tiền, thất nghiệp... \nLê thân thiện đã chứng kiến thảm cảnh của các bạn và ghi lại những hình ảnh thực tế khi nhóm bạn trẻ này đi ngang địa phận huyện Bến Lức, tỉnh Long An. \nKính mời Quý vị theo dõi video này và xin Quý vị đừng quên nhấn Đăng Ký kênh để ủng hộ YouTube Lê thân thiện nhé. Trân trọng cám ơn Quý vị. _________________________________________________________________\nMọi thông tin liên hệ, hãy gọi về: \nCông ty TNHH Truyền thông và Sự kiện Lê Nhiên - Channel Lê Thân Thiện (Le Nhien - Channel Le Than Thien Media and Event Company Limited)\n- ĐTDĐ: 070707.17.17 (Zalo, Viber).\n- Facebook: https://www.facebook.com/YoutubeLeThanThien\nHãy Đăng Ký kênh YouTube Lê Thân Thiện (youtube.com/lethanthien) để xem nhiều video hấp dẫn nhất nhé mọi người thân yêu. \nTrân trọng cám ơn.\n-----------------\n© Bản quyền thuộc về Lê Thân Thiện\n© Copyright by Lê Thân Thiện ☞ Do not Reup',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/2jt16lRPgek/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/2jt16lRPgek/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/2jt16lRPgek/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/2jt16lRPgek/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/2jt16lRPgek/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Lê thân thiện',
				tags: [
					'Lê Thân Thiện',
					'Le Than Thien',
					'Le Than Thien Channel',
					'mái ấm',
					'tình thương',
					'đời sống',
					'từ thiện',
					'thiện nguyện',
					'việc thiện nguyện',
					'tu thien',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: '6 bạn trẻ "không còn đường s.ống" phải đi bộ từ SG về Miền Tây trốn dịch...',
					description:
						'Hành trình gian nan 6 bạn trẻ "không còn đường sống" phải đi bộ từ SG về Miền Tây trốn dịch \nNhóm bạn trẻ từ 18 đến 30 tuổi là những lao động nghèo đã bất chấp nguy hiểm, đi bộ hàng trăm cây số từ Sài Gòn, Bình Dương về Miền Tây để thoát cảnh đói khổ, không tiền, thất nghiệp... \nLê thân thiện đã chứng kiến thảm cảnh của các bạn và ghi lại những hình ảnh thực tế khi nhóm bạn trẻ này đi ngang địa phận huyện Bến Lức, tỉnh Long An. \nKính mời Quý vị theo dõi video này và xin Quý vị đừng quên nhấn Đăng Ký kênh để ủng hộ YouTube Lê thân thiện nhé. Trân trọng cám ơn Quý vị. _________________________________________________________________\nMọi thông tin liên hệ, hãy gọi về: \nCông ty TNHH Truyền thông và Sự kiện Lê Nhiên - Channel Lê Thân Thiện (Le Nhien - Channel Le Than Thien Media and Event Company Limited)\n- ĐTDĐ: 070707.17.17 (Zalo, Viber).\n- Facebook: https://www.facebook.com/YoutubeLeThanThien\nHãy Đăng Ký kênh YouTube Lê Thân Thiện (youtube.com/lethanthien) để xem nhiều video hấp dẫn nhất nhé mọi người thân yêu. \nTrân trọng cám ơn.\n-----------------\n© Bản quyền thuộc về Lê Thân Thiện\n© Copyright by Lê Thân Thiện ☞ Do not Reup',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT26M38S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '1425134',
				likeCount: '13888',
				dislikeCount: '1209',
				favoriteCount: '0',
				commentCount: '2469',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'N0cNemsV4S7ogbrFkIqDCkYcNwE',
			id: 'qGtnM1QwYNc',
			snippet: {
				publishedAt: '2021-08-13T14:24:10Z',
				channelId: 'UCFjYp-0k_p_ByOgPJt8YKvQ',
				title: 'Đố ae đây là khẩu gì, trong game nào, tối đa dame bnhiu#Shorts',
				description:
					'Đố ae đây là khẩu gì, trong game nào, tối đa dame bnhiu#Shorts\nTất cả đồ review chất lượng tốt mình để ở đây nhé:\nhttps://discovery.koc.com.vn/influencer/tranthangroyal\n➥Kênh TikTok: https://www.tiktok.com/@onggiaoreview?\n➥Fanpage: https://www.facebook.com/OngGiaoReview92\n➥Zalo: 0977895768\n➥Email: Tranthangroyal@gmail.com\n© Bản quyền thuộc về Ông Giáo Review\n© Copyright by Ông Giáo Review ☞ Do not Re-up\n#onggiaoreview #Reviewcathegioi #thanhreview #kienreview #onggiao #reviewcotam #reviewtot',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/qGtnM1QwYNc/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/qGtnM1QwYNc/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/qGtnM1QwYNc/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
				channelTitle: 'Ông Giáo Review',
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Đố ae đây là khẩu gì, trong game nào, tối đa dame bnhiu#Shorts',
					description:
						'Đố ae đây là khẩu gì, trong game nào, tối đa dame bnhiu#Shorts\nTất cả đồ review chất lượng tốt mình để ở đây nhé:\nhttps://discovery.koc.com.vn/influencer/tranthangroyal\n➥Kênh TikTok: https://www.tiktok.com/@onggiaoreview?\n➥Fanpage: https://www.facebook.com/OngGiaoReview92\n➥Zalo: 0977895768\n➥Email: Tranthangroyal@gmail.com\n© Bản quyền thuộc về Ông Giáo Review\n© Copyright by Ông Giáo Review ☞ Do not Re-up\n#onggiaoreview #Reviewcathegioi #thanhreview #kienreview #onggiao #reviewcotam #reviewtot',
				},
			},
			contentDetails: {
				duration: 'PT33S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '3352932',
				likeCount: '105391',
				dislikeCount: '8742',
				favoriteCount: '0',
				commentCount: '2682',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'Gj1bjatZmUBk9UHemKw1hA0LgrM',
			id: 'rsiqmDzjek0',
			snippet: {
				publishedAt: '2021-08-21T01:15:05Z',
				channelId: 'UCWEYgC77_ZlbDxStQyzOwfA',
				title: 'Vu Lan Nhớ Mẹ Karaoke Tone Nữ Nhạc Sống 2021 | Trọng Hiếu',
				description:
					'❖ Được cấp phép sử dụng tác quyền bởi VCPMC hợp đồng hợp đồng số 0243M/2018/HDHT\n🎵 Hiếu Organ là kênh karaoke nhạc sống độc quyền phát hành những ca khúc Karaoke mới nhất gồm nhiều thể loại khác nhau. Theo dõi kênh để được thông báo khi có sản phẩm mới nha các bạn \n\n🔊🔊🔊Lưu ý : tất cả sản phẩm video của Hiếu Organ (Trọng Hiếu) được up độc quyền từ kênh Hiếu Organ.  Không chấp nhận sang nhượng bản quyền và các trang khác Up từ Video và Audio. Ban quản trị Pops Worldwide sẽ gắn cờ nếu các trang vi phạm bản quyền mọi sản phẩm của Hiếu Organ.\n\n🔊 Hiếu Organ có nhận hợp tác cho ca sĩ thuê beat hát hoặc Kênh nhạc chế... \nLink Fb : https://bit.ly/2TRkWif\n🔊 Mọi hợp tác và yêu cầu xin liên hệ SDT:  0969627899 (Gặp Mr.Hiếu)',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/rsiqmDzjek0/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/rsiqmDzjek0/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/rsiqmDzjek0/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/rsiqmDzjek0/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/rsiqmDzjek0/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Hiếu Organ',
				tags: [
					'karaoke',
					'karaoke vu lan nho me',
					'karaoke vu lan nho me tone nu',
					'karaoke vu lan nho me nhac song',
					'vu lan nho me karaoke',
					'vu lan nho me karaoke tone nu',
					'karaoke vu lan nhớ me',
					'karaoke vu lan nhớ me tone nữ',
					'karaoke vu lan nhớ me nhạc sống',
					'vu lan nhớ me karaoke',
					'vu lan nhớ me karaoke tone nữ',
					'vu lan nhớ me karaoke trọng hiếu',
					'vu lan nho me',
					'vu lan nhớ mẹ',
					'karaoke tone nữ',
					'tone nữ karaoke',
					'karaoke nhạc sống',
					'karaoke nhac song',
					'hiếu Organ',
					'Trọng Hiếu',
					'hieu organ',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				defaultLanguage: 'vi',
				localized: {
					title: 'Vu Lan Nhớ Mẹ Karaoke Tone Nữ Nhạc Sống 2021 | Trọng Hiếu',
					description:
						'❖ Được cấp phép sử dụng tác quyền bởi VCPMC hợp đồng hợp đồng số 0243M/2018/HDHT\n🎵 Hiếu Organ là kênh karaoke nhạc sống độc quyền phát hành những ca khúc Karaoke mới nhất gồm nhiều thể loại khác nhau. Theo dõi kênh để được thông báo khi có sản phẩm mới nha các bạn \n\n🔊🔊🔊Lưu ý : tất cả sản phẩm video của Hiếu Organ (Trọng Hiếu) được up độc quyền từ kênh Hiếu Organ.  Không chấp nhận sang nhượng bản quyền và các trang khác Up từ Video và Audio. Ban quản trị Pops Worldwide sẽ gắn cờ nếu các trang vi phạm bản quyền mọi sản phẩm của Hiếu Organ.\n\n🔊 Hiếu Organ có nhận hợp tác cho ca sĩ thuê beat hát hoặc Kênh nhạc chế... \nLink Fb : https://bit.ly/2TRkWif\n🔊 Mọi hợp tác và yêu cầu xin liên hệ SDT:  0969627899 (Gặp Mr.Hiếu)',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT4M22S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '461116',
				likeCount: '7670',
				dislikeCount: '249',
				favoriteCount: '0',
				commentCount: '39',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'EqWl0biE_vaoZe8t3_FJIKIsTgw',
			id: 'UmbM05RN3Lg',
			snippet: {
				publishedAt: '2021-08-24T12:00:10Z',
				channelId: 'UCdA70ov8F4NBaz8I6wWeOTQ',
				title: 'REVIEW PHIM NGƯỜI NHỆN TRỞ VỀ NHÀ || SPIDER MAN HOMECOMING ||  SAKURA REVIEW',
				description:
					'Chào mừng các bạn đến với kênh SAKURA REVIEW mình sẽ đăng video review phim hay mỗi ngày để các bạn xem nhé, nhớ đăng ký để được xem sớm nhất nhé.!\nREVIEW PHIM NGƯỜI NHỆN TRỞ VỀ NHÀ || SPIDER MAN HOMECOMING ||  SAKURA REVIEW\nSau sự kiện trở lại của Spider-Man qua vai diễn hoàn toàn mới của Tom Holland trong Captain America: Civil War, một lần nữa “thánh nhọ” – Người Nhện lại được làm mới với phiên bản phim điện ảnh Spider-Man: Homecoming. Người Nhện: Trở Về Nhà ngay từ tên phim đã nói lên tất cả: Chào Người Nhện về nhà. Còn nhớ, ở thời điểm khó khăn nhất của mình cách đây nhiều năm, Marvel Comics đã phải bán đi những tài sản quý giá của họ trong đó có việc bán nhóm X-Men cho 20th Century Fox, bán Người Nhện cho Sony Pictures, giống như chúng ta kẹt tiền thì phải đem đồ nhà đi bán. Sau này khi Marvel làm ăn khấm khá trở lại và đặc biệt là được Disney mua lại hãng phim Marvel Studios, việc tìm lại những “đứa con” từng cho đi là việc chắc chắn họ sẽ làm, kết quả là Disney/Marvel đã đạt được thỏa thuận với Sony về việc sử dụng bản quyền Người Nhện cho các phim siêu anh hùng của Marvel. Sau cuộc “ Nội chiến siêu anh hùng” trong Captain America: Civil War (2014), Peter Parker (Tom Holland) cởi bỏ thân phận Người Nhện, tiếp tục với cuộc sống học đường thường nhật. Lúc này, tỉ phú Tony Stark (Robert Downey Jr.), đồng thời cũng là người thầy siêu anh hùng của Peter vẫn cho phép cậu sử dụng danh tính Người Nhện để hành hiệp trượng nghĩa, với điều kiện không được phép tham gia vào những phi vụ có thể gây nguy hại đến tính mạng. Song, khi gã ác nhân Kền Kền (Michael Keaton) xuất hiện và tuyên chiến với giới siêu anh hùng, tinh thần chính nghĩa đã khiến Peter không thể nhắm mắt làm ngơ.\n\nLINK FANPAGE: https://www.facebook.com/SakuraReview...\nTIKTOK: https://vt.tiktok.com/ZGJSM9yes/',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/UmbM05RN3Lg/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/UmbM05RN3Lg/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/UmbM05RN3Lg/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/UmbM05RN3Lg/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/UmbM05RN3Lg/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'SAKURA REVIEW',
				tags: [
					'SAKURA REVIEW',
					'REVIEW',
					'PHIM',
					'review phim',
					'reviewphimhay',
					'phimhay',
					'tóm tắt phim',
					'REVIEW PHIM',
					'NGƯỜI NHỆN',
					'TRỞ VỀ NHÀ',
					'NGƯỜI',
					'NHỆN',
					'TRỞ',
					'VỀ',
					'NHÀ',
					'SPIDER MAN HOMECOMING',
					'SPIDER MAN',
					'HOMECOMING',
					'Người Nhện Trở Về Nhà',
					'người nhện trở về nhà',
					'review phim nhanh',
					'review phim hay',
				],
				categoryId: '1',
				liveBroadcastContent: 'none',
				localized: {
					title: 'REVIEW PHIM NGƯỜI NHỆN TRỞ VỀ NHÀ || SPIDER MAN HOMECOMING ||  SAKURA REVIEW',
					description:
						'Chào mừng các bạn đến với kênh SAKURA REVIEW mình sẽ đăng video review phim hay mỗi ngày để các bạn xem nhé, nhớ đăng ký để được xem sớm nhất nhé.!\nREVIEW PHIM NGƯỜI NHỆN TRỞ VỀ NHÀ || SPIDER MAN HOMECOMING ||  SAKURA REVIEW\nSau sự kiện trở lại của Spider-Man qua vai diễn hoàn toàn mới của Tom Holland trong Captain America: Civil War, một lần nữa “thánh nhọ” – Người Nhện lại được làm mới với phiên bản phim điện ảnh Spider-Man: Homecoming. Người Nhện: Trở Về Nhà ngay từ tên phim đã nói lên tất cả: Chào Người Nhện về nhà. Còn nhớ, ở thời điểm khó khăn nhất của mình cách đây nhiều năm, Marvel Comics đã phải bán đi những tài sản quý giá của họ trong đó có việc bán nhóm X-Men cho 20th Century Fox, bán Người Nhện cho Sony Pictures, giống như chúng ta kẹt tiền thì phải đem đồ nhà đi bán. Sau này khi Marvel làm ăn khấm khá trở lại và đặc biệt là được Disney mua lại hãng phim Marvel Studios, việc tìm lại những “đứa con” từng cho đi là việc chắc chắn họ sẽ làm, kết quả là Disney/Marvel đã đạt được thỏa thuận với Sony về việc sử dụng bản quyền Người Nhện cho các phim siêu anh hùng của Marvel. Sau cuộc “ Nội chiến siêu anh hùng” trong Captain America: Civil War (2014), Peter Parker (Tom Holland) cởi bỏ thân phận Người Nhện, tiếp tục với cuộc sống học đường thường nhật. Lúc này, tỉ phú Tony Stark (Robert Downey Jr.), đồng thời cũng là người thầy siêu anh hùng của Peter vẫn cho phép cậu sử dụng danh tính Người Nhện để hành hiệp trượng nghĩa, với điều kiện không được phép tham gia vào những phi vụ có thể gây nguy hại đến tính mạng. Song, khi gã ác nhân Kền Kền (Michael Keaton) xuất hiện và tuyên chiến với giới siêu anh hùng, tinh thần chính nghĩa đã khiến Peter không thể nhắm mắt làm ngơ.\n\nLINK FANPAGE: https://www.facebook.com/SakuraReview...\nTIKTOK: https://vt.tiktok.com/ZGJSM9yes/',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT18M46S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '648044',
				likeCount: '5855',
				dislikeCount: '234',
				favoriteCount: '0',
				commentCount: '686',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'RwYzhFgoPnRucyHHoZOFy-wS728',
			id: 'lE0IBaKjagI',
			snippet: {
				publishedAt: '2021-08-25T12:27:06Z',
				channelId: 'UCxlprA9Y_T98gDqXMc46baw',
				title: '[ DỊCH VIỆT NAM ] @TIN TỨC VIỆT 25/8/2021 | Cập nhật mới nhất tin tức dịch bệnh trên cả nước',
				description:
					'[ DỊCH VIỆT NAM ]  @TIN TỨC VIỆT  25/8/2021 | Cập nhật mới nhất tin tức dịch bệnh trên cả nước\n[ DỊCH VIỆT NAM ] https://bit.ly/DichBenh\n[ TIN AN NINH TRẬT TỰ ] https://bit.ly/AnNinhTratTu\n[ TIN BIỂN ĐÔNG ] https://bit.ly/TinBienDong\n[ TIN NÓNG CẬP NHẬT ] https://bit.ly/TinNongCapNhat\nQuỳnh Anh xin gửi tới quý vị và các bạn những tin tức nóng hổi về tình hình thời sự Quốc tế, thời sự trong nước, tin tức dịch bệnh, tin tức Biển ĐÔng hôm nay ! Chúc cả nhà vui vẻ !\n\n▶ ĐĂNG KÝ KÊNH TẠI ĐÂY: https://bit.ly/TINTUCVIET và biểu tượng 🔔 phía dưới góc phải của video để không bỏ lỡ những video  tin tức mới nhất các bạn nhé\n\n▶ Fair use for news reporting (https://www.youtube.com/howyoutubeworks/policies/copyright/) and (https://en.wikipedia.org/wiki/Fair_use) \n\n▶ Mọi vấn đề về video vi phạm Bản quyền (https://www.youtube.com/howyoutubeworks/policies/copyright/), Chính sách (https://www.youtube.com/t/terms), \n- Nguyên tắc cộng đồng (https://www.youtube.com/howyoutubeworks/policies/community-guidelines/) chúng tôi sẽ xóa chúng, xin liên hệ trực tiếp qua email: tien@cafnetwork.com . If there are any copyright issues with any videos posted here We will remove them, please contact our email: tien@cafnetwork.com\n\n#Thoisu #Tintucviet #Tintuc24h',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/lE0IBaKjagI/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/lE0IBaKjagI/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/lE0IBaKjagI/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/lE0IBaKjagI/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/lE0IBaKjagI/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'TIN TỨC VIỆT',
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: '[ DỊCH VIỆT NAM ] @TIN TỨC VIỆT 25/8/2021 | Cập nhật mới nhất tin tức dịch bệnh trên cả nước',
					description:
						'[ DỊCH VIỆT NAM ]  @TIN TỨC VIỆT  25/8/2021 | Cập nhật mới nhất tin tức dịch bệnh trên cả nước\n[ DỊCH VIỆT NAM ] https://bit.ly/DichBenh\n[ TIN AN NINH TRẬT TỰ ] https://bit.ly/AnNinhTratTu\n[ TIN BIỂN ĐÔNG ] https://bit.ly/TinBienDong\n[ TIN NÓNG CẬP NHẬT ] https://bit.ly/TinNongCapNhat\nQuỳnh Anh xin gửi tới quý vị và các bạn những tin tức nóng hổi về tình hình thời sự Quốc tế, thời sự trong nước, tin tức dịch bệnh, tin tức Biển ĐÔng hôm nay ! Chúc cả nhà vui vẻ !\n\n▶ ĐĂNG KÝ KÊNH TẠI ĐÂY: https://bit.ly/TINTUCVIET và biểu tượng 🔔 phía dưới góc phải của video để không bỏ lỡ những video  tin tức mới nhất các bạn nhé\n\n▶ Fair use for news reporting (https://www.youtube.com/howyoutubeworks/policies/copyright/) and (https://en.wikipedia.org/wiki/Fair_use) \n\n▶ Mọi vấn đề về video vi phạm Bản quyền (https://www.youtube.com/howyoutubeworks/policies/copyright/), Chính sách (https://www.youtube.com/t/terms), \n- Nguyên tắc cộng đồng (https://www.youtube.com/howyoutubeworks/policies/community-guidelines/) chúng tôi sẽ xóa chúng, xin liên hệ trực tiếp qua email: tien@cafnetwork.com . If there are any copyright issues with any videos posted here We will remove them, please contact our email: tien@cafnetwork.com\n\n#Thoisu #Tintucviet #Tintuc24h',
				},
			},
			contentDetails: {
				duration: 'PT11H10M56S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '615593',
				likeCount: '2040',
				dislikeCount: '238',
				favoriteCount: '0',
				commentCount: '7',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'k7l3O14YTVQtFVAGpnaGsOhvTXI',
			id: 'zOrSAtbnvvc',
			snippet: {
				publishedAt: '2021-08-14T13:15:15Z',
				channelId: 'UC8FP0dPlPBtybikzPvxChTA',
				title: 'phim lẻ hay: Thằng Ăn Mày Ngồi Canh Mộ (FULL) phim hành động võ thuật [Lẩu Phim]',
				description:
					'✔️Ấn đăng ký có ngay phim hay để xem➥http://bit.ly/2PCdlzh\n\nTỔNG HỢP PHIM HÀNH ĐỘNG VÕ THUẬT HAY NHẤT 2020:\n\n✅ĐỘI ĐẶC NHIỆM➥https://bit.ly/34nzloO\n\n✅CHIẾN LANG (ngô kinh)➥https://bit.ly/3nJL0WV\n\n✅HỘI NỮ SÁT THỦ➥https://bit.ly/2CD8E4A\n\n✅PHONG ĐIỂU XUẤT KÍCH (lưu khải uy)➥https://bit.ly/37tdoqs\n\n✅DIỆP VẤN➥https://bit.ly/37vvHeI\n\n✅NỮ THỢ SĂN➥https://bit.ly/3pay3FT\n\n✅ĐỘI VÕ THUẬT TIỀN TRUYỆN➥https://bit.ly/3amVlnz\n\n✅YÊN CHI(triệu lệ dĩnh)➥https://bit.ly/3nvTv7z\n\n✅BIỆT ĐỘI TỔ KÍCH➥https://bit.ly/3p3z1U7\n\n✅HƯỚNG TRẬN ĐỊA MÀ TIẾN LÊN➥https://bit.ly/38kift4\n\n✅ĐẠO MỘ➥https://bit.ly/2LPy1ET\n\n#LẩuPhim\n------------------------------------------------------------------------\nTÊN GỐC➥NHÂN THIÊN ĐỊA\n© Bản quyền thuộc về Lẩu Phim và Đối Tác\n© Copyright by Lẩu Phim and Partner☞ Do not Reup',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/zOrSAtbnvvc/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/zOrSAtbnvvc/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/zOrSAtbnvvc/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/zOrSAtbnvvc/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/zOrSAtbnvvc/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Lẩu Phim',
				tags: [
					'phim',
					'phim hanh dong',
					'phim võ thuật',
					'phim hay',
					'lau phim',
					'lauphim',
					'phim lẻ',
					'lẩu phim',
					'phim le',
					'phim kháng nhật',
					'phim vo thuat',
					'phim hành động',
					'phim mới',
					'phim lẻ hành động',
					'phim lẻ hay',
					'phim hanh dong vo thuat',
				],
				categoryId: '1',
				liveBroadcastContent: 'none',
				defaultLanguage: 'vi',
				localized: {
					title: 'phim lẻ hay: Thằng Ăn Mày Ngồi Canh Mộ (FULL) phim hành động võ thuật [Lẩu Phim]',
					description:
						'✔️Ấn đăng ký có ngay phim hay để xem➥http://bit.ly/2PCdlzh\n\nTỔNG HỢP PHIM HÀNH ĐỘNG VÕ THUẬT HAY NHẤT 2020:\n\n✅ĐỘI ĐẶC NHIỆM➥https://bit.ly/34nzloO\n\n✅CHIẾN LANG (ngô kinh)➥https://bit.ly/3nJL0WV\n\n✅HỘI NỮ SÁT THỦ➥https://bit.ly/2CD8E4A\n\n✅PHONG ĐIỂU XUẤT KÍCH (lưu khải uy)➥https://bit.ly/37tdoqs\n\n✅DIỆP VẤN➥https://bit.ly/37vvHeI\n\n✅NỮ THỢ SĂN➥https://bit.ly/3pay3FT\n\n✅ĐỘI VÕ THUẬT TIỀN TRUYỆN➥https://bit.ly/3amVlnz\n\n✅YÊN CHI(triệu lệ dĩnh)➥https://bit.ly/3nvTv7z\n\n✅BIỆT ĐỘI TỔ KÍCH➥https://bit.ly/3p3z1U7\n\n✅HƯỚNG TRẬN ĐỊA MÀ TIẾN LÊN➥https://bit.ly/38kift4\n\n✅ĐẠO MỘ➥https://bit.ly/2LPy1ET\n\n#LẩuPhim\n------------------------------------------------------------------------\nTÊN GỐC➥NHÂN THIÊN ĐỊA\n© Bản quyền thuộc về Lẩu Phim và Đối Tác\n© Copyright by Lẩu Phim and Partner☞ Do not Reup',
				},
				defaultAudioLanguage: 'zh-Hans',
			},
			contentDetails: {
				duration: 'PT1H5M37S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				regionRestriction: {
					allowed: ['VN'],
				},
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2295488',
				likeCount: '4384',
				dislikeCount: '1369',
				favoriteCount: '0',
				commentCount: '231',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'aOvOjuzprlu4jWiqykWtT99yV6w',
			id: 'HHayh0A6yzM',
			snippet: {
				publishedAt: '2021-08-17T12:15:03Z',
				channelId: 'UCUleXQ_DSrwQGoLQkhsqI2g',
				title: 'Vua Ma Túy - Phim Hành Động Võ Thuật Giang Hồ 2021 | Thuyết Minh | Full HD | BigTV',
				description:
					'🚨 Tên Phim : Vua Ma Túy  - Phim Hành Động Võ Thuật 2021 - Phim Giang Hồ 2021\n🚨 Những Phim Giang Hồ Hay Nhất : \nhttps://www.youtube.com/watch?v=FR0McMK-PyU&list=PL9EkySu0piJUvNUuUkuaBTavVgqLXfkzG&index=1\n\n🚨 Link Full : https://www.youtube.com/watch?v=4gpcLGHgW4c&list=PLNKn8ueKfBA9-ojnD0iEAop8KSXGyEgJr\n\n🚨 Các Phim Hay Nhất 2021 : https://www.youtube.com/channel/UCUleXQ_DSrwQGoLQkhsqI2g\n\n                                     CHÚC CÁC BẠN XEM PHIM VUI VẺ  \n                            SHARE VÀ LIKE ỦNG HỘ KÊNH NHÉ ! ❤ ❤ ❤\n\n                             -------------------------------------------------------------------------\n#VuaMaTuy #PhimGiangHo #PhimVoThuat #BigTV #NamVung',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/HHayh0A6yzM/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/HHayh0A6yzM/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/HHayh0A6yzM/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/HHayh0A6yzM/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/HHayh0A6yzM/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'BigTV',
				tags: [
					'phim',
					'phim lẻ',
					'phim hành động',
					'phim hành động võ thuật',
					'phim 2021',
					'phim mới nhất',
					'phim mới 2021',
					'bigtv',
					'big tv',
					'phim võ thuật',
					'phim lẻ hay',
					'phim chiếu rạp mới nhất',
					'phim trung quốc',
					'phim hành động võ thuật mới nhất',
					'phim lẻ bigtv',
					'phim chiếu rạp bigtv',
					'phim thuyết minh',
					'phim võ thuật 2021',
					'phim lẻ mới nhất',
					'phim võ thuật chiếu rạp',
					'phim thuyết minh mới nhất',
					'phim giang hồ',
					'phim giang hồ 2021',
					'full hd',
					'vua ma túy',
					'vua ma túy full',
				],
				categoryId: '1',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Vua Ma Túy - Phim Hành Động Võ Thuật Giang Hồ 2021 | Thuyết Minh | Full HD | BigTV',
					description:
						'🚨 Tên Phim : Vua Ma Túy  - Phim Hành Động Võ Thuật 2021 - Phim Giang Hồ 2021\n🚨 Những Phim Giang Hồ Hay Nhất : \nhttps://www.youtube.com/watch?v=FR0McMK-PyU&list=PL9EkySu0piJUvNUuUkuaBTavVgqLXfkzG&index=1\n\n🚨 Link Full : https://www.youtube.com/watch?v=4gpcLGHgW4c&list=PLNKn8ueKfBA9-ojnD0iEAop8KSXGyEgJr\n\n🚨 Các Phim Hay Nhất 2021 : https://www.youtube.com/channel/UCUleXQ_DSrwQGoLQkhsqI2g\n\n                                     CHÚC CÁC BẠN XEM PHIM VUI VẺ  \n                            SHARE VÀ LIKE ỦNG HỘ KÊNH NHÉ ! ❤ ❤ ❤\n\n                             -------------------------------------------------------------------------\n#VuaMaTuy #PhimGiangHo #PhimVoThuat #BigTV #NamVung',
				},
				defaultAudioLanguage: 'en',
			},
			contentDetails: {
				duration: 'PT3H6M5S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				regionRestriction: {
					allowed: [
						'AU',
						'CA',
						'CH',
						'DE',
						'FR',
						'IE',
						'IS',
						'NO',
						'SE',
						'US',
						'VN',
					],
				},
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '1626611',
				likeCount: '2814',
				dislikeCount: '657',
				favoriteCount: '0',
				commentCount: '163',
			},
		},
		{
			kind: 'youtube#video',
			etag: '-fKjST-7bbMpA197IdA0hI92H5I',
			id: '99jbsuXA8nA',
			snippet: {
				publishedAt: '2021-08-23T13:36:15Z',
				channelId: 'UCFjYp-0k_p_ByOgPJt8YKvQ',
				title: 'Review kéo cắt trứng cút và cái kết bất ngờ | Ông Giáo | #Shorts',
				description:
					'Review kéo cắt trứng cút và cái kết bất ngờ | Ông Giáo | #Shorts\nTất cả đồ review chất lượng tốt mình để ở đây nhé:\nhttps://discovery.koc.com.vn/influencer/tranthangroyal\n➥Kênh TikTok: https://www.tiktok.com/@onggiaoreview?\n➥Fanpage: https://www.facebook.com/OngGiaoReview92\n➥Zalo: 0977895768\n➥Email: Tranthangroyal@gmail.com\n© Bản quyền thuộc về Ông Giáo Review\n© Copyright by Ông Giáo Review ☞ Do not Re-up\n#onggiaoreview #Reviewcathegioi #thanhreview #kienreview #onggiao #reviewcotam #reviewtot',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/99jbsuXA8nA/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/99jbsuXA8nA/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/99jbsuXA8nA/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
				channelTitle: 'Ông Giáo Review',
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Review kéo cắt trứng cút và cái kết bất ngờ | Ông Giáo | #Shorts',
					description:
						'Review kéo cắt trứng cút và cái kết bất ngờ | Ông Giáo | #Shorts\nTất cả đồ review chất lượng tốt mình để ở đây nhé:\nhttps://discovery.koc.com.vn/influencer/tranthangroyal\n➥Kênh TikTok: https://www.tiktok.com/@onggiaoreview?\n➥Fanpage: https://www.facebook.com/OngGiaoReview92\n➥Zalo: 0977895768\n➥Email: Tranthangroyal@gmail.com\n© Bản quyền thuộc về Ông Giáo Review\n© Copyright by Ông Giáo Review ☞ Do not Re-up\n#onggiaoreview #Reviewcathegioi #thanhreview #kienreview #onggiao #reviewcotam #reviewtot',
				},
			},
			contentDetails: {
				duration: 'PT34S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '489776',
				likeCount: '23849',
				dislikeCount: '1044',
				favoriteCount: '0',
				commentCount: '59',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'NCXpq1BYT07Wamu26QAVgLyKILk',
			id: 'hKBUymPQd3k',
			snippet: {
				publishedAt: '2021-08-24T12:13:13Z',
				channelId: 'UCrXTLKK7xUEWB7BHV2fyBdw',
				title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 24/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
				description:
					'🔥Bản Tin Mới Nhất Covid-19 Sáng 24/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/hKBUymPQd3k/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/hKBUymPQd3k/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/hKBUymPQd3k/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/hKBUymPQd3k/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/hKBUymPQd3k/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Tin Tức 24h',
				tags: [
					'Tin tức 24h',
					'tin tức 24h tv',
					'tin tức mới nhất',
					'tin tức covid 19 mới nhất',
					'Covid 19 mới nhất',
					'covid 19 moi nhat',
					'covid hôm nay ở việt nam',
					'tin covid 19 mới nhất',
					'covid hôm nay',
					'cập nhật dịch covid-19',
					'tin nóng về dịch covid 19',
					'tin về dịch covid 19 mới nhất',
					'tin dịch covid 19 mới nhất hôm nay',
					'tình hình dịch covid 19',
					'tin tức dịch covid 19 mới nhất',
					'dịch covid 19 ở việt nam',
					'covid-19 hôm nay',
					'covid 19 ngày hôm nay',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 24/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
					description:
						'🔥Bản Tin Mới Nhất Covid-19 Sáng 24/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
				},
			},
			contentDetails: {
				duration: 'PT11H54M58S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '394850',
				likeCount: '4306',
				dislikeCount: '142',
				favoriteCount: '0',
				commentCount: '5',
			},
		},
		{
			kind: 'youtube#video',
			etag: '_fTIYc28DY10qQJ5hR_eHL554As',
			id: 'rBYgsIQid8c',
			snippet: {
				publishedAt: '2021-08-25T12:24:10Z',
				channelId: 'UCrXTLKK7xUEWB7BHV2fyBdw',
				title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 25/8 | Bình Dương dự báo 120.000 ca nhiễm',
				description:
					'🔥Bản Tin Mới Nhất Covid-19 Sáng 25/8 | Bình Dương dự báo 120.000 ca nhiễm\n----------------------------------------------------\nXem thêm thông tin chi tiết tại: https://youtube.com/playlist?list=PLayRHQCsjlU8k9ShfxkrPJ8xjwlOeffaA \nĐăng ký kênh: https://www.youtube.com/channel/UCrXTLKK7xUEWB7BHV2fyBdw\nFacebook: https://www.facebook.com/tt24hnews/\nKênh Tin Tức 24h liên tục cập nhật các tin tức mới nhất trong ngày\n#tintuc24h #tintuc24htv #tinmoinhat #tintucmoi #news #tt24h',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/rBYgsIQid8c/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/rBYgsIQid8c/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/rBYgsIQid8c/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/rBYgsIQid8c/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/rBYgsIQid8c/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Tin Tức 24h',
				tags: [
					'Tin tức 24h',
					'tin tức 24h tv',
					'tin tức mới nhất',
					'tin tức covid 19 mới nhất',
					'Covid 19 mới nhất',
					'covid 19 moi nhat',
					'covid hôm nay ở việt nam',
					'tin covid 19 mới nhất',
					'covid hôm nay',
					'cập nhật dịch covid-19',
					'tin nóng về dịch covid 19',
					'tin về dịch covid 19 mới nhất',
					'covid hà nội hôm nay',
					'covid hà nội mới nhất',
					'covid hà nội ngày hôm nay',
					'covid hà nội mới nhất hôm nay',
					'covid hà nội sáng nay',
					'ca covid hà nội',
					'ca covid hà nội mới nhất',
					'hà nội mấy ca covid',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 25/8 | Bình Dương dự báo 120.000 ca nhiễm',
					description:
						'🔥Bản Tin Mới Nhất Covid-19 Sáng 25/8 | Bình Dương dự báo 120.000 ca nhiễm\n----------------------------------------------------\nXem thêm thông tin chi tiết tại: https://youtube.com/playlist?list=PLayRHQCsjlU8k9ShfxkrPJ8xjwlOeffaA \nĐăng ký kênh: https://www.youtube.com/channel/UCrXTLKK7xUEWB7BHV2fyBdw\nFacebook: https://www.facebook.com/tt24hnews/\nKênh Tin Tức 24h liên tục cập nhật các tin tức mới nhất trong ngày\n#tintuc24h #tintuc24htv #tinmoinhat #tintucmoi #news #tt24h',
				},
			},
			contentDetails: {
				duration: 'PT11H54M56S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '299300',
				likeCount: '2351',
				dislikeCount: '106',
				favoriteCount: '0',
				commentCount: '0',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'fDweYfZgu0xTxu_eDFTXYAyTyF0',
			id: 'zBCWDI8mfbQ',
			snippet: {
				publishedAt: '2021-08-14T13:47:36Z',
				channelId: 'UC9xeuekJd88ku9LDcmGdUOA',
				title: 'MANCHESTER UNITED - LEEDS UNITED | POGBA POKER, BRUNO HATTRICK , QUỶ ĐỎ THẮNG TƯNG BỪNG | EPL 21/22',
				description:
					'MANCHESTER UNITED - LEEDS UNITED | POGBA POKER, BRUNO HATTRICK , QUỶ ĐỎ THẮNG TƯNG BỪNG | EPL 21/22\n\n#NgoaiHangAnh #ManchesterUnited #LeedsUnited\n----------------------------\n❗Mùa giải mới đến rồi mà giãn cách xã hội, không lắp được K+?\nBạn chớ lo! CHỈ CẦN ĐẶT CỌC LÀ XEM NGAY NGOẠI HẠNG ANH KHỞI TRANH.\n👉🏻  Đặt ngay: https://bit.ly/3jPQKxA',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/zBCWDI8mfbQ/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/zBCWDI8mfbQ/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/zBCWDI8mfbQ/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
				channelTitle: 'Kplus Sports',
				tags: [
					'K+',
					'Truyền hình K+',
					'k+ Sports',
					'kplus',
					'kplus sports',
					'bóng đá',
					'tin bóng đá',
					'tin thể thao',
					'bóng đá ngoại hạng anh',
					'ngoại hạng anh',
					'ngoai hang anh',
					'ngoại hạng anh 2020 2021',
					'premier league',
					'premier league 2020 2021',
					'highlights ngoại hạng anh',
					'epl highlights',
					'champions league',
					'champions league 2020-2021',
					'manchester united',
					'europa league',
					'european',
					'man city',
					'chelsea',
					'arsenal',
					'man united',
					'liverpool',
					'tottenham',
					'brentford arsenal',
					'brentford 2-0 arsenal',
					'the gunners',
					'ngoại hạng anh 21/22',
				],
				categoryId: '17',
				liveBroadcastContent: 'none',
				localized: {
					title: 'MANCHESTER UNITED - LEEDS UNITED | POGBA POKER, BRUNO HATTRICK , QUỶ ĐỎ THẮNG TƯNG BỪNG | EPL 21/22',
					description:
						'MANCHESTER UNITED - LEEDS UNITED | POGBA POKER, BRUNO HATTRICK , QUỶ ĐỎ THẮNG TƯNG BỪNG | EPL 21/22\n\n#NgoaiHangAnh #ManchesterUnited #LeedsUnited\n----------------------------\n❗Mùa giải mới đến rồi mà giãn cách xã hội, không lắp được K+?\nBạn chớ lo! CHỈ CẦN ĐẶT CỌC LÀ XEM NGAY NGOẠI HẠNG ANH KHỞI TRANH.\n👉🏻  Đặt ngay: https://bit.ly/3jPQKxA',
				},
			},
			contentDetails: {
				duration: 'PT12M51S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				regionRestriction: {
					allowed: ['VN'],
				},
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2709444',
				likeCount: '30277',
				dislikeCount: '1103',
				favoriteCount: '0',
				commentCount: '3750',
			},
		},
		{
			kind: 'youtube#video',
			etag: '2ZiFS1r1gUrxlOvxpLZe7mFQ-K8',
			id: 'ye6Tmwcjrh0',
			snippet: {
				publishedAt: '2021-08-21T12:32:58Z',
				channelId: 'UCnLu_gk-FZF7Jt5KoVQU52Q',
				title: 'Công an, quân đội chi viện cho TP Hồ Chí Minh phòng chống dịch | VTVcab Tin tức',
				description:
					'Công an, quân đội chi viện cho TP Hồ Chí Minh phòng chống dịch | VTVcab Tin tức \nVTVcab Tin tức là kênh tin tức online chính thức của Truyền hình Cáp Việt Nam.  \nĐăng Ký kênh cập nhật tin tức mới nhất: https://bit.ly/2V6YXRp\n-----------------------------------------------------------------------------------------------------------\nTrung tâm Online - Tổng công ty Truyền hình Cáp Việt Nam\nĐịa chỉ: số 3 ngõ 84 phố Ngọc Khánh, Giảng Võ, Ba Đình, Hà Nội\nWebsite: https://www.vtvcab.vn/ \nEmail: trungtamonline@vtvcab.vn\nBản quyền thuộc về  VTVcab - Truyền Hình Cáp Việt Nam',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/ye6Tmwcjrh0/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/ye6Tmwcjrh0/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/ye6Tmwcjrh0/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/ye6Tmwcjrh0/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/ye6Tmwcjrh0/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'VTVcab Tin tức',
				tags: [
					'công an chi viện tp hồ chí minh',
					'sinh viên bạch mai',
					'sinh viên bạch mai lên đường chống dịch',
					'300 bac sy quan y',
					'bac sy quan y',
					'bác sỹ quân y',
					'vtv',
					'vtv1',
					'VTVcab Tin tức',
					'tin tức hôm nay',
					'tin tức mới nhất',
					'tin tức covid 19',
					'tin mới',
					'tin covid 19',
					'covid 19',
					'thời sự',
					'tin thời sự',
					'thời sự hôm nay',
					'tin tức vtv',
					'tin thời sự vtv',
					'vtv 1',
					'cập nhật tin tức',
					'cập nhật tin mới',
					'covid-19',
				],
				categoryId: '25',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Công an, quân đội chi viện cho TP Hồ Chí Minh phòng chống dịch | VTVcab Tin tức',
					description:
						'Công an, quân đội chi viện cho TP Hồ Chí Minh phòng chống dịch | VTVcab Tin tức \nVTVcab Tin tức là kênh tin tức online chính thức của Truyền hình Cáp Việt Nam.  \nĐăng Ký kênh cập nhật tin tức mới nhất: https://bit.ly/2V6YXRp\n-----------------------------------------------------------------------------------------------------------\nTrung tâm Online - Tổng công ty Truyền hình Cáp Việt Nam\nĐịa chỉ: số 3 ngõ 84 phố Ngọc Khánh, Giảng Võ, Ba Đình, Hà Nội\nWebsite: https://www.vtvcab.vn/ \nEmail: trungtamonline@vtvcab.vn\nBản quyền thuộc về  VTVcab - Truyền Hình Cáp Việt Nam',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT6M6S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '1064271',
				likeCount: '4750',
				dislikeCount: '729',
				favoriteCount: '0',
				commentCount: '1368',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'LA7-A_U1SSooFQ76_dNRpYqWbw8',
			id: 'bcfSy1VFD-o',
			snippet: {
				publishedAt: '2021-08-23T18:16:55Z',
				channelId: 'UC5o1kUDVM2yo8CIm_RIIf0w',
				title: '[ DỊCH VIỆT NAM ] TRƯA 23/8 | @TTV NEWS  Quá khủng khiếp 737 ca t.ử v.ong trong 48 giờ',
				description:
					'[ DỊCH VIỆT NAM ] TRƯA 23/8 | @TTV NEWS   Quá khủng khiếp 737 ca t.ử v.ong trong 48 giờ\n\nTIN NÓNG NÊN XEM :http://bit.ly/TTV-CAP-NHAT\nhttp://bit.ly/TIN-NONG-CAP-NHAT-TIN-TUC-VIET\nỦng Hộ TIN TỨC VIỆT : https://unghotoi.com/tintucviet\nTrên kênh TTV NEWS Quỳnh Anh xin gửi tới quý vị và các bạn những tin tức nóng hổi về tình hình thời sự trong nước ! Chúc cả nhà vui vẻ !\n\n▶ ĐĂNG KÝ KÊNH TẠI ĐÂY: http://bit.ly/TTVNews và biểu tượng 🔔 phía dưới góc phải của video để không bỏ lỡ những video  tin tức mới nhất các bạn nhé\n\n#Thoisu #Tintucviet #TTVNEWS',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/bcfSy1VFD-o/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/bcfSy1VFD-o/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/bcfSy1VFD-o/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/bcfSy1VFD-o/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/bcfSy1VFD-o/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'TTV NEWS',
				tags: [
					'tin tức việt',
					'tin',
					'tức',
					'việt',
					'TIN TUC VIET',
					'tin tuc 24h',
					'tin tuc',
					'tin tuc 247',
					'tin tức 24h',
					'tin tuc moi nhat',
					'tin tuc moi',
					'tin tức',
					'tin tuc 24',
					'tin tuc 24h moi nhat',
					'tin tức nóng',
					'tin nóng',
				],
				categoryId: '25',
				liveBroadcastContent: 'none',
				localized: {
					title: '[ DỊCH VIỆT NAM ] TRƯA 23/8 | @TTV NEWS  Quá khủng khiếp 737 ca t.ử v.ong trong 48 giờ',
					description:
						'[ DỊCH VIỆT NAM ] TRƯA 23/8 | @TTV NEWS   Quá khủng khiếp 737 ca t.ử v.ong trong 48 giờ\n\nTIN NÓNG NÊN XEM :http://bit.ly/TTV-CAP-NHAT\nhttp://bit.ly/TIN-NONG-CAP-NHAT-TIN-TUC-VIET\nỦng Hộ TIN TỨC VIỆT : https://unghotoi.com/tintucviet\nTrên kênh TTV NEWS Quỳnh Anh xin gửi tới quý vị và các bạn những tin tức nóng hổi về tình hình thời sự trong nước ! Chúc cả nhà vui vẻ !\n\n▶ ĐĂNG KÝ KÊNH TẠI ĐÂY: http://bit.ly/TTVNews và biểu tượng 🔔 phía dưới góc phải của video để không bỏ lỡ những video  tin tức mới nhất các bạn nhé\n\n#Thoisu #Tintucviet #TTVNEWS',
				},
			},
			contentDetails: {
				duration: 'PT11H54M53S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '337570',
				likeCount: '926',
				dislikeCount: '113',
				favoriteCount: '0',
				commentCount: '18',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'BfOJt6bHlAkbYX_KXBFaZBebCzA',
			id: 'ZI6iHcaezXg',
			snippet: {
				publishedAt: '2021-08-24T10:00:12Z',
				channelId: 'UC1q0gjs1QXa7_vz7Z34IwYQ',
				title: '"SIÊU NHÍ" 4 TUỔI lên tông CAO CHÓT VÓT làm NÁO LOẠN cả trường quay | Ai Sẽ Thành Sao Nhí | THVL',
				description:
					'"SIÊU NHÍ" 4 TUỔI lên tông CAO CHÓT VÓT làm NÁO LOẠN cả trường quay | Ai Sẽ Thành Sao Nhí | THVL\n\nTải ứng dụng THVLi để xem nhiều hơn:\n     Android: http://bit.ly/THVLi_Android\n     iOS: http://bit.ly/THVLi_iOS\n     hoặc xem trực tiếp trên http://thvli.vn\n\nMọi đóng góp để chương trình hoàn thiện hơn vui lòng liên hệ: \nWebsite: http://www.thvli.vn \n                http://www.thvl.vn\nFacebook: https://www.facebook.com/VinhLongTV\nSHARE và SUBSCRIBE các kênh YouTube của Đài Truyền Hình Vĩnh Long \n► THVL Giải Trí: https://www.youtube.com/THVLGiaiTri\n► THVL Phim: https://www.youtube.com/THVLPhim\n► THVL Tổng Hợp: https://www.youtube.com/THVLTongHop\n► THVL Thiếu Nhi: https://www.youtube.com/THVLThieuNhi\n► THVL Ca Nhạc: https://www.youtube.com/THVLCaNhac\n► Truyen Hinh Vinh Long: https://www.youtube.com/VinhLongTV\n► Vinh Long Radio: https://www.youtube.com/VinhLongRadio\n\n#THVL #THVLCaNhac #VinhLongTV #TruyenHinhVinhLong',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/ZI6iHcaezXg/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/ZI6iHcaezXg/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/ZI6iHcaezXg/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/ZI6iHcaezXg/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/ZI6iHcaezXg/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'THVL Ca Nhạc',
				tags: [
					'giọng ca nhí',
					'giọng ca nhí hay nhất',
					'giọng ca nhí hay nhất việt nam',
					'ca sĩ nhí',
					'ca sĩ nhí hay nhất',
					'song ca nhí',
					'ca nhạc nhí 2021',
					'ca nhạc nhí',
					'siêu nhí',
					'bolero',
					'bolero nhí',
					'ai sẽ thành sao',
					'ai sẽ thành sao nhí',
					'ai sẽ thành sao nhí 2017',
					'ai sẽ thành sao nhí hay nhất',
					'tường vi',
					'tuyệt đỉnh song ca nhí hay nhất',
					'thành long',
					'tường vi thành long',
					'thủy tiên',
					'thanh thảo',
					'THVL',
					'ca nhạc',
					'THVL Ca Nhạc',
					'vĩnh long tv',
					'Truyền hình vĩnh long',
					'đài truyền hình vĩnh long',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: '"SIÊU NHÍ" 4 TUỔI lên tông CAO CHÓT VÓT làm NÁO LOẠN cả trường quay | Ai Sẽ Thành Sao Nhí | THVL',
					description:
						'"SIÊU NHÍ" 4 TUỔI lên tông CAO CHÓT VÓT làm NÁO LOẠN cả trường quay | Ai Sẽ Thành Sao Nhí | THVL\n\nTải ứng dụng THVLi để xem nhiều hơn:\n     Android: http://bit.ly/THVLi_Android\n     iOS: http://bit.ly/THVLi_iOS\n     hoặc xem trực tiếp trên http://thvli.vn\n\nMọi đóng góp để chương trình hoàn thiện hơn vui lòng liên hệ: \nWebsite: http://www.thvli.vn \n                http://www.thvl.vn\nFacebook: https://www.facebook.com/VinhLongTV\nSHARE và SUBSCRIBE các kênh YouTube của Đài Truyền Hình Vĩnh Long \n► THVL Giải Trí: https://www.youtube.com/THVLGiaiTri\n► THVL Phim: https://www.youtube.com/THVLPhim\n► THVL Tổng Hợp: https://www.youtube.com/THVLTongHop\n► THVL Thiếu Nhi: https://www.youtube.com/THVLThieuNhi\n► THVL Ca Nhạc: https://www.youtube.com/THVLCaNhac\n► Truyen Hinh Vinh Long: https://www.youtube.com/VinhLongTV\n► Vinh Long Radio: https://www.youtube.com/VinhLongRadio\n\n#THVL #THVLCaNhac #VinhLongTV #TruyenHinhVinhLong',
				},
			},
			contentDetails: {
				duration: 'PT12M48S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '197708',
				likeCount: '2551',
				dislikeCount: '120',
				favoriteCount: '0',
				commentCount: '54',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'm7l17XH65KufbeBmth5AR6nhZ24',
			id: 'g80QY6j6jrc',
			snippet: {
				publishedAt: '2021-08-13T03:00:11Z',
				channelId: 'UCcAfy4gGeiSFLRpyg8Xxq_g',
				title: 'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021',
				description:
					'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021► Đăng Kí Theo Dõi Youtube Orinn tại: http://ent.orinn.net/\n► Theo dõi fanpage Facebook: https://www.facebook.com/OrinnMusic/\n► Website: http://orinn.net/\n📷 Photo \nTRACKLIST:\n1. Rồi Tới Luôn\n2. Họ Yêu Ai Mất Rồi\n3. Kẹo Bông Gòn\n4. Cô Đơn Dành Cho Ai \n5. Nhớ Người Hay Nhớ\n6. Em Có Yêu Anh Không\n7. Kẻ Điên Tin Vào Tình Yêu\n8. Cafe Không Đường\n9. Sầu Tương Tư\n10. Phương Xa \n11. Hẹn Yêu \n12. Che Giấu Nỗi Đau\n13. Đoạn Tuyệt Nàng Đi\n14. Đất Khánh Qua Người\n15. Anh Từng Cố Gắng\n-------------------------------------------------------------------\n► Đây là các ca khúc được độc quyền,tác quyền bởi Orinn và các đối tác của Orinn. Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.\n☞ LH Vấn Đề Bản Quyền: contact@orinn.net\n► Hợp tác, quảng cáo, làm video, đăng nhạc lên Orinn liên hệ chúng tôi qua mail: contact@orinn.net\n\n© Bản quyền Video thuộc về Orinn \n© Copyright by Orinn  ☞ Do not Reup',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/g80QY6j6jrc/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/g80QY6j6jrc/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/g80QY6j6jrc/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/g80QY6j6jrc/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/g80QY6j6jrc/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Orinn Music Trending',
				tags: [
					'rồi tới luôn remix',
					'roi toi luon remix',
					'rồi tới luôn',
					'roi toi luon',
					'remix rồi tới luôn',
					'remix roi toi luon',
					'rồi tới luôn edm',
					'roi toi luon edm',
					'rồi tới luôn remix tik tok',
					'Edm tik tok',
					'edm remix',
					'remix',
					'edm tik tok 2021',
					'remix 2021',
					'roi toi luon remix tik tok',
					'rồi tới luôn tik tok',
					'ngày mình bên nhau dây tơ hồng lại nối thành đôi',
					'Đang ung dung trên trời remix',
					'cô đơn dành cho ai remix',
					'co don danh cho ai remix',
					'nhạc edm tik tok',
					'orinn music trending',
					'nhạc trẻ remix',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021',
					description:
						'Nhạc EDM Tik Tok - Rồi Tới Luôn, Cô Đơn Dành Cho Ai - Nhạc Trẻ Việt Remix Hay Nhất 2021► Đăng Kí Theo Dõi Youtube Orinn tại: http://ent.orinn.net/\n► Theo dõi fanpage Facebook: https://www.facebook.com/OrinnMusic/\n► Website: http://orinn.net/\n📷 Photo \nTRACKLIST:\n1. Rồi Tới Luôn\n2. Họ Yêu Ai Mất Rồi\n3. Kẹo Bông Gòn\n4. Cô Đơn Dành Cho Ai \n5. Nhớ Người Hay Nhớ\n6. Em Có Yêu Anh Không\n7. Kẻ Điên Tin Vào Tình Yêu\n8. Cafe Không Đường\n9. Sầu Tương Tư\n10. Phương Xa \n11. Hẹn Yêu \n12. Che Giấu Nỗi Đau\n13. Đoạn Tuyệt Nàng Đi\n14. Đất Khánh Qua Người\n15. Anh Từng Cố Gắng\n-------------------------------------------------------------------\n► Đây là các ca khúc được độc quyền,tác quyền bởi Orinn và các đối tác của Orinn. Đề nghị các tổ chức, cá nhân không reup dưới mọi hình thức.\n☞ LH Vấn Đề Bản Quyền: contact@orinn.net\n► Hợp tác, quảng cáo, làm video, đăng nhạc lên Orinn liên hệ chúng tôi qua mail: contact@orinn.net\n\n© Bản quyền Video thuộc về Orinn \n© Copyright by Orinn  ☞ Do not Reup',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT55M16S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2020101',
				likeCount: '35557',
				dislikeCount: '1409',
				favoriteCount: '0',
				commentCount: '415',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'i6jaX7RgSphTBXFdOI38kdTQm10',
			id: 'MW7R_l0m-Ro',
			snippet: {
				publishedAt: '2021-08-19T14:30:13Z',
				channelId: 'UCHNYJheRUSucT2rERYMn45A',
				title: 'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động',
				description:
					'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động\nNhững video mới nhất, độc nhất của SIÊU TÀI NĂNG NHÍ sẽ được đăng tải trên Madison Media Group. \n*XEM THÊM CLIP SIÊU TÀI NĂNG NHÍ MÙA 2:\n👉 Tập 14 FULL - Siêu Tài Năng Nhí: https://youtu.be/XTcPlvMYFFg\n👉 Tập 13 FULL - Siêu Tài Năng Nhí: https://youtu.be/_0MmHw3okT0\n👉 Tập 12 FULL - Siêu Tài Năng Nhí: https://youtu.be/O6xV3FU4-Tg\n👉 Tập 11 FULL - Siêu Tài Năng Nhí: https://youtu.be/TvxlqsBykrY\n👉 Tập 10 FULL - Siêu Tài Năng Nhí: https://youtu.be/EEQ_CiP9goM\n👉 Tập 9 FULL - Siêu Tài Năng Nhí: https://youtu.be/O66uejoCllM\n👉 Tập 8 FULL - Siêu Tài Năng Nhí: https://youtu.be/XdMkQbqjjvw\n👉 Tập 7 FULL - Siêu Tài Năng Nhí: https://youtu.be/1vBEMSWbCAw\n👉 Tập 6 FULL - Siêu Tài Năng Nhí: https://youtu.be/5_S1u1Z3zWs\n👉 Tập 5 FULL - Siêu Tài Năng Nhí: https://youtu.be/dpJKx_FnIwk\n👉 Tập 4 FULL - Siêu Tài Năng Nhí: https://youtu.be/UaNLPXmmyBI\n👉 Tập 3 FULL - Siêu Tài Năng Nhí: https://youtu.be/193D08jJKPs\n👉 Tập 2 FULL - Siêu Tài Năng Nhí: https://youtu.be/0f7RkQgBkh0\n👉 Tập 1 FULL - Siêu Tài Năng Nhí: https://youtu.be/ddi2ljNGmRE\n👉 Tiết mục Siêu Nhí Đu Dây: https://youtu.be/RCIpUssOf2E\n👉 Tiết mục Siêu Nhí Rap: https://youtu.be/zkuvEOQziv4\n👉 Tiết mục Siêu Nhí Cầu Mây: https://youtu.be/XM9vkZxx9nU\n👉 Tiết mục Siêu Nhí Nhảy Hip Hop: https://youtu.be/AYz4KBAUMmY\n👉 Tiết mục Siêu Nhí Uốn Dẻo: https://youtu.be/tYqKasMJxfw\n👉 Tiết mục Siêu Nhí Nữ Đá Bóng: https://youtu.be/QCU2P0CKtUs\n👉 Tiết mục Siêu Nhí Làm Bánh Ít:  https://youtu.be/wm5NtmfdabM\n👉 Tiết mục Siêu Nhí Sasuke: https://youtu.be/XNN6OCD59WE\n👉 Tiết mục Siêu Nhí Khiếm Thị Hát: https://youtu.be/uZUhbU3vHCI\n👉 Tiết mục Siêu Nhí Wushu: https://youtu.be/ey9k_Wbrj2Y\n👉 Tiết mục Siêu Nhí Lồng Tiếng: https://youtu.be/IvgbaaWIuyE\n👉 Tiết mục Siêu Nhí Đá Bóng Duet: https://youtu.be/7BQR9lxdy1w\n👉 Tiết mục Siêu Nhí Bắn Ná: https://youtu.be/_pl7OouLUgE\n👉 Tiết mục Siêu Nhí Rubik: https://youtu.be/0raJvkeINQg\n👉 Tiết mục Siêu Nhí Nhảy Cover: https://youtu.be/ViwIr8TpatM\n👉 Tiết mục Siêu Nhí Thần Đồng 3 Tuổi: https://youtu.be/O_Jj2KmbVRc\n👉 Tiết mục Siêu Nhí Múa Đương Đại: https://youtu.be/D8EEXwSYja0\n👉 Tiết mục Siêu Nhí Đánh Con Quay: https://youtu.be/RL_MK1PON4k\n👉 Tiết mục Siêu Nhí Tính Nhanh: https://youtu.be/fIvwlnMlOu8\n👉 Tiết mục Siêu Nhí Muay Thái: https://youtu.be/icAYftQ5L4I\n👉 Tiết mục Siêu Nhí Thổi Saxophone: https://youtu.be/nLqmljLHmrw\n👉 Tiết mục Siêu Nhí Trượt Ván: https://youtu.be/SeCBRvT7SVU\n👉 Tiết mục Siêu Nhí Đàn Violin: https://youtu.be/j5eW2gevG1Y\n👉 Tiết mục Siêu Nhí Tạo Kiểu Tóc: https://youtu.be/pYAkhz3uDu8\n\n*XEM LẠI SIÊU TÀI NĂNG NHÍ MÙA 1:\n👉 Siêu Tài Năng Nhí-Tập 15 FULL: https://youtu.be/l-_6S6fkKvw\n👉 Siêu Tài Năng Nhí-Tập 14 FULL: https://youtu.be/dzKxHRVLzyc\n👉 Siêu Tài Năng Nhí-Tập 13 FULL: https://youtu.be/K3ph2WxOAT0\n👉 Siêu Tài Năng Nhí-Tập 12 FULL: https://youtu.be/b9mxIv6OlVo \n👉 Siêu Tài Năng Nhí-Tập 11 FULL: https://youtu.be/9ilrrKyTICA\n👉 Siêu Tài Năng Nhí-Tập 10 FULL: https://youtu.be/3g_8erg7cUs\n👉 Siêu Tài Năng Nhí-Tập 9 FULL: https://youtu.be/NtXj7mPJmpI\n👉 Siêu Tài Năng Nhí-Tập 8 FULL: https://youtu.be/uGOYLy4ZZ2U\n👉 Siêu Tài Năng Nhí-Tập 7 FULL: https://youtu.be/jpAD5KG4wY4\n👉 Siêu Tài Năng Nhí-Tập 6 FULL: https://youtu.be/McRlQjXkcS0\n👉 Siêu Tài Năng Nhí-Tập 5 FULL: https://youtu.be/kIAh_STPZ8o\n👉 Siêu Tài Năng Nhí-Tập 4 FULL: https://youtu.be/lsdf_P5e9lU\n👉 Siêu Tài Năng Nhí-Tập 3 FULL: https://youtu.be/DfDb_3LOpJA\n👉 Siêu Tài Năng Nhí-Tập 2 FULL: https://youtu.be/dfk5qsYc4Ms\n👉 Siêu Tài Năng Nhí-Tập 1 FULL: https://youtu.be/lTrdwlZw1Uw\n\n***Theo dõi các kênh chính thức từ chương trình*** \n👉 Facebook: https://bit.ly/Super10STNN\n👉 Youtube: https://bit.ly/3iL5P0N\n👉 TikTok: https://www.tiktok.com/@madisonent\n👉 Instagram: https://www.instagram.com/madison.ent\n __________________________________\nSuper 10- Siêu Tài Năng Nhí là chương trình tìm kiếm những khả năng tiềm ẩn ở độ tuổi 4-14; chương trình sẽ đặt ra những thử thách giúp các bé vượt qua khả năng của chính mình. Super 10 với sự góp mặt của những ngôi sao Trấn Thành, Hari Won, Gil Lê và những khách mời tên tuổi. Chương trình được phát sóng trên HTV7.\n#TranThanh #HariWon #SieuTaiNangNhi #GilLe  #Super10',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/MW7R_l0m-Ro/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Madison Media Group',
				tags: [
					'madison media',
					'madison media group',
					'siêu tài năng nhí mùa 2',
					'siêu tài năng nhí',
					'trấn thành',
					'trấn thành hari won',
					'super 10',
					'siêu tài nhí tập 1',
					'hari won',
					'game show 2021',
					'siêu tài nhí 2021',
					'tài năng nhí',
					'tài năng nhí 2021',
					'siêu 10 tài năng nhí',
					'siêu nhí',
					'siêu nhí tài năng',
					'vivo tv siêu tài năng nhí',
					'siêu tài năng nhí tập 1',
					'chung kết siêu tài năng nhí',
					'siêu tài năng nhí chung kết',
					'trấn thành khóc',
					'hari won khóc',
					'top 10 siêu tài năng nhí',
					'quyền linh khóc',
					'gil lê khóc',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động',
					description:
						'SIÊU TÀI NĂNG NHÍ 2 - CHUNG KẾT | Trấn Thành, Hari Won, Quyền Linh, Gil Lê phải BẬT KHÓC vì xúc động\nNhững video mới nhất, độc nhất của SIÊU TÀI NĂNG NHÍ sẽ được đăng tải trên Madison Media Group. \n*XEM THÊM CLIP SIÊU TÀI NĂNG NHÍ MÙA 2:\n👉 Tập 14 FULL - Siêu Tài Năng Nhí: https://youtu.be/XTcPlvMYFFg\n👉 Tập 13 FULL - Siêu Tài Năng Nhí: https://youtu.be/_0MmHw3okT0\n👉 Tập 12 FULL - Siêu Tài Năng Nhí: https://youtu.be/O6xV3FU4-Tg\n👉 Tập 11 FULL - Siêu Tài Năng Nhí: https://youtu.be/TvxlqsBykrY\n👉 Tập 10 FULL - Siêu Tài Năng Nhí: https://youtu.be/EEQ_CiP9goM\n👉 Tập 9 FULL - Siêu Tài Năng Nhí: https://youtu.be/O66uejoCllM\n👉 Tập 8 FULL - Siêu Tài Năng Nhí: https://youtu.be/XdMkQbqjjvw\n👉 Tập 7 FULL - Siêu Tài Năng Nhí: https://youtu.be/1vBEMSWbCAw\n👉 Tập 6 FULL - Siêu Tài Năng Nhí: https://youtu.be/5_S1u1Z3zWs\n👉 Tập 5 FULL - Siêu Tài Năng Nhí: https://youtu.be/dpJKx_FnIwk\n👉 Tập 4 FULL - Siêu Tài Năng Nhí: https://youtu.be/UaNLPXmmyBI\n👉 Tập 3 FULL - Siêu Tài Năng Nhí: https://youtu.be/193D08jJKPs\n👉 Tập 2 FULL - Siêu Tài Năng Nhí: https://youtu.be/0f7RkQgBkh0\n👉 Tập 1 FULL - Siêu Tài Năng Nhí: https://youtu.be/ddi2ljNGmRE\n👉 Tiết mục Siêu Nhí Đu Dây: https://youtu.be/RCIpUssOf2E\n👉 Tiết mục Siêu Nhí Rap: https://youtu.be/zkuvEOQziv4\n👉 Tiết mục Siêu Nhí Cầu Mây: https://youtu.be/XM9vkZxx9nU\n👉 Tiết mục Siêu Nhí Nhảy Hip Hop: https://youtu.be/AYz4KBAUMmY\n👉 Tiết mục Siêu Nhí Uốn Dẻo: https://youtu.be/tYqKasMJxfw\n👉 Tiết mục Siêu Nhí Nữ Đá Bóng: https://youtu.be/QCU2P0CKtUs\n👉 Tiết mục Siêu Nhí Làm Bánh Ít:  https://youtu.be/wm5NtmfdabM\n👉 Tiết mục Siêu Nhí Sasuke: https://youtu.be/XNN6OCD59WE\n👉 Tiết mục Siêu Nhí Khiếm Thị Hát: https://youtu.be/uZUhbU3vHCI\n👉 Tiết mục Siêu Nhí Wushu: https://youtu.be/ey9k_Wbrj2Y\n👉 Tiết mục Siêu Nhí Lồng Tiếng: https://youtu.be/IvgbaaWIuyE\n👉 Tiết mục Siêu Nhí Đá Bóng Duet: https://youtu.be/7BQR9lxdy1w\n👉 Tiết mục Siêu Nhí Bắn Ná: https://youtu.be/_pl7OouLUgE\n👉 Tiết mục Siêu Nhí Rubik: https://youtu.be/0raJvkeINQg\n👉 Tiết mục Siêu Nhí Nhảy Cover: https://youtu.be/ViwIr8TpatM\n👉 Tiết mục Siêu Nhí Thần Đồng 3 Tuổi: https://youtu.be/O_Jj2KmbVRc\n👉 Tiết mục Siêu Nhí Múa Đương Đại: https://youtu.be/D8EEXwSYja0\n👉 Tiết mục Siêu Nhí Đánh Con Quay: https://youtu.be/RL_MK1PON4k\n👉 Tiết mục Siêu Nhí Tính Nhanh: https://youtu.be/fIvwlnMlOu8\n👉 Tiết mục Siêu Nhí Muay Thái: https://youtu.be/icAYftQ5L4I\n👉 Tiết mục Siêu Nhí Thổi Saxophone: https://youtu.be/nLqmljLHmrw\n👉 Tiết mục Siêu Nhí Trượt Ván: https://youtu.be/SeCBRvT7SVU\n👉 Tiết mục Siêu Nhí Đàn Violin: https://youtu.be/j5eW2gevG1Y\n👉 Tiết mục Siêu Nhí Tạo Kiểu Tóc: https://youtu.be/pYAkhz3uDu8\n\n*XEM LẠI SIÊU TÀI NĂNG NHÍ MÙA 1:\n👉 Siêu Tài Năng Nhí-Tập 15 FULL: https://youtu.be/l-_6S6fkKvw\n👉 Siêu Tài Năng Nhí-Tập 14 FULL: https://youtu.be/dzKxHRVLzyc\n👉 Siêu Tài Năng Nhí-Tập 13 FULL: https://youtu.be/K3ph2WxOAT0\n👉 Siêu Tài Năng Nhí-Tập 12 FULL: https://youtu.be/b9mxIv6OlVo \n👉 Siêu Tài Năng Nhí-Tập 11 FULL: https://youtu.be/9ilrrKyTICA\n👉 Siêu Tài Năng Nhí-Tập 10 FULL: https://youtu.be/3g_8erg7cUs\n👉 Siêu Tài Năng Nhí-Tập 9 FULL: https://youtu.be/NtXj7mPJmpI\n👉 Siêu Tài Năng Nhí-Tập 8 FULL: https://youtu.be/uGOYLy4ZZ2U\n👉 Siêu Tài Năng Nhí-Tập 7 FULL: https://youtu.be/jpAD5KG4wY4\n👉 Siêu Tài Năng Nhí-Tập 6 FULL: https://youtu.be/McRlQjXkcS0\n👉 Siêu Tài Năng Nhí-Tập 5 FULL: https://youtu.be/kIAh_STPZ8o\n👉 Siêu Tài Năng Nhí-Tập 4 FULL: https://youtu.be/lsdf_P5e9lU\n👉 Siêu Tài Năng Nhí-Tập 3 FULL: https://youtu.be/DfDb_3LOpJA\n👉 Siêu Tài Năng Nhí-Tập 2 FULL: https://youtu.be/dfk5qsYc4Ms\n👉 Siêu Tài Năng Nhí-Tập 1 FULL: https://youtu.be/lTrdwlZw1Uw\n\n***Theo dõi các kênh chính thức từ chương trình*** \n👉 Facebook: https://bit.ly/Super10STNN\n👉 Youtube: https://bit.ly/3iL5P0N\n👉 TikTok: https://www.tiktok.com/@madisonent\n👉 Instagram: https://www.instagram.com/madison.ent\n __________________________________\nSuper 10- Siêu Tài Năng Nhí là chương trình tìm kiếm những khả năng tiềm ẩn ở độ tuổi 4-14; chương trình sẽ đặt ra những thử thách giúp các bé vượt qua khả năng của chính mình. Super 10 với sự góp mặt của những ngôi sao Trấn Thành, Hari Won, Gil Lê và những khách mời tên tuổi. Chương trình được phát sóng trên HTV7.\n#TranThanh #HariWon #SieuTaiNangNhi #GilLe  #Super10',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT1H3M3S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2116609',
				likeCount: '15461',
				dislikeCount: '1038',
				favoriteCount: '0',
				commentCount: '1850',
			},
		},
		{
			kind: 'youtube#video',
			etag: '19NGJtKstLS-CQOhFpfEpzdomn0',
			id: 'K1QMzxdfDJ8',
			snippet: {
				publishedAt: '2021-08-24T14:45:11Z',
				channelId: 'UCEwAazC_ewgN5PPnR9vxFKA',
				title: 'Chiến hạm của Hải quân Việt Nam vượt qua Trung Quốc trong bài thi bắn pháo đối hải tại Army Games',
				description:
					'️Ngày 24-8, Đội tuyển Hải quân nhân dân (HQND) Việt Nam đã có một ngày thi đấu thành công ở nội dung bắn pháo đối hải AK 176 của môn thi “Cúp biển” trong khuôn khổ Army Games 2021. Kíp pháo AK 176 trên tàu đã bắn trúng mục tiêu và tàu về đích trong thời gian sớm theo đúng mục tiêu đặt ra. \n★ Fanpage: https://www.facebook.com/blvquangtung/\n★ Website: http://mocha.com.vn\n★ Xem nhiều hơn tại: https://bit.ly/QuánThểThaoVTM\n\n⚽ Xem thêm các số đã lên sóng\n► Tin Thể Thao 24h: https://bit.ly/TinThểThao24h\n► Quán Thể Thao: https://bit.ly/QuánThểThaoFull\n=================================\n© Bản quyền thuộc về Quán Thể Thao - Viettel Media\n#QuanTheThao #blvquangtung',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/K1QMzxdfDJ8/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/K1QMzxdfDJ8/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/K1QMzxdfDJ8/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/K1QMzxdfDJ8/sddefault.jpg',
						width: 640,
						height: 480,
					},
				},
				channelTitle: 'Quán Thể Thao',
				tags: [
					'quán thể thao',
					'quan the thao',
					'tạp chí thể công',
					'tap chi the cong',
					'hải quân việt nam',
					'tàu chiến việt nam',
					'hải quân nhân dân việt nam',
					'army games',
					'cúp biển',
					'việt nam trung quốc',
					'hoàng sa trường sa',
					'chủ quyền biển đảo',
					'hội thao quân sự quốc tế',
					'tàu chiến việt nam vs trung quốc',
					'bộ đội cụ hồ',
					'quân đội nhân dân',
					'vietnam navy',
				],
				categoryId: '17',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Chiến hạm của Hải quân Việt Nam vượt qua Trung Quốc trong bài thi bắn pháo đối hải tại Army Games',
					description:
						'️Ngày 24-8, Đội tuyển Hải quân nhân dân (HQND) Việt Nam đã có một ngày thi đấu thành công ở nội dung bắn pháo đối hải AK 176 của môn thi “Cúp biển” trong khuôn khổ Army Games 2021. Kíp pháo AK 176 trên tàu đã bắn trúng mục tiêu và tàu về đích trong thời gian sớm theo đúng mục tiêu đặt ra. \n★ Fanpage: https://www.facebook.com/blvquangtung/\n★ Website: http://mocha.com.vn\n★ Xem nhiều hơn tại: https://bit.ly/QuánThểThaoVTM\n\n⚽ Xem thêm các số đã lên sóng\n► Tin Thể Thao 24h: https://bit.ly/TinThểThao24h\n► Quán Thể Thao: https://bit.ly/QuánThểThaoFull\n=================================\n© Bản quyền thuộc về Quán Thể Thao - Viettel Media\n#QuanTheThao #blvquangtung',
				},
			},
			contentDetails: {
				duration: 'PT2M39S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '278027',
				likeCount: '2002',
				dislikeCount: '108',
				favoriteCount: '0',
				commentCount: '515',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'wEQ6MfZP_iTOr83xIVNbRoVAvus',
			id: 'PkC1QHdAD30',
			snippet: {
				publishedAt: '2021-08-25T04:04:52Z',
				channelId: 'UCBhgBmuPFbLLxnejr09lnAQ',
				title: 'TIỀN NHIỀU ĐỂ LÀM GÌ - T2',
				description:
					'Thượng nguồn Sông Đà vào mùa Khai thác Mật Ong Rừng đẹp lắm các bác ạ, nước trong xanh! Anh em bọn mình đi lên thượng nguồn vừa tìm ong, vừa tìm Cây Đau Lưng về cho các bác ngâm rượu  ► NỤ TAM THẤT: https://hoabanfood.com/tam-that\n\nCác sản phẩm trong video này: \n- Đồ Cắm Trại, Câu Cá chúng tôi sử dụng: https://hoabancamp.com/camping-1\n- Rượu Cây Đau Lưng: https://hoabanfood.com/cay-dau-lung\n- Rượu Đảng Sâm: https://hoabanfood.com/sp/ruou-dang-sam\n- Mắc Khén & Hạt Dổi: https://hoabanfood.com/sp/combo-gia-vi-tay-bac\n_______________________\n► Đặt hàng online tại: https://hoabanfood.com\n► Hotline đặt hàng: 0914.268.535\n► HOA BAN FOOD™ - Nhà số 7, Khu liền kề Minori, 67A Trương Định, Quận Hai Bà Trưng, Hà Nội\n\n+ Kết nối với chúng tôi:\n- Group HOA BAN Family: https://www.facebook.com/groups/hoabanfamily\n● Facebook: https://www.facebook.com/hoabanfood\n● Tiktok: https://www.tiktok.com/@hoabanfood',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/PkC1QHdAD30/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/PkC1QHdAD30/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/PkC1QHdAD30/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/PkC1QHdAD30/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/PkC1QHdAD30/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'HOA BAN FOOD',
				categoryId: '19',
				liveBroadcastContent: 'none',
				localized: {
					title: 'TIỀN NHIỀU ĐỂ LÀM GÌ - T2',
					description:
						'Thượng nguồn Sông Đà vào mùa Khai thác Mật Ong Rừng đẹp lắm các bác ạ, nước trong xanh! Anh em bọn mình đi lên thượng nguồn vừa tìm ong, vừa tìm Cây Đau Lưng về cho các bác ngâm rượu  ► NỤ TAM THẤT: https://hoabanfood.com/tam-that\n\nCác sản phẩm trong video này: \n- Đồ Cắm Trại, Câu Cá chúng tôi sử dụng: https://hoabancamp.com/camping-1\n- Rượu Cây Đau Lưng: https://hoabanfood.com/cay-dau-lung\n- Rượu Đảng Sâm: https://hoabanfood.com/sp/ruou-dang-sam\n- Mắc Khén & Hạt Dổi: https://hoabanfood.com/sp/combo-gia-vi-tay-bac\n_______________________\n► Đặt hàng online tại: https://hoabanfood.com\n► Hotline đặt hàng: 0914.268.535\n► HOA BAN FOOD™ - Nhà số 7, Khu liền kề Minori, 67A Trương Định, Quận Hai Bà Trưng, Hà Nội\n\n+ Kết nối với chúng tôi:\n- Group HOA BAN Family: https://www.facebook.com/groups/hoabanfamily\n● Facebook: https://www.facebook.com/hoabanfood\n● Tiktok: https://www.tiktok.com/@hoabanfood',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT21M32S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '390687',
				likeCount: '7162',
				dislikeCount: '228',
				favoriteCount: '0',
				commentCount: '553',
			},
		},
		{
			kind: 'youtube#video',
			etag: '1G8K4QScQ6FLi60OPgEm4eMPu7M',
			id: '4yCHVSjxl1E',
			snippet: {
				publishedAt: '2021-08-23T12:31:09Z',
				channelId: 'UCrXTLKK7xUEWB7BHV2fyBdw',
				title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 23/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
				description:
					'🔥Bản Tin Mới Nhất Covid-19 Sáng 23/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/4yCHVSjxl1E/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/4yCHVSjxl1E/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/4yCHVSjxl1E/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/4yCHVSjxl1E/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/4yCHVSjxl1E/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Tin Tức 24h',
				tags: [
					'Tin tức 24h',
					'tin tức 24h tv',
					'tin tức mới nhất',
					'tin tức covid 19 mới nhất',
					'Covid 19 mới nhất',
					'covid 19 moi nhat',
					'covid hôm nay ở việt nam',
					'tin covid 19 mới nhất',
					'covid hôm nay',
					'cập nhật dịch covid-19',
					'tin nóng về dịch covid 19',
					'tin về dịch covid 19 mới nhất',
					'tin dịch covid 19 mới nhất hôm nay',
					'tình hình dịch covid 19',
					'tin tức dịch covid 19 mới nhất',
					'dịch covid 19 ở việt nam',
					'covid-19 hôm nay',
					'covid 19 ngày hôm nay',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: '🔥Bản Tin Mới Nhất Covid-19 Sáng 23/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
					description:
						'🔥Bản Tin Mới Nhất Covid-19 Sáng 23/8 | Thông tin khẩn từ Bộ Y tế | Tin Tức 24h',
				},
			},
			contentDetails: {
				duration: 'PT11H54M57S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '378488',
				likeCount: '2419',
				dislikeCount: '120',
				favoriteCount: '0',
				commentCount: '4',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'v9A4N9xKXiJKErC7vwCU-ckoS8o',
			id: 'c9RzZpV460k',
			snippet: {
				publishedAt: '2021-08-16T09:00:48Z',
				channelId: 'UCEf_Bc-KVd7onSeifS3py9g',
				title: "Red Velvet 레드벨벳 'Queendom' MV",
				description:
					"Red Velvet's 6th Mini Album \"Queendom\" is out!\nListen and download on your favorite platform: https://smarturl.it/RedVelvet_Queendom\n\n[Tracklist]\n01 Queendom\n02 Pose\n03 Knock On Wood \n04 Better Be\n05 Pushin’ N Pullin’\n06 다시, 여름 (Hello, Sunset)\n\nRed Velvet Official\nhttp://www.youtube.com/redvelvet\nhttp://www.facebook.com/RedVelvet\nhttp://www.instagram.com/redvelvet.smtown\nhttps://www.tiktok.com/@redvelvet_smtown\nhttps://www.vlive.tv/channel/DCF447\nhttp://twitter.com/RVsmtown\n\n#RedVelvet #레드벨벳 #Queendom #퀸덤\nRed Velvet 레드벨벳 'Queendom' MV ℗ SM Entertainment",
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/c9RzZpV460k/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/c9RzZpV460k/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/c9RzZpV460k/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/c9RzZpV460k/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/c9RzZpV460k/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'SMTOWN',
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: "Red Velvet 레드벨벳 'Queendom' MV",
					description:
						"Red Velvet's 6th Mini Album \"Queendom\" is out!\nListen and download on your favorite platform: https://smarturl.it/RedVelvet_Queendom\n\n[Tracklist]\n01 Queendom\n02 Pose\n03 Knock On Wood \n04 Better Be\n05 Pushin’ N Pullin’\n06 다시, 여름 (Hello, Sunset)\n\nRed Velvet Official\nhttp://www.youtube.com/redvelvet\nhttp://www.facebook.com/RedVelvet\nhttp://www.instagram.com/redvelvet.smtown\nhttps://www.tiktok.com/@redvelvet_smtown\nhttps://www.vlive.tv/channel/DCF447\nhttp://twitter.com/RVsmtown\n\n#RedVelvet #레드벨벳 #Queendom #퀸덤\nRed Velvet 레드벨벳 'Queendom' MV ℗ SM Entertainment",
				},
				defaultAudioLanguage: 'ko',
			},
			contentDetails: {
				duration: 'PT3M10S',
				dimension: '2d',
				definition: 'hd',
				caption: 'true',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '52819279',
				likeCount: '2087262',
				dislikeCount: '27327',
				favoriteCount: '0',
				commentCount: '209584',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'M5rsFLK45GmjscilUtGKSbXQZtk',
			id: 'G5pvDrpP6yk',
			snippet: {
				publishedAt: '2021-08-13T17:00:09Z',
				channelId: 'UCO47Jty3AsFez-lT2mI9HYg',
				title: 'Đạt G - Thú Tội (Lyric Video)',
				description:
					'Thú Tội - Đạt G\nAudio: https://zingmp3.vn/bai-hat/Thu-Toi-Dat-G/ZUUA8I89.html\nWritten by Đạt G\nProduced by Hoàng Huy Long - Phan Duy Anh\nRecorded at Cloudnine Studio\nMixed and mastered by Hoàng Huy Long\nGraphic Designer & Lyric Video: Pick\nProject Manager - 88 Music Entertainment \n#ThuToi #DatG\n\nFollow Đạt G:\nhttps://www.instagram.com/nguyentandat_g/\nhttps://www.facebook.com/Đạt-G-104064568487102/\nhttps://www.facebook.com/NguyenTanDatG\nhttps://www.tiktok.com/@datg147\n\nDường như em muốn giết chết anh ? ( đúng không vậy )\nThời trẻ con ham chơi chưa lớn khôn ( mới hay quậy )\nTồn tại trong quá khứ em, anh xấu xa như thế sao ?\nLời thú tội từ anh trước mũi dao\n\nMình là những đứa nhóc ngốc nghếch thích hơn thua\nMình vội phán xét nói khiến đối phương đau thêm trăm lần\nMình cạn nghĩ đến nỗi kết thúc ta lại có thêm một kẻ thù \nTội nghiệp hết tất cả kí ức bỗng tan nát còn gì\n\nPrChorus\nEm nên vui đi em, tất cả đã biết anh người không tốt rồi\nXin lỗi em với những thứ đáng ghét, anh đã mang lại, em\n\nChorus\nKiềm nén nỗi đau, giận dữ mất khôn, đúng vậy\nTrẻ con biết đâu, rồi cũng đến một ngày mình phải thú tội\nSau tất cả trận thua, bản thân anh có nhiều vết thương đã lâu nó vẫn chưa lành lặn\nLời anh hứa đã làm xong, chúc em sẽ thành công, bảo vệ lấy tình yêu bên cạnh mình đi\n\nVer 2\nĐừng làm phiền tất cả vì chuyện tình yêu chỉ có hai người ( hai người )\nThù hằn in trên da hay nhìn đến nó xong ta bật cười ( bật cười)\nĐầu thú với những trái tim, “chuyện ngốc nghếch đó chính tôi, từng làm”\nVì sẽ có những cái tôi, làm khó chính cả bản thân mình\n\nPrChorus\nEm nên vui đi em, tất cả đã biết anh người không tốt rồi\nXin lỗi em với những thứ đáng ghét, anh đã mang lại, em\n\nChorus\nKiềm nén nỗi đau, giận dữ mất khôn, đúng vậy\nTrẻ con biết đâu, rồi cũng đến một ngày mình phải thú tội\nSau tất cả trận thua, bản thân anh có nhiều vết thương đã lâu nó vẫn chưa lành lặn\nLời anh hứa đã làm xong, chúc em sẽ thành công, bảo vệ lấy tình yêu bên cạnh mình đi\n \nOut\nKiềm nén nỗi đau\nGiận dữ mất khôn\nĐã cho anh một bài học hay\nKiềm nén nỗi đau\nGiận dữ mất khôn\nRồi ai cũng sẽ có cho mình bình yên\n\n(c) 2021 Đạt G',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/G5pvDrpP6yk/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/G5pvDrpP6yk/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/G5pvDrpP6yk/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/G5pvDrpP6yk/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/G5pvDrpP6yk/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Đạt G',
				tags: [
					'dat g',
					'đạt g',
					'thu toi',
					'thu toi dat g',
					'dat g thu toi',
					'thú tội đạt g',
					'đạt g thú tội',
					'pop',
					'R&B',
					'thú tội',
					'thú tội dat g',
					'thu toi đạt g',
					'đạt g thu toi',
				],
				categoryId: '10',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Đạt G - Thú Tội (Lyric Video)',
					description:
						'Thú Tội - Đạt G\nAudio: https://zingmp3.vn/bai-hat/Thu-Toi-Dat-G/ZUUA8I89.html\nWritten by Đạt G\nProduced by Hoàng Huy Long - Phan Duy Anh\nRecorded at Cloudnine Studio\nMixed and mastered by Hoàng Huy Long\nGraphic Designer & Lyric Video: Pick\nProject Manager - 88 Music Entertainment \n#ThuToi #DatG\n\nFollow Đạt G:\nhttps://www.instagram.com/nguyentandat_g/\nhttps://www.facebook.com/Đạt-G-104064568487102/\nhttps://www.facebook.com/NguyenTanDatG\nhttps://www.tiktok.com/@datg147\n\nDường như em muốn giết chết anh ? ( đúng không vậy )\nThời trẻ con ham chơi chưa lớn khôn ( mới hay quậy )\nTồn tại trong quá khứ em, anh xấu xa như thế sao ?\nLời thú tội từ anh trước mũi dao\n\nMình là những đứa nhóc ngốc nghếch thích hơn thua\nMình vội phán xét nói khiến đối phương đau thêm trăm lần\nMình cạn nghĩ đến nỗi kết thúc ta lại có thêm một kẻ thù \nTội nghiệp hết tất cả kí ức bỗng tan nát còn gì\n\nPrChorus\nEm nên vui đi em, tất cả đã biết anh người không tốt rồi\nXin lỗi em với những thứ đáng ghét, anh đã mang lại, em\n\nChorus\nKiềm nén nỗi đau, giận dữ mất khôn, đúng vậy\nTrẻ con biết đâu, rồi cũng đến một ngày mình phải thú tội\nSau tất cả trận thua, bản thân anh có nhiều vết thương đã lâu nó vẫn chưa lành lặn\nLời anh hứa đã làm xong, chúc em sẽ thành công, bảo vệ lấy tình yêu bên cạnh mình đi\n\nVer 2\nĐừng làm phiền tất cả vì chuyện tình yêu chỉ có hai người ( hai người )\nThù hằn in trên da hay nhìn đến nó xong ta bật cười ( bật cười)\nĐầu thú với những trái tim, “chuyện ngốc nghếch đó chính tôi, từng làm”\nVì sẽ có những cái tôi, làm khó chính cả bản thân mình\n\nPrChorus\nEm nên vui đi em, tất cả đã biết anh người không tốt rồi\nXin lỗi em với những thứ đáng ghét, anh đã mang lại, em\n\nChorus\nKiềm nén nỗi đau, giận dữ mất khôn, đúng vậy\nTrẻ con biết đâu, rồi cũng đến một ngày mình phải thú tội\nSau tất cả trận thua, bản thân anh có nhiều vết thương đã lâu nó vẫn chưa lành lặn\nLời anh hứa đã làm xong, chúc em sẽ thành công, bảo vệ lấy tình yêu bên cạnh mình đi\n \nOut\nKiềm nén nỗi đau\nGiận dữ mất khôn\nĐã cho anh một bài học hay\nKiềm nén nỗi đau\nGiận dữ mất khôn\nRồi ai cũng sẽ có cho mình bình yên\n\n(c) 2021 Đạt G',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT3M45S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2096726',
				likeCount: '56734',
				dislikeCount: '5321',
				favoriteCount: '0',
				commentCount: '5012',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'mNan0udTd5ik3pWmgLlXWkc6u4o',
			id: '0_l7czkKTIA',
			snippet: {
				publishedAt: '2021-08-25T08:30:10Z',
				channelId: 'UCEwAazC_ewgN5PPnR9vxFKA',
				title: 'Cận cảnh màn bắn pháo đỉnh cao giúp Chiến hạm Hải Quân Việt Nam vượt qua Trung Quốc tại Army Games',
				description:
					'️Đội tuyển của Hải quân nhân dân Việt Nam đã có một ngày thi đấu thành công ở nội dung bắn pháo đối hải AK 176 của môn thi “Cúp biển” trong khuôn khổ Army Games 2021. Kíp pháo AK 176 trên tàu đã bắn trúng mục tiêu và tàu về đích trong thời gian sớm theo đúng mục tiêu đặt ra.\n★ Fanpage: https://www.facebook.com/blvquangtung/\n★ Website: http://mocha.com.vn\n★ Xem nhiều hơn tại: https://bit.ly/QuánThểThaoVTM\n\n⚽ Xem thêm các số đã lên sóng\n► Tin Thể Thao 24h: https://bit.ly/TinThểThao24h\n► Quán Thể Thao: https://bit.ly/QuánThểThaoFull\n=================================\n© Bản quyền thuộc về Quán Thể Thao - Viettel Media\n#QuanTheThao #blvquangtung',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/0_l7czkKTIA/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/0_l7czkKTIA/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/0_l7czkKTIA/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/0_l7czkKTIA/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/0_l7czkKTIA/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Quán Thể Thao',
				tags: [
					'quán thể thao',
					'quan the thao',
					'tạp chí thể công',
					'tap chi the cong',
					'hải quân việt nam',
					'chiến hạm việt nam',
					'hải quân việt nam thắng trung quốc',
					'tàu hộ vệ tên lửa',
					'army games',
					'hội thao quân sự quốc tế',
					'chủ quyền biển đảo',
					'hoàng sa trường sa',
					'chiến ham việt nam trung quốc',
				],
				categoryId: '17',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Cận cảnh màn bắn pháo đỉnh cao giúp Chiến hạm Hải Quân Việt Nam vượt qua Trung Quốc tại Army Games',
					description:
						'️Đội tuyển của Hải quân nhân dân Việt Nam đã có một ngày thi đấu thành công ở nội dung bắn pháo đối hải AK 176 của môn thi “Cúp biển” trong khuôn khổ Army Games 2021. Kíp pháo AK 176 trên tàu đã bắn trúng mục tiêu và tàu về đích trong thời gian sớm theo đúng mục tiêu đặt ra.\n★ Fanpage: https://www.facebook.com/blvquangtung/\n★ Website: http://mocha.com.vn\n★ Xem nhiều hơn tại: https://bit.ly/QuánThểThaoVTM\n\n⚽ Xem thêm các số đã lên sóng\n► Tin Thể Thao 24h: https://bit.ly/TinThểThao24h\n► Quán Thể Thao: https://bit.ly/QuánThểThaoFull\n=================================\n© Bản quyền thuộc về Quán Thể Thao - Viettel Media\n#QuanTheThao #blvquangtung',
				},
			},
			contentDetails: {
				duration: 'PT2M47S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '205399',
				likeCount: '1686',
				dislikeCount: '63',
				favoriteCount: '0',
				commentCount: '306',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'kfecE2nWEaPIqUucDbTxNcLrjKU',
			id: 'fyTrN71I9Ok',
			snippet: {
				publishedAt: '2021-08-13T17:00:12Z',
				channelId: 'UC8vQFLQ6RUSh8_G0Gv8lsGg',
				title: 'Tập 5 - VONG NHI | Series Chuyện Ma MỘT NÉN NHANG Phần 3 | HUỲNH LẬP [OFFICIAL]',
				description:
					'“Kìa những kẻ tiểu nhi tấm bé\nLỗi giờ sinh lìa mẹ lìa cha\nLấy ai bồng bế vào ra\nU ơ tiếng khóc, thiết tha cõi lòng” \n\nĐời người sinh-lão-bệnh-tử. Có người được hưởng dương thọ trước khi về cõi âm. Nhưng cũng có những đứa trẻ chưa kịp sinh ra đời là đã vong thương tử mệnh. Nên năng lượng tâm linh rất mạnh mẻ, đáng sợ và đầy u uất. Thương thay cho những số phận kém may mắn kia. \n\nVong Nhi - sẽ là tập chuyện cuối cùng của Một Nén Nhang phần 3 này, được lấy cảm hứng từ câu chuyện có thật để lột tả nổi đau đớn khôn nguôi của những sinh mệnh bất hạnh. \n\nVà rồi chúng ta chào tạm biệt nhau tại season 3 này, mong các bạn vẫn sẽ luôn yêu thương Một Nén Nhang như ngày Đầu Tiên Gặp Mặt nhé!!!\n\nLưu ý: Video không dành cho trẻ em dưới 18 tuổi và phải được sự hướng dẫn của người lớn xem cùng. Không dành cho người có tiền sử bệnh tim và các vấn đề bệnh huyết áp khác.\n#HuynhLap #MotNenNhangSS3 #VongNhi #TrucDem #NhaThue #NguoiKhuatMat #KeoHon \n------------------------------------------------------------------------------------------------------------\nXin cảm ơn vòng đá phong thủy Tinh Lâm đã tài trợ cho chương trình\nwww.tinhlamjw.com\nHotline: 1900 292917\nF.b: facebook.com/tinhlamjw\nI.G: instagram.com/TinhLamJW/\n------------------------------------------------------------------------------------------------------------\nĐăng ký kênh để xem nhiều video mới tại : http://Metub.net/huynhlap\r\nTheo dõi Huỳnh Lập trên :\r\n►Facebook: https://www.facebook.com/dienvienhuynhlap/\r\n► Full Playlist Huỳnh Lập : https://goo.gl/EQcGYA\r\n►Email book show: bookshowhuynhlap17@gmail.com hoặc hongtu1704@gmail.com',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/fyTrN71I9Ok/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/fyTrN71I9Ok/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/fyTrN71I9Ok/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/fyTrN71I9Ok/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/fyTrN71I9Ok/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Huỳnh Lập Official',
				tags: [
					'huỳnh lập',
					'huynh lap',
					'huỳnh lập official',
					'huynh lap phim',
					'phim ma huynh lap',
					'Chuyện Lập Kể Về Ma',
					'ke chuyen ma',
					'kể chuyện ma',
					'huỳnh lập kể chuyện ma',
					'Một Nén Nhang',
					'huỳnh lập hài',
					'chuyen ma',
					'Một nén nhang phần 3',
					'một nén nhang season 3',
					'một nén nhang ss3',
					'hồn ma',
					'hon ma',
					'truyện ma',
					'truyen ma hay nhat',
					'chuyen ma hay nhat',
					'truyen ma mot nen nhang',
					'mot nen nhang truyen ma',
					'truyen 12h',
					'nhà thuê',
					'gác đêm',
					'trực ban đêm',
					'vong nhi',
					'vong nhi nhập xác',
					'truc dem',
					'keo hon',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Tập 5 - VONG NHI | Series Chuyện Ma MỘT NÉN NHANG Phần 3 | HUỲNH LẬP [OFFICIAL]',
					description:
						'“Kìa những kẻ tiểu nhi tấm bé\nLỗi giờ sinh lìa mẹ lìa cha\nLấy ai bồng bế vào ra\nU ơ tiếng khóc, thiết tha cõi lòng” \n\nĐời người sinh-lão-bệnh-tử. Có người được hưởng dương thọ trước khi về cõi âm. Nhưng cũng có những đứa trẻ chưa kịp sinh ra đời là đã vong thương tử mệnh. Nên năng lượng tâm linh rất mạnh mẻ, đáng sợ và đầy u uất. Thương thay cho những số phận kém may mắn kia. \n\nVong Nhi - sẽ là tập chuyện cuối cùng của Một Nén Nhang phần 3 này, được lấy cảm hứng từ câu chuyện có thật để lột tả nổi đau đớn khôn nguôi của những sinh mệnh bất hạnh. \n\nVà rồi chúng ta chào tạm biệt nhau tại season 3 này, mong các bạn vẫn sẽ luôn yêu thương Một Nén Nhang như ngày Đầu Tiên Gặp Mặt nhé!!!\n\nLưu ý: Video không dành cho trẻ em dưới 18 tuổi và phải được sự hướng dẫn của người lớn xem cùng. Không dành cho người có tiền sử bệnh tim và các vấn đề bệnh huyết áp khác.\n#HuynhLap #MotNenNhangSS3 #VongNhi #TrucDem #NhaThue #NguoiKhuatMat #KeoHon \n------------------------------------------------------------------------------------------------------------\nXin cảm ơn vòng đá phong thủy Tinh Lâm đã tài trợ cho chương trình\nwww.tinhlamjw.com\nHotline: 1900 292917\nF.b: facebook.com/tinhlamjw\nI.G: instagram.com/TinhLamJW/\n------------------------------------------------------------------------------------------------------------\nĐăng ký kênh để xem nhiều video mới tại : http://Metub.net/huynhlap\r\nTheo dõi Huỳnh Lập trên :\r\n►Facebook: https://www.facebook.com/dienvienhuynhlap/\r\n► Full Playlist Huỳnh Lập : https://goo.gl/EQcGYA\r\n►Email book show: bookshowhuynhlap17@gmail.com hoặc hongtu1704@gmail.com',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT28M1S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2399018',
				likeCount: '82894',
				dislikeCount: '1241',
				favoriteCount: '0',
				commentCount: '4112',
			},
		},
		{
			kind: 'youtube#video',
			etag: 'UdI2xNc98u_EBfMokPmPMakDl3I',
			id: '8iR6l__yxJs',
			snippet: {
				publishedAt: '2021-08-17T11:00:09Z',
				channelId: 'UC8UjpFpFqbVJoe65IJUaryQ',
				title: 'Th.ảm cảnh vợ sắp sanh, nhà không gạo, túi hết tiền... phải tìm đường tẩu thoát khỏi SG',
				description:
					'Th.ảm cảnh vợ sắp sanh, nhà không gạo, túi hết tiền... phải tìm đường tẩu thoát khỏi SG\n\nGiữa trưa nắng gay gắt mùa hè ngày trung tuần tháng 8, chiếc xe máy cà tàng bon bon trên tỉnh lộ chất đầy hành lý của đôi vợ chồng thai phụ cùng đứa con trai nhỏ hướng về các tỉnh Miền Tây.\n\nNgay khi đến chốt kiểm dịch qua địa phận tỉnh Long An, cả gia đình thai phụ dù có nài nỉ hết sức vẫn không thuyết phục được lực lượng thi hành công vụ nên người chồng buồn bã quay đầu xe chở vợ đang mang thai chỉ còn vài ngày nữa đến ngày sinh cùng đứa con trai trở về nhà trọ ở xóm nghèo huyện Bình Chánh (TPHCM).\n\nTrong túi cả 2 vợ chồng chỉ còn vỏn vẹn hơn 160 nghìn đồng. Đó là số tiền duy nhật làm hành trang vượt hơn 300km từ Sài Gòn về An Giang để trốn dịch; và đó cùng là số tiền còn lại duy nhất cho gia đình này sống đến 15/9 trong thời gian SG tiếp tục cách ly khi họ phải quay trở về phòng trọ.\n\nThảm cảnh trên chỉ là 1 trong số hàng vạn hoàn cảnh mỗi người mỗi khác trên khắp đường phố; hẻm nhỏ Sài Gòn suốt hơn 1 tháng qua và đỉnh điểm là những ngày giữa tháng 8 khi chính quyền tiếp tục ra chỉ thị phong toả Sài Gòn thêm 30 ngày để phòng chống đại dịch.\n\nLê thân thiện kính mời Quý vị dành thời gian theo dõi video rất đáng thương của hoàn cảnh gia đình thai phụ rời Sài Gòn trốn dịch mà trong túi chỉ có hơn 100 nghìn đồng. Trân trọng cám ơn Quý vị.\n_________________________________________________________________\nMọi thông tin liên hệ, hãy gọi về: \nCông ty TNHH Truyền thông và Sự kiện Lê Nhiên - Channel Lê Thân Thiện (Le Nhien - Channel Le Than Thien Media and Event Company Limited)\n- ĐTDĐ: 070707.17.17 (Zalo, Viber).\n- Facebook: https://www.facebook.com/YoutubeLeThanThien\nHãy Đăng Ký kênh YouTube Lê Thân Thiện (youtube.com/lethanthien) để xem nhiều video hấp dẫn nhất nhé mọi người thân yêu. \nTrân trọng cám ơn.\n-----------------\n© Bản quyền thuộc về Lê Thân Thiện\n© Copyright by Lê Thân Thiện ☞ Do not Reup',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/8iR6l__yxJs/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/8iR6l__yxJs/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/8iR6l__yxJs/hqdefault.jpg',
						width: 480,
						height: 360,
					},
					standard: {
						url: 'https://i.ytimg.com/vi/8iR6l__yxJs/sddefault.jpg',
						width: 640,
						height: 480,
					},
					maxres: {
						url: 'https://i.ytimg.com/vi/8iR6l__yxJs/maxresdefault.jpg',
						width: 1280,
						height: 720,
					},
				},
				channelTitle: 'Lê thân thiện',
				tags: [
					'Lê Thân Thiện',
					'Le Than Thien',
					'Le Than Thien Channel',
					'mái ấm',
					'tình thương',
					'đời sống',
					'từ thiện',
					'thiện nguyện',
					'việc thiện nguyện',
					'tu thien',
				],
				categoryId: '22',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Th.ảm cảnh vợ sắp sanh, nhà không gạo, túi hết tiền... phải tìm đường tẩu thoát khỏi SG',
					description:
						'Th.ảm cảnh vợ sắp sanh, nhà không gạo, túi hết tiền... phải tìm đường tẩu thoát khỏi SG\n\nGiữa trưa nắng gay gắt mùa hè ngày trung tuần tháng 8, chiếc xe máy cà tàng bon bon trên tỉnh lộ chất đầy hành lý của đôi vợ chồng thai phụ cùng đứa con trai nhỏ hướng về các tỉnh Miền Tây.\n\nNgay khi đến chốt kiểm dịch qua địa phận tỉnh Long An, cả gia đình thai phụ dù có nài nỉ hết sức vẫn không thuyết phục được lực lượng thi hành công vụ nên người chồng buồn bã quay đầu xe chở vợ đang mang thai chỉ còn vài ngày nữa đến ngày sinh cùng đứa con trai trở về nhà trọ ở xóm nghèo huyện Bình Chánh (TPHCM).\n\nTrong túi cả 2 vợ chồng chỉ còn vỏn vẹn hơn 160 nghìn đồng. Đó là số tiền duy nhật làm hành trang vượt hơn 300km từ Sài Gòn về An Giang để trốn dịch; và đó cùng là số tiền còn lại duy nhất cho gia đình này sống đến 15/9 trong thời gian SG tiếp tục cách ly khi họ phải quay trở về phòng trọ.\n\nThảm cảnh trên chỉ là 1 trong số hàng vạn hoàn cảnh mỗi người mỗi khác trên khắp đường phố; hẻm nhỏ Sài Gòn suốt hơn 1 tháng qua và đỉnh điểm là những ngày giữa tháng 8 khi chính quyền tiếp tục ra chỉ thị phong toả Sài Gòn thêm 30 ngày để phòng chống đại dịch.\n\nLê thân thiện kính mời Quý vị dành thời gian theo dõi video rất đáng thương của hoàn cảnh gia đình thai phụ rời Sài Gòn trốn dịch mà trong túi chỉ có hơn 100 nghìn đồng. Trân trọng cám ơn Quý vị.\n_________________________________________________________________\nMọi thông tin liên hệ, hãy gọi về: \nCông ty TNHH Truyền thông và Sự kiện Lê Nhiên - Channel Lê Thân Thiện (Le Nhien - Channel Le Than Thien Media and Event Company Limited)\n- ĐTDĐ: 070707.17.17 (Zalo, Viber).\n- Facebook: https://www.facebook.com/YoutubeLeThanThien\nHãy Đăng Ký kênh YouTube Lê Thân Thiện (youtube.com/lethanthien) để xem nhiều video hấp dẫn nhất nhé mọi người thân yêu. \nTrân trọng cám ơn.\n-----------------\n© Bản quyền thuộc về Lê Thân Thiện\n© Copyright by Lê Thân Thiện ☞ Do not Reup',
				},
				defaultAudioLanguage: 'vi',
			},
			contentDetails: {
				duration: 'PT23M3S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '1124531',
				likeCount: '14117',
				dislikeCount: '1098',
				favoriteCount: '0',
				commentCount: '2324',
			},
		},
		{
			kind: 'youtube#video',
			etag: '5m0XQzzsl7DAoJOk9IOLR9gh_5g',
			id: 'BRLwtMb2X4I',
			snippet: {
				publishedAt: '2021-08-15T11:00:04Z',
				channelId: 'UC7xgbM-xENzm-9818szp7Yg',
				title: 'Khi MẸ là CAO THỦ tiết kiệm #3| Dung ABC#shorts',
				description:
					'dung_abc#hai_huoc#dung_abc_family#shorts\nKhi MẸ là CAO THỦ tiết kiệm #3| Dung ABC#shorts\nXin chào các bạn .Mời các bạn cùng xem câu chuyện hài hước khi mẹ của thánh lươn là cao thủ tiết kiệm phần 3 nhé. Cảm ơn các bạn đã quan tâm theo dõi.\n ❤ Dung ABC ❤KÊNH GIẢI TRÍ VUI CHƠI, LÀNH MẠNH CHO MỌI NGƯỜI❤ Dung ABC ❤ trân trọng cám ơn các bạn đã xem! ❤Và đừng quên ĐĂNG KÝ (SUBSCRIBLE) theo dõi ủng hộ kênh “Dung ABC” để xem video mới nhất nhé, Like, Bình luận (Comment), Chia sẻ (Share) video với mọi người! ❤ Mong đóng góp ý kiến của các bạn giúp cho những video sau hay hơn và thú vị hơn. ❤❤❤ \n* ĐĂNG KÝ KÊNH Dung ABC TRÊN YOUTUBE: https://www.youtube.com/results?searc...\u200b... \n© Bản quyền thuộc về Dung ABC\n © Copyright by Dung ABC ☞ Do not Reup.',
				thumbnails: {
					default: {
						url: 'https://i.ytimg.com/vi/BRLwtMb2X4I/default.jpg',
						width: 120,
						height: 90,
					},
					medium: {
						url: 'https://i.ytimg.com/vi/BRLwtMb2X4I/mqdefault.jpg',
						width: 320,
						height: 180,
					},
					high: {
						url: 'https://i.ytimg.com/vi/BRLwtMb2X4I/hqdefault.jpg',
						width: 480,
						height: 360,
					},
				},
				channelTitle: 'Dung ABC',
				tags: [
					'dung',
					'abc',
					'dung abc',
					'dung ốc',
					'dung oc',
					'dung abc shorts',
					'dung abc shorts hài',
					'dung abc thánh lươn',
					'dung abc family',
					'dung abc vui nhộn',
					'dung abc hài hước',
					'dung abc funny',
					'dung abc vui vẻ',
					'dung abc và mẹ',
					'dung abc khi mẹ là cao thủ tiết kiệm tập 3',
					'dunga b c',
					'dùng abc',
				],
				categoryId: '24',
				liveBroadcastContent: 'none',
				localized: {
					title: 'Khi MẸ là CAO THỦ tiết kiệm #3| Dung ABC#shorts',
					description:
						'dung_abc#hai_huoc#dung_abc_family#shorts\nKhi MẸ là CAO THỦ tiết kiệm #3| Dung ABC#shorts\nXin chào các bạn .Mời các bạn cùng xem câu chuyện hài hước khi mẹ của thánh lươn là cao thủ tiết kiệm phần 3 nhé. Cảm ơn các bạn đã quan tâm theo dõi.\n ❤ Dung ABC ❤KÊNH GIẢI TRÍ VUI CHƠI, LÀNH MẠNH CHO MỌI NGƯỜI❤ Dung ABC ❤ trân trọng cám ơn các bạn đã xem! ❤Và đừng quên ĐĂNG KÝ (SUBSCRIBLE) theo dõi ủng hộ kênh “Dung ABC” để xem video mới nhất nhé, Like, Bình luận (Comment), Chia sẻ (Share) video với mọi người! ❤ Mong đóng góp ý kiến của các bạn giúp cho những video sau hay hơn và thú vị hơn. ❤❤❤ \n* ĐĂNG KÝ KÊNH Dung ABC TRÊN YOUTUBE: https://www.youtube.com/results?searc...\u200b... \n© Bản quyền thuộc về Dung ABC\n © Copyright by Dung ABC ☞ Do not Reup.',
				},
				defaultAudioLanguage: 'en-US',
			},
			contentDetails: {
				duration: 'PT38S',
				dimension: '2d',
				definition: 'hd',
				caption: 'false',
				licensedContent: true,
				contentRating: {},
				projection: 'rectangular',
			},
			statistics: {
				viewCount: '2125679',
				likeCount: '49738',
				dislikeCount: '9762',
				favoriteCount: '0',
				commentCount: '58',
			},
		},
	],
	index: 0,
	isError: false,
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
				isError: false,
			};
		}
		case HOME_VIDEO_FAILED: {
			return {
				...state,
				videos: action.payload.isError
					? [
							...state.videos,
							...state.videosFaked.slice(
								state.index,
								state.index + action.payload.index,
							),
					  ]
					: [],
				isError: true,
				index:
					state.videosFaked.length <= state.index
						? 0
						: state.index + action.payload.index,
				loading: false,
				error: action.payload.error,
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
