const url = '/webapi';

module.exports = {

	'getInfo': url + '/passport/getInfo', // 苗子敬 获取登录用户信息 /picture/list
	'getCity': url + '/public/getCity', // 任丙东 获取城市信息
	'getCategory1': url + '/public/getCategory1', // 任丙东 获取一级分类信息
	'getStore': url + '/shop/getshop', // 任丙东 获取登陆账户关联的商铺列表信息
	'entStoreAuth': url + '/shop/entStoreAuth', // 任丙东  企业商铺认证
	'perStoreAuth': url + '/shop/perStoreAuth', // 任丙东 个人商铺认证
	'getStoreBaseInfo': url + '/shop/getStoreBaseInfo', // 获取商铺基本信息
	'getStoreCoopInfo': url + '/shop/getStoreCoopInfo', // 获取商铺合作信息
	'getStoreQualifyInfo': url + '/shop/getStoreQualifyInfo', // 获取商铺资质信息

	'categoryList': url + '/category/list', //黄超  供应商商品分类列表
	'productList': url + '/product/list', //黄超  供应商产品库列表
	'productDetail': url + '/product/detailitem', //黄超  供应商产品库详情
	'productAdd': url + '/product/additem', //黄超  供应商产品库添加
	'productUpdate': url + '/product/update', //黄超  供应商产品库修改
	'pictureList': url + '/picture/list', //黄超  供应商图片列表
	'pictureUpload': url + '/picture/upload', //黄超  供应商图片上传
	'mcproductList': url + '/mcproduct/list', //黄超  美菜产品库列表
	'test': url + '/passport/test', // 苗子敬 获取登录用户信息 /picture/list

	'getprovince': url + '/public/getprovince', //丙东  获取省份列表信息
	'getinferior': url + '/public/getinferior', //丙东 获取下属行政区域信息
	'getArea': url + '/public/getinferior', //丙东 获取下属行政区域信息
	'uploadpic': url + '/public/uploadpic', //丙东 图片上传

	'hello': url + '',
}