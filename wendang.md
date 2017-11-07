# 操作数组
1. arr_in(arr,shan) 类型：函数        参数说明：arr是要分析得数组，shan是需要判断得元素  
    说明：判断数组中是否包含某个元素，返回true就是包含，false就是不包含

2. arr_del(arr,shan) 类型：函数        参数说明：arr是目标得数组，shan是需要删除得元素  
    说明：还需要解释吗？返回得是处理后得数组

3. arr_random(arr) 类型：函数        参数说明：arr是要随机得数组  
    说明：输入数组，会随机抽取数组中得一个值输出

4. arr_repeat(arr) 类型：函数        参数说明：arr是处理得数组  
    说明：数组去除重复chongfu([1,2,3,4,5,1,1]),返回12345(这是数组，不是字符大兄弟)

5. arr_max(arr) 类型：函数        参数说明：arr是处理得数组  
    说明：取最大值

6. arr_min(arr) 类型：函数        参数说明：arr是处理得数组  
    说明：取最小值

7. arr_sort(arr，zmp) 类型：函数        参数说明：zmp是怎么排，arr就是目标数组喽  
    说明：数组排序 zmp=1从小到大排，zmp=2从大到小排，不传就是乱排

# 操作字符串
1. str_cut(str, length) 类型：函数        参数说明：str是目标字符串，length是要多长  
    说明：截取字符串，length输入2得话就是，  例如：哈哈...

2. str_space(zi) 类型：函数        参数说明：zi就是目标字符串  
    说明：清除句子中包含得空格
    
3. str_val(str,zi) 类型：函数        参数说明：str就是目标字符串，zi就是想查询是否包含得zi  
    说明：判断str中是否包含某个字符串

# 操作数字
1. num_Rounding(x) 类型：函数        参数说明：x就是你要输入得数字  
    说明：保留两位小数，将浮点数四舍五入，取小数点后2位

# 操作对象
1. obj_empty(obj) 类型：函数        参数说明：obj就是目标对象  
    说明：判断是不是空对象，空对象就是{}  
    
# 操作存储
1. cun(key, value) 类型：函数        参数说明：key是要存得值得名称，value是要存得值  
    说明：localStorage的存储，存任何类型得值都可以

2. qu(key) 类型：函数        参数说明：key是存得值得名称  
    说明：localStorage的存储，取之前存得值，不过返回得都是字符串

3. shan(key) 类型：函数        参数说明：key是存得值得名称  
    说明：localStorage的存储，删之前存得值

4. cuns(key, value) 类型：函数        参数说明：key是要存得值得名称，value是要存得值  
    说明：sessionStorage的存储，存任何类型得值都可以

5. qus(key) 类型：函数        参数说明：key是存得值得名称  
    说明：sessionStorage的存储，取之前存得值，不过返回得都是字符串

6. shans(key) 类型：函数        参数说明：key是存得值得名称  
    说明：sessionStorage的存储，删之前存得值

7. qus_obj(key) 类型：函数        参数说明：key是存得值得名称  
    说明：sessionStorage的存储，取之前存得对象，直接返回对象

8. shans_all() 类型：函数  
    说明：sessionStorage的存储，删之前所有存得值
    
# 操作值
1. download(href, title) 类型：函数        参数说明：href就是下载连接,title就是下载得名称  
    说明：输入下载连接生成下载

2. val_empty(zhi) 类型：函数        参数说明：zhi目标值  
    说明：判断是否为null或者undefind
    
# 其它小功能
1. reg 类型：对象  
    说明：  
    
        reg.emailReg:emall  
        reg.ip:ip地址  
        reg.shuzi:只能输入数字  
        reg.tel:手机号  
        reg.sfz:身份证  


2. convert(money) 类型：函数        参数说明：money就是你得钱喽  
    说明：输入3000，变成3,000.00

3. NowTimeCode() 类型：函数  
    说明：获取当前时间戳20170626164644864

4. getNowDate(lianjie) 类型：函数   参数说明：lianjie就是需要什么连接符，默认得是-，可以不填  
    说明：获取当前日期 2011-09-09






