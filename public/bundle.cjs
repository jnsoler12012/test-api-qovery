(()=>{"use strict";const e=require("express"),s=require("morgan"),t=require("helmet"),o=require("cors"),n=require("dotenv"),u=(0,e.Router)();u.get("/",((e,s)=>{s.json(["😀","😳","🙄"])}));const r=u,i=(0,e.Router)();i.get("/",((e,s)=>{s.json({message:"API - 👋🌎🌍🌏"})})),i.use("/emojis",r);const a=i,c=e();c.use(s("dev")),c.use(t()),c.use(o()),c.use((0,e.json)()),c.get("/",((e,s)=>{s.json({message:"🦄🌈✨👋🌎🌍🌏✨🌈🦄"})})),c.use("/api/v1",a),c.use((function(e,s,t){s.status(404),t(new Error(`🔍 - Not Found - ${e.originalUrl}`))})),c.use((function(e,s,t,o){const n=200!==t.statusCode?t.statusCode:500;t.status(n),t.json({message:e.message,stack:"🥞"})})),n.config();const g="MISSING_ENV_VAR".PORT||5e3;c.listen(g,(()=>{console.log(`Listening: http://localhost:${g}`)}))})();