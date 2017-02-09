:config="configData"

configData:[
	{'navCat':'hotelType',
	listData:[{'text':'不限类型',value:'不限酒店'},{'text':'星级酒店',value:'星级酒店'},{'text':'特色餐厅',value:'特色餐厅'}],
	activeFilterText:'不限类型',
	showFilterFlag:false},
	{'navCat':'tables',
	listData:[{'text':'不限桌数',value:'不限桌数'},{'text':'10桌以下',value:'10桌以下'},{'text':'10~20桌',value:'10~20桌'},{'text':'20桌以上',value:'20桌以上'}],activeFilterText:'10桌以下',showFilterFlag:false},
	{'navCat':'isWeddingServiceNeed',listData:[{'text':'需要婚庆',value:true},{'text':'不需要婚庆',value:false}],activeFilterText:'需要婚庆',showFilterFlag:false}
]

configData是一个数组，数组中的每个元素表示含义如下：
navCat：必选，标识当前nav分类代表的涵义，且唯一
listData：必选，当前nav分类的list列表，text为显示在页面上的文案，value用于选中后的实际数据处理值，
activeFilterText:必选，默认选中的元素text，
showFilterFlag：必选，是否显示筛选下拉框


surenav:必选，每次选中后会将当前nav的选中值传给外部函数处理