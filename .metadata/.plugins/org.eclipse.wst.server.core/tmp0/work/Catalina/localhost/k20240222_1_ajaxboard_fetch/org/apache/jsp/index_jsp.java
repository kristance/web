/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/9.0.84
 * Generated at: 2024-02-22 01:28:44 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(4);
    _jspx_dependants.put("jar:file:/C:/Users/tj/Desktop/web/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/k20240222_1_ajaxboard_fetch/WEB-INF/lib/jstl-1.2.jar!/META-INF/c.tld", Long.valueOf(1153352682000L));
    _jspx_dependants.put("jar:file:/C:/Users/tj/Desktop/web/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/k20240222_1_ajaxboard_fetch/WEB-INF/lib/jstl-1.2.jar!/META-INF/fn.tld", Long.valueOf(1153352682000L));
    _jspx_dependants.put("jar:file:/C:/Users/tj/Desktop/web/.metadata/.plugins/org.eclipse.wst.server.core/tmp0/wtpwebapps/k20240222_1_ajaxboard_fetch/WEB-INF/lib/jstl-1.2.jar!/META-INF/fmt.tld", Long.valueOf(1153352682000L));
    _jspx_dependants.put("/WEB-INF/lib/jstl-1.2.jar", Long.valueOf(1706684735222L));
  }

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    if (!javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      final java.lang.String _jspx_method = request.getMethod();
      if ("OPTIONS".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        return;
      }
      if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method)) {
        response.setHeader("Allow","GET, HEAD, POST, OPTIONS");
        response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSP들은 오직 GET, POST 또는 HEAD 메소드만을 허용합니다. Jasper는 OPTIONS 메소드 또한 허용합니다.");
        return;
      }
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!DOCTYPE html>\r\n");
      out.write("<html>\r\n");
      out.write("<head>\r\n");
      out.write("<meta charset=\"UTF-8\">\r\n");
      out.write("<title>javascript ajax</title>\r\n");
      out.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n");
      out.write("<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js\"></script>\r\n");
      out.write("<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\r\n");
      out.write("<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js\"></script>\r\n");
      out.write("<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css\">\r\n");
      out.write("\r\n");
      out.write("<!-- ajax 구현 js -->\r\n");
      out.write("<script type=\"text/javascript\" src=\"./js/ajaxboard.js\" defer=\"defer\"></script>\r\n");
      out.write("\r\n");
      out.write("</head>\r\n");
      out.write("<body>\r\n");
      out.write("\r\n");
      out.write("<!-- 회원 가입 양식 -->\r\n");
      out.write("<div class=\"container p-3\">\r\n");
      out.write("	<table class=\"table table-hover\">\r\n");
      out.write("<!--  -->	\r\n");
      out.write("		<tr class=\"table-primary\">\r\n");
      out.write("				<th class=\"align-middle text-center\" colspan=\"2\" style=\"font-size: 30px;\">\r\n");
      out.write("					회원가입\r\n");
      out.write("				</th>\r\n");
      out.write("		</tr>\r\n");
      out.write("<!--  -->		\r\n");
      out.write("		<tr>\r\n");
      out.write("		\r\n");
      out.write("			<th class=\"align-middle\" width=\"100px\">\r\n");
      out.write("				<label for=\"name\">이름</label>\r\n");
      out.write("			</th>\r\n");
      out.write("			<td width=\"500px\">\r\n");
      out.write("				<input \r\n");
      out.write("					id=\"name\"\r\n");
      out.write("					class=\"form-control form-control-sm\"\r\n");
      out.write("					type=\"text\"\r\n");
      out.write("					autocomplete=\"off\"\r\n");
      out.write("					placeholder=\"이름 입력\"\r\n");
      out.write("					style=\"width: 200px;\"\r\n");
      out.write("				/>\r\n");
      out.write("			</td>\r\n");
      out.write("					\r\n");
      out.write("		</tr>\r\n");
      out.write("<!--  -->\r\n");
      out.write("		<tr>\r\n");
      out.write("		\r\n");
      out.write("			<th class=\"align-middle\">\r\n");
      out.write("				<label for=\"age\">나이</label>\r\n");
      out.write("			</th>\r\n");
      out.write("			<td>\r\n");
      out.write("				<input \r\n");
      out.write("					id=\"age\"\r\n");
      out.write("					class=\"form-control form-control-sm\"\r\n");
      out.write("					type=\"text\"\r\n");
      out.write("					autocomplete=\"off\"\r\n");
      out.write("					placeholder=\"나이 입력\"\r\n");
      out.write("					style=\"width: 200px;\"\r\n");
      out.write("				/>\r\n");
      out.write("			</td>\r\n");
      out.write("					\r\n");
      out.write("		</tr>\r\n");
      out.write("<!--  -->\r\n");
      out.write("		<tr>\r\n");
      out.write("		\r\n");
      out.write("			<th class=\"align-middle\">\r\n");
      out.write("				성별\r\n");
      out.write("			</th>\r\n");
      out.write("			<td>\r\n");
      out.write("				<div class=\"d-flex justify-content-center\">\r\n");
      out.write("					<div class=\"btn-group\" data-toggle=\"buttons\">\r\n");
      out.write("						 <div class=\"form-check\">\r\n");
      out.write("						      <input type=\"radio\" class=\"form-check-input\" id=\"man\" name=\"gender\" value=\"남자\" checked>\r\n");
      out.write("						      <label class=\"form-check-label\" for=\"man\">남자</label>\r\n");
      out.write("					    </div>\r\n");
      out.write("					    &nbsp;&nbsp;&nbsp;\r\n");
      out.write("					    <div class=\"form-check\">\r\n");
      out.write("						      <input type=\"radio\" class=\"form-check-input\" id=\"woman\" name=\"gender\" value=\"여자\">\r\n");
      out.write("						      <label class=\"form-check-label\" for=\"woman\">여자</label>\r\n");
      out.write("					    </div>\r\n");
      out.write("					</div>\r\n");
      out.write("				\r\n");
      out.write("				</div>\r\n");
      out.write("			</td>\r\n");
      out.write("					\r\n");
      out.write("		</tr>\r\n");
      out.write("<!--  -->\r\n");
      out.write("		<tr>\r\n");
      out.write("		\r\n");
      out.write("			<th class=\"align-middle\">\r\n");
      out.write("				<label for=\"email\">이메일</label>\r\n");
      out.write("			</th>\r\n");
      out.write("			<td>\r\n");
      out.write("				<input \r\n");
      out.write("					id=\"email\"\r\n");
      out.write("					class=\"form-control form-control-sm\"\r\n");
      out.write("					type=\"text\"\r\n");
      out.write("					autocomplete=\"off\"\r\n");
      out.write("					placeholder=\"이메일 입력\"\r\n");
      out.write("				/>\r\n");
      out.write("			</td>\r\n");
      out.write("					\r\n");
      out.write("		</tr>\r\n");
      out.write("<!--  -->		\r\n");
      out.write("		<tr class=\"table-secondary\">\r\n");
      out.write("			<th class=\"align-middle text-end\" colspan=\"2\"\">\r\n");
      out.write("				<input \r\n");
      out.write("				class=\"btn btn-outline-primary btn-sm\" \r\n");
      out.write("				type=\"button\" \r\n");
      out.write("				value=\"입력하기\" \r\n");
      out.write("				onclick=\"insertFunction()\"/>\r\n");
      out.write("			</th>\r\n");
      out.write("		</tr>		\r\n");
      out.write("	\r\n");
      out.write("	</table>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- 회원 출력 양식 -->\r\n");
      out.write("<div class=\"container p-3\">\r\n");
      out.write("	<div class=\"form-group row d-flex justify-content-end mb-3\">\r\n");
      out.write("		<div class=\"col-sm-3\">\r\n");
      out.write("			<input \r\n");
      out.write("				id=\"username\" \r\n");
      out.write("				class=\"form-control form-control-sm\" \r\n");
      out.write("				type=\"text\" \r\n");
      out.write("				autocomplete=\"off\" \r\n");
      out.write("				onkeyup=\"searchFunction()\"/>\r\n");
      out.write("		</div>\r\n");
      out.write("		<div class=\"col-sm-1\">\r\n");
      out.write("			<input \r\n");
      out.write("				class=\"btn btn-outline-primary btn-sm\" \r\n");
      out.write("				type=\"button\" \r\n");
      out.write("				value=\"검색\" \r\n");
      out.write("				onclick=\"searchFunction()\"/>\r\n");
      out.write("		</div>\r\n");
      out.write("	</div>\r\n");
      out.write("\r\n");
      out.write("	<table class=\"table table-hover\">\r\n");
      out.write("		<thead>\r\n");
      out.write("			<tr class=\"table-info\">\r\n");
      out.write("				<th class=\"align-middle text-center\">번호</th>\r\n");
      out.write("				<th class=\"align-middle text-center\">이름</th>\r\n");
      out.write("				<th class=\"align-middle text-center\">나이</th>\r\n");
      out.write("				<th class=\"align-middle text-center\">성별</th>\r\n");
      out.write("				<th class=\"align-middle text-center\">이메일</th>\r\n");
      out.write("			</tr>\r\n");
      out.write("		</thead>\r\n");
      out.write("		<tbody id=\"ajaxTable\">\r\n");
      out.write("			<tr></tr>\r\n");
      out.write("		</tbody>\r\n");
      out.write("	</table>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("</body>\r\n");
      out.write("</html>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
