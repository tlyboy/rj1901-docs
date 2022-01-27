# Java 开源框架（题目+答案)

## 一、选择题

###### 1、利用 Eclipse 开发一个简单的 JSP 程序，通常需要新建一个（**C**）

A、Static Web Project

B、EJB Project

C、Dynamic Web Project

D、Java Project

###### 2、Tomcat 服务器的默认端口为（**B**）。

A、80

B、8080

C、3306

D、1433

###### 3、以下编码方式中，不支持中文显示的是（**D**）。

A、gb2312

B、gbk

C、utf-8

D、ISO-8859-1

###### 4、下列关于表单的说法中，错误的是（**B**）。

A、表单的提交方式有 GET 和 POST 两种

B、表单提交的目的页面由 method 方法决定

C、表单通过 \<FORM\> 标签进行定义

D、表单中 \<input type="text" name="username"\> 可以定义一个文本输入框

###### 5、以下 JavaScript 的事件中，在选中文本时被触发的是（**B**）

A、change

B、select

C、keydown

D、focus

###### 6、表单的数据传递到服务器端时，需要通过 JSP 的哪个内置变量的 getParameter 方法来获取提交的数据（**B**）

A、response

B、request

C、session

D、cookie

###### 7、类似于系统的全局变量，可以用于统计网站的访问人数的内置变量是（**A**）

A、application

B、session

C、cookie

D、request

###### 8、以下关于 cookie 和 session 的说法中，错误的是（**B**）。

A、session 是在服务器端保存用户信息

B、cookie 随着会话的结束而被失效删除。

C、cookie 是在客户端保存用户信息

D、session 对象随着会话的结束而失效

###### 9、若某页面需权限校验，用户在登录成功后，需要将对应的用户信息存放到（**C**）中，在跳转到需要校验权限的页面后，取出该信息进行校验。

A、cookie

B、application

C、session

D、临时文件

###### 10、以下关于 JSP 表达式的写法中，正确的是（**C**）。

A、\<%= "XYZ"; %\>

B、\<% out.println("XYZ"); %\>

C、\<%= "XYZ" %\>

D、\<? php echo"XYZ"; ?\>

###### 11、\<%@ page contentType="UTF8" %\>,该语句为（**A**）。

A、JSP 的指令标识

B、JSP 的脚本标识

C、JSP 声明标识

D、JSP 表达式

###### 12、Servletde 实现需要继承 HttpServlet 类，以下程序定义了一个名为 MyServlet 的 servlet，正确的是（**A**）

A、public class MyServlet extends HttpServlet

B、public class MyServlet implements HttpServlet

C、public class MyServlet extend HttpServlet

D、public class HttpServlet extends MyServlet

###### 13、以下采用注解配置的 servlet 形式正确的是（**B**）

A、@WebServlet(/loginCheck)

B、@WebServlet("/loginCheck")

C、@web("\\loginCheck")

D、@servlet("logincheck")

###### 14、下列关于 JavaBean 的说法中，错误的是（**B**）

A、JavaBean 通常用于封装业务和数据

B、JavaBean 中的 getter 和 setter 方法通常是私有 private 的

C、JavaBean 中属性通常是私有 private 的

D、JavaBean 是一个共有类，提供无参的构造方法

###### 15、如果一个数据库连接中，首先建立连接对象 conn，操作对象为 pstmt，得到的查询结果集为 rs，则在释放资源的过程中，正确的释放顺序是（**D**）

A、rs.close(); conn.close(); pstmt.close();

B、conn.close(); pstmt.close(); rs.close();

C、conn.close(); rs.close(); pstmt.close();

D、rs.close(); pstmt.close(); conn.close();

###### 16、下列选项中哪一项是数据库（**C**）。

A、IIS

B、Apache

C、Oracle

D、Tomcat

###### 17、MVC 框架层中 C 代表的是（**C**）

A、模型层

B、视图层

C、控制层

D、数据库层

###### 18、strtus2 框架的**核心控制器**配置在如下的哪个配置文件中。（**A**）

A、web.xml

B、struts.xml

C、hibernate.cfg.xml

D、php.ini

###### 19、strtus2 框架的**业务控制器**配置在如下的哪个配置文件中。（**B**）

A、web.xml

B、struts.xml

C、hibernate.cfg.xml

D、php.ini

###### 20、判断字符串 str 是否与 yyy 相同，可以用以下哪个语句进行判断？（**A**）

A、str.equals("yyy")

B、str.equal("yyy")

C、str="yyy"

D、str、setAttribute("yyy")

###### 21、JSP 的指令标识以下列哪个形式作为开头？（**D**）

A、\<%!

B、\<%#

C、\<?@

D、\<%@

###### 22、以下配置文件中，可以将对象 Person 映射到数据库表的配置文件是（**C**）// 不考

A、hibernate.cfg.xml

B、hibernate.cfg

C、Person.hbm.xml

D、Person.cfg

###### 23、在操作数据库的过程中，以下代码的含义是（**C**）

```java
Class.forName(driverClass);
```

A、打开数据库连接

B、关闭连接

C、加载驱动程序

D、获取查询结果

###### 24、以下关于 cookie 和 session 的说法中，错误的是（**B**）。

A、session 是在服务器端保存用户信息

B、cookie 在服务器端保存用户的信息。

C、cookie 是以文本的形式保存用户信息

D、session 对象随着会话的结束而失效

