var DO_NOT_EXPORT_CODEPAGE=!0,DO_NOT_EXPORT_JSZIP=!0;(function(e){if("object"==typeof exports&&"undefined"!=typeof module&&void 0===DO_NOT_EXPORT_JSZIP)module.exports=e()
else if("function"==typeof define&&define.amd&&void 0===DO_NOT_EXPORT_JSZIP)JSZipSync=e(),define([],e)
else{var t
"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof $&&$.global?t=$.global:"undefined"!=typeof self&&(t=self),t.JSZipSync=e()}})(function(){return function e(t,r,n){function a(o,i){if(!r[o]){if(!t[o]){var l="function"==typeof require&&require
if(!i&&l)return l(o,!0)
if(s)return s(o,!0)
throw new Error("Cannot find module '"+o+"'")}var c=r[o]={exports:{}}
t[o][0].call(c.exports,function(e){var r=t[o][1][e]
return a(r||e)},c,c.exports,e,t,r,n)}return r[o].exports}for(var s="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o])
return a}({1:[function(e,t,r){"use strict"
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
r.encode=function(e,t){for(var r,a,s,o,i,l,c,f="",h=0;h<e.length;)o=(r=e.charCodeAt(h++))>>2,i=(3&r)<<4|(a=e.charCodeAt(h++))>>4,l=(15&a)<<2|(s=e.charCodeAt(h++))>>6,c=63&s,isNaN(a)?l=c=64:isNaN(s)&&(c=64),f=f+n.charAt(o)+n.charAt(i)+n.charAt(l)+n.charAt(c)
return f},r.decode=function(e,t){var r,a,s,o,i,l,c="",f=0
for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");f<e.length;)r=n.indexOf(e.charAt(f++))<<2|(o=n.indexOf(e.charAt(f++)))>>4,a=(15&o)<<4|(i=n.indexOf(e.charAt(f++)))>>2,s=(3&i)<<6|(l=n.indexOf(e.charAt(f++))),c+=String.fromCharCode(r),64!=i&&(c+=String.fromCharCode(a)),64!=l&&(c+=String.fromCharCode(s))
return c}},{}],2:[function(e,t,r){"use strict"
function n(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}n.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},t.exports=n},{}],3:[function(e,t,r){"use strict"
r.STORE={magic:"\0\0",compress:function(e){return e},uncompress:function(e){return e},compressInputType:null,uncompressInputType:null},r.DEFLATE=e("./flate")},{"./flate":8}],4:[function(e,t,r){"use strict"
var n=e("./utils"),a=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117]
t.exports=function(e,t){if(void 0===e||!e.length)return 0
var r="string"!==n.getTypeOf(e)
void 0===t&&(t=0)
var s=0,o=0
t^=-1
for(var i=0,l=e.length;i<l;i++)o=r?e[i]:e.charCodeAt(i),s=a[255&(t^o)],t=t>>>8^s
return-1^t}},{"./utils":21}],5:[function(e,t,r){"use strict"
var n=e("./utils")
function a(e){this.data=null,this.length=0,this.index=0}a.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(e){},readInt:function(e){var t,r=0
for(this.checkOffset(e),t=this.index+e-1;t>=this.index;t--)r=(r<<8)+this.byteAt(t)
return this.index+=e,r},readString:function(e){return n.transformTo("string",this.readData(e))},readData:function(e){},lastIndexOfSignature:function(e){},readDate:function(){var e=this.readInt(4)
return new Date(1980+(e>>25&127),(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(31&e)<<1)}},t.exports=a},{"./utils":21}],6:[function(e,t,r){"use strict"
r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!1,r.date=null,r.compression=null,r.comment=null},{}],7:[function(e,t,r){"use strict"
var n=e("./utils")
r.string2binary=function(e){return n.string2binary(e)},r.string2Uint8Array=function(e){return n.transformTo("uint8array",e)},r.uint8Array2String=function(e){return n.transformTo("string",e)},r.string2Blob=function(e){var t=n.transformTo("arraybuffer",e)
return n.arrayBuffer2Blob(t)},r.arrayBuffer2Blob=function(e){return n.arrayBuffer2Blob(e)},r.transformTo=function(e,t){return n.transformTo(e,t)},r.getTypeOf=function(e){return n.getTypeOf(e)},r.checkSupport=function(e){return n.checkSupport(e)},r.MAX_VALUE_16BITS=n.MAX_VALUE_16BITS,r.MAX_VALUE_32BITS=n.MAX_VALUE_32BITS,r.pretty=function(e){return n.pretty(e)},r.findCompression=function(e){return n.findCompression(e)},r.isRegExp=function(e){return n.isRegExp(e)}},{"./utils":21}],8:[function(e,t,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,a=e("pako")
r.uncompressInputType=n?"uint8array":"array",r.compressInputType=n?"uint8array":"array",r.magic="\b\0",r.compress=function(e){return a.deflateRaw(e)},r.uncompress=function(e){return a.inflateRaw(e)}},{pako:24}],9:[function(e,t,r){"use strict"
var n=e("./base64")
function a(e,t){if(!(this instanceof a))return new a(e,t)
this.files={},this.comment=null,this.root="",e&&this.load(e,t),this.clone=function(){var e=new a
for(var t in this)"function"!=typeof this[t]&&(e[t]=this[t])
return e}}a.prototype=e("./object"),a.prototype.load=e("./load"),a.support=e("./support"),a.defaults=e("./defaults"),a.utils=e("./deprecatedPublicUtils"),a.base64={encode:function(e){return n.encode(e)},decode:function(e){return n.decode(e)}},a.compressions=e("./compressions"),t.exports=a},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(e,t,r){"use strict"
var n=e("./base64"),a=e("./zipEntries")
t.exports=function(e,t){var r,s,o,i
for((t=t||{}).base64&&(e=n.decode(e)),r=(s=new a(e,t)).files,o=0;o<r.length;o++)i=r[o],this.file(i.fileName,i.decompressed,{binary:!0,optimizedBinaryString:!0,date:i.date,dir:i.dir,comment:i.fileComment.length?i.fileComment:null,createFolders:t.createFolders})
return s.zipComment.length&&(this.comment=s.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(e,t,r){(function(e){"use strict"
var r=function(){}
if(void 0!==e){var n=!e.from
if(!n)try{e.from("foo","utf8")}catch(a){n=!0}r=n?function(t,r){return r?new e(t,r):new e(t)}:e.from.bind(e),e.alloc||(e.alloc=function(t){return new e(t)})}t.exports=function(t,n){return"number"==typeof t?e.alloc(t):r(t,n)},t.exports.test=function(t){return e.isBuffer(t)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(e,t,r){"use strict"
var n=e("./uint8ArrayReader")
function a(e){this.data=e,this.length=this.data.length,this.index=0}a.prototype=new n,a.prototype.readData=function(e){this.checkOffset(e)
var t=this.data.slice(this.index,this.index+e)
return this.index+=e,t},t.exports=a},{"./uint8ArrayReader":18}],13:[function(e,t,r){"use strict"
var n=e("./support"),a=e("./utils"),s=e("./crc32"),o=e("./signature"),i=e("./defaults"),l=e("./base64"),c=e("./compressions"),f=e("./compressedObject"),h=e("./nodeBuffer"),u=e("./utf8"),d=e("./stringWriter"),p=e("./uint8ArrayWriter"),g=function(e){if(e._data instanceof f&&(e._data=e._data.getContent(),e.options.binary=!0,e.options.base64=!1,"uint8array"===a.getTypeOf(e._data))){var t=e._data
e._data=new Uint8Array(t.length),0!==t.length&&e._data.set(t,0)}return e._data},m=function(e){var t=g(e)
return"string"===a.getTypeOf(t)?!e.options.binary&&n.nodebuffer?h(t,"utf-8"):e.asBinary():t},b=function(e){var t=g(this)
return null==t?"":(this.options.base64&&(t=l.decode(t)),t=e&&this.options.binary?B.utf8decode(t):a.transformTo("string",t),e||this.options.binary||(t=a.transformTo("string",B.utf8encode(t))),t)},v=function(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this._data=t,this.options=r,this._initialMetadata={dir:r.dir,date:r.date}}
v.prototype={asText:function(){return b.call(this,!0)},asBinary:function(){return b.call(this,!1)},asNodeBuffer:function(){var e=m(this)
return a.transformTo("nodebuffer",e)},asUint8Array:function(){var e=m(this)
return a.transformTo("uint8array",e)},asArrayBuffer:function(){return this.asUint8Array().buffer}}
var C=function(e,t){var r,n=""
for(r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8
return n},E=function(){var e,t,r={}
for(e=0;e<arguments.length;e++)for(t in arguments[e])arguments[e].hasOwnProperty(t)&&void 0===r[t]&&(r[t]=arguments[e][t])
return r},S=function(e,t,r){var n,s=a.getTypeOf(t)
if((r=function(e){return!0!==(e=e||{}).base64||null!==e.binary&&void 0!==e.binary||(e.binary=!0),(e=E(e,i)).date=e.date||new Date,null!==e.compression&&(e.compression=e.compression.toUpperCase()),e}(r)).createFolders&&(n=A(e))&&_.call(this,n,!0),r.dir||null==t)r.base64=!1,r.binary=!1,t=null
else if("string"===s)r.binary&&!r.base64&&!0!==r.optimizedBinaryString&&(t=a.string2binary(t))
else{if(r.base64=!1,r.binary=!0,!(s||t instanceof f))throw new Error("The data of '"+e+"' is in an unsupported format !")
"arraybuffer"===s&&(t=a.transformTo("uint8array",t))}var o=new v(e,t,r)
return this.files[e]=o,o},A=function(e){"/"==e.slice(-1)&&(e=e.substring(0,e.length-1))
var t=e.lastIndexOf("/")
return t>0?e.substring(0,t):""},_=function(e,t){return"/"!=e.slice(-1)&&(e+="/"),t=void 0!==t&&t,this.files[e]||S.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]},w=function(e,t){var r,n=new f
return e._data instanceof f?(n.uncompressedSize=e._data.uncompressedSize,n.crc32=e._data.crc32,0===n.uncompressedSize||e.dir?(t=c.STORE,n.compressedContent="",n.crc32=0):e._data.compressionMethod===t.magic?n.compressedContent=e._data.getCompressedContent():(r=e._data.getContent(),n.compressedContent=t.compress(a.transformTo(t.compressInputType,r)))):((r=m(e))&&0!==r.length&&!e.dir||(t=c.STORE,r=""),n.uncompressedSize=r.length,n.crc32=s(r),n.compressedContent=t.compress(a.transformTo(t.compressInputType,r))),n.compressedSize=n.compressedContent.length,n.compressionMethod=t.magic,n},R=function(e,t,r,n){r.compressedContent
var i,l,c,f,h=a.transformTo("string",u.utf8encode(t.name)),d=t.comment||"",p=a.transformTo("string",u.utf8encode(d)),g=h.length!==t.name.length,m=p.length!==d.length,b=t.options,v="",E="",S=""
c=t._initialMetadata.dir!==t.dir?t.dir:b.dir,i=(f=t._initialMetadata.date!==t.date?t.date:b.date).getHours(),i<<=6,i|=f.getMinutes(),i<<=5,i|=f.getSeconds()/2,l=f.getFullYear()-1980,l<<=4,l|=f.getMonth()+1,l<<=5,l|=f.getDate(),g&&(E=C(1,1)+C(s(h),4)+h,v+="up"+C(E.length,2)+E),m&&(S=C(1,1)+C(this.crc32(p),4)+p,v+="uc"+C(S.length,2)+S)
var A=""
return A+="\n\0",A+=g||m?"\0\b":"\0\0",A+=r.compressionMethod,A+=C(i,2),A+=C(l,2),A+=C(r.crc32,4),A+=C(r.compressedSize,4),A+=C(r.uncompressedSize,4),A+=C(h.length,2),A+=C(v.length,2),{fileRecord:o.LOCAL_FILE_HEADER+A+h+v,dirRecord:o.CENTRAL_FILE_HEADER+"\0"+A+C(p.length,2)+"\0\0\0\0"+(!0===c?"\0\0\0":"\0\0\0\0")+C(n,4)+h+v+p,compressedObject:r}},B={load:function(e,t){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(e){var t,r,n,a,s=[]
for(t in this.files)this.files.hasOwnProperty(t)&&(n=this.files[t],a=new v(n.name,n._data,E(n.options)),r=t.slice(this.root.length,t.length),t.slice(0,this.root.length)===this.root&&e(r,a)&&s.push(a))
return s},file:function(e,t,r){if(1===arguments.length){if(a.isRegExp(e)){var n=e
return this.filter(function(e,t){return!t.dir&&n.test(e)})}return this.filter(function(t,r){return!r.dir&&t===e})[0]||null}return e=this.root+e,S.call(this,e,t,r),this},folder:function(e){if(!e)return this
if(a.isRegExp(e))return this.filter(function(t,r){return r.dir&&e.test(t)})
var t=this.root+e,r=_.call(this,t),n=this.clone()
return n.root=r.name,n},remove:function(e){e=this.root+e
var t=this.files[e]
if(t||("/"!=e.slice(-1)&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e]
else for(var r=this.filter(function(t,r){return r.name.slice(0,e.length)===e}),n=0;n<r.length;n++)delete this.files[r[n].name]
return this},generate:function(e){e=E(e||{},{base64:!0,compression:"STORE",type:"base64",comment:null}),a.checkSupport(e.type)
var t,r,n=[],s=0,i=0,f=a.transformTo("string",this.utf8encode(e.comment||this.comment||""))
for(var h in this.files)if(this.files.hasOwnProperty(h)){var u=this.files[h],g=u.options.compression||e.compression.toUpperCase(),m=c[g]
if(!m)throw new Error(g+" is not a valid compression method !")
var b=w.call(this,u,m),v=R.call(this,h,u,b,s)
s+=v.fileRecord.length+b.compressedSize,i+=v.dirRecord.length,n.push(v)}var S
S=o.CENTRAL_DIRECTORY_END+"\0\0\0\0"+C(n.length,2)+C(n.length,2)+C(i,4)+C(s,4)+C(f.length,2)+f
var A=e.type.toLowerCase()
for(t="uint8array"===A||"arraybuffer"===A||"blob"===A||"nodebuffer"===A?new p(s+i+S.length):new d(s+i+S.length),r=0;r<n.length;r++)t.append(n[r].fileRecord),t.append(n[r].compressedObject.compressedContent)
for(r=0;r<n.length;r++)t.append(n[r].dirRecord)
t.append(S)
var _=t.finalize()
switch(e.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return a.transformTo(e.type.toLowerCase(),_)
case"blob":return a.arrayBuffer2Blob(a.transformTo("arraybuffer",_))
case"base64":return e.base64?l.encode(_):_
default:return _}},crc32:function(e,t){return s(e,t)},utf8encode:function(e){return a.transformTo("string",u.utf8encode(e))},utf8decode:function(e){return u.utf8decode(e)}}
t.exports=B},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(e,t,r){"use strict"
r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\b"},{}],15:[function(e,t,r){"use strict"
var n=e("./dataReader"),a=e("./utils")
function s(e,t){this.data=e,t||(this.data=a.string2binary(this.data)),this.length=this.data.length,this.index=0}s.prototype=new n,s.prototype.byteAt=function(e){return this.data.charCodeAt(e)},s.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)},s.prototype.readData=function(e){this.checkOffset(e)
var t=this.data.slice(this.index,this.index+e)
return this.index+=e,t},t.exports=s},{"./dataReader":5,"./utils":21}],16:[function(e,t,r){"use strict"
var n=e("./utils"),a=function(){this.data=[]}
a.prototype={append:function(e){e=n.transformTo("string",e),this.data.push(e)},finalize:function(){return this.data.join("")}},t.exports=a},{"./utils":21}],17:[function(e,t,r){(function(e){"use strict"
if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,r.nodebuffer=void 0!==e,r.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)r.blob=!1
else{var t=new ArrayBuffer(0)
try{r.blob=0===new Blob([t],{type:"application/zip"}).size}catch(a){try{var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
n.append(t),r.blob=0===n.getBlob("application/zip").size}catch(a){r.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(e,t,r){"use strict"
var n=e("./dataReader")
function a(e){e&&(this.data=e,this.length=this.data.length,this.index=0)}a.prototype=new n,a.prototype.byteAt=function(e){return this.data[e]},a.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),n=e.charCodeAt(2),a=e.charCodeAt(3),s=this.length-4;s>=0;--s)if(this.data[s]===t&&this.data[s+1]===r&&this.data[s+2]===n&&this.data[s+3]===a)return s
return-1},a.prototype.readData=function(e){if(this.checkOffset(e),0===e)return new Uint8Array(0)
var t=this.data.subarray(this.index,this.index+e)
return this.index+=e,t},t.exports=a},{"./dataReader":5}],19:[function(e,t,r){"use strict"
var n=e("./utils"),a=function(e){this.data=new Uint8Array(e),this.index=0}
a.prototype={append:function(e){0!==e.length&&(e=n.transformTo("uint8array",e),this.data.set(e,this.index),this.index+=e.length)},finalize:function(){return this.data}},t.exports=a},{"./utils":21}],20:[function(e,t,r){"use strict"
for(var n=e("./utils"),a=e("./support"),s=e("./nodeBuffer"),o=new Array(256),i=0;i<256;i++)o[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1
o[254]=o[254]=1
var l=function(e,t){var r
for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--
return r<0?t:0===r?t:r+o[e[r]]>t?r:t},c=function(e){var t,r,a,s,i=e.length,l=new Array(2*i)
for(r=0,t=0;t<i;)if((a=e[t++])<128)l[r++]=a
else if((s=o[a])>4)l[r++]=65533,t+=s-1
else{for(a&=2===s?31:3===s?15:7;s>1&&t<i;)a=a<<6|63&e[t++],s--
s>1?l[r++]=65533:a<65536?l[r++]=a:(a-=65536,l[r++]=55296|a>>10&1023,l[r++]=56320|1023&a)}return l.length!==r&&(l.subarray?l=l.subarray(0,r):l.length=r),n.applyFromCharCode(l)}
r.utf8encode=function(e){return a.nodebuffer?s(e,"utf-8"):function(e){var t,r,n,s,o,i=e.length,l=0
for(s=0;s<i;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<i&&56320==(64512&(n=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(n-56320),s++),l+=r<128?1:r<2048?2:r<65536?3:4
for(t=a.uint8array?new Uint8Array(l):new Array(l),o=0,s=0;o<l;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<i&&56320==(64512&(n=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(n-56320),s++),r<128?t[o++]=r:r<2048?(t[o++]=192|r>>>6,t[o++]=128|63&r):r<65536?(t[o++]=224|r>>>12,t[o++]=128|r>>>6&63,t[o++]=128|63&r):(t[o++]=240|r>>>18,t[o++]=128|r>>>12&63,t[o++]=128|r>>>6&63,t[o++]=128|63&r)
return t}(e)},r.utf8decode=function(e){if(a.nodebuffer)return n.transformTo("nodebuffer",e).toString("utf-8")
for(var t=[],r=0,s=(e=n.transformTo(a.uint8array?"uint8array":"array",e)).length;r<s;){var o=l(e,Math.min(r+65536,s))
a.uint8array?t.push(c(e.subarray(r,o))):t.push(c(e.slice(r,o))),r=o}return t.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(e,t,r){"use strict"
var n=e("./support"),a=e("./compressions"),s=e("./nodeBuffer")
function o(e){return e}function i(e,t){for(var r=0;r<e.length;++r)t[r]=255&e.charCodeAt(r)
return t}function l(e){var t=65536,n=[],a=e.length,o=r.getTypeOf(e),i=0,l=!0
try{switch(o){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0))
break
case"nodebuffer":String.fromCharCode.apply(null,s(0))}}catch(c){l=!1}if(!l){for(var f="",h=0;h<e.length;h++)f+=String.fromCharCode(e[h])
return f}for(;i<a&&t>1;)try{"array"===o||"nodebuffer"===o?n.push(String.fromCharCode.apply(null,e.slice(i,Math.min(i+t,a)))):n.push(String.fromCharCode.apply(null,e.subarray(i,Math.min(i+t,a)))),i+=t}catch(c){t=Math.floor(t/2)}return n.join("")}function c(e,t){for(var r=0;r<e.length;r++)t[r]=e[r]
return t}r.string2binary=function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(255&e.charCodeAt(r))
return t},r.arrayBuffer2Blob=function(e){r.checkSupport("blob")
try{return new Blob([e],{type:"application/zip"})}catch(t){try{var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)
return n.append(e),n.getBlob("application/zip")}catch(t){throw new Error("Bug : can't construct the Blob.")}}},r.applyFromCharCode=l
var f={}
f.string={string:o,array:function(e){return i(e,new Array(e.length))},arraybuffer:function(e){return f.string.uint8array(e).buffer},uint8array:function(e){return i(e,new Uint8Array(e.length))},nodebuffer:function(e){return i(e,s(e.length))}},f.array={string:l,array:o,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s(e)}},f.arraybuffer={string:function(e){return l(new Uint8Array(e))},array:function(e){return c(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:o,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return s(new Uint8Array(e))}},f.uint8array={string:l,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:o,nodebuffer:function(e){return s(e)}},f.nodebuffer={string:l,array:function(e){return c(e,new Array(e.length))},arraybuffer:function(e){return f.nodebuffer.uint8array(e).buffer},uint8array:function(e){return c(e,new Uint8Array(e.length))},nodebuffer:o},r.transformTo=function(e,t){if(t||(t=""),!e)return t
r.checkSupport(e)
var n=r.getTypeOf(t)
return f[n][e](t)},r.getTypeOf=function(e){return"string"==typeof e?"string":"[object Array]"===Object.prototype.toString.call(e)?"array":n.nodebuffer&&s.test(e)?"nodebuffer":n.uint8array&&e instanceof Uint8Array?"uint8array":n.arraybuffer&&e instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(e){if(!n[e.toLowerCase()])throw new Error(e+" is not supported by this browser")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(e){var t,r,n=""
for(r=0;r<(e||"").length;r++)n+="\\x"+((t=e.charCodeAt(r))<16?"0":"")+t.toString(16).toUpperCase()
return n},r.findCompression=function(e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].magic===e)return a[t]
return null},r.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(e,t,r){"use strict"
var n=e("./stringReader"),a=e("./nodeBufferReader"),s=e("./uint8ArrayReader"),o=e("./utils"),i=e("./signature"),l=e("./zipEntry"),c=e("./support"),f=e("./object")
function h(e,t){this.files=[],this.loadOptions=t,e&&this.load(e)}h.prototype={checkSignature:function(e){var t=this.reader.readString(4)
if(t!==e)throw new Error("Corrupted zip or bug : unexpected signature ("+o.pretty(t)+", expected "+o.pretty(e)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=f.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={}
for(var e,t,r,n=this.zip64EndOfCentralSize-44;0<n;)e=this.reader.readInt(2),t=this.reader.readInt(4),r=this.reader.readString(t),this.zip64ExtensibleData[e]={id:e,length:t,value:r}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t
for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature(i.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8()},readCentralDir:function(){var e
for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===i.CENTRAL_FILE_HEADER;)(e=new l({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(e)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature(i.CENTRAL_DIRECTORY_END)
if(-1===e)throw new Error("Corrupted zip : can't find end of central directory")
if(this.reader.setIndex(e),this.checkSignature(i.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,-1===(e=this.reader.lastIndexOfSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR)))throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator")
this.reader.setIndex(e),this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(i.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(e){var t=o.getTypeOf(e)
"string"!==t||c.uint8array?this.reader="nodebuffer"===t?new a(e):new s(o.transformTo("uint8array",e)):this.reader=new n(e,this.loadOptions.optimizedBinaryString)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},t.exports=h},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(e,t,r){"use strict"
var n=e("./stringReader"),a=e("./utils"),s=e("./compressedObject"),o=e("./object")
function i(e,t){this.options=e,this.loadOptions=t}i.prototype={isEncrypted:function(){return 1==(1&this.bitFlag)},useUTF8:function(){return 2048==(2048&this.bitFlag)},prepareCompressedContent:function(e,t,r){return function(){var n=e.index
e.setIndex(t)
var a=e.readData(r)
return e.setIndex(n),a}},prepareContent:function(e,t,r,n,s){return function(){var e=a.transformTo(n.uncompressInputType,this.getCompressedContent()),t=n.uncompress(e)
if(t.length!==s)throw new Error("Bug : uncompressed data size mismatch")
return t}},readLocalPart:function(e){var t,r
if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readString(this.fileNameLength),e.skip(r),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)")
if(null===(t=a.findCompression(this.compressionMethod)))throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")")
if(this.decompressed=new s,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(e,e.index,this.compressedSize,t),this.decompressed.getContent=this.prepareContent(e,e.index,this.compressedSize,t,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=a.transformTo("string",this.decompressed.getContent()),o.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(e){if(this.versionMadeBy=e.readString(2),this.versionNeeded=e.readInt(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4),this.fileNameLength=e.readInt(2),this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported")
this.fileName=e.readString(this.fileNameLength),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readString(this.fileCommentLength),this.dir=!!(16&this.externalFileAttributes)},parseZIP64ExtraField:function(e){if(this.extraFields[1]){var t=new n(this.extraFields[1].value)
this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=t.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=t.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=t.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=t.readInt(4))}},readExtraFields:function(e){var t,r,n,a=e.index
for(this.extraFields=this.extraFields||{};e.index<a+this.extraFieldsLength;)t=e.readInt(2),r=e.readInt(2),n=e.readString(r),this.extraFields[t]={id:t,length:r,value:n}},handleUTF8:function(){if(this.useUTF8())this.fileName=o.utf8decode(this.fileName),this.fileComment=o.utf8decode(this.fileComment)
else{var e=this.findExtraFieldUnicodePath()
null!==e&&(this.fileName=e)
var t=this.findExtraFieldUnicodeComment()
null!==t&&(this.fileComment=t)}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789]
if(e){var t=new n(e.value)
return 1!==t.readInt(1)?null:o.crc32(this.fileName)!==t.readInt(4)?null:o.utf8decode(t.readString(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461]
if(e){var t=new n(e.value)
return 1!==t.readInt(1)?null:o.crc32(this.fileComment)!==t.readInt(4)?null:o.utf8decode(t.readString(e.length-5))}return null}},t.exports=i},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(e,t,r){"use strict"
var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),t.exports=n},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(e,t,r){"use strict"
var n=e("./zlib/deflate.js"),a=e("./utils/common"),s=e("./utils/strings"),o=e("./zlib/messages"),i=e("./zlib/zstream"),l=function(e){this.options=a.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},e||{})
var t=this.options
t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0
var r=n.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy)
if(0!==r)throw new Error(o[r])
t.header&&n.deflateSetHeader(this.strm,t.header)}
function c(e,t){var r=new l(t)
if(r.push(e,!0),r.err)throw r.msg
return r.result}l.prototype.push=function(e,t){var r,o,i=this.strm,l=this.options.chunkSize
if(this.ended)return!1
o=t===~~t?t:!0===t?4:0,i.input="string"==typeof e?s.string2buf(e):e,i.next_in=0,i.avail_in=i.input.length
do{if(0===i.avail_out&&(i.output=new a.Buf8(l),i.next_out=0,i.avail_out=l),1!==(r=n.deflate(i,o))&&0!==r)return this.onEnd(r),this.ended=!0,!1;(0===i.avail_out||0===i.avail_in&&4===o)&&("string"===this.options.to?this.onData(s.buf2binstring(a.shrinkBuf(i.output,i.next_out))):this.onData(a.shrinkBuf(i.output,i.next_out)))}while((i.avail_in>0||0===i.avail_out)&&1!==r)
return 4!==o||(r=n.deflateEnd(this.strm),this.onEnd(r),this.ended=!0,0===r)},l.prototype.onData=function(e){this.chunks.push(e)},l.prototype.onEnd=function(e){0===e&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Deflate=l,r.deflate=c,r.deflateRaw=function(e,t){return(t=t||{}).raw=!0,c(e,t)},r.gzip=function(e,t){return(t=t||{}).gzip=!0,c(e,t)}},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(e,t,r){"use strict"
var n=e("./zlib/inflate.js"),a=e("./utils/common"),s=e("./utils/strings"),o=e("./zlib/constants"),i=e("./zlib/messages"),l=e("./zlib/zstream"),c=e("./zlib/gzheader"),f=function(e){this.options=a.assign({chunkSize:16384,windowBits:0,to:""},e||{})
var t=this.options
t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,0===t.windowBits&&(t.windowBits=-15)),!(t.windowBits>=0&&t.windowBits<16)||e&&e.windowBits||(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&0==(15&t.windowBits)&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new l,this.strm.avail_out=0
var r=n.inflateInit2(this.strm,t.windowBits)
if(r!==o.Z_OK)throw new Error(i[r])
this.header=new c,n.inflateGetHeader(this.strm,this.header)}
function h(e,t){var r=new f(t)
if(r.push(e,!0),r.err)throw r.msg
return r.result}f.prototype.push=function(e,t){var r,i,l,c,f,h=this.strm,u=this.options.chunkSize
if(this.ended)return!1
i=t===~~t?t:!0===t?o.Z_FINISH:o.Z_NO_FLUSH,h.input="string"==typeof e?s.binstring2buf(e):e,h.next_in=0,h.avail_in=h.input.length
do{if(0===h.avail_out&&(h.output=new a.Buf8(u),h.next_out=0,h.avail_out=u),(r=n.inflate(h,o.Z_NO_FLUSH))!==o.Z_STREAM_END&&r!==o.Z_OK)return this.onEnd(r),this.ended=!0,!1
h.next_out&&(0===h.avail_out||r===o.Z_STREAM_END||0===h.avail_in&&i===o.Z_FINISH)&&("string"===this.options.to?(l=s.utf8border(h.output,h.next_out),c=h.next_out-l,f=s.buf2string(h.output,l),h.next_out=c,h.avail_out=u-c,c&&a.arraySet(h.output,h.output,l,c,0),this.onData(f)):this.onData(a.shrinkBuf(h.output,h.next_out)))}while(h.avail_in>0&&r!==o.Z_STREAM_END)
return r===o.Z_STREAM_END&&(i=o.Z_FINISH),i!==o.Z_FINISH||(r=n.inflateEnd(this.strm),this.onEnd(r),this.ended=!0,r===o.Z_OK)},f.prototype.onData=function(e){this.chunks.push(e)},f.prototype.onEnd=function(e){e===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg},r.Inflate=f,r.inflate=h,r.inflateRaw=function(e,t){return(t=t||{}).raw=!0,h(e,t)},r.ungzip=h},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(e,t,r){"use strict"
var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array
r.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift()
if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object")
for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n])}}return e},r.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)}
var a={arraySet:function(e,t,r,n,a){if(t.subarray&&e.subarray)e.set(t.subarray(r,r+n),a)
else for(var s=0;s<n;s++)e[a+s]=t[r+s]},flattenChunks:function(e){var t,r,n,a,s,o
for(n=0,t=0,r=e.length;t<r;t++)n+=e[t].length
for(o=new Uint8Array(n),a=0,t=0,r=e.length;t<r;t++)s=e[t],o.set(s,a),a+=s.length
return o}},s={arraySet:function(e,t,r,n,a){for(var s=0;s<n;s++)e[a+s]=t[r+s]},flattenChunks:function(e){return[].concat.apply([],e)}}
r.setTyped=function(e){e?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,s))},r.setTyped(n)},{}],28:[function(e,t,r){"use strict"
var n=e("./common"),a=!0,s=!0
try{String.fromCharCode.apply(null,[0])}catch(c){a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(c){s=!1}for(var o=new n.Buf8(256),i=0;i<256;i++)o[i]=i>=252?6:i>=248?5:i>=240?4:i>=224?3:i>=192?2:1
function l(e,t){if(t<65537&&(e.subarray&&s||!e.subarray&&a))return String.fromCharCode.apply(null,n.shrinkBuf(e,t))
for(var r="",o=0;o<t;o++)r+=String.fromCharCode(e[o])
return r}o[254]=o[254]=1,r.string2buf=function(e){var t,r,a,s,o,i=e.length,l=0
for(s=0;s<i;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<i&&56320==(64512&(a=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(a-56320),s++),l+=r<128?1:r<2048?2:r<65536?3:4
for(t=new n.Buf8(l),o=0,s=0;o<l;s++)55296==(64512&(r=e.charCodeAt(s)))&&s+1<i&&56320==(64512&(a=e.charCodeAt(s+1)))&&(r=65536+(r-55296<<10)+(a-56320),s++),r<128?t[o++]=r:r<2048?(t[o++]=192|r>>>6,t[o++]=128|63&r):r<65536?(t[o++]=224|r>>>12,t[o++]=128|r>>>6&63,t[o++]=128|63&r):(t[o++]=240|r>>>18,t[o++]=128|r>>>12&63,t[o++]=128|r>>>6&63,t[o++]=128|63&r)
return t},r.buf2binstring=function(e){return l(e,e.length)},r.binstring2buf=function(e){for(var t=new n.Buf8(e.length),r=0,a=t.length;r<a;r++)t[r]=e.charCodeAt(r)
return t},r.buf2string=function(e,t){var r,n,a,s,i=t||e.length,c=new Array(2*i)
for(n=0,r=0;r<i;)if((a=e[r++])<128)c[n++]=a
else if((s=o[a])>4)c[n++]=65533,r+=s-1
else{for(a&=2===s?31:3===s?15:7;s>1&&r<i;)a=a<<6|63&e[r++],s--
s>1?c[n++]=65533:a<65536?c[n++]=a:(a-=65536,c[n++]=55296|a>>10&1023,c[n++]=56320|1023&a)}return l(c,n)},r.utf8border=function(e,t){var r
for((t=t||e.length)>e.length&&(t=e.length),r=t-1;r>=0&&128==(192&e[r]);)r--
return r<0?t:0===r?t:r+o[e[r]]>t?r:t}},{"./common":27}],29:[function(e,t,r){"use strict"
t.exports=function(e,t,r,n){for(var a=65535&e|0,s=e>>>16&65535|0,o=0;0!==r;){r-=o=r>2e3?2e3:r
do{s=s+(a=a+t[n++]|0)|0}while(--o)
a%=65521,s%=65521}return a|s<<16|0}},{}],30:[function(e,t,r){t.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(e,t,r){"use strict"
var n=function(){for(var e,t=[],r=0;r<256;r++){e=r
for(var n=0;n<8;n++)e=1&e?3988292384^e>>>1:e>>>1
t[r]=e}return t}()
t.exports=function(e,t,r,a){var s=n,o=a+r
e^=-1
for(var i=a;i<o;i++)e=e>>>8^s[255&(e^t[i])]
return-1^e}},{}],32:[function(e,t,r){"use strict"
var n=e("../utils/common"),a=e("./trees"),s=e("./adler32"),o=e("./crc32"),i=e("./messages"),l=0,c=1,f=3,h=4,u=5,d=0,p=1,g=-2,m=-3,b=-5,v=-1,C=1,E=2,S=3,A=4,_=0,w=2,R=8,B=9,k=15,T=8,x=286,y=30,I=19,D=2*x+1,O=15,F=3,P=258,N=P+F+1,L=32,M=42,W=69,U=73,H=91,V=103,z=113,X=666,G=1,j=2,K=3,Y=4,$=3
function Z(e,t){return e.msg=i[t],t}function Q(e){return(e<<1)-(e>4?9:0)}function J(e){for(var t=e.length;--t>=0;)e[t]=0}function q(e){var t=e.state,r=t.pending
r>e.avail_out&&(r=e.avail_out),0!==r&&(n.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,0===t.pending&&(t.pending_out=0))}function ee(e,t){a._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,q(e.strm)}function te(e,t){e.pending_buf[e.pending++]=t}function re(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=255&t}function ne(e,t,r,a){var i=e.avail_in
return i>a&&(i=a),0===i?0:(e.avail_in-=i,n.arraySet(t,e.input,e.next_in,i,r),1===e.state.wrap?e.adler=s(e.adler,t,i,r):2===e.state.wrap&&(e.adler=o(e.adler,t,i,r)),e.next_in+=i,e.total_in+=i,i)}function ae(e,t){var r,n,a=e.max_chain_length,s=e.strstart,o=e.prev_length,i=e.nice_match,l=e.strstart>e.w_size-N?e.strstart-(e.w_size-N):0,c=e.window,f=e.w_mask,h=e.prev,u=e.strstart+P,d=c[s+o-1],p=c[s+o]
e.prev_length>=e.good_match&&(a>>=2),i>e.lookahead&&(i=e.lookahead)
do{if(c[(r=t)+o]===p&&c[r+o-1]===d&&c[r]===c[s]&&c[++r]===c[s+1]){s+=2,r++
do{}while(c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&c[++s]===c[++r]&&s<u)
if(n=P-(u-s),s=u-P,n>o){if(e.match_start=t,o=n,n>=i)break
d=c[s+o-1],p=c[s+o]}}}while((t=h[t&f])>l&&0!=--a)
return o<=e.lookahead?o:e.lookahead}function se(e){var t,r,a,s,o,i=e.w_size
do{if(s=e.window_size-e.lookahead-e.strstart,e.strstart>=i+(i-N)){n.arraySet(e.window,e.window,i,i,0),e.match_start-=i,e.strstart-=i,e.block_start-=i,t=r=e.hash_size
do{a=e.head[--t],e.head[t]=a>=i?a-i:0}while(--r)
t=r=i
do{a=e.prev[--t],e.prev[t]=a>=i?a-i:0}while(--r)
s+=i}if(0===e.strm.avail_in)break
if(r=ne(e.strm,e.window,e.strstart+e.lookahead,s),e.lookahead+=r,e.lookahead+e.insert>=F)for(o=e.strstart-e.insert,e.ins_h=e.window[o],e.ins_h=(e.ins_h<<e.hash_shift^e.window[o+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[o+F-1])&e.hash_mask,e.prev[o&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=o,o++,e.insert--,!(e.lookahead+e.insert<F)););}while(e.lookahead<N&&0!==e.strm.avail_in)}function oe(e,t){for(var r,n;;){if(e.lookahead<N){if(se(e),e.lookahead<N&&t===l)return G
if(0===e.lookahead)break}if(r=0,e.lookahead>=F&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+F-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),0!==r&&e.strstart-r<=e.w_size-N&&(e.match_length=ae(e,r)),e.match_length>=F)if(n=a._tr_tally(e,e.strstart-e.match_start,e.match_length-F),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=F){e.match_length--
do{e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+F-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart}while(0!=--e.match_length)
e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask
else n=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++
if(n&&(ee(e,!1),0===e.strm.avail_out))return G}return e.insert=e.strstart<F-1?e.strstart:F-1,t===h?(ee(e,!0),0===e.strm.avail_out?K:Y):e.last_lit&&(ee(e,!1),0===e.strm.avail_out)?G:j}function ie(e,t){for(var r,n,s;;){if(e.lookahead<N){if(se(e),e.lookahead<N&&t===l)return G
if(0===e.lookahead)break}if(r=0,e.lookahead>=F&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+F-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=F-1,0!==r&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-N&&(e.match_length=ae(e,r),e.match_length<=5&&(e.strategy===C||e.match_length===F&&e.strstart-e.match_start>4096)&&(e.match_length=F-1)),e.prev_length>=F&&e.match_length<=e.prev_length){s=e.strstart+e.lookahead-F,n=a._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-F),e.lookahead-=e.prev_length-1,e.prev_length-=2
do{++e.strstart<=s&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+F-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart)}while(0!=--e.prev_length)
if(e.match_available=0,e.match_length=F-1,e.strstart++,n&&(ee(e,!1),0===e.strm.avail_out))return G}else if(e.match_available){if((n=a._tr_tally(e,0,e.window[e.strstart-1]))&&ee(e,!1),e.strstart++,e.lookahead--,0===e.strm.avail_out)return G}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(n=a._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<F-1?e.strstart:F-1,t===h?(ee(e,!0),0===e.strm.avail_out?K:Y):e.last_lit&&(ee(e,!1),0===e.strm.avail_out)?G:j}var le,ce=function(e,t,r,n,a){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=n,this.func=a}
function fe(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=R,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0
this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new n.Buf16(2*D),this.dyn_dtree=new n.Buf16(2*(2*y+1)),this.bl_tree=new n.Buf16(2*(2*I+1)),J(this.dyn_ltree),J(this.dyn_dtree),J(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new n.Buf16(O+1),this.heap=new n.Buf16(2*x+1),J(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new n.Buf16(2*x+1),J(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0
this.insert=0,this.bi_buf=0,this.bi_valid=0}function he(e){var t
return e&&e.state?(e.total_in=e.total_out=0,e.data_type=w,(t=e.state).pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?M:z,e.adler=2===t.wrap?0:1,t.last_flush=l,a._tr_init(t),d):Z(e,g)}function ue(e){var t=he(e)
return t===d&&function(e){e.window_size=2*e.w_size,J(e.head),e.max_lazy_match=le[e.level].max_lazy,e.good_match=le[e.level].good_length,e.nice_match=le[e.level].nice_length,e.max_chain_length=le[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=F-1,e.match_available=0,e.ins_h=0}(e.state),t}function de(e,t,r,a,s,o){if(!e)return g
var i=1
if(t===v&&(t=6),a<0?(i=0,a=-a):a>15&&(i=2,a-=16),s<1||s>B||r!==R||a<8||a>15||t<0||t>9||o<0||o>A)return Z(e,g)
8===a&&(a=9)
var l=new fe
return e.state=l,l.strm=e,l.wrap=i,l.gzhead=null,l.w_bits=a,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=s+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+F-1)/F),l.window=new n.Buf8(2*l.w_size),l.head=new n.Buf16(l.hash_size),l.prev=new n.Buf16(l.w_size),l.lit_bufsize=1<<s+6,l.pending_buf_size=4*l.lit_bufsize,l.pending_buf=new n.Buf8(l.pending_buf_size),l.d_buf=l.lit_bufsize>>1,l.l_buf=3*l.lit_bufsize,l.level=t,l.strategy=o,l.method=r,ue(e)}le=[new ce(0,0,0,0,function(e,t){var r=65535
for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(se(e),0===e.lookahead&&t===l)return G
if(0===e.lookahead)break}e.strstart+=e.lookahead,e.lookahead=0
var n=e.block_start+r
if((0===e.strstart||e.strstart>=n)&&(e.lookahead=e.strstart-n,e.strstart=n,ee(e,!1),0===e.strm.avail_out))return G
if(e.strstart-e.block_start>=e.w_size-N&&(ee(e,!1),0===e.strm.avail_out))return G}return e.insert=0,t===h?(ee(e,!0),0===e.strm.avail_out?K:Y):(e.strstart>e.block_start&&(ee(e,!1),e.strm.avail_out),G)}),new ce(4,4,8,4,oe),new ce(4,5,16,8,oe),new ce(4,6,32,32,oe),new ce(4,4,16,16,ie),new ce(8,16,32,32,ie),new ce(8,16,128,128,ie),new ce(8,32,128,256,ie),new ce(32,128,258,1024,ie),new ce(32,258,258,4096,ie)],r.deflateInit=function(e,t){return de(e,t,R,k,T,_)},r.deflateInit2=de,r.deflateReset=ue,r.deflateResetKeep=he,r.deflateSetHeader=function(e,t){return e&&e.state?2!==e.state.wrap?g:(e.state.gzhead=t,d):g},r.deflate=function(e,t){var r,n,s,i
if(!e||!e.state||t>u||t<0)return e?Z(e,g):g
if(n=e.state,!e.output||!e.input&&0!==e.avail_in||n.status===X&&t!==h)return Z(e,0===e.avail_out?b:g)
if(n.strm=e,r=n.last_flush,n.last_flush=t,n.status===M)if(2===n.wrap)e.adler=0,te(n,31),te(n,139),te(n,8),n.gzhead?(te(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),te(n,255&n.gzhead.time),te(n,n.gzhead.time>>8&255),te(n,n.gzhead.time>>16&255),te(n,n.gzhead.time>>24&255),te(n,9===n.level?2:n.strategy>=E||n.level<2?4:0),te(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(te(n,255&n.gzhead.extra.length),te(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=o(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=W):(te(n,0),te(n,0),te(n,0),te(n,0),te(n,0),te(n,9===n.level?2:n.strategy>=E||n.level<2?4:0),te(n,$),n.status=z)
else{var m=R+(n.w_bits-8<<4)<<8
m|=(n.strategy>=E||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(m|=L),m+=31-m%31,n.status=z,re(n,m),0!==n.strstart&&(re(n,e.adler>>>16),re(n,65535&e.adler)),e.adler=1}if(n.status===W)if(n.gzhead.extra){for(s=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),q(e),s=n.pending,n.pending!==n.pending_buf_size));)te(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++
n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=U)}else n.status=U
if(n.status===U)if(n.gzhead.name){s=n.pending
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),q(e),s=n.pending,n.pending===n.pending_buf_size)){i=1
break}i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,te(n,i)}while(0!==i)
n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),0===i&&(n.gzindex=0,n.status=H)}else n.status=H
if(n.status===H)if(n.gzhead.comment){s=n.pending
do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),q(e),s=n.pending,n.pending===n.pending_buf_size)){i=1
break}i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,te(n,i)}while(0!==i)
n.gzhead.hcrc&&n.pending>s&&(e.adler=o(e.adler,n.pending_buf,n.pending-s,s)),0===i&&(n.status=V)}else n.status=V
if(n.status===V&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&q(e),n.pending+2<=n.pending_buf_size&&(te(n,255&e.adler),te(n,e.adler>>8&255),e.adler=0,n.status=z)):n.status=z),0!==n.pending){if(q(e),0===e.avail_out)return n.last_flush=-1,d}else if(0===e.avail_in&&Q(t)<=Q(r)&&t!==h)return Z(e,b)
if(n.status===X&&0!==e.avail_in)return Z(e,b)
if(0!==e.avail_in||0!==n.lookahead||t!==l&&n.status!==X){var v=n.strategy===E?function(e,t){for(var r;;){if(0===e.lookahead&&(se(e),0===e.lookahead)){if(t===l)return G
break}if(e.match_length=0,r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(ee(e,!1),0===e.strm.avail_out))return G}return e.insert=0,t===h?(ee(e,!0),0===e.strm.avail_out?K:Y):e.last_lit&&(ee(e,!1),0===e.strm.avail_out)?G:j}(n,t):n.strategy===S?function(e,t){for(var r,n,s,o,i=e.window;;){if(e.lookahead<=P){if(se(e),e.lookahead<=P&&t===l)return G
if(0===e.lookahead)break}if(e.match_length=0,e.lookahead>=F&&e.strstart>0&&(n=i[s=e.strstart-1])===i[++s]&&n===i[++s]&&n===i[++s]){o=e.strstart+P
do{}while(n===i[++s]&&n===i[++s]&&n===i[++s]&&n===i[++s]&&n===i[++s]&&n===i[++s]&&n===i[++s]&&n===i[++s]&&s<o)
e.match_length=P-(o-s),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=F?(r=a._tr_tally(e,1,e.match_length-F),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=a._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(ee(e,!1),0===e.strm.avail_out))return G}return e.insert=0,t===h?(ee(e,!0),0===e.strm.avail_out?K:Y):e.last_lit&&(ee(e,!1),0===e.strm.avail_out)?G:j}(n,t):le[n.level].func(n,t)
if(v!==K&&v!==Y||(n.status=X),v===G||v===K)return 0===e.avail_out&&(n.last_flush=-1),d
if(v===j&&(t===c?a._tr_align(n):t!==u&&(a._tr_stored_block(n,0,0,!1),t===f&&(J(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),q(e),0===e.avail_out))return n.last_flush=-1,d}return t!==h?d:n.wrap<=0?p:(2===n.wrap?(te(n,255&e.adler),te(n,e.adler>>8&255),te(n,e.adler>>16&255),te(n,e.adler>>24&255),te(n,255&e.total_in),te(n,e.total_in>>8&255),te(n,e.total_in>>16&255),te(n,e.total_in>>24&255)):(re(n,e.adler>>>16),re(n,65535&e.adler)),q(e),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?d:p)},r.deflateEnd=function(e){var t
return e&&e.state?(t=e.state.status)!==M&&t!==W&&t!==U&&t!==H&&t!==V&&t!==z&&t!==X?Z(e,g):(e.state=null,t===z?Z(e,m):d):g},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(e,t,r){"use strict"
t.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],34:[function(e,t,r){"use strict"
t.exports=function(e,t){var r,n,a,s,o,i,l,c,f,h,u,d,p,g,m,b,v,C,E,S,A,_,w,R,B
r=e.state,n=e.next_in,R=e.input,a=n+(e.avail_in-5),s=e.next_out,B=e.output,o=s-(t-e.avail_out),i=s+(e.avail_out-257),l=r.dmax,c=r.wsize,f=r.whave,h=r.wnext,u=r.window,d=r.hold,p=r.bits,g=r.lencode,m=r.distcode,b=(1<<r.lenbits)-1,v=(1<<r.distbits)-1
e:do{p<15&&(d+=R[n++]<<p,p+=8,d+=R[n++]<<p,p+=8),C=g[d&b]
t:for(;;){if(d>>>=E=C>>>24,p-=E,0===(E=C>>>16&255))B[s++]=65535&C
else{if(!(16&E)){if(0==(64&E)){C=g[(65535&C)+(d&(1<<E)-1)]
continue t}if(32&E){r.mode=12
break e}e.msg="invalid literal/length code",r.mode=30
break e}S=65535&C,(E&=15)&&(p<E&&(d+=R[n++]<<p,p+=8),S+=d&(1<<E)-1,d>>>=E,p-=E),p<15&&(d+=R[n++]<<p,p+=8,d+=R[n++]<<p,p+=8),C=m[d&v]
r:for(;;){if(d>>>=E=C>>>24,p-=E,!(16&(E=C>>>16&255))){if(0==(64&E)){C=m[(65535&C)+(d&(1<<E)-1)]
continue r}e.msg="invalid distance code",r.mode=30
break e}if(A=65535&C,p<(E&=15)&&(d+=R[n++]<<p,(p+=8)<E&&(d+=R[n++]<<p,p+=8)),(A+=d&(1<<E)-1)>l){e.msg="invalid distance too far back",r.mode=30
break e}if(d>>>=E,p-=E,A>(E=s-o)){if((E=A-E)>f&&r.sane){e.msg="invalid distance too far back",r.mode=30
break e}if(_=0,w=u,0===h){if(_+=c-E,E<S){S-=E
do{B[s++]=u[_++]}while(--E)
_=s-A,w=B}}else if(h<E){if(_+=c+h-E,(E-=h)<S){S-=E
do{B[s++]=u[_++]}while(--E)
if(_=0,h<S){S-=E=h
do{B[s++]=u[_++]}while(--E)
_=s-A,w=B}}}else if(_+=h-E,E<S){S-=E
do{B[s++]=u[_++]}while(--E)
_=s-A,w=B}for(;S>2;)B[s++]=w[_++],B[s++]=w[_++],B[s++]=w[_++],S-=3
S&&(B[s++]=w[_++],S>1&&(B[s++]=w[_++]))}else{_=s-A
do{B[s++]=B[_++],B[s++]=B[_++],B[s++]=B[_++],S-=3}while(S>2)
S&&(B[s++]=B[_++],S>1&&(B[s++]=B[_++]))}break}}break}}while(n<a&&s<i)
n-=S=p>>3,d&=(1<<(p-=S<<3))-1,e.next_in=n,e.next_out=s,e.avail_in=n<a?a-n+5:5-(n-a),e.avail_out=s<i?i-s+257:257-(s-i),r.hold=d,r.bits=p}},{}],35:[function(e,t,r){"use strict"
var n=e("../utils/common"),a=e("./adler32"),s=e("./crc32"),o=e("./inffast"),i=e("./inftrees"),l=0,c=1,f=2,h=4,u=5,d=6,p=0,g=1,m=2,b=-2,v=-3,C=-4,E=-5,S=8,A=1,_=2,w=3,R=4,B=5,k=6,T=7,x=8,y=9,I=10,D=11,O=12,F=13,P=14,N=15,L=16,M=17,W=18,U=19,H=20,V=21,z=22,X=23,G=24,j=25,K=26,Y=27,$=28,Z=29,Q=30,J=31,q=32,ee=852,te=592,re=15
function ne(e){return(e>>>24&255)+(e>>>8&65280)+((65280&e)<<8)+((255&e)<<24)}function ae(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288)
this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function se(e){var t
return e&&e.state?(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=1&t.wrap),t.mode=A,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new n.Buf32(ee),t.distcode=t.distdyn=new n.Buf32(te),t.sane=1,t.back=-1,p):b}function oe(e){var t
return e&&e.state?((t=e.state).wsize=0,t.whave=0,t.wnext=0,se(e)):b}function ie(e,t){var r,n
return e&&e.state?(n=e.state,t<0?(r=0,t=-t):(r=1+(t>>4),t<48&&(t&=15)),t&&(t<8||t>15)?b:(null!==n.window&&n.wbits!==t&&(n.window=null),n.wrap=r,n.wbits=t,oe(e))):b}function le(e,t){var r,n
return e?(n=new ae,e.state=n,n.window=null,(r=ie(e,t))!==p&&(e.state=null),r):b}var ce,fe,he=!0
function ue(e){if(he){var t
for(ce=new n.Buf32(512),fe=new n.Buf32(32),t=0;t<144;)e.lens[t++]=8
for(;t<256;)e.lens[t++]=9
for(;t<280;)e.lens[t++]=7
for(;t<288;)e.lens[t++]=8
for(i(c,e.lens,0,288,ce,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5
i(f,e.lens,0,32,fe,0,e.work,{bits:5}),he=!1}e.lencode=ce,e.lenbits=9,e.distcode=fe,e.distbits=5}r.inflateReset=oe,r.inflateReset2=ie,r.inflateResetKeep=se,r.inflateInit=function(e){return le(e,re)},r.inflateInit2=le,r.inflate=function(e,t){var r,ee,te,re,ae,se,oe,ie,le,ce,fe,he,de,pe,ge,me,be,ve,Ce,Ee,Se,Ae,_e,we,Re=0,Be=new n.Buf8(4),ke=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]
if(!e||!e.state||!e.output||!e.input&&0!==e.avail_in)return b;(r=e.state).mode===O&&(r.mode=F),ae=e.next_out,te=e.output,oe=e.avail_out,re=e.next_in,ee=e.input,se=e.avail_in,ie=r.hold,le=r.bits,ce=se,fe=oe,Ae=p
e:for(;;)switch(r.mode){case A:if(0===r.wrap){r.mode=F
break}for(;le<16;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(2&r.wrap&&35615===ie){r.check=0,Be[0]=255&ie,Be[1]=ie>>>8&255,r.check=s(r.check,Be,2,0),ie=0,le=0,r.mode=_
break}if(r.flags=0,r.head&&(r.head.done=!1),!(1&r.wrap)||(((255&ie)<<8)+(ie>>8))%31){e.msg="incorrect header check",r.mode=Q
break}if((15&ie)!==S){e.msg="unknown compression method",r.mode=Q
break}if(le-=4,Se=8+(15&(ie>>>=4)),0===r.wbits)r.wbits=Se
else if(Se>r.wbits){e.msg="invalid window size",r.mode=Q
break}r.dmax=1<<Se,e.adler=r.check=1,r.mode=512&ie?I:O,ie=0,le=0
break
case _:for(;le<16;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(r.flags=ie,(255&r.flags)!==S){e.msg="unknown compression method",r.mode=Q
break}if(57344&r.flags){e.msg="unknown header flags set",r.mode=Q
break}r.head&&(r.head.text=ie>>8&1),512&r.flags&&(Be[0]=255&ie,Be[1]=ie>>>8&255,r.check=s(r.check,Be,2,0)),ie=0,le=0,r.mode=w
case w:for(;le<32;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}r.head&&(r.head.time=ie),512&r.flags&&(Be[0]=255&ie,Be[1]=ie>>>8&255,Be[2]=ie>>>16&255,Be[3]=ie>>>24&255,r.check=s(r.check,Be,4,0)),ie=0,le=0,r.mode=R
case R:for(;le<16;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}r.head&&(r.head.xflags=255&ie,r.head.os=ie>>8),512&r.flags&&(Be[0]=255&ie,Be[1]=ie>>>8&255,r.check=s(r.check,Be,2,0)),ie=0,le=0,r.mode=B
case B:if(1024&r.flags){for(;le<16;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}r.length=ie,r.head&&(r.head.extra_len=ie),512&r.flags&&(Be[0]=255&ie,Be[1]=ie>>>8&255,r.check=s(r.check,Be,2,0)),ie=0,le=0}else r.head&&(r.head.extra=null)
r.mode=k
case k:if(1024&r.flags&&((he=r.length)>se&&(he=se),he&&(r.head&&(Se=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),n.arraySet(r.head.extra,ee,re,he,Se)),512&r.flags&&(r.check=s(r.check,ee,he,re)),se-=he,re+=he,r.length-=he),r.length))break e
r.length=0,r.mode=T
case T:if(2048&r.flags){if(0===se)break e
he=0
do{Se=ee[re+he++],r.head&&Se&&r.length<65536&&(r.head.name+=String.fromCharCode(Se))}while(Se&&he<se)
if(512&r.flags&&(r.check=s(r.check,ee,he,re)),se-=he,re+=he,Se)break e}else r.head&&(r.head.name=null)
r.length=0,r.mode=x
case x:if(4096&r.flags){if(0===se)break e
he=0
do{Se=ee[re+he++],r.head&&Se&&r.length<65536&&(r.head.comment+=String.fromCharCode(Se))}while(Se&&he<se)
if(512&r.flags&&(r.check=s(r.check,ee,he,re)),se-=he,re+=he,Se)break e}else r.head&&(r.head.comment=null)
r.mode=y
case y:if(512&r.flags){for(;le<16;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(ie!==(65535&r.check)){e.msg="header crc mismatch",r.mode=Q
break}ie=0,le=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=O
break
case I:for(;le<32;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}e.adler=r.check=ne(ie),ie=0,le=0,r.mode=D
case D:if(0===r.havedict)return e.next_out=ae,e.avail_out=oe,e.next_in=re,e.avail_in=se,r.hold=ie,r.bits=le,m
e.adler=r.check=1,r.mode=O
case O:if(t===u||t===d)break e
case F:if(r.last){ie>>>=7&le,le-=7&le,r.mode=Y
break}for(;le<3;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}switch(r.last=1&ie,le-=1,3&(ie>>>=1)){case 0:r.mode=P
break
case 1:if(ue(r),r.mode=H,t===d){ie>>>=2,le-=2
break e}break
case 2:r.mode=M
break
case 3:e.msg="invalid block type",r.mode=Q}ie>>>=2,le-=2
break
case P:for(ie>>>=7&le,le-=7&le;le<32;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if((65535&ie)!=(ie>>>16^65535)){e.msg="invalid stored block lengths",r.mode=Q
break}if(r.length=65535&ie,ie=0,le=0,r.mode=N,t===d)break e
case N:r.mode=L
case L:if(he=r.length){if(he>se&&(he=se),he>oe&&(he=oe),0===he)break e
n.arraySet(te,ee,re,he,ae),se-=he,re+=he,oe-=he,ae+=he,r.length-=he
break}r.mode=O
break
case M:for(;le<14;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(r.nlen=257+(31&ie),ie>>>=5,le-=5,r.ndist=1+(31&ie),ie>>>=5,le-=5,r.ncode=4+(15&ie),ie>>>=4,le-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=Q
break}r.have=0,r.mode=W
case W:for(;r.have<r.ncode;){for(;le<3;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}r.lens[ke[r.have++]]=7&ie,ie>>>=3,le-=3}for(;r.have<19;)r.lens[ke[r.have++]]=0
if(r.lencode=r.lendyn,r.lenbits=7,_e={bits:r.lenbits},Ae=i(l,r.lens,0,19,r.lencode,0,r.work,_e),r.lenbits=_e.bits,Ae){e.msg="invalid code lengths set",r.mode=Q
break}r.have=0,r.mode=U
case U:for(;r.have<r.nlen+r.ndist;){for(;me=(Re=r.lencode[ie&(1<<r.lenbits)-1])>>>16&255,be=65535&Re,!((ge=Re>>>24)<=le);){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(be<16)ie>>>=ge,le-=ge,r.lens[r.have++]=be
else{if(16===be){for(we=ge+2;le<we;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(ie>>>=ge,le-=ge,0===r.have){e.msg="invalid bit length repeat",r.mode=Q
break}Se=r.lens[r.have-1],he=3+(3&ie),ie>>>=2,le-=2}else if(17===be){for(we=ge+3;le<we;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}le-=ge,Se=0,he=3+(7&(ie>>>=ge)),ie>>>=3,le-=3}else{for(we=ge+7;le<we;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}le-=ge,Se=0,he=11+(127&(ie>>>=ge)),ie>>>=7,le-=7}if(r.have+he>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=Q
break}for(;he--;)r.lens[r.have++]=Se}}if(r.mode===Q)break
if(0===r.lens[256]){e.msg="invalid code -- missing end-of-block",r.mode=Q
break}if(r.lenbits=9,_e={bits:r.lenbits},Ae=i(c,r.lens,0,r.nlen,r.lencode,0,r.work,_e),r.lenbits=_e.bits,Ae){e.msg="invalid literal/lengths set",r.mode=Q
break}if(r.distbits=6,r.distcode=r.distdyn,_e={bits:r.distbits},Ae=i(f,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,_e),r.distbits=_e.bits,Ae){e.msg="invalid distances set",r.mode=Q
break}if(r.mode=H,t===d)break e
case H:r.mode=V
case V:if(se>=6&&oe>=258){e.next_out=ae,e.avail_out=oe,e.next_in=re,e.avail_in=se,r.hold=ie,r.bits=le,o(e,fe),ae=e.next_out,te=e.output,oe=e.avail_out,re=e.next_in,ee=e.input,se=e.avail_in,ie=r.hold,le=r.bits,r.mode===O&&(r.back=-1)
break}for(r.back=0;me=(Re=r.lencode[ie&(1<<r.lenbits)-1])>>>16&255,be=65535&Re,!((ge=Re>>>24)<=le);){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(me&&0==(240&me)){for(ve=ge,Ce=me,Ee=be;me=(Re=r.lencode[Ee+((ie&(1<<ve+Ce)-1)>>ve)])>>>16&255,be=65535&Re,!(ve+(ge=Re>>>24)<=le);){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}ie>>>=ve,le-=ve,r.back+=ve}if(ie>>>=ge,le-=ge,r.back+=ge,r.length=be,0===me){r.mode=K
break}if(32&me){r.back=-1,r.mode=O
break}if(64&me){e.msg="invalid literal/length code",r.mode=Q
break}r.extra=15&me,r.mode=z
case z:if(r.extra){for(we=r.extra;le<we;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}r.length+=ie&(1<<r.extra)-1,ie>>>=r.extra,le-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=X
case X:for(;me=(Re=r.distcode[ie&(1<<r.distbits)-1])>>>16&255,be=65535&Re,!((ge=Re>>>24)<=le);){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(0==(240&me)){for(ve=ge,Ce=me,Ee=be;me=(Re=r.distcode[Ee+((ie&(1<<ve+Ce)-1)>>ve)])>>>16&255,be=65535&Re,!(ve+(ge=Re>>>24)<=le);){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}ie>>>=ve,le-=ve,r.back+=ve}if(ie>>>=ge,le-=ge,r.back+=ge,64&me){e.msg="invalid distance code",r.mode=Q
break}r.offset=be,r.extra=15&me,r.mode=G
case G:if(r.extra){for(we=r.extra;le<we;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}r.offset+=ie&(1<<r.extra)-1,ie>>>=r.extra,le-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=Q
break}r.mode=j
case j:if(0===oe)break e
if(he=fe-oe,r.offset>he){if((he=r.offset-he)>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=Q
break}he>r.wnext?(he-=r.wnext,de=r.wsize-he):de=r.wnext-he,he>r.length&&(he=r.length),pe=r.window}else pe=te,de=ae-r.offset,he=r.length
he>oe&&(he=oe),oe-=he,r.length-=he
do{te[ae++]=pe[de++]}while(--he)
0===r.length&&(r.mode=V)
break
case K:if(0===oe)break e
te[ae++]=r.length,oe--,r.mode=V
break
case Y:if(r.wrap){for(;le<32;){if(0===se)break e
se--,ie|=ee[re++]<<le,le+=8}if(fe-=oe,e.total_out+=fe,r.total+=fe,fe&&(e.adler=r.check=r.flags?s(r.check,te,fe,ae-fe):a(r.check,te,fe,ae-fe)),fe=oe,(r.flags?ie:ne(ie))!==r.check){e.msg="incorrect data check",r.mode=Q
break}ie=0,le=0}r.mode=$
case $:if(r.wrap&&r.flags){for(;le<32;){if(0===se)break e
se--,ie+=ee[re++]<<le,le+=8}if(ie!==(4294967295&r.total)){e.msg="incorrect length check",r.mode=Q
break}ie=0,le=0}r.mode=Z
case Z:Ae=g
break e
case Q:Ae=v
break e
case J:return C
case q:default:return b}return e.next_out=ae,e.avail_out=oe,e.next_in=re,e.avail_in=se,r.hold=ie,r.bits=le,(r.wsize||fe!==e.avail_out&&r.mode<Q&&(r.mode<Y||t!==h))&&function(e,t,r,a){var s,o=e.state
return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new n.Buf8(o.wsize)),a>=o.wsize?(n.arraySet(o.window,t,r-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):((s=o.wsize-o.wnext)>a&&(s=a),n.arraySet(o.window,t,r-a,s,o.wnext),(a-=s)?(n.arraySet(o.window,t,r-a,a,0),o.wnext=a,o.whave=o.wsize):(o.wnext+=s,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=s))),0}(e,e.output,e.next_out,fe-e.avail_out)?(r.mode=J,C):(ce-=e.avail_in,fe-=e.avail_out,e.total_in+=ce,e.total_out+=fe,r.total+=fe,r.wrap&&fe&&(e.adler=r.check=r.flags?s(r.check,te,fe,e.next_out-fe):a(r.check,te,fe,e.next_out-fe)),e.data_type=r.bits+(r.last?64:0)+(r.mode===O?128:0)+(r.mode===H||r.mode===N?256:0),(0===ce&&0===fe||t===h)&&Ae===p&&(Ae=E),Ae)},r.inflateEnd=function(e){if(!e||!e.state)return b
var t=e.state
return t.window&&(t.window=null),e.state=null,p},r.inflateGetHeader=function(e,t){var r
return e&&e.state?0==(2&(r=e.state).wrap)?b:(r.head=t,t.done=!1,p):b},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(e,t,r){"use strict"
var n=e("../utils/common"),a=15,s=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],i=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],l=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]
t.exports=function(e,t,r,c,f,h,u,d){var p,g,m,b,v,C,E,S,A,_=d.bits,w=0,R=0,B=0,k=0,T=0,x=0,y=0,I=0,D=0,O=0,F=null,P=0,N=new n.Buf16(16),L=new n.Buf16(16),M=null,W=0
for(w=0;w<=a;w++)N[w]=0
for(R=0;R<c;R++)N[t[r+R]]++
for(T=_,k=a;k>=1&&0===N[k];k--);if(T>k&&(T=k),0===k)return f[h++]=20971520,f[h++]=20971520,d.bits=1,0
for(B=1;B<k&&0===N[B];B++);for(T<B&&(T=B),I=1,w=1;w<=a;w++)if(I<<=1,(I-=N[w])<0)return-1
if(I>0&&(0===e||1!==k))return-1
for(L[1]=0,w=1;w<a;w++)L[w+1]=L[w]+N[w]
for(R=0;R<c;R++)0!==t[r+R]&&(u[L[t[r+R]]++]=R)
if(0===e?(F=M=u,C=19):1===e?(F=s,P-=257,M=o,W-=257,C=256):(F=i,M=l,C=-1),O=0,R=0,w=B,v=h,x=T,y=0,m=-1,b=(D=1<<T)-1,1===e&&D>852||2===e&&D>592)return 1
for(;;){0,E=w-y,u[R]<C?(S=0,A=u[R]):u[R]>C?(S=M[W+u[R]],A=F[P+u[R]]):(S=96,A=0),p=1<<w-y,B=g=1<<x
do{f[v+(O>>y)+(g-=p)]=E<<24|S<<16|A|0}while(0!==g)
for(p=1<<w-1;O&p;)p>>=1
if(0!==p?(O&=p-1,O+=p):O=0,R++,0==--N[w]){if(w===k)break
w=t[r+u[R]]}if(w>T&&(O&b)!==m){for(0===y&&(y=T),v+=B,I=1<<(x=w-y);x+y<k&&!((I-=N[x+y])<=0);)x++,I<<=1
if(D+=1<<x,1===e&&D>852||2===e&&D>592)return 1
f[m=O&b]=T<<24|x<<16|v-h|0}}return 0!==O&&(f[v+O]=w-y<<24|64<<16|0),d.bits=T,0}},{"../utils/common":27}],37:[function(e,t,r){"use strict"
t.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(e,t,r){"use strict"
var n=e("../utils/common"),a=4,s=0,o=1,i=2
function l(e){for(var t=e.length;--t>=0;)e[t]=0}var c=0,f=1,h=2,u=29,d=256,p=d+1+u,g=30,m=19,b=2*p+1,v=15,C=16,E=7,S=256,A=16,_=17,w=18,R=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],B=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],k=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],T=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],x=new Array(2*(p+2))
l(x)
var y=new Array(2*g)
l(y)
var I=new Array(512)
l(I)
var D=new Array(256)
l(D)
var O=new Array(u)
l(O)
var F=new Array(g)
l(F)
var P,N,L,M=function(e,t,r,n,a){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=n,this.max_length=a,this.has_stree=e&&e.length},W=function(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}
function U(e){return e<256?I[e]:I[256+(e>>>7)]}function H(e,t){e.pending_buf[e.pending++]=255&t,e.pending_buf[e.pending++]=t>>>8&255}function V(e,t,r){e.bi_valid>C-r?(e.bi_buf|=t<<e.bi_valid&65535,H(e,e.bi_buf),e.bi_buf=t>>C-e.bi_valid,e.bi_valid+=r-C):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function z(e,t,r){V(e,r[2*t],r[2*t+1])}function X(e,t){var r=0
do{r|=1&e,e>>>=1,r<<=1}while(--t>0)
return r>>>1}function G(e,t,r){var n,a,s=new Array(v+1),o=0
for(n=1;n<=v;n++)s[n]=o=o+r[n-1]<<1
for(a=0;a<=t;a++){var i=e[2*a+1]
0!==i&&(e[2*a]=X(s[i]++,i))}}function j(e){var t
for(t=0;t<p;t++)e.dyn_ltree[2*t]=0
for(t=0;t<g;t++)e.dyn_dtree[2*t]=0
for(t=0;t<m;t++)e.bl_tree[2*t]=0
e.dyn_ltree[2*S]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function K(e){e.bi_valid>8?H(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Y(e,t,r,a){K(e),a&&(H(e,r),H(e,~r)),n.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}function $(e,t,r,n){var a=2*t,s=2*r
return e[a]<e[s]||e[a]===e[s]&&n[t]<=n[r]}function Z(e,t,r){for(var n=e.heap[r],a=r<<1;a<=e.heap_len&&(a<e.heap_len&&$(t,e.heap[a+1],e.heap[a],e.depth)&&a++,!$(t,n,e.heap[a],e.depth));)e.heap[r]=e.heap[a],r=a,a<<=1
e.heap[r]=n}function Q(e,t,r){var n,a,s,o,i=0
if(0!==e.last_lit)do{n=e.pending_buf[e.d_buf+2*i]<<8|e.pending_buf[e.d_buf+2*i+1],a=e.pending_buf[e.l_buf+i],i++,0===n?z(e,a,t):(z(e,(s=D[a])+d+1,t),0!==(o=R[s])&&V(e,a-=O[s],o),z(e,s=U(--n),r),0!==(o=B[s])&&V(e,n-=F[s],o))}while(i<e.last_lit)
z(e,S,t)}function J(e,t){var r,n,a,s=t.dyn_tree,o=t.stat_desc.static_tree,i=t.stat_desc.has_stree,l=t.stat_desc.elems,c=-1
for(e.heap_len=0,e.heap_max=b,r=0;r<l;r++)0!==s[2*r]?(e.heap[++e.heap_len]=c=r,e.depth[r]=0):s[2*r+1]=0
for(;e.heap_len<2;)s[2*(a=e.heap[++e.heap_len]=c<2?++c:0)]=1,e.depth[a]=0,e.opt_len--,i&&(e.static_len-=o[2*a+1])
for(t.max_code=c,r=e.heap_len>>1;r>=1;r--)Z(e,s,r)
a=l
do{r=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Z(e,s,1),n=e.heap[1],e.heap[--e.heap_max]=r,e.heap[--e.heap_max]=n,s[2*a]=s[2*r]+s[2*n],e.depth[a]=(e.depth[r]>=e.depth[n]?e.depth[r]:e.depth[n])+1,s[2*r+1]=s[2*n+1]=a,e.heap[1]=a++,Z(e,s,1)}while(e.heap_len>=2)
e.heap[--e.heap_max]=e.heap[1],function(e,t){var r,n,a,s,o,i,l=t.dyn_tree,c=t.max_code,f=t.stat_desc.static_tree,h=t.stat_desc.has_stree,u=t.stat_desc.extra_bits,d=t.stat_desc.extra_base,p=t.stat_desc.max_length,g=0
for(s=0;s<=v;s++)e.bl_count[s]=0
for(l[2*e.heap[e.heap_max]+1]=0,r=e.heap_max+1;r<b;r++)(s=l[2*l[2*(n=e.heap[r])+1]+1]+1)>p&&(s=p,g++),l[2*n+1]=s,n>c||(e.bl_count[s]++,o=0,n>=d&&(o=u[n-d]),i=l[2*n],e.opt_len+=i*(s+o),h&&(e.static_len+=i*(f[2*n+1]+o)))
if(0!==g){do{for(s=p-1;0===e.bl_count[s];)s--
e.bl_count[s]--,e.bl_count[s+1]+=2,e.bl_count[p]--,g-=2}while(g>0)
for(s=p;0!==s;s--)for(n=e.bl_count[s];0!==n;)(a=e.heap[--r])>c||(l[2*a+1]!==s&&(e.opt_len+=(s-l[2*a+1])*l[2*a],l[2*a+1]=s),n--)}}(e,t),G(s,c,e.bl_count)}function q(e,t,r){var n,a,s=-1,o=t[1],i=0,l=7,c=4
for(0===o&&(l=138,c=3),t[2*(r+1)+1]=65535,n=0;n<=r;n++)a=o,o=t[2*(n+1)+1],++i<l&&a===o||(i<c?e.bl_tree[2*a]+=i:0!==a?(a!==s&&e.bl_tree[2*a]++,e.bl_tree[2*A]++):i<=10?e.bl_tree[2*_]++:e.bl_tree[2*w]++,i=0,s=a,0===o?(l=138,c=3):a===o?(l=6,c=3):(l=7,c=4))}function ee(e,t,r){var n,a,s=-1,o=t[1],i=0,l=7,c=4
for(0===o&&(l=138,c=3),n=0;n<=r;n++)if(a=o,o=t[2*(n+1)+1],!(++i<l&&a===o)){if(i<c)do{z(e,a,e.bl_tree)}while(0!=--i)
else 0!==a?(a!==s&&(z(e,a,e.bl_tree),i--),z(e,A,e.bl_tree),V(e,i-3,2)):i<=10?(z(e,_,e.bl_tree),V(e,i-3,3)):(z(e,w,e.bl_tree),V(e,i-11,7))
i=0,s=a,0===o?(l=138,c=3):a===o?(l=6,c=3):(l=7,c=4)}}function te(e){var t,r=4093624447
for(t=0;t<=31;t++,r>>>=1)if(1&r&&0!==e.dyn_ltree[2*t])return s
if(0!==e.dyn_ltree[18]||0!==e.dyn_ltree[20]||0!==e.dyn_ltree[26])return o
for(t=32;t<d;t++)if(0!==e.dyn_ltree[2*t])return o
return s}var re=!1
function ne(e,t,r,n){V(e,(c<<1)+(n?1:0),3),Y(e,t,r,!0)}r._tr_init=function(e){re||(function(){var e,t,r,n,a,s=new Array(v+1)
for(r=0,n=0;n<u-1;n++)for(O[n]=r,e=0;e<1<<R[n];e++)D[r++]=n
for(D[r-1]=n,a=0,n=0;n<16;n++)for(F[n]=a,e=0;e<1<<B[n];e++)I[a++]=n
for(a>>=7;n<g;n++)for(F[n]=a<<7,e=0;e<1<<B[n]-7;e++)I[256+a++]=n
for(t=0;t<=v;t++)s[t]=0
for(e=0;e<=143;)x[2*e+1]=8,e++,s[8]++
for(;e<=255;)x[2*e+1]=9,e++,s[9]++
for(;e<=279;)x[2*e+1]=7,e++,s[7]++
for(;e<=287;)x[2*e+1]=8,e++,s[8]++
for(G(x,p+1,s),e=0;e<g;e++)y[2*e+1]=5,y[2*e]=X(e,5)
P=new M(x,R,d+1,p,v),N=new M(y,B,0,g,v),L=new M(new Array(0),k,0,m,E)}(),re=!0),e.l_desc=new W(e.dyn_ltree,P),e.d_desc=new W(e.dyn_dtree,N),e.bl_desc=new W(e.bl_tree,L),e.bi_buf=0,e.bi_valid=0,j(e)},r._tr_stored_block=ne,r._tr_flush_block=function(e,t,r,n){var s,o,l=0
e.level>0?(e.strm.data_type===i&&(e.strm.data_type=te(e)),J(e,e.l_desc),J(e,e.d_desc),l=function(e){var t
for(q(e,e.dyn_ltree,e.l_desc.max_code),q(e,e.dyn_dtree,e.d_desc.max_code),J(e,e.bl_desc),t=m-1;t>=3&&0===e.bl_tree[2*T[t]+1];t--);return e.opt_len+=3*(t+1)+5+5+4,t}(e),s=e.opt_len+3+7>>>3,(o=e.static_len+3+7>>>3)<=s&&(s=o)):s=o=r+5,r+4<=s&&-1!==t?ne(e,t,r,n):e.strategy===a||o===s?(V(e,(f<<1)+(n?1:0),3),Q(e,x,y)):(V(e,(h<<1)+(n?1:0),3),function(e,t,r,n){var a
for(V(e,t-257,5),V(e,r-1,5),V(e,n-4,4),a=0;a<n;a++)V(e,e.bl_tree[2*T[a]+1],3)
ee(e,e.dyn_ltree,t-1),ee(e,e.dyn_dtree,r-1)}(e,e.l_desc.max_code+1,e.d_desc.max_code+1,l+1),Q(e,e.dyn_ltree,e.dyn_dtree)),j(e),n&&K(e)},r._tr_tally=function(e,t,r){return e.pending_buf[e.d_buf+2*e.last_lit]=t>>>8&255,e.pending_buf[e.d_buf+2*e.last_lit+1]=255&t,e.pending_buf[e.l_buf+e.last_lit]=255&r,e.last_lit++,0===t?e.dyn_ltree[2*r]++:(e.matches++,t--,e.dyn_ltree[2*(D[r]+d+1)]++,e.dyn_dtree[2*U(t)]++),e.last_lit===e.lit_bufsize-1},r._tr_align=function(e){V(e,f<<1,3),z(e,S,x),function(e){16===e.bi_valid?(H(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}(e)}},{"../utils/common":27}],39:[function(e,t,r){"use strict"
t.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}]},{},[9])(9)})
var cptable={version:"1.14.0"}
cptable[437]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[620]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàąçêëèïîćÄĄĘęłôöĆûùŚÖÜ¢Ł¥śƒŹŻóÓńŃźż¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[737]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[850]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[852]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[857]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[861]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[865]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[866]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[874]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[895]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ČüéďäĎŤčěĚĹÍľǪÄÁÉžŽôöÓůÚýÖÜŠĽÝŘťáíóúňŇŮÔšřŕŔ¼§«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[932]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~���������������������������������｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ��������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[129]="����������������������������������������������������������������　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈〉《》「」『』【】＋－±×�÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓�����������∈∋⊆⊇⊂⊃∪∩��������∧∨￢⇒⇔∀∃�����������∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬�������Å‰♯♭♪†‡¶����◯���".split(""),e=0;e!=n[129].length;++e)65533!==n[129][e].charCodeAt(0)&&(r[n[129][e]]=33024+e,t[33024+e]=n[129][e])
for(n[130]="�������������������������������������������������������������������������������０１２３４５６７８９�������ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ�������ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ����ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん��������������".split(""),e=0;e!=n[130].length;++e)65533!==n[130][e].charCodeAt(0)&&(r[n[130][e]]=33280+e,t[33280+e]=n[130][e])
for(n[131]="����������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミ�ムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ��������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�����������������������������������������".split(""),e=0;e!=n[131].length;++e)65533!==n[131][e].charCodeAt(0)&&(r[n[131][e]]=33536+e,t[33536+e]=n[131][e])
for(n[132]="����������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмн�опрстуфхцчшщъыьэюя�������������─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂�����������������������������������������������������������������".split(""),e=0;e!=n[132].length;++e)65533!==n[132][e].charCodeAt(0)&&(r[n[132][e]]=33792+e,t[33792+e]=n[132][e])
for(n[135]="����������������������������������������������������������������①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ�㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡��������㍻�〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪���������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[135].length;++e)65533!==n[135][e].charCodeAt(0)&&(r[n[135][e]]=34560+e,t[34560+e]=n[135][e])
for(n[136]="���������������������������������������������������������������������������������������������������������������������������������������������������������������亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭���".split(""),e=0;e!=n[136].length;++e)65533!==n[136][e].charCodeAt(0)&&(r[n[136][e]]=34816+e,t[34816+e]=n[136][e])
for(n[137]="����������������������������������������������������������������院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円�園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改���".split(""),e=0;e!=n[137].length;++e)65533!==n[137][e].charCodeAt(0)&&(r[n[137][e]]=35072+e,t[35072+e]=n[137][e])
for(n[138]="����������������������������������������������������������������魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫�橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄���".split(""),e=0;e!=n[138].length;++e)65533!==n[138][e].charCodeAt(0)&&(r[n[138][e]]=35328+e,t[35328+e]=n[138][e])
for(n[139]="����������������������������������������������������������������機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救�朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈���".split(""),e=0;e!=n[139].length;++e)65533!==n[139][e].charCodeAt(0)&&(r[n[139][e]]=35584+e,t[35584+e]=n[139][e])
for(n[140]="����������������������������������������������������������������掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨�劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向���".split(""),e=0;e!=n[140].length;++e)65533!==n[140][e].charCodeAt(0)&&(r[n[140][e]]=35840+e,t[35840+e]=n[140][e])
for(n[141]="����������������������������������������������������������������后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降�項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷���".split(""),e=0;e!=n[141].length;++e)65533!==n[141][e].charCodeAt(0)&&(r[n[141][e]]=36096+e,t[36096+e]=n[141][e])
for(n[142]="����������������������������������������������������������������察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止�死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周���".split(""),e=0;e!=n[142].length;++e)65533!==n[142][e].charCodeAt(0)&&(r[n[142][e]]=36352+e,t[36352+e]=n[142][e])
for(n[143]="����������������������������������������������������������������宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳�準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾���".split(""),e=0;e!=n[143].length;++e)65533!==n[143][e].charCodeAt(0)&&(r[n[143][e]]=36608+e,t[36608+e]=n[143][e])
for(n[144]="����������������������������������������������������������������拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨�逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線���".split(""),e=0;e!=n[144].length;++e)65533!==n[144][e].charCodeAt(0)&&(r[n[144][e]]=36864+e,t[36864+e]=n[144][e])
for(n[145]="����������������������������������������������������������������繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻�操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只���".split(""),e=0;e!=n[145].length;++e)65533!==n[145][e].charCodeAt(0)&&(r[n[145][e]]=37120+e,t[37120+e]=n[145][e])
for(n[146]="����������������������������������������������������������������叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄�逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓���".split(""),e=0;e!=n[146].length;++e)65533!==n[146][e].charCodeAt(0)&&(r[n[146][e]]=37376+e,t[37376+e]=n[146][e])
for(n[147]="����������������������������������������������������������������邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬�凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入���".split(""),e=0;e!=n[147].length;++e)65533!==n[147][e].charCodeAt(0)&&(r[n[147][e]]=37632+e,t[37632+e]=n[147][e])
for(n[148]="����������������������������������������������������������������如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅�楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美���".split(""),e=0;e!=n[148].length;++e)65533!==n[148][e].charCodeAt(0)&&(r[n[148][e]]=37888+e,t[37888+e]=n[148][e])
for(n[149]="����������������������������������������������������������������鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷�斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋���".split(""),e=0;e!=n[149].length;++e)65533!==n[149][e].charCodeAt(0)&&(r[n[149][e]]=38144+e,t[38144+e]=n[149][e])
for(n[150]="����������������������������������������������������������������法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆�摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒���".split(""),e=0;e!=n[150].length;++e)65533!==n[150][e].charCodeAt(0)&&(r[n[150][e]]=38400+e,t[38400+e]=n[150][e])
for(n[151]="����������������������������������������������������������������諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲�沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯���".split(""),e=0;e!=n[151].length;++e)65533!==n[151][e].charCodeAt(0)&&(r[n[151][e]]=38656+e,t[38656+e]=n[151][e])
for(n[152]="����������������������������������������������������������������蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕��������������������������������������������弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲���".split(""),e=0;e!=n[152].length;++e)65533!==n[152][e].charCodeAt(0)&&(r[n[152][e]]=38912+e,t[38912+e]=n[152][e])
for(n[153]="����������������������������������������������������������������僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭�凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨���".split(""),e=0;e!=n[153].length;++e)65533!==n[153][e].charCodeAt(0)&&(r[n[153][e]]=39168+e,t[39168+e]=n[153][e])
for(n[154]="����������������������������������������������������������������咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸�噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩���".split(""),e=0;e!=n[154].length;++e)65533!==n[154][e].charCodeAt(0)&&(r[n[154][e]]=39424+e,t[39424+e]=n[154][e])
for(n[155]="����������������������������������������������������������������奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀�它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏���".split(""),e=0;e!=n[155].length;++e)65533!==n[155][e].charCodeAt(0)&&(r[n[155][e]]=39680+e,t[39680+e]=n[155][e])
for(n[156]="����������������������������������������������������������������廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠�怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛���".split(""),e=0;e!=n[156].length;++e)65533!==n[156][e].charCodeAt(0)&&(r[n[156][e]]=39936+e,t[39936+e]=n[156][e])
for(n[157]="����������������������������������������������������������������戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫�捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼���".split(""),e=0;e!=n[157].length;++e)65533!==n[157][e].charCodeAt(0)&&(r[n[157][e]]=40192+e,t[40192+e]=n[157][e])
for(n[158]="����������������������������������������������������������������曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎�梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣���".split(""),e=0;e!=n[158].length;++e)65533!==n[158][e].charCodeAt(0)&&(r[n[158][e]]=40448+e,t[40448+e]=n[158][e])
for(n[159]="����������������������������������������������������������������檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯�麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌���".split(""),e=0;e!=n[159].length;++e)65533!==n[159][e].charCodeAt(0)&&(r[n[159][e]]=40704+e,t[40704+e]=n[159][e])
for(n[224]="����������������������������������������������������������������漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝�烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱���".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="����������������������������������������������������������������瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿�痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬���".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="����������������������������������������������������������������磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰�窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆���".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="����������������������������������������������������������������紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷�縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋���".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="����������������������������������������������������������������隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤�艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈���".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="����������������������������������������������������������������蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬�蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞���".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="����������������������������������������������������������������襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧�諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊���".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="����������������������������������������������������������������蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜�轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮���".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="����������������������������������������������������������������錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙�閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰���".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="����������������������������������������������������������������顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃�騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈���".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="����������������������������������������������������������������鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯�黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙�������������������������������������������������������������������������������������������".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[237]="����������������������������������������������������������������纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏�塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱���".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="����������������������������������������������������������������犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙�蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑��ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ￢￤＇＂���".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[250]="����������������������������������������������������������������ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊�兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯���".split(""),e=0;e!=n[250].length;++e)65533!==n[250][e].charCodeAt(0)&&(r[n[250][e]]=64e3+e,t[64e3+e]=n[250][e])
for(n[251]="����������������������������������������������������������������涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神�祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙���".split(""),e=0;e!=n[251].length;++e)65533!==n[251][e].charCodeAt(0)&&(r[n[251][e]]=64256+e,t[64256+e]=n[251][e])
for(n[252]="����������������������������������������������������������������髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[252].length;++e)65533!==n[252][e].charCodeAt(0)&&(r[n[252][e]]=64512+e,t[64512+e]=n[252][e])
return{enc:r,dec:t}}(),cptable[936]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[129]="����������������������������������������������������������������丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪乫乬乭乮乯乲乴乵乶乷乸乹乺乻乼乽乿亀亁亂亃亄亅亇亊�亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂伃伄伅伆伇伈伋伌伒伓伔伕伖伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾伿佀佁佂佄佅佇佈佉佊佋佌佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢�".split(""),e=0;e!=n[129].length;++e)65533!==n[129][e].charCodeAt(0)&&(r[n[129][e]]=33024+e,t[33024+e]=n[129][e])
for(n[130]="����������������������������������������������������������������侤侫侭侰侱侲侳侴侶侷侸侹侺侻侼侽侾俀俁係俆俇俈俉俋俌俍俒俓俔俕俖俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿倀倁倂倃倄倅倆倇倈倉倊�個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯倰倱倲倳倴倵倶倷倸倹倻倽倿偀偁偂偄偅偆偉偊偋偍偐偑偒偓偔偖偗偘偙偛偝偞偟偠偡偢偣偤偦偧偨偩偪偫偭偮偯偰偱偲偳側偵偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎傏傐傑傒傓傔傕傖傗傘備傚傛傜傝傞傟傠傡傢傤傦傪傫傭傮傯傰傱傳傴債傶傷傸傹傼�".split(""),e=0;e!=n[130].length;++e)65533!==n[130][e].charCodeAt(0)&&(r[n[130][e]]=33280+e,t[33280+e]=n[130][e])
for(n[131]="����������������������������������������������������������������傽傾傿僀僁僂僃僄僅僆僇僈僉僊僋僌働僎僐僑僒僓僔僕僗僘僙僛僜僝僞僟僠僡僢僣僤僥僨僩僪僫僯僰僱僲僴僶僷僸價僺僼僽僾僿儀儁儂儃億儅儈�儉儊儌儍儎儏儐儑儓儔儕儖儗儘儙儚儛儜儝儞償儠儢儣儤儥儦儧儨儩優儫儬儭儮儯儰儱儲儳儴儵儶儷儸儹儺儻儼儽儾兂兇兊兌兎兏児兒兓兗兘兙兛兝兞兟兠兡兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦冧冨冩冪冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒凓凔凕凖凗�".split(""),e=0;e!=n[131].length;++e)65533!==n[131][e].charCodeAt(0)&&(r[n[131][e]]=33536+e,t[33536+e]=n[131][e])
for(n[132]="����������������������������������������������������������������凘凙凚凜凞凟凢凣凥処凧凨凩凪凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄剅剆則剈剉剋剎剏剒剓剕剗剘�剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳剴創剶剷剸剹剺剻剼剾劀劃劄劅劆劇劉劊劋劌劍劎劏劑劒劔劕劖劗劘劙劚劜劤劥劦劧劮劯劰労劵劶劷劸効劺劻劼劽勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務勚勛勜勝勞勠勡勢勣勥勦勧勨勩勪勫勬勭勮勯勱勲勳勴勵勶勷勸勻勼勽匁匂匃匄匇匉匊匋匌匎�".split(""),e=0;e!=n[132].length;++e)65533!==n[132][e].charCodeAt(0)&&(r[n[132][e]]=33792+e,t[33792+e]=n[132][e])
for(n[133]="����������������������������������������������������������������匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯匰匱匲匳匴匵匶匷匸匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏�厐厑厒厓厔厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯厰厱厲厳厴厵厷厸厹厺厼厽厾叀參叄叅叆叇収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝呞呟呠呡呣呥呧呩呪呫呬呭呮呯呰呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡�".split(""),e=0;e!=n[133].length;++e)65533!==n[133][e].charCodeAt(0)&&(r[n[133][e]]=34048+e,t[34048+e]=n[133][e])
for(n[134]="����������������������������������������������������������������咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠員哢哣哤哫哬哯哰哱哴哵哶哷哸哹哻哾唀唂唃唄唅唈唊唋唌唍唎唒唓唕唖唗唘唙唚唜唝唞唟唡唥唦�唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋啌啍啎問啑啒啓啔啗啘啙啚啛啝啞啟啠啢啣啨啩啫啯啰啱啲啳啴啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠喡喢喣喤喥喦喨喩喪喫喬喭單喯喰喲喴営喸喺喼喿嗀嗁嗂嗃嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗嗘嗙嗚嗛嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸嗹嗺嗻嗼嗿嘂嘃嘄嘅�".split(""),e=0;e!=n[134].length;++e)65533!==n[134][e].charCodeAt(0)&&(r[n[134][e]]=34304+e,t[34304+e]=n[134][e])
for(n[135]="����������������������������������������������������������������嘆嘇嘊嘋嘍嘐嘑嘒嘓嘔嘕嘖嘗嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀噁噂噃噄噅噆噇噈噉噊噋噏噐噑噒噓噕噖噚噛噝噞噟噠噡�噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽噾噿嚀嚁嚂嚃嚄嚇嚈嚉嚊嚋嚌嚍嚐嚑嚒嚔嚕嚖嚗嚘嚙嚚嚛嚜嚝嚞嚟嚠嚡嚢嚤嚥嚦嚧嚨嚩嚪嚫嚬嚭嚮嚰嚱嚲嚳嚴嚵嚶嚸嚹嚺嚻嚽嚾嚿囀囁囂囃囄囅囆囇囈囉囋囌囍囎囏囐囑囒囓囕囖囘囙囜団囥囦囧囨囩囪囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國圌圍圎圏圐圑�".split(""),e=0;e!=n[135].length;++e)65533!==n[135][e].charCodeAt(0)&&(r[n[135][e]]=34560+e,t[34560+e]=n[135][e])
for(n[136]="����������������������������������������������������������������園圓圔圕圖圗團圙圚圛圝圞圠圡圢圤圥圦圧圫圱圲圴圵圶圷圸圼圽圿坁坃坄坅坆坈坉坋坒坓坔坕坖坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀�垁垇垈垉垊垍垎垏垐垑垔垕垖垗垘垙垚垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹垺垻垼垽垾垿埀埁埄埅埆埇埈埉埊埌埍埐埑埓埖埗埛埜埞埡埢埣埥埦埧埨埩埪埫埬埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥堦堧堨堩堫堬堭堮堯報堲堳場堶堷堸堹堺堻堼堽�".split(""),e=0;e!=n[136].length;++e)65533!==n[136][e].charCodeAt(0)&&(r[n[136][e]]=34816+e,t[34816+e]=n[136][e])
for(n[137]="����������������������������������������������������������������堾堿塀塁塂塃塅塆塇塈塉塊塋塎塏塐塒塓塕塖塗塙塚塛塜塝塟塠塡塢塣塤塦塧塨塩塪塭塮塯塰塱塲塳塴塵塶塷塸塹塺塻塼塽塿墂墄墆墇墈墊墋墌�墍墎墏墐墑墔墕墖増墘墛墜墝墠墡墢墣墤墥墦墧墪墫墬墭墮墯墰墱墲墳墴墵墶墷墸墹墺墻墽墾墿壀壂壃壄壆壇壈壉壊壋壌壍壎壏壐壒壓壔壖壗壘壙壚壛壜壝壞壟壠壡壢壣壥壦壧壨壩壪壭壯壱売壴壵壷壸壺壻壼壽壾壿夀夁夃夅夆夈変夊夋夌夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻�".split(""),e=0;e!=n[137].length;++e)65533!==n[137][e].charCodeAt(0)&&(r[n[137][e]]=35072+e,t[35072+e]=n[137][e])
for(n[138]="����������������������������������������������������������������夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛奜奝奞奟奡奣奤奦奧奨奩奪奫奬奭奮奯奰奱奲奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦�妧妬妭妰妱妳妴妵妶妷妸妺妼妽妿姀姁姂姃姄姅姇姈姉姌姍姎姏姕姖姙姛姞姟姠姡姢姤姦姧姩姪姫姭姮姯姰姱姲姳姴姵姶姷姸姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪娫娬娭娮娯娰娳娵娷娸娹娺娻娽娾娿婁婂婃婄婅婇婈婋婌婍婎婏婐婑婒婓婔婖婗婘婙婛婜婝婞婟婠�".split(""),e=0;e!=n[138].length;++e)65533!==n[138][e].charCodeAt(0)&&(r[n[138][e]]=35328+e,t[35328+e]=n[138][e])
for(n[139]="����������������������������������������������������������������婡婣婤婥婦婨婩婫婬婭婮婯婰婱婲婳婸婹婻婼婽婾媀媁媂媃媄媅媆媇媈媉媊媋媌媍媎媏媐媑媓媔媕媖媗媘媙媜媝媞媟媠媡媢媣媤媥媦媧媨媩媫媬�媭媮媯媰媱媴媶媷媹媺媻媼媽媿嫀嫃嫄嫅嫆嫇嫈嫊嫋嫍嫎嫏嫐嫑嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬嫭嫮嫯嫰嫲嫳嫴嫵嫶嫷嫸嫹嫺嫻嫼嫽嫾嫿嬀嬁嬂嬃嬄嬅嬆嬇嬈嬊嬋嬌嬍嬎嬏嬐嬑嬒嬓嬔嬕嬘嬙嬚嬛嬜嬝嬞嬟嬠嬡嬢嬣嬤嬥嬦嬧嬨嬩嬪嬫嬬嬭嬮嬯嬰嬱嬳嬵嬶嬸嬹嬺嬻嬼嬽嬾嬿孁孂孃孄孅孆孇�".split(""),e=0;e!=n[139].length;++e)65533!==n[139][e].charCodeAt(0)&&(r[n[139][e]]=35584+e,t[35584+e]=n[139][e])
for(n[140]="����������������������������������������������������������������孈孉孊孋孌孍孎孏孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏�寑寔寕寖寗寘寙寚寛寜寠寢寣實寧審寪寫寬寭寯寱寲寳寴寵寶寷寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧屨屩屪屫屬屭屰屲屳屴屵屶屷屸屻屼屽屾岀岃岄岅岆岇岉岊岋岎岏岒岓岕岝岞岟岠岡岤岥岦岧岨�".split(""),e=0;e!=n[140].length;++e)65533!==n[140][e].charCodeAt(0)&&(r[n[140][e]]=35840+e,t[35840+e]=n[140][e])
for(n[141]="����������������������������������������������������������������岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅峆峇峈峉峊峌峍峎峏峐峑峓峔峕峖峗峘峚峛峜峝峞峟峠峢峣峧峩峫峬峮峯峱峲峳峴峵島峷峸峹峺峼峽峾峿崀�崁崄崅崈崉崊崋崌崍崏崐崑崒崓崕崗崘崙崚崜崝崟崠崡崢崣崥崨崪崫崬崯崰崱崲崳崵崶崷崸崹崺崻崼崿嵀嵁嵂嵃嵄嵅嵆嵈嵉嵍嵎嵏嵐嵑嵒嵓嵔嵕嵖嵗嵙嵚嵜嵞嵟嵠嵡嵢嵣嵤嵥嵦嵧嵨嵪嵭嵮嵰嵱嵲嵳嵵嵶嵷嵸嵹嵺嵻嵼嵽嵾嵿嶀嶁嶃嶄嶅嶆嶇嶈嶉嶊嶋嶌嶍嶎嶏嶐嶑嶒嶓嶔嶕嶖嶗嶘嶚嶛嶜嶞嶟嶠�".split(""),e=0;e!=n[141].length;++e)65533!==n[141][e].charCodeAt(0)&&(r[n[141][e]]=36096+e,t[36096+e]=n[141][e])
for(n[142]="����������������������������������������������������������������嶡嶢嶣嶤嶥嶦嶧嶨嶩嶪嶫嶬嶭嶮嶯嶰嶱嶲嶳嶴嶵嶶嶸嶹嶺嶻嶼嶽嶾嶿巀巁巂巃巄巆巇巈巉巊巋巌巎巏巐巑巒巓巔巕巖巗巘巙巚巜巟巠巣巤巪巬巭�巰巵巶巸巹巺巻巼巿帀帄帇帉帊帋帍帎帒帓帗帞帟帠帡帢帣帤帥帨帩帪師帬帯帰帲帳帴帵帶帹帺帾帿幀幁幃幆幇幈幉幊幋幍幎幏幐幑幒幓幖幗幘幙幚幜幝幟幠幣幤幥幦幧幨幩幪幫幬幭幮幯幰幱幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨庩庪庫庬庮庯庰庱庲庴庺庻庼庽庿廀廁廂廃廄廅�".split(""),e=0;e!=n[142].length;++e)65533!==n[142][e].charCodeAt(0)&&(r[n[142][e]]=36352+e,t[36352+e]=n[142][e])
for(n[143]="����������������������������������������������������������������廆廇廈廋廌廍廎廏廐廔廕廗廘廙廚廜廝廞廟廠廡廢廣廤廥廦廧廩廫廬廭廮廯廰廱廲廳廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤�弨弫弬弮弰弲弳弴張弶強弸弻弽弾弿彁彂彃彄彅彆彇彈彉彊彋彌彍彎彏彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢徣徤徥徦徧復徫徬徯徰徱徲徳徴徶徸徹徺徻徾徿忀忁忂忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇�".split(""),e=0;e!=n[143].length;++e)65533!==n[143][e].charCodeAt(0)&&(r[n[143][e]]=36608+e,t[36608+e]=n[143][e])
for(n[144]="����������������������������������������������������������������怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰怱怲怳怴怶怷怸怹怺怽怾恀恄恅恆恇恈恉恊恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀�悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽悾悿惀惁惂惃惄惇惈惉惌惍惎惏惐惒惓惔惖惗惙惛惞惡惢惣惤惥惪惱惲惵惷惸惻惼惽惾惿愂愃愄愅愇愊愋愌愐愑愒愓愔愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬愭愮愯愰愱愲愳愴愵愶愷愸愹愺愻愼愽愾慀慁慂慃慄慅慆�".split(""),e=0;e!=n[144].length;++e)65533!==n[144][e].charCodeAt(0)&&(r[n[144][e]]=36864+e,t[36864+e]=n[144][e])
for(n[145]="����������������������������������������������������������������慇慉態慍慏慐慒慓慔慖慗慘慙慚慛慜慞慟慠慡慣慤慥慦慩慪慫慬慭慮慯慱慲慳慴慶慸慹慺慻慼慽慾慿憀憁憂憃憄憅憆憇憈憉憊憌憍憏憐憑憒憓憕�憖憗憘憙憚憛憜憞憟憠憡憢憣憤憥憦憪憫憭憮憯憰憱憲憳憴憵憶憸憹憺憻憼憽憿懀懁懃懄懅懆懇應懌懍懎懏懐懓懕懖懗懘懙懚懛懜懝懞懟懠懡懢懣懤懥懧懨懩懪懫懬懭懮懯懰懱懲懳懴懶懷懸懹懺懻懼懽懾戀戁戂戃戄戅戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸戹戺戻戼扂扄扅扆扊�".split(""),e=0;e!=n[145].length;++e)65533!==n[145][e].charCodeAt(0)&&(r[n[145][e]]=37120+e,t[37120+e]=n[145][e])
for(n[146]="����������������������������������������������������������������扏扐払扖扗扙扚扜扝扞扟扠扡扢扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋抌抍抎抏抐抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁�拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳挴挵挶挷挸挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖捗捘捙捚捛捜捝捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙掚掛掜掝掞掟採掤掦掫掯掱掲掵掶掹掻掽掿揀�".split(""),e=0;e!=n[146].length;++e)65533!==n[146][e].charCodeAt(0)&&(r[n[146][e]]=37376+e,t[37376+e]=n[146][e])
for(n[147]="����������������������������������������������������������������揁揂揃揅揇揈揊揋揌揑揓揔揕揗揘揙揚換揜揝揟揢揤揥揦揧揨揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆搇搈搉搊損搎搑搒搕搖搗搘搙搚搝搟搢搣搤�搥搧搨搩搫搮搯搰搱搲搳搵搶搷搸搹搻搼搾摀摂摃摉摋摌摍摎摏摐摑摓摕摖摗摙摚摛摜摝摟摠摡摢摣摤摥摦摨摪摫摬摮摯摰摱摲摳摴摵摶摷摻摼摽摾摿撀撁撃撆撈撉撊撋撌撍撎撏撐撓撔撗撘撚撛撜撝撟撠撡撢撣撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆擇擈擉擊擋擌擏擑擓擔擕擖擙據�".split(""),e=0;e!=n[147].length;++e)65533!==n[147][e].charCodeAt(0)&&(r[n[147][e]]=37632+e,t[37632+e]=n[147][e])
for(n[148]="����������������������������������������������������������������擛擜擝擟擠擡擣擥擧擨擩擪擫擬擭擮擯擰擱擲擳擴擵擶擷擸擹擺擻擼擽擾擿攁攂攃攄攅攆攇攈攊攋攌攍攎攏攐攑攓攔攕攖攗攙攚攛攜攝攞攟攠攡�攢攣攤攦攧攨攩攪攬攭攰攱攲攳攷攺攼攽敀敁敂敃敄敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數敹敺敻敼敽敾敿斀斁斂斃斄斅斆斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱斲斳斴斵斶斷斸斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘旙旚旛旜旝旞旟旡旣旤旪旫�".split(""),e=0;e!=n[148].length;++e)65533!==n[148][e].charCodeAt(0)&&(r[n[148][e]]=37888+e,t[37888+e]=n[148][e])
for(n[149]="����������������������������������������������������������������旲旳旴旵旸旹旻旼旽旾旿昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷昸昹昺昻昽昿晀時晄晅晆晇晈晉晊晍晎晐晑晘�晙晛晜晝晞晠晢晣晥晧晩晪晫晬晭晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘暙暚暛暜暞暟暠暡暢暣暤暥暦暩暪暫暬暭暯暰暱暲暳暵暶暷暸暺暻暼暽暿曀曁曂曃曄曅曆曇曈曉曊曋曌曍曎曏曐曑曒曓曔曕曖曗曘曚曞曟曠曡曢曣曤曥曧曨曪曫曬曭曮曯曱曵曶書曺曻曽朁朂會�".split(""),e=0;e!=n[149].length;++e)65533!==n[149][e].charCodeAt(0)&&(r[n[149][e]]=38144+e,t[38144+e]=n[149][e])
for(n[150]="����������������������������������������������������������������朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠朡朢朣朤朥朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗杘杙杚杛杝杢杣杤杦杧杫杬杮東杴杶�杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹枺枻枼枽枾枿柀柂柅柆柇柈柉柊柋柌柍柎柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵柶柷柸柹柺査柼柾栁栂栃栄栆栍栐栒栔栕栘栙栚栛栜栞栟栠栢栣栤栥栦栧栨栫栬栭栮栯栰栱栴栵栶栺栻栿桇桋桍桏桒桖桗桘桙桚桛�".split(""),e=0;e!=n[150].length;++e)65533!==n[150][e].charCodeAt(0)&&(r[n[150][e]]=38400+e,t[38400+e]=n[150][e])
for(n[151]="����������������������������������������������������������������桜桝桞桟桪桬桭桮桯桰桱桲桳桵桸桹桺桻桼桽桾桿梀梂梄梇梈梉梊梋梌梍梎梐梑梒梔梕梖梘梙梚梛梜條梞梟梠梡梣梤梥梩梪梫梬梮梱梲梴梶梷梸�梹梺梻梼梽梾梿棁棃棄棅棆棇棈棊棌棎棏棐棑棓棔棖棗棙棛棜棝棞棟棡棢棤棥棦棧棨棩棪棫棬棭棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆椇椈椉椊椌椏椑椓椔椕椖椗椘椙椚椛検椝椞椡椢椣椥椦椧椨椩椪椫椬椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃楄楅楆楇楈楉楊楋楌楍楎楏楐楑楒楓楕楖楘楙楛楜楟�".split(""),e=0;e!=n[151].length;++e)65533!==n[151][e].charCodeAt(0)&&(r[n[151][e]]=38656+e,t[38656+e]=n[151][e])
for(n[152]="����������������������������������������������������������������楡楢楤楥楧楨楩楪楬業楯楰楲楳楴極楶楺楻楽楾楿榁榃榅榊榋榌榎榏榐榑榒榓榖榗榙榚榝榞榟榠榡榢榣榤榥榦榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽�榾榿槀槂槃槄槅槆槇槈槉構槍槏槑槒槓槕槖槗様槙槚槜槝槞槡槢槣槤槥槦槧槨槩槪槫槬槮槯槰槱槳槴槵槶槷槸槹槺槻槼槾樀樁樂樃樄樅樆樇樈樉樋樌樍樎樏樐樑樒樓樔樕樖標樚樛樜樝樞樠樢樣樤樥樦樧権樫樬樭樮樰樲樳樴樶樷樸樹樺樻樼樿橀橁橂橃橅橆橈橉橊橋橌橍橎橏橑橒橓橔橕橖橗橚�".split(""),e=0;e!=n[152].length;++e)65533!==n[152][e].charCodeAt(0)&&(r[n[152][e]]=38912+e,t[38912+e]=n[152][e])
for(n[153]="����������������������������������������������������������������橜橝橞機橠橢橣橤橦橧橨橩橪橫橬橭橮橯橰橲橳橴橵橶橷橸橺橻橽橾橿檁檂檃檅檆檇檈檉檊檋檌檍檏檒檓檔檕檖檘檙檚檛檜檝檞檟檡檢檣檤檥檦�檧檨檪檭檮檯檰檱檲檳檴檵檶檷檸檹檺檻檼檽檾檿櫀櫁櫂櫃櫄櫅櫆櫇櫈櫉櫊櫋櫌櫍櫎櫏櫐櫑櫒櫓櫔櫕櫖櫗櫘櫙櫚櫛櫜櫝櫞櫟櫠櫡櫢櫣櫤櫥櫦櫧櫨櫩櫪櫫櫬櫭櫮櫯櫰櫱櫲櫳櫴櫵櫶櫷櫸櫹櫺櫻櫼櫽櫾櫿欀欁欂欃欄欅欆欇欈欉權欋欌欍欎欏欐欑欒欓欔欕欖欗欘欙欚欛欜欝欞欟欥欦欨欩欪欫欬欭欮�".split(""),e=0;e!=n[153].length;++e)65533!==n[153][e].charCodeAt(0)&&(r[n[153][e]]=39168+e,t[39168+e]=n[153][e])
for(n[154]="����������������������������������������������������������������欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍歎歏歐歑歒歓歔歕歖歗歘歚歛歜歝歞歟歠歡歨歩歫歬歭歮歯歰歱歲歳歴歵歶歷歸歺歽歾歿殀殅殈�殌殎殏殐殑殔殕殗殘殙殜殝殞殟殠殢殣殤殥殦殧殨殩殫殬殭殮殯殰殱殲殶殸殹殺殻殼殽殾毀毃毄毆毇毈毉毊毌毎毐毑毘毚毜毝毞毟毠毢毣毤毥毦毧毨毩毬毭毮毰毱毲毴毶毷毸毺毻毼毾毿氀氁氂氃氄氈氉氊氋氌氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋汌汍汎汏汑汒汓汖汘�".split(""),e=0;e!=n[154].length;++e)65533!==n[154][e].charCodeAt(0)&&(r[n[154][e]]=39424+e,t[39424+e]=n[154][e])
for(n[155]="����������������������������������������������������������������汙汚汢汣汥汦汧汫汬汭汮汯汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘�泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟洠洡洢洣洤洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽浾浿涀涁涃涄涆涇涊涋涍涏涐涒涖涗涘涙涚涜涢涥涬涭涰涱涳涴涶涷涹涺涻涼涽涾淁淂淃淈淉淊�".split(""),e=0;e!=n[155].length;++e)65533!==n[155][e].charCodeAt(0)&&(r[n[155][e]]=39680+e,t[39680+e]=n[155][e])
for(n[156]="����������������������������������������������������������������淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽淾淿渀渁渂渃渄渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵�渶渷渹渻渼渽渾渿湀湁湂湅湆湇湈湉湊湋湌湏湐湑湒湕湗湙湚湜湝湞湠湡湢湣湤湥湦湧湨湩湪湬湭湯湰湱湲湳湴湵湶湷湸湹湺湻湼湽満溁溂溄溇溈溊溋溌溍溎溑溒溓溔溕準溗溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪滫滬滭滮滯�".split(""),e=0;e!=n[156].length;++e)65533!==n[156][e].charCodeAt(0)&&(r[n[156][e]]=39936+e,t[39936+e]=n[156][e])
for(n[157]="����������������������������������������������������������������滰滱滲滳滵滶滷滸滺滻滼滽滾滿漀漁漃漄漅漇漈漊漋漌漍漎漐漑漒漖漗漘漙漚漛漜漝漞漟漡漢漣漥漦漧漨漬漮漰漲漴漵漷漸漹漺漻漼漽漿潀潁潂�潃潄潅潈潉潊潌潎潏潐潑潒潓潔潕潖潗潙潚潛潝潟潠潡潣潤潥潧潨潩潪潫潬潯潰潱潳潵潶潷潹潻潽潾潿澀澁澂澃澅澆澇澊澋澏澐澑澒澓澔澕澖澗澘澙澚澛澝澞澟澠澢澣澤澥澦澨澩澪澫澬澭澮澯澰澱澲澴澵澷澸澺澻澼澽澾澿濁濃濄濅濆濇濈濊濋濌濍濎濏濐濓濔濕濖濗濘濙濚濛濜濝濟濢濣濤濥�".split(""),e=0;e!=n[157].length;++e)65533!==n[157][e].charCodeAt(0)&&(r[n[157][e]]=40192+e,t[40192+e]=n[157][e])
for(n[158]="����������������������������������������������������������������濦濧濨濩濪濫濬濭濰濱濲濳濴濵濶濷濸濹濺濻濼濽濾濿瀀瀁瀂瀃瀄瀅瀆瀇瀈瀉瀊瀋瀌瀍瀎瀏瀐瀒瀓瀔瀕瀖瀗瀘瀙瀜瀝瀞瀟瀠瀡瀢瀤瀥瀦瀧瀨瀩瀪�瀫瀬瀭瀮瀯瀰瀱瀲瀳瀴瀶瀷瀸瀺瀻瀼瀽瀾瀿灀灁灂灃灄灅灆灇灈灉灊灋灍灎灐灑灒灓灔灕灖灗灘灙灚灛灜灝灟灠灡灢灣灤灥灦灧灨灩灪灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞炟炠炡炢炣炤炥炦炧炨炩炪炰炲炴炵炶為炾炿烄烅烆烇烉烋烌烍烎烏烐烑烒烓烔烕烖烗烚�".split(""),e=0;e!=n[158].length;++e)65533!==n[158][e].charCodeAt(0)&&(r[n[158][e]]=40448+e,t[40448+e]=n[158][e])
for(n[159]="����������������������������������������������������������������烜烝烞烠烡烢烣烥烪烮烰烱烲烳烴烵烶烸烺烻烼烾烿焀焁焂焃焄焅焆焇焈焋焌焍焎焏焑焒焔焗焛焜焝焞焟焠無焢焣焤焥焧焨焩焪焫焬焭焮焲焳焴�焵焷焸焹焺焻焼焽焾焿煀煁煂煃煄煆煇煈煉煋煍煏煐煑煒煓煔煕煖煗煘煙煚煛煝煟煠煡煢煣煥煩煪煫煬煭煯煰煱煴煵煶煷煹煻煼煾煿熀熁熂熃熅熆熇熈熉熋熌熍熎熐熑熒熓熕熖熗熚熛熜熝熞熡熢熣熤熥熦熧熩熪熫熭熮熯熰熱熲熴熶熷熸熺熻熼熽熾熿燀燁燂燄燅燆燇燈燉燊燋燌燍燏燐燑燒燓�".split(""),e=0;e!=n[159].length;++e)65533!==n[159][e].charCodeAt(0)&&(r[n[159][e]]=40704+e,t[40704+e]=n[159][e])
for(n[160]="����������������������������������������������������������������燖燗燘燙燚燛燜燝燞營燡燢燣燤燦燨燩燪燫燬燭燯燰燱燲燳燴燵燶燷燸燺燻燼燽燾燿爀爁爂爃爄爅爇爈爉爊爋爌爍爎爏爐爑爒爓爔爕爖爗爘爙爚�爛爜爞爟爠爡爢爣爤爥爦爧爩爫爭爮爯爲爳爴爺爼爾牀牁牂牃牄牅牆牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅犆犇犈犉犌犎犐犑犓犔犕犖犗犘犙犚犛犜犝犞犠犡犢犣犤犥犦犧犨犩犪犫犮犱犲犳犵犺犻犼犽犾犿狀狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛�".split(""),e=0;e!=n[160].length;++e)65533!==n[160][e].charCodeAt(0)&&(r[n[160][e]]=40960+e,t[40960+e]=n[160][e])
for(n[161]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈〉《》「」『』〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ������⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇①②③④⑤⑥⑦⑧⑨⑩��㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩��ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ���".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������！＂＃￥％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�������︵︶︹︺︿﹀︽︾﹁﹂﹃﹄��︻︼︷︸︱�︳︴����������".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="����������������������������������������������������������������ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═║╒╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡╢╣╤╥╦╧╨╩╪╫╬╭╮╯╰╱╲╳▁▂▃▄▅▆▇�█▉▊▋▌▍▎▏▓▔▕▼▽◢◣◤◥☉⊕〒〝〞�����������āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ�ńň�ɡ����ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ����������������������".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="����������������������������������������������������������������〡〢〣〤〥〦〧〨〩㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤�℡㈱�‐���ー゛゜ヽヾ〆ゝゞ﹉﹊﹋﹌﹍﹎﹏﹐﹑﹒﹔﹕﹖﹗﹙﹚﹛﹜﹝﹞﹟﹠﹡�﹢﹣﹤﹥﹦﹨﹩﹪﹫�������������〇�������������─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋����������������".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[170]="����������������������������������������������������������������狜狝狟狢狣狤狥狦狧狪狫狵狶狹狽狾狿猀猂猄猅猆猇猈猉猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀獁獂獃獄獅獆獇獈�獉獊獋獌獎獏獑獓獔獕獖獘獙獚獛獜獝獞獟獡獢獣獤獥獦獧獨獩獪獫獮獰獱�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[170].length;++e)65533!==n[170][e].charCodeAt(0)&&(r[n[170][e]]=43520+e,t[43520+e]=n[170][e])
for(n[171]="����������������������������������������������������������������獲獳獴獵獶獷獸獹獺獻獼獽獿玀玁玂玃玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣玤玥玦玧玨玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃珄珅珆珇�珋珌珎珒珓珔珕珖珗珘珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳珴珵珶珷�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[171].length;++e)65533!==n[171][e].charCodeAt(0)&&(r[n[171][e]]=43776+e,t[43776+e]=n[171][e])
for(n[172]="����������������������������������������������������������������珸珹珺珻珼珽現珿琀琁琂琄琇琈琋琌琍琎琑琒琓琔琕琖琗琘琙琜琝琞琟琠琡琣琤琧琩琫琭琯琱琲琷琸琹琺琻琽琾琿瑀瑂瑃瑄瑅瑆瑇瑈瑉瑊瑋瑌瑍�瑎瑏瑐瑑瑒瑓瑔瑖瑘瑝瑠瑡瑢瑣瑤瑥瑦瑧瑨瑩瑪瑫瑬瑮瑯瑱瑲瑳瑴瑵瑸瑹瑺�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[172].length;++e)65533!==n[172][e].charCodeAt(0)&&(r[n[172][e]]=44032+e,t[44032+e]=n[172][e])
for(n[173]="����������������������������������������������������������������瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑璒璓璔璕璖璗璘璙璚璛璝璟璠璡璢璣璤璥璦璪璫璬璭璮璯環璱璲璳璴璵璶璷璸璹璻璼璽璾璿瓀瓁瓂瓃瓄瓅瓆瓇�瓈瓉瓊瓋瓌瓍瓎瓏瓐瓑瓓瓔瓕瓖瓗瓘瓙瓚瓛瓝瓟瓡瓥瓧瓨瓩瓪瓫瓬瓭瓰瓱瓲�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[173].length;++e)65533!==n[173][e].charCodeAt(0)&&(r[n[173][e]]=44288+e,t[44288+e]=n[173][e])
for(n[174]="����������������������������������������������������������������瓳瓵瓸瓹瓺瓻瓼瓽瓾甀甁甂甃甅甆甇甈甉甊甋甌甎甐甒甔甕甖甗甛甝甞甠甡產産甤甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘�畝畞畟畠畡畢畣畤畧畨畩畫畬畭畮畯異畱畳畵當畷畺畻畼畽畾疀疁疂疄疅疇�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[174].length;++e)65533!==n[174][e].charCodeAt(0)&&(r[n[174][e]]=44544+e,t[44544+e]=n[174][e])
for(n[175]="����������������������������������������������������������������疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦疧疨疩疪疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇�瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[175].length;++e)65533!==n[175][e].charCodeAt(0)&&(r[n[175][e]]=44800+e,t[44800+e]=n[175][e])
for(n[176]="����������������������������������������������������������������癅癆癇癈癉癊癋癎癏癐癑癒癓癕癗癘癙癚癛癝癟癠癡癢癤癥癦癧癨癩癪癬癭癮癰癱癲癳癴癵癶癷癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛�皜皝皞皟皠皡皢皣皥皦皧皨皩皪皫皬皭皯皰皳皵皶皷皸皹皺皻皼皽皾盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="����������������������������������������������������������������盄盇盉盋盌盓盕盙盚盜盝盞盠盡盢監盤盦盧盨盩盪盫盬盭盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎眏眐眑眒眓眔眕眖眗眘眛眜眝眞眡眣眤眥眧眪眫�眬眮眰眱眲眳眴眹眻眽眾眿睂睄睅睆睈睉睊睋睌睍睎睏睒睓睔睕睖睗睘睙睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="����������������������������������������������������������������睝睞睟睠睤睧睩睪睭睮睯睰睱睲睳睴睵睶睷睸睺睻睼瞁瞂瞃瞆瞇瞈瞉瞊瞋瞏瞐瞓瞔瞕瞖瞗瞘瞙瞚瞛瞜瞝瞞瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶瞷瞸瞹瞺�瞼瞾矀矁矂矃矄矅矆矇矈矉矊矋矌矎矏矐矑矒矓矔矕矖矘矙矚矝矞矟矠矡矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="����������������������������������������������������������������矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃砄砅砆砇砈砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚�硛硜硞硟硠硡硢硣硤硥硦硧硨硩硯硰硱硲硳硴硵硶硸硹硺硻硽硾硿碀碁碂碃场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="����������������������������������������������������������������碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨碩碪碫碬碭碮碯碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚磛磜磝磞磟磠磡磢磣�磤磥磦磧磩磪磫磭磮磯磰磱磳磵磶磸磹磻磼磽磾磿礀礂礃礄礆礇礈礉礊礋礌础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="����������������������������������������������������������������礍礎礏礐礑礒礔礕礖礗礘礙礚礛礜礝礟礠礡礢礣礥礦礧礨礩礪礫礬礭礮礯礰礱礲礳礵礶礷礸礹礽礿祂祃祄祅祇祊祋祌祍祎祏祐祑祒祔祕祘祙祡祣�祤祦祩祪祫祬祮祰祱祲祳祴祵祶祹祻祼祽祾祿禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="����������������������������������������������������������������禓禔禕禖禗禘禙禛禜禝禞禟禠禡禢禣禤禥禦禨禩禪禫禬禭禮禯禰禱禲禴禵禶禷禸禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙秚秛秜秝秞秠秡秢秥秨秪�秬秮秱秲秳秴秵秶秷秹秺秼秾秿稁稄稅稇稈稉稊稌稏稐稑稒稓稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="����������������������������������������������������������������稝稟稡稢稤稥稦稧稨稩稪稫稬稭種稯稰稱稲稴稵稶稸稺稾穀穁穂穃穄穅穇穈穉穊穋穌積穎穏穐穒穓穔穕穖穘穙穚穛穜穝穞穟穠穡穢穣穤穥穦穧穨�穩穪穫穬穭穮穯穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="����������������������������������������������������������������窣窤窧窩窪窫窮窯窰窱窲窴窵窶窷窸窹窺窻窼窽窾竀竁竂竃竄竅竆竇竈竉竊竌竍竎竏竐竑竒竓竔竕竗竘竚竛竜竝竡竢竤竧竨竩竪竫竬竮竰竱竲竳�竴竵競竷竸竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="����������������������������������������������������������������笯笰笲笴笵笶笷笹笻笽笿筀筁筂筃筄筆筈筊筍筎筓筕筗筙筜筞筟筡筣筤筥筦筧筨筩筪筫筬筭筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆箇箈箉箊箋箌箎箏�箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹箺箻箼箽箾箿節篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="����������������������������������������������������������������篅篈築篊篋篍篎篏篐篒篔篕篖篗篘篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲篳篴篵篶篸篹篺篻篽篿簀簁簂簃簄簅簆簈簉簊簍簎簐簑簒簓簔簕簗簘簙�簚簛簜簝簞簠簡簢簣簤簥簨簩簫簬簭簮簯簰簱簲簳簴簵簶簷簹簺簻簼簽簾籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="����������������������������������������������������������������籃籄籅籆籇籈籉籊籋籌籎籏籐籑籒籓籔籕籖籗籘籙籚籛籜籝籞籟籠籡籢籣籤籥籦籧籨籩籪籫籬籭籮籯籰籱籲籵籶籷籸籹籺籾籿粀粁粂粃粄粅粆粇�粈粊粋粌粍粎粏粐粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴粵粶粷粸粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="����������������������������������������������������������������粿糀糂糃糄糆糉糋糎糏糐糑糒糓糔糘糚糛糝糞糡糢糣糤糥糦糧糩糪糫糬糭糮糰糱糲糳糴糵糶糷糹糺糼糽糾糿紀紁紂紃約紅紆紇紈紉紋紌納紎紏紐�紑紒紓純紕紖紗紘紙級紛紜紝紞紟紡紣紤紥紦紨紩紪紬紭紮細紱紲紳紴紵紶肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="����������������������������������������������������������������紷紸紹紺紻紼紽紾紿絀絁終絃組絅絆絇絈絉絊絋経絍絎絏結絑絒絓絔絕絖絗絘絙絚絛絜絝絞絟絠絡絢絣絤絥給絧絨絩絪絫絬絭絯絰統絲絳絴絵絶�絸絹絺絻絼絽絾絿綀綁綂綃綄綅綆綇綈綉綊綋綌綍綎綏綐綑綒經綔綕綖綗綘健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="����������������������������������������������������������������継続綛綜綝綞綟綠綡綢綣綤綥綧綨綩綪綫綬維綯綰綱網綳綴綵綶綷綸綹綺綻綼綽綾綿緀緁緂緃緄緅緆緇緈緉緊緋緌緍緎総緐緑緒緓緔緕緖緗緘緙�線緛緜緝緞緟締緡緢緣緤緥緦緧編緩緪緫緬緭緮緯緰緱緲緳練緵緶緷緸緹緺尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="����������������������������������������������������������������緻緼緽緾緿縀縁縂縃縄縅縆縇縈縉縊縋縌縍縎縏縐縑縒縓縔縕縖縗縘縙縚縛縜縝縞縟縠縡縢縣縤縥縦縧縨縩縪縫縬縭縮縯縰縱縲縳縴縵縶縷縸縹�縺縼總績縿繀繂繃繄繅繆繈繉繊繋繌繍繎繏繐繑繒繓織繕繖繗繘繙繚繛繜繝俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="����������������������������������������������������������������繞繟繠繡繢繣繤繥繦繧繨繩繪繫繬繭繮繯繰繱繲繳繴繵繶繷繸繹繺繻繼繽繾繿纀纁纃纄纅纆纇纈纉纊纋續纍纎纏纐纑纒纓纔纕纖纗纘纙纚纜纝纞�纮纴纻纼绖绤绬绹缊缐缞缷缹缻缼缽缾缿罀罁罃罆罇罈罉罊罋罌罍罎罏罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="����������������������������������������������������������������罖罙罛罜罝罞罠罣罤罥罦罧罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂羃羄羅羆羇羈羉羋羍羏羐羑羒羓羕羖羗羘羙羛羜羠羢羣羥羦羨義羪羫羬羭羮羱�羳羴羵羶羷羺羻羾翀翂翃翄翆翇翈翉翋翍翏翐翑習翓翖翗翙翚翛翜翝翞翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="����������������������������������������������������������������翤翧翨翪翫翬翭翯翲翴翵翶翷翸翹翺翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫耬耭耮耯耰耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗�聙聛聜聝聞聟聠聡聢聣聤聥聦聧聨聫聬聭聮聯聰聲聳聴聵聶職聸聹聺聻聼聽隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="����������������������������������������������������������������聾肁肂肅肈肊肍肎肏肐肑肒肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇胈胉胊胋胏胐胑胒胓胔胕胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋�脌脕脗脙脛脜脝脟脠脡脢脣脤脥脦脧脨脩脪脫脭脮脰脳脴脵脷脹脺脻脼脽脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="����������������������������������������������������������������腀腁腂腃腄腅腇腉腍腎腏腒腖腗腘腛腜腝腞腟腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃膄膅膆膇膉膋膌膍膎膐膒膓膔膕膖膗膙膚膞膟膠膡膢膤膥�膧膩膫膬膭膮膯膰膱膲膴膵膶膷膸膹膼膽膾膿臄臅臇臈臉臋臍臎臏臐臑臒臓摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="����������������������������������������������������������������臔臕臖臗臘臙臚臛臜臝臞臟臠臡臢臤臥臦臨臩臫臮臯臰臱臲臵臶臷臸臹臺臽臿舃與興舉舊舋舎舏舑舓舕舖舗舘舙舚舝舠舤舥舦舧舩舮舲舺舼舽舿�艀艁艂艃艅艆艈艊艌艍艎艐艑艒艓艔艕艖艗艙艛艜艝艞艠艡艢艣艤艥艦艧艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="����������������������������������������������������������������艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸�苺苼苽苾苿茀茊茋茍茐茒茓茖茘茙茝茞茟茠茡茢茣茤茥茦茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐�".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[199]="����������������������������������������������������������������茾茿荁荂荄荅荈荊荋荌荍荎荓荕荖荗荘荙荝荢荰荱荲荳荴荵荶荹荺荾荿莀莁莂莃莄莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡莢莣莤莥莦莧莬莭莮�莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠�".split(""),e=0;e!=n[199].length;++e)65533!==n[199][e].charCodeAt(0)&&(r[n[199][e]]=50944+e,t[50944+e]=n[199][e])
for(n[200]="����������������������������������������������������������������菮華菳菴菵菶菷菺菻菼菾菿萀萂萅萇萈萉萊萐萒萓萔萕萖萗萙萚萛萞萟萠萡萢萣萩萪萫萬萭萮萯萰萲萳萴萵萶萷萹萺萻萾萿葀葁葂葃葄葅葇葈葉�葊葋葌葍葎葏葐葒葓葔葕葖葘葝葞葟葠葢葤葥葦葧葨葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁�".split(""),e=0;e!=n[200].length;++e)65533!==n[200][e].charCodeAt(0)&&(r[n[200][e]]=51200+e,t[51200+e]=n[200][e])
for(n[201]="����������������������������������������������������������������葽葾葿蒀蒁蒃蒄蒅蒆蒊蒍蒏蒐蒑蒒蒓蒔蒕蒖蒘蒚蒛蒝蒞蒟蒠蒢蒣蒤蒥蒦蒧蒨蒩蒪蒫蒬蒭蒮蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗�蓘蓙蓚蓛蓜蓞蓡蓢蓤蓧蓨蓩蓪蓫蓭蓮蓯蓱蓲蓳蓴蓵蓶蓷蓸蓹蓺蓻蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳�".split(""),e=0;e!=n[201].length;++e)65533!==n[201][e].charCodeAt(0)&&(r[n[201][e]]=51456+e,t[51456+e]=n[201][e])
for(n[202]="����������������������������������������������������������������蔃蔄蔅蔆蔇蔈蔉蔊蔋蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢蔣蔤蔥蔦蔧蔨蔩蔪蔭蔮蔯蔰蔱蔲蔳蔴蔵蔶蔾蔿蕀蕁蕂蕄蕅蕆蕇蕋蕌蕍蕎蕏蕐蕑蕒蕓蕔蕕�蕗蕘蕚蕛蕜蕝蕟蕠蕡蕢蕣蕥蕦蕧蕩蕪蕫蕬蕭蕮蕯蕰蕱蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="����������������������������������������������������������������薂薃薆薈薉薊薋薌薍薎薐薑薒薓薔薕薖薗薘薙薚薝薞薟薠薡薢薣薥薦薧薩薫薬薭薱薲薳薴薵薶薸薺薻薼薽薾薿藀藂藃藄藅藆藇藈藊藋藌藍藎藑藒�藔藖藗藘藙藚藛藝藞藟藠藡藢藣藥藦藧藨藪藫藬藭藮藯藰藱藲藳藴藵藶藷藸恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="����������������������������������������������������������������藹藺藼藽藾蘀蘁蘂蘃蘄蘆蘇蘈蘉蘊蘋蘌蘍蘎蘏蘐蘒蘓蘔蘕蘗蘘蘙蘚蘛蘜蘝蘞蘟蘠蘡蘢蘣蘤蘥蘦蘨蘪蘫蘬蘭蘮蘯蘰蘱蘲蘳蘴蘵蘶蘷蘹蘺蘻蘽蘾蘿虀�虁虂虃虄虅虆虇虈虉虊虋虌虒虓處虖虗虘虙虛虜虝號虠虡虣虤虥虦虧虨虩虪獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="����������������������������������������������������������������虭虯虰虲虳虴虵虶虷虸蚃蚄蚅蚆蚇蚈蚉蚎蚏蚐蚑蚒蚔蚖蚗蚘蚙蚚蚛蚞蚟蚠蚡蚢蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻蚼蚽蚾蚿蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜�蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="����������������������������������������������������������������蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀蝁蝂蝃蝄蝅蝆蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚蝛蝜蝝蝞蝟蝡蝢蝦蝧蝨蝩蝪蝫蝬蝭蝯蝱蝲蝳蝵�蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎螏螐螑螒螔螕螖螘螙螚螛螜螝螞螠螡螢螣螤巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="����������������������������������������������������������������螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁蟂蟃蟄蟅蟇蟈蟉蟌蟍蟎蟏蟐蟔蟕蟖蟗蟘蟙蟚蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯蟰蟱蟲蟳蟴蟵蟶蟷蟸�蟺蟻蟼蟽蟿蠀蠁蠂蠄蠅蠆蠇蠈蠉蠋蠌蠍蠎蠏蠐蠑蠒蠔蠗蠘蠙蠚蠜蠝蠞蠟蠠蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="����������������������������������������������������������������蠤蠥蠦蠧蠨蠩蠪蠫蠬蠭蠮蠯蠰蠱蠳蠴蠵蠶蠷蠸蠺蠻蠽蠾蠿衁衂衃衆衇衈衉衊衋衎衏衐衑衒術衕衖衘衚衛衜衝衞衟衠衦衧衪衭衯衱衳衴衵衶衸衹衺�衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗袘袙袚袛袝袞袟袠袡袣袥袦袧袨袩袪小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="����������������������������������������������������������������袬袮袯袰袲袳袴袵袶袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚裛補裝裞裠裡裦裧裩裪裫裬裭裮裯裲裵裶裷裺裻製裿褀褁褃褄褅褆複褈�褉褋褌褍褎褏褑褔褕褖褗褘褜褝褞褟褠褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="����������������������������������������������������������������褸褹褺褻褼褽褾褿襀襂襃襅襆襇襈襉襊襋襌襍襎襏襐襑襒襓襔襕襖襗襘襙襚襛襜襝襠襡襢襣襤襥襧襨襩襪襫襬襭襮襯襰襱襲襳襴襵襶襷襸襹襺襼�襽襾覀覂覄覅覇覈覉覊見覌覍覎規覐覑覒覓覔覕視覗覘覙覚覛覜覝覞覟覠覡摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="����������������������������������������������������������������覢覣覤覥覦覧覨覩親覫覬覭覮覯覰覱覲観覴覵覶覷覸覹覺覻覼覽覾覿觀觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴觵觶觷觸觹觺�觻觼觽觾觿訁訂訃訄訅訆計訉訊訋訌訍討訏訐訑訒訓訔訕訖託記訙訚訛訜訝印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="����������������������������������������������������������������訞訟訠訡訢訣訤訥訦訧訨訩訪訫訬設訮訯訰許訲訳訴訵訶訷訸訹診註証訽訿詀詁詂詃詄詅詆詇詉詊詋詌詍詎詏詐詑詒詓詔評詖詗詘詙詚詛詜詝詞�詟詠詡詢詣詤詥試詧詨詩詪詫詬詭詮詯詰話該詳詴詵詶詷詸詺詻詼詽詾詿誀浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="����������������������������������������������������������������誁誂誃誄誅誆誇誈誋誌認誎誏誐誑誒誔誕誖誗誘誙誚誛誜誝語誟誠誡誢誣誤誥誦誧誨誩說誫説読誮誯誰誱課誳誴誵誶誷誸誹誺誻誼誽誾調諀諁諂�諃諄諅諆談諈諉諊請諌諍諎諏諐諑諒諓諔諕論諗諘諙諚諛諜諝諞諟諠諡諢諣铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="����������������������������������������������������������������諤諥諦諧諨諩諪諫諬諭諮諯諰諱諲諳諴諵諶諷諸諹諺諻諼諽諾諿謀謁謂謃謄謅謆謈謉謊謋謌謍謎謏謐謑謒謓謔謕謖謗謘謙謚講謜謝謞謟謠謡謢謣�謤謥謧謨謩謪謫謬謭謮謯謰謱謲謳謴謵謶謷謸謹謺謻謼謽謾謿譀譁譂譃譄譅帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="����������������������������������������������������������������譆譇譈證譊譋譌譍譎譏譐譑譒譓譔譕譖譗識譙譚譛譜譝譞譟譠譡譢譣譤譥譧譨譩譪譫譭譮譯議譱譲譳譴譵譶護譸譹譺譻譼譽譾譿讀讁讂讃讄讅讆�讇讈讉變讋讌讍讎讏讐讑讒讓讔讕讖讗讘讙讚讛讜讝讞讟讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座������".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="����������������������������������������������������������������谸谹谺谻谼谽谾谿豀豂豃豄豅豈豊豋豍豎豏豐豑豒豓豔豖豗豘豙豛豜豝豞豟豠豣豤豥豦豧豨豩豬豭豮豯豰豱豲豴豵豶豷豻豼豽豾豿貀貁貃貄貆貇�貈貋貍貎貏貐貑貒貓貕貖貗貙貚貛貜貝貞貟負財貢貣貤貥貦貧貨販貪貫責貭亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="����������������������������������������������������������������貮貯貰貱貲貳貴貵貶買貸貹貺費貼貽貾貿賀賁賂賃賄賅賆資賈賉賊賋賌賍賎賏賐賑賒賓賔賕賖賗賘賙賚賛賜賝賞賟賠賡賢賣賤賥賦賧賨賩質賫賬�賭賮賯賰賱賲賳賴賵賶賷賸賹賺賻購賽賾賿贀贁贂贃贄贅贆贇贈贉贊贋贌贍佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="����������������������������������������������������������������贎贏贐贑贒贓贔贕贖贗贘贙贚贛贜贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸赹赺赻赼赽赾赿趀趂趃趆趇趈趉趌趍趎趏趐趒趓趕趖趗趘趙趚趛趜趝趞趠趡�趢趤趥趦趧趨趩趪趫趬趭趮趯趰趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="����������������������������������������������������������������跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾跿踀踁踂踃踄踆踇踈踋踍踎踐踑踒踓踕踖踗踘踙踚踛踜踠踡踤踥踦踧踨踫踭踰踲踳踴踶踷踸踻踼踾�踿蹃蹅蹆蹌蹍蹎蹏蹐蹓蹔蹕蹖蹗蹘蹚蹛蹜蹝蹞蹟蹠蹡蹢蹣蹤蹥蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="����������������������������������������������������������������蹳蹵蹷蹸蹹蹺蹻蹽蹾躀躂躃躄躆躈躉躊躋躌躍躎躑躒躓躕躖躗躘躙躚躛躝躟躠躡躢躣躤躥躦躧躨躩躪躭躮躰躱躳躴躵躶躷躸躹躻躼躽躾躿軀軁軂�軃軄軅軆軇軈軉車軋軌軍軏軐軑軒軓軔軕軖軗軘軙軚軛軜軝軞軟軠軡転軣軤堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="����������������������������������������������������������������軥軦軧軨軩軪軫軬軭軮軯軰軱軲軳軴軵軶軷軸軹軺軻軼軽軾軿輀輁輂較輄輅輆輇輈載輊輋輌輍輎輏輐輑輒輓輔輕輖輗輘輙輚輛輜輝輞輟輠輡輢輣�輤輥輦輧輨輩輪輫輬輭輮輯輰輱輲輳輴輵輶輷輸輹輺輻輼輽輾輿轀轁轂轃轄荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="����������������������������������������������������������������轅轆轇轈轉轊轋轌轍轎轏轐轑轒轓轔轕轖轗轘轙轚轛轜轝轞轟轠轡轢轣轤轥轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆�迉迊迋迌迍迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="����������������������������������������������������������������這逜連逤逥逧逨逩逪逫逬逰週進逳逴逷逹逺逽逿遀遃遅遆遈遉遊運遌過達違遖遙遚遜遝遞遟遠遡遤遦遧適遪遫遬遯遰遱遲遳遶遷選遹遺遻遼遾邁�還邅邆邇邉邊邌邍邎邏邐邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="����������������������������������������������������������������郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅鄆鄇鄈鄉鄊鄋鄌鄍鄎鄏鄐鄑鄒鄓鄔鄕鄖鄗鄘鄚鄛鄜�鄝鄟鄠鄡鄤鄥鄦鄧鄨鄩鄪鄫鄬鄭鄮鄰鄲鄳鄴鄵鄶鄷鄸鄺鄻鄼鄽鄾鄿酀酁酂酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="����������������������������������������������������������������酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀醁醂醃醄醆醈醊醎醏醓醔醕醖醗醘醙醜醝醞醟醠醡醤醥醦醧醨醩醫醬醰醱醲醳醶醷醸醹醻�醼醽醾醿釀釁釂釃釄釅釆釈釋釐釒釓釔釕釖釗釘釙釚釛針釞釟釠釡釢釣釤釥帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="����������������������������������������������������������������釦釧釨釩釪釫釬釭釮釯釰釱釲釳釴釵釶釷釸釹釺釻釼釽釾釿鈀鈁鈂鈃鈄鈅鈆鈇鈈鈉鈊鈋鈌鈍鈎鈏鈐鈑鈒鈓鈔鈕鈖鈗鈘鈙鈚鈛鈜鈝鈞鈟鈠鈡鈢鈣鈤�鈥鈦鈧鈨鈩鈪鈫鈬鈭鈮鈯鈰鈱鈲鈳鈴鈵鈶鈷鈸鈹鈺鈻鈼鈽鈾鈿鉀鉁鉂鉃鉄鉅狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧饨饩饪饫饬饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="����������������������������������������������������������������鉆鉇鉈鉉鉊鉋鉌鉍鉎鉏鉐鉑鉒鉓鉔鉕鉖鉗鉘鉙鉚鉛鉜鉝鉞鉟鉠鉡鉢鉣鉤鉥鉦鉧鉨鉩鉪鉫鉬鉭鉮鉯鉰鉱鉲鉳鉵鉶鉷鉸鉹鉺鉻鉼鉽鉾鉿銀銁銂銃銄銅�銆銇銈銉銊銋銌銍銏銐銑銒銓銔銕銖銗銘銙銚銛銜銝銞銟銠銡銢銣銤銥銦銧恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="����������������������������������������������������������������銨銩銪銫銬銭銯銰銱銲銳銴銵銶銷銸銹銺銻銼銽銾銿鋀鋁鋂鋃鋄鋅鋆鋇鋉鋊鋋鋌鋍鋎鋏鋐鋑鋒鋓鋔鋕鋖鋗鋘鋙鋚鋛鋜鋝鋞鋟鋠鋡鋢鋣鋤鋥鋦鋧鋨�鋩鋪鋫鋬鋭鋮鋯鋰鋱鋲鋳鋴鋵鋶鋷鋸鋹鋺鋻鋼鋽鋾鋿錀錁錂錃錄錅錆錇錈錉洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="����������������������������������������������������������������錊錋錌錍錎錏錐錑錒錓錔錕錖錗錘錙錚錛錜錝錞錟錠錡錢錣錤錥錦錧錨錩錪錫錬錭錮錯錰錱録錳錴錵錶錷錸錹錺錻錼錽錿鍀鍁鍂鍃鍄鍅鍆鍇鍈鍉�鍊鍋鍌鍍鍎鍏鍐鍑鍒鍓鍔鍕鍖鍗鍘鍙鍚鍛鍜鍝鍞鍟鍠鍡鍢鍣鍤鍥鍦鍧鍨鍩鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="����������������������������������������������������������������鍬鍭鍮鍯鍰鍱鍲鍳鍴鍵鍶鍷鍸鍹鍺鍻鍼鍽鍾鍿鎀鎁鎂鎃鎄鎅鎆鎇鎈鎉鎊鎋鎌鎍鎎鎐鎑鎒鎓鎔鎕鎖鎗鎘鎙鎚鎛鎜鎝鎞鎟鎠鎡鎢鎣鎤鎥鎦鎧鎨鎩鎪鎫�鎬鎭鎮鎯鎰鎱鎲鎳鎴鎵鎶鎷鎸鎹鎺鎻鎼鎽鎾鎿鏀鏁鏂鏃鏄鏅鏆鏇鏈鏉鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="����������������������������������������������������������������鏎鏏鏐鏑鏒鏓鏔鏕鏗鏘鏙鏚鏛鏜鏝鏞鏟鏠鏡鏢鏣鏤鏥鏦鏧鏨鏩鏪鏫鏬鏭鏮鏯鏰鏱鏲鏳鏴鏵鏶鏷鏸鏹鏺鏻鏼鏽鏾鏿鐀鐁鐂鐃鐄鐅鐆鐇鐈鐉鐊鐋鐌鐍�鐎鐏鐐鐑鐒鐓鐔鐕鐖鐗鐘鐙鐚鐛鐜鐝鐞鐟鐠鐡鐢鐣鐤鐥鐦鐧鐨鐩鐪鐫鐬鐭鐮纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡缢缣缤缥缦缧缪缫缬缭缯缰缱缲缳缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="����������������������������������������������������������������鐯鐰鐱鐲鐳鐴鐵鐶鐷鐸鐹鐺鐻鐼鐽鐿鑀鑁鑂鑃鑄鑅鑆鑇鑈鑉鑊鑋鑌鑍鑎鑏鑐鑑鑒鑓鑔鑕鑖鑗鑘鑙鑚鑛鑜鑝鑞鑟鑠鑡鑢鑣鑤鑥鑦鑧鑨鑩鑪鑬鑭鑮鑯�鑰鑱鑲鑳鑴鑵鑶鑷鑸鑹鑺鑻鑼鑽鑾鑿钀钁钂钃钄钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="����������������������������������������������������������������锧锳锽镃镈镋镕镚镠镮镴镵長镸镹镺镻镼镽镾門閁閂閃閄閅閆閇閈閉閊開閌閍閎閏閐閑閒間閔閕閖閗閘閙閚閛閜閝閞閟閠閡関閣閤閥閦閧閨閩閪�閫閬閭閮閯閰閱閲閳閴閵閶閷閸閹閺閻閼閽閾閿闀闁闂闃闄闅闆闇闈闉闊闋椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="����������������������������������������������������������������闌闍闎闏闐闑闒闓闔闕闖闗闘闙闚闛關闝闞闟闠闡闢闣闤闥闦闧闬闿阇阓阘阛阞阠阣阤阥阦阧阨阩阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗�陘陙陚陜陝陞陠陣陥陦陫陭陮陯陰陱陳陸陹険陻陼陽陾陿隀隁隂隃隄隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="����������������������������������������������������������������隌階隑隒隓隕隖隚際隝隞隟隠隡隢隣隤隥隦隨隩險隫隬隭隮隯隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖雗雘雙雚雛雜雝雞雟雡離難雤雥雦雧雫�雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗霘霙霚霛霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="����������������������������������������������������������������霡霢霣霤霥霦霧霨霩霫霬霮霯霱霳霴霵霶霷霺霻霼霽霿靀靁靂靃靄靅靆靇靈靉靊靋靌靍靎靏靐靑靔靕靗靘靚靜靝靟靣靤靦靧靨靪靫靬靭靮靯靰靱�靲靵靷靸靹靺靻靽靾靿鞀鞁鞂鞃鞄鞆鞇鞈鞉鞊鞌鞎鞏鞐鞓鞕鞖鞗鞙鞚鞛鞜鞝臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="����������������������������������������������������������������鞞鞟鞡鞢鞤鞥鞦鞧鞨鞩鞪鞬鞮鞰鞱鞳鞵鞶鞷鞸鞹鞺鞻鞼鞽鞾鞿韀韁韂韃韄韅韆韇韈韉韊韋韌韍韎韏韐韑韒韓韔韕韖韗韘韙韚韛韜韝韞韟韠韡韢韣�韤韥韨韮韯韰韱韲韴韷韸韹韺韻韼韽韾響頀頁頂頃頄項順頇須頉頊頋頌頍頎怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="����������������������������������������������������������������頏預頑頒頓頔頕頖頗領頙頚頛頜頝頞頟頠頡頢頣頤頥頦頧頨頩頪頫頬頭頮頯頰頱頲頳頴頵頶頷頸頹頺頻頼頽頾頿顀顁顂顃顄顅顆顇顈顉顊顋題額�顎顏顐顑顒顓顔顕顖顗願顙顚顛顜顝類顟顠顡顢顣顤顥顦顧顨顩顪顫顬顭顮睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶钷钸钹钺钼钽钿铄铈铉铊铋铌铍铎铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="����������������������������������������������������������������顯顰顱顲顳顴颋颎颒颕颙颣風颩颪颫颬颭颮颯颰颱颲颳颴颵颶颷颸颹颺颻颼颽颾颿飀飁飂飃飄飅飆飇飈飉飊飋飌飍飏飐飔飖飗飛飜飝飠飡飢飣飤�飥飦飩飪飫飬飭飮飯飰飱飲飳飴飵飶飷飸飹飺飻飼飽飾飿餀餁餂餃餄餅餆餇铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒锓锔锕锖锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤镥镦镧镨镩镪镫镬镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="����������������������������������������������������������������餈餉養餋餌餎餏餑餒餓餔餕餖餗餘餙餚餛餜餝餞餟餠餡餢餣餤餥餦餧館餩餪餫餬餭餯餰餱餲餳餴餵餶餷餸餹餺餻餼餽餾餿饀饁饂饃饄饅饆饇饈饉�饊饋饌饍饎饏饐饑饒饓饖饗饘饙饚饛饜饝饞饟饠饡饢饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨鸩鸪鸫鸬鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦鹧鹨鹩鹪鹫鹬鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="����������������������������������������������������������������馌馎馚馛馜馝馞馟馠馡馢馣馤馦馧馩馪馫馬馭馮馯馰馱馲馳馴馵馶馷馸馹馺馻馼馽馾馿駀駁駂駃駄駅駆駇駈駉駊駋駌駍駎駏駐駑駒駓駔駕駖駗駘�駙駚駛駜駝駞駟駠駡駢駣駤駥駦駧駨駩駪駫駬駭駮駯駰駱駲駳駴駵駶駷駸駹瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="����������������������������������������������������������������駺駻駼駽駾駿騀騁騂騃騄騅騆騇騈騉騊騋騌騍騎騏騐騑騒験騔騕騖騗騘騙騚騛騜騝騞騟騠騡騢騣騤騥騦騧騨騩騪騫騬騭騮騯騰騱騲騳騴騵騶騷騸�騹騺騻騼騽騾騿驀驁驂驃驄驅驆驇驈驉驊驋驌驍驎驏驐驑驒驓驔驕驖驗驘驙颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="����������������������������������������������������������������驚驛驜驝驞驟驠驡驢驣驤驥驦驧驨驩驪驫驲骃骉骍骎骔骕骙骦骩骪骫骬骭骮骯骲骳骴骵骹骻骽骾骿髃髄髆髇髈髉髊髍髎髏髐髒體髕髖髗髙髚髛髜�髝髞髠髢髣髤髥髧髨髩髪髬髮髰髱髲髳髴髵髶髷髸髺髼髽髾髿鬀鬁鬂鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="����������������������������������������������������������������鬇鬉鬊鬋鬌鬍鬎鬐鬑鬒鬔鬕鬖鬗鬘鬙鬚鬛鬜鬝鬞鬠鬡鬢鬤鬥鬦鬧鬨鬩鬪鬫鬬鬭鬮鬰鬱鬳鬴鬵鬶鬷鬸鬹鬺鬽鬾鬿魀魆魊魋魌魎魐魒魓魕魖魗魘魙魚�魛魜魝魞魟魠魡魢魣魤魥魦魧魨魩魪魫魬魭魮魯魰魱魲魳魴魵魶魷魸魹魺魻簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="����������������������������������������������������������������魼魽魾魿鮀鮁鮂鮃鮄鮅鮆鮇鮈鮉鮊鮋鮌鮍鮎鮏鮐鮑鮒鮓鮔鮕鮖鮗鮘鮙鮚鮛鮜鮝鮞鮟鮠鮡鮢鮣鮤鮥鮦鮧鮨鮩鮪鮫鮬鮭鮮鮯鮰鮱鮲鮳鮴鮵鮶鮷鮸鮹鮺�鮻鮼鮽鮾鮿鯀鯁鯂鯃鯄鯅鯆鯇鯈鯉鯊鯋鯌鯍鯎鯏鯐鯑鯒鯓鯔鯕鯖鯗鯘鯙鯚鯛酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="����������������������������������������������������������������鯜鯝鯞鯟鯠鯡鯢鯣鯤鯥鯦鯧鯨鯩鯪鯫鯬鯭鯮鯯鯰鯱鯲鯳鯴鯵鯶鯷鯸鯹鯺鯻鯼鯽鯾鯿鰀鰁鰂鰃鰄鰅鰆鰇鰈鰉鰊鰋鰌鰍鰎鰏鰐鰑鰒鰓鰔鰕鰖鰗鰘鰙鰚�鰛鰜鰝鰞鰟鰠鰡鰢鰣鰤鰥鰦鰧鰨鰩鰪鰫鰬鰭鰮鰯鰰鰱鰲鰳鰴鰵鰶鰷鰸鰹鰺鰻觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅龆龇龈龉龊龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞鲟鲠鲡鲢鲣鲥鲦鲧鲨鲩鲫鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="����������������������������������������������������������������鰼鰽鰾鰿鱀鱁鱂鱃鱄鱅鱆鱇鱈鱉鱊鱋鱌鱍鱎鱏鱐鱑鱒鱓鱔鱕鱖鱗鱘鱙鱚鱛鱜鱝鱞鱟鱠鱡鱢鱣鱤鱥鱦鱧鱨鱩鱪鱫鱬鱭鱮鱯鱰鱱鱲鱳鱴鱵鱶鱷鱸鱹鱺�鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾鲿鳀鳁鳂鳈鳉鳑鳒鳚鳛鳠鳡鳌鳍鳎鳏鳐鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
for(n[248]="����������������������������������������������������������������鳣鳤鳥鳦鳧鳨鳩鳪鳫鳬鳭鳮鳯鳰鳱鳲鳳鳴鳵鳶鳷鳸鳹鳺鳻鳼鳽鳾鳿鴀鴁鴂鴃鴄鴅鴆鴇鴈鴉鴊鴋鴌鴍鴎鴏鴐鴑鴒鴓鴔鴕鴖鴗鴘鴙鴚鴛鴜鴝鴞鴟鴠鴡�鴢鴣鴤鴥鴦鴧鴨鴩鴪鴫鴬鴭鴮鴯鴰鴱鴲鴳鴴鴵鴶鴷鴸鴹鴺鴻鴼鴽鴾鴿鵀鵁鵂�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[248].length;++e)65533!==n[248][e].charCodeAt(0)&&(r[n[248][e]]=63488+e,t[63488+e]=n[248][e])
for(n[249]="����������������������������������������������������������������鵃鵄鵅鵆鵇鵈鵉鵊鵋鵌鵍鵎鵏鵐鵑鵒鵓鵔鵕鵖鵗鵘鵙鵚鵛鵜鵝鵞鵟鵠鵡鵢鵣鵤鵥鵦鵧鵨鵩鵪鵫鵬鵭鵮鵯鵰鵱鵲鵳鵴鵵鵶鵷鵸鵹鵺鵻鵼鵽鵾鵿鶀鶁�鶂鶃鶄鶅鶆鶇鶈鶉鶊鶋鶌鶍鶎鶏鶐鶑鶒鶓鶔鶕鶖鶗鶘鶙鶚鶛鶜鶝鶞鶟鶠鶡鶢�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[249].length;++e)65533!==n[249][e].charCodeAt(0)&&(r[n[249][e]]=63744+e,t[63744+e]=n[249][e])
for(n[250]="����������������������������������������������������������������鶣鶤鶥鶦鶧鶨鶩鶪鶫鶬鶭鶮鶯鶰鶱鶲鶳鶴鶵鶶鶷鶸鶹鶺鶻鶼鶽鶾鶿鷀鷁鷂鷃鷄鷅鷆鷇鷈鷉鷊鷋鷌鷍鷎鷏鷐鷑鷒鷓鷔鷕鷖鷗鷘鷙鷚鷛鷜鷝鷞鷟鷠鷡�鷢鷣鷤鷥鷦鷧鷨鷩鷪鷫鷬鷭鷮鷯鷰鷱鷲鷳鷴鷵鷶鷷鷸鷹鷺鷻鷼鷽鷾鷿鸀鸁鸂�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[250].length;++e)65533!==n[250][e].charCodeAt(0)&&(r[n[250][e]]=64e3+e,t[64e3+e]=n[250][e])
for(n[251]="����������������������������������������������������������������鸃鸄鸅鸆鸇鸈鸉鸊鸋鸌鸍鸎鸏鸐鸑鸒鸓鸔鸕鸖鸗鸘鸙鸚鸛鸜鸝鸞鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴鹵鹶鹷鹸鹹鹺鹻鹼鹽麀�麁麃麄麅麆麉麊麌麍麎麏麐麑麔麕麖麗麘麙麚麛麜麞麠麡麢麣麤麥麧麨麩麪�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[251].length;++e)65533!==n[251][e].charCodeAt(0)&&(r[n[251][e]]=64256+e,t[64256+e]=n[251][e])
for(n[252]="����������������������������������������������������������������麫麬麭麮麯麰麱麲麳麵麶麷麹麺麼麿黀黁黂黃黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰黱黲黳黴黵黶黷黸黺黽黿鼀鼁鼂鼃鼄鼅�鼆鼇鼈鼉鼊鼌鼏鼑鼒鼔鼕鼖鼘鼚鼛鼜鼝鼞鼟鼡鼣鼤鼥鼦鼧鼨鼩鼪鼫鼭鼮鼰鼱�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[252].length;++e)65533!==n[252][e].charCodeAt(0)&&(r[n[252][e]]=64512+e,t[64512+e]=n[252][e])
for(n[253]="����������������������������������������������������������������鼲鼳鼴鼵鼶鼸鼺鼼鼿齀齁齂齃齅齆齇齈齉齊齋齌齍齎齏齒齓齔齕齖齗齘齙齚齛齜齝齞齟齠齡齢齣齤齥齦齧齨齩齪齫齬齭齮齯齰齱齲齳齴齵齶齷齸�齹齺齻齼齽齾龁龂龍龎龏龐龑龒龓龔龕龖龗龘龜龝龞龡龢龣龤龥郎凉秊裏隣�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[253].length;++e)65533!==n[253][e].charCodeAt(0)&&(r[n[253][e]]=64768+e,t[64768+e]=n[253][e])
for(n[254]="����������������������������������������������������������������兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[254].length;++e)65533!==n[254][e].charCodeAt(0)&&(r[n[254][e]]=65024+e,t[65024+e]=n[254][e])
return{enc:r,dec:t}}(),cptable[949]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[129]="�����������������������������������������������������������������갂갃갅갆갋갌갍갎갏갘갞갟갡갢갣갥갦갧갨갩갪갫갮갲갳갴������갵갶갷갺갻갽갾갿걁걂걃걄걅걆걇걈걉걊걌걎걏걐걑걒걓걕������걖걗걙걚걛걝걞걟걠걡걢걣걤걥걦걧걨걩걪걫걬걭걮걯걲걳걵걶걹걻걼걽걾걿겂겇겈겍겎겏겑겒겓겕겖겗겘겙겚겛겞겢겣겤겥겦겧겫겭겮겱겲겳겴겵겶겷겺겾겿곀곂곃곅곆곇곉곊곋곍곎곏곐곑곒곓곔곖곘곙곚곛곜곝곞곟곢곣곥곦곩곫곭곮곲곴곷곸곹곺곻곾곿괁괂괃괅괇괈괉괊괋괎괐괒괓�".split(""),e=0;e!=n[129].length;++e)65533!==n[129][e].charCodeAt(0)&&(r[n[129][e]]=33024+e,t[33024+e]=n[129][e])
for(n[130]="�����������������������������������������������������������������괔괕괖괗괙괚괛괝괞괟괡괢괣괤괥괦괧괨괪괫괮괯괰괱괲괳������괶괷괹괺괻괽괾괿굀굁굂굃굆굈굊굋굌굍굎굏굑굒굓굕굖굗������굙굚굛굜굝굞굟굠굢굤굥굦굧굨굩굪굫굮굯굱굲굷굸굹굺굾궀궃궄궅궆궇궊궋궍궎궏궑궒궓궔궕궖궗궘궙궚궛궞궟궠궡궢궣궥궦궧궨궩궪궫궬궭궮궯궰궱궲궳궴궵궶궸궹궺궻궼궽궾궿귂귃귅귆귇귉귊귋귌귍귎귏귒귔귕귖귗귘귙귚귛귝귞귟귡귢귣귥귦귧귨귩귪귫귬귭귮귯귰귱귲귳귴귵귶귷�".split(""),e=0;e!=n[130].length;++e)65533!==n[130][e].charCodeAt(0)&&(r[n[130][e]]=33280+e,t[33280+e]=n[130][e])
for(n[131]="�����������������������������������������������������������������귺귻귽귾긂긃긄긅긆긇긊긌긎긏긐긑긒긓긕긖긗긘긙긚긛긜������긝긞긟긠긡긢긣긤긥긦긧긨긩긪긫긬긭긮긯긲긳긵긶긹긻긼������긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗깘깙깚깛깞깢깣깤깦깧깪깫깭깮깯깱깲깳깴깵깶깷깺깾깿꺀꺁꺂꺃꺆꺇꺈꺉꺊꺋꺍꺎꺏꺐꺑꺒꺓꺔꺕꺖꺗꺘꺙꺚꺛꺜꺝꺞꺟꺠꺡꺢꺣꺤꺥꺦꺧꺨꺩꺪꺫꺬꺭꺮꺯꺰꺱꺲꺳꺴꺵꺶꺷꺸꺹꺺꺻꺿껁껂껃껅껆껇껈껉껊껋껎껒껓껔껕껖껗껚껛껝껞껟껠껡껢껣껤껥�".split(""),e=0;e!=n[131].length;++e)65533!==n[131][e].charCodeAt(0)&&(r[n[131][e]]=33536+e,t[33536+e]=n[131][e])
for(n[132]="�����������������������������������������������������������������껦껧껩껪껬껮껯껰껱껲껳껵껶껷껹껺껻껽껾껿꼀꼁꼂꼃꼄꼅������꼆꼉꼊꼋꼌꼎꼏꼑꼒꼓꼔꼕꼖꼗꼘꼙꼚꼛꼜꼝꼞꼟꼠꼡꼢꼣������꼤꼥꼦꼧꼨꼩꼪꼫꼮꼯꼱꼳꼵꼶꼷꼸꼹꼺꼻꼾꽀꽄꽅꽆꽇꽊꽋꽌꽍꽎꽏꽑꽒꽓꽔꽕꽖꽗꽘꽙꽚꽛꽞꽟꽠꽡꽢꽣꽦꽧꽨꽩꽪꽫꽬꽭꽮꽯꽰꽱꽲꽳꽴꽵꽶꽷꽸꽺꽻꽼꽽꽾꽿꾁꾂꾃꾅꾆꾇꾉꾊꾋꾌꾍꾎꾏꾒꾓꾔꾖꾗꾘꾙꾚꾛꾝꾞꾟꾠꾡꾢꾣꾤꾥꾦꾧꾨꾩꾪꾫꾬꾭꾮꾯꾰꾱꾲꾳꾴꾵꾶꾷꾺꾻꾽꾾�".split(""),e=0;e!=n[132].length;++e)65533!==n[132][e].charCodeAt(0)&&(r[n[132][e]]=33792+e,t[33792+e]=n[132][e])
for(n[133]="�����������������������������������������������������������������꾿꿁꿂꿃꿄꿅꿆꿊꿌꿏꿐꿑꿒꿓꿕꿖꿗꿘꿙꿚꿛꿝꿞꿟꿠꿡������꿢꿣꿤꿥꿦꿧꿪꿫꿬꿭꿮꿯꿲꿳꿵꿶꿷꿹꿺꿻꿼꿽꿾꿿뀂뀃������뀅뀆뀇뀈뀉뀊뀋뀍뀎뀏뀑뀒뀓뀕뀖뀗뀘뀙뀚뀛뀞뀟뀠뀡뀢뀣뀤뀥뀦뀧뀩뀪뀫뀬뀭뀮뀯뀰뀱뀲뀳뀴뀵뀶뀷뀸뀹뀺뀻뀼뀽뀾뀿끀끁끂끃끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞끟끠끡끢끣끤끥끦끧끨끩끪끫끬끭끮끯끰끱끲끳끴끵끶끷끸끹끺끻끾끿낁낂낃낅낆낇낈낉낊낋낎낐낒낓낔낕낖낗낛낝낞낣낤�".split(""),e=0;e!=n[133].length;++e)65533!==n[133][e].charCodeAt(0)&&(r[n[133][e]]=34048+e,t[34048+e]=n[133][e])
for(n[134]="�����������������������������������������������������������������낥낦낧낪낰낲낶낷낹낺낻낽낾낿냀냁냂냃냆냊냋냌냍냎냏냒������냓냕냖냗냙냚냛냜냝냞냟냡냢냣냤냦냧냨냩냪냫냬냭냮냯냰������냱냲냳냴냵냶냷냸냹냺냻냼냽냾냿넀넁넂넃넄넅넆넇넊넍넎넏넑넔넕넖넗넚넞넟넠넡넢넦넧넩넪넫넭넮넯넰넱넲넳넶넺넻넼넽넾넿녂녃녅녆녇녉녊녋녌녍녎녏녒녓녖녗녙녚녛녝녞녟녡녢녣녤녥녦녧녨녩녪녫녬녭녮녯녰녱녲녳녴녵녶녷녺녻녽녾녿놁놃놄놅놆놇놊놌놎놏놐놑놕놖놗놙놚놛놝�".split(""),e=0;e!=n[134].length;++e)65533!==n[134][e].charCodeAt(0)&&(r[n[134][e]]=34304+e,t[34304+e]=n[134][e])
for(n[135]="�����������������������������������������������������������������놞놟놠놡놢놣놤놥놦놧놩놪놫놬놭놮놯놰놱놲놳놴놵놶놷놸������놹놺놻놼놽놾놿뇀뇁뇂뇃뇄뇅뇆뇇뇈뇉뇊뇋뇍뇎뇏뇑뇒뇓뇕������뇖뇗뇘뇙뇚뇛뇞뇠뇡뇢뇣뇤뇥뇦뇧뇪뇫뇭뇮뇯뇱뇲뇳뇴뇵뇶뇷뇸뇺뇼뇾뇿눀눁눂눃눆눇눉눊눍눎눏눐눑눒눓눖눘눚눛눜눝눞눟눡눢눣눤눥눦눧눨눩눪눫눬눭눮눯눰눱눲눳눵눶눷눸눹눺눻눽눾눿뉀뉁뉂뉃뉄뉅뉆뉇뉈뉉뉊뉋뉌뉍뉎뉏뉐뉑뉒뉓뉔뉕뉖뉗뉙뉚뉛뉝뉞뉟뉡뉢뉣뉤뉥뉦뉧뉪뉫뉬뉭뉮�".split(""),e=0;e!=n[135].length;++e)65533!==n[135][e].charCodeAt(0)&&(r[n[135][e]]=34560+e,t[34560+e]=n[135][e])
for(n[136]="�����������������������������������������������������������������뉯뉰뉱뉲뉳뉶뉷뉸뉹뉺뉻뉽뉾뉿늀늁늂늃늆늇늈늊늋늌늍늎������늏늒늓늕늖늗늛늜늝늞늟늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷������늸늹늺늻늼늽늾늿닀닁닂닃닄닅닆닇닊닋닍닎닏닑닓닔닕닖닗닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉댊댋댌댍댎댏댒댖댗댘댙댚댛댝댞댟댠댡댢댣댤댥댦댧댨댩댪댫댬댭댮댯댰댱댲댳댴댵댶댷댸댹댺댻댼댽댾댿덀덁덂덃덄덅덆덇덈덉덊덋덌덍덎덏덐덑덒덓덗덙덚덝덠덡덢덣�".split(""),e=0;e!=n[136].length;++e)65533!==n[136][e].charCodeAt(0)&&(r[n[136][e]]=34816+e,t[34816+e]=n[136][e])
for(n[137]="�����������������������������������������������������������������덦덨덪덬덭덯덲덳덵덶덷덹덺덻덼덽덾덿뎂뎆뎇뎈뎉뎊뎋뎍������뎎뎏뎑뎒뎓뎕뎖뎗뎘뎙뎚뎛뎜뎝뎞뎟뎢뎣뎤뎥뎦뎧뎩뎪뎫뎭������뎮뎯뎰뎱뎲뎳뎴뎵뎶뎷뎸뎹뎺뎻뎼뎽뎾뎿돀돁돂돃돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩돪돫돬돭돮돯돰돱돲돳돴돵돶돷돸돹돺돻돽돾돿됀됁됂됃됄됅됆됇됈됉됊됋됌됍됎됏됑됒됓됔됕됖됗됙됚됛됝됞됟됡됢됣됤됥됦됧됪됬됭됮됯됰됱됲됳됵됶됷됸됹됺됻됼됽됾됿둀둁둂둃둄�".split(""),e=0;e!=n[137].length;++e)65533!==n[137][e].charCodeAt(0)&&(r[n[137][e]]=35072+e,t[35072+e]=n[137][e])
for(n[138]="�����������������������������������������������������������������둅둆둇둈둉둊둋둌둍둎둏둒둓둕둖둗둙둚둛둜둝둞둟둢둤둦������둧둨둩둪둫둭둮둯둰둱둲둳둴둵둶둷둸둹둺둻둼둽둾둿뒁뒂������뒃뒄뒅뒆뒇뒉뒊뒋뒌뒍뒎뒏뒐뒑뒒뒓뒔뒕뒖뒗뒘뒙뒚뒛뒜뒞뒟뒠뒡뒢뒣뒥뒦뒧뒩뒪뒫뒭뒮뒯뒰뒱뒲뒳뒴뒶뒸뒺뒻뒼뒽뒾뒿듁듂듃듅듆듇듉듊듋듌듍듎듏듑듒듓듔듖듗듘듙듚듛듞듟듡듢듥듧듨듩듪듫듮듰듲듳듴듵듶듷듹듺듻듼듽듾듿딀딁딂딃딄딅딆딇딈딉딊딋딌딍딎딏딐딑딒딓딖딗딙딚딝�".split(""),e=0;e!=n[138].length;++e)65533!==n[138][e].charCodeAt(0)&&(r[n[138][e]]=35328+e,t[35328+e]=n[138][e])
for(n[139]="�����������������������������������������������������������������딞딟딠딡딢딣딦딫딬딭딮딯딲딳딵딶딷딹딺딻딼딽딾딿땂땆������땇땈땉땊땎땏땑땒땓땕땖땗땘땙땚땛땞땢땣땤땥땦땧땨땩땪������땫땬땭땮땯땰땱땲땳땴땵땶땷땸땹땺땻땼땽땾땿떀떁떂떃떄떅떆떇떈떉떊떋떌떍떎떏떐떑떒떓떔떕떖떗떘떙떚떛떜떝떞떟떢떣떥떦떧떩떬떭떮떯떲떶떷떸떹떺떾떿뗁뗂뗃뗅뗆뗇뗈뗉뗊뗋뗎뗒뗓뗔뗕뗖뗗뗙뗚뗛뗜뗝뗞뗟뗠뗡뗢뗣뗤뗥뗦뗧뗨뗩뗪뗫뗭뗮뗯뗰뗱뗲뗳뗴뗵뗶뗷뗸뗹뗺뗻뗼뗽뗾뗿�".split(""),e=0;e!=n[139].length;++e)65533!==n[139][e].charCodeAt(0)&&(r[n[139][e]]=35584+e,t[35584+e]=n[139][e])
for(n[140]="�����������������������������������������������������������������똀똁똂똃똄똅똆똇똈똉똊똋똌똍똎똏똒똓똕똖똗똙똚똛똜똝������똞똟똠똡똢똣똤똦똧똨똩똪똫똭똮똯똰똱똲똳똵똶똷똸똹똺������똻똼똽똾똿뙀뙁뙂뙃뙄뙅뙆뙇뙉뙊뙋뙌뙍뙎뙏뙐뙑뙒뙓뙔뙕뙖뙗뙘뙙뙚뙛뙜뙝뙞뙟뙠뙡뙢뙣뙥뙦뙧뙩뙪뙫뙬뙭뙮뙯뙰뙱뙲뙳뙴뙵뙶뙷뙸뙹뙺뙻뙼뙽뙾뙿뚀뚁뚂뚃뚄뚅뚆뚇뚈뚉뚊뚋뚌뚍뚎뚏뚐뚑뚒뚓뚔뚕뚖뚗뚘뚙뚚뚛뚞뚟뚡뚢뚣뚥뚦뚧뚨뚩뚪뚭뚮뚯뚰뚲뚳뚴뚵뚶뚷뚸뚹뚺뚻뚼뚽뚾뚿뛀뛁뛂�".split(""),e=0;e!=n[140].length;++e)65533!==n[140][e].charCodeAt(0)&&(r[n[140][e]]=35840+e,t[35840+e]=n[140][e])
for(n[141]="�����������������������������������������������������������������뛃뛄뛅뛆뛇뛈뛉뛊뛋뛌뛍뛎뛏뛐뛑뛒뛓뛕뛖뛗뛘뛙뛚뛛뛜뛝������뛞뛟뛠뛡뛢뛣뛤뛥뛦뛧뛨뛩뛪뛫뛬뛭뛮뛯뛱뛲뛳뛵뛶뛷뛹뛺������뛻뛼뛽뛾뛿뜂뜃뜄뜆뜇뜈뜉뜊뜋뜌뜍뜎뜏뜐뜑뜒뜓뜔뜕뜖뜗뜘뜙뜚뜛뜜뜝뜞뜟뜠뜡뜢뜣뜤뜥뜦뜧뜪뜫뜭뜮뜱뜲뜳뜴뜵뜶뜷뜺뜼뜽뜾뜿띀띁띂띃띅띆띇띉띊띋띍띎띏띐띑띒띓띖띗띘띙띚띛띜띝띞띟띡띢띣띥띦띧띩띪띫띬띭띮띯띲띴띶띷띸띹띺띻띾띿랁랂랃랅랆랇랈랉랊랋랎랓랔랕랚랛랝랞�".split(""),e=0;e!=n[141].length;++e)65533!==n[141][e].charCodeAt(0)&&(r[n[141][e]]=36096+e,t[36096+e]=n[141][e])
for(n[142]="�����������������������������������������������������������������랟랡랢랣랤랥랦랧랪랮랯랰랱랲랳랶랷랹랺랻랼랽랾랿럀럁������럂럃럄럅럆럈럊럋럌럍럎럏럐럑럒럓럔럕럖럗럘럙럚럛럜럝������럞럟럠럡럢럣럤럥럦럧럨럩럪럫럮럯럱럲럳럵럶럷럸럹럺럻럾렂렃렄렅렆렊렋렍렎렏렑렒렓렔렕렖렗렚렜렞렟렠렡렢렣렦렧렩렪렫렭렮렯렰렱렲렳렶렺렻렼렽렾렿롁롂롃롅롆롇롈롉롊롋롌롍롎롏롐롒롔롕롖롗롘롙롚롛롞롟롡롢롣롥롦롧롨롩롪롫롮롰롲롳롴롵롶롷롹롺롻롽롾롿뢀뢁뢂뢃뢄�".split(""),e=0;e!=n[142].length;++e)65533!==n[142][e].charCodeAt(0)&&(r[n[142][e]]=36352+e,t[36352+e]=n[142][e])
for(n[143]="�����������������������������������������������������������������뢅뢆뢇뢈뢉뢊뢋뢌뢎뢏뢐뢑뢒뢓뢔뢕뢖뢗뢘뢙뢚뢛뢜뢝뢞뢟������뢠뢡뢢뢣뢤뢥뢦뢧뢩뢪뢫뢬뢭뢮뢯뢱뢲뢳뢵뢶뢷뢹뢺뢻뢼뢽������뢾뢿룂룄룆룇룈룉룊룋룍룎룏룑룒룓룕룖룗룘룙룚룛룜룞룠룢룣룤룥룦룧룪룫룭룮룯룱룲룳룴룵룶룷룺룼룾룿뤀뤁뤂뤃뤅뤆뤇뤈뤉뤊뤋뤌뤍뤎뤏뤐뤑뤒뤓뤔뤕뤖뤗뤙뤚뤛뤜뤝뤞뤟뤡뤢뤣뤤뤥뤦뤧뤨뤩뤪뤫뤬뤭뤮뤯뤰뤱뤲뤳뤴뤵뤶뤷뤸뤹뤺뤻뤾뤿륁륂륃륅륆륇륈륉륊륋륍륎륐륒륓륔륕륖륗�".split(""),e=0;e!=n[143].length;++e)65533!==n[143][e].charCodeAt(0)&&(r[n[143][e]]=36608+e,t[36608+e]=n[143][e])
for(n[144]="�����������������������������������������������������������������륚륛륝륞륟륡륢륣륤륥륦륧륪륬륮륯륰륱륲륳륶륷륹륺륻륽������륾륿릀릁릂릃릆릈릋릌릏릐릑릒릓릔릕릖릗릘릙릚릛릜릝릞������릟릠릡릢릣릤릥릦릧릨릩릪릫릮릯릱릲릳릵릶릷릸릹릺릻릾맀맂맃맄맅맆맇맊맋맍맓맔맕맖맗맚맜맟맠맢맦맧맩맪맫맭맮맯맰맱맲맳맶맻맼맽맾맿먂먃먄먅먆먇먉먊먋먌먍먎먏먐먑먒먓먔먖먗먘먙먚먛먜먝먞먟먠먡먢먣먤먥먦먧먨먩먪먫먬먭먮먯먰먱먲먳먴먵먶먷먺먻먽먾먿멁멃멄멅멆�".split(""),e=0;e!=n[144].length;++e)65533!==n[144][e].charCodeAt(0)&&(r[n[144][e]]=36864+e,t[36864+e]=n[144][e])
for(n[145]="�����������������������������������������������������������������멇멊멌멏멐멑멒멖멗멙멚멛멝멞멟멠멡멢멣멦멪멫멬멭멮멯������멲멳멵멶멷멹멺멻멼멽멾멿몀몁몂몆몈몉몊몋몍몎몏몐몑몒������몓몔몕몖몗몘몙몚몛몜몝몞몟몠몡몢몣몤몥몦몧몪몭몮몯몱몳몴몵몶몷몺몼몾몿뫀뫁뫂뫃뫅뫆뫇뫉뫊뫋뫌뫍뫎뫏뫐뫑뫒뫓뫔뫕뫖뫗뫚뫛뫜뫝뫞뫟뫠뫡뫢뫣뫤뫥뫦뫧뫨뫩뫪뫫뫬뫭뫮뫯뫰뫱뫲뫳뫴뫵뫶뫷뫸뫹뫺뫻뫽뫾뫿묁묂묃묅묆묇묈묉묊묋묌묎묐묒묓묔묕묖묗묙묚묛묝묞묟묡묢묣묤묥묦묧�".split(""),e=0;e!=n[145].length;++e)65533!==n[145][e].charCodeAt(0)&&(r[n[145][e]]=37120+e,t[37120+e]=n[145][e])
for(n[146]="�����������������������������������������������������������������묨묪묬묭묮묯묰묱묲묳묷묹묺묿뭀뭁뭂뭃뭆뭈뭊뭋뭌뭎뭑뭒������뭓뭕뭖뭗뭙뭚뭛뭜뭝뭞뭟뭠뭢뭤뭥뭦뭧뭨뭩뭪뭫뭭뭮뭯뭰뭱������뭲뭳뭴뭵뭶뭷뭸뭹뭺뭻뭼뭽뭾뭿뮀뮁뮂뮃뮄뮅뮆뮇뮉뮊뮋뮍뮎뮏뮑뮒뮓뮔뮕뮖뮗뮘뮙뮚뮛뮜뮝뮞뮟뮠뮡뮢뮣뮥뮦뮧뮩뮪뮫뮭뮮뮯뮰뮱뮲뮳뮵뮶뮸뮹뮺뮻뮼뮽뮾뮿믁믂믃믅믆믇믉믊믋믌믍믎믏믑믒믔믕믖믗믘믙믚믛믜믝믞믟믠믡믢믣믤믥믦믧믨믩믪믫믬믭믮믯믰믱믲믳믴믵믶믷믺믻믽믾밁�".split(""),e=0;e!=n[146].length;++e)65533!==n[146][e].charCodeAt(0)&&(r[n[146][e]]=37376+e,t[37376+e]=n[146][e])
for(n[147]="�����������������������������������������������������������������밃밄밅밆밇밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵������밶밷밹밺밻밼밽밾밿뱂뱆뱇뱈뱊뱋뱎뱏뱑뱒뱓뱔뱕뱖뱗뱘뱙������뱚뱛뱜뱞뱟뱠뱡뱢뱣뱤뱥뱦뱧뱨뱩뱪뱫뱬뱭뱮뱯뱰뱱뱲뱳뱴뱵뱶뱷뱸뱹뱺뱻뱼뱽뱾뱿벀벁벂벃벆벇벉벊벍벏벐벑벒벓벖벘벛벜벝벞벟벢벣벥벦벩벪벫벬벭벮벯벲벶벷벸벹벺벻벾벿볁볂볃볅볆볇볈볉볊볋볌볎볒볓볔볖볗볙볚볛볝볞볟볠볡볢볣볤볥볦볧볨볩볪볫볬볭볮볯볰볱볲볳볷볹볺볻볽�".split(""),e=0;e!=n[147].length;++e)65533!==n[147][e].charCodeAt(0)&&(r[n[147][e]]=37632+e,t[37632+e]=n[147][e])
for(n[148]="�����������������������������������������������������������������볾볿봀봁봂봃봆봈봊봋봌봍봎봏봑봒봓봕봖봗봘봙봚봛봜봝������봞봟봠봡봢봣봥봦봧봨봩봪봫봭봮봯봰봱봲봳봴봵봶봷봸봹������봺봻봼봽봾봿뵁뵂뵃뵄뵅뵆뵇뵊뵋뵍뵎뵏뵑뵒뵓뵔뵕뵖뵗뵚뵛뵜뵝뵞뵟뵠뵡뵢뵣뵥뵦뵧뵩뵪뵫뵬뵭뵮뵯뵰뵱뵲뵳뵴뵵뵶뵷뵸뵹뵺뵻뵼뵽뵾뵿붂붃붅붆붋붌붍붎붏붒붔붖붗붘붛붝붞붟붠붡붢붣붥붦붧붨붩붪붫붬붭붮붯붱붲붳붴붵붶붷붹붺붻붼붽붾붿뷀뷁뷂뷃뷄뷅뷆뷇뷈뷉뷊뷋뷌뷍뷎뷏뷐뷑�".split(""),e=0;e!=n[148].length;++e)65533!==n[148][e].charCodeAt(0)&&(r[n[148][e]]=37888+e,t[37888+e]=n[148][e])
for(n[149]="�����������������������������������������������������������������뷒뷓뷖뷗뷙뷚뷛뷝뷞뷟뷠뷡뷢뷣뷤뷥뷦뷧뷨뷪뷫뷬뷭뷮뷯뷱������뷲뷳뷵뷶뷷뷹뷺뷻뷼뷽뷾뷿븁븂븄븆븇븈븉븊븋븎븏븑븒븓������븕븖븗븘븙븚븛븞븠븡븢븣븤븥븦븧븨븩븪븫븬븭븮븯븰븱븲븳븴븵븶븷븸븹븺븻븼븽븾븿빀빁빂빃빆빇빉빊빋빍빏빐빑빒빓빖빘빜빝빞빟빢빣빥빦빧빩빫빬빭빮빯빲빶빷빸빹빺빾빿뺁뺂뺃뺅뺆뺇뺈뺉뺊뺋뺎뺒뺓뺔뺕뺖뺗뺚뺛뺜뺝뺞뺟뺠뺡뺢뺣뺤뺥뺦뺧뺩뺪뺫뺬뺭뺮뺯뺰뺱뺲뺳뺴뺵뺶뺷�".split(""),e=0;e!=n[149].length;++e)65533!==n[149][e].charCodeAt(0)&&(r[n[149][e]]=38144+e,t[38144+e]=n[149][e])
for(n[150]="�����������������������������������������������������������������뺸뺹뺺뺻뺼뺽뺾뺿뻀뻁뻂뻃뻄뻅뻆뻇뻈뻉뻊뻋뻌뻍뻎뻏뻒뻓������뻕뻖뻙뻚뻛뻜뻝뻞뻟뻡뻢뻦뻧뻨뻩뻪뻫뻭뻮뻯뻰뻱뻲뻳뻴뻵������뻶뻷뻸뻹뻺뻻뻼뻽뻾뻿뼀뼂뼃뼄뼅뼆뼇뼊뼋뼌뼍뼎뼏뼐뼑뼒뼓뼔뼕뼖뼗뼚뼞뼟뼠뼡뼢뼣뼤뼥뼦뼧뼨뼩뼪뼫뼬뼭뼮뼯뼰뼱뼲뼳뼴뼵뼶뼷뼸뼹뼺뼻뼼뼽뼾뼿뽂뽃뽅뽆뽇뽉뽊뽋뽌뽍뽎뽏뽒뽓뽔뽖뽗뽘뽙뽚뽛뽜뽝뽞뽟뽠뽡뽢뽣뽤뽥뽦뽧뽨뽩뽪뽫뽬뽭뽮뽯뽰뽱뽲뽳뽴뽵뽶뽷뽸뽹뽺뽻뽼뽽뽾뽿뾀뾁뾂�".split(""),e=0;e!=n[150].length;++e)65533!==n[150][e].charCodeAt(0)&&(r[n[150][e]]=38400+e,t[38400+e]=n[150][e])
for(n[151]="�����������������������������������������������������������������뾃뾄뾅뾆뾇뾈뾉뾊뾋뾌뾍뾎뾏뾐뾑뾒뾓뾕뾖뾗뾘뾙뾚뾛뾜뾝������뾞뾟뾠뾡뾢뾣뾤뾥뾦뾧뾨뾩뾪뾫뾬뾭뾮뾯뾱뾲뾳뾴뾵뾶뾷뾸������뾹뾺뾻뾼뾽뾾뾿뿀뿁뿂뿃뿄뿆뿇뿈뿉뿊뿋뿎뿏뿑뿒뿓뿕뿖뿗뿘뿙뿚뿛뿝뿞뿠뿢뿣뿤뿥뿦뿧뿨뿩뿪뿫뿬뿭뿮뿯뿰뿱뿲뿳뿴뿵뿶뿷뿸뿹뿺뿻뿼뿽뿾뿿쀀쀁쀂쀃쀄쀅쀆쀇쀈쀉쀊쀋쀌쀍쀎쀏쀐쀑쀒쀓쀔쀕쀖쀗쀘쀙쀚쀛쀜쀝쀞쀟쀠쀡쀢쀣쀤쀥쀦쀧쀨쀩쀪쀫쀬쀭쀮쀯쀰쀱쀲쀳쀴쀵쀶쀷쀸쀹쀺쀻쀽쀾쀿�".split(""),e=0;e!=n[151].length;++e)65533!==n[151][e].charCodeAt(0)&&(r[n[151][e]]=38656+e,t[38656+e]=n[151][e])
for(n[152]="�����������������������������������������������������������������쁀쁁쁂쁃쁄쁅쁆쁇쁈쁉쁊쁋쁌쁍쁎쁏쁐쁒쁓쁔쁕쁖쁗쁙쁚쁛������쁝쁞쁟쁡쁢쁣쁤쁥쁦쁧쁪쁫쁬쁭쁮쁯쁰쁱쁲쁳쁴쁵쁶쁷쁸쁹������쁺쁻쁼쁽쁾쁿삀삁삂삃삄삅삆삇삈삉삊삋삌삍삎삏삒삓삕삖삗삙삚삛삜삝삞삟삢삤삦삧삨삩삪삫삮삱삲삷삸삹삺삻삾샂샃샄샆샇샊샋샍샎샏샑샒샓샔샕샖샗샚샞샟샠샡샢샣샦샧샩샪샫샭샮샯샰샱샲샳샶샸샺샻샼샽샾샿섁섂섃섅섆섇섉섊섋섌섍섎섏섑섒섓섔섖섗섘섙섚섛섡섢섥섨섩섪섫섮�".split(""),e=0;e!=n[152].length;++e)65533!==n[152][e].charCodeAt(0)&&(r[n[152][e]]=38912+e,t[38912+e]=n[152][e])
for(n[153]="�����������������������������������������������������������������섲섳섴섵섷섺섻섽섾섿셁셂셃셄셅셆셇셊셎셏셐셑셒셓셖셗������셙셚셛셝셞셟셠셡셢셣셦셪셫셬셭셮셯셱셲셳셵셶셷셹셺셻������셼셽셾셿솀솁솂솃솄솆솇솈솉솊솋솏솑솒솓솕솗솘솙솚솛솞솠솢솣솤솦솧솪솫솭솮솯솱솲솳솴솵솶솷솸솹솺솻솼솾솿쇀쇁쇂쇃쇅쇆쇇쇉쇊쇋쇍쇎쇏쇐쇑쇒쇓쇕쇖쇙쇚쇛쇜쇝쇞쇟쇡쇢쇣쇥쇦쇧쇩쇪쇫쇬쇭쇮쇯쇲쇴쇵쇶쇷쇸쇹쇺쇻쇾쇿숁숂숃숅숆숇숈숉숊숋숎숐숒숓숔숕숖숗숚숛숝숞숡숢숣�".split(""),e=0;e!=n[153].length;++e)65533!==n[153][e].charCodeAt(0)&&(r[n[153][e]]=39168+e,t[39168+e]=n[153][e])
for(n[154]="�����������������������������������������������������������������숤숥숦숧숪숬숮숰숳숵숶숷숸숹숺숻숼숽숾숿쉀쉁쉂쉃쉄쉅������쉆쉇쉉쉊쉋쉌쉍쉎쉏쉒쉓쉕쉖쉗쉙쉚쉛쉜쉝쉞쉟쉡쉢쉣쉤쉦������쉧쉨쉩쉪쉫쉮쉯쉱쉲쉳쉵쉶쉷쉸쉹쉺쉻쉾슀슂슃슄슅슆슇슊슋슌슍슎슏슑슒슓슔슕슖슗슙슚슜슞슟슠슡슢슣슦슧슩슪슫슮슯슰슱슲슳슶슸슺슻슼슽슾슿싀싁싂싃싄싅싆싇싈싉싊싋싌싍싎싏싐싑싒싓싔싕싖싗싘싙싚싛싞싟싡싢싥싦싧싨싩싪싮싰싲싳싴싵싷싺싽싾싿쌁쌂쌃쌄쌅쌆쌇쌊쌋쌎쌏�".split(""),e=0;e!=n[154].length;++e)65533!==n[154][e].charCodeAt(0)&&(r[n[154][e]]=39424+e,t[39424+e]=n[154][e])
for(n[155]="�����������������������������������������������������������������쌐쌑쌒쌖쌗쌙쌚쌛쌝쌞쌟쌠쌡쌢쌣쌦쌧쌪쌫쌬쌭쌮쌯쌰쌱쌲������쌳쌴쌵쌶쌷쌸쌹쌺쌻쌼쌽쌾쌿썀썁썂썃썄썆썇썈썉썊썋썌썍������썎썏썐썑썒썓썔썕썖썗썘썙썚썛썜썝썞썟썠썡썢썣썤썥썦썧썪썫썭썮썯썱썳썴썵썶썷썺썻썾썿쎀쎁쎂쎃쎅쎆쎇쎉쎊쎋쎍쎎쎏쎐쎑쎒쎓쎔쎕쎖쎗쎘쎙쎚쎛쎜쎝쎞쎟쎠쎡쎢쎣쎤쎥쎦쎧쎨쎩쎪쎫쎬쎭쎮쎯쎰쎱쎲쎳쎴쎵쎶쎷쎸쎹쎺쎻쎼쎽쎾쎿쏁쏂쏃쏄쏅쏆쏇쏈쏉쏊쏋쏌쏍쏎쏏쏐쏑쏒쏓쏔쏕쏖쏗쏚�".split(""),e=0;e!=n[155].length;++e)65533!==n[155][e].charCodeAt(0)&&(r[n[155][e]]=39680+e,t[39680+e]=n[155][e])
for(n[156]="�����������������������������������������������������������������쏛쏝쏞쏡쏣쏤쏥쏦쏧쏪쏫쏬쏮쏯쏰쏱쏲쏳쏶쏷쏹쏺쏻쏼쏽쏾������쏿쐀쐁쐂쐃쐄쐅쐆쐇쐉쐊쐋쐌쐍쐎쐏쐑쐒쐓쐔쐕쐖쐗쐘쐙쐚������쐛쐜쐝쐞쐟쐠쐡쐢쐣쐥쐦쐧쐨쐩쐪쐫쐭쐮쐯쐱쐲쐳쐵쐶쐷쐸쐹쐺쐻쐾쐿쑀쑁쑂쑃쑄쑅쑆쑇쑉쑊쑋쑌쑍쑎쑏쑐쑑쑒쑓쑔쑕쑖쑗쑘쑙쑚쑛쑜쑝쑞쑟쑠쑡쑢쑣쑦쑧쑩쑪쑫쑭쑮쑯쑰쑱쑲쑳쑶쑷쑸쑺쑻쑼쑽쑾쑿쒁쒂쒃쒄쒅쒆쒇쒈쒉쒊쒋쒌쒍쒎쒏쒐쒑쒒쒓쒕쒖쒗쒘쒙쒚쒛쒝쒞쒟쒠쒡쒢쒣쒤쒥쒦쒧쒨쒩�".split(""),e=0;e!=n[156].length;++e)65533!==n[156][e].charCodeAt(0)&&(r[n[156][e]]=39936+e,t[39936+e]=n[156][e])
for(n[157]="�����������������������������������������������������������������쒪쒫쒬쒭쒮쒯쒰쒱쒲쒳쒴쒵쒶쒷쒹쒺쒻쒽쒾쒿쓀쓁쓂쓃쓄쓅������쓆쓇쓈쓉쓊쓋쓌쓍쓎쓏쓐쓑쓒쓓쓔쓕쓖쓗쓘쓙쓚쓛쓜쓝쓞쓟������쓠쓡쓢쓣쓤쓥쓦쓧쓨쓪쓫쓬쓭쓮쓯쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂씃씄씅씆씇씈씉씊씋씍씎씏씑씒씓씕씖씗씘씙씚씛씝씞씟씠씡씢씣씤씥씦씧씪씫씭씮씯씱씲씳씴씵씶씷씺씼씾씿앀앁앂앃앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩앪앫앬앭앮앯앲앶앷앸앹앺앻앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔�".split(""),e=0;e!=n[157].length;++e)65533!==n[157][e].charCodeAt(0)&&(r[n[157][e]]=40192+e,t[40192+e]=n[157][e])
for(n[158]="�����������������������������������������������������������������얖얙얚얛얝얞얟얡얢얣얤얥얦얧얨얪얫얬얭얮얯얰얱얲얳얶������얷얺얿엀엁엂엃엋엍엏엒엓엕엖엗엙엚엛엜엝엞엟엢엤엦엧������엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑옒옓옔옕옖옗옚옝옞옟옠옡옢옣옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉왊왋왌왍왎왏왒왖왗왘왙왚왛왞왟왡왢왣왤왥왦왧왨왩왪왫왭왮왰왲왳왴왵왶왷왺왻왽왾왿욁욂욃욄욅욆욇욊욌욎욏욐욑욒욓욖욗욙욚욛욝욞욟욠욡욢욣욦�".split(""),e=0;e!=n[158].length;++e)65533!==n[158][e].charCodeAt(0)&&(r[n[158][e]]=40448+e,t[40448+e]=n[158][e])
for(n[159]="�����������������������������������������������������������������욨욪욫욬욭욮욯욲욳욵욶욷욻욼욽욾욿웂웄웆웇웈웉웊웋웎������웏웑웒웓웕웖웗웘웙웚웛웞웟웢웣웤웥웦웧웪웫웭웮웯웱웲������웳웴웵웶웷웺웻웼웾웿윀윁윂윃윆윇윉윊윋윍윎윏윐윑윒윓윖윘윚윛윜윝윞윟윢윣윥윦윧윩윪윫윬윭윮윯윲윴윶윸윹윺윻윾윿읁읂읃읅읆읇읈읉읋읎읐읙읚읛읝읞읟읡읢읣읤읥읦읧읩읪읬읭읮읯읰읱읲읳읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛잜잝잞잟잢잧잨잩잪잫잮잯잱잲잳잵잶잷�".split(""),e=0;e!=n[159].length;++e)65533!==n[159][e].charCodeAt(0)&&(r[n[159][e]]=40704+e,t[40704+e]=n[159][e])
for(n[160]="�����������������������������������������������������������������잸잹잺잻잾쟂쟃쟄쟅쟆쟇쟊쟋쟍쟏쟑쟒쟓쟔쟕쟖쟗쟙쟚쟛쟜������쟞쟟쟠쟡쟢쟣쟥쟦쟧쟩쟪쟫쟭쟮쟯쟰쟱쟲쟳쟴쟵쟶쟷쟸쟹쟺������쟻쟼쟽쟾쟿젂젃젅젆젇젉젋젌젍젎젏젒젔젗젘젙젚젛젞젟젡젢젣젥젦젧젨젩젪젫젮젰젲젳젴젵젶젷젹젺젻젽젾젿졁졂졃졄졅졆졇졊졋졎졏졐졑졒졓졕졖졗졘졙졚졛졜졝졞졟졠졡졢졣졤졥졦졧졨졩졪졫졬졭졮졯졲졳졵졶졷졹졻졼졽졾졿좂좄좈좉좊좎좏좐좑좒좓좕좖좗좘좙좚좛좜좞좠좢좣좤�".split(""),e=0;e!=n[160].length;++e)65533!==n[160][e].charCodeAt(0)&&(r[n[160][e]]=40960+e,t[40960+e]=n[160][e])
for(n[161]="�����������������������������������������������������������������좥좦좧좩좪좫좬좭좮좯좰좱좲좳좴좵좶좷좸좹좺좻좾좿죀죁������죂죃죅죆죇죉죊죋죍죎죏죐죑죒죓죖죘죚죛죜죝죞죟죢죣죥������죦죧죨죩죪죫죬죭죮죯죰죱죲죳죴죶죷죸죹죺죻죾죿줁줂줃줇줈줉줊줋줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈〉《》「」『』【】±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="�����������������������������������������������������������������줐줒줓줔줕줖줗줙줚줛줜줝줞줟줠줡줢줣줤줥줦줧줨줩줪줫������줭줮줯줰줱줲줳줵줶줷줸줹줺줻줼줽줾줿쥀쥁쥂쥃쥄쥅쥆쥇������쥈쥉쥊쥋쥌쥍쥎쥏쥒쥓쥕쥖쥗쥙쥚쥛쥜쥝쥞쥟쥢쥤쥥쥦쥧쥨쥩쥪쥫쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®������������������������".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="�����������������������������������������������������������������쥱쥲쥳쥵쥶쥷쥸쥹쥺쥻쥽쥾쥿즀즁즂즃즄즅즆즇즊즋즍즎즏������즑즒즓즔즕즖즗즚즜즞즟즠즡즢즣즤즥즦즧즨즩즪즫즬즭즮������즯즰즱즲즳즴즵즶즷즸즹즺즻즼즽즾즿짂짃짅짆짉짋짌짍짎짏짒짔짗짘짛！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［￦］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="�����������������������������������������������������������������짞짟짡짣짥짦짨짩짪짫짮짲짳짴짵짶짷짺짻짽짾짿쨁쨂쨃쨄������쨅쨆쨇쨊쨎쨏쨐쨑쨒쨓쨕쨖쨗쨙쨚쨛쨜쨝쨞쨟쨠쨡쨢쨣쨤쨥������쨦쨧쨨쨪쨫쨬쨭쨮쨯쨰쨱쨲쨳쨴쨵쨶쨷쨸쨹쨺쨻쨼쨽쨾쨿쩀쩁쩂쩃쩄쩅쩆ㄱㄲㄳㄴㄵㄶㄷㄸㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅃㅄㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣㅤㅥㅦㅧㅨㅩㅪㅫㅬㅭㅮㅯㅰㅱㅲㅳㅴㅵㅶㅷㅸㅹㅺㅻㅼㅽㅾㅿㆀㆁㆂㆃㆄㆅㆆㆇㆈㆉㆊㆋㆌㆍㆎ�".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="�����������������������������������������������������������������쩇쩈쩉쩊쩋쩎쩏쩑쩒쩓쩕쩖쩗쩘쩙쩚쩛쩞쩢쩣쩤쩥쩦쩧쩩쩪������쩫쩬쩭쩮쩯쩰쩱쩲쩳쩴쩵쩶쩷쩸쩹쩺쩻쩼쩾쩿쪀쪁쪂쪃쪅쪆������쪇쪈쪉쪊쪋쪌쪍쪎쪏쪐쪑쪒쪓쪔쪕쪖쪗쪙쪚쪛쪜쪝쪞쪟쪠쪡쪢쪣쪤쪥쪦쪧ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ�����ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ�������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω�������".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="�����������������������������������������������������������������쪨쪩쪪쪫쪬쪭쪮쪯쪰쪱쪲쪳쪴쪵쪶쪷쪸쪹쪺쪻쪾쪿쫁쫂쫃쫅������쫆쫇쫈쫉쫊쫋쫎쫐쫒쫔쫕쫖쫗쫚쫛쫜쫝쫞쫟쫡쫢쫣쫤쫥쫦쫧������쫨쫩쫪쫫쫭쫮쫯쫰쫱쫲쫳쫵쫶쫷쫸쫹쫺쫻쫼쫽쫾쫿쬀쬁쬂쬃쬄쬅쬆쬇쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃╄╅╆╇╈╉╊���������������������������".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="�����������������������������������������������������������������쬋쬌쬍쬎쬏쬑쬒쬓쬕쬖쬗쬙쬚쬛쬜쬝쬞쬟쬢쬣쬤쬥쬦쬧쬨쬩������쬪쬫쬬쬭쬮쬯쬰쬱쬲쬳쬴쬵쬶쬷쬸쬹쬺쬻쬼쬽쬾쬿쭀쭂쭃쭄������쭅쭆쭇쭊쭋쭍쭎쭏쭑쭒쭓쭔쭕쭖쭗쭚쭛쭜쭞쭟쭠쭡쭢쭣쭥쭦쭧쭨쭩쭪쭫쭬㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙㎚㎛㎜㎝㎞㎟㎠㎡㎢㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰㎱㎲㎳㎴㎵㎶㎷㎸㎹㎀㎁㎂㎃㎄㎺㎻㎼㎽㎾㎿㎐㎑㎒㎓㎔Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆����������������".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="�����������������������������������������������������������������쭭쭮쭯쭰쭱쭲쭳쭴쭵쭶쭷쭺쭻쭼쭽쭾쭿쮀쮁쮂쮃쮄쮅쮆쮇쮈������쮉쮊쮋쮌쮍쮎쮏쮐쮑쮒쮓쮔쮕쮖쮗쮘쮙쮚쮛쮝쮞쮟쮠쮡쮢쮣������쮤쮥쮦쮧쮨쮩쮪쮫쮬쮭쮮쮯쮰쮱쮲쮳쮴쮵쮶쮷쮹쮺쮻쮼쮽쮾쮿쯀쯁쯂쯃쯄ÆÐªĦ�Ĳ�ĿŁØŒºÞŦŊ�㉠㉡㉢㉣㉤㉥㉦㉧㉨㉩㉪㉫㉬㉭㉮㉯㉰㉱㉲㉳㉴㉵㉶㉷㉸㉹㉺㉻ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮½⅓⅔¼¾⅛⅜⅝⅞�".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="�����������������������������������������������������������������쯅쯆쯇쯈쯉쯊쯋쯌쯍쯎쯏쯐쯑쯒쯓쯕쯖쯗쯘쯙쯚쯛쯜쯝쯞쯟������쯠쯡쯢쯣쯥쯦쯨쯪쯫쯬쯭쯮쯯쯰쯱쯲쯳쯴쯵쯶쯷쯸쯹쯺쯻쯼������쯽쯾쯿찀찁찂찃찄찅찆찇찈찉찊찋찎찏찑찒찓찕찖찗찘찙찚찛찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀㈁㈂㈃㈄㈅㈆㈇㈈㈉㈊㈋㈌㈍㈎㈏㈐㈑㈒㈓㈔㈕㈖㈗㈘㈙㈚㈛⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂¹²³⁴ⁿ₁₂₃₄�".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[170]="�����������������������������������������������������������������찥찦찪찫찭찯찱찲찳찴찵찶찷찺찿챀챁챂챃챆챇챉챊챋챍챎������챏챐챑챒챓챖챚챛챜챝챞챟챡챢챣챥챧챩챪챫챬챭챮챯챱챲������챳챴챶챷챸챹챺챻챼챽챾챿첀첁첂첃첄첅첆첇첈첉첊첋첌첍첎첏첐첑첒첓ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(""),e=0;e!=n[170].length;++e)65533!==n[170][e].charCodeAt(0)&&(r[n[170][e]]=43520+e,t[43520+e]=n[170][e])
for(n[171]="�����������������������������������������������������������������첔첕첖첗첚첛첝첞첟첡첢첣첤첥첦첧첪첮첯첰첱첲첳첶첷첹������첺첻첽첾첿쳀쳁쳂쳃쳆쳈쳊쳋쳌쳍쳎쳏쳑쳒쳓쳕쳖쳗쳘쳙쳚������쳛쳜쳝쳞쳟쳠쳡쳢쳣쳥쳦쳧쳨쳩쳪쳫쳭쳮쳯쳱쳲쳳쳴쳵쳶쳷쳸쳹쳺쳻쳼쳽ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(""),e=0;e!=n[171].length;++e)65533!==n[171][e].charCodeAt(0)&&(r[n[171][e]]=43776+e,t[43776+e]=n[171][e])
for(n[172]="�����������������������������������������������������������������쳾쳿촀촂촃촄촅촆촇촊촋촍촎촏촑촒촓촔촕촖촗촚촜촞촟촠������촡촢촣촥촦촧촩촪촫촭촮촯촰촱촲촳촴촵촶촷촸촺촻촼촽촾������촿쵀쵁쵂쵃쵄쵅쵆쵇쵈쵉쵊쵋쵌쵍쵎쵏쵐쵑쵒쵓쵔쵕쵖쵗쵘쵙쵚쵛쵝쵞쵟АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(""),e=0;e!=n[172].length;++e)65533!==n[172][e].charCodeAt(0)&&(r[n[172][e]]=44032+e,t[44032+e]=n[172][e])
for(n[173]="�����������������������������������������������������������������쵡쵢쵣쵥쵦쵧쵨쵩쵪쵫쵮쵰쵲쵳쵴쵵쵶쵷쵹쵺쵻쵼쵽쵾쵿춀������춁춂춃춄춅춆춇춉춊춋춌춍춎춏춐춑춒춓춖춗춙춚춛춝춞춟������춠춡춢춣춦춨춪춫춬춭춮춯춱춲춳춴춵춶춷춸춹춺춻춼춽춾춿췀췁췂췃췅�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[173].length;++e)65533!==n[173][e].charCodeAt(0)&&(r[n[173][e]]=44288+e,t[44288+e]=n[173][e])
for(n[174]="�����������������������������������������������������������������췆췇췈췉췊췋췍췎췏췑췒췓췔췕췖췗췘췙췚췛췜췝췞췟췠췡������췢췣췤췥췦췧췩췪췫췭췮췯췱췲췳췴췵췶췷췺췼췾췿츀츁츂������츃츅츆츇츉츊츋츍츎츏츐츑츒츓츕츖츗츘츚츛츜츝츞츟츢츣츥츦츧츩츪츫�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[174].length;++e)65533!==n[174][e].charCodeAt(0)&&(r[n[174][e]]=44544+e,t[44544+e]=n[174][e])
for(n[175]="�����������������������������������������������������������������츬츭츮츯츲츴츶츷츸츹츺츻츼츽츾츿칀칁칂칃칄칅칆칇칈칉������칊칋칌칍칎칏칐칑칒칓칔칕칖칗칚칛칝칞칢칣칤칥칦칧칪칬������칮칯칰칱칲칳칶칷칹칺칻칽칾칿캀캁캂캃캆캈캊캋캌캍캎캏캒캓캕캖캗캙�����������������������������������������������������������������������������������������������".split(""),e=0;e!=n[175].length;++e)65533!==n[175][e].charCodeAt(0)&&(r[n[175][e]]=44800+e,t[44800+e]=n[175][e])
for(n[176]="�����������������������������������������������������������������캚캛캜캝캞캟캢캦캧캨캩캪캫캮캯캰캱캲캳캴캵캶캷캸캹캺������캻캼캽캾캿컀컂컃컄컅컆컇컈컉컊컋컌컍컎컏컐컑컒컓컔컕������컖컗컘컙컚컛컜컝컞컟컠컡컢컣컦컧컩컪컭컮컯컰컱컲컳컶컺컻컼컽컾컿가각간갇갈갉갊감갑값갓갔강갖갗같갚갛개객갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="�����������������������������������������������������������������켂켃켅켆켇켉켊켋켌켍켎켏켒켔켖켗켘켙켚켛켝켞켟켡켢켣������켥켦켧켨켩켪켫켮켲켳켴켵켶켷켹켺켻켼켽켾켿콀콁콂콃콄������콅콆콇콈콉콊콋콌콍콎콏콐콑콒콓콖콗콙콚콛콝콞콟콠콡콢콣콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="�����������������������������������������������������������������콭콮콯콲콳콵콶콷콹콺콻콼콽콾콿쾁쾂쾃쾄쾆쾇쾈쾉쾊쾋쾍������쾎쾏쾐쾑쾒쾓쾔쾕쾖쾗쾘쾙쾚쾛쾜쾝쾞쾟쾠쾢쾣쾤쾥쾦쾧쾩������쾪쾫쾬쾭쾮쾯쾱쾲쾳쾴쾵쾶쾷쾸쾹쾺쾻쾼쾽쾾쾿쿀쿁쿂쿃쿅쿆쿇쿈쿉쿊쿋깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="�����������������������������������������������������������������쿌쿍쿎쿏쿐쿑쿒쿓쿔쿕쿖쿗쿘쿙쿚쿛쿜쿝쿞쿟쿢쿣쿥쿦쿧쿩������쿪쿫쿬쿭쿮쿯쿲쿴쿶쿷쿸쿹쿺쿻쿽쿾쿿퀁퀂퀃퀅퀆퀇퀈퀉퀊������퀋퀌퀍퀎퀏퀐퀒퀓퀔퀕퀖퀗퀙퀚퀛퀜퀝퀞퀟퀠퀡퀢퀣퀤퀥퀦퀧퀨퀩퀪퀫퀬끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫났낭낮낯낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="�����������������������������������������������������������������퀮퀯퀰퀱퀲퀳퀶퀷퀹퀺퀻퀽퀾퀿큀큁큂큃큆큈큊큋큌큍큎큏������큑큒큓큕큖큗큙큚큛큜큝큞큟큡큢큣큤큥큦큧큨큩큪큫큮큯������큱큲큳큵큶큷큸큹큺큻큾큿킀킂킃킄킅킆킇킈킉킊킋킌킍킎킏킐킑킒킓킔뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫달닭닮닯닳담답닷닸당닺닻닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="�����������������������������������������������������������������킕킖킗킘킙킚킛킜킝킞킟킠킡킢킣킦킧킩킪킫킭킮킯킰킱킲������킳킶킸킺킻킼킽킾킿탂탃탅탆탇탊탋탌탍탎탏탒탖탗탘탙탚������탛탞탟탡탢탣탥탦탧탨탩탪탫탮탲탳탴탵탶탷탹탺탻탼탽탾탿턀턁턂턃턄덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="�����������������������������������������������������������������턅턆턇턈턉턊턋턌턎턏턐턑턒턓턔턕턖턗턘턙턚턛턜턝턞턟������턠턡턢턣턤턥턦턧턨턩턪턫턬턭턮턯턲턳턵턶턷턹턻턼턽턾������턿텂텆텇텈텉텊텋텎텏텑텒텓텕텖텗텘텙텚텛텞텠텢텣텤텥텦텧텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="�����������������������������������������������������������������텮텯텰텱텲텳텴텵텶텷텸텹텺텻텽텾텿톀톁톂톃톅톆톇톉톊������톋톌톍톎톏톐톑톒톓톔톕톖톗톘톙톚톛톜톝톞톟톢톣톥톦톧������톩톪톫톬톭톮톯톲톴톶톷톸톹톻톽톾톿퇁퇂퇃퇄퇅퇆퇇퇈퇉퇊퇋퇌퇍퇎퇏래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="�����������������������������������������������������������������퇐퇑퇒퇓퇔퇕퇖퇗퇙퇚퇛퇜퇝퇞퇟퇠퇡퇢퇣퇤퇥퇦퇧퇨퇩퇪������퇫퇬퇭퇮퇯퇰퇱퇲퇳퇵퇶퇷퇹퇺퇻퇼퇽퇾퇿툀툁툂툃툄툅툆������툈툊툋툌툍툎툏툑툒툓툔툕툖툗툘툙툚툛툜툝툞툟툠툡툢툣툤툥툦툧툨툩륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많맏말맑맒맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="�����������������������������������������������������������������툪툫툮툯툱툲툳툵툶툷툸툹툺툻툾퉀퉂퉃퉄퉅퉆퉇퉉퉊퉋퉌������퉍퉎퉏퉐퉑퉒퉓퉔퉕퉖퉗퉘퉙퉚퉛퉝퉞퉟퉠퉡퉢퉣퉥퉦퉧퉨������퉩퉪퉫퉬퉭퉮퉯퉰퉱퉲퉳퉴퉵퉶퉷퉸퉹퉺퉻퉼퉽퉾퉿튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바박밖밗반받발밝밞밟밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="�����������������������������������������������������������������튍튎튏튒튓튔튖튗튘튙튚튛튝튞튟튡튢튣튥튦튧튨튩튪튫튭������튮튯튰튲튳튴튵튶튷튺튻튽튾틁틃틄틅틆틇틊틌틍틎틏틐틑������틒틓틕틖틗틙틚틛틝틞틟틠틡틢틣틦틧틨틩틪틫틬틭틮틯틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="�����������������������������������������������������������������틻틼틽틾틿팂팄팆팇팈팉팊팋팏팑팒팓팕팗팘팙팚팛팞팢팣������팤팦팧팪팫팭팮팯팱팲팳팴팵팶팷팺팾팿퍀퍁퍂퍃퍆퍇퍈퍉������퍊퍋퍌퍍퍎퍏퍐퍑퍒퍓퍔퍕퍖퍗퍘퍙퍚퍛퍜퍝퍞퍟퍠퍡퍢퍣퍤퍥퍦퍧퍨퍩빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="�����������������������������������������������������������������퍪퍫퍬퍭퍮퍯퍰퍱퍲퍳퍴퍵퍶퍷퍸퍹퍺퍻퍾퍿펁펂펃펅펆펇������펈펉펊펋펎펒펓펔펕펖펗펚펛펝펞펟펡펢펣펤펥펦펧펪펬펮������펯펰펱펲펳펵펶펷펹펺펻펽펾펿폀폁폂폃폆폇폊폋폌폍폎폏폑폒폓폔폕폖샥샨샬샴샵샷샹섀섄섈섐섕서석섞섟선섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="�����������������������������������������������������������������폗폙폚폛폜폝폞폟폠폢폤폥폦폧폨폩폪폫폮폯폱폲폳폵폶폷������폸폹폺폻폾퐀퐂퐃퐄퐅퐆퐇퐉퐊퐋퐌퐍퐎퐏퐐퐑퐒퐓퐔퐕퐖������퐗퐘퐙퐚퐛퐜퐞퐟퐠퐡퐢퐣퐤퐥퐦퐧퐨퐩퐪퐫퐬퐭퐮퐯퐰퐱퐲퐳퐴퐵퐶퐷숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="�����������������������������������������������������������������퐸퐹퐺퐻퐼퐽퐾퐿푁푂푃푅푆푇푈푉푊푋푌푍푎푏푐푑푒푓������푔푕푖푗푘푙푚푛푝푞푟푡푢푣푥푦푧푨푩푪푫푬푮푰푱푲������푳푴푵푶푷푺푻푽푾풁풃풄풅풆풇풊풌풎풏풐풑풒풓풕풖풗풘풙풚풛풜풝쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄업없엇었엉엊엌엎�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="�����������������������������������������������������������������풞풟풠풡풢풣풤풥풦풧풨풪풫풬풭풮풯풰풱풲풳풴풵풶풷풸������풹풺풻풼풽풾풿퓀퓁퓂퓃퓄퓅퓆퓇퓈퓉퓊퓋퓍퓎퓏퓑퓒퓓퓕������퓖퓗퓘퓙퓚퓛퓝퓞퓠퓡퓢퓣퓤퓥퓦퓧퓩퓪퓫퓭퓮퓯퓱퓲퓳퓴퓵퓶퓷퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염엽엾엿였영옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="�����������������������������������������������������������������퓾퓿픀픁픂픃픅픆픇픉픊픋픍픎픏픐픑픒픓픖픘픙픚픛픜픝������픞픟픠픡픢픣픤픥픦픧픨픩픪픫픬픭픮픯픰픱픲픳픴픵픶픷������픸픹픺픻픾픿핁핂핃핅핆핇핈핉핊핋핎핐핒핓핔핕핖핗핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응읒읓읔읕읖읗의읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="�����������������������������������������������������������������핤핦핧핪핬핮핯핰핱핲핳핶핷핹핺핻핽핾핿햀햁햂햃햆햊햋������햌햍햎햏햑햒햓햔햕햖햗햘햙햚햛햜햝햞햟햠햡햢햣햤햦햧������햨햩햪햫햬햭햮햯햰햱햲햳햴햵햶햷햸햹햺햻햼햽햾햿헀헁헂헃헄헅헆헇점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="�����������������������������������������������������������������헊헋헍헎헏헑헓헔헕헖헗헚헜헞헟헠헡헢헣헦헧헩헪헫헭헮������헯헰헱헲헳헶헸헺헻헼헽헾헿혂혃혅혆혇혉혊혋혌혍혎혏혒������혖혗혘혙혚혛혝혞혟혡혢혣혥혦혧혨혩혪혫혬혮혯혰혱혲혳혴혵혶혷혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="�����������������������������������������������������������������혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝홞홟홠홡������홢홣홤홥홦홨홪홫홬홭홮홯홲홳홵홶홷홸홹홺홻홼홽홾홿횀������횁횂횄횆횇횈횉횊횋횎횏횑횒횓횕횖횗횘횙횚횛횜횞횠횢횣횤횥횦횧횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="�����������������������������������������������������������������횫횭횮횯횱횲횳횴횵횶횷횸횺횼횽횾횿훀훁훂훃훆훇훉훊훋������훍훎훏훐훒훓훕훖훘훚훛훜훝훞훟훡훢훣훥훦훧훩훪훫훬훭������훮훯훱훲훳훴훶훷훸훹훺훻훾훿휁휂휃휅휆휇휈휉휊휋휌휍휎휏휐휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="�����������������������������������������������������������������휕휖휗휚휛휝휞휟휡휢휣휤휥휦휧휪휬휮휯휰휱휲휳휶휷휹������휺휻휽휾휿흀흁흂흃흅흆흈흊흋흌흍흎흏흒흓흕흚흛흜흝흞������흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵흶흷흸흹흺흻흾흿힀힂힃힄힅힆힇힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="�����������������������������������������������������������������힍힎힏힑힒힓힔힕힖힗힚힜힞힟힠힡힢힣������������������������������������������������������������������������������퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁�".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[199]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠�".split(""),e=0;e!=n[199].length;++e)65533!==n[199][e].charCodeAt(0)&&(r[n[199][e]]=50944+e,t[50944+e]=n[199][e])
for(n[200]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝�".split(""),e=0;e!=n[200].length;++e)65533!==n[200][e].charCodeAt(0)&&(r[n[200][e]]=51200+e,t[51200+e]=n[200][e])
for(n[202]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩羅蘿螺裸邏那樂洛烙珞落諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������納臘蠟衲囊娘廊朗浪狼郎乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧老蘆虜路露駑魯鷺碌祿綠菉錄鹿論壟弄濃籠聾膿農惱牢磊腦賂雷尿壘屢樓淚漏累縷陋嫩訥杻紐勒肋凜凌稜綾能菱陵尼泥匿溺多茶�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬�".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
for(n[248]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃�".split(""),e=0;e!=n[248].length;++e)65533!==n[248][e].charCodeAt(0)&&(r[n[248][e]]=63488+e,t[63488+e]=n[248][e])
for(n[249]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航�".split(""),e=0;e!=n[249].length;++e)65533!==n[249][e].charCodeAt(0)&&(r[n[249][e]]=63744+e,t[63744+e]=n[249][e])
for(n[250]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型�".split(""),e=0;e!=n[250].length;++e)65533!==n[250][e].charCodeAt(0)&&(r[n[250][e]]=64e3+e,t[64e3+e]=n[250][e])
for(n[251]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵�".split(""),e=0;e!=n[251].length;++e)65533!==n[251][e].charCodeAt(0)&&(r[n[251][e]]=64256+e,t[64256+e]=n[251][e])
for(n[252]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆�".split(""),e=0;e!=n[252].length;++e)65533!==n[252][e].charCodeAt(0)&&(r[n[252][e]]=64512+e,t[64512+e]=n[252][e])
for(n[253]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰�".split(""),e=0;e!=n[253].length;++e)65533!==n[253][e].charCodeAt(0)&&(r[n[253][e]]=64768+e,t[64768+e]=n[253][e])
return{enc:r,dec:t}}(),cptable[950]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~��������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[161]="����������������������������������������������������������������　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚����������������������������������﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢﹣﹤﹥﹦～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="����������������������������������������������������������������＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁▂▃▄▅▆▇█▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭����������������������������������╮╰╯═╞╪╡◢◣◥◤╱╲╳０１２３４５６７８９ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ〡〢〣〤〥〦〧〨〩十卄卅ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖ�".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="����������������������������������������������������������������ｗｘｙｚΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏ����������������������������������ㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ˙ˉˊˇˋ���������������������������������€������������������������������".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="����������������������������������������������������������������一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才����������������������������������丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙�".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="����������������������������������������������������������������世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外����������������������������������央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全�".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="����������������������������������������������������������������共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年����������������������������������式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣�".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="����������������������������������������������������������������作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍����������������������������������均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠�".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="����������������������������������������������������������������杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒����������������������������������芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵�".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="����������������������������������������������������������������咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居����������������������������������屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊�".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[170]="����������������������������������������������������������������昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠����������������������������������炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附�".split(""),e=0;e!=n[170].length;++e)65533!==n[170][e].charCodeAt(0)&&(r[n[170][e]]=43520+e,t[43520+e]=n[170][e])
for(n[171]="����������������������������������������������������������������陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品����������������������������������哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷�".split(""),e=0;e!=n[171].length;++e)65533!==n[171][e].charCodeAt(0)&&(r[n[171][e]]=43776+e,t[43776+e]=n[171][e])
for(n[172]="����������������������������������������������������������������拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗����������������������������������活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄�".split(""),e=0;e!=n[172].length;++e)65533!==n[172][e].charCodeAt(0)&&(r[n[172][e]]=44032+e,t[44032+e]=n[172][e])
for(n[173]="����������������������������������������������������������������耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥����������������������������������迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪�".split(""),e=0;e!=n[173].length;++e)65533!==n[173][e].charCodeAt(0)&&(r[n[173][e]]=44288+e,t[44288+e]=n[173][e])
for(n[174]="����������������������������������������������������������������哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙����������������������������������恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓�".split(""),e=0;e!=n[174].length;++e)65533!==n[174][e].charCodeAt(0)&&(r[n[174][e]]=44544+e,t[44544+e]=n[174][e])
for(n[175]="����������������������������������������������������������������浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷����������������������������������砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃�".split(""),e=0;e!=n[175].length;++e)65533!==n[175][e].charCodeAt(0)&&(r[n[175][e]]=44800+e,t[44800+e]=n[175][e])
for(n[176]="����������������������������������������������������������������虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡����������������������������������陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="����������������������������������������������������������������娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽����������������������������������情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="����������������������������������������������������������������毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶����������������������������������瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="����������������������������������������������������������������莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途����������������������������������部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="����������������������������������������������������������������婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍����������������������������������插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="����������������������������������������������������������������溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘����������������������������������窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="����������������������������������������������������������������詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑����������������������������������間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="����������������������������������������������������������������媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業����������������������������������楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="����������������������������������������������������������������睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫����������������������������������腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="����������������������������������������������������������������辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴����������������������������������飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="����������������������������������������������������������������愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢����������������������������������滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="����������������������������������������������������������������罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤����������������������������������說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="����������������������������������������������������������������劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂����������������������������������慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="����������������������������������������������������������������瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯����������������������������������翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="����������������������������������������������������������������輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉����������������������������������鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="����������������������������������������������������������������濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊����������������������������������縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="����������������������������������������������������������������錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇����������������������������������嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="����������������������������������������������������������������瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪����������������������������������薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="����������������������������������������������������������������駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘����������������������������������癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="����������������������������������������������������������������鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸����������������������������������獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="����������������������������������������������������������������願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼����������������������������������纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="����������������������������������������������������������������護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬����������������������������������禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="����������������������������������������������������������������讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲���������������������������������������������������������������������������������������������������������������������������������".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[201]="����������������������������������������������������������������乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕����������������������������������氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋�".split(""),e=0;e!=n[201].length;++e)65533!==n[201][e].charCodeAt(0)&&(r[n[201][e]]=51456+e,t[51456+e]=n[201][e])
for(n[202]="����������������������������������������������������������������汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘����������������������������������吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="����������������������������������������������������������������杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓����������������������������������芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="����������������������������������������������������������������坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋����������������������������������怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="����������������������������������������������������������������泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺����������������������������������矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="����������������������������������������������������������������哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛����������������������������������峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="����������������������������������������������������������������柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂����������������������������������洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="����������������������������������������������������������������穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪����������������������������������苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="����������������������������������������������������������������唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧����������������������������������恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="����������������������������������������������������������������毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸����������������������������������牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="����������������������������������������������������������������笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢����������������������������������荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="����������������������������������������������������������������酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅����������������������������������唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="����������������������������������������������������������������崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟����������������������������������捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="����������������������������������������������������������������淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏����������������������������������痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="����������������������������������������������������������������耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷����������������������������������蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪�".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="����������������������������������������������������������������釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷����������������������������������堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="����������������������������������������������������������������惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒����������������������������������晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="����������������������������������������������������������������湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖����������������������������������琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="����������������������������������������������������������������罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳����������������������������������菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="����������������������������������������������������������������軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈����������������������������������隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="����������������������������������������������������������������媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤����������������������������������搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="����������������������������������������������������������������毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓����������������������������������煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="����������������������������������������������������������������稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯����������������������������������腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="����������������������������������������������������������������觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿����������������������������������遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="����������������������������������������������������������������凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠����������������������������������寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="����������������������������������������������������������������榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊����������������������������������漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="����������������������������������������������������������������禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞����������������������������������耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="����������������������������������������������������������������裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍����������������������������������銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="����������������������������������������������������������������噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉����������������������������������憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="����������������������������������������������������������������澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙����������������������������������獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="����������������������������������������������������������������膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢����������������������������������蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="����������������������������������������������������������������踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓����������������������������������銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="����������������������������������������������������������������噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺����������������������������������憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="����������������������������������������������������������������澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙����������������������������������瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="����������������������������������������������������������������蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠����������������������������������諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="����������������������������������������������������������������錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕����������������������������������魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="����������������������������������������������������������������檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶����������������������������������瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="����������������������������������������������������������������蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞����������������������������������謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="����������������������������������������������������������������鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰����������������������������������鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="����������������������������������������������������������������璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒����������������������������������臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="����������������������������������������������������������������蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪����������������������������������鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="����������������������������������������������������������������徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛����������������������������������礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="����������������������������������������������������������������譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦����������������������������������鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="����������������������������������������������������������������嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩����������������������������������禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="����������������������������������������������������������������鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛����������������������������������鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="����������������������������������������������������������������蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺����������������������������������騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="����������������������������������������������������������������糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊����������������������������������驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
for(n[248]="����������������������������������������������������������������讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏����������������������������������齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚�".split(""),e=0;e!=n[248].length;++e)65533!==n[248][e].charCodeAt(0)&&(r[n[248][e]]=63488+e,t[63488+e]=n[248][e])
for(n[249]="����������������������������������������������������������������纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊����������������������������������龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓�".split(""),e=0;e!=n[249].length;++e)65533!==n[249][e].charCodeAt(0)&&(r[n[249][e]]=63744+e,t[63744+e]=n[249][e])
return{enc:r,dec:t}}(),cptable[1250]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1251]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1252]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1253]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1254]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1255]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹ�ֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1256]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1257]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1258]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[1e4]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[10006]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[10007]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[10008]=function(){var e,t=[],r={},n=[]
for(n[0]="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~���������������������������������������������������������������������������������������".split(""),e=0;e!=n[0].length;++e)65533!==n[0][e].charCodeAt(0)&&(r[n[0][e]]=0+e,t[0+e]=n[0][e])
for(n[161]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������　、。・ˉˇ¨〃々―～�…‘’“”〔〕〈〉《》「」『』〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓�".split(""),e=0;e!=n[161].length;++e)65533!==n[161][e].charCodeAt(0)&&(r[n[161][e]]=41216+e,t[41216+e]=n[161][e])
for(n[162]="���������������������������������������������������������������������������������������������������������������������������������������������������������������������������������⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇①②③④⑤⑥⑦⑧⑨⑩��㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩��ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ���".split(""),e=0;e!=n[162].length;++e)65533!==n[162][e].charCodeAt(0)&&(r[n[162][e]]=41472+e,t[41472+e]=n[162][e])
for(n[163]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������！＂＃￥％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝￣�".split(""),e=0;e!=n[163].length;++e)65533!==n[163][e].charCodeAt(0)&&(r[n[163][e]]=41728+e,t[41728+e]=n[163][e])
for(n[164]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせぜそぞただちぢっつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもゃやゅゆょよらりるれろゎわゐゑをん������������".split(""),e=0;e!=n[164].length;++e)65533!==n[164][e].charCodeAt(0)&&(r[n[164][e]]=41984+e,t[41984+e]=n[164][e])
for(n[165]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶ���������".split(""),e=0;e!=n[165].length;++e)65533!==n[165][e].charCodeAt(0)&&(r[n[165][e]]=42240+e,t[42240+e]=n[165][e])
for(n[166]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ��������αβγδεζηθικλμνξοπρστυφχψω���������������������������������������".split(""),e=0;e!=n[166].length;++e)65533!==n[166][e].charCodeAt(0)&&(r[n[166][e]]=42496+e,t[42496+e]=n[166][e])
for(n[167]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ���������������абвгдеёжзийклмнопрстуфхцчшщъыьэюя��������������".split(""),e=0;e!=n[167].length;++e)65533!==n[167][e].charCodeAt(0)&&(r[n[167][e]]=42752+e,t[42752+e]=n[167][e])
for(n[168]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüê����������ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦㄧㄨㄩ����������������������".split(""),e=0;e!=n[168].length;++e)65533!==n[168][e].charCodeAt(0)&&(r[n[168][e]]=43008+e,t[43008+e]=n[168][e])
for(n[169]="��������������������������������������������������������������������������������������������������������������������������������������������������������������������─━│┃┄┅┆┇┈┉┊┋┌┍┎┏┐┑┒┓└┕┖┗┘┙┚┛├┝┞┟┠┡┢┣┤┥┦┧┨┩┪┫┬┭┮┯┰┱┲┳┴┵┶┷┸┹┺┻┼┽┾┿╀╁╂╃╄╅╆╇╈╉╊╋����������������".split(""),e=0;e!=n[169].length;++e)65533!==n[169][e].charCodeAt(0)&&(r[n[169][e]]=43264+e,t[43264+e]=n[169][e])
for(n[176]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥�".split(""),e=0;e!=n[176].length;++e)65533!==n[176][e].charCodeAt(0)&&(r[n[176][e]]=45056+e,t[45056+e]=n[176][e])
for(n[177]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳�".split(""),e=0;e!=n[177].length;++e)65533!==n[177][e].charCodeAt(0)&&(r[n[177][e]]=45312+e,t[45312+e]=n[177][e])
for(n[178]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖�".split(""),e=0;e!=n[178].length;++e)65533!==n[178][e].charCodeAt(0)&&(r[n[178][e]]=45568+e,t[45568+e]=n[178][e])
for(n[179]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚�".split(""),e=0;e!=n[179].length;++e)65533!==n[179][e].charCodeAt(0)&&(r[n[179][e]]=45824+e,t[45824+e]=n[179][e])
for(n[180]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮�".split(""),e=0;e!=n[180].length;++e)65533!==n[180][e].charCodeAt(0)&&(r[n[180][e]]=46080+e,t[46080+e]=n[180][e])
for(n[181]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠�".split(""),e=0;e!=n[181].length;++e)65533!==n[181][e].charCodeAt(0)&&(r[n[181][e]]=46336+e,t[46336+e]=n[181][e])
for(n[182]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二�".split(""),e=0;e!=n[182].length;++e)65533!==n[182][e].charCodeAt(0)&&(r[n[182][e]]=46592+e,t[46592+e]=n[182][e])
for(n[183]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服�".split(""),e=0;e!=n[183].length;++e)65533!==n[183][e].charCodeAt(0)&&(r[n[183][e]]=46848+e,t[46848+e]=n[183][e])
for(n[184]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹�".split(""),e=0;e!=n[184].length;++e)65533!==n[184][e].charCodeAt(0)&&(r[n[184][e]]=47104+e,t[47104+e]=n[184][e])
for(n[185]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈�".split(""),e=0;e!=n[185].length;++e)65533!==n[185][e].charCodeAt(0)&&(r[n[185][e]]=47360+e,t[47360+e]=n[185][e])
for(n[186]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖�".split(""),e=0;e!=n[186].length;++e)65533!==n[186][e].charCodeAt(0)&&(r[n[186][e]]=47616+e,t[47616+e]=n[186][e])
for(n[187]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕�".split(""),e=0;e!=n[187].length;++e)65533!==n[187][e].charCodeAt(0)&&(r[n[187][e]]=47872+e,t[47872+e]=n[187][e])
for(n[188]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件�".split(""),e=0;e!=n[188].length;++e)65533!==n[188][e].charCodeAt(0)&&(r[n[188][e]]=48128+e,t[48128+e]=n[188][e])
for(n[189]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸�".split(""),e=0;e!=n[189].length;++e)65533!==n[189][e].charCodeAt(0)&&(r[n[189][e]]=48384+e,t[48384+e]=n[189][e])
for(n[190]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻�".split(""),e=0;e!=n[190].length;++e)65533!==n[190][e].charCodeAt(0)&&(r[n[190][e]]=48640+e,t[48640+e]=n[190][e])
for(n[191]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀�".split(""),e=0;e!=n[191].length;++e)65533!==n[191][e].charCodeAt(0)&&(r[n[191][e]]=48896+e,t[48896+e]=n[191][e])
for(n[192]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐�".split(""),e=0;e!=n[192].length;++e)65533!==n[192][e].charCodeAt(0)&&(r[n[192][e]]=49152+e,t[49152+e]=n[192][e])
for(n[193]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿�".split(""),e=0;e!=n[193].length;++e)65533!==n[193][e].charCodeAt(0)&&(r[n[193][e]]=49408+e,t[49408+e]=n[193][e])
for(n[194]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫�".split(""),e=0;e!=n[194].length;++e)65533!==n[194][e].charCodeAt(0)&&(r[n[194][e]]=49664+e,t[49664+e]=n[194][e])
for(n[195]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸�".split(""),e=0;e!=n[195].length;++e)65533!==n[195][e].charCodeAt(0)&&(r[n[195][e]]=49920+e,t[49920+e]=n[195][e])
for(n[196]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁�".split(""),e=0;e!=n[196].length;++e)65533!==n[196][e].charCodeAt(0)&&(r[n[196][e]]=50176+e,t[50176+e]=n[196][e])
for(n[197]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗�".split(""),e=0;e!=n[197].length;++e)65533!==n[197][e].charCodeAt(0)&&(r[n[197][e]]=50432+e,t[50432+e]=n[197][e])
for(n[198]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐�".split(""),e=0;e!=n[198].length;++e)65533!==n[198][e].charCodeAt(0)&&(r[n[198][e]]=50688+e,t[50688+e]=n[198][e])
for(n[199]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠�".split(""),e=0;e!=n[199].length;++e)65533!==n[199][e].charCodeAt(0)&&(r[n[199][e]]=50944+e,t[50944+e]=n[199][e])
for(n[200]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁�".split(""),e=0;e!=n[200].length;++e)65533!==n[200][e].charCodeAt(0)&&(r[n[200][e]]=51200+e,t[51200+e]=n[200][e])
for(n[201]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳�".split(""),e=0;e!=n[201].length;++e)65533!==n[201][e].charCodeAt(0)&&(r[n[201][e]]=51456+e,t[51456+e]=n[201][e])
for(n[202]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱�".split(""),e=0;e!=n[202].length;++e)65533!==n[202][e].charCodeAt(0)&&(r[n[202][e]]=51712+e,t[51712+e]=n[202][e])
for(n[203]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔�".split(""),e=0;e!=n[203].length;++e)65533!==n[203][e].charCodeAt(0)&&(r[n[203][e]]=51968+e,t[51968+e]=n[203][e])
for(n[204]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃�".split(""),e=0;e!=n[204].length;++e)65533!==n[204][e].charCodeAt(0)&&(r[n[204][e]]=52224+e,t[52224+e]=n[204][e])
for(n[205]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威�".split(""),e=0;e!=n[205].length;++e)65533!==n[205][e].charCodeAt(0)&&(r[n[205][e]]=52480+e,t[52480+e]=n[205][e])
for(n[206]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺�".split(""),e=0;e!=n[206].length;++e)65533!==n[206][e].charCodeAt(0)&&(r[n[206][e]]=52736+e,t[52736+e]=n[206][e])
for(n[207]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓�".split(""),e=0;e!=n[207].length;++e)65533!==n[207][e].charCodeAt(0)&&(r[n[207][e]]=52992+e,t[52992+e]=n[207][e])
for(n[208]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄�".split(""),e=0;e!=n[208].length;++e)65533!==n[208][e].charCodeAt(0)&&(r[n[208][e]]=53248+e,t[53248+e]=n[208][e])
for(n[209]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶�".split(""),e=0;e!=n[209].length;++e)65533!==n[209][e].charCodeAt(0)&&(r[n[209][e]]=53504+e,t[53504+e]=n[209][e])
for(n[210]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐�".split(""),e=0;e!=n[210].length;++e)65533!==n[210][e].charCodeAt(0)&&(r[n[210][e]]=53760+e,t[53760+e]=n[210][e])
for(n[211]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉�".split(""),e=0;e!=n[211].length;++e)65533!==n[211][e].charCodeAt(0)&&(r[n[211][e]]=54016+e,t[54016+e]=n[211][e])
for(n[212]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧�".split(""),e=0;e!=n[212].length;++e)65533!==n[212][e].charCodeAt(0)&&(r[n[212][e]]=54272+e,t[54272+e]=n[212][e])
for(n[213]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政�".split(""),e=0;e!=n[213].length;++e)65533!==n[213][e].charCodeAt(0)&&(r[n[213][e]]=54528+e,t[54528+e]=n[213][e])
for(n[214]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑�".split(""),e=0;e!=n[214].length;++e)65533!==n[214][e].charCodeAt(0)&&(r[n[214][e]]=54784+e,t[54784+e]=n[214][e])
for(n[215]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座������".split(""),e=0;e!=n[215].length;++e)65533!==n[215][e].charCodeAt(0)&&(r[n[215][e]]=55040+e,t[55040+e]=n[215][e])
for(n[216]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝�".split(""),e=0;e!=n[216].length;++e)65533!==n[216][e].charCodeAt(0)&&(r[n[216][e]]=55296+e,t[55296+e]=n[216][e])
for(n[217]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼�".split(""),e=0;e!=n[217].length;++e)65533!==n[217][e].charCodeAt(0)&&(r[n[217][e]]=55552+e,t[55552+e]=n[217][e])
for(n[218]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺�".split(""),e=0;e!=n[218].length;++e)65533!==n[218][e].charCodeAt(0)&&(r[n[218][e]]=55808+e,t[55808+e]=n[218][e])
for(n[219]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝�".split(""),e=0;e!=n[219].length;++e)65533!==n[219][e].charCodeAt(0)&&(r[n[219][e]]=56064+e,t[56064+e]=n[219][e])
for(n[220]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥�".split(""),e=0;e!=n[220].length;++e)65533!==n[220][e].charCodeAt(0)&&(r[n[220][e]]=56320+e,t[56320+e]=n[220][e])
for(n[221]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺�".split(""),e=0;e!=n[221].length;++e)65533!==n[221][e].charCodeAt(0)&&(r[n[221][e]]=56576+e,t[56576+e]=n[221][e])
for(n[222]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖�".split(""),e=0;e!=n[222].length;++e)65533!==n[222][e].charCodeAt(0)&&(r[n[222][e]]=56832+e,t[56832+e]=n[222][e])
for(n[223]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼�".split(""),e=0;e!=n[223].length;++e)65533!==n[223][e].charCodeAt(0)&&(r[n[223][e]]=57088+e,t[57088+e]=n[223][e])
for(n[224]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼�".split(""),e=0;e!=n[224].length;++e)65533!==n[224][e].charCodeAt(0)&&(r[n[224][e]]=57344+e,t[57344+e]=n[224][e])
for(n[225]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺�".split(""),e=0;e!=n[225].length;++e)65533!==n[225][e].charCodeAt(0)&&(r[n[225][e]]=57600+e,t[57600+e]=n[225][e])
for(n[226]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧饨饩饪饫饬饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂�".split(""),e=0;e!=n[226].length;++e)65533!==n[226][e].charCodeAt(0)&&(r[n[226][e]]=57856+e,t[57856+e]=n[226][e])
for(n[227]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾�".split(""),e=0;e!=n[227].length;++e)65533!==n[227][e].charCodeAt(0)&&(r[n[227][e]]=58112+e,t[58112+e]=n[227][e])
for(n[228]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑�".split(""),e=0;e!=n[228].length;++e)65533!==n[228][e].charCodeAt(0)&&(r[n[228][e]]=58368+e,t[58368+e]=n[228][e])
for(n[229]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣�".split(""),e=0;e!=n[229].length;++e)65533!==n[229][e].charCodeAt(0)&&(r[n[229][e]]=58624+e,t[58624+e]=n[229][e])
for(n[230]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩�".split(""),e=0;e!=n[230].length;++e)65533!==n[230][e].charCodeAt(0)&&(r[n[230][e]]=58880+e,t[58880+e]=n[230][e])
for(n[231]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡缢缣缤缥缦缧缪缫缬缭缯缰缱缲缳缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬�".split(""),e=0;e!=n[231].length;++e)65533!==n[231][e].charCodeAt(0)&&(r[n[231][e]]=59136+e,t[59136+e]=n[231][e])
for(n[232]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹�".split(""),e=0;e!=n[232].length;++e)65533!==n[232][e].charCodeAt(0)&&(r[n[232][e]]=59392+e,t[59392+e]=n[232][e])
for(n[233]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋�".split(""),e=0;e!=n[233].length;++e)65533!==n[233][e].charCodeAt(0)&&(r[n[233][e]]=59648+e,t[59648+e]=n[233][e])
for(n[234]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰�".split(""),e=0;e!=n[234].length;++e)65533!==n[234][e].charCodeAt(0)&&(r[n[234][e]]=59904+e,t[59904+e]=n[234][e])
for(n[235]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻�".split(""),e=0;e!=n[235].length;++e)65533!==n[235][e].charCodeAt(0)&&(r[n[235][e]]=60160+e,t[60160+e]=n[235][e])
for(n[236]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐�".split(""),e=0;e!=n[236].length;++e)65533!==n[236][e].charCodeAt(0)&&(r[n[236][e]]=60416+e,t[60416+e]=n[236][e])
for(n[237]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨�".split(""),e=0;e!=n[237].length;++e)65533!==n[237][e].charCodeAt(0)&&(r[n[237][e]]=60672+e,t[60672+e]=n[237][e])
for(n[238]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶钷钸钹钺钼钽钿铄铈铉铊铋铌铍铎铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪�".split(""),e=0;e!=n[238].length;++e)65533!==n[238][e].charCodeAt(0)&&(r[n[238][e]]=60928+e,t[60928+e]=n[238][e])
for(n[239]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒锓锔锕锖锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤镥镦镧镨镩镪镫镬镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔�".split(""),e=0;e!=n[239].length;++e)65533!==n[239][e].charCodeAt(0)&&(r[n[239][e]]=61184+e,t[61184+e]=n[239][e])
for(n[240]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨鸩鸪鸫鸬鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦鹧鹨鹩鹪鹫鹬鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙�".split(""),e=0;e!=n[240].length;++e)65533!==n[240][e].charCodeAt(0)&&(r[n[240][e]]=61440+e,t[61440+e]=n[240][e])
for(n[241]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃�".split(""),e=0;e!=n[241].length;++e)65533!==n[241][e].charCodeAt(0)&&(r[n[241][e]]=61696+e,t[61696+e]=n[241][e])
for(n[242]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒�".split(""),e=0;e!=n[242].length;++e)65533!==n[242][e].charCodeAt(0)&&(r[n[242][e]]=61952+e,t[61952+e]=n[242][e])
for(n[243]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋�".split(""),e=0;e!=n[243].length;++e)65533!==n[243][e].charCodeAt(0)&&(r[n[243][e]]=62208+e,t[62208+e]=n[243][e])
for(n[244]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤�".split(""),e=0;e!=n[244].length;++e)65533!==n[244][e].charCodeAt(0)&&(r[n[244][e]]=62464+e,t[62464+e]=n[244][e])
for(n[245]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜�".split(""),e=0;e!=n[245].length;++e)65533!==n[245][e].charCodeAt(0)&&(r[n[245][e]]=62720+e,t[62720+e]=n[245][e])
for(n[246]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅龆龇龈龉龊龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞鲟鲠鲡鲢鲣鲥鲦鲧鲨鲩鲫鲭鲮鲰鲱鲲鲳鲴鲵鲶鲷鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋�".split(""),e=0;e!=n[246].length;++e)65533!==n[246][e].charCodeAt(0)&&(r[n[246][e]]=62976+e,t[62976+e]=n[246][e])
for(n[247]="�����������������������������������������������������������������������������������������������������������������������������������������������������������������鳌鳍鳎鳏鳐鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄�".split(""),e=0;e!=n[247].length;++e)65533!==n[247][e].charCodeAt(0)&&(r[n[247][e]]=63232+e,t[63232+e]=n[247][e])
return{enc:r,dec:t}}(),cptable[10029]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),cptable[10079]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}()
cptable[10081]=function(){for(var e="\0\b\t\n\v\f\r !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ",t=[],r={},n=0;n!=e.length;++n)65533!==e.charCodeAt(n)&&(r[e.charAt(n)]=n),t[n]=e.charAt(n)
return{enc:r,dec:t}}(),"undefined"!=typeof module&&module.exports&&void 0===DO_NOT_EXPORT_CODEPAGE&&(module.exports=cptable),function(e,t){"use strict"
if(void 0===cptable){if("undefined"==typeof require)throw new Error("cptable not found")
var r=cptable
"undefined"!=typeof module&&module.exports&&void 0===DO_NOT_EXPORT_CODEPAGE?module.exports=t(r):e.cptable=t(r)}else cptable=t(cptable)}(this,function(e){"use strict"
var t={1200:"utf16le",1201:"utf16be",12000:"utf32le",12001:"utf32be",16969:"utf64le",20127:"ascii",65000:"utf7",65001:"utf8"},r=[874,1250,1251,1252,1253,1254,1255,1256,1e4],n=[932,936,949,950],a=[65001],s={},o={},i={},l={},c=function(e){return String.fromCharCode(e)},f=function(e){return e.charCodeAt(0)},h="undefined"!=typeof Buffer,u=function(){}
if(h){var d=!Buffer.from
if(!d)try{Buffer.from("foo","utf8")}catch(k){d=!0}u=d?function(e,t){return t?new Buffer(e,t):new Buffer(e)}:Buffer.from.bind(Buffer),Buffer.allocUnsafe||(Buffer.allocUnsafe=function(e){return new Buffer(e)})
var p=1024,g=Buffer.allocUnsafe(p),m=function(t){var r=function(e){for(var t=Buffer.allocUnsafe(65536),r=0;r<65536;++r)t[r]=0
for(var n=Object.keys(e),a=n.length,s=0,o=n[s];s<a;++s)(o=n[s])&&(t[o.charCodeAt(0)]=e[o])
return t}(e[t].enc)
return function(e,t){var n,a=e.length,s=0,o=0,i=0,l=0
if("string"==typeof e)for(n=Buffer.allocUnsafe(a),s=0;s<a;++s)n[s]=r[e.charCodeAt(s)]
else if(Buffer.isBuffer(e)){for(n=Buffer.allocUnsafe(2*a),o=0,s=0;s<a;++s)(i=e[s])<128?n[o++]=r[i]:i<224?(n[o++]=r[((31&i)<<6)+(63&e[s+1])],++s):i<240?(n[o++]=r[((15&i)<<12)+((63&e[s+1])<<6)+(63&e[s+2])],s+=2):(l=((7&i)<<18)+((63&e[s+1])<<12)+((63&e[s+2])<<6)+(63&e[s+3]),s+=3,l<65536?n[o++]=r[l]:(l-=65536,n[o++]=r[55296+(l>>10&1023)],n[o++]=r[56320+(1023&l)]))
n=n.slice(0,o)}else for(n=Buffer.allocUnsafe(a),s=0;s<a;++s)n[s]=r[e[s].charCodeAt(0)]
return t&&"buf"!==t?"arr"!==t?n.toString("binary"):[].slice.call(n):n}},b=function(t){var r=e[t].dec,n=Buffer.allocUnsafe(131072),a=0,s=""
for(a=0;a<r.length;++a)if(s=r[a]){var o=s.charCodeAt(0)
n[2*a]=255&o,n[2*a+1]=o>>8}return function(e){var t=e.length,r=0,a=0
if(2*t>p&&(p=2*t,g=Buffer.allocUnsafe(p)),Buffer.isBuffer(e))for(r=0;r<t;r++)a=2*e[r],g[2*r]=n[a],g[2*r+1]=n[a+1]
else if("string"==typeof e)for(r=0;r<t;r++)a=2*e.charCodeAt(r),g[2*r]=n[a],g[2*r+1]=n[a+1]
else for(r=0;r<t;r++)a=2*e[r],g[2*r]=n[a],g[2*r+1]=n[a+1]
return g.slice(0,2*t).toString("ucs2")}},v=function(t){for(var r=e[t].enc,n=Buffer.allocUnsafe(131072),a=0;a<131072;++a)n[a]=0
for(var s=Object.keys(r),o=0,i=s[o];o<s.length;++o)if(i=s[o]){var l=i.charCodeAt(0)
n[2*l]=255&r[i],n[2*l+1]=r[i]>>8}return function(e,t){var r=e.length,a=Buffer.allocUnsafe(2*r),s=0,o=0,i=0,l=0,c=0
if("string"==typeof e){for(s=l=0;s<r;++s)o=2*e.charCodeAt(s),a[l++]=n[o+1]||n[o],n[o+1]>0&&(a[l++]=n[o])
a=a.slice(0,l)}else if(Buffer.isBuffer(e)){for(s=l=0;s<r;++s)c=e[s],c<128?o=c:c<224?(o=((31&c)<<6)+(63&e[s+1]),++s):c<240?(o=((15&c)<<12)+((63&e[s+1])<<6)+(63&e[s+2]),s+=2):(o=((7&c)<<18)+((63&e[s+1])<<12)+((63&e[s+2])<<6)+(63&e[s+3]),s+=3),o<65536?(o*=2,a[l++]=n[o+1]||n[o],n[o+1]>0&&(a[l++]=n[o])):(o=2*(55296+((i=o-65536)>>10&1023)),a[l++]=n[o+1]||n[o],n[o+1]>0&&(a[l++]=n[o]),o=2*(56320+(1023&i)),a[l++]=n[o+1]||n[o],n[o+1]>0&&(a[l++]=n[o]))
a=a.slice(0,l)}else for(s=l=0;s<r;s++)o=2*e[s].charCodeAt(0),a[l++]=n[o+1]||n[o],n[o+1]>0&&(a[l++]=n[o])
return t&&"buf"!==t?"arr"!==t?a.toString("binary"):[].slice.call(a):a}},C=function(t){var r,n=e[t].dec,a=Buffer.allocUnsafe(131072),s=0,o=0,i=0,l=0
for(l=0;l<65536;++l)a[2*l]=255,a[2*l+1]=253
for(s=0;s<n.length;++s)(r=n[s])&&(o=r.charCodeAt(0),a[i=2*s]=255&o,a[i+1]=o>>8)
return function(e){var t=e.length,r=Buffer.allocUnsafe(2*t),n=0,s=0,o=0
if(Buffer.isBuffer(e))for(n=0;n<t;n++)s=2*e[n],255===a[s]&&253===a[s+1]&&(s=2*((e[n]<<8)+e[n+1]),++n),r[o++]=a[s],r[o++]=a[s+1]
else if("string"==typeof e)for(n=0;n<t;n++)s=2*e.charCodeAt(n),255===a[s]&&253===a[s+1]&&(s=2*((e.charCodeAt(n)<<8)+e.charCodeAt(n+1)),++n),r[o++]=a[s],r[o++]=a[s+1]
else for(n=0;n<t;n++)s=2*e[n],255===a[s]&&253===a[s+1]&&(s=2*((e[n]<<8)+e[n+1]),++n),r[o++]=a[s],r[o++]=a[s+1]
return r.slice(0,o).toString("ucs2")}}
s[65001]=function e(t){if("string"==typeof t)return e(t.split("").map(f))
var r=t.length,n=0,a=0
4*r>p&&(p=4*r,g=Buffer.allocUnsafe(p))
var s=0
r>=3&&239==t[0]&&187==t[1]&&191==t[2]&&(s=3)
for(var o=1,i=0,l=0;s<r;s+=o)o=1,(l=t[s])<128?n=l:l<224?(n=64*(31&l)+(63&t[s+1]),o=2):l<240?(n=((15&l)<<12)+64*(63&t[s+1])+(63&t[s+2]),o=3):(n=262144*(7&l)+((63&t[s+1])<<12)+64*(63&t[s+2])+(63&t[s+3]),o=4),n<65536?(g[i++]=255&n,g[i++]=n>>8):(a=55296+((n-=65536)>>10&1023),n=56320+(1023&n),g[i++]=255&a,g[i++]=a>>>8,g[i++]=255&n,g[i++]=n>>>8&255)
return g.slice(0,i).toString("ucs2")},o[65001]=function(e,t){if(h&&Buffer.isBuffer(e))return t&&"buf"!==t?"arr"!==t?e.toString("binary"):[].slice.call(e):e
var r=e.length,n=0,a=0,s=0,o="string"==typeof e
4*r>p&&(p=4*r,g=Buffer.allocUnsafe(p))
for(var i=0;i<r;++i)(n=o?e.charCodeAt(i):e[i].charCodeAt(0))<=127?g[s++]=n:n<=2047?(g[s++]=192+(n>>6),g[s++]=128+(63&n)):n>=55296&&n<=57343?(n-=55296,++i,a=(o?e.charCodeAt(i):e[i].charCodeAt(0))-56320+(n<<10),g[s++]=240+(a>>>18&7),g[s++]=144+(a>>>12&63),g[s++]=128+(a>>>6&63),g[s++]=128+(63&a)):(g[s++]=224+(n>>12),g[s++]=128+(n>>6&63),g[s++]=128+(63&n))
return t&&"buf"!==t?"arr"!==t?g.slice(0,s).toString("binary"):[].slice.call(g,0,s):g.slice(0,s)}}var E=function(){if(h){if(i[r[0]])return
var t=0,c=0
for(t=0;t<r.length;++t)c=r[t],e[c]&&(i[c]=b(c),l[c]=m(c))
for(t=0;t<n.length;++t)c=n[t],e[c]&&(i[c]=C(c),l[c]=v(c))
for(t=0;t<a.length;++t)c=a[t],s[c]&&(i[c]=s[c]),o[c]&&(l[c]=o[c])}},S=function(e,t){return""},A=function(e){delete i[e],delete l[e]},_={encache:E,decache:function(){if(h){if(!i[r[0]])return
r.forEach(A),n.forEach(A),a.forEach(A)}R=S,B=0},sbcs:r,dbcs:n}
E()
var w="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",R=S,B=0
return e.utils={decode:function r(n,a){var s
if(s=i[n])return s(a)
if("string"==typeof a)return r(n,a.split("").map(f))
var o,l=a.length,c=new Array(l),u="",d=0,p=0,g=1,m=0,b=0,v=e[n],C=""
if(v&&(o=v.dec))for(p=0;p<l;p+=g){if(g=2,(u=o[(a[p]<<8)+a[p+1]])||(g=1,u=o[a[p]]),!u)throw new Error("Unrecognized code: "+a[p]+" "+a[p+g-1]+" "+p+" "+g+" "+o[a[p]])
c[m++]=u}else{if(!(C=t[n]))throw new Error("Unrecognized CP: "+n)
switch(C){case"utf8":for(l>=3&&239==a[0]&&187==a[1]&&191==a[2]&&(p=3);p<l;p+=g)g=1,a[p]<128?d=a[p]:a[p]<224?(d=64*(31&a[p])+(63&a[p+1]),g=2):a[p]<240?(d=((15&a[p])<<12)+64*(63&a[p+1])+(63&a[p+2]),g=3):(d=262144*(7&a[p])+((63&a[p+1])<<12)+64*(63&a[p+2])+(63&a[p+3]),g=4),d<65536?c[m++]=String.fromCharCode(d):(b=55296+((d-=65536)>>10&1023),d=56320+(1023&d),c[m++]=String.fromCharCode(b),c[m++]=String.fromCharCode(d))
break
case"ascii":if(h&&Buffer.isBuffer(a))return a.toString(C)
for(p=0;p<l;p++)c[p]=String.fromCharCode(a[p])
m=l
break
case"utf16le":if(l>=2&&255==a[0]&&254==a[1]&&(p=2),h&&Buffer.isBuffer(a))return a.toString(C)
for(g=2;p+1<l;p+=g)c[m++]=String.fromCharCode((a[p+1]<<8)+a[p])
break
case"utf16be":for(l>=2&&254==a[0]&&255==a[1]&&(p=2),g=2;p+1<l;p+=g)c[m++]=String.fromCharCode((a[p]<<8)+a[p+1])
break
case"utf32le":for(l>=4&&255==a[0]&&254==a[1]&&0===a[2]&&0===a[3]&&(p=4),g=4;p<l;p+=g)(d=(a[p+3]<<24)+(a[p+2]<<16)+(a[p+1]<<8)+a[p])>65535?(d-=65536,c[m++]=String.fromCharCode(55296+(d>>10&1023)),c[m++]=String.fromCharCode(56320+(1023&d))):c[m++]=String.fromCharCode(d)
break
case"utf32be":for(l>=4&&255==a[3]&&254==a[2]&&0===a[1]&&0===a[0]&&(p=4),g=4;p<l;p+=g)(d=(a[p]<<24)+(a[p+1]<<16)+(a[p+2]<<8)+a[p+3])>65535?(d-=65536,c[m++]=String.fromCharCode(55296+(d>>10&1023)),c[m++]=String.fromCharCode(56320+(1023&d))):c[m++]=String.fromCharCode(d)
break
case"utf7":for(l>=4&&43==a[0]&&47==a[1]&&118==a[2]&&(l>=5&&56==a[3]&&45==a[4]?p=5:56!=a[3]&&57!=a[3]&&43!=a[3]&&47!=a[3]||(p=4));p<l;p+=g)if(43===a[p])if(g=1,45!==a[p+1]){for(;String.fromCharCode(a[p+g]).match(/[A-Za-z0-9+\/]/);)g++
var E=0
45===a[p+g]&&(++g,E=1)
for(var S=[],A="",_=0,R=0,B=0,k=0,T=0,x=0,y=1;y<g-E&&(_=w.indexOf(String.fromCharCode(a[p+y++]))<<2|(k=w.indexOf(String.fromCharCode(a[p+y++])))>>4,S.push(_),-1!==(T=w.indexOf(String.fromCharCode(a[p+y++]))))&&(R=(15&k)<<4|T>>2,S.push(R),-1!==(x=w.indexOf(String.fromCharCode(a[p+y++]))));)B=(3&T)<<6|x,x<64&&S.push(B)
for(A=r(1201,S),y=0;y<A.length;++y)c[m++]=A.charAt(y)}else g=2,c[m++]="+"
else g=1,c[m++]=String.fromCharCode(a[p])
break
default:throw new Error("Unsupported magic: "+n+" "+t[n])}}return c.slice(0,m).join("")},encode:function r(n,a,s){if(n===B&&R)return R(a,s)
if(l[n])return(R=l[B=n])(a,s)
h&&Buffer.isBuffer(a)&&(a=a.toString("utf8"))
var o,i=a.length,f=h?Buffer.allocUnsafe(4*i):[],d=0,p=0,g=0,m=0,b=e[n],v="",C="string"==typeof a
if(b&&(o=b.enc))for(p=0;p<i;++p,++g)(d=o[C?a.charAt(p):a[p]])>255?(f[g]=d>>8,f[++g]=255&d):f[g]=255&d
else{if(!(v=t[n]))throw new Error("Unrecognized CP: "+n)
switch(v){case"utf8":if(h&&C){g=(f=u(a,v)).length
break}for(p=0;p<i;++p,++g)(d=C?a.charCodeAt(p):a[p].charCodeAt(0))<=127?f[g]=d:d<=2047?(f[g]=192+(d>>6),f[++g]=128+(63&d)):d>=55296&&d<=57343?(d-=55296,m=(C?a.charCodeAt(++p):a[++p].charCodeAt(0))-56320+(d<<10),f[g]=240+(m>>>18&7),f[++g]=144+(m>>>12&63),f[++g]=128+(m>>>6&63),f[++g]=128+(63&m)):(f[g]=224+(d>>12),f[++g]=128+(d>>6&63),f[++g]=128+(63&d))
break
case"ascii":if(h&&"string"==typeof a){g=(f=u(a,v)).length
break}for(p=0;p<i;++p,++g){if(!((d=C?a.charCodeAt(p):a[p].charCodeAt(0))<=127))throw new Error("bad ascii "+d)
f[g]=d}break
case"utf16le":if(h&&"string"==typeof a){g=(f=u(a,v)).length
break}for(p=0;p<i;++p)d=C?a.charCodeAt(p):a[p].charCodeAt(0),f[g++]=255&d,f[g++]=d>>8
break
case"utf16be":for(p=0;p<i;++p)d=C?a.charCodeAt(p):a[p].charCodeAt(0),f[g++]=d>>8,f[g++]=255&d
break
case"utf32le":for(p=0;p<i;++p)(d=C?a.charCodeAt(p):a[p].charCodeAt(0))>=55296&&d<=57343&&(d=65536+(d-55296<<10)+(a[++p].charCodeAt(0)-56320)),f[g++]=255&d,d>>=8,f[g++]=255&d,d>>=8,f[g++]=255&d,d>>=8,f[g++]=255&d
break
case"utf32be":for(p=0;p<i;++p)(d=C?a.charCodeAt(p):a[p].charCodeAt(0))>=55296&&d<=57343&&(d=65536+(d-55296<<10)+(a[++p].charCodeAt(0)-56320)),f[g+3]=255&d,d>>=8,f[g+2]=255&d,d>>=8,f[g+1]=255&d,d>>=8,f[g]=255&d,g+=4
break
case"utf7":for(p=0;p<i;p++){var E=C?a.charAt(p):a[p].charAt(0)
if("+"!==E)if("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'(),-./:?".indexOf(E)>-1)f[g++]=E.charCodeAt(0)
else{var S=r(1201,E)
f[g++]=43,f[g++]=w.charCodeAt(S[0]>>2),f[g++]=w.charCodeAt(((3&S[0])<<4)+((S[1]||0)>>4)),f[g++]=w.charCodeAt(((15&S[1])<<2)+((S[2]||0)>>6)),f[g++]=45}else f[g++]=43,f[g++]=45}break
default:throw new Error("Unsupported magic: "+n+" "+t[n])}}return f=f.slice(0,g),h?s&&"buf"!==s?"arr"!==s?f.toString("binary"):[].slice.call(f):f:"str"==s?f.map(c).join(""):f},hascp:function(r){return!(!e[r]&&!t[r])},magic:t,cache:_},e})
var XLSX={}
function make_xlsx_lib(e){e.version="0.14.1"
var t=1200,r=1252
"undefined"!=typeof module&&"undefined"!=typeof require&&void 0===cptable&&("undefined"!=typeof global?global.cptable=void 0:"undefined"!=typeof window&&(window.cptable=void 0))
for(var n=[874,932,936,949,950],a=0;a<=8;++a)n.push(1250+a)
var s={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},o=function(e){-1!=n.indexOf(e)&&(r=s[0]=e)}
var i=function(e){t=e,o(e)}
function l(){i(1200),o(1252)}function c(e){for(var t=[],r=0,n=e.length;r<n;++r)t[r]=e.charCodeAt(r)
return t}var f=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1)
return 255==t&&254==r?function(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r)+(e.charCodeAt(2*r+1)<<8))
return t.join("")}(e.slice(2)):254==t&&255==r?function(e){for(var t=[],r=0;r<e.length>>1;++r)t[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8))
return t.join("")}(e.slice(2)):65279==t?e.slice(1):e},h=function(e){return String.fromCharCode(e)}
void 0!==cptable&&(i=function(e){t=e},f=function(e){return 255===e.charCodeAt(0)&&254===e.charCodeAt(1)?cptable.utils.decode(1200,c(e.slice(2))):e},h=function(e){return 1200===t?String.fromCharCode(e):cptable.utils.decode(t,[255&e,e>>8])[0]})
var u=null,d=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
return{encode:function(t){for(var r="",n=0,a=0,s=0,o=0,i=0,l=0,c=0,f=0;f<t.length;)o=(n=t.charCodeAt(f++))>>2,i=(3&n)<<4|(a=t.charCodeAt(f++))>>4,l=(15&a)<<2|(s=t.charCodeAt(f++))>>6,c=63&s,isNaN(a)?l=c=64:isNaN(s)&&(c=64),r+=e.charAt(o)+e.charAt(i)+e.charAt(l)+e.charAt(c)
return r},decode:function(t){var r="",n=0,a=0,s=0,o=0,i=0,l=0
t=t.replace(/[^\w\+\/\=]/g,"")
for(var c=0;c<t.length;)n=e.indexOf(t.charAt(c++))<<2|(o=e.indexOf(t.charAt(c++)))>>4,r+=String.fromCharCode(n),a=(15&o)<<4|(i=e.indexOf(t.charAt(c++)))>>2,64!==i&&(r+=String.fromCharCode(a)),s=(3&i)<<6|(l=e.indexOf(t.charAt(c++))),64!==l&&(r+=String.fromCharCode(s))
return r}}}(),p="undefined"!=typeof Buffer&&"undefined"!=typeof process&&void 0!==process.versions&&!!process.versions.node,g=function(){}
if("undefined"!=typeof Buffer){var m=!Buffer.from
if(!m)try{Buffer.from("foo","utf8")}catch(ef){m=!0}g=m?function(e,t){return t?new Buffer(e,t):new Buffer(e)}:Buffer.from.bind(Buffer),Buffer.alloc||(Buffer.alloc=function(e){return new Buffer(e)}),Buffer.allocUnsafe||(Buffer.allocUnsafe=function(e){return new Buffer(e)})}function b(e){return p?Buffer.alloc(e):new Array(e)}function v(e){return p?Buffer.allocUnsafe(e):new Array(e)}var C=function(e){return p?g(e,"binary"):e.split("").map(function(e){return 255&e.charCodeAt(0)})}
function E(e){if("undefined"==typeof ArrayBuffer)return C(e)
for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!=e.length;++n)r[n]=255&e.charCodeAt(n)
return t}function S(e){if(Array.isArray(e))return e.map(Sl).join("")
for(var t=[],r=0;r<e.length;++r)t[r]=Sl(e[r])
return t.join("")}function A(e){if("undefined"==typeof ArrayBuffer)throw new Error("Unsupported")
if(e instanceof ArrayBuffer)return A(new Uint8Array(e))
for(var t=new Array(e.length),r=0;r<e.length;++r)t[r]=e[r]
return t}var _=function(e){return[].concat.apply([],e)},w=/\u0000/g,R=/[\u0001-\u0006]/g,B={},k=function(e){function t(e){for(var t="",r=e.length-1;r>=0;)t+=e.charAt(r--)
return t}function r(e,t){for(var r="";r.length<t;)r+=e
return r}function n(e,t){var n=""+e
return n.length>=t?n:r("0",t-n.length)+n}function a(e,t){var n=""+e
return n.length>=t?n:r(" ",t-n.length)+n}function s(e,t){var n=""+e
return n.length>=t?n:n+r(" ",t-n.length)}function o(e,t){var n=""+Math.round(e)
return n.length>=t?n:r("0",t-n.length)+n}function i(e,t){var n=""+e
return n.length>=t?n:r("0",t-n.length)+n}e.version="0.10.2"
var l=Math.pow(2,32)
function c(e,t){return e>l||e<-l?o(e,t):i(Math.round(e),t)}function f(e,t){return t=t||0,e.length>=7+t&&103==(32|e.charCodeAt(t))&&101==(32|e.charCodeAt(t+1))&&110==(32|e.charCodeAt(t+2))&&101==(32|e.charCodeAt(t+3))&&114==(32|e.charCodeAt(t+4))&&97==(32|e.charCodeAt(t+5))&&108==(32|e.charCodeAt(t+6))}var h=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],u=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]]
function d(e){e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"上午/下午 "hh"時"mm"分"ss"秒 "',e[65535]="General"}var p={}
function g(e,t,r){for(var n=e<0?-1:1,a=e*n,s=0,o=1,i=0,l=1,c=0,f=0,h=Math.floor(a);c<t&&(i=(h=Math.floor(a))*o+s,f=h*c+l,!(a-h<5e-8));)a=1/(a-h),s=o,o=i,l=c,c=f
if(f>t&&(c>t?(f=l,i=s):(f=c,i=o)),!r)return[0,n*i,f]
var u=Math.floor(n*i/f)
return[u,n*i-u*f,f]}function m(e,t,r){if(e>2958465||e<0)return null
var n=0|e,a=Math.floor(86400*(e-n)),s=0,o=[],i={D:n,T:a,u:86400*(e-n)-a,y:0,m:0,d:0,H:0,M:0,S:0,q:0}
if(Math.abs(i.u)<1e-6&&(i.u=0),t&&t.date1904&&(n+=1462),i.u>.9999&&(i.u=0,86400==++a&&(i.T=a=0,++n,++i.D)),60===n)o=r?[1317,10,29]:[1900,2,29],s=3
else if(0===n)o=r?[1317,8,29]:[1900,1,0],s=6
else{n>60&&--n
var l=new Date(1900,0,1)
l.setDate(l.getDate()+n-1),o=[l.getFullYear(),l.getMonth()+1,l.getDate()],s=l.getDay(),n<60&&(s=(s+6)%7),r&&(s=0)}return i.y=o[0],i.m=o[1],i.d=o[2],i.S=a%60,a=Math.floor(a/60),i.M=a%60,a=Math.floor(a/60),i.H=a,i.q=s,i}d(p),e.parse_date_code=m
var b=new Date(1899,11,31,0,0,0),v=b.getTime(),C=new Date(1900,2,1,0,0,0)
function E(e,t){var r=e.getTime()
return t?r-=1262304e5:e>=C&&(r+=864e5),(r-(v+6e4*(e.getTimezoneOffset()-b.getTimezoneOffset())))/864e5}function S(e){return e.toString(10)}e._general_int=S
var A=function(){var e=/\.(\d*[1-9])0+$/,t=/\.0*$/,r=/\.(\d*[1-9])0+/,n=/\.0*[Ee]/,a=/(E[+-])(\d)$/
function s(t){var r=t.toFixed(11).replace(e,".$1")
return r.length>(t<0?12:11)&&(r=t.toPrecision(6)),r}function o(e){for(var t=0;t!=e.length;++t)if(101==(32|e.charCodeAt(t)))return e.replace(r,".$1").replace(n,"E").replace("e","E").replace(a,"$10$2")
return e}function i(r){return r.indexOf(".")>-1?r.replace(t,"").replace(e,".$1"):r}return function(e){var t,r=Math.floor(Math.log(Math.abs(e))*Math.LOG10E)
return t=r>=-4&&r<=-1?e.toPrecision(10+r):Math.abs(r)<=9?function(e){var t=e<0?12:11,r=i(e.toFixed(12))
return r.length<=t?r:(r=e.toPrecision(10)).length<=t?r:e.toExponential(5)}(e):10===r?e.toFixed(10).substr(0,12):s(e),i(o(t))}}()
function _(e,t){switch(typeof e){case"string":return e
case"boolean":return e?"TRUE":"FALSE"
case"number":return(0|e)===e?S(e):A(e)
case"undefined":return""
case"object":if(null==e)return""
if(e instanceof Date)return F(14,E(e,t&&t.date1904),t)}throw new Error("unsupported value in General format: "+e)}function w(e,t,r,a){var s,o="",i=0,l=0,c=r.y,f=0
switch(e){case 98:c=r.y+543
case 121:switch(t.length){case 1:case 2:s=c%100,f=2
break
default:s=c%1e4,f=4}break
case 109:switch(t.length){case 1:case 2:s=r.m,f=t.length
break
case 3:return u[r.m-1][1]
case 5:return u[r.m-1][0]
default:return u[r.m-1][2]}break
case 100:switch(t.length){case 1:case 2:s=r.d,f=t.length
break
case 3:return h[r.q][0]
default:return h[r.q][1]}break
case 104:switch(t.length){case 1:case 2:s=1+(r.H+11)%12,f=t.length
break
default:throw"bad hour format: "+t}break
case 72:switch(t.length){case 1:case 2:s=r.H,f=t.length
break
default:throw"bad hour format: "+t}break
case 77:switch(t.length){case 1:case 2:s=r.M,f=t.length
break
default:throw"bad minute format: "+t}break
case 115:if("s"!=t&&"ss"!=t&&".0"!=t&&".00"!=t&&".000"!=t)throw"bad second format: "+t
return 0!==r.u||"s"!=t&&"ss"!=t?(l=a>=2?3===a?1e3:100:1===a?10:1,(i=Math.round(l*(r.S+r.u)))>=60*l&&(i=0),"s"===t?0===i?"0":""+i/l:(o=n(i,2+a),"ss"===t?o.substr(0,2):"."+o.substr(2,t.length-1))):n(r.S,t.length)
case 90:switch(t){case"[h]":case"[hh]":s=24*r.D+r.H
break
case"[m]":case"[mm]":s=60*(24*r.D+r.H)+r.M
break
case"[s]":case"[ss]":s=60*(60*(24*r.D+r.H)+r.M)+Math.round(r.S+r.u)
break
default:throw"bad abstime format: "+t}f=3===t.length?1:2
break
case 101:s=c,f=1}return f>0?n(s,f):""}function R(e){if(e.length<=3)return e
for(var t=e.length%3,r=e.substr(0,t);t!=e.length;t+=3)r+=(r.length>0?",":"")+e.substr(t,3)
return r}e._general_num=A,e._general=_
var B=function(){var e=/%/g
function o(t,n,a){var s=n.replace(e,""),o=n.length-s.length
return B(t,s,a*Math.pow(10,2*o))+r("%",o)}var i=/# (\?+)( ?)\/( ?)(\d+)/
var l=/^#*0*\.([0#]+)/,f=/\).*[0#]/,h=/\(###\) ###\\?-####/
function u(e){for(var t,r="",n=0;n!=e.length;++n)switch(t=e.charCodeAt(n)){case 35:break
case 63:r+=" "
break
case 48:r+="0"
break
default:r+=String.fromCharCode(t)}return r}function d(e,t){var r=Math.pow(10,t)
return""+Math.round(e*r)/r}function p(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?0:Math.round((e-Math.floor(e))*Math.pow(10,t))}function m(e,b,v){if(40===e.charCodeAt(0)&&!b.match(f)){var C=b.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"")
return v>=0?m("n",C,v):"("+m("n",C,-v)+")"}if(44===b.charCodeAt(b.length-1))return function(e,t,r){for(var n=t.length-1;44===t.charCodeAt(n-1);)--n
return B(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}(e,b,v)
if(-1!==b.indexOf("%"))return o(e,b,v)
if(-1!==b.indexOf("E"))return function e(t,r){var n,a=t.indexOf("E")-t.indexOf(".")-1
if(t.match(/^#+0.0E\+0$/)){if(0==r)return"0.0E+0"
if(r<0)return"-"+e(t,-r)
var s=t.indexOf(".");-1===s&&(s=t.indexOf("E"))
var o=Math.floor(Math.log(r)*Math.LOG10E)%s
if(o<0&&(o+=s),-1===(n=(r/Math.pow(10,o)).toPrecision(a+1+(s+o)%s)).indexOf("e")){var i=Math.floor(Math.log(r)*Math.LOG10E)
for(-1===n.indexOf(".")?n=n.charAt(0)+"."+n.substr(1)+"E+"+(i-n.length+o):n+="E+"+(i-o);"0."===n.substr(0,2);)n=(n=n.charAt(0)+n.substr(2,s)+"."+n.substr(2+s)).replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")
n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,r,n){return t+r+n.substr(0,(s+o)%s)+"."+n.substr(o)+"E"})}else n=r.toExponential(a)
return t.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+"0"+n.charAt(n.length-1)),t.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,"e")),n.replace("e","E")}(b,v)
if(36===b.charCodeAt(0))return"$"+m(e,b.substr(" "==b.charAt(1)?2:1),v)
var E,S,A,_,w=Math.abs(v),k=v<0?"-":""
if(b.match(/^00+$/))return k+c(w,b.length)
if(b.match(/^[#?]+$/))return"0"===(E=c(v,0))&&(E=""),E.length>b.length?E:u(b.substr(0,b.length-E.length))+E
if(S=b.match(i))return function(e,t,s){var o=parseInt(e[4],10),i=Math.round(t*o),l=Math.floor(i/o),c=i-l*o,f=o
return s+(0===l?"":""+l)+" "+(0===c?r(" ",e[1].length+1+e[4].length):a(c,e[1].length)+e[2]+"/"+e[3]+n(f,e[4].length))}(S,w,k)
if(b.match(/^#+0+$/))return k+c(w,b.length-b.indexOf("0"))
if(S=b.match(l))return E=d(v,S[1].length).replace(/^([^\.]+)$/,"$1."+u(S[1])).replace(/\.$/,"."+u(S[1])).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",u(S[1]).length-t.length)}),-1!==b.indexOf("0.")?E:E.replace(/^0\./,".")
if(b=b.replace(/^#+([0.])/,"$1"),S=b.match(/^(0*)\.(#*)$/))return k+d(w,S[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,S[1].length?"0.":".")
if(S=b.match(/^#{1,3},##0(\.?)$/))return k+R(c(w,0))
if(S=b.match(/^#,##0\.([#0]*0)$/))return v<0?"-"+m(e,b,-v):R(""+(Math.floor(v)+function(e,t){return t<(""+Math.round((e-Math.floor(e))*Math.pow(10,t))).length?1:0}(v,S[1].length)))+"."+n(p(v,S[1].length),S[1].length)
if(S=b.match(/^#,#*,#0/))return m(e,b.replace(/^#,#*,/,""),v)
if(S=b.match(/^([0#]+)(\\?-([0#]+))+$/))return E=t(m(e,b.replace(/[\\-]/g,""),v)),A=0,t(t(b.replace(/\\/g,"")).replace(/[0#]/g,function(e){return A<E.length?E.charAt(A++):"0"===e?"0":""}))
if(b.match(h))return"("+(E=m(e,"##########",v)).substr(0,3)+") "+E.substr(3,3)+"-"+E.substr(6)
var T=""
if(S=b.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return A=Math.min(S[4].length,7),_=g(w,Math.pow(10,A)-1,!1),E=""+k," "==(T=B("n",S[1],_[1])).charAt(T.length-1)&&(T=T.substr(0,T.length-1)+"0"),E+=T+S[2]+"/"+S[3],(T=s(_[2],A)).length<S[4].length&&(T=u(S[4].substr(S[4].length-T.length))+T),E+=T
if(S=b.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return A=Math.min(Math.max(S[1].length,S[4].length),7),k+((_=g(w,Math.pow(10,A)-1,!0))[0]||(_[1]?"":"0"))+" "+(_[1]?a(_[1],A)+S[2]+"/"+S[3]+s(_[2],A):r(" ",2*A+1+S[2].length+S[3].length))
if(S=b.match(/^[#0?]+$/))return E=c(v,0),b.length<=E.length?E:u(b.substr(0,b.length-E.length))+E
if(S=b.match(/^([#0?]+)\.([#0]+)$/)){E=""+v.toFixed(Math.min(S[2].length,10)).replace(/([^0])0+$/,"$1"),A=E.indexOf(".")
var x=b.indexOf(".")-A,y=b.length-E.length-x
return u(b.substr(0,x)+E+b.substr(b.length-y))}if(S=b.match(/^00,000\.([#0]*0)$/))return A=p(v,S[1].length),v<0?"-"+m(e,b,-v):R(function(e){return e<2147483647&&e>-2147483648?""+(e>=0?0|e:e-1|0):""+Math.floor(e)}(v)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?n(0,3-e.length):"")+e})+"."+n(A,S[1].length)
switch(b){case"###,##0.00":return m(e,"#,##0.00",v)
case"###,###":case"##,###":case"#,###":var I=R(c(w,0))
return"0"!==I?k+I:""
case"###,###.00":return m(e,"###,##0.00",v).replace(/^0\./,".")
case"#,###.00":return m(e,"#,##0.00",v).replace(/^0\./,".")}throw new Error("unsupported format |"+b+"|")}function b(t,n,a){var s=n.replace(e,""),o=n.length-s.length
return B(t,s,a*Math.pow(10,2*o))+r("%",o)}function v(e,o,c){if(40===e.charCodeAt(0)&&!o.match(f)){var d=o.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"")
return c>=0?v("n",d,c):"("+v("n",d,-c)+")"}if(44===o.charCodeAt(o.length-1))return function(e,t,r){for(var n=t.length-1;44===t.charCodeAt(n-1);)--n
return B(e,t.substr(0,n),r/Math.pow(10,3*(t.length-n)))}(e,o,c)
if(-1!==o.indexOf("%"))return b(e,o,c)
if(-1!==o.indexOf("E"))return function e(t,r){var n,a=t.indexOf("E")-t.indexOf(".")-1
if(t.match(/^#+0.0E\+0$/)){if(0==r)return"0.0E+0"
if(r<0)return"-"+e(t,-r)
var s=t.indexOf(".");-1===s&&(s=t.indexOf("E"))
var o=Math.floor(Math.log(r)*Math.LOG10E)%s
if(o<0&&(o+=s),!(n=(r/Math.pow(10,o)).toPrecision(a+1+(s+o)%s)).match(/[Ee]/)){var i=Math.floor(Math.log(r)*Math.LOG10E);-1===n.indexOf(".")?n=n.charAt(0)+"."+n.substr(1)+"E+"+(i-n.length+o):n+="E+"+(i-o),n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,r,n){return t+r+n.substr(0,(s+o)%s)+"."+n.substr(o)+"E"})}else n=r.toExponential(a)
return t.match(/E\+00$/)&&n.match(/e[+-]\d$/)&&(n=n.substr(0,n.length-1)+"0"+n.charAt(n.length-1)),t.match(/E\-/)&&n.match(/e\+/)&&(n=n.replace(/e\+/,"e")),n.replace("e","E")}(o,c)
if(36===o.charCodeAt(0))return"$"+v(e,o.substr(" "==o.charAt(1)?2:1),c)
var p,m,C,E,S=Math.abs(c),A=c<0?"-":""
if(o.match(/^00+$/))return A+n(S,o.length)
if(o.match(/^[#?]+$/))return p=""+c,0===c&&(p=""),p.length>o.length?p:u(o.substr(0,o.length-p.length))+p
if(m=o.match(i))return function(e,t,n){return n+(0===t?"":""+t)+r(" ",e[1].length+2+e[4].length)}(m,S,A)
if(o.match(/^#+0+$/))return A+n(S,o.length-o.indexOf("0"))
if(m=o.match(l))return p=(p=(""+c).replace(/^([^\.]+)$/,"$1."+u(m[1])).replace(/\.$/,"."+u(m[1]))).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",u(m[1]).length-t.length)}),-1!==o.indexOf("0.")?p:p.replace(/^0\./,".")
if(o=o.replace(/^#+([0.])/,"$1"),m=o.match(/^(0*)\.(#*)$/))return A+(""+S).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,m[1].length?"0.":".")
if(m=o.match(/^#{1,3},##0(\.?)$/))return A+R(""+S)
if(m=o.match(/^#,##0\.([#0]*0)$/))return c<0?"-"+v(e,o,-c):R(""+c)+"."+r("0",m[1].length)
if(m=o.match(/^#,#*,#0/))return v(e,o.replace(/^#,#*,/,""),c)
if(m=o.match(/^([0#]+)(\\?-([0#]+))+$/))return p=t(v(e,o.replace(/[\\-]/g,""),c)),C=0,t(t(o.replace(/\\/g,"")).replace(/[0#]/g,function(e){return C<p.length?p.charAt(C++):"0"===e?"0":""}))
if(o.match(h))return"("+(p=v(e,"##########",c)).substr(0,3)+") "+p.substr(3,3)+"-"+p.substr(6)
var _=""
if(m=o.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return C=Math.min(m[4].length,7),E=g(S,Math.pow(10,C)-1,!1),p=""+A," "==(_=B("n",m[1],E[1])).charAt(_.length-1)&&(_=_.substr(0,_.length-1)+"0"),p+=_+m[2]+"/"+m[3],(_=s(E[2],C)).length<m[4].length&&(_=u(m[4].substr(m[4].length-_.length))+_),p+=_
if(m=o.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return C=Math.min(Math.max(m[1].length,m[4].length),7),A+((E=g(S,Math.pow(10,C)-1,!0))[0]||(E[1]?"":"0"))+" "+(E[1]?a(E[1],C)+m[2]+"/"+m[3]+s(E[2],C):r(" ",2*C+1+m[2].length+m[3].length))
if(m=o.match(/^[#0?]+$/))return p=""+c,o.length<=p.length?p:u(o.substr(0,o.length-p.length))+p
if(m=o.match(/^([#0]+)\.([#0]+)$/)){p=""+c.toFixed(Math.min(m[2].length,10)).replace(/([^0])0+$/,"$1"),C=p.indexOf(".")
var w=o.indexOf(".")-C,k=o.length-p.length-w
return u(o.substr(0,w)+p+o.substr(o.length-k))}if(m=o.match(/^00,000\.([#0]*0)$/))return c<0?"-"+v(e,o,-c):R(""+c).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?n(0,3-e.length):"")+e})+"."+n(0,m[1].length)
switch(o){case"###,###":case"##,###":case"#,###":var T=R(""+S)
return"0"!==T?A+T:""
default:if(o.match(/\.[0#?]*$/))return v(e,o.slice(0,o.lastIndexOf(".")),c)+u(o.slice(o.lastIndexOf(".")))}throw new Error("unsupported format |"+o+"|")}return function(e,t,r){return(0|r)===r?v(e,t,r):m(e,t,r)}}()
function k(e){for(var t=[],r=!1,n=0,a=0;n<e.length;++n)switch(e.charCodeAt(n)){case 34:r=!r
break
case 95:case 42:case 92:++n
break
case 59:t[t.length]=e.substr(a,n-a),a=n+1}if(t[t.length]=e.substr(a),!0===r)throw new Error("Format |"+e+"| unterminated string ")
return t}e._split=k
var T=/\[[HhMmSs]*\]/
function x(e){for(var t=0,r="",n="";t<e.length;)switch(r=e.charAt(t)){case"G":f(e,t)&&(t+=6),t++
break
case'"':for(;34!==e.charCodeAt(++t)&&t<e.length;)++t;++t
break
case"\\":case"_":t+=2
break
case"@":++t
break
case"B":case"b":if("1"===e.charAt(t+1)||"2"===e.charAt(t+1))return!0
case"M":case"D":case"Y":case"H":case"S":case"E":case"m":case"d":case"y":case"h":case"s":case"e":case"g":return!0
case"A":case"a":if("A/P"===e.substr(t,3).toUpperCase())return!0
if("AM/PM"===e.substr(t,5).toUpperCase())return!0;++t
break
case"[":for(n=r;"]"!==e.charAt(t++)&&t<e.length;)n+=e.charAt(t)
if(n.match(T))return!0
break
case".":case"0":case"#":for(;t<e.length&&("0#?.,E+-%".indexOf(r=e.charAt(++t))>-1||"\\"==r&&"-"==e.charAt(t+1)&&"0#".indexOf(e.charAt(t+2))>-1););break
case"?":for(;e.charAt(++t)===r;);break
case"*":++t," "!=e.charAt(t)&&"*"!=e.charAt(t)||++t
break
case"(":case")":++t
break
case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(;t<e.length&&"0123456789".indexOf(e.charAt(++t))>-1;);break
case" ":default:++t}return!1}function y(e,t,r,n){for(var a,s,o,i=[],l="",c=0,h="",u="t",d="H";c<e.length;)switch(h=e.charAt(c)){case"G":if(!f(e,c))throw new Error("unrecognized character "+h+" in "+e)
i[i.length]={t:"G",v:"General"},c+=7
break
case'"':for(l="";34!==(o=e.charCodeAt(++c))&&c<e.length;)l+=String.fromCharCode(o)
i[i.length]={t:"t",v:l},++c
break
case"\\":var p=e.charAt(++c),g="("===p||")"===p?p:"t"
i[i.length]={t:g,v:p},++c
break
case"_":i[i.length]={t:"t",v:" "},c+=2
break
case"@":i[i.length]={t:"T",v:t},++c
break
case"B":case"b":if("1"===e.charAt(c+1)||"2"===e.charAt(c+1)){if(null==a&&null==(a=m(t,r,"2"===e.charAt(c+1))))return""
i[i.length]={t:"X",v:e.substr(c,2)},u=h,c+=2
break}case"M":case"D":case"Y":case"H":case"S":case"E":h=h.toLowerCase()
case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0)return""
if(null==a&&null==(a=m(t,r)))return""
for(l=h;++c<e.length&&e.charAt(c).toLowerCase()===h;)l+=h
"m"===h&&"h"===u.toLowerCase()&&(h="M"),"h"===h&&(h=d),i[i.length]={t:h,v:l},u=h
break
case"A":case"a":var b={t:h,v:h}
if(null==a&&(a=m(t,r)),"A/P"===e.substr(c,3).toUpperCase()?(null!=a&&(b.v=a.H>=12?"P":"A"),b.t="T",d="h",c+=3):"AM/PM"===e.substr(c,5).toUpperCase()?(null!=a&&(b.v=a.H>=12?"PM":"AM"),b.t="T",c+=5,d="h"):(b.t="t",++c),null==a&&"T"===b.t)return""
i[i.length]=b,u=h
break
case"[":for(l=h;"]"!==e.charAt(c++)&&c<e.length;)l+=e.charAt(c)
if("]"!==l.slice(-1))throw'unterminated "[" block: |'+l+"|"
if(l.match(T)){if(null==a&&null==(a=m(t,r)))return""
i[i.length]={t:"Z",v:l.toLowerCase()},u=l.charAt(1)}else l.indexOf("$")>-1&&(l=(l.match(/\$([^-\[\]]*)/)||[])[1]||"$",x(e)||(i[i.length]={t:"t",v:l}))
break
case".":if(null!=a){for(l=h;++c<e.length&&"0"===(h=e.charAt(c));)l+=h
i[i.length]={t:"s",v:l}
break}case"0":case"#":for(l=h;++c<e.length&&"0#?.,E+-%".indexOf(h=e.charAt(c))>-1||"\\"==h&&"-"==e.charAt(c+1)&&c<e.length-2&&"0#".indexOf(e.charAt(c+2))>-1;)l+=h
i[i.length]={t:"n",v:l}
break
case"?":for(l=h;e.charAt(++c)===h;)l+=h
i[i.length]={t:h,v:l},u=h
break
case"*":++c," "!=e.charAt(c)&&"*"!=e.charAt(c)||++c
break
case"(":case")":i[i.length]={t:1===n?"t":h,v:h},++c
break
case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":for(l=h;c<e.length&&"0123456789".indexOf(e.charAt(++c))>-1;)l+=e.charAt(c)
i[i.length]={t:"D",v:l}
break
case" ":i[i.length]={t:h,v:h},++c
break
default:if(-1===",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(h))throw new Error("unrecognized character "+h+" in "+e)
i[i.length]={t:"t",v:h},++c}var v,C=0,E=0
for(c=i.length-1,u="t";c>=0;--c)switch(i[c].t){case"h":case"H":i[c].t=d,u="h",C<1&&(C=1)
break
case"s":(v=i[c].v.match(/\.0+$/))&&(E=Math.max(E,v[0].length-1)),C<3&&(C=3)
case"d":case"y":case"M":case"e":u=i[c].t
break
case"m":"s"===u&&(i[c].t="M",C<2&&(C=2))
break
case"X":break
case"Z":C<1&&i[c].v.match(/[Hh]/)&&(C=1),C<2&&i[c].v.match(/[Mm]/)&&(C=2),C<3&&i[c].v.match(/[Ss]/)&&(C=3)}switch(C){case 0:break
case 1:a.u>=.5&&(a.u=0,++a.S),a.S>=60&&(a.S=0,++a.M),a.M>=60&&(a.M=0,++a.H)
break
case 2:a.u>=.5&&(a.u=0,++a.S),a.S>=60&&(a.S=0,++a.M)}var S,A=""
for(c=0;c<i.length;++c)switch(i[c].t){case"t":case"T":case" ":case"D":break
case"X":i[c].v="",i[c].t=";"
break
case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":i[c].v=w(i[c].t.charCodeAt(0),i[c].v,a,E),i[c].t="t"
break
case"n":case"(":case"?":for(S=c+1;null!=i[S]&&("?"===(h=i[S].t)||"D"===h||(" "===h||"t"===h)&&null!=i[S+1]&&("?"===i[S+1].t||"t"===i[S+1].t&&"/"===i[S+1].v)||"("===i[c].t&&(" "===h||"n"===h||")"===h)||"t"===h&&("/"===i[S].v||" "===i[S].v&&null!=i[S+1]&&"?"==i[S+1].t));)i[c].v+=i[S].v,i[S]={v:"",t:";"},++S
A+=i[c].v,c=S-1
break
case"G":i[c].t="t",i[c].v=_(t,r)}var R,k,y=""
if(A.length>0){40==A.charCodeAt(0)?(R=t<0&&45===A.charCodeAt(0)?-t:t,k=B("(",A,R)):(k=B("n",A,R=t<0&&n>1?-t:t),R<0&&i[0]&&"t"==i[0].t&&(k=k.substr(1),i[0].v="-"+i[0].v)),S=k.length-1
var I=i.length
for(c=0;c<i.length;++c)if(null!=i[c]&&"t"!=i[c].t&&i[c].v.indexOf(".")>-1){I=c
break}var D=i.length
if(I===i.length&&-1===k.indexOf("E")){for(c=i.length-1;c>=0;--c)null!=i[c]&&-1!=="n?(".indexOf(i[c].t)&&(S>=i[c].v.length-1?(S-=i[c].v.length,i[c].v=k.substr(S+1,i[c].v.length)):S<0?i[c].v="":(i[c].v=k.substr(0,S+1),S=-1),i[c].t="t",D=c)
S>=0&&D<i.length&&(i[D].v=k.substr(0,S+1)+i[D].v)}else if(I!==i.length&&-1===k.indexOf("E")){for(S=k.indexOf(".")-1,c=I;c>=0;--c)if(null!=i[c]&&-1!=="n?(".indexOf(i[c].t)){for(s=i[c].v.indexOf(".")>-1&&c===I?i[c].v.indexOf(".")-1:i[c].v.length-1,y=i[c].v.substr(s+1);s>=0;--s)S>=0&&("0"===i[c].v.charAt(s)||"#"===i[c].v.charAt(s))&&(y=k.charAt(S--)+y)
i[c].v=y,i[c].t="t",D=c}for(S>=0&&D<i.length&&(i[D].v=k.substr(0,S+1)+i[D].v),S=k.indexOf(".")+1,c=I;c<i.length;++c)if(null!=i[c]&&(-1!=="n?(".indexOf(i[c].t)||c===I)){for(s=i[c].v.indexOf(".")>-1&&c===I?i[c].v.indexOf(".")+1:0,y=i[c].v.substr(0,s);s<i[c].v.length;++s)S<k.length&&(y+=k.charAt(S++))
i[c].v=y,i[c].t="t",D=c}}}for(c=0;c<i.length;++c)null!=i[c]&&"n(?".indexOf(i[c].t)>-1&&(R=n>1&&t<0&&c>0&&"-"===i[c-1].v?-t:t,i[c].v=B(i[c].t,i[c].v,R),i[c].t="t")
var O=""
for(c=0;c!==i.length;++c)null!=i[c]&&(O+=i[c].v)
return O}e.is_date=x,e._eval=y
var I=/\[[=<>]/,D=/\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/
function O(e,t){if(null==t)return!1
var r=parseFloat(t[2])
switch(t[1]){case"=":if(e==r)return!0
break
case">":if(e>r)return!0
break
case"<":if(e<r)return!0
break
case"<>":if(e!=r)return!0
break
case">=":if(e>=r)return!0
break
case"<=":if(e<=r)return!0}return!1}function F(e,t,r){null==r&&(r={})
var n=""
switch(typeof e){case"string":n="m/d/yy"==e&&r.dateNF?r.dateNF:e
break
case"number":n=14==e&&r.dateNF?r.dateNF:(null!=r.table?r.table:p)[e]}if(f(n,0))return _(t,r)
t instanceof Date&&(t=E(t,r.date1904))
var a=function(e,t){var r=k(e),n=r.length,a=r[n-1].indexOf("@")
if(n<4&&a>-1&&--n,r.length>4)throw new Error("cannot find right format for |"+r.join("|")+"|")
if("number"!=typeof t)return[4,4===r.length||a>-1?r[r.length-1]:"@"]
switch(r.length){case 1:r=a>-1?["General","General","General",r[0]]:[r[0],r[0],r[0],"@"]
break
case 2:r=a>-1?[r[0],r[0],r[0],r[1]]:[r[0],r[1],r[0],"@"]
break
case 3:r=a>-1?[r[0],r[1],r[0],r[2]]:[r[0],r[1],r[2],"@"]}var s=t>0?r[0]:t<0?r[1]:r[2]
if(-1===r[0].indexOf("[")&&-1===r[1].indexOf("["))return[n,s]
if(null!=r[0].match(I)||null!=r[1].match(I)){var o=r[0].match(D),i=r[1].match(D)
return O(t,o)?[n,r[0]]:O(t,i)?[n,r[1]]:[n,r[null!=o&&null!=i?2:1]]}return[n,s]}(n,t)
if(f(a[1]))return _(t,r)
if(!0===t)t="TRUE"
else if(!1===t)t="FALSE"
else if(""===t||null==t)return""
return y(a[1],t,r,a[0])}function P(e,t){if("number"!=typeof t){t=+t||-1
for(var r=0;r<392;++r)if(null!=p[r]){if(p[r]==e){t=r
break}}else t<0&&(t=r)
t<0&&(t=391)}return p[t]=e,t}e.load=P,e._table=p,e.get_table=function(){return p},e.load_table=function(e){for(var t=0;392!=t;++t)void 0!==e[t]&&P(e[t],t)},e.init_table=d,e.format=F}
k(B)
var T={"General Number":"General","General Date":B._table[22],"Long Date":"dddd, mmmm dd, yyyy","Medium Date":B._table[15],"Short Date":B._table[14],"Long Time":B._table[19],"Medium Time":B._table[18],"Short Time":B._table[20],Currency:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',Fixed:B._table[2],Standard:B._table[4],Percent:B._table[10],Scientific:B._table[11],"Yes/No":'"Yes";"Yes";"No";@',"True/False":'"True";"True";"False";@',"On/Off":'"Yes";"Yes";"No";@'},x={5:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',23:"General",24:"General",25:"General",26:"General",27:"m/d/yy",28:"m/d/yy",29:"m/d/yy",30:"m/d/yy",31:"m/d/yy",32:"h:mm:ss",33:"h:mm:ss",34:"h:mm:ss",35:"h:mm:ss",36:"m/d/yy",41:'_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',50:"m/d/yy",51:"m/d/yy",52:"m/d/yy",53:"m/d/yy",54:"m/d/yy",55:"m/d/yy",56:"m/d/yy",57:"m/d/yy",58:"m/d/yy",59:"0",60:"0.00",61:"#,##0",62:"#,##0.00",63:'"$"#,##0_);\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',67:"0%",68:"0.00%",69:"# ?/?",70:"# ??/??",71:"m/d/yy",72:"m/d/yy",73:"d-mmm-yy",74:"d-mmm",75:"mmm-yy",76:"h:mm",77:"h:mm:ss",78:"m/d/yy h:mm",79:"mm:ss",80:"[h]:mm:ss",81:"mmss.0"},y=/[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g
var I
!function(e){e.version="1.2.0"
var t=function(){for(var e=0,t=new Array(256),r=0;256!=r;++r)e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=1&(e=r)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1)?-306674912^e>>>1:e>>>1,t[r]=e
return"undefined"!=typeof Int32Array?new Int32Array(t):t}()
e.table=t,e.bstr=function(e,r){for(var n=-1^r,a=e.length-1,s=0;s<a;)n=(n=n>>>8^t[255&(n^e.charCodeAt(s++))])>>>8^t[255&(n^e.charCodeAt(s++))]
return s===a&&(n=n>>>8^t[255&(n^e.charCodeAt(s))]),-1^n},e.buf=function(e,r){if(e.length>1e4)return function(e,r){for(var n=-1^r,a=e.length-7,s=0;s<a;)n=(n=(n=(n=(n=(n=(n=(n=n>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])]
for(;s<a+7;)n=n>>>8^t[255&(n^e[s++])]
return-1^n}(e,r)
for(var n=-1^r,a=e.length-3,s=0;s<a;)n=(n=(n=(n=n>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])])>>>8^t[255&(n^e[s++])]
for(;s<a+3;)n=n>>>8^t[255&(n^e[s++])]
return-1^n},e.str=function(e,r){for(var n,a,s=-1^r,o=0,i=e.length;o<i;)(n=e.charCodeAt(o++))<128?s=s>>>8^t[255&(s^n)]:n<2048?s=(s=s>>>8^t[255&(s^(192|n>>6&31))])>>>8^t[255&(s^(128|63&n))]:n>=55296&&n<57344?(n=64+(1023&n),a=1023&e.charCodeAt(o++),s=(s=(s=(s=s>>>8^t[255&(s^(240|n>>8&7))])>>>8^t[255&(s^(128|n>>2&63))])>>>8^t[255&(s^(128|a>>6&15|(3&n)<<4))])>>>8^t[255&(s^(128|63&a))]):s=(s=(s=s>>>8^t[255&(s^(224|n>>12&15))])>>>8^t[255&(s^(128|n>>6&63))])>>>8^t[255&(s^(128|63&n))]
return-1^s}}(I={})
var D,O=function(){var e,t={}
function r(e){if("/"==e.charAt(e.length-1))return-1===e.slice(0,-1).indexOf("/")?e:r(e.slice(0,-1))
var t=e.lastIndexOf("/")
return-1===t?e:e.slice(0,t+1)}function n(e){if("/"==e.charAt(e.length-1))return n(e.slice(0,-1))
var t=e.lastIndexOf("/")
return-1===t?e:e.slice(t+1)}function a(e,t){"string"==typeof t&&(t=new Date(t))
var r=t.getHours()
r=(r=r<<6|t.getMinutes())<<5|t.getSeconds()>>>1,e._W(2,r)
var n=t.getFullYear()-1980
n=(n=n<<4|t.getMonth()+1)<<5|t.getDate(),e._W(2,n)}function s(e){Rt(e,0)
for(var t={},r=0;e.l<=e.length-4;){var n=e._R(2),a=e._R(2),s=e.l+a,o={}
switch(n){case 21589:1&(r=e._R(1))&&(o.mtime=e._R(4)),a>5&&(2&r&&(o.atime=e._R(4)),4&r&&(o.ctime=e._R(4))),o.mtime&&(o.mt=new Date(1e3*o.mtime))}e.l=s,t[n]=o}return t}function o(){return e||(e=require("fs"))}function i(e,t){if(80==e[0]&&75==e[1])return le(e,t)
if(e.length<512)throw new Error("CFB file size "+e.length+" < 512")
var r,n,a,s,o,i,l=512,c=[],h=e.slice(0,512)
Rt(h,0)
var u=function(e){if(80==e[e.l]&&75==e[e.l+1])return[0,0]
e.chk(B,"Header Signature: "),e.chk(T,"CLSID: ")
var t=e._R(2,"u")
return[e._R(2,"u"),t]}(h)
switch(r=u[0]){case 3:l=512
break
case 4:l=4096
break
case 0:if(0==u[1])return le(e,t)
default:throw new Error("Major Version: Expected 3 or 4 saw "+r)}512!==l&&Rt(h=e.slice(0,l),28)
var d=e.slice(0,l);(function(e,t){var r=9
switch(e.l+=2,r=e._R(2)){case 9:if(3!=t)throw new Error("Sector Shift: Expected 9 saw "+r)
break
case 12:if(4!=t)throw new Error("Sector Shift: Expected 12 saw "+r)
break
default:throw new Error("Sector Shift: Expected 9 or 12 saw "+r)}e.chk("0600","Mini Sector Shift: "),e.chk("000000000000","Reserved: ")})(h,r)
var p=h._R(4,"i")
if(3===r&&0!==p)throw new Error("# Directory Sectors: Expected 0 saw "+p)
h.l+=4,s=h._R(4,"i"),h.l+=4,h.chk("00100000","Mini Stream Cutoff Size: "),o=h._R(4,"i"),n=h._R(4,"i"),i=h._R(4,"i"),a=h._R(4,"i")
for(var g=-1,m=0;m<109&&!((g=h._R(4,"i"))<0);++m)c[m]=g
var b=function(e,t){for(var r=Math.ceil(e.length/t)-1,n=[],a=1;a<r;++a)n[a-1]=e.slice(a*t,(a+1)*t)
return n[r-1]=e.slice(r*t),n}(e,l);(function e(t,r,n,a,s){var o=A
if(t===A){if(0!==r)throw new Error("DIFAT chain shorter than expected")}else if(-1!==t){var i=n[t],l=(a>>>2)-1
if(!i)return
for(var c=0;c<l&&(o=bt(i,4*c))!==A;++c)s.push(o)
e(bt(i,a-4),r-1,n,a,s)}})(i,a,b,l,c)
var v=function(e,t,r,n){var a=e.length,s=[],o=[],i=[],l=[],c=n-1,f=0,h=0,u=0,d=0
for(f=0;f<a;++f)if(i=[],(u=f+t)>=a&&(u-=a),!o[u]){for(l=[],h=u;h>=0;){o[h]=!0,i[i.length]=h,l.push(e[h])
var p=r[Math.floor(4*h/n)]
if(n<4+(d=4*h&c))throw new Error("FAT boundary crossed: "+h+" 4 "+n)
if(!e[p])break
h=bt(e[p],d)}s[u]={nodes:i,data:Ye([l])}}return s}(b,s,c,l)
v[s].name="!Directory",n>0&&o!==A&&(v[o].name="!MiniFAT"),v[c[0]].name="!FAT",v.fat_addrs=c,v.ssz=l
var C=[],E=[],S=[]
f(s,v,b,C,n,{},E,o),function(e,t,r){for(var n=0,a=0,s=0,o=0,i=0,l=r.length,c=[],f=[];n<l;++n)c[n]=f[n]=n,t[n]=r[n]
for(;i<f.length;++i)n=f[i],a=e[n].L,s=e[n].R,o=e[n].C,c[n]===n&&(-1!==a&&c[a]!==a&&(c[n]=c[a]),-1!==s&&c[s]!==s&&(c[n]=c[s])),-1!==o&&(c[o]=n),-1!==a&&(c[a]=c[n],f.lastIndexOf(a)<i&&f.push(a)),-1!==s&&(c[s]=c[n],f.lastIndexOf(s)<i&&f.push(s))
for(n=1;n<l;++n)c[n]===n&&(-1!==s&&c[s]!==s?c[n]=c[s]:-1!==a&&c[a]!==a&&(c[n]=c[a]))
for(n=1;n<l;++n)if(0!==e[n].type){if(0===(i=c[n]))t[n]=t[0]+"/"+t[n]
else for(;0!==i&&i!==c[i];)t[n]=t[i]+"/"+t[n],i=c[i]
c[n]=0}for(t[0]+="/",n=1;n<l;++n)2!==e[n].type&&(t[n]+="/")}(E,S,C),C.shift()
var _={FileIndex:E,FullPaths:S}
return t&&t.raw&&(_.raw={header:d,sectors:b}),_}function l(e,t,r){for(var n=e.start,a=e.size,s=[],o=n;r&&a>0&&o>=0;)s.push(t.slice(o*S,o*S+S)),a-=S,o=bt(r,4*o)
return 0===s.length?kt(0):_(s).slice(0,e.size)}function c(e,t,r,n,a){var s=[],o=[]
a||(a=[])
var i=n-1,l=0,c=0
for(l=t;l>=0;){a[l]=!0,s[s.length]=l,o.push(e[l])
var f=r[Math.floor(4*l/n)]
if(n<4+(c=4*l&i))throw new Error("FAT boundary crossed: "+l+" 4 "+n)
if(!e[f])break
l=bt(e[f],c)}return{nodes:s,data:Ye([o])}}function f(e,t,r,n,a,s,o,i){for(var f,u=0,d=n.length?2:0,p=t[e].data,g=0,m=0;g<p.length;g+=128){var b=p.slice(g,g+128)
Rt(b,64),m=b._R(2),f=Ze(b,0,m-d),n.push(f)
var v={name:f,type:b._R(1),color:b._R(1),L:b._R(4,"i"),R:b._R(4,"i"),C:b._R(4,"i"),clsid:b._R(16),state:b._R(4,"i"),start:0,size:0}
0!==b._R(2)+b._R(2)+b._R(2)+b._R(2)&&(v.ct=h(b,b.l-8)),0!==b._R(2)+b._R(2)+b._R(2)+b._R(2)&&(v.mt=h(b,b.l-8)),v.start=b._R(4,"i"),v.size=b._R(4,"i"),v.size<0&&v.start<0&&(v.size=v.type=0,v.start=A,v.name=""),5===v.type?(u=v.start,a>0&&u!==A&&(t[u].name="!StreamData")):v.size>=4096?(v.storage="fat",void 0===t[v.start]&&(t[v.start]=c(r,v.start,t.fat_addrs,t.ssz)),t[v.start].name=v.name,v.content=t[v.start].data.slice(0,v.size)):(v.storage="minifat",v.size<0?v.size=0:u!==A&&v.start!==A&&t[u]&&(v.content=l(v,t[u].data,(t[i]||{}).data))),v.content&&Rt(v.content,0),s[f]=v,o.push(v)}}function h(e,t){return new Date(1e3*(mt(e,t+4)/1e7*Math.pow(2,32)+mt(e,t)/1e7-11644473600))}function u(e,t){var r=t||{},n=r.root||"Root Entry"
if(e.FullPaths||(e.FullPaths=[]),e.FileIndex||(e.FileIndex=[]),e.FullPaths.length!==e.FileIndex.length)throw new Error("inconsistent CFB structure")
0===e.FullPaths.length&&(e.FullPaths[0]=n+"/",e.FileIndex[0]={name:n,type:5}),r.CLSID&&(e.FileIndex[0].clsid=r.CLSID),function(e){var t="Sh33tJ5"
if(O.find(e,"/"+t))return
var r=kt(4)
r[0]=55,r[1]=r[3]=50,r[2]=54,e.FileIndex.push({name:t,type:2,content:r,size:4,L:69,R:69,C:69}),e.FullPaths.push(e.FullPaths[0]+t),g(e)}(e)}function g(e,t){u(e)
for(var a=!1,s=!1,o=e.FullPaths.length-1;o>=0;--o){var i=e.FileIndex[o]
switch(i.type){case 0:s?a=!0:(e.FileIndex.pop(),e.FullPaths.pop())
break
case 1:case 2:case 5:s=!0,isNaN(i.R*i.L*i.C)&&(a=!0),i.R>-1&&i.L>-1&&i.R==i.L&&(a=!0)
break
default:a=!0}}if(a||t){var l=new Date(1987,1,19),c=0,f=[]
for(o=0;o<e.FullPaths.length;++o)0!==e.FileIndex[o].type&&f.push([e.FullPaths[o],e.FileIndex[o]])
for(o=0;o<f.length;++o){var h=r(f[o][0])
for(s=!1,c=0;c<f.length;++c)f[c][0]===h&&(s=!0)
s||f.push([h,{name:n(h).replace("/",""),type:1,clsid:T,ct:l,mt:l,content:null}])}for(f.sort(function(e,t){return function(e,t){for(var r=e.split("/"),n=t.split("/"),a=0,s=0,o=Math.min(r.length,n.length);a<o;++a){if(s=r[a].length-n[a].length)return s
if(r[a]!=n[a])return r[a]<n[a]?-1:1}return r.length-n.length}(e[0],t[0])}),e.FullPaths=[],e.FileIndex=[],o=0;o<f.length;++o)e.FullPaths[o]=f[o][0],e.FileIndex[o]=f[o][1]
for(o=0;o<f.length;++o){var d=e.FileIndex[o],p=e.FullPaths[o]
if(d.name=n(p).replace("/",""),d.L=d.R=d.C=-(d.color=1),d.size=d.content?d.content.length:0,d.start=0,d.clsid=d.clsid||T,0===o)d.C=f.length>1?1:-1,d.size=0,d.type=5
else if("/"==p.slice(-1)){for(c=o+1;c<f.length&&r(e.FullPaths[c])!=p;++c);for(d.C=c>=f.length?-1:c,c=o+1;c<f.length&&r(e.FullPaths[c])!=r(p);++c);d.R=c>=f.length?-1:c,d.type=1}else r(e.FullPaths[o+1]||"")==r(p)&&(d.R=o+1),d.type=2}}}function m(e,t){var r=t||{}
if(g(e),"zip"==r.fileType)return fe(e,r)
var n=function(e){for(var t=0,r=0,n=0;n<e.FileIndex.length;++n){var a=e.FileIndex[n]
if(a.content){var s=a.content.length
s>0&&(s<4096?t+=s+63>>6:r+=s+511>>9)}}for(var o=e.FullPaths.length+3>>2,i=t+127>>7,l=(t+7>>3)+r+o+i,c=l+127>>7,f=c<=109?0:Math.ceil((c-109)/127);l+c+f+127>>7>c;)f=++c<=109?0:Math.ceil((c-109)/127)
var h=[1,f,c,i,o,r,t,0]
return e.FileIndex[0].size=t<<6,h[7]=(e.FileIndex[0].start=h[0]+h[1]+h[2]+h[3]+h[4]+h[5])+(h[6]+7>>3),h}(e),a=kt(n[7]<<9),s=0,o=0
for(s=0;s<8;++s)a._W(1,k[s])
for(s=0;s<8;++s)a._W(2,0)
for(a._W(2,62),a._W(2,3),a._W(2,65534),a._W(2,9),a._W(2,6),s=0;s<3;++s)a._W(2,0)
for(a._W(4,0),a._W(4,n[2]),a._W(4,n[0]+n[1]+n[2]+n[3]-1),a._W(4,0),a._W(4,4096),a._W(4,n[3]?n[0]+n[1]+n[2]-1:A),a._W(4,n[3]),a._W(-4,n[1]?n[0]-1:A),a._W(4,n[1]),s=0;s<109;++s)a._W(-4,s<n[2]?n[1]+s:-1)
if(n[1])for(o=0;o<n[1];++o){for(;s<236+127*o;++s)a._W(-4,s<n[2]?n[1]+s:-1)
a._W(-4,o===n[1]-1?A:o+1)}var i=function(e){for(o+=e;s<o-1;++s)a._W(-4,s+1)
e&&(++s,a._W(-4,A))}
for(o=s=0,o+=n[1];s<o;++s)a._W(-4,x.DIFSECT)
for(o+=n[2];s<o;++s)a._W(-4,x.FATSECT)
i(n[3]),i(n[4])
for(var l=0,c=0,f=e.FileIndex[0];l<e.FileIndex.length;++l)(f=e.FileIndex[l]).content&&((c=f.content.length)<4096||(f.start=o,i(c+511>>9)))
for(i(n[6]+7>>3);511&a.l;)a._W(-4,x.ENDOFCHAIN)
for(o=s=0,l=0;l<e.FileIndex.length;++l)(f=e.FileIndex[l]).content&&(!(c=f.content.length)||c>=4096||(f.start=o,i(c+63>>6)))
for(;511&a.l;)a._W(-4,x.ENDOFCHAIN)
for(s=0;s<n[4]<<2;++s){var h=e.FullPaths[s]
if(h&&0!==h.length){f=e.FileIndex[s],0===s&&(f.start=f.size?f.start-1:A)
var u=0===s&&r.root||f.name
if(c=2*(u.length+1),a._W(64,u,"utf16le"),a._W(2,c),a._W(1,f.type),a._W(1,f.color),a._W(-4,f.L),a._W(-4,f.R),a._W(-4,f.C),f.clsid)a._W(16,f.clsid,"hex")
else for(l=0;l<4;++l)a._W(4,0)
a._W(4,f.state||0),a._W(4,0),a._W(4,0),a._W(4,0),a._W(4,0),a._W(4,f.start),a._W(4,f.size),a._W(4,0)}else{for(l=0;l<17;++l)a._W(4,0)
for(l=0;l<3;++l)a._W(4,-1)
for(l=0;l<12;++l)a._W(4,0)}}for(s=1;s<e.FileIndex.length;++s)if((f=e.FileIndex[s]).size>=4096){for(a.l=f.start+1<<9,l=0;l<f.size;++l)a._W(1,f.content[l])
for(;511&l;++l)a._W(1,0)}for(s=1;s<e.FileIndex.length;++s)if((f=e.FileIndex[s]).size>0&&f.size<4096){for(l=0;l<f.size;++l)a._W(1,f.content[l])
for(;63&l;++l)a._W(1,0)}for(;a.l<a.length;)a._W(1,0)
return a}t.version="1.1.0"
var E,S=64,A=-2,B="d0cf11e0a1b11ae1",k=[208,207,17,224,161,177,26,225],T="00000000000000000000000000000000",x={MAXREGSECT:-6,DIFSECT:-4,FATSECT:-3,ENDOFCHAIN:A,FREESECT:-1,HEADER_SIGNATURE:B,HEADER_MINOR_VERSION:"3e00",MAXREGSID:-6,NOSTREAM:-1,HEADER_CLSID:T,EntryTypes:["unknown","storage","stream","lockbytes","property","root"]}
function y(e){for(var t=new Array(e.length),r=0;r<e.length;++r)t[r]=String.fromCharCode(e[r])
return t.join("")}function D(e){return E?E.deflateRawSync(e):$(e)}var F=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],P=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258],N=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577]
function L(e){var t=139536&(e<<1|e<<11)|558144&(e<<5|e<<15)
return 255&(t>>16|t>>8|t)}for(var M="undefined"!=typeof Uint8Array,W=M?new Uint8Array(256):[],U=0;U<256;++U)W[U]=L(U)
function H(e,t){var r=W[255&e]
return t<=8?r>>>8-t:(r=r<<8|W[e>>8&255],t<=16?r>>>16-t:(r=r<<8|W[e>>16&255])>>>24-t)}function V(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=6?0:e[n+1]<<8))>>>r&3}function z(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=5?0:e[n+1]<<8))>>>r&7}function X(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=3?0:e[n+1]<<8))>>>r&31}function G(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=1?0:e[n+1]<<8))>>>r&127}function j(e,t,r){var n=7&t,a=t>>>3,s=(1<<r)-1,o=e[a]>>>n
return r<8-n?o&s:(o|=e[a+1]<<8-n,r<16-n?o&s:(o|=e[a+2]<<16-n,r<24-n?o&s:(o|=e[a+3]<<24-n)&s))}function K(e,t){var r=e.length,n=2*r>t?2*r:t+5,a=0
if(r>=t)return e
if(p){var s=v(n)
if(e.copy)e.copy(s)
else for(;a<e.length;++a)s[a]=e[a]
return s}if(M){var o=new Uint8Array(n)
if(o.set)o.set(e)
else for(;a<e.length;++a)o[a]=e[a]
return o}return e.length=n,e}function Y(e){for(var t=new Array(e),r=0;r<e;++r)t[r]=0
return t}var $=function(){var e=function(e,t){for(var r=0;r<e.length;){var n=Math.min(65535,e.length-r),a=r+n==e.length
for(t._W(1,+a),t._W(2,n),t._W(2,65535&~n);n-- >0;)t[t.l++]=e[r++]}return t.l}
return function(t){var r=kt(50+Math.floor(1.1*t.length)),n=e(t,r)
return r.slice(0,n)}}()
function Z(e,t,r){var n=1,a=0,s=0,o=0,i=0,l=e.length,c=M?new Uint16Array(32):Y(32)
for(s=0;s<32;++s)c[s]=0
for(s=l;s<r;++s)e[s]=0
l=e.length
var f=M?new Uint16Array(l):Y(l)
for(s=0;s<l;++s)c[a=e[s]]++,n<a&&(n=a),f[s]=0
for(c[0]=0,s=1;s<=n;++s)c[s+16]=i=i+c[s-1]<<1
for(s=0;s<l;++s)0!=(i=e[s])&&(f[s]=c[i+16]++)
var h=0
for(s=0;s<l;++s)if(0!=(h=e[s]))for(i=H(f[s],n)>>n-h,o=(1<<n+4-h)-1;o>=0;--o)t[i|o<<h]=15&h|s<<4
return n}var Q=M?new Uint16Array(512):Y(512),J=M?new Uint16Array(32):Y(32)
if(!M){for(var q=0;q<512;++q)Q[q]=0
for(q=0;q<32;++q)J[q]=0}(function(){for(var e=[],t=0;t<32;t++)e.push(5)
Z(e,J,32)
var r=[]
for(t=0;t<=143;t++)r.push(8)
for(;t<=255;t++)r.push(9)
for(;t<=279;t++)r.push(7)
for(;t<=287;t++)r.push(8)
Z(r,Q,288)})()
var ee=M?new Uint16Array(32768):Y(32768),te=M?new Uint16Array(32768):Y(32768),re=M?new Uint16Array(128):Y(128),ne=1,ae=1
function se(e,t){var r=X(e,t)+257,n=X(e,t+=5)+1,a=function(e,t){var r=7&t,n=t>>>3
return(e[n]|(r<=4?0:e[n+1]<<8))>>>r&15}(e,t+=5)+4
t+=4
for(var s=0,o=M?new Uint8Array(19):Y(19),i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],l=1,c=M?new Uint8Array(8):Y(8),f=M?new Uint8Array(8):Y(8),h=o.length,u=0;u<a;++u)o[F[u]]=s=z(e,t),l<s&&(l=s),c[s]++,t+=3
var d=0
for(c[0]=0,u=1;u<=l;++u)f[u]=d=d+c[u-1]<<1
for(u=0;u<h;++u)0!=(d=o[u])&&(i[u]=f[d]++)
var p=0
for(u=0;u<h;++u)if(0!=(p=o[u])){d=W[i[u]]>>8-p
for(var g=(1<<7-p)-1;g>=0;--g)re[d|g<<p]=7&p|u<<3}var m=[]
for(l=1;m.length<r+n;)switch(t+=7&(d=re[G(e,t)]),d>>>=3){case 16:for(s=3+V(e,t),t+=2,d=m[m.length-1];s-- >0;)m.push(d)
break
case 17:for(s=3+z(e,t),t+=3;s-- >0;)m.push(0)
break
case 18:for(s=11+G(e,t),t+=7;s-- >0;)m.push(0)
break
default:m.push(d),l<d&&(l=d)}var b=m.slice(0,r),v=m.slice(r)
for(u=r;u<286;++u)b[u]=0
for(u=n;u<30;++u)v[u]=0
return ne=Z(b,ee,286),ae=Z(v,te,30),t}function oe(e,t){var r=function(e,t){if(3==e[0]&&!(3&e[1]))return[b(t),2]
for(var r=0,n=0,a=v(t||1<<18),s=0,o=a.length>>>0,i=0,l=0;0==(1&n);)if(n=z(e,r),r+=3,n>>>1!=0)for(n>>>1==1?(i=9,l=5):(r=se(e,r),i=ne,l=ae),!t&&o<s+32767&&(o=(a=K(a,s+32767)).length);;){var c=j(e,r,i),f=n>>>1==1?Q[c]:ee[c]
if(r+=15&f,0==((f>>>=4)>>>8&255))a[s++]=f
else{if(256==f)break
var h=(f-=257)<8?0:f-4>>2
h>5&&(h=0)
var u=s+P[f]
h>0&&(u+=j(e,r,h),r+=h),c=j(e,r,l),r+=15&(f=n>>>1==1?J[c]:te[c])
var d=(f>>>=4)<4?0:f-2>>1,p=N[f]
for(d>0&&(p+=j(e,r,d),r+=d),!t&&o<u&&(o=(a=K(a,u)).length);s<u;)a[s]=a[s-p],++s}}else{7&r&&(r+=8-(7&r))
var g=e[r>>>3]|e[1+(r>>>3)]<<8
if(r+=32,!t&&o<s+g&&(o=(a=K(a,s+g)).length),"function"==typeof e.copy)e.copy(a,s,r>>>3,(r>>>3)+g),s+=g,r+=8*g
else for(;g-- >0;)a[s++]=e[r>>>3],r+=8}return[t?a:a.slice(0,s),r+7>>>3]}(e.slice(e.l||0),t)
return e.l+=r[1],r[0]}function ie(e,t){if(!e)throw new Error(t)
"undefined"!=typeof console&&console.error(t)}function le(e,t){var r=e
Rt(r,0)
var n={FileIndex:[],FullPaths:[]}
u(n,{root:t.root})
for(var a=r.length-4;(80!=r[a]||75!=r[a+1]||5!=r[a+2]||6!=r[a+3])&&a>=0;)--a
r.l=a+4,r.l+=4
var o=r._R(2)
r.l+=6
var i=r._R(4)
for(r.l=i,a=0;a<o;++a){r.l+=20
var l=r._R(4),c=r._R(4),f=r._R(2),h=r._R(2),d=r._R(2)
r.l+=8
var p=r._R(4),g=s(r.slice(r.l+f,r.l+f+h))
r.l+=f+h+d
var m=r.l
r.l=p+4,ce(r,l,c,n,g),r.l=m}return n}function ce(e,t,r,n,a){e.l+=2
var o=e._R(2),i=e._R(2),l=function(e){var t=65535&e._R(2),r=65535&e._R(2),n=new Date,a=31&r,s=15&(r>>>=5)
r>>>=4,n.setMilliseconds(0),n.setFullYear(r+1980),n.setMonth(s-1),n.setDate(a)
var o=31&t,i=63&(t>>>=5)
return t>>>=6,n.setHours(t),n.setMinutes(i),n.setSeconds(o<<1),n}(e)
if(8257&o)throw new Error("Unsupported ZIP encryption")
for(var c=e._R(4),f=e._R(4),h=e._R(4),u=e._R(2),d=e._R(2),p="",g=0;g<u;++g)p+=String.fromCharCode(e[e.l++])
if(d){var m=s(e.slice(e.l,e.l+d));(m[21589]||{}).mt&&(l=m[21589].mt),((a||{})[21589]||{}).mt&&(l=a[21589].mt)}e.l+=d
var b=e.slice(e.l,e.l+f)
switch(i){case 8:b=function(e,t){if(!E)return oe(e,t)
var r=new(0,E.InflateRaw),n=r._processChunk(e.slice(e.l),r._finishFlushFlag)
return e.l+=r.bytesRead,n}(e,h)
break
case 0:break
default:throw new Error("Unsupported ZIP Compression method "+i)}var v=!1
8&o&&(134695760==(c=e._R(4))&&(c=e._R(4),v=!0),f=e._R(4),h=e._R(4)),f!=t&&ie(v,"Bad compressed size: "+t+" != "+f),h!=r&&ie(v,"Bad uncompressed size: "+r+" != "+h)
var C=I.buf(b,0)
c!=C&&ie(v,"Bad CRC32 checksum: "+c+" != "+C),he(n,p,b,{unsafe:!0,mt:l})}function fe(e,t){var r=t||{},n=[],s=[],o=kt(1),i=r.compression?8:0,l=0
var c=0,f=0,h=0,u=0,d=e.FullPaths[0],p=d,g=e.FileIndex[0],m=[],b=0
for(c=1;c<e.FullPaths.length;++c)if(p=e.FullPaths[c].slice(d.length),(g=e.FileIndex[c]).size&&g.content&&"Sh33tJ5"!=p){var v=h,C=kt(p.length)
for(f=0;f<p.length;++f)C._W(1,127&p.charCodeAt(f))
C=C.slice(0,C.l),m[u]=I.buf(g.content,0)
var E=g.content
8==i&&(E=D(E)),(o=kt(30))._W(4,67324752),o._W(2,20),o._W(2,l),o._W(2,i),g.mt?a(o,g.mt):o._W(4,0),o._W(-4,8&l?0:m[u]),o._W(4,8&l?0:E.length),o._W(4,8&l?0:g.content.length),o._W(2,C.length),o._W(2,0),h+=o.length,n.push(o),h+=C.length,n.push(C),h+=E.length,n.push(E),8&l&&((o=kt(12))._W(-4,m[u]),o._W(4,E.length),o._W(4,g.content.length),h+=o.l,n.push(o)),(o=kt(46))._W(4,33639248),o._W(2,0),o._W(2,20),o._W(2,l),o._W(2,i),o._W(4,0),o._W(-4,m[u]),o._W(4,E.length),o._W(4,g.content.length),o._W(2,C.length),o._W(2,0),o._W(2,0),o._W(2,0),o._W(2,0),o._W(4,0),o._W(4,v),b+=o.l,s.push(o),b+=C.length,s.push(C),++u}return(o=kt(22))._W(4,101010256),o._W(2,0),o._W(2,0),o._W(2,u),o._W(2,u),o._W(4,b),o._W(4,h),o._W(2,0),_([_(n),_(s),o])}function he(e,t,r,a){var s=a&&a.unsafe
s||u(e)
var o=!s&&O.find(e,t)
if(!o){var i=e.FullPaths[0]
t.slice(0,i.length)==i?i=t:("/"!=i.slice(-1)&&(i+="/"),i=(i+t).replace("//","/")),o={name:n(t),type:2},e.FileIndex.push(o),e.FullPaths.push(i),s||O.utils.cfb_gc(e)}return o.content=r,o.size=r?r.length:0,a&&(a.CLSID&&(o.clsid=a.CLSID),a.mt&&(o.mt=a.mt),a.ct&&(o.ct=a.ct)),o}return t.find=function(e,t){var r=e.FullPaths.map(function(e){return e.toUpperCase()}),n=r.map(function(e){var t=e.split("/")
return t[t.length-("/"==e.slice(-1)?2:1)]}),a=!1
47===t.charCodeAt(0)?(a=!0,t=r[0].slice(0,-1)+t):a=-1!==t.indexOf("/")
var s=t.toUpperCase(),o=!0===a?r.indexOf(s):n.indexOf(s)
if(-1!==o)return e.FileIndex[o]
var i=!s.match(R)
for(s=s.replace(w,""),i&&(s=s.replace(R,"!")),o=0;o<r.length;++o){if((i?r[o].replace(R,"!"):r[o]).replace(w,"")==s)return e.FileIndex[o]
if((i?n[o].replace(R,"!"):n[o]).replace(w,"")==s)return e.FileIndex[o]}return null},t.read=function(t,r){switch(r&&r.type||"base64"){case"file":return function(t,r){return o(),i(e.readFileSync(t),r)}(t,r)
case"base64":return i(C(d.decode(t)),r)
case"binary":return i(C(t),r)}return i(t,r)},t.parse=i,t.write=function(t,r){var n=m(t,r)
switch(r&&r.type){case"file":return o(),e.writeFileSync(r.filename,n),n
case"binary":return y(n)
case"base64":return d.encode(y(n))}return n},t.writeFile=function(t,r,n){o()
var a=m(t,n)
e.writeFileSync(r,a)},t.utils={cfb_new:function(e){var t={}
return u(t,e),t},cfb_add:he,cfb_del:function(e,t){u(e)
var r=O.find(e,t)
if(r)for(var n=0;n<e.FileIndex.length;++n)if(e.FileIndex[n]==r)return e.FileIndex.splice(n,1),e.FullPaths.splice(n,1),!0
return!1},cfb_mov:function(e,t,r){u(e)
var a=O.find(e,t)
if(a)for(var s=0;s<e.FileIndex.length;++s)if(e.FileIndex[s]==a)return e.FileIndex[s].name=n(r),e.FullPaths[s]=r,!0
return!1},cfb_gc:function(e){g(e,!0)},ReadShift:Ct,CheckField:wt,prep_blob:Rt,bconcat:_,use_zlib:function(e){try{var t=new(0,e.InflateRaw)
if(t._processChunk(new Uint8Array([3,0]),t._finishFlushFlag),!t.bytesRead)throw new Error("zlib does not expose bytesRead")
E=e}catch(n){console.error("cannot use native zlib: "+(n.message||n))}},_deflateRaw:$,_inflateRaw:oe,consts:x},t}()
if("undefined"!=typeof require)try{D=require("fs")}catch(ef){}function F(e){return"string"==typeof e?E(e):Array.isArray(e)?function(e){if("undefined"==typeof Uint8Array)throw new Error("Unsupported")
return new Uint8Array(e)}(e):e}function P(e,t,r){if(void 0!==D&&D.writeFileSync)return r?D.writeFileSync(e,t,r):D.writeFileSync(e,t)
var n="utf8"==r?xe(t):t
if("undefined"!=typeof IE_SaveFile)return IE_SaveFile(n,e)
if("undefined"!=typeof Blob){var a=new Blob([F(n)],{type:"application/octet-stream"})
if("undefined"!=typeof navigator&&navigator.msSaveBlob)return navigator.msSaveBlob(a,e)
if("undefined"!=typeof saveAs)return saveAs(a,e)
if("undefined"!=typeof URL&&"undefined"!=typeof document&&document.createElement&&URL.createObjectURL){var s=URL.createObjectURL(a)
if("object"==typeof chrome&&"function"==typeof(chrome.downloads||{}).download)return URL.revokeObjectURL&&"undefined"!=typeof setTimeout&&setTimeout(function(){URL.revokeObjectURL(s)},6e4),chrome.downloads.download({url:s,filename:e,saveAs:!0})
var o=document.createElement("a")
if(null!=o.download)return o.download=e,o.href=s,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL&&"undefined"!=typeof setTimeout&&setTimeout(function(){URL.revokeObjectURL(s)},6e4),s}}if("undefined"!=typeof $&&"undefined"!=typeof File&&"undefined"!=typeof Folder)try{var l=File(e)
return l.open("w"),l.encoding="binary",Array.isArray(t)&&(t=S(t)),l.write(t),l.close(),t}catch(i){if(!i.message||!i.message.match(/onstruct/))throw i}throw new Error("cannot save file "+e)}function N(e){for(var t=Object.keys(e),r=[],n=0;n<t.length;++n)e.hasOwnProperty(t[n])&&r.push(t[n])
return r}function L(e,t){for(var r=[],n=N(e),a=0;a!==n.length;++a)null==r[e[n[a]][t]]&&(r[e[n[a]][t]]=n[a])
return r}function M(e){for(var t=[],r=N(e),n=0;n!==r.length;++n)t[e[r[n]]]=r[n]
return t}function W(e){for(var t=[],r=N(e),n=0;n!==r.length;++n)t[e[r[n]]]=parseInt(r[n],10)
return t}var U=new Date(1899,11,30,0,0,0),H=U.getTime()+6e4*((new Date).getTimezoneOffset()-U.getTimezoneOffset())
function V(e,t){var r=e.getTime()
return t&&(r-=1263168e5),(r-H)/864e5}function z(e){var t=new Date
return t.setTime(24*e*60*60*1e3+H),t}function X(e){var t=0,r=0,n=!1,a=e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/)
if(!a)throw new Error("|"+e+"| is not an ISO8601 Duration")
for(var s=1;s!=a.length;++s)if(a[s]){switch(r=1,s>3&&(n=!0),a[s].slice(a[s].length-1)){case"Y":throw new Error("Unsupported ISO Duration Field: "+a[s].slice(a[s].length-1))
case"D":r*=24
case"H":r*=60
case"M":if(!n)throw new Error("Unsupported ISO Duration Field: M")
r*=60}t+=r*parseInt(a[s],10)}return t}var G=new Date("2017-02-19T19:06:09.000Z")
isNaN(G.getFullYear())&&(G=new Date("2/19/17"))
var j=2017==G.getFullYear()
function K(e,t){var r=new Date(e)
if(j)return t>0?r.setTime(r.getTime()+60*r.getTimezoneOffset()*1e3):t<0&&r.setTime(r.getTime()-60*r.getTimezoneOffset()*1e3),r
if(e instanceof Date)return e
if(1917==G.getFullYear()&&!isNaN(r.getFullYear())){var n=r.getFullYear()
return e.indexOf(""+n)>-1?r:(r.setFullYear(r.getFullYear()+100),r)}var a=e.match(/\d+/g)||["2017","2","19","0","0","0"],s=new Date(+a[0],+a[1]-1,+a[2],+a[3]||0,+a[4]||0,+a[5]||0)
return e.indexOf("Z")>-1&&(s=new Date(s.getTime()-60*s.getTimezoneOffset()*1e3)),s}function Y(e){for(var t="",r=0;r!=e.length;++r)t+=String.fromCharCode(e[r])
return t}function Z(e){if("undefined"!=typeof JSON&&!Array.isArray(e))return JSON.parse(JSON.stringify(e))
if("object"!=typeof e||null==e)return e
if(e instanceof Date)return new Date(e.getTime())
var t={}
for(var r in e)e.hasOwnProperty(r)&&(t[r]=Z(e[r]))
return t}function Q(e,t){for(var r="";r.length<t;)r+=e
return r}function J(e){var t=Number(e)
if(!isNaN(t))return t
var r=1,n=e.replace(/([\d]),([\d])/g,"$1$2").replace(/[$]/g,"").replace(/[%]/g,function(){return r*=100,""})
return isNaN(t=Number(n))?(n=n.replace(/[(](.*)[)]/,function(e,t){return r=-r,t}),isNaN(t=Number(n))?t:t/r):t/r}function q(e){var t=new Date(e),r=new Date(NaN),n=t.getYear(),a=t.getMonth(),s=t.getDate()
return isNaN(s)?r:n<0||n>8099?r:(a>0||s>1)&&101!=n?t:e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)?t:e.match(/[^-0-9:,\/\\]/)?r:t}var ee,te=5=="abacaba".split(/(:?b)/i).length
function re(e){return e?e.data?f(e.data):e.asNodeBuffer&&p?f(e.asNodeBuffer().toString("binary")):e.asBinary?f(e.asBinary()):e._data&&e._data.getContent?f(Y(Array.prototype.slice.call(e._data.getContent(),0))):null:null}function ne(e){return e&&".bin"===e.name.slice(-4)?function(e){if(!e)return null
if(e.data)return c(e.data)
if(e.asNodeBuffer&&p)return e.asNodeBuffer()
if(e._data&&e._data.getContent){var t=e._data.getContent()
return"string"==typeof t?c(t):Array.prototype.slice.call(t)}return null}(e):re(e)}function ae(e,t){for(var r=N(e.files),n=t.toLowerCase(),a=n.replace(/\//g,"\\"),s=0;s<r.length;++s){var o=r[s].toLowerCase()
if(n==o||a==o)return e.files[r[s]]}return null}function se(e,t){var r=ae(e,t)
if(null==r)throw new Error("Cannot find file "+t+" in zip")
return r}function oe(e,t,r){if(!r)return ne(se(e,t))
if(!t)return null
try{return oe(e,t)}catch(n){return null}}function ie(e,t,r){if(!r)return re(se(e,t))
if(!t)return null
try{return ie(e,t)}catch(n){return null}}function le(e,t){var r=t.split("/")
"/"!=t.slice(-1)&&r.pop()
for(var n=e.split("/");0!==n.length;){var a=n.shift()
".."===a?r.pop():"."!==a&&r.push(a)}return r.join("/")}"undefined"!=typeof JSZipSync&&(ee=JSZipSync),"undefined"!=typeof exports&&"undefined"!=typeof module&&module.exports&&void 0===ee&&(ee=void 0)
var ce='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n',fe=/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g,he=/<[\/\?]?[a-zA-Z0-9:]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s?[\/\?]?>/g
ce.match(he)||(he=/<[^>]*>/g)
var ue=/<\w*:/,de=/<(\/?)\w+:/
function pe(e,t){for(var r={},n=0,a=0;n!==e.length&&(32!==(a=e.charCodeAt(n))&&10!==a&&13!==a);++n);if(t||(r[0]=e.slice(0,n)),n===e.length)return r
var s=e.match(fe),o=0,i="",l=0,c="",f="",h=1
if(s)for(l=0;l!=s.length;++l){for(f=s[l],a=0;a!=f.length&&61!==f.charCodeAt(a);++a);for(c=f.slice(0,a).trim();32==f.charCodeAt(a+1);)++a
for(h=34==(n=f.charCodeAt(a+1))||39==n?1:0,i=f.slice(a+1+h,f.length-h),o=0;o!=c.length&&58!==c.charCodeAt(o);++o);if(o===c.length)c.indexOf("_")>0&&(c=c.slice(0,c.indexOf("_"))),r[c]=i,r[c.toLowerCase()]=i
else{var u=(5===o&&"xmlns"===c.slice(0,5)?"xmlns":"")+c.slice(o+1)
if(r[u]&&"ext"==c.slice(o-3,o))continue
r[u]=i,r[u.toLowerCase()]=i}}return r}function ge(e){return e.replace(de,"<$1")}var me={"&quot;":'"',"&apos;":"'","&gt;":">","&lt;":"<","&amp;":"&"},be=M(me),ve=function(){var e=/&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g,t=/_x([\da-fA-F]{4})_/g
return function r(n){var a=n+"",s=a.indexOf("<![CDATA[")
if(-1==s)return a.replace(e,function(e,t){return me[e]||String.fromCharCode(parseInt(t,e.indexOf("x")>-1?16:10))||e}).replace(t,function(e,t){return String.fromCharCode(parseInt(t,16))})
var o=a.indexOf("]]>")
return r(a.slice(0,s))+a.slice(s+9,o)+r(a.slice(o+3))}}(),Ce=/[&<>'"]/g,Ee=/[\u0000-\u0008\u000b-\u001f]/g
function Se(e){return(e+"").replace(Ce,function(e){return be[e]}).replace(Ee,function(e){return"_x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+"_"})}function Ae(e){return Se(e).replace(/ /g,"_x0020_")}var _e=/[\u0000-\u001f]/g
function we(e){return(e+"").replace(Ce,function(e){return be[e]}).replace(/\n/g,"<br/>").replace(_e,function(e){return"&#x"+("000"+e.charCodeAt(0).toString(16)).slice(-4)+";"})}var Re=function(){var e=/&#(\d+);/g
function t(e,t){return String.fromCharCode(parseInt(t,10))}return function(r){return r.replace(e,t)}}(),Be=function(e){return e.replace(/(\r\n|[\r\n])/g,"&#10;")}
function ke(e){switch(e){case 1:case!0:case"1":case"true":case"TRUE":return!0
default:return!1}}var Te=function(e){for(var t="",r=0,n=0,a=0,s=0,o=0,i=0;r<e.length;)(n=e.charCodeAt(r++))<128?t+=String.fromCharCode(n):(a=e.charCodeAt(r++),n>191&&n<224?(o=(31&n)<<6,o|=63&a,t+=String.fromCharCode(o)):(s=e.charCodeAt(r++),n<240?t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&s):(i=((7&n)<<18|(63&a)<<12|(63&s)<<6|63&(o=e.charCodeAt(r++)))-65536,t+=String.fromCharCode(55296+(i>>>10&1023)),t+=String.fromCharCode(56320+(1023&i)))))
return t},xe=function(e){for(var t=[],r=0,n=0,a=0;r<e.length;)switch(n=e.charCodeAt(r++),!0){case n<128:t.push(String.fromCharCode(n))
break
case n<2048:t.push(String.fromCharCode(192+(n>>6))),t.push(String.fromCharCode(128+(63&n)))
break
case n>=55296&&n<57344:n-=55296,a=e.charCodeAt(r++)-56320+(n<<10),t.push(String.fromCharCode(240+(a>>18&7))),t.push(String.fromCharCode(144+(a>>12&63))),t.push(String.fromCharCode(128+(a>>6&63))),t.push(String.fromCharCode(128+(63&a)))
break
default:t.push(String.fromCharCode(224+(n>>12))),t.push(String.fromCharCode(128+(n>>6&63))),t.push(String.fromCharCode(128+(63&n)))}return t.join("")}
if(p){var ye=function(e){var t,r,n,a=Buffer.alloc(2*e.length),s=1,o=0,i=0
for(r=0;r<e.length;r+=s)s=1,(n=e.charCodeAt(r))<128?t=n:n<224?(t=64*(31&n)+(63&e.charCodeAt(r+1)),s=2):n<240?(t=4096*(15&n)+64*(63&e.charCodeAt(r+1))+(63&e.charCodeAt(r+2)),s=3):(s=4,t=262144*(7&n)+4096*(63&e.charCodeAt(r+1))+64*(63&e.charCodeAt(r+2))+(63&e.charCodeAt(r+3)),i=55296+((t-=65536)>>>10&1023),t=56320+(1023&t)),0!==i&&(a[o++]=255&i,a[o++]=i>>>8,i=0),a[o++]=t%256,a[o++]=t>>>8
return a.slice(0,o).toString("ucs2")},Ie="foo bar bazâð£"
Te(Ie)==ye(Ie)&&(Te=ye)
var De=function(e){return g(e,"binary").toString("utf8")}
Te(Ie)==De(Ie)&&(Te=De),xe=function(e){return g(e,"utf8").toString("binary")}}var Oe=function(){var e={}
return function(t,r){var n=t+"|"+(r||"")
return e[n]?e[n]:e[n]=new RegExp("<(?:\\w+:)?"+t+'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?'+t+">",r||"")}}(),Fe=function(){var e=[["nbsp"," "],["middot","·"],["quot",'"'],["apos","'"],["gt",">"],["lt","<"],["amp","&"]].map(function(e){return[new RegExp("&"+e[0]+";","g"),e[1]]})
return function(t){for(var r=t.replace(/^[\t\n\r ]+/,"").replace(/[\t\n\r ]+$/,"").replace(/[\t\n\r ]+/g," ").replace(/<\s*[bB][rR]\s*\/?>/g,"\n").replace(/<[^>]*>/g,""),n=0;n<e.length;++n)r=r.replace(e[n][0],e[n][1])
return r}}(),Pe=function(){var e={}
return function(t){return void 0!==e[t]?e[t]:e[t]=new RegExp("<(?:vt:)?"+t+">([\\s\\S]*?)</(?:vt:)?"+t+">","g")}}(),Ne=/<\/?(?:vt:)?variant>/g,Le=/<(?:vt:)([^>]*)>([\s\S]*)</
function Me(e,t){var r=pe(e),n=e.match(Pe(r.baseType))||[],a=[]
if(n.length!=r.size){if(t.WTF)throw new Error("unexpected vector length "+n.length+" != "+r.size)
return a}return n.forEach(function(e){var t=e.replace(Ne,"").match(Le)
t&&a.push({v:Te(t[2]),t:t[1]})}),a}var We=/(^\s|\s$|\n)/
function Ue(e,t){return"<"+e+(t.match(We)?' xml:space="preserve"':"")+">"+t+"</"+e+">"}function He(e){return N(e).map(function(t){return" "+t+'="'+e[t]+'"'}).join("")}function Ve(e,t,r){return"<"+e+(null!=r?He(r):"")+(null!=t?(t.match(We)?' xml:space="preserve"':"")+">"+t+"</"+e:"/")+">"}function ze(e,t){try{return e.toISOString().replace(/\.\d*/,"")}catch(r){if(t)throw r}return""}var Xe={dc:"http://purl.org/dc/elements/1.1/",dcterms:"http://purl.org/dc/terms/",dcmitype:"http://purl.org/dc/dcmitype/",mx:"http://schemas.microsoft.com/office/mac/excel/2008/main",r:"http://schemas.openxmlformats.org/officeDocument/2006/relationships",sjs:"http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",vt:"http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",xsd:"http://www.w3.org/2001/XMLSchema",main:["http://schemas.openxmlformats.org/spreadsheetml/2006/main","http://purl.oclc.org/ooxml/spreadsheetml/main","http://schemas.microsoft.com/office/excel/2006/main","http://schemas.microsoft.com/office/excel/2006/2"]},Ge={o:"urn:schemas-microsoft-com:office:office",x:"urn:schemas-microsoft-com:office:excel",ss:"urn:schemas-microsoft-com:office:spreadsheet",dt:"uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",mv:"http://macVmlSchemaUri",v:"urn:schemas-microsoft-com:vml",html:"http://www.w3.org/TR/REC-html40"}
var je,Ke,Ye=function(e){for(var t=[],r=0;r<e[0].length;++r)if(e[0][r])for(var n=0,a=e[0][r].length;n<a;n+=10240)t.push.apply(t,e[0][r].slice(n,n+10240))
return t},$e=Ye,Ze=function(e,t,r){for(var n=[],a=t;a<r;a+=2)n.push(String.fromCharCode(pt(e,a)))
return n.join("").replace(w,"")},Qe=Ze,Je=function(e,t,r){for(var n=[],a=t;a<t+r;++a)n.push(("0"+e[a].toString(16)).slice(-2))
return n.join("")},qe=Je,et=function(e,t,r){for(var n=[],a=t;a<r;a++)n.push(String.fromCharCode(dt(e,a)))
return n.join("")},tt=et,rt=function(e,t){var r=mt(e,t)
return r>0?et(e,t+4,t+4+r-1):""},nt=rt,at=function(e,t){var r=mt(e,t)
return r>0?et(e,t+4,t+4+r-1):""},st=at,ot=function(e,t){var r=2*mt(e,t)
return r>0?et(e,t+4,t+4+r-1):""},it=ot
je=Ke=function(e,t){var r=mt(e,t)
return r>0?Ze(e,t+4,t+4+r):""}
var lt,ct,ft=function(e,t){var r=mt(e,t)
return r>0?et(e,t+4,t+4+r):""},ht=ft
lt=ct=function(e,t){return function(e,t){for(var r=1-2*(e[t+7]>>>7),n=((127&e[t+7])<<4)+(e[t+6]>>>4&15),a=15&e[t+6],s=5;s>=0;--s)a=256*a+e[t+s]
return 2047==n?0==a?r*(1/0):NaN:(0==n?n=-1022:(n-=1023,a+=Math.pow(2,52)),r*Math.pow(2,n-52)*a)}(e,t)}
var ut=function(e){return Array.isArray(e)}
p&&(Ze=function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf16le",t,r).replace(w,""):Qe(e,t,r)},Je=function(e,t,r){return Buffer.isBuffer(e)?e.toString("hex",t,t+r):qe(e,t,r)},rt=function(e,t){if(!Buffer.isBuffer(e))return nt(e,t)
var r=e.readUInt32LE(t)
return r>0?e.toString("utf8",t+4,t+4+r-1):""},at=function(e,t){if(!Buffer.isBuffer(e))return st(e,t)
var r=e.readUInt32LE(t)
return r>0?e.toString("utf8",t+4,t+4+r-1):""},ot=function(e,t){if(!Buffer.isBuffer(e))return it(e,t)
var r=2*e.readUInt32LE(t)
return e.toString("utf16le",t+4,t+4+r-1)},je=function(e,t){if(!Buffer.isBuffer(e))return Ke(e,t)
var r=e.readUInt32LE(t)
return e.toString("utf16le",t+4,t+4+r)},ft=function(e,t){if(!Buffer.isBuffer(e))return ht(e,t)
var r=e.readUInt32LE(t)
return e.toString("utf8",t+4,t+4+r)},et=function(e,t,r){return Buffer.isBuffer(e)?e.toString("utf8",t,r):tt(e,t,r)},Ye=function(e){return e[0].length>0&&Buffer.isBuffer(e[0][0])?Buffer.concat(e[0]):$e(e)},_=function(e){return Buffer.isBuffer(e[0])?Buffer.concat(e):[].concat.apply([],e)},lt=function(e,t){return Buffer.isBuffer(e)?e.readDoubleLE(t):ct(e,t)},ut=function(e){return Buffer.isBuffer(e)||Array.isArray(e)}),void 0!==cptable&&(Ze=function(e,t,r){return cptable.utils.decode(1200,e.slice(t,r)).replace(w,"")},et=function(e,t,r){return cptable.utils.decode(65001,e.slice(t,r))},rt=function(e,t){var n=mt(e,t)
return n>0?cptable.utils.decode(r,e.slice(t+4,t+4+n-1)):""},at=function(e,r){var n=mt(e,r)
return n>0?cptable.utils.decode(t,e.slice(r+4,r+4+n-1)):""},ot=function(e,t){var r=2*mt(e,t)
return r>0?cptable.utils.decode(1200,e.slice(t+4,t+4+r-1)):""},je=function(e,t){var r=mt(e,t)
return r>0?cptable.utils.decode(1200,e.slice(t+4,t+4+r)):""},ft=function(e,t){var r=mt(e,t)
return r>0?cptable.utils.decode(65001,e.slice(t+4,t+4+r)):""})
var dt=function(e,t){return e[t]},pt=function(e,t){return 256*e[t+1]+e[t]},gt=function(e,t){var r=256*e[t+1]+e[t]
return r<32768?r:-1*(65535-r+1)},mt=function(e,t){return e[t+3]*(1<<24)+(e[t+2]<<16)+(e[t+1]<<8)+e[t]},bt=function(e,t){return e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]},vt=function(e,t){return e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}
function Ct(e,r){var n,a,s,o,i,l,c="",f=[]
switch(r){case"dbcs":if(l=this.l,p&&Buffer.isBuffer(this))c=this.slice(this.l,this.l+2*e).toString("utf16le")
else for(i=0;i<e;++i)c+=String.fromCharCode(pt(this,l)),l+=2
e*=2
break
case"utf8":c=et(this,this.l,this.l+e)
break
case"utf16le":e*=2,c=Ze(this,this.l,this.l+e)
break
case"wstr":if(void 0===cptable)return Ct.call(this,e,"dbcs")
c=cptable.utils.decode(t,this.slice(this.l,this.l+2*e)),e*=2
break
case"lpstr-ansi":c=rt(this,this.l),e=4+mt(this,this.l)
break
case"lpstr-cp":c=at(this,this.l),e=4+mt(this,this.l)
break
case"lpwstr":c=ot(this,this.l),e=4+2*mt(this,this.l)
break
case"lpp4":e=4+mt(this,this.l),c=je(this,this.l),2&e&&(e+=2)
break
case"8lpp4":e=4+mt(this,this.l),c=ft(this,this.l),3&e&&(e+=4-(3&e))
break
case"cstr":for(e=0,c="";0!==(s=dt(this,this.l+e++));)f.push(h(s))
c=f.join("")
break
case"_wstr":for(e=0,c="";0!==(s=pt(this,this.l+e));)f.push(h(s)),e+=2
e+=2,c=f.join("")
break
case"dbcs-cont":for(c="",l=this.l,i=0;i<e;++i){if(this.lens&&-1!==this.lens.indexOf(l))return s=dt(this,l),this.l=l+1,o=Ct.call(this,e-i,s?"dbcs-cont":"sbcs-cont"),f.join("")+o
f.push(h(pt(this,l))),l+=2}c=f.join(""),e*=2
break
case"cpstr":if(void 0!==cptable){c=cptable.utils.decode(t,this.slice(this.l,this.l+e))
break}case"sbcs-cont":for(c="",l=this.l,i=0;i!=e;++i){if(this.lens&&-1!==this.lens.indexOf(l))return s=dt(this,l),this.l=l+1,o=Ct.call(this,e-i,s?"dbcs-cont":"sbcs-cont"),f.join("")+o
f.push(h(dt(this,l))),l+=1}c=f.join("")
break
default:switch(e){case 1:return n=dt(this,this.l),this.l++,n
case 2:return n=("i"===r?gt:pt)(this,this.l),this.l+=2,n
case 4:case-4:return"i"===r||0==(128&this[this.l+3])?(n=(e>0?bt:vt)(this,this.l),this.l+=4,n):(a=mt(this,this.l),this.l+=4,a)
case 8:case-8:if("f"===r)return a=8==e?lt(this,this.l):lt([this[this.l+7],this[this.l+6],this[this.l+5],this[this.l+4],this[this.l+3],this[this.l+2],this[this.l+1],this[this.l+0]],0),this.l+=8,a
e=8
case 16:c=Je(this,this.l,e)}}return this.l+=e,c}var Et=function(e,t,r){e[r]=255&t,e[r+1]=t>>>8&255,e[r+2]=t>>>16&255,e[r+3]=t>>>24&255},St=function(e,t,r){e[r]=255&t,e[r+1]=t>>8&255,e[r+2]=t>>16&255,e[r+3]=t>>24&255},At=function(e,t,r){e[r]=255&t,e[r+1]=t>>>8&255}
function _t(e,t,r){var n=0,a=0
if("dbcs"===r){for(a=0;a!=t.length;++a)At(this,t.charCodeAt(a),this.l+2*a)
n=2*t.length}else if("sbcs"===r){for(t=t.replace(/[^\x00-\x7F]/g,"_"),a=0;a!=t.length;++a)this[this.l+a]=255&t.charCodeAt(a)
n=t.length}else{if("hex"===r){for(;a<e;++a)this[this.l++]=parseInt(t.slice(2*a,2*a+2),16)||0
return this}if("utf16le"===r){var s=Math.min(this.l+e,this.length)
for(a=0;a<Math.min(t.length,e);++a){var o=t.charCodeAt(a)
this[this.l++]=255&o,this[this.l++]=o>>8}for(;this.l<s;)this[this.l++]=0
return this}switch(e){case 1:n=1,this[this.l]=255&t
break
case 2:n=2,this[this.l]=255&t,t>>>=8,this[this.l+1]=255&t
break
case 3:n=3,this[this.l]=255&t,t>>>=8,this[this.l+1]=255&t,t>>>=8,this[this.l+2]=255&t
break
case 4:n=4,Et(this,t,this.l)
break
case 8:if(n=8,"f"===r){(function(e,t,r){var n=(t<0||1/t==-1/0?1:0)<<7,a=0,s=0,o=n?-t:t
isFinite(o)?0==o?a=s=0:(a=Math.floor(Math.log(o)/Math.LN2),s=o*Math.pow(2,52-a),a<=-1023&&(!isFinite(s)||s<Math.pow(2,52))?a=-1022:(s-=Math.pow(2,52),a+=1023)):(a=2047,s=isNaN(t)?26985:0)
for(var i=0;i<=5;++i,s/=256)e[r+i]=255&s
e[r+6]=(15&a)<<4|15&s,e[r+7]=a>>4|n})(this,t,this.l)
break}case 16:break
case-4:n=4,St(this,t,this.l)}}return this.l+=n,this}function wt(e,t){var r=Je(this,this.l,e.length>>1)
if(r!==e)throw new Error(t+"Expected "+e+" saw "+r)
this.l+=e.length>>1}function Rt(e,t){e.l=t,e._R=Ct,e.chk=wt,e._W=_t}function Bt(e,t){e.l+=t}function kt(e){var t=b(e)
return Rt(t,0),t}function Tt(e,t,r){if(e){var n,a,s
Rt(e,e.l||0)
for(var o=e.length,i=0,l=0;e.l<o;){128&(i=e._R(1))&&(i=(127&i)+((127&e._R(1))<<7))
var c=Kl[i]||Kl[65535]
for(s=127&(n=e._R(1)),a=1;a<4&&128&n;++a)s+=(127&(n=e._R(1)))<<7*a
l=e.l+s
var f=(c.f||Bt)(e,s,r)
if(e.l=l,t(f,c.n,i))return}}}function xt(){var e=[],t=p?256:2048,r=function(e){var t=kt(e)
return Rt(t,0),t},n=r(t),a=function(){n&&(n.length>n.l&&((n=n.slice(0,n.l)).l=n.length),n.length>0&&e.push(n),n=null)},s=function(e){return n&&e<n.length-n.l?n:(a(),n=r(Math.max(e+1,t)))}
return{next:s,push:function(e){a(),null==(n=e).l&&(n.l=n.length),s(t)},end:function(){return a(),Ye([e])},_bufs:e}}function yt(e,t,r,n){var a,s=+Yl[t]
if(!isNaN(s)){n||(n=Kl[s].p||(r||[]).length||0),a=1+(s>=128?1:0)+1,n>=128&&++a,n>=16384&&++a,n>=2097152&&++a
var o=e.next(a)
s<=127?o._W(1,s):(o._W(1,128+(127&s)),o._W(1,s>>7))
for(var i=0;4!=i;++i){if(!(n>=128)){o._W(1,n)
break}o._W(1,128+(127&n)),n>>=7}n>0&&ut(r)&&e.push(r)}}function It(e,t,r){var n=Z(e)
if(t.s?(n.cRel&&(n.c+=t.s.c),n.rRel&&(n.r+=t.s.r)):(n.cRel&&(n.c+=t.c),n.rRel&&(n.r+=t.r)),!r||r.biff<12){for(;n.c>=256;)n.c-=256
for(;n.r>=65536;)n.r-=65536}return n}function Dt(e,t,r){var n=Z(e)
return n.s=It(n.s,t.s,r),n.e=It(n.e,t.s,r),n}function Ot(e,t){e.cRel&&e.c<0&&((e=Z(e)).c+=t>8?16384:256),e.rRel&&e.r<0&&((e=Z(e)).r+=t>8?1048576:t>5?65536:16384)
var r=Ht(e)
return 0===e.cRel&&(r=function(e){return e.replace(/^([A-Z])/,"$$$1")}(r)),0===e.rRel&&(r=function(e){return e.replace(/([A-Z]|^)(\d+)$/,"$1$$$2")}(r)),r}function Ft(e,t){return 0!=e.s.r||e.s.rRel||e.e.r!=(t.biff>=12?1048575:t.biff>=8?65536:16384)||e.e.rRel?0!=e.s.c||e.s.cRel||e.e.c!=(t.biff>=12?65535:255)||e.e.cRel?Ot(e.s,t.biff)+":"+Ot(e.e,t.biff):(e.s.rRel?"":"$")+Nt(e.s.r)+":"+(e.e.rRel?"":"$")+Nt(e.e.r):(e.s.cRel?"":"$")+Mt(e.s.c)+":"+(e.e.cRel?"":"$")+Mt(e.e.c)}function Pt(e){return parseInt(function(e){return e.replace(/\$(\d+)$/,"$1")}(e),10)-1}function Nt(e){return""+(e+1)}function Lt(e){for(var t=function(e){return e.replace(/^\$([A-Z])/,"$1")}(e),r=0,n=0;n!==t.length;++n)r=26*r+t.charCodeAt(n)-64
return r-1}function Mt(e){var t=""
for(++e;e;e=Math.floor((e-1)/26))t=String.fromCharCode((e-1)%26+65)+t
return t}function Wt(e){return e.replace(/(\$?[A-Z]*)(\$?\d*)/,"$1,$2").split(",")}function Ut(e){var t=Wt(e)
return{c:Lt(t[0]),r:Pt(t[1])}}function Ht(e){return Mt(e.c)+Nt(e.r)}function Vt(e){var t=e.split(":").map(Ut)
return{s:t[0],e:t[t.length-1]}}function zt(e,t){return void 0===t||"number"==typeof t?zt(e.s,e.e):("string"!=typeof e&&(e=Ht(e)),"string"!=typeof t&&(t=Ht(t)),e==t?e:e+":"+t)}function Xt(e){var t={s:{c:0,r:0},e:{c:0,r:0}},r=0,n=0,a=0,s=e.length
for(r=0;n<s&&!((a=e.charCodeAt(n)-64)<1||a>26);++n)r=26*r+a
for(t.s.c=--r,r=0;n<s&&!((a=e.charCodeAt(n)-48)<0||a>9);++n)r=10*r+a
if(t.s.r=--r,n===s||58===e.charCodeAt(++n))return t.e.c=t.s.c,t.e.r=t.s.r,t
for(r=0;n!=s&&!((a=e.charCodeAt(n)-64)<1||a>26);++n)r=26*r+a
for(t.e.c=--r,r=0;n!=s&&!((a=e.charCodeAt(n)-48)<0||a>9);++n)r=10*r+a
return t.e.r=--r,t}function Gt(e,t){var r="d"==e.t&&t instanceof Date
if(null!=e.z)try{return e.w=B.format(e.z,r?V(t):t)}catch(n){}try{return e.w=B.format((e.XF||{}).numFmtId||(r?14:0),r?V(t):t)}catch(n){return""+t}}function jt(e,t,r){return null==e||null==e.t||"z"==e.t?"":void 0!==e.w?e.w:("d"==e.t&&!e.z&&r&&r.dateNF&&(e.z=r.dateNF),Gt(e,null==t?e.v:t))}function Kt(e,t){var r=t&&t.sheet?t.sheet:"Sheet1",n={}
return n[r]=e,{SheetNames:[r],Sheets:n}}function Yt(e,t,r){var n=r||{},a=e?Array.isArray(e):n.dense
null!=u&&null==a&&(a=u)
var s=e||(a?[]:{}),o=0,i=0
if(s&&null!=n.origin)if("number"==typeof n.origin)o=n.origin
else{var l="string"==typeof n.origin?Ut(n.origin):n.origin
o=l.r,i=l.c}var c={s:{c:1e7,r:1e7},e:{c:0,r:0}}
if(s["!ref"]){var f=Xt(s["!ref"])
c.s.c=f.s.c,c.s.r=f.s.r,c.e.c=Math.max(c.e.c,f.e.c),c.e.r=Math.max(c.e.r,f.e.r),-1==o&&(c.e.r=o=f.e.r+1)}for(var h=0;h!=t.length;++h)if(t[h]){if(!Array.isArray(t[h]))throw new Error("aoa_to_sheet expects an array of arrays")
for(var d=0;d!=t[h].length;++d)if(void 0!==t[h][d]){var p={v:t[h][d]},g=o+h,m=i+d
if(c.s.r>g&&(c.s.r=g),c.s.c>m&&(c.s.c=m),c.e.r<g&&(c.e.r=g),c.e.c<m&&(c.e.c=m),!t[h][d]||"object"!=typeof t[h][d]||Array.isArray(t[h][d])||t[h][d]instanceof Date)if(Array.isArray(p.v)&&(p.f=t[h][d][1],p.v=p.v[0]),null===p.v)if(p.f)p.t="n"
else{if(!n.cellStubs)continue
p.t="z"}else"number"==typeof p.v?p.t="n":"boolean"==typeof p.v?p.t="b":p.v instanceof Date?(p.z=n.dateNF||B._table[14],n.cellDates?(p.t="d",p.w=B.format(p.z,V(p.v))):(p.t="n",p.v=V(p.v),p.w=B.format(p.z,p.v))):p.t="s"
else p=t[h][d]
if(a)s[g]||(s[g]=[]),s[g][m]=p
else s[Ht({c:m,r:g})]=p}}return c.s.c<1e7&&(s["!ref"]=zt(c)),s}function $t(e,t){return Yt(null,e,t)}function Zt(e,t){return t||(t=kt(4)),t._W(4,e),t}function Qt(e){var t=e._R(4)
return 0===t?"":e._R(t,"dbcs")}function Jt(e,t){var r=!1
return null==t&&(r=!0,t=kt(4+2*e.length)),t._W(4,e.length),e.length>0&&t._W(0,e,"dbcs"),r?t.slice(0,t.l):t}function qt(e){return{ich:e._R(2),ifnt:e._R(2)}}function er(e,t){var r=e.l,n=e._R(1),a=Qt(e),s=[],o={t:a,h:a}
if(0!=(1&n)){for(var i=e._R(4),l=0;l!=i;++l)s.push(qt(e))
o.r=s}else o.r=[{ich:0,ifnt:0}]
return e.l=r+t,o}(function(e,t){var r
if(void 0!==t)r=t
else if("undefined"!=typeof require)try{r=void 0}catch(n){r=null}e.rc4=function(e,t){var r=new Array(256),n=0,a=0,s=0,o=0
for(a=0;256!=a;++a)r[a]=a
for(a=0;256!=a;++a)s=s+r[a]+e[a%e.length].charCodeAt(0)&255,o=r[a],r[a]=r[s],r[s]=o
a=s=0
var i=Buffer(t.length)
for(n=0;n!=t.length;++n)s=(s+r[a=a+1&255])%256,o=r[a],r[a]=r[s],r[s]=o,i[n]=t[n]^r[r[a]+r[s]&255]
return i},e.md5=function(e){if(!r)throw new Error("Unsupported crypto")
return r.createHash("md5").update(e).digest("hex")}})({},"undefined"!=typeof crypto?crypto:void 0)
var tr=er
function rr(e,t){var r=!1
return null==t&&(r=!0,t=kt(23+4*e.t.length)),t._W(1,1),Jt(e.t,t),t._W(4,1),function(e,t){t||(t=kt(4)),t._W(2,e.ich||0),t._W(2,e.ifnt||0)}({ich:0,ifnt:0},t),r?t.slice(0,t.l):t}function nr(e){var t=e._R(4),r=e._R(2)
return r+=e._R(1)<<16,e.l++,{c:t,iStyleRef:r}}function ar(e,t){return null==t&&(t=kt(8)),t._W(-4,e.c),t._W(3,e.iStyleRef||e.s),t._W(1,0),t}var sr=Qt,or=Jt
function ir(e){var t=e._R(4)
return 0===t||4294967295===t?"":e._R(t,"dbcs")}function lr(e,t){var r=!1
return null==t&&(r=!0,t=kt(127)),t._W(4,e.length>0?e.length:4294967295),e.length>0&&t._W(0,e,"dbcs"),r?t.slice(0,t.l):t}var cr=Qt,fr=ir,hr=lr
function ur(e){var t=e.slice(e.l,e.l+4),r=1&t[0],n=2&t[0]
e.l+=4,t[0]&=252
var a=0===n?lt([0,0,0,0,t[0],t[1],t[2],t[3]],0):bt(t,0)>>2
return r?a/100:a}function dr(e){var t={s:{},e:{}}
return t.s.r=e._R(4),t.e.r=e._R(4),t.s.c=e._R(4),t.e.c=e._R(4),t}var pr=dr,gr=function(e,t){return t||(t=kt(16)),t._W(4,e.s.r),t._W(4,e.e.r),t._W(4,e.s.c),t._W(4,e.e.c),t}
function mr(e){return e._R(8,"f")}function br(e,t){return(t||kt(8))._W(8,e,"f")}var vr={0:"#NULL!",7:"#DIV/0!",15:"#VALUE!",23:"#REF!",29:"#NAME?",36:"#NUM!",42:"#N/A",43:"#GETTING_DATA",255:"#WTF?"},Cr=W(vr)
function Er(e,t){if(t||(t=kt(8)),!e||e.auto)return t._W(4,0),t._W(4,0),t
e.index?(t._W(1,2),t._W(1,e.index)):e.theme?(t._W(1,6),t._W(1,e.theme)):(t._W(1,5),t._W(1,0))
var r=e.tint||0
if(r>0?r*=32767:r<0&&(r*=32768),t._W(2,r),e.rgb){var n=e.rgb||"FFFFFF"
t._W(1,parseInt(n.slice(0,2),16)),t._W(1,parseInt(n.slice(2,4),16)),t._W(1,parseInt(n.slice(4,6),16)),t._W(1,255)}else t._W(2,0),t._W(1,0),t._W(1,0)
return t}function Sr(e,t){var r=e._R(4)
switch(r){case 0:return""
case 4294967295:case 4294967294:return{2:"BITMAP",3:"METAFILEPICT",8:"DIB",14:"ENHMETAFILE"}[e._R(4)]||""}if(r>400)throw new Error("Unsupported Clipboard: "+r.toString(16))
return e.l-=4,e._R(0,1==t?"lpstr":"lpwstr")}var Ar=2,_r=3,wr=12,Rr=81,Br=[80,Rr],kr={1:{n:"CodePage",t:Ar},2:{n:"Category",t:80},3:{n:"PresentationFormat",t:80},4:{n:"ByteCount",t:_r},5:{n:"LineCount",t:_r},6:{n:"ParagraphCount",t:_r},7:{n:"SlideCount",t:_r},8:{n:"NoteCount",t:_r},9:{n:"HiddenCount",t:_r},10:{n:"MultimediaClipCount",t:_r},11:{n:"ScaleCrop",t:11},12:{n:"HeadingPairs",t:4096|wr},13:{n:"TitlesOfParts",t:4126},14:{n:"Manager",t:80},15:{n:"Company",t:80},16:{n:"LinksUpToDate",t:11},17:{n:"CharacterCount",t:_r},19:{n:"SharedDoc",t:11},22:{n:"HyperlinksChanged",t:11},23:{n:"AppVersion",t:_r,p:"version"},24:{n:"DigSig",t:65},26:{n:"ContentType",t:80},27:{n:"ContentStatus",t:80},28:{n:"Language",t:80},29:{n:"Version",t:80},255:{}},Tr={1:{n:"CodePage",t:Ar},2:{n:"Title",t:80},3:{n:"Subject",t:80},4:{n:"Author",t:80},5:{n:"Keywords",t:80},6:{n:"Comments",t:80},7:{n:"Template",t:80},8:{n:"LastAuthor",t:80},9:{n:"RevNumber",t:80},10:{n:"EditTime",t:64},11:{n:"LastPrinted",t:64},12:{n:"CreatedDate",t:64},13:{n:"ModifiedDate",t:64},14:{n:"PageCount",t:_r},15:{n:"WordCount",t:_r},16:{n:"CharCount",t:_r},17:{n:"Thumbnail",t:71},18:{n:"Application",t:80},19:{n:"DocSecurity",t:_r},255:{}},xr={2147483648:{n:"Locale",t:19},2147483651:{n:"Behavior",t:19},1919054434:{}};(function(){for(var e in xr)xr.hasOwnProperty(e)&&(kr[e]=Tr[e]=xr[e])})()
var yr=L(kr,"n"),Ir=L(Tr,"n"),Dr={1:"US",2:"CA",3:"",7:"RU",20:"EG",30:"GR",31:"NL",32:"BE",33:"FR",34:"ES",36:"HU",39:"IT",41:"CH",43:"AT",44:"GB",45:"DK",46:"SE",47:"NO",48:"PL",49:"DE",52:"MX",55:"BR",61:"AU",64:"NZ",66:"TH",81:"JP",82:"KR",84:"VN",86:"CN",90:"TR",105:"JS",213:"DZ",216:"MA",218:"LY",351:"PT",354:"IS",358:"FI",420:"CZ",886:"TW",961:"LB",962:"JO",963:"SY",964:"IQ",965:"KW",966:"SA",971:"AE",972:"IL",974:"QA",981:"IR",65535:"US"},Or=[null,"solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"]
var Fr=function(e){return e.map(function(e){return[e>>16&255,e>>8&255,255&e]})}([0,16777215,16711680,65280,255,16776960,16711935,65535,0,16777215,16711680,65280,255,16776960,16711935,65535,8388608,32768,128,8421376,8388736,32896,12632256,8421504,10066431,10040166,16777164,13434879,6684774,16744576,26316,13421823,128,16711935,16776960,65535,8388736,8388608,32896,255,52479,13434879,13434828,16777113,10079487,16751052,13408767,16764057,3368703,3394764,10079232,16763904,16750848,16737792,6710937,9868950,13158,3381606,13056,3355392,10040064,10040166,3355545,3355443,16777215,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),Pr={"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":"workbooks","application/vnd.ms-excel.binIndexWs":"TODO","application/vnd.ms-excel.intlmacrosheet":"TODO","application/vnd.ms-excel.binIndexMs":"TODO","application/vnd.openxmlformats-package.core-properties+xml":"coreprops","application/vnd.openxmlformats-officedocument.custom-properties+xml":"custprops","application/vnd.openxmlformats-officedocument.extended-properties+xml":"extprops","application/vnd.openxmlformats-officedocument.customXmlProperties+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":"TODO","application/vnd.ms-excel.pivotTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":"TODO","application/vnd.ms-office.chartcolorstyle+xml":"TODO","application/vnd.ms-office.chartstyle+xml":"TODO","application/vnd.ms-excel.calcChain":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":"calcchains","application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":"TODO","application/vnd.ms-office.activeX":"TODO","application/vnd.ms-office.activeX+xml":"TODO","application/vnd.ms-excel.attachedToolbars":"TODO","application/vnd.ms-excel.connections":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":"TODO","application/vnd.ms-excel.externalLink":"links","application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":"links","application/vnd.ms-excel.sheetMetadata":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":"TODO","application/vnd.ms-excel.pivotCacheDefinition":"TODO","application/vnd.ms-excel.pivotCacheRecords":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":"TODO","application/vnd.ms-excel.queryTable":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":"TODO","application/vnd.ms-excel.userNames":"TODO","application/vnd.ms-excel.revisionHeaders":"TODO","application/vnd.ms-excel.revisionLog":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":"TODO","application/vnd.ms-excel.tableSingleCells":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":"TODO","application/vnd.ms-excel.slicer":"TODO","application/vnd.ms-excel.slicerCache":"TODO","application/vnd.ms-excel.slicer+xml":"TODO","application/vnd.ms-excel.slicerCache+xml":"TODO","application/vnd.ms-excel.wsSortMap":"TODO","application/vnd.ms-excel.table":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":"TODO","application/vnd.openxmlformats-officedocument.theme+xml":"themes","application/vnd.openxmlformats-officedocument.themeOverride+xml":"TODO","application/vnd.ms-excel.Timeline+xml":"TODO","application/vnd.ms-excel.TimelineCache+xml":"TODO","application/vnd.ms-office.vbaProject":"vba","application/vnd.ms-office.vbaProjectSignature":"vba","application/vnd.ms-office.volatileDependencies":"TODO","application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":"TODO","application/vnd.ms-excel.controlproperties+xml":"TODO","application/vnd.openxmlformats-officedocument.model+data":"TODO","application/vnd.ms-excel.Survey+xml":"TODO","application/vnd.openxmlformats-officedocument.drawing+xml":"drawings","application/vnd.openxmlformats-officedocument.drawingml.chart+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":"TODO","application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":"TODO","application/vnd.openxmlformats-officedocument.vmlDrawing":"TODO","application/vnd.openxmlformats-package.relationships+xml":"rels","application/vnd.openxmlformats-officedocument.oleObject":"TODO","image/png":"TODO",sheet:"js"},Nr=function(){var e={workbooks:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",xlsm:"application/vnd.ms-excel.sheet.macroEnabled.main+xml",xlsb:"application/vnd.ms-excel.sheet.binary.macroEnabled.main",xlam:"application/vnd.ms-excel.addin.macroEnabled.main+xml",xltx:"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"},strs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",xlsb:"application/vnd.ms-excel.sharedStrings"},comments:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",xlsb:"application/vnd.ms-excel.comments"},sheets:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",xlsb:"application/vnd.ms-excel.worksheet"},charts:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",xlsb:"application/vnd.ms-excel.chartsheet"},dialogs:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",xlsb:"application/vnd.ms-excel.dialogsheet"},macros:{xlsx:"application/vnd.ms-excel.macrosheet+xml",xlsb:"application/vnd.ms-excel.macrosheet"},styles:{xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",xlsb:"application/vnd.ms-excel.styles"}}
return N(e).forEach(function(t){["xlsm","xlam"].forEach(function(r){e[t][r]||(e[t][r]=e[t].xlsx)})}),N(e).forEach(function(t){N(e[t]).forEach(function(r){Pr[e[t][r]]=t})}),e}(),Lr=function(e){for(var t=[],r=N(e),n=0;n!==r.length;++n)null==t[e[r[n]]]&&(t[e[r[n]]]=[]),t[e[r[n]]].push(r[n])
return t}(Pr)
Xe.CT="http://schemas.openxmlformats.org/package/2006/content-types"
var Mr=Ve("Types",null,{xmlns:Xe.CT,"xmlns:xsd":Xe.xsd,"xmlns:xsi":Xe.xsi}),Wr=[["xml","application/xml"],["bin","application/vnd.ms-excel.sheet.binary.macroEnabled.main"],["vml","application/vnd.openxmlformats-officedocument.vmlDrawing"],["bmp","image/bmp"],["png","image/png"],["gif","image/gif"],["emf","image/x-emf"],["wmf","image/x-wmf"],["jpg","image/jpeg"],["jpeg","image/jpeg"],["tif","image/tiff"],["tiff","image/tiff"],["pdf","application/pdf"],["rels",Lr.rels[0]]].map(function(e){return Ve("Default",null,{Extension:e[0],ContentType:e[1]})})
var Ur={WB:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",SHEET:"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",HLINK:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",VML:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",VBA:"http://schemas.microsoft.com/office/2006/relationships/vbaProject"}
function Hr(e){var t=e.lastIndexOf("/")
return e.slice(0,t+1)+"_rels/"+e.slice(t+1)+".rels"}function Vr(e,t){if(!e)return e
"/"!==t.charAt(0)&&(t="/"+t)
var r={},n={}
return(e.match(he)||[]).forEach(function(e){var a=pe(e)
if("<Relationship"===a[0]){var s={}
s.Type=a.Type,s.Target=a.Target,s.Id=a.Id,s.TargetMode=a.TargetMode
var o="External"===a.TargetMode?a.Target:le(a.Target,t)
r[o]=s,n[a.Id]=s}}),r["!id"]=n,r}Xe.RELS="http://schemas.openxmlformats.org/package/2006/relationships"
var zr=Ve("Relationships",null,{xmlns:Xe.RELS})
function Xr(e){var t=[ce,zr]
return N(e["!id"]).forEach(function(r){t[t.length]=Ve("Relationship",null,e["!id"][r])}),t.length>2&&(t[t.length]="</Relationships>",t[1]=t[1].replace("/>",">")),t.join("")}function Gr(e,t,r,n,a){if(a||(a={}),e["!id"]||(e["!id"]={}),t<0)for(t=1;e["!id"]["rId"+t];++t);if(a.Id="rId"+t,a.Type=n,a.Target=r,a.Type==Ur.HLINK&&(a.TargetMode="External"),e["!id"][a.Id])throw new Error("Cannot rewrite rId "+t)
return e["!id"][a.Id]=a,e[("/"+a.Target).replace("//","/")]=a,t}var jr="application/vnd.oasis.opendocument.spreadsheet"
function Kr(e,t,r){return['  <rdf:Description rdf:about="'+e+'">\n','    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/'+(r||"odf")+"#"+t+'"/>\n',"  </rdf:Description>\n"].join("")}function Yr(e,t){return['  <rdf:Description rdf:about="'+e+'">\n','    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="'+t+'"/>\n',"  </rdf:Description>\n"].join("")}var $r=function(){var t='<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>SheetJS '+e.version+"</meta:generator></office:meta></office:document-meta>"
return function(){return t}}(),Zr=[["cp:category","Category"],["cp:contentStatus","ContentStatus"],["cp:keywords","Keywords"],["cp:lastModifiedBy","LastAuthor"],["cp:lastPrinted","LastPrinted"],["cp:revision","RevNumber"],["cp:version","Version"],["dc:creator","Author"],["dc:description","Comments"],["dc:identifier","Identifier"],["dc:language","Language"],["dc:subject","Subject"],["dc:title","Title"],["dcterms:created","CreatedDate","date"],["dcterms:modified","ModifiedDate","date"]]
Xe.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/metadata/core-properties",Ur.CORE_PROPS="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties"
var Qr=function(){for(var e=new Array(Zr.length),t=0;t<Zr.length;++t){var r=Zr[t],n="(?:"+r[0].slice(0,r[0].indexOf(":"))+":)"+r[0].slice(r[0].indexOf(":")+1)
e[t]=new RegExp("<"+n+"[^>]*>([\\s\\S]*?)</"+n+">")}return e}()
function Jr(e){var t={}
e=Te(e)
for(var r=0;r<Zr.length;++r){var n=Zr[r],a=e.match(Qr[r])
null!=a&&a.length>0&&(t[n[1]]=a[1]),"date"===n[2]&&t[n[1]]&&(t[n[1]]=K(t[n[1]]))}return t}var qr=Ve("cp:coreProperties",null,{"xmlns:cp":Xe.CORE_PROPS,"xmlns:dc":Xe.dc,"xmlns:dcterms":Xe.dcterms,"xmlns:dcmitype":Xe.dcmitype,"xmlns:xsi":Xe.xsi})
function en(e,t,r,n,a){null==a[e]&&null!=t&&""!==t&&(a[e]=t,n[n.length]=r?Ve(e,t,r):Ue(e,t))}var tn=[["Application","Application","string"],["AppVersion","AppVersion","string"],["Company","Company","string"],["DocSecurity","DocSecurity","string"],["Manager","Manager","string"],["HyperlinksChanged","HyperlinksChanged","bool"],["SharedDoc","SharedDoc","bool"],["LinksUpToDate","LinksUpToDate","bool"],["ScaleCrop","ScaleCrop","bool"],["HeadingPairs","HeadingPairs","raw"],["TitlesOfParts","TitlesOfParts","raw"]]
Xe.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties",Ur.EXT_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties"
function rn(e,t,r,n){var a=[]
if("string"==typeof e)a=Me(e,n)
else for(var s=0;s<e.length;++s)a=a.concat(e[s].map(function(e){return{v:e}}))
var o="string"==typeof t?Me(t,n).map(function(e){return e.v}):t,i=0,l=0
if(o.length>0)for(var c=0;c!==a.length;c+=2){switch(l=+a[c+1].v,a[c].v){case"Worksheets":case"工作表":case"Листы":case"أوراق العمل":case"ワークシート":case"גליונות עבודה":case"Arbeitsblätter":case"Çalışma Sayfaları":case"Feuilles de calcul":case"Fogli di lavoro":case"Folhas de cálculo":case"Planilhas":case"Regneark":case"Werkbladen":r.Worksheets=l,r.SheetNames=o.slice(i,i+l)
break
case"Named Ranges":case"名前付き一覧":case"Benannte Bereiche":case"Navngivne områder":r.NamedRanges=l,r.DefinedNames=o.slice(i,i+l)
break
case"Charts":case"Diagramme":r.Chartsheets=l,r.ChartNames=o.slice(i,i+l)}i+=l}}var nn=Ve("Properties",null,{xmlns:Xe.EXT_PROPS,"xmlns:vt":Xe.vt})
Xe.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/custom-properties",Ur.CUST_PROPS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties"
var an=/<[^>]+>[^<]*/g
var sn=Ve("Properties",null,{xmlns:Xe.CUST_PROPS,"xmlns:vt":Xe.vt})
function on(e){var t=[ce,sn]
if(!e)return t.join("")
var r=1
return N(e).forEach(function(n){++r,t[t.length]=Ve("property",function(e){switch(typeof e){case"string":return Ve("vt:lpwstr",e)
case"number":return Ve((0|e)==e?"vt:i4":"vt:r8",String(e))
case"boolean":return Ve("vt:bool",e?"true":"false")}if(e instanceof Date)return Ve("vt:filetime",ze(e))
throw new Error("Unable to serialize "+e)}(e[n]),{fmtid:"{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",pid:r,name:n})}),t.length>2&&(t[t.length]="</Properties>",t[1]=t[1].replace("/>",">")),t.join("")}var ln={Title:"Title",Subject:"Subject",Author:"Author",Keywords:"Keywords",Comments:"Description",LastAuthor:"LastAuthor",RevNumber:"Revision",Application:"AppName",LastPrinted:"LastPrinted",CreatedDate:"Created",ModifiedDate:"LastSaved",Category:"Category",Manager:"Manager",Company:"Company",AppVersion:"Version",ContentStatus:"ContentStatus",Identifier:"Identifier",Language:"Language"},cn=M(ln)
function fn(e,t,r){e[t=cn[t]||t]=r}function hn(e){var t=e._R(4),r=e._R(4)
return new Date(1e3*(r/1e7*Math.pow(2,32)+t/1e7-11644473600)).toISOString().replace(/\.000/,"")}function un(e,t,r){var n=e.l,a=e._R(0,"lpstr-cp")
if(r)for(;e.l-n&3;)++e.l
return a}function dn(e,t,r){var n=e._R(0,"lpwstr")
return r&&(e.l+=4-(n.length+1&3)&3),n}function pn(e,t,r){return 31===t?dn(e):un(e,0,r)}function gn(e,t,r){return pn(e,t,!1===r?0:4)}function mn(e){return function(e){for(var t=e._R(4),r=[],n=0;n!=t;++n)r[n]=e._R(0,"lpstr-cp").replace(w,"")
return r}(e)}function bn(e){return[Sn(e,Rr),Sn(e,_r)]}function vn(e){return function(e){for(var t=e._R(4),r=[],n=0;n!=t/2;++n)r.push(bn(e))
return r}(e)}function Cn(e,t){for(var r=e._R(4),n={},a=0;a!=r;++a){var s=e._R(4),o=e._R(4)
n[s]=e._R(o,1200===t?"utf16le":"utf8").replace(w,"").replace(R,"!"),1200===t&&o%2&&(e.l+=2)}return 3&e.l&&(e.l=e.l>>3<<2),n}function En(e){var t=e._R(4),r=e.slice(e.l,e.l+t)
return e.l+=t,(3&t)>0&&(e.l+=4-(3&t)&3),r}function Sn(e,t,r){var n,a=e._R(2),s=r||{}
if(e.l+=2,t!==wr&&a!==t&&-1===Br.indexOf(t))throw new Error("Expected type "+t+" saw "+a)
switch(t===wr?a:t){case 2:return n=e._R(2,"i"),s.raw||(e.l+=2),n
case 3:return n=e._R(4,"i")
case 11:return 0!==e._R(4)
case 19:return n=e._R(4)
case 30:return un(e,0,4).replace(w,"")
case 31:return dn(e)
case 64:return hn(e)
case 65:return En(e)
case 71:return function(e){var t={}
return t.Size=e._R(4),e.l+=t.Size+3-(t.Size-1)%4,t}(e)
case 80:return gn(e,a,!s.raw).replace(w,"")
case 81:return function(e,t){if(!t)throw new Error("VtUnalignedString must have positive length")
return pn(e,t,0)}(e,a).replace(w,"")
case 4108:return vn(e)
case 4126:return mn(e)
default:throw new Error("TypedPropertyValue unrecognized type "+t+" "+a)}}function An(e,t){var r=kt(4),n=kt(4)
switch(r._W(4,80==e?31:e),e){case 3:n._W(-4,t)
break
case 5:(n=kt(8))._W(8,t,"f")
break
case 11:n._W(4,t?1:0)
break
case 64:n=function(e){var t=("string"==typeof e?new Date(Date.parse(e)):e).getTime()/1e3+11644473600,r=t%Math.pow(2,32),n=(t-r)/Math.pow(2,32)
n*=1e7
var a=(r*=1e7)/Math.pow(2,32)|0
a>0&&(r%=Math.pow(2,32),n+=a)
var s=kt(8)
return s._W(4,r),s._W(4,n),s}(t)
break
case 31:case 80:for((n=kt(4+2*(t.length+1)+(t.length%2?0:2)))._W(4,t.length+1),n._W(0,t,"dbcs");n.l!=n.length;)n._W(1,0)
break
default:throw new Error("TypedPropertyValue unrecognized type "+e+" "+t)}return _([r,n])}function _n(e,t){var r=e.l,n=e._R(4),a=e._R(4),s=[],o=0,l=0,c=-1,f={}
for(o=0;o!=a;++o){var h=e._R(4),u=e._R(4)
s[o]=[h,u+r]}s.sort(function(e,t){return e[1]-t[1]})
var d={}
for(o=0;o!=a;++o){if(e.l!==s[o][1]){var p=!0
if(o>0&&t)switch(t[s[o-1][0]].t){case 2:e.l+2===s[o][1]&&(e.l+=2,p=!1)
break
case 80:case 4108:e.l<=s[o][1]&&(e.l=s[o][1],p=!1)}if((!t||0==o)&&e.l<=s[o][1]&&(p=!1,e.l=s[o][1]),p)throw new Error("Read Error: Expected address "+s[o][1]+" at "+e.l+" :"+o)}if(t){var g=t[s[o][0]]
if(d[g.n]=Sn(e,g.t,{raw:!0}),"version"===g.p&&(d[g.n]=String(d[g.n]>>16)+"."+("0000"+String(65535&d[g.n])).slice(-4)),"CodePage"==g.n)switch(d[g.n]){case 0:d[g.n]=1252
case 874:case 932:case 936:case 949:case 950:case 1250:case 1251:case 1253:case 1254:case 1255:case 1256:case 1257:case 1258:case 1e4:case 1200:case 1201:case 1252:case 65e3:case-536:case 65001:case-535:i(l=d[g.n]>>>0&65535)
break
default:throw new Error("Unsupported CodePage: "+d[g.n])}}else if(1===s[o][0]){if(l=d.CodePage=Sn(e,Ar),i(l),-1!==c){var m=e.l
e.l=s[c][1],f=Cn(e,l),e.l=m}}else if(0===s[o][0]){if(0===l){c=o,e.l=s[o+1][1]
continue}f=Cn(e,l)}else{var b,v=f[s[o][0]]
switch(e[e.l]){case 65:e.l+=4,b=En(e)
break
case 30:case 31:e.l+=4,b=gn(e,e[e.l-4]).replace(/\u0000+$/,"")
break
case 3:e.l+=4,b=e._R(4,"i")
break
case 19:e.l+=4,b=e._R(4)
break
case 5:e.l+=4,b=e._R(8,"f")
break
case 11:e.l+=4,b=yn(e,4)
break
case 64:e.l+=4,b=K(hn(e))
break
default:throw new Error("unparsed value: "+e[e.l])}d[v]=b}}return e.l=r+n,d}var wn=["CodePage","Thumbnail","_PID_LINKBASE","_PID_HLINKS","SystemIdentifier","FMTID"].concat(["Worksheets","SheetNames","NamedRanges","DefinedNames","Chartsheets","ChartNames"])
function Rn(e){switch(typeof e){case"boolean":return 11
case"number":return(0|e)==e?3:5
case"string":return 31
case"object":if(e instanceof Date)return 64}return-1}function Bn(e,t,r){var n=kt(8),a=[],s=[],o=8,i=0,l=kt(8),c=kt(8)
if(l._W(4,2),l._W(4,1200),c._W(4,1),s.push(l),a.push(c),o+=8+l.length,!t){(c=kt(8))._W(4,0),a.unshift(c)
var f=[kt(4)]
for(f[0]._W(4,e.length),i=0;i<e.length;++i){var h=e[i][0]
for((l=kt(8+2*(h.length+1)+(h.length%2?0:2)))._W(4,i+2),l._W(4,h.length+1),l._W(0,h,"dbcs");l.l!=l.length;)l._W(1,0)
f.push(l)}l=_(f),s.unshift(l),o+=8+l.length}for(i=0;i<e.length;++i)if((!t||t[e[i][0]])&&!(wn.indexOf(e[i][0])>-1)&&null!=e[i][1]){var u=e[i][1],d=0
if(t){var p=r[d=+t[e[i][0]]]
if("version"==p.p&&"string"==typeof u){var g=u.split(".")
u=(+g[0]<<16)+(+g[1]||0)}l=An(p.t,u)}else{var m=Rn(u);-1==m&&(m=31,u=String(u)),l=An(m,u)}s.push(l),(c=kt(8))._W(4,t?d:2+i),a.push(c),o+=8+l.length}var b=8*(s.length+1)
for(i=0;i<s.length;++i)a[i]._W(4,b),b+=s[i].length
return n._W(4,o),n._W(4,s.length),_([n].concat(a).concat(s))}function kn(e,t,r){var n=e.content
if(!n)return{}
Rt(n,0)
var a,s,o,i,l=0
n.chk("feff","Byte Order: "),n._R(2)
var c=n._R(4),f=n._R(16)
if(f!==O.utils.consts.HEADER_CLSID&&f!==r)throw new Error("Bad PropertySet CLSID "+f)
if(1!==(a=n._R(4))&&2!==a)throw new Error("Unrecognized #Sets: "+a)
if(s=n._R(16),i=n._R(4),1===a&&i!==n.l)throw new Error("Length mismatch: "+i+" !== "+n.l)
2===a&&(o=n._R(16),l=n._R(4))
var h,d=_n(n,t),p={SystemIdentifier:c}
for(var g in d)p[g]=d[g]
if(p.FMTID=s,1===a)return p
if(l-n.l==2&&(n.l+=2),n.l!==l)throw new Error("Length mismatch 2: "+n.l+" !== "+l)
try{h=_n(n,null)}catch(u){}for(g in h)p[g]=h[g]
return p.FMTID=[s,o],p}function Tn(e,t,r,n,a,s){var o=kt(a?68:48),i=[o]
o._W(2,65534),o._W(2,0),o._W(4,842412599),o._W(16,O.utils.consts.HEADER_CLSID,"hex"),o._W(4,a?2:1),o._W(16,t,"hex"),o._W(4,a?68:48)
var l=Bn(e,r,n)
if(i.push(l),a){var c=Bn(a,null,null)
o._W(16,s,"hex"),o._W(4,68+l.length),i.push(c)}return _(i)}function xn(e,t){return e._R(t),null}function yn(e,t){return 1===e._R(t)}function In(e,t){return t||(t=kt(2)),t._W(2,+!!e),t}function Dn(e){return e._R(2,"u")}function On(e,t){return t||(t=kt(2)),t._W(2,e),t}function Fn(e,t){return function(e,t,r){for(var n=[],a=e.l+t;e.l<a;)n.push(r(e,a-e.l))
if(a!==e.l)throw new Error("Slurp error")
return n}(e,t,Dn)}function Pn(e,r,n){var a=e._R(n&&n.biff>=12?2:1),s="sbcs-cont",o=t;(n&&n.biff>=8&&(t=1200),n&&8!=n.biff)?12==n.biff&&(s="wstr"):e._R(1)&&(s="dbcs-cont")
n.biff>=2&&n.biff<=5&&(s="cpstr")
var i=a?e._R(a,s):""
return t=o,i}function Nn(e){var r=t
t=1200
var n,a=e._R(2),s=e._R(1),o=4&s,i=8&s,l=1+(1&s),c=0,f={}
i&&(c=e._R(2)),o&&(n=e._R(4))
var h=2==l?"dbcs-cont":"sbcs-cont",u=0===a?"":e._R(a,h)
return i&&(e.l+=4*c),o&&(e.l+=n),f.t=u,i||(f.raw="<t>"+f.t+"</t>",f.r=f.t),t=r,f}function Ln(e,t,r){if(r){if(r.biff>=2&&r.biff<=5)return e._R(t,"cpstr")
if(r.biff>=12)return e._R(t,"dbcs-cont")}return 0===e._R(1)?e._R(t,"sbcs-cont"):e._R(t,"dbcs-cont")}function Mn(e,t,r){var n=e._R(r&&2==r.biff?1:2)
return 0===n?(e.l++,""):Ln(e,n,r)}function Wn(e,t,r){if(r.biff>5)return Mn(e,0,r)
var n=e._R(1)
return 0===n?(e.l++,""):e._R(n,r.biff<=4||!e.lens?"cpstr":"sbcs-cont")}function Un(e,t,r){return r||(r=kt(3+2*e.length)),r._W(2,e.length),r._W(1,1),r._W(31,e,"utf16le"),r}function Hn(e,t){var r=e._R(16)
switch(16,r){case"e0c9ea79f9bace118c8200aa004ba90b":return function(e){var t=e._R(4),r=e.l,n=!1
t>24&&(e.l+=t-24,"795881f43b1d7f48af2c825dc4852763"===e._R(16)&&(n=!0),e.l=r)
var a=e._R((n?t-24:t)>>1,"utf16le").replace(w,"")
return n&&(e.l+=24),a}(e)
case"0303000000000000c000000000000046":return function(e){e.l+=2
var t=e._R(0,"lpstr-ansi")
if(e.l+=2,57005!=e._R(2))throw new Error("Bad FileMoniker")
if(0===e._R(4))return t.replace(/\\/g,"/")
var r=e._R(4)
if(3!=e._R(2))throw new Error("Bad FileMoniker")
return e._R(r>>1,"utf16le").replace(w,"")}(e)
default:throw new Error("Unsupported Moniker "+r)}}function Vn(e){var t=e._R(4)
return t>0?e._R(t,"utf16le").replace(w,""):""}function zn(e){var t=kt(512),r=0,n=e.Target,a=n.indexOf("#")>-1?31:23
switch(n.charAt(0)){case"#":a=28
break
case".":a&=-3}t._W(4,2),t._W(4,a)
var s=[8,6815827,6619237,4849780,83]
for(r=0;r<s.length;++r)t._W(4,s[r])
if(28==a){for(n=n.slice(1),t._W(4,n.length+1),r=0;r<n.length;++r)t._W(2,n.charCodeAt(r))
t._W(2,0)}else if(2&a){for(s="e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),r=0;r<s.length;++r)t._W(1,parseInt(s[r],16))
for(t._W(4,2*(n.length+1)),r=0;r<n.length;++r)t._W(2,n.charCodeAt(r))
t._W(2,0)}else{for(s="03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" "),r=0;r<s.length;++r)t._W(1,parseInt(s[r],16))
for(var o=0;"../"==n.slice(3*o,3*o+3)||"..\\"==n.slice(3*o,3*o+3);)++o
for(t._W(2,o),t._W(4,n.length+1),r=0;r<n.length;++r)t._W(1,255&n.charCodeAt(r))
for(t._W(1,0),t._W(2,65535),t._W(2,57005),r=0;r<6;++r)t._W(4,0)}return t.slice(0,t.l)}function Xn(e){return[e._R(1),e._R(1),e._R(1),e._R(1)]}function Gn(e,t){var r=Xn(e)
return r[3]=0,r}function jn(e){return{r:e._R(2),c:e._R(2),ixfe:e._R(2)}}function Kn(e,t,r,n){return n||(n=kt(6)),n._W(2,e),n._W(2,t),n._W(2,r||0),n}function Yn(e,t,r){var n=r.biff>8?4:2
return[e._R(n),e._R(n,"i"),e._R(n,"i")]}function $n(e){return[e._R(2),ur(e)]}function Zn(e){var t=e._R(2),r=e._R(2)
return{s:{c:e._R(2),r:t},e:{c:e._R(2),r:r}}}function Qn(e,t){return t||(t=kt(8)),t._W(2,e.s.r),t._W(2,e.e.r),t._W(2,e.s.c),t._W(2,e.e.c),t}function Jn(e){var t=e._R(2),r=e._R(2)
return{s:{c:e._R(1),r:t},e:{c:e._R(1),r:r}}}var qn=Jn
function ea(e){e.l+=4
var t=e._R(2),r=e._R(2),n=e._R(2)
return e.l+=12,[r,t,n]}function ta(e){e.l+=2,e.l+=e._R(2)}var ra={0:ta,4:ta,5:ta,6:ta,7:function(e){return e.l+=4,e.cf=e._R(2),{}},8:ta,9:ta,10:ta,11:ta,12:ta,13:function(e){var t={}
return e.l+=4,e.l+=16,t.fSharedNote=e._R(2),e.l+=4,t},14:ta,15:ta,16:ta,17:ta,18:ta,19:ta,20:ta,21:ea}
function na(e,t){var r={BIFFVer:0,dt:0}
switch(r.BIFFVer=e._R(2),(t-=2)>=2&&(r.dt=e._R(2),e.l-=2),r.BIFFVer){case 1536:case 1280:case 1024:case 768:case 512:case 2:case 7:break
default:if(t>6)throw new Error("Unexpected BIFF Ver "+r.BIFFVer)}return e._R(t),r}function aa(e,t,r){var n=1536,a=16
switch(r.bookType){case"biff8":break
case"biff5":n=1280,a=8
break
case"biff4":n=4,a=6
break
case"biff3":n=3,a=6
break
case"biff2":n=2,a=4
break
case"xla":break
default:throw new Error("unsupported BIFF version")}var s=kt(a)
return s._W(2,n),s._W(2,t),a>4&&s._W(2,29282),a>6&&s._W(2,1997),a>8&&(s._W(2,49161),s._W(2,1),s._W(2,1798),s._W(2,0)),s}function sa(e,t){var r=!t||t.biff>=8?2:1,n=kt(8+r*e.name.length)
n._W(4,e.pos),n._W(1,e.hs||0),n._W(1,e.dt),n._W(1,e.name.length),t.biff>=8&&n._W(1,1),n._W(r*e.name.length,e.name,t.biff<8?"sbcs":"utf16le")
var a=n.slice(0,n.l)
return a.l=n.l,a}function oa(e,t,r){var n=0
r&&2==r.biff||(n=e._R(2))
var a=e._R(2)
return r&&2==r.biff&&(n=1-(a>>15),a&=32767),[{Unsynced:1&n,DyZero:(2&n)>>1,ExAsc:(4&n)>>2,ExDsc:(8&n)>>3},a]}function ia(e,t,r,n){var a=r&&5==r.biff
n||(n=kt(a?3+t.length:5+2*t.length)),n._W(2,e),n._W(a?1:2,t.length),a||n._W(1,1),n._W((a?1:2)*t.length,t,a?"sbcs":"utf16le")
var s=n.length>n.l?n.slice(0,n.l):n
return null==s.l&&(s.l=s.length),s}var la=Wn
function ca(e,t,r){var n=e.l+t,a=8!=r.biff&&r.biff?2:4,s=e._R(a),o=e._R(a),i=e._R(2),l=e._R(2)
return e.l=n,{s:{r:s,c:i},e:{r:o,c:l}}}function fa(e,t,r,n){var a=r&&5==r.biff
return n||(n=kt(a?16:20)),n._W(2,0),e.style?(n._W(2,e.numFmtId||0),n._W(2,65524)):(n._W(2,e.numFmtId||0),n._W(2,t<<4)),n._W(4,0),n._W(4,0),a||n._W(4,0),n._W(2,0),n}function ha(e,t,r){var n=jn(e)
2==r.biff&&++e.l
var a=function(e){var t=e._R(1)
return 1===e._R(1)?t:1===t}(e)
return n.val=a,n.t=!0===a||!1===a?"b":"e",n}function ua(e,t,r,n,a,s){var o=kt(8)
return Kn(e,t,n,o),function(e,t,r){r||(r=kt(2)),r._W(1,+e),r._W(1,"e"==t?1:0)}(r,s,o),o}var da=function(e,t,r){return 0===t?"":Wn(e,0,r)}
function pa(e,t,r){var n,a=e._R(2),s={fBuiltIn:1&a,fWantAdvise:a>>>1&1,fWantPict:a>>>2&1,fOle:a>>>3&1,fOleLink:a>>>4&1,cf:a>>>5&1023,fIcon:a>>>15&1}
return 14849===r.sbcch&&(n=function(e,t,r){e.l+=4,t-=4
var n=e.l+t,a=Pn(e,0,r),s=e._R(2)
if(s!==(n-=e.l))throw new Error("Malformed AddinUdf: padding = "+n+" != "+s)
return e.l+=s,a}(e,t-2,r)),s.body=n||e._R(t-2),"string"==typeof n&&(s.Name=n),s}var ga=["_xlnm.Consolidate_Area","_xlnm.Auto_Open","_xlnm.Auto_Close","_xlnm.Extract","_xlnm.Database","_xlnm.Criteria","_xlnm.Print_Area","_xlnm.Print_Titles","_xlnm.Recorder","_xlnm.Data_Form","_xlnm.Auto_Activate","_xlnm.Auto_Deactivate","_xlnm.Sheet_Title","_xlnm._FilterDatabase"]
function ma(e,t,r){var n=e.l+t,a=e._R(2),s=e._R(1),o=e._R(1),i=e._R(r&&2==r.biff?1:2),l=0;(!r||r.biff>=5)&&(5!=r.biff&&(e.l+=2),l=e._R(2),5==r.biff&&(e.l+=2),e.l+=4)
var c=Ln(e,o,r)
32&a&&(c=ga[c.charCodeAt(0)])
var f=n-e.l
return r&&2==r.biff&&--f,{chKey:s,Name:c,itab:l,rgce:n==e.l||0===i?[]:function(e,t,r,n){var a,s=e.l+t,o=Lo(e,n,r)
s!==e.l&&(a=No(e,s-e.l,o,r))
return[o,a]}(e,f,r,i)}}function ba(e,t,r){if(r.biff<8)return function(e,t,r){3==e[e.l+1]&&e[e.l]++
var n=Pn(e,0,r)
return 3==n.charCodeAt(0)?n.slice(1):n}(e,0,r)
for(var n=[],a=e.l+t,s=e._R(r.biff>8?4:2);0!=s--;)n.push(Yn(e,r.biff,r))
if(e.l!=a)throw new Error("Bad ExternSheet: "+e.l+" != "+a)
return n}function va(e,t,r){var n=qn(e,6)
switch(r.biff){case 2:e.l++,t-=7
break
case 3:case 4:e.l+=2,t-=8
break
default:e.l+=6,t-=12}return[n,Vo(e,t,r)]}var Ca=[]
function Ea(e){var t=kt(24),r=Ut(e[0])
t._W(2,r.r),t._W(2,r.r),t._W(2,r.c),t._W(2,r.c)
for(var n="d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" "),a=0;a<16;++a)t._W(1,parseInt(n[a],16))
return _([t,zn(e[1])])}function Sa(e){var t=e[1].Tooltip,r=kt(10+2*(t.length+1))
r._W(2,2048)
var n=Ut(e[0])
r._W(2,n.r),r._W(2,n.r),r._W(2,n.c),r._W(2,n.c)
for(var a=0;a<t.length;++a)r._W(2,t.charCodeAt(a))
return r._W(2,0),r}function Aa(e,t,r){if(!r.cellStyles)return Bt(e,t)
var n=r&&r.biff>=12?4:2,a=e._R(n),s=e._R(n),o=e._R(n),i=e._R(n),l=e._R(2)
return 2==n&&(e.l+=2),{s:a,e:s,w:o,ixfe:i,flags:l}}Ca[8]=function(e,t){var r=e.l+t
e.l+=10
var n=e._R(2)
e.l+=4,e.l+=2,e.l+=2,e.l+=2,e.l+=4
var a=e._R(1)
return e.l+=a,e.l=r,{fmt:n}}
var _a=jn,wa=Fn,Ra=Mn
var Ba=function(){var e={1:437,2:850,3:1252,4:1e4,100:852,101:866,102:865,103:861,104:895,105:620,106:737,107:857,120:950,121:949,122:936,123:932,124:874,125:1255,126:1256,150:10007,151:10029,152:10006,200:1250,201:1251,202:1254,203:1253,0:20127,8:865,9:437,10:850,11:437,13:437,14:850,15:437,16:850,17:437,18:850,19:932,20:850,21:437,22:850,23:865,24:437,25:437,26:850,27:437,28:863,29:850,31:852,34:852,35:852,36:860,37:850,38:866,55:850,64:852,77:936,78:949,79:950,80:874,87:1252,88:1252,89:1252,255:16969}
function t(t,r){var n=[],a=b(1)
switch(r.type){case"base64":a=C(d.decode(t))
break
case"binary":a=C(t)
break
case"buffer":case"array":a=t}Rt(a,0)
var s=a._R(1),o=!1,i=!1,l=!1
switch(s){case 2:case 3:break
case 48:i=!0,o=!0
break
case 49:i=!0
break
case 131:case 139:o=!0
break
case 140:o=!0,l=!0
break
case 245:o=!0
break
default:throw new Error("DBF Unsupported Version: "+s.toString(16))}var c=0,f=0
2==s&&(c=a._R(2)),a.l+=3,2!=s&&(c=a._R(4)),2!=s&&(f=a._R(2))
var h=a._R(2),u=1252
2!=s&&(a.l+=16,a._R(1),0!==a[a.l]&&(u=e[a[a.l]]),a.l+=1,a.l+=2),l&&(a.l+=36)
for(var p=[],g={},m=f-10-(i?264:0),v=l?32:11;2==s?a.l<a.length&&13!=a[a.l]:a.l<m;)switch((g={}).name=cptable.utils.decode(u,a.slice(a.l,a.l+v)).replace(/[\u0000\r\n].*$/g,""),a.l+=v,g.type=String.fromCharCode(a._R(1)),2==s||l||(g.offset=a._R(4)),g.len=a._R(1),2==s&&(g.offset=a._R(2)),g.dec=a._R(1),g.name.length&&p.push(g),2!=s&&(a.l+=l?13:14),g.type){case"B":i&&8==g.len||!r.WTF||console.log("Skipping "+g.name+":"+g.type)
break
case"G":case"P":r.WTF&&console.log("Skipping "+g.name+":"+g.type)
break
case"C":case"D":case"F":case"I":case"L":case"M":case"N":case"O":case"T":case"Y":case"0":case"@":case"+":break
default:throw new Error("Unknown Field Type: "+g.type)}if(13!==a[a.l]?a.l=f-1:2==s&&(a.l=521),2!=s){if(13!==a._R(1))throw new Error("DBF Terminator not found "+a.l+" "+a[a.l])
a.l=f}var E=0,S=0
for(n[0]=[],S=0;S!=p.length;++S)n[0][S]=p[S].name
for(;c-- >0;)if(42!==a[a.l])for(++a.l,n[++E]=[],S=0,S=0;S!=p.length;++S){var A=a.slice(a.l,a.l+p[S].len)
a.l+=p[S].len,Rt(A,0)
var _=cptable.utils.decode(u,A)
switch(p[S].type){case"C":n[E][S]=cptable.utils.decode(u,A),n[E][S]=n[E][S].trim()
break
case"D":8===_.length?n[E][S]=new Date(+_.slice(0,4),+_.slice(4,6)-1,+_.slice(6,8)):n[E][S]=_
break
case"F":n[E][S]=parseFloat(_.trim())
break
case"+":case"I":n[E][S]=l?2147483648^A._R(-4,"i"):A._R(4,"i")
break
case"L":switch(_.toUpperCase()){case"Y":case"T":n[E][S]=!0
break
case"N":case"F":n[E][S]=!1
break
case" ":case"?":n[E][S]=!1
break
default:throw new Error("DBF Unrecognized L:|"+_+"|")}break
case"M":if(!o)throw new Error("DBF Unexpected MEMO for type "+s.toString(16))
n[E][S]="##MEMO##"+(l?parseInt(_.trim(),10):A._R(4))
break
case"N":n[E][S]=+_.replace(/\u0000/g,"").trim()
break
case"@":n[E][S]=new Date(A._R(-8,"f")-621356832e5)
break
case"T":n[E][S]=new Date(864e5*(A._R(4)-2440588)+A._R(4))
break
case"Y":n[E][S]=A._R(4,"i")/1e4
break
case"O":n[E][S]=-A._R(-8,"f")
break
case"B":if(i&&8==p[S].len){n[E][S]=A._R(8,"f")
break}case"G":case"P":A.l+=p[S].len
break
case"0":if("_NullFlags"===p[S].name)break
default:throw new Error("DBF Unsupported data type "+p[S].type)}}else a.l+=h
if(2!=s&&a.l<a.length&&26!=a[a.l++])throw new Error("DBF EOF Marker missing "+(a.l-1)+" of "+a.length+" "+a[a.l-1].toString(16))
return r&&r.sheetRows&&(n=n.slice(0,r.sheetRows)),n}function r(e,r){var n=r||{}
return n.dateNF||(n.dateNF="yyyymmdd"),$t(t(e,n),n)}var a={B:8,C:250,L:1,D:8,"?":0,"":0}
return{to_workbook:function(e,t){try{return Kt(r(e,t),t)}catch(n){if(t&&t.WTF)throw n}return{SheetNames:[],Sheets:{}}},to_sheet:r,from_sheet:function(e,t){if("string"==(t||{}).type)throw new Error("Cannot write DBF to JS string")
var r=xt(),n=jc(e,{header:1,cellDates:!0}),s=n[0],o=n.slice(1),i=0,l=0,c=0,f=1
for(i=0;i<s.length;++i)if(null!=i){if(++c,"number"==typeof s[i]&&(s[i]=s[i].toString(10)),"string"!=typeof s[i])throw new Error("DBF Invalid column name "+s[i]+" |"+typeof s[i]+"|")
if(s.indexOf(s[i])!==i)for(l=0;l<1024;++l)if(-1==s.indexOf(s[i]+"_"+l)){s[i]+="_"+l
break}}var h=Xt(e["!ref"]),u=[]
for(i=0;i<=h.e.c-h.s.c;++i){var d=[]
for(l=0;l<o.length;++l)null!=o[l][i]&&d.push(o[l][i])
if(0!=d.length&&null!=s[i]){var p="",g=""
for(l=0;l<d.length;++l){switch(typeof d[l]){case"number":g="B"
break
case"string":g="C"
break
case"boolean":g="L"
break
case"object":g=d[l]instanceof Date?"D":"C"
break
default:g="C"}if("C"==(p=p&&p!=g?"C":g))break}f+=a[p]||0,u[i]=p}else u[i]="?"}var m=r.next(32)
for(m._W(4,318902576),m._W(4,o.length),m._W(2,296+32*c),m._W(2,f),i=0;i<4;++i)m._W(4,0)
for(m._W(4,768),i=0,l=0;i<s.length;++i)if(null!=s[i]){var b=r.next(32),v=(s[i].slice(-10)+"\0\0\0\0\0\0\0\0\0\0\0").slice(0,11)
b._W(1,v,"sbcs"),b._W(1,"?"==u[i]?"C":u[i],"sbcs"),b._W(4,l),b._W(1,a[u[i]]||0),b._W(1,0),b._W(1,2),b._W(4,0),b._W(1,0),b._W(4,0),b._W(4,0),l+=a[u[i]]||0}var C=r.next(264)
for(C._W(4,13),i=0;i<65;++i)C._W(4,0)
for(i=0;i<o.length;++i){var E=r.next(f)
for(E._W(1,0),l=0;l<s.length;++l)if(null!=s[l])switch(u[l]){case"L":E._W(1,null==o[i][l]?63:o[i][l]?84:70)
break
case"B":E._W(8,o[i][l]||0,"f")
break
case"D":o[i][l]?(E._W(4,("0000"+o[i][l].getFullYear()).slice(-4),"sbcs"),E._W(2,("00"+(o[i][l].getMonth()+1)).slice(-2),"sbcs"),E._W(2,("00"+o[i][l].getDate()).slice(-2),"sbcs")):E._W(8,"00000000","sbcs")
break
case"C":var S=String(o[i][l]||"")
for(E._W(1,S,"sbcs"),c=0;c<250-S.length;++c)E._W(1,32)}}return r.next(1)._W(1,26),r.end()}}}(),ka=function(){function e(e,r){switch(r.type){case"base64":return t(d.decode(e),r)
case"binary":return t(e,r)
case"buffer":return t(e.toString("binary"),r)
case"array":return t(Y(e),r)}throw new Error("Unrecognized type "+r.type)}function t(e,t){for(var r,n=e.split(/[\n\r]+/),a=-1,s=-1,o=0,i=0,l=[],c=[],f=null,h={},u=[],d=[],p=[],g=0;o!==n.length;++o){g=0
var m,b=n[o].trim(),v=b.replace(/;;/g,"").split(";").map(function(e){return e.replace(/\u0001/g,";")}),C=v[0]
if(b.length>0)switch(C){case"ID":case"E":case"B":case"O":break
case"P":"P"==v[1].charAt(0)&&c.push(b.slice(3).replace(/;;/g,";"))
break
case"C":var E=!1,S=!1
for(i=1;i<v.length;++i)switch(v[i].charAt(0)){case"X":s=parseInt(v[i].slice(1))-1,S=!0
break
case"Y":for(a=parseInt(v[i].slice(1))-1,S||(s=0),r=l.length;r<=a;++r)l[r]=[]
break
case"K":'"'===(m=v[i].slice(1)).charAt(0)?m=m.slice(1,m.length-1):"TRUE"===m?m=!0:"FALSE"===m?m=!1:isNaN(J(m))?isNaN(q(m).getDate())||(m=K(m)):(m=J(m),null!==f&&B.is_date(f)&&(m=z(m))),void 0!==cptable&&"string"==typeof m&&"string"!=(t||{}).type&&(t||{}).codepage&&(m=cptable.utils.decode(t.codepage,m)),E=!0
break
case"E":var A=no(v[i].slice(1),{r:a,c:s})
l[a][s]=[l[a][s],A]
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+b)}E&&(l[a][s]=m,f=null)
break
case"F":var _=0
for(i=1;i<v.length;++i)switch(v[i].charAt(0)){case"X":s=parseInt(v[i].slice(1))-1,++_
break
case"Y":for(a=parseInt(v[i].slice(1))-1,r=l.length;r<=a;++r)l[r]=[]
break
case"M":g=parseInt(v[i].slice(1))/20
break
case"F":case"G":break
case"P":f=c[parseInt(v[i].slice(1))]
break
case"S":case"D":case"N":break
case"W":for(p=v[i].slice(1).split(" "),r=parseInt(p[0],10);r<=parseInt(p[1],10);++r)g=parseInt(p[2],10),d[r-1]=0===g?{hidden:!0}:{wch:g},ps(d[r-1])
break
case"C":d[s=parseInt(v[i].slice(1))-1]||(d[s]={})
break
case"R":u[a=parseInt(v[i].slice(1))-1]||(u[a]={}),g>0?(u[a].hpt=g,u[a].hpx=bs(g)):0===g&&(u[a].hidden=!0)
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+b)}_<1&&(f=null)
break
default:if(t&&t.WTF)throw new Error("SYLK bad record "+b)}}return u.length>0&&(h["!rows"]=u),d.length>0&&(h["!cols"]=d),t&&t.sheetRows&&(l=l.slice(0,t.sheetRows)),[l,h]}function r(t,r){var n=e(t,r),a=n[0],s=n[1],o=$t(a,r)
return N(s).forEach(function(e){o[e]=s[e]}),o}function n(e,t,r,n){var a="C;Y"+(r+1)+";X"+(n+1)+";K"
switch(e.t){case"n":a+=e.v||0,e.f&&!e.F&&(a+=";E"+so(e.f,{r:r,c:n}))
break
case"b":a+=e.v?"TRUE":"FALSE"
break
case"e":a+=e.w||e.v
break
case"d":a+='"'+(e.w||e.v)+'"'
break
case"s":a+='"'+e.v.replace(/"/g,"")+'"'}return a}return{to_workbook:function(e,t){return Kt(r(e,t),t)},to_sheet:r,from_sheet:function(e,t){var r,a=["ID;PWXL;N;E"],s=[],o=Xt(e["!ref"]),i=Array.isArray(e),l="\r\n"
a.push("P;PGeneral"),a.push("F;P0;DG0G8;M255"),e["!cols"]&&function(e,t){t.forEach(function(t,r){var n="F;W"+(r+1)+" "+(r+1)+" "
t.hidden?n+="0":("number"==typeof t.width&&(t.wpx=cs(t.width)),"number"==typeof t.wpx&&(t.wch=fs(t.wpx)),"number"==typeof t.wch&&(n+=Math.round(t.wch)))," "!=n.charAt(n.length-1)&&e.push(n)})}(a,e["!cols"]),e["!rows"]&&function(e,t){t.forEach(function(t,r){var n="F;"
t.hidden?n+="M0;":t.hpt?n+="M"+20*t.hpt+";":t.hpx&&(n+="M"+20*ms(t.hpx)+";"),n.length>2&&e.push(n+"R"+(r+1))})}(a,e["!rows"]),a.push("B;Y"+(o.e.r-o.s.r+1)+";X"+(o.e.c-o.s.c+1)+";D"+[o.s.c,o.s.r,o.e.c,o.e.r].join(" "))
for(var c=o.s.r;c<=o.e.r;++c)for(var f=o.s.c;f<=o.e.c;++f){var h=Ht({r:c,c:f});(r=i?(e[c]||[])[f]:e[h])&&(null!=r.v||r.f&&!r.F)&&s.push(n(r,0,c,f))}return a.join(l)+l+s.join(l)+l+"E"+l}}}(),Ta=function(){function e(e,r){switch(r.type){case"base64":return t(d.decode(e),r)
case"binary":return t(e,r)
case"buffer":return t(e.toString("binary"),r)
case"array":return t(Y(e),r)}throw new Error("Unrecognized type "+r.type)}function t(e,t){for(var r=e.split("\n"),n=-1,a=-1,s=0,o=[];s!==r.length;++s)if("BOT"!==r[s].trim()){if(!(n<0)){var i=r[s].trim().split(","),l=i[0],c=i[1],f=r[++s].trim()
switch(+l){case-1:if("BOT"===f){o[++n]=[],a=0
continue}if("EOD"!==f)throw new Error("Unrecognized DIF special command "+f)
break
case 0:"TRUE"===f?o[n][a]=!0:"FALSE"===f?o[n][a]=!1:isNaN(J(c))?isNaN(q(c).getDate())?o[n][a]=c:o[n][a]=K(c):o[n][a]=J(c),++a
break
case 1:f=f.slice(1,f.length-1),o[n][a++]=""!==f?f:null}if("EOD"===f)break}}else o[++n]=[],a=0
return t&&t.sheetRows&&(o=o.slice(0,t.sheetRows)),o}function r(t,r){return $t(e(t,r),r)}return{to_workbook:function(e,t){return Kt(r(e,t),t)},to_sheet:r,from_sheet:function(){var e=function(e,t,r,n,a){e.push(t),e.push(r+","+n),e.push('"'+a.replace(/"/g,'""')+'"')},t=function(e,t,r,n){e.push(t+","+r),e.push(1==t?'"'+n.replace(/"/g,'""')+'"':n)}
return function(r){var n,a=[],s=Xt(r["!ref"]),o=Array.isArray(r)
e(a,"TABLE",0,1,"sheetjs"),e(a,"VECTORS",0,s.e.r-s.s.r+1,""),e(a,"TUPLES",0,s.e.c-s.s.c+1,""),e(a,"DATA",0,0,"")
for(var i=s.s.r;i<=s.e.r;++i){t(a,-1,0,"BOT")
for(var l=s.s.c;l<=s.e.c;++l){var c=Ht({r:i,c:l})
if(n=o?(r[i]||[])[l]:r[c])switch(n.t){case"n":var f=n.w
f||null==n.v||(f=n.v),null==f?n.f&&!n.F?t(a,1,0,"="+n.f):t(a,1,0,""):t(a,0,f,"V")
break
case"b":t(a,0,n.v?1:0,n.v?"TRUE":"FALSE")
break
case"s":t(a,1,0,isNaN(n.v)?n.v:'="'+n.v+'"')
break
case"d":n.w||(n.w=B.format(n.z||B._table[14],V(K(n.v)))),t(a,0,n.w,"V")
break
default:t(a,1,0,"")}else t(a,1,0,"")}}t(a,-1,0,"EOD")
return a.join("\r\n")}}()}}(),xa=function(){function e(e){return e.replace(/\\b/g,"\\").replace(/\\c/g,":").replace(/\\n/g,"\n")}function t(e){return e.replace(/\\/g,"\\b").replace(/:/g,"\\c").replace(/\n/g,"\\n")}function r(t,r){for(var n=t.split("\n"),a=-1,s=-1,o=0,i=[];o!==n.length;++o){var l=n[o].trim().split(":")
if("cell"===l[0]){var c=Ut(l[1])
if(i.length<=c.r)for(a=i.length;a<=c.r;++a)i[a]||(i[a]=[])
switch(a=c.r,s=c.c,l[2]){case"t":i[a][s]=e(l[3])
break
case"v":i[a][s]=+l[3]
break
case"vtf":var f=l[l.length-1]
case"vtc":switch(l[3]){case"nl":i[a][s]=!!+l[4]
break
default:i[a][s]=+l[4]}"vtf"==l[2]&&(i[a][s]=[i[a][s],f])}}}return r&&r.sheetRows&&(i=i.slice(0,r.sheetRows)),i}function n(e,t){return $t(r(e,t),t)}var a=["socialcalc:version:1.5","MIME-Version: 1.0","Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n"),s=["--SocialCalcSpreadsheetControlSave","Content-type: text/plain; charset=UTF-8"].join("\n")+"\n",o=["# SocialCalc Spreadsheet Control Save","part:sheet"].join("\n"),i="--SocialCalcSpreadsheetControlSave--"
function l(e){if(!e||!e["!ref"])return""
for(var r,n=[],a=[],s="",o=Vt(e["!ref"]),i=Array.isArray(e),l=o.s.r;l<=o.e.r;++l)for(var c=o.s.c;c<=o.e.c;++c)if(s=Ht({r:l,c:c}),(r=i?(e[l]||[])[c]:e[s])&&null!=r.v&&"z"!==r.t){switch(a=["cell",s,"t"],r.t){case"s":case"str":a.push(t(r.v))
break
case"n":r.f?(a[2]="vtf",a[3]="n",a[4]=r.v,a[5]=t(r.f)):(a[2]="v",a[3]=r.v)
break
case"b":a[2]="vt"+(r.f?"f":"c"),a[3]="nl",a[4]=r.v?"1":"0",a[5]=t(r.f||(r.v?"TRUE":"FALSE"))
break
case"d":var f=V(K(r.v))
a[2]="vtc",a[3]="nd",a[4]=""+f,a[5]=r.w||B.format(r.z||B._table[14],f)
break
case"e":continue}n.push(a.join(":"))}return n.push("sheet:c:"+(o.e.c-o.s.c+1)+":r:"+(o.e.r-o.s.r+1)+":tvf:1"),n.push("valueformat:1:text-wiki"),n.join("\n")}return{to_workbook:function(e,t){return Kt(n(e,t),t)},to_sheet:n,from_sheet:function(e){return[a,s,o,s,l(e),i].join("\n")}}}(),ya=function(){function e(e,t,r,n,a){a.raw?t[r][n]=e:"TRUE"===e?t[r][n]=!0:"FALSE"===e?t[r][n]=!1:""===e||(isNaN(J(e))?isNaN(q(e).getDate())?t[r][n]=e:t[r][n]=K(e):t[r][n]=J(e))}function t(t,r){var n=r||{},a=[]
if(!t||0===t.length)return a
for(var s=t.split(/[\r\n]/),o=s.length-1;o>=0&&0===s[o].length;)--o
for(var i=10,l=0,c=0;c<=o;++c)-1==(l=s[c].indexOf(" "))?l=s[c].length:l++,i=Math.max(i,l)
for(c=0;c<=o;++c){a[c]=[]
var f=0
for(e(s[c].slice(0,i).trim(),a,c,f,n),f=1;f<=(s[c].length-i)/10+1;++f)e(s[c].slice(i+10*(f-1),i+10*f).trim(),a,c,f,n)}return n.sheetRows&&(a=a.slice(0,n.sheetRows)),a}var r={44:",",9:"\t",59:";"},n={44:3,9:2,59:1}
function a(e){for(var t={},a=!1,s=0,o=0;s<e.length;++s)34==(o=e.charCodeAt(s))?a=!a:!a&&o in r&&(t[o]=(t[o]||0)+1)
for(s in o=[],t)t.hasOwnProperty(s)&&o.push([t[s],s])
if(!o.length)for(s in t=n)t.hasOwnProperty(s)&&o.push([t[s],s])
return o.sort(function(e,t){return e[0]-t[0]||n[e[1]]-n[t[1]]}),r[o.pop()[1]]}function s(e,t){var r=t||{},n=""
null!=u&&null==r.dense&&(r.dense=u)
var s=r.dense?[]:{},o={s:{c:0,r:0},e:{c:0,r:0}}
"sep="==e.slice(0,4)&&10==e.charCodeAt(5)?(n=e.charAt(4),e=e.slice(6)):n=a(e.slice(0,1024))
var i=0,l=0,c=0,f=0,h=0,d=n.charCodeAt(0),p=!1,g=0
e=e.replace(/\r\n/gm,"\n")
var m=null!=r.dateNF?function(e){var t="number"==typeof e?B._table[e]:e
return t=t.replace(y,"(\\d+)"),new RegExp("^"+t+"$")}(r.dateNF):null
function b(){var t=e.slice(f,h),n={}
if('"'==t.charAt(0)&&'"'==t.charAt(t.length-1)&&(t=t.slice(1,-1).replace(/""/g,'"')),0===t.length)n.t="z"
else if(r.raw)n.t="s",n.v=t
else if(0===t.trim().length)n.t="s",n.v=t
else if(61==t.charCodeAt(0))34==t.charCodeAt(1)&&34==t.charCodeAt(t.length-1)?(n.t="s",n.v=t.slice(2,-1).replace(/""/g,'"')):!function(e){return 1!=e.length}(t)?(n.t="s",n.v=t):(n.t="n",n.f=t.slice(1))
else if("TRUE"==t)n.t="b",n.v=!0
else if("FALSE"==t)n.t="b",n.v=!1
else if(isNaN(c=J(t)))if(!isNaN(q(t).getDate())||m&&t.match(m)){n.z=r.dateNF||B._table[14]
var a=0
m&&t.match(m)&&(t=function(e,t,r){var n=-1,a=-1,s=-1,o=-1,i=-1,l=-1;(t.match(y)||[]).forEach(function(e,t){var c=parseInt(r[t+1],10)
switch(e.toLowerCase().charAt(0)){case"y":n=c
break
case"d":s=c
break
case"h":o=c
break
case"s":l=c
break
case"m":o>=0?i=c:a=c}}),l>=0&&-1==i&&a>=0&&(i=a,a=-1)
var c=(""+(n>=0?n:(new Date).getFullYear())).slice(-4)+"-"+("00"+(a>=1?a:1)).slice(-2)+"-"+("00"+(s>=1?s:1)).slice(-2)
7==c.length&&(c="0"+c),8==c.length&&(c="20"+c)
var f=("00"+(o>=0?o:0)).slice(-2)+":"+("00"+(i>=0?i:0)).slice(-2)+":"+("00"+(l>=0?l:0)).slice(-2)
return-1==o&&-1==i&&-1==l?c:-1==n&&-1==a&&-1==s?f:c+"T"+f}(0,r.dateNF,t.match(m)||[]),a=1),r.cellDates?(n.t="d",n.v=K(t,a)):(n.t="n",n.v=V(K(t,a))),!1!==r.cellText&&(n.w=B.format(n.z,n.v instanceof Date?V(n.v):n.v)),r.cellNF||delete n.z}else n.t="s",n.v=t
else n.t="n",!1!==r.cellText&&(n.w=t),n.v=c
if("z"==n.t||(r.dense?(s[i]||(s[i]=[]),s[i][l]=n):s[Ht({c:l,r:i})]=n),f=h+1,o.e.c<l&&(o.e.c=l),o.e.r<i&&(o.e.r=i),g==d)++l
else if(l=0,++i,r.sheetRows&&r.sheetRows<=i)return!0}e:for(;h<e.length;++h)switch(g=e.charCodeAt(h)){case 34:p=!p
break
case d:case 10:case 13:if(!p&&b())break e}return h-f>0&&b(),s["!ref"]=zt(o),s}function o(e,r){return"sep="==e.slice(0,4)?s(e,r):e.indexOf("\t")>=0||e.indexOf(",")>=0||e.indexOf(";")>=0?s(e,r):$t(t(e,r),r)}function i(e,t){var r="",n="string"==t.type?[0,0,0,0]:Fc(e,t)
switch(t.type){case"base64":r=d.decode(e)
break
case"binary":r=e
break
case"buffer":r=65001==t.codepage?e.toString("utf8"):t.codepage&&void 0!==cptable?cptable.utils.decode(t.codepage,e):e.toString("binary")
break
case"array":r=Y(e)
break
case"string":r=e
break
default:throw new Error("Unrecognized type "+t.type)}return 239==n[0]&&187==n[1]&&191==n[2]?r=Te(r.slice(3)):"binary"==t.type&&void 0!==cptable&&t.codepage&&(r=cptable.utils.decode(t.codepage,cptable.utils.encode(1252,r))),"socialcalc:version:"==r.slice(0,19)?xa.to_sheet("string"==t.type?r:Te(r),t):o(r,t)}return{to_workbook:function(e,t){return Kt(i(e,t),t)},to_sheet:i,from_sheet:function(e){for(var t,r=[],n=Xt(e["!ref"]),a=Array.isArray(e),s=n.s.r;s<=n.e.r;++s){for(var o=[],i=n.s.c;i<=n.e.c;++i){var l=Ht({r:s,c:i})
if((t=a?(e[s]||[])[i]:e[l])&&null!=t.v){for(var c=(t.w||(jt(t),t.w)||"").slice(0,10);c.length<10;)c+=" "
o.push(c+(0===i?" ":""))}else o.push("          ")}r.push(o.join(""))}return r.join("\n")}}}()
var Ia=function(){function e(e,t){if(!e)return e
var r=t||{}
null!=u&&null==r.dense&&(r.dense=u)
var n=r.dense?[]:{},a="Sheet1",s=0,l={},c=[a],f={s:{r:0,c:0},e:{r:0,c:0}},h=r.sheetRows||0
if(2==e[2])r.Enum=o
else if(26==e[2])r.Enum=i
else{if(14!=e[2])throw new Error("Unrecognized LOTUS BOF "+e[2])
r.Enum=i,r.qpro=!0,e.l=0}return function(e,t,r){if(e){Rt(e,e.l||0)
for(var n=r.Enum||o;e.l<e.length;){var a=e._R(2),s=n[a]||n[255],i=e._R(2),l=e.l+i,c=(s.f||Bt)(e,i,r)
if(e.l=l,t(c,s.n,a))return}}}(e,function(t,o,i){if(2==e[2])switch(i){case 0:r.vers=t,t>=4096&&(r.qpro=!0)
break
case 6:f=t
break
case 15:r.qpro||(t[1].v=t[1].v.slice(1))
case 13:case 14:case 16:case 51:14==i&&112==(112&t[2])&&(15&t[2])>1&&(15&t[2])<15&&(t[1].z=r.dateNF||B._table[14],r.cellDates&&(t[1].t="d",t[1].v=z(t[1].v))),r.dense?(n[t[0].r]||(n[t[0].r]=[]),n[t[0].r][t[0].c]=t[1]):n[Ht(t[0])]=t[1]}else switch(i){case 22:t[1].v=t[1].v.slice(1)
case 23:case 24:case 25:case 37:case 39:case 40:if(t[3]>s&&(n["!ref"]=zt(f),l[a]=n,n=r.dense?[]:{},f={s:{r:0,c:0},e:{r:0,c:0}},s=t[3],a="Sheet"+(s+1),c.push(a)),h>0&&t[0].r>=h)break
r.dense?(n[t[0].r]||(n[t[0].r]=[]),n[t[0].r][t[0].c]=t[1]):n[Ht(t[0])]=t[1],f.e.c<t[0].c&&(f.e.c=t[0].c),f.e.r<t[0].r&&(f.e.r=t[0].r)}},r),n["!ref"]=zt(f),l[a]=n,{SheetNames:c,Sheets:l}}function t(e,t,r){var n=[{c:0,r:0},{t:"n",v:0},0]
return r.qpro&&20768!=r.vers?(n[0].c=e._R(1),e.l++,n[0].r=e._R(2),e.l+=2):(n[2]=e._R(1),n[0].c=e._R(2),n[0].r=e._R(2)),n}function r(e,r,n){var a=e.l+r,s=t(e,0,n)
if(s[1].t="s",20768==n.vers){e.l++
var o=e._R(1)
return s[1].v=e._R(o,"utf8"),s}return n.qpro&&e.l++,s[1].v=e._R(a-e.l,"cstr"),s}function n(e){var t=[{c:0,r:0},{t:"n",v:0},0]
return t[0].r=e._R(2),t[3]=e[e.l++],t[0].c=e[e.l++],t}function a(e,t){var r=n(e),a=e._R(4),s=e._R(4),o=e._R(2)
if(65535==o)return r[1].v=0,r
var i=32768&o
return o=(32767&o)-16446,r[1].v=(2*i-1)*((o>0?s<<o:s>>>-o)+(o>-32?a<<o+32:a>>>-(o+32))),r}function s(e,t){var r=n(e),a=e._R(8,"f")
return r[1].v=a,r}var o={0:{n:"BOF",f:Dn},1:{n:"EOF"},2:{n:"CALCMODE"},3:{n:"CALCORDER"},4:{n:"SPLIT"},5:{n:"SYNC"},6:{n:"RANGE",f:function(e){var t={s:{c:0,r:0},e:{c:0,r:0}}
return t.s.c=e._R(2),t.s.r=e._R(2),t.e.c=e._R(2),t.e.r=e._R(2),65535==t.s.c&&(t.s.c=t.e.c=t.s.r=t.e.r=0),t}},7:{n:"WINDOW1"},8:{n:"COLW1"},9:{n:"WINTWO"},10:{n:"COLW2"},11:{n:"NAME"},12:{n:"BLANK"},13:{n:"INTEGER",f:function(e,r,n){var a=t(e,0,n)
return a[1].v=e._R(2,"i"),a}},14:{n:"NUMBER",f:function(e,r,n){var a=t(e,0,n)
return a[1].v=e._R(8,"f"),a}},15:{n:"LABEL",f:r},16:{n:"FORMULA",f:function(e,r,n){var a=e.l+r,s=t(e,0,n)
if(s[1].v=e._R(8,"f"),n.qpro)e.l=a
else{var o=e._R(2)
e.l+=o}return s}},24:{n:"TABLE"},25:{n:"ORANGE"},26:{n:"PRANGE"},27:{n:"SRANGE"},28:{n:"FRANGE"},29:{n:"KRANGE1"},32:{n:"HRANGE"},35:{n:"KRANGE2"},36:{n:"PROTEC"},37:{n:"FOOTER"},38:{n:"HEADER"},39:{n:"SETUP"},40:{n:"MARGINS"},41:{n:"LABELFMT"},42:{n:"TITLES"},43:{n:"SHEETJS"},45:{n:"GRAPH"},46:{n:"NGRAPH"},47:{n:"CALCCOUNT"},48:{n:"UNFORMATTED"},49:{n:"CURSORW12"},50:{n:"WINDOW"},51:{n:"STRING",f:r},55:{n:"PASSWORD"},56:{n:"LOCKED"},60:{n:"QUERY"},61:{n:"QUERYNAME"},62:{n:"PRINT"},63:{n:"PRINTNAME"},64:{n:"GRAPH2"},65:{n:"GRAPHNAME"},66:{n:"ZOOM"},67:{n:"SYMSPLIT"},68:{n:"NSROWS"},69:{n:"NSCOLS"},70:{n:"RULER"},71:{n:"NNAME"},72:{n:"ACOMM"},73:{n:"AMACRO"},74:{n:"PARSE"},255:{n:"",f:Bt}},i={0:{n:"BOF"},1:{n:"EOF"},3:{n:"??"},4:{n:"??"},5:{n:"??"},6:{n:"??"},7:{n:"??"},9:{n:"??"},10:{n:"??"},11:{n:"??"},12:{n:"??"},14:{n:"??"},15:{n:"??"},16:{n:"??"},17:{n:"??"},18:{n:"??"},19:{n:"??"},21:{n:"??"},22:{n:"LABEL16",f:function(e,t){var r=n(e)
return r[1].t="s",r[1].v=e._R(t-4,"cstr"),r}},23:{n:"NUMBER17",f:a},24:{n:"NUMBER18",f:function(e,t){var r=n(e)
r[1].v=e._R(2)
var a=r[1].v>>1
if(1&r[1].v)switch(7&a){case 1:a=500*(a>>3)
break
case 2:a=(a>>3)/20
break
case 4:a=(a>>3)/2e3
break
case 6:a=(a>>3)/16
break
case 7:a=(a>>3)/64
break
default:throw"unknown NUMBER_18 encoding "+(7&a)}return r[1].v=a,r}},25:{n:"FORMULA19",f:function(e,t){var r=a(e)
return e.l+=t-14,r}},26:{n:"??"},27:{n:"??"},28:{n:"??"},29:{n:"??"},30:{n:"??"},31:{n:"??"},33:{n:"??"},37:{n:"NUMBER25",f:function(e,t){var r=n(e),a=e._R(4)
return r[1].v=a>>6,r}},39:{n:"NUMBER27",f:s},40:{n:"FORMULA28",f:function(e,t){var r=s(e)
return e.l+=t-10,r}},255:{n:"",f:Bt}}
return{to_workbook:function(t,r){switch(r.type){case"base64":return e(C(d.decode(t)),r)
case"binary":return e(C(t),r)
case"buffer":case"array":return e(t,r)}throw"Unsupported type "+r.type}}}(),Da=function(){var e=Oe("t"),t=Oe("rPr"),r=/<(?:\w+:)?r>/g,n=/<\/(?:\w+:)?r>/,a=/\r\n/g,o=function(e,t,r){var n={},a=65001,o="",i=!1,l=e.match(he),c=0
if(l)for(;c!=l.length;++c){var f=pe(l[c])
switch(f[0].replace(/\w*:/g,"")){case"<condense":case"<extend":break
case"<shadow":if(!f.val)break
case"<shadow>":case"<shadow/>":n.shadow=1
break
case"</shadow>":break
case"<charset":if("1"==f.val)break
a=s[parseInt(f.val,10)]
break
case"<outline":if(!f.val)break
case"<outline>":case"<outline/>":n.outline=1
break
case"</outline>":break
case"<rFont":n.name=f.val
break
case"<sz":n.sz=f.val
break
case"<strike":if(!f.val)break
case"<strike>":case"<strike/>":n.strike=1
break
case"</strike>":break
case"<u":if(!f.val)break
switch(f.val){case"double":n.uval="double"
break
case"singleAccounting":n.uval="single-accounting"
break
case"doubleAccounting":n.uval="double-accounting"}case"<u>":case"<u/>":n.u=1
break
case"</u>":break
case"<b":if("0"==f.val)break
case"<b>":case"<b/>":n.b=1
break
case"</b>":break
case"<i":if("0"==f.val)break
case"<i>":case"<i/>":n.i=1
break
case"</i>":break
case"<color":f.rgb&&(n.color=f.rgb.slice(2,8))
break
case"<family":n.family=f.val
break
case"<vertAlign":o=f.val
break
case"<scheme":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":i=!0
break
case"</ext>":i=!1
break
default:if(47!==f[0].charCodeAt(1)&&!i)throw new Error("Unrecognized rich format "+f[0])}}var h=[]
return n.u&&h.push("text-decoration: underline;"),n.uval&&h.push("text-underline-style:"+n.uval+";"),n.sz&&h.push("font-size:"+n.sz+"pt;"),n.outline&&h.push("text-effect: outline;"),n.shadow&&h.push("text-shadow: auto;"),t.push('<span style="'+h.join("")+'">'),n.b&&(t.push("<b>"),r.push("</b>")),n.i&&(t.push("<i>"),r.push("</i>")),n.strike&&(t.push("<s>"),r.push("</s>")),"superscript"==o?o="sup":"subscript"==o&&(o="sub"),""!=o&&(t.push("<"+o+">"),r.push("</"+o+">")),r.push("</span>"),a}
function i(r){var n=[[],"",[]],s=r.match(e)
if(!s)return""
n[1]=s[1]
var i=r.match(t)
return i&&o(i[1],n[0],n[2]),n[0].join("")+n[1].replace(a,"<br/>")+n[2].join("")}return function(e){return e.replace(r,"").split(n).map(i).join("")}}(),Oa=/<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,Fa=/<(?:\w+:)?r>/,Pa=/<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g
function Na(e,t){var r=!t||t.cellHTML,n={}
return e?(e.match(/^\s*<(?:\w+:)?t[^>]*>/)?(n.t=ve(Te(e.slice(e.indexOf(">")+1).split(/<\/(?:\w+:)?t>/)[0]||"")),n.r=Te(e),r&&(n.h=we(n.t))):e.match(Fa)&&(n.r=Te(e),n.t=ve(Te((e.replace(Pa,"").match(Oa)||[]).join("").replace(he,""))),r&&(n.h=Da(n.r))),n):null}var La=/<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/,Ma=/<(?:\w+:)?(?:si|sstItem)>/g,Wa=/<\/(?:\w+:)?(?:si|sstItem)>/
Ur.SST="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings"
var Ua=/^\s|\s$|[\t\n\r]/
var Ha=function(e,t){var r=!1
return null==t&&(r=!0,t=kt(15+4*e.t.length)),t._W(1,0),Jt(e.t,t),r?t.slice(0,t.l):t}
function Va(e){var t=xt()
yt(t,"BrtBeginSst",function(e,t){return t||(t=kt(8)),t._W(4,e.Count),t._W(4,e.Unique),t}(e))
for(var r=0;r<e.length;++r)yt(t,"BrtSSTItem",Ha(e[r]))
return yt(t,"BrtEndSst"),t.end()}function za(e){if(void 0!==cptable)return cptable.utils.encode(r,e)
for(var t=[],n=e.split(""),a=0;a<n.length;++a)t[a]=n[a].charCodeAt(0)
return t}function Xa(e,t){var r={}
return r.Major=e._R(2),r.Minor=e._R(2),t>=4&&(e.l+=t-4),r}function Ga(e){for(var t=e._R(4),r=e.l+t-4,n={},a=e._R(4),s=[];a-- >0;)s.push({t:e._R(4),v:e._R(0,"lpp4")})
if(n.name=e._R(0,"lpp4"),n.comps=s,e.l!=r)throw new Error("Bad DataSpaceMapEntry: "+e.l+" != "+r)
return n}function ja(e){var t=function(e){var t={}
return e._R(4),e.l+=4,t.id=e._R(0,"lpp4"),t.name=e._R(0,"lpp4"),t.R=Xa(e,4),t.U=Xa(e,4),t.W=Xa(e,4),t}(e)
if(t.ename=e._R(0,"8lpp4"),t.blksz=e._R(4),t.cmode=e._R(4),4!=e._R(4))throw new Error("Bad !Primary record")
return t}function Ka(e,t){var r=e.l+t,n={}
n.Flags=63&e._R(4),e.l+=4,n.AlgID=e._R(4)
var a=!1
switch(n.AlgID){case 26126:case 26127:case 26128:a=36==n.Flags
break
case 26625:a=4==n.Flags
break
case 0:a=16==n.Flags||4==n.Flags||36==n.Flags
break
default:throw"Unrecognized encryption algorithm: "+n.AlgID}if(!a)throw new Error("Encryption Flags/AlgID mismatch")
return n.AlgIDHash=e._R(4),n.KeySize=e._R(4),n.ProviderType=e._R(4),e.l+=8,n.CSPName=e._R(r-e.l>>1,"utf16le"),e.l=r,n}function Ya(e,t){var r={},n=e.l+t
return e.l+=4,r.Salt=e.slice(e.l,e.l+16),e.l+=16,r.Verifier=e.slice(e.l,e.l+16),e.l+=16,e._R(4),r.VerifierHash=e.slice(e.l,n),e.l=n,r}function $a(e){if(36!=(63&e._R(4)))throw new Error("EncryptionInfo mismatch")
var t=e._R(4)
return{t:"Std",h:Ka(e,t),v:Ya(e,e.length-e.l)}}function Za(){throw new Error("File is password-protected: ECMA-376 Extensible")}function Qa(e){var t=["saltSize","blockSize","keyBits","hashSize","cipherAlgorithm","cipherChaining","hashAlgorithm","saltValue"]
e.l+=4
var r=e._R(e.length-e.l,"utf8"),n={}
return r.replace(he,function(e){var r=pe(e)
switch(ge(r[0])){case"<?xml":break
case"<encryption":case"</encryption>":break
case"<keyData":t.forEach(function(e){n[e]=r[e]})
break
case"<dataIntegrity":n.encryptedHmacKey=r.encryptedHmacKey,n.encryptedHmacValue=r.encryptedHmacValue
break
case"<keyEncryptors>":case"<keyEncryptors":n.encs=[]
break
case"</keyEncryptors>":break
case"<keyEncryptor":n.uri=r.uri
break
case"</keyEncryptor>":break
case"<encryptedKey":n.encs.push(r)
break
default:throw r[0]}}),n}function Ja(e){var t,r,n=0,a=za(e),s=a.length+1
for((t=b(s))[0]=a.length,r=1;r!=s;++r)t[r]=a[r-1]
for(r=s-1;r>=0;--r)n=((0==(16384&n)?0:1)|n<<1&32767)^t[r]
return 52811^n}var qa=function(){var e=[187,255,255,186,255,255,185,128,0,190,15,0,191,15,0],t=[57840,7439,52380,33984,4364,3600,61902,12606,6258,57657,54287,34041,10252,43370,20163],r=[44796,19929,39858,10053,20106,40212,10761,31585,63170,64933,60267,50935,40399,11199,17763,35526,1453,2906,5812,11624,23248,885,1770,3540,7080,14160,28320,56640,55369,41139,20807,41614,21821,43642,17621,28485,56970,44341,19019,38038,14605,29210,60195,50791,40175,10751,21502,43004,24537,18387,36774,3949,7898,15796,31592,63184,47201,24803,49606,37805,14203,28406,56812,17824,35648,1697,3394,6788,13576,27152,43601,17539,35078,557,1114,2228,4456,30388,60776,51953,34243,7079,14158,28316,14128,28256,56512,43425,17251,34502,7597,13105,26210,52420,35241,883,1766,3532,4129,8258,16516,33032,4657,9314,18628],n=function(e,t){return function(e){return 255&(e/2|128*e)}(e^t)},a=function(e){for(var n=t[e.length-1],a=104,s=e.length-1;s>=0;--s)for(var o=e[s],i=0;7!=i;++i)64&o&&(n^=r[a]),o*=2,--a
return n}
return function(t){for(var r,s,o,i=za(t),l=a(i),c=i.length,f=b(16),h=0;16!=h;++h)f[h]=0
for(1==(1&c)&&(r=l>>8,f[c]=n(e[0],r),--c,r=255&l,s=i[i.length-1],f[c]=n(s,r));c>0;)r=l>>8,f[--c]=n(i[c],r),r=255&l,f[--c]=n(i[c],r)
for(c=15,o=15-i.length;o>0;)r=l>>8,f[c]=n(e[o],r),--o,r=255&l,f[--c]=n(i[c],r),--c,--o
return f}}(),es=function(e){var t=0,r=qa(e)
return function(e){var n=function(e,t,r,n,a){var s,o
for(a||(a=t),n||(n=qa(e)),s=0;s!=t.length;++s)o=t[s],o=255&((o^=n[r])>>5|o<<3),a[s]=o,++r
return[a,r,n]}("",e,t,r)
return t=n[1],n[0]}}
function ts(e,t,r){var n=r||{}
return n.Info=e._R(2),e.l-=2,1===n.Info?n.Data=function(e){var t={},r=t.EncryptionVersionInfo=Xa(e,4)
if(1!=r.Major||1!=r.Minor)throw"unrecognized version code "+r.Major+" : "+r.Minor
return t.Salt=e._R(16),t.EncryptedVerifier=e._R(16),t.EncryptedVerifierHash=e._R(16),t}(e):n.Data=function(e,t){var r={},n=r.EncryptionVersionInfo=Xa(e,4)
if(t-=4,2!=n.Minor)throw new Error("unrecognized minor version code: "+n.Minor)
if(n.Major>4||n.Major<2)throw new Error("unrecognized major version code: "+n.Major)
r.Flags=e._R(4),t-=4
var a=e._R(4)
return t-=4,r.EncryptionHeader=Ka(e,a),t-=a,r.EncryptionVerifier=Ya(e,t),r}(e,t),n}var rs=function(){function e(e,r){switch(r.type){case"base64":return t(d.decode(e),r)
case"binary":return t(e,r)
case"buffer":return t(e.toString("binary"),r)
case"array":return t(Y(e),r)}throw new Error("Unrecognized type "+r.type)}function t(e,t){var r=(t||{}).dense?[]:{}
if(!e.match(/\\trowd/))throw new Error("RTF missing table")
return r["!ref"]=zt({s:{c:0,r:0},e:{c:0,r:0}}),r}return{to_workbook:function(t,r){return Kt(e(t,r),r)},to_sheet:e,from_sheet:function(e){for(var t,r=["{\\rtf1\\ansi"],n=Xt(e["!ref"]),a=Array.isArray(e),s=n.s.r;s<=n.e.r;++s){r.push("\\trowd\\trautofit1")
for(var o=n.s.c;o<=n.e.c;++o)r.push("\\cellx"+(o+1))
for(r.push("\\pard\\intbl"),o=n.s.c;o<=n.e.c;++o){var i=Ht({r:s,c:o});(t=a?(e[s]||[])[o]:e[i])&&(null!=t.v||t.f&&!t.F)&&(r.push(" "+(t.w||(jt(t),t.w))),r.push("\\cell"))}r.push("\\pard\\intbl\\row")}return r.join("")+"}"}}}()
function ns(e){for(var t=0,r=1;3!=t;++t)r=256*r+(e[t]>255?255:e[t]<0?0:e[t])
return r.toString(16).toUpperCase().slice(1)}function as(e,t){if(0===t)return e
var r=function(e){var t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(t,r,n),s=Math.min(t,r,n),o=a-s
if(0===o)return[0,0,t]
var i,l=0,c=a+s
switch(i=o/(c>1?2-c:c),a){case t:l=((r-n)/o+6)%6
break
case r:l=(n-t)/o+2
break
case n:l=(t-r)/o+4}return[l/6,i,c/2]}(function(e){var t=e.slice("#"===e[0]?1:0).slice(0,6)
return[parseInt(t.slice(0,2),16),parseInt(t.slice(2,4),16),parseInt(t.slice(4,6),16)]}(e))
return r[2]=t<0?r[2]*(1+t):1-(1-r[2])*(1-t),ns(function(e){var t,r=e[0],n=e[1],a=e[2],s=2*n*(a<.5?a:1-a),o=a-s/2,i=[o,o,o],l=6*r
if(0!==n)switch(0|l){case 0:case 6:t=s*l,i[0]+=s,i[1]+=t
break
case 1:t=s*(2-l),i[0]+=t,i[1]+=s
break
case 2:t=s*(l-2),i[1]+=s,i[2]+=t
break
case 3:t=s*(4-l),i[1]+=t,i[2]+=s
break
case 4:t=s*(l-4),i[2]+=s,i[0]+=t
break
case 5:t=s*(6-l),i[2]+=t,i[0]+=s}for(var c=0;3!=c;++c)i[c]=Math.round(255*i[c])
return i}(r))}var ss=6,os=15,is=1,ls=ss
function cs(e){return Math.floor((e+Math.round(128/ls)/256)*ls)}function fs(e){return Math.floor((e-5)/ls*100+.5)/100}function hs(e){return Math.round((e*ls+5)/ls*256)/256}function us(e){return hs(fs(cs(e)))}function ds(e){var t=Math.abs(e-us(e)),r=ls
if(t>.005)for(ls=is;ls<os;++ls)Math.abs(e-us(e))<=t&&(t=Math.abs(e-us(e)),r=ls)
ls=r}function ps(e){e.width?(e.wpx=cs(e.width),e.wch=fs(e.wpx),e.MDW=ls):e.wpx?(e.wch=fs(e.wpx),e.width=hs(e.wch),e.MDW=ls):"number"==typeof e.wch&&(e.width=hs(e.wch),e.wpx=cs(e.width),e.MDW=ls),e.customWidth&&delete e.customWidth}var gs=96
function ms(e){return 96*e/gs}function bs(e){return e*gs/96}var vs={None:"none",Solid:"solid",Gray50:"mediumGray",Gray75:"darkGray",Gray25:"lightGray",HorzStripe:"darkHorizontal",VertStripe:"darkVertical",ReverseDiagStripe:"darkDown",DiagStripe:"darkUp",DiagCross:"darkGrid",ThickDiagCross:"darkTrellis",ThinHorzStripe:"lightHorizontal",ThinVertStripe:"lightVertical",ThinReverseDiagStripe:"lightDown",ThinHorzCross:"lightGrid"}
function Cs(e,t,r,n){t.Fonts=[]
var a={},o=!1
e[0].match(he).forEach(function(e){var i=pe(e)
switch(ge(i[0])){case"<fonts":case"<fonts>":case"</fonts>":break
case"<font":case"<font>":break
case"</font>":case"<font/>":t.Fonts.push(a),a={}
break
case"<name":i.val&&(a.name=i.val)
break
case"<name/>":case"</name>":break
case"<b":a.bold=i.val?ke(i.val):1
break
case"<b/>":a.bold=1
break
case"<i":a.italic=i.val?ke(i.val):1
break
case"<i/>":a.italic=1
break
case"<u":switch(i.val){case"none":a.underline=0
break
case"single":a.underline=1
break
case"double":a.underline=2
break
case"singleAccounting":a.underline=33
break
case"doubleAccounting":a.underline=34}break
case"<u/>":a.underline=1
break
case"<strike":a.strike=i.val?ke(i.val):1
break
case"<strike/>":a.strike=1
break
case"<outline":a.outline=i.val?ke(i.val):1
break
case"<outline/>":a.outline=1
break
case"<shadow":a.shadow=i.val?ke(i.val):1
break
case"<shadow/>":a.shadow=1
break
case"<condense":a.condense=i.val?ke(i.val):1
break
case"<condense/>":a.condense=1
break
case"<extend":a.extend=i.val?ke(i.val):1
break
case"<extend/>":a.extend=1
break
case"<sz":i.val&&(a.sz=+i.val)
break
case"<sz/>":case"</sz>":break
case"<vertAlign":i.val&&(a.vertAlign=i.val)
break
case"<vertAlign/>":case"</vertAlign>":break
case"<family":i.val&&(a.family=parseInt(i.val,10))
break
case"<family/>":case"</family>":break
case"<scheme":i.val&&(a.scheme=i.val)
break
case"<scheme/>":case"</scheme>":break
case"<charset":if("1"==i.val)break
i.codepage=s[parseInt(i.val,10)]
break
case"<color":if(a.color||(a.color={}),i.auto&&(a.color.auto=ke(i.auto)),i.rgb)a.color.rgb=i.rgb.slice(-6)
else if(i.indexed){a.color.index=parseInt(i.indexed,10)
var l=Fr[a.color.index]
if(81==a.color.index&&(l=Fr[1]),!l)throw new Error(e)
a.color.rgb=l[0].toString(16)+l[1].toString(16)+l[2].toString(16)}else i.theme&&(a.color.theme=parseInt(i.theme,10),i.tint&&(a.color.tint=parseFloat(i.tint)),i.theme&&r.themeElements&&r.themeElements.clrScheme&&(a.color.rgb=as(r.themeElements.clrScheme[a.color.theme].rgb,a.color.tint||0)))
break
case"<color/>":case"</color>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":o=!0
break
case"</ext>":o=!1
break
default:if(n&&n.WTF&&!o)throw new Error("unrecognized "+i[0]+" in fonts")}})}var Es=["numFmtId","fillId","fontId","borderId","xfId"],Ss=["applyAlignment","applyBorder","applyFill","applyFont","applyNumberFormat","applyProtection","pivotButton","quotePrefix"]
var As=function(){var e=/<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/,t=/<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/,r=/<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/,n=/<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/,a=/<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/
return function(s,o,i){var l,c={}
return s?((l=(s=s.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"")).match(e))&&function(e,t,r){t.NumberFmt=[]
for(var n=N(B._table),a=0;a<n.length;++a)t.NumberFmt[n[a]]=B._table[n[a]]
var s=e[0].match(he)
if(s)for(a=0;a<s.length;++a){var o=pe(s[a])
switch(ge(o[0])){case"<numFmts":case"</numFmts>":case"<numFmts/>":case"<numFmts>":break
case"<numFmt":var i=ve(Te(o.formatCode)),l=parseInt(o.numFmtId,10)
if(t.NumberFmt[l]=i,l>0){if(l>392){for(l=392;l>60&&null!=t.NumberFmt[l];--l);t.NumberFmt[l]=i}B.load(i,l)}break
case"</numFmt>":break
default:if(r.WTF)throw new Error("unrecognized "+o[0]+" in numFmts")}}}(l,c,i),(l=s.match(n))&&Cs(l,c,o,i),(l=s.match(r))&&function(e,t,r,n){t.Fills=[]
var a={},s=!1
e[0].match(he).forEach(function(e){var r=pe(e)
switch(ge(r[0])){case"<fills":case"<fills>":case"</fills>":break
case"<fill>":case"<fill":case"<fill/>":a={},t.Fills.push(a)
break
case"</fill>":case"<gradientFill>":break
case"<gradientFill":case"</gradientFill>":t.Fills.push(a),a={}
break
case"<patternFill":case"<patternFill>":r.patternType&&(a.patternType=r.patternType)
break
case"<patternFill/>":case"</patternFill>":break
case"<bgColor":a.bgColor||(a.bgColor={}),r.indexed&&(a.bgColor.indexed=parseInt(r.indexed,10)),r.theme&&(a.bgColor.theme=parseInt(r.theme,10)),r.tint&&(a.bgColor.tint=parseFloat(r.tint)),r.rgb&&(a.bgColor.rgb=r.rgb.slice(-6))
break
case"<bgColor/>":case"</bgColor>":break
case"<fgColor":a.fgColor||(a.fgColor={}),r.theme&&(a.fgColor.theme=parseInt(r.theme,10)),r.tint&&(a.fgColor.tint=parseFloat(r.tint)),r.rgb&&(a.fgColor.rgb=r.rgb.slice(-6))
break
case"<fgColor/>":case"</fgColor>":break
case"<stop":case"<stop/>":case"</stop>":break
case"<color":case"<color/>":case"</color>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":s=!0
break
case"</ext>":s=!1
break
default:if(n&&n.WTF&&!s)throw new Error("unrecognized "+r[0]+" in fills")}})}(l,c,0,i),(l=s.match(a))&&function(e,t,r,n){t.Borders=[]
var a={},s=!1
e[0].match(he).forEach(function(e){var r=pe(e)
switch(ge(r[0])){case"<borders":case"<borders>":case"</borders>":break
case"<border":case"<border>":case"<border/>":a={},r.diagonalUp&&(a.diagonalUp=r.diagonalUp),r.diagonalDown&&(a.diagonalDown=r.diagonalDown),t.Borders.push(a)
break
case"</border>":case"<left/>":break
case"<left":case"<left>":case"</left>":case"<right/>":break
case"<right":case"<right>":case"</right>":case"<top/>":break
case"<top":case"<top>":case"</top>":case"<bottom/>":break
case"<bottom":case"<bottom>":case"</bottom>":break
case"<diagonal":case"<diagonal>":case"<diagonal/>":case"</diagonal>":break
case"<horizontal":case"<horizontal>":case"<horizontal/>":case"</horizontal>":break
case"<vertical":case"<vertical>":case"<vertical/>":case"</vertical>":break
case"<start":case"<start>":case"<start/>":case"</start>":break
case"<end":case"<end>":case"<end/>":case"</end>":break
case"<color":case"<color>":break
case"<color/>":case"</color>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":s=!0
break
case"</ext>":s=!1
break
default:if(n&&n.WTF&&!s)throw new Error("unrecognized "+r[0]+" in borders")}})}(l,c,0,i),(l=s.match(t))&&function(e,t,r){var n
t.CellXf=[]
var a=!1
e[0].match(he).forEach(function(e){var s=pe(e),o=0
switch(ge(s[0])){case"<cellXfs":case"<cellXfs>":case"<cellXfs/>":case"</cellXfs>":break
case"<xf":case"<xf/>":for(delete(n=s)[0],o=0;o<Es.length;++o)n[Es[o]]&&(n[Es[o]]=parseInt(n[Es[o]],10))
for(o=0;o<Ss.length;++o)n[Ss[o]]&&(n[Ss[o]]=ke(n[Ss[o]]))
if(n.numFmtId>392)for(o=392;o>60;--o)if(t.NumberFmt[n.numFmtId]==t.NumberFmt[o]){n.numFmtId=o
break}t.CellXf.push(n)
break
case"</xf>":break
case"<alignment":case"<alignment/>":var i={}
s.vertical&&(i.vertical=s.vertical),s.horizontal&&(i.horizontal=s.horizontal),null!=s.textRotation&&(i.textRotation=s.textRotation),s.indent&&(i.indent=s.indent),s.wrapText&&(i.wrapText=s.wrapText),n.alignment=i
break
case"</alignment>":break
case"<protection":case"</protection>":case"<protection/>":break
case"<extLst":case"<extLst>":case"</extLst>":break
case"<ext":a=!0
break
case"</ext>":a=!1
break
default:if(r&&r.WTF&&!a)throw new Error("unrecognized "+s[0]+" in cellXfs")}})}(l,c,i),c):c}}(),_s=Ve("styleSheet",null,{xmlns:Xe.main[0],"xmlns:vt":Xe.vt})
function ws(e,t){var r,n=[ce,_s]
return e.SSF&&null!=(r=function(e){var t=["<numFmts>"]
return[[5,8],[23,26],[41,44],[50,392]].forEach(function(r){for(var n=r[0];n<=r[1];++n)null!=e[n]&&(t[t.length]=Ve("numFmt",null,{numFmtId:n,formatCode:Se(e[n])}))}),1===t.length?"":(t[t.length]="</numFmts>",t[0]=Ve("numFmts",null,{count:t.length-2}).replace("/>",">"),t.join(""))}(e.SSF))&&(n[n.length]=r),n[n.length]='<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>',n[n.length]='<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>',n[n.length]='<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>',n[n.length]='<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>',(r=function(e){var t=[]
return t[t.length]=Ve("cellXfs",null),e.forEach(function(e){t[t.length]=Ve("xf",null,e)}),t[t.length]="</cellXfs>",2===t.length?"":(t[0]=Ve("cellXfs",null,{count:t.length-2}).replace("/>",">"),t.join(""))}(t.cellXfs))&&(n[n.length]=r),n[n.length]='<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>',n[n.length]='<dxfs count="0"/>',n[n.length]='<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>',n.length>2&&(n[n.length]="</styleSheet>",n[1]=n[1].replace("/>",">")),n.join("")}function Rs(e,t,r){r||(r=kt(6+4*t.length)),r._W(2,e),Jt(t,r)
var n=r.length>r.l?r.slice(0,r.l):r
return null==r.l&&(r.l=r.length),n}function Bs(e,t){t||(t=kt(153)),t._W(2,20*e.sz),function(e,t){t||(t=kt(2))
var r=(e.italic?2:0)|(e.strike?8:0)|(e.outline?16:0)|(e.shadow?32:0)|(e.condense?64:0)|(e.extend?128:0)
t._W(1,r),t._W(1,0)}(e,t),t._W(2,e.bold?700:400)
var r=0
"superscript"==e.vertAlign?r=1:"subscript"==e.vertAlign&&(r=2),t._W(2,r),t._W(1,e.underline||0),t._W(1,e.family||0),t._W(1,e.charset||0),t._W(1,0),Er(e.color,t)
var n=0
return"major"==e.scheme&&(n=1),"minor"==e.scheme&&(n=2),t._W(1,n),Jt(e.name,t),t.length>t.l?t.slice(0,t.l):t}Ur.STY="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"
var ks=M(["none","solid","mediumGray","darkGray","lightGray","darkHorizontal","darkVertical","darkDown","darkUp","darkGrid","darkTrellis","lightHorizontal","lightVertical","lightDown","lightUp","lightGrid","lightTrellis","gray125","gray0625"]),Ts=Bt
function xs(e,t){t||(t=kt(84))
var r=ks[e.patternType]
null==r&&(r=40),t._W(4,r)
var n=0
if(40!=r)for(Er({auto:1},t),Er({auto:1},t);n<12;++n)t._W(4,0)
else{for(;n<4;++n)t._W(4,0)
for(;n<12;++n)t._W(4,0)}return t.length>t.l?t.slice(0,t.l):t}function ys(e,t,r){return r||(r=kt(16)),r._W(2,t||0),r._W(2,e.numFmtId||0),r._W(2,0),r._W(2,0),r._W(2,0),r._W(1,0),r._W(1,0),r._W(1,0),r._W(1,0),r._W(1,0),r._W(1,0),r}function Is(e,t){return t||(t=kt(10)),t._W(1,0),t._W(1,0),t._W(4,0),t._W(4,0),t}var Ds=Bt
function Os(e){yt(e,"BrtBeginBorders",Zt(1)),yt(e,"BrtBorder",function(e,t){return t||(t=kt(51)),t._W(1,0),Is(0,t),Is(0,t),Is(0,t),Is(0,t),Is(0,t),t.length>t.l?t.slice(0,t.l):t}()),yt(e,"BrtEndBorders")}function Fs(e){yt(e,"BrtBeginStyles",Zt(1)),yt(e,"BrtStyle",function(e,t){return t||(t=kt(52)),t._W(4,e.xfId),t._W(2,1),t._W(1,+e.builtinId),t._W(1,0),lr(e.name||"",t),t.length>t.l?t.slice(0,t.l):t}({xfId:0,builtinId:0,name:"Normal"})),yt(e,"BrtEndStyles")}function Ps(e){yt(e,"BrtBeginTableStyles",function(e,t,r){var n=kt(2052)
return n._W(4,e),lr(t,n),lr(r,n),n.length>n.l?n.slice(0,n.l):n}(0,"TableStyleMedium9","PivotStyleMedium4")),yt(e,"BrtEndTableStyles")}function Ns(e,t){var r=xt()
return yt(r,"BrtBeginStyleSheet"),function(e,t){if(t){var r=0;[[5,8],[23,26],[41,44],[50,392]].forEach(function(e){for(var n=e[0];n<=e[1];++n)null!=t[n]&&++r}),0!=r&&(yt(e,"BrtBeginFmts",Zt(r)),[[5,8],[23,26],[41,44],[50,392]].forEach(function(r){for(var n=r[0];n<=r[1];++n)null!=t[n]&&yt(e,"BrtFmt",Rs(n,t[n]))}),yt(e,"BrtEndFmts"))}}(r,e.SSF),function(e){yt(e,"BrtBeginFonts",Zt(1)),yt(e,"BrtFont",Bs({sz:12,color:{theme:1},name:"Calibri",family:2,scheme:"minor"})),yt(e,"BrtEndFonts")}(r),function(e){yt(e,"BrtBeginFills",Zt(2)),yt(e,"BrtFill",xs({patternType:"none"})),yt(e,"BrtFill",xs({patternType:"gray125"})),yt(e,"BrtEndFills")}(r),Os(r),function(e){yt(e,"BrtBeginCellStyleXFs",Zt(1)),yt(e,"BrtXF",ys({numFmtId:0,fontId:0,fillId:0,borderId:0},65535)),yt(e,"BrtEndCellStyleXFs")}(r),function(e,t){yt(e,"BrtBeginCellXFs",Zt(t.length)),t.forEach(function(t){yt(e,"BrtXF",ys(t,0))}),yt(e,"BrtEndCellXFs")}(r,t.cellXfs),Fs(r),function(e){yt(e,"BrtBeginDXFs",Zt(0)),yt(e,"BrtEndDXFs")}(r),Ps(r),yt(r,"BrtEndStyleSheet"),r.end()}function Ls(e,t,r){t.themeElements.clrScheme=[]
var n={};(e[0].match(he)||[]).forEach(function(e){var a=pe(e)
switch(a[0]){case"<a:clrScheme":case"</a:clrScheme>":break
case"<a:srgbClr":n.rgb=a.val
break
case"<a:sysClr":n.rgb=a.lastClr
break
case"<a:dk1>":case"</a:dk1>":case"<a:lt1>":case"</a:lt1>":case"<a:dk2>":case"</a:dk2>":case"<a:lt2>":case"</a:lt2>":case"<a:accent1>":case"</a:accent1>":case"<a:accent2>":case"</a:accent2>":case"<a:accent3>":case"</a:accent3>":case"<a:accent4>":case"</a:accent4>":case"<a:accent5>":case"</a:accent5>":case"<a:accent6>":case"</a:accent6>":case"<a:hlink>":case"</a:hlink>":case"<a:folHlink>":case"</a:folHlink>":"/"===a[0].charAt(1)?(t.themeElements.clrScheme.push(n),n={}):n.name=a[0].slice(3,a[0].length-1)
break
default:if(r&&r.WTF)throw new Error("Unrecognized "+a[0]+" in clrScheme")}})}function Ms(){}function Ws(){}Ur.THEME="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme"
var Us=/<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/,Hs=/<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/,Vs=/<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/
var zs=/<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/
function Xs(e,t){if(!e||0===e.length)return Xs(Gs())
var r,n={}
if(!(r=e.match(zs)))throw new Error("themeElements not found in theme")
return function(e,t,r){var n
t.themeElements={},[["clrScheme",Us,Ls],["fontScheme",Hs,Ms],["fmtScheme",Vs,Ws]].forEach(function(a){if(!(n=e.match(a[1])))throw new Error(a[0]+" not found in themeElements")
a[2](n,t,r)})}(r[0],n,t),n}function Gs(e,t){if(t&&t.themeXLSX)return t.themeXLSX
var r=[ce]
return r[r.length]='<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">',r[r.length]="<a:themeElements>",r[r.length]='<a:clrScheme name="Office">',r[r.length]='<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>',r[r.length]='<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>',r[r.length]='<a:dk2><a:srgbClr val="1F497D"/></a:dk2>',r[r.length]='<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>',r[r.length]='<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>',r[r.length]='<a:accent2><a:srgbClr val="C0504D"/></a:accent2>',r[r.length]='<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>',r[r.length]='<a:accent4><a:srgbClr val="8064A2"/></a:accent4>',r[r.length]='<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>',r[r.length]='<a:accent6><a:srgbClr val="F79646"/></a:accent6>',r[r.length]='<a:hlink><a:srgbClr val="0000FF"/></a:hlink>',r[r.length]='<a:folHlink><a:srgbClr val="800080"/></a:folHlink>',r[r.length]="</a:clrScheme>",r[r.length]='<a:fontScheme name="Office">',r[r.length]="<a:majorFont>",r[r.length]='<a:latin typeface="Cambria"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Times New Roman"/>',r[r.length]='<a:font script="Hebr" typeface="Times New Roman"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="MoolBoran"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Times New Roman"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:majorFont>",r[r.length]="<a:minorFont>",r[r.length]='<a:latin typeface="Calibri"/>',r[r.length]='<a:ea typeface=""/>',r[r.length]='<a:cs typeface=""/>',r[r.length]='<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>',r[r.length]='<a:font script="Hang" typeface="맑은 고딕"/>',r[r.length]='<a:font script="Hans" typeface="宋体"/>',r[r.length]='<a:font script="Hant" typeface="新細明體"/>',r[r.length]='<a:font script="Arab" typeface="Arial"/>',r[r.length]='<a:font script="Hebr" typeface="Arial"/>',r[r.length]='<a:font script="Thai" typeface="Tahoma"/>',r[r.length]='<a:font script="Ethi" typeface="Nyala"/>',r[r.length]='<a:font script="Beng" typeface="Vrinda"/>',r[r.length]='<a:font script="Gujr" typeface="Shruti"/>',r[r.length]='<a:font script="Khmr" typeface="DaunPenh"/>',r[r.length]='<a:font script="Knda" typeface="Tunga"/>',r[r.length]='<a:font script="Guru" typeface="Raavi"/>',r[r.length]='<a:font script="Cans" typeface="Euphemia"/>',r[r.length]='<a:font script="Cher" typeface="Plantagenet Cherokee"/>',r[r.length]='<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>',r[r.length]='<a:font script="Tibt" typeface="Microsoft Himalaya"/>',r[r.length]='<a:font script="Thaa" typeface="MV Boli"/>',r[r.length]='<a:font script="Deva" typeface="Mangal"/>',r[r.length]='<a:font script="Telu" typeface="Gautami"/>',r[r.length]='<a:font script="Taml" typeface="Latha"/>',r[r.length]='<a:font script="Syrc" typeface="Estrangelo Edessa"/>',r[r.length]='<a:font script="Orya" typeface="Kalinga"/>',r[r.length]='<a:font script="Mlym" typeface="Kartika"/>',r[r.length]='<a:font script="Laoo" typeface="DokChampa"/>',r[r.length]='<a:font script="Sinh" typeface="Iskoola Pota"/>',r[r.length]='<a:font script="Mong" typeface="Mongolian Baiti"/>',r[r.length]='<a:font script="Viet" typeface="Arial"/>',r[r.length]='<a:font script="Uigh" typeface="Microsoft Uighur"/>',r[r.length]='<a:font script="Geor" typeface="Sylfaen"/>',r[r.length]="</a:minorFont>",r[r.length]="</a:fontScheme>",r[r.length]='<a:fmtScheme name="Office">',r[r.length]="<a:fillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="1"/>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:lin ang="16200000" scaled="0"/>',r[r.length]="</a:gradFill>",r[r.length]="</a:fillStyleLst>",r[r.length]="<a:lnStyleLst>",r[r.length]='<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]='<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>',r[r.length]="</a:lnStyleLst>",r[r.length]="<a:effectStyleLst>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]="</a:effectStyle>",r[r.length]="<a:effectStyle>",r[r.length]="<a:effectLst>",r[r.length]='<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>',r[r.length]="</a:effectLst>",r[r.length]='<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>',r[r.length]='<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>',r[r.length]="</a:effectStyle>",r[r.length]="</a:effectStyleLst>",r[r.length]="<a:bgFillStyleLst>",r[r.length]='<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>',r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]='<a:gradFill rotWithShape="1">',r[r.length]="<a:gsLst>",r[r.length]='<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>',r[r.length]='<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>',r[r.length]="</a:gsLst>",r[r.length]='<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>',r[r.length]="</a:gradFill>",r[r.length]="</a:bgFillStyleLst>",r[r.length]="</a:fmtScheme>",r[r.length]="</a:themeElements>",r[r.length]="<a:objectDefaults>",r[r.length]="<a:spDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>',r[r.length]="</a:spDef>",r[r.length]="<a:lnDef>",r[r.length]='<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>',r[r.length]="</a:lnDef>",r[r.length]="</a:objectDefaults>",r[r.length]="<a:extraClrSchemeLst/>",r[r.length]="</a:theme>",r.join("")}function js(e){var t={}
switch(t.xclrType=e._R(2),t.nTintShade=e._R(2),t.xclrType){case 0:e.l+=4
break
case 1:t.xclrValue=function(e,t){return Bt(e,t)}(e,4)
break
case 2:t.xclrValue=Xn(e)
break
case 3:t.xclrValue=function(e){return e._R(4)}(e)
break
case 4:e.l+=4}return e.l+=8,t}function Ks(e){var t=e._R(2),r=e._R(2)-4,n=[t]
switch(t){case 4:case 5:case 7:case 8:case 9:case 10:case 11:case 13:n[1]=js(e)
break
case 6:n[1]=function(e,t){return Bt(e,t)}(e,r)
break
case 14:case 15:n[1]=e._R(1===r?1:2)
break
default:throw new Error("Unrecognized ExtProp type: "+t+" "+r)}return n}function Ys(e,t){t.forEach(function(e){e[0]})}Ur.IMG="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",Ur.DRAW="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing"
var $s=1024
function Zs(e,t){for(var r=[21600,21600],n=["m0,0l0",r[1],r[0],r[1],r[0],"0xe"].join(","),a=[Ve("xml",null,{"xmlns:v":Ge.v,"xmlns:o":Ge.o,"xmlns:x":Ge.x,"xmlns:mv":Ge.mv}).replace(/\/>/,">"),Ve("o:shapelayout",Ve("o:idmap",null,{"v:ext":"edit",data:e}),{"v:ext":"edit"}),Ve("v:shapetype",[Ve("v:stroke",null,{joinstyle:"miter"}),Ve("v:path",null,{gradientshapeok:"t","o:connecttype":"rect"})].join(""),{id:"_x0000_t202","o:spt":202,coordsize:r.join(","),path:n})];$s<1e3*e;)$s+=1e3
return t.forEach(function(e){var t=Ut(e[0])
a=a.concat(["<v:shape"+He({id:"_x0000_s"+ ++$s,type:"#_x0000_t202",style:"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10"+(e[1].hidden?";visibility:hidden":""),fillcolor:"#ECFAD4",strokecolor:"#edeaa1"})+">",Ve("v:fill",Ve("o:fill",null,{type:"gradientUnscaled","v:ext":"view"}),{color2:"#BEFF82",angle:"-180",type:"gradient"}),Ve("v:shadow",null,{on:"t",obscured:"t"}),Ve("v:path",null,{"o:connecttype":"none"}),'<v:textbox><div style="text-align:left"></div></v:textbox>','<x:ClientData ObjectType="Note">',"<x:MoveWithCells/>","<x:SizeWithCells/>",Ue("x:Anchor",[t.c,0,t.r,0,t.c+3,100,t.r+5,100].join(",")),Ue("x:AutoFill","False"),Ue("x:Row",String(t.r)),Ue("x:Column",String(t.c)),e[1].hidden?"":"<x:Visible/>","</x:ClientData>","</v:shape>"])}),a.push("</xml>"),a.join("")}function Qs(e,t,r){var n,a,s=Array.isArray(t)
r.forEach(function(e){if(s?(a=Ut(e.ref),t[a.r]||(t[a.r]=[]),n=t[a.r][a.c]):n=t[e.ref],!n){n={},s?t[a.r][a.c]=n:t[e.ref]=n
var r=Xt(t["!ref"]||"BDWGO1000001:A1"),o=Ut(e.ref)
r.s.r>o.r&&(r.s.r=o.r),r.e.r<o.r&&(r.e.r=o.r),r.s.c>o.c&&(r.s.c=o.c),r.e.c<o.c&&(r.e.c=o.c)
var i=zt(r)
i!==t["!ref"]&&(t["!ref"]=i)}n.c||(n.c=[])
var l={a:e.author,t:e.t,r:e.r}
e.h&&(l.h=e.h),n.c.push(l)})}Ur.CMNT="http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments"
var Js=Ve("comments",null,{xmlns:Xe.main[0]})
var qs=Qt
function eo(e){var t=xt(),r=[]
return yt(t,"BrtBeginComments"),yt(t,"BrtBeginCommentAuthors"),e.forEach(function(e){e[1].forEach(function(e){r.indexOf(e.a)>-1||(r.push(e.a.slice(0,54)),yt(t,"BrtCommentAuthor",function(e){return Jt(e.slice(0,54))}(e.a)))})}),yt(t,"BrtEndCommentAuthors"),yt(t,"BrtBeginCommentList"),e.forEach(function(e){e[1].forEach(function(n){n.iauthor=r.indexOf(n.a)
var a={s:Ut(e[0]),e:Ut(e[0])}
yt(t,"BrtBeginComment",function(e,t){return null==t&&(t=kt(36)),t._W(4,e[1].iauthor),gr(e[0],t),t._W(4,0),t._W(4,0),t._W(4,0),t._W(4,0),t}([a,n])),n.t&&n.t.length>0&&yt(t,"BrtCommentText",rr(n)),yt(t,"BrtEndComment"),delete n.iauthor})}),yt(t,"BrtEndCommentList"),yt(t,"BrtEndComments"),t.end()}var to="application/vnd.ms-office.vbaProject"
var ro=["xlsb","xlsm","xlam","biff8","xla"]
Ur.DS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet",Ur.MS="http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet"
var no=function(){var e=/(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g,t={r:0,c:0}
function r(e,r,n,a,s,o){var i=a.length>0?0|parseInt(a,10):0,l=o.length>0?0|parseInt(o,10):0
l<0&&0===s.length&&(l=0)
var c=!1,f=!1
return(s.length>0||0==o.length)&&(c=!0),c?l+=t.c:--l,(n.length>0||0==a.length)&&(f=!0),f?i+=t.r:--i,r+(c?"":"$")+Mt(l)+(f?"":"$")+Nt(i)}return function(n,a){return t=a,n.replace(e,r)}}(),ao=/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g,so=function(e,t){return e.replace(ao,function(e,r,n,a,s,o){var i=Lt(a)-(n?0:t.c),l=Pt(o)-(s?0:t.r)
return r+"R"+(0==l?"":s?l+1:"["+l+"]")+"C"+(0==i?"":n?i+1:"["+i+"]")})}
function oo(e,t,r){var n=Vt(t).s,a=Ut(r)
return function(e,t){return e.replace(ao,function(e,r,n,a,s,o){return r+("$"==n?n+a:Mt(Lt(a)+t.c))+("$"==s?s+o:Nt(Pt(o)+t.r))})}(e,{r:a.r-n.r,c:a.c-n.c})}function io(e){return e.replace(/_xlfn\./g,"")}function lo(e){e.l+=1}function co(e,t){var r=e._R(1==t?1:2)
return[16383&r,r>>14&1,r>>15&1]}function fo(e,t,r){var n=2
if(r){if(r.biff>=2&&r.biff<=5)return ho(e)
12==r.biff&&(n=4)}var a=e._R(n),s=e._R(n),o=co(e,2),i=co(e,2)
return{s:{r:a,c:o[0],cRel:o[1],rRel:o[2]},e:{r:s,c:i[0],cRel:i[1],rRel:i[2]}}}function ho(e){var t=co(e,2),r=co(e,2),n=e._R(1),a=e._R(1)
return{s:{r:t[0],c:n,cRel:t[1],rRel:t[2]},e:{r:r[0],c:a,cRel:r[1],rRel:r[2]}}}function uo(e,t,r){if(r&&r.biff>=2&&r.biff<=5)return function(e){var t=co(e,2),r=e._R(1)
return{r:t[0],c:r,cRel:t[1],rRel:t[2]}}(e)
var n=e._R(r&&12==r.biff?4:2),a=co(e,2)
return{r:n,c:a[0],cRel:a[1],rRel:a[2]}}function po(e){var t=e._R(2),r=e._R(2)
return{r:t,c:255&r,fQuoted:!!(16384&r),cRel:r>>15,rRel:r>>15}}function go(e){return[e._R(1),e._R(1)]}function mo(e,t){var r=[e._R(1)]
if(12==t)switch(r[0]){case 2:r[0]=4
break
case 4:r[0]=16
break
case 0:r[0]=1
break
case 1:r[0]=2}switch(r[0]){case 4:r[1]=yn(e,1)?"TRUE":"FALSE",12!=t&&(e.l+=7)
break
case 37:case 16:r[1]=vr[e[e.l]],e.l+=12==t?4:8
break
case 0:e.l+=8
break
case 1:r[1]=mr(e)
break
case 2:r[1]=Wn(e,0,{biff:t>0&&t<8?2:t})
break
default:throw new Error("Bad SerAr: "+r[0])}return r}function bo(e,t,r){for(var n=e._R(12==r.biff?4:2),a=[],s=0;s!=n;++s)a.push((12==r.biff?pr:Zn)(e,8))
return a}function vo(e,t,r){var n=0,a=0
12==r.biff?(n=e._R(4),a=e._R(4)):(a=1+e._R(1),n=1+e._R(2)),r.biff>=2&&r.biff<8&&(--n,0==--a&&(a=256))
for(var s=0,o=[];s!=n&&(o[s]=[]);++s)for(var i=0;i!=a;++i)o[s][i]=mo(e,r.biff)
return o}function Co(e,t,r){return e.l+=2,[po(e)]}function Eo(e){return e.l+=6,[]}var So=Co,Ao=Eo,_o=Eo,wo=Co
function Ro(e){return e.l+=2,[Dn(e),1&e._R(2)]}var Bo=Co,ko=Ro,To=Eo,xo=Co,yo=Co,Io=["Data","All","Headers","??","?Data2","??","?DataHeaders","??","Totals","??","??","??","?DataTotals","??","??","??","?Current"]
var Do={1:{n:"PtgExp",f:function(e,t,r){return e.l++,r&&12==r.biff?[e._R(4,"i"),0]:[e._R(2),e._R(r&&2==r.biff?1:2)]}},2:{n:"PtgTbl",f:Bt},3:{n:"PtgAdd",f:lo},4:{n:"PtgSub",f:lo},5:{n:"PtgMul",f:lo},6:{n:"PtgDiv",f:lo},7:{n:"PtgPower",f:lo},8:{n:"PtgConcat",f:lo},9:{n:"PtgLt",f:lo},10:{n:"PtgLe",f:lo},11:{n:"PtgEq",f:lo},12:{n:"PtgGe",f:lo},13:{n:"PtgGt",f:lo},14:{n:"PtgNe",f:lo},15:{n:"PtgIsect",f:lo},16:{n:"PtgUnion",f:lo},17:{n:"PtgRange",f:lo},18:{n:"PtgUplus",f:lo},19:{n:"PtgUminus",f:lo},20:{n:"PtgPercent",f:lo},21:{n:"PtgParen",f:lo},22:{n:"PtgMissArg",f:lo},23:{n:"PtgStr",f:function(e,t,r){return e.l++,Pn(e,0,r)}},26:{n:"PtgSheet",f:function(e,t,r){return e.l+=5,e.l+=2,e.l+=2==r.biff?1:4,["PTGSHEET"]}},27:{n:"PtgEndSheet",f:function(e,t,r){return e.l+=2==r.biff?4:5,["PTGENDSHEET"]}},28:{n:"PtgErr",f:function(e){return e.l++,vr[e._R(1)]}},29:{n:"PtgBool",f:function(e){return e.l++,0!==e._R(1)}},30:{n:"PtgInt",f:function(e){return e.l++,e._R(2)}},31:{n:"PtgNum",f:function(e){return e.l++,mr(e)}},32:{n:"PtgArray",f:function(e,t,r){var n=(96&e[e.l++])>>5
return e.l+=2==r.biff?6:12==r.biff?14:7,[n]}},33:{n:"PtgFunc",f:function(e,t,r){var n=(96&e[e.l])>>5
e.l+=1
var a=e._R(r&&r.biff<=3?1:2)
return[Jo[a],Qo[a],n]}},34:{n:"PtgFuncVar",f:function(e,t,r){var n=e[e.l++],a=e._R(1),s=r&&r.biff<=3?[88==n?-1:0,e._R(1)]:function(e){return[e[e.l+1]>>7,32767&e._R(2)]}(e)
return[a,(0===s[0]?Qo:Zo)[s[1]]]}},35:{n:"PtgName",f:function(e,t,r){var n=e._R(1)>>>5&3,a=!r||r.biff>=8?4:2,s=e._R(a)
switch(r.biff){case 2:e.l+=5
break
case 3:case 4:e.l+=8
break
case 5:e.l+=12}return[n,0,s]}},36:{n:"PtgRef",f:function(e,t,r){var n=(96&e[e.l])>>5
return e.l+=1,[n,uo(e,0,r)]}},37:{n:"PtgArea",f:function(e,t,r){return[(96&e[e.l++])>>5,fo(e,r.biff>=2&&r.biff,r)]}},38:{n:"PtgMemArea",f:function(e,t,r){var n=e._R(1)>>>5&3
return e.l+=r&&2==r.biff?3:4,[n,e._R(r&&2==r.biff?1:2)]}},39:{n:"PtgMemErr",f:Bt},40:{n:"PtgMemNoMem",f:Bt},41:{n:"PtgMemFunc",f:function(e,t,r){return[e._R(1)>>>5&3,e._R(r&&2==r.biff?1:2)]}},42:{n:"PtgRefErr",f:function(e,t,r){var n=e._R(1)>>>5&3
return e.l+=4,r.biff<8&&e.l--,12==r.biff&&(e.l+=2),[n]}},43:{n:"PtgAreaErr",f:function(e,t,r){var n=(96&e[e.l++])>>5
return e.l+=r&&r.biff>8?12:r.biff<8?6:8,[n]}},44:{n:"PtgRefN",f:function(e,t,r){var n=(96&e[e.l])>>5
return e.l+=1,[n,function(e,t,r){var n=r&&r.biff?r.biff:8
if(n>=2&&n<=5)return function(e){var t=e._R(2),r=e._R(1),n=(32768&t)>>15,a=(16384&t)>>14
return t&=16383,1==n&&t>=8192&&(t-=16384),1==a&&r>=128&&(r-=256),{r:t,c:r,cRel:a,rRel:n}}(e)
var a=e._R(n>=12?4:2),s=e._R(2),o=(16384&s)>>14,i=(32768&s)>>15
if(s&=16383,1==i)for(;a>524287;)a-=1048576
if(1==o)for(;s>8191;)s-=16384
return{r:a,c:s,cRel:o,rRel:i}}(e,0,r)]}},45:{n:"PtgAreaN",f:function(e,t,r){return[(96&e[e.l++])>>5,function(e,t,r){if(r.biff<8)return ho(e)
var n=e._R(12==r.biff?4:2),a=e._R(12==r.biff?4:2),s=co(e,2),o=co(e,2)
return{s:{r:n,c:s[0],cRel:s[1],rRel:s[2]},e:{r:a,c:o[0],cRel:o[1],rRel:o[2]}}}(e,0,r)]}},46:{n:"PtgMemAreaN",f:function(e){return[e._R(1)>>>5&3,e._R(2)]}},47:{n:"PtgMemNoMemN",f:function(e){return[e._R(1)>>>5&3,e._R(2)]}},57:{n:"PtgNameX",f:function(e,t,r){return 5==r.biff?function(e){var t=e._R(1)>>>5&3,r=e._R(2,"i")
e.l+=8
var n=e._R(2)
return e.l+=12,[t,r,n]}(e):[e._R(1)>>>5&3,e._R(2),e._R(4)]}},58:{n:"PtgRef3d",f:function(e,t,r){var n=(96&e[e.l])>>5
e.l+=1
var a=e._R(2)
return r&&5==r.biff&&(e.l+=12),[n,a,uo(e,0,r)]}},59:{n:"PtgArea3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e._R(2,"i")
if(r)switch(r.biff){case 5:e.l+=12}return[n,a,fo(e,0,r)]}},60:{n:"PtgRefErr3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e._R(2),s=4
if(r)switch(r.biff){case 5:s=15
break
case 12:s=6}return e.l+=s,[n,a]}},61:{n:"PtgAreaErr3d",f:function(e,t,r){var n=(96&e[e.l++])>>5,a=e._R(2),s=8
if(r)switch(r.biff){case 5:e.l+=12,s=6
break
case 12:s=12}return e.l+=s,[n,a]}},255:{}},Oo={64:32,96:32,65:33,97:33,66:34,98:34,67:35,99:35,68:36,100:36,69:37,101:37,70:38,102:38,71:39,103:39,72:40,104:40,73:41,105:41,74:42,106:42,75:43,107:43,76:44,108:44,77:45,109:45,78:46,110:46,79:47,111:47,88:34,120:34,89:57,121:57,90:58,122:58,91:59,123:59,92:60,124:60,93:61,125:61};(function(){for(var e in Oo)Do[e]=Do[Oo[e]]})()
var Fo={1:{n:"PtgElfLel",f:Ro},2:{n:"PtgElfRw",f:xo},3:{n:"PtgElfCol",f:So},6:{n:"PtgElfRwV",f:yo},7:{n:"PtgElfColV",f:wo},10:{n:"PtgElfRadical",f:Bo},11:{n:"PtgElfRadicalS",f:To},13:{n:"PtgElfColS",f:Ao},15:{n:"PtgElfColSV",f:_o},16:{n:"PtgElfRadicalLel",f:ko},25:{n:"PtgList",f:function(e){e.l+=2
var t=e._R(2),r=e._R(2),n=e._R(4),a=e._R(2),s=e._R(2)
return{ixti:t,coltype:3&r,rt:Io[r>>2&31],idx:n,c:a,C:s}}},29:{n:"PtgSxName",f:function(e){return e.l+=2,[e._R(4)]}},255:{}},Po={0:{n:"PtgAttrNoop",f:function(e){return e.l+=4,[0,0]}},1:{n:"PtgAttrSemi",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=r&&2==r.biff?3:4,[n]}},2:{n:"PtgAttrIf",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=2,[n,e._R(r&&2==r.biff?1:2)]}},4:{n:"PtgAttrChoose",f:function(e,t,r){e.l+=2
for(var n=e._R(r&&2==r.biff?1:2),a=[],s=0;s<=n;++s)a.push(e._R(r&&2==r.biff?1:2))
return a}},8:{n:"PtgAttrGoto",f:function(e,t,r){var n=255&e[e.l+1]?1:0
return e.l+=2,[n,e._R(r&&2==r.biff?1:2)]}},16:{n:"PtgAttrSum",f:function(e,t,r){e.l+=r&&2==r.biff?3:4}},32:{n:"PtgAttrBaxcel",f:function(e){var t=1&e[e.l+1]
return e.l+=4,[t,1]}},64:{n:"PtgAttrSpace",f:function(e){return e._R(2),go(e)}},65:{n:"PtgAttrSpaceSemi",f:function(e){return e._R(2),go(e)}},128:{n:"PtgAttrIfError",f:function(e){var t=255&e[e.l+1]?1:0
return e.l+=2,[t,e._R(2)]}},255:{}}
function No(e,t,r,n){if(n.biff<8)return Bt(e,t)
for(var a=e.l+t,s=[],o=0;o!==r.length;++o)switch(r[o][0]){case"PtgArray":r[o][1]=vo(e,0,n),s.push(r[o][1])
break
case"PtgMemArea":r[o][2]=bo(e,r[o][1],n),s.push(r[o][2])
break
case"PtgExp":n&&12==n.biff&&(r[o][1][1]=e._R(4),s.push(r[o][1]))
break
case"PtgList":case"PtgElfRadicalS":case"PtgElfColS":case"PtgElfColSV":throw"Unsupported "+r[o][0]}return 0!==(t=a-e.l)&&s.push(Bt(e,t)),s}function Lo(e,t,r){for(var n,a,s=e.l+t,o=[];s!=e.l;)t=s-e.l,a=e[e.l],n=Do[a],24!==a&&25!==a||(n=(24===a?Fo:Po)[e[e.l+1]]),n&&n.f?o.push([n.n,n.f(e,t,r)]):Bt(e,t)
return o}function Mo(e){for(var t=[],r=0;r<e.length;++r){for(var n=e[r],a=[],s=0;s<n.length;++s){var o=n[s]
if(o)switch(o[0]){case 2:a.push('"'+o[1].replace(/"/g,'""')+'"')
break
default:a.push(o[1])}else a.push("")}t.push(a.join(","))}return t.join(";")}Po[33]=Po[32]
var Wo={PtgAdd:"+",PtgConcat:"&",PtgDiv:"/",PtgEq:"=",PtgGe:">=",PtgGt:">",PtgLe:"<=",PtgLt:"<",PtgMul:"*",PtgNe:"<>",PtgPower:"^",PtgSub:"-"}
function Uo(e,t,r){return function(e,t){if(!(e||t&&t.biff<=5&&t.biff>=2))throw new Error("empty sheet name")
return e.indexOf(" ")>-1?"'"+e+"'":e}(function(e,t,r){if(!e)return"SH33TJSERR0"
if(!e.XTI)return"SH33TJSERR6"
var n=e.XTI[t]
if(r.biff>8&&!e.XTI[t])return e.SheetNames[t]
if(r.biff<8)return t>1e4&&(t-=65536),t<0&&(t=-t),0==t?"":e.XTI[t-1]
if(!n)return"SH33TJSERR1"
var a=""
if(r.biff>8)switch(e[n[0]][0]){case 357:return a=-1==n[1]?"#REF":e.SheetNames[n[1]],n[1]==n[2]?a:a+":"+e.SheetNames[n[2]]
case 358:return null!=r.SID?e.SheetNames[r.SID]:"SH33TJSSAME"+e[n[0]][0]
case 355:default:return"SH33TJSSRC"+e[n[0]][0]}switch(e[n[0]][0][0]){case 1025:return a=-1==n[1]?"#REF":e.SheetNames[n[1]]||"SH33TJSERR3",n[1]==n[2]?a:a+":"+e.SheetNames[n[2]]
case 14849:return"SH33TJSERR8"
default:return e[n[0]][0][3]?(a=-1==n[1]?"#REF":e[n[0]][0][3][n[1]]||"SH33TJSERR4",n[1]==n[2]?a:a+":"+e[n[0]][0][3][n[2]]):"SH33TJSERR2"}}(e,t,r),r)}function Ho(e,t,r,n,a){var s,o,i,l,c=a&&a.biff||8,f={s:{c:0,r:0},e:{c:0,r:0}},h=[],u=0,d=0,p=""
if(!e[0]||!e[0][0])return""
for(var g=-1,m="",b=0,v=e[0].length;b<v;++b){var C=e[0][b]
switch(C[0]){case"PtgUminus":h.push("-"+h.pop())
break
case"PtgUplus":h.push("+"+h.pop())
break
case"PtgPercent":h.push(h.pop()+"%")
break
case"PtgAdd":case"PtgConcat":case"PtgDiv":case"PtgEq":case"PtgGe":case"PtgGt":case"PtgLe":case"PtgLt":case"PtgMul":case"PtgNe":case"PtgPower":case"PtgSub":if(s=h.pop(),o=h.pop(),g>=0){switch(e[0][g][1][0]){case 0:m=Q(" ",e[0][g][1][1])
break
case 1:m=Q("\r",e[0][g][1][1])
break
default:if(m="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}o+=m,g=-1}h.push(o+Wo[C[0]]+s)
break
case"PtgIsect":s=h.pop(),o=h.pop(),h.push(o+" "+s)
break
case"PtgUnion":s=h.pop(),o=h.pop(),h.push(o+","+s)
break
case"PtgRange":s=h.pop(),o=h.pop(),h.push(o+":"+s)
break
case"PtgAttrChoose":case"PtgAttrGoto":case"PtgAttrIf":case"PtgAttrIfError":break
case"PtgRef":i=It(C[1][1],f,a),h.push(Ot(i,c))
break
case"PtgRefN":i=r?It(C[1][1],r,a):C[1][1],h.push(Ot(i,c))
break
case"PtgRef3d":u=C[1][1],i=It(C[1][2],f,a)
p=Uo(n,u,a)
h.push(p+"!"+Ot(i,c))
break
case"PtgFunc":case"PtgFuncVar":var E=C[1][0],S=C[1][1]
E||(E=0)
var A=0==(E&=127)?[]:h.slice(-E)
h.length-=E,"User"===S&&(S=A.shift()),h.push(S+"("+A.join(",")+")")
break
case"PtgBool":h.push(C[1]?"TRUE":"FALSE")
break
case"PtgInt":h.push(C[1])
break
case"PtgNum":h.push(String(C[1]))
break
case"PtgStr":h.push('"'+C[1]+'"')
break
case"PtgErr":h.push(C[1])
break
case"PtgAreaN":l=Dt(C[1][1],r?{s:r}:f,a),h.push(Ft(l,a))
break
case"PtgArea":l=Dt(C[1][1],f,a),h.push(Ft(l,a))
break
case"PtgArea3d":u=C[1][1],l=C[1][2],p=Uo(n,u,a),h.push(p+"!"+Ft(l,a))
break
case"PtgAttrSum":h.push("SUM("+h.pop()+")")
break
case"PtgAttrBaxcel":case"PtgAttrSemi":break
case"PtgName":d=C[1][2]
var _=(n.names||[])[d-1]||(n[0]||[])[d],w=_?_.Name:"SH33TJSNAME"+String(d)
w in qo&&(w=qo[w]),h.push(w)
break
case"PtgNameX":var R,B=C[1][1]
if(d=C[1][2],!(a.biff<=5)){var k=""
14849==((n[B]||[])[0]||[])[0]||(1025==((n[B]||[])[0]||[])[0]?n[B][d]&&n[B][d].itab>0&&(k=n.SheetNames[n[B][d].itab-1]+"!"):k=n.SheetNames[d-1]+"!"),n[B]&&n[B][d]?k+=n[B][d].Name:n[0]&&n[0][d]?k+=n[0][d].Name:k+="SH33TJSERRX",h.push(k)
break}B<0&&(B=-B),n[B]&&(R=n[B][d]),R||(R={Name:"SH33TJSERRY"}),h.push(R.Name)
break
case"PtgParen":var T="(",x=")"
if(g>=0){switch(m="",e[0][g][1][0]){case 2:T=Q(" ",e[0][g][1][1])+T
break
case 3:T=Q("\r",e[0][g][1][1])+T
break
case 4:x=Q(" ",e[0][g][1][1])+x
break
case 5:x=Q("\r",e[0][g][1][1])+x
break
default:if(a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+e[0][g][1][0])}g=-1}h.push(T+h.pop()+x)
break
case"PtgRefErr":case"PtgRefErr3d":h.push("#REF!")
break
case"PtgExp":i={c:C[1][1],r:C[1][0]}
var y={c:r.c,r:r.r}
if(n.sharedf[Ht(i)]){var I=n.sharedf[Ht(i)]
h.push(Ho(I,f,y,n,a))}else{var D=!1
for(s=0;s!=n.arrayf.length;++s)if(o=n.arrayf[s],!(i.c<o[0].s.c||i.c>o[0].e.c||i.r<o[0].s.r||i.r>o[0].e.r)){h.push(Ho(o[1],f,y,n,a)),D=!0
break}D||h.push(C[1])}break
case"PtgArray":h.push("{"+Mo(C[1])+"}")
break
case"PtgMemArea":break
case"PtgAttrSpace":case"PtgAttrSpaceSemi":g=b
break
case"PtgTbl":case"PtgMemErr":break
case"PtgMissArg":h.push("")
break
case"PtgAreaErr":case"PtgAreaErr3d":h.push("#REF!")
break
case"PtgList":h.push("Table"+C[1].idx+"[#"+C[1].rt+"]")
break
case"PtgMemAreaN":case"PtgMemNoMemN":case"PtgAttrNoop":case"PtgSheet":case"PtgEndSheet":case"PtgMemFunc":case"PtgMemNoMem":break
case"PtgElfCol":case"PtgElfColS":case"PtgElfColSV":case"PtgElfColV":case"PtgElfLel":case"PtgElfRadical":case"PtgElfRadicalLel":case"PtgElfRadicalS":case"PtgElfRw":case"PtgElfRwV":throw new Error("Unsupported ELFs")
case"PtgSxName":default:throw new Error("Unrecognized Formula Token: "+String(C))}if(3!=a.biff&&g>=0&&-1==["PtgAttrSpace","PtgAttrSpaceSemi","PtgAttrGoto"].indexOf(e[0][b][0])){var O=!0
switch((C=e[0][g])[1][0]){case 4:O=!1
case 0:m=Q(" ",C[1][1])
break
case 5:O=!1
case 1:m=Q("\r",C[1][1])
break
default:if(m="",a.WTF)throw new Error("Unexpected PtgAttrSpaceType "+C[1][0])}h.push((O?m:"")+h.pop()+(O?"":m)),g=-1}}if(h.length>1&&a.WTF)throw new Error("bad formula stack")
return h[0]}function Vo(e,t,r){var n,a=e.l+t,s=2==r.biff?1:2,o=e._R(s)
if(65535==o)return[[],Bt(e,t-2)]
var i=Lo(e,o,r)
return t!==o+s&&(n=No(e,t-o-s,i,r)),e.l=a,[i,n]}function zo(e,t,r){var n,a=e.l+t,s=e._R(2),o=Lo(e,s,r)
return 65535==s?[[],Bt(e,t-2)]:(t!==s+2&&(n=No(e,a-s-2,o,r)),[o,n])}function Xo(e,t,r){var n=e.l+t,a=jn(e)
2==r.biff&&++e.l
var s=function(e){var t
if(65535!==pt(e,e.l+6))return[mr(e),"n"]
switch(e[e.l]){case 0:return e.l+=8,["String","s"]
case 1:return t=1===e[e.l+2],e.l+=8,[t,"b"]
case 2:return t=e[e.l+2],e.l+=8,[t,"e"]
case 3:return e.l+=8,["","s"]}return[]}(e),o=e._R(1)
2!=r.biff&&(e._R(1),r.biff>=5&&e._R(4))
var i=function(e,t,r){var n,a=e.l+t,s=2==r.biff?1:2,o=e._R(s)
if(65535==o)return[[],Bt(e,t-2)]
var i=Lo(e,o,r)
return t!==o+s&&(n=No(e,t-o-s,i,r)),e.l=a,[i,n]}(e,n-e.l,r)
return{cell:a,val:s[0],formula:i,shared:o>>3&1,tt:s[1]}}function Go(e,t,r){var n=e._R(4),a=Lo(e,n,r),s=e._R(4)
return[a,s>0?No(e,s,a,r):null]}var jo=Go,Ko=Go,Yo=Go,$o=Go,Zo={0:"BEEP",1:"OPEN",2:"OPEN.LINKS",3:"CLOSE.ALL",4:"SAVE",5:"SAVE.AS",6:"FILE.DELETE",7:"PAGE.SETUP",8:"PRINT",9:"PRINTER.SETUP",10:"QUIT",11:"NEW.WINDOW",12:"ARRANGE.ALL",13:"WINDOW.SIZE",14:"WINDOW.MOVE",15:"FULL",16:"CLOSE",17:"RUN",22:"SET.PRINT.AREA",23:"SET.PRINT.TITLES",24:"SET.PAGE.BREAK",25:"REMOVE.PAGE.BREAK",26:"FONT",27:"DISPLAY",28:"PROTECT.DOCUMENT",29:"PRECISION",30:"A1.R1C1",31:"CALCULATE.NOW",32:"CALCULATION",34:"DATA.FIND",35:"EXTRACT",36:"DATA.DELETE",37:"SET.DATABASE",38:"SET.CRITERIA",39:"SORT",40:"DATA.SERIES",41:"TABLE",42:"FORMAT.NUMBER",43:"ALIGNMENT",44:"STYLE",45:"BORDER",46:"CELL.PROTECTION",47:"COLUMN.WIDTH",48:"UNDO",49:"CUT",50:"COPY",51:"PASTE",52:"CLEAR",53:"PASTE.SPECIAL",54:"EDIT.DELETE",55:"INSERT",56:"FILL.RIGHT",57:"FILL.DOWN",61:"DEFINE.NAME",62:"CREATE.NAMES",63:"FORMULA.GOTO",64:"FORMULA.FIND",65:"SELECT.LAST.CELL",66:"SHOW.ACTIVE.CELL",67:"GALLERY.AREA",68:"GALLERY.BAR",69:"GALLERY.COLUMN",70:"GALLERY.LINE",71:"GALLERY.PIE",72:"GALLERY.SCATTER",73:"COMBINATION",74:"PREFERRED",75:"ADD.OVERLAY",76:"GRIDLINES",77:"SET.PREFERRED",78:"AXES",79:"LEGEND",80:"ATTACH.TEXT",81:"ADD.ARROW",82:"SELECT.CHART",83:"SELECT.PLOT.AREA",84:"PATTERNS",85:"MAIN.CHART",86:"OVERLAY",87:"SCALE",88:"FORMAT.LEGEND",89:"FORMAT.TEXT",90:"EDIT.REPEAT",91:"PARSE",92:"JUSTIFY",93:"HIDE",94:"UNHIDE",95:"WORKSPACE",96:"FORMULA",97:"FORMULA.FILL",98:"FORMULA.ARRAY",99:"DATA.FIND.NEXT",100:"DATA.FIND.PREV",101:"FORMULA.FIND.NEXT",102:"FORMULA.FIND.PREV",103:"ACTIVATE",104:"ACTIVATE.NEXT",105:"ACTIVATE.PREV",106:"UNLOCKED.NEXT",107:"UNLOCKED.PREV",108:"COPY.PICTURE",109:"SELECT",110:"DELETE.NAME",111:"DELETE.FORMAT",112:"VLINE",113:"HLINE",114:"VPAGE",115:"HPAGE",116:"VSCROLL",117:"HSCROLL",118:"ALERT",119:"NEW",120:"CANCEL.COPY",121:"SHOW.CLIPBOARD",122:"MESSAGE",124:"PASTE.LINK",125:"APP.ACTIVATE",126:"DELETE.ARROW",127:"ROW.HEIGHT",128:"FORMAT.MOVE",129:"FORMAT.SIZE",130:"FORMULA.REPLACE",131:"SEND.KEYS",132:"SELECT.SPECIAL",133:"APPLY.NAMES",134:"REPLACE.FONT",135:"FREEZE.PANES",136:"SHOW.INFO",137:"SPLIT",138:"ON.WINDOW",139:"ON.DATA",140:"DISABLE.INPUT",142:"OUTLINE",143:"LIST.NAMES",144:"FILE.CLOSE",145:"SAVE.WORKBOOK",146:"DATA.FORM",147:"COPY.CHART",148:"ON.TIME",149:"WAIT",150:"FORMAT.FONT",151:"FILL.UP",152:"FILL.LEFT",153:"DELETE.OVERLAY",155:"SHORT.MENUS",159:"SET.UPDATE.STATUS",161:"COLOR.PALETTE",162:"DELETE.STYLE",163:"WINDOW.RESTORE",164:"WINDOW.MAXIMIZE",166:"CHANGE.LINK",167:"CALCULATE.DOCUMENT",168:"ON.KEY",169:"APP.RESTORE",170:"APP.MOVE",171:"APP.SIZE",172:"APP.MINIMIZE",173:"APP.MAXIMIZE",174:"BRING.TO.FRONT",175:"SEND.TO.BACK",185:"MAIN.CHART.TYPE",186:"OVERLAY.CHART.TYPE",187:"SELECT.END",188:"OPEN.MAIL",189:"SEND.MAIL",190:"STANDARD.FONT",191:"CONSOLIDATE",192:"SORT.SPECIAL",193:"GALLERY.3D.AREA",194:"GALLERY.3D.COLUMN",195:"GALLERY.3D.LINE",196:"GALLERY.3D.PIE",197:"VIEW.3D",198:"GOAL.SEEK",199:"WORKGROUP",200:"FILL.GROUP",201:"UPDATE.LINK",202:"PROMOTE",203:"DEMOTE",204:"SHOW.DETAIL",206:"UNGROUP",207:"OBJECT.PROPERTIES",208:"SAVE.NEW.OBJECT",209:"SHARE",210:"SHARE.NAME",211:"DUPLICATE",212:"APPLY.STYLE",213:"ASSIGN.TO.OBJECT",214:"OBJECT.PROTECTION",215:"HIDE.OBJECT",216:"SET.EXTRACT",217:"CREATE.PUBLISHER",218:"SUBSCRIBE.TO",219:"ATTRIBUTES",220:"SHOW.TOOLBAR",222:"PRINT.PREVIEW",223:"EDIT.COLOR",224:"SHOW.LEVELS",225:"FORMAT.MAIN",226:"FORMAT.OVERLAY",227:"ON.RECALC",228:"EDIT.SERIES",229:"DEFINE.STYLE",240:"LINE.PRINT",243:"ENTER.DATA",249:"GALLERY.RADAR",250:"MERGE.STYLES",251:"EDITION.OPTIONS",252:"PASTE.PICTURE",253:"PASTE.PICTURE.LINK",254:"SPELLING",256:"ZOOM",259:"INSERT.OBJECT",260:"WINDOW.MINIMIZE",265:"SOUND.NOTE",266:"SOUND.PLAY",267:"FORMAT.SHAPE",268:"EXTEND.POLYGON",269:"FORMAT.AUTO",272:"GALLERY.3D.BAR",273:"GALLERY.3D.SURFACE",274:"FILL.AUTO",276:"CUSTOMIZE.TOOLBAR",277:"ADD.TOOL",278:"EDIT.OBJECT",279:"ON.DOUBLECLICK",280:"ON.ENTRY",281:"WORKBOOK.ADD",282:"WORKBOOK.MOVE",283:"WORKBOOK.COPY",284:"WORKBOOK.OPTIONS",285:"SAVE.WORKSPACE",288:"CHART.WIZARD",289:"DELETE.TOOL",290:"MOVE.TOOL",291:"WORKBOOK.SELECT",292:"WORKBOOK.ACTIVATE",293:"ASSIGN.TO.TOOL",295:"COPY.TOOL",296:"RESET.TOOL",297:"CONSTRAIN.NUMERIC",298:"PASTE.TOOL",302:"WORKBOOK.NEW",305:"SCENARIO.CELLS",306:"SCENARIO.DELETE",307:"SCENARIO.ADD",308:"SCENARIO.EDIT",309:"SCENARIO.SHOW",310:"SCENARIO.SHOW.NEXT",311:"SCENARIO.SUMMARY",312:"PIVOT.TABLE.WIZARD",313:"PIVOT.FIELD.PROPERTIES",314:"PIVOT.FIELD",315:"PIVOT.ITEM",316:"PIVOT.ADD.FIELDS",318:"OPTIONS.CALCULATION",319:"OPTIONS.EDIT",320:"OPTIONS.VIEW",321:"ADDIN.MANAGER",322:"MENU.EDITOR",323:"ATTACH.TOOLBARS",324:"VBAActivate",325:"OPTIONS.CHART",328:"VBA.INSERT.FILE",330:"VBA.PROCEDURE.DEFINITION",336:"ROUTING.SLIP",338:"ROUTE.DOCUMENT",339:"MAIL.LOGON",342:"INSERT.PICTURE",343:"EDIT.TOOL",344:"GALLERY.DOUGHNUT",350:"CHART.TREND",352:"PIVOT.ITEM.PROPERTIES",354:"WORKBOOK.INSERT",355:"OPTIONS.TRANSITION",356:"OPTIONS.GENERAL",370:"FILTER.ADVANCED",373:"MAIL.ADD.MAILER",374:"MAIL.DELETE.MAILER",375:"MAIL.REPLY",376:"MAIL.REPLY.ALL",377:"MAIL.FORWARD",378:"MAIL.NEXT.LETTER",379:"DATA.LABEL",380:"INSERT.TITLE",381:"FONT.PROPERTIES",382:"MACRO.OPTIONS",383:"WORKBOOK.HIDE",384:"WORKBOOK.UNHIDE",385:"WORKBOOK.DELETE",386:"WORKBOOK.NAME",388:"GALLERY.CUSTOM",390:"ADD.CHART.AUTOFORMAT",391:"DELETE.CHART.AUTOFORMAT",392:"CHART.ADD.DATA",393:"AUTO.OUTLINE",394:"TAB.ORDER",395:"SHOW.DIALOG",396:"SELECT.ALL",397:"UNGROUP.SHEETS",398:"SUBTOTAL.CREATE",399:"SUBTOTAL.REMOVE",400:"RENAME.OBJECT",412:"WORKBOOK.SCROLL",413:"WORKBOOK.NEXT",414:"WORKBOOK.PREV",415:"WORKBOOK.TAB.SPLIT",416:"FULL.SCREEN",417:"WORKBOOK.PROTECT",420:"SCROLLBAR.PROPERTIES",421:"PIVOT.SHOW.PAGES",422:"TEXT.TO.COLUMNS",423:"FORMAT.CHARTTYPE",424:"LINK.FORMAT",425:"TRACER.DISPLAY",430:"TRACER.NAVIGATE",431:"TRACER.CLEAR",432:"TRACER.ERROR",433:"PIVOT.FIELD.GROUP",434:"PIVOT.FIELD.UNGROUP",435:"CHECKBOX.PROPERTIES",436:"LABEL.PROPERTIES",437:"LISTBOX.PROPERTIES",438:"EDITBOX.PROPERTIES",439:"PIVOT.REFRESH",440:"LINK.COMBO",441:"OPEN.TEXT",442:"HIDE.DIALOG",443:"SET.DIALOG.FOCUS",444:"ENABLE.OBJECT",445:"PUSHBUTTON.PROPERTIES",446:"SET.DIALOG.DEFAULT",447:"FILTER",448:"FILTER.SHOW.ALL",449:"CLEAR.OUTLINE",450:"FUNCTION.WIZARD",451:"ADD.LIST.ITEM",452:"SET.LIST.ITEM",453:"REMOVE.LIST.ITEM",454:"SELECT.LIST.ITEM",455:"SET.CONTROL.VALUE",456:"SAVE.COPY.AS",458:"OPTIONS.LISTS.ADD",459:"OPTIONS.LISTS.DELETE",460:"SERIES.AXES",461:"SERIES.X",462:"SERIES.Y",463:"ERRORBAR.X",464:"ERRORBAR.Y",465:"FORMAT.CHART",466:"SERIES.ORDER",467:"MAIL.LOGOFF",468:"CLEAR.ROUTING.SLIP",469:"APP.ACTIVATE.MICROSOFT",470:"MAIL.EDIT.MAILER",471:"ON.SHEET",472:"STANDARD.WIDTH",473:"SCENARIO.MERGE",474:"SUMMARY.INFO",475:"FIND.FILE",476:"ACTIVE.CELL.FONT",477:"ENABLE.TIPWIZARD",478:"VBA.MAKE.ADDIN",480:"INSERTDATATABLE",481:"WORKGROUP.OPTIONS",482:"MAIL.SEND.MAILER",485:"AUTOCORRECT",489:"POST.DOCUMENT",491:"PICKLIST",493:"VIEW.SHOW",494:"VIEW.DEFINE",495:"VIEW.DELETE",509:"SHEET.BACKGROUND",510:"INSERT.MAP.OBJECT",511:"OPTIONS.MENONO",517:"MSOCHECKS",518:"NORMAL",519:"LAYOUT",520:"RM.PRINT.AREA",521:"CLEAR.PRINT.AREA",522:"ADD.PRINT.AREA",523:"MOVE.BRK",545:"HIDECURR.NOTE",546:"HIDEALL.NOTES",547:"DELETE.NOTE",548:"TRAVERSE.NOTES",549:"ACTIVATE.NOTES",620:"PROTECT.REVISIONS",621:"UNPROTECT.REVISIONS",647:"OPTIONS.ME",653:"WEB.PUBLISH",667:"NEWWEBQUERY",673:"PIVOT.TABLE.CHART",753:"OPTIONS.SAVE",755:"OPTIONS.SPELL",808:"HIDEALL.INKANNOTS"},Qo={0:"COUNT",1:"IF",2:"ISNA",3:"ISERROR",4:"SUM",5:"AVERAGE",6:"MIN",7:"MAX",8:"ROW",9:"COLUMN",10:"NA",11:"NPV",12:"STDEV",13:"DOLLAR",14:"FIXED",15:"SIN",16:"COS",17:"TAN",18:"ATAN",19:"PI",20:"SQRT",21:"EXP",22:"LN",23:"LOG10",24:"ABS",25:"INT",26:"SIGN",27:"ROUND",28:"LOOKUP",29:"INDEX",30:"REPT",31:"MID",32:"LEN",33:"VALUE",34:"TRUE",35:"FALSE",36:"AND",37:"OR",38:"NOT",39:"MOD",40:"DCOUNT",41:"DSUM",42:"DAVERAGE",43:"DMIN",44:"DMAX",45:"DSTDEV",46:"VAR",47:"DVAR",48:"TEXT",49:"LINEST",50:"TREND",51:"LOGEST",52:"GROWTH",53:"GOTO",54:"HALT",55:"RETURN",56:"PV",57:"FV",58:"NPER",59:"PMT",60:"RATE",61:"MIRR",62:"IRR",63:"RAND",64:"MATCH",65:"DATE",66:"TIME",67:"DAY",68:"MONTH",69:"YEAR",70:"WEEKDAY",71:"HOUR",72:"MINUTE",73:"SECOND",74:"NOW",75:"AREAS",76:"ROWS",77:"COLUMNS",78:"OFFSET",79:"ABSREF",80:"RELREF",81:"ARGUMENT",82:"SEARCH",83:"TRANSPOSE",84:"ERROR",85:"STEP",86:"TYPE",87:"ECHO",88:"SET.NAME",89:"CALLER",90:"DEREF",91:"WINDOWS",92:"SERIES",93:"DOCUMENTS",94:"ACTIVE.CELL",95:"SELECTION",96:"RESULT",97:"ATAN2",98:"ASIN",99:"ACOS",100:"CHOOSE",101:"HLOOKUP",102:"VLOOKUP",103:"LINKS",104:"INPUT",105:"ISREF",106:"GET.FORMULA",107:"GET.NAME",108:"SET.VALUE",109:"LOG",110:"EXEC",111:"CHAR",112:"LOWER",113:"UPPER",114:"PROPER",115:"LEFT",116:"RIGHT",117:"EXACT",118:"TRIM",119:"REPLACE",120:"SUBSTITUTE",121:"CODE",122:"NAMES",123:"DIRECTORY",124:"FIND",125:"CELL",126:"ISERR",127:"ISTEXT",128:"ISNUMBER",129:"ISBLANK",130:"T",131:"N",132:"FOPEN",133:"FCLOSE",134:"FSIZE",135:"FREADLN",136:"FREAD",137:"FWRITELN",138:"FWRITE",139:"FPOS",140:"DATEVALUE",141:"TIMEVALUE",142:"SLN",143:"SYD",144:"DDB",145:"GET.DEF",146:"REFTEXT",147:"TEXTREF",148:"INDIRECT",149:"REGISTER",150:"CALL",151:"ADD.BAR",152:"ADD.MENU",153:"ADD.COMMAND",154:"ENABLE.COMMAND",155:"CHECK.COMMAND",156:"RENAME.COMMAND",157:"SHOW.BAR",158:"DELETE.MENU",159:"DELETE.COMMAND",160:"GET.CHART.ITEM",161:"DIALOG.BOX",162:"CLEAN",163:"MDETERM",164:"MINVERSE",165:"MMULT",166:"FILES",167:"IPMT",168:"PPMT",169:"COUNTA",170:"CANCEL.KEY",171:"FOR",172:"WHILE",173:"BREAK",174:"NEXT",175:"INITIATE",176:"REQUEST",177:"POKE",178:"EXECUTE",179:"TERMINATE",180:"RESTART",181:"HELP",182:"GET.BAR",183:"PRODUCT",184:"FACT",185:"GET.CELL",186:"GET.WORKSPACE",187:"GET.WINDOW",188:"GET.DOCUMENT",189:"DPRODUCT",190:"ISNONTEXT",191:"GET.NOTE",192:"NOTE",193:"STDEVP",194:"VARP",195:"DSTDEVP",196:"DVARP",197:"TRUNC",198:"ISLOGICAL",199:"DCOUNTA",200:"DELETE.BAR",201:"UNREGISTER",204:"USDOLLAR",205:"FINDB",206:"SEARCHB",207:"REPLACEB",208:"LEFTB",209:"RIGHTB",210:"MIDB",211:"LENB",212:"ROUNDUP",213:"ROUNDDOWN",214:"ASC",215:"DBCS",216:"RANK",219:"ADDRESS",220:"DAYS360",221:"TODAY",222:"VDB",223:"ELSE",224:"ELSE.IF",225:"END.IF",226:"FOR.CELL",227:"MEDIAN",228:"SUMPRODUCT",229:"SINH",230:"COSH",231:"TANH",232:"ASINH",233:"ACOSH",234:"ATANH",235:"DGET",236:"CREATE.OBJECT",237:"VOLATILE",238:"LAST.ERROR",239:"CUSTOM.UNDO",240:"CUSTOM.REPEAT",241:"FORMULA.CONVERT",242:"GET.LINK.INFO",243:"TEXT.BOX",244:"INFO",245:"GROUP",246:"GET.OBJECT",247:"DB",248:"PAUSE",251:"RESUME",252:"FREQUENCY",253:"ADD.TOOLBAR",254:"DELETE.TOOLBAR",255:"User",256:"RESET.TOOLBAR",257:"EVALUATE",258:"GET.TOOLBAR",259:"GET.TOOL",260:"SPELLING.CHECK",261:"ERROR.TYPE",262:"APP.TITLE",263:"WINDOW.TITLE",264:"SAVE.TOOLBAR",265:"ENABLE.TOOL",266:"PRESS.TOOL",267:"REGISTER.ID",268:"GET.WORKBOOK",269:"AVEDEV",270:"BETADIST",271:"GAMMALN",272:"BETAINV",273:"BINOMDIST",274:"CHIDIST",275:"CHIINV",276:"COMBIN",277:"CONFIDENCE",278:"CRITBINOM",279:"EVEN",280:"EXPONDIST",281:"FDIST",282:"FINV",283:"FISHER",284:"FISHERINV",285:"FLOOR",286:"GAMMADIST",287:"GAMMAINV",288:"CEILING",289:"HYPGEOMDIST",290:"LOGNORMDIST",291:"LOGINV",292:"NEGBINOMDIST",293:"NORMDIST",294:"NORMSDIST",295:"NORMINV",296:"NORMSINV",297:"STANDARDIZE",298:"ODD",299:"PERMUT",300:"POISSON",301:"TDIST",302:"WEIBULL",303:"SUMXMY2",304:"SUMX2MY2",305:"SUMX2PY2",306:"CHITEST",307:"CORREL",308:"COVAR",309:"FORECAST",310:"FTEST",311:"INTERCEPT",312:"PEARSON",313:"RSQ",314:"STEYX",315:"SLOPE",316:"TTEST",317:"PROB",318:"DEVSQ",319:"GEOMEAN",320:"HARMEAN",321:"SUMSQ",322:"KURT",323:"SKEW",324:"ZTEST",325:"LARGE",326:"SMALL",327:"QUARTILE",328:"PERCENTILE",329:"PERCENTRANK",330:"MODE",331:"TRIMMEAN",332:"TINV",334:"MOVIE.COMMAND",335:"GET.MOVIE",336:"CONCATENATE",337:"POWER",338:"PIVOT.ADD.DATA",339:"GET.PIVOT.TABLE",340:"GET.PIVOT.FIELD",341:"GET.PIVOT.ITEM",342:"RADIANS",343:"DEGREES",344:"SUBTOTAL",345:"SUMIF",346:"COUNTIF",347:"COUNTBLANK",348:"SCENARIO.GET",349:"OPTIONS.LISTS.GET",350:"ISPMT",351:"DATEDIF",352:"DATESTRING",353:"NUMBERSTRING",354:"ROMAN",355:"OPEN.DIALOG",356:"SAVE.DIALOG",357:"VIEW.GET",358:"GETPIVOTDATA",359:"HYPERLINK",360:"PHONETIC",361:"AVERAGEA",362:"MAXA",363:"MINA",364:"STDEVPA",365:"VARPA",366:"STDEVA",367:"VARA",368:"BAHTTEXT",369:"THAIDAYOFWEEK",370:"THAIDIGIT",371:"THAIMONTHOFYEAR",372:"THAINUMSOUND",373:"THAINUMSTRING",374:"THAISTRINGLENGTH",375:"ISTHAIDIGIT",376:"ROUNDBAHTDOWN",377:"ROUNDBAHTUP",378:"THAIYEAR",379:"RTD",380:"CUBEVALUE",381:"CUBEMEMBER",382:"CUBEMEMBERPROPERTY",383:"CUBERANKEDMEMBER",384:"HEX2BIN",385:"HEX2DEC",386:"HEX2OCT",387:"DEC2BIN",388:"DEC2HEX",389:"DEC2OCT",390:"OCT2BIN",391:"OCT2HEX",392:"OCT2DEC",393:"BIN2DEC",394:"BIN2OCT",395:"BIN2HEX",396:"IMSUB",397:"IMDIV",398:"IMPOWER",399:"IMABS",400:"IMSQRT",401:"IMLN",402:"IMLOG2",403:"IMLOG10",404:"IMSIN",405:"IMCOS",406:"IMEXP",407:"IMARGUMENT",408:"IMCONJUGATE",409:"IMAGINARY",410:"IMREAL",411:"COMPLEX",412:"IMSUM",413:"IMPRODUCT",414:"SERIESSUM",415:"FACTDOUBLE",416:"SQRTPI",417:"QUOTIENT",418:"DELTA",419:"GESTEP",420:"ISEVEN",421:"ISODD",422:"MROUND",423:"ERF",424:"ERFC",425:"BESSELJ",426:"BESSELK",427:"BESSELY",428:"BESSELI",429:"XIRR",430:"XNPV",431:"PRICEMAT",432:"YIELDMAT",433:"INTRATE",434:"RECEIVED",435:"DISC",436:"PRICEDISC",437:"YIELDDISC",438:"TBILLEQ",439:"TBILLPRICE",440:"TBILLYIELD",441:"PRICE",442:"YIELD",443:"DOLLARDE",444:"DOLLARFR",445:"NOMINAL",446:"EFFECT",447:"CUMPRINC",448:"CUMIPMT",449:"EDATE",450:"EOMONTH",451:"YEARFRAC",452:"COUPDAYBS",453:"COUPDAYS",454:"COUPDAYSNC",455:"COUPNCD",456:"COUPNUM",457:"COUPPCD",458:"DURATION",459:"MDURATION",460:"ODDLPRICE",461:"ODDLYIELD",462:"ODDFPRICE",463:"ODDFYIELD",464:"RANDBETWEEN",465:"WEEKNUM",466:"AMORDEGRC",467:"AMORLINC",468:"CONVERT",724:"SHEETJS",469:"ACCRINT",470:"ACCRINTM",471:"WORKDAY",472:"NETWORKDAYS",473:"GCD",474:"MULTINOMIAL",475:"LCM",476:"FVSCHEDULE",477:"CUBEKPIMEMBER",478:"CUBESET",479:"CUBESETCOUNT",480:"IFERROR",481:"COUNTIFS",482:"SUMIFS",483:"AVERAGEIF",484:"AVERAGEIFS"},Jo={2:1,3:1,10:0,15:1,16:1,17:1,18:1,19:0,20:1,21:1,22:1,23:1,24:1,25:1,26:1,27:2,30:2,31:3,32:1,33:1,34:0,35:0,38:1,39:2,40:3,41:3,42:3,43:3,44:3,45:3,47:3,48:2,53:1,61:3,63:0,65:3,66:3,67:1,68:1,69:1,70:1,71:1,72:1,73:1,74:0,75:1,76:1,77:1,79:2,80:2,83:1,85:0,86:1,89:0,90:1,94:0,95:0,97:2,98:1,99:1,101:3,102:3,105:1,106:1,108:2,111:1,112:1,113:1,114:1,117:2,118:1,119:4,121:1,126:1,127:1,128:1,129:1,130:1,131:1,133:1,134:1,135:1,136:2,137:2,138:2,140:1,141:1,142:3,143:4,144:4,161:1,162:1,163:1,164:1,165:2,172:1,175:2,176:2,177:3,178:2,179:1,184:1,186:1,189:3,190:1,195:3,196:3,197:1,198:1,199:3,201:1,207:4,210:3,211:1,212:2,213:2,214:1,215:1,225:0,229:1,230:1,231:1,232:1,233:1,234:1,235:3,244:1,247:4,252:2,257:1,261:1,271:1,273:4,274:2,275:2,276:2,277:3,278:3,279:1,280:3,281:3,282:3,283:1,284:1,285:2,286:4,287:3,288:2,289:4,290:3,291:3,292:3,293:4,294:1,295:3,296:1,297:3,298:1,299:2,300:3,301:3,302:4,303:2,304:2,305:2,306:2,307:2,308:2,309:3,310:2,311:2,312:2,313:2,314:2,315:2,316:4,325:2,326:2,327:2,328:2,331:2,332:2,337:2,342:1,343:1,346:2,347:1,350:4,351:3,352:1,353:2,360:1,368:1,369:1,370:1,371:1,372:1,373:1,374:1,375:1,376:1,377:1,378:1,382:3,385:1,392:1,393:1,396:2,397:2,398:2,399:1,400:1,401:1,402:1,403:1,404:1,405:1,406:1,407:1,408:1,409:1,410:1,414:4,415:1,416:1,417:2,420:1,421:1,422:2,424:1,425:2,426:2,427:2,428:2,430:3,438:3,439:3,440:3,443:2,444:2,445:2,446:2,447:6,448:6,449:2,450:2,464:2,468:3,476:2,479:1,480:2,65535:0},qo={"_xlfn.ACOT":"ACOT","_xlfn.ACOTH":"ACOTH","_xlfn.AGGREGATE":"AGGREGATE","_xlfn.ARABIC":"ARABIC","_xlfn.AVERAGEIF":"AVERAGEIF","_xlfn.AVERAGEIFS":"AVERAGEIFS","_xlfn.BASE":"BASE","_xlfn.BETA.DIST":"BETA.DIST","_xlfn.BETA.INV":"BETA.INV","_xlfn.BINOM.DIST":"BINOM.DIST","_xlfn.BINOM.DIST.RANGE":"BINOM.DIST.RANGE","_xlfn.BINOM.INV":"BINOM.INV","_xlfn.BITAND":"BITAND","_xlfn.BITLSHIFT":"BITLSHIFT","_xlfn.BITOR":"BITOR","_xlfn.BITRSHIFT":"BITRSHIFT","_xlfn.BITXOR":"BITXOR","_xlfn.CEILING.MATH":"CEILING.MATH","_xlfn.CEILING.PRECISE":"CEILING.PRECISE","_xlfn.CHISQ.DIST":"CHISQ.DIST","_xlfn.CHISQ.DIST.RT":"CHISQ.DIST.RT","_xlfn.CHISQ.INV":"CHISQ.INV","_xlfn.CHISQ.INV.RT":"CHISQ.INV.RT","_xlfn.CHISQ.TEST":"CHISQ.TEST","_xlfn.COMBINA":"COMBINA","_xlfn.CONCAT":"CONCAT","_xlfn.CONFIDENCE.NORM":"CONFIDENCE.NORM","_xlfn.CONFIDENCE.T":"CONFIDENCE.T","_xlfn.COT":"COT","_xlfn.COTH":"COTH","_xlfn.COUNTIFS":"COUNTIFS","_xlfn.COVARIANCE.P":"COVARIANCE.P","_xlfn.COVARIANCE.S":"COVARIANCE.S","_xlfn.CSC":"CSC","_xlfn.CSCH":"CSCH","_xlfn.DAYS":"DAYS","_xlfn.DECIMAL":"DECIMAL","_xlfn.ECMA.CEILING":"ECMA.CEILING","_xlfn.ERF.PRECISE":"ERF.PRECISE","_xlfn.ERFC.PRECISE":"ERFC.PRECISE","_xlfn.EXPON.DIST":"EXPON.DIST","_xlfn.F.DIST":"F.DIST","_xlfn.F.DIST.RT":"F.DIST.RT","_xlfn.F.INV":"F.INV","_xlfn.F.INV.RT":"F.INV.RT","_xlfn.F.TEST":"F.TEST","_xlfn.FILTERXML":"FILTERXML","_xlfn.FLOOR.MATH":"FLOOR.MATH","_xlfn.FLOOR.PRECISE":"FLOOR.PRECISE","_xlfn.FORECAST.ETS":"FORECAST.ETS","_xlfn.FORECAST.ETS.CONFINT":"FORECAST.ETS.CONFINT","_xlfn.FORECAST.ETS.SEASONALITY":"FORECAST.ETS.SEASONALITY","_xlfn.FORECAST.ETS.STAT":"FORECAST.ETS.STAT","_xlfn.FORECAST.LINEAR":"FORECAST.LINEAR","_xlfn.FORMULATEXT":"FORMULATEXT","_xlfn.GAMMA":"GAMMA","_xlfn.GAMMA.DIST":"GAMMA.DIST","_xlfn.GAMMA.INV":"GAMMA.INV","_xlfn.GAMMALN.PRECISE":"GAMMALN.PRECISE","_xlfn.GAUSS":"GAUSS","_xlfn.HYPGEOM.DIST":"HYPGEOM.DIST","_xlfn.IFERROR":"IFERROR","_xlfn.IFNA":"IFNA","_xlfn.IFS":"IFS","_xlfn.IMCOSH":"IMCOSH","_xlfn.IMCOT":"IMCOT","_xlfn.IMCSC":"IMCSC","_xlfn.IMCSCH":"IMCSCH","_xlfn.IMSEC":"IMSEC","_xlfn.IMSECH":"IMSECH","_xlfn.IMSINH":"IMSINH","_xlfn.IMTAN":"IMTAN","_xlfn.ISFORMULA":"ISFORMULA","_xlfn.ISO.CEILING":"ISO.CEILING","_xlfn.ISOWEEKNUM":"ISOWEEKNUM","_xlfn.LOGNORM.DIST":"LOGNORM.DIST","_xlfn.LOGNORM.INV":"LOGNORM.INV","_xlfn.MAXIFS":"MAXIFS","_xlfn.MINIFS":"MINIFS","_xlfn.MODE.MULT":"MODE.MULT","_xlfn.MODE.SNGL":"MODE.SNGL","_xlfn.MUNIT":"MUNIT","_xlfn.NEGBINOM.DIST":"NEGBINOM.DIST","_xlfn.NETWORKDAYS.INTL":"NETWORKDAYS.INTL","_xlfn.NIGBINOM":"NIGBINOM","_xlfn.NORM.DIST":"NORM.DIST","_xlfn.NORM.INV":"NORM.INV","_xlfn.NORM.S.DIST":"NORM.S.DIST","_xlfn.NORM.S.INV":"NORM.S.INV","_xlfn.NUMBERVALUE":"NUMBERVALUE","_xlfn.PDURATION":"PDURATION","_xlfn.PERCENTILE.EXC":"PERCENTILE.EXC","_xlfn.PERCENTILE.INC":"PERCENTILE.INC","_xlfn.PERCENTRANK.EXC":"PERCENTRANK.EXC","_xlfn.PERCENTRANK.INC":"PERCENTRANK.INC","_xlfn.PERMUTATIONA":"PERMUTATIONA","_xlfn.PHI":"PHI","_xlfn.POISSON.DIST":"POISSON.DIST","_xlfn.QUARTILE.EXC":"QUARTILE.EXC","_xlfn.QUARTILE.INC":"QUARTILE.INC","_xlfn.QUERYSTRING":"QUERYSTRING","_xlfn.RANK.AVG":"RANK.AVG","_xlfn.RANK.EQ":"RANK.EQ","_xlfn.RRI":"RRI","_xlfn.SEC":"SEC","_xlfn.SECH":"SECH","_xlfn.SHEET":"SHEET","_xlfn.SHEETS":"SHEETS","_xlfn.SKEW.P":"SKEW.P","_xlfn.STDEV.P":"STDEV.P","_xlfn.STDEV.S":"STDEV.S","_xlfn.SUMIFS":"SUMIFS","_xlfn.SWITCH":"SWITCH","_xlfn.T.DIST":"T.DIST","_xlfn.T.DIST.2T":"T.DIST.2T","_xlfn.T.DIST.RT":"T.DIST.RT","_xlfn.T.INV":"T.INV","_xlfn.T.INV.2T":"T.INV.2T","_xlfn.T.TEST":"T.TEST","_xlfn.TEXTJOIN":"TEXTJOIN","_xlfn.UNICHAR":"UNICHAR","_xlfn.UNICODE":"UNICODE","_xlfn.VAR.P":"VAR.P","_xlfn.VAR.S":"VAR.S","_xlfn.WEBSERVICE":"WEBSERVICE","_xlfn.WEIBULL.DIST":"WEIBULL.DIST","_xlfn.WORKDAY.INTL":"WORKDAY.INTL","_xlfn.XOR":"XOR","_xlfn.Z.TEST":"Z.TEST"}
function ei(e){return"of:"==e.slice(0,3)&&(e=e.slice(3)),61==e.charCodeAt(0)&&61==(e=e.slice(1)).charCodeAt(0)&&(e=e.slice(1)),(e=(e=(e=e.replace(/COM\.MICROSOFT\./g,"")).replace(/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,function(e,t){return t.replace(/\./g,"")})).replace(/\[.(#[A-Z]*[?!])\]/g,"$1")).replace(/[;~]/g,",").replace(/\|/g,";")}function ti(e){return("of:="+e.replace(ao,"$1[.$2$3$4$5]").replace(/\]:\[/g,":")).replace(/;/g,"|").replace(/,/g,";")}function ri(e){var t=e.split(":")
return[t[0].split(".")[0],t[0].split(".")[1]+(t.length>1?":"+(t[1].split(".")[1]||t[1].split(".")[0]):"")]}function ni(e){return e.replace(/\./,"!")}var ai={},si={}
Ur.WS=["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet","http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"]
var oi="undefined"!=typeof Map
function ii(e,t,r){var n=0,a=e.length
if(r){if(oi?r.has(t):r.hasOwnProperty(t))for(var s=oi?r.get(t):r[t];n<s.length;++n)if(e[s[n]].t===t)return e.Count++,s[n]}else for(;n<a;++n)if(e[n].t===t)return e.Count++,n
return e[a]={t:t},e.Count++,e.Unique++,r&&(oi?(r.has(t)||r.set(t,[]),r.get(t).push(a)):(r.hasOwnProperty(t)||(r[t]=[]),r[t].push(a))),a}function li(e,t){var r={min:e+1,max:e+1},n=-1
return t.MDW&&(ls=t.MDW),null!=t.width?r.customWidth=1:null!=t.wpx?n=fs(t.wpx):null!=t.wch&&(n=t.wch),n>-1?(r.width=hs(n),r.customWidth=1):null!=t.width&&(r.width=t.width),t.hidden&&(r.hidden=!0),r}function ci(e,t){if(e){var r=[.7,.7,.75,.75,.3,.3]
"xlml"==t&&(r=[1,1,1,1,.5,.5]),null==e.left&&(e.left=r[0]),null==e.right&&(e.right=r[1]),null==e.top&&(e.top=r[2]),null==e.bottom&&(e.bottom=r[3]),null==e.header&&(e.header=r[4]),null==e.footer&&(e.footer=r[5])}}function fi(e,t,r){var n=r.revssf[null!=t.z?t.z:"General"],a=60,s=e.length
if(null==n&&r.ssf)for(;a<392;++a)if(null==r.ssf[a]){B.load(t.z,a),r.ssf[a]=t.z,r.revssf[t.z]=n=a
break}for(a=0;a!=s;++a)if(e[a].numFmtId===n)return a
return e[s]={numFmtId:n,fontId:0,fillId:0,borderId:0,xfId:0,applyNumberFormat:1},s}function hi(e,t,r,n,a,s){if("z"!==e.t){"d"===e.t&&"string"==typeof e.v&&(e.v=K(e.v))
try{n.cellNF&&(e.z=B._table[t])}catch(o){if(n.WTF)throw o}if(!n||!1!==n.cellText)try{if(null==B._table[t]&&B.load(x[t]||"General",t),"e"===e.t)e.w=e.w||vr[e.v]
else if(0===t)if("n"===e.t)(0|e.v)===e.v?e.w=B._general_int(e.v):e.w=B._general_num(e.v)
else if("d"===e.t){var i=V(e.v)
e.w=(0|i)===i?B._general_int(i):B._general_num(i)}else{if(void 0===e.v)return""
e.w=B._general(e.v,si)}else"d"===e.t?e.w=B.format(t,V(e.v),si):e.w=B.format(t,e.v,si)}catch(o){if(n.WTF)throw o}if(n.cellStyles&&null!=r)try{e.s=s.Fills[r],e.s.fgColor&&e.s.fgColor.theme&&!e.s.fgColor.rgb&&(e.s.fgColor.rgb=as(a.themeElements.clrScheme[e.s.fgColor.theme].rgb,e.s.fgColor.tint||0),n.WTF&&(e.s.fgColor.raw_rgb=a.themeElements.clrScheme[e.s.fgColor.theme].rgb)),e.s.bgColor&&e.s.bgColor.theme&&(e.s.bgColor.rgb=as(a.themeElements.clrScheme[e.s.bgColor.theme].rgb,e.s.bgColor.tint||0),n.WTF&&(e.s.bgColor.raw_rgb=a.themeElements.clrScheme[e.s.bgColor.theme].rgb))}catch(o){if(n.WTF&&s.Fills)throw o}}}function ui(e,t,r){if(e&&e["!ref"]){var n=Xt(e["!ref"])
if(n.e.c<n.s.c||n.e.r<n.s.r)throw new Error("Bad range ("+r+"): "+e["!ref"])}}var di=/<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g,pi=/<(?:\w+:)?sheetData>([\s\S]*)<\/(?:\w+:)?sheetData>/,gi=/<(?:\w:)?hyperlink [^>]*>/gm,mi=/"(\w*:\w*)"/,bi=/<(?:\w:)?col[^>]*[\/]?>/g,vi=/<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g,Ci=/<(?:\w:)?pageMargins[^>]*\/>/g,Ei=/<(?:\w:)?sheetPr(?:[^>a-z][^>]*)?\/>/,Si=/<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/
function Ai(e,t,r,n,a,s,o){if(!e)return e
null!=u&&null==t.dense&&(t.dense=u)
var i=t.dense?[]:{},l={s:{r:2e6,c:2e6},e:{r:0,c:0}},c="",f="",h=e.match(pi)
h?(c=e.slice(0,h.index),f=e.slice(h.index+h[0].length)):c=f=e
var d=c.match(Ei)
d&&_i(d[0],i,a,r)
var p=(c.match(/<(?:\w*:)?dimension/)||{index:-1}).index
if(p>0){var g=c.slice(p,p+50).match(mi)
g&&function(e,t){var r=Xt(t)
r.s.r<=r.e.r&&r.s.c<=r.e.c&&r.s.r>=0&&r.s.c>=0&&(e["!ref"]=zt(r))}(i,g[1])}var m=c.match(Si)
m&&m[1]&&function(e,t){(e.match(wi)||[]).forEach(function(e){var r=pe(e)
ke(r.rightToLeft)&&(t.Views||(t.Views=[{}]),t.Views[0]||(t.Views[0]={}),t.Views[0].RTL=!0)})}(m[1],a)
var b=[]
if(t.cellStyles){var v=c.match(bi)
v&&function(e,t){for(var r=!1,n=0;n!=t.length;++n){var a=pe(t[n],!0)
a.hidden&&(a.hidden=ke(a.hidden))
var s=parseInt(a.min,10)-1,o=parseInt(a.max,10)-1
for(delete a.min,delete a.max,a.width=+a.width,!r&&a.width&&(r=!0,ds(a.width)),ps(a);s<=o;)e[s++]=Z(a)}}(b,v)}h&&Bi(h[1],i,t,l,s,o)
var C=f.match(vi)
C&&(i["!autofilter"]=function(e){return{ref:(e.match(/ref="([^"]*)"/)||[])[1]}}(C[0]))
var E=[],S=f.match(di)
if(S)for(p=0;p!=S.length;++p)E[p]=Xt(S[p].slice(S[p].indexOf('"')+1))
var A=f.match(gi)
A&&function(e,t,r){for(var n=Array.isArray(e),a=0;a!=t.length;++a){var s=pe(Te(t[a]),!0)
if(!s.ref)return
var o=((r||{})["!id"]||[])[s.id]
o?(s.Target=o.Target,s.location&&(s.Target+="#"+s.location)):(s.Target="#"+s.location,o={Target:s.Target,TargetMode:"Internal"}),s.Rel=o,s.tooltip&&(s.Tooltip=s.tooltip,delete s.tooltip)
for(var i=Xt(s.ref),l=i.s.r;l<=i.e.r;++l)for(var c=i.s.c;c<=i.e.c;++c){var f=Ht({c:c,r:l})
n?(e[l]||(e[l]=[]),e[l][c]||(e[l][c]={t:"z",v:void 0}),e[l][c].l=s):(e[f]||(e[f]={t:"z",v:void 0}),e[f].l=s)}}}(i,A,n)
var _=f.match(Ci)
if(_&&(i["!margins"]=function(e){var t={}
return["left","right","top","bottom","header","footer"].forEach(function(r){e[r]&&(t[r]=parseFloat(e[r]))}),t}(pe(_[0]))),!i["!ref"]&&l.e.c>=l.s.c&&l.e.r>=l.s.r&&(i["!ref"]=zt(l)),t.sheetRows>0&&i["!ref"]){var w=Xt(i["!ref"])
t.sheetRows<=+w.e.r&&(w.e.r=t.sheetRows-1,w.e.r>l.e.r&&(w.e.r=l.e.r),w.e.r<w.s.r&&(w.s.r=w.e.r),w.e.c>l.e.c&&(w.e.c=l.e.c),w.e.c<w.s.c&&(w.s.c=w.e.c),i["!fullref"]=i["!ref"],i["!ref"]=zt(w))}return b.length>0&&(i["!cols"]=b),E.length>0&&(i["!merges"]=E),i}function _i(e,t,r,n){var a=pe(e)
r.Sheets[n]||(r.Sheets[n]={}),a.codeName&&(r.Sheets[n].CodeName=a.codeName)}var wi=/<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/>/
function Ri(e,t,r,n){if(void 0===e.v&&void 0===e.f||"z"===e.t)return""
var a="",s=e.t,o=e.v
switch(e.t){case"b":a=e.v?"1":"0"
break
case"n":a=""+e.v
break
case"e":a=vr[e.v]
break
case"d":n.cellDates?a=K(e.v,-1).toISOString():((e=Z(e)).t="n",a=""+(e.v=V(K(e.v)))),void 0===e.z&&(e.z=B._table[14])
break
default:a=e.v}var i=Ue("v",Se(a)),l={r:t},c=fi(n.cellXfs,e,n)
switch(0!==c&&(l.s=c),e.t){case"n":break
case"d":l.t="d"
break
case"b":l.t="b"
break
case"e":l.t="e"
break
default:if(null==e.v){delete e.t
break}if(n.bookSST){i=Ue("v",""+ii(n.Strings,e.v,n.revStrings)),l.t="s"
break}l.t="str"}if(e.t!=s&&(e.t=s,e.v=o),e.f){var f=e.F&&e.F.slice(0,t.length)==t?{t:"array",ref:e.F}:null
i=Ve("f",Se(e.f),f)+(null!=e.v?i:"")}return e.l&&r["!links"].push([t,e.l]),e.c&&r["!comments"].push([t,e.c]),Ve("c",i,l)}var Bi=function(){var e=/<(?:\w+:)?c[ >]/,t=/<\/(?:\w+:)?row>/,r=/r=["']([^"']*)["']/,n=/<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/,a=/ref=["']([^"']*)["']/,s=Oe("v"),o=Oe("f")
return function(i,l,c,f,h,u){for(var d,p,g,m,b,v=0,C="",E=[],S=[],A=0,_=0,w=0,R="",k=0,T=0,x=0,y=0,I=Array.isArray(u.CellXf),D=[],O=[],F=Array.isArray(l),P=[],N={},L=!1,M=i.split(t),W=0,U=M.length;W!=U;++W){var H=(C=M[W].trim()).length
if(0!==H){for(v=0;v<H&&62!==C.charCodeAt(v);++v);if(++v,k=null!=(p=pe(C.slice(0,v),!0)).r?parseInt(p.r,10):k+1,T=-1,!(c.sheetRows&&c.sheetRows<k))for(f.s.r>k-1&&(f.s.r=k-1),f.e.r<k-1&&(f.e.r=k-1),c&&c.cellStyles&&(N={},L=!1,p.ht&&(L=!0,N.hpt=parseFloat(p.ht),N.hpx=bs(N.hpt)),"1"==p.hidden&&(L=!0,N.hidden=!0),null!=p.outlineLevel&&(L=!0,N.level=+p.outlineLevel),L&&(P[k-1]=N)),E=C.slice(v).split(e),v=0;v!=E.length;++v)if(0!==(C=E[v].trim()).length){if(S=C.match(r),A=v,_=0,w=0,C="<c "+("<"==C.slice(0,1)?">":"")+C,null!=S&&2===S.length){for(A=0,R=S[1],_=0;_!=R.length&&!((w=R.charCodeAt(_)-64)<1||w>26);++_)A=26*A+w
T=--A}else++T
for(_=0;_!=C.length&&62!==C.charCodeAt(_);++_);if(++_,(p=pe(C.slice(0,_),!0)).r||(p.r=Ht({r:k-1,c:T})),d={t:""},null!=(S=(R=C.slice(_)).match(s))&&""!==S[1]&&(d.v=ve(S[1])),c.cellFormula){null!=(S=R.match(o))&&""!==S[1]?(d.f=io(ve(Te(S[1]))),S[0].indexOf('t="array"')>-1?(d.F=(R.match(a)||[])[1],d.F.indexOf(":")>-1&&D.push([Xt(d.F),d.F])):S[0].indexOf('t="shared"')>-1&&(m=pe(S[0]),O[parseInt(m.si,10)]=[m,io(ve(Te(S[1])))])):(S=R.match(/<f[^>]*\/>/))&&O[(m=pe(S[0])).si]&&(d.f=oo(O[m.si][1],O[m.si][0].ref,p.r))
var X=Ut(p.r)
for(_=0;_<D.length;++_)X.r>=D[_][0].s.r&&X.r<=D[_][0].e.r&&X.c>=D[_][0].s.c&&X.c<=D[_][0].e.c&&(d.F=D[_][1])}if(null==p.t&&void 0===d.v)if(d.f||d.F)d.v=0,d.t="n"
else{if(!c.sheetStubs)continue
d.t="z"}else d.t=p.t||"n"
switch(f.s.c>T&&(f.s.c=T),f.e.c<T&&(f.e.c=T),d.t){case"n":if(""==d.v||null==d.v){if(!c.sheetStubs)continue
d.t="z"}else d.v=parseFloat(d.v)
break
case"s":if(void 0===d.v){if(!c.sheetStubs)continue
d.t="z"}else g=ai[parseInt(d.v,10)],d.v=g.t,d.r=g.r,c.cellHTML&&(d.h=g.h)
break
case"str":d.t="s",d.v=null!=d.v?Te(d.v):"",c.cellHTML&&(d.h=we(d.v))
break
case"inlineStr":S=R.match(n),d.t="s",null!=S&&(g=Na(S[1]))?d.v=g.t:d.v=""
break
case"b":d.v=ke(d.v)
break
case"d":c.cellDates?d.v=K(d.v,1):(d.v=V(K(d.v,1)),d.t="n")
break
case"e":c&&!1===c.cellText||(d.w=d.v),d.v=Cr[d.v]}if(x=y=0,I&&void 0!==p.s&&null!=(b=u.CellXf[p.s])&&(null!=b.numFmtId&&(x=b.numFmtId),c.cellStyles&&null!=b.fillId&&(y=b.fillId)),hi(d,x,y,c,h,u),c.cellDates&&I&&"n"==d.t&&B.is_date(B._table[x])&&(d.t="d",d.v=z(d.v)),F){var G=Ut(p.r)
l[G.r]||(l[G.r]=[]),l[G.r][G.c]=d}else l[p.r]=d}}}P.length>0&&(l["!rows"]=P)}}()
var ki=Ve("worksheet",null,{xmlns:Xe.main[0],"xmlns:r":Xe.r})
function Ti(e,t,r,n){var a,s=[ce,ki],o=r.SheetNames[e],i="",l=r.Sheets[o]
null==l&&(l={})
var c=l["!ref"]||"A1",f=Xt(c)
if(f.e.c>16383||f.e.r>1048575){if(t.WTF)throw new Error("Range "+c+" exceeds format limit A1:XFD1048576")
f.e.c=Math.min(f.e.c,16383),f.e.r=Math.min(f.e.c,1048575),c=zt(f)}if(n||(n={}),l["!comments"]=[],l["!drawing"]=[],"xlsx"!==t.bookType&&r.vbaraw){var h=r.SheetNames[e]
try{r.Workbook&&(h=r.Workbook.Sheets[e].CodeName||h)}catch(g){}s[s.length]=Ve("sheetPr",null,{codeName:Se(h)})}s[s.length]=Ve("dimension",null,{ref:c}),s[s.length]=function(e,t,r,n){var a={workbookViewId:"0"}
return(((n||{}).Workbook||{}).Views||[])[0]&&(a.rightToLeft=n.Workbook.Views[0].RTL?"1":"0"),Ve("sheetViews",Ve("sheetView",null,a),{})}(0,0,0,r),t.sheetFormat&&(s[s.length]=Ve("sheetFormatPr",null,{defaultRowHeight:t.sheetFormat.defaultRowHeight||"16",baseColWidth:t.sheetFormat.baseColWidth||"10",outlineLevelRow:t.sheetFormat.outlineLevelRow||"7"})),null!=l["!cols"]&&l["!cols"].length>0&&(s[s.length]=function(e,t){for(var r,n=["<cols>"],a=0;a!=t.length;++a)(r=t[a])&&(n[n.length]=Ve("col",null,li(a,r)))
return n[n.length]="</cols>",n.join("")}(0,l["!cols"])),s[a=s.length]="<sheetData/>",l["!links"]=[],null!=l["!ref"]&&(i=function(e,t,r,n){var a,s,o=[],i=[],l=Xt(e["!ref"]),c="",f="",h=[],u=0,d=0,p=e["!rows"],g=Array.isArray(e),m={r:f},b=-1
for(d=l.s.c;d<=l.e.c;++d)h[d]=Mt(d)
for(u=l.s.r;u<=l.e.r;++u){for(i=[],f=Nt(u),d=l.s.c;d<=l.e.c;++d){a=h[d]+f
var v=g?(e[u]||[])[d]:e[a]
void 0!==v&&null!=(c=Ri(v,a,e,t))&&i.push(c)}(i.length>0||p&&p[u])&&(m={r:f},p&&p[u]&&((s=p[u]).hidden&&(m.hidden=1),b=-1,s.hpx?b=ms(s.hpx):s.hpt&&(b=s.hpt),b>-1&&(m.ht=b,m.customHeight=1),s.level&&(m.outlineLevel=s.level)),o[o.length]=Ve("row",i.join(""),m))}if(p)for(;u<p.length;++u)p&&p[u]&&(m={r:u+1},(s=p[u]).hidden&&(m.hidden=1),b=-1,s.hpx?b=ms(s.hpx):s.hpt&&(b=s.hpt),b>-1&&(m.ht=b,m.customHeight=1),s.level&&(m.outlineLevel=s.level),o[o.length]=Ve("row","",m))
return o.join("")}(l,t,0,0)).length>0&&(s[s.length]=i),s.length>a+1&&(s[s.length]="</sheetData>",s[a]=s[a].replace("/>",">")),null!=l["!protect"]&&(s[s.length]=function(e){var t={sheet:1}
return["objects","scenarios","selectLockedCells","selectUnlockedCells"].forEach(function(r){null!=e[r]&&e[r]&&(t[r]="1")}),["formatColumns","formatRows","formatCells","insertColumns","insertRows","insertHyperlinks","deleteColumns","deleteRows","sort","autoFilter","pivotTables"].forEach(function(r){null==e[r]||e[r]||(t[r]="0")}),e.password&&(t.password=Ja(e.password).toString(16).toUpperCase()),Ve("sheetProtection",null,t)}(l["!protect"])),null!=l["!autofilter"]&&(s[s.length]=function(e,t,r,n){var a="string"==typeof e.ref?e.ref:zt(e.ref)
r.Workbook||(r.Workbook={}),r.Workbook.Names||(r.Workbook.Names=[])
var s=r.Workbook.Names,o=Vt(a)
o.s.r==o.e.r&&(o.e.r=Vt(t["!ref"]).e.r,a=zt(o))
for(var i=0;i<s.length;++i){var l=s[i]
if("_xlnm._FilterDatabase"==l.Name&&l.Sheet==n){l.Ref="'"+r.SheetNames[n]+"'!"+a
break}}return i==s.length&&s.push({Name:"_xlnm._FilterDatabase",Sheet:n,Ref:"'"+r.SheetNames[n]+"'!"+a}),Ve("autoFilter",null,{ref:a})}(l["!autofilter"],l,r,e)),null!=l["!merges"]&&l["!merges"].length>0&&(s[s.length]=function(e){if(0===e.length)return""
for(var t='<mergeCells count="'+e.length+'">',r=0;r!=e.length;++r)t+='<mergeCell ref="'+zt(e[r])+'"/>'
return t+"</mergeCells>"}(l["!merges"]))
var u,d=-1,p=-1
return l["!links"].length>0&&(s[s.length]="<hyperlinks>",l["!links"].forEach(function(e){e[1].Target&&(u={ref:e[0]},"#"!=e[1].Target.charAt(0)&&(p=Gr(n,-1,Se(e[1].Target).replace(/#.*$/,""),Ur.HLINK),u["r:id"]="rId"+p),(d=e[1].Target.indexOf("#"))>-1&&(u.location=Se(e[1].Target.slice(d+1))),e[1].Tooltip&&(u.tooltip=Se(e[1].Tooltip)),s[s.length]=Ve("hyperlink",null,u))}),s[s.length]="</hyperlinks>"),delete l["!links"],null!=l["!margins"]&&(s[s.length]=function(e){return ci(e),Ve("pageMargins",null,e)}(l["!margins"])),s[s.length]="",t&&!t.ignoreEC&&null!=t.ignoreEC||(s[s.length]=Ue("ignoredErrors",Ve("ignoredError",null,{numberStoredAsText:1,sqref:c}))),l["!drawing"].length>0?(p=Gr(n,-1,"../drawings/drawing"+(e+1)+".xml",Ur.DRAW),s[s.length]=Ve("drawing",null,{"r:id":"rId"+p})):delete l["!drawing"],l["!comments"].length>0&&(p=Gr(n,-1,"../drawings/vmlDrawing"+(e+1)+".vml",Ur.VML),s[s.length]=Ve("legacyDrawing",null,{"r:id":"rId"+p}),l["!legacy"]=p),s.length>2&&(s[s.length]="</worksheet>",s[1]=s[1].replace("/>",">")),s.join("")}function xi(e,t,r,n){var a=function(e,t,r){var n=kt(145),a=(r["!rows"]||[])[e]||{}
n._W(4,e),n._W(4,0)
var s=320
a.hpx?s=20*ms(a.hpx):a.hpt&&(s=20*a.hpt),n._W(2,s),n._W(1,0)
var o=0
a.level&&(o|=a.level),a.hidden&&(o|=16),(a.hpx||a.hpt)&&(o|=32),n._W(1,o),n._W(1,0)
var i=0,l=n.l
n.l+=4
for(var c={r:e,c:0},f=0;f<16;++f)if(!(t.s.c>f+1<<10||t.e.c<f<<10)){for(var h=-1,u=-1,d=f<<10;d<f+1<<10;++d)c.c=d,(Array.isArray(r)?(r[c.r]||[])[c.c]:r[Ht(c)])&&(h<0&&(h=d),u=d)
h<0||(++i,n._W(4,h),n._W(4,u))}var p=n.l
return n.l=l,n._W(4,i),n.l=p,n.length>n.l?n.slice(0,n.l):n}(n,r,t);(a.length>17||(t["!rows"]||[])[n])&&yt(e,"BrtRowHdr",a)}var yi=pr,Ii=gr
function Di(e,t,r){return null==r&&(r=kt(12)),ar(t,r),function(e,t){null==t&&(t=kt(4))
var r=0,n=0,a=100*e
if(e==(0|e)&&e>=-(1<<29)&&e<1<<29?n=1:a==(0|a)&&a>=-(1<<29)&&a<1<<29&&(n=1,r=1),!n)throw new Error("unsupported RkNumber "+e)
t._W(-4,((r?a:e)<<2)+(r+2))}(e.v,r),r}var Oi=pr,Fi=gr
var Pi=["left","right","top","bottom","header","footer"]
function Ni(e,t,r,n,a,s){if(void 0===t.v)return""
var o=""
switch(t.t){case"b":o=t.v?"1":"0"
break
case"d":(t=Z(t)).z=t.z||B._table[14],t.v=V(K(t.v)),t.t="n"
break
case"n":case"e":o=""+t.v
break
default:o=t.v}var i={r:r,c:n}
switch(i.s=fi(a.cellXfs,t,a),t.l&&s["!links"].push([Ht(i),t.l]),t.c&&s["!comments"].push([Ht(i),t.c]),t.t){case"s":case"str":return void(a.bookSST?(o=ii(a.Strings,t.v,a.revStrings),i.t="s",i.v=o,yt(e,"BrtCellIsst",function(e,t,r){return null==r&&(r=kt(12)),ar(t,r),r._W(4,t.v),r}(0,i))):(i.t="str",yt(e,"BrtCellSt",function(e,t,r){return null==r&&(r=kt(12+4*e.v.length)),ar(t,r),Jt(e.v,r),r.length>r.l?r.slice(0,r.l):r}(t,i))))
case"n":return void(t.v==(0|t.v)&&t.v>-1e3&&t.v<1e3?yt(e,"BrtCellRk",Di(t,i)):yt(e,"BrtCellReal",function(e,t,r){return null==r&&(r=kt(16)),ar(t,r),br(e.v,r),r}(t,i)))
case"b":return i.t="b",void yt(e,"BrtCellBool",function(e,t,r){return null==r&&(r=kt(9)),ar(t,r),r._W(1,e.v?1:0),r}(t,i))
case"e":i.t="e"}yt(e,"BrtCellBlank",function(e,t,r){return null==r&&(r=kt(8)),ar(t,r)}(0,i))}function Li(e,t){t&&t["!merges"]&&(yt(e,"BrtBeginMergeCells",function(e,t){return null==t&&(t=kt(4)),t._W(4,e),t}(t["!merges"].length)),t["!merges"].forEach(function(t){yt(e,"BrtMergeCell",Fi(t))}),yt(e,"BrtEndMergeCells"))}function Mi(e,t){t&&t["!cols"]&&(yt(e,"BrtBeginColInfos"),t["!cols"].forEach(function(t,r){t&&yt(e,"BrtColInfo",function(e,t,r){null==r&&(r=kt(18))
var n=li(e,t)
r._W(-4,e),r._W(-4,e),r._W(4,256*(n.width||10)),r._W(4,0)
var a=0
return t.hidden&&(a|=1),"number"==typeof n.width&&(a|=2),r._W(1,a),r._W(1,0),r}(r,t))}),yt(e,"BrtEndColInfos"))}function Wi(e,t){t&&t["!ref"]&&(yt(e,"BrtBeginCellIgnoreECs"),yt(e,"BrtCellIgnoreEC",function(e){var t=kt(24)
return t._W(4,4),t._W(4,1),gr(e,t),t}(Xt(t["!ref"]))),yt(e,"BrtEndCellIgnoreECs"))}function Ui(e,t,r){t["!links"].forEach(function(t){if(t[1].Target){var n=Gr(r,-1,t[1].Target.replace(/#.*$/,""),Ur.HLINK)
yt(e,"BrtHLink",function(e,t){var r=kt(50+4*(e[1].Target.length+(e[1].Tooltip||"").length))
gr({s:Ut(e[0]),e:Ut(e[0])},r),hr("rId"+t,r)
var n=e[1].Target.indexOf("#")
return Jt((-1==n?"":e[1].Target.slice(n+1))||"",r),Jt(e[1].Tooltip||"",r),Jt("",r),r.slice(0,r.l)}(t,n))}}),delete t["!links"]}function Hi(e,t,r){yt(e,"BrtBeginWsViews"),yt(e,"BrtBeginWsView",function(e,t,r){null==r&&(r=kt(30))
var n=924
return(((t||{}).Views||[])[0]||{}).RTL&&(n|=32),r._W(2,n),r._W(4,0),r._W(4,0),r._W(4,0),r._W(1,0),r._W(1,0),r._W(2,0),r._W(2,100),r._W(2,0),r._W(2,0),r._W(2,0),r._W(4,0),r}(0,r)),yt(e,"BrtEndWsView"),yt(e,"BrtEndWsViews")}function Vi(e,t){t["!protect"]&&yt(e,"BrtSheetProtection",function(e,t){return null==t&&(t=kt(66)),t._W(2,e.password?Ja(e.password):0),t._W(4,1),[["objects",!1],["scenarios",!1],["formatCells",!0],["formatColumns",!0],["formatRows",!0],["insertColumns",!0],["insertRows",!0],["insertHyperlinks",!0],["deleteColumns",!0],["deleteRows",!0],["selectLockedCells",!1],["sort",!0],["autoFilter",!0],["pivotTables",!0],["selectUnlockedCells",!1]].forEach(function(r){r[1]?t._W(4,null==e[r[0]]||e[r[0]]?0:1):t._W(4,null!=e[r[0]]&&e[r[0]]?0:1)}),t}(t["!protect"]))}function zi(e,t,r,n){var a=xt(),s=r.SheetNames[e],o=r.Sheets[s]||{},l=s
try{r&&r.Workbook&&(l=r.Workbook.Sheets[e].CodeName||l)}catch(i){}var c=Xt(o["!ref"]||"A1")
if(c.e.c>16383||c.e.r>1048575){if(t.WTF)throw new Error("Range "+(o["!ref"]||"A1")+" exceeds format limit A1:XFD1048576")
c.e.c=Math.min(c.e.c,16383),c.e.r=Math.min(c.e.c,1048575)}return o["!links"]=[],o["!comments"]=[],yt(a,"BrtBeginSheet"),r.vbaraw&&yt(a,"BrtWsProp",function(e,t){null==t&&(t=kt(84+4*e.length))
for(var r=0;r<3;++r)t._W(1,0)
return Er({auto:1},t),t._W(-4,-1),t._W(-4,-1),or(e,t),t.slice(0,t.l)}(l)),yt(a,"BrtWsDim",Ii(c)),Hi(a,0,r.Workbook),Mi(a,o),function(e,t,r,n){var a,s=Xt(t["!ref"]||"A1"),o="",i=[]
yt(e,"BrtBeginSheetData")
var l=Array.isArray(t),c=s.e.r
t["!rows"]&&(c=Math.max(s.e.r,t["!rows"].length-1))
for(var f=s.s.r;f<=c;++f)if(o=Nt(f),xi(e,t,s,f),f<=s.e.r)for(var h=s.s.c;h<=s.e.c;++h){f===s.s.r&&(i[h]=Mt(h)),a=i[h]+o
var u=l?(t[f]||[])[h]:t[a]
u&&Ni(e,u,f,h,n,t)}yt(e,"BrtEndSheetData")}(a,o,0,t),Vi(a,o),function(e,t){t["!autofilter"]&&(yt(e,"BrtBeginAFilter",gr(Xt(t["!autofilter"].ref))),yt(e,"BrtEndAFilter"))}(a,o),Li(a,o),Ui(a,o,n),o["!margins"]&&yt(a,"BrtMargins",function(e,t){return null==t&&(t=kt(48)),ci(e),Pi.forEach(function(r){br(e[r],t)}),t}(o["!margins"])),t&&!t.ignoreEC&&null!=t.ignoreEC||Wi(a,o),function(e,t,r,n){if(t["!comments"].length>0){var a=Gr(n,-1,"../drawings/vmlDrawing"+(r+1)+".vml",Ur.VML)
yt(e,"BrtLegacyDrawing",hr("rId"+a)),t["!legacy"]=a}}(a,o,e,n),yt(a,"BrtEndSheet"),a.end()}function Xi(e,t,r,n,a,s){var o=s||{"!type":"chart"}
if(!e)return s
var i=0,l=0,c="A",f={s:{r:2e6,c:2e6},e:{r:0,c:0}}
return(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm)||[]).forEach(function(e){var t=function(e){var t=[];(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm)||[]).forEach(function(e){var r=e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/)
r&&(t[+r[1]]=+r[2])})
var r=ve((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/)||["","General"])[1])
return[t,r]}(e)
f.s.r=f.s.c=0,f.e.c=i,c=Mt(i),t[0].forEach(function(e,r){o[c+Nt(r)]={t:"n",v:e,z:t[1]},l=r}),f.e.r<l&&(f.e.r=l),++i}),i>0&&(o["!ref"]=zt(f)),o}Ur.CS="http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet"
Ve("chartsheet",null,{xmlns:Xe.main[0],"xmlns:r":Xe.r})
var Gi=[["allowRefreshQuery",!1,"bool"],["autoCompressPictures",!0,"bool"],["backupFile",!1,"bool"],["checkCompatibility",!1,"bool"],["CodeName",""],["date1904",!1,"bool"],["defaultThemeVersion",0,"int"],["filterPrivacy",!1,"bool"],["hidePivotFieldList",!1,"bool"],["promptedSolutions",!1,"bool"],["publishItems",!1,"bool"],["refreshAllConnections",!1,"bool"],["saveExternalLinkValues",!0,"bool"],["showBorderUnselectedTables",!0,"bool"],["showInkAnnotation",!0,"bool"],["showObjects","all"],["showPivotChartFilter",!1,"bool"],["updateLinks","userSet"]],ji=[["activeTab",0,"int"],["autoFilterDateGrouping",!0,"bool"],["firstSheet",0,"int"],["minimized",!1,"bool"],["showHorizontalScroll",!0,"bool"],["showSheetTabs",!0,"bool"],["showVerticalScroll",!0,"bool"],["tabRatio",600,"int"],["visibility","visible"]],Ki=[],Yi=[["calcCompleted","true"],["calcMode","auto"],["calcOnSave","true"],["concurrentCalc","true"],["fullCalcOnLoad","false"],["fullPrecision","true"],["iterate","false"],["iterateCount","100"],["iterateDelta","0.001"],["refMode","A1"]]
function $i(e,t){for(var r=0;r!=e.length;++r)for(var n=e[r],a=0;a!=t.length;++a){var s=t[a]
if(null==n[s[0]])n[s[0]]=s[1]
else switch(s[2]){case"bool":"string"==typeof n[s[0]]&&(n[s[0]]=ke(n[s[0]]))
break
case"int":"string"==typeof n[s[0]]&&(n[s[0]]=parseInt(n[s[0]],10))}}}function Zi(e,t){for(var r=0;r!=t.length;++r){var n=t[r]
if(null==e[n[0]])e[n[0]]=n[1]
else switch(n[2]){case"bool":"string"==typeof e[n[0]]&&(e[n[0]]=ke(e[n[0]]))
break
case"int":"string"==typeof e[n[0]]&&(e[n[0]]=parseInt(e[n[0]],10))}}}function Qi(e){Zi(e.WBProps,Gi),Zi(e.CalcPr,Yi),$i(e.WBView,ji),$i(e.Sheets,Ki),si.date1904=ke(e.WBProps.date1904)}var Ji="][*?/\\".split("")
function qi(e,t){if(e.length>31){if(t)return!1
throw new Error("Sheet names cannot exceed 31 chars")}var r=!0
return Ji.forEach(function(n){if(-1!=e.indexOf(n)){if(!t)throw new Error("Sheet name cannot contain : \\ / ? * [ ]")
r=!1}}),r}function el(e){if(!e||!e.SheetNames||!e.Sheets)throw new Error("Invalid Workbook")
if(!e.SheetNames.length)throw new Error("Workbook is empty")
var t=e.Workbook&&e.Workbook.Sheets||[];(function(e,t,r){e.forEach(function(n,a){qi(n)
for(var s=0;s<a;++s)if(n==e[s])throw new Error("Duplicate Sheet Name: "+n)
if(r){var o=t&&t[a]&&t[a].CodeName||n
if(95==o.charCodeAt(0)&&o.length>22)throw new Error("Bad Code Name: Worksheet"+o)}})})(e.SheetNames,t,!!e.vbaraw)
for(var r=0;r<e.SheetNames.length;++r)ui(e.Sheets[e.SheetNames[r]],e.SheetNames[r],r)}var tl=/<\w+:workbook/
var rl=Ve("workbook",null,{xmlns:Xe.main[0],"xmlns:r":Xe.r})
function nl(e,t){return t||(t=kt(127)),t._W(4,e.Hidden),t._W(4,e.iTabID),hr(e.strRelID,t),Jt(e.name.slice(0,31),t),t.length>t.l?t.slice(0,t.l):t}function al(t,r){r||(r=kt(127))
for(var n=0;4!=n;++n)r._W(4,0)
return Jt("SheetJS",r),Jt(e.version,r),Jt(e.version,r),Jt("7262",r),r.length=r.l,r.length>r.l?r.slice(0,r.l):r}function sl(e,t){if(t.Workbook&&t.Workbook.Sheets){for(var r=t.Workbook.Sheets,n=0,a=-1,s=-1;n<r.length;++n)!r[n]||!r[n].Hidden&&-1==a?a=n:1==r[n].Hidden&&-1==s&&(s=n)
s>a||(yt(e,"BrtBeginBookViews"),yt(e,"BrtBookView",function(e,t){return t||(t=kt(29)),t._W(-4,0),t._W(-4,460),t._W(4,28800),t._W(4,17600),t._W(4,500),t._W(4,e),t._W(4,e),t._W(1,120),t.length>t.l?t.slice(0,t.l):t}(a)),yt(e,"BrtEndBookViews"))}}function ol(e,t){var r=xt()
return yt(r,"BrtBeginBook"),yt(r,"BrtFileVersion",al()),yt(r,"BrtWbProp",function(e,t){t||(t=kt(72))
var r=0
return e&&e.filterPrivacy&&(r|=8),t._W(4,r),t._W(4,0),or(e&&e.CodeName||"ThisWorkbook",t),t.slice(0,t.l)}(e.Workbook&&e.Workbook.WBProps||null)),sl(r,e),function(e,t){yt(e,"BrtBeginBundleShs")
for(var r=0;r!=t.SheetNames.length;++r)yt(e,"BrtBundleSh",nl({Hidden:t.Workbook&&t.Workbook.Sheets&&t.Workbook.Sheets[r]&&t.Workbook.Sheets[r].Hidden||0,iTabID:r+1,strRelID:"rId"+(r+1),name:t.SheetNames[r]}))
yt(e,"BrtEndBundleShs")}(r,e),yt(r,"BrtEndBook"),r.end()}function il(e,t,r){return".bin"===t.slice(-4)?function(e,t){var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},xmlns:""},n=!1
t||(t={}),t.biff=12
var a=[],s=[[]]
return s.SheetNames=[],s.XTI=[],Tt(e,function(e,o,i){switch(i){case 156:s.SheetNames.push(e.name),r.Sheets.push(e)
break
case 153:r.WBProps=e
break
case 39:null!=e.Sheet&&(t.SID=e.Sheet),e.Ref=Ho(e.Ptg,0,null,s,t),delete t.SID,delete e.Ptg,a.push(e)
break
case 1036:break
case 357:case 358:case 355:case 667:s[0].length?s.push([i,e]):s[0]=[i,e],s[s.length-1].XTI=[]
break
case 362:0===s.length&&(s[0]=[],s[0].XTI=[]),s[s.length-1].XTI=s[s.length-1].XTI.concat(e),s.XTI=s.XTI.concat(e)
break
case 361:break
case 3072:case 3073:case 2071:case 534:case 677:case 158:case 157:case 610:case 2050:case 155:case 548:case 676:case 128:case 665:case 2128:case 2125:case 549:case 2053:case 596:case 2076:case 2075:case 2082:case 397:case 154:case 1117:case 553:case 2091:break
case 35:n=!0
break
case 36:n=!1
break
case 37:case 38:case 16:break
default:if((o||"").indexOf("Begin")>0);else if((o||"").indexOf("End")>0);else if(!n||t.WTF)throw new Error("Unexpected record "+i+" "+o)}},t),Qi(r),r.Names=a,r.supbooks=s,r}(e,r):function(e,t){if(!e)throw new Error("Could not find file")
var r={AppVersion:{},WBProps:{},WBView:[],Sheets:[],CalcPr:{},Names:[],xmlns:""},n=!1,a="xmlns",s={},o=0
if(e.replace(he,function(i,l){var c=pe(i)
switch(ge(c[0])){case"<?xml":break
case"<workbook":i.match(tl)&&(a="xmlns"+i.match(/<(\w+):/)[1]),r.xmlns=c[a]
break
case"</workbook>":break
case"<fileVersion":delete c[0],r.AppVersion=c
break
case"<fileVersion/>":case"</fileVersion>":break
case"<fileSharing":case"<fileSharing/>":break
case"<workbookPr":case"<workbookPr/>":Gi.forEach(function(e){if(null!=c[e[0]])switch(e[2]){case"bool":r.WBProps[e[0]]=ke(c[e[0]])
break
case"int":r.WBProps[e[0]]=parseInt(c[e[0]],10)
break
default:r.WBProps[e[0]]=c[e[0]]}}),c.codeName&&(r.WBProps.CodeName=c.codeName)
break
case"</workbookPr>":case"<workbookProtection":case"<workbookProtection/>":break
case"<bookViews":case"<bookViews>":case"</bookViews>":break
case"<workbookView":case"<workbookView/>":delete c[0],r.WBView.push(c)
break
case"</workbookView>":break
case"<sheets":case"<sheets>":case"</sheets>":break
case"<sheet":switch(c.state){case"hidden":c.Hidden=1
break
case"veryHidden":c.Hidden=2
break
default:c.Hidden=0}delete c.state,c.name=ve(Te(c.name)),delete c[0],r.Sheets.push(c)
break
case"</sheet>":break
case"<functionGroups":case"<functionGroups/>":case"<functionGroup":break
case"<externalReferences":case"</externalReferences>":case"<externalReferences>":case"<externalReference":case"<definedNames/>":break
case"<definedNames>":case"<definedNames":n=!0
break
case"</definedNames>":n=!1
break
case"<definedName":(s={}).Name=Te(c.name),c.comment&&(s.Comment=c.comment),c.localSheetId&&(s.Sheet=+c.localSheetId),o=l+i.length
break
case"</definedName>":s.Ref=ve(Te(e.slice(o,l))),r.Names.push(s)
break
case"<definedName/>":break
case"<calcPr":case"<calcPr/>":delete c[0],r.CalcPr=c
break
case"</calcPr>":case"<oleSize":break
case"<customWorkbookViews>":case"</customWorkbookViews>":case"<customWorkbookViews":break
case"<customWorkbookView":case"</customWorkbookView>":break
case"<pivotCaches>":case"</pivotCaches>":case"<pivotCaches":case"<pivotCache":break
case"<smartTagPr":case"<smartTagPr/>":break
case"<smartTagTypes":case"<smartTagTypes>":case"</smartTagTypes>":case"<smartTagType":break
case"<webPublishing":case"<webPublishing/>":break
case"<fileRecoveryPr":case"<fileRecoveryPr/>":break
case"<webPublishObjects>":case"<webPublishObjects":case"</webPublishObjects>":case"<webPublishObject":break
case"<extLst":case"<extLst>":case"</extLst>":case"<extLst/>":break
case"<ext":n=!0
break
case"</ext>":n=!1
break
case"<ArchID":break
case"<AlternateContent":case"<AlternateContent>":n=!0
break
case"</AlternateContent>":n=!1
break
case"<revisionPtr":break
default:if(!n&&t.WTF)throw new Error("unrecognized "+c[0]+" in workbook")}return i}),-1===Xe.main.indexOf(r.xmlns))throw new Error("Unknown Namespace: "+r.xmlns)
return Qi(r),r}(e,r)}function ll(e,t,r,n,a,s,o,i){return".bin"===t.slice(-4)?function(e,t,r,n,a,s,o){if(!e)return e
var i=t||{}
n||(n={"!id":{}}),null!=u&&null==i.dense&&(i.dense=u)
var l,c,f,h,d,p,g,m,b,v,C=i.dense?[]:{},E={s:{r:2e6,c:2e6},e:{r:0,c:0}},S=!1,A=!1,_=[]
i.biff=12,i["!row"]=0
var w=0,R=!1,k=[],T={},x=i.supbooks||[[]]
if(x.sharedf=T,x.arrayf=k,x.SheetNames=a.SheetNames||a.Sheets.map(function(e){return e.name}),!i.supbooks&&(i.supbooks=x,a.Names))for(var y=0;y<a.Names.length;++y)x[0][y+1]=a.Names[y]
var I=[],D=[],O=!1
if(Tt(e,function(e,t,u){if(!A)switch(u){case 148:l=e
break
case 0:c=e,i.sheetRows&&i.sheetRows<=c.r&&(A=!0),b=Nt(d=c.r),i["!row"]=c.r,(e.hidden||e.hpt||null!=e.level)&&(e.hpt&&(e.hpx=bs(e.hpt)),D[e.r]=e)
break
case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:switch(f={t:e[2]},e[2]){case"n":f.v=e[1]
break
case"s":m=ai[e[1]],f.v=m.t,f.r=m.r
break
case"b":f.v=!!e[1]
break
case"e":f.v=e[1],!1!==i.cellText&&(f.w=vr[f.v])
break
case"str":f.t="s",f.v=e[1]}if((h=o.CellXf[e[0].iStyleRef])&&hi(f,h.numFmtId,null,i,s,o),p=e[0].c,i.dense?(C[d]||(C[d]=[]),C[d][p]=f):C[Mt(p)+b]=f,i.cellFormula){for(R=!1,w=0;w<k.length;++w){var y=k[w]
c.r>=y[0].s.r&&c.r<=y[0].e.r&&p>=y[0].s.c&&p<=y[0].e.c&&(f.F=zt(y[0]),R=!0)}!R&&e.length>3&&(f.f=e[3])}if(E.s.r>c.r&&(E.s.r=c.r),E.s.c>p&&(E.s.c=p),E.e.r<c.r&&(E.e.r=c.r),E.e.c<p&&(E.e.c=p),i.cellDates&&h&&"n"==f.t&&B.is_date(B._table[h.numFmtId])){var F=B.parse_date_code(f.v)
F&&(f.t="d",f.v=new Date(F.y,F.m-1,F.d,F.H,F.M,F.S,F.u))}break
case 1:if(!i.sheetStubs||S)break
f={t:"z",v:void 0},p=e[0].c,i.dense?(C[d]||(C[d]=[]),C[d][p]=f):C[Mt(p)+b]=f,E.s.r>c.r&&(E.s.r=c.r),E.s.c>p&&(E.s.c=p),E.e.r<c.r&&(E.e.r=c.r),E.e.c<p&&(E.e.c=p)
break
case 176:_.push(e)
break
case 494:var P=n["!id"][e.relId]
for(P?(e.Target=P.Target,e.loc&&(e.Target+="#"+e.loc),e.Rel=P):""==e.relId&&(e.Target="#"+e.loc),d=e.rfx.s.r;d<=e.rfx.e.r;++d)for(p=e.rfx.s.c;p<=e.rfx.e.c;++p)i.dense?(C[d]||(C[d]=[]),C[d][p]||(C[d][p]={t:"z",v:void 0}),C[d][p].l=e):(g=Ht({c:p,r:d}),C[g]||(C[g]={t:"z",v:void 0}),C[g].l=e)
break
case 426:if(!i.cellFormula)break
k.push(e),(v=i.dense?C[d][p]:C[Mt(p)+b]).f=Ho(e[1],0,{r:c.r,c:p},x,i),v.F=zt(e[0])
break
case 427:if(!i.cellFormula)break
T[Ht(e[0].s)]=e[1],(v=i.dense?C[d][p]:C[Mt(p)+b]).f=Ho(e[1],0,{r:c.r,c:p},x,i)
break
case 60:if(!i.cellStyles)break
for(;e.e>=e.s;)I[e.e--]={width:e.w/256,hidden:!!(1&e.flags)},O||(O=!0,ds(e.w/256)),ps(I[e.e+1])
break
case 161:C["!autofilter"]={ref:zt(e)}
break
case 476:C["!margins"]=e
break
case 147:a.Sheets[r]||(a.Sheets[r]={}),e.name&&(a.Sheets[r].CodeName=e.name)
break
case 137:a.Views||(a.Views=[{}]),a.Views[0]||(a.Views[0]={}),e.RTL&&(a.Views[0].RTL=!0)
break
case 485:break
case 175:case 644:case 625:case 562:case 396:case 1112:case 1146:case 471:case 1050:case 649:case 1105:case 49:case 589:case 607:case 564:case 1055:case 168:case 174:case 1180:case 499:case 64:case 1053:case 550:case 171:case 167:case 1177:case 169:case 1181:case 551:case 552:case 661:case 639:case 478:case 151:case 537:case 477:case 536:case 1103:case 680:case 1104:case 1024:case 152:case 663:case 535:case 678:case 504:case 1043:case 428:case 170:case 3072:case 50:case 2070:case 1045:break
case 35:S=!0
break
case 36:S=!1
break
case 37:case 38:break
default:if((t||"").indexOf("Begin")>0);else if((t||"").indexOf("End")>0);else if(!S||i.WTF)throw new Error("Unexpected record "+u+" "+t)}},i),delete i.supbooks,delete i["!row"],!C["!ref"]&&(E.s.r<2e6||l&&(l.e.r>0||l.e.c>0||l.s.r>0||l.s.c>0))&&(C["!ref"]=zt(l||E)),i.sheetRows&&C["!ref"]){var F=Xt(C["!ref"])
i.sheetRows<=+F.e.r&&(F.e.r=i.sheetRows-1,F.e.r>E.e.r&&(F.e.r=E.e.r),F.e.r<F.s.r&&(F.s.r=F.e.r),F.e.c>E.e.c&&(F.e.c=E.e.c),F.e.c<F.s.c&&(F.s.c=F.e.c),C["!fullref"]=C["!ref"],C["!ref"]=zt(F))}return _.length>0&&(C["!merges"]=_),I.length>0&&(C["!cols"]=I),D.length>0&&(C["!rows"]=D),C}(e,n,r,a,s,o,i):Ai(e,n,r,a,s,o,i)}function cl(e,t,r,n,a,s,o,i){return".bin"===t.slice(-4)?function(e,t,r,n,a){if(!e)return e
n||(n={"!id":{}})
var s={"!type":"chart","!chart":null,"!rel":""},o=[],i=!1
return Tt(e,function(e,n,l){switch(l){case 550:s["!rel"]=e
break
case 651:a.Sheets[r]||(a.Sheets[r]={}),e.name&&(a.Sheets[r].CodeName=e.name)
break
case 562:case 652:case 669:case 679:case 551:case 552:case 476:case 3072:break
case 35:i=!0
break
case 36:i=!1
break
case 37:o.push(n)
break
case 38:o.pop()
break
default:if((n||"").indexOf("Begin")>0)o.push(n)
else if((n||"").indexOf("End")>0)o.pop()
else if(!i||t.WTF)throw new Error("Unexpected record "+l+" "+n)}},t),n["!id"][s["!rel"]]&&(s["!chart"]=n["!id"][s["!rel"]]),s}(e,n,r,a,s):function(e,t,r,n,a){if(!e)return e
n||(n={"!id":{}})
var s,o={"!type":"chart","!chart":null,"!rel":""},i=e.match(Ei)
return i&&_i(i[0],0,a,r),(s=e.match(/drawing r:id="(.*?)"/))&&(o["!rel"]=s[1]),n["!id"][o["!rel"]]&&(o["!chart"]=n["!id"][o["!rel"]]),o}(e,0,r,a,s)}function fl(e,t,r,n){return".bin"===t.slice(-4)?function(e,t,r){var n={NumberFmt:[]}
for(var a in B._table)n.NumberFmt[a]=B._table[a]
n.CellXf=[],n.Fonts=[]
var s=[],o=!1
return Tt(e,function(e,a,i){switch(i){case 44:n.NumberFmt[e[0]]=e[1],B.load(e[1],e[0])
break
case 43:n.Fonts.push(e),null!=e.color.theme&&t&&t.themeElements&&t.themeElements.clrScheme&&(e.color.rgb=as(t.themeElements.clrScheme[e.color.theme].rgb,e.color.tint||0))
break
case 1025:case 45:case 46:break
case 47:"BrtBeginCellXFs"==s[s.length-1]&&n.CellXf.push(e)
break
case 48:case 507:case 572:case 475:break
case 1171:case 2102:case 1130:case 512:case 2095:case 3072:break
case 35:o=!0
break
case 36:o=!1
break
case 37:s.push(a)
break
case 38:s.pop()
break
default:if((a||"").indexOf("Begin")>0)s.push(a)
else if((a||"").indexOf("End")>0)s.pop()
else if(!o||r.WTF)throw new Error("Unexpected record "+i+" "+a)}}),n}(e,r,n):As(e,r,n)}function hl(e,t,r){return".bin"===t.slice(-4)?function(e,t){var r=[],n=!1
return Tt(e,function(e,a,s){switch(s){case 159:r.Count=e[0],r.Unique=e[1]
break
case 19:r.push(e)
break
case 160:return!0
case 35:n=!0
break
case 36:n=!1
break
default:if(a.indexOf("Begin")>0||a.indexOf("End"),!n||t.WTF)throw new Error("Unexpected record "+s+" "+a)}}),r}(e,r):function(e,t){var r=[],n=""
if(!e)return r
var a=e.match(La)
if(a){n=a[2].replace(Ma,"").split(Wa)
for(var s=0;s!=n.length;++s){var o=Na(n[s].trim(),t)
null!=o&&(r[r.length]=o)}a=pe(a[1]),r.Count=a.count,r.Unique=a.uniqueCount}return r}(e,r)}function ul(e,t,r){return".bin"===t.slice(-4)?function(e,t){var r=[],n=[],a={},s=!1
return Tt(e,function(e,o,i){switch(i){case 632:n.push(e)
break
case 635:a=e
break
case 637:a.t=e.t,a.h=e.h,a.r=e.r
break
case 636:if(a.author=n[a.iauthor],delete a.iauthor,t.sheetRows&&t.sheetRows<=a.rfx.r)break
a.t||(a.t=""),delete a.rfx,r.push(a)
break
case 3072:break
case 35:s=!0
break
case 36:s=!1
break
case 37:case 38:break
default:if((o||"").indexOf("Begin")>0);else if((o||"").indexOf("End")>0);else if(!s||t.WTF)throw new Error("Unexpected record "+i+" "+o)}}),r}(e,r):function(e,t){if(e.match(/<(?:\w+:)?comments *\/>/))return[]
var r=[],n=[],a=e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/)
a&&a[1]&&a[1].split(/<\/\w*:?author>/).forEach(function(e){if(""!==e&&""!==e.trim()){var t=e.match(/<(?:\w+:)?author[^>]*>(.*)/)
t&&r.push(t[1])}})
var s=e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/)
return s&&s[1]&&s[1].split(/<\/\w*:?comment>/).forEach(function(e){if(""!==e&&""!==e.trim()){var a=e.match(/<(?:\w+:)?comment[^>]*>/)
if(a){var s=pe(a[0]),o={author:s.authorId&&r[s.authorId]||"sheetjsghost",ref:s.ref,guid:s.guid},i=Ut(s.ref)
if(!(t.sheetRows&&t.sheetRows<=i.r)){var l=e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/),c=!!l&&!!l[1]&&Na(l[1])||{r:"",t:"",h:""}
o.r=c.r,"<t></t>"==c.r&&(c.t=c.h=""),o.t=c.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),t.cellHTML&&(o.h=c.h),n.push(o)}}}}),n}(e,r)}function dl(e,t,r){return".bin"===t.slice(-4)?function(e,t,r){var n=[]
return Tt(e,function(e,t,r){switch(r){case 63:n.push(e)
break
default:if((t||"").indexOf("Begin")>0);else if(!((t||"").indexOf("End")>0))throw new Error("Unexpected record "+r+" "+t)}}),n}(e):function(e){var t=[]
if(!e)return t
var r=1
return(e.match(he)||[]).forEach(function(e){var n=pe(e)
switch(n[0]){case"<?xml":break
case"<calcChain":case"<calcChain>":case"</calcChain>":break
case"<c":delete n[0],n.i?r=n.i:n.i=r,t.push(n)}}),t}(e)}function pl(e,t,r){if(".bin"===t.slice(-4))return function(e,t,r){if(!e)return e
var n=r||{},a=!1
Tt(e,function(e,t,r){switch(r){case 359:case 363:case 364:case 366:case 367:case 368:case 369:case 370:case 371:case 472:case 577:case 578:case 579:case 580:case 581:case 582:case 583:case 584:case 585:case 586:case 587:break
case 35:a=!0
break
case 36:a=!1
break
default:if((t||"").indexOf("Begin")>0);else if((t||"").indexOf("End")>0);else if(!a||n.WTF)throw new Error("Unexpected record "+r.toString(16)+" "+t)}},n)}(e,0,r)}function gl(e,t,r){return(".bin"===t.slice(-4)?ol:function(e){var t=[ce]
t[t.length]=rl
var r=e.Workbook&&(e.Workbook.Names||[]).length>0,n={codeName:"ThisWorkbook"}
e.Workbook&&e.Workbook.WBProps&&(Gi.forEach(function(t){null!=e.Workbook.WBProps[t[0]]&&e.Workbook.WBProps[t[0]]!=t[1]&&(n[t[0]]=e.Workbook.WBProps[t[0]])}),e.Workbook.WBProps.CodeName&&(n.codeName=e.Workbook.WBProps.CodeName,delete n.CodeName)),t[t.length]=Ve("workbookPr",null,n),t[t.length]="<sheets>"
for(var a=e.Workbook&&e.Workbook.Sheets||[],s=0;s!=e.SheetNames.length;++s){var o={name:Se(e.SheetNames[s].slice(0,31))}
if(o.sheetId=""+(s+1),o["r:id"]="rId"+(s+1),a[s])switch(a[s].Hidden){case 1:o.state="hidden"
break
case 2:o.state="veryHidden"}t[t.length]=Ve("sheet",null,o)}return t[t.length]="</sheets>",r&&(t[t.length]="<definedNames>",e.Workbook&&e.Workbook.Names&&e.Workbook.Names.forEach(function(e){var r={name:e.Name}
e.Comment&&(r.comment=e.Comment),null!=e.Sheet&&(r.localSheetId=""+e.Sheet),e.Ref&&(t[t.length]=Ve("definedName",String(e.Ref),r))}),t[t.length]="</definedNames>"),t.length>2&&(t[t.length]="</workbook>",t[1]=t[1].replace("/>",">")),t.join("")})(e,r)}function ml(e,t,r,n,a){return(".bin"===t.slice(-4)?zi:Ti)(e,r,n,a)}function bl(e,t,r){return(".bin"===t.slice(-4)?Va:function(e,t){if(!t.bookSST)return""
var r=[ce]
r[r.length]=Ve("sst",null,{xmlns:Xe.main[0],count:e.Count,uniqueCount:e.Unique})
for(var n=0;n!=e.length;++n)if(null!=e[n]){var a=e[n],s="<si>"
a.r?s+=a.r:(s+="<t",a.t||(a.t=""),a.t.match(Ua)&&(s+=' xml:space="preserve"'),s+=">"+Se(a.t)+"</t>"),s+="</si>",r[r.length]=s}return r.length>2&&(r[r.length]="</sst>",r[1]=r[1].replace("/>",">")),r.join("")})(e,r)}function vl(e,t,r){return(".bin"===t.slice(-4)?eo:function(e){var t=[ce,Js],r=[]
return t.push("<authors>"),e.forEach(function(e){e[1].forEach(function(e){var n=Se(e.a)
r.indexOf(n)>-1||(r.push(n),t.push("<author>"+n+"</author>"))})}),t.push("</authors>"),t.push("<commentList>"),e.forEach(function(e){e[1].forEach(function(n){t.push('<comment ref="'+e[0]+'" authorId="'+r.indexOf(Se(n.a))+'"><text>'),t.push(Ue("t",null==n.t?"":n.t)),t.push("</text></comment>")})}),t.push("</commentList>"),t.length>2&&(t[t.length]="</comments>",t[1]=t[1].replace("/>",">")),t.join("")})(e,r)}var Cl=/([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g,El=/([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/,Sl=function(e){return String.fromCharCode(e)}
function Al(e,t){var r=e.split(/\s+/),n=[]
if(t||(n[0]=r[0]),1===r.length)return n
var a,s,o,i=e.match(Cl)
if(i)for(o=0;o!=i.length;++o)-1===(s=(a=i[o].match(El))[1].indexOf(":"))?n[a[1]]=a[2].slice(1,a[2].length-1):n["xmlns:"===a[1].slice(0,6)?"xmlns"+a[1].slice(6):a[1].slice(s+1)]=a[2].slice(1,a[2].length-1)
return n}function _l(e){var t={}
if(1===e.split(/\s+/).length)return t
var r,n,a,s=e.match(Cl)
if(s)for(a=0;a!=s.length;++a)-1===(n=(r=s[a].match(El))[1].indexOf(":"))?t[r[1]]=r[2].slice(1,r[2].length-1):t["xmlns:"===r[1].slice(0,6)?"xmlns"+r[1].slice(6):r[1].slice(n+1)]=r[2].slice(1,r[2].length-1)
return t}function wl(e,t,r,n){var a=n
switch((r[0].match(/dt:dt="([\w.]+)"/)||["",""])[1]){case"boolean":a=ke(n)
break
case"i2":case"int":a=parseInt(n,10)
break
case"r4":case"float":a=parseFloat(n)
break
case"date":case"dateTime.tz":a=K(n)
break
case"i8":case"string":case"fixed":case"uuid":case"bin.base64":break
default:throw new Error("bad custprop:"+r[0])}e[ve(t)]=a}function Rl(e,t,r){if("z"!==e.t){if(!r||!1!==r.cellText)try{"e"===e.t?e.w=e.w||vr[e.v]:"General"===t?"n"===e.t?(0|e.v)===e.v?e.w=B._general_int(e.v):e.w=B._general_num(e.v):e.w=B._general(e.v):e.w=function(e,t){var r=T[e]||ve(e)
return"General"===r?B._general(t):B.format(r,t)}(t||"General",e.v)}catch(n){if(r.WTF)throw n}try{var a=T[t]||t||"General"
if(r.cellNF&&(e.z=a),r.cellDates&&"n"==e.t&&B.is_date(a)){var s=B.parse_date_code(e.v)
s&&(e.t="d",e.v=new Date(s.y,s.m-1,s.d,s.H,s.M,s.S,s.u))}}catch(n){if(r.WTF)throw n}}}function Bl(e,t,r){if(r.cellStyles&&t.Interior){var n=t.Interior
n.Pattern&&(n.patternType=vs[n.Pattern]||n.Pattern)}e[t.ID]=t}function kl(e,t,r,n,a,s,o,i,l,c){var f="General",h=n.StyleID,u={}
c=c||{}
var d=[],p=0
for(void 0===h&&i&&(h=i.StyleID),void 0===h&&o&&(h=o.StyleID);void 0!==s[h]&&(s[h].nf&&(f=s[h].nf),s[h].Interior&&d.push(s[h].Interior),s[h].Parent);)h=s[h].Parent
switch(r.Type){case"Boolean":n.t="b",n.v=ke(e)
break
case"String":n.t="s",n.r=Re(ve(e)),n.v=e.indexOf("<")>-1?ve(t):n.r
break
case"DateTime":"Z"!=e.slice(-1)&&(e+="Z"),n.v=(K(e)-new Date(Date.UTC(1899,11,30)))/864e5,n.v!=n.v?n.v=ve(e):n.v<60&&(n.v=n.v-1),f&&"General"!=f||(f="yyyy-mm-dd")
case"Number":void 0===n.v&&(n.v=+e),n.t||(n.t="n")
break
case"Error":n.t="e",n.v=Cr[e],!1!==c.cellText&&(n.w=e)
break
default:n.t="s",n.v=Re(t||e)}if(Rl(n,f,c),!1!==c.cellFormula)if(n.Formula){var g=ve(n.Formula)
61==g.charCodeAt(0)&&(g=g.slice(1)),n.f=no(g,a),delete n.Formula,"RC"==n.ArrayRange?n.F=no("RC:RC",a):n.ArrayRange&&(n.F=no(n.ArrayRange,a),l.push([Xt(n.F),n.F]))}else for(p=0;p<l.length;++p)a.r>=l[p][0].s.r&&a.r<=l[p][0].e.r&&a.c>=l[p][0].s.c&&a.c<=l[p][0].e.c&&(n.F=l[p][1])
c.cellStyles&&(d.forEach(function(e){!u.patternType&&e.patternType&&(u.patternType=e.patternType)}),n.s=u),void 0!==n.StyleID&&(n.ixfe=n.StyleID)}function Tl(e){e.t=e.v||"",e.t=e.t.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),e.v=e.w=e.ixfe=void 0}function xl(e){if(p&&Buffer.isBuffer(e))return e.toString("utf8")
if("string"==typeof e)return e
if("undefined"!=typeof Uint8Array&&e instanceof Uint8Array)return Te(S(A(e)))
throw new Error("Bad input format: expected Buffer or string")}var yl=/<(\/?)([^\s?>!\/:]*:|)([^\s?>:\/]+)[^>]*>/gm
function Il(e,t){var r=t||{}
k(B)
var n=f(xl(e))
"binary"!=r.type&&"array"!=r.type&&"base64"!=r.type||(n=void 0!==cptable?cptable.utils.decode(65001,c(n)):Te(n))
var a,s=n.slice(0,1024).toLowerCase(),o=!1
if(-1==s.indexOf("<?xml")&&["html","table","head","meta","script","style","div"].forEach(function(e){s.indexOf("<"+e)>=0&&(o=!0)}),o)return oc.to_workbook(n,r)
var i,l=[]
null!=u&&null==r.dense&&(r.dense=u)
var h,d={},p=[],g=r.dense?[]:{},m="",b={},v={},C=Al('<Data ss:Type="String">'),E=0,S=0,A=0,_={s:{r:2e6,c:2e6},e:{r:0,c:0}},w={},R={},x="",y=0,I=[],D={},O={},F=0,P=[],N=[],L={},M=[],W=!1,U=[],H=[],V={},z=0,X=0,G={Sheets:[],WBProps:{date1904:!1}},j={}
for(yl.lastIndex=0,n=n.replace(/<!--([\s\S]*?)-->/gm,"");a=yl.exec(n);)switch(a[3]){case"Data":if(l[l.length-1][1])break
"/"===a[1]?kl(n.slice(E,a.index),x,C,"Comment"==l[l.length-1][0]?L:b,{c:S,r:A},w,M[S],v,U,r):(x="",C=Al(a[0]),E=a.index+a[0].length)
break
case"Cell":if("/"===a[1])if(N.length>0&&(b.c=N),(!r.sheetRows||r.sheetRows>A)&&void 0!==b.v&&(r.dense?(g[A]||(g[A]=[]),g[A][S]=b):g[Mt(S)+Nt(A)]=b),b.HRef&&(b.l={Target:b.HRef},b.HRefScreenTip&&(b.l.Tooltip=b.HRefScreenTip),delete b.HRef,delete b.HRefScreenTip),(b.MergeAcross||b.MergeDown)&&(z=S+(0|parseInt(b.MergeAcross,10)),X=A+(0|parseInt(b.MergeDown,10)),I.push({s:{c:S,r:A},e:{c:z,r:X}})),r.sheetStubs)if(b.MergeAcross||b.MergeDown){for(var K=S;K<=z;++K)for(var Y=A;Y<=X;++Y)(K>S||Y>A)&&(r.dense?(g[Y]||(g[Y]=[]),g[Y][K]={t:"z"}):g[Mt(K)+Nt(Y)]={t:"z"})
S=z+1}else++S
else b.MergeAcross?S=z+1:++S
else(b=_l(a[0])).Index&&(S=+b.Index-1),S<_.s.c&&(_.s.c=S),S>_.e.c&&(_.e.c=S),"/>"===a[0].slice(-2)&&++S,N=[]
break
case"Row":"/"===a[1]||"/>"===a[0].slice(-2)?(A<_.s.r&&(_.s.r=A),A>_.e.r&&(_.e.r=A),"/>"===a[0].slice(-2)&&(v=Al(a[0])).Index&&(A=+v.Index-1),S=0,++A):((v=Al(a[0])).Index&&(A=+v.Index-1),V={},("0"==v.AutoFitHeight||v.Height)&&(V.hpx=parseInt(v.Height,10),V.hpt=ms(V.hpx),H[A]=V),"1"==v.Hidden&&(V.hidden=!0,H[A]=V))
break
case"Worksheet":if("/"===a[1]){if((i=l.pop())[0]!==a[3])throw new Error("Bad state: "+i.join("|"))
p.push(m),_.s.r<=_.e.r&&_.s.c<=_.e.c&&(g["!ref"]=zt(_),r.sheetRows&&r.sheetRows<=_.e.r&&(g["!fullref"]=g["!ref"],_.e.r=r.sheetRows-1,g["!ref"]=zt(_))),I.length&&(g["!merges"]=I),M.length>0&&(g["!cols"]=M),H.length>0&&(g["!rows"]=H),d[m]=g}else _={s:{r:2e6,c:2e6},e:{r:0,c:0}},A=S=0,l.push([a[3],!1]),i=Al(a[0]),m=ve(i.Name),g=r.dense?[]:{},I=[],U=[],H=[],j={name:m,Hidden:0},G.Sheets.push(j)
break
case"Table":if("/"===a[1]){if((i=l.pop())[0]!==a[3])throw new Error("Bad state: "+i.join("|"))}else{if("/>"==a[0].slice(-2))break
Al(a[0]),l.push([a[3],!1]),M=[],W=!1}break
case"Style":"/"===a[1]?Bl(w,R,r):R=Al(a[0])
break
case"NumberFormat":R.nf=ve(Al(a[0]).Format||"General"),T[R.nf]&&(R.nf=T[R.nf])
for(var $=0;392!=$&&B._table[$]!=R.nf;++$);if(392==$)for($=57;392!=$;++$)if(null==B._table[$]){B.load(R.nf,$)
break}break
case"Column":if("Table"!==l[l.length-1][0])break
if((h=Al(a[0])).Hidden&&(h.hidden=!0,delete h.Hidden),h.Width&&(h.wpx=parseInt(h.Width,10)),!W&&h.wpx>10){W=!0,ls=ss
for(var Q=0;Q<M.length;++Q)M[Q]&&ps(M[Q])}W&&ps(h),M[h.Index-1||M.length]=h
for(var J=0;J<+h.Span;++J)M[M.length]=Z(h)
break
case"NamedRange":G.Names||(G.Names=[])
var q=pe(a[0]),ee={Name:q.Name,Ref:no(q.RefersTo.slice(1),{r:0,c:0})}
G.Sheets.length>0&&(ee.Sheet=G.Sheets.length-1),G.Names.push(ee)
break
case"NamedCell":case"B":case"I":case"U":case"S":case"Sub":case"Sup":case"Span":case"Border":case"Alignment":case"Borders":break
case"Font":if("/>"===a[0].slice(-2))break
"/"===a[1]?x+=n.slice(y,a.index):y=a.index+a[0].length
break
case"Interior":if(!r.cellStyles)break
R.Interior=Al(a[0])
break
case"Protection":break
case"Author":case"Title":case"Description":case"Created":case"Keywords":case"Subject":case"Category":case"Company":case"LastAuthor":case"LastSaved":case"LastPrinted":case"Version":case"Revision":case"TotalTime":case"HyperlinkBase":case"Manager":case"ContentStatus":case"Identifier":case"Language":case"AppName":if("/>"===a[0].slice(-2))break
"/"===a[1]?fn(D,a[3],n.slice(F,a.index)):F=a.index+a[0].length
break
case"Paragraphs":break
case"Styles":case"Workbook":if("/"===a[1]){if((i=l.pop())[0]!==a[3])throw new Error("Bad state: "+i.join("|"))}else l.push([a[3],!1])
break
case"Comment":if("/"===a[1]){if((i=l.pop())[0]!==a[3])throw new Error("Bad state: "+i.join("|"))
Tl(L),N.push(L)}else l.push([a[3],!1]),L={a:(i=Al(a[0])).Author}
break
case"AutoFilter":if("/"===a[1]){if((i=l.pop())[0]!==a[3])throw new Error("Bad state: "+i.join("|"))}else if("/"!==a[0].charAt(a[0].length-2)){var te=Al(a[0])
g["!autofilter"]={ref:no(te.Range).replace(/\$/g,"")},l.push([a[3],!0])}break
case"Name":break
case"ComponentOptions":case"DocumentProperties":case"CustomDocumentProperties":case"OfficeDocumentSettings":case"PivotTable":case"PivotCache":case"Names":case"MapInfo":case"PageBreaks":case"QueryTable":case"DataValidation":case"Sorting":case"Schema":case"data":case"ConditionalFormatting":case"SmartTagType":case"SmartTags":case"ExcelWorkbook":case"WorkbookOptions":case"WorksheetOptions":if("/"===a[1]){if((i=l.pop())[0]!==a[3])throw new Error("Bad state: "+i.join("|"))}else"/"!==a[0].charAt(a[0].length-2)&&l.push([a[3],!0])
break
default:if(0==l.length&&"document"==a[3])return hc(n,r)
if(0==l.length&&"UOF"==a[3])return hc(n,r)
var re=!0
switch(l[l.length-1][0]){case"OfficeDocumentSettings":switch(a[3]){case"AllowPNG":case"RemovePersonalInformation":case"DownloadComponents":case"LocationOfComponents":case"Colors":case"Color":case"Index":case"RGB":case"PixelsPerInch":case"TargetScreenSize":case"ReadOnlyRecommended":break
default:re=!1}break
case"ComponentOptions":switch(a[3]){case"Toolbar":case"HideOfficeLogo":case"SpreadsheetAutoFit":case"Label":case"Caption":case"MaxHeight":case"MaxWidth":case"NextSheetNumber":break
default:re=!1}break
case"ExcelWorkbook":switch(a[3]){case"Date1904":G.WBProps.date1904=!0
break
case"WindowHeight":case"WindowWidth":case"WindowTopX":case"WindowTopY":case"TabRatio":case"ProtectStructure":case"ProtectWindows":case"ActiveSheet":case"DisplayInkNotes":case"FirstVisibleSheet":case"SupBook":case"SheetName":case"SheetIndex":case"SheetIndexFirst":case"SheetIndexLast":case"Dll":case"AcceptLabelsInFormulas":case"DoNotSaveLinkValues":case"Iteration":case"MaxIterations":case"MaxChange":case"Path":case"Xct":case"Count":case"SelectedSheets":case"Calculation":case"Uncalced":case"StartupPrompt":case"Crn":case"ExternName":case"Formula":case"ColFirst":case"ColLast":case"WantAdvise":case"Boolean":case"Error":case"Text":case"OLE":case"NoAutoRecover":case"PublishObjects":case"DoNotCalculateBeforeSave":case"Number":case"RefModeR1C1":case"EmbedSaveSmartTags":break
default:re=!1}break
case"WorkbookOptions":switch(a[3]){case"OWCVersion":case"Height":case"Width":break
default:re=!1}break
case"WorksheetOptions":switch(a[3]){case"Visible":if("/>"===a[0].slice(-2));else if("/"===a[1])switch(n.slice(F,a.index)){case"SheetHidden":j.Hidden=1
break
case"SheetVeryHidden":j.Hidden=2}else F=a.index+a[0].length
break
case"Header":g["!margins"]||ci(g["!margins"]={},"xlml"),g["!margins"].header=pe(a[0]).Margin
break
case"Footer":g["!margins"]||ci(g["!margins"]={},"xlml"),g["!margins"].footer=pe(a[0]).Margin
break
case"PageMargins":var ne=pe(a[0])
g["!margins"]||ci(g["!margins"]={},"xlml"),ne.Top&&(g["!margins"].top=ne.Top),ne.Left&&(g["!margins"].left=ne.Left),ne.Right&&(g["!margins"].right=ne.Right),ne.Bottom&&(g["!margins"].bottom=ne.Bottom)
break
case"DisplayRightToLeft":G.Views||(G.Views=[]),G.Views[0]||(G.Views[0]={}),G.Views[0].RTL=!0
break
case"Unsynced":case"Print":case"Panes":case"Scale":case"Pane":case"Number":case"Layout":case"PageSetup":case"Selected":case"ProtectObjects":case"EnableSelection":case"ProtectScenarios":case"ValidPrinterInfo":case"HorizontalResolution":case"VerticalResolution":case"NumberofCopies":case"ActiveRow":case"ActiveCol":case"ActivePane":case"TopRowVisible":case"TopRowBottomPane":case"LeftColumnVisible":case"LeftColumnRightPane":case"FitToPage":case"RangeSelection":case"PaperSizeIndex":case"PageLayoutZoom":case"PageBreakZoom":case"FilterOn":case"DoNotDisplayGridlines":case"SplitHorizontal":case"SplitVertical":case"FreezePanes":case"FrozenNoSplit":case"FitWidth":case"FitHeight":case"CommentsLayout":case"Zoom":case"LeftToRight":case"Gridlines":case"AllowSort":case"AllowFilter":case"AllowInsertRows":case"AllowDeleteRows":case"AllowInsertCols":case"AllowDeleteCols":case"AllowInsertHyperlinks":case"AllowFormatCells":case"AllowSizeCols":case"AllowSizeRows":case"NoSummaryRowsBelowDetail":case"TabColorIndex":case"DoNotDisplayHeadings":case"ShowPageLayoutZoom":case"NoSummaryColumnsRightDetail":case"BlackAndWhite":case"DoNotDisplayZeros":case"DisplayPageBreak":case"RowColHeadings":case"DoNotDisplayOutline":case"NoOrientation":case"AllowUsePivotTables":case"ZeroHeight":case"ViewableRange":case"Selection":case"ProtectContents":break
default:re=!1}break
case"PivotTable":case"PivotCache":switch(a[3]){case"ImmediateItemsOnDrop":case"ShowPageMultipleItemLabel":case"CompactRowIndent":case"Location":case"PivotField":case"Orientation":case"LayoutForm":case"LayoutSubtotalLocation":case"LayoutCompactRow":case"Position":case"PivotItem":case"DataType":case"DataField":case"SourceName":case"ParentField":case"PTLineItems":case"PTLineItem":case"CountOfSameItems":case"Item":case"ItemType":case"PTSource":case"CacheIndex":case"ConsolidationReference":case"FileName":case"Reference":case"NoColumnGrand":case"NoRowGrand":case"BlankLineAfterItems":case"Hidden":case"Subtotal":case"BaseField":case"MapChildItems":case"Function":case"RefreshOnFileOpen":case"PrintSetTitles":case"MergeLabels":case"DefaultVersion":case"RefreshName":case"RefreshDate":case"RefreshDateCopy":case"VersionLastRefresh":case"VersionLastUpdate":case"VersionUpdateableMin":case"VersionRefreshableMin":case"Calculation":break
default:re=!1}break
case"PageBreaks":switch(a[3]){case"ColBreaks":case"ColBreak":case"RowBreaks":case"RowBreak":case"ColStart":case"ColEnd":case"RowEnd":break
default:re=!1}break
case"AutoFilter":switch(a[3]){case"AutoFilterColumn":case"AutoFilterCondition":case"AutoFilterAnd":case"AutoFilterOr":break
default:re=!1}break
case"QueryTable":switch(a[3]){case"Id":case"AutoFormatFont":case"AutoFormatPattern":case"QuerySource":case"QueryType":case"EnableRedirections":case"RefreshedInXl9":case"URLString":case"HTMLTables":case"Connection":case"CommandText":case"RefreshInfo":case"NoTitles":case"NextId":case"ColumnInfo":case"OverwriteCells":case"DoNotPromptForFile":case"TextWizardSettings":case"Source":case"Number":case"Decimal":case"ThousandSeparator":case"TrailingMinusNumbers":case"FormatSettings":case"FieldType":case"Delimiters":case"Tab":case"Comma":case"AutoFormatName":case"VersionLastEdit":case"VersionLastRefresh":break
default:re=!1}break
case"Sorting":case"ConditionalFormatting":case"DataValidation":switch(a[3]){case"Range":case"Type":case"Min":case"Max":case"Sort":case"Descending":case"Order":case"CaseSensitive":case"Value":case"ErrorStyle":case"ErrorMessage":case"ErrorTitle":case"CellRangeList":case"InputMessage":case"InputTitle":case"ComboHide":case"InputHide":case"Condition":case"Qualifier":case"UseBlank":case"Value1":case"Value2":case"Format":break
default:re=!1}break
case"MapInfo":case"Schema":case"data":switch(a[3]){case"Map":case"Entry":case"Range":case"XPath":case"Field":case"XSDType":case"FilterOn":case"Aggregate":case"ElementType":case"AttributeType":break
case"schema":case"element":case"complexType":case"datatype":case"all":case"attribute":case"extends":case"row":break
default:re=!1}break
case"SmartTags":break
default:re=!1}if(re)break
if(!l[l.length-1][1])throw"Unrecognized tag: "+a[3]+"|"+l.join("|")
if("CustomDocumentProperties"===l[l.length-1][0]){if("/>"===a[0].slice(-2))break
"/"===a[1]?wl(O,a[3],P,n.slice(F,a.index)):(P=a,F=a.index+a[0].length)
break}if(r.WTF)throw"Unrecognized tag: "+a[3]+"|"+l.join("|")}var ae={}
return r.bookSheets||r.bookProps||(ae.Sheets=d),ae.SheetNames=p,ae.Workbook=G,ae.SSF=B.get_table(),ae.Props=D,ae.Custprops=O,ae}function Dl(e,t){switch(Bc(t=t||{}),t.type||"base64"){case"base64":return Il(d.decode(e),t)
case"binary":case"buffer":case"file":return Il(e,t)
case"array":return Il(S(e),t)}}function Ol(e,t){var r=[]
return e.Props&&r.push(function(e,t){var r=[]
return N(ln).map(function(e){for(var t=0;t<Zr.length;++t)if(Zr[t][1]==e)return Zr[t]
for(t=0;t<tn.length;++t)if(tn[t][1]==e)return tn[t]
throw e}).forEach(function(n){if(null!=e[n[1]]){var a=t&&t.Props&&null!=t.Props[n[1]]?t.Props[n[1]]:e[n[1]]
switch(n[2]){case"date":a=new Date(a).toISOString().replace(/\.\d*Z/,"Z")}"number"==typeof a?a=String(a):!0===a||!1===a?a=a?"1":"0":a instanceof Date&&(a=new Date(a).toISOString().replace(/\.\d*Z/,"")),r.push(Ue(ln[n[1]]||n[1],a))}}),Ve("DocumentProperties",r.join(""),{xmlns:Ge.o})}(e.Props,t)),e.Custprops&&r.push(function(e,t){var r=["Worksheets","SheetNames"],n="CustomDocumentProperties",a=[]
return e&&N(e).forEach(function(t){if(e.hasOwnProperty(t)){for(var n=0;n<Zr.length;++n)if(t==Zr[n][1])return
for(n=0;n<tn.length;++n)if(t==tn[n][1])return
for(n=0;n<r.length;++n)if(t==r[n])return
var s=e[t],o="string"
"number"==typeof s?(o="float",s=String(s)):!0===s||!1===s?(o="boolean",s=s?"1":"0"):s=String(s),a.push(Ve(Ae(t),s,{"dt:dt":o}))}}),t&&N(t).forEach(function(r){if(t.hasOwnProperty(r)&&(!e||!e.hasOwnProperty(r))){var n=t[r],s="string"
"number"==typeof n?(s="float",n=String(n)):!0===n||!1===n?(s="boolean",n=n?"1":"0"):n instanceof Date?(s="dateTime.tz",n=n.toISOString()):n=String(n),a.push(Ve(Ae(r),n,{"dt:dt":s}))}}),"<"+n+' xmlns="'+Ge.o+'">'+a.join("")+"</"+n+">"}(e.Props,e.Custprops)),r.join("")}function Fl(e){return Ve("NamedRange",null,{"ss:Name":e.Name,"ss:RefersTo":"="+so(e.Ref,{r:0,c:0})})}function Pl(e,t,r,n,a,s,o){if(!e||null==e.v&&null==e.f)return""
var i={}
if(e.f&&(i["ss:Formula"]="="+Se(so(e.f,o))),e.F&&e.F.slice(0,t.length)==t){var l=Ut(e.F.slice(t.length+1))
i["ss:ArrayRange"]="RC:R"+(l.r==o.r?"":"["+(l.r-o.r)+"]")+"C"+(l.c==o.c?"":"["+(l.c-o.c)+"]")}if(e.l&&e.l.Target&&(i["ss:HRef"]=Se(e.l.Target),e.l.Tooltip&&(i["x:HRefScreenTip"]=Se(e.l.Tooltip))),r["!merges"])for(var c=r["!merges"],f=0;f!=c.length;++f)c[f].s.c==o.c&&c[f].s.r==o.r&&(c[f].e.c>c[f].s.c&&(i["ss:MergeAcross"]=c[f].e.c-c[f].s.c),c[f].e.r>c[f].s.r&&(i["ss:MergeDown"]=c[f].e.r-c[f].s.r))
var h="",u=""
switch(e.t){case"z":return""
case"n":h="Number",u=String(e.v)
break
case"b":h="Boolean",u=e.v?"1":"0"
break
case"e":h="Error",u=vr[e.v]
break
case"d":h="DateTime",u=new Date(e.v).toISOString(),null==e.z&&(e.z=e.z||B._table[14])
break
case"s":h="String",u=function(e){return(e+"").replace(Ce,function(e){return be[e]}).replace(_e,function(e){return"&#x"+e.charCodeAt(0).toString(16).toUpperCase()+";"})}(e.v||"")}var d=fi(n.cellXfs,e,n)
i["ss:StyleID"]="s"+(21+d),i["ss:Index"]=o.c+1
var p='<Data ss:Type="'+h+'">'+(null!=e.v?u:"")+"</Data>"
return(e.c||[]).length>0&&(p+=function(e){return e.map(function(e){var t=Ve("ss:Data",Be(e.t||""),{xmlns:"http://www.w3.org/TR/REC-html40"})
return Ve("Comment",t,{"ss:Author":e.a})}).join("")}(e.c)),Ve("Cell",p,i)}function Nl(e,t){var r='<Row ss:Index="'+(e+1)+'"'
return t&&(t.hpt&&!t.hpx&&(t.hpx=bs(t.hpt)),t.hpx&&(r+=' ss:AutoFitHeight="0" ss:Height="'+t.hpx+'"'),t.hidden&&(r+=' ss:Hidden="1"')),r+">"}function Ll(e,t,r){var n=[],a=r.SheetNames[e],s=r.Sheets[a],o=s?function(e,t,r,n){if(!e)return""
if(!((n||{}).Workbook||{}).Names)return""
for(var a=n.Workbook.Names,s=[],o=0;o<a.length;++o){var i=a[o]
i.Sheet==r&&(i.Name.match(/^_xlfn\./)||s.push(Fl(i)))}return s.join("")}(s,0,e,r):""
return o.length>0&&n.push("<Names>"+o+"</Names>"),(o=s?function(e,t,r,n){if(!e["!ref"])return""
var a=Xt(e["!ref"]),s=e["!merges"]||[],o=0,i=[]
e["!cols"]&&e["!cols"].forEach(function(e,t){ps(e)
var r=!!e.width,n=li(t,e),a={"ss:Index":t+1}
r&&(a["ss:Width"]=cs(n.width)),e.hidden&&(a["ss:Hidden"]="1"),i.push(Ve("Column",null,a))})
for(var l=Array.isArray(e),c=a.s.r;c<=a.e.r;++c){for(var f=[Nl(c,(e["!rows"]||[])[c])],h=a.s.c;h<=a.e.c;++h){var u=!1
for(o=0;o!=s.length;++o)if(!(s[o].s.c>h||s[o].s.r>c||s[o].e.c<h||s[o].e.r<c)){s[o].s.c==h&&s[o].s.r==c||(u=!0)
break}if(!u){var d={r:c,c:h},p=Ht(d),g=l?(e[c]||[])[h]:e[p]
f.push(Pl(g,p,e,t,0,0,d))}}f.push("</Row>"),f.length>2&&i.push(f.join(""))}return i.join("")}(s,t):"").length>0&&n.push("<Table>"+o+"</Table>"),n.push(function(e,t,r,n){if(!e)return""
var a=[]
if(e["!margins"]&&(a.push("<PageSetup>"),e["!margins"].header&&a.push(Ve("Header",null,{"x:Margin":e["!margins"].header})),e["!margins"].footer&&a.push(Ve("Footer",null,{"x:Margin":e["!margins"].footer})),a.push(Ve("PageMargins",null,{"x:Bottom":e["!margins"].bottom||"0.75","x:Left":e["!margins"].left||"0.7","x:Right":e["!margins"].right||"0.7","x:Top":e["!margins"].top||"0.75"})),a.push("</PageSetup>")),n&&n.Workbook&&n.Workbook.Sheets&&n.Workbook.Sheets[r])if(n.Workbook.Sheets[r].Hidden)a.push(Ve("Visible",1==n.Workbook.Sheets[r].Hidden?"SheetHidden":"SheetVeryHidden",{}))
else{for(var s=0;s<r&&(!n.Workbook.Sheets[s]||n.Workbook.Sheets[s].Hidden);++s);s==r&&a.push("<Selected/>")}return((((n||{}).Workbook||{}).Views||[])[0]||{}).RTL&&a.push("<DisplayRightToLeft/>"),e["!protect"]&&(a.push(Ue("ProtectContents","True")),e["!protect"].objects&&a.push(Ue("ProtectObjects","True")),e["!protect"].scenarios&&a.push(Ue("ProtectScenarios","True")),null==e["!protect"].selectLockedCells||e["!protect"].selectLockedCells?null==e["!protect"].selectUnlockedCells||e["!protect"].selectUnlockedCells||a.push(Ue("EnableSelection","UnlockedCells")):a.push(Ue("EnableSelection","NoSelection")),[["formatCells","AllowFormatCells"],["formatColumns","AllowSizeCols"],["formatRows","AllowSizeRows"],["insertColumns","AllowInsertCols"],["insertRows","AllowInsertRows"],["insertHyperlinks","AllowInsertHyperlinks"],["deleteColumns","AllowDeleteCols"],["deleteRows","AllowDeleteRows"],["sort","AllowSort"],["autoFilter","AllowFilter"],["pivotTables","AllowUsePivotTables"]].forEach(function(t){e["!protect"][t[0]]&&a.push("<"+t[1]+"/>")})),0==a.length?"":Ve("WorksheetOptions",a.join(""),{xmlns:Ge.x})}(s,0,e,r)),n.join("")}function Ml(e,t){t||(t={}),e.SSF||(e.SSF=B.get_table()),e.SSF&&(k(B),B.load_table(e.SSF),t.revssf=W(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF,t.cellXfs=[],fi(t.cellXfs,{},{revssf:{General:0}}))
var r=[]
r.push(Ol(e,t)),r.push(""),r.push(""),r.push("")
for(var n=0;n<e.SheetNames.length;++n)r.push(Ve("Worksheet",Ll(n,t,e),{"ss:Name":Se(e.SheetNames[n])}))
return r[2]=function(e,t){var r=['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>']
return t.cellXfs.forEach(function(e,t){var n=[]
n.push(Ve("NumberFormat",null,{"ss:Format":Se(B._table[e.numFmtId])})),r.push(Ve("Style",n.join(""),{"ss:ID":"s"+(21+t)}))}),Ve("Styles",r.join(""))}(0,t),r[3]=function(e){if(!((e||{}).Workbook||{}).Names)return""
for(var t=e.Workbook.Names,r=[],n=0;n<t.length;++n){var a=t[n]
null==a.Sheet&&(a.Name.match(/^_xlfn\./)||r.push(Fl(a)))}return Ve("Names",r.join(""))}(e),ce+Ve("Workbook",r.join(""),{xmlns:Ge.ss,"xmlns:o":Ge.o,"xmlns:x":Ge.x,"xmlns:ss":Ge.ss,"xmlns:dt":Ge.dt,"xmlns:html":Ge.html})}function Wl(e){var t={},r=e.content
if(r.l=28,t.AnsiUserType=r._R(0,"lpstr-ansi"),t.AnsiClipboardFormat=function(e){return Sr(e,1)}(r),r.length-r.l<=4)return t
var n=r._R(4)
return 0==n||n>40?t:(r.l-=4,t.Reserved1=r._R(0,"lpstr-ansi"),r.length-r.l<=4?t:1907505652!==(n=r._R(4))?t:(t.UnicodeClipboardFormat=function(e){return Sr(e,2)}(r),0==(n=r._R(4))||n>40?t:(r.l-=4,void(t.Reserved2=r._R(0,"lpwstr")))))}function Ul(e,t,r,n){var a=r,s=[],o=t.slice(t.l,t.l+a)
if(n&&n.enc&&n.enc.insitu)switch(e.n){case"BOF":case"FilePass":case"FileLock":case"InterfaceHdr":case"RRDInfo":case"RRDHead":case"UsrExcl":break
default:if(0===o.length)break
n.enc.insitu(o)}s.push(o),t.l+=a
for(var i=$l[pt(t,t.l)],l=0;null!=i&&"Continue"===i.n.slice(0,8);)a=pt(t,t.l+2),l=t.l+4,"ContinueFrt"==i.n?l+=4:"ContinueFrt"==i.n.slice(0,11)&&(l+=12),s.push(t.slice(l,t.l+4+a)),t.l+=4+a,i=$l[pt(t,t.l)]
var c=_(s)
Rt(c,0)
var f=0
c.lens=[]
for(var h=0;h<s.length;++h)c.lens.push(f),f+=s[h].length
return e.f(c,c.length,n)}function Hl(e,t,r){if("z"!==e.t&&e.XF){var n=0
try{n=e.z||e.XF.numFmtId||0,t.cellNF&&(e.z=B._table[n])}catch(a){if(t.WTF)throw a}if(!t||!1!==t.cellText)try{"e"===e.t?e.w=e.w||vr[e.v]:0===n||"General"==n?"n"===e.t?(0|e.v)===e.v?e.w=B._general_int(e.v):e.w=B._general_num(e.v):e.w=B._general(e.v):e.w=B.format(n,e.v,{date1904:!!r})}catch(a){if(t.WTF)throw a}if(t.cellDates&&n&&"n"==e.t&&B.is_date(B._table[n]||String(n))){var s=B.parse_date_code(e.v)
s&&(e.t="d",e.v=new Date(s.y,s.m-1,s.d,s.H,s.M,s.S,s.u))}}}function Vl(e,t,r){return{v:e,ixfe:t,t:r}}function zl(e,t){var r={opts:{}},n={}
null!=u&&null==t.dense&&(t.dense=u)
var a,s,o,l,c,f,h,d,p=t.dense?[]:{},g={},m={},b=null,v=[],C="",E={},S="",A={},_=[],w=!0,R=[],k=[],T={Sheets:[],WBProps:{date1904:!1},Views:[{}]},x={},y=function(e){return e<8?Fr[e]:e<64&&k[e-8]||Fr[e]},I=function(e,t,r){if(!(V>1)&&(r.sheetRows&&e.r>=r.sheetRows&&(w=!1),w)){if(r.cellStyles&&t.XF&&t.XF.data&&function(e,t,r){var n,a=t.XF.data
a&&a.patternType&&r&&r.cellStyles&&(t.s={},t.s.patternType=a.patternType,(n=ns(y(a.icvFore)))&&(t.s.fgColor={rgb:n}),(n=ns(y(a.icvBack)))&&(t.s.bgColor={rgb:n}))}(0,t,r),delete t.ixfe,delete t.XF,a=e,S=Ht(e),m&&m.s&&m.e||(m={s:{r:0,c:0},e:{r:0,c:0}}),e.r<m.s.r&&(m.s.r=e.r),e.c<m.s.c&&(m.s.c=e.c),e.r+1>m.e.r&&(m.e.r=e.r+1),e.c+1>m.e.c&&(m.e.c=e.c+1),r.cellFormula&&t.f)for(var n=0;n<_.length;++n)if(!(_[n][0].s.c>e.c||_[n][0].s.r>e.r||_[n][0].e.c<e.c||_[n][0].e.r<e.r)){t.F=zt(_[n][0]),_[n][0].s.c==e.c&&_[n][0].s.r==e.r||delete t.f,t.f&&(t.f=""+Ho(_[n][1],0,e,W,D))
break}r.dense?(p[e.r]||(p[e.r]=[]),p[e.r][e.c]=t):p[S]=t}},D={enc:!1,sbcch:0,snames:[],sharedf:A,arrayf:_,rrtabid:[],lastuser:"",biff:8,codepage:0,winlocked:0,cellStyles:!!t&&!!t.cellStyles,WTF:!!t&&!!t.wtf}
t.password&&(D.password=t.password)
var O=[],F=[],P=[],L=[],M=!1,W=[]
W.SheetNames=D.snames,W.sharedf=D.sharedf,W.arrayf=D.arrayf,W.names=[],W.XTI=[]
var U,H="",V=0,z=0,X=[],G=[]
D.codepage=1200,i(1200)
for(var j=!1;e.l<e.length-1;){var K=e.l,Y=e._R(2)
if(0===Y&&"EOF"===H)break
var $=e.l===e.length?0:e._R(2),Z=$l[Y]
if(Z&&Z.f){if(t.bookSheets&&"BoundSheet8"===H&&"BoundSheet8"!==Z.n)break
if(H=Z.n,2===Z.r||12==Z.r){var Q=e._R(2)
if($-=2,!D.enc&&Q!==Y&&((255&Q)<<8|Q>>8)!==Y)throw new Error("rt mismatch: "+Q+"!="+Y)
12==Z.r&&(e.l+=10,$-=10)}var J
J="EOF"===Z.n?Z.f(e,$,D):Ul(Z,e,$,D)
var q=Z.n
if(0==V&&"BOF"!=q)continue
switch(q){case"Date1904":r.opts.Date1904=T.WBProps.date1904=J
break
case"WriteProtect":r.opts.WriteProtect=!0
break
case"FilePass":if(D.enc||(e.l=0),D.enc=J,!t.password)throw new Error("File is password-protected")
if(null==J.valid)throw new Error("Encryption scheme unsupported")
if(!J.valid)throw new Error("Password is incorrect")
break
case"WriteAccess":D.lastuser=J
break
case"FileSharing":break
case"CodePage":switch(J){case 21010:J=1200
break
case 32768:J=1e4
break
case 32769:J=1252}i(D.codepage=J),j=!0
break
case"RRTabId":D.rrtabid=J
break
case"WinProtect":D.winlocked=J
break
case"Template":case"BookBool":case"UsesELFs":case"MTRSettings":break
case"RefreshAll":case"CalcCount":case"CalcDelta":case"CalcIter":case"CalcMode":case"CalcPrecision":case"CalcSaveRecalc":r.opts[q]=J
break
case"CalcRefMode":D.CalcRefMode=J
break
case"Uncalced":break
case"ForceFullCalculation":r.opts.FullCalc=J
break
case"WsBool":J.fDialog&&(p["!type"]="dialog")
break
case"XF":R.push(J)
break
case"ExtSST":case"BookExt":case"RichTextStream":case"BkHim":break
case"SupBook":W.push([J]),W[W.length-1].XTI=[]
break
case"ExternName":W[W.length-1].push(J)
break
case"Index":break
case"Lbl":U={Name:J.Name,Ref:Ho(J.rgce,0,null,W,D)},J.itab>0&&(U.Sheet=J.itab-1),W.names.push(U),W[0]||(W[0]=[],W[0].XTI=[]),W[W.length-1].push(J),"_xlnm._FilterDatabase"==J.Name&&J.itab>0&&J.rgce&&J.rgce[0]&&J.rgce[0][0]&&"PtgArea3d"==J.rgce[0][0][0]&&(G[J.itab-1]={ref:zt(J.rgce[0][0][1][2])})
break
case"ExternCount":D.ExternCount=J
break
case"ExternSheet":0==W.length&&(W[0]=[],W[0].XTI=[]),W[W.length-1].XTI=W[W.length-1].XTI.concat(J),W.XTI=W.XTI.concat(J)
break
case"NameCmt":if(D.biff<8)break
null!=U&&(U.Comment=J[1])
break
case"Protect":p["!protect"]=J
break
case"Password":0!==J&&D.WTF&&console.error("Password verifier: "+J)
break
case"Prot4Rev":case"Prot4RevPass":break
case"BoundSheet8":g[J.pos]=J,D.snames.push(J.name)
break
case"EOF":if(--V)break
if(m.e){if(m.e.r>0&&m.e.c>0){if(m.e.r--,m.e.c--,p["!ref"]=zt(m),t.sheetRows&&t.sheetRows<=m.e.r){var ee=m.e.r
m.e.r=t.sheetRows-1,p["!fullref"]=p["!ref"],p["!ref"]=zt(m),m.e.r=ee}m.e.r++,m.e.c++}O.length>0&&(p["!merges"]=O),F.length>0&&(p["!objects"]=F),P.length>0&&(p["!cols"]=P),L.length>0&&(p["!rows"]=L),T.Sheets.push(x)}""===C?E=p:n[C]=p,p=t.dense?[]:{}
break
case"BOF":if(8===D.biff&&(D.biff={9:2,521:3,1033:4}[Y]||{512:2,768:3,1024:4,1280:5,1536:8,2:2,7:2}[J.BIFFVer]||8),8==D.biff&&0==J.BIFFVer&&16==J.dt&&(D.biff=2),V++)break
if(w=!0,p=t.dense?[]:{},D.biff<8&&!j&&(j=!0,i(D.codepage=t.codepage||1252)),D.biff<5){""===C&&(C="Sheet1"),m={s:{r:0,c:0},e:{r:0,c:0}}
var te={pos:e.l-$,name:C}
g[te.pos]=te,D.snames.push(C)}else C=(g[K]||{name:""}).name
32==J.dt&&(p["!type"]="chart"),64==J.dt&&(p["!type"]="macro"),O=[],F=[],D.arrayf=_=[],P=[],L=[],0,M=!1,x={Hidden:(g[K]||{hs:0}).hs,name:C}
break
case"Number":case"BIFF2NUM":case"BIFF2INT":"chart"==p["!type"]&&(t.dense?(p[J.r]||[])[J.c]:p[Ht({c:J.c,r:J.r})])&&++J.c,f={ixfe:J.ixfe,XF:R[J.ixfe]||{},v:J.val,t:"n"},z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:J.c,r:J.r},f,t)
break
case"BoolErr":f={ixfe:J.ixfe,XF:R[J.ixfe],v:J.val,t:J.t},z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:J.c,r:J.r},f,t)
break
case"RK":f={ixfe:J.ixfe,XF:R[J.ixfe],v:J.rknum,t:"n"},z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:J.c,r:J.r},f,t)
break
case"MulRk":for(var re=J.c;re<=J.C;++re){var ne=J.rkrec[re-J.c][0]
f={ixfe:ne,XF:R[ne],v:J.rkrec[re-J.c][1],t:"n"},z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:re,r:J.r},f,t)}break
case"Formula":if("String"==J.val){b=J
break}if((f=Vl(J.val,J.cell.ixfe,J.tt)).XF=R[f.ixfe],t.cellFormula){var ae=J.formula
if(ae&&ae[0]&&ae[0][0]&&"PtgExp"==ae[0][0][0]){var se=ae[0][0][1][0],oe=ae[0][0][1][1],ie=Ht({r:se,c:oe})
A[ie]?f.f=""+Ho(J.formula,0,J.cell,W,D):f.F=((t.dense?(p[se]||[])[oe]:p[ie])||{}).F}else f.f=""+Ho(J.formula,0,J.cell,W,D)}z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I(J.cell,f,t),b=J
break
case"String":if(!b)throw new Error("String record expects Formula")
b.val=J,(f=Vl(J,b.cell.ixfe,"s")).XF=R[f.ixfe],t.cellFormula&&(f.f=""+Ho(b.formula,0,b.cell,W,D)),z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I(b.cell,f,t),b=null
break
case"Array":_.push(J)
var le=Ht(J[0].s)
if(s=t.dense?(p[J[0].s.r]||[])[J[0].s.c]:p[le],t.cellFormula&&s){if(!b)break
if(!le||!s)break
s.f=""+Ho(J[1],0,J[0],W,D),s.F=zt(J[0])}break
case"ShrFmla":if(!w)break
if(!t.cellFormula)break
if(S){if(!b)break
A[Ht(b.cell)]=J[0],((s=t.dense?(p[b.cell.r]||[])[b.cell.c]:p[Ht(b.cell)])||{}).f=""+Ho(J[0],0,a,W,D)}break
case"LabelSst":(f=Vl(v[J.isst].t,J.ixfe,"s")).XF=R[f.ixfe],z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:J.c,r:J.r},f,t)
break
case"Blank":t.sheetStubs&&(f={ixfe:J.ixfe,XF:R[J.ixfe],t:"z"},z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:J.c,r:J.r},f,t))
break
case"MulBlank":if(t.sheetStubs)for(var ce=J.c;ce<=J.C;++ce){var fe=J.ixfe[ce-J.c]
f={ixfe:fe,XF:R[fe],t:"z"},z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:ce,r:J.r},f,t)}break
case"RString":case"Label":case"BIFF2STR":(f=Vl(J.val,J.ixfe,"s")).XF=R[f.ixfe],z>0&&(f.z=X[f.ixfe>>8&31]),Hl(f,t,r.opts.Date1904),I({c:J.c,r:J.r},f,t)
break
case"Dimensions":1===V&&(m=J)
break
case"SST":v=J
break
case"Format":if(4==D.biff){X[z++]=J[1]
for(var he=0;he<z+163&&B._table[he]!=J[1];++he);he>=163&&B.load(J[1],z+163)}else B.load(J[1],J[0])
break
case"BIFF2FORMAT":X[z++]=J
for(var ue=0;ue<z+163&&B._table[ue]!=J;++ue);ue>=163&&B.load(J,z+163)
break
case"MergeCells":O=O.concat(J)
break
case"Obj":F[J.cmo[0]]=D.lastobj=J
break
case"TxO":D.lastobj.TxO=J
break
case"ImData":D.lastobj.ImData=J
break
case"HLink":for(c=J[0].s.r;c<=J[0].e.r;++c)for(l=J[0].s.c;l<=J[0].e.c;++l)(s=t.dense?(p[c]||[])[l]:p[Ht({c:l,r:c})])&&(s.l=J[1])
break
case"HLinkTooltip":for(c=J[0].s.r;c<=J[0].e.r;++c)for(l=J[0].s.c;l<=J[0].e.c;++l)(s=t.dense?(p[c]||[])[l]:p[Ht({c:l,r:c})])&&s.l&&(s.l.Tooltip=J[1])
break
case"Note":if(D.biff<=5&&D.biff>=2)break
s=t.dense?(p[J[0].r]||[])[J[0].c]:p[Ht(J[0])]
var de=F[J[2]]
if(!s)break
s.c||(s.c=[]),o={a:J[1],t:de.TxO.t},s.c.push(o)
break
default:switch(Z.n){case"ClrtClient":break
case"XFExt":Ys(R[J.ixfe],J.ext)
break
case"DefColWidth":J
break
case"DefaultRowHeight":J[1]
break
case"ColInfo":if(!D.cellStyles)break
for(;J.e>=J.s;)P[J.e--]={width:J.w/256},M||(M=!0,ds(J.w/256)),ps(P[J.e+1])
break
case"Row":var pe={}
null!=J.level&&(L[J.r]=pe,pe.level=J.level),J.hidden&&(L[J.r]=pe,pe.hidden=!0),J.hpt&&(L[J.r]=pe,pe.hpt=J.hpt,pe.hpx=bs(J.hpt))
break
case"LeftMargin":case"RightMargin":case"TopMargin":case"BottomMargin":p["!margins"]||ci(p["!margins"]={}),p["!margins"][q.slice(0,-6).toLowerCase()]=J
break
case"Setup":p["!margins"]||ci(p["!margins"]={}),p["!margins"].header=J.header,p["!margins"].footer=J.footer
break
case"Window2":J.RTL&&(T.Views[0].RTL=!0)
break
case"Header":case"Footer":case"HCenter":case"VCenter":case"Pls":case"GCW":case"LHRecord":case"DBCell":case"EntExU2":case"SxView":case"Sxvd":case"SXVI":case"SXVDEx":case"SxIvd":case"SXString":case"Sync":case"Addin":case"SXDI":case"SXLI":case"SXEx":case"QsiSXTag":case"Selection":case"Feat":break
case"FeatHdr":case"FeatHdr11":break
case"Feature11":case"Feature12":case"List12":break
case"Country":h=J
break
case"RecalcId":case"DxGCol":break
case"Fbi":case"Fbi2":case"GelFrame":case"Font":case"XFCRC":case"Style":case"StyleExt":break
case"Palette":k=J
break
case"Theme":d=J
break
case"ScenarioProtect":case"ObjProtect":case"CondFmt12":case"Table":case"TableStyles":case"TableStyle":case"TableStyleElement":case"SXStreamID":case"SXVS":case"DConRef":case"SXAddl":case"DConBin":case"DConName":case"SXPI":case"SxFormat":case"SxSelect":case"SxRule":case"SxFilt":case"SxItm":case"SxDXF":case"ScenMan":case"DCon":case"CellWatch":case"PrintRowCol":case"PrintGrid":case"PrintSize":case"XCT":case"CRN":case"Scl":case"SheetExt":case"SheetExtOptional":case"ObNoMacros":case"ObProj":break
case"CodeName":C?x.CodeName=J||x.name:T.WBProps.CodeName=J||"ThisWorkbook"
break
case"GUIDTypeLib":case"WOpt":case"PhoneticInfo":case"OleObjectSize":break
case"DXF":case"DXFN":case"DXFN12":case"DXFN12List":case"DXFN12NoCB":break
case"Dv":case"DVal":break
case"BRAI":case"Series":case"SeriesText":case"DConn":case"DbOrParamQry":case"DBQueryExt":case"OleDbConn":case"ExtString":case"IFmtRecord":break
case"CondFmt":case"CF":case"CF12":case"CFEx":case"Excel9File":case"Units":break
case"InterfaceHdr":case"Mms":case"InterfaceEnd":case"DSF":case"BuiltInFnGroupCount":break
case"Window1":case"HideObj":case"GridSet":case"Guts":case"UserBView":case"UserSViewBegin":case"UserSViewEnd":case"Pane":break
default:switch(Z.n){case"Dat":case"Begin":case"End":case"StartBlock":case"EndBlock":case"Frame":case"Area":case"Axis":case"AxisLine":case"Tick":break
case"AxesUsed":case"CrtLayout12":case"CrtLayout12A":case"CrtLink":case"CrtLine":case"CrtMlFrt":case"CrtMlFrtContinue":break
case"LineFormat":case"AreaFormat":case"Chart":case"Chart3d":case"Chart3DBarShape":case"ChartFormat":case"ChartFrtInfo":break
case"PlotArea":case"PlotGrowth":break
case"SeriesList":case"SerParent":case"SerAuxTrend":break
case"DataFormat":case"SerToCrt":case"FontX":break
case"CatSerRange":case"AxcExt":case"SerFmt":case"ShtProps":break
case"DefaultText":case"Text":case"CatLab":case"DataLabExtContents":break
case"Legend":case"LegendException":break
case"Pie":case"Scatter":break
case"PieFormat":case"MarkerFormat":break
case"StartObject":case"EndObject":break
case"AlRuns":case"ObjectLink":case"SIIndex":break
case"AttachedLabel":case"YMult":break
case"Line":case"Bar":case"Surf":case"AxisParent":case"Pos":case"ValueRange":case"SXViewEx9":case"SXViewLink":case"PivotChartBits":case"SBaseRef":case"TextPropsStream":case"LnExt":case"MkrExt":case"CrtCoopt":break
case"Qsi":case"Qsif":case"Qsir":case"QsiSXTag":case"TxtQry":case"FilterMode":break
case"AutoFilter":case"AutoFilterInfo":case"AutoFilter12":case"DropDownObjIds":case"Sort":case"SortData":case"ShapePropsStream":break
case"MsoDrawing":case"MsoDrawingGroup":case"MsoDrawingSelection":break
case"WebPub":case"AutoWebPub":break
case"HeaderFooter":case"HFPicture":case"PLV":case"HorizontalPageBreaks":case"VerticalPageBreaks":break
case"Backup":case"CompressPictures":case"Compat12":break
case"Continue":case"ContinueFrt12":break
case"FrtFontList":case"FrtWrapper":break
default:switch(Z.n){case"TabIdConf":case"Radar":case"RadarArea":case"DropBar":case"Intl":case"CoordList":case"SerAuxErrBar":break
case"BIFF2FONTCLR":case"BIFF2FMTCNT":case"BIFF2FONTXTRA":break
case"BIFF2XF":case"BIFF3XF":case"BIFF4XF":break
case"BIFF4FMTCNT":case"BIFF2ROW":case"BIFF2WINDOW2":break
case"SCENARIO":case"DConBin":case"PicF":case"DataLabExt":case"Lel":case"BopPop":case"BopPopCustom":case"RealTimeData":case"Name":break
case"LHNGraph":case"FnGroupName":case"AddMenu":case"LPr":break
case"ListObj":case"ListField":case"RRSort":case"BigName":break
case"ToolbarHdr":case"ToolbarEnd":case"DDEObjName":case"FRTArchId$":break
default:if(t.WTF)throw"Unrecognized Record "+Z.n}}}}}else e.l+=$}return r.SheetNames=N(g).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return g[e].name}),t.bookSheets||(r.Sheets=n),r.Sheets&&G.forEach(function(e,t){r.Sheets[r.SheetNames[t]]["!autofilter"]=e}),r.Preamble=E,r.Strings=v,r.SSF=B.get_table(),D.enc&&(r.Encryption=D.enc),d&&(r.Themes=d),r.Metadata={},void 0!==h&&(r.Metadata.Country=h),W.names.length>0&&(T.Names=W.names),r.Workbook=T,r}var Xl={SI:"e0859ff2f94f6810ab9108002b27b3d9",DSI:"02d5cdd59c2e1b10939708002b2cf9ae",UDI:"05d5cdd59c2e1b10939708002b2cf9ae"}
function Gl(e,t){var r,n,a,s
if(t||(t={}),Bc(t),l(),t.codepage&&o(t.codepage),e.FullPaths){if(O.find(e,"/encryption"))throw new Error("File is password-protected")
r=O.find(e,"!CompObj"),n=O.find(e,"/Workbook")||O.find(e,"/Book")}else{switch(t.type){case"base64":e=C(d.decode(e))
break
case"binary":e=C(e)
break
case"buffer":break
case"array":Array.isArray(e)||(e=Array.prototype.slice.call(e))}Rt(e,0),n={content:e}}if(r&&Wl(r),t.bookProps&&!t.bookSheets)a={}
else{var i=p?"buffer":"array"
if(n&&n.content)a=zl(n.content,t)
else if((s=O.find(e,"PerfectOffice_MAIN"))&&s.content)a=Ia.to_workbook(s.content,(t.type=i,t))
else{if(!(s=O.find(e,"NativeContent_MAIN"))||!s.content)throw new Error("Cannot find Workbook stream")
a=Ia.to_workbook(s.content,(t.type=i,t))}t.bookVBA&&e.FullPaths&&O.find(e,"/_VBA_PROJECT_CUR/VBA/dir")&&(a.vbaraw=function(e){var t=O.utils.cfb_new({root:"R"})
return e.FullPaths.forEach(function(r,n){if("/"!==r.slice(-1)&&r.match(/_VBA_PROJECT_CUR/)){var a=r.replace(/^[^\/]*/,"R").replace(/\/_VBA_PROJECT_CUR\u0000*/,"")
O.utils.cfb_add(t,a,e.FileIndex[n].content)}}),O.write(t)}(e))}var c={}
return e.FullPaths&&function(e,t,r){var n=O.find(e,"!DocumentSummaryInformation")
if(n&&n.size>0)try{var a=kn(n,kr,Xl.DSI)
for(var s in a)t[s]=a[s]}catch(o){if(r.WTF)throw o}var i=O.find(e,"!SummaryInformation")
if(i&&i.size>0)try{var l=kn(i,Tr,Xl.SI)
for(var c in l)null==t[c]&&(t[c]=l[c])}catch(o){if(r.WTF)throw o}t.HeadingPairs&&t.TitlesOfParts&&(rn(t.HeadingPairs,t.TitlesOfParts,t,r),delete t.HeadingPairs,delete t.TitlesOfParts)}(e,c,t),a.Props=a.Custprops=c,t.bookFiles&&(a.cfb=e),a}function jl(e,t){var r=t||{},n=O.utils.cfb_new({root:"R"}),a="/Workbook"
switch(r.bookType||"xls"){case"xls":r.bookType="biff8"
case"xla":r.bookType||(r.bookType="xla")
case"biff8":a="/Workbook",r.biff=8
break
case"biff5":a="/Book",r.biff=5
break
default:throw new Error("invalid type "+r.bookType+" for XLS CFB")}return O.utils.cfb_add(n,a,sc(e,r)),8==r.biff&&(e.Props||e.Custprops)&&function(e,t){var r,n=[],a=[],s=[],o=0
if(e.Props)for(r=N(e.Props),o=0;o<r.length;++o)(yr.hasOwnProperty(r[o])?n:Ir.hasOwnProperty(r[o])?a:s).push([r[o],e.Props[r[o]]])
if(e.Custprops)for(r=N(e.Custprops),o=0;o<r.length;++o)(e.Props||{}).hasOwnProperty(r[o])||(yr.hasOwnProperty(r[o])?n:Ir.hasOwnProperty(r[o])?a:s).push([r[o],e.Custprops[r[o]]])
var i=[]
for(o=0;o<s.length;++o)wn.indexOf(s[o][0])>-1||null!=s[o][1]&&i.push(s[o])
a.length&&O.utils.cfb_add(t,"/SummaryInformation",Tn(a,Xl.SI,Ir,Tr)),(n.length||i.length)&&O.utils.cfb_add(t,"/DocumentSummaryInformation",Tn(n,Xl.DSI,yr,kr,i.length?i:null,Xl.UDI))}(e,n),8==r.biff&&e.vbaraw&&function(e,t){t.FullPaths.forEach(function(r,n){if(0!=n){var a=r.replace(/[^\/]*[\/]/,"/_VBA_PROJECT_CUR/")
"/"!==a.slice(-1)&&O.utils.cfb_add(e,a,t.FileIndex[n].content)}})}(n,O.read(e.vbaraw,{type:"string"==typeof e.vbaraw?"binary":"buffer"})),n}var Kl={0:{n:"BrtRowHdr",f:function(e,t){var r={},n=e.l+t
r.r=e._R(4),e.l+=4
var a=e._R(2)
e.l+=1
var s=e._R(1)
return e.l=n,7&s&&(r.level=7&s),16&s&&(r.hidden=!0),32&s&&(r.hpt=a/20),r}},1:{n:"BrtCellBlank",f:function(e){return[nr(e)]}},2:{n:"BrtCellRk",f:function(e){return[nr(e),ur(e),"n"]}},3:{n:"BrtCellError",f:function(e){return[nr(e),e._R(1),"e"]}},4:{n:"BrtCellBool",f:function(e){return[nr(e),e._R(1),"b"]}},5:{n:"BrtCellReal",f:function(e){return[nr(e),mr(e),"n"]}},6:{n:"BrtCellSt",f:function(e){return[nr(e),Qt(e),"str"]}},7:{n:"BrtCellIsst",f:function(e){return[nr(e),e._R(4),"s"]}},8:{n:"BrtFmlaString",f:function(e,t,r){var n=e.l+t,a=nr(e)
a.r=r["!row"]
var s=[a,Qt(e),"str"]
if(r.cellFormula){e.l+=2
var o=Ko(e,n-e.l,r)
s[3]=Ho(o,0,a,r.supbooks,r)}else e.l=n
return s}},9:{n:"BrtFmlaNum",f:function(e,t,r){var n=e.l+t,a=nr(e)
a.r=r["!row"]
var s=[a,mr(e),"n"]
if(r.cellFormula){e.l+=2
var o=Ko(e,n-e.l,r)
s[3]=Ho(o,0,a,r.supbooks,r)}else e.l=n
return s}},10:{n:"BrtFmlaBool",f:function(e,t,r){var n=e.l+t,a=nr(e)
a.r=r["!row"]
var s=[a,e._R(1),"b"]
if(r.cellFormula){e.l+=2
var o=Ko(e,n-e.l,r)
s[3]=Ho(o,0,a,r.supbooks,r)}else e.l=n
return s}},11:{n:"BrtFmlaError",f:function(e,t,r){var n=e.l+t,a=nr(e)
a.r=r["!row"]
var s=[a,e._R(1),"e"]
if(r.cellFormula){e.l+=2
var o=Ko(e,n-e.l,r)
s[3]=Ho(o,0,a,r.supbooks,r)}else e.l=n
return s}},16:{n:"BrtFRTArchID$",f:function(e,t){var r={}
return e._R(4),r.ArchID=e._R(4),e.l+=t-8,r}},19:{n:"BrtSSTItem",f:er},20:{n:"BrtPCDIMissing"},21:{n:"BrtPCDINumber"},22:{n:"BrtPCDIBoolean"},23:{n:"BrtPCDIError"},24:{n:"BrtPCDIString"},25:{n:"BrtPCDIDatetime"},26:{n:"BrtPCDIIndex"},27:{n:"BrtPCDIAMissing"},28:{n:"BrtPCDIANumber"},29:{n:"BrtPCDIABoolean"},30:{n:"BrtPCDIAError"},31:{n:"BrtPCDIAString"},32:{n:"BrtPCDIADatetime"},33:{n:"BrtPCRRecord"},34:{n:"BrtPCRRecordDt"},35:{n:"BrtFRTBegin"},36:{n:"BrtFRTEnd"},37:{n:"BrtACBegin"},38:{n:"BrtACEnd"},39:{n:"BrtName",f:function(e,t,r){var n=e.l+t
e.l+=4,e.l+=1
var a=e._R(4),s=cr(e),o=Yo(e,0,r),i=ir(e)
e.l=n
var l={Name:s,Ptg:o}
return a<268435455&&(l.Sheet=a),i&&(l.Comment=i),l}},40:{n:"BrtIndexRowBlock"},42:{n:"BrtIndexBlock"},43:{n:"BrtFont",f:function(e,t,r){var n={}
n.sz=e._R(2)/20
var a=function(e){var t=e._R(1)
return e.l++,{fItalic:2&t,fStrikeout:8&t,fOutline:16&t,fShadow:32&t,fCondense:64&t,fExtend:128&t}}(e)
switch(a.fCondense&&(n.condense=1),a.fExtend&&(n.extend=1),a.fShadow&&(n.shadow=1),a.fOutline&&(n.outline=1),a.fStrikeout&&(n.strike=1),a.fItalic&&(n.italic=1),700===e._R(2)&&(n.bold=1),e._R(2)){case 1:n.vertAlign="superscript"
break
case 2:n.vertAlign="subscript"}var s=e._R(1)
0!=s&&(n.underline=s)
var o=e._R(1)
o>0&&(n.family=o)
var i=e._R(1)
switch(i>0&&(n.charset=i),e.l++,n.color=function(e){var t={},r=e._R(1)>>>1,n=e._R(1),a=e._R(2,"i"),s=e._R(1),o=e._R(1),i=e._R(1)
switch(e.l++,r){case 0:t.auto=1
break
case 1:t.index=n
var l=Fr[n]
l&&(t.rgb=ns(l))
break
case 2:t.rgb=ns([s,o,i])
break
case 3:t.theme=n}return 0!=a&&(t.tint=a>0?a/32767:a/32768),t}(e),e._R(1)){case 1:n.scheme="major"
break
case 2:n.scheme="minor"}return n.name=Qt(e),n}},44:{n:"BrtFmt",f:function(e,t){return[e._R(2),Qt(e)]}},45:{n:"BrtFill",f:Ts},46:{n:"BrtBorder",f:Ds},47:{n:"BrtXF",f:function(e,t){var r=e.l+t,n=e._R(2),a=e._R(2)
return e.l=r,{ixfe:n,numFmtId:a}}},48:{n:"BrtStyle"},49:{n:"BrtCellMeta"},50:{n:"BrtValueMeta"},51:{n:"BrtMdb"},52:{n:"BrtBeginFmd"},53:{n:"BrtEndFmd"},54:{n:"BrtBeginMdx"},55:{n:"BrtEndMdx"},56:{n:"BrtBeginMdxTuple"},57:{n:"BrtEndMdxTuple"},58:{n:"BrtMdxMbrIstr"},59:{n:"BrtStr"},60:{n:"BrtColInfo",f:Aa},62:{n:"BrtCellRString"},63:{n:"BrtCalcChainItem$",f:function(e){var t={}
t.i=e._R(4)
var r={}
r.r=e._R(4),r.c=e._R(4),t.r=Ht(r)
var n=e._R(1)
return 2&n&&(t.l="1"),8&n&&(t.a="1"),t}},64:{n:"BrtDVal"},65:{n:"BrtSxvcellNum"},66:{n:"BrtSxvcellStr"},67:{n:"BrtSxvcellBool"},68:{n:"BrtSxvcellErr"},69:{n:"BrtSxvcellDate"},70:{n:"BrtSxvcellNil"},128:{n:"BrtFileVersion"},129:{n:"BrtBeginSheet"},130:{n:"BrtEndSheet"},131:{n:"BrtBeginBook",f:Bt,p:0},132:{n:"BrtEndBook"},133:{n:"BrtBeginWsViews"},134:{n:"BrtEndWsViews"},135:{n:"BrtBeginBookViews"},136:{n:"BrtEndBookViews"},137:{n:"BrtBeginWsView",f:function(e){var t=e._R(2)
return e.l+=28,{RTL:32&t}}},138:{n:"BrtEndWsView"},139:{n:"BrtBeginCsViews"},140:{n:"BrtEndCsViews"},141:{n:"BrtBeginCsView"},142:{n:"BrtEndCsView"},143:{n:"BrtBeginBundleShs"},144:{n:"BrtEndBundleShs"},145:{n:"BrtBeginSheetData"},146:{n:"BrtEndSheetData"},147:{n:"BrtWsProp",f:function(e,t){var r={}
return e.l+=19,r.name=sr(e,t-19),r}},148:{n:"BrtWsDim",f:yi,p:16},151:{n:"BrtPane"},152:{n:"BrtSel"},153:{n:"BrtWbProp",f:function(e,t){var r={},n=e._R(4)
r.defaultThemeVersion=e._R(4)
var a=t>8?Qt(e):""
return a.length>0&&(r.CodeName=a),r.autoCompressPictures=!!(65536&n),r.backupFile=!!(64&n),r.checkCompatibility=!!(4096&n),r.date1904=!!(1&n),r.filterPrivacy=!!(8&n),r.hidePivotFieldList=!!(1024&n),r.promptedSolutions=!!(16&n),r.publishItems=!!(2048&n),r.refreshAllConnections=!!(262144&n),r.saveExternalLinkValues=!!(128&n),r.showBorderUnselectedTables=!!(4&n),r.showInkAnnotation=!!(32&n),r.showObjects=["all","placeholders","none"][n>>13&3],r.showPivotChartFilter=!!(32768&n),r.updateLinks=["userSet","never","always"][n>>8&3],r}},154:{n:"BrtWbFactoid"},155:{n:"BrtFileRecover"},156:{n:"BrtBundleSh",f:function(e,t){var r={}
return r.Hidden=e._R(4),r.iTabID=e._R(4),r.strRelID=fr(e,t-8),r.name=Qt(e),r}},157:{n:"BrtCalcProp"},158:{n:"BrtBookView"},159:{n:"BrtBeginSst",f:function(e){return[e._R(4),e._R(4)]}},160:{n:"BrtEndSst"},161:{n:"BrtBeginAFilter",f:pr},162:{n:"BrtEndAFilter"},163:{n:"BrtBeginFilterColumn"},164:{n:"BrtEndFilterColumn"},165:{n:"BrtBeginFilters"},166:{n:"BrtEndFilters"},167:{n:"BrtFilter"},168:{n:"BrtColorFilter"},169:{n:"BrtIconFilter"},170:{n:"BrtTop10Filter"},171:{n:"BrtDynamicFilter"},172:{n:"BrtBeginCustomFilters"},173:{n:"BrtEndCustomFilters"},174:{n:"BrtCustomFilter"},175:{n:"BrtAFilterDateGroupItem"},176:{n:"BrtMergeCell",f:Oi},177:{n:"BrtBeginMergeCells"},178:{n:"BrtEndMergeCells"},179:{n:"BrtBeginPivotCacheDef"},180:{n:"BrtEndPivotCacheDef"},181:{n:"BrtBeginPCDFields"},182:{n:"BrtEndPCDFields"},183:{n:"BrtBeginPCDField"},184:{n:"BrtEndPCDField"},185:{n:"BrtBeginPCDSource"},186:{n:"BrtEndPCDSource"},187:{n:"BrtBeginPCDSRange"},188:{n:"BrtEndPCDSRange"},189:{n:"BrtBeginPCDFAtbl"},190:{n:"BrtEndPCDFAtbl"},191:{n:"BrtBeginPCDIRun"},192:{n:"BrtEndPCDIRun"},193:{n:"BrtBeginPivotCacheRecords"},194:{n:"BrtEndPivotCacheRecords"},195:{n:"BrtBeginPCDHierarchies"},196:{n:"BrtEndPCDHierarchies"},197:{n:"BrtBeginPCDHierarchy"},198:{n:"BrtEndPCDHierarchy"},199:{n:"BrtBeginPCDHFieldsUsage"},200:{n:"BrtEndPCDHFieldsUsage"},201:{n:"BrtBeginExtConnection"},202:{n:"BrtEndExtConnection"},203:{n:"BrtBeginECDbProps"},204:{n:"BrtEndECDbProps"},205:{n:"BrtBeginECOlapProps"},206:{n:"BrtEndECOlapProps"},207:{n:"BrtBeginPCDSConsol"},208:{n:"BrtEndPCDSConsol"},209:{n:"BrtBeginPCDSCPages"},210:{n:"BrtEndPCDSCPages"},211:{n:"BrtBeginPCDSCPage"},212:{n:"BrtEndPCDSCPage"},213:{n:"BrtBeginPCDSCPItem"},214:{n:"BrtEndPCDSCPItem"},215:{n:"BrtBeginPCDSCSets"},216:{n:"BrtEndPCDSCSets"},217:{n:"BrtBeginPCDSCSet"},218:{n:"BrtEndPCDSCSet"},219:{n:"BrtBeginPCDFGroup"},220:{n:"BrtEndPCDFGroup"},221:{n:"BrtBeginPCDFGItems"},222:{n:"BrtEndPCDFGItems"},223:{n:"BrtBeginPCDFGRange"},224:{n:"BrtEndPCDFGRange"},225:{n:"BrtBeginPCDFGDiscrete"},226:{n:"BrtEndPCDFGDiscrete"},227:{n:"BrtBeginPCDSDTupleCache"},228:{n:"BrtEndPCDSDTupleCache"},229:{n:"BrtBeginPCDSDTCEntries"},230:{n:"BrtEndPCDSDTCEntries"},231:{n:"BrtBeginPCDSDTCEMembers"},232:{n:"BrtEndPCDSDTCEMembers"},233:{n:"BrtBeginPCDSDTCEMember"},234:{n:"BrtEndPCDSDTCEMember"},235:{n:"BrtBeginPCDSDTCQueries"},236:{n:"BrtEndPCDSDTCQueries"},237:{n:"BrtBeginPCDSDTCQuery"},238:{n:"BrtEndPCDSDTCQuery"},239:{n:"BrtBeginPCDSDTCSets"},240:{n:"BrtEndPCDSDTCSets"},241:{n:"BrtBeginPCDSDTCSet"},242:{n:"BrtEndPCDSDTCSet"},243:{n:"BrtBeginPCDCalcItems"},244:{n:"BrtEndPCDCalcItems"},245:{n:"BrtBeginPCDCalcItem"},246:{n:"BrtEndPCDCalcItem"},247:{n:"BrtBeginPRule"},248:{n:"BrtEndPRule"},249:{n:"BrtBeginPRFilters"},250:{n:"BrtEndPRFilters"},251:{n:"BrtBeginPRFilter"},252:{n:"BrtEndPRFilter"},253:{n:"BrtBeginPNames"},254:{n:"BrtEndPNames"},255:{n:"BrtBeginPName"},256:{n:"BrtEndPName"},257:{n:"BrtBeginPNPairs"},258:{n:"BrtEndPNPairs"},259:{n:"BrtBeginPNPair"},260:{n:"BrtEndPNPair"},261:{n:"BrtBeginECWebProps"},262:{n:"BrtEndECWebProps"},263:{n:"BrtBeginEcWpTables"},264:{n:"BrtEndECWPTables"},265:{n:"BrtBeginECParams"},266:{n:"BrtEndECParams"},267:{n:"BrtBeginECParam"},268:{n:"BrtEndECParam"},269:{n:"BrtBeginPCDKPIs"},270:{n:"BrtEndPCDKPIs"},271:{n:"BrtBeginPCDKPI"},272:{n:"BrtEndPCDKPI"},273:{n:"BrtBeginDims"},274:{n:"BrtEndDims"},275:{n:"BrtBeginDim"},276:{n:"BrtEndDim"},277:{n:"BrtIndexPartEnd"},278:{n:"BrtBeginStyleSheet"},279:{n:"BrtEndStyleSheet"},280:{n:"BrtBeginSXView"},281:{n:"BrtEndSXVI"},282:{n:"BrtBeginSXVI"},283:{n:"BrtBeginSXVIs"},284:{n:"BrtEndSXVIs"},285:{n:"BrtBeginSXVD"},286:{n:"BrtEndSXVD"},287:{n:"BrtBeginSXVDs"},288:{n:"BrtEndSXVDs"},289:{n:"BrtBeginSXPI"},290:{n:"BrtEndSXPI"},291:{n:"BrtBeginSXPIs"},292:{n:"BrtEndSXPIs"},293:{n:"BrtBeginSXDI"},294:{n:"BrtEndSXDI"},295:{n:"BrtBeginSXDIs"},296:{n:"BrtEndSXDIs"},297:{n:"BrtBeginSXLI"},298:{n:"BrtEndSXLI"},299:{n:"BrtBeginSXLIRws"},300:{n:"BrtEndSXLIRws"},301:{n:"BrtBeginSXLICols"},302:{n:"BrtEndSXLICols"},303:{n:"BrtBeginSXFormat"},304:{n:"BrtEndSXFormat"},305:{n:"BrtBeginSXFormats"},306:{n:"BrtEndSxFormats"},307:{n:"BrtBeginSxSelect"},308:{n:"BrtEndSxSelect"},309:{n:"BrtBeginISXVDRws"},310:{n:"BrtEndISXVDRws"},311:{n:"BrtBeginISXVDCols"},312:{n:"BrtEndISXVDCols"},313:{n:"BrtEndSXLocation"},314:{n:"BrtBeginSXLocation"},315:{n:"BrtEndSXView"},316:{n:"BrtBeginSXTHs"},317:{n:"BrtEndSXTHs"},318:{n:"BrtBeginSXTH"},319:{n:"BrtEndSXTH"},320:{n:"BrtBeginISXTHRws"},321:{n:"BrtEndISXTHRws"},322:{n:"BrtBeginISXTHCols"},323:{n:"BrtEndISXTHCols"},324:{n:"BrtBeginSXTDMPS"},325:{n:"BrtEndSXTDMPs"},326:{n:"BrtBeginSXTDMP"},327:{n:"BrtEndSXTDMP"},328:{n:"BrtBeginSXTHItems"},329:{n:"BrtEndSXTHItems"},330:{n:"BrtBeginSXTHItem"},331:{n:"BrtEndSXTHItem"},332:{n:"BrtBeginMetadata"},333:{n:"BrtEndMetadata"},334:{n:"BrtBeginEsmdtinfo"},335:{n:"BrtMdtinfo"},336:{n:"BrtEndEsmdtinfo"},337:{n:"BrtBeginEsmdb"},338:{n:"BrtEndEsmdb"},339:{n:"BrtBeginEsfmd"},340:{n:"BrtEndEsfmd"},341:{n:"BrtBeginSingleCells"},342:{n:"BrtEndSingleCells"},343:{n:"BrtBeginList"},344:{n:"BrtEndList"},345:{n:"BrtBeginListCols"},346:{n:"BrtEndListCols"},347:{n:"BrtBeginListCol"},348:{n:"BrtEndListCol"},349:{n:"BrtBeginListXmlCPr"},350:{n:"BrtEndListXmlCPr"},351:{n:"BrtListCCFmla"},352:{n:"BrtListTrFmla"},353:{n:"BrtBeginExternals"},354:{n:"BrtEndExternals"},355:{n:"BrtSupBookSrc",f:fr},357:{n:"BrtSupSelf"},358:{n:"BrtSupSame"},359:{n:"BrtSupTabs"},360:{n:"BrtBeginSupBook"},361:{n:"BrtPlaceholderName"},362:{n:"BrtExternSheet",f:ba},363:{n:"BrtExternTableStart"},364:{n:"BrtExternTableEnd"},366:{n:"BrtExternRowHdr"},367:{n:"BrtExternCellBlank"},368:{n:"BrtExternCellReal"},369:{n:"BrtExternCellBool"},370:{n:"BrtExternCellError"},371:{n:"BrtExternCellString"},372:{n:"BrtBeginEsmdx"},373:{n:"BrtEndEsmdx"},374:{n:"BrtBeginMdxSet"},375:{n:"BrtEndMdxSet"},376:{n:"BrtBeginMdxMbrProp"},377:{n:"BrtEndMdxMbrProp"},378:{n:"BrtBeginMdxKPI"},379:{n:"BrtEndMdxKPI"},380:{n:"BrtBeginEsstr"},381:{n:"BrtEndEsstr"},382:{n:"BrtBeginPRFItem"},383:{n:"BrtEndPRFItem"},384:{n:"BrtBeginPivotCacheIDs"},385:{n:"BrtEndPivotCacheIDs"},386:{n:"BrtBeginPivotCacheID"},387:{n:"BrtEndPivotCacheID"},388:{n:"BrtBeginISXVIs"},389:{n:"BrtEndISXVIs"},390:{n:"BrtBeginColInfos"},391:{n:"BrtEndColInfos"},392:{n:"BrtBeginRwBrk"},393:{n:"BrtEndRwBrk"},394:{n:"BrtBeginColBrk"},395:{n:"BrtEndColBrk"},396:{n:"BrtBrk"},397:{n:"BrtUserBookView"},398:{n:"BrtInfo"},399:{n:"BrtCUsr"},400:{n:"BrtUsr"},401:{n:"BrtBeginUsers"},403:{n:"BrtEOF"},404:{n:"BrtUCR"},405:{n:"BrtRRInsDel"},406:{n:"BrtRREndInsDel"},407:{n:"BrtRRMove"},408:{n:"BrtRREndMove"},409:{n:"BrtRRChgCell"},410:{n:"BrtRREndChgCell"},411:{n:"BrtRRHeader"},412:{n:"BrtRRUserView"},413:{n:"BrtRRRenSheet"},414:{n:"BrtRRInsertSh"},415:{n:"BrtRRDefName"},416:{n:"BrtRRNote"},417:{n:"BrtRRConflict"},418:{n:"BrtRRTQSIF"},419:{n:"BrtRRFormat"},420:{n:"BrtRREndFormat"},421:{n:"BrtRRAutoFmt"},422:{n:"BrtBeginUserShViews"},423:{n:"BrtBeginUserShView"},424:{n:"BrtEndUserShView"},425:{n:"BrtEndUserShViews"},426:{n:"BrtArrFmla",f:function(e,t,r){var n=e.l+t,a=dr(e),s=e._R(1),o=[a]
if(o[2]=s,r.cellFormula){var i=jo(e,n-e.l,r)
o[1]=i}else e.l=n
return o}},427:{n:"BrtShrFmla",f:function(e,t,r){var n=e.l+t,a=[pr(e,16)]
if(r.cellFormula){var s=$o(e,n-e.l,r)
a[1]=s,e.l=n}else e.l=n
return a}},428:{n:"BrtTable"},429:{n:"BrtBeginExtConnections"},430:{n:"BrtEndExtConnections"},431:{n:"BrtBeginPCDCalcMems"},432:{n:"BrtEndPCDCalcMems"},433:{n:"BrtBeginPCDCalcMem"},434:{n:"BrtEndPCDCalcMem"},435:{n:"BrtBeginPCDHGLevels"},436:{n:"BrtEndPCDHGLevels"},437:{n:"BrtBeginPCDHGLevel"},438:{n:"BrtEndPCDHGLevel"},439:{n:"BrtBeginPCDHGLGroups"},440:{n:"BrtEndPCDHGLGroups"},441:{n:"BrtBeginPCDHGLGroup"},442:{n:"BrtEndPCDHGLGroup"},443:{n:"BrtBeginPCDHGLGMembers"},444:{n:"BrtEndPCDHGLGMembers"},445:{n:"BrtBeginPCDHGLGMember"},446:{n:"BrtEndPCDHGLGMember"},447:{n:"BrtBeginQSI"},448:{n:"BrtEndQSI"},449:{n:"BrtBeginQSIR"},450:{n:"BrtEndQSIR"},451:{n:"BrtBeginDeletedNames"},452:{n:"BrtEndDeletedNames"},453:{n:"BrtBeginDeletedName"},454:{n:"BrtEndDeletedName"},455:{n:"BrtBeginQSIFs"},456:{n:"BrtEndQSIFs"},457:{n:"BrtBeginQSIF"},458:{n:"BrtEndQSIF"},459:{n:"BrtBeginAutoSortScope"},460:{n:"BrtEndAutoSortScope"},461:{n:"BrtBeginConditionalFormatting"},462:{n:"BrtEndConditionalFormatting"},463:{n:"BrtBeginCFRule"},464:{n:"BrtEndCFRule"},465:{n:"BrtBeginIconSet"},466:{n:"BrtEndIconSet"},467:{n:"BrtBeginDatabar"},468:{n:"BrtEndDatabar"},469:{n:"BrtBeginColorScale"},470:{n:"BrtEndColorScale"},471:{n:"BrtCFVO"},472:{n:"BrtExternValueMeta"},473:{n:"BrtBeginColorPalette"},474:{n:"BrtEndColorPalette"},475:{n:"BrtIndexedColor"},476:{n:"BrtMargins",f:function(e){var t={}
return Pi.forEach(function(r){t[r]=mr(e)}),t}},477:{n:"BrtPrintOptions"},478:{n:"BrtPageSetup"},479:{n:"BrtBeginHeaderFooter"},480:{n:"BrtEndHeaderFooter"},481:{n:"BrtBeginSXCrtFormat"},482:{n:"BrtEndSXCrtFormat"},483:{n:"BrtBeginSXCrtFormats"},484:{n:"BrtEndSXCrtFormats"},485:{n:"BrtWsFmtInfo",f:function(){}},486:{n:"BrtBeginMgs"},487:{n:"BrtEndMGs"},488:{n:"BrtBeginMGMaps"},489:{n:"BrtEndMGMaps"},490:{n:"BrtBeginMG"},491:{n:"BrtEndMG"},492:{n:"BrtBeginMap"},493:{n:"BrtEndMap"},494:{n:"BrtHLink",f:function(e,t){var r=e.l+t,n=pr(e,16),a=ir(e),s=Qt(e),o=Qt(e),i=Qt(e)
e.l=r
var l={rfx:n,relId:a,loc:s,display:i}
return o&&(l.Tooltip=o),l}},495:{n:"BrtBeginDCon"},496:{n:"BrtEndDCon"},497:{n:"BrtBeginDRefs"},498:{n:"BrtEndDRefs"},499:{n:"BrtDRef"},500:{n:"BrtBeginScenMan"},501:{n:"BrtEndScenMan"},502:{n:"BrtBeginSct"},503:{n:"BrtEndSct"},504:{n:"BrtSlc"},505:{n:"BrtBeginDXFs"},506:{n:"BrtEndDXFs"},507:{n:"BrtDXF"},508:{n:"BrtBeginTableStyles"},509:{n:"BrtEndTableStyles"},510:{n:"BrtBeginTableStyle"},511:{n:"BrtEndTableStyle"},512:{n:"BrtTableStyleElement"},513:{n:"BrtTableStyleClient"},514:{n:"BrtBeginVolDeps"},515:{n:"BrtEndVolDeps"},516:{n:"BrtBeginVolType"},517:{n:"BrtEndVolType"},518:{n:"BrtBeginVolMain"},519:{n:"BrtEndVolMain"},520:{n:"BrtBeginVolTopic"},521:{n:"BrtEndVolTopic"},522:{n:"BrtVolSubtopic"},523:{n:"BrtVolRef"},524:{n:"BrtVolNum"},525:{n:"BrtVolErr"},526:{n:"BrtVolStr"},527:{n:"BrtVolBool"},528:{n:"BrtBeginCalcChain$"},529:{n:"BrtEndCalcChain$"},530:{n:"BrtBeginSortState"},531:{n:"BrtEndSortState"},532:{n:"BrtBeginSortCond"},533:{n:"BrtEndSortCond"},534:{n:"BrtBookProtection"},535:{n:"BrtSheetProtection"},536:{n:"BrtRangeProtection"},537:{n:"BrtPhoneticInfo"},538:{n:"BrtBeginECTxtWiz"},539:{n:"BrtEndECTxtWiz"},540:{n:"BrtBeginECTWFldInfoLst"},541:{n:"BrtEndECTWFldInfoLst"},542:{n:"BrtBeginECTwFldInfo"},548:{n:"BrtFileSharing"},549:{n:"BrtOleSize"},550:{n:"BrtDrawing",f:fr},551:{n:"BrtLegacyDrawing"},552:{n:"BrtLegacyDrawingHF"},553:{n:"BrtWebOpt"},554:{n:"BrtBeginWebPubItems"},555:{n:"BrtEndWebPubItems"},556:{n:"BrtBeginWebPubItem"},557:{n:"BrtEndWebPubItem"},558:{n:"BrtBeginSXCondFmt"},559:{n:"BrtEndSXCondFmt"},560:{n:"BrtBeginSXCondFmts"},561:{n:"BrtEndSXCondFmts"},562:{n:"BrtBkHim"},564:{n:"BrtColor"},565:{n:"BrtBeginIndexedColors"},566:{n:"BrtEndIndexedColors"},569:{n:"BrtBeginMRUColors"},570:{n:"BrtEndMRUColors"},572:{n:"BrtMRUColor"},573:{n:"BrtBeginDVals"},574:{n:"BrtEndDVals"},577:{n:"BrtSupNameStart"},578:{n:"BrtSupNameValueStart"},579:{n:"BrtSupNameValueEnd"},580:{n:"BrtSupNameNum"},581:{n:"BrtSupNameErr"},582:{n:"BrtSupNameSt"},583:{n:"BrtSupNameNil"},584:{n:"BrtSupNameBool"},585:{n:"BrtSupNameFmla"},586:{n:"BrtSupNameBits"},587:{n:"BrtSupNameEnd"},588:{n:"BrtEndSupBook"},589:{n:"BrtCellSmartTagProperty"},590:{n:"BrtBeginCellSmartTag"},591:{n:"BrtEndCellSmartTag"},592:{n:"BrtBeginCellSmartTags"},593:{n:"BrtEndCellSmartTags"},594:{n:"BrtBeginSmartTags"},595:{n:"BrtEndSmartTags"},596:{n:"BrtSmartTagType"},597:{n:"BrtBeginSmartTagTypes"},598:{n:"BrtEndSmartTagTypes"},599:{n:"BrtBeginSXFilters"},600:{n:"BrtEndSXFilters"},601:{n:"BrtBeginSXFILTER"},602:{n:"BrtEndSXFilter"},603:{n:"BrtBeginFills"},604:{n:"BrtEndFills"},605:{n:"BrtBeginCellWatches"},606:{n:"BrtEndCellWatches"},607:{n:"BrtCellWatch"},608:{n:"BrtBeginCRErrs"},609:{n:"BrtEndCRErrs"},610:{n:"BrtCrashRecErr"},611:{n:"BrtBeginFonts"},612:{n:"BrtEndFonts"},613:{n:"BrtBeginBorders"},614:{n:"BrtEndBorders"},615:{n:"BrtBeginFmts"},616:{n:"BrtEndFmts"},617:{n:"BrtBeginCellXFs"},618:{n:"BrtEndCellXFs"},619:{n:"BrtBeginStyles"},620:{n:"BrtEndStyles"},625:{n:"BrtBigName"},626:{n:"BrtBeginCellStyleXFs"},627:{n:"BrtEndCellStyleXFs"},628:{n:"BrtBeginComments"},629:{n:"BrtEndComments"},630:{n:"BrtBeginCommentAuthors"},631:{n:"BrtEndCommentAuthors"},632:{n:"BrtCommentAuthor",f:qs},633:{n:"BrtBeginCommentList"},634:{n:"BrtEndCommentList"},635:{n:"BrtBeginComment",f:function(e){var t={}
t.iauthor=e._R(4)
var r=pr(e,16)
return t.rfx=r.s,t.ref=Ht(r.s),e.l+=16,t}},636:{n:"BrtEndComment"},637:{n:"BrtCommentText",f:tr},638:{n:"BrtBeginOleObjects"},639:{n:"BrtOleObject"},640:{n:"BrtEndOleObjects"},641:{n:"BrtBeginSxrules"},642:{n:"BrtEndSxRules"},643:{n:"BrtBeginActiveXControls"},644:{n:"BrtActiveX"},645:{n:"BrtEndActiveXControls"},646:{n:"BrtBeginPCDSDTCEMembersSortBy"},648:{n:"BrtBeginCellIgnoreECs"},649:{n:"BrtCellIgnoreEC"},650:{n:"BrtEndCellIgnoreECs"},651:{n:"BrtCsProp",f:function(e,t){return e.l+=10,{name:Qt(e)}}},652:{n:"BrtCsPageSetup"},653:{n:"BrtBeginUserCsViews"},654:{n:"BrtEndUserCsViews"},655:{n:"BrtBeginUserCsView"},656:{n:"BrtEndUserCsView"},657:{n:"BrtBeginPcdSFCIEntries"},658:{n:"BrtEndPCDSFCIEntries"},659:{n:"BrtPCDSFCIEntry"},660:{n:"BrtBeginListParts"},661:{n:"BrtListPart"},662:{n:"BrtEndListParts"},663:{n:"BrtSheetCalcProp"},664:{n:"BrtBeginFnGroup"},665:{n:"BrtFnGroup"},666:{n:"BrtEndFnGroup"},667:{n:"BrtSupAddin"},668:{n:"BrtSXTDMPOrder"},669:{n:"BrtCsProtection"},671:{n:"BrtBeginWsSortMap"},672:{n:"BrtEndWsSortMap"},673:{n:"BrtBeginRRSort"},674:{n:"BrtEndRRSort"},675:{n:"BrtRRSortItem"},676:{n:"BrtFileSharingIso"},677:{n:"BrtBookProtectionIso"},678:{n:"BrtSheetProtectionIso"},679:{n:"BrtCsProtectionIso"},680:{n:"BrtRangeProtectionIso"},1024:{n:"BrtRwDescent"},1025:{n:"BrtKnownFonts"},1026:{n:"BrtBeginSXTupleSet"},1027:{n:"BrtEndSXTupleSet"},1028:{n:"BrtBeginSXTupleSetHeader"},1029:{n:"BrtEndSXTupleSetHeader"},1030:{n:"BrtSXTupleSetHeaderItem"},1031:{n:"BrtBeginSXTupleSetData"},1032:{n:"BrtEndSXTupleSetData"},1033:{n:"BrtBeginSXTupleSetRow"},1034:{n:"BrtEndSXTupleSetRow"},1035:{n:"BrtSXTupleSetRowItem"},1036:{n:"BrtNameExt"},1037:{n:"BrtPCDH14"},1038:{n:"BrtBeginPCDCalcMem14"},1039:{n:"BrtEndPCDCalcMem14"},1040:{n:"BrtSXTH14"},1041:{n:"BrtBeginSparklineGroup"},1042:{n:"BrtEndSparklineGroup"},1043:{n:"BrtSparkline"},1044:{n:"BrtSXDI14"},1045:{n:"BrtWsFmtInfoEx14"},1046:{n:"BrtBeginConditionalFormatting14"},1047:{n:"BrtEndConditionalFormatting14"},1048:{n:"BrtBeginCFRule14"},1049:{n:"BrtEndCFRule14"},1050:{n:"BrtCFVO14"},1051:{n:"BrtBeginDatabar14"},1052:{n:"BrtBeginIconSet14"},1053:{n:"BrtDVal14"},1054:{n:"BrtBeginDVals14"},1055:{n:"BrtColor14"},1056:{n:"BrtBeginSparklines"},1057:{n:"BrtEndSparklines"},1058:{n:"BrtBeginSparklineGroups"},1059:{n:"BrtEndSparklineGroups"},1061:{n:"BrtSXVD14"},1062:{n:"BrtBeginSXView14"},1063:{n:"BrtEndSXView14"},1064:{n:"BrtBeginSXView16"},1065:{n:"BrtEndSXView16"},1066:{n:"BrtBeginPCD14"},1067:{n:"BrtEndPCD14"},1068:{n:"BrtBeginExtConn14"},1069:{n:"BrtEndExtConn14"},1070:{n:"BrtBeginSlicerCacheIDs"},1071:{n:"BrtEndSlicerCacheIDs"},1072:{n:"BrtBeginSlicerCacheID"},1073:{n:"BrtEndSlicerCacheID"},1075:{n:"BrtBeginSlicerCache"},1076:{n:"BrtEndSlicerCache"},1077:{n:"BrtBeginSlicerCacheDef"},1078:{n:"BrtEndSlicerCacheDef"},1079:{n:"BrtBeginSlicersEx"},1080:{n:"BrtEndSlicersEx"},1081:{n:"BrtBeginSlicerEx"},1082:{n:"BrtEndSlicerEx"},1083:{n:"BrtBeginSlicer"},1084:{n:"BrtEndSlicer"},1085:{n:"BrtSlicerCachePivotTables"},1086:{n:"BrtBeginSlicerCacheOlapImpl"},1087:{n:"BrtEndSlicerCacheOlapImpl"},1088:{n:"BrtBeginSlicerCacheLevelsData"},1089:{n:"BrtEndSlicerCacheLevelsData"},1090:{n:"BrtBeginSlicerCacheLevelData"},1091:{n:"BrtEndSlicerCacheLevelData"},1092:{n:"BrtBeginSlicerCacheSiRanges"},1093:{n:"BrtEndSlicerCacheSiRanges"},1094:{n:"BrtBeginSlicerCacheSiRange"},1095:{n:"BrtEndSlicerCacheSiRange"},1096:{n:"BrtSlicerCacheOlapItem"},1097:{n:"BrtBeginSlicerCacheSelections"},1098:{n:"BrtSlicerCacheSelection"},1099:{n:"BrtEndSlicerCacheSelections"},1100:{n:"BrtBeginSlicerCacheNative"},1101:{n:"BrtEndSlicerCacheNative"},1102:{n:"BrtSlicerCacheNativeItem"},1103:{n:"BrtRangeProtection14"},1104:{n:"BrtRangeProtectionIso14"},1105:{n:"BrtCellIgnoreEC14"},1111:{n:"BrtList14"},1112:{n:"BrtCFIcon"},1113:{n:"BrtBeginSlicerCachesPivotCacheIDs"},1114:{n:"BrtEndSlicerCachesPivotCacheIDs"},1115:{n:"BrtBeginSlicers"},1116:{n:"BrtEndSlicers"},1117:{n:"BrtWbProp14"},1118:{n:"BrtBeginSXEdit"},1119:{n:"BrtEndSXEdit"},1120:{n:"BrtBeginSXEdits"},1121:{n:"BrtEndSXEdits"},1122:{n:"BrtBeginSXChange"},1123:{n:"BrtEndSXChange"},1124:{n:"BrtBeginSXChanges"},1125:{n:"BrtEndSXChanges"},1126:{n:"BrtSXTupleItems"},1128:{n:"BrtBeginSlicerStyle"},1129:{n:"BrtEndSlicerStyle"},1130:{n:"BrtSlicerStyleElement"},1131:{n:"BrtBeginStyleSheetExt14"},1132:{n:"BrtEndStyleSheetExt14"},1133:{n:"BrtBeginSlicerCachesPivotCacheID"},1134:{n:"BrtEndSlicerCachesPivotCacheID"},1135:{n:"BrtBeginConditionalFormattings"},1136:{n:"BrtEndConditionalFormattings"},1137:{n:"BrtBeginPCDCalcMemExt"},1138:{n:"BrtEndPCDCalcMemExt"},1139:{n:"BrtBeginPCDCalcMemsExt"},1140:{n:"BrtEndPCDCalcMemsExt"},1141:{n:"BrtPCDField14"},1142:{n:"BrtBeginSlicerStyles"},1143:{n:"BrtEndSlicerStyles"},1144:{n:"BrtBeginSlicerStyleElements"},1145:{n:"BrtEndSlicerStyleElements"},1146:{n:"BrtCFRuleExt"},1147:{n:"BrtBeginSXCondFmt14"},1148:{n:"BrtEndSXCondFmt14"},1149:{n:"BrtBeginSXCondFmts14"},1150:{n:"BrtEndSXCondFmts14"},1152:{n:"BrtBeginSortCond14"},1153:{n:"BrtEndSortCond14"},1154:{n:"BrtEndDVals14"},1155:{n:"BrtEndIconSet14"},1156:{n:"BrtEndDatabar14"},1157:{n:"BrtBeginColorScale14"},1158:{n:"BrtEndColorScale14"},1159:{n:"BrtBeginSxrules14"},1160:{n:"BrtEndSxrules14"},1161:{n:"BrtBeginPRule14"},1162:{n:"BrtEndPRule14"},1163:{n:"BrtBeginPRFilters14"},1164:{n:"BrtEndPRFilters14"},1165:{n:"BrtBeginPRFilter14"},1166:{n:"BrtEndPRFilter14"},1167:{n:"BrtBeginPRFItem14"},1168:{n:"BrtEndPRFItem14"},1169:{n:"BrtBeginCellIgnoreECs14"},1170:{n:"BrtEndCellIgnoreECs14"},1171:{n:"BrtDxf14"},1172:{n:"BrtBeginDxF14s"},1173:{n:"BrtEndDxf14s"},1177:{n:"BrtFilter14"},1178:{n:"BrtBeginCustomFilters14"},1180:{n:"BrtCustomFilter14"},1181:{n:"BrtIconFilter14"},1182:{n:"BrtPivotCacheConnectionName"},2048:{n:"BrtBeginDecoupledPivotCacheIDs"},2049:{n:"BrtEndDecoupledPivotCacheIDs"},2050:{n:"BrtDecoupledPivotCacheID"},2051:{n:"BrtBeginPivotTableRefs"},2052:{n:"BrtEndPivotTableRefs"},2053:{n:"BrtPivotTableRef"},2054:{n:"BrtSlicerCacheBookPivotTables"},2055:{n:"BrtBeginSxvcells"},2056:{n:"BrtEndSxvcells"},2057:{n:"BrtBeginSxRow"},2058:{n:"BrtEndSxRow"},2060:{n:"BrtPcdCalcMem15"},2067:{n:"BrtQsi15"},2068:{n:"BrtBeginWebExtensions"},2069:{n:"BrtEndWebExtensions"},2070:{n:"BrtWebExtension"},2071:{n:"BrtAbsPath15"},2072:{n:"BrtBeginPivotTableUISettings"},2073:{n:"BrtEndPivotTableUISettings"},2075:{n:"BrtTableSlicerCacheIDs"},2076:{n:"BrtTableSlicerCacheID"},2077:{n:"BrtBeginTableSlicerCache"},2078:{n:"BrtEndTableSlicerCache"},2079:{n:"BrtSxFilter15"},2080:{n:"BrtBeginTimelineCachePivotCacheIDs"},2081:{n:"BrtEndTimelineCachePivotCacheIDs"},2082:{n:"BrtTimelineCachePivotCacheID"},2083:{n:"BrtBeginTimelineCacheIDs"},2084:{n:"BrtEndTimelineCacheIDs"},2085:{n:"BrtBeginTimelineCacheID"},2086:{n:"BrtEndTimelineCacheID"},2087:{n:"BrtBeginTimelinesEx"},2088:{n:"BrtEndTimelinesEx"},2089:{n:"BrtBeginTimelineEx"},2090:{n:"BrtEndTimelineEx"},2091:{n:"BrtWorkBookPr15"},2092:{n:"BrtPCDH15"},2093:{n:"BrtBeginTimelineStyle"},2094:{n:"BrtEndTimelineStyle"},2095:{n:"BrtTimelineStyleElement"},2096:{n:"BrtBeginTimelineStylesheetExt15"},2097:{n:"BrtEndTimelineStylesheetExt15"},2098:{n:"BrtBeginTimelineStyles"},2099:{n:"BrtEndTimelineStyles"},2100:{n:"BrtBeginTimelineStyleElements"},2101:{n:"BrtEndTimelineStyleElements"},2102:{n:"BrtDxf15"},2103:{n:"BrtBeginDxfs15"},2104:{n:"brtEndDxfs15"},2105:{n:"BrtSlicerCacheHideItemsWithNoData"},2106:{n:"BrtBeginItemUniqueNames"},2107:{n:"BrtEndItemUniqueNames"},2108:{n:"BrtItemUniqueName"},2109:{n:"BrtBeginExtConn15"},2110:{n:"BrtEndExtConn15"},2111:{n:"BrtBeginOledbPr15"},2112:{n:"BrtEndOledbPr15"},2113:{n:"BrtBeginDataFeedPr15"},2114:{n:"BrtEndDataFeedPr15"},2115:{n:"BrtTextPr15"},2116:{n:"BrtRangePr15"},2117:{n:"BrtDbCommand15"},2118:{n:"BrtBeginDbTables15"},2119:{n:"BrtEndDbTables15"},2120:{n:"BrtDbTable15"},2121:{n:"BrtBeginDataModel"},2122:{n:"BrtEndDataModel"},2123:{n:"BrtBeginModelTables"},2124:{n:"BrtEndModelTables"},2125:{n:"BrtModelTable"},2126:{n:"BrtBeginModelRelationships"},2127:{n:"BrtEndModelRelationships"},2128:{n:"BrtModelRelationship"},2129:{n:"BrtBeginECTxtWiz15"},2130:{n:"BrtEndECTxtWiz15"},2131:{n:"BrtBeginECTWFldInfoLst15"},2132:{n:"BrtEndECTWFldInfoLst15"},2133:{n:"BrtBeginECTWFldInfo15"},2134:{n:"BrtFieldListActiveItem"},2135:{n:"BrtPivotCacheIdVersion"},2136:{n:"BrtSXDI15"},2137:{n:"BrtBeginModelTimeGroupings"},2138:{n:"BrtEndModelTimeGroupings"},2139:{n:"BrtBeginModelTimeGrouping"},2140:{n:"BrtEndModelTimeGrouping"},2141:{n:"BrtModelTimeGroupingCalcCol"},3072:{n:"BrtUid"},3073:{n:"BrtRevisionPtr"},65535:{n:""}},Yl=L(Kl,"n"),$l={3:{n:"BIFF2NUM",f:function(e){var t=jn(e);++e.l
var r=mr(e)
return t.t="n",t.val=r,t}},4:{n:"BIFF2STR",f:function(e,t,r){var n=jn(e);++e.l
var a=Wn(e,0,r)
return n.t="str",n.val=a,n}},6:{n:"Formula",f:Xo},9:{n:"BOF",f:na},10:{n:"EOF",f:xn},12:{n:"CalcCount",f:Dn},13:{n:"CalcMode",f:Dn},14:{n:"CalcPrecision",f:yn},15:{n:"CalcRefMode",f:yn},16:{n:"CalcDelta",f:mr},17:{n:"CalcIter",f:yn},18:{n:"Protect",f:yn},19:{n:"Password",f:Dn},20:{n:"Header",f:da},21:{n:"Footer",f:da},23:{n:"ExternSheet",f:ba},24:{n:"Lbl",f:ma},25:{n:"WinProtect",f:yn},26:{n:"VerticalPageBreaks"},27:{n:"HorizontalPageBreaks"},28:{n:"Note",f:function(e,t,r){return function(e,t,r){if(!(r.biff<8)){var n=e._R(2),a=e._R(2),s=e._R(2),o=e._R(2),i=Wn(e,0,r)
return r.biff<8&&e._R(1),[{r:n,c:a},i,o,s]}}(e,0,r)}},29:{n:"Selection"},34:{n:"Date1904",f:yn},35:{n:"ExternName",f:pa},38:{n:"LeftMargin",f:mr},39:{n:"RightMargin",f:mr},40:{n:"TopMargin",f:mr},41:{n:"BottomMargin",f:mr},42:{n:"PrintRowCol",f:yn},43:{n:"PrintGrid",f:yn},47:{n:"FilePass",f:function(e,t,r){var n={Type:r.biff>=8?e._R(2):0}
return n.Type?ts(e,t-2,n):function(e,t,r,n){var a={key:Dn(e),verificationBytes:Dn(e)}
r.password&&(a.verifier=Ja(r.password)),n.valid=a.verificationBytes===a.verifier,n.valid&&(n.insitu=es(r.password))}(e,r.biff,r,n),n}},49:{n:"Font",f:function(e,t,r){var n={dyHeight:e._R(2),fl:e._R(2)}
switch(r&&r.biff||8){case 2:break
case 3:case 4:e.l+=2
break
default:e.l+=10}return n.name=Pn(e,0,r),n}},51:{n:"PrintSize",f:Dn},60:{n:"Continue"},61:{n:"Window1",f:function(e){return{Pos:[e._R(2),e._R(2)],Dim:[e._R(2),e._R(2)],Flags:e._R(2),CurTab:e._R(2),FirstTab:e._R(2),Selected:e._R(2),TabRatio:e._R(2)}}},64:{n:"Backup",f:yn},65:{n:"Pane"},66:{n:"CodePage",f:Dn},77:{n:"Pls"},80:{n:"DCon"},81:{n:"DConRef"},82:{n:"DConName"},85:{n:"DefColWidth",f:Dn},89:{n:"XCT"},90:{n:"CRN"},91:{n:"FileSharing"},92:{n:"WriteAccess",f:function(e,t,r){if(r.enc)return e.l+=t,""
var n=e.l,a=Wn(e,0,r)
return e._R(t+n-e.l),a}},93:{n:"Obj",f:function(e,t,r){if(r&&r.biff<8)return function(e,t,r){e.l+=4
var n=e._R(2),a=e._R(2),s=e._R(2)
e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=2,e.l+=6,t-=36
var o=[]
return o.push((Ca[n]||Bt)(e,t,r)),{cmo:[a,n,s],ft:o}}(e,t,r)
var n=ea(e),a=function(e,t){for(var r=e.l+t,n=[];e.l<r;){var a=e._R(2)
e.l-=2
try{n.push(ra[a](e,r-e.l))}catch(s){return e.l=r,n}}return e.l!=r&&(e.l=r),n}(e,t-22,n[1])
return{cmo:n,ft:a}}},94:{n:"Uncalced"},95:{n:"CalcSaveRecalc",f:yn},96:{n:"Template"},97:{n:"Intl"},99:{n:"ObjProtect",f:yn},125:{n:"ColInfo",f:Aa},128:{n:"Guts",f:function(e){e.l+=4
var t=[e._R(2),e._R(2)]
if(0!==t[0]&&t[0]--,0!==t[1]&&t[1]--,t[0]>7||t[1]>7)throw new Error("Bad Gutters: "+t.join("|"))
return t}},129:{n:"WsBool",f:function(e,t,r){return{fDialog:16&(r&&8==r.biff||2==t?e._R(2):(e.l+=t,0))}}},130:{n:"GridSet",f:Dn},131:{n:"HCenter",f:yn},132:{n:"VCenter",f:yn},133:{n:"BoundSheet8",f:function(e,t,r){var n=e._R(4),a=3&e._R(1),s=e._R(1)
switch(s){case 0:s="Worksheet"
break
case 1:s="Macrosheet"
break
case 2:s="Chartsheet"
break
case 6:s="VBAModule"}var o=Pn(e,0,r)
return 0===o.length&&(o="Sheet1"),{pos:n,hs:a,dt:s,name:o}}},134:{n:"WriteProtect"},140:{n:"Country",f:function(e){var t,r=[0,0]
return t=e._R(2),r[0]=Dr[t]||t,t=e._R(2),r[1]=Dr[t]||t,r}},141:{n:"HideObj",f:Dn},144:{n:"Sort"},146:{n:"Palette",f:function(e){for(var t=e._R(2),r=[];t-- >0;)r.push(Gn(e))
return r}},151:{n:"Sync"},152:{n:"LPr"},153:{n:"DxGCol"},154:{n:"FnGroupName"},155:{n:"FilterMode"},156:{n:"BuiltInFnGroupCount",f:Dn},157:{n:"AutoFilterInfo"},158:{n:"AutoFilter"},160:{n:"Scl",f:wa},161:{n:"Setup",f:function(e,t){var r={}
return t<32?r:(e.l+=16,r.header=mr(e),r.footer=mr(e),e.l+=2,r)}},174:{n:"ScenMan"},175:{n:"SCENARIO"},176:{n:"SxView"},177:{n:"Sxvd"},178:{n:"SXVI"},180:{n:"SxIvd"},181:{n:"SXLI"},182:{n:"SXPI"},184:{n:"DocRoute"},185:{n:"RecipName"},189:{n:"MulRk",f:function(e,t){for(var r=e.l+t-2,n=e._R(2),a=e._R(2),s=[];e.l<r;)s.push($n(e))
if(e.l!==r)throw new Error("MulRK read error")
var o=e._R(2)
if(s.length!=o-a+1)throw new Error("MulRK length mismatch")
return{r:n,c:a,C:o,rkrec:s}}},190:{n:"MulBlank",f:function(e,t){for(var r=e.l+t-2,n=e._R(2),a=e._R(2),s=[];e.l<r;)s.push(e._R(2))
if(e.l!==r)throw new Error("MulBlank read error")
var o=e._R(2)
if(s.length!=o-a+1)throw new Error("MulBlank length mismatch")
return{r:n,c:a,C:o,ixfe:s}}},193:{n:"Mms",f:xn},197:{n:"SXDI"},198:{n:"SXDB"},199:{n:"SXFDB"},200:{n:"SXDBB"},201:{n:"SXNum"},202:{n:"SxBool",f:yn},203:{n:"SxErr"},204:{n:"SXInt"},205:{n:"SXString"},206:{n:"SXDtr"},207:{n:"SxNil"},208:{n:"SXTbl"},209:{n:"SXTBRGIITM"},210:{n:"SxTbpg"},211:{n:"ObProj"},213:{n:"SXStreamID"},215:{n:"DBCell"},216:{n:"SXRng"},217:{n:"SxIsxoper"},218:{n:"BookBool",f:Dn},220:{n:"DbOrParamQry"},221:{n:"ScenarioProtect",f:yn},222:{n:"OleObjectSize"},224:{n:"XF",f:function(e,t,r){var n={}
return n.ifnt=e._R(2),n.numFmtId=e._R(2),n.flags=e._R(2),n.fStyle=n.flags>>2&1,n.data=function(e,t,r,n){var a={},s=e._R(4),o=e._R(4),i=e._R(4),l=e._R(2)
return a.patternType=Or[i>>26],n.cellStyles?(a.alc=7&s,a.fWrap=s>>3&1,a.alcV=s>>4&7,a.fJustLast=s>>7&1,a.trot=s>>8&255,a.cIndent=s>>16&15,a.fShrinkToFit=s>>20&1,a.iReadOrder=s>>22&2,a.fAtrNum=s>>26&1,a.fAtrFnt=s>>27&1,a.fAtrAlc=s>>28&1,a.fAtrBdr=s>>29&1,a.fAtrPat=s>>30&1,a.fAtrProt=s>>31&1,a.dgLeft=15&o,a.dgRight=o>>4&15,a.dgTop=o>>8&15,a.dgBottom=o>>12&15,a.icvLeft=o>>16&127,a.icvRight=o>>23&127,a.grbitDiag=o>>30&3,a.icvTop=127&i,a.icvBottom=i>>7&127,a.icvDiag=i>>14&127,a.dgDiag=i>>21&15,a.icvFore=127&l,a.icvBack=l>>7&127,a.fsxButton=l>>14&1,a):a}(e,0,n.fStyle,r),n}},225:{n:"InterfaceHdr",f:function(e,t){return 0===t?1200:(e._R(2),1200)}},226:{n:"InterfaceEnd",f:xn},227:{n:"SXVS"},229:{n:"MergeCells",f:function(e,t){for(var r=[],n=e._R(2);n--;)r.push(Zn(e))
return r}},233:{n:"BkHim"},235:{n:"MsoDrawingGroup"},236:{n:"MsoDrawing"},237:{n:"MsoDrawingSelection"},239:{n:"PhoneticInfo"},240:{n:"SxRule"},241:{n:"SXEx"},242:{n:"SxFilt"},244:{n:"SxDXF"},245:{n:"SxItm"},246:{n:"SxName"},247:{n:"SxSelect"},248:{n:"SXPair"},249:{n:"SxFmla"},251:{n:"SxFormat"},252:{n:"SST",f:function(e,t){for(var r=e.l+t,n=e._R(4),a=e._R(4),s=[],o=0;o!=a&&e.l<r;++o)s.push(Nn(e))
return s.Count=n,s.Unique=a,s}},253:{n:"LabelSst",f:function(e){var t=jn(e)
return t.isst=e._R(4),t}},255:{n:"ExtSST",f:function(e,t){var r={}
return r.dsst=e._R(2),e.l+=t-2,r}},256:{n:"SXVDEx"},259:{n:"SXFormula"},290:{n:"SXDBEx"},311:{n:"RRDInsDel"},312:{n:"RRDHead"},315:{n:"RRDChgCell"},317:{n:"RRTabId",f:Fn},318:{n:"RRDRenSheet"},319:{n:"RRSort"},320:{n:"RRDMove"},330:{n:"RRFormat"},331:{n:"RRAutoFmt"},333:{n:"RRInsertSh"},334:{n:"RRDMoveBegin"},335:{n:"RRDMoveEnd"},336:{n:"RRDInsDelBegin"},337:{n:"RRDInsDelEnd"},338:{n:"RRDConflict"},339:{n:"RRDDefName"},340:{n:"RRDRstEtxp"},351:{n:"LRng"},352:{n:"UsesELFs",f:yn},353:{n:"DSF",f:xn},401:{n:"CUsr"},402:{n:"CbUsr"},403:{n:"UsrInfo"},404:{n:"UsrExcl"},405:{n:"FileLock"},406:{n:"RRDInfo"},407:{n:"BCUsrs"},408:{n:"UsrChk"},425:{n:"UserBView"},426:{n:"UserSViewBegin"},427:{n:"UserSViewEnd"},428:{n:"RRDUserView"},429:{n:"Qsi"},430:{n:"SupBook",f:function(e,t,r){var n=e.l+t,a=e._R(2),s=e._R(2)
if(r.sbcch=s,1025==s||14849==s)return[s,a]
if(s<1||s>255)throw new Error("Unexpected SupBook type: "+s)
for(var o=Ln(e,s),i=[];n>e.l;)i.push(Mn(e))
return[s,a,o,i]}},431:{n:"Prot4Rev",f:yn},432:{n:"CondFmt"},433:{n:"CF"},434:{n:"DVal"},437:{n:"DConBin"},438:{n:"TxO",f:function(e,t,r){var n=e.l,a=""
try{e.l+=4
var s=(r.lastobj||{cmo:[0,0]}).cmo[1];-1==[0,5,7,11,12,14].indexOf(s)?e.l+=6:function(e){var t=e._R(1)
e.l++
var r=e._R(2)
e.l+=2}(e)
var o=e._R(2)
e._R(2),Dn(e)
var i=e._R(2)
e.l+=i
for(var l=1;l<e.lens.length-1;++l){if(e.l-n!=e.lens[l])throw new Error("TxO: bad continue record")
var c=e[e.l]
if((a+=Ln(e,e.lens[l+1]-e.lens[l]-1)).length>=(c?o:2*o))break}if(a.length!==o&&a.length!==2*o)throw new Error("cchText: "+o+" != "+a.length)
return e.l=n+t,{t:a}}catch(f){return e.l=n+t,{t:a}}}},439:{n:"RefreshAll",f:yn},440:{n:"HLink",f:function(e,t){var r=Zn(e)
return e.l+=16,[r,function(e,t){var r=e.l+t,n=e._R(4)
if(2!==n)throw new Error("Unrecognized streamVersion: "+n)
var a=e._R(2)
e.l+=2
var s,o,i,l,c,f,h=""
16&a&&(s=Vn(e,e.l)),128&a&&(o=Vn(e,e.l)),257==(257&a)&&(i=Vn(e,e.l)),1==(257&a)&&(l=Hn(e,e.l)),8&a&&(h=Vn(e,e.l)),32&a&&(c=e._R(16)),64&a&&(f=hn(e)),e.l=r
var u=o||i||l||""
u&&h&&(u+="#"+h),u||(u="#"+h)
var d={Target:u}
return c&&(d.guid=c),f&&(d.time=f),s&&(d.Tooltip=s),d}(e,t-24)]}},441:{n:"Lel"},442:{n:"CodeName",f:Mn},443:{n:"SXFDBType"},444:{n:"Prot4RevPass",f:Dn},445:{n:"ObNoMacros"},446:{n:"Dv"},448:{n:"Excel9File",f:xn},449:{n:"RecalcId",f:function(e){return e._R(2),e._R(4)},r:2},450:{n:"EntExU2",f:xn},512:{n:"Dimensions",f:ca},513:{n:"Blank",f:_a},515:{n:"Number",f:function(e){var t=jn(e),r=mr(e)
return t.val=r,t}},516:{n:"Label",f:function(e,t,r){e.l
var n=jn(e)
2==r.biff&&e.l++
var a=Mn(e,e.l,r)
return n.val=a,n}},517:{n:"BoolErr",f:ha},518:{n:"Formula",f:Xo},519:{n:"String",f:Ra},520:{n:"Row",f:function(e){var t={}
t.r=e._R(2),t.c=e._R(2),t.cnt=e._R(2)-t.c
var r=e._R(2)
e.l+=4
var n=e._R(1)
return e.l+=3,7&n&&(t.level=7&n),32&n&&(t.hidden=!0),64&n&&(t.hpt=r/20),t}},523:{n:"Index"},545:{n:"Array",f:va},549:{n:"DefaultRowHeight",f:oa},566:{n:"Table"},574:{n:"Window2",f:function(e,t,r){return r&&r.biff>=2&&r.biff<8?{}:{RTL:64&e._R(2)}}},638:{n:"RK",f:function(e){var t=e._R(2),r=e._R(2),n=$n(e)
return{r:t,c:r,ixfe:n[0],rknum:n[1]}}},659:{n:"Style"},1030:{n:"Formula",f:Xo},1048:{n:"BigName"},1054:{n:"Format",f:function(e,t,r){return[e._R(2),Wn(e,0,r)]}},1084:{n:"ContinueBigName"},1212:{n:"ShrFmla",f:function(e,t,r){var n=Jn(e)
e.l++
var a=e._R(1)
return[zo(e,t-=8,r),a,n]}},2048:{n:"HLinkTooltip",f:function(e,t){e._R(2)
var r=Zn(e),n=e._R((t-10)/2,"dbcs-cont")
return[r,n=n.replace(w,"")]}},2049:{n:"WebPub"},2050:{n:"QsiSXTag"},2051:{n:"DBQueryExt"},2052:{n:"ExtString"},2053:{n:"TxtQry"},2054:{n:"Qsir"},2055:{n:"Qsif"},2056:{n:"RRDTQSIF"},2057:{n:"BOF",f:na},2058:{n:"OleDbConn"},2059:{n:"WOpt"},2060:{n:"SXViewEx"},2061:{n:"SXTH"},2062:{n:"SXPIEx"},2063:{n:"SXVDTEx"},2064:{n:"SXViewEx9"},2066:{n:"ContinueFrt"},2067:{n:"RealTimeData"},2128:{n:"ChartFrtInfo"},2129:{n:"FrtWrapper"},2130:{n:"StartBlock"},2131:{n:"EndBlock"},2132:{n:"StartObject"},2133:{n:"EndObject"},2134:{n:"CatLab"},2135:{n:"YMult"},2136:{n:"SXViewLink"},2137:{n:"PivotChartBits"},2138:{n:"FrtFontList"},2146:{n:"SheetExt"},2147:{n:"BookExt",r:12},2148:{n:"SXAddl"},2149:{n:"CrErr"},2150:{n:"HFPicture"},2151:{n:"FeatHdr",f:xn},2152:{n:"Feat"},2154:{n:"DataLabExt"},2155:{n:"DataLabExtContents"},2156:{n:"CellWatch"},2161:{n:"FeatHdr11"},2162:{n:"Feature11"},2164:{n:"DropDownObjIds"},2165:{n:"ContinueFrt11"},2166:{n:"DConn"},2167:{n:"List12"},2168:{n:"Feature12"},2169:{n:"CondFmt12"},2170:{n:"CF12"},2171:{n:"CFEx"},2172:{n:"XFCRC",f:function(e){e.l+=2
var t={cxfs:0,crc:0}
return t.cxfs=e._R(2),t.crc=e._R(4),t},r:12},2173:{n:"XFExt",f:function(e,t){e.l,e.l+=2
var r=e._R(2)
e.l+=2
for(var n=e._R(2),a=[];n-- >0;)a.push(Ks(e,e.l))
return{ixfe:r,ext:a}},r:12},2174:{n:"AutoFilter12"},2175:{n:"ContinueFrt12"},2180:{n:"MDTInfo"},2181:{n:"MDXStr"},2182:{n:"MDXTuple"},2183:{n:"MDXSet"},2184:{n:"MDXProp"},2185:{n:"MDXKPI"},2186:{n:"MDB"},2187:{n:"PLV"},2188:{n:"Compat12",f:yn,r:12},2189:{n:"DXF"},2190:{n:"TableStyles",r:12},2191:{n:"TableStyle"},2192:{n:"TableStyleElement"},2194:{n:"StyleExt"},2195:{n:"NamePublish"},2196:{n:"NameCmt",f:function(e,t,r){if(!(r.biff<8)){var n=e._R(2),a=e._R(2)
return[Ln(e,n,r),Ln(e,a,r)]}e.l+=t},r:12},2197:{n:"SortData"},2198:{n:"Theme",f:function(e,t,r){var n=e.l+t
if(124226!==e._R(4))if(r.cellStyles&&ee){var a,s=e.slice(e.l)
e.l=n
try{a=new ee(s)}catch(i){return}var o=ie(a,"theme/theme/theme1.xml",!0)
if(o)return Xs(o,r)}else e.l=n},r:12},2199:{n:"GUIDTypeLib"},2200:{n:"FnGrp12"},2201:{n:"NameFnGrp12"},2202:{n:"MTRSettings",f:function(e){return[0!==e._R(4),0!==e._R(4),e._R(4)]},r:12},2203:{n:"CompressPictures",f:xn},2204:{n:"HeaderFooter"},2205:{n:"CrtLayout12"},2206:{n:"CrtMlFrt"},2207:{n:"CrtMlFrtContinue"},2211:{n:"ForceFullCalculation",f:function(e){var t=function(e){var t=e._R(2),r=e._R(2)
return e.l+=8,{type:t,flags:r}}(e)
if(2211!=t.type)throw new Error("Invalid Future Record "+t.type)
return 0!==e._R(4)}},2212:{n:"ShapePropsStream"},2213:{n:"TextPropsStream"},2214:{n:"RichTextStream"},2215:{n:"CrtLayout12A"},4097:{n:"Units"},4098:{n:"Chart"},4099:{n:"Series"},4102:{n:"DataFormat"},4103:{n:"LineFormat"},4105:{n:"MarkerFormat"},4106:{n:"AreaFormat"},4107:{n:"PieFormat"},4108:{n:"AttachedLabel"},4109:{n:"SeriesText"},4116:{n:"ChartFormat"},4117:{n:"Legend"},4118:{n:"SeriesList"},4119:{n:"Bar"},4120:{n:"Line"},4121:{n:"Pie"},4122:{n:"Area"},4123:{n:"Scatter"},4124:{n:"CrtLine"},4125:{n:"Axis"},4126:{n:"Tick"},4127:{n:"ValueRange"},4128:{n:"CatSerRange"},4129:{n:"AxisLine"},4130:{n:"CrtLink"},4132:{n:"DefaultText"},4133:{n:"Text"},4134:{n:"FontX",f:Dn},4135:{n:"ObjectLink"},4146:{n:"Frame"},4147:{n:"Begin"},4148:{n:"End"},4149:{n:"PlotArea"},4154:{n:"Chart3d"},4156:{n:"PicF"},4157:{n:"DropBar"},4158:{n:"Radar"},4159:{n:"Surf"},4160:{n:"RadarArea"},4161:{n:"AxisParent"},4163:{n:"LegendException"},4164:{n:"ShtProps",f:function(e,t,r){var n={area:!1}
if(5!=r.biff)return e.l+=t,n
var a=e._R(1)
return e.l+=3,16&a&&(n.area=!0),n}},4165:{n:"SerToCrt"},4166:{n:"AxesUsed"},4168:{n:"SBaseRef"},4170:{n:"SerParent"},4171:{n:"SerAuxTrend"},4174:{n:"IFmtRecord"},4175:{n:"Pos"},4176:{n:"AlRuns"},4177:{n:"BRAI"},4187:{n:"SerAuxErrBar"},4188:{n:"ClrtClient",f:function(e){for(var t=e._R(2),r=[];t-- >0;)r.push(Gn(e))
return r}},4189:{n:"SerFmt"},4191:{n:"Chart3DBarShape"},4192:{n:"Fbi"},4193:{n:"BopPop"},4194:{n:"AxcExt"},4195:{n:"Dat"},4196:{n:"PlotGrowth"},4197:{n:"SIIndex"},4198:{n:"GelFrame"},4199:{n:"BopPopCustom"},4200:{n:"Fbi2"},0:{n:"Dimensions",f:ca},2:{n:"BIFF2INT",f:function(e){var t=jn(e);++e.l
var r=e._R(2)
return t.t="n",t.val=r,t}},5:{n:"BoolErr",f:ha},7:{n:"String",f:function(e){var t=e._R(1)
return 0===t?(e.l++,""):e._R(t,"sbcs-cont")}},8:{n:"BIFF2ROW"},11:{n:"Index"},22:{n:"ExternCount",f:Dn},30:{n:"BIFF2FORMAT",f:la},31:{n:"BIFF2FMTCNT"},32:{n:"BIFF2COLINFO"},33:{n:"Array",f:va},37:{n:"DefaultRowHeight",f:oa},50:{n:"BIFF2FONTXTRA",f:function(e,t){e.l+=6,e.l+=2,e.l+=1,e.l+=3,e.l+=1,e.l+=t-13}},52:{n:"DDEObjName"},62:{n:"BIFF2WINDOW2"},67:{n:"BIFF2XF"},69:{n:"BIFF2FONTCLR"},86:{n:"BIFF4FMTCNT"},126:{n:"RK"},127:{n:"ImData",f:function(e){var t=e._R(2),r=e._R(2),n=e._R(4),a={fmt:t,env:r,len:n,data:e.slice(e.l,e.l+n)}
return e.l+=n,a}},135:{n:"Addin"},136:{n:"Edg"},137:{n:"Pub"},145:{n:"Sub"},148:{n:"LHRecord"},149:{n:"LHNGraph"},150:{n:"Sound"},169:{n:"CoordList"},171:{n:"GCW"},188:{n:"ShrFmla"},191:{n:"ToolbarHdr"},192:{n:"ToolbarEnd"},194:{n:"AddMenu"},195:{n:"DelMenu"},214:{n:"RString",f:function(e,t,r){var n=e.l+t,a=jn(e),s=e._R(2),o=Ln(e,s,r)
return e.l=n,a.t="str",a.val=o,a}},223:{n:"UDDesc"},234:{n:"TabIdConf"},354:{n:"XL5Modify"},421:{n:"FileSharing2"},521:{n:"BOF",f:na},536:{n:"Lbl",f:ma},547:{n:"ExternName",f:pa},561:{n:"Font"},579:{n:"BIFF3XF"},1033:{n:"BOF",f:na},1091:{n:"BIFF4XF"},2157:{n:"FeatInfo"},2163:{n:"FeatInfo11"},2177:{n:"SXAddl12"},2240:{n:"AutoWebPub"},2241:{n:"ListObj"},2242:{n:"ListField"},2243:{n:"ListDV"},2244:{n:"ListCondFmt"},2245:{n:"ListCF"},2246:{n:"FMQry"},2247:{n:"FMSQry"},2248:{n:"PLV"},2249:{n:"LnExt"},2250:{n:"MkrExt"},2251:{n:"CrtCoopt"},2262:{n:"FRTArchId$",r:12},29282:{}},Zl=L($l,"n")
function Ql(e,t,r,n){var a=+t||+Zl[t]
if(!isNaN(a)){var s=n||(r||[]).length||0,o=e.next(4)
o._W(2,a),o._W(2,s),s>0&&ut(r)&&e.push(r)}}function Jl(e,t,r){return e||(e=kt(7)),e._W(2,t),e._W(2,r),e._W(2,0),e._W(1,0),e}function ql(e,t,r,n){if(null!=t.v)switch(t.t){case"d":case"n":var a="d"==t.t?V(K(t.v)):t.v
return void(a==(0|a)&&a>=0&&a<65536?Ql(e,2,function(e,t,r){var n=kt(9)
return Jl(n,e,t),n._W(2,r),n}(r,n,a)):Ql(e,3,function(e,t,r){var n=kt(15)
return Jl(n,e,t),n._W(8,r,"f"),n}(r,n,a)))
case"b":case"e":return void Ql(e,5,function(e,t,r,n){var a=kt(9)
return Jl(a,e,t),"e"==n?(a._W(1,r),a._W(1,1)):(a._W(1,r?1:0),a._W(1,0)),a}(r,n,t.v,t.t))
case"s":case"str":return void Ql(e,4,function(e,t,r){var n=kt(8+2*r.length)
return Jl(n,e,t),n._W(1,r.length),n._W(r.length,r,"sbcs"),n.l<n.length?n.slice(0,n.l):n}(r,n,t.v))}Ql(e,1,Jl(null,r,n))}function ec(e,t){var r=t||{}
null!=u&&null==r.dense&&(r.dense=u)
for(var n=xt(),a=0,s=0;s<e.SheetNames.length;++s)e.SheetNames[s]==r.sheet&&(a=s)
if(0==a&&r.sheet&&e.SheetNames[0]!=r.sheet)throw new Error("Sheet not found: "+r.sheet)
return Ql(n,9,aa(0,16,r)),function(e,t,r,n){var a,s=Array.isArray(t),o=Xt(t["!ref"]||"A1"),i="",l=[]
if(o.e.c>255||o.e.r>16383){if(n.WTF)throw new Error("Range "+(t["!ref"]||"A1")+" exceeds format limit A1:IV16384")
o.e.c=Math.min(o.e.c,255),o.e.r=Math.min(o.e.c,16383),a=zt(o)}for(var c=o.s.r;c<=o.e.r;++c){i=Nt(c)
for(var f=o.s.c;f<=o.e.c;++f){c===o.s.r&&(l[f]=Mt(f)),a=l[f]+i
var h=s?(t[c]||[])[f]:t[a]
h&&ql(e,h,c,f)}}}(n,e.Sheets[e.SheetNames[a]],0,r),Ql(n,10),n.end()}function tc(e,t,r){Ql(e,"Font",function(e,t){var r=e.name||"Arial",n=t&&5==t.biff,a=kt(n?15+r.length:16+2*r.length)
return a._W(2,20*(e.sz||12)),a._W(4,0),a._W(2,400),a._W(4,0),a._W(2,0),a._W(1,r.length),n||a._W(1,1),a._W((n?1:2)*r.length,r,n?"sbcs":"utf16le"),a}({sz:12,color:{theme:1},name:"Arial",family:2,scheme:"minor"},r))}function rc(e,t,r,n,a){var s=16+fi(a.cellXfs,t,a)
if(null!=t.v)switch(t.t){case"d":case"n":return void Ql(e,"Number",function(e,t,r,n){var a=kt(14)
return Kn(e,t,n,a),br(r,a),a}(r,n,"d"==t.t?V(K(t.v)):t.v,s))
case"b":case"e":return void Ql(e,517,ua(r,n,t.v,s,0,t.t))
case"s":case"str":return void Ql(e,"Label",function(e,t,r,n,a){var s=!a||8==a.biff,o=kt(+s+8+(1+s)*r.length)
return Kn(e,t,n,o),o._W(2,r.length),s&&o._W(1,1),o._W((1+s)*r.length,r,s?"utf16le":"sbcs"),o}(r,n,t.v,s,a))}Ql(e,"Blank",Kn(r,n,s))}function nc(e,t,r){var n,a=xt(),s=r.SheetNames[e],o=r.Sheets[s]||{},i=(r||{}).Workbook||{},l=(i.Sheets||[])[e]||{},c=Array.isArray(o),f=8==t.biff,h="",u=[],d=Xt(o["!ref"]||"A1"),p=f?65536:16384
if(d.e.c>255||d.e.r>=p){if(t.WTF)throw new Error("Range "+(o["!ref"]||"A1")+" exceeds format limit A1:IV16384")
d.e.c=Math.min(d.e.c,255),d.e.r=Math.min(d.e.c,p-1)}Ql(a,2057,aa(0,16,t)),Ql(a,"CalcMode",On(1)),Ql(a,"CalcCount",On(100)),Ql(a,"CalcRefMode",In(!0)),Ql(a,"CalcIter",In(!1)),Ql(a,"CalcDelta",br(.001)),Ql(a,"CalcSaveRecalc",In(!0)),Ql(a,"PrintRowCol",In(!1)),Ql(a,"PrintGrid",In(!1)),Ql(a,"GridSet",On(1)),Ql(a,"Guts",function(e){var t=kt(8)
return t._W(4,0),t._W(2,e[0]?e[0]+1:0),t._W(2,e[1]?e[1]+1:0),t}([0,0])),Ql(a,"HCenter",In(!1)),Ql(a,"VCenter",In(!1)),Ql(a,512,function(e,t){var r=8!=t.biff&&t.biff?2:4,n=kt(2*r+6)
return n._W(r,e.s.r),n._W(r,e.e.r+1),n._W(2,e.s.c),n._W(2,e.e.c+1),n._W(2,0),n}(d,t)),f&&(o["!links"]=[])
for(var g=d.s.r;g<=d.e.r;++g){h=Nt(g)
for(var m=d.s.c;m<=d.e.c;++m){g===d.s.r&&(u[m]=Mt(m)),n=u[m]+h
var b=c?(o[g]||[])[m]:o[n]
b&&(rc(a,b,g,m,t),f&&b.l&&o["!links"].push([n,b.l]))}}var v=l.CodeName||l.name||s
return f&&i.Views&&Ql(a,"Window2",function(e){var t=kt(18),r=1718
return e&&e.RTL&&(r|=64),t._W(2,r),t._W(4,0),t._W(4,64),t._W(4,0),t._W(4,0),t}(i.Views[0])),f&&(o["!merges"]||[]).length&&Ql(a,"MergeCells",function(e){var t=kt(2+8*e.length)
t._W(2,e.length)
for(var r=0;r<e.length;++r)Qn(e[r],t)
return t}(o["!merges"])),f&&function(e,t){for(var r=0;r<t["!links"].length;++r){var n=t["!links"][r]
Ql(e,"HLink",Ea(n)),n[1].Tooltip&&Ql(e,"HLinkTooltip",Sa(n))}delete t["!links"]}(a,o),Ql(a,"CodeName",Un(v)),f&&function(e,t){var r=kt(19)
r._W(4,2151),r._W(4,0),r._W(4,0),r._W(2,3),r._W(1,1),r._W(4,0),Ql(e,"FeatHdr",r),(r=kt(39))._W(4,2152),r._W(4,0),r._W(4,0),r._W(2,3),r._W(1,0),r._W(4,0),r._W(2,1),r._W(4,4),r._W(2,0),Qn(Xt(t["!ref"]||"A1"),r),r._W(4,4),Ql(e,"Feat",r)}(a,o),Ql(a,"EOF"),a.end()}function ac(e,t,r){var n=xt(),a=(e||{}).Workbook||{},s=a.Sheets||[],o=a.WBProps||{},i=8==r.biff,l=5==r.biff;(Ql(n,2057,aa(0,5,r)),"xla"==r.bookType&&Ql(n,"Addin"),Ql(n,"InterfaceHdr",i?On(1200):null),Ql(n,"Mms",function(e,t){t||(t=kt(e))
for(var r=0;r<e;++r)t._W(1,0)
return t}(2)),l&&Ql(n,"ToolbarHdr"),l&&Ql(n,"ToolbarEnd"),Ql(n,"InterfaceEnd"),Ql(n,"WriteAccess",function(e,t){var r=!t||8==t.biff,n=kt(r?112:54)
for(n._W(8==t.biff?2:1,7),r&&n._W(1,0),n._W(4,859007059),n._W(4,5458548|(r?0:536870912));n.l<n.length;)n._W(1,r?0:32)
return n}(0,r)),Ql(n,"CodePage",On(i?1200:1252)),i&&Ql(n,"DSF",On(0)),i&&Ql(n,"Excel9File"),Ql(n,"RRTabId",function(e){for(var t=kt(2*e),r=0;r<e;++r)t._W(2,r+1)
return t}(e.SheetNames.length)),i&&e.vbaraw)&&(Ql(n,"ObProj"),Ql(n,"CodeName",Un(o.CodeName||"ThisWorkbook")))
Ql(n,"BuiltInFnGroupCount",On(17)),Ql(n,"WinProtect",In(!1)),Ql(n,"Protect",In(!1)),Ql(n,"Password",On(0)),i&&Ql(n,"Prot4Rev",In(!1)),i&&Ql(n,"Prot4RevPass",On(0)),Ql(n,"Window1",function(){var e=kt(18)
return e._W(2,0),e._W(2,0),e._W(2,29280),e._W(2,17600),e._W(2,56),e._W(2,0),e._W(2,0),e._W(2,1),e._W(2,500),e}()),Ql(n,"Backup",In(!1)),Ql(n,"HideObj",On(0)),Ql(n,"Date1904",In("true"==function(e){return e.Workbook&&e.Workbook.WBProps&&ke(e.Workbook.WBProps.date1904)?"true":"false"}(e))),Ql(n,"CalcPrecision",In(!0)),i&&Ql(n,"RefreshAll",In(!1)),Ql(n,"BookBool",On(0)),tc(n,0,r),function(e,t,r){t&&[[5,8],[23,26],[41,44],[50,392]].forEach(function(n){for(var a=n[0];a<=n[1];++a)null!=t[a]&&Ql(e,"Format",ia(a,t[a],r))})}(n,e.SSF,r),function(e,t){for(var r=0;r<16;++r)Ql(e,"XF",fa({numFmtId:0,style:!0},0,t))
t.cellXfs.forEach(function(r){Ql(e,"XF",fa(r,0,t))})}(n,r),i&&Ql(n,"UsesELFs",In(!1))
var c=n.end(),f=xt()
i&&Ql(f,"Country",function(e){return e||(e=kt(4)),e._W(2,1),e._W(2,1),e}()),Ql(f,"EOF")
var h=f.end(),u=xt(),d=0,p=0
for(p=0;p<e.SheetNames.length;++p)d+=(i?12:11)+(i?2:1)*e.SheetNames[p].length
var g=c.length+d+h.length
for(p=0;p<e.SheetNames.length;++p){Ql(u,"BoundSheet8",sa({pos:g,hs:(s[p]||{}).Hidden||0,dt:0,name:e.SheetNames[p]},r)),g+=t[p].length}var m=u.end()
if(d!=m.length)throw new Error("BS8 "+d+" != "+m.length)
var b=[]
return c.length&&b.push(c),m.length&&b.push(m),h.length&&b.push(h),Ye([b])}function sc(e,t){var r=t||{}
switch(r.biff||2){case 8:case 5:return function(e,t){var r=t||{},n=[]
e&&!e.SSF&&(e.SSF=B.get_table()),e&&e.SSF&&(k(B),B.load_table(e.SSF),r.revssf=W(e.SSF),r.revssf[e.SSF[65535]]=0,r.ssf=e.SSF),r.cellXfs=[],r.Strings=[],r.Strings.Count=0,r.Strings.Unique=0,fi(r.cellXfs,{},{revssf:{General:0}})
for(var a=0;a<e.SheetNames.length;++a)n[n.length]=nc(a,r,e)
return n.unshift(ac(e,n,r)),Ye([n])}(e,t)
case 4:case 3:case 2:return ec(e,t)}throw new Error("invalid type "+r.bookType+" for BIFF")}var oc=function(){function e(e,t){var r=t||{}
null!=u&&null==r.dense&&(r.dense=u)
var n=r.dense?[]:{},a=e.match(/<table/i)
if(!a)throw new Error("Invalid HTML: could not find <table>")
var s=e.match(/<\/table/i),o=a.index,i=s&&s.index||e.length,l=function(e,t,r){if(te||"string"==typeof t)return e.split(t)
for(var n=e.split(t),a=[n[0]],s=1;s<n.length;++s)a.push(r),a.push(n[s])
return a}(e.slice(o,i),/(:?<tr[^>]*>)/i,"<tr>"),c=-1,f=0,h=0,d=0,p={s:{r:1e7,c:1e7},e:{r:0,c:0}},g=[]
for(o=0;o<l.length;++o){var m=l[o].trim(),b=m.slice(0,3).toLowerCase()
if("<tr"!=b){if("<td"==b||"<th"==b){var v=m.split(/<\/t[dh]>/i)
for(i=0;i<v.length;++i){var C=v[i].trim()
if(C.match(/<t[dh]/i)){for(var E=C,S=0;"<"==E.charAt(0)&&(S=E.indexOf(">"))>-1;)E=E.slice(S+1)
var A=pe(C.slice(0,C.indexOf(">")))
d=A.colspan?+A.colspan:1,((h=+A.rowspan)>1||d>1)&&g.push({s:{r:c,c:f},e:{r:c+(h||1)-1,c:f+d-1}})
var _=A.t||""
if(E.length){if(E=Fe(E),p.s.r>c&&(p.s.r=c),p.e.r<c&&(p.e.r=c),p.s.c>f&&(p.s.c=f),p.e.c<f&&(p.e.c=f),E.length){var w={t:"s",v:E}
r.raw||!E.trim().length||"s"==_||("TRUE"===E?w={t:"b",v:!0}:"FALSE"===E?w={t:"b",v:!1}:isNaN(J(E))?isNaN(q(E).getDate())||(w={t:"d",v:K(E)},r.cellDates||(w={t:"n",v:V(w.v)}),w.z=r.dateNF||B._table[14]):w={t:"n",v:J(E)}),r.dense?(n[c]||(n[c]=[]),n[c][f]=w):n[Ht({r:c,c:f})]=w,f+=d}}else f+=d}}}}else{if(++c,r.sheetRows&&r.sheetRows<=c){--c
break}f=0}}return n["!ref"]=zt(p),n}function t(e,t,r,n){for(var a=e["!merges"]||[],s=[],o=t.s.c;o<=t.e.c;++o){for(var i=0,l=0,c=0;c<a.length;++c)if(!(a[c].s.r>r||a[c].s.c>o||a[c].e.r<r||a[c].e.c<o)){if(a[c].s.r<r||a[c].s.c<o){i=-1
break}i=a[c].e.r-a[c].s.r+1,l=a[c].e.c-a[c].s.c+1
break}if(!(i<0)){var f=Ht({r:r,c:o}),h=n.dense?(e[r]||[])[o]:e[f],u={}
i>1&&(u.rowspan=i),l>1&&(u.colspan=l)
var d=h&&null!=h.v&&(h.h||we(h.w||(jt(h),h.w)||""))||""
u.t=h&&h.t||"z",n.editable&&(d='<span contenteditable="true">'+d+"</span>"),u.id="sjs-"+f,s.push(Ve("td",d,u))}}return"<tr>"+s.join("")+"</tr>"}function r(e,t,r){return[].join("")+"<table"+(r&&r.id?' id="'+r.id+'"':"")+">"}var n='<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>',a="</body></html>"
return{to_workbook:function(t,r){return Kt(e(t,r),r)},to_sheet:e,_row:t,BEGIN:n,END:a,_preamble:r,from_sheet:function(e,s){var o=s||{},i=null!=o.header?o.header:n,l=null!=o.footer?o.footer:a,c=[i],f=Vt(e["!ref"])
o.dense=Array.isArray(e),c.push(r(0,0,o))
for(var h=f.s.r;h<=f.e.r;++h)c.push(t(e,f,h,o))
return c.push("</table>"+l),c.join("")}}}()
function ic(e,t){var r=t||{}
null!=u&&(r.dense=u)
for(var n,a,s,o,i=r.dense?[]:{},l=e.getElementsByTagName("tr"),c=r.sheetRows||1e7,f={s:{r:0,c:0},e:{r:0,c:0}},h=[],d=0,p=[],g=0,m=0;g<l.length&&m<c;++g){var b=l[g]
if(lc(b)){if(r.display)continue
p[m]={hidden:!0}}var v=b.children
for(n=a=0;n<v.length;++n){var C=v[n]
if(!r.display||!lc(C)){var E=Fe(C.innerHTML)
for(d=0;d<h.length;++d){var S=h[d]
S.s.c==a&&S.s.r<=m&&m<=S.e.r&&(a=S.e.c+1,d=-1)}o=+C.getAttribute("colspan")||1,((s=+C.getAttribute("rowspan"))>0||o>1)&&h.push({s:{r:m,c:a},e:{r:m+(s||1)-1,c:a+o-1}})
var A={t:"s",v:E},_=C.getAttribute("t")||""
null!=E&&(0==E.length?A.t=_||"z":r.raw||0==E.trim().length||"s"==_||("TRUE"===E?A={t:"b",v:!0}:"FALSE"===E?A={t:"b",v:!1}:isNaN(J(E))?isNaN(q(E).getDate())||(A={t:"d",v:K(E)},r.cellDates||(A={t:"n",v:V(A.v)}),A.z=r.dateNF||B._table[14]):A={t:"n",v:J(E)})),r.dense?(i[m]||(i[m]=[]),i[m][a]=A):i[Ht({c:a,r:m})]=A,f.e.c<a&&(f.e.c=a),a+=o}}++m}return h.length&&(i["!merges"]=h),p.length&&(i["!rows"]=p),f.e.r=m-1,i["!ref"]=zt(f),m>=c&&(i["!fullref"]=zt((f.e.r=l.length-g+m-1,f))),i}function lc(e){var t="",r=function(e){return e.ownerDocument.defaultView&&"function"==typeof e.ownerDocument.defaultView.getComputedStyle?e.ownerDocument.defaultView.getComputedStyle:"function"==typeof getComputedStyle?getComputedStyle:null}(e)
return r&&(t=r(e).getPropertyValue("display")),t||(t=e.style.display),"none"===t}var cc=function(){var e=function(e){return ve(e.replace(/[\t\r\n]/g," ").trim().replace(/ +/g," ").replace(/<text:s\/>/g," ").replace(/<text:s text:c="(\d+)"\/>/g,function(e,t){return Array(parseInt(t,10)+1).join(" ")}).replace(/<text:tab[^>]*\/>/g,"\t").replace(/<text:line-break\/>/g,"\n").replace(/<[^>]*>/g,""))},t={day:["d","dd"],month:["m","mm"],year:["y","yy"],hours:["h","hh"],minutes:["m","mm"],seconds:["s","ss"],"am-pm":["A/P","AM/PM"],"day-of-week":["ddd","dddd"],era:["e","ee"],quarter:["\\Qm",'m\\"th quarter"']}
return function(r,n){var a=n||{}
null!=u&&null==a.dense&&(a.dense=u)
var s,o,i,l,c,f,h=xl(r),d=[],p={name:""},g="",m=0,b={},v=[],C=a.dense?[]:{},E={value:""},S="",A=0,_=-1,w=-1,R={s:{r:1e6,c:1e7},e:{r:0,c:0}},B=0,k={},T=[],x={},y=[],I=1,D=1,O=[],F={Names:[]},P={},N=["",""],L=[],M={},W="",U=0,H=!1,z=!1,G=0
for(yl.lastIndex=0,h=h.replace(/<!--([\s\S]*?)-->/gm,"").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm,"");c=yl.exec(h);)switch(c[3]=c[3].replace(/_.*$/,"")){case"table":case"工作表":"/"===c[1]?(R.e.c>=R.s.c&&R.e.r>=R.s.r&&(C["!ref"]=zt(R)),a.sheetRows>0&&a.sheetRows<=R.e.r&&(C["!fullref"]=C["!ref"],R.e.r=a.sheetRows-1,C["!ref"]=zt(R)),T.length&&(C["!merges"]=T),y.length&&(C["!rows"]=y),i.name=i["名称"]||i.name,"undefined"!=typeof JSON&&JSON.stringify(i),v.push(i.name),b[i.name]=C,z=!1):"/"!==c[0].charAt(c[0].length-2)&&(i=pe(c[0],!1),_=w=-1,R.s.r=R.s.c=1e7,R.e.r=R.e.c=0,C=a.dense?[]:{},T=[],y=[],z=!0)
break
case"table-row-group":"/"===c[1]?--B:++B
break
case"table-row":case"行":if("/"===c[1]){_+=I,I=1
break}if((l=pe(c[0],!1))["行号"]?_=l["行号"]-1:-1==_&&(_=0),(I=+l["number-rows-repeated"]||1)<10)for(G=0;G<I;++G)B>0&&(y[_+G]={level:B})
w=-1
break
case"covered-table-cell":++w,a.sheetStubs&&(a.dense?(C[_]||(C[_]=[]),C[_][w]={t:"z"}):C[Ht({r:_,c:w})]={t:"z"})
break
case"table-cell":case"数据":if("/"===c[0].charAt(c[0].length-2))++w,E=pe(c[0],!1),D=parseInt(E["number-columns-repeated"]||"1",10),f={t:"z",v:null},E.formula&&0!=a.cellFormula&&(f.f=ei(ve(E.formula))),"string"==(E["数据类型"]||E["value-type"])&&(f.t="s",f.v=ve(E["string-value"]||""),a.dense?(C[_]||(C[_]=[]),C[_][w]=f):C[Ht({r:_,c:w})]=f),w+=D-1
else if("/"!==c[1]){D=1
var j=I?_+I-1:_
if(++w>R.e.c&&(R.e.c=w),w<R.s.c&&(R.s.c=w),_<R.s.r&&(R.s.r=_),j>R.e.r&&(R.e.r=j),L=[],M={},f={t:(E=pe(c[0],!1))["数据类型"]||E["value-type"],v:null},a.cellFormula)if(E.formula&&(E.formula=ve(E.formula)),E["number-matrix-columns-spanned"]&&E["number-matrix-rows-spanned"]&&(x={s:{r:_,c:w},e:{r:_+(parseInt(E["number-matrix-rows-spanned"],10)||0)-1,c:w+(parseInt(E["number-matrix-columns-spanned"],10)||0)-1}},f.F=zt(x),O.push([x,f.F])),E.formula)f.f=ei(E.formula)
else for(G=0;G<O.length;++G)_>=O[G][0].s.r&&_<=O[G][0].e.r&&w>=O[G][0].s.c&&w<=O[G][0].e.c&&(f.F=O[G][1])
switch((E["number-columns-spanned"]||E["number-rows-spanned"])&&(x={s:{r:_,c:w},e:{r:_+(parseInt(E["number-rows-spanned"],10)||0)-1,c:w+(parseInt(E["number-columns-spanned"],10)||0)-1}},T.push(x)),E["number-columns-repeated"]&&(D=parseInt(E["number-columns-repeated"],10)),f.t){case"boolean":f.t="b",f.v=ke(E["boolean-value"])
break
case"float":case"percentage":case"currency":f.t="n",f.v=parseFloat(E.value)
break
case"date":f.t="d",f.v=K(E["date-value"]),a.cellDates||(f.t="n",f.v=V(f.v)),f.z="m/d/yy"
break
case"time":f.t="n",f.v=X(E["time-value"])/86400
break
case"number":f.t="n",f.v=parseFloat(E["数据数值"])
break
default:if("string"!==f.t&&"text"!==f.t&&f.t)throw new Error("Unsupported value type "+f.t)
f.t="s",null!=E["string-value"]&&(S=ve(E["string-value"]))}}else{if(H=!1,"s"===f.t&&(f.v=S||"",H=0==A),P.Target&&(f.l=P),L.length>0&&(f.c=L,L=[]),S&&!1!==a.cellText&&(f.w=S),(!H||a.sheetStubs)&&!(a.sheetRows&&a.sheetRows<=_))for(var Y=0;Y<I;++Y){if(D=parseInt(E["number-columns-repeated"]||"1",10),a.dense)for(C[_+Y]||(C[_+Y]=[]),C[_+Y][w]=0==Y?f:Z(f);--D>0;)C[_+Y][w+D]=Z(f)
else for(C[Ht({r:_+Y,c:w})]=f;--D>0;)C[Ht({r:_+Y,c:w+D})]=Z(f)
R.e.c<=w&&(R.e.c=w)}w+=(D=parseInt(E["number-columns-repeated"]||"1",10))-1,D=0,f={},S=""}P={}
break
case"document":case"document-content":case"电子表格文档":case"spreadsheet":case"主体":case"scripts":case"styles":case"font-face-decls":if("/"===c[1]){if((s=d.pop())[0]!==c[3])throw"Bad state: "+s}else"/"!==c[0].charAt(c[0].length-2)&&d.push([c[3],!0])
break
case"annotation":if("/"===c[1]){if((s=d.pop())[0]!==c[3])throw"Bad state: "+s
M.t=S,M.a=W,L.push(M)}else"/"!==c[0].charAt(c[0].length-2)&&d.push([c[3],!1])
W="",U=0,S="",A=0
break
case"creator":"/"===c[1]?W=h.slice(U,c.index):U=c.index+c[0].length
break
case"meta":case"元数据":case"settings":case"config-item-set":case"config-item-map-indexed":case"config-item-map-entry":case"config-item-map-named":case"shapes":case"frame":case"text-box":case"image":case"data-pilot-tables":case"list-style":case"form":case"dde-links":case"event-listeners":case"chart":if("/"===c[1]){if((s=d.pop())[0]!==c[3])throw"Bad state: "+s}else"/"!==c[0].charAt(c[0].length-2)&&d.push([c[3],!1])
S="",A=0
break
case"scientific-number":case"currency-symbol":case"currency-style":break
case"number-style":case"percentage-style":case"date-style":case"time-style":if("/"===c[1]){if(k[p.name]=g,(s=d.pop())[0]!==c[3])throw"Bad state: "+s}else"/"!==c[0].charAt(c[0].length-2)&&(g="",p=pe(c[0],!1),d.push([c[3],!0]))
break
case"script":case"libraries":case"automatic-styles":case"master-styles":break
case"default-style":case"page-layout":case"style":case"map":case"font-face":case"paragraph-properties":case"table-properties":case"table-column-properties":case"table-row-properties":case"table-cell-properties":break
case"number":switch(d[d.length-1][0]){case"time-style":case"date-style":o=pe(c[0],!1),g+=t[c[3]]["long"===o.style?1:0]}break
case"fraction":break
case"day":case"month":case"year":case"era":case"day-of-week":case"week-of-year":case"quarter":case"hours":case"minutes":case"seconds":case"am-pm":switch(d[d.length-1][0]){case"time-style":case"date-style":o=pe(c[0],!1),g+=t[c[3]]["long"===o.style?1:0]}break
case"boolean-style":case"boolean":case"text-style":break
case"text":if("/>"===c[0].slice(-2))break
if("/"===c[1])switch(d[d.length-1][0]){case"number-style":case"date-style":case"time-style":g+=h.slice(m,c.index)}else m=c.index+c[0].length
break
case"named-range":N=ri((o=pe(c[0],!1))["cell-range-address"])
var $={Name:o.name,Ref:N[0]+"!"+N[1]}
z&&($.Sheet=v.length),F.Names.push($)
break
case"text-content":case"text-properties":case"embedded-text":break
case"body":case"电子表格":case"forms":case"table-column":case"table-header-rows":case"table-rows":case"table-column-group":case"table-header-columns":case"table-columns":case"null-date":case"graphic-properties":case"calculation-settings":case"named-expressions":case"label-range":case"label-ranges":case"named-expression":case"sort":case"sort-by":case"sort-groups":case"tab":case"line-break":case"span":break
case"p":case"文本串":"/"!==c[1]||E&&E["string-value"]?(pe(c[0],!1),A=c.index+c[0].length):S=(S.length>0?S+"\n":"")+e(h.slice(A,c.index))
break
case"s":break
case"database-range":if("/"===c[1])break
try{b[(N=ri(pe(c[0])["target-range-address"]))[0]]["!autofilter"]={ref:N[1]}}catch(J){}break
case"date":case"object":break
case"title":case"标题":case"desc":case"binary-data":case"table-source":case"scenario":case"iteration":case"content-validations":case"content-validation":case"help-message":case"error-message":case"database-ranges":case"filter":case"filter-and":case"filter-or":case"filter-condition":case"list-level-style-bullet":case"list-level-style-number":case"list-level-properties":break
case"sender-firstname":case"sender-lastname":case"sender-initials":case"sender-title":case"sender-position":case"sender-email":case"sender-phone-private":case"sender-fax":case"sender-company":case"sender-phone-work":case"sender-street":case"sender-city":case"sender-postal-code":case"sender-country":case"sender-state-or-province":case"author-name":case"author-initials":case"chapter":case"file-name":case"template-name":case"sheet-name":case"event-listener":break
case"initial-creator":case"creation-date":case"print-date":case"generator":case"document-statistic":case"user-defined":case"editing-duration":case"editing-cycles":case"config-item":case"page-number":case"page-count":case"time":case"cell-range-source":case"detective":case"operation":case"highlighted-range":break
case"data-pilot-table":case"source-cell-range":case"source-service":case"data-pilot-field":case"data-pilot-level":case"data-pilot-subtotals":case"data-pilot-subtotal":case"data-pilot-members":case"data-pilot-member":case"data-pilot-display-info":case"data-pilot-sort-info":case"data-pilot-layout-info":case"data-pilot-field-reference":case"data-pilot-groups":case"data-pilot-group":case"data-pilot-group-member":case"rect":break
case"dde-connection-decls":case"dde-connection-decl":case"dde-link":case"dde-source":case"properties":case"property":break
case"a":if("/"!==c[1]){if(!(P=pe(c[0],!1)).href)break
P.Target=P.href,delete P.href,"#"==P.Target.charAt(0)&&P.Target.indexOf(".")>-1&&(N=ri(P.Target.slice(1)),P.Target="#"+N[0]+"!"+N[1])}break
case"table-protection":case"data-pilot-grand-total":case"office-document-common-attrs":break
default:switch(c[2]){case"dc:":case"calcext:":case"loext:":case"ooo:":case"chartooo:":case"draw:":case"style:":case"chart:":case"form:":case"uof:":case"表:":case"字:":break
default:if(a.WTF)throw new Error(c)}}var Q={Sheets:b,SheetNames:v,Workbook:F}
return a.bookSheets&&delete Q.Sheets,Q}}()
function fc(e,t){t=t||{}
var r=!!ae(e,"objectdata")
r&&function(e,t){for(var r,n,a=xl(e);r=yl.exec(a);)switch(r[3]){case"manifest":break
case"file-entry":if("/"==(n=pe(r[0],!1)).path&&n.type!==jr)throw new Error("This OpenDocument is not a spreadsheet")
break
case"encryption-data":case"algorithm":case"start-key-generation":case"key-derivation":throw new Error("Unsupported ODS Encryption")
default:if(t&&t.WTF)throw r}}(oe(e,"META-INF/manifest.xml"),t)
var n=ie(e,"content.xml")
if(!n)throw new Error("Missing content.xml in "+(r?"ODS":"UOF")+" file")
var a=cc(r?n:Te(n),t)
return ae(e,"meta.xml")&&(a.Props=Jr(oe(e,"meta.xml"))),a}function hc(e,t){return cc(e,t)}var uc=function(){var e="<office:document-styles "+He({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","office:version":"1.2"})+"></office:document-styles>"
return function(){return ce+e}}(),dc=function(){var e=function(e){return Se(e).replace(/  +/g,function(e){return'<text:s text:c="'+e.length+'"/>'}).replace(/\t/g,"<text:tab/>").replace(/\n/g,"<text:line-break/>").replace(/^ /,"<text:s/>").replace(/ $/,"<text:s/>")},t="          <table:table-cell />\n",r=function(r,n,a){var s=[]
s.push('      <table:table table:name="'+Se(n.SheetNames[a])+'">\n')
var o=0,i=0,l=Vt(r["!ref"]),c=r["!merges"]||[],f=0,h=Array.isArray(r)
for(o=0;o<l.s.r;++o)s.push("        <table:table-row></table:table-row>\n")
for(;o<=l.e.r;++o){for(s.push("        <table:table-row>\n"),i=0;i<l.s.c;++i)s.push(t)
for(;i<=l.e.c;++i){var u=!1,d={},p=""
for(f=0;f!=c.length;++f)if(!(c[f].s.c>i||c[f].s.r>o||c[f].e.c<i||c[f].e.r<o)){c[f].s.c==i&&c[f].s.r==o||(u=!0),d["table:number-columns-spanned"]=c[f].e.c-c[f].s.c+1,d["table:number-rows-spanned"]=c[f].e.r-c[f].s.r+1
break}if(u)s.push("          <table:covered-table-cell/>\n")
else{var g=Ht({r:o,c:i}),m=h?(r[o]||[])[i]:r[g]
if(m&&m.f&&(d["table:formula"]=Se(ti(m.f)),m.F&&m.F.slice(0,g.length)==g)){var b=Vt(m.F)
d["table:number-matrix-columns-spanned"]=b.e.c-b.s.c+1,d["table:number-matrix-rows-spanned"]=b.e.r-b.s.r+1}if(m){switch(m.t){case"b":p=m.v?"TRUE":"FALSE",d["office:value-type"]="boolean",d["office:boolean-value"]=m.v?"true":"false"
break
case"n":p=m.w||String(m.v||0),d["office:value-type"]="float",d["office:value"]=m.v||0
break
case"s":case"str":p=m.v,d["office:value-type"]="string"
break
case"d":p=m.w||K(m.v).toISOString(),d["office:value-type"]="date",d["office:date-value"]=K(m.v).toISOString(),d["table:style-name"]="ce1"
break
default:s.push(t)
continue}var v=e(p)
if(m.l&&m.l.Target){var C=m.l.Target
v=Ve("text:a",v,{"xlink:href":C="#"==C.charAt(0)?"#"+ni(C.slice(1)):C})}s.push("          "+Ve("table:table-cell",Ve("text:p",v,{}),d)+"\n")}else s.push(t)}}s.push("        </table:table-row>\n")}return s.push("      </table:table>\n"),s.join("")}
return function(e,t){var n=[ce],a=He({"xmlns:office":"urn:oasis:names:tc:opendocument:xmlns:office:1.0","xmlns:table":"urn:oasis:names:tc:opendocument:xmlns:table:1.0","xmlns:style":"urn:oasis:names:tc:opendocument:xmlns:style:1.0","xmlns:text":"urn:oasis:names:tc:opendocument:xmlns:text:1.0","xmlns:draw":"urn:oasis:names:tc:opendocument:xmlns:drawing:1.0","xmlns:fo":"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:meta":"urn:oasis:names:tc:opendocument:xmlns:meta:1.0","xmlns:number":"urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0","xmlns:presentation":"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0","xmlns:svg":"urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0","xmlns:chart":"urn:oasis:names:tc:opendocument:xmlns:chart:1.0","xmlns:dr3d":"urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0","xmlns:math":"http://www.w3.org/1998/Math/MathML","xmlns:form":"urn:oasis:names:tc:opendocument:xmlns:form:1.0","xmlns:script":"urn:oasis:names:tc:opendocument:xmlns:script:1.0","xmlns:ooo":"http://openoffice.org/2004/office","xmlns:ooow":"http://openoffice.org/2004/writer","xmlns:oooc":"http://openoffice.org/2004/calc","xmlns:dom":"http://www.w3.org/2001/xml-events","xmlns:xforms":"http://www.w3.org/2002/xforms","xmlns:xsd":"http://www.w3.org/2001/XMLSchema","xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance","xmlns:sheet":"urn:oasis:names:tc:opendocument:sh33tjs:1.0","xmlns:rpt":"http://openoffice.org/2005/report","xmlns:of":"urn:oasis:names:tc:opendocument:xmlns:of:1.2","xmlns:xhtml":"http://www.w3.org/1999/xhtml","xmlns:grddl":"http://www.w3.org/2003/g/data-view#","xmlns:tableooo":"http://openoffice.org/2009/table","xmlns:drawooo":"http://openoffice.org/2010/draw","xmlns:calcext":"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0","xmlns:loext":"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0","xmlns:field":"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0","xmlns:formx":"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0","xmlns:css3t":"http://www.w3.org/TR/css3-text/","office:version":"1.2"}),s=He({"xmlns:config":"urn:oasis:names:tc:opendocument:xmlns:config:1.0","office:mimetype":"application/vnd.oasis.opendocument.spreadsheet"})
"fods"==t.bookType?n.push("<office:document"+a+s+">\n"):n.push("<office:document-content"+a+">\n"),function(e){e.push(" <office:automatic-styles>\n"),e.push('  <number:date-style style:name="N37" number:automatic-order="true">\n'),e.push('   <number:month number:style="long"/>\n'),e.push("   <number:text>/</number:text>\n"),e.push('   <number:day number:style="long"/>\n'),e.push("   <number:text>/</number:text>\n"),e.push("   <number:year/>\n"),e.push("  </number:date-style>\n"),e.push('  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'),e.push(" </office:automatic-styles>\n")}(n),n.push("  <office:body>\n"),n.push("    <office:spreadsheet>\n")
for(var o=0;o!=e.SheetNames.length;++o)n.push(r(e.Sheets[e.SheetNames[o]],e,o))
return n.push("    </office:spreadsheet>\n"),n.push("  </office:body>\n"),"fods"==t.bookType?n.push("</office:document>"):n.push("</office:document-content>"),n.join("")}}()
function pc(e,t){if("fods"==t.bookType)return dc(e,t)
var r=new ee,n="",a=[],s=[]
return n="mimetype",r.file(n,"application/vnd.oasis.opendocument.spreadsheet"),n="content.xml",r.file(n,dc(e,t)),a.push([n,"text/xml"]),s.push([n,"ContentFile"]),n="styles.xml",r.file(n,uc(e,t)),a.push([n,"text/xml"]),s.push([n,"StylesFile"]),n="meta.xml",r.file(n,$r()),a.push([n,"text/xml"]),s.push([n,"MetadataFile"]),n="manifest.rdf",r.file(n,function(e){var t=[ce]
t.push('<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n')
for(var r=0;r!=e.length;++r)t.push(Kr(e[r][0],e[r][1])),t.push(Yr("",e[r][0]))
return t.push(Kr("","Document","pkg")),t.push("</rdf:RDF>"),t.join("")}(s)),a.push([n,"application/rdf+xml"]),n="META-INF/manifest.xml",r.file(n,function(e){var t=[ce]
t.push('<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'),t.push('  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n')
for(var r=0;r<e.length;++r)t.push('  <manifest:file-entry manifest:full-path="'+e[r][0]+'" manifest:media-type="'+e[r][1]+'"/>\n')
return t.push("</manifest:manifest>"),t.join("")}(a)),r}function gc(e){return function(t,r){var n=function(e,t){if(!t)return 0
var r=e.SheetNames.indexOf(t)
if(-1==r)throw new Error("Sheet not found: "+t)
return r}(t,r.sheet)
return e.from_sheet(t.Sheets[t.SheetNames[n]],r,t)}}var mc=gc(oc),bc=gc({from_sheet:$c}),vc=gc(ka),Cc=gc(Ta),Ec=gc(ya),Sc=gc(rs),Ac=gc({from_sheet:Zc}),_c=gc(Ba),wc=gc(xa)
function Rc(e){return function(t){for(var r=0;r!=e.length;++r){var n=e[r]
void 0===t[n[0]]&&(t[n[0]]=n[1]),"n"===n[2]&&(t[n[0]]=Number(t[n[0]]))}}}var Bc=Rc([["cellNF",!1],["cellHTML",!0],["cellFormula",!0],["cellStyles",!1],["cellText",!0],["cellDates",!1],["sheetStubs",!1],["sheetRows",0,"n"],["bookDeps",!1],["bookSheets",!1],["bookProps",!1],["bookFiles",!1],["bookVBA",!1],["password",""],["WTF",!1]]),kc=Rc([["cellDates",!1],["bookSST",!1],["bookType","xlsx"],["compression",!1],["WTF",!1]])
function Tc(e){return Ur.WS.indexOf(e)>-1?"sheet":Ur.CS&&e==Ur.CS?"chart":Ur.DS&&e==Ur.DS?"dialog":Ur.MS&&e==Ur.MS?"macro":e&&e.length?e:"sheet"}function xc(e,t,r,n,a,s,o,i,l,c,f,h){try{s[n]=Vr(ie(e,r,!0),t)
var u,d=oe(e,t)
switch(i){case"sheet":u=ll(d,t,a,l,s[n],c,f,h)
break
case"chart":if(!(u=cl(d,t,a,l,s[n],c))||!u["!chart"])break
var p=le(u["!chart"].Target,t),m=Hr(p),b=le(function(e,t){if(!e)return"??"
var r=(e.match(/<c:chart [^>]*r:id="([^"]*)"/)||["",""])[1]
return t["!id"][r].Target}(ie(e,p,!0),Vr(ie(e,m,!0),p)),p),v=Hr(b)
u=Xi(ie(e,b,!0),0,0,Vr(ie(e,v,!0),b),0,u)
break
case"macro":u=function(e,t,r,n,a,s,o,i){return t.slice(-4),{"!type":"macro"}}(0,t,0,0,s[n])
break
case"dialog":u=function(e,t,r,n,a,s,o,i){return t.slice(-4),{"!type":"dialog"}}(0,t,0,0,s[n])}o[n]=u}catch(g){if(l.WTF)throw g}}function yc(e){return"/"==e.charAt(0)?e.slice(1):e}function Ic(e,t){if(k(B),Bc(t=t||{}),ae(e,"META-INF/manifest.xml"))return fc(e,t)
if(ae(e,"objectdata.xml"))return fc(e,t)
if(ae(e,"Index/Document.iwa"))throw new Error("Unsupported NUMBERS file")
var r,n,a=function(e){for(var t=N(e.files),r=[],n=0;n<t.length;++n)"/"!=t[n].slice(-1)&&r.push(t[n])
return r.sort()}(e),s=function(e){var t={workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],TODO:[],xmlns:""}
if(!e||!e.match)return t
var r={}
if((e.match(he)||[]).forEach(function(e){var n=pe(e)
switch(n[0].replace(ue,"<")){case"<?xml":break
case"<Types":t.xmlns=n["xmlns"+(n[0].match(/<(\w+):/)||["",""])[1]]
break
case"<Default":r[n.Extension]=n.ContentType
break
case"<Override":void 0!==t[Pr[n.ContentType]]&&t[Pr[n.ContentType]].push(n.PartName)}}),t.xmlns!==Xe.CT)throw new Error("Unknown Namespace: "+t.xmlns)
return t.calcchain=t.calcchains.length>0?t.calcchains[0]:"",t.sst=t.strs.length>0?t.strs[0]:"",t.style=t.styles.length>0?t.styles[0]:"",t.defaults=r,delete t.calcchains,t}(ie(e,"[Content_Types].xml")),o=!1
if(0===s.workbooks.length&&oe(e,n="xl/workbook.xml",!0)&&s.workbooks.push(n),0===s.workbooks.length){if(!oe(e,n="xl/workbook.bin",!0))throw new Error("Could not find workbook")
s.workbooks.push(n),o=!0}"bin"==s.workbooks[0].slice(-3)&&(o=!0)
var i={},c={}
if(!t.bookSheets&&!t.bookProps){if(ai=[],s.sst)try{ai=hl(oe(e,yc(s.sst)),s.sst,t)}catch(l){if(t.WTF)throw l}t.cellStyles&&s.themes.length&&(i=function(e,t,r){return Xs(e,r)}(ie(e,s.themes[0].replace(/^\//,""),!0)||"",s.themes[0],t)),s.style&&(c=fl(oe(e,yc(s.style)),s.style,i,t))}s.links.map(function(r){return pl(oe(e,yc(r)),r,t)})
var f=il(oe(e,yc(s.workbooks[0])),s.workbooks[0],t),h={},u=""
s.coreprops.length&&((u=oe(e,yc(s.coreprops[0]),!0))&&(h=Jr(u)),0!==s.extprops.length&&(u=oe(e,yc(s.extprops[0]),!0))&&function(e,t,r){var n={}
t||(t={}),e=Te(e),tn.forEach(function(r){switch(r[2]){case"string":t[r[1]]=(e.match(Oe(r[0]))||[])[1]
break
case"bool":t[r[1]]="true"===(e.match(Oe(r[0]))||[])[1]
break
case"raw":var a=e.match(new RegExp("<"+r[0]+"[^>]*>([\\s\\S]*?)</"+r[0]+">"))
a&&a.length>0&&(n[r[1]]=a[1])}}),n.HeadingPairs&&n.TitlesOfParts&&rn(n.HeadingPairs,n.TitlesOfParts,t,r)}(u,h,t))
var d={}
t.bookSheets&&!t.bookProps||0!==s.custprops.length&&(u=ie(e,yc(s.custprops[0]),!0))&&(d=function(e,t){var r={},n="",a=e.match(an)
if(a)for(var s=0;s!=a.length;++s){var o=a[s],i=pe(o)
switch(i[0]){case"<?xml":case"<Properties":break
case"<property":n=i.name
break
case"</property>":n=null
break
default:if(0===o.indexOf("<vt:")){var l=o.split(">"),c=l[0].slice(4),f=l[1]
switch(c){case"lpstr":case"bstr":case"lpwstr":r[n]=ve(f)
break
case"bool":r[n]=ke(f)
break
case"i1":case"i2":case"i4":case"i8":case"int":case"uint":r[n]=parseInt(f,10)
break
case"r4":case"r8":case"decimal":r[n]=parseFloat(f)
break
case"filetime":case"date":r[n]=K(f)
break
case"cy":case"error":r[n]=ve(f)
break
default:if("/"==c.slice(-1))break
t.WTF&&"undefined"!=typeof console&&console.warn("Unexpected",o,c,l)}}else if("</"===o.slice(0,2));else if(t.WTF)throw new Error(o)}}return r}(u,t))
var p={}
if((t.bookSheets||t.bookProps)&&(f.Sheets?r=f.Sheets.map(function(e){return e.name}):h.Worksheets&&h.SheetNames.length>0&&(r=h.SheetNames),t.bookProps&&(p.Props=h,p.Custprops=d),t.bookSheets&&void 0!==r&&(p.SheetNames=r),t.bookSheets?p.SheetNames:t.bookProps))return p
r={}
var g={}
t.bookDeps&&s.calcchain&&(g=dl(oe(e,yc(s.calcchain)),s.calcchain))
var m,b,v=0,C={},E=f.Sheets
h.Worksheets=E.length,h.SheetNames=[]
for(var S=0;S!=E.length;++S)h.SheetNames[S]=E[S].name
var A=o?"bin":"xml",_=s.workbooks[0].lastIndexOf("/"),w=(s.workbooks[0].slice(0,_+1)+"_rels/"+s.workbooks[0].slice(_+1)+".rels").replace(/^\//,"")
ae(e,w)||(w="xl/_rels/workbook."+A+".rels")
var R=Vr(ie(e,w,!0),w)
R&&(R=function(e,t){if(!e)return 0
try{e=t.map(function(t){return t.id||(t.id=t.strRelID),[t.name,e["!id"][t.id].Target,Tc(e["!id"][t.id].Type)]})}catch(a){return null}return e&&0!==e.length?e:null}(R,f.Sheets))
var T=oe(e,"xl/worksheets/sheet.xml",!0)?1:0
for(v=0;v!=h.Worksheets;++v){var x="sheet"
R&&R[v]?(m="xl/"+R[v][1].replace(/[\/]?xl\//,""),ae(e,m)||(m=R[v][1]),ae(e,m)||(m=w.replace(/_rels\/.*$/,"")+R[v][1]),x=R[v][2]):m=(m="xl/worksheets/sheet"+(v+1-T)+"."+A).replace(/sheet0\./,"sheet."),b=m.replace(/^(.*)(\/)([^\/]*)$/,"$1/_rels/$3.rels"),xc(e,m,b,h.SheetNames[v],v,C,r,x,t,f,i,c)}return s.comments&&function(e,t,r,n,a){for(var s=0;s!=t.length;++s){var o=t[s],i=ul(oe(e,o.replace(/^\//,""),!0),o,a)
if(i&&i.length)for(var l=N(r),c=0;c!=l.length;++c){var f=l[c],h=n[f]
h&&h[o]&&Qs(0,r[f],i)}}}(e,s.comments,r,C,t),p={Directory:s,Workbook:f,Props:h,Custprops:d,Deps:g,Sheets:r,SheetNames:h.SheetNames,Strings:ai,Styles:c,Themes:i,SSF:B.get_table()},t.bookFiles&&(p.keys=a,p.files=e.files),t.bookVBA&&(s.vba.length>0?p.vbaraw=oe(e,yc(s.vba[0]),!0):s.defaults&&s.defaults.bin===to&&(p.vbaraw=oe(e,"xl/vbaProject.bin",!0))),p}function Dc(e,t){var r=t||{},n="Workbook",a=O.find(e,n)
try{if(n="/!DataSpaces/Version",!(a=O.find(e,n))||!a.content)throw new Error("ECMA-376 Encrypted file missing "+n)
if(function(e){var t={}
t.id=e._R(0,"lpp4"),t.R=Xa(e,4),t.U=Xa(e,4),t.W=Xa(e,4)}(a.content),n="/!DataSpaces/DataSpaceMap",!(a=O.find(e,n))||!a.content)throw new Error("ECMA-376 Encrypted file missing "+n)
var s=function(e){var t=[]
e.l+=4
for(var r=e._R(4);r-- >0;)t.push(Ga(e))
return t}(a.content)
if(1!==s.length||1!==s[0].comps.length||0!==s[0].comps[0].t||"StrongEncryptionDataSpace"!==s[0].name||"EncryptedPackage"!==s[0].comps[0].v)throw new Error("ECMA-376 Encrypted file bad "+n)
if(n="/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace",!(a=O.find(e,n))||!a.content)throw new Error("ECMA-376 Encrypted file missing "+n)
var o=function(e){var t=[]
e.l+=4
for(var r=e._R(4);r-- >0;)t.push(e._R(0,"lpp4"))
return t}(a.content)
if(1!=o.length||"StrongEncryptionTransform"!=o[0])throw new Error("ECMA-376 Encrypted file bad "+n)
if(n="/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary",!(a=O.find(e,n))||!a.content)throw new Error("ECMA-376 Encrypted file missing "+n)
ja(a.content)}catch(l){}if(n="/EncryptionInfo",!(a=O.find(e,n))||!a.content)throw new Error("ECMA-376 Encrypted file missing "+n)
var i=function(e){var t=Xa(e)
switch(t.Minor){case 2:return[t.Minor,$a(e)]
case 3:return[t.Minor,Za()]
case 4:return[t.Minor,Qa(e)]}throw new Error("ECMA-376 Encrypted file unrecognized Version: "+t.Minor)}(a.content)
if(n="/EncryptedPackage",!(a=O.find(e,n))||!a.content)throw new Error("ECMA-376 Encrypted file missing "+n)
if(4==i[0]&&"undefined"!=typeof decrypt_agile)return decrypt_agile(i[1],a.content,r.password||"",r)
if(2==i[0]&&"undefined"!=typeof decrypt_std76)return decrypt_std76(i[1],a.content,r.password||"",r)
throw new Error("File is password-protected")}function Oc(e,t){if($s=1024,"ods"==t.bookType)return pc(e,t)
e&&!e.SSF&&(e.SSF=B.get_table()),e&&e.SSF&&(k(B),B.load_table(e.SSF),t.revssf=W(e.SSF),t.revssf[e.SSF[65535]]=0,t.ssf=e.SSF),t.rels={},t.wbrels={},t.Strings=[],t.Strings.Count=0,t.Strings.Unique=0,oi?t.revStrings=new Map:(t.revStrings={},t.revStrings.foo=[],delete t.revStrings.foo)
var r="xlsb"==t.bookType?"bin":"xml",n=ro.indexOf(t.bookType)>-1,a={workbooks:[],sheets:[],charts:[],dialogs:[],macros:[],rels:[],strs:[],comments:[],links:[],coreprops:[],extprops:[],custprops:[],themes:[],styles:[],calcchains:[],vba:[],drawings:[],TODO:[],xmlns:""}
kc(t=t||{})
var s=new ee,o="",i=0
if(t.cellXfs=[],fi(t.cellXfs,{},{revssf:{General:0}}),e.Props||(e.Props={}),o="docProps/core.xml",s.file(o,function(e,t){var r=t||{},n=[ce,qr],a={}
if(!e&&!r.Props)return n.join("")
e&&(null!=e.CreatedDate&&en("dcterms:created","string"==typeof e.CreatedDate?e.CreatedDate:ze(e.CreatedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a),null!=e.ModifiedDate&&en("dcterms:modified","string"==typeof e.ModifiedDate?e.ModifiedDate:ze(e.ModifiedDate,r.WTF),{"xsi:type":"dcterms:W3CDTF"},n,a))
for(var s=0;s!=Zr.length;++s){var o=Zr[s],i=r.Props&&null!=r.Props[o[1]]?r.Props[o[1]]:e?e[o[1]]:null
!0===i?i="1":!1===i?i="0":"number"==typeof i&&(i=String(i)),null!=i&&en(o[0],i,null,n,a)}return n.length>2&&(n[n.length]="</cp:coreProperties>",n[1]=n[1].replace("/>",">")),n.join("")}(e.Props,t)),a.coreprops.push(o),Gr(t.rels,2,o,Ur.CORE_PROPS),o="docProps/app.xml",e.Props&&e.Props.SheetNames);else if(e.Workbook&&e.Workbook.Sheets){for(var l=[],c=0;c<e.SheetNames.length;++c)2!=(e.Workbook.Sheets[c]||{}).Hidden&&l.push(e.SheetNames[c])
e.Props.SheetNames=l}else e.Props.SheetNames=e.SheetNames
for(e.Props.Worksheets=e.Props.SheetNames.length,s.file(o,function(e){var t=[],r=Ve
return e||(e={}),e.Application="SheetJS",t[t.length]=ce,t[t.length]=nn,tn.forEach(function(n){if(void 0!==e[n[1]]){var a
switch(n[2]){case"string":a=String(e[n[1]])
break
case"bool":a=e[n[1]]?"true":"false"}void 0!==a&&(t[t.length]=r(n[0],a))}}),t[t.length]=r("HeadingPairs",r("vt:vector",r("vt:variant","<vt:lpstr>Worksheets</vt:lpstr>")+r("vt:variant",r("vt:i4",String(e.Worksheets))),{size:2,baseType:"variant"})),t[t.length]=r("TitlesOfParts",r("vt:vector",e.SheetNames.map(function(e){return"<vt:lpstr>"+Se(e)+"</vt:lpstr>"}).join(""),{size:e.Worksheets,baseType:"lpstr"})),t.length>2&&(t[t.length]="</Properties>",t[1]=t[1].replace("/>",">")),t.join("")}(e.Props)),a.extprops.push(o),Gr(t.rels,3,o,Ur.EXT_PROPS),e.Custprops!==e.Props&&N(e.Custprops||{}).length>0&&(o="docProps/custom.xml",s.file(o,on(e.Custprops)),a.custprops.push(o),Gr(t.rels,4,o,Ur.CUST_PROPS)),i=1;i<=e.SheetNames.length;++i){var f={"!id":{}},h=e.Sheets[e.SheetNames[i-1]]
switch((h||{})["!type"]||"sheet"){case"chart":default:o="xl/worksheets/sheet"+i+"."+r,s.file(o,ml(i-1,o,t,e,f)),a.sheets.push(o),Gr(t.wbrels,-1,"worksheets/sheet"+i+"."+r,Ur.WS[0])}if(h){var u=h["!comments"]
if(u&&u.length>0){var d="xl/comments"+i+"."+r
s.file(d,vl(u,d,t)),a.comments.push(d),Gr(f,-1,"../comments"+i+"."+r,Ur.CMNT)}h["!legacy"]&&s.file("xl/drawings/vmlDrawing"+i+".vml",Zs(i,h["!comments"])),delete h["!comments"],delete h["!legacy"]}f["!id"].rId1&&s.file(Hr(o),Xr(f))}return null!=t.Strings&&t.Strings.length>0&&(o="xl/sharedStrings."+r,s.file(o,bl(t.Strings,o,t)),a.strs.push(o),Gr(t.wbrels,-1,"sharedStrings."+r,Ur.SST)),o="xl/workbook."+r,s.file(o,gl(e,o,t)),a.workbooks.push(o),Gr(t.rels,1,o,Ur.WB),o="xl/theme/theme1.xml",s.file(o,Gs(e.Themes,t)),a.themes.push(o),Gr(t.wbrels,-1,"theme/theme1.xml",Ur.THEME),o="xl/styles."+r,s.file(o,function(e,t,r){return(".bin"===t.slice(-4)?Ns:ws)(e,r)}(e,o,t)),a.styles.push(o),Gr(t.wbrels,-1,"styles."+r,Ur.STY),e.vbaraw&&n&&(o="xl/vbaProject.bin",s.file(o,e.vbaraw),a.vba.push(o),Gr(t.wbrels,-1,"vbaProject.bin",Ur.VBA)),s.file("[Content_Types].xml",function(e,t){var r,n=[]
n[n.length]=ce,n[n.length]=Mr,n=n.concat(Wr)
var a=function(a){e[a]&&e[a].length>0&&(r=e[a][0],n[n.length]=Ve("Override",null,{PartName:("/"==r[0]?"":"/")+r,ContentType:Nr[a][t.bookType||"xlsx"]}))},s=function(r){(e[r]||[]).forEach(function(e){n[n.length]=Ve("Override",null,{PartName:("/"==e[0]?"":"/")+e,ContentType:Nr[r][t.bookType||"xlsx"]})})},o=function(t){(e[t]||[]).forEach(function(e){n[n.length]=Ve("Override",null,{PartName:("/"==e[0]?"":"/")+e,ContentType:Lr[t][0]})})}
return a("workbooks"),s("sheets"),s("charts"),o("themes"),["strs","styles"].forEach(a),["coreprops","extprops","custprops"].forEach(o),o("vba"),o("comments"),o("drawings"),n.length>2&&(n[n.length]="</Types>",n[1]=n[1].replace("/>",">")),n.join("")}(a,t)),s.file("_rels/.rels",Xr(t.rels)),s.file("xl/_rels/workbook."+r+".rels",Xr(t.wbrels)),delete t.revssf,delete t.ssf,s}function Fc(e,t){var r=""
switch((t||{}).type||"base64"){case"buffer":return[e[0],e[1],e[2],e[3]]
case"base64":r=d.decode(e.slice(0,24))
break
case"binary":r=e
break
case"array":return[e[0],e[1],e[2],e[3]]
default:throw new Error("Unrecognized type "+(t&&t.type||"undefined"))}return[r.charCodeAt(0),r.charCodeAt(1),r.charCodeAt(2),r.charCodeAt(3)]}function Pc(e,t){var r=0
e:for(;r<e.length;)switch(e.charCodeAt(r)){case 10:case 13:case 32:++r
break
case 60:return Dl(e.slice(r),t)
default:break e}return ya.to_workbook(e,t)}function Nc(e,t,r,n){return n?(r.type="string",ya.to_workbook(e,r)):ya.to_workbook(t,r)}function Lc(e,t){if(l(),"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer)return Lc(new Uint8Array(e),t)
var r,n=e,a=!1,s=t||{}
if(si={},s.dateNF&&(si.dateNF=s.dateNF),s.type||(s.type=p&&Buffer.isBuffer(e)?"buffer":"base64"),"file"==s.type&&(s.type=p?"buffer":"binary",n=function(e){if(void 0!==D)return D.readFileSync(e)
if("undefined"!=typeof $&&"undefined"!=typeof File&&"undefined"!=typeof Folder)try{var t=File(e)
t.open("r"),t.encoding="binary"
var n=t.read()
return t.close(),n}catch(r){if(!r.message||!r.message.match(/onstruct/))throw r}throw new Error("Cannot access file "+e)}(e)),"string"==s.type&&(a=!0,s.type="binary",s.codepage=65001,n=function(e){return e.match(/[^\x00-\x7F]/)?xe(e):e}(e)),"array"==s.type&&"undefined"!=typeof Uint8Array&&e instanceof Uint8Array&&"undefined"!=typeof ArrayBuffer){var o=new ArrayBuffer(3),i=new Uint8Array(o)
if(i.foo="bar",!i.foo)return(s=Z(s)).type="array",Lc(A(n),s)}switch((r=Fc(n,s))[0]){case 208:return function(e,t){return O.find(e,"EncryptedPackage")?Dc(e,t):Gl(e,t)}(O.read(n,s),s)
case 9:return Gl(n,s)
case 60:return Dl(n,s)
case 73:if(68===r[1])return function(e,t){var r=t||{},n=!!r.WTF
r.WTF=!0
try{var a=ka.to_workbook(e,r)
return r.WTF=n,a}catch(s){if(r.WTF=n,!s.message.match(/SYLK bad record ID/)&&n)throw s
return ya.to_workbook(e,t)}}(n,s)
break
case 84:if(65===r[1]&&66===r[2]&&76===r[3])return Ta.to_workbook(n,s)
break
case 80:return 75===r[1]&&r[2]<9&&r[3]<9?function(e,t){var r,n=e,a=t||{}
switch(a.type||(a.type=p&&Buffer.isBuffer(e)?"buffer":"base64"),a.type){case"base64":r=new ee(n,{base64:!0})
break
case"binary":case"array":r=new ee(n,{base64:!1})
break
case"buffer":r=new ee(n)
break
default:throw new Error("Unrecognized type "+a.type)}return Ic(r,a)}(n,s):Nc(e,n,s,a)
case 239:return 60===r[3]?Dl(n,s):Nc(e,n,s,a)
case 255:if(254===r[1])return function(e,t){var r=e
return"base64"==t.type&&(r=d.decode(r)),r=cptable.utils.decode(1200,r.slice(2),"str"),t.type="binary",Pc(r,t)}(n,s)
break
case 0:if(0===r[1]&&r[2]>=2&&0===r[3])return Ia.to_workbook(n,s)
break
case 3:case 131:case 139:case 140:return Ba.to_workbook(n,s)
case 123:if(92===r[1]&&114===r[2]&&116===r[3])return rs.to_workbook(n,s)
break
case 10:case 13:case 32:return function(e,t){var r="",n=Fc(e,t)
switch(t.type){case"base64":r=d.decode(e)
break
case"binary":r=e
break
case"buffer":r=e.toString("binary")
break
case"array":r=Y(e)
break
default:throw new Error("Unrecognized type "+t.type)}return 239==n[0]&&187==n[1]&&191==n[2]&&(r=Te(r)),Pc(r,t)}(n,s)}return r[2]<=12&&r[3]<=31?Ba.to_workbook(n,s):Nc(e,n,s,a)}function Mc(e,t){var r=t||{}
return r.type="file",Lc(e,r)}function Wc(e,t){switch(t.type){case"base64":case"binary":break
case"buffer":case"array":t.type=""
break
case"file":return P(t.file,O.write(e,{type:p?"buffer":""}))
case"string":throw new Error("'string' output type invalid for '"+t.bookType+"' files")
default:throw new Error("Unrecognized type "+t.type)}return O.write(e,t)}function Uc(e,t,r){r||(r="")
var n=r+e
switch(t.type){case"base64":return d.encode(xe(n))
case"binary":return xe(n)
case"string":return e
case"file":return P(t.file,n,"utf8")
case"buffer":return p?g(n,"utf8"):Uc(n,{type:"binary"}).split("").map(function(e){return e.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}function Hc(e,t){switch(t.type){case"string":case"base64":case"binary":for(var r="",n=0;n<e.length;++n)r+=String.fromCharCode(e[n])
return"base64"==t.type?d.encode(r):"string"==t.type?Te(r):r
case"file":return P(t.file,e)
case"buffer":return e
default:throw new Error("Unrecognized type "+t.type)}}function Vc(e,t){el(e)
var r=t||{}
if("array"==r.type){r.type="binary"
var n=Vc(e,r)
return r.type="array",E(n)}switch(r.bookType||"xlsb"){case"xml":case"xlml":return Uc(Ml(e,r),r)
case"slk":case"sylk":return Uc(vc(e,r),r)
case"htm":case"html":return Uc(mc(e,r),r)
case"txt":return function(e,t){switch(t.type){case"base64":return d.encode(e)
case"binary":case"string":return e
case"file":return P(t.file,e,"binary")
case"buffer":return p?g(e,"binary"):e.split("").map(function(e){return e.charCodeAt(0)})}throw new Error("Unrecognized type "+t.type)}(Ac(e,r),r)
case"csv":return Uc(bc(e,r),r,"\ufeff")
case"dif":return Uc(Cc(e,r),r)
case"dbf":return Hc(_c(e,r),r)
case"prn":return Uc(Ec(e,r),r)
case"rtf":return Uc(Sc(e,r),r)
case"eth":return Uc(wc(e,r),r)
case"fods":return Uc(pc(e,r),r)
case"biff2":r.biff||(r.biff=2)
case"biff3":r.biff||(r.biff=3)
case"biff4":return r.biff||(r.biff=4),Hc(sc(e,r),r)
case"biff5":r.biff||(r.biff=5)
case"biff8":case"xla":case"xls":return r.biff||(r.biff=8),function(e,t){var r=t||{}
return Wc(jl(e,r),r)}(e,r)
case"xlsx":case"xlsm":case"xlam":case"xlsb":case"ods":return function(e,t){var r=t||{},n=Oc(e,r),a={}
if(r.compression&&(a.compression="DEFLATE"),r.password)a.type=p?"nodebuffer":"string"
else switch(r.type){case"base64":a.type="base64"
break
case"binary":a.type="string"
break
case"string":throw new Error("'string' output type invalid for '"+r.bookType+"' files")
case"buffer":case"file":a.type=p?"nodebuffer":"string"
break
default:throw new Error("Unrecognized type "+r.type)}var s=n.generate(a)
return r.password&&"undefined"!=typeof encrypt_agile?Wc(encrypt_agile(s,r.password),r):"file"===r.type?P(r.file,s):"string"==r.type?Te(s):s}(e,r)
default:throw new Error("Unrecognized bookType |"+r.bookType+"|")}}function zc(e){if(!e.bookType){var t=e.file.slice(e.file.lastIndexOf(".")).toLowerCase()
t.match(/^\.[a-z]+$/)&&(e.bookType=t.slice(1)),e.bookType={xls:"biff8",htm:"html",slk:"sylk",socialcalc:"eth",Sh33tJS:"WTF"}[e.bookType]||e.bookType}}function Xc(e,t,r){var n=r||{}
return n.type="file",n.file=t,zc(n),Vc(e,n)}function Gc(e,t,r,n,a,s,o,i){var l=Nt(r),c=i.defval,h=i.raw||!i.hasOwnProperty("raw"),u=!0,d=1===a?[]:{}
if(1!==a)if(Object.defineProperty)try{Object.defineProperty(d,"__rowNum__",{value:r,enumerable:!1})}catch(f){d.__rowNum__=r}else d.__rowNum__=r
if(!o||e[r])for(var p=t.s.c;p<=t.e.c;++p){var g=o?e[r][p]:e[n[p]+l]
if(void 0!==g&&void 0!==g.t){var m=g.v
switch(g.t){case"z":if(null==m)break
continue
case"e":m=void 0
break
case"s":case"d":case"b":case"n":break
default:throw new Error("unrecognized type "+g.t)}if(null!=s[p]){if(null==m)if(void 0!==c)d[s[p]]=c
else{if(!h||null!==m)continue
d[s[p]]=null}else d[s[p]]=h?m:jt(g,m,i)
null!=m&&(u=!1)}}else{if(void 0===c)continue
null!=s[p]&&(d[s[p]]=c)}}return{row:d,isempty:u}}function jc(e,t){if(null==e||null==e["!ref"])return[]
var r={t:"n",v:0},n=0,a=1,s=[],o=0,i="",l={s:{r:0,c:0},e:{r:0,c:0}},c=t||{},f=null!=c.range?c.range:e["!ref"]
switch(1===c.header?n=1:"A"===c.header?n=2:Array.isArray(c.header)&&(n=3),typeof f){case"string":l=Xt(f)
break
case"number":(l=Xt(e["!ref"])).s.r=f
break
default:l=f}n>0&&(a=0)
var h=Nt(l.s.r),u=[],d=[],p=0,g=0,m=Array.isArray(e),b=l.s.r,v=0,C=0
for(m&&!e[b]&&(e[b]=[]),v=l.s.c;v<=l.e.c;++v)switch(u[v]=Mt(v),r=m?e[b][v]:e[u[v]+h],n){case 1:s[v]=v-l.s.c
break
case 2:s[v]=u[v]
break
case 3:s[v]=c.header[v-l.s.c]
break
default:for(null==r&&(r={w:"__EMPTY",t:"s"}),i=o=jt(r,null,c),g=0,C=0;C<s.length;++C)s[C]==i&&(i=o+"_"+ ++g)
s[v]=i}for(b=l.s.r+a;b<=l.e.r;++b){var E=Gc(e,l,b,u,n,s,m,c);(!1===E.isempty||(1===n?!1!==c.blankrows:c.blankrows))&&(d[p++]=E.row)}return d.length=p,d}var Kc=/"/g
function Yc(e,t,r,n,a,s,o,i){for(var l=!0,c=[],f="",h=Nt(r),u=t.s.c;u<=t.e.c;++u)if(n[u]){var d=i.dense?(e[r]||[])[u]:e[n[u]+h]
if(null==d)f=""
else if(null!=d.v){l=!1,f=""+jt(d,null,i)
for(var p=0,g=0;p!==f.length;++p)if((g=f.charCodeAt(p))===a||g===s||34===g){f='"'+f.replace(Kc,'""')+'"'
break}"ID"==f&&(f='"ID"')}else null==d.f||d.F?f="":(l=!1,(f="="+d.f).indexOf(",")>=0&&(f='"'+f.replace(Kc,'""')+'"'))
c.push(f)}return!1===i.blankrows&&l?null:c.join(o)}function $c(e,t){var r=[],n=null==t?{}:t
if(null==e||null==e["!ref"])return""
var a=Xt(e["!ref"]),s=void 0!==n.FS?n.FS:",",o=s.charCodeAt(0),i=void 0!==n.RS?n.RS:"\n",l=i.charCodeAt(0),c=new RegExp(("|"==s?"\\|":s)+"+$"),f="",h=[]
n.dense=Array.isArray(e)
for(var u=n.skipHidden&&e["!cols"]||[],d=n.skipHidden&&e["!rows"]||[],p=a.s.c;p<=a.e.c;++p)(u[p]||{}).hidden||(h[p]=Mt(p))
for(var g=a.s.r;g<=a.e.r;++g)(d[g]||{}).hidden||null!=(f=Yc(e,a,g,h,o,l,s,n))&&(n.strip&&(f=f.replace(c,"")),r.push(f+i))
return delete n.dense,r.join("")}function Zc(e,t){t||(t={}),t.FS="\t",t.RS="\n"
var r=$c(e,t)
if(void 0===cptable||"string"==t.type)return r
var n=cptable.utils.encode(1200,r,"str")
return String.fromCharCode(255)+String.fromCharCode(254)+n}function Qc(e){var t,r="",n=""
if(null==e||null==e["!ref"])return[]
var a,s=Xt(e["!ref"]),o="",i=[],l=[],c=Array.isArray(e)
for(a=s.s.c;a<=s.e.c;++a)i[a]=Mt(a)
for(var f=s.s.r;f<=s.e.r;++f)for(o=Nt(f),a=s.s.c;a<=s.e.c;++a)if(r=i[a]+o,n="",void 0!==(t=c?(e[f]||[])[a]:e[r])){if(null!=t.F){if(r=t.F,!t.f)continue
n=t.f,-1==r.indexOf(":")&&(r=r+":"+r)}if(null!=t.f)n=t.f
else{if("z"==t.t)continue
if("n"==t.t&&null!=t.v)n=""+t.v
else if("b"==t.t)n=t.v?"TRUE":"FALSE"
else if(void 0!==t.w)n="'"+t.w
else{if(void 0===t.v)continue
n="s"==t.t?"'"+t.v:""+t.v}}l[l.length]=r+"="+n}return l}function Jc(e,t,r){var n,a=r||{},s=+!a.skipHeader,o=e||{},i=0,l=0
if(o&&null!=a.origin)if("number"==typeof a.origin)i=a.origin
else{var c="string"==typeof a.origin?Ut(a.origin):a.origin
i=c.r,l=c.c}var f={s:{c:0,r:0},e:{c:l,r:i+t.length-1+s}}
if(o["!ref"]){var h=Xt(o["!ref"])
f.e.c=Math.max(f.e.c,h.e.c),f.e.r=Math.max(f.e.r,h.e.r),-1==i&&(i=f.e.r+1,f.e.r=i+t.length-1+s)}var u=a.header||[],d=0
t.forEach(function(e,t){N(e).forEach(function(r){-1==(d=u.indexOf(r))&&(u[d=u.length]=r)
var c=e[r],f="z",h=""
!c||"object"!=typeof c||c instanceof Date?("number"==typeof c?f="n":"boolean"==typeof c?f="b":"string"==typeof c?f="s":c instanceof Date&&(f="d",a.cellDates||(f="n",c=V(c)),h=a.dateNF||B._table[14]),o[Ht({c:l+d,r:i+t+s})]=n={t:f,v:c},h&&(n.z=h)):o[Ht({c:l+d,r:i+t+s})]=c})}),f.e.c=Math.max(f.e.c,l+u.length-1)
var p=Nt(i)
if(s)for(d=0;d<u.length;++d)o[Mt(d+l)+p]={t:"s",v:u[d]}
return o["!ref"]=zt(f),o}var qc={encode_col:Mt,encode_row:Nt,encode_cell:Ht,encode_range:zt,decode_col:Lt,decode_row:Pt,split_cell:Wt,decode_cell:Ut,decode_range:Vt,format_cell:jt,get_formulae:Qc,make_csv:$c,make_json:jc,make_formulae:Qc,sheet_add_aoa:Yt,sheet_add_json:Jc,aoa_to_sheet:$t,json_to_sheet:function(e,t){return Jc(null,e,t)},table_to_sheet:ic,table_to_book:function(e,t){return Kt(ic(e,t),t)},sheet_to_csv:$c,sheet_to_txt:Zc,sheet_to_json:jc,sheet_to_html:oc.from_sheet,sheet_to_dif:Ta.from_sheet,sheet_to_slk:ka.from_sheet,sheet_to_eth:xa.from_sheet,sheet_to_formulae:Qc,sheet_to_row_object_array:jc};(function(e){function t(e,t,r){return null!=e[t]?e[t]:e[t]=r}function r(e,t,n){return"string"==typeof t?e[t]||(e[t]={t:"z"}):r(e,Ht("number"!=typeof t?t:{r:t,c:n||0}))}e.consts=e.consts||{},e.book_new=function(){return{SheetNames:[],Sheets:{}}},e.book_append_sheet=function(e,t,r){if(!r)for(var n=1;n<=65535&&-1!=e.SheetNames.indexOf(r="Sheet"+n);++n);if(!r)throw new Error("Too many worksheets")
if(qi(r),e.SheetNames.indexOf(r)>=0)throw new Error("Worksheet with name |"+r+"| already exists!")
e.SheetNames.push(r),e.Sheets[r]=t},e.book_set_sheet_visibility=function(e,r,n){t(e,"Workbook",{}),t(e.Workbook,"Sheets",[])
var a=function(e,t){if("number"==typeof t){if(t>=0&&e.SheetNames.length>t)return t
throw new Error("Cannot find sheet # "+t)}if("string"==typeof t){var r=e.SheetNames.indexOf(t)
if(r>-1)return r
throw new Error("Cannot find sheet name |"+t+"|")}throw new Error("Cannot find sheet |"+t+"|")}(e,r)
switch(t(e.Workbook.Sheets,a,{}),n){case 0:case 1:case 2:break
default:throw new Error("Bad sheet visibility setting "+n)}e.Workbook.Sheets[a].Hidden=n},function(t){t.forEach(function(t){e.consts[t[0]]=t[1]})}([["SHEET_VISIBLE",0],["SHEET_HIDDEN",1],["SHEET_VERY_HIDDEN",2]]),e.cell_set_number_format=function(e,t){return e.z=t,e},e.cell_set_hyperlink=function(e,t,r){return t?(e.l={Target:t},r&&(e.l.Tooltip=r)):delete e.l,e},e.cell_set_internal_link=function(t,r,n){return e.cell_set_hyperlink(t,"#"+r,n)},e.cell_add_comment=function(e,t,r){e.c||(e.c=[]),e.c.push({t:t,a:r||"SheetJS"})},e.sheet_set_array_formula=function(e,t,n){for(var a="string"!=typeof t?t:Xt(t),s="string"==typeof t?t:zt(t),o=a.s.r;o<=a.e.r;++o)for(var i=a.s.c;i<=a.e.c;++i){var l=r(e,o,i)
l.t="n",l.F=s,delete l.v,o==a.s.r&&i==a.s.c&&(l.f=n)}return e}})(qc),p&&"undefined"!=typeof require&&function(){var t={}.Readable
e.stream={to_json:function(e,r){var n=t({objectMode:!0})
if(null==e||null==e["!ref"])return n.push(null),n
var a={t:"n",v:0},s=0,o=1,i=[],l=0,c="",f={s:{r:0,c:0},e:{r:0,c:0}},h=r||{},u=null!=h.range?h.range:e["!ref"]
switch(1===h.header?s=1:"A"===h.header?s=2:Array.isArray(h.header)&&(s=3),typeof u){case"string":f=Xt(u)
break
case"number":(f=Xt(e["!ref"])).s.r=u
break
default:f=u}s>0&&(o=0)
var d=Nt(f.s.r),p=[],g=0,m=Array.isArray(e),b=f.s.r,v=0,C=0
for(m&&!e[b]&&(e[b]=[]),v=f.s.c;v<=f.e.c;++v)switch(p[v]=Mt(v),a=m?e[b][v]:e[p[v]+d],s){case 1:i[v]=v-f.s.c
break
case 2:i[v]=p[v]
break
case 3:i[v]=h.header[v-f.s.c]
break
default:for(null==a&&(a={w:"__EMPTY",t:"s"}),c=l=jt(a,null,h),g=0,C=0;C<i.length;++C)i[C]==c&&(c=l+"_"+ ++g)
i[v]=c}return b=f.s.r+o,n._read=function(){if(b>f.e.r)return n.push(null)
for(;b<=f.e.r;){var t=Gc(e,f,b,p,s,i,m,h)
if(++b,!1===t.isempty||(1===s?!1!==h.blankrows:h.blankrows)){n.push(t.row)
break}}},n},to_html:function(e,r){var n=t(),a=r||{},s=null!=a.header?a.header:oc.BEGIN,o=null!=a.footer?a.footer:oc.END
n.push(s)
var i=Vt(e["!ref"])
a.dense=Array.isArray(e),n.push(oc._preamble(e,i,a))
var l=i.s.r,c=!1
return n._read=function(){if(l>i.e.r)return c||(c=!0,n.push("</table>"+o)),n.push(null)
for(;l<=i.e.r;){n.push(oc._row(e,i,l,a)),++l
break}},n},to_csv:function(e,r){var n=t(),a=null==r?{}:r
if(null==e||null==e["!ref"])return n.push(null),n
var s=Xt(e["!ref"]),o=void 0!==a.FS?a.FS:",",i=o.charCodeAt(0),l=void 0!==a.RS?a.RS:"\n",c=l.charCodeAt(0),f=new RegExp(("|"==o?"\\|":o)+"+$"),h="",u=[]
a.dense=Array.isArray(e)
for(var d=a.skipHidden&&e["!cols"]||[],p=a.skipHidden&&e["!rows"]||[],g=s.s.c;g<=s.e.c;++g)(d[g]||{}).hidden||(u[g]=Mt(g))
var m=s.s.r,b=!1
return n._read=function(){if(!b)return b=!0,n.push("\ufeff")
if(m>s.e.r)return n.push(null)
for(;m<=s.e.r;)if(!(p[++m-1]||{}).hidden&&null!=(h=Yc(e,s,m-1,u,i,c,o,a))){a.strip&&(h=h.replace(f,"")),n.push(h+l)
break}},n}}}(),e.parse_xlscfb=Gl,e.parse_ods=fc,e.parse_fods=hc,e.write_ods=pc,e.parse_zip=Ic,e.read=Lc,e.readFile=Mc,e.readFileSync=Mc,e.write=Vc,e.writeFile=Xc,e.writeFileSync=Xc,e.writeFileAsync=function(e,t,r,n){var a=r||{}
a.type="file",a.file=e,zc(a),a.type="buffer"
var s=n
return s instanceof Function||(s=r),D.writeFile(e,Vc(t,a),s)},e.utils=qc,e.SSF=B,e.CFB=O}"undefined"!=typeof exports?make_xlsx_lib(exports):"undefined"!=typeof module&&module.exports?make_xlsx_lib(module.exports):"function"==typeof define&&define.amd?define("xlsx",function(){return XLSX.version||make_xlsx_lib(XLSX),XLSX}):make_xlsx_lib(XLSX)
var XLS=XLSX,ODS=XLSX
