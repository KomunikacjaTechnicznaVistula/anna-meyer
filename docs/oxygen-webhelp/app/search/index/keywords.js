define(function() {var keywords=[{w:"My",p:["p0","p1","p2"]},{w:"First",p:["p0","p1","p2"]},{w:"Topic",p:["p0","p1"]},{w:"Reference",p:["p1"]},{w:"Task",p:["p2"]},{w:"Context",p:["p3"]},{w:"Sensitive",p:["p3"]},{w:"Help",p:["p3"]}];
var ph={};
ph["p0"]=[0, 1, 2];
ph["p1"]=[0, 1, 3, 2];
ph["p2"]=[0, 1, 4];
ph["p3"]=[5, 6, 7];
     return {
         keywords: keywords,
         ph: ph
     }
});
