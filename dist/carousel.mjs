var t={189:(t,s,e)=>{e.d(s,{LO:()=>i});const i={xs:0,sm:640,md:768,lg:1024,xl:1280,"2xl":1536}},615:(t,s,e)=>{e.d(s,{A:()=>i});class i{constructor(t,s,e){this.el=t,this.options=s,this.events=e,this.el=t,this.options=s,this.events={}}createCollection(t,s){var e;t.push({id:(null===(e=null==s?void 0:s.el)||void 0===e?void 0:e.id)||t.length+1,element:s})}fireEvent(t,s=null){if(this.events.hasOwnProperty(t))return this.events[t](s)}on(t,s){this.events[t]=s}}},926:(t,s,e)=>{e.d(s,{en:()=>r,fc:()=>n,sg:()=>i});const i=(t,s=200)=>{let e;return(...i)=>{clearTimeout(e),e=setTimeout((()=>{t.apply(void 0,i)}),s)}},n=t=>{const s=document.createElement("template");return t=t.trim(),s.innerHTML=t,s.content.firstChild},r=(t,s,e=" ",i="add")=>{t.split(e).forEach((t=>"add"===i?s.classList.add(t):s.classList.remove(t)))}}},s={};function e(i){var n=s[i];if(void 0!==n)return n.exports;var r=s[i]={exports:{}};return t[i](r,r.exports,e),r.exports}e.d=(t,s)=>{for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},e.o=(t,s)=>Object.prototype.hasOwnProperty.call(t,s);var i={};e.d(i,{A:()=>a});var n=e(926),r=e(615),l=e(189);
/*
 * HSCarousel
 * @version: 2.5.1
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class h extends r.A{constructor(t,s){var e,i,n,r,l;super(t,s);const h=t.getAttribute("data-hs-carousel"),a=h?JSON.parse(h):{},o=Object.assign(Object.assign({},a),s);this.currentIndex=o.currentIndex||0,this.loadingClasses=o.loadingClasses?`${o.loadingClasses}`.split(","):null,this.dotsItemClasses=o.dotsItemClasses?o.dotsItemClasses:null,this.isAutoHeight=void 0!==o.isAutoHeight&&o.isAutoHeight,this.isAutoPlay=void 0!==o.isAutoPlay&&o.isAutoPlay,this.isCentered=void 0!==o.isCentered&&o.isCentered,this.isDraggable=void 0!==o.isDraggable&&o.isDraggable,this.isInfiniteLoop=void 0!==o.isInfiniteLoop&&o.isInfiniteLoop,this.isRTL=void 0!==o.isRTL&&o.isRTL,this.isSnap=void 0!==o.isSnap&&o.isSnap,this.hasSnapSpacers=void 0===o.hasSnapSpacers||o.hasSnapSpacers,this.speed=o.speed||4e3,this.updateDelay=o.updateDelay||0,this.slidesQty=o.slidesQty||1,this.loadingClassesRemove=(null===(e=this.loadingClasses)||void 0===e?void 0:e[0])?this.loadingClasses[0].split(" "):"opacity-0",this.loadingClassesAdd=(null===(i=this.loadingClasses)||void 0===i?void 0:i[1])?this.loadingClasses[1].split(" "):"",this.afterLoadingClassesAdd=(null===(n=this.loadingClasses)||void 0===n?void 0:n[2])?this.loadingClasses[2].split(" "):"",this.container=this.el.querySelector(".hs-carousel")||null,this.inner=this.el.querySelector(".hs-carousel-body")||null,this.slides=this.el.querySelectorAll(".hs-carousel-slide")||[],this.prev=this.el.querySelector(".hs-carousel-prev")||null,this.next=this.el.querySelector(".hs-carousel-next")||null,this.dots=this.el.querySelector(".hs-carousel-pagination")||null,this.info=this.el.querySelector(".hs-carousel-info")||null,this.infoTotal=(null===(r=null==this?void 0:this.info)||void 0===r?void 0:r.querySelector(".hs-carousel-info-total"))||null,this.infoCurrent=(null===(l=null==this?void 0:this.info)||void 0===l?void 0:l.querySelector(".hs-carousel-info-current"))||null,this.sliderWidth=this.el.getBoundingClientRect().width,this.isDragging=!1,this.dragStartX=null,this.initialTranslateX=null,this.touchX={start:0,end:0},this.resizeContainer=document.querySelector("body"),this.resizeContainerWidth=0,this.init()}setIsSnap(){const t=this.container.getBoundingClientRect(),s=t.left+t.width/2;let e=null,i=null,n=1/0;Array.from(this.inner.children).forEach((t=>{const i=t.getBoundingClientRect(),r=this.inner.getBoundingClientRect(),l=i.left+i.width/2-r.left,h=Math.abs(s-(r.left+l));h<n&&(n=h,e=t)})),e&&(i=Array.from(this.slides).findIndex((t=>t===e))),this.setIndex(i),this.dots&&this.setCurrentDot()}init(){this.createCollection(window.$hsCarouselCollection,this),this.inner&&(this.calculateWidth(),this.isDraggable&&!this.isSnap&&this.initDragHandling()),this.prev&&this.prev.addEventListener("click",(()=>{this.goToPrev(),this.isAutoPlay&&(this.resetTimer(),this.setTimer())})),this.next&&this.next.addEventListener("click",(()=>{this.goToNext(),this.isAutoPlay&&(this.resetTimer(),this.setTimer())})),this.dots&&this.initDots(),this.info&&this.buildInfo(),this.slides.length&&(this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isAutoPlay&&this.autoPlay()),setTimeout((()=>{this.isSnap&&this.setIsSnap(),this.loadingClassesRemove&&("string"==typeof this.loadingClassesRemove?this.inner.classList.remove(this.loadingClassesRemove):this.inner.classList.remove(...this.loadingClassesRemove)),this.loadingClassesAdd&&("string"==typeof this.loadingClassesAdd?this.inner.classList.add(this.loadingClassesAdd):this.inner.classList.add(...this.loadingClassesAdd)),this.inner&&this.afterLoadingClassesAdd&&setTimeout((()=>{"string"==typeof this.afterLoadingClassesAdd?this.inner.classList.add(this.afterLoadingClassesAdd):this.inner.classList.add(...this.afterLoadingClassesAdd)}))}),400),this.isSnap&&this.container.addEventListener("scroll",(()=>{clearTimeout(this.isScrolling),this.isScrolling=setTimeout((()=>{this.setIsSnap()}),100)})),this.el.classList.add("init"),this.isSnap||(this.el.addEventListener("touchstart",(t=>{this.touchX.start=t.changedTouches[0].screenX})),this.el.addEventListener("touchend",(t=>{this.touchX.end=t.changedTouches[0].screenX,this.detectDirection()}))),this.observeResize()}initDragHandling(){const t=this.inner;t&&(t.addEventListener("mousedown",this.handleDragStart.bind(this)),t.addEventListener("touchstart",this.handleDragStart.bind(this),{passive:!0}),document.addEventListener("mousemove",this.handleDragMove.bind(this)),document.addEventListener("touchmove",this.handleDragMove.bind(this),{passive:!1}),document.addEventListener("mouseup",this.handleDragEnd.bind(this)),document.addEventListener("touchend",this.handleDragEnd.bind(this)))}getTranslateXValue(){var t;const s=window.getComputedStyle(this.inner).transform;if("none"!==s){const e=null===(t=s.match(/matrix.*\((.+)\)/))||void 0===t?void 0:t[1].split(", ");if(e){let t=parseFloat(6===e.length?e[4]:e[12]);return this.isRTL&&(t=-t),isNaN(t)||0===t?0:-t}}return 0}removeClickEventWhileDragging(t){t.preventDefault()}handleDragStart(t){t.preventDefault(),this.isDragging=!0,this.dragStartX=this.getEventX(t),this.initialTranslateX=this.isRTL?this.getTranslateXValue():-this.getTranslateXValue(),this.inner.classList.add("dragging")}handleDragMove(t){if(!this.isDragging)return;this.inner.querySelectorAll("a:not(.prevented-click)").forEach((t=>{t.classList.add("prevented-click"),t.addEventListener("click",this.removeClickEventWhileDragging)}));let s=this.getEventX(t)-this.dragStartX;this.isRTL&&(s=-s);const e=this.initialTranslateX+s;this.setTranslate((()=>{let t=this.sliderWidth*this.slides.length/this.getCurrentSlidesQty()-this.sliderWidth;const s=this.sliderWidth,i=(s-s/this.getCurrentSlidesQty())/2,n=this.isCentered?i:0;this.isCentered&&(t+=i);const r=-t;return this.isRTL?e<n?n:e>t?r:-e:e>n?n:e<-t?r:e})())}handleDragEnd(){if(!this.isDragging)return;this.isDragging=!1;const t=this.sliderWidth/this.getCurrentSlidesQty(),s=this.getTranslateXValue();let e=Math.round(s/t);this.isRTL&&(e=Math.round(s/t)),this.inner.classList.remove("dragging"),setTimeout((()=>{this.calculateTransform(e),this.dots&&this.setCurrentDot(),this.dragStartX=null,this.initialTranslateX=null,this.inner.querySelectorAll("a.prevented-click").forEach((t=>{t.classList.remove("prevented-click"),t.removeEventListener("click",this.removeClickEventWhileDragging)}))}))}getEventX(t){return t instanceof MouseEvent?t.clientX:t.touches[0].clientX}getCurrentSlidesQty(){if("object"==typeof this.slidesQty){const t=document.body.clientWidth;let s=0;return Object.keys(this.slidesQty).forEach((e=>{t>=(typeof e+1=="number"?this.slidesQty[e]:l.LO[e])&&(s=this.slidesQty[e])})),s}return this.slidesQty}buildSnapSpacers(){const t=this.inner.querySelector(".hs-snap-before"),s=this.inner.querySelector(".hs-snap-after");t&&t.remove(),s&&s.remove();const e=this.sliderWidth,i=e/2-e/this.getCurrentSlidesQty()/2,r=(0,n.fc)(`<div class="hs-snap-before" style="height: 100%; width: ${i}px"></div>`),l=(0,n.fc)(`<div class="hs-snap-after" style="height: 100%; width: ${i}px"></div>`);this.inner.prepend(r),this.inner.appendChild(l)}initDots(){this.el.querySelectorAll(".hs-carousel-pagination-item").length?this.setDots():this.buildDots(),this.dots&&this.setCurrentDot()}buildDots(){this.dots.innerHTML="";const t=!this.isCentered&&this.slidesQty?this.slides.length-(this.getCurrentSlidesQty()-1):this.slides.length;for(let s=0;s<t;s++){const t=this.buildSingleDot(s);this.dots.append(t)}}setDots(){this.dotsItems=this.dots.querySelectorAll(".hs-carousel-pagination-item"),this.dotsItems.forEach(((t,s)=>{const e=t.getAttribute("data-carousel-pagination-item-target");this.singleDotEvents(t,e?+e:s)}))}goToCurrentDot(){const t=this.dots,s=t.getBoundingClientRect(),e=t.scrollLeft,i=t.scrollTop,n=t.clientWidth,r=t.clientHeight,l=this.dotsItems[this.currentIndex],h=l.getBoundingClientRect(),a=h.left-s.left+e,o=a+l.clientWidth,d=h.top-s.top+i,c=d+l.clientHeight;let u=e,g=i;(a<e||o>e+n)&&(u=o-n),(d<i||c>i+r)&&(g=c-r),t.scrollTo({left:u,top:g,behavior:"smooth"})}buildInfo(){this.infoTotal&&this.setInfoTotal(),this.infoCurrent&&this.setInfoCurrent()}setInfoTotal(){this.infoTotal.innerText=`${this.slides.length}`}setInfoCurrent(){this.infoCurrent.innerText=`${this.currentIndex+1}`}buildSingleDot(t){const s=(0,n.fc)("<span></span>");return this.dotsItemClasses&&(0,n.en)(this.dotsItemClasses,s),this.singleDotEvents(s,t),s}singleDotEvents(t,s){t.addEventListener("click",(()=>{this.goTo(s),this.isAutoPlay&&(this.resetTimer(),this.setTimer())}))}observeResize(){new ResizeObserver((0,n.sg)((t=>{for(let s of t){const t=s.contentRect.width;t!==this.resizeContainerWidth&&(this.recalculateWidth(),this.dots&&this.initDots(),this.addCurrentClass(),this.resizeContainerWidth=t)}}),this.updateDelay)).observe(this.resizeContainer)}calculateWidth(){this.isSnap||(this.inner.style.width=this.sliderWidth*this.slides.length/this.getCurrentSlidesQty()+"px"),this.slides.forEach((t=>{t.style.width=this.sliderWidth/this.getCurrentSlidesQty()+"px"})),this.calculateTransform()}addCurrentClass(){if(this.isSnap){const t=Math.floor(this.getCurrentSlidesQty()/2);for(let s=0;s<this.slides.length;s++){const e=this.slides[s];s<=this.currentIndex+t&&s>=this.currentIndex-t?e.classList.add("active"):e.classList.remove("active")}}else{const t=this.isCentered?this.currentIndex+this.getCurrentSlidesQty()+(this.getCurrentSlidesQty()-1):this.currentIndex+this.getCurrentSlidesQty();this.slides.forEach(((s,e)=>{e>=this.currentIndex&&e<t?s.classList.add("active"):s.classList.remove("active")}))}}setCurrentDot(){const t=(t,s)=>{let e=!1;const i=Math.floor(this.getCurrentSlidesQty()/2);e=this.isSnap&&!this.hasSnapSpacers?s===(this.getCurrentSlidesQty()%2==0?this.currentIndex-i+1:this.currentIndex-i):s===this.currentIndex,e?t.classList.add("active"):t.classList.remove("active")};this.dotsItems?this.dotsItems.forEach(((s,e)=>t(s,e))):this.dots.querySelectorAll(":scope > *").forEach(((s,e)=>t(s,e)))}setElementToDisabled(t){t.classList.add("disabled"),"BUTTON"!==t.tagName&&"INPUT"!==t.tagName||t.setAttribute("disabled","disabled")}unsetElementToDisabled(t){t.classList.remove("disabled"),"BUTTON"!==t.tagName&&"INPUT"!==t.tagName||t.removeAttribute("disabled")}addDisabledClass(){if(!this.prev||!this.next)return!1;const t=getComputedStyle(this.inner).getPropertyValue("gap"),s=Math.floor(this.getCurrentSlidesQty()/2);let e=0,i=0,n=!1,r=!1;this.isSnap?(e=this.currentIndex,i=this.hasSnapSpacers?this.slides.length-1:this.slides.length-s-1,n=this.hasSnapSpacers?0===e:this.getCurrentSlidesQty()%2==0?e-s<0:e-s==0,r=e>=i&&this.container.scrollLeft+this.container.clientWidth+(parseFloat(t)||0)>=this.container.scrollWidth):(e=this.currentIndex,i=this.isCentered?this.slides.length-this.getCurrentSlidesQty()+(this.getCurrentSlidesQty()-1):this.slides.length-this.getCurrentSlidesQty(),n=0===e,r=e>=i),n?(this.unsetElementToDisabled(this.next),this.setElementToDisabled(this.prev)):r?(this.unsetElementToDisabled(this.prev),this.setElementToDisabled(this.next)):(this.unsetElementToDisabled(this.prev),this.unsetElementToDisabled(this.next))}autoPlay(){this.setTimer()}setTimer(){this.timer=setInterval((()=>{this.currentIndex===this.slides.length-1?this.goTo(0):this.goToNext()}),this.speed)}resetTimer(){clearInterval(this.timer)}detectDirection(){const{start:t,end:s}=this.touchX;s<t&&this.goToNext(),s>t&&this.goToPrev()}recalculateWidth(){this.sliderWidth=this.inner.parentElement.getBoundingClientRect().width,this.calculateWidth(),this.sliderWidth!==this.inner.parentElement.getBoundingClientRect().width&&this.recalculateWidth()}calculateTransform(t){void 0!==t&&(this.currentIndex=t),this.currentIndex>this.slides.length-this.getCurrentSlidesQty()&&!this.isCentered&&(this.currentIndex=this.slides.length-this.getCurrentSlidesQty());const s=this.sliderWidth,e=s/this.getCurrentSlidesQty();let i=this.currentIndex*e;if(this.isSnap&&!this.isCentered&&this.container.scrollLeft<s&&this.container.scrollLeft+e/2>s&&(this.container.scrollLeft=this.container.scrollWidth),this.isCentered&&!this.isSnap){const t=(s-e)/2;if(0===this.currentIndex)i=-t;else if(this.currentIndex>=this.slides.length-this.getCurrentSlidesQty()+(this.getCurrentSlidesQty()-1)){i=this.slides.length*e-s+t}else i=this.currentIndex*e-t}this.isSnap||(this.inner.style.transform=this.isRTL?`translate(${i}px, 0px)`:`translate(${-i}px, 0px)`),this.isAutoHeight&&(this.inner.style.height=`${this.slides[this.currentIndex].clientHeight}px`),this.dotsItems&&this.goToCurrentDot(),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass(),this.isSnap&&this.hasSnapSpacers&&this.buildSnapSpacers(),this.infoCurrent&&this.setInfoCurrent()}setTranslate(t){this.inner.style.transform=this.isRTL?`translate(${-t}px, 0px)`:`translate(${t}px, 0px)`}goToPrev(){if(this.currentIndex>0?this.currentIndex--:this.currentIndex=this.slides.length-this.getCurrentSlidesQty(),this.isSnap){const t=this.sliderWidth/this.getCurrentSlidesQty();this.container.scrollBy({left:Math.max(-this.container.scrollLeft,-t),behavior:"smooth"}),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()}else this.calculateTransform();this.dots&&this.setCurrentDot()}goToNext(){const t=this.isCentered?this.slides.length-this.getCurrentSlidesQty()+(this.getCurrentSlidesQty()-1):this.slides.length-this.getCurrentSlidesQty();if(this.currentIndex<t?this.currentIndex++:this.currentIndex=0,this.isSnap){const t=this.sliderWidth/this.getCurrentSlidesQty(),s=this.container.scrollWidth-this.container.clientWidth;this.container.scrollBy({left:Math.min(t,s-this.container.scrollLeft),behavior:"smooth"}),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()}else this.calculateTransform();this.dots&&this.setCurrentDot()}goTo(t){const s=this.currentIndex;if(this.currentIndex=t,this.isSnap){const t=this.sliderWidth/this.getCurrentSlidesQty(),e=s>this.currentIndex?s-this.currentIndex:this.currentIndex-s,i=s>this.currentIndex?-t*e:t*e;this.container.scrollBy({left:i,behavior:"smooth"}),this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()}else this.calculateTransform();this.dots&&this.setCurrentDot()}setIndex(t){this.currentIndex=t,this.addCurrentClass(),this.isInfiniteLoop||this.addDisabledClass()}static getInstance(t,s){const e=window.$hsCarouselCollection.find((s=>s.element.el===("string"==typeof t?document.querySelector(t):t)));return e?s?e:e.element:null}static autoInit(){window.$hsCarouselCollection||(window.$hsCarouselCollection=[]),document.querySelectorAll("[data-hs-carousel]:not(.--prevent-on-load-init)").forEach((t=>{window.$hsCarouselCollection.find((s=>{var e;return(null===(e=null==s?void 0:s.element)||void 0===e?void 0:e.el)===t}))||new h(t)}))}}window.addEventListener("load",(()=>{h.autoInit()})),"undefined"!=typeof window&&(window.HSCarousel=h);const a=h;var o=i.A;export{o as default};