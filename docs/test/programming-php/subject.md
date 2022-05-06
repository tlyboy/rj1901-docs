# PHP 程序设计

## 单选题

1. 文件上传框的 type 属性值是()

   A、text

   B、file

   C、textarea

   D、checkbox

2. 自定义函数语法格式是在函数名前加（）

   A、class

   B、function

   C、public

   D、int

3. 函数 var_dump 的意义是()

   A、定义数组

   B、遍历数组

   C、输出变量的相关信息

   D、递归数组

4. strtolower( )函数的功能是（）

   A、将给定的字符串全部转换为小写字母

   B、将给定的字符串全部转换为大写字母

   C、将给定的字符串首字母转换为小写字母

   D、将给定的字符串首字母转换为大写字母

5. 以下代码的运行结果是()

   ```php
   <?
   $i = 9;
   if ($i >= 6) {
       echo "a";
   } else {
       echo "b";
   }
   ?>
   ```

   A、输出 a

   B、输出 b

   C、条件不足,无法确定

   D、运行出错

6. 引用文件 "time.inc" 的正确方法是？

   A、\<? php require("time.inc"); ?\>

   B、\<!-- include file="time.inc" --\>

   C、\<? php include_file("time.inc"); ?\>

   D、\<% include file="time.inc" %\>

7. PHP 用于收集来自表单中属性 method="post"的超全局变量是（）

   A、$\_COOKIE

   B、$\_SESSION

   C、$\_GET

   D、$\_POST

8. 使用 PDO 操作数据，要获得新增记录的 id，可通过 PDOStatement 对象的（）

   A、prepare

   B、query

   C、fetchAll

   D、lastInsertId

9. 下列说法正确的是（）

   A、数组的下标必须为数字，且从“0”开始

   B、数组的下标可以是字符串弱类型语言

   C、数组中的元素类型必顺一致

   D、数组的下标必须是连续的

10. 不但能输出值的信息，还可以输出值的类型等信息的是（）

    A、var_dump( )

    B、echo( )

    C、print( )

    D、die( )

11. WAMP 不包含下面哪种（）

    A、PHP 语言

    B、Apache 服务器

    C、MySQL 数据库

    D、Linux 系统

12. 以下代码执行结果为

    ```php
    <?php
    function print_A()
    {
        $A = "phpchina";
        echo "A值为: " . $A  .  "<p>";
        return ($A);
    }
    $B = print_A();
    echo "B值为: " . $B . "<P>";
    ?>
    ```

    A、A 值为: B 值为:

    B、A 值为: B 值为: phpchina

    C、A 值为: phpchina B 值为: phpchina

    D、A 值为: phpchina B 值为:

13. 定义关联数组时，其键名与值之间的分隔符是（）

    A、->

    B、=>

    C、:

    D、#

14. 在 PHP 嵌入 HTML 文档使用的定界符号是

    A、\<!-- --\>

    B、双引号””或单引号’’

    C、以”<%--“开始，到”--%>”结束

    D、以”\<?php“开始，到”?\>”结束

15. php 中字符串的连接运算符是（）

    A、-

    B、+

    C、&

    D、.

16. 假设$a=5,有$a+=3,则$a 的值为

    A、5

    B、6

    C、7

    D、8

17. 以下哪个 SQL 语句是正确的（）

    A、insert into users values(‘p001’,’张三’,’男’);

    B、create table(Code int primary key);

    C、update users Code=’p002’where Code=’p001’;

    D、select as‘代号’from users；

18. 要查看一个变量的数据类型,可使用函数()

    A、type()

    B、gettype()

    C、isType()

    D、Type()

19. 在 HTML 中，标记的作用是

    A、标题

    B、预排版

    C、转行

    D、文字效果

20. 有下列 PHP 语句段

    ```php
    <?php

    if ($a)

        print "true";

    else

        print "false";

    ?>
    ```

    若要输出”false”，$a 应该是:

    A、10

    B、–3

    C、true

    D、0

21. 元字符是用于构造规则表达式的具有特殊含义的字符。如果在待搜索字符中包含元字符本身，必须在其前加上（）进行转义

    A、单引号’

    B、双引号”

    C、正斜杠/

    D、反斜杠\

