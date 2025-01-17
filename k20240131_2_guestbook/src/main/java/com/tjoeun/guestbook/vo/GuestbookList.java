package com.tjoeun.guestbook.vo;

import java.util.ArrayList;

//	1페이지 분량의 글 목록과 페이징 작업에 사용할 8개의 변수를 초기화시키는 클래스
public class GuestbookList {

//	필드 선언
//	1페이지 분량의 글(GuestbookVO) 목록을 기억할 ArrayList를 선언한다.
	private ArrayList<GuestbookVO> list = new ArrayList<>();
	
//	페이징 작업에 사용할 8개의 변수를 선언한다.
	private int pageSize = 10;   // 페이지당 표시하려는 글의 개수
	private int totalCount = 0;  // 테이블에 저장된 전체 글의 개수
	private int currentPage = 1; // 현재 브라우저에 표시되는 페이지 번호
	private int totalPage = 0;   // 전체 페이지 개수
//	 현재 브라우저에 표시되는 글 목록의 시작 인덱스 => mysql은 인덱스가 0부터, oracle은 1부터 시작한다.
	private int startNo = 0;    
	private int endNo = 0;       // 현재 브라우저에 표시되는 글 목록의 마지막 인덱스, mysql에서는 사용하지 않는다.
	private int startPage = 0;   // 페이지 이동 하이퍼링크 또는 버튼에 표시될 시작 페이지 번호
	private int endPage = 0;     // 페이지 이동 하이퍼링크 또는 버튼에 표시될 마지막 페이지 번호
	
//	생성자 선언
	public GuestbookList() {
	}
	
	
//	pageSize, totalCount, currentPage를 인수로 넘겨받아 초기화시키고 나머지 5개의 변수를 초기화 할 값을
//	계산해서 초기화시키는 생성자
	public GuestbookList(int pageSize, int totalCount, int currentPage) {
		super();
		this.pageSize = pageSize;
		this.totalCount = totalCount;
		this.currentPage = currentPage;
//		pageSize, totalCount, currentPage를 제외한 나머지 변수를 계산해서 초기화시키는 메소드를 호출한다.
		calculator();
	}
	
//	 pageSize, totalCount, currentPage를 제외한 나머지 변수를 계산해서 초기화시키는 메소드
	
	private void calculator() {
		totalPage = (totalCount - 1) / pageSize + 1;
		
		currentPage = currentPage > totalPage ? totalPage : currentPage;
//		oracle은 select sql 명령 실행 결과 인덱스 값이 1부터 시작되므로 mysql에 사용했던 계산식에 1을
//		더해서 사용해야한다.
		startNo = (currentPage - 1) * pageSize + 1;
		endNo = startNo + pageSize - 1;
		endNo = endNo > totalCount ? totalCount : endNo;
		
		startPage = (currentPage - 1) / 10 * 10 + 1;
		endPage = startPage + 9;
		endPage = endPage > totalPage ? totalPage : endPage;
	}


//	getters & setters 선언
	public ArrayList<GuestbookVO> getList() {
		return list;
	}
	public void setList(ArrayList<GuestbookVO> list) {
		this.list = list;
	}


	public int getPageSize() {
		return pageSize;
	}
	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}


	public int getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}


	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	
	
	public int getTotalPage() {
		return totalPage;
	}
	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}


	public int getStartNo() {
		return startNo;
	}
	public void setStartNo(int startNo) {
		this.startNo = startNo;
	}


	public int getEndNo() {
		return endNo;
	}
	public void setEndNo(int endNo) {
		this.endNo = endNo;
	}


	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}


	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}


//	toString() 메소드 Override
	@Override
	public String toString() {
		return "GuestbookList [list=" + list + ", pageSize=" + pageSize + ", totalCount=" + totalCount
				+ ", currentPage=" + currentPage + ", totalPage=" + totalPage + ", startNo=" + startNo + ", endNo="
				+ endNo + ", startPage=" + startPage + ", endPage=" + endPage + "]";
	}
	
	
	
	
	
	
}




















