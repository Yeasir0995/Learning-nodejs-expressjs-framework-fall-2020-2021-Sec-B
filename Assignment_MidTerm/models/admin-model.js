var db = require('./db');

module.exports = {

	validate: function (user, callback) {
		var sql = "SELECT * FROM admin where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function (results) {
			if (results.length > 0) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	getByUname: function (username, callback) {
		var sql = "select * from admin where username=?";
		db.getResults(sql, [username], function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	updateProfile: function (user, callback) {
		var sql = "update admin set name=?, username=?, password=?, email=?,phone=? where username=?";
		db.execute(sql, [user.name, user.username, user.password, user.email, user.phone, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	assignDoctor: function (user, callback) {
		var sql = "update doctorinfo set post=?, dept=? where username=?";
		db.execute(sql, [user.post, user.dept, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	insert: function (user, callback) {
		console.log();
		var sql = "insert into booklist values(?,?,?,?,?,?,?,?,?,?,?)";
		db.execute(sql, [user.id,user.fname, user.lname, user.username,user.password,user.email, user.phone, user.bloodgroup,user.dept,user.post,'unblock'], function (status) {
			if (status) {
				console.log(user);
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	getAllBook: function (callback) {
		var sql = "select * from booklist where id=?";
		db.getResults(sql, [], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	
	getAllMember: function (callback) {
		var sql = "select * from member";
		db.getResults(sql, [], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},

	getAllBook: function (username, callback) {
		var sql = "select * from booklist where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	getMemberProfile: function (username, callback) {
		var sql = "select * from member where username=?";
		db.getResults(sql, username, function (results) {
			if (results.length > 0) {
				callback(results[0]);
			} else {
				callback(null);
			}
		});
	},
	
	getAllPendingPatient: function (callback) {
		var sql = "select * from member where type=?";
		db.getResults(sql, ['pending'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	
	
	getAllAvailableMember: function (callback) {
		var sql = "select * from member where type=?";
		db.getResults(sql, ['available'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	/*
	getAllAvailableSlot: function (callback) {
		var sql = "select * from slotinfo where status=?";
		db.getResults(sql, ['available'], function (results) {
			console.log("caught");
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	getAllBookedSlot: function (callback) {
		var sql = "select * from slotinfo where status=?";
		db.getResults(sql, ['rented'], function (results) {
			if (results.length > 0) {
				callback(results);
			} else {
				callback([]);
			}
		});
	},
	*/
	addNotice:function(user,callback){
		console.log();
		var sql="insert into notice value(?,?,?)";
		db.execute(sql, [user.id,user.date,user.statement], function (status) {
			if (status) {
				console.log(user);
				callback(true);
			//	return callback;
			} else {
				callback(false);
			}
		});
	},
	/*deleteSlot: function (id, callback) {
		var sql = "delete from slotinfo where Slotid=?";
		db.execute(sql, [id], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	*/
	
	MemberStatus: function (user, callback) {
		var sql = "update member set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	},
	updateBookList: function (user, callback) {
		var sql = "update booklist set status=? where username=?";
		db.execute(sql, [user.status, user.username], function (status) {
			if (status) {
				callback(true);
			} else {
				callback(false);
			}
		});
	
	},
	delete: function(id, callback) {
		var sql = "delete from booklist where id = '" + id + "'";
        console.log(sql);

        db.execute(sql, function(status) {
            callback(status);
        });
    },

}