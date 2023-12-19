CREATE SCHEMA react_django_app;

CREATE TABLE user_info( 
    id integer
    , name character varying (10)
    , user_info character varying (500)
    , create_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    , update_at   ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE skill( 
    user_id integer
    , front_type integer
    , front_level integer 
    , back_type integer
    , back_level integer
    , ops_type integer
    , ops_level integer
    , create_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    , update_at   ON UPDATE CURRENT_TIMESTAMP
);


