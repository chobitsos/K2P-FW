// Automatically generated by error_code.md: don't edit.
var ERR_CODE             =  "error_code";    //错误码名称
var E_NONE               =             0;    //没有错误
var E_SYSTEM             =        -10101;    //系统错误
var E_EXPT               =        -10102;    //异常错误
var E_NOMEM              =        -10103;    //内存不足
var E_INVEVT             =        -10104;    //禁止操作
var E_CREATE             =        -10105;    //创建失败
var E_OVERFLOW           =        -10201;    //数据溢出
var E_TOOLONG            =        -10202;    //数据过长
var E_ENTRYEXIST         =        -10203;    //条目已存在
var E_REFERED            =        -10204;    //条目已关联
var E_ENTRYNOTEXIST      =        -10205;    //条目不存在
var E_ENTRYCONFLIC       =        -10206;    //条目冲突
var E_TABLEFULL          =        -10207;    //表满
var E_TABLEEMPTY         =        -10208;    //空表
var E_INVARG             =        -10209;    //参数错误
var E_INVFMT             =        -10210;    //格式错误
var E_LACKARG            =        -10211;    //缺少必要参数
var E_INVBOOL            =        -10212;    //非法的布尔类型
var E_STRINGLEN          =        -10213;    //字符串长度非法
var E_INVIP              =        -10301;    //IP地址不正确
var E_INVGROUPIP         =        -10302;    //组播的IP地址
var E_INVIPFMT           =        -10303;    //IP地址格式错误
var E_INVLOOPIP          =        -10304;    //回环的IP地址
var E_INVMASK            =        -10305;    //掩码不正确
var E_INVGTW             =        -10306;    //网关不正确
var E_GTWUNREACH         =        -10307;    //网关不可达
var E_COMFLICTNET        =        -10308;    //网段冲突
var E_INVNET             =        -10309;    //非法的网段
var E_INVMACFMT          =        -10310;    //MAC地址格式不正确
var E_INVMACGROUP        =        -10311;    //MAC地址为组播地址
var E_INVMACZERO         =        -10312;    //MAC地址全零
var E_INVMACBROAD        =        -10313;    //广播地址的MAC地址
var E_INVNETID           =        -10314;    //网络号全0或者1
var E_INVHOSTID          =        -10315;    //主机号全0或者1
var E_INVIPMASKPAIR      =        -10316;    //IP和掩码不匹配
var E_MACEMPTY           =        -10317;    //MAC地址为空
var E_UNAUTH             =        -10401;    //认证失败
var E_CODEUNAUTH         =        -10402;    //验证码认证失败
var E_SESSIONTIMEOUT     =        -10403;    //登录超时
var E_SYSLOCKED          =        -10404;    //系统锁定，超过错误次数
var E_SYSCLIENTFULL      =        -10405;    //超出支持的客户端数量
var E_INLGVALOLDSAME     =        -10406;    //新登录密码和旧登录密码一样
var E_SYSRESET           =        -10407;    //出厂状态，需设置初始管理员密码
var E_HASINITPWD         =        -10408;    //已设置过初始密码，不能重复设置
var E_ACCOUNTBLANK       =        -10409;    //账号不能为空
var E_ACCOUNTLEN         =        -10410;    //账号长度非法
var E_ACCOUNTILLEGAL     =        -10411;    //账号包含非法字符
var E_PWDBLANK           =        -10412;    //密码不能为空
var E_PWDLEN             =        -10413;    //密码长度非法
var E_PWDILLEGAL         =        -10414;    //密码包含非法字符
var E_PWDOVTIME          =        -10415;    //已经达到多用户登录的最大数量
var E_SSID_BLANK         =        -10501;    //无线名称为空
var E_SSID_LEN           =        -10502;    //无线名称长度非法
var E_SSID_ILLEGAL       =        -10503;    //无线名称包含非法字符
var E_WIFI_PWD_LEN       =        -10504;    //无线密码长度非法
var E_WIFI_PWD_ILLEGAL   =        -10505;    //无线密码包含非法字符
var E_INVWANMODE         =        -20101;    //上网模式值非法，仅支持DHCP,PPPoE,静态
var E_NETMASKNOTMATCH    =        -20102;    //网络号与掩码不匹配
var E_NETLANSAME         =        -20103;    //网络号处于LAN口IP网段
var E_NETWANSAME         =        -20104;    //网络号处于WAN口IP网段
var E_INVPTC             =        -20105;    //不支持的协议类型
var E_WANTYPE            =        -20106;    //不支持的WAN口接入类型
var E_NOLINK             =        -20107;    //WAN口未连接
var E_INVDIAGMODE        =        -20108;    //非法的拨号模式值
var E_PPPOENAMEBLANK     =        -20109;    //PPPoE账号不能为空
var E_PPPOENAMELEN       =        -20110;    //PPPoE账号长度非法
var E_PPPOENAMEILLEGAL   =        -20111;    //PPPoE账号包含非法字符
var E_PPPOEPWDBLANK      =        -20112;    //PPPoE密码不能为空
var E_PPPOEPWDLEN        =        -20113;    //PPPoE密码长度非法
var E_PPPOEPWDILLEGAL    =        -20114;    //PPPoE密码包含非法字符
var E_STATICIPILLEGAL    =        -20115;    //静态IP地址非法
var E_STATICMASKILLEGAL  =        -20116;    //静态子网掩码非法
var E_STATICGWILLEGAL    =        -20117;    //静态网关非法
var E_INVDNSMODE         =        -20118;    //非法DNS模式，仅开关状态
var E_FDNSIPBLANK        =        -20119;    //首选DNS地址不能为空
var E_INVFDNSIP          =        -20120;    //非法首选DNS地址
var E_INVSDNSIP          =        -20121;    //非法备选DNS地址
var E_INVMTUPPPOE        =        -20122;    //非法PPPoE
var E_INVMTUDHCP         =        -20123;    //非法DHCP
var E_INVMTUSTATIC       =        -20124;    //非法STATIC
var E_MTUPPPOEBLANK      =        -20125;    //PPPOE的MTU不能为空
var E_MTUDHCPBLANK       =        -20126;    //DHCP的MTU不能为空
var E_MTUSTATICBLANK     =        -20127;    //STATIC的MTU不能为空
var E_PPPOESERVERNAMELEN =        -20128;    //PPPOE服务名称长度非法
var E_STATICGWEQSTATICIP =        -20129;    //默认网关与IP地址不能相同
var E_FDNSEQSDNS         =        -20130;    //首选DNS与备用DNS不能相同
var E_VPN_SERVER_ILLEGAL =        -20131;    //VPN服务器IP或域名非法
var E_VPV_PROTOCOL_ILLEGAL =        -20132;    //VPN
var E_PPTP_MTU_ILLEGAL   =        -20133;    //PPTP的MTU非法
var E_L2TP_MTU_ILLEGAL   =        -20134;    //L2TP的MTU非法
var E_PPTP_MTU_BLANK     =        -20135;    //PPTP的MTU不能为空
var E_L2TP_MTU_BLANK     =        -20136;    //L2TP的MTU不能为空
var E_STATICIPBLANK      =        -20137;    //静态IP地址不能为空
var E_STATICMASKBLANK    =        -20138;    //静态子网掩码不能为空
var E_STATICGWBLANK      =        -20139;    //静态网关不能为空
var E_VPN_SERVER_BLANK   =        -20140;    //VPN服务器不能为空
var E_WL2GENABLE         =        -20201;    //2.4G无线开关错误，状态仅支持开关
var E_WL2GSSIDBLANK      =        -20202;    //2.4G无线网络名为空
var E_WL2GSSIDLEN        =        -20203;    //2.4G无线网络名长度非法
var E_WL2GSSIDILLEGAL    =        -20204;    //2.4G无线网络名包含非法字符
var E_WL2GSSIDPWLEN      =        -20205;    //2.4G无线密码长度非法
var E_WL2GSSIDPWILLEGAL  =        -20206;    //2.4G无线密码包含非法字符
var E_WL2GMODE           =        -20207;    //2.4G无线模式错误
var E_WL2GCHANNEL        =        -20208;    //2.4G无线信道错误
var E_WL2GCHWIDTH        =        -20209;    //2.4G无线频段带宽错误
var E_WL2GISOLATE        =        -20210;    //2.4G无线AP隔离错误
var E_WL2GSSIDBROAD      =        -20211;    //2.4G广播配置错误
var E_WL2GMODEWIDTHNOTMATCH =        -20212;    //2.4G无线模式与频段带宽不匹配
var E_WL2GSSIDCONFICTWITHGUEST =        -20213;    //2.4G无线网络名不能与访客网络相同
var E_WL5GENABLE         =        -20301;    //5G无线开关错误，状态仅支持开关
var E_WL5GSSIDBLANK      =        -20302;    //5G无线网络名为空
var E_WL5GSSIDLEN        =        -20303;    //5G无线网络名长度非法
var E_WL5GSSIDILLEGAL    =        -20304;    //5G无线网络名包含非法字符
var E_WL5GSSIDPWLEN      =        -20305;    //5G无线密码长度非法
var E_WL5GSSIDPWILLEGAL  =        -20306;    //5G无线密码包含非法字符
var E_WL5GMODE           =        -20307;    //5G无线模式错误
var E_WL5GCHANNEL        =        -20308;    //5G无线信道错误
var E_WL5GCHWIDTH        =        -20309;    //5G无线频段带宽错误
var E_WL5GISOLATE        =        -20310;    //5G无线AP隔离错误
var E_WL5GSSIDBROAD      =        -20311;    //5G广播配置错误
var E_WL5GSSIDCONFICTWITHGUEST =        -20312;    //5G无线网络名不能与访客网络相同
var E_WLTXBFERROR        =        -20313;    //txbeamforming参数错误
var E_WLMUERROR          =        -20314;    //mu-mimo参数错误
var E_INVUPFILE          =        -20401;    //不合法升级文件
var E_INVUPHWID          =        -20402;    //不匹配硬件设备
var E_INVUPPRODUCTID     =        -20403;    //不匹配产品型号
var E_INVUPREQVER        =        -20404;    //当前版本不满足最低版本要求
var E_INVUPDGVER         =        -20405;    //当前固件版本不支持版本降级
var E_DOWNFAIL_FAIL      =        -20406;    //自动升级下载固件失败
var E_NOEXISTFILE        =        -20407;    //固件不存在
var E_UPGRADE_UNDERWAY   =        -20408;    //当前有其他升级程序正在运行
var E_DHCPDMODE          =        -20601;    //DHCPD服务模式，状态仅支持开关
var E_DHCPPOOLSTART      =        -20602;    //DHCP地址池开始地址错误
var E_DHCPPOOLEND        =        -20603;    //DHCP地址池结束地址错误
var E_POOLSTARTGRATEREND =        -20604;    //地址池开始地址大于结束地址
var E_DHCPD_INVIP        =        -20605;    //IP地址不在同一网段
var E_DHCPD_RANGE_LANIP  =        -20606;    //DHCP地址池和LAN-IP冲突
var E_DHCPD_CONFLICT_IP  =        -20607;    //IP地址已存在
var E_DHCPD_CONFLICT_MAC =        -20608;    //MAC地址已存在
var E_DHCPD_MAX          =        -20609;    //条数超过上限
var E_DHCPD_IP_LANIP     =        -20610;    //IP地址和LAN-IP冲突
var E_INVLANIP           =        -20701;    //非法LAN侧IP地址
var E_INVLANMASK         =        -20702;    //非法LAN侧子网掩码
var E_DDNSMODE           =        -20801;    //DDNS模式错误，状态仅支持开关
var E_INVDDNSSVR         =        -20802;    //非法DDNS服务提供商
var E_DDNSSVRBLANK       =        -20803;    //DDNS服务提供商不能为空
var E_INVDDNSNAME        =        -20804;    //非法DDNS服务账号
var E_DDNSNAMEBLANK      =        -20805;    //DDNS服务账号不能为空
var E_INVDDNSPWD         =        -20806;    //非法DDNS服务密码
var E_DDNSPWDBLANK       =        -20807;    //DDNS服务密码不能为空
var E_INVDDNSHOST        =        -20808;    //非法DDNS主机名称
var E_DDNSHOSTBLANK      =        -20809;    //DDNS主机名称不能为空
var E_PARENT_MODE        =        -20901;    //家长控制模式错误，状态仅支持开关
var E_PARENT_RULENAME_BLANK =        -20902;    //规则名称不能为空
var E_PARENT_RULENAME_ILLEGAL =        -20903;    //规则名称非法
var E_CLIENT_RULENAME_LEN =        -20904;    //规则名称长度非法
var E_PARENT_MAC_BLANK   =        -20905;    //MAC地址不能为空
var E_PARENT_MAC_ILLEGAL =        -20906;    //MAC地址非法
var E_PARENT_CYCLE_ILLEGAL =        -20907;    //规则周期非法
var E_START_TIME_ILLEGAL =        -20908;    //起始时间非法
var E_END_TIME_ILLEGAL   =        -20909;    //终止时间非法
var E_END_LESS_START     =        -20910;    //终止时间不能小于起始时间
var E_WISPMODE           =        -21001;    //WISP模式错误，状态仅支持开关
var E_WISPSSIDBLANK      =        -21002;    //WISP模式下网络名称为空
var E_WISPSSIDLEN        =        -21003;    //WISP模式下网络名称长度非法
var E_WISPSSIDILLEGAL    =        -21004;    //WISP模式下网络名称包含非法字符
var E_WISPPWDBLANK       =        -21005;    //WISP模式下密码为空
var E_WISPPWDLEN         =        -21006;    //WISP模式下密码长度非法
var E_WISPPWDILLEGAL     =        -21007;    //WISP模式下密码包含非法字符
var E_WISPSECAUTH        =        -21008;    //非法无线安全认证模式|
var E_WISPWEPAUTH        =        -21009;    //WEP秘钥类型错误
var E_WISPWEPENCRYPT     =        -21010;    //WEP秘钥编码模式错误
var E_WISPWEPPWDBLANK    =        -21011;    //WEP秘钥为空
var E_WISPWEPPWDLEN      =        -21012;    //WEP秘钥长度非法
var E_WISPWEPPWDILLEGAL  =        -21013;    //WEP秘钥包含非法字符
var E_WISPPSKPWENCRYPT   =        -21014;    //PSK加密类型错误
var E_WISPPSKPWLEN       =        -21015;    //PSK秘钥长度非法
var E_WISPPSKPWBLANK     =        -21016;    //PSK秘钥为空
var E_WISPPSKPWILLEGAL   =        -21017;    //PSK秘钥包含非法字符
var E_WISPNOTFOUND       =        -21018;    //无法找到上联SSID
var E_SAMBA_MODE         =        -21101;    //存储共享开关错误，1为开启，0为关闭
var E_SAMBA_ENCRYPT      =        -21102;    //存储加密开关错误，1为开启，0为关闭
var E_MINIDLNA_ENABLE    =        -21103;    //媒体服务器开关错误，1为开启，0为关闭
var E_SAMBA_USER_BLANK   =        -21104;    //用户名不能为空
var E_SAMBA_USER         =        -21105;    //用户名非法
var E_SAMBA_PWD_BLANK    =        -21106;    //密码不能为空
var E_SAMBA_PWD          =        -21107;    //密码非法
var E_USB_BUSY           =        -21108;    //USB设备正忙
var E_USB_USB3           =        -21109;    //USB3.0开关错误，1为开启，0为关闭
var E_SIGNAL_MODE        =        -21201;    //健康节能模式选择错误，1为一键穿墙模式，0为健康节能模式
var E_SIGNAL_MODEBLANK   =        -21202;    //健康节能模式选择不能为空
var E_ICMP_RANGE         =        -21301;    //MP-FLOOD数据包阈值错误
var E_UDP_RANGE          =        -21302;    //UDP-FLOOD数据包阈值错误
var E_TCP_SYN_RANGE      =        -21303;    //TCP-SYN-FLOOD数据包阈值错误
var E_QOS_SWITCH         =        -21401;    //QoS开关错误，1为开启，0为关闭
var E_QOS_MODE           =        -21402;    //QoS模式错误
var E_QOS_MODEBLANK      =        -21403;    //QoS模式为空
var E_PFDENABLE          =        -21501;    //portforward模式错误，状态仅支持开关
var E_PFDMODE            =        -21502;    //端口转发操作类型错误
var E_INVPFDIPNULL       =        -21503;    //服务器ip地址不能为空
var E_INVPFDIP           =        -21504;    //服务器ip地址无效
var E_INVPFDLANIP        =        -21505;    //服务器IP地址不能等于LAN口IP地址
var E_INVPFDGWLANIP      =        -21506;    //服务器IP地址应该和LAN口IP地址在同一网段
var E_INVPFDSTFDNULLSV   =        -21507;    //内部起始端口不能为空
var E_INVPFDSTFDSV       =        -21508;    //内部起始端口无效
var E_INVPFDSTFDRGSV     =        -21509;    //内部起始端口应在1-65535之间
var E_INVPFDENFDNULLSV   =        -21510;    //内部结束端口不能为空
var E_INVPFDENFDSV       =        -21511;    //内部结束端口无效
var E_INVPFDENFDRGSV     =        -21512;    //内部结束端口应在1-65535之间
var E_INVPFDSTENSV       =        -21513;    //内部起始端口应该小于内部结束端口
var E_INVPFDFDRMSV       =        -21514;    //外部端口号与远程管理端口号冲突
var E_INVPFDNOFDSV       =        -21515;    //内部端口号与原来的规则内部端口号冲突
var E_INVPFDNAMENULL     =        -21516;    //规则名称不能为空
var E_INVPFDNAME         =        -21517;    //规则名称非法
var E_INVPFDAMNULL       =        -21518;    //协议类型不能为空
var E_INVPFDAM           =        -21519;    //协议类型非法
var E_INVPFDNAMELEN      =        -21520;    //规则名称长度非法
var E_INVPFDSTFDNULLCL   =        -21521;    //外部起始端口不能为空
var E_INVPFDSTFDCL       =        -21522;    //外部起始端口无效
var E_INVPFDSTFDRGCL     =        -21523;    //外部起始端口应在1-65535之间
var E_INVPFDENFDNULLCL   =        -21524;    //外部结束端口不能为空
var E_INVPFDENFDCL       =        -21525;    //外部结束端口无效
var E_INVPFDENFDRGCL     =        -21526;    //外部结束端口应在1-65535之间
var E_INVPFDSTENCL       =        -21527;    //外部起始端口应该小于外部结束端口
var E_INVPFDNOFDCL       =        -21528;    //外部端口号与原来的规则外部端口号冲突
var E_INVSVPRTCLPRT      =        -21529;    //外部为单一端口号，内部也必须是端口号
var E_INVSVPRTEQCLPRT    =        -21530;    //外部为端口范围时，内部必须为单一端口号或者相同的端口范围
var E_DMZMODE            =        -21601;    //DMZ模式错误，状态仅支持开关
var E_INVDMZIP           =        -21602;    //非法的IP地址
var E_INVDMZLANIP        =        -21603;    //DMZ主机IP地址不能等于LAN口IP地址
var E_INVDMZGWLANIP      =        -21604;    //DMZ主机IP地址应该和LAN口IP地址在同一网段
var E_INVDMZIPNULL       =        -21605;    //DMZ主机IP地址不能为空
var E_UPNP_SWITCH        =        -21701;    //upnp开关取值应该是0或1
var E_UPNP_ACTION        =        -21702;    //upnp
var E_INVMACCLONEMODE    =        -22001;    //非法MAC克隆模式
var E_MACCLONEBLANK      =        -22002;    //MAC克隆地址不能为空
var E_INVMACCLONEADDR    =        -22003;    //非法MAC克隆地址
var E_MACCLONECONFLICT   =        -22004;    //MAC地址克隆冲突
var E_SMARTCONNENABLE    =        -22101;    //双频二合一开关
var E_WLVISENABLE        =        -22201;    //访客网络开关错误，状态仅支持开关
var E_WLVISSSIDBLANK     =        -22202;    //访客网络网络名为空
var E_WLVISSSIDLEN       =        -22203;    //访客网络网络名长度非法
var E_WLVISSSIDILLEGAL   =        -22204;    //访客网络网络名包含非法字符
var E_WLVISSSIDPWLEN     =        -22205;    //访客网络密码长度非法
var E_WLVISSSIDPWILLEGAL =        -22206;    //访客网络密码包含非法字符
var E_WLVISSSIDBROAD     =        -22207;    //访客网络广播配置错误
var E_WLVISSSIDCONFLICT2G =        -22208;    //访客网络SSID与2.4G的ssid相同
var E_WLVISSSIDCONFLICT5G =        -22209;    //访客网络SSID与5G的ssid相同
var E_RMTENABLE          =        -22301;    //远程管理开关错误，状态仅支持开关
var E_RMTIPBLANK         =        -22302;    //远程管理IP不能为空
var E_INVRMTIP           =        -22303;    //远程管理IP非法
var E_INVRMTLANIP        =        -22304;    //远程管理IP不能与局域网在同一网段
var E_RMTPORTBLANK       =        -22305;    //远程管理端口不能为空
var E_INVRMTPORT         =        -22306;    //远程管理端口非法
var E_INVRMTPFDPORT      =        -22307;    //远程管理端口与端口转发端口冲突
var E_DEVMNG_EMAC        =        -22401;    //无效的MAC地址
var E_DEVMNG_EIP         =        -22402;    //无效的IP地址
var E_DEVMNG_RNM         =        -22403;    //无效的设备名称，长度应在1-32之间的任意字符
var E_DEVMNG_LMT         =        -22404;    //无效的带宽限速值，0-4096正整数
var E_INCONFILE          =        -22501;    //配置文件错误
var E_TIME_ZONE          =        -22601;    //时区设置错误
var E_CLIENT_MODE        =        -22701;    //VPN客户端模式错误，状态仅支持开关
var E_CLIENT_RULENAME_BLANK =        -22702;    //规则名称不能为空
var E_CLIENT_RULENAME_ILLEGAL =        -22703;    //规则名称非法
var E_CLIENT_RULENAME_LEN =        -22704;    //规则名称长度非法
var E_CLIENT_PROTOCOL_ILLEGAL =        -22705;    //VPN客户端协议错误
var E_CLIENT_SERVER_BLANK =        -22706;    //服务IP不能为空
var E_CLIENT_SERVER_ILLEGAL =        -22707;    //服务IP非法
var E_CLIENT_USERNAME_BLANK =        -22708;    //用户名不能为空
var E_CLIENT_USERNAME_ILLEGAL =        -22709;    //用户名非法
var E_CLIENT_USERNAME_LEN =        -22710;    //用户名长度非法
var E_CLIENT_PASSWORD_BLANK =        -22711;    //密码不能为空
var E_CLIENT_PASSWORD_ILLEGAL =        -22712;    //密码非法
var E_CLIENT_PASSWORD_LEN =        -22713;    //密码长度非法
var E_VPNSERVER_MODE     =        -22801;    //VPN服务端模式错误，状态仅支持开关
var E_VPNSERVER_PROTOCOL_BLANK =        -22802;    //VPN服务端协议不能为空
var E_VPNSERVER_PROTOCOL_ILLEGAL =        -22803;    //VPN服务端协议错误
var E_VPNSERVER_SERVER_BLANK =        -22804;    //服务端IP不能为空
var E_VPNSERVER_SERVER_ILLEGAL =        -22805;    //服务端IP非法
var E_VPNSERVER_USERNAME_BLANK =        -22806;    //用户名不能为空
var E_VPNSERVER_USERNAME_ILLEGAL =        -22807;    //用户名非法
var E_VPNSERVER_USERNAME_LEN =        -22808;    //用户名长度非法
var E_VPNSERVER_CONFLICT_USERNAME =        -22809;    //用户名与已有用户名冲突
var E_VPNSERVER_PASSWORD_BLANK =        -22810;    //密码不能为空
var E_VPNSERVER_PASSWORD_ILLEGAL =        -22811;    //密码非法
var E_VPNSERVER_PASSWORD_LEN =        -22812;    //密码长度非法
var E_WDS_MODE           =        -22901;    //WDS模式错误，状态仅支持开关
var E_WDS_MAC_BLANK      =        -22902;    //主路由MAC地址不能为空
var E_WDS_MAC_ILLEGAL    =        -22903;    //主路由MAC地址非法
var E_MAIN_SSID_BLANK    =        -22904;    //主路由无线名称不能为空
var E_MAIN_SSID_ILLEGAL  =        -22905;    //主路由无线名称非法
var E_MAIN_SSID_LEN      =        -22906;    //主路由无线名称长度非法
var E_MAIN_PASSWORD_BLANK =        -22907;    //主路由无线密码不能为空
var E_MAIN_PASSWORD_ILLEGAL =        -22908;    //主路由无线密码非法
var E_MAIN_PASSWORD_LEN  =        -22909;    //主路由无线密码长度非法
var E_TIMERREBOOT_MODE   =        -23001;    //定时重启模式错误，状态仅支持开关
var E_TIMERREBOOT_HOUR   =        -23002;    //定时重启小时值域非法
var E_TIMERREBOOT_MINUTE =        -23003;    //定时重启分钟值域非法
