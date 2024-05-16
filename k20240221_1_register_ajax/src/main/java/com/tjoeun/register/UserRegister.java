package com.tjoeun.register;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.tjoeun.register.dao.RegisterDAO;
import com.tjoeun.register.vo.RegisterVO;

@WebServlet("/UserRegister")
public class UserRegister extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public UserRegister() {
        super();
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("UserRegister - doGet()");
		actionDo(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("UserRegister - doPost()");
		actionDo(request, response);
	}
	
	protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		System.out.println("UserRegister 서블릿의 actionDo() 실행");
		request.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");
//		System.out.println(request.getParameter("userId"));
//		System.out.println(request.getParameter("userPassword"));
//		System.out.println(request.getParameter("userName"));
//		System.out.println(request.getParameter("userAge"));
//		System.out.println(request.getParameter("userGender"));
//		System.out.println(request.getParameter("userEmail"));
	
		String userId = request.getParameter("userId").trim();
		String userPassword = request.getParameter("userPassword").trim();
		String userPassword2 = request.getParameter("userPassword2").trim();
		String userName = request.getParameter("userName").trim();
		String userAge = request.getParameter("userAge").trim();
		String userGender = request.getParameter("userGender").trim();
		String userEmail = request.getParameter("userEmail").trim();
		
//		입력 체크
		if (userId == null || userId.equals("") ||
				userPassword == null || userPassword.equals("") ||
				userPassword2 == null || userPassword2.equals("") ||
				userName == null || userName.equals("") || 
				userAge == null || userAge.equals("") ||
				userGender == null || userGender.equals("") ||
				userEmail == null || userEmail.equals(""))				 {
//			입력 체크 실패 메시지를 session에 저장한다.
//			request.getSession() : 서블릿에서 session을 얻어온다.
//			request.getSession().setAttribute("messageType", "오류메시지"); //	/1/
//			request.getSession().setAttribute("messageContent", "모든 내용을 입력하세요."); //	/1/
//			response.sendRedirect("index.jsp"); //	/1/
			
//			입력 체크 성공 여부에 따른 메시지를 서블릿을 호출한 AJAX로 넘겨준다.
			response.getWriter().write("1"); //	/2/
			return;
		}
		
//		비밀번호 체크
		if (!userPassword.equals(userPassword2)) {
//			비밀번호 불일치 메시지를 session에 저장한다.
//			request.getSession().setAttribute("messageType", "오류메시지");// /1/
//			request.getSession().setAttribute("messageContent", "비밀번호가 일치하지 않음.");// /1/
//			response.sendRedirect("index.jsp");// /1/
			
//			비밀번호 체크 성공 여부에 따른 메시지를 서블릿을 호출한 AJAX로 넘겨준다.
			response.getWriter().write("2"); // /2/
			return; 
			
		}
	
//		여기까지 왔으면 넘어온 데이터가 정상이므로 RegisterVO 클래스 객체를 만들어 저장한다.
		
		RegisterVO vo = new RegisterVO(userId,
										userPassword, 
										userName,
										Integer.parseInt(userAge),
										userGender,
										userEmail);
				
//		테이블에 회원 정보를 저장하는 메소드를 실행한다.
		int result = new RegisterDAO().register(vo);
		
//		저장 체크
		if (result == 1) {
//			insert sql 명령이 정상적으로 실행되었을 때 성공 메시지를 session에 저장한다.
//			request.getSession().setAttribute("messageType", "성공메시지 : "); //	/1/
//			request.getSession().setAttribute("messageContent", "회원가입에 성공했습니다."); //	/1/
			
//			insert sql 명령이 정상적으로 실행되었을 때 메시지를 서블릿을 호출한 AJAX로 넘겨준다.
			response.getWriter().write("3");
		} else {
//			insert sql 명령이 정상적으로 실행되지 않았을 때 실패 메시지를 session에 저장한다.
//			request.getSession().setAttribute("messageType", "오류메시지 : "); //	/1/
//			request.getSession().setAttribute("messageContent", "이미 존재하는 아이디입니다."); //	/1/
			
//			insert sql 명령이 정상적으로 실행되지 않았을 때  메시지를 서블릿을 호출한 AJAX로 넘겨준다.
			response.getWriter().write("4"); // /2/
			
		}
//		response.sendRedirect("index.jsp"); //	/1/
		
		
	//		
	}

	
//
}
