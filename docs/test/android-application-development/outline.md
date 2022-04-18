---
title: Android 程序设计（大纲）
date: 2022-1-27
sidebar: false
subSidebar: false
---

1. Android 开发也可以在 Windows 系统中实现。

2. Activity 的生命周期有 活动、暂停、停止 和 非活动 等四个状态。

3. Activity 生命周期：

::: tip

（1）Activity 的整个生命周期中有 活动、暂停、停止 和 非活动 四种状态；

（2）活动状态，是在栈顶的 Activity，它是 可视的、有焦点的，可接受用户输入；

（3）暂停状态，是当 Activity 失去焦点时，但任然可见的状态；

（4）若 Activity 变为完全隐藏，它将变成停止状态；

（5）Activity 被用户关闭，以及暂停或停止状态的 Activity 被系统终结后，Activity 便会进入到非活动状态，它将被移出 Activity 栈。

:::

4. Alert 被称为漂浮的提示条，它也是 View 类的子类。（**错**）

5. Android 不是一个以 windows 为基础的开源操作系统。

6. Android 的四大组件是 activity、service、BroadcastReceiver 和 contentprovider

7. Android 中 service 的实现方法只有 startservice。（**错**）

8. Android.jar 是一个标准的压缩包，其内容包含的是编译后的 class，包含了全部的 API。

9. `android:id="@id/tv_username"` 用作 widget （组件）属性是错误的。

10. Android 当中基本的所有的 UI 都是由（view）或者其子类实现的。

11. Android 的 res 目录用于存放源文件，即写有代码的以 java 为后缀的文件。（**错**）

12. Android 的 Service 类在调用时使用三个方法进行交互 `onCreate()、onStart()、onDestroy()`。

13. Android 开发时，切换到 DDMS 能找到模拟器中生成的数据库文件。

14. Android 系统提供了四种主要的数据存储方式：

::: tip

（1）文件存储；

（2）SharedPreferences；

（3）SQLite 数据库；

（4）ContentProvider。

:::

15. Android 项目的 gen 目录存放 ADT 自动生成的 Java 文件，这个目录一般不能改动，否则会出错。

16. Android 项目中，bin 目录用来存放原 apk 等格式的文件。

17. Android 项目中，读文件的基本步骤：

::: tip

（1）调用 `OpenFileInput()` 方法，传入需要读取数据的文件名，该方法将会返回一个文件输入流对象。

（2）调用 `Read()` 方法，读取文件的内容。

（3）调用 `Close()` 方法，关闭文件输入流。

:::

18. Android 虚拟设备的缩写是 AVD。

19. Android 中 Service 组件是 Android 的四大组件之一。Service 是一个没有用户界面的、在后台运行执行耗时操作的应用组件。

20. Android 中常用的布局是 FrameLayout，RelativeLayout，LinenarLayout，AbsoluteLayout、TableLayout 和 GridLayout。

21. Button 的 Background 属性值设置为 "#f00" 时，它的背景显示红色。

22. ContentProvider 是 Android 提供的一种将私有数据共享给其他应用程序的方式，比如手机联系人共享。

23. Intent 启动一个 Service 组件时，可以调用 `startService()` 方法。

24. `onClick()` 方法在 activity 被暂停或收回 CPU 和其他资源时调用，该方法用于保存活动状态的，也是对运行时数据的现场保护。（**错**）

25. `onCreate()` 函数实现 Activity 初始化工作。

26. res/raw 目录这里的文件是原封不动的存储到设备上不会转换为二进制的格式。

27. service 的作用的是一段长的生命周期，没有用户界面的程序，可以保持应用在后台运行，而不会因为切换页面而消失。

28. SQLite 数据库操作中，把查询结果返回到一个 Cursor 类的实例中。

29. SQLite 支持的数据类型不包括 INTEGER。（**错**）

30. TextView 视图的 android:text 显示信息。

31. TextView 视图中，设置 android:autoLink 属性可以实现把文本转换为 web 超链接。

32. 安卓写文件的基本过程：

::: tip

