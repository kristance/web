package com.tjoeun.myCalendar;

import java.io.IOException;
import java.util.ArrayList;

import org.jsoup.Jsoup;
import org.jsoup.Connection.Method;
import org.jsoup.Connection.Response;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

public class SolarToLunar {
	
//	월별 입력과 음력을 크롤링하고 양력, 음력 공휴일을 계산해서 리턴하는 메소드
	public static ArrayList<LunarDate> solarToLunar(int year, int month) {
//		System.out.println("## SolarToLunar -> solarToLunar()");
//		1 - 12월의 양력 날짜에 대응되는 음력 날짜를 기억할 ArrayList를 선언한다.
		ArrayList<LunarDate> lunarList = new ArrayList<LunarDate>();
		String targetSite = "";
		
//		인수로 넘겨받은 year에 해당되는 1 - 12월의 양력에 대응되는 음력을 크롤링해서 얻어온다.
		for(int i = 1; i <= 12; i++) {
			targetSite = String.format("https://astro.kasi.re.kr/life/pageView/5?search_year=%04d&search_month=%02d&search_check=G", year, i);
//			targetSite = "https://astro.kasi.re.kr/life/pageView/5"; // post
//			System.out.println(targetSite);
			
//			크롤링한 데이터를 기억할 org.jsoup.nodes 패키지의 Document 클래스 객체를 선언한다.
			Document document = null;
			try {
//				org.jsoup 패키지의 Jsoup 클래스의 connect() 메소드로 크롤링할 타겟 사이트에 접속하고
//				get() 메소드로 타겟 사이트의 정보를 얻어온다.
				document = Jsoup.connect(targetSite).get();
//				Response response = Jsoup.connect(targetSite).method(Method.GET).execute();
//				Response response = Jsoup.connect(targetSite).method(Method.POST)
//															.data("search_year", "2024")
//															.data("search_month", "02")
//															.data("search_check", "G")
//															.execute();
				
//				document = response.parse(); // .method 사용시 필수
//				System.out.println("document -> " + document);
				
//				Document 클래스 객체에 저장된 타겟 사이트의 정보 중에서 날짜 단위(<tr> 태그)로 얻어온다.
//				org.jsoup.select 패키지의 Elements 클래스 객체에 Documents 클래스 객체로 읽어들인 내용에서
//				select() 메소드를 사용해서 필요할 정보를 얻어온다.
				Elements elements = document.select("tbody > tr");
//				System.out.println("elements -> " + elements);
//				System.out.println("************************************************");
//				System.out.println("response -> " + response);
				
//				Elements 클래스 객체에는 크롤링된 전체 데이터가 저장되어 있으므로 org.jsoup.nodes 패키지의
//				Elements 클래스 객체를 이용해서 Elements 클래스 객체에 저장된 데이터를 1건씩 처리한다.
				for (Element element : elements) {
//					System.out.println("element -> " + element);
//					System.out.println("---------------------------------------------------------");
//					날짜 단위(<tr>)로 얻어온 정보에서 양력, 음력 데이터(<td>)를 얻어온다.
					Elements ele = element.select("td");
//					System.out.println(ele);
					
					
//					text() 메소드로 태그 내부에 문자열만 얻어온다.
//					System.out.println("양력 -> " + ele.get(0).text());
//					System.out.println("음력 -> " + ele.get(1).text());
//					System.out.println("간지 -> " + ele.get(2).text());
//					System.out.println("요일 -> " + ele.get(3).text());
//					System.out.println("율리우스력 -> " + ele.get(4).text());
//					System.out.println("---------------------------------------------------------");
					
					String solar = ele.get(0).text(); // 양력
					String lunar = ele.get(1).text(); // 음력
					String yoondal = ele.get(2).text();
//					System.out.println(yoondal.indexOf("월")); // ok -> -1 아님
//					System.out.println("solar -> " + solar);
//					System.out.println("lunar -> " + lunar);
//					System.out.println("yoondal -> " + yoondal);
//					System.out.println(String.format("양력 %s ----> 음력 %s", solar, lunar));
//					크롤링 끝
					
//					크롤링한 결과를 LunarDate 클래스 객체에 저장한다.
					LunarDate lunarDate = new LunarDate();
					
//					solar
					String[] solarSplit = solar.split(" ");
					String first = solarSplit[0].substring(0, solarSplit[0].length() - 1); // year
					String second = solarSplit[1].substring(0, solarSplit[1].length() - 1); // month
					String third = solarSplit[2].substring(0, solarSplit[2].length() - 1); // date
					
					String[] lunarSplit = lunar.split(" ");
					String firstL = lunarSplit[0].substring(0, lunarSplit[0].length() - 1); // year lunar

					String secondL = "";
					if (lunarSplit[1].indexOf("윤") != -1) {
//						음력 평달
						secondL = lunarSplit[1].substring(1, lunarSplit[1].length() - 1); // month lunar 윤달O
					} else {
//						음력 윤달
						secondL = lunarSplit[1].substring(0, lunarSplit[1].length() - 1); // month lunar 윤달X
					}
					String thirdL = lunarSplit[2].substring(0, lunarSplit[2].length() - 1); // date lunar
					
//					System.out.println(secondL);
					lunarDate.setYear(Integer.parseInt(first));
					lunarDate.setMonth(Integer.parseInt(second));
					lunarDate.setDay(Integer.parseInt(third));
					lunarDate.setYearLunar(Integer.parseInt(firstL));
					lunarDate.setMonthLunar(Integer.parseInt(secondL));
					lunarDate.setDayLunar(Integer.parseInt(thirdL));
					lunarDate.setLunarFlag(yoondal.indexOf("월") != -1 ? false : true);
//					System.out.println(lunarDate);
//					1년치 양력 날짜와 양력 날짜에 대응하는 음력 날짜를 지정한다.
					lunarList.add(lunarDate);
					
					
				}
				
				
			} catch (IOException e) {
				System.out.println("targetSite 주소가 올바르지 않거나 사이트에 문제가 있다. 알겠냐????? 앋????");
			}
			
		}
//		공휴일 처리
		for (int i = 0; i < lunarList.size(); i++)
		{
//			양력 공휴일
			if (lunarList.get(i).getMonth() == 1 && lunarList.get(i).getDay() == 1 )
			{
				lunarList.get(i).setHoliday("<br><span>신정</span>");
			}
			else if (lunarList.get(i).getMonth() == 3 && lunarList.get(i).getDay() == 1 )
			{
				lunarList.get(i).setHoliday("<br><span>삼일절</span>");
			}
			else if (lunarList.get(i).getMonth() == 5 && lunarList.get(i).getDay() == 1 )
			{
				lunarList.get(i).setHoliday("<br><span>근로자의날</span>");
			}
			else if (lunarList.get(i).getMonth() == 5 && lunarList.get(i).getDay() == 5 )
			{
				lunarList.get(i).setHoliday("<br><span>어린이날</span>");
			}
			else if (lunarList.get(i).getMonth() == 6 && lunarList.get(i).getDay() == 6 )
			{
				lunarList.get(i).setHoliday("<br><span>현충일</span>");
			}
			else if (lunarList.get(i).getMonth() == 8 && lunarList.get(i).getDay() == 15 )
			{
				lunarList.get(i).setHoliday("<br><span>광복절</span>");
			}
			else if (lunarList.get(i).getMonth() == 10 && lunarList.get(i).getDay() == 3 )
			{
				lunarList.get(i).setHoliday("<br><span>개천절</span>");
			}
			else if (lunarList.get(i).getMonth() == 10 && lunarList.get(i).getDay() == 9 )
			{
				lunarList.get(i).setHoliday("<br><span>한글날</span>");
			}
			else if (lunarList.get(i).getMonth() == 12 && lunarList.get(i).getDay() == 25 )
			{
				lunarList.get(i).setHoliday("<br><span>크리스마스</span>");
			}
			
//			음력 공휴일 - 윤달일 경우 공휴일이 아니다.
//			음력 1월 1일(설날), 음력 4월 8일 (석가탄신일), 음력 8월 15일(추석) 
			if (!lunarList.get(i).isLunarFlag()) { // 윤달이 아닌가?
				if (lunarList.get(i).getMonthLunar() == 1 && lunarList.get(i).getDayLunar() == 1) {
					lunarList.get(i).setHoliday("<br><span>설날</span>");
					lunarList.get(i - 1).setHoliday("<br><span>설날연휴</span>");
					lunarList.get(i + 1).setHoliday("<br><span>설날연휴</span>");
				} else if (lunarList.get(i).getMonthLunar() == 4 && lunarList.get(i).getDayLunar() == 8) {
					lunarList.get(i).setHoliday("<br><span>석가탄신일</span>");
				} else if (lunarList.get(i).getMonthLunar() == 8 && lunarList.get(i).getDayLunar() == 15) { 
					lunarList.get(i).setHoliday("<br><span>추석</span>");
					lunarList.get(i - 1).setHoliday("<br><span>추석연휴</span>");
					lunarList.get(i + 1).setHoliday("<br><span>추석연휴</span>");
				}
			}
//			--------- 음력 공휴일 if
			
//			대체 공휴일 -> 설날, 삼일절, 석가탄신일, 어린이날, 광복절, 추석, 개천절, 한글날, 크리스마스
//			주말(토, 일요일)이나 다른 공휴일과 겹치면 그 다음 첫번째 비 공휴일을 대체 공휴일로 한다.

//			양력 날짜의 요일을 계산해둔다.
			int holiday = MyCalendar.weekDay(year, lunarList.get(i).getMonth(), lunarList.get(i).getDay());
			
//			설날 대체 공휴일 -> 설날이 주말과 겹쳤을 때
			if (!lunarList.get(i).isLunarFlag() 
					&& lunarList.get(i).getMonthLunar() == 1 
					&& lunarList.get(i).getDayLunar() == 1) {
				if (holiday == 0 || holiday == 6) {
					lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
				}
				
			}
//			------------ 설날 대체공휴일 if
			
//			삼일절 대체 공휴일 -> 삼일절이 주말과 겹쳤을 때
			if ( lunarList.get(i).getMonth() == 3 && lunarList.get(i).getDay() == 1 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( lunarList.get(i).getMonth() == 3 && lunarList.get(i).getDay() == 1 && holiday == 6 ) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			------------ 삼일절 대체공휴일 if
				
		
//			석가탄신일 대체 공휴일 -> 석가탄신일이 주말과 겹쳤을 때
			if (!lunarList.get(i).isLunarFlag() 
					&& lunarList.get(i).getMonthLunar() == 4 
					&& lunarList.get(i).getDayLunar() == 8 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( !lunarList.get(i).isLunarFlag() 
					&& lunarList.get(i).getMonthLunar() == 4 
					&& lunarList.get(i).getDayLunar() == 8 && holiday == 6) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			------------ 석가탄신일 대체공휴일 if
			
			
//			어린이날 대체 공휴일 -> 어린이날이 주말과 겹쳤을 때
			if ( lunarList.get(i).getMonth() == 5 && lunarList.get(i).getDay() == 5 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( lunarList.get(i).getMonth() == 5 && lunarList.get(i).getDay() == 5 && holiday == 6 ) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			-------------- 어린이날 대체공휴일 if
			
			
//			어린이날과 석가탄신일이 겹쳤을 때
			if (!lunarList.get(i).isLunarFlag() 
					&& lunarList.get(i).getMonthLunar() == 4 
					&& lunarList.get(i).getDayLunar() == 8 
					&& lunarList.get(i).getMonth() == 5 
					&& lunarList.get(i).getDay() == 5) {
				lunarList.get(i).setHoliday("<br><span>어린이날</span><br><span>석가탄신일</span>");
				if (holiday == 6) {
					lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
				} else if(holiday == 0) {
					lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
				} else {
					lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
					lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
					if (holiday == 5) {
						lunarList.get(i + 3).setHoliday("<br><span>대체공휴일</span>");
					}
				}
//				---------- holiday if 
			} else {
			
			}
//			어린이날 석가탄신일 겹쳤을 때 if 
			
			
//		 	광복절 대체 공휴일 -> 광복절이 주말과 겹쳤을 때
			if ( lunarList.get(i).getMonth() == 8 && lunarList.get(i).getDay() == 15 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( lunarList.get(i).getMonth() == 8 && lunarList.get(i).getDay() == 18 && holiday == 6 ) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			-------------- 광복절 대체공휴일 if
			

			
//		 	개천절 대체 공휴일 -> 개천절이 주말과 겹쳤을 때
			if ( lunarList.get(i).getMonth() == 10 && lunarList.get(i).getDay() == 3 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( lunarList.get(i).getMonth() == 10 && lunarList.get(i).getDay() == 3 && holiday == 6 ) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			-------------- 개천절 대체공휴일 if
			
//			추석 연휴과 개천절이 겹쳤을 떄
//			2028
			if ( lunarList.get(i).getYear() == 2028 
						&& lunarList.get(i).getMonth() == 10 
						&& lunarList.get(i).getDay() == 5 
						) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			}
			
//			2036
			if ( lunarList.get(i).getYear() == 2036 
					&& lunarList.get(i).getMonth() == 10 
					&& lunarList.get(i).getDay() == 6 
					) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			}
			
			if ( lunarList.get(i).getYear() == 2036 
					&& lunarList.get(i).getMonth() == 10 
					&& lunarList.get(i).getDay() == 7 
					) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			}
			
			
//		 	한글날 대체 공휴일 -> 한글날이 주말과 겹쳤을 때
			if ( lunarList.get(i).getMonth() == 10 && lunarList.get(i).getDay() == 9 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( lunarList.get(i).getMonth() == 10 && lunarList.get(i).getDay() == 9 && holiday == 6 ) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			-------------- 한글날 대체공휴일 if
			
//		 	크리스마스 대체 공휴일 -> 크리스마스이 주말과 겹쳤을 때
			if ( lunarList.get(i).getMonth() == 12 && lunarList.get(i).getDay() == 25 && holiday == 0) {
				lunarList.get(i + 1).setHoliday("<br><span>대체공휴일</span>");
			} else if ( lunarList.get(i).getMonth() == 12 && lunarList.get(i).getDay() == 25 && holiday == 6 ) {
				lunarList.get(i + 2).setHoliday("<br><span>대체공휴일</span>");
			}
//			-------------- 크리스마스 대체공휴일 if
			
			
			
			
			
		}
//		------------ 공휴일 for
			
		
//		1년에 존재하는 모든 공휴일을 처리했으므로 달력 출력에 사용할 달의 정보만 별도로 리턴한다.
//		인수로 넘겨받은 month의 양력에 해당되는 음력을 기억할 ArrayList를 저장해서 리턴할 ArrayList를 선언한다.
		ArrayList<LunarDate> list = new ArrayList<LunarDate>();
		for(LunarDate lunarDate : lunarList) {
			if (lunarDate.getMonth() == month) {
				list.add(lunarDate);
			}
		}
//		System.out.println(list);
		
		
		return list;
	}
	
	
}
