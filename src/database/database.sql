CREATE TABLE "users" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	"token" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"question" TEXT NOT NULL,
	"student" varchar(255) NOT NULL,
	"class" varchar(255) NOT NULL,
	"submit_at" DATE NOT NULL,
	"answered" BOOLEAN NOT NULL,
	"answered_at" DATE,
	"answered_by" varchar(255),
	"answer" TEXT,
	"tags" varchar(255) NOT NULL,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);






