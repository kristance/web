package com.tjoeun.category.dao;

import java.util.ArrayList;
import java.util.HashMap;

import org.apache.ibatis.session.SqlSession;

import com.tjoeun.category.vo.CategoryVO;

public class CategoryDAO {

	private static CategoryDAO instance = new CategoryDAO();
	
	private CategoryDAO() {
	}
	
	public static CategoryDAO getInstance() {
		return instance;
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 테이블에 저장할 메인 카테고리 정보가 저장된 객체를 넘겨받고
//	테이블에 메인 카테고리를 저장하는 category.xml파일의 insert sql 명령을 실행하는 메소드
	public void insert(SqlSession mapper, CategoryVO vo) {
		System.out.println("CategoryDAO 클래스의 insert() 메소드 실행");
//		insert(), delete(), update() 메소드는 ibatis와 똑같이 사용한다.
//		selectOne() : ibatis의 queryForObject() 메소드와 같은 기능이 실행된다.
//		selectList() : ibatis의 queryForList() 메소드와 같은 기능이 실행된다.
		mapper.insert("insert", vo);
	}

	
//	CategoryService 클래스에서 호출되는 mapper를 넘겨받고 테이블에 저장된 전체 카테고리 목록을 얻어오는
//	category.xml 파일의 select sql 명령을 실행하는 메소드
	public ArrayList<CategoryVO> selectList(SqlSession mapper) {
		System.out.println("CategoryDAO 클래스의 selectList() 메소드 실행");
		return (ArrayList<CategoryVO>) mapper.selectList("selectList", mapper);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 gup, seq가 저장된 HashMap 객체를 넘겨받고,
//	같은 카테고리 그룹(gup)에서 조건에 만족하는 카테고리 출력 순서를 조정하기 위해 seq를 1씩 증가시키는 
//	category.xml의 update sql 명령을 실행하는 메소드
	public void increment(SqlSession mapper, HashMap<String, Integer> hmap) {
		System.out.println("CategoryDAO 클래스의 increment() 메소드 실행");
		mapper.update("increment", hmap);
	}

	
	
//	CategoryService 클래스에서 호출되는 mapper와 테이블에 저장할 서브 카테고리 정보가 저장된 객체를 넘겨받고
//	테이블에 서브 카테고리를 저장하는 category.xml 파일의 insert sql 명령을 실행하는 메소드
	public void subInsert(SqlSession mapper, CategoryVO vo) {
		System.out.println("CategoryDAO 클래스의 subInsert() 메소드 실행");
		mapper.insert("subInsert", vo);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 삭제 또는 수정할 카테고리 번호를 넘겨받고 카테고리 1건을
//	얻어오는 select sql 명령을 실행하는 메소드
	public CategoryVO selectByIdx(SqlSession mapper, int idx) {
		System.out.println("CategoryDAO 클래스의 selectByIdx() 메소드 실행");
		return (CategoryVO) mapper.selectOne("selectByIdx", idx);
	}
	
	
	
//	CategoryService 클래스에서 호출되는 mapper와 삭제할 카테고리 번호를 넘겨받고 카테고리 1건을
//	얻어오는 delete sql 명령을 실행하는 메소드
	public void delete(SqlSession mapper, int idx) {
		System.out.println("CategoryDAO 클래스의 delete() 메소드 실행");
		mapper.delete("delete", idx);
	}

//	CategoryService 클래스에서 호출되는 mapper와 삭제할 카테고리 번호를 넘겨받고 카테고리 1건을
//	"삭제된 카테고리 입니다"로 수정하는 category.xml 파일의 update sql 명령을 실행하는 메소드
	
	public void deleteCategory(SqlSession mapper, int idx) {
		System.out.println("CategoryDAO 클래스의 deleteCategory() 메소드 실행");
		mapper.update("deleteCategory", idx);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 삭제할 카테고리 번호를 넘겨받고 카테고리 1건의
//	deleteCheck 필드의 값을 "YES"로 수정하는 category.xml 파일의 update sql 명령을 실행하는 메소드
	public void deleteCheck(SqlSession mapper, int idx) {
		System.out.println("CategoryDAO 클래스의 deleteCheck() 메소드 실행");
		mapper.update("deleteCheck", idx);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 복구할 카테고리 번호를 넘겨받고 카테고리 1건의
//	deleteCheck 필드의 값을 "NO"로 수정하는 category.xml 파일의 update sql 명령을 실행하는 메소드
	public void restore(SqlSession mapper, int idx) {
		System.out.println("CategoryDAO 클래스의 restore() 메소드 실행");
		mapper.update("restore", idx);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 신고할 카테고리 번호를 넘겨받고 카테고리 1건의
//	report 필드의 값을 1증가시키는 category.xml 파일의 update sql 명령을 실행하는 메소드
	public void report(SqlSession mapper, int idx) {
		System.out.println("CategoryDAO 클래스의 report() 메소드 실행");
		mapper.update("report", idx);
	}
	
//	CategoryService 클래스에서 호출되는 mapper와 수정할 카테고리 정보가 저장된 객체를 넘겨받고
//	카테고리 1건을 수정하는 category.xml 파일의 update sql 명령을 실행하는 메소드
	public void update(SqlSession mapper, CategoryVO vo) {
		System.out.println("CategoryDAO 클래스의 update() 메소드 실행");
		mapper.update("update", vo);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 삭제할 카테고리 정보가 저장된 객체를 넘겨받고
//	삭제할 카테고리 목록을 얻어오는 category.xml 파일의 select sql 명령을 실행하는 메소드
	public ArrayList<CategoryVO> deleteList(SqlSession mapper, CategoryVO vo) {
		System.out.println("CategoryDAO 클래스의 deleteList() 메소드 실행");
		return (ArrayList<CategoryVO>) mapper.selectList("deleteList", vo);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 seq를 다시 부여할 카테고리 그룹을 넘겨받고,
//	삭제한 카테고리의 카테고리 그룹에 해당되는 카테고리 목록을 얻어오는 category.xml 파일의 select sql
//	명령을 실행하는 메소드
	public ArrayList<CategoryVO> selectGup(SqlSession mapper, int gup) {
		System.out.println("CategoryDAO 클래스의 selectGup() 메소드 실행");
		return (ArrayList<CategoryVO>) mapper.selectList("selectGup", gup);
	}

	
//	CategoryService 클래스에서 호출되는 mapper와 seq를 다시 부여할 카테고리의 일련번호와 수정할 데이터가
//	저장된 HashMap 객체를 넘겨받고 seq를 수정하는 category.xml 파일의 update sql 명령을 실행하는 메소드
	public void reSeq(SqlSession mapper, HashMap<String, Integer> hmap) {
		System.out.println("CategoryDAO 클래스의 reSeq() 메소드 실행");
		mapper.update("reSeq", hmap);
	}


	
	
	
}
