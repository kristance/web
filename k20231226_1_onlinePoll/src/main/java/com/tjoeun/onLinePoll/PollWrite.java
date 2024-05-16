package com.tjoeun.onLinePoll;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.util.ArrayList;

public class PollWrite {

//	텍스트 파일의 이름과 파일에 저장할 ArrayList를 넘겨받아 텍스트파일에 저장하는 메소드
	public static void pollWrite(String filepath, ArrayList<String> poll) {
		
//		ArrayList에 저장된 데이터를 텍스트 파일로 출력하기 위해 PrintWriter 클래스 객체를 선언한다.
		PrintWriter printWriter = null;
		
		try {
//			 ArrayList에 저장할 데이터를 텍스트 파일로 출력할 PrintWriter 객체를 생성한다.
			printWriter = new PrintWriter(filepath);
			
//			ArrayList에 저장된 데이터의 갯수만큼 반복하며 텍스트 파일로 출력한다.
			for (String str : poll) {
				printWriter.write(str + "\r\n");
			}
		} catch (FileNotFoundException e) {
			System.out.println("경로가 틀렸거나 디스크에 파일이 존재하지 않습니다.");
		} finally {
//			파일로 출력하는 객체를 close() 메소드를 실행해서 닫지 않으면 파일에 데이터가 저장되지 않는다.
			if (printWriter != null) {
				printWriter.close();
			}
		}
		
		
		
	}
	
	
}