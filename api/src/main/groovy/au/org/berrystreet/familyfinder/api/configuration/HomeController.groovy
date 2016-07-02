package au.org.berrystreet.familyfinder.api.configuration

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

/**
 * Home redirection to swagger api documentation 
 */
@Controller
class HomeController {
    @RequestMapping(value = '/')
    public String index() { return 'redirect:swagger-ui.html' }
}