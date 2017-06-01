var express=require('express');
var app=express();
 
 var olympic_ranking=[
                      {"Ranking":3,"Country":"China"},
                      {"Ranking":4,"Country":"Russia"},
                      {"Ranking":5,"Country":"Germany"},
                      {"Ranking":6,"Country":"Japan"},
                      {"Ranking":7,"Country":"France"}
                     ]
 
 function isEmpty(obj) {
     for(var key in obj) {
         if(obj.hasOwnProperty(key))
             return false;
     }
     return true;
 }
 
 function get_rank(rank){
     var data={};
     for(var i=0,len=olympic_ranking.length;i<len;i++){
       if(olympic_ranking[i]['Ranking'] == rank){
         data=olympic_ranking[i];
         break;
       }
     }
     return data;
 }
 
 app.get('/olympic/2016/ranking/:rank',function(req,res){
      var result=get_rank(req.params.rank);
      if( !isEmpty(result) ){
          res.status(200).send(result);
      }else{
          res.status(404).send('Record does not exist');
      }
 });  
 
 
 var iso_lookup={"Germany":"DE","China":"CN","France":"FR","Japan":"JP","Russia":"RU"};
 
 app.get('/iso/country/:country_name',function(req,res){
       if(iso_lookup.hasOwnProperty(req.params.country_name)){
         res.status(200).send({"iso":iso_lookup[req.params.country_name]});
       }else{
         res.status(404).send('Record does not exist');
       }
 });
 
 var medal_tally={"CN":70,"RU":56,"FR":42,"JP":41,"DE":42};
 
 app.get('/olympic/2016/medal/:country_iso',function(req,res){
       if(medal_tally.hasOwnProperty(req.params.country_iso)){
         res.status(200).send({"medal":medal_tally[req.params.country_iso]});
       }else{
         res.status(404).send('Record does not exist'); 
       }
 });
 
 
 var port = process.env.PORT || 3000;
 
 var server=app.listen(port,function(req,res){
     console.log("Catch the action at http://localhost:"+port);
 }); 