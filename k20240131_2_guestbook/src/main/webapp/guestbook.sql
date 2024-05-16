-- 주석
CREATE TABLE "ADMIN"."GUESTBOOK" (
    "IDX" NUMBER(*,0) NOT NULL ENABLE, 
	"NAME" CHAR(20 BYTE) NOT NULL ENABLE, 
	"PASSWORD" CHAR(20 BYTE) NOT NULL ENABLE, 
	"MEMO" VARCHAR2(3000 BYTE) NOT NULL ENABLE, 
	"WRITEDATE" TIMESTAMP (6) DEFAULT sysdate, 
	"IP" CHAR(20 BYTE), 
	 CONSTRAINT "GUESTBOOK_PK" PRIMARY KEY ("IDX")
    );
  
--  시퀀스 초기화 -> 시퀀스가 다시 1부터 시작하게 한다.
--  모든 데이터를 제거한 후 시퀀스를 삭제하고 다시 만든다.
delete from guestbook;

--  시퀀스 지우기
--  DROP SEQUENCE 시퀀스이름;
DROP SEQUENCE guestbook_idx_seq;

--  자동으로 1씩 증가하는 시퀀스 만들기
--  CREATE SEQUENCE 시퀀스 이름;
CREATE SEQUENCE guestbook_idx_seq;

--  시퀀스이름.nextval : 시퀀스 값을 1증가 시킨다.
--  시퀀스이름.currval : 현재 시퀀스 값을 의미한다.
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '홍길동', '1111', '1등 입니다.', '192.168.0.1');
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '임꺽정', '2222', '2등 입니다.', '192.168.0.1');
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '장길산', '3333', '3등 입니다.', '192.168.0.1');
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '일지매', '4444', '4등 입니다.', '192.168.0.1');
SELECT * FROM guestbook;



SELECT  COUNT(*) FROM guestbook;
SELECT  COUNT(*) FROM guestbook WHERE memo LIKE '%1등%';
SELECT  COUNT(*) FROM guestbook WHERE memo LIKE '%1등%' or name like '%1등%';