22. 目前我国实行境内网站（）和域名实名制度，需要在服务商处办理相关手续，否则网页空间和域名不能开通和解析

    A、注册

    B、验证

    C、负责

    D、备案

23. 以下关于字符串的说法正确的是（）

    A、echo “hello\nworld”;在页面可以实现显示换行效果

    B、echo ‘helloworld.a’;可以解析变量 a 的值

    C、echo ‘helloworld{$b}’;可以解析变量 b 的值

    D、echo “helloworld{$c}”;可以解析变量 c 的值

24. 浏览网页时,看到的内容是 HTML 的哪一部分?

    A、title

    B、table

    C、body

    D、head

25. 以下运算符的优先级最高的是

    A、逻辑运算符 &&、||

    B、比较运算符 <、<=、>、>=、==、!=

    C、赋值运算符 =、+=、-=、\*=、=、/=、.=

    D、算术运算符 +、-、\*、/、%

26. 在 PHP 中属于比较运算符的是

    A、=

    B、！

    C、==

    D、&

27. 使用（）函数可以求得数组的大小

    A、count( )

    B、conut( )

    C、$\_COUNT["名称"]

    D、$\_CONUT["名称"]

28. 关于 PHP 变量的说法正确的是

    A、PHP 是一种强类型语言

    B、PHP 变量声明时需要指定其变量的类型

    C、PHP 变量声明时在变量名前面使用的字符是”&”

    D、PHP 变量使用时，上下文会自动确定其变量的类型

29. 下列说法正确的是：（）

    A、数组的下标必须为数字，且从“0”开始

    B、数组的下标可以是字符串

    C、数组中的元素类型必顺一致

    D、数组的下标必须是连续的

30. 在 str_replace(1,2,3)函数中 1 2、3、所代表的含义是()

    A、"取代字符串＂，＂被取代字符串＂，＂来源字符串＂

    B、＂来源字符串＂，＂被取代字符串＂，"取代字符串＂

    C、＂来源字符串＂，"取代字符串＂，＂被取代字符串＂

    D、＂被取代字符串＂，"取代字符串＂，＂来源字符串＂

31. 文件上传框的 type 属性值是()

    A、text

    B、file

    C、textarea

    D、checkbox

32. strtoupper()函数的功能是

    A、将给定字符串全部转换为大写字母。

    B、将给定字符串全部转换为小写字母。

    C、将给定字符串首字母转换为大写字母。

    D、将给定字符串首字母转换为小写字母。

33. strtolower()函数的功能是（）

    A、将给定的字符串全部转换为小写字母

    B、将给定的字符串全部转换为大写字母

    C、将给定的字符串首字母转换为小写字母

    D、将给定的字符串首字母转换为大写字母

34. 读取 get 方法传递的表单元素值的方法是

    A、$\_GET["名称"]

    B、$get["名称"]

    C、$\_POST["名称"]

    D、$POST["名称"]

35. 使用 PDO 操作数据，要获得新增记录的 id，可通过 PDOStatement 对象的（）

    A、prepare

    B、query

    C、fetchAll

    D、lastInsertId

36. PHP 表达式$foo=”1” . ”bob3”,则$foo 的值是

    A、1

    B、1bob3

    C、1b

    D、92

37. 在 html 中嵌入 javaScript,应该使用的标记是()

    A、\<script language="javascript"\> \</script\>

    B、\<head\> \</head\>

    C、\<body\> \</body\>

    D、\<!-- --\>

38. 标记符 title 是放在标记符什么之间的

    A、html 与 html

    B、head 与 head

    C、body 与 body

    D、head 与 body

39. php 定义变量正确的是（）

    A、var a = 5;

    B、$a = 16;

    C、int b = 6;

    D、var $a = 12;

40. 可获取浏览者的 IP 地址的是（）

    A、$\_SERVER[“REQUEST_URI”]）

    B、$\_SERVER[‘PHP_SELF’]

    C、$\_SERVER[“REMOTE_ADDR”]

    D、$\_SERVER['SERVER_ADDR']

