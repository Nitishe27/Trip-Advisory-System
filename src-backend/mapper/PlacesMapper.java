package net.java.tms.mapper;
import net.java.tms.dto.PlacesDto;
import net.java.tms.entity.Places;

public class PlacesMapper {
    public static PlacesDto maptoPlacesDto(Places places){ //It extracts data from the Places object and uses it to create a new PlacesDto object.
        return new PlacesDto(
                places.getId(),
                places.getLocation(),
                places.getHistorical(),
                places.getNature(),
                places.getAdventure(),
                places.getFood()
        );
    }

    public static Places maptoPlaces(PlacesDto placesDto){ //It extracts data from the PlacesDto object and uses it to create a new Places entity object.
        return new Places(
                placesDto.getId(),
                placesDto.getLocation(),
                placesDto.getHistorical(),
                placesDto.getNature(),
                placesDto.getAdventure(),
                placesDto.getFood()
        );
    }
}
