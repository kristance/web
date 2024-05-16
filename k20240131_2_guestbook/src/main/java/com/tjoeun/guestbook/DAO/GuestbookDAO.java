package com.tjoeun.guestbook.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;

import com.ibatis.sqlmap.client.SqlMapClient;
import com.tjoeun.guestbook.vo.GuestbookVO;
import com.tjoeun.guestbook.vo.Param;

public class GuestbookDAO {

	private static GuestbookDAO instance = new GuestbookDAO();
	
	private GuestbookDAO() {
		
	}
		
	public static GuestbookDAO getInstance () {
		return instance;
	}

//	InsertService 클래스에서 호출되는 mapper와 테이블에 저장할 데이터가 저장된 객체(vo)를 넘겨받고
//	guestbook.xml 파일의 insert sql 명령을 실행하는 메소드
	public void insert(SqlMapClient mapper, GuestbookVO vo) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 insert() 메소드 실행");
//		System.out.println(vo);
		
	/*
		try {
//			Connection conn = DBUtil.getOracleConnection();
//			Connection conn = DBUtil.getCommonsDBCPConnection();
			Connection conn = DBUtil.getTomcatDBCPConnection();
			String sql = "insert into guestbook(idx, name, password, memo, ip) "
					+ "values (guestbook_idx_seq.nextval, ?, ?, ?, ?)";
			PreparedStatement pstmt = conn.prepareStatement(sql);
			
			pstmt.setString(1, vo.getName());
			pstmt.setString(2, vo.getPassword());
			pstmt.setString(3, vo.getMemo());
			pstmt.setString(4, vo.getIp());
			
			pstmt.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		} 
	*/
		
//		insert() : insert sql 명령을 실행한다.
//		delete() : delete sql 명령을 실행한다.
//		update() : update sql 명령을 실행한다.
//		queryForObject() : 명령 실행 결과가 1건인 select sql 명령을 실행한다. 
//			-> 결과는 Object 클래스 타입으로 리턴된다.
//		queryForList() : 명령 실행 결과가 여러 건인 select sql 명령을 실행한다.
//			-> 결과는 List 인터페이스 타입으로 리턴된다.
		
//		insert("실행할 SQL 명령의 id")
//		insert("실행할 SQL 명령의 id", SQL 명령으로 전달할 데이터)
		mapper.insert("insert", vo);
		
		
	}
//		SelectService 클래스에서 호출되는 mapper를 넘겨받고 guestbook.xml 파일의 테이블에 전체 글의 갯수를
//		얻어오는 select sql 명령을 실행하는 메소드
	public int selectCount(SqlMapClient mapper) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectCount(SqlMapClient mapper) 메소드 실행");
		return (int) mapper.queryForObject("selectCount");
	}

//		SelectService 클래스에서 호출되는 mapper와 화면에 표시할 페이지의 시작 인덱스 번호와 끝 인덱스 번호가
//		저장된 HashMap 객체를 넘겨받고 guestbook.xml 파일의 1페이지 분량의 글 목록을 얻어오는 select sql 명령을
//		실행하는 메소드
	public ArrayList<GuestbookVO> selectList(SqlMapClient mapper, HashMap<String, Integer> hmap) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectList(SqlMapClient mapper, HashMap<String, Integer> hmap) 메소드 실행");
		return (ArrayList<GuestbookVO>) mapper.queryForList("selectList", hmap);
	}

	
	
//	selectByIdx.jsp에서 호출되는 mapper와 수정 또는 삭제할 글번호를 넘겨받고 guestbook.xml파일의
//	수정 또는 삭제할 글 1건을 얻어오는 select sql 명령을 실행하는 메소드
	public GuestbookVO selectByIdx(SqlMapClient mapper, int idx) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectByIdx() 메소드 실행");
		System.out.println(idx);
		return (GuestbookVO) mapper.queryForObject("selectByIdx", idx);
	}

	
	
//	DeleteService.jsp에서 호출되는 mapper와 삭제할 글번호를 넘겨받고 guestbook.xml파일의
//	삭제할 글 1건을 삭제하는 delete sql 명령을 실행하는 메소드
	public void delete(SqlMapClient mapper, int idx) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 delete() 메소드 실행");
		mapper.delete("delete", idx);
		
	}

//	UpdateService.jsp에서 호출되는 mapper와 수정할 글번호와 정보가 저장된 객체를 넘겨받고
//	guestbook.xml파일의 수정할 글 1건을 수정하는 update sql 명령을 실행하는 메소드
	public void update(SqlMapClient mapper, GuestbookVO vo) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 update() 메소드 실행");
		mapper.update("update", vo);
	}

