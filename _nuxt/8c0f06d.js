(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{339:function(t,e,n){"use strict";(function(t){n(75),n(17),n(30),n(73),n(54),n(33),n(45);var r,o=n(8),l=n(217),c=n.n(l),d=n(575),m=n.n(d),y=n(660),v=n.n(y),_=n(682),f=n.n(_),h=n(363),w=n.n(h),T=n(401),C=n(402),x=n.n(C),$=n(834),E=n.n($),k=n(119),A=n.n(k),M=n(365),S=n(366),N=(n(115),n(831)),V=n(149),B=n(400),I=n(838),L=new f.a(new f.a.providers.HttpProvider("http://138.68.24.68:8545/")),H="0x8c2b6949590bebe6bc1124b670e58da85b081b2e",O=new L.eth.Contract(N.a,H),P="0x2bb8221b4df28ee45d159c55c50bcebf18dc7a40",j=new L.eth.Contract(N.b,P),U=(w.a.forCustomChain("mainnet",{name:"my-network",networkId:3,chainId:3},"petersburg"),A()({type:"validAmount"},(function(t){return parseFloat(t)>=0})));e.a={TX_APPROVE:"approve",TX_TRANSFER:"transfer",components:{QrcodeVue:M.a,TxListItem:I.a},directives:{autosize:S.a,checkEmpty:B.a},mixins:[T.validationMixin],data:function(){var t=window.localStorage.getItem("transactionList");return{ethAddress:"",balances:{eth:"",hub:""},allowance:{value:null,promiseStatus:null,promise:null},form:{amount:"",address:""},transactionList:(t=t?JSON.parse(t):[])||[],isFormSending:!1,serverError:""}},validations:function(){return{form:{address:{required:x.a,validAddress:function(address){return/^Mx[0-9a-fA-F]{40}$/.test(address)}},amount:{required:x.a,validAmount:U,maxValue:E()(this.balances.hub||0)}}}},computed:{isConnected:function(){return!!this.ethAddress},isHubApproved:function(){if(!this.allowance.value)return!1;var t=new c.a(this.allowance.value,10),e=new c.a(L.utils.toWei(this.form.amount||"0","ether").toString(10),10);return t.gt(new c.a(0))&&t.gte(e)}},mounted:function(){this.initConnector(),r.connected&&(this.ethAddress=r.accounts[0],this.updateBalance(),this.getAllowance()),setInterval(this.updateBalance,5e3),setInterval(this.getAllowance,5e3)},methods:{connectEth:function(){r||this.initConnector(),r.createSession()},reconnectEth:function(){var t=this;r.killSession().then((function(){t.$nextTick((function(){t.connectEth()}))}))},initConnector:function(){r=new m.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:v.a}),window.connector=r,console.log({connector:r}),r.on("connect",this.handleEvent),r.on("session_update",this.handleEvent),r.on("disconnect",this.handleEvent)},handleEvent:function(t,e){if(t)throw t;var n=e.params[0],o=n.accounts,l=n.chainId;console.log(e.event,e.params,o,l),o?(this.ethAddress=o[0],this.updateBalance(),this.getAllowance()):(this.ethAddress="",r=null)},updateBalance:function(){var t=this;this.isConnected&&(L.eth.getBalance(this.ethAddress).then((function(e){t.balances.eth=L.utils.fromWei(e,"ether")})).catch(console.error),O.methods.balanceOf(this.ethAddress).call().then((function(e){t.balances.hub=L.utils.fromWei(e,"ether")})).catch(console.error))},submit:function(){var t,e=this;if(!this.$v.$invalid)return this.isFormSending=!0,this.serverError="",this.getIsHubApproved().then((function(n){return(t=!n)?e.sendApproveTx():e.sendHubTx()})).then((function(n){if(console.log(n),e.transactionList.push({hash:n,type:t?"approve":"transfer",timestamp:(new Date).toISOString()}),window.localStorage.setItem("transactionList",JSON.stringify(e.transactionList)),t)return e.getAllowance();e.$v.$reset(),e.form.address="",e.form.amount=""})).catch((function(t){e.serverError=Object(V.a)(t),console.error(t)})).finally((function(){e.isFormSending=!1}));this.$v.$touch()},getAllowance:function(){var t=this;if(this.isConnected&&"pending"!==this.allowance.promiseStatus)return this.allowance.promiseStatus="pending",this.allowance.promise=O.methods.allowance(this.ethAddress,P).call().then((function(e){t.allowance.value=e,t.allowance.promiseStatus="finished"})).catch((function(e){console.log(e),t.allowance.value=null,t.allowance.promiseStatus="rejected",t.serverError="Can't get allowance"})),this.allowance.promise},getIsHubApproved:function(){var t=this;return"finished"===this.allowance.promiseStatus?Promise.resolve(this.isHubApproved):"pending"===this.allowance.promiseStatus?this.allowance.promise.then((function(){return new Promise((function(e){t.$nextTick((function(){e(t.isHubApproved)}))}))})):"rejected"===this.allowance.promiseStatus?Promise.reject("Can't get allowance"):void 0},sendApproveTx:function(){var data=O.methods.approve(P,L.utils.toWei(this.form.amount,"ether")).encodeABI();return this.sendEthTx(H,data)},sendHubTx:function(){var address;address=t.concat([t.alloc(12),t.from(L.utils.hexToBytes(this.form.address.replace("Mx","0x")))]);var data=j.methods.sendToCosmos(H,address,L.utils.toWei(this.form.amount,"ether"),1).encodeABI();return this.sendEthTx(P,data)},sendEthTx:function(t,data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=e.ethAddress,n.t1=t,n.t2=data,n.next=5,L.eth.getTransactionCount(e.ethAddress,"pending");case 5:return n.t3=n.sent,o={from:n.t0,to:n.t1,data:n.t2,value:"0x00",nonce:n.t3},console.log(o),n.abrupt("return",r.sendTransaction(o));case 9:case"end":return n.stop()}}),n)})))()}}}}).call(this,n(203).Buffer)},400:function(t,e,n){"use strict";n(33);function r(t){return"SELECT"===t.nodeName.toUpperCase()}function o(t){l(t.target)}function l(t){setTimeout((function(){t.value.length?t.classList.add("is-not-empty"):t.classList.remove("is-not-empty")}),0)}e.a={bind:function(t,e,n){l(t),r(t)?t.addEventListener("change",o):t.addEventListener("input",o),e.value&&t.addEventListener(e.value,o)},componentUpdated:function(t,e){l(t),e.oldValue!==e.value&&t.removeEventListener(e.oldValue,o),e.value&&t.addEventListener(e.value,o)},unbind:function(t,e){r(t)?t.removeEventListener("change",o):t.removeEventListener("input",o),e.value&&t.removeEventListener(e.value,o)}}},496:function(t,e){},497:function(t,e){},515:function(t,e){},517:function(t,e){},523:function(t,e){},525:function(t,e){},534:function(t,e){},536:function(t,e){},580:function(t,e){},623:function(t,e){},625:function(t,e){},632:function(t,e){},644:function(t,e){},647:function(t,e){},657:function(t,e){},690:function(t,e){},697:function(t,e){},714:function(t,e){},716:function(t,e){},731:function(t,e){},780:function(t,e){},787:function(t,e){},831:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],o=[{inputs:[{internalType:"bytes32",name:"_peggyId",type:"bytes32"},{internalType:"uint256",name:"_powerThreshold",type:"uint256"},{internalType:"address[]",name:"_validators",type:"address[]"},{internalType:"uint256[]",name:"_powers",type:"uint256[]"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"_tokenContract",type:"address"},{indexed:!0,internalType:"address",name:"_sender",type:"address"},{indexed:!0,internalType:"bytes32",name:"_destination",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"_amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"_eventNonce",type:"uint256"}],name:"SendToCosmosEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"_batchNonce",type:"uint256"},{indexed:!0,internalType:"address",name:"_token",type:"address"},{indexed:!1,internalType:"uint256",name:"_eventNonce",type:"uint256"}],name:"TransactionBatchExecutedEvent",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"_newValsetNonce",type:"uint256"},{indexed:!1,internalType:"address[]",name:"_validators",type:"address[]"},{indexed:!1,internalType:"uint256[]",name:"_powers",type:"uint256[]"}],name:"ValsetUpdatedEvent",type:"event"},{inputs:[{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"},{internalType:"bytes32",name:"_theHash",type:"bytes32"},{internalType:"uint256",name:"_powerThreshold",type:"uint256"}],name:"checkValidatorSignatures",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_erc20Address",type:"address"}],name:"lastBatchNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_validators",type:"address[]"},{internalType:"uint256[]",name:"_powers",type:"uint256[]"},{internalType:"uint256",name:"_valsetNonce",type:"uint256"},{internalType:"bytes32",name:"_peggyId",type:"bytes32"}],name:"makeCheckpoint",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address",name:"_tokenContract",type:"address"},{internalType:"bytes32",name:"_destination",type:"bytes32"},{internalType:"uint256",name:"_amount",type:"uint256"},{internalType:"uint8",name:"_type",type:"uint8"}],name:"sendToCosmos",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"state_lastBatchNonces",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_lastEventNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_lastValsetCheckpoint",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_lastValsetNonce",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_peggyId",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"state_powerThreshold",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"},{internalType:"bytes32",name:"_theHash",type:"bytes32"},{internalType:"uint256",name:"_powerThreshold",type:"uint256"}],name:"testCheckValidatorSignatures",outputs:[],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address[]",name:"_validators",type:"address[]"},{internalType:"uint256[]",name:"_powers",type:"uint256[]"},{internalType:"uint256",name:"_valsetNonce",type:"uint256"},{internalType:"bytes32",name:"_peggyId",type:"bytes32"}],name:"testMakeCheckpoint",outputs:[],stateMutability:"pure",type:"function"},{inputs:[{internalType:"address[]",name:"_newValidators",type:"address[]"},{internalType:"uint256[]",name:"_newPowers",type:"uint256[]"},{internalType:"uint256",name:"_newValsetNonce",type:"uint256"},{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint256",name:"_currentValsetNonce",type:"uint256"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"}],name:"updateValset",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"_newValidators",type:"address[]"},{internalType:"uint256[]",name:"_newPowers",type:"uint256[]"},{internalType:"uint256",name:"_newValsetNonce",type:"uint256"},{internalType:"address[]",name:"_currentValidators",type:"address[]"},{internalType:"uint256[]",name:"_currentPowers",type:"uint256[]"},{internalType:"uint256",name:"_currentValsetNonce",type:"uint256"},{internalType:"uint8[]",name:"_v",type:"uint8[]"},{internalType:"bytes32[]",name:"_r",type:"bytes32[]"},{internalType:"bytes32[]",name:"_s",type:"bytes32[]"},{internalType:"uint256[]",name:"_amounts",type:"uint256[]"},{internalType:"address[]",name:"_destinations",type:"address[]"},{internalType:"uint256[]",name:"_fees",type:"uint256[]"},{internalType:"uint256",name:"_batchNonce",type:"uint256"},{internalType:"address",name:"_tokenContract",type:"address"}],name:"updateValsetAndSubmitBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_theHash",type:"bytes32"},{internalType:"uint8",name:"_v",type:"uint8"},{internalType:"bytes32",name:"_r",type:"bytes32"},{internalType:"bytes32",name:"_s",type:"bytes32"}],name:"verifySig",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"pure",type:"function"}]},838:function(t,e,n){"use strict";n(218),n(17),n(73);var r=n(833),o=n(840),l=(n(832),n(839),n(483),n(115)),c=(n(156),0);var d=n(836);function m(t,e){"string"==typeof t&&(t=Object(r.a)(t));var n=new Date(Date.now()+c);t>n&&!e&&(t=n);var l=Object(o.a)(t,n,{roundingMethod:"round"});return!(!l||"Invalid Date"===l)&&l}function y(t){return function(t,pattern){"string"==typeof t&&(t=Object(r.a)(t));var time=Object(d.a)(t,pattern);return!(!time||"Invalid Date"===time)&&time}(t,"yyyy-MM-dd HH:mm:ss")}var v={props:{tx:{type:Object,required:!0}},computed:{timeDistance:function(){return m(this.tx.timestamp)},time:function(){return y(this.tx.timestamp)}},methods:{getEtherscanTxUrl:function(t){return l.b+"/tx/"+t},formatHash:function(t){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,n=arguments.length>2?arguments[2]:void 0,r=e+"Mx".length-1;n=n||r+e;var o=(t=t.toString()).length>n;return o?t.substr(0,r)+"…"+t.substr(-e):t}(t,13)}}},_=n(21),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview__transaction"},[n("div",{staticClass:"preview__transaction-row u-text-overflow"},[n("div",[n("a",{staticClass:"link--main",attrs:{href:t.getEtherscanTxUrl(t.tx.hash)}},[t._v(t._s(t.formatHash(t.tx.hash)))])]),t._v(" "),n("div")]),t._v(" "),n("div",{staticClass:"preview__transaction-row preview__transaction-meta"},[n("div",[t._v(t._s(t.timeDistance)+" ago ("+t._s(t.time)+")")]),t._v(" "),n("div",[t._v("\n                "+t._s(t.tx.type)+"\n")])])])}),[],!1,null,null,null);e.a=component.exports},846:function(t,e,n){"use strict";n.r(e);var r=n(401),o=n(402),l=n.n(o),c=n(365),d=n(366),m=n(835),y=n(253),v=n(115),_=n(400),f=v.e===v.d?0:212,h=v.e===v.d?void 0:"https://testnet.bip.to/",w={components:{QrcodeVue:c.a},directives:{autosize:d.a,checkEmpty:_.a},mixins:[r.validationMixin],data:function(){return{form:{amount:"",address:""},linkToBip:""}},validations:function(){return{form:{address:{required:l.a,validAddress:function(address){return/^0x[0-9a-fA-F]{40}$/.test(address)}},amount:{required:l.a}}}},methods:{submit:function(){if(this.$v.$invalid)this.$v.$touch();else{var t={type:y.a.SEND,data:{to:"Mxb26bc23e5a72ea2033f70006751066602d3349fd",value:this.form.amount,coin:f},payload:this.form.address};this.$v.$reset(),this.form.address="",this.form.amount="",this.linkToBip=Object(m.a)(t,h)}}}},T=n(21),C=Object(T.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("form",{staticClass:"card__content card__content--small",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.address.$error}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:t.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{rows:"1",spellcheck:"false"},domProps:{value:t.form.address},on:{blur:[function(e){return t.$v.form.address.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("Deposit to address")])]),t._v(" "),t.$v.form.address.$error?t.$v.form.address.$dirty&&!t.$v.form.address.required?n("span",{staticClass:"form-field__error"},[t._v("Enter Ethereum address")]):t.$v.form.address.$dirty&&!t.$v.form.address.validAddress?n("span",{staticClass:"form-field__error"},[t._v("Invalid Ethereum address")]):t._e():n("span",{staticClass:"form-field__help"},[t._v("Ethereum address starting with 0x…")])]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto send__amount-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.amount.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.form.amount,expression:"form.amount",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},domProps:{value:t.form.amount},on:{blur:[function(e){return t.$v.form.amount.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("HUB amount")])]),t._v(" "),t.$v.form.amount.$dirty&&!t.$v.form.amount.required?n("span",{staticClass:"form-field__error"},[t._v("Enter amount")]):t._e()]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto"},[n("button",{staticClass:"button button--ghost-green send__submit-button",class:{"is-disabled":t.$v.$invalid}},[t._v("Show QR")])])])]),t._v(" "),t.linkToBip?n("div",{staticClass:"card__content card__content--gray u-text-center send__qr-card"},[n("div",{staticClass:"send__qr-wrap u-mb-10"},[n("QrcodeVue",{staticClass:"send__qr",attrs:{value:t.linkToBip,size:240,level:"L"}})],1),t._v("\n            Scan this QR with your Bip Wallet or\n            "),n("a",{staticClass:"link--default u-text-break",attrs:{href:t.linkToBip,target:"_blank"}},[t._v("follow the link")])]):t._e()])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__content card__content--gray card__content--small u-h--uppercase"},[this._v("Minter → "),e("span",{staticClass:"u-text-orange"},[this._v("Ethereum")])])}],!1,null,null,null).exports,x=n(339).a,$={components:{MntToEth:C,EthToMnt:Object(T.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card"},[t._m(0),t._v(" "),t.isConnected?t._e():n("div",{staticClass:"card__content card__content--small"},[n("div",{staticClass:"send__text u-mb-10"},[t._v("\n                  Connect your Ethereum wallet with\n                  "),n("img",{staticClass:"send__icon-wc",attrs:{alt:"",role:"presentation",src:t.BASE_URL_PREFIX+"/img/icon-walletconnect.png",srcset:t.BASE_URL_PREFIX+"/img/icon-walletconnect@2x.png 2x"}}),t._v("\n                  WalletConnect\n              ")]),t._v(" "),n("button",{staticClass:"button button--green",on:{click:t.connectEth}},[t._v("Connect")])]),t._v(" "),t.isConnected?n("form",{staticClass:"card__content card__content--small",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("div",{staticClass:"u-grid u-grid--small u-grid--vertical-margin--small"},[n("div",{staticClass:"u-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.address.$error}},[n("textarea",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"autosize",rawName:"v-autosize"},{name:"model",rawName:"v-model.trim",value:t.form.address,expression:"form.address",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{rows:"1",spellcheck:"false"},domProps:{value:t.form.address},on:{blur:[function(e){return t.$v.form.address.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("Deposit to address")])]),t._v(" "),t.$v.form.address.$error?t.$v.form.address.$dirty&&!t.$v.form.address.required?n("span",{staticClass:"form-field__error"},[t._v("Enter Minter address")]):t.$v.form.address.$dirty&&!t.$v.form.address.validAddress?n("span",{staticClass:"form-field__error"},[t._v("Invalid Minter address")]):t._e():n("span",{staticClass:"form-field__help"},[t._v("Minter address starting with Mx…")])]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto send__amount-cell"},[n("label",{staticClass:"form-field form-field--row",class:{"is-error":t.$v.form.amount.$error}},[n("input",{directives:[{name:"check-empty",rawName:"v-check-empty"},{name:"model",rawName:"v-model.trim",value:t.form.amount,expression:"form.amount",modifiers:{trim:!0}}],staticClass:"form-field__input",attrs:{type:"text",inputmode:"decimal"},domProps:{value:t.form.amount},on:{blur:[function(e){return t.$v.form.amount.$touch()},function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||t.$set(t.form,"amount",e.target.value.trim())}}}),t._v(" "),n("span",{staticClass:"form-field__label"},[t._v("HUB amount")])]),t._v(" "),t.$v.form.amount.$dirty&&!t.$v.form.amount.required?n("span",{staticClass:"form-field__error"},[t._v("Enter amount")]):t._e()]),t._v(" "),n("div",{staticClass:"u-cell u-cell--small--auto"},[n("button",{staticClass:"button button--ghost-green send__submit-button",class:{"is-loading":t.isFormSending,"is-disabled":t.$v.$invalid}},[t.isHubApproved?n("span",{staticClass:"button__content"},[t._v("Send")]):n("span",{staticClass:"button__content"},[t._v("Approve")]),t._v(" "),n("svg",{staticClass:"loader loader--button",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40"}},[n("circle",{staticClass:"loader__path",attrs:{cx:"20",cy:"20",r:"11"}})])])]),t._v(" "),t.serverError?n("div",{staticClass:"u-cell form__error send__text"},[t._v("\n                      "+t._s(t.serverError)+"\n                  ")]):t._e()])]):t._e(),t._v(" "),t.isConnected?n("div",{staticClass:"card__content card__content--small send__text"},[t._v("\n              Wallet connected "),n("br"),t._v(" "),n("a",{staticClass:"link--default",attrs:{href:"https://ropsten.etherscan.io/address/"+t.ethAddress,target:"_blank"}},[t._v(t._s(t.ethAddress))]),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"button button--ghost u-mt-10",on:{click:t.reconnectEth}},[t._v("Reconnect")])]):t._e()]),t._v(" "),t.transactionList.length?n("div",{staticClass:"card u-mt-15"},[n("div",{staticClass:"card__content card__content--gray card__content--small u-h--uppercase"},[t._v("Transactions")]),t._v(" "),t._l(t.transactionList,(function(t){return n("TxListItem",{key:t.hash,staticClass:"card__content card__content--mini",attrs:{tx:t}})}))],2):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__content card__content--gray card__content--small u-h--uppercase"},[this._v("Ethereum → "),e("span",{staticClass:"u-text-orange"},[this._v("Minter")])])}],!1,null,null,null).exports}},E=Object(T.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"u-section u-container"},[e("div",{staticClass:"u-grid u-grid--vertical-margin"},[e("div",{staticClass:"u-cell u-cell--medium--1-2"},[e("MntToEth")],1),this._v(" "),e("div",{staticClass:"u-cell u-cell--medium--1-2"},[e("EthToMnt")],1)])])}),[],!1,null,null,null);e.default=E.exports}}]);