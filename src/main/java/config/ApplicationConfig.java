package config;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;
import java.util.HashSet;
import java.util.Set;

///api

@ApplicationPath("api")
public class ApplicationConfig extends Application {


    //Control+O

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> recursos = new HashSet<>();

        recursos.add(services.TeacherServices.class);

        return recursos;
    }
}
