(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217734"],{c77a:function(e,l,i){"use strict";i.r(l);var a=function(){var e=this,l=e.$createElement,i=e._self._c||l;return i("div",[i("el-form",{ref:"fieldDialogFrom",attrs:{model:e.dialogMiddle,"label-width":"120px","label-position":"left",rules:e.rules}},[i("el-form-item",{attrs:{label:"Field名称",prop:"fieldName"}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldName,callback:function(l){e.$set(e.dialogMiddle,"fieldName",l)},expression:"dialogMiddle.fieldName"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Field中文名",prop:"fieldDesc"}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldDesc,callback:function(l){e.$set(e.dialogMiddle,"fieldDesc",l)},expression:"dialogMiddle.fieldDesc"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"FieldJSON",prop:"fieldJson"}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.fieldJson,callback:function(l){e.$set(e.dialogMiddle,"fieldJson",l)},expression:"dialogMiddle.fieldJson"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"数据库字段名",prop:"columnName"}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.dialogMiddle.columnName,callback:function(l){e.$set(e.dialogMiddle,"columnName",l)},expression:"dialogMiddle.columnName"}})],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Field数据类型",prop:"fieldType"}},[i("el-col",{attrs:{span:8}},[i("el-select",{attrs:{placeholder:"请选择field数据类型"},model:{value:e.dialogMiddle.fieldType,callback:function(l){e.$set(e.dialogMiddle,"fieldType",l)},expression:"dialogMiddle.fieldType"}},e._l(e.typeOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)],1)},d=[],t={name:"FieldDialog",props:{dialogMiddle:{type:Object,default:function(){return{}}}},data:function(){return{visible:!1,typeOptions:[{label:"字符串",value:"string"},{label:"整型",value:"int"},{label:"布尔值",value:"bool"},{label:"浮点型",value:"float64"},{label:"时间",value:"time.Time"}],rules:{fieldName:[{required:!0,message:"请输入field英文名",trigger:"blur"}],fieldDesc:[{required:!0,message:"请输入field中文名",trigger:"blur"}],fieldJson:[{required:!0,message:"请输入field格式化json",trigger:"blur"}],fieldType:[{required:!0,message:"请选择field数据类型",trigger:"blur"}]}}}},o=t,r=i("2877"),s=Object(r["a"])(o,a,d,!1,null,null,null);l["default"]=s.exports}}]);