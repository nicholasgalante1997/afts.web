var e,n=-1,t=function(e){addEventListener("pageshow",(function(t){t.persisted&&(n=t.timeStamp,e(t))}),!0)},r=function(){var e=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(e&&e.responseStart>0&&e.responseStart<performance.now())return e},i=function(){var e=r();return e&&e.activationStart||0},o=function(e,t){var o=r(),a="navigate";return n>=0?a="back-forward-cache":o&&(document.prerendering||i()>0?a="prerender":document.wasDiscarded?a="restore":o.type&&(a=o.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:a}},a=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},t||{})),r}}catch(e){}},c=function(e,n,t,r){var i,o;return function(a){n.value>=0&&(a||r)&&((o=n.value-(i||0))||void 0===i)&&(i=n.value,n.delta=o,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},u=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},f=function(e){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e()}))},s=function(e){var n=!1;return function(){n||(e(),n=!0)}},l=-1,d=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},v=function(e){"hidden"===document.visibilityState&&l>-1&&(l="visibilitychange"===e.type?e.timeStamp:0,p())},m=function(){addEventListener("visibilitychange",v,!0),addEventListener("prerenderingchange",v,!0)},p=function(){removeEventListener("visibilitychange",v,!0),removeEventListener("prerenderingchange",v,!0)},h=function(){return l<0&&(l=d(),m(),t((function(){setTimeout((function(){l=d(),m()}),0)}))),{get firstHiddenTime(){return l}}},g=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},y=[1800,3e3],T=function(e,n){n=n||{},g((function(){var r,f=h(),s=o("FCP"),l=a("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(l.disconnect(),e.startTime<f.firstHiddenTime&&(s.value=Math.max(e.startTime-i(),0),s.entries.push(e),r(!0)))}))}));l&&(r=c(e,s,y,n.reportAllChanges),t((function(t){s=o("FCP"),r=c(e,s,y,n.reportAllChanges),u((function(){s.value=performance.now()-t.timeStamp,r(!0)}))})))}))},E=[.1,.25],C=0,b=1/0,S=0,A=function(e){e.forEach((function(e){e.interactionId&&(b=Math.min(b,e.interactionId),S=Math.max(S,e.interactionId),C=S?(S-b)/7+1:0)}))},L=function(){"interactionCount"in performance||e||(e=a("event",A,{type:"event",buffered:!0,durationThreshold:0}))},w=[],I=new Map,P=0,M=function(){return(e?C:performance.interactionCount||0)-P},k=[],F=function(e){if(k.forEach((function(n){return n(e)})),e.interactionId||"first-input"===e.entryType){var n=w[w.length-1],t=I.get(e.interactionId);if(t||w.length<10||e.duration>n.latency){if(t)e.duration>t.latency?(t.entries=[e],t.latency=e.duration):e.duration===t.latency&&e.startTime===t.entries[0].startTime&&t.entries.push(e);else{var r={id:e.interactionId,latency:e.duration,entries:[e]};I.set(r.id,r),w.push(r)}w.sort((function(e,n){return n.latency-e.latency})),w.length>10&&w.splice(10).forEach((function(e){return I.delete(e.id)}))}}},x=function(e){var n=self.requestIdleCallback||self.setTimeout,t=-1;return e=s(e),"hidden"===document.visibilityState?e():(t=n(e),f(e)),t},B=[200,500],R=[2500,4e3],q={},D=[800,1800],H=function e(n){document.prerendering?g((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)};new Date,function(e,n){n=n||{},T(s((function(){var r,i=o("CLS",0),s=0,l=[],d=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=l[0],t=l[l.length-1];s&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(s+=e.value,l.push(e)):(s=e.value,l=[e])}})),s>i.value&&(i.value=s,i.entries=l,r())},v=a("layout-shift",d);v&&(r=c(e,i,E,n.reportAllChanges),f((function(){d(v.takeRecords()),r(!0)})),t((function(){s=0,i=o("CLS",0),r=c(e,i,E,n.reportAllChanges),u((function(){return r()}))})),setTimeout(r,0))})))}(console.log),T(console.log),function(e,n){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(n=n||{},g((function(){var r;L();var i,u=o("INP"),s=function(e){x((function(){e.forEach(F);var n,t=(n=Math.min(w.length-1,Math.floor(M()/50)),w[n]);t&&t.latency!==u.value&&(u.value=t.latency,u.entries=t.entries,i())}))},l=a("event",s,{durationThreshold:null!==(r=n.durationThreshold)&&void 0!==r?r:40});i=c(e,u,B,n.reportAllChanges),l&&(l.observe({type:"first-input",buffered:!0}),f((function(){s(l.takeRecords()),i(!0)})),t((function(){P=0,w.length=0,I.clear(),u=o("INP"),i=c(e,u,B,n.reportAllChanges)})))})))}(console.log),function(e,n){n=n||{},g((function(){var r,l=h(),d=o("LCP"),v=function(e){n.reportAllChanges||(e=e.slice(-1)),e.forEach((function(e){e.startTime<l.firstHiddenTime&&(d.value=Math.max(e.startTime-i(),0),d.entries=[e],r())}))},m=a("largest-contentful-paint",v);if(m){r=c(e,d,R,n.reportAllChanges);var p=s((function(){q[d.id]||(v(m.takeRecords()),m.disconnect(),q[d.id]=!0,r(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,(function(){return x(p)}),!0)})),f(p),t((function(t){d=o("LCP"),r=c(e,d,R,n.reportAllChanges),u((function(){d.value=performance.now()-t.timeStamp,q[d.id]=!0,r(!0)}))}))}}))}(console.log),function(e,n){n=n||{};var a=o("TTFB"),u=c(e,a,D,n.reportAllChanges);H((function(){var f=r();f&&(a.value=Math.max(f.responseStart-i(),0),a.entries=[f],u(!0),t((function(){a=o("TTFB",0),(u=c(e,a,D,n.reportAllChanges))(!0)})))}))}(console.log);