41. 以下代码执行结果为

    ```php
    <?php
    function print_A()
    {
        $A = "phpchina";
        echo "A值为: " . $A  .  "<p>";
        return ($A);
    }
    $B = print_A();
    echo "B值为: "  .  $B  .   "<P>";
    ?>
    ```

    A、A 值为: B 值为:

    B、A 值为: B 值为:phpchina

    C、A 值为: phpchina B 值为: phpchina

    D、A 值为: phpchina B 值为:

42. 语句 for($k=0;$k=1;$k++);和语句for($k=0;$k==1;$k++);执行的次数分别是

    A、0 和无限

    B、无限和 0

    C、都是无限

    D、都是 0

43. 数字索引数组默认下标从（）开始

    A、0

    B、1

    C、-1

    D、第 1 个出现的数字

44. 文本区域的 type 属性值是()

    A、checkbox

    B、radio

    C、textarea

    D、text

45. 假设$a=5,有$a+=3,则$a 的值为

    A、5

    B、6

    C、7

    D、8

46. 要查看一个变量的数据类型,可使用函数()

    A、type()

    B、gettype()

    C、isType()

    D、Type()

47. 在 HTML 中，标记的作用是

    A、标题

    B、预排版

    C、转行

    D、文字效果

48. 有下列 PHP 语句段

    ```php
    <?php

    if ($a)

        print "true";

    else

        print "false";

    ?>
    ```

    若要输出”false”，$a 应该是:

    A、10

    B、–3

    C、true

    D、0

49. cookie 和 Session 变量分别保存在

    A、客户端和客户端

    B、服务器端和服务器端

    C、客户端和服务器端

    D、服务器端和客户端

50. 新建一个数组的函数是()

    A、array

    B、next

    C、count

    D、reset

51. 目前我国实行境内网站（）和域名实名制度，需要在服务商处办理相关手续，否则网页空间和域名不能开通和解析

    A、注册

    B、验证

    C、负责

    D、备案

52. 以下代码运行结果()

    ```php
    $A = array("Monday", "Tuesday", "Wednesday");echo $A[2];
    ```

    A、Monday

    B、Tuesday

    C、Wednesday

    D、没有显示

53. php 中哪个语句可以输出变量类型（）

    A、echo

    B、print

    C、var_dump()

    D、die

54. 在 PHP 中属于比较运算符的是

    A、=

    B、！

    C、==

    D、&

55. 要检查一个常量是否设置,可以使用函数()

    A、defined( )

    B、isset( )

    C、isdefin( )

    D、无

56. 单选框的 type 属性值是()

    A、checkbox

    B、radio

    C、select

    D、check

57. 下列说法正确的是：（）

    A、数组的下标必须为数字，且从“0”开始

    B、数组的下标可以是字符串

    C、数组中的元素类型必顺一致

    D、数组的下标必须是连续的

58. 运算符"%"的作用是()

    A、无效

    B、取整

    C、取余

    D、除

59. JavaScript 代码和 PHP 代码分别运行在（）

    A、服务端和客户端

    B、客户端和服务端

    C、服务端和服务端

    D、客户端和客户端

60. cookie 的值存储在（）

    A、网站中

    B、程序中

    C、客户端

    D、服务器端

61. Cookie 是什么类型的文件（）

    A、可执行

    B、文本

    C、HTML

    D、二进制

62. 自定义函数语法格式是在函数名前加（）

    A、class

    B、function

    C、public

    D、int

63. strtoupper()函数的功能是

    A、将给定字符串全部转换为大写字母。

    B、将给定字符串全部转换为小写字母。

    C、将给定字符串首字母转换为大写字母。

    D、将给定字符串首字母转换为小写字母。

64. PHP 用于收集来自表单中属性 method="post"的超全局变量是（）

    A、$\_COOKIE

    B、$\_SESSION

    C、$\_GET

    D、$\_POST

65. 使用 PDO 操作数据，要获得新增记录的 id，可通过 PDOStatement 对象的（）

    A、prepare

    B、query

    C、fetchAll

    D、lastInsertId

66. 在 PHP 中，所有的变量以哪个符号开头？

    A、!

    B、&

    C、$

