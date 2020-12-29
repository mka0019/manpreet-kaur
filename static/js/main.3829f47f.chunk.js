(this["webpackJsonpmanpreet-kaur"]=this["webpackJsonpmanpreet-kaur"]||[]).push([[0],{48:function(e,t,s){},49:function(e,t,s){"use strict";s.r(t);var i=s(0),a=s(2),n=s.n(a),c=s(14),r=s.n(c),l=(s(33),s(34),s(35),s(8)),o=s(9),d=s(11),j=s(10),m=s(12),h=s(50),b=s(51),u=s(52),p=s(60),O=s(53),x=s(54),g=s(13),v=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).listenScrollEvent=function(e){window.scrollY>20?i.setState({bg:"scroll"}):i.setState({bg:"transparent"})},i.toggleNav=i.toggleNav.bind(Object(m.a)(i)),i.toggleModal=i.toggleModal.bind(Object(m.a)(i)),i.state={isNavOpen:!1,isModalOpen:!1,bg:"transparent"},i}return Object(o.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.listenScrollEvent)}},{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"render",value:function(){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)(h.a,{className:this.state.bg,fixed:"top",expand:"md",id:"navbar-id",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(b.a,{className:"mr-auto",href:"#home",children:"Manpreet Kaur"}),Object(i.jsx)(u.a,{onClick:this.toggleNav}),Object(i.jsx)(p.a,{isOpen:this.state.isNavOpen,navbar:!0,className:"justify-content-end",children:Object(i.jsxs)(O.a,{navbar:!0,children:[Object(i.jsx)(x.a,{children:Object(i.jsxs)(g.NavHashLink,{smooth:!0,className:"nav-link selected",to:"#about",children:[Object(i.jsx)("span",{className:""})," About"]})}),Object(i.jsx)(x.a,{children:Object(i.jsxs)(g.NavHashLink,{smooth:!0,className:"nav-link selected",to:"#projects",children:[Object(i.jsx)("span",{className:""})," Projects"]})}),Object(i.jsx)(x.a,{children:Object(i.jsxs)(g.NavHashLink,{smooth:!0,className:"nav-link selected",to:"#resume",children:[Object(i.jsx)("span",{className:""})," Resume"]})}),Object(i.jsx)(x.a,{children:Object(i.jsxs)(g.NavHashLink,{smooth:!0,className:"nav-link selected",to:"#contact",children:[Object(i.jsx)("span",{className:""})," Contact"]})})]})})]})})})}}]),s}(a.Component);var f=function(e){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("footer",{id:"contact",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col",children:[Object(i.jsx)("h2",{children:"Contact"}),Object(i.jsx)("p",{children:"If you like my work and would like to connect, send me a direct message or connect with me via linkedin."})]})}),Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col",children:[Object(i.jsxs)("ul",{class:"list-unstyled media-links",children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"mailto:mghotra1993@gmail.com",title:"link to send email",children:Object(i.jsx)("span",{class:"icon ion-ios-email-outline","aria-hidden":"true"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://www.linkedin.com/in/manpreet-kaur-260905140/",title:"link to go Manpreet's linkedin",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("span",{class:"icon ion-social-linkedin-outline","aria-hidden":"true"})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/mka0019",title:"link to go to Manpreet's github",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("span",{class:"icon ion-social-github-outline","aria-hidden":"true"})})})]}),Object(i.jsx)("p",{children:"Copyright 2020. Manpreet Kaur."})]})})]})})})},w=s(55),k=s(56),N=s(57),y=s(58),C=s(59),M=s.p+"static/media/Avatar-Maker.b075b564.svg";function A(){return Object(i.jsx)(w.a,{id:"home",fluid:!0,children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-sm-6 mx-auto head-content",children:[Object(i.jsx)("h1",{children:"Manpreet Kaur"}),Object(i.jsx)("h3",{children:"Web Developer"})]})})})})}function F(){return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("section",{id:"about",children:Object(i.jsx)("div",{className:"containter",children:Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"col-sm-6 about-content text-center mx-auto",children:[Object(i.jsx)("h2",{children:"ABOUT"}),Object(i.jsx)("img",{src:M,className:"avatar-image",alt:"avatar image of MK"}),Object(i.jsx)("p",{children:"Hi, my name is Manpreet Kaur. I'm QA tester and transitioning into Front-End Development. I have 4 years of QA testing experience in mobile & broswer applications. In addition, I also have skills in other fields such as data-entry, Wordpress site maintenance, tba.... "})]})})})})})}function D(e){var t=e.pc;return Object(i.jsxs)(k.a,{children:[Object(i.jsx)("div",{className:"img-cont",children:Object(i.jsx)(N.a,{src:t.image,alt:t.name,className:"img-fluid"})}),Object(i.jsx)(y.a,{className:"card-img-overlay",children:Object(i.jsx)(C.a,{href:t.link,target:"_blank",children:Object(i.jsxs)("span",{className:"text",children:[t.title," >"]})})})]})}var I=function(e){var t=e.projectCardsMain.map((function(e){return Object(i.jsx)("div",{className:"col-sm-6 col-md-4",children:Object(i.jsx)(D,{pc:e})},e.id)}));return Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)(A,{}),Object(i.jsx)(F,{}),Object(i.jsxs)("section",{id:"projects",children:[Object(i.jsx)("div",{className:"row mb-5",children:Object(i.jsxs)("div",{className:"col-sm-8 text-center mx-auto fadeUp",children:[Object(i.jsx)("h2",{className:"mb-4",children:"QA Tester"}),Object(i.jsx)("p",{children:" As a QA Tester, I have planned and studied client specs, design specs and wireframes, in order to detect and diagnose errors and bugs while in QA process. Applyed a user prospective to ensure the website is UX/UI friendly. Administer website functionality tests: Cross-browser and cross-device. Worked with project managers to ensure bugs are tracked and resolved. Below are a few projects that I have been a part of:"})]})}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row",children:t})})]})]})};function T(e){var t=e.wr;return Object(i.jsxs)("li",{class:"timeline-item",children:[Object(i.jsx)("div",{class:"timeline-info",children:Object(i.jsx)("span",{children:t.years})}),Object(i.jsx)("div",{class:"timeline-marker"}),Object(i.jsxs)("div",{class:"timeline-content",children:[Object(i.jsx)("h3",{class:"timeline-company",children:t.company}),Object(i.jsx)("h4",{class:"timeline-title",children:t.title}),Object(i.jsx)("ul",{children:t.text.map((function(e){return Object(i.jsx)("li",{children:e})}))})]})]},t.id)}function E(e){var t=e.er;return Object(i.jsxs)("li",{class:"timeline-item",children:[Object(i.jsx)("div",{class:"timeline-info",children:Object(i.jsx)("span",{children:t.duration})}),Object(i.jsx)("div",{class:"timeline-marker"}),Object(i.jsxs)("div",{class:"timeline-content",children:[Object(i.jsx)("h3",{class:"timeline-company",children:t.academy}),Object(i.jsx)("h4",{class:"timeline-title",children:t.major}),Object(i.jsx)("h5",{class:"timeline-location",children:t.location})]})]},t.id)}var B=function(e){var t=e.workTimelineMain.map((function(e){return Object(i.jsx)(T,{wr:e})})),s=e.educationTimelineMain.map((function(e){return Object(i.jsx)(E,{er:e})}));return Object(i.jsx)(n.a.Fragment,{children:Object(i.jsx)("section",{id:"resume",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"work-section",children:[Object(i.jsx)("h2",{children:"Work Experience"}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mx-auto",children:Object(i.jsx)("ul",{className:"timeline timeline-split",children:t})})})]}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"education-section",children:[Object(i.jsx)("h2",{children:"Education"}),Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 mx-auto",children:Object(i.jsx)("ul",{className:"timeline timeline-centered",children:s})})})]})]})})})},S=[{id:0,title:"Visit Bravecto",name:"Bravecto",image:s.p+"static/media/bravecto.257830c4.png",link:"https://us.bravecto.com/"},{id:1,title:"Visit Homeagain",name:"Homeagain",image:s.p+"static/media/homeagain.df2c7350.jpg",link:"https://www.homeagain.com/"},{id:2,title:"Visit DogFlu",name:"DogFlu",image:s.p+"static/media/dogflu-old.3fbb87e1.png",link:"https://www.dogflu.com/"},{id:3,title:"Visit Tri-Heart",name:"Tri-Heart",image:s.p+"static/media/tri-heart.c88c0f94.jpg",link:"https://www.tri-heart.com/"},{id:4,title:"Visit Broadway.org",name:"Broadway.org",image:s.p+"static/media/broadway-league.3c4a69e1.png",link:"https://www.broadway.org/"},{id:5,title:"Visit The Arc Westchester New York",name:"The Arc Westchester New York",image:s.p+"static/media/arcwestchester.c1ba7584.png",link:"https://arcwestchester.org/"},{id:6,title:"Visit Essentials PetCare",name:"Essentials PetCare",image:s.p+"static/media/essentialspetcare.3e91786c.png",link:"https://essentialspetcare.com/"},{id:7,title:"Visit Caring Professionals, Inc. ",name:"Caring Professionals, Inc. ",image:s.p+"static/media/caringprofessionals.903bad08.png",link:"https://www.caringprofessionals.com/"},{id:8,title:"Visit Dana Foundation ",name:"Dana Foundation ",image:s.p+"static/media/dana-foundation.4ebac4dd.png",link:"https://www.dana.org/"}],H=[{id:0,company:"Flightpath",title:"Digital Production Assoicate",years:"June 2016 to March 2020",text:["Plan, develop, and administer website functionality tests to detect and diagnose errors and bugs using client specs, design specs and wireframes","Apply a user perspective to ensure the website is UX friendly","Cross-browser & cross-device testing","Data-Entry","Webiste Maintance on Wordpress and Umbraco platforms","Launching websites"]},{id:1,company:"Flightpath",title:"QA Intern",years:"April 2016 to May 2016",text:["Cross-browser & cross-device testing on websites and emails","Data Entry"]}],P=[{id:0,academy:"NuCamp Coding Bootcamp",duration:"2020-2021",location:"Online/Sacramento",major:"Full Stack Web and Mobile App Development Course"},{id:1,academy:"General Assembly",duration:"2018",location:"New York",major:"Front-End Development Course"},{id:2,academy:"City University of New York, Hunter College",duration:"2011-2016",location:"New York",major:"Bachelor's in Computer Science"}],V=function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(e){var i;return Object(l.a)(this,s),(i=t.call(this,e)).state={projects:S,work:H,education:P},i}return Object(o.a)(s,[{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{}),Object(i.jsx)(I,{projectCardsMain:this.state.projects}),Object(i.jsx)(B,{workTimelineMain:this.state.work,educationTimelineMain:this.state.education}),Object(i.jsx)(f,{})]})}}]),s}(a.Component),W=s(18),L=(s(48),function(e){Object(d.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(i.jsx)(W.BrowserRouter,{children:Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(V,{})})})}}]),s}(a.Component)),U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),i(e),a(e),n(e),c(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),U()}},[[49,1,2]]]);
//# sourceMappingURL=main.3829f47f.chunk.js.map