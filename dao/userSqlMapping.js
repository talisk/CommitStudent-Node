/**
 * Created by sunkai on 16/5/24.
 */

var user = {
  insert:'INSERT INTO user(id, stu_id, name, sex) VALUES(0,?,?,?)',
  update:'update user set stu_id=?, name=?, sex=? where id=?',
  delete: 'delete from user where id=?',
  queryById: 'select * from user where id=?',
  queryAll: 'select * from user',
  queryByName: 'select * from user where name=?',
  queryByStuID: 'select * from user where stu_id=?'
};

module.exports = user;