67. 标记符 title 是放在标记符什么之间的

    A、html 与 html

    B、head 与 head

    C、body 与 body

    D、head 与 body

68. 下列不正确的变量名是()

    A、$8abc

    B、$\_test

    C、$Var

    D、$printr

69. 下列定义函数的方式是正确的（）

    A、function Show($a,$b){ }

    B、function Show($a, ){ }

    C、function Show(a,b){ }

    D、function Show(int $a){ }

70. 数字索引数组默认下标从（）开始

    A、0

    B、1

    C、-1

    D、第 1 个出现的数字

71. php 如何输出反斜杠（）

    A、\n

    B、\r

    C、\t

    D、\\\\

72. 从数组队列头部删除元素可以使用（）函数

    A、array_push()

    B、array_pop()

    C、array_shift()

    D、array_unshift()

73. 自定义函数中，返回函数值的关键字是（）

    A、returns

    B、close

    C、return

    D、back

74. 下列哪项不属于 OOP 的三大特性（）

    A、封装

    B、重载

    C、继承

    D、多态

75. 如何使用 PHP 输出"helloworld"？

    A、"Hello World";

    B、echo "Hello World";

    C、Document.Write("Hello World");

76. 元字符是用于构造规则表达式的具有特殊含义的字符。如果在待搜索字符中包含元字符本身，必须在其前加上（）进行转义

    A、单引号’

    B、双引号”

    C、正斜杠/

    D、反斜杠\

77. 正则表达式/^\d{6}$/可匹配如下哪个字符串

    A、123457

    B、d6

    C、dddddd

    D、666 换行 666

78. 目前我国实行境内网站（）和域名实名制度，需要在服务商处办理相关手续，否则网页空间和域名不能开通和解析

    A、注册

    B、验证

    C、负责

    D、备案

79. 计算字符串长度的函数是（）

    A、strlen( )

    B、len( )

    C、stringlen( )

    D、lens( )

80. 除可直接创建 PHP 文件外，普通的 HTML 网页若改造成 PHP 文件，需（）

    A、将该网页扩展名重命名为 php

    B、将该网页扩展名重命名为 html

    C、在网页内书写 php 代码

    D、一旦创建了普通的 HTML 网页，就不能再改造成 PHP 文件

81. 以下关于字符串的说法正确的是（）

    A、echo“hello\nworld”;在页面可以实现显示换行效果

    B、echo‘helloworld.a’;可以解析变量 a 的值

    C、echo‘helloworld{$b}’;可以解析变量 b 的值

    D、echo“helloworld{$c}”;可以解析变量 c 的值

82. 假设$a=6,有$b=($a--),则$b 是

    A、4

    B、5

    C、6、

    D、0

83. php 中哪个语句可以输出变量类型（）

    A、echo

    B、print

    C、var_dump()

    D、die

84. 浏览网页时,看到的内容是 HTML 的哪一部分?

    A、title

    B、table

    C、body

    D、head

85. 以下运算符的优先级最高的是

    A、逻辑运算符 &&、||

    B、比较运算符 <、<=、>、>=、==、!=

    C、赋值运算符 =、+=、-=、\*=、=、/=、.=

    D、算术运算符 +、-、\*、/、%

86. php 中以下能输出 1 到 10 之间的随机数的是（）

    A、echo rand();

    B、echo rand(1,10);

    C、echo rand()\*10;

    D、echo rand(10);

87. php 输出拼接字符串正确的是（）

    A、echo $a+”hello”

    B、echo $a.”hello”

    C、echo $a+$b

    D、echo ‘{$a}hello’

88. 下列说法正确的是：（）

    A、数组的下标必须为数字，且从“0”开始

    B、数组的下标可以是字符串

    C、数组中的元素类型必顺一致

    D、数组的下标必须是连续的

89. JavaScript 代码和 PHP 代码分别运行在（）

    A、服务端和客户端

    B、客户端和服务端

    C、服务端和服务端

    D、客户端和客户端

90. 已知$g=14,则PHP表达式$h=$g+=10,运算后的结果是

    A、$h=10.$g=14

    B、$h=10,$g=24

    C、$h=24,$g=24

    D、$h=24,$g=10

<br />

