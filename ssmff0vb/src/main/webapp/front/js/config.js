
var projectName = '宠物医院管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '医院信息',
	url: './pages/yiyuanxinxi/list.html'
}, 
{
	name: '医生信息',
	url: './pages/yishengxinxi/list.html'
}, 

]

var adminurl =  "http://localhost:8080/ssmff0vb/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","审核"],"menu":"医生","menuJump":"列表","tableName":"yisheng"}],"menu":"医生管理"},{"child":[{"buttons":["查看","审核"],"menu":"医院进驻","menuJump":"列表","tableName":"yiyuanjinzhu"}],"menu":"医院进驻管理"},{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"申请情况","menuJump":"列表","tableName":"shenqingqingkuang"}],"menu":"申请情况管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医院信息","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"医生信息","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息管理"},{"child":[{"buttons":["查看"],"menu":"在线问诊","menuJump":"列表","tableName":"zaixianwenzhen"}],"menu":"在线问诊管理"},{"child":[{"buttons":["查看"],"menu":"问诊回复","menuJump":"列表","tableName":"wenzhenhuifu"}],"menu":"问诊回复管理"},{"child":[{"buttons":["查看"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"医院信息列表","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息模块"},{"child":[{"buttons":["查看","在线问诊"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","删除","申请情况"],"menu":"医院进驻","menuJump":"列表","tableName":"yiyuanjinzhu"}],"menu":"医院进驻管理"},{"child":[{"buttons":["查看"],"menu":"申请情况","menuJump":"列表","tableName":"shenqingqingkuang"}],"menu":"申请情况管理"},{"child":[{"buttons":["新增","查看","删除"],"menu":"在线问诊","menuJump":"列表","tableName":"zaixianwenzhen"}],"menu":"在线问诊管理"},{"child":[{"buttons":["查看"],"menu":"问诊回复","menuJump":"列表","tableName":"wenzhenhuifu"}],"menu":"问诊回复管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"医院信息列表","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息模块"},{"child":[{"buttons":["查看","在线问诊"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看","回复"],"menu":"在线问诊","menuJump":"列表","tableName":"zaixianwenzhen"}],"menu":"在线问诊管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"问诊回复","menuJump":"列表","tableName":"wenzhenhuifu"}],"menu":"问诊回复管理"},{"child":[{"buttons":["查看"],"menu":"宠物信息","menuJump":"列表","tableName":"chongwuxinxi"}],"menu":"宠物信息管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"医院信息列表","menuJump":"列表","tableName":"yiyuanxinxi"}],"menu":"医院信息模块"},{"child":[{"buttons":["查看","在线问诊"],"menu":"医生信息列表","menuJump":"列表","tableName":"yishengxinxi"}],"menu":"医生信息模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"医生","tableName":"yisheng"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
