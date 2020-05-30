<%--
  Created by IntelliJ IDEA.
  User: LiHu
  Date: 2020/5/20
  Time: 16:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>登录 | ideaHub</title>
  <!-- Bootstrap core CSS -->
  <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom styles for this template -->
  <link rel="stylesheet" href="css/public.css" type="text/css"/>
  <link rel="stylesheet" href="css/login.css" type="text/css"/>
</head>
<body>
<div class="container">
  <form
          action="../src/blog/servlet/LoginServlet.java"
          method="post">

    <h1>
      <a href="./index.jsp">ideaHub</a>
    </h1>

    <label
            for="input"
            class="sr-only">用户名</label>

    <input
            type="text"
            id="input"
            class="form-control"
            placeholder="用户名"
            name="username"
            required>

    <label
            for="inputPassword"
            class="sr-only">密码</label>

    <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="密码"
            name="password"
            required>

    <button
            class="btn btn-lg btn-primary btn-block"
            type="submit"
            id="submit">登录</button>

    <a
            class="visitor"
            href="./index.jsp">访客登录</a>
  </form>
</div>

<div id="footer">
  <a target="_blank"
     href="https://github.com/Szkqwer/ideaHubFrontEnd">GitHub</a>
</div>
<!-- footer -->
</body>
</html>
