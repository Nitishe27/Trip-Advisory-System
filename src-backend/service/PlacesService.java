package net.java.tms.service;
import net.java.tms.dto.PlacesDto;

import java.util.List;

public interface PlacesService {
    PlacesDto createPlaces(PlacesDto placesDto);

    PlacesDto getPlacesById(int placesId);

    List<PlacesDto> getAllPlaces();

    PlacesDto updatePlaces(int placesId, PlacesDto updatePlaces);

    void deletePlaces(int placesId);
}