//	SelectService.jsp에서 호출되는 mapper와 검색어(내용)를 넘겨받고 guestbook.xml 파일의 
//	테이블에 저장된 전체 글 중에 검색어를 포함하는 글의 갯수를 얻어오는 select sql 명령을 실행하는 메소드
	public int selectCountMemo(SqlMapClient mapper, String item) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectCountMemo() 메소드 실행");
		return (int) mapper.queryForObject("selectCountMemo", item);
	}
	
//	SelectService.jsp에서 호출되는 mapper와 화면에 출력할 시작 인덱스와 끝 인덱스, 검색어(내용)가 저장된
//	Param 클래스 객체를 넘겨받고 guestbook.xml 파일의 테이블에 저장된 전체 글 중에 memo 필드에
//	검색어를 포함하는 글들의 목록을 얻어오는 select sql 명령을 실행하는 메소드
	public ArrayList<GuestbookVO> selectListMemo(SqlMapClient mapper, Param param) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectListMemo() 메소드 실행");
		return (ArrayList<GuestbookVO>) mapper.queryForList("selectListMemo", param);
	}

//	SelectService.jsp에서 호출되는 mapper와 검색어(이름)를 넘겨받고 guestbook.xml 파일의 
//	테이블에 저장된 전체 글 중에 검색어를 포함하는 글의 갯수를 얻어오는 select sql 명령을 실행하는 메소드
	public int selectCountName(SqlMapClient mapper, String item) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectCountName() 메소드 실행");
		return (int) mapper.queryForObject("selectCountName", item);
	}
	
	
//	SelectService.jsp에서 호출되는 mapper와 화면에 출력할 시작 인덱스와 끝 인덱스, 검색어(이름)가 저장된
//	Param 클래스 객체를 넘겨받고 guestbook.xml 파일의 테이블에 저장된 전체 글 중에 name 필드에
//	검색어를 포함하는 글들의 목록을 얻어오는 select sql 명령을 실행하는 메소드
	public ArrayList<GuestbookVO> selectListName(SqlMapClient mapper, Param param) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectListName() 메소드 실행");
		return (ArrayList<GuestbookVO>) mapper.queryForList("selectListName", param);
	}

//	SelectService.jsp에서 호출되는 mapper와 검색어(내용+이름)를 넘겨받고 guestbook.xml 파일의 
//	테이블에 저장된 전체 글 중에 검색어를 포함하는 글의 갯수를 얻어오는 select sql 명령을 실행하는 메소드
	public int selectCountMemoName(SqlMapClient mapper, String item) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectListName() 메소드 실행");
		return (int) mapper.queryForObject("selectCountMemoName", item);
	}

//	SelectService.jsp에서 호출되는 mapper와 화면에 출력할 시작 인덱스와 끝 인덱스, 검색어(내용+이름)가 저장된
//	Param 클래스 객체를 넘겨받고 guestbook.xml 파일의 테이블에 저장된 전체 글 중에 memo 필드와 name 필드에
//	검색어를 포함하는 글들의 목록을 얻어오는 select sql 명령을 실행하는 메소드
	public ArrayList<GuestbookVO> selectListMemoName(SqlMapClient mapper, Param param) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectListMemoName() 메소드 실행");
		return (ArrayList<GuestbookVO>) mapper.queryForList("selectListMemoName", param);
	}

//	SelectService.jsp에서 호출되는 mapper와 카테고리 및 검색어가 저장된 Param 클래스 객체를 넘겨받고 guestbook.xml 파일의 
//	테이블에 저장된 전체 글 중에 카테고리에 따른 검색어를 포함하는 글의 갯수를 얻어오는 select sql 명령을 실행하는 메소드
	public int selectCount(SqlMapClient mapper, Param param) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectCount(SqlMapClient mapper, Param param) 메소드 실행");
		return (int) mapper.queryForObject("selectCountMulti", param);
	}

//	SelectService.jsp에서 호출되는 mapper와 화면에 출력할 시작 인덱스와 끝 인덱스, 카테고리, 검색어(내용+이름)가 저장된
//	Param 클래스 객체를 넘겨받고 guestbook.xml 파일의 테이블에 저장된 전체 글 중에 카테고리별 
//	검색어를 포함하는 1페이지 분량의 글들의 목록을 얻어오는 select sql 명령을 실행하는 메소드
	public ArrayList<GuestbookVO> selectList(SqlMapClient mapper, Param param) throws SQLException {
		System.out.println("GuestbookDAO 클래스의 selectList(SqlMapClient mapper, Param param) 메소드 실행");
		return (ArrayList<GuestbookVO>) mapper.queryForList("selectListMulti", param);
	}

	
	
	
	
	
	
	
	
}
