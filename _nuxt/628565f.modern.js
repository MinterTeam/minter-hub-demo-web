(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{307:function(t,e,n){"use strict";(function(t){n(18),n(539),n(50),n(40);var r,o=n(7),l=n(188),d=n.n(l),c=n(540),m=n.n(c),y=n(625),v=n.n(y),_=n(647),h=n.n(_),f=n(331),w=n.n(f),T=n(369),C=n(370),x=n.n(C),$=n(800),E=n.n($),k=n(87),A=n.n(k),M=n(333),S=n(334),N=(n(48),n(796)),V=n(120),B=n(368),I=n(804),L=new h.a(new h.a.providers.HttpProvider("http://138.68.24.68:8545/")),H="0x8c2b6949590bebe6bc1124b670e58da85b081b2e",O=new L.eth.Contract(N.a,H),P="0x2bb8221b4df28ee45d159c55c50bcebf18dc7a40",j=new L.eth.Contract(N.b,P),U=(w.a.forCustomChain("mainnet",{name:"my-network",networkId:3,chainId:3},"petersburg"),A()({type:"validAmount"},t=>parseFloat(t)>=0));e.a={TX_APPROVE:"approve",TX_TRANSFER:"transfer",components:{QrcodeVue:M.a,TxListItem:I.a},directives:{autosize:S.a,checkEmpty:B.a},mixins:[T.validationMixin],data(){var t=window.localStorage.getItem("transactionList");return{ethAddress:"",balances:{eth:"",hub:""},allowance:{value:null,promiseStatus:null,promise:null},form:{amount:"",address:""},transactionList:(t=t?JSON.parse(t):[])||[],isFormSending:!1,serverError:""}},validations(){return{form:{address:{required:x(),validAddress:address=>/^Mx[0-9a-fA-F]{40}$/.test(address)},amount:{required:x(),validAmount:U,maxValue:E()(this.balances.hub||0)}}}},computed:{isConnected(){return!!this.ethAddress},isHubApproved(){if(!this.allowance.value)return!1;var t=new d.a(this.allowance.value,10),e=new d.a(L.utils.toWei(this.form.amount||"0","ether").toString(10),10);return t.gt(new d.a(0))&&t.gte(e)}},mounted(){this.initConnector(),r.connected&&(this.ethAddress=r.accounts[0],this.updateBalance(),this.getAllowance()),setInterval(this.updateBalance,5e3),setInterval(this.getAllowance,5e3)},methods:{connectEth(){r||this.initConnector(),r.createSession()},reconnectEth(){r.killSession().then(()=>{this.$nextTick(()=>{this.connectEth()})})},initConnector(){r=new m.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:v.a}),window.connector=r,console.log({connector:r}),r.on("connect",this.handleEvent),r.on("session_update",this.handleEvent),r.on("disconnect",this.handleEvent)},handleEvent(t,e){if(t)throw t;var{accounts:n,chainId:o}=e.params[0];console.log(e.event,e.params,n,o),n?(this.ethAddress=n[0],this.updateBalance(),this.getAllowance()):(this.ethAddress="",r=null)},updateBalance(){this.isConnected&&(L.eth.getBalance(this.ethAddress).then(t=>{this.balances.eth=L.utils.fromWei(t,"ether")}).catch(console.error),O.methods.balanceOf(this.ethAddress).call().then(t=>{this.balances.hub=L.utils.fromWei(t,"ether")}).catch(console.error))},submit(){var t;if(!this.$v.$invalid)return this.isFormSending=!0,this.serverError="",this.getIsHubApproved().then(e=>(t=!e)?this.sendApproveTx():this.sendHubTx()).then(e=>{if(console.log(e),this.transactionList.push({hash:e,type:t?"approve":"transfer",timestamp:(new Date).toISOString()}),window.localStorage.setItem("transactionList",JSON.stringify(this.transactionList)),t)return this.getAllowance();this.$v.$reset(),this.form.address="",this.form.amount=""}).catch(t=>{this.serverError=Object(V.a)(t),console.error(t)}).finally(()=>{this.isFormSending=!1});this.$v.$touch()},getAllowance(){if(this.isConnected&&"pending"!==this.allowance.promiseStatus)return this.allowance.promiseStatus="pending",this.allowance.promise=O.methods.allowance(this.ethAddress,P).call().then(t=>{this.allowance.value=t,this.allowance.promiseStatus="finished"}).catch(t=>{console.log(t),this.allowance.value=null,this.allowance.promiseStatus="rejected",this.serverError="Can't get allowance"}),this.allowance.promise},getIsHubApproved(){return"finished"===this.allowance.promiseStatus?Promise.resolve(this.isHubApproved):"pending"===this.allowance.promiseStatus?this.allowance.promise.then(()=>new Promise(t=>{this.$nextTick(()=>{t(this.isHubApproved)})})):"rejected"===this.allowance.promiseStatus?Promise.reject("Can't get allowance"):void 0},sendApproveTx(){var data=O.methods.approve(P,L.utils.toWei(this.form.amount,"ether")).encodeABI();return this.sendEthTx(H,data)},sendHubTx(){var address;address=t.concat([t.alloc(12),t.from(L.utils.hexToBytes(this.form.address.replace("Mx","0x")))]);var data=j.methods.sendToCosmos(H,address,L.utils.toWei(this.form.amount,"ether"),1).encodeABI();return this.sendEthTx(P,data)},sendEthTx(t,data){var e=this;return Object(o.a)((function*(){var n={from:e.ethAddress,to:t,data:data,value:"0x00",nonce:yield L.eth.getTransactionCount(e.ethAddress,"pending")};return console.log(n),r.sendTransaction(n)}))()}}}}).call(this,n(174).Buffer)},368:function(t,e,n){"use strict";function r(t){return"SELECT"===t.nodeName.toUpperCase()}function o(t){l(t.target)}function l(t){setTimeout(()=>{t.value.length?t.classList.add("is-not-empty"):t.classList.remove("is-not-empty")},0)}e.a={bind(t,e,n){l(t),r(t)?t.addEventListener("change",o):t.addEventListener("input",o),e.value&&t.addEventListener(e.value,o)},componentUpdated(t,e){l(t),e.oldValue!==e.value&&t.removeEventListener(e.oldValue,o),e.value&&t.addEventListener(e.value,o)},unbind(t,e){r(t)?t.removeEventListener("change",o):t.removeEventListener("input",o),e.value&&t.removeEventListener(e.value,o)}}},464:function(t,e){},465:function(t,e){},483:function(t,e){},485:function(t,e){},491:function(t,e){},493:function(t,e){},502:function(t,e){},504:function(t,e){},545:function(t,e){},588:function(t,e){},590:function(t,e){},597:function(t,e){},609:function(t,e){},612:function(t,e){},622:function(t,e){},655:function(t,e){},662:function(t,e){},679:function(t,e){},681:function(t,e){},696:function(t,e){},745:function(t,e){},752:function(t,e){},796:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],o=[{inputs:[{internalType:"bytes32",name:"_peggyId",type:"bytes32"},{internalType:"uint256",name:"_powerThreshold",type:"uint256"},{internalType:"address[]",name:"_validators",type:"address[]"},{internalType:"uint256[]",name:"_powers",type:"uint256[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_tokenContract",type:"address"},{indexed:!0,internalType:"address",name:"_sender",type:"address"},{indexed:!0,internalType:"bytes32",name:"_destination",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"_amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_eventNonce",type:"uint256"}],name:"SendToCosmosEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"_batchNonce",type:"uint256"},{indexed:!0,internalType:"address",name:"_token",type:"address"},{indexed:!1,internalType:"uint256",name:"_eventNonce",type:"uint256"}],name:"TransactionBatchExecutedEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"_newValsetNonce",type:"uint256"},{indexed:!1,internalType:"address[]",name:"_validators",type:"address[]"},{indexed:!1,internalType:"uint256[]",name:"_powers",type:"uint256[]"}],name:"ValsetUpdatedEvent",type:"event"},{inputs:[{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"},{internalType:"bytes32",name:"_theHash",type:"bytes32"},{internalType:"uint256",name:"_powerThreshold",type:"uint256"}],name:"checkValidatorSignatures",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_erc20Address",type:"address"}],name:"lastBatchNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_validators",type:"address[]"},{internalType:"uint256[]",name:"_powers",type:"uint256[]"},{internalType:"uint256",name:"_valsetNonce",type:"uint256"},{internalType:"bytes32",name:"_peggyId",type:"bytes32"}],name:"makeCheckpoint",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_tokenContract",type:"address"},{internalType:"bytes32",name:"_destination",type:"bytes32"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint8",name:"_type",type:"uint8"}],name:"sendToCosmos",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"state_lastBatchNonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_lastEventNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_lastValsetCheckpoint",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_lastValsetNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_peggyId",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_powerThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"},{internalType:"bytes32",name:"_theHash",type:"bytes32"},{internalType:"uint256",name:"_powerThreshold",type:"uint256"}],name:"testCheckValidatorSignatures",outputs:[],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address[]",name:"_validators",type:"address[]"},{internalType:"uint256[]",name:"_powers",type:"uint256[]"},{internalType:"uint256",name:"_valsetNonce",type:"uint256"},{internalType:"bytes32",name:"_peggyId",type:"bytes32"}],name:"testMakeCheckpoint",outputs:[],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address[]",name:"_newValidators",type:"address[]"},{internalType:"uint256[]",name:"_newPowers",type:"uint256[]"},{internalType:"uint256",name:"_newValsetNonce",type:"uint256"},{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint256",name:"_currentValsetNonce",type:"uint256"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"}],name:"updateValset",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_newValidators",type:"address[]"},{internalType:"uint256[]",name:"_newPowers",type:"uint256[]"},{internalType:"uint256",name:"_newValsetNonce",type:"uint256"},{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint256",name:"_currentValsetNonce",type:"uint256"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"},{internalType:"address[]",name:"_destinations",type:"address[]"},{internalType:"uint256[]",name:"_fees",type:"uint256[]"},{internalType:"uint256",name:"_batchNonce",type:"uint256"},{internalType:"address",name:"_tokenContract",type:"address"}],name:"updateValsetAndSubmitBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_theHash",type:"bytes32"},{internalType:"uint8",name:"_v",type:"uint8"},{internalType:"bytes32",name:"_r",type:"bytes32"},{internalType:"bytes32",name:"_s",type:"bytes32"}],name:"verifySig",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"}]},804:function(t,e,n){"use strict";n(50);var r=n(799),o=n(806),l=(n(797),n(805),n(451),n(48)),d=(n(129),0);var c=n(802);function m(t,e){"string"==typeof t&&(t=Object(r.a)(t));var n=new Date(Date.now()+d);t>n&&!e&&(t=n);var l=Object(o.a)(t,n,{roundingMethod:"round"});return!(!l||"Invalid Date"===l)&&l}function y(t){return function(t,pattern){"string"==typeof t&&(t=Object(r.a)(t));var time=Object(c.a)(t,pattern);return!(!time||"Invalid Date"===time)&&time}(t,"yyyy-MM-dd HH:mm:ss")}var v={props:{tx:{type:Object,required:!0}},computed:{timeDistance(){return m(this.tx.timestamp)},time(){return y(this.tx.timestamp)}},methods:{getEtherscanTxUrl:function(t){return l.b+"/tx/"+t},formatHash:t=>function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2?arguments[2]:void 0,r=e+"Mx".length-1;n=n||r+e;var o=(t=t.toString()).length>n;return o?t.substr(0,r)+"…"+t.substr(-e):t}(t,13)}},_=n(14),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview__transaction"},[n("div",{staticClass:"preview__transaction-row u-text-overflow"},[n("div",[n("a",{staticClass:"link--main",attrs:{href:t.getEtherscanTxUrl(t.tx.hash)}},[t._v(t._s(t.formatHash(t.tx.hash)))])]),t._v(" "),n("div")]),t._v(" "),n("div",{staticClass:"preview__transaction-row preview__transaction-meta"},[n("div",[t._v(t._s(t.timeDistance)+" ago ("+t._s(t.time)+")")]),t._v(" "),n("div",[t._v("\n                "+t._s(t.tx.type)+"\n")])])])}),[],!1,null,null,null);e.a=component.exports},812:function(t,e,n){"use strict";n.r(e);var r=n(369),o=n(370),l=n.n(o),d=n(333),c=n(334),m=n(801),y=n(223),v=n(48),_=n(368),h=v.e===v.d?0:212,f=v.e===v.d?void 0:"https://testnet.bip.to/",w={components:{QrcodeVue:d.a},directives:{autosize:c.a,checkEmpty:_.a},mixins:[r.validationMixin],data:()=>({form:{amount:"",address:""},linkToBip:""}),validations:()=>({form:{address:{required:l.a,validAddress:address=>/^0x[0-9a-fA-F]{40}$/.test(address)},amount:{required:l.a}}}),methods:{submit(){if(this.$v.$invalid)this.$v.$touch();else{var t={type:y.a.SEND,data:{to:"Mxb26bc23e5a72ea2033f70006751066602d3349fd",value:this.form.amount,coin:h},payload:this.form.address};this.$v.$reset(),this.form.address="",this.form.amount="",this.linkToBip=Object(m.a)(t,f)}}}},T=n(14),C=Object(T.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("form",{staticClass:"card__content card__content--small",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.address.$error}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:t.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{rows:"1",spellcheck:"false"},domProps:{value:t.form.address},on:{blur:[function(e){return t.$v.form.address.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("Deposit to address")])]),t._v(" "),t.$v.form.address.$error?t.$v.form.address.$dirty&&!t.$v.form.address.required?n("span",{staticClass:"form-field__error"},[t._v("Enter Ethereum address")]):t.$v.form.address.$dirty&&!t.$v.form.address.validAddress?n("span",{staticClass:"form-field__error"},[t._v("Invalid Ethereum address")]):t._e():n("span",{staticClass:"form-field__help"},[t._v("Ethereum address starting with 0x…")])]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto send__amount-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.amount.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.form.amount,expression:"form.amount",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},domProps:{value:t.form.amount},on:{blur:[function(e){return t.$v.form.amount.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("HUB amount")])]),t._v(" "),t.$v.form.amount.$dirty&&!t.$v.form.amount.required?n("span",{staticClass:"form-field__error"},[t._v("Enter amount")]):t._e()]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto"},[n("button",{staticClass:"button button--ghost-green send__submit-button",class:{"is-disabled":t.$v.$invalid}},[t._v("Show QR")])])])]),t._v(" "),t.linkToBip?n("div",{staticClass:"card__content card__content--gray u-text-center send__qr-card"},[n("div",{staticClass:"send__qr-wrap u-mb-10"},[n("QrcodeVue",{staticClass:"send__qr",attrs:{value:t.linkToBip,size:240,level:"L"}})],1),t._v("\n            Scan this QR with your Bip Wallet or\n            "),n("a",{staticClass:"link--default u-text-break",attrs:{href:t.linkToBip,target:"_blank"}},[t._v("follow the link")])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__content card__content--gray card__content--small u-h--uppercase"},[this._v("Minter → "),e("span",{staticClass:"u-text-orange"},[this._v("Ethereum")])])}],!1,null,null,null).exports,x=n(307).a,$={components:{MntToEth:C,EthToMnt:Object(T.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[t._m(0),t._v(" "),t.isConnected?t._e():n("div",{staticClass:"card__content card__content--small"},[n("div",{staticClass:"send__text u-mb-10"},[t._v("\n                  Connect your Ethereum wallet with\n                  "),n("img",{staticClass:"send__icon-wc",attrs:{alt:"",role:"presentation",src:t.BASE_URL_PREFIX+"/img/icon-walletconnect.png",srcset:t.BASE_URL_PREFIX+"/img/icon-walletconnect@2x.png 2x"}}),t._v("\n                  WalletConnect\n              ")]),t._v(" "),n("button",{staticClass:"button button--green",on:{click:t.connectEth}},[t._v("Connect")])]),t._v(" "),t.isConnected?n("form",{staticClass:"card__content card__content--small",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.address.$error}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:t.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{rows:"1",spellcheck:"false"},domProps:{value:t.form.address},on:{blur:[function(e){return t.$v.form.address.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("Deposit to address")])]),t._v(" "),t.$v.form.address.$error?t.$v.form.address.$dirty&&!t.$v.form.address.required?n("span",{staticClass:"form-field__error"},[t._v("Enter Minter address")]):t.$v.form.address.$dirty&&!t.$v.form.address.validAddress?n("span",{staticClass:"form-field__error"},[t._v("Invalid Minter address")]):t._e():n("span",{staticClass:"form-field__help"},[t._v("Minter address starting with Mx…")])]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto send__amount-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.amount.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.form.amount,expression:"form.amount",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},domProps:{value:t.form.amount},on:{blur:[function(e){return t.$v.form.amount.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("HUB amount")])]),t._v(" "),t.$v.form.amount.$dirty&&!t.$v.form.amount.required?n("span",{staticClass:"form-field__error"},[t._v("Enter amount")]):t._e()]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto"},[n("button",{staticClass:"button button--ghost-green send__submit-button",class:{"is-loading":t.isFormSending,"is-disabled":t.$v.$invalid}},[t.isHubApproved?n("span",{staticClass:"button__content"},[t._v("Send")]):n("span",{staticClass:"button__content"},[t._v("Approve")]),t._v(" "),n("svg",{staticClass:"loader loader--button",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40"}},[n("circle",{staticClass:"loader__path",attrs:{cx:"20",cy:"20",r:"11"}})])])]),t._v(" "),t.serverError?n("div",{staticClass:"u-cell form__error send__text"},[t._v("\n                      "+t._s(t.serverError)+"\n                  ")]):t._e()])]):t._e(),t._v(" "),t.isConnected?n("div",{staticClass:"card__content card__content--small send__text"},[t._v("\n              Wallet connected "),n("br"),t._v(" "),n("a",{staticClass:"link--default",attrs:{href:"https://ropsten.etherscan.io/address/"+t.ethAddress,target:"_blank"}},[t._v(t._s(t.ethAddress))]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"button button--ghost u-mt-10",on:{click:t.reconnectEth}},[t._v("Reconnect")])]):t._e()]),t._v(" "),t.transactionList.length?n("div",{staticClass:"card u-mt-15"},[n("div",{staticClass:"card__content card__content--gray card__content--small u-h--uppercase"},[t._v("Transactions")]),t._v(" "),t._l(t.transactionList,(function(t){return n("TxListItem",{key:t.hash,staticClass:"card__content card__content--mini",attrs:{tx:t}})}))],2):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__content card__content--gray card__content--small u-h--uppercase"},[this._v("Ethereum → "),e("span",{staticClass:"u-text-orange"},[this._v("Minter")])])}],!1,null,null,null).exports}},E=Object(T.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-section u-container"},[e("div",{staticClass:"u-grid u-grid--vertical-margin"},[e("div",{staticClass:"u-cell u-cell--medium--1-2"},[e("MntToEth")],1),this._v(" "),e("div",{staticClass:"u-cell u-cell--medium--1-2"},[e("EthToMnt")],1)])])}),[],!1,null,null,null);e.default=E.exports}}]);