package com.tjoeun.controller;

import java.io.IOException;
import java.util.Arrays;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//	@WebServlet 어노테이션의 인수로 특정 요청을 써주면 그 요청이 들어왔을 때만 컨트롤러의 메소드가 자동으로
//	실행되므로 요청이 들어왔을때마다 요청을 처리할 컨트롤러를 일일히 만들어야 하는 문제점(?)이 발생된다.
//	@WebServlet 어노테이션의 인수로 와일드카드 문자(*)을 사용하는 확장명 패턴의 요청을 받을 수 있다.
//	확장명 패턴 방식으로 요청을 받을 때 맨 앞에 "/"을 붙이지 않는다.
//	확장명 패턴 방식으로 요청을 받으면 파일명은 상관없이 동일한 확장명으로 요청되면 컨트롤러의 메소드가
//	자동으로 실행된다.
//	확장명을 ".jsp"가 아닌 다른 이름을 사용하면 어떤 페이지가 호출되나 숨길 수 있다. -> 보안성 향상


@WebServlet("*.nhn")
public class HomeController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    public HomeController() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		actionDo(request, response);
		
	}
	
	protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("homecontroller 클래스 actionDo() 실행");
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
		
//		view 페이지로 전송할 데이터를 받아서 request 영역에 저장한다.
		String name = request.getParameter("name");
		request.setAttribute("name", name);
		
//		 getRequestURI() 메소드로 주소 창에 요청된 컨텍스트 패스와 요청을 받아온다.
		String url = request.getRequestURI();
//		System.out.println(url); //k20240215_3_mvcTest2/update.nhn
		
//		getContextPath() 메소드로 주소 창에 요청된 컨텍스트 패스만 받아온다.
		String contextPath = request.getContextPath();
//		System.out.println(contextPath); //k20240215_3_mvcTest2
	
//		주소 창에 요청된 컨텍스트 패스 뒤의 요청만 얻어온다.
//		System.out.println(contextPath.length());
//		String context = url.substring( contextPath.length() );
		String context = url.substring( contextPath.length() + 1, url.length() - 4 );
//		System.out.println(context); // update
		
//		요청에 따른 view 페이지를 결정한다.
		String viewpage = "./WEB-INF/"; // view 페이지 앞부분; "./WEB-INF/"
		switch (context) {
			case "hi" : 
				viewpage += "hello"; // "./WEB-INF/" + "hello" -> "./WEB-INF/hello"
				break;
			case "start" : 
				viewpage += "index";
				break;
			
		}
		viewpage += ".jsp"; // view 페이지 뒷부분; "./WEB-INF/hello" + ".jsp" -> "./WEB-INF/hello.jsp"
		System.out.println(viewpage)
		
//		요청에 따른 view 페이지를 호출한다.
		RequestDispatcher dispatcher = request.getRequestDispatcher(viewpage);
		dispatcher.forward(request, response);
		
	}

}
