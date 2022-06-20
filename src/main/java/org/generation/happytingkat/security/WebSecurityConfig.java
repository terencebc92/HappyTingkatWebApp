package org.generation.happytingkat.security;

import org.springframework.beans.factory.annotation.*;
import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.authentication.builders.*;
import org.springframework.security.config.annotation.web.builders.*;
import org.springframework.security.crypto.bcrypt.*;
import org.springframework.security.web.*;

import javax.sql.*;

@Configuration
public class WebSecurityConfig {


    @Autowired
    private DataSource dataSource;


    @Autowired
    public void configAuthentication(
                                      AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().passwordEncoder(new BCryptPasswordEncoder())
                .dataSource(dataSource)
                .usersByUsernameQuery("select username, password, enabled from users where username=?")
                .authoritiesByUsernameQuery("select username, role from users where username=?")
        ;
    }

    /*
    3) Using SecurityFilterChain method to customise the views based on auth. We need
    to configure which views need to login, which views do not require login.
     */
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        //Configuration on the security filter, we need to customise (need to do the
        // config our own based on the requirements)

        //CORS - disable cross-domain restriction for localhost development
        //csrf : Cross-Site Request Forgery
        http.csrf().disable();

        //Not using the Spring Security HttpSecurity default login page
        http.formLogin().loginPage("/login");

        //if user successfully login, user will be directed to the productform.html
        http.formLogin()
                .defaultSuccessUrl("/admin");

        //if user successfully logout, user will be directed to the index.html
        http.logout()
                .logoutSuccessUrl("/index");


        /*.antMatchers(......).permitAll() - tells Spring Security that these webpages
         do not need to have login services

        .antMatchers(.....).hasRole("ADMIN") - tells Spring Security that only user
        with ADMIN role will be able to access the productform.html

        logout method : configure logout functionality provided by Spring Security -
        ensure that the login session to be invalidated. Kill the session for us.

         */
        http.authorizeRequests()
                .antMatchers("/", "/products", "/aboutus").permitAll()
                .antMatchers("/admin/**").hasRole("ADMIN")    //ROLE_ADMIN
                .and()
                .formLogin()
                .loginPage("/login").permitAll()
                .and()
                .logout().permitAll();

        return http.build();
    }
}
