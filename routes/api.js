
/*
 * GET users listing.
 */

var venues = [
  { name : 'The Tote', loc : "Fitzroy"},
  { name : 'The Old Bar', loc : "Fitzroy"},
  { name : 'Cherry Bar', loc : "Melbourne"},
  { name : 'Evelyn Hotel', loc : "Fitzroy"}
];

exports.venueList = function(req, res){
  res.json(venues);
};