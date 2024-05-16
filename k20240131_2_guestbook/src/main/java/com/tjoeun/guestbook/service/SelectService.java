package com.tjoeun.guestbook.service;

import java.sql.SQLException;
import java.util.HashMap;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.tjoeun.guestbook.DAO.GuestbookDAO;
import com.tjoeun.guestbook.ibatis.MyAppSqlConfig;
import com.tjoeun.guestbook.vo.GuestbookList;
import com.tjoeun.guestbook.vo.GuestbookVO;
import com.tjoeun.guestbook.vo.Param;

public class SelectService {

	 private static SelectService instance = new SelectService();
	 
	 private SelectService() {
	}

	 public static SelectService getInstance () {
		 return instance;
	 }
	
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)를 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드
	public GuestbookList selectList (int currentPage) {
		System.out.println("SelectService 클래스의 selectList(int currentPage) 메소드 실행");
//		System.out.println(currentPage);
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		
//		1페이지 분량의 글 목록과 페이징 작업에 사용할 8개의 변수를 저장해서 리턴시킬 객체를 선언한다.
		GuestbookList guestbookList = null;

		try {
			int pageSize = 10; //	1페이지당 표시할 글의 갯수를 정한다.
//		테이블에 저장된 전체 글의 갯수를 얻어온다.
			int totalCount = GuestbookDAO.getInstance().selectCount(mapper);
//			System.out.println(totalCount);
			
//			pageSize, totalCount, currentPage를 GuestbookList 클래스의 생성자로 넘겨서 1페이지 분량의
//			글 목록을 저장하고 페이징 작업에 사용할 8개의 변수를 초기화하는 GuestbookList 클래스 객체를 생성한다.
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
//			parameterClass, resultClass에는 데이터 타입을 반드시 1개만 적어야 한다.
//			xml 파일의 sql 명령으로 전달할 데이터가 2개 이상일 경우 데이터 타입이 같다면 HashMap 객체에 저장해서 전달하면되고,
//			데이터 타입이 다르다면 클래스를 만들어서 저장해 전달하면 된다.
			HashMap<String, Integer> hmap = new HashMap<String, Integer>();
			hmap.put("startNo", guestbookList.getStartNo());
			hmap.put("endNo", guestbookList.getEndNo());
//			mysql은 아래와 같이 endNo 대신 pageSize를 HashMap 객체에 저장한다.
//			hmap.put("pageSize", guestbookList.getPageSize());
			
//			1페이지 분량의 글 목록을 얻어와서 GuestbookList 클래스의 객체의 ArrayList(list)에 저장한다.
			guestbookList.setList( GuestbookDAO.getInstance().selectList(mapper, hmap) );
//			System.out.println(guestbookList);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return guestbookList;
	}
	
//	selectByIdx.jsp에서 호출되는 수정 또는 삭제할 글번호를 넘겨받고 mapper를 얻어온 후 GuestbookDAO 클래스의
//	글 1건을 얻어오는 메소드를 호출하는 메소드
	public GuestbookVO selectByIdx(int idx) {
		System.out.println("SelectService 클래스의 selectByIdx(idx) 메소드 실행");
		System.out.println(idx);
		
		SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		
//		글 1건을 얻어와서 저장한 후 리턴시킬 객체를 선언한다.
		GuestbookVO vo = null;
		
		try {
			vo = GuestbookDAO.getInstance().selectByIdx(mapper, idx);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return vo;
	}
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(내용;item)을 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드
	public GuestbookList selectListMemo (int currentPage, String item) {
		 System.out.println("SelectService 클래스의 selectListMemo() 메소드 실행");
//		 System.out.println("item : " + item);
		 
		 SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		 
			GuestbookList guestbookList = null;
		 
		try {
			int pageSize = 5;
//			memo 필드 안에 검색어가 포함된 글의 갯수를 얻어온다.
			int totalCount = GuestbookDAO.getInstance().selectCountMemo(mapper, item);
//			System.out.println(totalCount);
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
//			startNo, endNo만 sql 명령으로 넘겨줄 떄는 데이터 타입이 같기때문에 HashMap을 이용하지만
//			검색어(item)를 같이 넘겨줘야하므로 데이터 타입이 다르기 때문에 별도의 클래스를 만들고
//			클래스 객체에 데이터를 담아서 넘겨줘야 한다.
			Param param = new Param();
			param.setStartNo(guestbookList.getStartNo());
			param.setEndNo(guestbookList.getEndNo());
			param.setItem(item);
			
//			memo 필드에 검색어를 포함하는 1페이지 분량의 글을 얻어와서 GuestbookList 클래스의
//			ArrayList에 저장한다.
			guestbookList.setList( GuestbookDAO.getInstance().selectListMemo(mapper, param) );
//			System.out.println(guestbookList);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		 
		return guestbookList;
	}
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(이름;item)을 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드
public GuestbookList selectListName (int currentPage, String item) {
	 System.out.println("SelectService 클래스의 selectListName() 메소드 실행");
//	 System.out.println("item : " + item);
	 
	 SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
	 
		GuestbookList guestbookList = null;
	 
		try {
			int pageSize = 5;
//		name 필드 안에 검색어가 포함된 글의 갯수를 얻어온다.
			int totalCount = GuestbookDAO.getInstance().selectCountName(mapper, item);
			guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
			
			Param param = new Param();
			param.setStartNo(guestbookList.getStartNo());
			param.setEndNo(guestbookList.getEndNo());
			param.setItem(item);
			
//		name 필드에 검색어를 포함하는 1페이지 분량의 글을 얻어와서 GuestbookList 클래스의
//		ArrayList에 저장한다.
			guestbookList.setList( GuestbookDAO.getInstance().selectListName(mapper, param) );
		} catch (SQLException e) {
			e.printStackTrace();
		}
		 
		return guestbookList;
	}

//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 검색어(내용+이름;item)을 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드
	public GuestbookList selectListMemoName (int currentPage, String item) {
		System.out.println("SelectService 클래스의 selectListMemoName() 메소드 실행");
		 
		 SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		 
			GuestbookList guestbookList = null;
		 
			try {
				int pageSize = 5;
//			memo 필드와 name 필드 안에 검색어가 포함된 글의 갯수를 얻어온다. 후에 1페이지 분량으로 나눠서 브라우저에 출력한다.
				int totalCount = GuestbookDAO.getInstance().selectCountMemoName(mapper, item);
//				System.out.println(totalCount);
				guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
				
				Param param = new Param(); // startNo와 endNo, category(카테고리), item(검색어)을 초기화하는 메소드
				param.setStartNo(guestbookList.getStartNo());
				param.setEndNo(guestbookList.getEndNo());
				param.setItem(item);
				
//			memo 필드와 name 필드에 검색어를 포함하는 1페이지 분량의 글을 얻어와서 GuestbookList 클래스의
//			ArrayList에 저장한다.
				guestbookList.setList( GuestbookDAO.getInstance().selectListMemoName(mapper, param) );
//				System.out.println(guestbookList);
			} catch (SQLException e) {
				e.printStackTrace();
			}
				
			return guestbookList;
		
		
	}
	
//	list.jsp에서 호출되는 브라우저에 표시할 페이지 번호(currentPage)와 카테고리(category), 검색어(내용+이름;item)을 넘겨받고 mapper를 얻어온 후
//	GuestbookDAO 클래스의 1페이지 분량의 카테고리에 따른 검색어를 포함하는 글 목록을 얻어오는 select sql 명령을 실행하는 메소드를 호출하는 메소드
	public GuestbookList selectList (int currentPage, String category, String item) {
		System.out.println("SelectService 클래스의 selectList(int currentPage, String category, String item) 메소드 실행");
		 
		 SqlMapClient mapper = MyAppSqlConfig.getSqlMapInstance();
		 
			GuestbookList guestbookList = null;
			
			try {
				int pageSize = 5;
//				카테고리에 따른 검색어를 포함하는 글의 갯수를 얻어온다. 후에 1페이지 분량으로 나눠서 브라우저에 출력한다.
//				카테고리에 따른 검색어가 포함되었나 조건을 세워야 하기때문에 Param 클래스 객체를 사용한다.
				Param param = new Param(); // startNo와 endNo, category(카테고리), item(검색어)을 초기화하는 메소드
				param.setCategory(category);
				param.setItem(item);
				
				int totalCount = GuestbookDAO.getInstance().selectCount(mapper, param);
//				System.out.println(totalCount);	
				guestbookList = new GuestbookList(pageSize, totalCount, currentPage);
				param.setStartNo(guestbookList.getStartNo());
				param.setEndNo(guestbookList.getEndNo());
					
//				memo 필드와 name 필드에 검색어를 포함하는 1페이지 분량의 글을 얻어와서 GuestbookList 클래스의
//				ArrayList에 저장한다.
				guestbookList.setList( GuestbookDAO.getInstance().selectList(mapper, param) );
//				System.out.println(guestbookList);
					
			} catch (SQLException e) {
				e.printStackTrace();
			}
			
			return guestbookList;
	}

}
	
	
	
	 



















