"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2645,9549],{51310:function(e,l,t){var n=t(88506);l.Z=()=>{var e;return JSON.parse(null!==(e=localStorage.getItem(n.C9))&&void 0!==e?e:"")}},61977:function(e,l,t){var n=t(96469),a=t(27250),r=t(23852),i=t.n(r),s=t(38497);l.Z=(0,s.memo)(e=>{let{width:l,height:t,model:r}=e,o=(0,s.useMemo)(()=>{let e=null==r?void 0:r.replaceAll("-","_").split("_")[0],l=Object.keys(a.Me);for(let t=0;t<l.length;t++){let n=l[t];if(null==e?void 0:e.includes(n))return a.Me[n]}return"/models/huggingface.svg"},[r]);return r?(0,n.jsx)(i(),{className:"rounded-full border border-gray-200 object-contain bg-white inline-block",width:l||24,height:t||24,src:o,alt:"llm",priority:!0}):null})},26953:function(e,l,t){var n=t(96469),a=t(67901),r=t(42834),i=t(38497);l.Z=e=>{let{width:l,height:t,scene:s}=e,o=(0,i.useCallback)(()=>{switch(s){case"chat_knowledge":return a.je;case"chat_with_db_execute":return a.zM;case"chat_excel":return a.DL;case"chat_with_db_qa":case"chat_dba":return a.RD;case"chat_dashboard":return a.In;case"chat_agent":return a.si;case"chat_normal":return a.O7;default:return}},[s]);return(0,n.jsx)(r.Z,{className:"w-".concat(l||7," h-").concat(t||7),component:o()})}},58526:function(e,l,t){var n=t(96890);let a=(0,n.Z)({scriptUrl:"//at.alicdn.com/t/a/font_4440880_ljyggdw605.js"});l.Z=a},46837:function(e,l,t){t.r(l);var n=t(96469),a=t(26657),r=t(27623),i=t(6873),s=t(16602),o=t(39069),u=t(79839),d=t(55360),c=t(26869),m=t.n(c),v=t(38497),p=t(89776),x=t(68403),f=t(56841);let h=e=>{let{value:l,onChange:t,promptList:r}=e,[s,d]=(0,v.useState)(!1),[c,m]=(0,v.useState)(),{t:p}=(0,f.$G)();return(0,v.useEffect)(()=>{if(l){let e=null==r?void 0:r.filter(e=>e.prompt_code===l)[0];m(e)}},[r,l]),(0,n.jsxs)("div",{className:"w-2/5 flex items-center gap-2",children:[(0,n.jsx)(o.default,{className:"w-1/2",placeholder:p("please_select_prompt"),options:r,fieldNames:{label:"prompt_name",value:"prompt_code"},onChange:e=>{let l=null==r?void 0:r.filter(l=>l.prompt_code===e)[0];m(l),null==t||t(e)},value:l,allowClear:!0,showSearch:!0}),c&&(0,n.jsxs)("span",{className:"text-sm text-blue-500 cursor-pointer",onClick:()=>d(!0),children:[(0,n.jsx)(i.Z,{className:"mr-1"}),p("View_details")]}),(0,n.jsx)(u.default,{title:"Prompt ".concat(p("details")),open:s,footer:!1,width:"60%",onCancel:()=>d(!1),children:(0,n.jsx)(a.default,{children:null==c?void 0:c.content})})]})};l.default=e=>{var l,t;let{name:a,initValue:i,modelStrategyOptions:u,resourceTypeOptions:c,updateData:g,classNames:j,promptList:_}=e,{t:b}=(0,f.$G)(),[y]=d.default.useForm(),w=d.default.useWatch("prompt_template",y),N=d.default.useWatch("llm_strategy",y),k=d.default.useWatch("llm_strategy_value",y),[Z,C]=(0,v.useState)(),[S,E]=(0,v.useState)(!1),R=(0,v.useMemo)(()=>(null==i?void 0:i.find(e=>e.agent_name===a))||[],[i,a]),M=(0,v.useRef)([]),{run:I,loading:V,data:O}=(0,s.Z)(async()=>{var e;let[,l]=await (0,r.Vx)((0,r.m9)("priority"));return null!==(e=null==l?void 0:l.map(e=>({label:e,value:e})))&&void 0!==e?e:[]},{manual:!0});return(0,v.useEffect)(()=>{"priority"===N&&I()},[I,N]),(0,v.useEffect)(()=>{var e;let l=y.getFieldsValue();g({agent_name:a,...l,llm_strategy_value:null==l?void 0:null===(e=l.llm_strategy_value)||void 0===e?void 0:e.join(","),resources:M.current})},[y,V,a,w,N,k,g]),(0,n.jsx)("div",{className:m()(j),children:(0,n.jsxs)(d.default,{style:{width:"100%"},labelCol:{span:4},form:y,initialValues:{llm_strategy:"default",...R,llm_strategy_value:null==R?void 0:null===(l=R.llm_strategy_value)||void 0===l?void 0:l.split(",")},children:[(0,n.jsx)(d.default.Item,{label:b("Prompt"),name:"prompt_template",children:(0,n.jsx)(h,{promptList:_})}),(0,n.jsx)(d.default.Item,{label:b("LLM_strategy"),required:!0,name:"llm_strategy",children:(0,n.jsx)(o.default,{className:"w-1/5",placeholder:b("please_select_LLM_strategy"),options:u,allowClear:!0})}),"priority"===N&&(0,n.jsx)(d.default.Item,{label:b("LLM_strategy_value"),required:!0,name:"llm_strategy_value",children:(0,n.jsx)(o.default,{mode:"multiple",className:"w-2/5",placeholder:b("please_select_LLM_strategy_value"),options:O,allowClear:!0})}),(0,n.jsx)(d.default.Item,{label:b("available_resources"),name:"resources",children:(0,n.jsx)(x.default,{resourceTypeOptions:c,initValue:null==R?void 0:null===(t=R.resources)||void 0===t?void 0:t.map(e=>({...e,uid:(0,p.Z)()})),updateData:e=>{M.current=null==e?void 0:e[1],g({agent_name:a,resources:M.current})},name:a})})]})})}},23464:function(e,l,t){t.r(l);var n=t(96469),a=t(27623),r=t(16602),i=t(55360),s=t(39069),o=t(73837),u=t(26869),d=t.n(u),c=t(38497),m=t(56841);l.default=e=>{let{uid:l,initValue:t,updateData:u,classNames:v,resourceTypeOptions:p,setCurIcon:x}=e,[f]=i.default.useForm(),h=i.default.useWatch("type",f),g=i.default.useWatch("is_dynamic",f),j=i.default.useWatch("value",f),{t:_}=(0,m.$G)(),b=(0,c.useMemo)(()=>(null==p?void 0:p.filter(e=>"all"!==e.value))||[],[p]),{run:y,data:w,loading:N}=(0,r.Z)(async e=>{var l;let[,n]=await (0,a.Vx)((0,a.RX)({type:e}));return f.setFieldsValue({value:(null==t?void 0:t.value)||(null==n?void 0:null===(l=n[0])||void 0===l?void 0:l.key)}),n||[]},{manual:!0});(0,c.useEffect)(()=>{h&&y(h)},[y,h]);let k=(0,c.useMemo)(()=>(null==w?void 0:w.map(e=>({...e,label:e.label,value:e.key+""})))||[],[w]);return(0,c.useEffect)(()=>{let e=f.getFieldsValue(),t=(null==e?void 0:e.is_dynamic)?"":null==e?void 0:e.value;u({uid:l,...e,value:t})},[l,g,f,u,j,h]),(0,n.jsx)("div",{className:d()("flex flex-1",v),children:(0,n.jsxs)(i.default,{style:{width:"100%"},form:f,labelCol:{span:4},initialValues:{...t},children:[(0,n.jsx)(i.default.Item,{label:_("resource_type"),name:"type",children:(0,n.jsx)(s.default,{className:"w-2/5",options:b,onChange:e=>{x({uid:l,icon:e})}})}),(0,n.jsx)(i.default.Item,{label:_("resource_dynamic"),name:"is_dynamic",children:(0,n.jsx)(o.Z,{style:{background:g?"#1677ff":"#ccc"}})}),!g&&(0,n.jsxs)(n.Fragment,{children:[" ","image_file"===h||"internet"===h||["text_file","excel_file"].includes(h)?null:(0,n.jsx)(i.default.Item,{label:_("resource_value"),name:"value",required:!0,children:(0,n.jsx)(s.default,{placeholder:_("please_select_param"),options:k,loading:N,className:"w-3/5",allowClear:!0})})]})]})})}},68403:function(e,l,t){t.r(l),t.d(l,{default:function(){return _}});var n=t(96469),a=t(97818),r=t(26869),i=t.n(r),s=e=>{let{className:l,imgUrl:t="/pictures/empty.png"}=e;return(0,n.jsx)("div",{className:i()("m-auto",{className:l}),children:(0,n.jsx)(a.Z,{image:t,imageStyle:{margin:"0 auto",width:"100%",height:"100%"}})})},o=t(2537),u=t(97511),d=t(39069),c=t(85851),m=t(13419),v=t(27691),p=t(44766),x=t(38497),f=t(89776),h=t(48044),g=t(23464),j=t(56841),_=e=>{var l;let{name:t,updateData:a,resourceTypeOptions:r,initValue:_}=e,{t:b}=(0,j.$G)(),y=(0,x.useRef)(_||[]),[w,N]=(0,x.useState)({uid:"",icon:""}),[k,Z]=(0,x.useState)((null==_?void 0:_.map((e,l)=>({...e,icon:e.type,initVal:e})))||[]),[C,S]=(0,x.useState)([...k]),[E,R]=(0,x.useState)((null==k?void 0:null===(l=k[0])||void 0===l?void 0:l.uid)||""),[M,I]=(0,x.useState)(""),V=(e,l)=>{var n,r;null==e||e.stopPropagation();let i=null===(n=y.current)||void 0===n?void 0:n.findIndex(e=>e.uid===E),s=null==k?void 0:k.filter(e=>e.uid!==l.uid);y.current=y.current.filter(e=>e.uid!==l.uid)||[],a([t,y.current]),Z(s),i===(null==k?void 0:k.length)-1&&0!==i&&setTimeout(()=>{var e;R((null==s?void 0:null===(e=s[s.length-1])||void 0===e?void 0:e.uid)||"")},0),R((null==s?void 0:null===(r=s[i])||void 0===r?void 0:r.uid)||"")};return(0,x.useEffect)(()=>{S([...k])},[k]),(0,x.useEffect)(()=>{Z(k.map(e=>(null==w?void 0:w.uid)===e.uid?{...e,icon:w.icon}:e))},[w]),(0,n.jsxs)("div",{className:"flex flex-1  h-64 px-3 py-4 border border-[#d6d8da] rounded-md",children:[(0,n.jsxs)("div",{className:"flex flex-col w-40 h-full",children:[(0,n.jsx)(d.default,{options:r,className:"w-full h-8",variant:"borderless",defaultValue:"all",onChange:e=>{var l,t;if("all"===e)S(k),R((null==k?void 0:null===(l=k[0])||void 0===l?void 0:l.uid)||"");else{let l=null==k?void 0:k.filter(l=>(null==l?void 0:l.icon)===e);R((null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.uid)||""),S(l)}}}),(0,n.jsx)("div",{className:"flex flex-1 flex-col gap-1 overflow-y-auto",children:null==C?void 0:C.map(e=>(0,n.jsxs)("div",{className:i()("flex h-8 items-center px-3 pl-[0.6rem] rounded-md hover:bg-[#f5faff] hover:dark:bg-[#606264] cursor-pointer relative",{"bg-[#f5faff] dark:bg-[#606264]":e.uid===E}),onClick:()=>{R(e.uid||"")},onMouseEnter:()=>{I(e.uid||"")},onMouseLeave:()=>{I("")},children:[h.resourceTypeIcon[e.icon||""],(0,n.jsx)(c.Z.Text,{className:i()("flex flex-1 items-center text-sm p-0 m-0 mx-2 line-clamp-1",{"text-[#0c75fc]":e.uid===E}),editable:{autoSize:{maxRows:1},onChange:l=>{Z(k.map(t=>t.uid===e.uid?{...t,name:l}:t)),y.current=y.current.map(t=>t.uid===e.uid?{...t,name:l}:t),a([t,y.current])}},ellipsis:{tooltip:!0},children:e.name}),(0,n.jsx)(m.Z,{title:b("want_delete"),onConfirm:l=>{V(l,e)},onCancel:e=>null==e?void 0:e.stopPropagation(),children:(0,n.jsx)(o.Z,{className:"text-sm cursor-pointer  absolute right-2 ".concat(M===e.uid?"opacity-100":"opacity-0"),style:{top:"50%",transform:"translateY(-50%)"},onClick:e=>e.stopPropagation()})})]},e.uid))}),(0,n.jsx)(v.ZP,{className:"w-full h-8",type:"dashed",block:!0,icon:(0,n.jsx)(u.Z,{}),onClick:()=>{var e,l;let n=(0,f.Z)();y.current=(0,p.concat)(y.current,[{is_dynamic:!1,type:null===(e=null==r?void 0:r.filter(e=>"all"!==e.value))||void 0===e?void 0:e[0].value,value:"",uid:n,name:b("resource")+" ".concat(y.current.length+1)}].filter(Boolean)),a([t,y.current]),Z(e=>{var l,t,a;return[...e,{icon:(null===(l=null==r?void 0:r.filter(e=>"all"!==e.value))||void 0===l?void 0:null===(t=l[0])||void 0===t?void 0:t.value)||"",uid:n,initVal:{is_dynamic:!1,type:null===(a=null==r?void 0:r.filter(e=>"all"!==e.value))||void 0===a?void 0:a[0].value,value:"",uid:n,name:b("resource")+" ".concat(e.length+1)},name:b("resource")+" ".concat(e.length+1)}]}),R(n),N({uid:n,icon:null===(l=null==r?void 0:r.filter(e=>"all"!==e.value))||void 0===l?void 0:l[0].value})},children:b("add_resource")})]}),(0,n.jsx)("div",{className:"flex flex-1 ml-6 ",children:C&&(null==C?void 0:C.length)>0?(0,n.jsx)("div",{className:"flex flex-1",children:null==C?void 0:C.map(e=>(0,n.jsx)(g.default,{classNames:e.uid===E?"block":"hidden",resourceTypeOptions:r,initValue:e.initVal,setCurIcon:N,updateData:e=>{var l;y.current=null===(l=y.current)||void 0===l?void 0:l.map(l=>(null==l?void 0:l.uid)===(null==e?void 0:e.uid)?{...l,...e}:l),a([t,y.current])},uid:e.uid||""},e.uid))}):(0,n.jsx)(s,{className:"w-40 h-40"})})]})}},48044:function(e,l,t){t.r(l),t.d(l,{agentIcon:function(){return _},resourceTypeIcon:function(){return b}});var n=t(96469),a=t(58526),r=t(15484),i=t(1136),s=t(80680),o=t(67576),u=t(43748),d=t(58964),c=t(47520),m=t(44808),v=t(50374),p=t(10173),x=t(72533),f=t(62246),h=t(84542),g=t(41446),j=t(28062);t(38497);let _={CodeEngineer:(0,n.jsx)(r.Z,{}),Reporter:(0,n.jsx)(i.Z,{}),DataScientist:(0,n.jsx)(s.Z,{}),Summarizer:(0,n.jsx)(o.Z,{}),ToolExpert:(0,n.jsx)(a.Z,{type:"icon-plugin",style:{fontSize:17.25,marginTop:2}}),Indicator:(0,n.jsx)(u.Z,{}),Dbass:(0,n.jsx)(d.Z,{})},b={all:(0,n.jsx)(c.Z,{}),database:(0,n.jsx)(m.Z,{}),knowledge:(0,n.jsx)(v.Z,{}),internet:(0,n.jsx)(p.Z,{}),plugin:(0,n.jsx)(x.Z,{}),text_file:(0,n.jsx)(f.Z,{}),excel_file:(0,n.jsx)(h.Z,{}),image_file:(0,n.jsx)(g.Z,{}),awel_flow:(0,n.jsx)(j.Z,{})};l.default=()=>(0,n.jsx)(n.Fragment,{})},5157:function(e,l,t){t.r(l);var n=t(96469),a=t(26953),r=t(98028),i=t(95891),s=t(85851),o=t(93486),u=t.n(o),d=t(38497),c=t(29549);l.default=(0,d.memo)(()=>{var e;let{appInfo:l}=(0,d.useContext)(c.MobileChatContext),{message:t}=i.Z.useApp(),[o,m]=(0,d.useState)(0);if(!(null==l?void 0:l.app_code))return null;let v=async()=>{let e=u()("dingtalk://dingtalkclient/page/link?url=".concat(encodeURIComponent(location.href),"&pc_slide=true"));t[e?"success":"error"](e?"复制成功":"复制失败")};return o>6&&t.info(JSON.stringify(window.navigator.userAgent),2,()=>{m(0)}),(0,n.jsxs)("header",{className:"flex w-full items-center justify-between bg-[rgba(255,255,255,0.9)] border dark:bg-black dark:border-[rgba(255,255,255,0.6)] rounded-xl mx-auto px-4 py-2 mb-4 sticky top-4 z-50 mt-4 shadow-md",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",onClick:()=>m(o+1),children:[(0,n.jsx)(a.Z,{scene:(null==l?void 0:null===(e=l.team_context)||void 0===e?void 0:e.chat_scene)||"chat_agent",width:8,height:8}),(0,n.jsxs)("div",{className:"flex flex-col ml-2",children:[(0,n.jsx)(s.Z.Text,{className:"text-md font-bold line-clamp-2",children:null==l?void 0:l.app_name}),(0,n.jsx)(s.Z.Text,{className:"text-sm line-clamp-2",children:null==l?void 0:l.app_describe})]})]}),(0,n.jsx)("div",{onClick:v,className:"flex items-center justify-center w-10 h-10 bg-[#ffffff99] dark:bg-[rgba(255,255,255,0.2)] border border-white dark:border-[rgba(255,255,255,0.2)] rounded-[50%] cursor-pointer",children:(0,n.jsx)(r.Z,{className:"text-lg"})})]})})},86364:function(e,l,t){t.r(l);var n=t(96469),a=t(27623),r=t(7289),i=t(88506),s=t(1858),o=t(72828),u=t(37022),d=t(67620),c=t(31676),m=t(44875),v=t(16602),p=t(49030),x=t(62971),f=t(42786),h=t(71841),g=t(27691),j=t(26869),_=t.n(j),b=t(45875),y=t(38497),w=t(29549),N=t(95433),k=t(14035),Z=t(55238),C=t(75299);let S=["magenta","orange","geekblue","purple","cyan","green"];l.default=()=>{var e,l;let t=(0,b.useSearchParams)(),j=null!==(l=null==t?void 0:t.get("ques"))&&void 0!==l?l:"",{history:E,model:R,scene:M,temperature:I,resource:V,conv_uid:O,appInfo:T,scrollViewRef:L,order:P,userInput:A,ctrl:D,canAbort:z,canNewChat:W,setHistory:q,setCanNewChat:F,setCarAbort:$,setUserInput:J}=(0,y.useContext)(w.MobileChatContext),[U,B]=(0,y.useState)(!1),[G,H]=(0,y.useState)(!1),K=async e=>{var l,t,n;J(""),D.current=new AbortController;let a={chat_mode:M,model_name:R,user_input:e||A,conv_uid:O,temperature:I,app_code:null==T?void 0:T.app_code,...V&&{select_param:JSON.stringify(V)}};if(E&&E.length>0){let e=null==E?void 0:E.filter(e=>"view"===e.role);P.current=e[e.length-1].order+1}let s=[{role:"human",context:e||A,model_name:R,order:P.current,time_stamp:0},{role:"view",context:"",model_name:R,order:P.current,time_stamp:0,thinking:!0}],o=s.length-1;q([...E,...s]),F(!1);try{await (0,m.L)("".concat(null!==(l=C.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[i.gp]:null!==(t=(0,r.n5)())&&void 0!==t?t:""},signal:D.current.signal,body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===m.a)return},onclose(){var e;null===(e=D.current)||void 0===e||e.abort(),F(!0),$(!1)},onerror(e){throw Error(e)},onmessage:e=>{let l=e.data;try{l=JSON.parse(l).vis}catch(e){l.replaceAll("\\n","\n")}"[DONE]"===l?(F(!0),$(!1)):(null==l?void 0:l.startsWith("[ERROR]"))?(s[o].context=null==l?void 0:l.replace("[ERROR]",""),s[o].thinking=!1,q([...E,...s]),F(!0),$(!1)):($(!0),s[o].context=l,s[o].thinking=!1,q([...E,...s]))}})}catch(e){null===(n=D.current)||void 0===n||n.abort(),s[o].context="Sorry, we meet some error, please try again later.",s[o].thinking=!1,q([...s]),F(!0),$(!1)}},X=async()=>{A.trim()&&W&&await K()};(0,y.useEffect)(()=>{var e,l;null===(e=L.current)||void 0===e||e.scrollTo({top:null===(l=L.current)||void 0===l?void 0:l.scrollHeight,behavior:"auto"})},[E,L]);let Y=(0,y.useMemo)(()=>{if(!T)return[];let{param_need:e=[]}=T;return null==e?void 0:e.map(e=>e.type)},[T]),Q=(0,y.useMemo)(()=>{var e;return 0===E.length&&T&&!!(null==T?void 0:null===(e=T.recommend_questions)||void 0===e?void 0:e.length)},[E,T]),{run:ee,loading:el}=(0,v.Z)(async()=>await (0,a.Vx)((0,a.zR)(O)),{manual:!0,onSuccess:()=>{q([])}});return(0,y.useEffect)(()=>{j&&R&&O&&T&&K(j)},[T,O,R,j]),(0,n.jsxs)("div",{className:"flex flex-col",children:[Q&&(0,n.jsx)("ul",{children:null==T?void 0:null===(e=T.recommend_questions)||void 0===e?void 0:e.map((e,l)=>(0,n.jsx)("li",{className:"mb-3",children:(0,n.jsx)(p.Z,{color:S[l],className:"p-2 rounded-xl",onClick:async()=>{K(e.question)},children:e.question})},e.id))}),(0,n.jsxs)("div",{className:"flex items-center justify-between gap-1",children:[(0,n.jsxs)("div",{className:"flex gap-2 mb-1 w-full overflow-x-auto",children:[(null==Y?void 0:Y.includes("model"))&&(0,n.jsx)(N.default,{}),(null==Y?void 0:Y.includes("resource"))&&(0,n.jsx)(k.default,{}),(null==Y?void 0:Y.includes("temperature"))&&(0,n.jsx)(Z.default,{})]}),(0,n.jsxs)("div",{className:"flex items-center justify-between text-lg font-bold",children:[(0,n.jsx)(x.Z,{content:"暂停回复",trigger:["hover"],children:(0,n.jsx)(s.Z,{className:_()("p-2 cursor-pointer",{"text-[#0c75fc]":z,"text-gray-400":!z}),onClick:()=>{var e;z&&(null===(e=D.current)||void 0===e||e.abort(),setTimeout(()=>{$(!1),F(!0)},100))}})}),(0,n.jsx)(x.Z,{content:"再来一次",trigger:["hover"],children:(0,n.jsx)(o.Z,{className:_()("p-2 cursor-pointer",{"text-gray-400":!E.length||!W}),onClick:()=>{var e,l;if(!W||0===E.length)return;let t=null===(e=null===(l=E.filter(e=>"human"===e.role))||void 0===l?void 0:l.slice(-1))||void 0===e?void 0:e[0];K((null==t?void 0:t.context)||"")}})}),el?(0,n.jsx)(f.Z,{spinning:el,indicator:(0,n.jsx)(u.Z,{style:{fontSize:18},spin:!0}),className:"p-2"}):(0,n.jsx)(x.Z,{content:"清除历史",trigger:["hover"],children:(0,n.jsx)(d.Z,{className:_()("p-2 cursor-pointer",{"text-gray-400":!E.length||!W}),onClick:()=>{W&&ee()}})})]})]}),(0,n.jsxs)("div",{className:_()("flex py-2 px-3 items-center justify-between bg-white dark:bg-[#242733] dark:border-[#6f7f95] rounded-xl border",{"border-[#0c75fc] dark:border-[rgba(12,117,252,0.8)]":U}),children:[(0,n.jsx)(h.default.TextArea,{placeholder:"可以问我任何问题",className:"w-full resize-none border-0 p-0 focus:shadow-none",value:A,autoSize:{minRows:1},onKeyDown:e=>{if("Enter"===e.key&&!e.shiftKey){if(G){e.preventDefault();return}A.trim()&&(e.preventDefault(),X())}},onChange:e=>{J(e.target.value)},onFocus:()=>{B(!0)},onBlur:()=>B(!1),onCompositionStartCapture:()=>{H(!0)},onCompositionEndCapture:()=>{setTimeout(()=>{H(!1)},0)}}),(0,n.jsx)(g.ZP,{type:"primary",className:_()("flex items-center justify-center rounded-lg bg-button-gradient border-0 ml-2",{"opacity-40 cursor-not-allowed":!A.trim()||!W}),onClick:X,children:W?(0,n.jsx)(c.Z,{}):(0,n.jsx)(f.Z,{indicator:(0,n.jsx)(u.Z,{className:"text-white"})})})]})]})}},95433:function(e,l,t){t.r(l);var n=t(96469),a=t(61977),r=t(45277),i=t(32857),s=t(80335),o=t(62971),u=t(38497),d=t(29549);l.default=()=>{let{modelList:e}=(0,u.useContext)(r.p),{model:l,setModel:t}=(0,u.useContext)(d.MobileChatContext),c=(0,u.useMemo)(()=>e.length>0?e.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{t(e)},children:[(0,n.jsx)(a.Z,{width:14,height:14,model:e}),(0,n.jsx)("span",{className:"text-xs",children:e})]}),key:e})):[],[e,t]);return(0,n.jsx)(s.Z,{menu:{items:c},placement:"top",trigger:["click"],children:(0,n.jsx)(o.Z,{content:l,children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(a.Z,{width:16,height:16,model:l}),(0,n.jsx)("span",{className:"text-xs font-medium line-clamp-1",style:{maxWidth:96},children:l}),(0,n.jsx)(i.Z,{rotate:90})]})})})}},33389:function(e,l,t){t.r(l);var n=t(96469),a=t(23852),r=t.n(a),i=t(38497);l.default=(0,i.memo)(e=>{let{width:l,height:t,src:a,label:i}=e;return(0,n.jsx)(r(),{width:l||14,height:t||14,src:a,alt:i||"db-icon",priority:!0})})},14035:function(e,l,t){t.r(l);var n=t(96469),a=t(27623),r=t(7289),i=t(37022),s=t(32857),o=t(71534),u=t(16602),d=t(42786),c=t(32818),m=t(80335),v=t(38497),p=t(29549),x=t(33389);l.default=()=>{let{appInfo:e,resourceList:l,scene:t,model:f,conv_uid:h,getChatHistoryRun:g,setResource:j,resource:_}=(0,v.useContext)(p.MobileChatContext),[b,y]=(0,v.useState)(null),w=(0,v.useMemo)(()=>{var l,t,n;return null===(l=null==e?void 0:null===(t=e.param_need)||void 0===t?void 0:t.filter(e=>"resource"===e.type))||void 0===l?void 0:null===(n=l[0])||void 0===n?void 0:n.value},[e]),N=(0,v.useMemo)(()=>l&&l.length>0?l.map(e=>({label:(0,n.jsxs)("div",{className:"flex items-center gap-2",onClick:()=>{y(e),j(e.space_id||e.param)},children:[(0,n.jsx)(x.default,{width:14,height:14,src:r.S$[e.type].icon,label:r.S$[e.type].label}),(0,n.jsx)("span",{className:"text-xs",children:e.param})]}),key:e.space_id||e.param})):[],[l,j]),{run:k,loading:Z}=(0,u.Z)(async e=>{let[,l]=await (0,a.Vx)((0,a.qn)({convUid:h,chatMode:t,data:e,model:f,config:{timeout:36e5}}));return j(l),l},{manual:!0,onSuccess:async()=>{await g()}}),C=async e=>{let l=new FormData;l.append("doc_file",null==e?void 0:e.file),await k(l)},S=(0,v.useMemo)(()=>Z?(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(d.Z,{size:"small",indicator:(0,n.jsx)(i.Z,{spin:!0})}),(0,n.jsx)("span",{className:"text-xs",children:"上传中"})]}):_?(0,n.jsxs)("div",{className:"flex gap-1",children:[(0,n.jsx)("span",{className:"text-xs",children:_.file_name}),(0,n.jsx)(s.Z,{rotate:90})]}):(0,n.jsxs)("div",{className:"flex items-center gap-1",children:[(0,n.jsx)(o.Z,{className:"text-base"}),(0,n.jsx)("span",{className:"text-xs",children:"上传文件"})]}),[Z,_]);return(0,n.jsx)(n.Fragment,{children:(()=>{switch(w){case"excel_file":case"text_file":case"image_file":return(0,n.jsx)("div",{className:"flex items-center justify-center gap-1 border rounded-xl bg-white dark:bg-black px-2 flex-shrink-0",children:(0,n.jsx)(c.default,{name:"file",accept:".xlsx,.xls",maxCount:1,showUploadList:!1,beforeUpload:()=>!1,onChange:C,className:"flex h-full w-full items-center justify-center",children:S})});case"database":case"knowledge":case"plugin":case"awel_flow":var e,t,a,i,o;if(!(null==l?void 0:l.length))return null;return(0,n.jsx)(m.Z,{menu:{items:N},placement:"top",trigger:["click"],children:(0,n.jsxs)("div",{className:"flex items-center gap-1 border rounded-xl bg-white dark:bg-black p-2 flex-shrink-0",children:[(0,n.jsx)(x.default,{width:14,height:14,src:null===(e=r.S$[(null==b?void 0:b.type)||(null==l?void 0:null===(t=l[0])||void 0===t?void 0:t.type)])||void 0===e?void 0:e.icon,label:null===(a=r.S$[(null==b?void 0:b.type)||(null==l?void 0:null===(i=l[0])||void 0===i?void 0:i.type)])||void 0===a?void 0:a.label}),(0,n.jsx)("span",{className:"text-xs font-medium",children:(null==b?void 0:b.param)||(null==l?void 0:null===(o=l[0])||void 0===o?void 0:o.param)}),(0,n.jsx)(s.Z,{rotate:90})]})})}})()})}},55238:function(e,l,t){t.r(l);var n=t(96469),a=t(80335),r=t(28822),i=t(38497),s=t(29549),o=t(58526);l.default=()=>{let{temperature:e,setTemperature:l}=(0,i.useContext)(s.MobileChatContext),t=e=>{isNaN(e)||l(e)};return(0,n.jsx)(a.Z,{trigger:["click"],dropdownRender:()=>(0,n.jsx)("div",{className:"flex h-28 bg-white dark:bg-[rgba(255,255,255,0.5)] items-center justify-center rounded-xl py-3",children:(0,n.jsx)(r.Z,{defaultValue:.5,max:1,min:0,step:.1,vertical:!0,onChange:t,value:e})}),placement:"top",children:(0,n.jsxs)("div",{className:"flex items-center justify-between border rounded-xl bg-white dark:bg-black w-14 p-2 flex-shrink-0",children:[(0,n.jsx)(o.Z,{type:"icon-icons-temperature",className:"text-sm"}),(0,n.jsx)("span",{className:"text-xs font-medium",children:e})]})})}},29549:function(e,l,t){t.r(l),t.d(l,{MobileChatContext:function(){return _}});var n=t(96469),a=t(45277),r=t(27623),i=t(51310),s=t(7289),o=t(88506),u=t(44875),d=t(16602),c=t(42786),m=t(28469),v=t.n(m),p=t(45875),x=t(38497),f=t(5157),h=t(86364),g=t(75299);let j=v()(()=>Promise.all([t.e(7521),t.e(5197),t.e(9069),t.e(5996),t.e(1320),t.e(9223),t.e(5444),t.e(2476),t.e(4162),t.e(1103),t.e(1657),t.e(9790),t.e(1766),t.e(8957),t.e(3549),t.e(5883),t.e(5891),t.e(2061),t.e(3695)]).then(t.bind(t,33068)),{loadableGenerated:{webpack:()=>[33068]},ssr:!1}),_=(0,x.createContext)({model:"",temperature:.5,resource:null,setModel:()=>{},setTemperature:()=>{},setResource:()=>{},scene:"",history:[],setHistory:()=>{},scrollViewRef:{current:null},appInfo:{},conv_uid:"",resourceList:[],order:{current:1},handleChat:()=>Promise.resolve(),canAbort:!1,setCarAbort:()=>{},canNewChat:!1,setCanNewChat:()=>{},ctrl:{current:void 0},userInput:"",setUserInput:()=>{},getChatHistoryRun:()=>{}});l.default=()=>{var e,l;let t=(0,p.useSearchParams)(),m=null!==(e=null==t?void 0:t.get("chat_scene"))&&void 0!==e?e:"",v=null!==(l=null==t?void 0:t.get("app_code"))&&void 0!==l?l:"",{modelList:b}=(0,x.useContext)(a.p),[y,w]=(0,x.useState)([]),[N,k]=(0,x.useState)(""),[Z,C]=(0,x.useState)(.5),[S,E]=(0,x.useState)(null),R=(0,x.useRef)(null),[M,I]=(0,x.useState)(""),[V,O]=(0,x.useState)(!1),[T,L]=(0,x.useState)(!0),P=(0,x.useRef)(),A=(0,x.useRef)(1),D=(0,i.Z)(),z=(0,x.useMemo)(()=>"".concat(null==D?void 0:D.user_no,"_").concat(v),[v,D]),{run:W,loading:q}=(0,d.Z)(async()=>await (0,r.Vx)((0,r.$i)("".concat(null==D?void 0:D.user_no,"_").concat(v))),{manual:!0,onSuccess:e=>{let[,l]=e,t=null==l?void 0:l.filter(e=>"view"===e.role);t&&t.length>0&&(A.current=t[t.length-1].order+1),w(l||[])}}),{data:F,run:$,loading:J}=(0,d.Z)(async e=>{let[,l]=await (0,r.Vx)((0,r.BN)(e));return null!=l?l:{}},{manual:!0}),{run:U,data:B,loading:G}=(0,d.Z)(async()=>{var e,l;let[,t]=await (0,r.Vx)((0,r.vD)(m));return E((null==t?void 0:null===(e=t[0])||void 0===e?void 0:e.space_id)||(null==t?void 0:null===(l=t[0])||void 0===l?void 0:l.param)),null!=t?t:[]},{manual:!0}),{run:H,loading:K}=(0,d.Z)(async()=>{let[,e]=await (0,r.Vx)((0,r.iP)());return null!=e?e:[]},{manual:!0,onSuccess:e=>{var l;let t=null===(l=null==e?void 0:e.filter(e=>e.conv_uid===z))||void 0===l?void 0:l[0];(null==t?void 0:t.select_param)&&E(JSON.parse(null==t?void 0:t.select_param))}});(0,x.useEffect)(()=>{m&&v&&b.length&&$({chat_scene:m,app_code:v})},[v,m,$,b]),(0,x.useEffect)(()=>{v&&W()},[v]),(0,x.useEffect)(()=>{if(b.length>0){var e,l,t;let n=null===(e=null==F?void 0:null===(l=F.param_need)||void 0===l?void 0:l.filter(e=>"model"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value;k(n||b[0])}},[b,F]),(0,x.useEffect)(()=>{var e,l,t;let n=null===(e=null==F?void 0:null===(l=F.param_need)||void 0===l?void 0:l.filter(e=>"temperature"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value;C(n||.5)},[F]),(0,x.useEffect)(()=>{if(m&&(null==F?void 0:F.app_code)){var e,l,t,n,a,r;let i=null===(e=null==F?void 0:null===(l=F.param_need)||void 0===l?void 0:l.filter(e=>"resource"===e.type))||void 0===e?void 0:null===(t=e[0])||void 0===t?void 0:t.value,s=null===(n=null==F?void 0:null===(a=F.param_need)||void 0===a?void 0:a.filter(e=>"resource"===e.type))||void 0===n?void 0:null===(r=n[0])||void 0===r?void 0:r.bind_value;s&&E(s),["database","knowledge","plugin","awel_flow"].includes(i)&&!s&&U()}},[F,m,U]);let X=async e=>{var l,t,n;I(""),P.current=new AbortController;let a={chat_mode:m,model_name:N,user_input:e||M,conv_uid:z,temperature:Z,app_code:null==F?void 0:F.app_code,...S&&{select_param:S}};if(y&&y.length>0){let e=null==y?void 0:y.filter(e=>"view"===e.role);A.current=e[e.length-1].order+1}let r=[{role:"human",context:e||M,model_name:N,order:A.current,time_stamp:0},{role:"view",context:"",model_name:N,order:A.current,time_stamp:0,thinking:!0}],i=r.length-1;w([...y,...r]),L(!1);try{await (0,u.L)("".concat(null!==(l=g.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1/chat/completions"),{method:"POST",headers:{"Content-Type":"application/json",[o.gp]:null!==(t=(0,s.n5)())&&void 0!==t?t:""},signal:P.current.signal,body:JSON.stringify(a),openWhenHidden:!0,async onopen(e){if(e.ok&&e.headers.get("content-type")===u.a)return},onclose(){var e;null===(e=P.current)||void 0===e||e.abort(),L(!0),O(!1)},onerror(e){throw Error(e)},onmessage:e=>{let l=e.data;try{l=JSON.parse(l).vis}catch(e){l.replaceAll("\\n","\n")}"[DONE]"===l?(L(!0),O(!1)):(null==l?void 0:l.startsWith("[ERROR]"))?(r[i].context=null==l?void 0:l.replace("[ERROR]",""),r[i].thinking=!1,w([...y,...r]),L(!0),O(!1)):(O(!0),r[i].context=l,r[i].thinking=!1,w([...y,...r]))}})}catch(e){null===(n=P.current)||void 0===n||n.abort(),r[i].context="Sorry, we meet some error, please try again later.",r[i].thinking=!1,w([...r]),L(!0),O(!1)}};return(0,x.useEffect)(()=>{m&&"chat_agent"!==m&&H()},[m,H]),(0,n.jsx)(_.Provider,{value:{model:N,resource:S,setModel:k,setTemperature:C,setResource:E,temperature:Z,appInfo:F,conv_uid:z,scene:m,history:y,scrollViewRef:R,setHistory:w,resourceList:B,order:A,handleChat:X,setCanNewChat:L,ctrl:P,canAbort:V,setCarAbort:O,canNewChat:T,userInput:M,setUserInput:I,getChatHistoryRun:W},children:(0,n.jsx)(c.Z,{size:"large",className:"flex h-screen w-screen justify-center items-center max-h-screen",spinning:q||J||G||K,children:(0,n.jsxs)("div",{className:"flex flex-col h-screen bg-gradient-light dark:bg-gradient-dark p-4 pt-0",children:[(0,n.jsxs)("div",{ref:R,className:"flex flex-col flex-1 overflow-y-auto mb-3",children:[(0,n.jsx)(f.default,{}),(0,n.jsx)(j,{})]}),(null==F?void 0:F.app_code)&&(0,n.jsx)(h.default,{})]})})})}}}]);