（1）调用 `OpenFileOutput()` 方法，传入文件的名称和操作的模式，该方法将返回一个文件输出流。

（2）调用 `Write()` 方法，向该文件输出流写入数据。

（3）调用 `Close()` 方法，关闭文件输出流。

:::

33. 抽象类用于实现事件监听器是不正确的。

34. 当应用程序中某广播在 AndroidMainifest.xml 进行注册后，即使该应用程序关闭后，也可以接受操作系统发出的广播信息。

35. 每个 Android 都自带一个选项菜单（Optionsmenus），而且 Activity 只能有一个选项菜单。

36. 某安卓应用中，能显示手机收到短信的通知是使用了 Android 的 Broadcast 传输机制。

37. 数据适配器主要用来把数据绑定到组件上。

38. 退出 Activity 正确的方法是 `finish()`。

39. 微信开发的消息收发可用加密也可以不加密。

40. 一个 Service 不是一个可视化的界面或者看成是控件的容器。

41. 在 AndroidManifest.xml 文件中注册一个名为“Details”查看详情的 activity 视图，代码是：

```xml
<activity android:name="Details" android:label="查看详情"></activity>
```

42. 在 AndroidManifest.xml 文件中注册一个名为“my.MusicService”的 Service 服务，代码是：

```xml
<activity android:name="my.MusicService">
    <intent-filter>
        <action android:name="my.MusicService" />
    </intent-filter>
</activity>
```

43. 在 Android 开发项目中，layout 目录存放布局文件。

44. 在 Android 网络应用中，只能使用 Get 通信，不能使用 Post 通信。（**错**）

45. 在 Android 项目中，bin 文件夹默认输出 apk 文件。

46. 在 Android 项目中，drawable 目录适合存放图片资源。

47. 在 android 项目中，src 和 assets 目录的作用：

::: tip

（1）src 目录用来放置所有的逻辑代码，所有 java 文件都放在这里；

（2）assets 目录存放原始格式的文件，如音频、视频等文件，其中的资源不能被 R.java 索引。

:::

48. 在 Android 项目中，默认使用 sqlite 数据库系统。

49. 在 Android 中，自带有媒体播放的类，可以调用播放 mp3 等多媒体文件。

50. 在 SharedPreference 方式中存储信息是采用键值对的形式实现的，适合保存简单类型数据。

51. 在 SQLite 数据库操作中，把查询结果返回到一个 DataSet 类的实例中。（**错**）

52. 在数据库数据存储中，可以把加密后的信息保存在数据库中，提高安全性。

53. 在微信开发中，消息传输不能使用明文方式。（**错**）

54. Android 数据库操作：

（1）构造方法 `xueshengDbHelper（）`

```java
class xueshengDbHelper extends SQLiteOpenHelper{
    private static final String Creat_Table_Sql = "create table xuesheng(id integer, name text)";

    public MyDbHelper(Context context, String name, CursorFactory factory, int version){
        super(context, name, factory, version);
    }
}
```

（2） 重写 `onCreate()` 方法、创建表结构

```java
@Override
public void onCreate(SQLiteDatabase db){
    db.execSQL(Creat_Table_Sql);
}
```

（3）添加一个插入记录的 `xueshengInsert()` 方法

```java
private void xueshengInsert(String sql){
    getWritableDatabase().execSQL(sql);
}
```

（4）实现一个一个返回 Cursor 对象的查询方法 `xueshengQuery()`，返回整个 xuesheng 表的内容。

```java
private Cursor xueshengQuery(){
    Cursorcursor = getWritableDatabase().query("xuesheng", null, null, null, null, null, null);
    return cursor;
}
```

（5）实现一个一个返回 Cursor 对象的查询方法 `myQuerys()`，返回整个 xueshengInfo 表的内容

```java
private Cursor myQuerys(){
    Cursorcursor = getWritableDatabase().query("xueshengInfo", null, null, null, null, null, null);
    return cursor;
}
```

（6）添加一个删除记录的 `myDelete()` 方法

```java
private void myDelete(String sql){
    getWritableDatabase().execSQL(sql);
}
```
