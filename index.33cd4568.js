var e,t,n,i,s,l,r,c,a,o,u;e=document.querySelector(".questions__form"),t=document.getElementById("submit-button"),e.addEventListener("submit",function(n){n.preventDefault(),e.reset(),t.disabled=!0}),n=document.getElementById("email"),i=document.getElementById("message"),s=function(){t.disabled=!n.value.trim()||!i.value.trim()},n.addEventListener("input",s),i.addEventListener("input",s),(l=document.querySelectorAll(".extra-buttons__link")).forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("extra-buttons__link--active")||l.forEach(function(e){e.classList.contains("extra-buttons__link--active")?e.classList.replace("extra-buttons__link--active","extra-buttons__link--not-active"):e.classList.replace("extra-buttons__link--not-active","extra-buttons__link--active")})})}),r=document.querySelector(".slider__line"),c=document.querySelector(".slider__button-prev"),a=document.querySelector(".slider__button-next"),o=document.querySelector(".slider__page-current"),u=0,a.addEventListener("click",function(){u>260||(u+=260,o.innerText="0".concat(u/260+1),r.style.left=-u+"px",c.classList.replace("slider__button-prev--disabled","slider__button-prev--active"),520===u&&a.classList.replace("slider__button-next--active","slider__button-next--disabled"))}),c.addEventListener("click",function(){u<260||(u-=260,o.innerText="0".concat(u/260+1),r.style.left=-u+"px",a.classList.replace("slider__button-next--disabled","slider__button-next--active"),0===u&&c.classList.replace("slider__button-prev--active","slider__button-prev--disabled"))});
//# sourceMappingURL=index.33cd4568.js.map
