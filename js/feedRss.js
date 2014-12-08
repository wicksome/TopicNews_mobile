//////////////////////////////////////////////////////////////////////////////

function entry(item) {
	this.title = item.title;
	this.link = item.link;
	this.content = item.content;
	this.getTitle = function () {
		return this.title
	};
}

function movePage(category) {
	window.location.href = "page.html?category=" + category;
}

function getRandomArray(idxSize, range) {
	/* 랜덤 수를 가진 배열을 반환하는 메서드.
	 * idxSize : 반환받을 배열 사이즈, 
	 * range : 랜덤 수의 범위
	 */
	var indexs = new Array(); // 랜덤 인덱스 배열
	var hasValue = false; //같은 값이 있는지 확인하기 위한 변수
	
	if(idxSize > range) {
		console.error('index size > range');
		return indexs;
	}
	
	while(indexs.length < idxSize) {
		hasValue = false;
		var temp = parseInt(Math.random() * range);
		for(c = 0; c < indexs.length; c++) {
			if(temp == indexs[c]) {
				hasValue = true;
				break;
			}
		}
		if(hasValue == false) {
			indexs.push(temp);
		} 
	}
	return indexs;
}

//-----------------------------------------------------------------------------------------------------------

(function ($) {
	$.fn.addRssDatas = function (url) {
		var rssList = new Array();
		var cnt = 0;
		var itemNumber = 10;
		
		var id = $(this).attr("id"), s="";
		//$("#" + id).empty().append('<img src="images/loader.gif" id="loader" />');
		$("#" + id).empty().append('<div class="loader" id="circularG"><div id="circularG_1" class="circularG"></div><div id="circularG_2" class="circularG"></div><div id="circularG_3" class="circularG"></div><div id="circularG_4" class="circularG"></div><div id="circularG_5" class="circularG"></div><div id="circularG_6" class="circularG"></div><div id="circularG_7" class="circularG"></div><div id="circularG_8" class="circularG"></div></div>');
		
		for (i = 0; i < url.length; i++) {
			//console.log(url[i]);
			var test1 = collectRssData({
				FeedUrl: url[i],
				MaxCount: itemNumber,
				//ShowDesc: true,
				//ShowPubData: true,
				//DescCharacterLimit: 100,
				//TitleLinkTarget: '_blank',
				DateFormat: 'MM/DD/YYYY',
				//DateFormatLang: 'en'
			}, function (data) {
				for (j = 0; j < data.length; j++) {
					rssList.push(data[j]);
					//console.log(data[j]);
				}
				cnt++;
				//console.log("in rssList : " + rssList.length);
				if (cnt == url.length) {
					// 추가할 부분
					//console.log("add HTML : " + cnt);
					//console.log("rss List count : " + rssList.length);
					//console.log("id : " + id);
					$("#" + id).empty();	
					
					// 중복없는 배열 만들기
					// Set은 크롬과 파이어폭스만 지원되므로 사용중지.
					/*
					var indexs = new Set();
					while(1) {
						indexs.add(parseInt(Math.random() * rssList.length));
						if(indexs.size == itemNumber) {
							console.log(indexs.size);
							break;
						}
					}
					console.log("set length : " + indexs.size);
					
					indexs.forEach(function(value) {
						console.log(value);
						var item = rssList[value];
						s += '<li class="item" ';
						s += 'onClick="location.href=';
						s += "'"+item.link+"';";
						s += '"><p>' + item.title + '</p></li>';
					});
					*/
					
					var indexs = new Array();
					indexs = getRandomArray(itemNumber, rssList.length);
					indexs.forEach(function(value) {
						console.log("index : " + value);
						var item = rssList[value];
						s += '<li class="item" ';
						s += 'onClick="window.open('; // 새창에서 열기
						s += "'"+item.link+"'";
						s += ')"><p>' + item.title + '</p></li>';
					});
					
					$("#" + id).append('<ul">' + s + "</ul>");
				}
			});
			// 사이즈 0 출력된
			//console.log("rssList : " + rssList.length);
		}
		//console.log('total : ' + rssList.length);
	};
})(jQuery);


var collectRssData = function (opt,
	callback) {
	var arr = new Array();

	var def = $.extend({
		FeedUrl: "http://rss.cnn.com/rss/edition.rss",
		MaxCount: 5,
		ShowDesc: true,
		ShowPubDate: true,
		CharacterLimit: 0,
		TitleLinkTarget: "_blank",
		DateFormat: "",
		DateFormatLang: "en"
	}, opt);

	$.ajax({
		url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=" + def
			.MaxCount + "&output=json&q=" + encodeURIComponent(
				def.FeedUrl) + "&hl=en&callback=?",
		dataType: "json",
		async: false,
		success: function (data) {
			$.each(data.responseData.feed.entries,
				function (e, item) {
					var tmp = new entry(item);
					arr.push(tmp);
					//console.log("length : " + arr.length);
				});
			return callback(arr);
		}
	});

	return arr
}