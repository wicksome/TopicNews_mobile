//////////////////////////////////////////////////////////////////////////////
/* 변수 선언 */
var rssTotal	= new Array(); // 전체뉴스
var rssTop		= new Array(); // 인기
var rsspolitics = new Array(); // 정치
var rssEconomy	= new Array(); // 경제
var rssInter	= new Array(); // 국제
var rssSport	= new Array(); // 스포츠
var rssSport_soccer		= new Array(); // 축구
var resSport_baseball	= new Array(); // 야구
var rssSociety	= new Array(); // 사회
var rssIT		= new Array(); // IT
var rssScience	= new Array(); // 과학
var rssEnt		= new Array(); // 연예

//////////////////////////////////////////////////////////////////////////////
/**
 * 변수 초기화
 *
 * 순서 : 조선, 중앙, 동아, 한겨례
 */

// 전체
//rssTotal.push('');
rssTotal.push('http://rss.joins.com/joins_news_list.xml');
//rssTotal.push('');
//rssTotal.push('http://www.hani.co.kr/rss/'); // 영어 신문

// 인기
rssTop.push('http://myhome.chosun.com/rss/www_section_rss.xml');
rssTop.push('http://rss.joins.com/sonagi/joins_sonagi_total_list.xml');
//rssTop.push('');
rssTop.push('http://www.hani.co.kr/rss/newsrank/');

// 정치
rsspolitics.push('http://www.chosun.com/site/data/rss/politics.xml');
rsspolitics.push('http://rss.joins.com/joins_politics_list.xml');
rsspolitics.push('http://rss.donga.com/politics.xml');
rsspolitics.push('http://www.hani.co.kr/rss/politics/');

// 경제
//rssEconomy.push('');
rssEconomy.push('http://rss.joins.com/joins_money_list.xml');
rssEconomy.push('http://rss.donga.com/economy.xml');
rssEconomy.push('http://www.hani.co.kr/rss/economy/');

// 국제
rssInter.push('http://www.chosun.com/site/data/rss/international.xml');
//rssInter.push('');
rssInter.push('http://rss.donga.com/international.xml');
rssInter.push('http://www.hani.co.kr/rss/international/');

// 스포츠
rssSport.push('http://www.chosun.com/site/data/rss/sports.xml');
rssSport.push('http://rss.joins.com/sonagi/joins_sonagi_sports_list.xml');
rssSport.push('http://rss.donga.com/sports.xml');
rssSport.push('http://www.hani.co.kr/rss/sports/');

// 스포츠 - 축구
//rssSport_soccer.push('');
//rssSport_soccer.push('http://rss.joins.com/news/joins_sports_soccer_list.xml');
rssSport_soccer.push('http://rss.donga.com/sportsdonga/soccer.xml');
//rssSport_soccer.push('');


// 스포츠 - 야구
//resSport_baseball.push('')
resSport_baseball.push('http://rss.joins.com/news/joins_sports_baseball_list.xml')
//resSport_baseball.push('http://rss.donga.com/sportsdonga/baseball.xml')
//resSport_baseball.push('')

// 사회


// IT
rssIT.push('http://www.zdnet.co.kr/Include2/MegaNewsTv.xml'); // ZDNet 메가뉴스 티비
rssIT.push('http://www.zdnet.co.kr/Include2/NewsSection0040.xml'); // ZDNet 인터넷
rssIT.push('http://www.zdnet.co.kr/Include2/NewsSection0020.xml'); // ZDNet 컴퓨팅
//rssIT.push('');

// 과학
rssScience.push('http://www.sciencetimes.co.kr/?cat=28&feed=rss2');
rssScience.push('http://www.sciencetimes.co.kr/?cat=35&feed=rss2'); // ScienceTimes
//rssScience.push('');
//rssScience.push('http://www.hani.co.kr/rss/science/');

// 연예
rssEnt.push('http://www.chosun.com/site/data/rss/ent.xml');
rssEnt.push('http://rss.joins.com/sonagi/joins_sonagi_star_list.xml');
rssEnt.push('http://rss.donga.com/sportsdonga/entertainment.xml');
//rssEnt.push('');


//////////////////////////////////////////////////////////////////////////////

var rssArray = new Array();
rssArray[0] = rssTotal;
rssArray[1] = rssTop;
rssArray[2] = rsspolitics;
rssArray[3] = rssEconomy;
rssArray[4] = rssInter;
rssArray[5] = rssSport;
rssArray[6] = rssSport_soccer;
rssArray[7] = resSport_baseball;
rssArray[8] = rssSociety;
rssArray[9] = rssIT;
rssArray[10] = rssScience;
rssArray[11] = rssEnt;

//////////////////////////////////////////////////////////////////////////////
