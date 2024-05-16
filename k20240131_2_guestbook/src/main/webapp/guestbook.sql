-- �ּ�
CREATE TABLE "ADMIN"."GUESTBOOK" (
    "IDX" NUMBER(*,0) NOT NULL ENABLE, 
	"NAME" CHAR(20 BYTE) NOT NULL ENABLE, 
	"PASSWORD" CHAR(20 BYTE) NOT NULL ENABLE, 
	"MEMO" VARCHAR2(3000 BYTE) NOT NULL ENABLE, 
	"WRITEDATE" TIMESTAMP (6) DEFAULT sysdate, 
	"IP" CHAR(20 BYTE), 
	 CONSTRAINT "GUESTBOOK_PK" PRIMARY KEY ("IDX")
    );
  
--  ������ �ʱ�ȭ -> �������� �ٽ� 1���� �����ϰ� �Ѵ�.
--  ��� �����͸� ������ �� �������� �����ϰ� �ٽ� �����.
delete from guestbook;

--  ������ �����
--  DROP SEQUENCE �������̸�;
DROP SEQUENCE guestbook_idx_seq;

--  �ڵ����� 1�� �����ϴ� ������ �����
--  CREATE SEQUENCE ������ �̸�;
CREATE SEQUENCE guestbook_idx_seq;

--  �������̸�.nextval : ������ ���� 1���� ��Ų��.
--  �������̸�.currval : ���� ������ ���� �ǹ��Ѵ�.
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, 'ȫ�浿', '1111', '1�� �Դϴ�.', '192.168.0.1');
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '�Ӳ���', '2222', '2�� �Դϴ�.', '192.168.0.1');
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '����', '3333', '3�� �Դϴ�.', '192.168.0.1');
INSERT INTO guestbook(idx, name, password, memo, ip) VALUES (guestbook_idx_seq.nextval, '������', '4444', '4�� �Դϴ�.', '192.168.0.1');
SELECT * FROM guestbook;



SELECT  COUNT(*) FROM guestbook;
SELECT  COUNT(*) FROM guestbook WHERE memo LIKE '%1��%';
SELECT  COUNT(*) FROM guestbook WHERE memo LIKE '%1��%' or name like '%1��%';