###### 25、<%! intx=8; %>,该语句为（**C**）。

A、JSP 的指令标识

B、JSP 的脚本标识

C、JSP 声明标识

D、JSP 表达式

###### 26、如果 SQL 语句中使用了？作为占位符，该 SQL 语句通常是下列哪个对象的参数（**B**）。

A、Statement

B、PreparedStatement

C、prepare

D、Connection

###### 27、MVC 框架层中 V 代表的是（**B**）

A、模型层

B、视图层

C、控制层

D、数据库层

###### 28、JSP 的声明标识以下列哪个形式作为开头？（**A**）

A、\<%!

B、\<%#

C、\<?@

D、\<%@

<br>

## 二、填空题

1. 在以下 HTML 常用的标签设计中 ，\<input type=" radio" name ="" \> ， 表示设置一个
   单选框，对应的复选框使用的 type 为（**checkbox**）。
2. 在 JavaScript 中，使用严格的定义模式定义一个值为 8 的变量 a ，正确的定义形式是
   （**var a = 8;**）。
3. JSP 的声明标识，通常是以（**<%!**）标记开始，以”%>”标记结束。
4. 如果表单中用户名字段为”userName” ，则可以通过（**request.getParameter('userName');**）来获取对应的用户名的数据。
5. 通过 session 将属性”name”赋值为”abc”，正确的赋值方式为（**session.setAttribute("name", "abc");**）。
6. Struts2 框架的控制器组件包括（**核心控制器**）和业务控制器 action。
7. JSP 开发是采用（**HTML**）嵌套 Java 代码的方式实现
8. Struts 2 是基于（**MVC**）模式的 Web 框架。主要包括控制器组件、模型组件和（**视图**）
   组件。
9. 利用 JSP + Servlet + JavaBean 求任意两个整数之间累加和值时，由
   （**JSP**）实现信息的提交和运算结果的展示，由 Servlet 获取数据，实现跳转，由
   （**JavaBean**）计算累加值。

<br>

## 三、判断题

1. Java 中也可以定义一个指针。（**错**）
2. 在 JSP 指令标识中，<% 与@ 之间可以有空格，如<% @ import=” ” %>（**错**）
3. JavaScript 是一种脚本语言，通过浏览器便可直接运行。（**对**）
4. JavaBean 是符合一定规则的 Java 代码，所以文件的后缀名是.java（**对**）
5. JavaBean 最终被保存到后缀名为 jsp 的文件中。（**错**）

<br>

## 四、简答题

1. Java 程序如何销毁一个对象，与其他语言有什么不同？（**P38 页 对象的销毁**）

> Java 提供的垃圾回收机制可以自动判断对象是否还在使用，并能够自动销毁不再使用的对象，收回对象所占用的资源。
>
> 不同：在许多编程语言中，需要手动释放对象所占用的内存，但是，在 Java 中则不需要手动完成这项工作。

2. 简述使用 JDBC 连接数据库的 5 个步骤？（**P187 页**）

> 1. 加载 JDBC 驱动程序
> 2. 创建数据库连接
> 3. 执行 SQL 语句
> 4. 获得查询结果
> 5. 关闭连接

3. 简述 Java 中包的概念？ 列举包的 3 种用途？（**P38 页**）

> 包（package）是 Java 提供的一种区别类名字空间的机制，是类的组织方式，是一组相关类和接口的集合，它提供了访问权限和命名的管理机制。
>
> 3 种用途：
>
> 1. 将功能相近的类放在一个包中，可以方便查找和使用；
> 2. 由于在不同包中可以存在同名类，所以使用包在一定程序上可以避免命名冲突；
> 3. 在 Java 中某些访问权限是以包单位的。

4. session 对象与 application 对象的区别有哪些？

> session 对象和用户回话相关，不同用户的 session 是不同的对象，而用户的 application 对象都是相同的一个对象，即共享这个内置的 application 对象。

5. 请分别说明 click，select 以及 focus 这三个 javascript 事件在何时触发？（**P48 页**）

> click：单击鼠标左键时触发
>
> select：选中文本时触发
>
> focus：任何元素或窗口本身获得焦点时触发

6. JSP 中内置对象有哪些？（**P79 页**）

> application、config、exception、out、page、pageContent、request、response、session

<br>

## 五、应用题

```html
<form name="form1" method="post" action="a.jsp">
  用户名：<input name="username" type="text" id="user" />
  <input type="submit" name="Submit" value="提交" />
</form>
```

以上代码提交的目的页面是什么？

> a.jsp（由 action 页面决定）

如果在下一个页面利用 JSP 内置对象获取表单中的用户名，写出对应的代码。（**P80 页**）

> ```jsp
> <%@ page contentType="text/html;charset=UTF-8" language="java" %>
> <%
>     String username = request.getParameter("username");
>     out.println("用户名为：" + username);
> %>
> ```

```jsp
<%@ page language="java" pageEncoding="UTF-8"%>
<% page import="java.util.Date" %>
<html>
<head><title>JSP 页面的基本构成</title></head>
<body>
<center>
<% String today= new Date().toLocalString(); %>
今天是: <%= today; %>
</center>
</body>
</html>
```

指出程序中 page 指令中 import 属性的作用？（**P55 页**）

> import 属性类似于 Java 中的 import 语句，用来向 JSP 文件中导入需要用到的包。在 Page 指令中可多次使用该属性来导入多个包。

<br>
