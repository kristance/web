package com.tjoeun.fileDownload;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


//	브라우저 주소창에 contextPath(프로젝트) 뒤에 @WebServlet 어노테이션 인수로 지정된 요청 (/DownloadAction)이 들어오면
//	즉, "/k20240214_2_fileDownload" 뒤에 "/DownloadAction"가 붙어서 "/k20240214_02_fileDownload/DownloadAction"처럼
//	요청되면 @WebServlet("/DownloadAction") 어노테이션이 붙어있는 클래스의 doGet() 또는 doPost() 메소드가 자동 실행된다.
@WebServlet("/DownloadAction")
public class DownloadAction extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public DownloadAction() {
    }

    
//  서블릿이 get 방식으로 요청될 때 자동으로 실행되는 메소드
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("DownloadAction 서블릿의 doGet() 메소드 실행");
//		get 방식으로 요청시 서블릿으로 전달되는 데이터는 HttpServletRequest 인터페이스 객체 request에 저장된다.
//		System.out.println("doGet() : " + request.getParameter("name"));
		actionDo(request, response);
	}

//  서블릿이 post 방식으로 요청될 때 자동으로 실행되는 메소드
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("DownloadAction 서블릿의 doPost() 메소드 실행");
//		post 방식으로 요청시 서블릿으로 전달되는 데이터는 HttpServletRequest 인터페이스 객체 request에 저장된다.
//		request.setCharacterEncoding("UTF-8");
//		System.out.println("doPost() : " + request.getParameter("name"));
		actionDo(request, response);
	}

//	doGet(), doPost() 메소드가 실행된 후 공통으로 실행할 메소드를 만든다.
	protected void actionDo(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("DownloadAction 서블릿의 actionDo() 메소드 실행");
		request.setCharacterEncoding("UTF-8"); // 데이터를 받을 때 한글 깨짐 방지
		response.setContentType("text/html; charset=UTF-8"); // 데이터를 보낼 때 한글 깨짐 방지
		
//		다운로드 할 파일 이름을 받는다.
		String filename = request.getParameter("file");
//		System.out.println(filename); 
		
//		다운로드 할 파일이 실제 저장된 경로(realpath)와 다운로드 할 파일 이름(filename)을 연결한다.
//		getServletContext().getRealPath() : realpath를 얻어온다.
//		System.out.println(getServletContext().getRealPath("./upload/"));
		String downloadFile = getServletContext().getRealPath("./upload/") + filename;
//		System.out.println(downloadFile);
		
//		다운로드 할 파일 객체를 만든다.
		File file = new File(downloadFile);
		
//		MIME(Multipurpose Internet Mail Extensions) : 다양한 유형의 정보를 식별하기 위한 표준
//		HTTP에서 서버가 전달 중인 컨텐츠를 정의하는 데도 사용된다.
//		getServletContext().getMimeType() : 인수로 지정된 파일의 MIME 타입을 얻어온다.
		String mimeType = getServletContext().getMimeType(filename.toString());
//		System.out.println(mimeType);
//		MIME 타입을 얻어오지 못했다면 파일을 전송하는 것을 알려주기 위해서 response 객체를 사용해서
//		데이터를 전송한다는 것을 알려준다.
		if(mimeType == null) {
			response.setContentType("application/octet-stream");
		}
		
//		접속한 브라우저에 따라 다운로드 할 파일의 헤더 정보를 다르게 설정한다.
		String downloadName = "";
		if(request.getHeader("user-agent").indexOf("MSIE") == -1) {
//			인터넷 익스플로러를 제외한 나머지 브라우저
			downloadName = new String(filename.getBytes("UTF-8"), "8859_1");
		} else {
//			인터넷 익스플로러
			downloadName = new String(filename.getBytes("EUC-KR"), "8859_1");
		}
		
		
//		파일 이름을 헤더에 저장한다.
//		attachment 뒤의 filename은 반드시 큰따옴표를 사용해서 묶어야한다. -> \"를 사용한다.
		response.setHeader("Content-Disposition", "attachment;filename=\"" + downloadName + "\";");
		
//		파일을 전송할 준비를 한다.
//		realpath에 저장된 다운로드 할 파일을 읽어들일 객체를 선언한다.
		FileInputStream fileInputStream = new FileInputStream(file);
		
//		다운로드가 실행되는 브라우저로 파일을 전송하는 객체를 선언한다.
		ServletOutputStream servletOutputStream = response.getOutputStream();
		
//		파일을 1024 바이트 (1kb) 단위로 전송하기 위한 byte 배열을 선언한다.
		byte[] b = new byte[1024];
	
//		브라우저로 전송하기 위해 읽어들인 파일의 크기를 기억할 변수를 선언한다.
		int data = 0;
		
//		디스크에서 읽어들인 전송할 파일에 데이터가 남아있는 동안 반복하며 브라우저로 파일을 전송한다.
//		read(배열이름, 시작인덱스, 마지막인덱스) : FileInputStream 객체에서 파일을 바이트 단위로 읽는다.
//		read() 메소드는 파일에서 읽어들인 데이터를 배열의 시작 인덱스부터 마지막 인덱스까지 읽어서 채우고
//		읽어들인 크기를 리턴한다. -> 읽어들인 데이터가 없으면 -1을 리턴한다.
		while ( (data = fileInputStream.read(b, 0, b.length)) != -1 ) { // 파일에서 읽어들인 데이터가 있는가
			servletOutputStream.write(b, 0, data);
		}
		
//		flush() 메소드로 ServletOutputStream 객체의 출력 버퍼에 저장된 모든 데이터를 전송하고, 전송에 사용한 모든 객체를 닫는다.
		servletOutputStream.flush();
		servletOutputStream.close();
		fileInputStream.close();
		
		
		
	}
	
	
}
