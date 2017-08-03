1. zhengze 类型：对象  
    说明：const zhengze={
        emailReg:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,//emall
        ip:/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g,//ip地址
        shuzi:"^[0-9]*$",//只能输入数字
        tel:"^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$",//手机号
        sfz:"^\d{15}|\d{18}$"//身份证
    }

2. cun(key, value) 类型：函数        参数说明：key是要存得值得名称，value是要存得值  
    说明：localStorage的存储，存任何类型得值都可以

3. qu(key) 类型：函数        参数说明：key是存得值得名称  
    说明：localStorage的存储，取之前存得值，不过返回得都是字符串

4. shan(key) 类型：函数        参数说明：key是存得值得名称  
    说明：localStorage的存储，删之前存得值

5. cuns(key, value) 类型：函数        参数说明：key是要存得值得名称，value是要存得值  
    说明：sessionStorage的存储，存任何类型得值都可以

6. qus(key) 类型：函数        参数说明：key是存得值得名称  
    说明：sessionStorage的存储，取之前存得值，不过返回得都是字符串

7. shans(key) 类型：函数        参数说明：key是存得值得名称  
    说明：sessionStorage的存储，删之前存得值

8. qusqus_obj(key) 类型：函数        参数说明：key是存得值得名称  
    说明：sessionStorage的存储，取之前存得对象，直接返回对象

9. shans_all() 类型：函数  
    说明：sessionStorage的存储，删之前所有存得值

10. arrbaohan(arr,shan) 类型：函数        参数说明：arr是要分析得数组，shan是需要判断得元素  
    说明：判断数组中是否包含某个元素，返回true就是包含，false就是不包含

11. arrshan(arr,shan) 类型：函数        参数说明：arr是目标得数组，shan是需要删除得元素  
    说明：还需要解释吗？返回得是处理后得数组

12. suiji(arr) 类型：函数        参数说明：arr是要随机得数组  
    说明：输入数组，会随机抽取数组中得一个值输出

13. Convert(money) 类型：函数        参数说明：money就是你得钱喽  
    说明：输入3000，变成3,000.00

14. NowTimeCode() 类型：函数  
    说明：获取当前时间戳20170626164644864

15. getNowDate() 类型：函数  
    说明：获取当前日期 2011-09-09

16. chongfu(arr) 类型：函数        参数说明：arr是处理得数组  
    说明：数组去除重复chongfu([1,2,3,4,5,1,1]),返回12345(这是数组，不是字符大兄弟)

17. zuidazhi(arr) 类型：函数        参数说明：arr是处理得数组  
    说明：取最大值

18. zuixiaozhi(arr) 类型：函数        参数说明：arr是处理得数组  
    说明：取最小值

19. paixu(arr，zmp) 类型：函数        参数说明：zmp是怎么排，arr就是目标数组喽  
    说明：数组排序 zmp=1从小到大排，zmp=2从大到小排，不传就是乱排

20. cutstr(str, length) 类型：函数        参数说明：str是目标字符串，length是要多长  
    说明：截取字符串，length输入2得话就是，  例如：哈哈...

21. quchukongge(zi) 类型：函数        参数说明：zi就是目标字符串  
    说明：清除句子中包含得空格

22. download(href, title) 类型：函数        参数说明：href就是下载连接,title就是下载得名称  
    说明：输入下载连接生成下载

23. kongobj(obj) 类型：函数        参数说明：obj就是目标对象  
    说明：判断是不是空对象，空对象就是{}

24. kong(zhi) 类型：函数        参数说明：zhi目标值  
    说明：判断是否为null或者undefind

25. baohan(str,zi) 类型：函数        参数说明：str就是目标字符串，zi就是想查询是否包含得zi  
    说明：判断str中是否包含某个字符串

25. toDecimal(x) 类型：函数        参数说明：x就是你要输入得数字  
    说明：保留两位小数，将浮点数四舍五入，取小数点后2位