## 判断题

1. 请判断以下说法是否正确：当使用 POST 方法时，变量显示在 URL 中。
2. php 中，函数默认按值传递参数。（）
3. MS-server200 与 mysql 一样,同属微软公司的产品,用于软件开发的数据库支持。（）
4. 运算符“--”可以对常量和变量进行自身减 1。（）
5. 常量的作用域是全局的,不存在全局与局部的概念。（）
6. if 条件控制语句中，if 后面的{ }可有可无，意义一样。（）
7. php 中布尔类型数据只有两个值：真和假。（）
8. 每个语句结尾都要加“；”来表示语句结束。（）
9. php 变量使用之前需要定义变量类型。（）
10. php 可以使用“scanf”来打印输出结果。（）
11. php 中,在任何时候,双引号和单引号效果都是不一样的。（）
12. php 中,单引号字符串不支持变量解析以及转义字符。（）
13. php 中，==与===是同一个运算符。（）
14. php 语言中的数值型字符串可以和数字变量进行混合运算。（）
15. php 中连接两个字符串的符号是“+”。（）
16. mysql 数据库中更新数据用 select 语句。（）
17. while 和 do-while 语句都是先判断条件再执行循环体。（）
18. php 中,字符串是用引号引起来的字符,单引号和双引号没有区别,都是一样的,随便用哪一个都是一样的。（）
19. 运算符“--”可以对常量和变量进行自身减 1。（）
20. MySQL 可以建立个多用户,但每个用户的权限一样,仅是名称不一样而已。（）
21. 请判断以下说法是否正确：包含文件必须使用文件后缀".inc"。
22. 若定义数组时省略关键字 key，则第三个数组元素的关键字为 3。（）
23. php 中布尔类型数据只有两个值：真和假。（）
24. php 可以使用“scanf”来打印输出结果。（）
25. 运算符“++”可以对常量和变量进行累加 1。（）
26. php 中,在任何时候,双引号和单引号效果都是不一样的。（）
27. 一个 MySQL 服务器,可以拥有多个数据库,每个数据库可拥有多个表。（）
28. php 中，（ ）与{ }具有不一样的功能。（）
29. php 中，==与===是同一个运算符。（）
30. php 语言中的数值型字符串可以和数字变量进行混合运算。（）
31. mysql 数据库中更新数据用 select 语句。（）
32. php 中，函数默认按值传递参数。（）
33. php 中,字符串是用引号引起来的字符,单引号和双引号没有区别,都是一样的,随便用哪一个都是一样的。（）
34. 使用 get 和 post 传递表单值没有什么区别,可以随便选择一种使用。（）
35. 常量的作用域是全局的,不存在全局与局部的概念。（）
36. 若定义数组时省略关键字 key，则第三个数组元素的关键字为 3。（）
37. php 中布尔类型数据只有两个值：真和假。（）
38. php 变量使用之前需要定义变量类型。（）
39. 在 php 中“==”的意思是“等于”。（）
40. 运算符“++”可以对常量和变量进行累加 1。（）
41. php 中,在任何时候,双引号和单引号效果都是不一样的。（）
42. 一个 MySQL 服务器,可以拥有多个数据库,每个数据库可拥有多个表。（）
43. php 中，==与===是同一个运算符。（）
44. session 与 cookie 只是名称不同,实质上没有什么区别,均可用于实现用户登录等功能。（）
45. php 语言中的数值型字符串可以和数字变量进行混合运算。（）

<br />

## 简答题

1. 如何修改 SESSION 的生存时间
2. 表中有 A B C 三列，用 SQL 语句实现：当 A 列大于 B 列时选择 A 列否则选择 B 列，当 B 列大于 C 列时选择 B 列否则选择 C 列。
3. 语句 include 和 require 的区别是什么？为避免多次包含同一文件，可用（?）语句代替它们?
4. session 与 cookie 的区别?
5. 求$a,$b,$c 三个数中的最大值和最小值
6. 表中有 A B C 三列,用 SQL 语句实现：当 A 列大于 B 列时选择 A 列否则选择 B 列，当 B 列大于 C 列时选择 B 列否则选择 C 列。

<br />
