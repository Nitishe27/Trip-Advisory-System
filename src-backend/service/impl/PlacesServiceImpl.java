package net.java.tms.service.impl;
import lombok.AllArgsConstructor;
import net.java.tms.dto.PlacesDto;
import net.java.tms.entity.Places;
import net.java.tms.exception.ResourceNotFoundException;
import net.java.tms.mapper.PlacesMapper;
import net.java.tms.repository.PlacesRepository;
import net.java.tms.service.PlacesService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PlacesServiceImpl implements PlacesService {
    private PlacesRepository placesRepository;
    @Override
    public PlacesDto createPlaces(PlacesDto placesDto) {
        Places places= PlacesMapper.maptoPlaces(placesDto);
        Places savedPlaces=placesRepository.save(places);
        return PlacesMapper.maptoPlacesDto(savedPlaces);
    }

    @Override
    public PlacesDto getPlacesById(int placesId) {
        Places places= placesRepository.findById(placesId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Location doesn't exist with the given ID: "+placesId));

        return PlacesMapper.maptoPlacesDto(places);
    }

    @Override
    public List<PlacesDto> getAllPlaces() {
        List<Places> places= placesRepository.findAll();
        return places.stream().map((places1) ->PlacesMapper.maptoPlacesDto(places1))
                .collect(Collectors.toList());
    }

    @Override
    public PlacesDto updatePlaces(int placesId, PlacesDto updatePlaces) {

        Places places=   placesRepository.findById(placesId).orElseThrow(
                ()->new ResourceNotFoundException("Place doesn't exist with the given ID: "+placesId)
        );


        places.setLocation(updatePlaces.getLocation());
        places.setHistorical(updatePlaces.getHistorical());
        places.setNature(updatePlaces.getNature());
        places.setAdventure(updatePlaces.getAdventure());
        places.setFood(updatePlaces.getFood());


        Places updatedPlacesObj= placesRepository.save(places);//Saving all the updated information

        return PlacesMapper.maptoPlacesDto(updatedPlacesObj);//passing the object to PlacesDto
    }

    @Override
    public void deletePlaces(int placesId) {
        Places places=placesRepository.findById(placesId).orElseThrow(
                ()-> new ResourceNotFoundException("Places doesn't exist with the given ID: "+placesId)
        );
        placesRepository.deleteById(placesId);
    }


}
