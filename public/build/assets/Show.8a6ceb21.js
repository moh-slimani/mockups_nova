import{_ as c}from"./AppLayout.1badcbfa.js";import p from"./DeleteUserForm.3adceb6f.js";import l from"./LogoutOtherBrowserSessionsForm.2d9abff9.js";import{S as s}from"./SectionBorder.382fd76c.js";import f from"./TwoFactorAuthenticationForm.049e5420.js";import u from"./UpdatePasswordForm.a0a7b958.js";import _ from"./UpdateProfileInformationForm.dc8e8dc4.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.bc3edb2d.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.75c166a5.js";import"./SectionTitle.8f5fe162.js";import"./DangerButton.86750c2a.js";import"./TextInput.b19a66a7.js";import"./SecondaryButton.d28b3cac.js";import"./ActionMessage.c8f8996e.js";import"./PrimaryButton.189052f5.js";import"./InputLabel.25680ca7.js";import"./FormSection.ac1f6196.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};