 CREATE TABLE "AJAXBOARD" (
    "IDX" NUMBER(*,0) NOT NULL, 
	"NAME" VARCHAR2(20 BYTE) NOT NULL, 
	"AGE" NUMBER(*,0) NOT NULL, 
	"GENDER" CHAR(6 BYTE) NOT NULL, 
	"EMAIL" VARCHAR2(100 BYTE) NOT NULL, 
	CONSTRAINT "AJAXBOARD_PK" PRIMARY KEY ("IDX")
);

DELETE FROM ajaxboard;
DROP SEQUENCE ajaxboard_idx_seq;
CREATE SEQUENCE ajaxboard_idx_seq;

INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '홍길동', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '임꺽정', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '장길산', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '일지매', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '손오공', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '저팔계', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '사오정', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '브루마', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '베지터', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '트랭크스', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '무천도사', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '마인부우', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '손오반', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '크리닝', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '오룡', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '야무치', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '사탄', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '우마왕', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '계왕신', 20, '남자', 'a@a.com');
INSERT INTO ajaxboard (idx, name, age, gender, email) VALUES (ajaxboard_idx_seq.nextval, '프리저', 20, '남자', 'a@a.com');
commit;

SELECT * FROM ajaxboard order by idx desc;