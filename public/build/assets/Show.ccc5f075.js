import{_ as c}from"./AppLayout.60640269.js";import p from"./DeleteUserForm.529f321f.js";import l from"./LogoutOtherBrowserSessionsForm.90d2a4b0.js";import{S as s}from"./SectionBorder.e26a9953.js";import f from"./TwoFactorAuthenticationForm.f8b213f2.js";import u from"./UpdatePasswordForm.8de7981f.js";import _ from"./UpdateProfileInformationForm.0eb62f26.js";import{o,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.90854336.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./DialogModal.851e35ba.js";import"./SectionTitle.4e97fc38.js";import"./DangerButton.5c0b5ebd.js";import"./TextInput.2a2a049e.js";import"./SecondaryButton.3e5ad1d6.js";import"./ActionMessage.f7c490b6.js";import"./PrimaryButton.5b1e412b.js";import"./InputLabel.c663edc2.js";import"./FormSection.807bcf0f.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};