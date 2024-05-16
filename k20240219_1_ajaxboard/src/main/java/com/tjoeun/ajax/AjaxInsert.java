package com.tjoeun.ajax;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/AjaxInsert")
public class AjaxInsert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public AjaxInsert() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("AjaxInsert 서블릿 doGet() 실행");
		actionDo(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
	}

	protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("AjaxInsert 서블릿 actionDo() 실행");

		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
		int result;
		try {
//		index.jsp에서 입력한 데이터가 AJAX를 통해서 넘어오는 데이터를 받는다.
			String name = request.getParameter("name");
			String gender = request.getParameter("gender");
			String email = request.getParameter("email");
			int age = Integer.parseInt(request.getParameter("age"));
			
//		넘겨받은 데이터를 AjaxVO 클래스에 저장한다.
			AjaxVO vo = new AjaxVO(name, age, gender, email);
			
//		System.out.println(vo);
			
//		넘겨받은 데이터를 테이블에 저장하는 메소드를 실행한다.
			result = new AjaxDAO().insert(vo);
			
		} catch (NumberFormatException e) {
			result = -1;
		}
		
		
//		sql 명령의 정상 실행 또는 실패 여부를 응답한다.
		response.getWriter().write(result + "");
		
		
				
	}
	
	
//	
}
















