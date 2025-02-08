-- public.user_log definition

-- Drop table

-- DROP TABLE public.user_log;

CREATE TABLE public.user_log (
	username varchar NOT NULL,
	useraccount varchar NULL,
	groupname varchar NULL,
	last_login timestamp NULL
);