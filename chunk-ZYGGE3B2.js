import{a as ae}from"./chunk-QLAOAXEV.js";import{a as Q,c as z,d as G,f as J,h as K,i as U,l as X,m as Y,n as Z,o as $,p as ee}from"./chunk-ONP6AOLD.js";import{a as oe}from"./chunk-DZFP2UU4.js";import{a as te}from"./chunk-VNP4B37G.js";import{Aa as A,Ca as W,Da as N,E as c,F as u,Fa as R,G as P,H as F,Ha as j,La as q,M as s,N as g,Na as H,T as y,V as d,W as V,X as i,Y as n,Z as C,aa as T,ba as f,d as re,da as B,ea as L,fa as k,ga as D,ha as p,ia as E,ka as b,la as _,ma as h,oa as x,pa as M,u as w,x as I,z as O}from"./chunk-T7GGXQV6.js";var ne=re(ae());var v=class a{constructor(e){this.http=e}getCoupon(e){return this.http.get(`/passes/${e}`)}updateCoupon(e){return this.http.put(`/passes/${e.id}`,e)}getTags(){return this.http.get("/tags")}getTitles(){return this.http.get("/titles")}static \u0275fac=function(o){return new(o||a)(I(j))};static \u0275prov=w({token:a,factory:a.\u0275fac,providedIn:"root"})};var pe=["barcode"],ie=()=>[];function de(a,e){a&1&&(i(0,"option",22),p(1,"\uCFE0\uD3F0\uBA85\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."),n())}function ce(a,e){if(a&1&&(i(0,"option",16),p(1),n()),a&2){let o=e.$implicit;d("value",o.id),s(),E(o.name)}}function ue(a,e){if(a&1&&(i(0,"option",16),p(1),n()),a&2){let o=e.$implicit;d("value",o.id),s(),E(o.name)}}var S=class a{constructor(e,o,t,l){this.couponEditService=e;this.router=o;this.route=t;this.location=l}coupon={id:0,barcode:"",memo:"",tagId:0,titleId:0};couponId="";isLoading=!1;errorMessage="";tags=[];titles=[];barcodeElement;ngOnInit(){this.route.paramMap.subscribe(e=>{this.couponId=e.get("id")||"",this.getCouponDetails(this.couponId)}),this.loadTagsAndTitles()}getCouponDetails(e){this.isLoading=!0,this.couponEditService.getCoupon(e).subscribe(o=>{this.coupon=o.data,this.generateBarcode(this.coupon.barcode),this.isLoading=!1},o=>{console.error("\uCFE0\uD3F0 \uC815\uBCF4 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328:",o),this.isLoading=!1,this.errorMessage="\uCFE0\uD3F0 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."})}loadTagsAndTitles(){this.couponEditService.getTags().subscribe(e=>{this.tags=e.data},e=>{console.error("\uD0DC\uADF8 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328:",e),this.errorMessage="\uD0DC\uADF8 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."}),this.couponEditService.getTitles().subscribe(e=>{this.titles=e.data},e=>{console.error("\uCFE0\uD3F0\uBA85 \uBD88\uB7EC\uC624\uAE30 \uC2E4\uD328:",e),this.errorMessage="\uCFE0\uD3F0\uBA85 \uC815\uBCF4\uB97C \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4."})}onSubmit(){this.isLoading=!0,this.couponEditService.updateCoupon(this.coupon).subscribe(e=>{this.router.navigate([`/coupons/${this.couponId}`]),this.isLoading=!1},e=>{console.error("\uCFE0\uD3F0 \uC218\uC815 \uC2E4\uD328:",e),this.isLoading=!1,this.errorMessage="\uCFE0\uD3F0 \uC218\uC815\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4."})}generateBarcode(e){this.barcodeElement?.nativeElement&&e&&(0,ne.default)(this.barcodeElement.nativeElement,e,{format:"CODE128",width:2,height:50,displayValue:!0})}goBack(){this.location.back()}closeErrorPopup(){this.errorMessage=""}static \u0275fac=function(o){return new(o||a)(g(v),g(H),g(q),g(A))};static \u0275cmp=O({type:a,selectors:[["app-coupon-edit"]],viewQuery:function(o,t){if(o&1&&B(pe,5),o&2){let l;L(l=k())&&(t.barcodeElement=l.first)}},standalone:!0,features:[x],decls:37,vars:15,consts:[["couponForm","ngForm"],["barcode",""],[3,"isLoading"],[3,"close","errorMessage"],[1,"container"],[3,"ngSubmit"],["for","title"],["id","title","name","titleId","required","",3,"ngModelChange","ngModel"],["value","","disabled","",4,"ngIf"],[3,"value",4,"ngFor","ngForOf"],["for","barcode"],["id","barcode","type","text","name","barcode","required","",3,"ngModelChange","ngModel"],["for","memo"],["id","memo","name","memo",3,"ngModelChange","ngModel"],["for","tag"],["id","tag","name","tagId",3,"ngModelChange","ngModel"],[3,"value"],[1,"button-group"],["type","button",1,"cancel-btn",3,"click"],[1,"fas","fa-arrow-left"],["type","submit",3,"disabled"],[1,"fas","fa-check"],["value","","disabled",""]],template:function(o,t){if(o&1){let l=T();C(0,"app-loading-indicator",2),i(1,"app-error-popup",3),f("close",function(){return c(l),u(t.closeErrorPopup())}),n(),i(2,"div",4)(3,"h1"),p(4,"\uCFE0\uD3F0 \uC218\uC815"),n(),i(5,"form",5,0),f("ngSubmit",function(){return c(l),u(t.onSubmit())}),i(7,"div")(8,"label",6),p(9,"\uCFE0\uD3F0\uBA85"),n(),i(10,"select",7),h("ngModelChange",function(r){return c(l),_(t.coupon.titleId,r)||(t.coupon.titleId=r),u(r)}),y(11,de,2,0,"option",8)(12,ce,2,2,"option",9),n()(),i(13,"div")(14,"label",10),p(15,"\uBC14\uCF54\uB4DC"),n(),i(16,"input",11),h("ngModelChange",function(r){return c(l),_(t.coupon.barcode,r)||(t.coupon.barcode=r),u(r)}),f("ngModelChange",function(){return c(l),u(t.generateBarcode(t.coupon.barcode))}),n(),P(),C(17,"svg",null,1),n(),F(),i(19,"div")(20,"label",12),p(21,"\uBA54\uBAA8"),n(),i(22,"textarea",13),h("ngModelChange",function(r){return c(l),_(t.coupon.memo,r)||(t.coupon.memo=r),u(r)}),n()(),i(23,"div")(24,"label",14),p(25,"\uD0DC\uADF8"),n(),i(26,"select",15),h("ngModelChange",function(r){return c(l),_(t.coupon.tagId,r)||(t.coupon.tagId=r),u(r)}),i(27,"option",16),p(28,"--- \uC120\uD0DD ---"),n(),y(29,ue,2,2,"option",9),n()(),i(30,"div",17)(31,"button",18),f("click",function(){return c(l),u(t.goBack())}),C(32,"i",19),p(33," \uCDE8\uC18C "),n(),i(34,"button",20),C(35,"i",21),p(36," \uC644\uB8CC "),n()()()()}if(o&2){let l=D(6);d("isLoading",t.isLoading),s(),d("errorMessage",t.errorMessage),s(9),b("ngModel",t.coupon.titleId),s(),d("ngIf",!(t.titles!=null&&t.titles.length)),s(),d("ngForOf",t.titles||M(13,ie)),s(4),b("ngModel",t.coupon.barcode),s(),V("hidden",!t.coupon.barcode),s(5),b("ngModel",t.coupon.memo),s(4),b("ngModel",t.coupon.tagId),s(),d("value",null),s(2),d("ngForOf",t.tags||M(14,ie)),s(5),d("disabled",l.invalid)}},dependencies:[R,W,N,ee,U,Y,Z,Q,X,z,G,$,K,J,te,oe],styles:["button[_ngcontent-%COMP%]{border-radius:10px}.button-group[_ngcontent-%COMP%]{display:flex;gap:10px}.cancel-btn[_ngcontent-%COMP%]{background-color:#e0e0e0;color:#333;padding:10px 20px;cursor:pointer;display:flex;align-items:center;border:none;border-radius:10px;transition:background-color .3s}.cancel-btn[_ngcontent-%COMP%]:hover{background-color:#ccc}button[type=submit][_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:10px 20px;cursor:pointer;display:flex;align-items:center;border:none;border-radius:10px;transition:background-color .3s}button[type=submit][_ngcontent-%COMP%]:hover{background-color:#45a049}button[type=submit][_ngcontent-%COMP%]:disabled{background-color:#e0e0e0;color:#aaa;cursor:not-allowed}button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:5px}select[_ngcontent-%COMP%]{width:100%;padding:8px 12px;border-radius:5px;border:1px solid #ccc;font-size:16px;background-color:#f9f9f9;transition:border-color .3s}select[_ngcontent-%COMP%]:focus{border-color:#4caf50;outline:none;background-color:#e8f5e9}#title[_ngcontent-%COMP%], #tag[_ngcontent-%COMP%]{margin-bottom:20px}label[_ngcontent-%COMP%]{font-weight:700;font-size:16px;color:#333;margin-bottom:5px;display:block}select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:disabled{color:#888;font-style:italic}"]})};export{S as default};
