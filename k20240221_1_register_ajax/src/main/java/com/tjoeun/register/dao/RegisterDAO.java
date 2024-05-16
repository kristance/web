package com.tjoeun.register.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.tjoeun.register.vo.RegisterVO;

public class RegisterDAO {

	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;
	

	public RegisterDAO() {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			String url = "jdbc:oracle:thin:@localhost:1521:xe";
			conn = DriverManager.getConnection(url, "admin", "1234");
			// System.out.println("연결성공: " + conn);
		} catch (ClassNotFoundException e) {
			System.out.println("드라이버 클래스가 없거나 읽어올 수 없습니다.");
		} catch (SQLException e) {
			System.out.println("데이터베이스 연결 정보가 올바르지 않습니다.");
		}
		
		
	//	
	}

//	index.jsp에 입력한 회원 정보를 저장하는 메소드
	public int register(RegisterVO vo) {
		
		System.out.println("RegisterDAO 클래스 register() 실행");
		
			try {
				String sql = "insert into register(userid, userpassword, username, userage, usergender, useremail)"
						+ "values (?, ?, ?, ?, ?, ?)";
				pstmt = conn.prepareStatement(sql);
				pstmt.setString(1, vo.getUserId());
				pstmt.setString(2, vo.getUserPassword());
				pstmt.setString(3, vo.getUserName());
				pstmt.setInt(4, vo.getUserAge());
				pstmt.setString(5, vo.getUserGender());
				pstmt.setString(6, vo.getUserEmail());
				return pstmt.executeUpdate();
			 
			} catch (SQLException e) {
				e.printStackTrace();
				System.out.println("중복 아이디 입력");
			} finally {
				if(conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						e.printStackTrace();
					}
				}
			}
			return -1;
	
			
	//		
	}

	
//	회원 가입하려는 ID가 테이블에 존재하는가 판단하는 메소드
	public String registerCheck(String userId) {
		System.out.println("RegisterDAO 클래스 registerCheck() 실행");

		try {
			String sql = "select * from register where trim(userId) = ?";
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, userId);
			rs = pstmt.executeQuery();
			
			if ( userId.equals(""))  {
//				중복 검사할 ID를 입력하지 않고 중복 체크 버튼을 클릭한 경우
				return "1";
			} else if (rs.next()) {
//				사용 중인 ID일 경우
				return "2";
			} else {
//				사용 가능한 아이디일 경우
				return "3";
			}
		 
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			if(conn != null) {
				try {
					conn.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		return "0";

		
		
		
	//	
	}
	
	
	
	
//	
}
