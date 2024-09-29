const RT = db.collection('restaurants');
// Query 1
RT.find({});
//Query 2
RT.project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
//Query 3
RT.project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 });
//Query 4
RT.project({ restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id: 0 });
//Query 5
RT.find({ borough: "Bronx" });
//Query 6
RT.find({ borough: "Bronx" }).limit(5);
//Query 7
RT.find({ borough: "Bronx" }).skip(5).limit(5);
//Query 8
RT.find({ "grades.score": { $gt: 90 } });
//Query 9
RT.find({ grades: { $elemMatch: { score: { $gt: 80, $lt: 100 } } } });
//Query 10
RT.find({ "address.coord.0": { $lt: -95.754168 } });
//Query 11
RT.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } });
//Query 12
RT.find({ cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 } });
//Query 13
RT.find({ cuisine: { $ne: "American" }, "grades.grade": "A", borough: { $ne: "Brooklyn" } }).sort({ cuisine: -1 });
//Query 14
RT.find({ name: { $regex: /^Wil.*/ } }).project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
//Query 15
RT.find({ name: { $regex: /.*ces$/ } }).project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
//Query 16
RT.find({ name: { $regex: "Reg" } }).project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1 });
//Query 17
RT.find({ borough: "Bronx", $or: [{ cuisine: "American" }, { cuisine: "Chinese" }] });