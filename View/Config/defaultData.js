import Immutable from 'immutable'
localStorage.displayNum = 1;
const DefaultData = Immutable.List([{



  //---参与的开发人员姓名，请注意书写规范，格式如下---//

  //开发人员姓名：xxx
  //前端post、get...数据
  postA: {},
  getB: {},


  //后端接口返回的数据
  getlistxxx: {
    ret: 1,
    data: []
  },
  getlistxxxxxxx: {
    ret: 0,
    data: []
  },



  'authPage': { // 注册页面 ，会追加type，来判断企业或个人正在注册
    status: 0, //记录个人认证或完善商铺认证
    other: [], //新添加的其它证书 存储
    open3: 0, //开启三证合一 或关闭

    "singin": "",
    'type': '',

    "coopInfo": {
      "contract_info": [ //合同信息
        // {
        //   "f_class1": "蔬菜", //一级分类
        // }
      ],
      "service_city": [ //服务城市
        //1,
      ],
      "delivery_type": 0 //配送方式 （必输 1）
    },

    "qua_info": { // 资质信息
      "is_three_in_one": 0, // 开启三证合一         
      "biz": { //营业执照信息
        "name": "", //商铺名称
        "supplier_type1": '', //供应商类型  （4：基地，5：生产商，6：代理商，7：批发商，8：经销商）
        "supplier_type2": '', //一级代理商或二级代理商  （当供应商类型为代理商时，此字段有意义， 1：一级代理商，2：二级代理商）
        "code": "", //营业执照编号
        "address": "", //地址
        "end_time": "", //有效期
        "pic": "" //营业执照照片
      },

      "ext": [ //资质扩展信息
        //   {
        //     "name": "餐饮服务许可证", //证件名称
        //     "type": 1, //证件类型
        //     "end_time": "2016-12-12", //有效期
        //     "pic": "6,0a741844f0cf" //证件照片
        //   }, {
        //     "name": "卫生许可证", //证件名称
        //     "type": 9, //证件类型
        //     "end_time": "2016-12-12", //有效期
        //     "pic": "5,0a753d2ea6e5" //证件照片
        //   }
      ],



      "org": { //组织信息
        "end_time": "", //有效期
        "pic": "" //组织机构证件照
      },
      "corpor": { //法人信息
        "id_number": "", //法人身份证号
        "pic_1": "", //身份证正面照
        "pic_2": "" //身份证反面照
      },

      "tax": { //税务信息
        "tax_type": '', //纳税性质
        "pic": "" //税务登记证件照
      },
      "account": { //开户信息
        "pic": "" //开户许可证件照
      },
      "platform_pro": "001", //平台协议编号

    },


    "gr_qua_info": { //资质信息
      "biz": { //营业执照信息
        "name": "", //商铺名称
        "supplier_type": '9', //供应商类型 （9：个人）
      },
      "tax": { //税务信息
        "tax_type": '', //纳税性质
      },
      "corpor": { //个人信息
        "name": "", //名称
        "id_number": "", //身份证号
        "pic_1": "", //身份证正面照
        "pic_2": "" //身份证反面照
      },
      "platform_pro": "" //平台协议编号
    }

  },
  'getInfo': { // 宋兆英 获取登录用户信息
    "ret": 1,
    "data": {
      'loginUrl': 'http://www.baidu.com',
      'registerUrl': 'http://www.sina.com',
      "phone": '刘海涛',
      "passport_id": "844187"
    },
    "errmsg": "其它错误信息！"
  },
  'getCity': { // 任丙东 获取城市信息
    "ret": 1,
    "data": [{
      "name": "北京", //城市名称
      "id": 123, //城市id
    }, {
      "name": "上海", //城市名称
      "id": 124, //城市id
    }, {
      "name": "安徽", //城市名称
      "id": 125, //城市id
    }],
    "errmsg": ""
  },
  'getCategory1': { //任丙东 获取一级分类信息
    "ret": 1,
    "data": [{
      "name": "肉类", //分类名称
      "id": 123, //分类id
    }, {
      "name": "水果", //分类名称
      "id": 124, //分类id
    }, {
      "name": "酒水", //分类名称
      "id": 125, //分类id
    }],
    "errmsg": ""
  },
  'getStore': { // 任丙东 获取登陆账户关联的商铺列表信息
    "ret": 1,
    "data": [{
      "name": "XXXX", //商铺名称
      "supplier_no": "MC00000123", //商铺编号  (可能为空，页面展示)
      "base_id": 120, //商铺对应的mongo记录id
      "id": 123, //商铺id
      "status": 2, //商铺状态
      "status_value": "审核中", //商铺状态名
      "f_class1": [ //商铺合作一级分类信息
        "蔬菜",
        "水果"
      ]
    }, {
      "name": "XXXX", //商铺名称
      "supplier_no": "MC00000123", //商铺id  (可能为空)           
      "base_id": "120", //商铺对应的mongo记录id
      "id": 123, //商铺id
      "status": 1, //商铺状态
      "status_value": "已生效", //商铺状态名
      "f_class1": [ //商铺合作一级分类信息
        "肉类",
        "水果"
      ]
    }],
    "errmsg": ""
  },
  'entStoreAuth': { // 任丙东  企业商铺认证
    "ret": 0,
    "data": [],
    "errmsg": ""
  },
  'perStoreAuth': { //个人商铺认证
    "ret": 0,
    "data": [],
    "errmsg": ""
  },
  'getStoreBaseInfo': { // 获取商铺基本信息
    "ret": 0,
    "errmsg": "",
    "data": {
      "contact_info": { //联系信息
        "contact_person": "任丙东222", //联系人
        "contact_phone": "18600862305", //联系电话
        "email": "123@.com", //邮箱
        "address": "" //地址
      },
      "pay_info": { //结账信息
        "invoice_type": 1, //发票类型
        "pay_way": 2, //付款方式
        "account_period_start": 1, //账期起算日
        "account_day": 7, //账期天数
        "account_delay_day": 3 //延期付款天数
      },
      "account_info": { //银行账户信息
        "account_name": "任丙东", //开户名
        "account_bank_no": "1111111111", //开户行行号
        "account_bank_name": "中国银行", //开户行名称
        "account": "123123123123", //银行账户
        "f_bank": "03", //银行
        "city_name": "北京", //城市
        "province": "北京", //省份
        "is_private": 0 //是否对私
      },
      "status": 1, //商铺状态
      "basic_status": 1, //基本信息状态
      "qua_status": 1, //资质信息状态
      "coop_status": 1 //合同信息状态
    }
  },
  'getStoreCoopInfo': { //获取商铺合作信息

    "ret": 1,
    "errmsg": "",
    "data": {
      "contract_info": [ //合同信息
        {
          "f_class1": 1, //一级分类
          "f_class1_name": "新鲜蔬菜", //一级分类名称
          "f_purchaser": 12, //采购专员
          "f_purchaser_name": "任丙东", //采购专员名称
          "status": 1, //合同状态
          "file": "3,0a1d2c76d780" //合同文件地址
        }, {
          "f_class1": 2, //一级分类
          "f_class1_name": "水产冻货", //一级分类名称
          "f_purchaser": 12, //采购专员
          "f_purchaser_name": "任丙东", //采购专员名称
          "status": 1, //合同状态
          "file": "3,0a1d2c76d780" //合同文件地址
        }
      ],
      "delivery_type": 1, //配送方式
      "use_sorting_app": 0, //是否使用分拣客户端
      "is_prepaid": 0, //是否预付
      "status": 1, //商铺状态
      "basic_status": 1, //基本信息状态
      "qua_status": 1, //资质信息状态
      "coop_status": 1 //合同信息状态
    }
  },
  'getStoreQualifyInfo': { // 获取商铺资质信息
    "ret": 1,
    "errmsg": "",
    "data": {
      "type": 1, //商铺类型（1为企业）
      "is_three_in_one": 0, //是否三证合一（0为否， 1为是）
      "biz": { //营业执照信息
        "name": "XXX", //商铺名称
        "supplier_type1": 6, //商铺类型编码
        "supplier_type2": 2, //一级代理商或二级代理商
        "supplier_type_name": "二级代理商", //商铺类型名称
        "code": 12, //营业执照编号
        "address": "任丙东", //注册地址
        "end_time": 1, //有效期
        "pic": "3,0a1d2c76d780", //营业执照图片
        "status": 1, //审批状态
        "comment": "驳回原因" //备注
      },
      "org": { //组织机构信息
        "end_time": "2016-12-12", //有效期
        "pic": "3,0a71d49a6fe0", //组织机构证件照
        "status": 1, //审批状态
        "comment": "" //备注
      },
      "tax": { //税务登记信息
        "tax_type": 2, //纳税性质
        "pic": "1,0a72d4e6cbc9", //税务登记照
        "status": 2, //审批状态
        "comment": "" //备注
      },
      "account": { //开户许可信息
        "pic": "2,0a7369bab760", //开户许可照
        "status": 1, //审批状态
        "comment": "" //备注
      },
      "corpor": { //法人信息
        "id_number": "410725199204041617", //身份证号
        "pic_1": "3,0a6f5b772a23", //身份证正面照
        "pic_2": "6,0a7076578cdc", //身份证反面照
        "status": 1, //审批状态
        "comment": "" //备注
      },
      "ext": [ //资质扩展信息
        {
          "name": "餐饮服务许可证", //证件名称
          "type": 1, //证件类型
          "end_time": "2016-12-12", //有效期
          "pic": "6,0a741844f0cf", //证件图片
          "status": "", //审批状态
          "comment": "" //备注
        }, {
          "name": "卫生许可证", //证件名称
          "type": 7, //证件类型
          "end_time": "2016-12-12", //有效期
          "pic": "6,0a741844f0cf", //证件图片
          "status": "", //审批状态
          "comment": "" //备注
        }
      ],
      "status": 1, //供应商状态
      "basic_status": 1, //基本信息状态
      "qua_status": 1, //资质信息状态
      "coop_status": 1 //合作信息状态
    }
  },



  'categoryList': { //黄超  供应商商品分类列表
    "data": [{
      "id": 1,
      "name": "afasdfasfdas",
    }],
    "sign": "",
    "ret": 1,
    "errmsg": "",
  },
  'productList': {
    "data": {
      "rows": [{
        "product_id": 12, // 产品库编号
        "item_id": 23, // 编号
        "class1_name": 232, // 一级分类名称
        "class2_name": 232, // 二级分类名称
        "class3_name": 232, // 三级分类名称
        "sku_name": 232, // 产品名称
        "own_brand": 232, // 品牌
        "sku_format": 232, // 规格
        "sku_level_name": 232, // 等级
        "valuation_unit_name": 232, // 计价单位
        "status": 232 // 状态(1未审核, 2通过, 3驳回)
      }, {
        "product_id": 12, // 产品库编号
        "item_id": 23, // 编号
        "class1_name": 232, // 一级分类名称
        "class2_name": 232, // 二级分类名称
        "class3_name": 232, // 三级分类名称
        "sku_name": 232, // 产品名称
        "own_brand": 232, // 品牌
        "sku_format": 232, // 规格
        "sku_level_name": 232, // 等级
        "valuation_unit_name": 232, // 计价单位
        "status": 232 // 状态(1未审核, 2通过, 3驳回)
      }, {
        "product_id": 12, // 产品库编号
        "item_id": 23, // 编号
        "class1_name": 232, // 一级分类名称
        "class2_name": 232, // 二级分类名称
        "class3_name": 232, // 三级分类名称
        "sku_name": 232, // 产品名称
        "own_brand": 232, // 品牌
        "sku_format": 232, // 规格
        "sku_level_name": 232, // 等级
        "valuation_unit_name": 232, // 计价单位
        "status": 232 // 状态(1未审核, 2通过, 3驳回)
      }],
      "attach": {
        "count_num": 12, // 全部数量
        "audit_num": 1122, // 待审核数量
        "check_sum": 65, // 已通过数量
      },
      "page": 1, // 当前页面
      "page_per": 20, // 每页条数
      "page_total": 28, // 累计页面
      "page_num": 560, // 累计数量
    },
    "ret": 132,
    "errmsg": "xx",
  },

  'productDetail': { //黄超  供应商产品库详情
    "ret": 1,
    "data": {
      "sku_name": "嫩康大米秋田小町米袋(24kg)",
      "sku_code": "2501011494003001",
      "class1_name": "米面粮油",
      "class1_id": "3",
      "class2_name": "袋装米",
      "class2_id": "43",
      "class3_name": "东北米",
      "class3_id": "189",
      "own_brand": "嫩康大米",
      "sku_level_name": "0",
      "sku_format": "袋(24kg)",
      "pic": "./Images/ios.png",
      "status": "1",
      "item_id": 105783,
      "qualification": [{
        "sp_gid": 12,
        "name": "生产单位的营业执232照",
        "end_t": 111,
        "status": 1,
        "thumb": "./Images/ios.png",
        "pic": ["./Images/ios.png", "./Images/ios.png", "./Images/ios.png", "./Images/ios.png"]
      }, {
        "sp_gid": 323,
        "name": "生产单位的营业执照232",
        "end_t": 111,
        "status": 1,
        "thumb": "./Images/ios.png",
        "pic": ["./Images/ios.png", "./Images/ios.png", "./Images/ios.png", "./Images/ios.png"]
      }]
    }
  },
  'productAdd': { //黄超  供应商产品库添加
    "ret": 1,
    "errmsg": "",
  },
  'productUpdate': { //黄超  供应商产品库修改
    "sign": "",
    "ret": 1,
    "errmsg": "",
  },
  'pictureList': { //黄超  供应商图片列表
    "rows": [{
      "sp_large": '', // 大图地址
      "sp_small": '', // 小图地址
      "sp_name": '', // 图片名称
    }],
    "sign": "",
    "ret": 1,
    "errmsg": "",
  },
  'pictureUpload': { //黄超  供应商图片上传
    "sp_large": "http://hostname/name", // 大图地址
    "sp_small": "", // 小图地址
    "ret": 1,
    "errmsg": "",
  },
  'mcproductList': {
    "data": {
      "rows": [{
        "product_id": 12, // 产品库编号
        "item_id": 23, // 编号
        "class1_name": 232, // 一级分类名称
        "class2_name": 232, // 二级分类名称
        "class3_name": 232, // 三级分类名称
        "sku_name": 232, // 产品名称
        "own_brand": 232, // 品牌
        "sku_format": 232, // 规格
        "sku_level_name": 232, // 等级
        "valuation_unit_name": 232, // 计价单位
        "add_status": 0 // 状态(1未审核, 2通过, 3驳回)
      }, {
        "product_id": 12, // 产品库编号
        "item_id": 23, // 编号
        "class1_name": 232, // 一级分类名称
        "class2_name": 232, // 二级分类名称
        "class3_name": 232, // 三级分类名称
        "sku_name": 232, // 产品名称
        "own_brand": 232, // 品牌
        "sku_format": 232, // 规格
        "sku_level_name": 232, // 等级
        "valuation_unit_name": 232, // 计价单位
        "add_status": 1 // 状态(1未审核, 2通过, 3驳回)
      }, {
        "product_id": 12, // 产品库编号
        "item_id": 23, // 编号
        "class1_name": 232, // 一级分类名称
        "class2_name": 232, // 二级分类名称
        "class3_name": 232, // 三级分类名称
        "sku_name": 232, // 产品名称
        "own_brand": 232, // 品牌
        "sku_format": 232, // 规格
        "sku_level_name": 232, // 等级
        "valuation_unit_name": 232, // 计价单位
        "add_status": 0 // 状态(1未审核, 2通过, 3驳回)
      }],
      "attach": {
        "count_num": 12, // 全部数量
        "audit_num": 1122, // 待审核数量
        "check_sum": 65, // 已通过数量
      },
      "page": 1, // 当前页面
      "page_per": 20, // 每页条数
      "page_total": 28, // 累计页面
      "page_num": 560, // 累计数量
    },
    "ret": 132,
    "errmsg": "xx",
  },
  getprovince: {
    "ret": 1,
    "data": [{
      "id": "1",
      "name": "北京市", //名称
      "code": "110000" //编码
    }, {
      "id": "20",
      "name": "天津市",
      "code": "120000"
    }, {
      "id": "39",
      "name": "河北省",
      "code": "130000"
    }]
  },
  getinferior: {
    "ret": 0
  },
  getArea: {
    "ret": 0
  },
  uploadpic: {
    'ret': 0
  }

}]);

module.exports = DefaultData