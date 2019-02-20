开发前准备

1 要做原生应用了，而且是基于Android的，那还是需要我们安装一下JAVA的环境的

2 JAVA环境下载地址: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html

3 下载安装 FlutterSDK 、下载Flutter安装包，https://flutter.io/sdk-archive/#windows  https://flutter.io/setup-macos/

4 window安装在Flutter安装目录的flutter文件下找到flutter_console.bat，双击运行并启动flutter命令行，接下来，你就可以在Flutter命令行运行flutter命令了

5 环境变量
mac:  vim ~/.bash_profile  在打开的文件里增加一行代码: export PUB_HOSTED_URL=https://pub.flutter-io.cn,
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn  最后重新加载一下 source ~/.bash_profile

6 Flutter doctor  查看开发前是否有缺失的必要条件  会提示用brew来安装 那就最好使用brew来安装 一些缺少的依赖  里面会提醒你
  例如 Android Studio  Android SDK  devices

7 Android Studio的安装 安装完去Plugin的配置，搜索Flutter插件

8 安装Android证书 flutter doctor --android-licenses

9 缺少devices 安装AVD虚拟机
  1 打开Andorid Studio ，会出现下面的界面，我们选择第二项，新建Flutter项目。
  2 打开第二个窗口后，选择第一个选项Flutter Application
  3 系统就会自动为我们创建一个Flutter项目
  4 点击Android Studio中的上方菜单tool -AVD Manager选项
  5 出现新建菜单，选择Create Virtual Device.....,如果你一个虚拟机也没建过，这个选项在对话框的中间
  6 选择虚拟机类型 
  7 选择系统
  8 安装好后，点击开始按钮，运行虚拟机了

10 咱们前端共用的
  1 插件里面搜索flutter 安装插件 flutter插件安装好后 dart也就安装好了
  2 进入vscode  左下角 有no device, 说明还没有连接到虚拟机，点击这个选择运行的andiord 或者 ios
  然后进行第一个flutter app

11 必备知识：.dart
  1 Dart所有的东西都是对象， 即使是数字numbers、函数function、null也都是对象，所有的对象都继承自Object类。
  2 Dart 提供了顶级函数(如：main())
  3 没有初始化的变量都会被赋予默认值 null
  4 Dart 没有 public、private、protected 这些关键字，变量名以"_"开头意味着对它的 lib 是私有的。
  5 final的值只能被设定一次。const 是一个编译时的常量，可以通过 const 来创建常量值，var c=const[];，这里 c 还是一个变量，只是被赋值了一个常量值，它还是可以赋其它值。实例变量可以是 final，但不能是 const。
  6 类型： num， String， bool， List 等等
  dart本身也是为了前端而生成的，所以对前端还是挺友好的，学起来并不是困难，可能我接触的东西比较少

11 第一个flutter_app
  flutter create my_project 

  安装依赖 
  一般情况下在pubspec.yaml里面新添保存后直接安装
  可能会遇到一直安装的情况  这时候要清除flutter缓存
  flutter/bin/cache/lockfile 直接删除掉

12 打包
  1 项目根目录/android/app/src/main/AndroidManifest.xml
    这个文件主要用来配置APP的名称、图标和系统权限
    android:label="myflutter"   //设置APP名称
    android:icon="@mipmap/ic_launcher"  //配置APP图标路径
  2 生成 keystore
    keytool -genkey -v -keystore ~/key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias key。
  3 安卓根目录下创建 key.properties文件 
    storePassword=秘钥库密码 上面的密码
    keyPassword=KEY密码  上面创建的
    keyAlias=key
    storeFile=<E:/key.jks> // 生成的文件路径生成的.jks文件的路径

  4 修改Android对象 在/android/app/build.gradle
    def keystorePropertiesFile = rootProject.file("key.properties")
	  'def keystoreProperties = new Properties()'
	  'keystoreProperties.load(new FileInputStream(keystorePropertiesFile))'

  5 将buildTypes修改
    signingConfigs {
      release {
          keyAlias keystoreProperties['keyAlias']
          keyPassword keystoreProperties['keyPassword']
          storeFile file(keystoreProperties['storeFile'])
          storePassword keystoreProperties['storePassword']
      }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
        }
    }
  
  6 flutter build apk 打包






