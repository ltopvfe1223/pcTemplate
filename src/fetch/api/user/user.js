export const user = {
    getOtherTokenUrl: '/news/getUserByToken',  //外链通过token获取信息
    getBrowser: '/behavior/getBrowser',  // 用于后台记录浏览器类型
    getUserTypeUrl: '/selectUserType', // 获取用户类型
    getLoginUrl: '/authToken',  // 登录
    getLogoutUrl: '/deleteToken',  // 退出登录
    getPassWordUrl: '/selectSmsCode',  // 获取密码
    getVerCodeUrl: '/usr/vcodeimg',  // 获取验证码
    applySubEnUrl: '/usr/subacc/sendAddReq',  //申请加入子账号
    getLoginUser:'/common/getLoginUser',  //获取登录用户信息
    getNewMsg: '/messageBuyer/haveUnread', // -获取是否有最新消息
    getOApath: '/usr/oa/login', // -获取OA路径
    getMenuListUrl: 'initMenu',  // 获取初始菜单


    // 调用广开页面
    getGuangUrl: '/usr/unauth/tourl',  // 调用广开url(注册+忘记密码）
    getGuangkaiUrl: '/usr/authed/tourl',  // 调用广开url（修改密码，个人信息，个人认证）

    // 个人信息（行内用户）
    inPersonalUrl: '/usr/userInfo/personal',  // 查找个人信息（行内用户）

    // 企业认证
    toApplyUrl: '/usr/auth/toapply',  // 企业是否认证
    changeCrdtNoUrl: '/usr/auth/subacc/check',  // 输入社会统一信用代码判断是否为子账号
    uploadUrl: '/usr/auth/upload',    //上传图片
    submitCertUrl: '/usr/auth/aply/save',  // 企业认证
    downloadUrl: '/usr/auth/dlpath',  // 下载授权书
    sctNoByCstNmUrl: '/usr/auth/selectCstMgrAndName',  // 根据客户经理编号获取客户经理名称
    updateCstNoUrl: '/usr/cst/claim/update',  // 更新客户经理编号及名称

    // 加入子账号页面
    searchEnterUrl: '/usr/auth/aply/ents',  // 模糊查询企业信息
    isSearchUrl: '/usr/auth/subacc/tobejoinlist',  // 判断是否有加入权限

    //我的关注
    cancelFocusUrl: '/myfocus/focusClick',  // 关注， 取消关注
    cancelselectedFocusUrl: '/myfocus/selectedCancelFocus',  // 取消选中的关注
    getFindMyFocusEntpUrl:'/myfocus/findMyFocusEntp', // 获取 关注的企业
    getFindMyFocusSvcUrl:'/myfocus/findMyFocusSvc', // 获取 关注的服务
    getFindMyFocusRqmUrl:'/requirement/getMyFocus', // 获取 关注的需求
    getServiceSumNumUrl: '/myfocus/ServiceSumNum',  // 获取 总服务数量
    getTngServiceNumUrl:'/myfocus/tngServiceNum', // 获取 技术服务数量
    getMajorServiceNumUrl:'/myfocus/majorServiceNum',// 获取 专业服务数量


    // 子账号管理
    getSubaccountManageDataUrl: '/usr/subacc/list',  // 获取子账号管理信息
    delSubaccountManageDataUrl: '/usr/subacc/moveout',  // 移除子账号管理信息
    searchSubaccountDataUrl: '/usr/subacc/check',  // 查找邀请的子账号信息
    addSubaccountButtonUrl: '/usr/subacc/notice',  // 邀请子账号
    getSubaccountApplyDataUrl: '/usr/subacc/aplys',  // 获取子账号管理审核信息
    replySubaccountApplyDataUrl: '/usr/subacc/audit',  // 审核子账号信息
    setAdminUrl: '/usr/subacc/setAdmin',  // 管理员移交

    // 消息中心
    getUnreadMessageUrl: '/messageBuyer/unReadByLastMin',  //小秘书获取未读信息
    getMsgSysUrl: '/messageBuyer/messageInfo',  // 获取系统消息
    delMsgSysUrl: '/messageBuyer/message_del',  // 删除系统消息
    acceptUrl: '/usr/subacc/accept',  //判断是否显示按钮
    isAgreeUrl: '/usr/subacc/submit',  //邀请子账号同意
    msgReadClickUrl: '/messageBuyer/msgReadClick',  //  设置为已读标志
    //版本灰度
    getUserGrayInfo: '/userGray/getUserGrayInfo',
    getVersionGray: '/versionGray/getVersionGray',

     //个性化商机
    queryPerbsopCustomize:'/perbsop/queryPerbsopCustomize',    //获取商机列表
    queryBsopCustomizeTemp:'/perbsop/queryBsopCustomizeTemp',         //获取商机内容列表
    saveBsopCustomizeTemp:'/perbsop/saveBsopCustomizeTemp',           //保存商机内容
    deleteBsopCustomizeTemp:'/perbsop/deleteBsopCustomizeTemp',         //删除商机内容
    clickPerbsopCustomize:'/perbsop/clickPerbsopCustomize',              //点击推送
    queryPerbsopContent:'/perbsop/queryPerbsopContent',          //获取首页轮播推送内容
    queryAllStoreName:'/store/external/queryAllStoreName',      //查询企业下拉列表
}
