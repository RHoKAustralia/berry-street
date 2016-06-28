package au.org.berrystreet.familyfinder.api.filter

import javax.servlet.*
import javax.servlet.http.HttpServletResponse

class ApiOriginFilter implements javax.servlet.Filter {

    @Override
    void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletResponse res = (HttpServletResponse) response
        res.addHeader('Access-Control-Allow-Origin', '*')
        res.addHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
        res.addHeader('Access-Control-Allow-Headers', 'Content-Type')
        chain.doFilter(request, response)
    }

    @Override
    void destroy() {
    }

    @Override
    void init(FilterConfig filterConfig) throws ServletException {
    }
}