# fc_node_mysql_nginx
 
 Instructions to run this app:
 - ```docker-compose up -d --build```
 - access the app on a web browser: http://localhost:8080/

If necessary, here is the sql code to create the people table:
```
create table people (
    id int not null auto_increment, 
    name varchar(255) not null, primary key(id)
);
```
