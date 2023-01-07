!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PerlinAngles",[],e):"object"==typeof exports?exports.PerlinAngles=e():t.PerlinAngles=e()}(self,(()=>(()=>{"use strict";var t={681:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.buildPermutationTable=e.createNoise4D=e.createNoise3D=e.createNoise2D=void 0;const n=.5*(Math.sqrt(3)-1),s=(3-Math.sqrt(3))/6,o=1/6,i=(Math.sqrt(5)-1)/4,r=(5-Math.sqrt(5))/20,a=t=>0|Math.floor(t),l=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]),c=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),h=new Float64Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]);function f(t){const e=new Uint8Array(512);for(let t=0;t<256;t++)e[t]=t;for(let n=0;n<255;n++){const s=n+~~(t()*(256-n)),o=e[n];e[n]=e[s],e[s]=o}for(let t=256;t<512;t++)e[t]=e[t-256];return e}e.createNoise2D=function(t=Math.random){const e=f(t),o=new Float64Array(e).map((t=>l[t%12*2])),i=new Float64Array(e).map((t=>l[t%12*2+1]));return function(t,r){let l=0,c=0,h=0;const f=(t+r)*n,u=a(t+f),d=a(r+f),p=(u+d)*s,m=t-(u-p),w=r-(d-p);let y,v;m>w?(y=1,v=0):(y=0,v=1);const A=m-y+s,g=w-v+s,x=m-1+2*s,b=w-1+2*s,F=255&u,P=255&d;let D=.5-m*m-w*w;if(D>=0){const t=F+e[P];D*=D,l=D*D*(o[t]*m+i[t]*w)}let M=.5-A*A-g*g;if(M>=0){const t=F+y+e[P+v];M*=M,c=M*M*(o[t]*A+i[t]*g)}let N=.5-x*x-b*b;if(N>=0){const t=F+1+e[P+1];N*=N,h=N*N*(o[t]*x+i[t]*b)}return 70*(l+c+h)}},e.createNoise3D=function(t=Math.random){const e=f(t),n=new Float64Array(e).map((t=>c[t%12*3])),s=new Float64Array(e).map((t=>c[t%12*3+1])),i=new Float64Array(e).map((t=>c[t%12*3+2]));return function(t,r,l){let c,h,f,u;const d=.3333333333333333*(t+r+l),p=a(t+d),m=a(r+d),w=a(l+d),y=(p+m+w)*o,v=t-(p-y),A=r-(m-y),g=l-(w-y);let x,b,F,P,D,M;v>=A?A>=g?(x=1,b=0,F=0,P=1,D=1,M=0):v>=g?(x=1,b=0,F=0,P=1,D=0,M=1):(x=0,b=0,F=1,P=1,D=0,M=1):A<g?(x=0,b=0,F=1,P=0,D=1,M=1):v<g?(x=0,b=1,F=0,P=0,D=1,M=1):(x=0,b=1,F=0,P=1,D=1,M=0);const N=v-x+o,z=A-b+o,S=g-F+o,T=v-P+2*o,j=A-D+2*o,q=g-M+2*o,O=v-1+.5,E=A-1+.5,k=g-1+.5,C=255&p,_=255&m,B=255&w;let I=.6-v*v-A*A-g*g;if(I<0)c=0;else{const t=C+e[_+e[B]];I*=I,c=I*I*(n[t]*v+s[t]*A+i[t]*g)}let R=.6-N*N-z*z-S*S;if(R<0)h=0;else{const t=C+x+e[_+b+e[B+F]];R*=R,h=R*R*(n[t]*N+s[t]*z+i[t]*S)}let U=.6-T*T-j*j-q*q;if(U<0)f=0;else{const t=C+P+e[_+D+e[B+M]];U*=U,f=U*U*(n[t]*T+s[t]*j+i[t]*q)}let W=.6-O*O-E*E-k*k;if(W<0)u=0;else{const t=C+1+e[_+1+e[B+1]];W*=W,u=W*W*(n[t]*O+s[t]*E+i[t]*k)}return 32*(c+h+f+u)}},e.createNoise4D=function(t=Math.random){const e=f(t),n=new Float64Array(e).map((t=>h[t%32*4])),s=new Float64Array(e).map((t=>h[t%32*4+1])),o=new Float64Array(e).map((t=>h[t%32*4+2])),l=new Float64Array(e).map((t=>h[t%32*4+3]));return function(t,c,h,f){let u,d,p,m,w;const y=(t+c+h+f)*i,v=a(t+y),A=a(c+y),g=a(h+y),x=a(f+y),b=(v+A+g+x)*r,F=t-(v-b),P=c-(A-b),D=h-(g-b),M=f-(x-b);let N=0,z=0,S=0,T=0;F>P?N++:z++,F>D?N++:S++,F>M?N++:T++,P>D?z++:S++,P>M?z++:T++,D>M?S++:T++;const j=N>=3?1:0,q=z>=3?1:0,O=S>=3?1:0,E=T>=3?1:0,k=N>=2?1:0,C=z>=2?1:0,_=S>=2?1:0,B=T>=2?1:0,I=N>=1?1:0,R=z>=1?1:0,U=S>=1?1:0,W=T>=1?1:0,G=F-j+r,H=P-q+r,J=D-O+r,K=M-E+r,L=F-k+2*r,Q=P-C+2*r,V=D-_+2*r,X=M-B+2*r,Y=F-I+3*r,Z=P-R+3*r,$=D-U+3*r,tt=M-W+3*r,et=F-1+4*r,nt=P-1+4*r,st=D-1+4*r,ot=M-1+4*r,it=255&v,rt=255&A,at=255&g,lt=255&x;let ct=.6-F*F-P*P-D*D-M*M;if(ct<0)u=0;else{const t=it+e[rt+e[at+e[lt]]];ct*=ct,u=ct*ct*(n[t]*F+s[t]*P+o[t]*D+l[t]*M)}let ht=.6-G*G-H*H-J*J-K*K;if(ht<0)d=0;else{const t=it+j+e[rt+q+e[at+O+e[lt+E]]];ht*=ht,d=ht*ht*(n[t]*G+s[t]*H+o[t]*J+l[t]*K)}let ft=.6-L*L-Q*Q-V*V-X*X;if(ft<0)p=0;else{const t=it+k+e[rt+C+e[at+_+e[lt+B]]];ft*=ft,p=ft*ft*(n[t]*L+s[t]*Q+o[t]*V+l[t]*X)}let ut=.6-Y*Y-Z*Z-$*$-tt*tt;if(ut<0)m=0;else{const t=it+I+e[rt+R+e[at+U+e[lt+W]]];ut*=ut,m=ut*ut*(n[t]*Y+s[t]*Z+o[t]*$+l[t]*tt)}let dt=.6-et*et-nt*nt-st*st-ot*ot;if(dt<0)w=0;else{const t=it+1+e[rt+1+e[at+1+e[lt+1]]];dt*=dt,w=dt*dt*(n[t]*et+s[t]*nt+o[t]*st+l[t]*ot)}return 27*(u+d+p+m+w)}},e.buildPermutationTable=f}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var s={};return(()=>{n.d(s,{default:()=>r});var t=n(681),e=t.createNoise3D,o=t.createNoise2D,i=function(){function t(t,n){this.noise=e(),this.noise2d=o(),this.size=10,this.dt=0,this.width=t,this.height=n,this.cols=t/this.size,this.rows=n/this.size}return t.prototype.draw=function(t){this.dt+=.01;for(var e=0;e<=this.cols;e++)for(var n=0;n<=this.rows;n++){var s=this.noise(e/this.cols,n/this.rows,this.dt);this.drawDot(t,e,n,s)}},t.prototype.drawDot=function(t,e,n,s){var o=(s+1)/2;t.strokeStyle="hsl("+360*o+",100%,50%)",t.lineWidth=4,t.save(),t.translate(e*this.size,n*this.size),t.rotate(s),t.beginPath(),t.moveTo(0,this.size/2),t.lineTo(this.size,0),t.closePath(),t.stroke(),t.restore()},t}();const r=function(){function t(){if(this.canvas=document.getElementById("PerlinAngles-canvas"),null==this.canvas)throw new Error("Could not find canvas.");this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!1,this.canvas.width=500,this.canvas.height=500,this.perlinAngles=new i(this.canvas.width,this.canvas.height),this.lastTimeStamp=0}return t.prototype.Start=function(){this.animate(0)},t.prototype.animate=function(t){var e=this;t-this.lastTimeStamp>=20&&(this.lastTimeStamp=t,this.draw()),requestAnimationFrame((function(t){return e.animate(t)}))},t.prototype.draw=function(){this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.perlinAngles.draw(this.ctx)},t}()})(),s.default})()));