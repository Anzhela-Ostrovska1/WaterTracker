import{r as u,a as w,j as s,t as x,s as i}from"./index-7fa02c59.js";import{c as j,a as t,l as f,S,B as g,F as y,b as E,d as P,e as $,f as l,g as d,E as c,h as n,i as k,j as C,k as F}from"./SignIn.styled-fd15e50a.js";import"./bg_element_des@1x-1805b66c.js";import"./bg_element_des@2x-cb13cb99.js";const b=j({email:t().email("Enter a valid email").matches(/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,"Email is not valid").required("Email is required"),password:t().min(6,"Your password is too short.").matches(/^\S*$/,"Password should not contain spaces.").required("Password is required"),confirmPassword:t().oneOf([f("password"),null],"Entered passwords must match").required("Confirm password is reqired!")}),q=()=>{const[e,m]=u.useState(!1),p=w(),r=()=>{m(!e)};return s.jsxs(S,{children:[s.jsx(g,{}),s.jsxs(y,{children:[s.jsx(E,{children:"Sign Up"}),s.jsx(P,{validateOnChange:!0,initialValues:{email:"",password:"",confirmPassword:""},validationSchema:b,onSubmit:({email:a,password:o})=>{p(x({email:a,password:o}))},children:({errors:a,isValid:o,touched:h})=>s.jsxs($,{children:[s.jsxs(l,{children:["Enter your email",s.jsx(d,{className:a.email&&h.email?"input-with-error":null,type:"email",name:"email",placeholder:"E-mail"}),s.jsx(c,{name:"email",component:"span"})]}),s.jsxs(l,{children:["Enter your password",s.jsx(d,{className:a.password?"input-with-error":null,type:e?"text":"password",name:"password",placeholder:"Password"}),s.jsx(c,{name:"password",component:"span"}),e?s.jsx(n,{onClick:r,children:s.jsx("use",{href:`${i}#icon-eye`})}):s.jsx(n,{onClick:r,children:s.jsx("use",{href:`${i}#icon-closed-eye`})})]}),s.jsxs(l,{children:["Repeat password",s.jsx(d,{className:a.confirmPassword?"input-with-error":null,name:"confirmPassword",placeholder:"Repeat password",type:e?"text":"password"}),s.jsx(c,{name:"confirmPassword",component:"span"}),e?s.jsx(n,{onClick:r,children:s.jsx("use",{href:`${i}#icon-eye`})}):s.jsx(n,{onClick:r,children:s.jsx("use",{href:`${i}#icon-closed-eye`})})]}),s.jsx(k,{className:o?null:"button-disabled",type:"submit",children:"Sign Up"})]})}),s.jsx(C,{to:"/signin",children:"Sign In"})]})]})};function R(){return s.jsx(F,{children:s.jsx(q,{})})}export{R as default};