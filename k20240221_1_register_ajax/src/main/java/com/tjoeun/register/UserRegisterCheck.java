package com.tjoeun.register;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tjoeun.register.dao.RegisterDAO;

@WebServlet("/UserRegisterCheck")
public class UserRegisterCheck extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UserRegisterCheck() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("UserRegisterCheck 서블릿 doGet() 실행");
		actionDo(request, response);
	}
	

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("UserRegisterCheck 서블릿 doPost() 실행");
		actionDo(request, response);
	}
	
	protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("UserRegisterCheck 서블릿 actionDo() 실행");
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		String userId = request.getParameter("userId").trim();
//		System.out.println(userId);
		
//		회원가입하려는 ID가 테이블에 존재하는가 판단하는 메소드를 실행한다.
		String result = new RegisterDAO().registerCheck(userId);
		
//		System.out.println(result);
		
		response.getWriter().write(result);
		
		
		
	//		
	}

	
//	
}
