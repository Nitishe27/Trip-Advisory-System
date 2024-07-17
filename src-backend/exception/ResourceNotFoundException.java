package net.java.tms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{ //when bookingsId not found in the databasae so this exception will be throwm
    public ResourceNotFoundException(String message){
        super(message);
    }
}
