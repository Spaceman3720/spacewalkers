(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{4305:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terms",function(){return i(9382)}])},8418:function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var r,o=(r=i(7294))&&r.__esModule?r:{default:r},a=i(6273),s=i(387),l=i(7190);var c={};function h(e,t,i,n){if(e&&a.isLocalURL(t)){e.prefetch(t,i,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+i+(r?"%"+r:"")]=!0}}var d=function(e){var t,i=!1!==e.prefetch,r=s.useRouter(),d=o.default.useMemo((function(){var t=n(a.resolveHref(r,e.href,!0),2),i=t[0],o=t[1];return{href:i,as:e.as?a.resolveHref(r,e.as):o||i}}),[r,e.href,e.as]),u=d.href,f=d.as,p=e.children,y=e.replace,m=e.shallow,g=e.scroll,T=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var w=(t=o.default.Children.only(p))&&"object"===typeof t&&t.ref,v=n(l.useIntersection({rootMargin:"200px"}),2),b=v[0],A=v[1],E=o.default.useCallback((function(e){b(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,b]);o.default.useEffect((function(){var e=A&&i&&a.isLocalURL(u),t="undefined"!==typeof T?T:r&&r.locale,n=c[u+"%"+f+(t?"%"+t:"")];e&&!n&&h(r,u,f,{locale:t})}),[f,u,A,T,i,r]);var C={ref:E,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,i,n,r,o,s,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(i))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[r?"replace":"push"](i,n,{shallow:o,locale:l,scroll:s}))}(e,r,u,f,y,m,g,T)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(u)&&h(r,u,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof T?T:r&&r.locale,I=r&&r.isLocaleDomain&&a.getDomainLocale(f,N,r&&r.locales,r&&r.domainLocales);C.href=I||a.addBasePath(a.addLocale(f,N,r&&r.defaultLocale))}return o.default.cloneElement(t,C)};t.default=d},7190:function(e,t,i){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,r=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!a,l=r.useRef(),c=n(r.useState(!1),2),h=c[0],d=c[1],u=r.useCallback((function(e){l.current&&(l.current(),l.current=void 0),i||h||e&&e.tagName&&(l.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=s.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return s.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,o=n.observer,a=n.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[i,t,h]);return r.useEffect((function(){if(!a&&!h){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[h]),[u,h]};var r=i(7294),o=i(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map},1415:function(e,t,i){"use strict";var n=i(5893),r=i(9008);t.Z=function(e){var t=e.children;return(0,n.jsxs)("main",{className:"font-fatfrank flex min-h-screen flex-col",children:[(0,n.jsxs)(r.default,{children:[(0,n.jsx)("title",{children:"space walkers"}),(0,n.jsx)("meta",{name:"description",content:"walking on the moon!"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.png"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"/apple-touch-icon.png"}),(0,n.jsx)("meta",{name:"twitter:title",content:"space walkers"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:site",content:"@InvsbleFriends"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@MotionMarkus"}),(0,n.jsx)("meta",{property:"og:title",content:"space walkers"}),(0,n.jsx)("meta",{property:"og:description",content:"Dropping April 2022. walking on the moon!"}),(0,n.jsx)("meta",{property:"og:image",content:"https://invisiblefriends.io/IF_open-graph.png"})]}),t]})}},9382:function(e,t,i){"use strict";i.r(t);var n=i(5893),r=i(1415),o=i(1664);t.default=function(){return(0,n.jsxs)(r.Z,{children:[(0,n.jsx)("header",{className:"my-6 flex flex-1 justify-center md:my-12",children:(0,n.jsx)(o.default,{href:"/",children:(0,n.jsxs)("a",{className:"flex items-center space-x-4 rounded-full border px-5 py-2 text-yellow-200",children:[(0,n.jsx)("img",{src:"/handshake.svg",className:"w-8",alt:"Handshake"}),(0,n.jsx)("span",{children:"space walkers"})]})})}),(0,n.jsx)("div",{className:"p-4",children:(0,n.jsxs)("article",{className:"prose prose-invis mx-auto md:prose-lg md:my-16",children:[(0,n.jsx)("h1",{children:"space walkers Terms and Conditions"}),(0,n.jsx)("p",{children:"Last Updated: February 21, 2022"}),(0,n.jsx)("p",{children:(0,n.jsx)("strong",{children:'These terms and conditions ("Terms & Conditions") govern your use of the Invisiblefriends.io website, including your purchase of any space walkers NFTs; by using this website or attempting to purchase an space walkers NFT, you accept these Terms & Conditions in full. If you disagree with these Terms & Conditions or any part of these Terms & Conditions, you must not use the invisiblefriends.io website or attempt to purchase any space walkers NFT.'})}),(0,n.jsx)("h2",{children:"1. Definitions"}),(0,n.jsx)("p",{children:"\u201cArt\u201d means any art, designs, drawings, traits, layers, and other design elements that may be associated with a Licensed NFT that you own."}),(0,n.jsx)("p",{children:"\u201cContent\u201d means text, images, audio material, video material, audio-visual material, or other forms of media."}),(0,n.jsx)("p",{children:"\u201cLicensed NFT\u201d Means a non-fungible token that you Own and was originally minted on this Site. \u201cNFT\u201d means any blockchain-tracked, non-fungible token."}),(0,n.jsx)("p",{children:"\u201cNFT Trading Platform\u201d means a secure marketplace where NFTs are sold, transferred, and recorded on the applicable blockchain and such transactions can be proven by the applicable blockchain."}),(0,n.jsx)("p",{children:"\u201cOwn\u201d or \u201cOwnership\u201d means, with respect to a Licensed NFT, a Licensed NFT that you have purchased through the Website or otherwise rightfully acquired from a legitimate source, where proof of purchase was recorded on the applicable blockchain and ownership of the Licensed NFT can be proven."}),(0,n.jsx)("p",{children:"\u201cOwner\u201d means someone who has rightful and legal Ownership of a Licensed NFT."}),(0,n.jsx)("h2",{children:"2. Your Acceptance"}),(0,n.jsx)("p",{children:'These Terms & Conditions constitute an agreement ("Agreement") between Random Character Collective, LLC ("RCC"), the owner and operator of the space walkers website, https://invisiblefriends.io (the \u201cSite\u201d or \u201cWebsite\u201d), and you (\u201cyou\u201d, \u201cyour\u201d or \u201cuser(s)\u201d), a user of the Site.'}),(0,n.jsx)("p",{children:"Throughout this Agreement, the words \u201cRCC,\u201d \u201cus,\u201d \u201cwe,\u201d and \u201cour,\u201d refer to our company, Random Character Collective, LLC. \xa0\xa0\xa0\xa0"}),(0,n.jsx)("p",{children:"BY ACCESSING THIS WEBSITE, YOU AGREE TO AND ACCEPT THESE TERMS AND CONDITIONS IN FULL AND WITHOUT RESERVATION. IF YOU DISAGREE WITH THESE TERMS & CONDITIONS, YOU MAY NOT USE THIS WEBSITE OR ATTEMPT TO PURCHASE ANY space walkers NFTS."}),(0,n.jsx)("p",{children:"We may amend this Agreement at any time so please come back and review these Terms & Conditions often."}),(0,n.jsx)("h2",{children:"3. RCC Ownership"}),(0,n.jsx)("p",{children:'Unless otherwise stated, RCC and/or its licensors and affiliates own the intellectual property rights published on this website, including all text, data, graphics, photographs, images, audio, video, trademarks, service marks, trade names and other information, visual or other digital material, software (including source and object codes) and all other content or any description available on the Site or available via a link from Site to a page created by RCC on another website (collectively, the "RCC Content"). The RCC Content is the sole property of RCC and/or its licensors, affiliates, or third-party service providers.'}),(0,n.jsx)("p",{children:"You acknowledge and agree that RCC and/or its licensors and affiliates own all legal rights, title, interest in the Art associated with any Licensed NFTs, and all intellectual property rights, including but not limited to, trademark and copyright rights, therein. Any rights provided to you upon purchase or ownership of a Licensed NFT are limited to those expressly stated herein. RCC reserves all rights and ownership to the Licensed NFTs and Art not specifically granted to the User in this Agreement."}),(0,n.jsx)("h2",{children:"4. Purchase"}),(0,n.jsx)("p",{children:"Any payments of financial transactions that you conduct or engage in through the Site are final. You acknowledge and understand that the Site cannot and will not reverse any payments or transactions. All purchases of Licensed NFTs, as well as any associated charges, are non-refundable."}),(0,n.jsx)("p",{children:"You shall be responsible for all applicable taxes including any sales or compensating use tax or equivalent tax wherever such tax may arise."}),(0,n.jsx)("p",{children:"The user accepts and acknowledges that RCC and its Affiliates will not be responsible for any communication failures, disruptions, distortions, delays, or any other errors that may arise when you attempt to purchase any Licensed NFTS."}),(0,n.jsx)("h2",{children:"5. User Ownership"}),(0,n.jsx)("p",{children:"Upon you assuming Ownership of a Licensed NFT and accepting the Terms and Conditions of this Agreement, RCC shall grant you a non-exclusive, worldwide, royalty-free license to 1) use, display, or otherwise enjoy the Art of your Licensed NFT for your own personal use; 2) commercialize your Licensed NFT by producing and selling physical merchandise that portrays the Licensed NFT\u2019s underlying Art in its entirety; 3) sell or transfer your Licensed NFTs to another party pursuant to Section 7 of this Agreement; and 4) use your Licensed NFT as part of a third-party website or application which permits the inclusion, involvement, and/or participation for your Licensed NFTs, provided that the website or application cryptographically permits and verifies each NFT owner\u2019s rights and ownership to display the Art and the website or application ensures only the actual owner can display the Art."}),(0,n.jsx)("p",{children:"RCC may provide you, the Owner of a Licensed NFT, a cropped version of the character portrayed in the Licensed NFT (\u201cLicensed NFT Crop\u201d). In the event that you are provided a Licensed NFT Crop, RCC grants you a non-exclusive, worldwide, royalty-free license to use, display, or otherwise enjoy the Licensed NFT Crop solely for your own personal use and not for any commercial use of any kind."}),(0,n.jsx)("p",{children:"You understand and agree that these rights are licensed solely to the rightful and legal Owner of the Licensed NFT. Your licensed rights to the Licensed NFT will terminate upon the rightful and legal sale or transfer of your Licensed NFT in accordance with Sections 7 and 8 of this Agreement and the new Owner, upon their acceptance of the Terms and Conditions of this Agreement, shall receive these licensed rights."}),(0,n.jsx)("h2",{children:"6. Restrictions to Use"}),(0,n.jsx)("p",{children:"You understand and agree that any physical merchandise that you produce must incorporate every element and trait of your Licensed NFT in full. The individual layers and traits of the Licensed NFTs are not owned by you and are the sole property of RCC and/or its licensors and affiliates. Such commercialization rights are limited to the Licensed NFTs that you own, and those rights do not extend to or include the Licensed NFT Crops that RCC may provide to you."}),(0,n.jsx)("p",{children:"You further understand and agree that this license does not permit the ability to create any digital merchandise. The creation and minting of any new NFTs which are derivatives of your Licensed NFTs are expressly prohibited."}),(0,n.jsx)("p",{children:"You understand and acknowledge that you may not, nor permit any third party to do or attempt to do the foregoing without the express prior written consent from RCC; (1) modify the Art in your Licensed NFT or any applicable Licensed NFT Crop in any way, including, without limitation, the shapes, designs, drawings, attributes, color schemes, or design elements of the Licensed NFT; (2) produce any merchandise in connection with your Licensed NFT that depicts lewd behavior, illegality, hatred, intolerance, cruelty, vulgarity, pornographic or other \u201cadult-only\u201d material, discrimination, or otherwise harmful material to the Art and space walkers\u2019 Brand; (3) or attempt to trademark, copyright, or otherwise attempt to acquire additional intellectual property rights in your Licensed NFT or any applicable Licensed NFT Crop."}),(0,n.jsx)("h2",{children:"7. Transfer"}),(0,n.jsx)("p",{children:"You have the limited right to transfer or sell your Licensed NFTs on an NFT Trading Platform, provided that the transferee or purchaser understands and accepts the terms of this Agreement and the terms of the NFT trading platform applicable Terms & Conditions and that prior to the transfer, you have not breached this Agreement or the Terms & Conditions of the NFT Trading Platform."}),(0,n.jsx)("p",{children:"RCC is not responsible for any transactions between you and a third party, including using any NFT Trading Platform to transfer your Licensed NFTs. RCC shall have no responsibilities or liability with respect to any transfer you enact on any of these NFT Trading Platforms."}),(0,n.jsx)("h2",{children:"8. Termination of License."}),(0,n.jsx)("p",{children:"The licensed rights granted to you in Section 5 of this Agreement shall automatically terminate if you perform any of the following actions: 1) you sell, trade, donate, or otherwise transfer your Licensed NFT in any manner; (2) you breach any terms of this Agreement or any Terms & Conditions for the designated NFT Trading Platform; or (3) you engage in or initiate any legal actions against RCC and/or any of their affiliates, and each of their respective officers, directors, members, affiliates, agents, or employees."}),(0,n.jsx)("p",{children:"Upon termination of your licensed rights, you must immediately cease and desist all activities and rights granted to you from Section 5. This includes ceasing all activities involving the Licensed NFT for your own personal use and creating or selling physical merchandise that incorporates the Art of the Licensed NFT."}),(0,n.jsx)("h2",{children:"9. Assumption of Risk"}),(0,n.jsx)("p",{children:"You understand and agree that the Licensed NFTs are made solely for entertainment purposes only. You agree and understand that that: (1) the market and prices for a blockchain asset are extremely volatile and subjective and collectible blockchain assets, such as the Licensed NFTs, have no inherent or intrinsic value, and fluctuations in the price of such blockchain assets could materially and adversely affect the price and value of your Licensed NFTs; (2) there are risks involved with using internet-based currency and asset, including, but not limited to, risk of hardware, software, internet connection failure, risk of malicious software, and risk that unauthorized parties may gain access to your personal information including such information and assets contained in your digital wallet or elsewhere; (3) internet-based currency and assets are not currently regulated by any regulatory regimes, and new regulations or policies that may materially affect the value of any Licensed NFTs; (4) there is an inherent risk that you may lose access due to loss of private keys, custodial error, or even purchaser error; (5) there are risks related to taxation; and (6) RCC does not make any guarantees or representations about the availability of the Licensed NFTs or the art or that they will host the Licensed NFTs or the Art in any specific location for any specific period of time."}),(0,n.jsx)("p",{children:"You agree that you have received sufficient information to make an informed decision regarding the decision to purchase or otherwise obtain the Licensed NFTs and that you understand and agree that you are solely responsible for determining the value, nature, and appropriateness of the above risks for yourself."}),(0,n.jsx)("h2",{children:"10. Limitation of Liability"}),(0,n.jsx)("p",{children:"ALL LICENSED NFTS ARE PROVIDED \u201cAS IS\u201d AND \u201cAS AVAILABLE\u201d WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED. RCC AND ITS AFFILIATES HEREBY DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL RCC BE LIABLE TO YOU FOR ANY INDIRECT, EXTRAORDINARY, EXEMPLARY, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF DATA, GOODWILL, WORK STOPPAGE, DIMINUTION OF VALUE OR ANY OTHER INTANGIBLE LOSS, TECHNOLOGY FAILURE, OR MALFUNCTION, REVENUE, PROFITS, USE OR OTHER ECONOMIC ADVANTAGE RELATED TO ANY LICENSED NFT OR OTHERWISE) HOWEVER ARISING, EVEN IF RCC KNOWS THERE IS A POSSIBILITY OF SUCH DAMAGE."}),(0,n.jsx)("h2",{children:"11. Release"}),(0,n.jsx)("p",{children:'IF YOU ARE A RESIDENT OF A JURISDICTION THAT REQUIRES A SPECIFIC STATEMENT REGARDING RELEASE THEN THE FOLLOWING APPLIES.\xa0 FOR EXAMPLE, CALIFORNIA RESIDENTS MUST, AS A CONDITION OF THIS AGREEMENT, WAIVE THE APPLICABILITY OF CALIFORNIA CIVIL CODE SECTION 1542, WHICH STATES, \u201cA GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR."\xa0 YOU HEREBY WAIVE THIS SECTION OF THE CALIFORNIA CIVIL CODE.\xa0 YOU HEREBY WAIVE ANY SIMILAR PROVISION IN LAW, REGULATION, OR CODE THAT HAS THE SAME INTENT OR EFFECT AS THE AFOREMENTIONED RELEASE.\xa0 YOU RELEASE US FROM ANY LIABILITY RELATING TO OUR SITE OR RCC CONTENT, AND YOU RELEASE US, OUR DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AND AGENTS FROM ANY CLAIMS AND DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH ANY CLAIM YOU HAVE AGAINST US. THIS RELEASE DOES NOT APPLY TO NEW JERSEY USERS.'}),(0,n.jsx)("p",{children:"If you are a resident of a jurisdiction that requires a specific statement regarding release, then the following applies. For example, California residents must, as a condition of this Agreement, waive the applicability of California Civil Code Section 1542 which states, \u201ca general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor.\u201d You hereby waive this section of the California Civil Code. You hereby waive any similar provision in law, regulation, or code that has the same intent or effect as the aforementioned release. You release us from any liability relating to our site or RCC Content, and you release us, our directors, officers, employees, affiliates, and agents from any claims and damages, known and unknown, arising out of or in any way connected with any claim you have against us. This release does not apply to New Jersey users."}),(0,n.jsx)("h2",{children:"12. Digital Millenium Copyright Act of 1988"}),(0,n.jsx)("p",{children:"The Digital Millennium Copyright Act of 1998 (the \u201cDMCA\u201d) provides recourse for copyright owners who believe that material appearing on the Internet infringes their rights under the U.S. copyright law. If you believe in good faith that materials hosted by RCC infringe your copyright, you, or your agent may send to RCC a notice requesting that the material be removed or access to it be blocked. Any notification by a copyright owner or a person authorized to act on its behalf that fails to comply with requirements of the DMCA shall not be considered sufficient notice and shall not be deemed to confer upon RCC actual knowledge of facts or circumstances from which infringing material or acts are evident. If you believe in good faith that a notice of copyright infringement has been wrongly filed against you, the DMCA permits you to send to RCC a counter-notice. All notices and counter-notices must meet the then-current statutory requirements imposed by the DMCA; see http://www.loc.gov/copyright for details. RCC\u2019s Copyright Agent for notice of claims of copyright infringement or counter notices can be reached as follows: through a direct message to RCC\u2019s Twitter at @RNDMCHARACTERS."}),(0,n.jsx)("h2",{children:"13. Site Availability and Modification"}),(0,n.jsx)("p",{children:"Although we attempt to provide continuous Site availability to you, we do not guarantee that the Site will always be available, work, or be accessible at any particular time.\xa0We reserve the right to alter, modify, update, or remove portions of our Site at any time.\xa0 We may conduct such modifications to our Site for security reasons, intellectual property, legal reasons, or various other reasons at our discretion; however, nothing in this section obligates us to take measures to update the Site for security, legal, or other reasons."}),(0,n.jsx)("h2",{children:"14. Unauthorized Conduct"}),(0,n.jsx)("p",{children:"When accessing or using our Site, you are solely responsible for your actions, and you agree to abide by the following rules of conduct:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"You agree not to copy, distribute or disclose any part of the Site in any medium, including without limitation by any automated or non-automated \u201cscraping;\u201d"}),(0,n.jsx)("li",{children:"You agree not to attempt to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Site;"}),(0,n.jsx)("li",{children:"You agree not to use any robot, spider, crawler, scraper or other automated means or interface not provided by us to access the Site or to extract or export data collected through the Site;"}),(0,n.jsx)("li",{children:"You agree not to take any action that imposes, or may impose at our sole discretion, an unreasonable or disproportionately large load on our infrastructure;\xa0You agree that you will not hold RCC, any of its affiliates, or its third-party providers responsible for your use of the Site;"}),(0,n.jsx)("li",{children:"You agree not to violate any requirements, procedures, policies, or regulations of networks connected to RCC;"}),(0,n.jsx)("li",{children:"You agree not to interfere with or disrupt the Site;"}),(0,n.jsx)("li",{children:"You agree not to post anything contrary to our public image, goodwill, or reputation;"}),(0,n.jsx)("li",{children:"You agree to not violate any US federal laws, state laws, or local laws while using the Site; and"}),(0,n.jsx)("li",{children:"You agree not to use the Site in any way that is: misleading, unlawful, defamatory, obscene, invasive, threatening, harmful, or harassing."})]}),(0,n.jsx)("p",{children:"If you are discovered to be undertaking any of the aforementioned actions your privileges to use our Site may, at our discretion, be terminated or suspended.\xa0RCC reserves the right to suspend or terminate your access at any time without notice or explanation.\xa0"}),(0,n.jsx)("h2",{children:"15. Indemnity"}),(0,n.jsx)("p",{children:"You agree to defend, indemnify and hold harmless RCC, its officers, directors, employees, affiliates, third-parties, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from:\xa0"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"your use of any RCC Site;\xa0"}),(0,n.jsx)("li",{children:"your use of any RCC\u2019 affiliate services; "}),(0,n.jsx)("li",{children:"your violation of any term of this Agreement; or"}),(0,n.jsx)("li",{children:"arising out of any claim that you have breached any provision of these Terms & Conditions."})]}),(0,n.jsx)("p",{children:"This defense and indemnification obligation will survive this Agreement. You also agree that you have a duty to defend us against such claims and we may require you to pay for an attorney(s) of our choice in such cases.\xa0 You agree that this indemnity extends to requiring you to pay for our reasonable attorneys\u2019 fees, court costs, and disbursements.\xa0 In the event of a claim such as one described in this paragraph, we may elect to settle with the party/parties making the claim and you shall be liable for the damages as though we had proceeded with a trial."}),(0,n.jsx)("h2",{children:"16. Choice of Law & Venue"}),(0,n.jsx)("p",{children:"This Agreement and any action related to this Agreement shall be governed by the laws in force in the State of California and US Federal law. Foreign laws do not apply. The offer and acceptance of this contract are deemed to have occurred in the State of California."}),(0,n.jsx)("h2",{children:"17. Forum"}),(0,n.jsxs)("p",{children:["By using this Site, you agree that: (1) any claim, dispute, or controversy you may have against us, RCC, or the Site arising out of, relating to, or connected in any way with this Agreement or any Licensed NFTs purchased shall be resolved exclusively by final and binding arbitration administered by the American Arbitration Association (\u201cAAA\u201d) and conducted before a single arbitrator pursuant to the applicable Consumer Rules and Procedures established by AAA (\u201cRules and Procedures\u201d); (2) the claim or dispute must be brought within one (1) year of the first date of the event giving rise to such action (does not apply to New Jersey users) and the arbitration shall be held in Los Angeles, California or at such other location as may be mutually agreed upon by you and RCC; (3) the arbitrator shall apply California law consistent with the Federal Arbitration Act and applicable statutes of limitations, and shall honor claims of privilege recognized at law; (4) there shall be no authority for any claims to be arbitrated on a class or representative basis; arbitration can decide only your and/or RCC\u2019 individual claims; and the arbitrator may not consolidate or join the claims of other persons or parties who may be similarly situated (this does not apply to New Jersey users); (5) both parties will bear their own costs of representation and filing for the dispute; (6) where possible and allowed for under the AAA Rules and Procedures both parties shall be entitled to appear electronically or telephonically for all proceedings;\xa0 and (7) with the exception of subpart (4) above, if any part of this arbitration provision is deemed to be invalid, unenforceable or illegal, or otherwise conflicts with the Rules and Procedures established by AAA, then the balance of this arbitration provision shall remain in effect and shall be construed in accordance with its terms as if the invalid, unenforceable, illegal or conflicting provision were not contained herein. If, however, subpart (4) is found to be invalid, unenforceable, or illegal, then the entirety of this Arbitration Provision shall be null and void, and neither you nor RCC shall be entitled to arbitrate their dispute. For more information on AAA and its Rules and Procedures, users may visit the AAA website at",(0,n.jsx)("a",{href:"http://www.adr.org/",children:" http://www.adr.org"}),".\xa0 In the event that any portion of this arbitration provision is found to be unenforceable or void, both parties agree to settle any disputes arising out of this Agreement in a court of competent jurisdiction located in or near Los Angeles, California."]}),(0,n.jsx)("h2",{children:"18. Class Action Waiver"}),(0,n.jsx)("p",{children:"You and RCC agree that any proceedings to resolve or litigate any dispute whether through a court of law or arbitration shall be solely conducted on an individual basis.\xa0 You agree that you will not seek to have any dispute heard as a class action, representative action, collective action, or private attorney general action."}),(0,n.jsx)("h2",{children:"19. Severability"}),(0,n.jsx)("p",{children:"In the event that a provision of this Agreement is found to be unlawful, conflicting with another provision of the Agreement, or otherwise unenforceable, the Agreement will remain in force as though it had been entered into without that unenforceable provision being included in it."}),(0,n.jsx)("p",{children:"If two or more provisions of this Agreement or any other agreement you may have with RCC are deemed to conflict with each other\u2019s operation, you agree that RCC shall have the sole right to elect which provision remains in force.\xa0\xa0"}),(0,n.jsx)("h2",{children:"20. Waiver"}),(0,n.jsx)("p",{children:"We reserve all rights permitted to us under this Agreement as well as under the provisions of any applicable law.\xa0 Our non-enforcement of any particular provision or provisions of this Agreement or any applicable law should not be construed as our waiver of the right to enforce that same provision under the same or different circumstances at any time in the future."}),(0,n.jsx)("h2",{children:"21. No Joint Venture"}),(0,n.jsx)("p",{children:"This Agreement shall not constitute a joint venture, partnership, employment, or agency relationship between the parties."}),(0,n.jsx)("h2",{children:"22. Survival"}),(0,n.jsx)("p",{children:"All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.\xa0 You agree that we are not required to provide you with access to our Site and may terminate our Site or your access to the Site at any time and for any reason."}),(0,n.jsx)("h2",{children:"23. Age"}),(0,n.jsx)("p",{children:"All users who access the Site or buy Licensed NFTs must be 18 years of age or older."}),(0,n.jsx)("h2",{children:"24. Amendments"}),(0,n.jsx)("p",{children:"We may amend this Agreement from time to time.\xa0 When we amend this Agreement, we will update this page and indicate the date that it was last modified, or we may email you.\xa0 You may refuse to agree to the amendments, but if you do, you must immediately cease using our Site.\xa0Amended Terms & Conditions will apply to the use of this Site from the date of publication of the amended Terms & Conditions of this Site."})]})})]})}},9008:function(e,t,i){e.exports=i(5443)},1664:function(e,t,i){e.exports=i(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=4305,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
