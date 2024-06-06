import{r as m,k as _,a7 as v,t as x,q as e,o as f}from"./antdv.415263d7.js";const g=e("h1",null,"post\u65B9\u5F0F\u8BFB\u53D6stream\u76845\u79CD\u65B9\u5F0F",-1),S=e("h1",null,"1\u3001HTTP\u4E4BSSE\u6280\u672F",-1),T=e("pre",null,null,-1),k=e("h1",null,"2\u3001xhr\u7684onDownloadProgress",-1),N=e("p",null,null,-1),R=e("h1",null,"3\u3001fetch",-1),w=e("pre",null,`async function fetchStreamData(url) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/octet-stream",
      Authorization: token,
    },
    body: JSON.stringify({
      issue: "k8s\u662F\u4EC0\u4E48",
    }),
  });
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");
  let result = "";

  // \u9010\u5757\u8BFB\u53D6\u6D41\u6570\u636E
  while (true) {
    const { value, done } = await reader.read();
    console.log(decoder.decode(value));
    if (done) {
      console.log("\u6D41\u5F0F\u8BFB\u53D6\u5B8C\u6210");
      break;
    }
    const value1 = decoder.decode(value);
    for (let index = 0; index < value1.length; index++) {
      const element = value1[index];
      setTimeout(() => {
        // \u4F7F\u7528TextDecoder\u5C06 Uint8Array \u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32
        text.value += element;
      }, 1000);
    }
  }

  return result;
}
    `,-1),y=e("h1",null,"4\u3001getReader",-1),V=e("h1",null,"5\u3001EventSource",-1),b=e("pre",null,`     var stream = new EventSource("/api/chat/stream");
     stream.addEventListener("message", (e)=> {
         console.log(e.data);
     });
    `,-1),E="https://maxcloud-api-test.spotmaxtech.com/api/mrmax/helper",J="ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmhaRzFwYmlJNk1Td2lZMjl0Y0dGdWVTSTZNU3dpWlhod0lqb3hOamd6T0RBME5Ea3pMQ0puYjJRaU9qQXNJbWxoZENJNk1UWTRNekU1T1RZNU15d2ljM1ZpSWpvaWVtOXVaMkpoYnk1amRXbEFiVzlpZG1semRHRXVZMjl0SW4wLlg0WHd1azVSRlBRMDZxaVlPY0VPdTF1Y2MxYzFreldvMDhUQklDM3hnb3c",U={__name:"postReadStream",setup(M){var r=new EventSource("/api/mrmax/helper");r.addEventListener("message",n=>{console.log(n.data)});const o=m("");async function c(n){const i=(await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/octet-stream",Authorization:J},body:JSON.stringify({issue:"k8s\u662F\u4EC0\u4E48"})})).body.getReader(),a=new TextDecoder("utf-8");let u="";for(;;){const{value:s,done:p}=await i.read();if(console.log(a.decode(s)),p){console.log("\u6D41\u5F0F\u8BFB\u53D6\u5B8C\u6210");break}const l=a.decode(s);for(let t=0;t<l.length;t++){const h=l[t];setTimeout(()=>{o.value+=h},1e3)}}return u}return c(E).then(n=>{console.log("\u6D41\u5F0F\u8BFB\u53D6\u7684\u6570\u636E\uFF1A",n)}).catch(n=>{console.error("\u83B7\u53D6\u6570\u636E\u5931\u8D25\uFF1A",n)}),(n,d)=>(f(),_("div",null,[g,v(" "+x(o.value)+" ",1),S,T,k,N,R,w,y,V,b]))}};export{U as default};
